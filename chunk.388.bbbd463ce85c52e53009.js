"use strict";(self.webpackChunkBITV=self.webpackChunkBITV||[]).push([[388],{7803:(e,c,s)=>{s.r(c),s.d(c,{default:()=>b});var t=s(6365);const h={key:0},i={key:0,class:"a_d_block"},o={key:1};var a=s(8330),n=s(7197);const u=["ariaExpanded"],k={class:"a_ml_5"};var r=s(3297),d=s(2543);function _({stepKey:e}){return`_STEP_${e}_NAME_`}const C={name:"PageStepRubric",components:{AElement:r.A,ATranslation:n.A},props:{currentStep:{type:Object,required:!0},rubricKey:{type:String,required:!0,validator:e=>-1!==["whatChecked","whyChecked","howChecked","sources","classification","questions"].indexOf(e)}},setup(e){const{headerKey:c}=function(e){const c=(0,t.lW)(e,"rubricKey");return{headerKey:(0,t.EW)((()=>`_${(0,d.toUpper)((0,d.snakeCase)(c.value))}_`))}}(e),{htmlElements:s}=function(e,{headerKey:c=(0,t.EW)((()=>""))}){const s=(0,t.lW)(e,"currentStep"),h=(0,t.lW)(e,"rubricKey"),i=(0,t.EW)((()=>s.value[h.value])),o=(0,t.EW)((()=>{const e=[];return(0,d.times)(i.value,(t=>{const h=t+1;e.push(function({stepKey:e,rubricKey:c,number:s}){return`_STEP_${e}${c}${s}_`}({stepKey:s.value.key,rubricKey:c.value,number:h}))})),e}));return{htmlElements:o}}(e,{headerKey:c}),{iconToggleRubric:h,isRubricOpen:i,toggleRubric:o}=function(){const e=(0,t.KR)(!1);return{iconToggleRubric:(0,t.EW)((()=>e.value?"DashCircle":"PlusCircle")),isRubricOpen:e,toggleRubric:()=>{e.value=!e.value}}}();return{headerKey:c,htmlElements:s,iconToggleRubric:h,isRubricOpen:i,toggleRubric:o}}};var w=s(6262);const l=(0,w.A)(C,[["render",function(e,c){const s=(0,t.g2)("a-element"),h=(0,t.g2)("a-translation");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("h2",{class:"cursor_pointer a_d_flex a_align_items_center",ariaExpanded:e.isRubricOpen,tabindex:"0",onClick:c[0]||(c[0]=(...c)=>e.toggleRubric&&e.toggleRubric(...c))},[(0,t.bF)(s,{class:"a_mr_2",type:"text","icon-left":e.iconToggleRubric,"icon-class":"a_width_5 a_height_auto",tag:"span"},null,8,["icon-left"]),(0,t.bF)(h,{tag:"span",text:e.headerKey},null,8,["text"])],8,u),(0,t.bo)((0,t.Lk)("div",k,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.htmlElements,(e=>((0,t.uX)(),(0,t.Wv)(h,{key:e,tag:"div","safe-html":e},null,8,["safe-html"])))),128))],512),[[t.aG,e.isRubricOpen]])])}]]);var y=s(5220);const p={5.2:{key:"5_2",whatChecked:4,whyChecked:2,howChecked:17,sources:1,classification:3,questions:0},5.3:{key:"5_3",whatChecked:2,whyChecked:1,howChecked:11,sources:1,classification:3,questions:0},5.4:{key:"5_4",whatChecked:1,whyChecked:2,howChecked:12,sources:1,classification:3,questions:0},6.1:{key:"6_1",whatChecked:2,whyChecked:1,howChecked:4,sources:1,classification:3,questions:0},"6.2.1.1":{key:"6_2_1_1",whatChecked:1,whyChecked:1,howChecked:6,sources:1,classification:3,questions:0},"6.2.1.2":{key:"6_2_1_2",whatChecked:1,whyChecked:1,howChecked:6,sources:1,classification:3,questions:0},"6.2.2.1":{key:"6_2_2_1",whatChecked:1,whyChecked:1,howChecked:6,sources:1,classification:5,questions:0},"6.2.2.2":{key:"6_2_2_2",whatChecked:1,whyChecked:1,howChecked:16,sources:1,classification:3,questions:0},"6.2.2.3":{key:"6_2_2_3",whatChecked:1,whyChecked:1,howChecked:6,sources:1,classification:3,questions:0},"6.2.2.4":{key:"6_2_2_4",whatChecked:1,whyChecked:1,howChecked:6,sources:1,classification:3,questions:0},"9.1.1.1a":{key:"9_1_1_1A",whatChecked:3,whyChecked:2,howChecked:44,sources:6,classification:18,questions:32},"9.1.1.1b":{key:"9_1_1_1B",whatChecked:3,whyChecked:3,howChecked:48,sources:6,classification:16,questions:24},"9.1.1.1c":{key:"9_1_1_1C",whatChecked:2,whyChecked:6,howChecked:18,sources:3,classification:12,questions:12},"9.1.1.1d":{key:"9_1_1_1D",whatChecked:2,whyChecked:2,howChecked:15,sources:0,classification:2,questions:0},"9.1.3.1a":{key:"9_1_3_1A",whatChecked:1,whyChecked:4,howChecked:13,sources:9,classification:17,questions:24},"9.1.3.1b":{key:"9_1_3_1B",whatChecked:1,whyChecked:4,howChecked:17,sources:0,classification:14,questions:0},"9.1.3.1c":{key:"9_1_3_1C",whatChecked:1,whyChecked:4,howChecked:11,sources:0,classification:12,questions:0},"9.1.3.1d":{key:"9_1_3_1D",whatChecked:2,whyChecked:3,howChecked:15,sources:0,classification:16,questions:0},"9.1.3.1e":{key:"9_1_3_1E",whatChecked:1,whyChecked:6,howChecked:44,sources:1,classification:12,questions:13},"9.1.3.1f":{key:"9_1_3_1F",whatChecked:1,whyChecked:3,howChecked:7,sources:11,classification:12,questions:0},"9.1.3.1g":{key:"9_1_3_1G",whatChecked:1,howChecked:9,sources:3,classification:12,questions:0},"9.1.3.1h":{key:"9_1_3_1H",whatChecked:4,whyChecked:2,howChecked:23,sources:2,classification:16,questions:0},"9.1.3.2":{key:"9_1_3_2",whatChecked:3,whyChecked:1,howChecked:17,sources:1,classification:16,questions:0},"9.1.3.3":{key:"9_1_3_3",whatChecked:1,whyChecked:1,howChecked:8,sources:3,classification:12,questions:0},"9.1.3.4":{key:"9_1_3_4",whatChecked:3,whyChecked:2,howChecked:9,sources:1,classification:11,questions:0},"9.1.3.5":{key:"9_1_3_5",whatChecked:2,whyChecked:3,howChecked:9,sources:1,classification:9,questions:0},"9.1.4.1":{key:"9_1_4_1",whatChecked:1,whyChecked:1,howChecked:17,sources:3,classification:22,questions:4},"9.1.4.2":{key:"9_1_4_2",whatChecked:1,whyChecked:2,howChecked:14,sources:3,classification:10,questions:0},"9.1.4.3":{key:"9_1_4_3",whatChecked:1,whyChecked:1,howChecked:25,sources:2,classification:12,questions:6},"9.1.4.4":{key:"9_1_4_4",whatChecked:2,whyChecked:1,howChecked:19,sources:6,classification:16,questions:7},"9.1.4.5":{key:"9_1_4_5",whatChecked:1,whyChecked:1,howChecked:13,sources:1,classification:12,questions:10},"9.1.4.10":{key:"9_1_4_10",whatChecked:4,whyChecked:3,howChecked:14,sources:1,classification:11,questions:0},"9.1.4.11":{key:"9_1_4_11",whatChecked:4,whyChecked:1,howChecked:28,sources:1,classification:11,questions:0},"9.1.4.12":{key:"9_1_4_12",whatChecked:2,whyChecked:1,howChecked:9,sources:1,classification:9,questions:0},"9.1.4.13":{key:"9_1_4_13",whatChecked:3,whyChecked:2,howChecked:13,sources:1,classification:9,questions:0},"9.2.1.1":{key:"9_2_1_1",whatChecked:1,whyChecked:3,howChecked:17,sources:3,classification:16,questions:0},"9.2.1.2":{key:"9_2_1_2",whatChecked:1,whyChecked:2,howChecked:14,sources:0,classification:12,questions:0},"9.2.1.4":{key:"9_2_1_4",whatChecked:1,whyChecked:1,howChecked:11,sources:1,classification:9,questions:2},"9.2.2.1":{key:"9_2_2_1",whatChecked:2,whyChecked:3,howChecked:26,sources:0,classification:16,questions:3},"9.2.2.2":{key:"9_2_2_2",whatChecked:2,whyChecked:6,howChecked:14,sources:3,classification:16,questions:0},"9.2.3.1":{key:"9_2_3_1",whatChecked:1,whyChecked:2,howChecked:7,sources:6,classification:8,questions:0},"9.2.4.1":{key:"9_2_4_1",whatChecked:3,whyChecked:5,howChecked:32,sources:8,classification:14,questions:4},"9.2.4.2":{key:"9_2_4_2",whatChecked:1,whyChecked:2,howChecked:15,sources:3,classification:12,questions:0},"9.2.4.3":{key:"9_2_4_3",whatChecked:1,whyChecked:6,howChecked:19,sources:1,classification:16,questions:0},"9.2.4.4":{key:"9_2_4_4",whatChecked:2,whyChecked:4,howChecked:12,sources:13,classification:21,questions:0},"9.2.4.5":{key:"9_2_4_5",whatChecked:1,whyChecked:2,howChecked:6,sources:3,classification:8,questions:0},"9.2.4.6":{key:"9_2_4_6",whatChecked:1,whyChecked:2,howChecked:12,sources:0,classification:10,questions:0},"9.2.4.7":{key:"9_2_4_7",whatChecked:2,whyChecked:1,howChecked:14,sources:0,classification:17,questions:3},"9.2.5.1":{key:"9_2_5_1",whatChecked:12,whyChecked:1,howChecked:9,sources:1,classification:9,questions:0},"9.2.5.2":{key:"9_2_5_2",whatChecked:2,whyChecked:2,howChecked:12,sources:1,classification:9,questions:0},"9.2.5.3":{key:"9_2_5_3",whatChecked:1,whyChecked:3,howChecked:10,sources:1,classification:9,questions:0},"9.2.5.4":{key:"9_2_5_4",whatChecked:3,whyChecked:2,howChecked:7,sources:1,classification:9,questions:0}};var f=s(7985);const q={name:"PageStep",components:{APageTabTitle:a.A,ATranslation:n.A,PageStepRubric:l},setup(){const{currentStep:e,hasStep:c,step:s}=function(){const e=(0,y.lq)().params.step,c=(0,t.EW)((()=>p[e])),s=(0,t.EW)((()=>!!c.value));return{currentStep:c,hasStep:s,step:e}}(),{headerStep:h,headerText:i,pageTitle:o}=function({currentStep:e=(0,t.EW)((()=>({}))),step:c=""}){const s=(0,t.EW)((()=>{if(c)return(0,f.a1)({placeholder:"_TEXT_STEP_{{step}}_",extra:{step:c}})})),h=(0,t.EW)((()=>{if(e.value?.key)return(0,f.a1)({placeholder:_({stepKey:e.value.key})})})),i=(0,t.EW)((()=>{let e="";return s.value&&(e=`${s.value} `),e+=h.value,e}));return{headerStep:s,headerText:h,pageTitle:i}}({currentStep:e,step:s});return{currentStep:e,hasStep:c,headerStep:h,headerText:i,pageTitle:o}}},b=(0,w.A)(q,[["render",function(e,c){const s=(0,t.g2)("a-page-tab-title"),a=(0,t.g2)("page-step-rubric"),n=(0,t.g2)("a-translation");return e.hasStep?((0,t.uX)(),(0,t.CE)("div",h,[(0,t.bF)(s,{title:e.pageTitle},null,8,["title"]),(0,t.Lk)("h1",null,[e.headerStep?((0,t.uX)(),(0,t.CE)("span",i,(0,t.v_)(e.headerStep),1)):(0,t.Q3)("v-if",!0),(0,t.Lk)("span",null,(0,t.v_)(e.headerText),1)]),e.currentStep.whatChecked?((0,t.uX)(),(0,t.Wv)(a,{key:0,"current-step":e.currentStep,"rubric-key":"whatChecked"},null,8,["current-step"])):(0,t.Q3)("v-if",!0),e.currentStep.whyChecked?((0,t.uX)(),(0,t.Wv)(a,{key:1,"current-step":e.currentStep,"rubric-key":"whyChecked"},null,8,["current-step"])):(0,t.Q3)("v-if",!0),e.currentStep.howChecked?((0,t.uX)(),(0,t.Wv)(a,{key:2,"current-step":e.currentStep,"rubric-key":"howChecked"},null,8,["current-step"])):(0,t.Q3)("v-if",!0),e.currentStep.sources?((0,t.uX)(),(0,t.Wv)(a,{key:3,"current-step":e.currentStep,"rubric-key":"sources"},null,8,["current-step"])):(0,t.Q3)("v-if",!0),e.currentStep.classification?((0,t.uX)(),(0,t.Wv)(a,{key:4,"current-step":e.currentStep,"rubric-key":"classification"},null,8,["current-step"])):(0,t.Q3)("v-if",!0),e.currentStep.questions?((0,t.uX)(),(0,t.Wv)(a,{key:5,"current-step":e.currentStep,"rubric-key":"questions"},null,8,["current-step"])):(0,t.Q3)("v-if",!0)])):((0,t.uX)(),(0,t.CE)("div",o,[(0,t.bF)(n,{tag:"h1",text:"Error"})]))}]])}}]);
//# sourceMappingURL=chunk.388.bbbd463ce85c52e53009.js.map