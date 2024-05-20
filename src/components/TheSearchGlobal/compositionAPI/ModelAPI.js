import {
  computed,
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
  maxItems = 5,
}) {
  const itemsSearch = ref([]);
  const model = ref("");
  let idx = undefined;

  const {
    modelLanguage,
  } = LanguagesAPI();

  const isTooFewCharacters = computed(() => {
    return !model.value || model.value.length < 3;
  });

  const setDefaultItemsSearch = () => {
    itemsSearch.value = [];
  };

  const search = query => {
    let results = idx.search(query);
    if (maxItems) {
      results = results.slice(0, maxItems);
    }

    return results.map(result => {
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

            const beforeMatch = doc[field].substring(start, pos[0]);
            const match = doc[field].substring(pos[0], pos[0] + pos[1]);
            const afterMatch = doc[field].substring(pos[0] + pos[1], end);

            let snippet = `${ beforeMatch }<span class="a_search_highlight">${ match }</span>${ afterMatch }`;
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

  const changeModel = _model => {
    model.value = _model;
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

  const startSearch = () => {
    if (isTooFewCharacters.value) {
      setDefaultItemsSearch();
      openDropdown();
      return;
    }

    itemsSearch.value = search(model.value);
    console.log("itemsSearch.value", itemsSearch.value);
    openDropdown();
  };

  return {
    changeModel,
    initIndexes,
    isTooFewCharacters,
    itemsSearch,
    model,
    modelLanguage,
    setDefaultItemsSearch,
    startSearch,
  };
}
