"use strict";(self.webpackChunkbitv=self.webpackChunkbitv||[]).push([[388],{2977:(e,t,a)=>{a.d(t,{A:()=>g});var r=a(6365);const n={key:0,class:"a_list_inline a_list_tags a_mb_0"},l={class:"a_list_inline_item"};var i=a(3297),u=a(7515),s=a(7181);const o={name:"StepTagsItem",components:{AElement:i.A},props:{isButton:{type:Boolean,required:!0},tag:{type:String,required:!0}},setup(e){const{appliedModel:t,toggleTagInModelTags:a}=(0,u.A)(),{isBtnActive:n}=function(e,{appliedModel:t=(0,r.KR)({})}){const a=(0,r.lW)(e,"isButton"),n=(0,r.lW)(e,"tag");return{isBtnActive:(0,r.EW)((()=>!!a.value&&-1!==t.value?.tagPresence.indexOf(n.value)))}}(e,{appliedModel:t}),{classTagLocal:l}=function(e){const t=(0,r.lW)(e,"isButton");return{classTagLocal:(0,r.EW)((()=>t.value?"a_btn_small":"a_border a_px_2 a_py_1 a_d_inline_block a_fs_7"))}}(e),{typeTag:i}=function(e){const t=(0,r.lW)(e,"isButton");return{typeTag:(0,r.EW)((()=>t.value?"button":"text"))}}(e),{eventsLocal:o}=function(e,{toggleTagInModelTags:t=(()=>{})}){const a=(0,r.lW)(e,"isButton"),n=(0,r.lW)(e,"tag");return{eventsLocal:(0,r.EW)((()=>a.value?{click:()=>t({tag:n.value})}:{}))}}(e,{toggleTagInModelTags:a}),{tagText:c,tagTextDescription:p}=function(e){const t=(0,r.lW)(e,"tag");return{tagText:(0,r.EW)((()=>(0,s.xl)({tag:t.value}))),tagTextDescription:(0,r.EW)((()=>(0,s.xv)({tag:t.value})))}}(e);return{classTagLocal:l,eventsLocal:o,isBtnActive:n,tagText:c,tagTextDescription:p,typeTag:i}}};var c=a(6262);const p={name:"StepTags",components:{StepTagsItem:(0,c.A)(o,[["render",function(e,t){const a=(0,r.g2)("a-element");return(0,r.uX)(),(0,r.CE)("li",l,[(0,r.bF)(a,(0,r.v6)({class:["a_pill_rounded",e.classTagLocal],type:e.typeTag,text:e.tagText,title:e.tagTextDescription,"text-screen-reader":e.tagTextDescription,"text-aria-hidden":!0,"is-switch":e.isButton,"model-switch":e.isBtnActive},(0,r.Tb)(e.eventsLocal)),null,16,["type","class","text","title","text-screen-reader","is-switch","model-switch"])])}]])},props:{isButton:{type:Boolean,required:!0},tags:{type:Array,required:!1,default:()=>[]}}},g=(0,c.A)(p,[["render",function(e,t){const a=(0,r.g2)("step-tags-item");return e.tags.length?((0,r.uX)(),(0,r.CE)("ul",n,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.tags,(t=>((0,r.uX)(),(0,r.Wv)(a,{key:t,tag:t,"is-button":e.isButton},null,8,["tag","is-button"])))),128))])):(0,r.Q3)("v-if",!0)}]])},8741:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var r=a(6365);const n={key:0},l={key:0,class:"a_d_block"},i=["innerHTML"],u={key:1};var s=a(8330),o=a(7197);const c=["ariaExpanded"],p={class:"a_ml_5"};var g=a(3297),d=a(2543),h=a(7181),v=a(7985);const m={name:"PageStepRubric",components:{AElement:g.A,ATranslation:o.A},props:{currentStep:{type:Object,required:!0},isRubricOpen:{type:Boolean,required:!0},rubricKey:{type:String,required:!0,validator:e=>-1!==["whatChecked","whyChecked","howChecked","sources","classification","questions"].indexOf(e)},searchFromUrl:{type:String,required:!1,default:""}},setup(e){const t=(0,r.lW)(e,"isRubricOpen"),{headerKey:a}=function(e){const t=(0,r.lW)(e,"rubricKey");return{headerKey:(0,r.EW)((()=>`_${(0,d.toUpper)((0,d.snakeCase)(t.value))}_`))}}(e),{htmlElements:n}=function(e,{headerKey:t=(0,r.EW)((()=>""))}){const a=(0,r.lW)(e,"currentStep"),n=(0,r.lW)(e,"rubricKey"),l=(0,r.EW)((()=>a.value[n.value]));return{htmlElements:(0,r.EW)((()=>{const e=[];return(0,d.times)(l.value,(r=>{const n=r+1;e.push((0,h.kt)({stepKey:a.value.key,rubricKey:t.value,number:n}))})),e}))}}(e,{headerKey:a}),{iconToggleRubric:l,initIsRubricOpenLocal:i,isRubricOpenLocal:u,toggleRubric:s}=function(e){const t=(0,r.lW)(e,"isRubricOpen"),a=(0,r.KR)(!1);return{iconToggleRubric:(0,r.EW)((()=>a.value?"DashCircle":"PlusCircle")),initIsRubricOpenLocal:()=>{a.value=t.value},isRubricOpenLocal:a,toggleRubric:()=>{a.value=!a.value}}}(e),{elementsTranslatedAndHighlighted:o}=function(e,{htmlElements:t=(0,r.EW)((()=>[]))}){const a=(0,r.lW)(e,"isRubricOpen"),n=(0,r.lW)(e,"searchFromUrl"),l=(0,r.EW)((()=>{const e=[];return(0,d.forEach)(t.value,(t=>{e.push({key:t,htmlTranslation:(0,v.a1)({placeholder:t})})})),e}));return{elementsTranslatedAndHighlighted:(0,r.EW)((()=>{if(!a.value||!n.value)return l.value;const e=(0,d.cloneDeep)(l.value);return(0,d.forEach)(e,(e=>{e.htmlTranslation=(0,h.Hb)(e.htmlTranslation,n.value)})),e}))}}(e,{htmlElements:n});return i(),(0,r.wB)(t,(()=>{i()})),{elementsTranslatedAndHighlighted:o,headerKey:a,iconToggleRubric:l,isRubricOpenLocal:u,toggleRubric:s}}};var b=a(6262);const y=(0,b.A)(m,[["render",function(e,t){const a=(0,r.g2)("a-element"),n=(0,r.g2)("a-translation");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("h2",{class:"cursor_pointer a_d_flex a_align_items_center",ariaExpanded:e.isRubricOpenLocal,tabindex:"0",onClick:t[0]||(t[0]=(...t)=>e.toggleRubric&&e.toggleRubric(...t))},[(0,r.bF)(a,{class:"a_mr_2",type:"text","icon-left":e.iconToggleRubric,"icon-class":"a_width_5 a_height_auto",tag:"span"},null,8,["icon-left"]),(0,r.bF)(n,{tag:"span",text:e.headerKey},null,8,["text"])],8,c),(0,r.bo)((0,r.Lk)("div",p,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.elementsTranslatedAndHighlighted,(e=>((0,r.uX)(),(0,r.Wv)(n,{key:e.key,tag:"div","safe-html":e.htmlTranslation},null,8,["safe-html"])))),128))],512),[[r.aG,e.isRubricOpenLocal]])])}]]);var f=a(2977),T=a(5220),E=a(4236),k=a(4841),_=a(6829);const S={name:"PageStep",components:{APageTabTitle:s.A,ATranslation:o.A,PageStepRubric:y,StepTags:f.A},setup(){const{initRubricsOpenFromUrl:e,isSearchInTitle:t,rubricsOpen:a,searchFromUrl:n}=function(){const e=(0,T.lq)(),t=(0,T.rd)(),a=(0,r.KR)({}),n=(0,r.KR)(!0),l=(0,r.KR)(""),i=(0,r.KR)(!1),u=(0,r.EW)((()=>e.query.rubrics?(0,d.isString)(e.query.rubrics)?[e.query.rubrics]:e.query.rubrics:[])),s=()=>{(0,d.forEach)(_.A,((e,t)=>{a.value[t]=!(!u.value.length||-1===u.value.indexOf(t))})),l.value=e.query.search||"",i.value=!!e.query.title,n.value=!1,setTimeout((()=>{t.replace({query:{}}),setTimeout((()=>{n.value=!0}))}))};return(0,r.wB)((()=>e.query),(()=>{n.value&&s()}),{deep:!0}),{initRubricsOpenFromUrl:s,isSearchInTitle:i,rubricsOpen:a,searchFromUrl:l}}(),{currentStep:l,hasStep:i,step:u}=function(){const e=(0,T.lq)().params.step,t=(0,r.EW)((()=>E.A[e])),a=(0,r.EW)((()=>!!t.value));return{currentStep:t,hasStep:a,step:e}}(),{headerStep:s,headerTextWithSearch:o,pageTitle:c}=function({currentStep:e=(0,r.EW)((()=>({}))),isSearchInTitle:t=(0,r.KR)(!1),searchFromUrl:a=(0,r.KR)(""),step:n=""}){const{filterSearchHighlight:l}=(0,k.A)(),i=(0,r.EW)((()=>{if(n)return(0,v.a1)({placeholder:"_TEXT_STEP_{{step}}_",extra:{step:n}})})),u=(0,r.EW)((()=>{if(e.value?.key)return(0,v.a1)({placeholder:(0,h.UM)({stepKey:e.value.key})})})),s=(0,r.EW)((()=>t.value&&a.value?l(u.value,{searchModel:a.value}):u.value)),o=(0,r.EW)((()=>{let e="";return i.value&&(e=`${i.value} `),e+=u.value,e}));return{headerStep:i,headerTextWithSearch:s,pageTitle:o}}({currentStep:l,isSearchInTitle:t,searchFromUrl:n,step:u});return e(),{currentStep:l,hasStep:i,headerStep:s,headerTextWithSearch:o,pageTitle:c,rubricsOpen:a,searchFromUrl:n}}},W=(0,b.A)(S,[["render",function(e,t){const a=(0,r.g2)("a-page-tab-title"),s=(0,r.g2)("a-translation"),o=(0,r.g2)("step-tags"),c=(0,r.g2)("page-step-rubric");return e.hasStep?((0,r.uX)(),(0,r.CE)("div",n,[(0,r.bF)(a,{title:e.pageTitle},null,8,["title"]),(0,r.Lk)("h1",null,[e.headerStep?((0,r.uX)(),(0,r.CE)("span",l,(0,r.v_)(e.headerStep),1)):(0,r.Q3)("v-if",!0),(0,r.Lk)("span",{innerHTML:e.headerTextWithSearch},null,8,i)]),(0,r.bF)(s,{tag:"h2",text:"_STEP_TAGS_"}),(0,r.bF)(o,{"is-button":!1,tags:e.currentStep.tags},null,8,["tags"]),e.currentStep.whatChecked?((0,r.uX)(),(0,r.Wv)(c,{key:0,"current-step":e.currentStep,"is-rubric-open":e.rubricsOpen.whatChecked,"search-from-url":e.searchFromUrl,"rubric-key":"whatChecked"},null,8,["current-step","is-rubric-open","search-from-url"])):(0,r.Q3)("v-if",!0),e.currentStep.whyChecked?((0,r.uX)(),(0,r.Wv)(c,{key:1,"current-step":e.currentStep,"is-rubric-open":e.rubricsOpen.whyChecked,"search-from-url":e.searchFromUrl,"rubric-key":"whyChecked"},null,8,["current-step","is-rubric-open","search-from-url"])):(0,r.Q3)("v-if",!0),e.currentStep.howChecked?((0,r.uX)(),(0,r.Wv)(c,{key:2,"current-step":e.currentStep,"is-rubric-open":e.rubricsOpen.howChecked,"search-from-url":e.searchFromUrl,"rubric-key":"howChecked"},null,8,["current-step","is-rubric-open","search-from-url"])):(0,r.Q3)("v-if",!0),e.currentStep.sources?((0,r.uX)(),(0,r.Wv)(c,{key:3,"current-step":e.currentStep,"is-rubric-open":e.rubricsOpen.sources,"search-from-url":e.searchFromUrl,"rubric-key":"sources"},null,8,["current-step","is-rubric-open","search-from-url"])):(0,r.Q3)("v-if",!0),e.currentStep.classification?((0,r.uX)(),(0,r.Wv)(c,{key:4,"current-step":e.currentStep,"is-rubric-open":e.rubricsOpen.classification,"search-from-url":e.searchFromUrl,"rubric-key":"classification"},null,8,["current-step","is-rubric-open","search-from-url"])):(0,r.Q3)("v-if",!0),e.currentStep.questions?((0,r.uX)(),(0,r.Wv)(c,{key:5,"current-step":e.currentStep,"is-rubric-open":e.rubricsOpen.questions,"search-from-url":e.searchFromUrl,"rubric-key":"questions"},null,8,["current-step","is-rubric-open","search-from-url"])):(0,r.Q3)("v-if",!0)])):((0,r.uX)(),(0,r.CE)("div",u,[(0,r.bF)(s,{tag:"h1",text:"Error"})]))}]])},7515:(e,t,a)=>{a.d(t,{A:()=>g});var r=a(6365),n=a(5220),l=a(4236);const i=[{tag:"use-component",group:"use"},{tag:"use-page",group:"use"},{tag:"use-site",group:"use"},{tag:"use-specific",group:"use"},{tag:"main-video",group:"main"},{tag:"main-audio",group:"main"},{tag:"main-text",group:"main"},{tag:"main-link",group:"main"},{tag:"main-button",group:"main"},{tag:"main-image",group:"main"},{tag:"main-form",group:"main"},{tag:"main-table",group:"main"},{tag:"main-subtitles",group:"main"},{tag:"main-focus",group:"main"},{tag:"main-menu",group:"main"},{tag:"main-browser",group:"main"},{tag:"additional-real-time-communication",group:"additional"},{tag:"additional-user-interface",group:"additional"},{tag:"additional-html-standard",group:"additional"},{tag:"additional-html-semantic",group:"additional"},{tag:"additional-keyboard",group:"additional"},{tag:"additional-screen-reader",group:"additional"},{tag:"additional-alternative-text",group:"additional"},{tag:"additional-security",group:"additional"},{tag:"additional-compatibility",group:"additional"},{tag:"additional-speed",group:"additional"},{tag:"additional-functionality",group:"additional"},{tag:"additional-requirements",group:"additional"},{tag:"additional-responsive",group:"additional"},{tag:"additional-color",group:"additional"},{tag:"additional-documentation",group:"additional"},{tag:"additional-support",group:"additional"},{tag:"additional-expected-behavior",group:"additional"}];var u=a(7181),s=a(7985),o=a(2543);const c=(0,r.KR)({group:[],steps:[],tagPresence:[],tagAbsence:[]}),p=(0,r.KR)({group:[],steps:[],tagPresence:[],tagAbsence:[]});function g({dataSteps:e=(0,r.EW)((()=>[]))}={}){const t=(0,n.lq)(),a=(0,n.rd)(),g=(0,r.KR)({name:""}),d=(0,r.KR)({name:""}),h=(0,r.EW)((()=>{const e={};return(0,o.forEach)(c.value,((t,a)=>{t?.length&&(e[a]=t)})),g.value.name&&(e.name=g.value.name),e})),v=(0,r.EW)((()=>{const e={},t=[];return(0,o.forEach)(l.A,(a=>{if(e[a.group])return;const r=(0,u.fG)({group:a.group});t.push({label:(0,s.a1)({placeholder:r}),value:a.group}),e[a.group]=!0})),t})),m=(0,r.EW)((()=>{const e=(0,o.cloneDeep)(i);return(0,o.forEach)(e,(e=>{const t=(0,u.xl)({tag:e.tag}),a=(0,s.a1)({placeholder:t}),r=(0,u.xv)({tag:e.tag}),n=(0,s.a1)({placeholder:r});e.label=`${a} (${n})`})),e})),b=({group:e})=>{const t=(0,u.ir)({group:e});return(0,s.a1)({placeholder:t})},y=(0,r.EW)((()=>[{type:"multiselect",id:"group",label:"_STEP_GROUP_",alwaysVisible:!0,deselectable:!0,search:!0,data:v.value,keyLabel:"label",keyId:"value"},{type:"multiselect",id:"tagPresence",label:"_TAG_PRESENCE_FILTER_",alwaysVisible:!0,search:!0,data:m.value,keyLabel:"label",keyId:"tag",keyGroup:"group",sortOrder:"asc",sortOrderGroup:"desc",keyGroupCallback:b},{type:"multiselect",id:"tagAbsence",label:"_TAG_ABSENCE_FILTER_",alwaysVisible:!0,search:!0,data:m.value,keyLabel:"label",keyId:"tag",keyGroup:"group",sortOrder:"asc",sortOrderGroup:"desc",keyGroupCallback:b},{type:"multiselect",id:"steps",label:"_STEPS_",alwaysVisible:!0,deselectable:!0,search:!0,data:e.value,keyLabelCallback:({item:e})=>`${e.step} ${e.name}`,keyId:"step"}])),f=(0,r.EW)((()=>(0,o.keyBy)(v.value,"value"))),T=(0,r.EW)((()=>(0,o.keyBy)(m.value,"tag"))),E=(0,r.EW)((()=>(0,o.keyBy)(e.value,"step"))),k=(0,r.EW)((()=>({group:f.value,tagPresence:T.value,tagAbsence:T.value,steps:E.value}))),_=()=>{a.push({query:h.value})},S=(0,r.EW)((()=>(0,o.toLower)(d.value.name||""))),W=(0,r.EW)((()=>S.value||c.value.group?.length||c.value.steps?.length||c.value.tagPresence?.length||c.value.tagAbsence?.length?(0,o.filter)(e.value,(e=>(e=>!(S.value&&-1===(0,o.toLower)(`${e.name}`).indexOf(S.value)||c.value.group?.length&&-1===c.value.group.indexOf(e.groupId)||c.value.steps?.length&&-1===c.value.steps.indexOf(e.step)||c.value.tagPresence?.length&&0!==(0,o.difference)(c.value.tagPresence,e.tags).length||c.value.tagAbsence?.length&&0!==(0,o.intersection)(c.value.tagAbsence,e.tags).length))(e))):e.value));return{appliedModel:c,dataStepsFiltered:W,filterMain:{type:"text",id:"name",label:"_STEP_NAME_"},filters:y,mainModel:g,mainModelApplied:d,setModelEmpty:()=>{c.value={group:[],steps:[],tagPresence:[],tagAbsence:[]},p.value={group:[],steps:[],tagPresence:[],tagAbsence:[]}},setModelFromUrl:()=>{const e=(0,o.cloneDeep)(t.query);e.name&&(g.value.name=e.name,d.value.name=e.name,delete e.name),(0,o.forEach)(y.value,(t=>{e[t.id]?.length&&(c.value[t.id]=(({filter:e,currentQuery:t})=>{const a=k.value[e.id];return(0,o.filter)(t,(e=>a[e]))})({filter:t,currentQuery:e[t.id]}))})),p.value=(0,o.cloneDeep)(c.value),_()},toggleTagInModelTags:({tag:e})=>{const t=c.value.tagPresence.indexOf(e);-1===t?c.value.tagPresence.push(e):c.value.tagPresence.splice(t,1),p.value.tagPresence=(0,o.cloneDeep)(c.value.tagPresence)},unappliedModel:p,updateAppliedModel:e=>{c.value=e,d.value.name=g.value.name,_()},updateMainModel:e=>{g.value=e},updateUnappliedModel:e=>{p.value=e}}}}}]);
//# sourceMappingURL=chunk.388.76bdc11ef5d6f98ea824.js.map