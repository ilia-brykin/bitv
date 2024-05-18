"use strict";(self.webpackChunkbitv=self.webpackChunkbitv||[]).push([[358],{2977:(e,a,i)=>{i.d(a,{A:()=>l});var t=i(6365);const o={key:0,class:"a_list_inline a_list_tags a_mb_0"},s={class:"a_list_inline_item"};var n=i(3297),c=i(7515),d=i(7181);const u={name:"StepTagsItem",components:{AElement:n.A},props:{isButton:{type:Boolean,required:!0},tag:{type:String,required:!0}},setup(e){const{appliedModel:a,toggleTagInModelTags:i}=(0,c.A)(),{isBtnActive:o}=function(e,{appliedModel:a=(0,t.KR)({})}){const i=(0,t.lW)(e,"isButton"),o=(0,t.lW)(e,"tag");return{isBtnActive:(0,t.EW)((()=>!!i.value&&-1!==a.value?.tagPresence.indexOf(o.value)))}}(e,{appliedModel:a}),{classTagLocal:s}=function(e){const a=(0,t.lW)(e,"isButton");return{classTagLocal:(0,t.EW)((()=>a.value?"a_btn_small":"a_border a_px_2 a_py_1 a_d_inline_block a_fs_7"))}}(e),{typeTag:n}=function(e){const a=(0,t.lW)(e,"isButton");return{typeTag:(0,t.EW)((()=>a.value?"button":"text"))}}(e),{eventsLocal:u}=function(e,{toggleTagInModelTags:a=(()=>{})}){const i=(0,t.lW)(e,"isButton"),o=(0,t.lW)(e,"tag");return{eventsLocal:(0,t.EW)((()=>i.value?{click:()=>a({tag:o.value})}:{}))}}(e,{toggleTagInModelTags:i}),{tagText:h,tagTextDescription:r}=function(e){const a=(0,t.lW)(e,"tag");return{tagText:(0,t.EW)((()=>(0,d.xl)({tag:a.value}))),tagTextDescription:(0,t.EW)((()=>(0,d.xv)({tag:a.value})))}}(e);return{classTagLocal:s,eventsLocal:u,isBtnActive:o,tagText:h,tagTextDescription:r,typeTag:n}}};var h=i(6262);const r={name:"StepTags",components:{StepTagsItem:(0,h.A)(u,[["render",function(e,a){const i=(0,t.g2)("a-element");return(0,t.uX)(),(0,t.CE)("li",s,[(0,t.bF)(i,(0,t.v6)({class:["a_pill_rounded",e.classTagLocal],type:e.typeTag,text:e.tagText,title:e.tagTextDescription,"text-screen-reader":e.tagTextDescription,"text-aria-hidden":!0,"is-switch":e.isButton,"model-switch":e.isBtnActive},(0,t.Tb)(e.eventsLocal)),null,16,["type","class","text","title","text-screen-reader","is-switch","model-switch"])])}]])},props:{isButton:{type:Boolean,required:!0},tags:{type:Array,required:!1,default:()=>[]}}},l=(0,h.A)(r,[["render",function(e,a){const i=(0,t.g2)("step-tags-item");return e.tags.length?((0,t.uX)(),(0,t.CE)("ul",o,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.tags,(a=>((0,t.uX)(),(0,t.Wv)(i,{key:a,tag:a,"is-button":e.isButton},null,8,["tag","is-button"])))),128))])):(0,t.Q3)("v-if",!0)}]])},4236:(e,a,i)=>{i.d(a,{A:()=>t});const t={5.2:{key:"5_2",whatChecked:4,whyChecked:2,howChecked:17,sources:1,classification:3,questions:0,tags:["use-site","additional-user-interface"],group:"5"},5.3:{key:"5_3",whatChecked:2,whyChecked:1,howChecked:11,sources:1,classification:3,questions:0,tags:["use-specific","additional-user-interface","additional-security"],group:"5"},5.4:{key:"5_4",whatChecked:1,whyChecked:2,howChecked:12,sources:1,classification:3,questions:0,tags:["use-specific","additional-compatibility"],group:"5"},6.1:{key:"6_1",whatChecked:2,whyChecked:1,howChecked:4,sources:1,classification:3,questions:0,tags:["use-site","main-audio","additional-real-time-communication","additional-requirements"],group:"6"},"6.2.1.1":{key:"6_2_1_1",whatChecked:1,whyChecked:1,howChecked:6,sources:1,classification:3,questions:0,tags:["use-component","main-text","additional-real-time-communication"],group:"6"},"6.2.1.2":{key:"6_2_1_2",whatChecked:1,whyChecked:1,howChecked:6,sources:1,classification:3,questions:0,tags:["use-component","main-audio","main-text","additional-real-time-communication"],group:"6"},"6.2.2.1":{key:"6_2_2_1",whatChecked:1,whyChecked:1,howChecked:6,sources:1,classification:5,questions:0,tags:["use-component","main-text","additional-real-time-communication","additional-user-interface"],group:"6"},"6.2.2.2":{key:"6_2_2_2",whatChecked:1,whyChecked:1,howChecked:16,sources:1,classification:3,questions:0,tags:["use-component","main-text","additional-real-time-communication","additional-user-interface","additional-screen-reader"],group:"6"},"6.2.2.3":{key:"6_2_2_3",whatChecked:1,whyChecked:1,howChecked:6,sources:1,classification:3,questions:0,tags:["use-component","main-text","additional-real-time-communication","additional-user-interface","additional-screen-reader"],group:"6"},"6.2.2.4":{key:"6_2_2_4",whatChecked:1,whyChecked:1,howChecked:6,sources:1,classification:3,questions:0,tags:["use-component","main-audio","additional-real-time-communication","additional-screen-reader"],group:"6"},"6.2.3":{key:"6_2_3",whatChecked:1,whyChecked:1,howChecked:8,sources:1,classification:3,questions:0,tags:["use-specific","main-text","additional-real-time-communication"],group:"6"},"6.2.4":{key:"6_2_4",whatChecked:1,whyChecked:1,howChecked:9,sources:1,classification:3,questions:0,tags:["use-component","main-text","additional-real-time-communication","additional-speed","additional-requirements"],group:"6"},6.3:{key:"6_3",whatChecked:1,whyChecked:1,howChecked:5,sources:1,classification:3,questions:0,tags:["use-component","main-text","additional-real-time-communication","additional-screen-reader"],group:"6"},6.4:{key:"6_4",whatChecked:1,whyChecked:1,howChecked:9,sources:1,classification:3,questions:0,tags:["use-component","main-audio","additional-functionality"],group:"6"},"6.5.2":{key:"6_5_2",whatChecked:1,whyChecked:1,howChecked:6,sources:1,classification:3,questions:0,tags:["use-component","main-video","additional-real-time-communication","additional-requirements"],group:"6"},"6.5.3":{key:"6_5_3",whatChecked:1,whyChecked:1,howChecked:8,sources:1,classification:3,questions:0,tags:["use-component","main-video","additional-real-time-communication","additional-speed","additional-requirements"],group:"6"},"6.5.4":{key:"6_5_4",whatChecked:1,whyChecked:1,howChecked:10,sources:1,classification:3,questions:0,tags:["use-component","main-audio","main-video","additional-speed","additional-real-time-communication","additional-requirements"],group:"6"},"6.5.5":{key:"6_5_5",whatChecked:1,whyChecked:1,howChecked:8,sources:0,classification:3,questions:0,tags:["use-component","main-audio","additional-real-time-communication"],group:"6"},"6.5.6":{key:"6_5_6",whatChecked:1,whyChecked:1,howChecked:7,sources:1,classification:3,questions:0,tags:["use-component","main-video","additional-real-time-communication"],group:"6"},"7.1.1":{key:"7_1_1",whatChecked:1,whyChecked:3,howChecked:11,sources:1,classification:7,questions:0,tags:["use-component","main-video","main-audio","main-subtitles","additional-user-interface"],group:"7"},"7.1.2":{key:"7_1_2",whatChecked:2,whyChecked:1,howChecked:12,sources:1,classification:5,questions:0,tags:["use-component","main-video","main-audio","main-subtitles","additional-speed","additional-requirements"],group:"7"},"7.1.3":{key:"7_1_3",whatChecked:1,whyChecked:1,howChecked:11,sources:1,classification:5,questions:0,tags:["use-component","main-video","main-subtitles"],group:"7"},"7.1.4":{key:"7_1_4",whatChecked:1,whyChecked:1,howChecked:10,sources:1,classification:3,questions:0,tags:["use-component","main-video","main-subtitles","additional-user-interface"],group:"7"},"7.1.5":{key:"7_1_5",whatChecked:1,whyChecked:1,howChecked:11,sources:1,classification:3,questions:0,tags:["use-component","main-audio","main-video","main-subtitles","additional-functionality"],group:"7"},"7.2.1":{key:"7_2_1",whatChecked:2,whyChecked:1,howChecked:9,sources:1,classification:6,questions:0,tags:["use-component","main-audio","main-video","additional-functionality","additional-user-interface"],group:"7"},"7.2.2":{key:"7_2_2",whatChecked:1,whyChecked:1,howChecked:10,sources:1,classification:5,questions:0,tags:["use-component","main-audio","main-video","additional-functionality"],group:"7"},"7.2.3":{key:"7_2_3",whatChecked:1,whyChecked:1,howChecked:9,sources:0,classification:5,questions:0,tags:["use-component","main-audio","main-video","additional-functionality"],group:"7"},7.3:{key:"7_3",whatChecked:1,whyChecked:1,howChecked:10,sources:0,classification:5,questions:0,tags:["use-component","main-audio","main-video","main-subtitles","additional-functionality"],group:"7"},"9.1.1.1a":{key:"9_1_1_1A",whatChecked:3,whyChecked:2,howChecked:44,sources:6,classification:18,questions:32,tags:["use-component","main-image","additional-user-interface","additional-html-standard","additional-screen-reader","additional-alternative-text"],group:"9.1.1"},"9.1.1.1b":{key:"9_1_1_1B",whatChecked:3,whyChecked:3,howChecked:48,sources:6,classification:16,questions:24,tags:["use-component","main-image","additional-html-standard","additional-screen-reader","additional-alternative-text"],group:"9.1.1"},"9.1.1.1c":{key:"9_1_1_1C",whatChecked:2,whyChecked:6,howChecked:18,sources:3,classification:12,questions:12,tags:["use-component","main-image","additional-html-standard","additional-screen-reader","additional-alternative-text"],group:"9.1.1"},"9.1.1.1d":{key:"9_1_1_1D",whatChecked:2,whyChecked:2,howChecked:15,sources:0,classification:2,questions:0,tags:["use-component","main-image","additional-html-standard","additional-screen-reader","additional-alternative-text","additional-security"],group:"9.1.1"},"9.1.2.1":{key:"9_1_2_1",whatChecked:1,whyChecked:1,howChecked:15,sources:0,classification:2,questions:0,tags:["use-component","main-video","main-audio","main-text"],group:"9.1.2"},"9.1.2.2":{key:"9_1_2_2",whatChecked:1,whyChecked:2,howChecked:16,sources:7,classification:21,questions:2,tags:["use-component","main-video","main-audio","main-subtitles"],group:"9.1.2"},"9.1.2.3":{key:"9_1_2_3",whatChecked:1,whyChecked:3,howChecked:19,sources:6,classification:10,questions:2,tags:["use-component","main-video","main-audio","main-text"],group:"9.1.2"},"9.1.2.4":{key:"9_1_2_4",whatChecked:1,whyChecked:1,howChecked:9,sources:0,classification:17,questions:0,tags:["use-component","main-video","main-audio","main-subtitles"],group:"9.1.2"},"9.1.2.5":{key:"9_1_2_5",whatChecked:1,whyChecked:1,howChecked:10,sources:6,classification:12,questions:2,tags:["use-component","main-video","main-audio"],group:"9.1.2"},"9.1.3.1a":{key:"9_1_3_1A",whatChecked:1,whyChecked:4,howChecked:13,sources:9,classification:17,questions:24,tags:["use-page","main-text","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.1.3"},"9.1.3.1b":{key:"9_1_3_1B",whatChecked:1,whyChecked:4,howChecked:17,sources:0,classification:14,questions:0,tags:["use-component","main-text","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.1.3"},"9.1.3.1c":{key:"9_1_3_1C",whatChecked:1,whyChecked:4,howChecked:11,sources:0,classification:12,questions:0,tags:["use-component","main-text","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.1.3"},"9.1.3.1d":{key:"9_1_3_1D",whatChecked:2,whyChecked:3,howChecked:15,sources:0,classification:16,questions:0,tags:["use-specific","main-text","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.1.3"},"9.1.3.1e":{key:"9_1_3_1E",whatChecked:1,whyChecked:6,howChecked:44,sources:1,classification:12,questions:13,tags:["use-component","main-table","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.1.3"},"9.1.3.1f":{key:"9_1_3_1F",whatChecked:1,whyChecked:3,howChecked:7,sources:11,classification:12,questions:0,tags:["use-component","main-table","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.1.3"},"9.1.3.1g":{key:"9_1_3_1G",whatChecked:1,howChecked:9,sources:3,classification:12,questions:0,tags:["use-page","main-table","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.1.3"},"9.1.3.1h":{key:"9_1_3_1H",whatChecked:4,whyChecked:2,howChecked:23,sources:2,classification:16,questions:0,tags:["use-component","main-form","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.1.3"},"9.1.3.2":{key:"9_1_3_2",whatChecked:3,whyChecked:1,howChecked:17,sources:1,classification:16,questions:0,tags:["use-specific","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.1.3"},"9.1.3.3":{key:"9_1_3_3",whatChecked:1,whyChecked:1,howChecked:8,sources:3,classification:12,questions:0,tags:["use-component","additional-user-interface"],group:"9.1.3"},"9.1.3.4":{key:"9_1_3_4",whatChecked:3,whyChecked:2,howChecked:9,sources:1,classification:11,questions:0,tags:["use-page","additional-user-interface","additional-responsive"],group:"9.1.3"},"9.1.3.5":{key:"9_1_3_5",whatChecked:2,whyChecked:3,howChecked:9,sources:1,classification:9,questions:0,tags:["use-component","main-form","additional-html-standard","additional-user-interface"],group:"9.1.3"},"9.1.4.1":{key:"9_1_4_1",whatChecked:1,whyChecked:1,howChecked:17,sources:3,classification:22,questions:4,tags:["use-component","additional-user-interface","additional-color","additional-functionality"],group:"9.1.4"},"9.1.4.2":{key:"9_1_4_2",whatChecked:1,whyChecked:2,howChecked:14,sources:3,classification:10,questions:0,tags:["use-component","main-audio","additional-speed","additional-requirements"],group:"9.1.4"},"9.1.4.3":{key:"9_1_4_3",whatChecked:1,whyChecked:1,howChecked:25,sources:2,classification:12,questions:6,tags:["use-component","additional-user-interface","additional-color","additional-requirements"],group:"9.1.4"},"9.1.4.4":{key:"9_1_4_4",whatChecked:2,whyChecked:1,howChecked:19,sources:6,classification:16,questions:7,tags:["use-page","main-text","additional-user-interface","additional-functionality","additional-requirements"],group:"9.1.4"},"9.1.4.5":{key:"9_1_4_5",whatChecked:1,whyChecked:1,howChecked:13,sources:1,classification:12,questions:10,tags:["use-component","main-image","additional-html-semantic","additional-screen-reader"],group:"9.1.4"},"9.1.4.10":{key:"9_1_4_10",whatChecked:4,whyChecked:3,howChecked:14,sources:1,classification:11,questions:0,tags:["use-component","additional-user-interface","additional-responsive","additional-requirements"],group:"9.1.4"},"9.1.4.11":{key:"9_1_4_11",whatChecked:4,whyChecked:1,howChecked:28,sources:1,classification:11,questions:0,tags:["use-component","main-image","additional-user-interface","additional-requirements","additional-color"],group:"9.1.4"},"9.1.4.12":{key:"9_1_4_12",whatChecked:2,whyChecked:1,howChecked:9,sources:1,classification:9,questions:0,tags:["use-page","main-text","additional-user-interface","additional-requirements"],group:"9.1.4"},"9.1.4.13":{key:"9_1_4_13",whatChecked:3,whyChecked:2,howChecked:13,sources:1,classification:9,questions:0,tags:["use-component","main-text","additional-user-interface","additional-functionality","additional-keyboard"],group:"9.1.4"},"9.2.1.1":{key:"9_2_1_1",whatChecked:1,whyChecked:3,howChecked:17,sources:3,classification:16,questions:0,tags:["use-component","additional-keyboard","additional-functionality"],group:"9.2.1"},"9.2.1.2":{key:"9_2_1_2",whatChecked:1,whyChecked:2,howChecked:14,sources:0,classification:12,questions:0,tags:["use-component","additional-keyboard"],group:"9.2.1"},"9.2.1.4":{key:"9_2_1_4",whatChecked:1,whyChecked:1,howChecked:11,sources:1,classification:9,questions:2,tags:["use-component","additional-keyboard"],group:"9.2.1"},"9.2.2.1":{key:"9_2_2_1",whatChecked:2,whyChecked:3,howChecked:26,sources:0,classification:16,questions:3,tags:["use-component","additional-speed","additional-functionality"],group:"9.2.2"},"9.2.2.2":{key:"9_2_2_2",whatChecked:2,whyChecked:6,howChecked:14,sources:3,classification:16,questions:0,tags:["use-component","additional-speed","additional-functionality","additional-requirements"],group:"9.2.2"},"9.2.3.1":{key:"9_2_3_1",whatChecked:1,whyChecked:2,howChecked:7,sources:6,classification:8,questions:0,tags:["use-component","additional-speed","additional-requirements"],group:"9.2.3"},"9.2.4.1":{key:"9_2_4_1",whatChecked:3,whyChecked:5,howChecked:32,sources:8,classification:14,questions:4,tags:["use-page","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.2.4"},"9.2.4.2":{key:"9_2_4_2",whatChecked:1,whyChecked:2,howChecked:15,sources:3,classification:12,questions:0,tags:["use-component","additional-screen-reader"],group:"9.2.4"},"9.2.4.3":{key:"9_2_4_3",whatChecked:1,whyChecked:6,howChecked:19,sources:1,classification:16,questions:0,tags:["use-component","main-form","additional-user-interface","additional-keyboard","additional-screen-reader"],group:"9.2.4"},"9.2.4.4":{key:"9_2_4_4",whatChecked:2,whyChecked:4,howChecked:12,sources:13,classification:21,questions:0,tags:["use-component","main-link"],group:"9.2.4"},"9.2.4.5":{key:"9_2_4_5",whatChecked:1,whyChecked:2,howChecked:6,sources:3,classification:8,questions:0,tags:["use-site","main-link"],group:"9.2.4"},"9.2.4.6":{key:"9_2_4_6",whatChecked:1,whyChecked:2,howChecked:12,sources:0,classification:10,questions:0,tags:["use-page","main-text","main-link"],group:"9.2.4"},"9.2.4.7":{key:"9_2_4_7",whatChecked:2,whyChecked:1,howChecked:14,sources:0,classification:17,questions:3,tags:["use-component","main-link","main-form","additional-user-interface","additional-requirements","additional-color"],group:"9.2.4"},"9.2.5.1":{key:"9_2_5_1",whatChecked:12,whyChecked:1,howChecked:9,sources:1,classification:9,questions:0,tags:["use-component","additional-user-interface","additional-functionality"],group:"9.2.5"},"9.2.5.2":{key:"9_2_5_2",whatChecked:2,whyChecked:2,howChecked:12,sources:1,classification:9,questions:0,tags:["use-component","additional-user-interface","additional-functionality"],group:"9.2.5"},"9.2.5.3":{key:"9_2_5_3",whatChecked:1,whyChecked:3,howChecked:10,sources:1,classification:9,questions:0,tags:["use-component","main-link","main-button","additional-user-interface","additional-html-semantic","additional-alternative-text"],group:"9.2.5"},"9.2.5.4":{key:"9_2_5_4",whatChecked:3,whyChecked:2,howChecked:7,sources:1,classification:9,questions:0,tags:["use-component","additional-user-interface","additional-functionality"],group:"9.2.5"},"9.3.1.1":{key:"9_3_1_1",whatChecked:1,whyChecked:1,howChecked:9,sources:0,classification:10,questions:0,tags:["use-page","main-text","additional-html-standard"],group:"9.3.1"},"9.3.1.2":{key:"9_3_1_2",whatChecked:1,whyChecked:1,howChecked:11,sources:3,classification:10,questions:0,tags:["use-component","main-text","additional-html-standard","additional-html-semantic"],group:"9.3.1"},"9.3.2.1":{key:"9_3_2_1",whatChecked:1,whyChecked:2,howChecked:7,sources:0,classification:12,questions:3,tags:["use-component","main-focus","additional-expected-behavior","additional-screen-reader"],group:"9.3.2"},"9.3.2.2":{key:"9_3_2_2",whatChecked:1,whyChecked:2,howChecked:16,sources:0,classification:14,questions:0,tags:["use-component","main-focus","additional-expected-behavior","additional-screen-reader"],group:"9.3.2"},"9.3.2.3":{key:"9_3_2_3",whatChecked:1,whyChecked:1,howChecked:10,sources:3,classification:12,questions:0,tags:["use-site","main-menu","additional-expected-behavior"],group:"9.3.2"},"9.3.2.4":{key:"9_3_2_4",whatChecked:1,whyChecked:1,howChecked:7,sources:0,classification:14,questions:0,tags:["use-site","main-menu","additional-expected-behavior"],group:"9.3.2"},"9.3.3.1":{key:"9_3_3_1",whatChecked:1,whyChecked:2,howChecked:11,sources:2,classification:14,questions:3,tags:["use-component","main-form","additional-expected-behavior"],group:"9.3.3"},"9.3.3.2":{key:"9_3_3_2",whatChecked:3,whyChecked:2,howChecked:15,sources:0,classification:16,questions:0,tags:["use-component","main-form","additional-expected-behavior","additional-html-standard"],group:"9.3.3"},"9.3.3.3":{key:"9_3_3_3",whatChecked:1,whyChecked:2,howChecked:9,sources:0,classification:13,questions:0,tags:["use-component","main-form","additional-expected-behavior"],group:"9.3.3"},"9.3.3.4":{key:"9_3_3_4",whatChecked:1,whyChecked:2,howChecked:13,sources:0,classification:8,questions:0,tags:["use-component","main-form","additional-functionality"],group:"9.3.3"},"9.4.1.1":{key:"9_4_1_1",whatChecked:2,whyChecked:1,howChecked:11,sources:2,classification:12,questions:0,tags:["use-component","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.4.1"},"9.4.1.2":{key:"9_4_1_2",whatChecked:2,whyChecked:2,howChecked:9,sources:6,classification:16,questions:0,tags:["use-component","additional-html-standard","additional-html-semantic","additional-screen-reader"],group:"9.4.1"},"9.4.1.3":{key:"9_4_1_3",whatChecked:4,whyChecked:1,howChecked:14,sources:1,classification:14,questions:0,tags:["use-component","main-text","additional-screen-reader"],group:"9.4.1"},"11.7.1":{key:"11_7_1",whatChecked:3,whyChecked:1,howChecked:16,sources:1,classification:3,questions:0,tags:["use-page","additional-browser"],group:"11.7"},"11.8.2":{key:"11_8_2",whatChecked:1,whyChecked:1,howChecked:10,sources:1,classification:3,questions:0,tags:["use-component","additional-compatibility","additional-functionality"],group:"11.8"},"11.8.3":{key:"11_8_3",whatChecked:1,whyChecked:1,howChecked:12,sources:1,classification:3,questions:0,tags:["use-component","additional-compatibility","additional-functionality"],group:"11.8"},"11.8.4":{key:"11_8_4",whatChecked:1,whyChecked:0,howChecked:7,sources:1,classification:3,questions:0,tags:["use-component","main-text","additional-compatibility","additional-functionality"],group:"11.8"},"11.8.5":{key:"11_8_5",whatChecked:2,whyChecked:1,howChecked:6,sources:1,classification:3,questions:0,tags:["use-component","main-text","additional-compatibility","additional-functionality"],group:"11.8"},"12.1.1":{key:"12_1_1",whatChecked:1,whyChecked:1,howChecked:15,sources:1,classification:3,questions:0,tags:["use-site","additional-documentation"],group:"12"},"12.1.2":{key:"12_1_2",whatChecked:4,whyChecked:1,howChecked:12,sources:1,classification:3,questions:0,tags:["use-site","additional-documentation"],group:"12"},"12.2.2":{key:"12_2_2",whatChecked:1,whyChecked:1,howChecked:9,sources:1,classification:6,questions:0,tags:["use-site","additional-documentation","additional-support"],group:"12"},"12.2.3":{key:"12_2_3",whatChecked:1,whyChecked:1,howChecked:8,sources:1,classification:3,questions:0,tags:["use-site","additional-support"],group:"12"},"12.2.4":{key:"12_2_4",whatChecked:3,whyChecked:1,howChecked:17,sources:1,classification:3,questions:0,tags:["use-site","additional-documentation","additional-support"],group:"12"}}},7181:(e,a,i)=>{i.d(a,{UM:()=>o,fG:()=>n,ir:()=>d,kt:()=>s,xl:()=>c,xv:()=>u});var t=i(2543);function o({stepKey:e}){return`_STEP_${e}_NAME_`}function s({stepKey:e,rubricKey:a,number:i}){return`_STEP_${e}${a}${i}_`}function n({group:e}){return`_STEP_${e.replaceAll(".","_")}_NAME_`}function c({tag:e}){return`_TAG_${(0,t.toUpper)((0,t.snakeCase)(e))}_`}function d({group:e}){return`_TAG_GROUP_${(0,t.toUpper)(e)}_`}function u({tag:e}){return`_TAG_DESCRIPTION_${(0,t.toUpper)((0,t.snakeCase)(e))}_`}},7515:(e,a,i)=>{i.d(a,{A:()=>r});var t=i(6365),o=i(4236);const s=[{tag:"use-component",group:"use"},{tag:"use-page",group:"use"},{tag:"use-site",group:"use"},{tag:"use-specific",group:"use"},{tag:"main-video",group:"main"},{tag:"main-audio",group:"main"},{tag:"main-text",group:"main"},{tag:"main-link",group:"main"},{tag:"main-button",group:"main"},{tag:"main-image",group:"main"},{tag:"main-form",group:"main"},{tag:"main-table",group:"main"},{tag:"main-subtitles",group:"main"},{tag:"main-focus",group:"main"},{tag:"main-menu",group:"main"},{tag:"main-browser",group:"main"},{tag:"additional-real-time-communication",group:"additional"},{tag:"additional-user-interface",group:"additional"},{tag:"additional-html-standard",group:"additional"},{tag:"additional-html-semantic",group:"additional"},{tag:"additional-keyboard",group:"additional"},{tag:"additional-screen-reader",group:"additional"},{tag:"additional-alternative-text",group:"additional"},{tag:"additional-security",group:"additional"},{tag:"additional-compatibility",group:"additional"},{tag:"additional-speed",group:"additional"},{tag:"additional-functionality",group:"additional"},{tag:"additional-requirements",group:"additional"},{tag:"additional-responsive",group:"additional"},{tag:"additional-color",group:"additional"},{tag:"additional-documentation",group:"additional"},{tag:"additional-support",group:"additional"},{tag:"additional-expected-behavior",group:"additional"}];var n=i(7181),c=i(7985),d=i(2543);const u=(0,t.KR)({group:[],steps:[],tagPresence:[],tagAbsence:[]}),h=(0,t.KR)({group:[],steps:[],tagPresence:[],tagAbsence:[]});function r({dataSteps:e=(0,t.EW)((()=>[]))}={}){const a=(0,t.KR)({name:""}),i=(0,t.KR)({name:""}),r=(0,t.EW)((()=>{const e={},a=[];return(0,d.forEach)(o.A,(i=>{if(e[i.group])return;const t=(0,n.fG)({group:i.group});a.push({value:(0,c.a1)({placeholder:t})}),e[i.group]=!0})),a})),l=(0,t.EW)((()=>{const e=(0,d.cloneDeep)(s);return(0,d.forEach)(e,(e=>{const a=(0,n.xl)({tag:e.tag}),i=(0,c.a1)({placeholder:a}),t=(0,n.xv)({tag:e.tag}),o=(0,c.a1)({placeholder:t});e.label=`${i} (${o})`})),e})),k=({group:e})=>{const a=(0,n.ir)({group:e});return(0,c.a1)({placeholder:a})},g=(0,t.EW)((()=>[{type:"multiselect",id:"group",label:"_STEP_GROUP_",alwaysVisible:!0,deselectable:!0,search:!0,data:r.value,keyLabel:"value",keyId:"value"},{type:"multiselect",id:"tagPresence",label:"_TAG_PRESENCE_FILTER_",alwaysVisible:!0,search:!0,data:l.value,keyLabel:"label",keyId:"tag",keyGroup:"group",sortOrder:"asc",sortOrderGroup:"desc",keyGroupCallback:k},{type:"multiselect",id:"tagAbsence",label:"_TAG_ABSENCE_FILTER_",alwaysVisible:!0,search:!0,data:l.value,keyLabel:"label",keyId:"tag",keyGroup:"group",sortOrder:"asc",sortOrderGroup:"desc",keyGroupCallback:k},{type:"multiselect",id:"steps",label:"_STEPS_",alwaysVisible:!0,deselectable:!0,search:!0,data:e.value,keyLabelCallback:({item:e})=>`${e.step} ${e.name}`,keyId:"step"}])),m=(0,t.EW)((()=>(0,d.toLower)(i.value.name||""))),p=(0,t.EW)((()=>m.value||u.value.group?.length||u.value.steps?.length||u.value.tagPresence?.length||u.value.tagAbsence?.length?(0,d.filter)(e.value,(e=>(e=>!(m.value&&-1===(0,d.toLower)(`${e.name}`).indexOf(m.value)||u.value.group?.length&&-1===u.value.group.indexOf(e.group)||u.value.steps?.length&&-1===u.value.steps.indexOf(e.step)||u.value.tagPresence?.length&&0!==(0,d.difference)(u.value.tagPresence,e.tags).length||u.value.tagAbsence?.length&&0!==(0,d.intersection)(u.value.tagAbsence,e.tags).length))(e))):e.value));return{appliedModel:u,dataStepsFiltered:p,filterMain:{type:"text",id:"name",label:"_STEP_NAME_"},filters:g,mainModel:a,mainModelApplied:i,toggleTagInModelTags:({tag:e})=>{const a=u.value.tagPresence.indexOf(e);-1===a?u.value.tagPresence.push(e):u.value.tagPresence.splice(a,1),h.value.tagPresence=(0,d.cloneDeep)(u.value.tagPresence)},unappliedModel:h,updateAppliedModel:e=>{u.value=e,i.value.name=a.value.name},updateMainModel:e=>{a.value=e},updateUnappliedModel:e=>{h.value=e}}}}}]);
//# sourceMappingURL=chunk.358.fd80e2046bc863614c14.js.map