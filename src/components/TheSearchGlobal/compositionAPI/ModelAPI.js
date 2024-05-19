import {
  ref,
} from "vue";

import LanguagesAPI from "../../TheNavbar/compositionAPI/LanguagesAPI";

import translationIndexes from "../../../i18n/searchIndexes/index";

const lunr = require("lunr");
require("lunr-languages/lunr.stemmer.support")(lunr);
require("lunr-languages/lunr.de")(lunr);
require("lunr-languages/lunr.ru")(lunr);

export default function ModelAPI({
  openDropdown = () => {},
}) {
  const itemsSearch = ref([]);
  const model = ref("");
  let idx = undefined;
  let timer = undefined;

  const {
    modelLanguage,
  } = LanguagesAPI();

  const setDefaultItemsSearch = () => {
    itemsSearch.value = [];
  };

  const search = query => {
    const results = idx.search(query);
    return results.slice(0, 5).map(result => {
      const doc = translationIndexes[modelLanguage.value].find(d => d.id === result.ref);
      const matches = {};

      Object.keys(result.matchData.metadata).forEach(term => {
        Object.keys(result.matchData.metadata[term]).forEach(field => {
          if (!matches[field]) {
            matches[field] = []; 
          }
          result.matchData.metadata[term][field].position.forEach(pos => {
            const contextRadius = 20;
            const start = Math.max(pos[0] - contextRadius, 0);
            const end = Math.min(pos[0] + pos[1] + contextRadius, doc[field].length);

            let snippet = doc[field].substring(start, end);
            if (start > 0) {
              snippet = "..." + snippet; 
            }
            if (end < doc[field].length) {
              snippet = snippet + "..."; 
            }

            matches[field].push(snippet);
          });
        });
      });

      return {
        ref: result.ref,
        score: result.score,
        matches: matches
      };
    });
  };

  const searchLunr = () => {
    if (!model.value || model.value.length < 3) {
      setDefaultItemsSearch();
      return;
    }

    itemsSearch.value = search(model.value);
    console.log("itemsSearch.value", itemsSearch.value);
    openDropdown();
  };

  const changeModel = _model => {
    model.value = _model;
    clearTimeout(timer);

    timer = setTimeout(() => {
      searchLunr();
    }, 300);
  };

  const initIndexes = () => {
    idx = lunr(function() {
      this.use(lunr[modelLanguage.value]);

      this.ref("id");
      this.field("title");
      this.field("whatChecked");
      this.field("whyChecked");
      this.field("howChecked");
      this.field("sources");
      this.field("classification");
      this.field("questions");

      this.metadataWhitelist = ["position"];

      translationIndexes[modelLanguage.value].forEach(function(doc) {
        this.add(doc);
      }, this);
    });
  };

  return {
    changeModel,
    initIndexes,
    itemsSearch,
    model,
    modelLanguage,
    setDefaultItemsSearch,
  };
}
