"use strict";(self.webpackChunkBITV=self.webpackChunkBITV||[]).push([[816],{1659:(A,e,t)=>{t.r(e),t.d(e,{default:()=>F});var a=t(6365),s=t(1498),l=t(7197);const g={key:0,class:"a_list_inline a_list_tags a_mb_0"},i={class:"a_list_inline_item"};var o=t(3297);const n=(0,a.KR)({});function r(){return{modelTags:n,toggleTagInModelTags:({tag:A})=>{n.value[A]=!n.value[A]}}}const C={name:"StepTagsItem",components:{AElement:o.A},props:{isButton:{type:Boolean,required:!0},tag:{type:String,required:!0}},setup(A){const{modelTags:e,toggleTagInModelTags:t}=r(),{isBtnActive:s}=function(A,{modelTags:e=(0,a.KR)({})}){const t=(0,a.lW)(A,"isButton"),s=(0,a.lW)(A,"tag");return{isBtnActive:(0,a.EW)((()=>!!t.value&&!!e.value[s.value]))}}(A,{modelTags:e}),{classTagLocal:l}=function(A){const e=(0,a.lW)(A,"isButton");return{classTagLocal:(0,a.EW)((()=>e.value?"a_btn_small":"a_border a_px_2 a_py_1 a_d_inline_block a_fs_7"))}}(A),{typeTag:g}=function(A){const e=(0,a.lW)(A,"isButton");return{typeTag:(0,a.EW)((()=>e.value?"button":"text"))}}(A),{eventsLocal:i}=function(A,{toggleTagInModelTags:e=(()=>{})}){const t=(0,a.lW)(A,"isButton"),s=(0,a.lW)(A,"tag");return{eventsLocal:(0,a.EW)((()=>t.value?{click:()=>e({tag:s.value})}:{}))}}(A,{toggleTagInModelTags:t});return{classTagLocal:l,eventsLocal:i,isBtnActive:s,typeTag:g}}};var u=t(6262);const D={name:"StepTags",components:{StepTagsItem:(0,u.A)(C,[["render",function(A,e){const t=(0,a.g2)("a-element");return(0,a.uX)(),(0,a.CE)("li",i,[(0,a.bF)(t,(0,a.v6)({class:["a_pill_rounded",A.classTagLocal],type:A.typeTag,text:A.tag,"is-switch":A.isButton,"model-switch":A.isBtnActive},(0,a.Tb)(A.eventsLocal)),null,16,["type","class","text","is-switch","model-switch"])])}]])},props:{isButton:{type:Boolean,required:!0},tags:{type:Array,required:!1,default:()=>[]}}},p=(0,u.A)(D,[["render",function(A,e){const t=(0,a.g2)("step-tags-item");return A.tags.length?((0,a.uX)(),(0,a.CE)("ul",g,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(A.tags,(e=>((0,a.uX)(),(0,a.Wv)(t,{key:e,tag:e,"is-button":A.isButton},null,8,["tag","is-button"])))),128))])):(0,a.Q3)("v-if",!0)}]]);var c=t(4236),d=t(7181),h=t(7985),E=t(2543);const m={name:"PageFindSteps",components:{ATable:s.A,ATranslation:l.A,StepTags:p},setup(){const{dataSteps:A}={dataSteps:(0,a.EW)((()=>{const A=[];return(0,E.forEach)(c.A,((e,t)=>{const a=(0,d.UM)({stepKey:e.key}),s=(0,d.fG)({group:e.group}),l={step:t,name:(0,h.a1)({placeholder:a}),tags:e.tags,group:(0,h.a1)({placeholder:s})};A.push(l)})),A}))},{columns:e}={columns:[{id:"step",label:"_STEP_NUMBER_",keyLabel:"step",to:{name:"PageStep",paramsDynamic:{step:"step"}},sortId:"step",width:190,grow:0},{id:"name",label:"_STEP_NAME_",keyLabel:"name",sortId:"name",to:{name:"PageStep",paramsDynamic:{step:"step"}}},{id:"group",label:"_STEP_GROUP_",keyLabel:"group",grow:0},{id:"tags",label:"_STEP_TAGS_",keyLabel:"tags",slot:"tags"}]};return{columns:e,dataSteps:A}}},F=(0,u.A)(m,[["render",function(A,e){const t=(0,a.g2)("a-translation"),s=(0,a.g2)("step-tags"),l=(0,a.g2)("a-table");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(t,{tag:"h1",text:"_FIND_STEPS_"}),(0,a.bF)(l,{columns:A.columns,data:A.dataSteps,pagination:{use:!0},"key-id":"step",label:"_STEPS_"},{tags:(0,a.k6)((({row:A})=>[(0,a.bF)(s,{"is-button":!0,tags:A.tags},null,8,["tags"])])),_:1},8,["columns","data"])])}]])},3645:A=>{A.exports="data:image/gif;base64,R0lGODdhDAAMAIABAMzMzP///ywAAAAADAAMAAACFoQfqYeabNyDMkBQb81Uat85nxguUAEAOw=="},9699:A=>{A.exports="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},1715:A=>{A.exports="data:image/gif;base64,R0lGODlhCQAJAJEAAAAAAP///7u7u////yH5BAEAAAMALAAAAAAJAAkAAAIQnG+CqCN/mlyvsRUpThG6AgA7"},8912:A=>{A.exports="data:image/gif;base64,R0lGODlhDQAKAIAAALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGuYnqUVSjvw26DzzXiqIDlVwAAOw=="},4092:A=>{A.exports="data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybEOnmOvUoWznTqeuEjNSCqeGRUAOw=="},5580:A=>{A.exports="data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybGu1JuxHoAfRNRW3TWXyF2YiRUAOw=="},8423:A=>{A.exports="data:image/gif;base64,R0lGODlhDQAKAIABALu7u////yH5BAEAAAEALAAAAAANAAoAAAIXjI8GybH6HHt0qourxC6CvzXieHyeWQAAOw=="},1590:A=>{A.exports="data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIZjI8Hybbx4oOuqgTynJf2Ln2NOHpQpmhAAQA7"},5132:A=>{A.exports="data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8Hybbx4oOuqgTynJd6bGlWg3DkJzoaUAAAOw=="},1118:A=>{A.exports="data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxInR0zqeAdhtJlXwV1oCll2HaWgAAOw=="},7879:A=>{A.exports="data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjan04jep1iZ1XRlAo5bVgAAOw=="},9903:A=>{A.exports="data:image/gif;base64,R0lGODlhDgAKAIABALu7u////yH5BAEAAAEALAAAAAAOAAoAAAIajI8HybbxIoiuwjane4iq5GlW05GgIkIZUAAAOw=="},3365:A=>{A.exports="data:image/gif;base64,R0lGODlhEgAKAIABALu7u////yH5BAEAAAEALAAAAAASAAoAAAIfjI9poI0cgDywrhuxfbrzDEbQM2Ei5aRjmoySW4pAAQA7"},6440:A=>{A.exports="data:image/gif;base64,R0lGODlhFQAKAIABALu7uwAAACH5BAEAAAEALAAAAAAVAAoAAAIjjI+ZoN0cgDwSmnpz1NCueYERhnibZVKLNnbOq8IvKpJtVQAAOw=="},7908:A=>{A.exports="data:image/gif;base64,R0lGODlhHgAKAIABAKqqqv///yH5BAEAAAEALAAAAAAeAAoAAAItjI+pG8APjZOTzgtqy7I3f1yehmQcFY4WKZbqByutmW4aHUd6vfcVbgudgpYCADs="},7488:A=>{A.exports="data:image/gif;base64,R0lGODlhJAAKAIAAALu7u////yH5BAEAAAEALAAAAAAkAAoAAAI0jI+py+2fwAHUSFvD3RlvG4HIp4nX5JFSpnZUJ6LlrM52OE7uSWosBHScgkSZj7dDKnWAAgA7"},2007:A=>{A.exports="data:image/gif;base64,R0lGODlhJwAKAIABALu7uwAAACH5BAEAAAEALAAAAAAnAAoAAAI3jI+pywYNI3uB0gpsRtt5fFnfNZaVSYJil4Wo03Hv6Z62uOCgiXH1kZIIJ8NiIxRrAZNMZAtQAAA7"},3996:A=>{A.exports="data:image/gif;base64,R0lGODlhKAAKAIABALu7u////yH5BAEAAAEALAAAAAAoAAoAAAI5jI+pywcNY3sBWHdNrplytD2ellDeSVbp+GmWqaDqDMepc8t17Y4vBsK5hDyJMcI6KkuYU+jpjLoKADs="},9524:A=>{A.exports="data:image/gif;base64,R0lGODlhKgAKAIABALu7u////yH5BAEAAAEALAAAAAAqAAoAAAI6jI+pywkNY3wG0GBvrsd2tXGYSGnfiF7ikpXemTpOiJScasYoDJJrjsG9gkCJ0ag6KhmaIe3pjDYBBQA7"},4636:A=>{A.exports="data:image/gif;base64,R0lGODlhLQAKAIABALu7u////yH5BAEAAAEALAAAAAAtAAoAAAI/jI+pywwNozSP1gDyyZcjb3UaRpXkWaXmZW4OqKLhBmLs+K263DkJK7OJeifh7FicKD9A1/IpGdKkyFpNmCkAADs="},9351:A=>{A.exports="data:image/gif;base64,R0lGODlhPgAKAIABALu7u////yH5BAEAAAEALAAAAAA+AAoAAAJPjI+py+0Knpz0xQDyuUhvfoGgIX5iSKZYgq5uNL5q69asZ8s5rrf0yZmpNkJZzFesBTu8TOlDVAabUyatguVhWduud3EyiUk45xhTTgMBBQA7"},7477:A=>{A.exports="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2236%22%20height%3D%2212%22%20viewBox%3D%220%200%2036%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba%280%2C%200%2C%200%2C%20.2%29%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2218%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba%280%2C%200%2C%200%2C%20.2%29%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.33s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%20%20%3Ccircle%20cx%3D%2230%22%20cy%3D%226%22%20r%3D%223%22%20fill%3D%22rgba%280%2C%200%2C%200%2C%20.2%29%22%3E%0A%20%20%20%20%3Canimate%20attributeName%3D%22r%22%20values%3D%223%3B5%3B3%22%20calcMode%3D%22linear%22%20begin%3D%22.66s%22%20dur%3D%221s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%0A%20%20%3C%2Fcircle%3E%0A%3C%2Fsvg%3E%0A"},9227:A=>{A.exports="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%274%27%20height%3D%274%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20stroke%3D%27%2300A835%27%20fill%3D%27none%27%20stroke-linecap%3D%27round%27%20d%3D%27M0%203L2%201%204%203%27%2F%3E%3C%2Fsvg%3E%0A"},5073:A=>{A.exports="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%274%27%20height%3D%274%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20stroke%3D%27%23ff0000%27%20fill%3D%27none%27%20stroke-linecap%3D%27round%27%20stroke-opacity%3D%27.75%27%20d%3D%27M0%203L2%201%204%203%27%2F%3E%3C%2Fsvg%3E%0A"},2723:A=>{A.exports="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%278%27%20height%3D%2712%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M0%200L8%200%208%2012%204.09117821%209%200%2012z%27%2F%3E%3C%2Fsvg%3E%0A"},2870:A=>{A.exports="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-checked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%234099FF%22%20fill-rule%3D%22nonzero%22%20rx%3D%222%22%2F%3E%3Cpath%20id%3D%22Path%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22nonzero%22%20d%3D%22M11.5703186%2C3.14417309%20C11.8516238%2C2.73724603%2012.4164781%2C2.62829933%2012.83558%2C2.89774797%20C13.260121%2C3.17069355%2013.3759736%2C3.72932262%2013.0909105%2C4.14168582%20L7.7580587%2C11.8560195%20C7.43776896%2C12.3193404%206.76483983%2C12.3852142%206.35607322%2C11.9948725%20L3.02491697%2C8.8138662%20C2.66090143%2C8.46625845%202.65798871%2C7.89594698%203.01850234%2C7.54483354%20C3.373942%2C7.19866177%203.94940006%2C7.19592841%204.30829608%2C7.5386474%20L6.85276923%2C9.9684299%20L11.5703186%2C3.14417309%20Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A"},206:A=>{A.exports="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cg%20id%3D%22checklist-unchecked%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20id%3D%22Rectangle%22%20width%3D%2215%22%20height%3D%2215%22%20x%3D%22.5%22%20y%3D%22.5%22%20fill-rule%3D%22nonzero%22%20stroke%3D%22%234C4C4C%22%20rx%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A"},7036:A=>{A.exports="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M15%2C6%20C15%2C5.45%2014.55%2C5%2014%2C5%20L6%2C5%20C5.45%2C5%205%2C5.45%205%2C6%20L5%2C10%20C5%2C10.55%205.45%2C11%206%2C11%20L14%2C11%20C14.55%2C11%2015%2C10.55%2015%2C10%20L15%2C9%20L16%2C9%20L16%2C12%20L9%2C12%20L9%2C19%20C9%2C19.55%209.45%2C20%2010%2C20%20L11%2C20%20C11.55%2C20%2012%2C19.55%2012%2C19%20L12%2C14%20L18%2C14%20L18%2C7%20L15%2C7%20L15%2C6%20Z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23000%22%20fill-rule%3D%22nonzero%22%20d%3D%22M1%2C1%20L8.25%2C1%20C8.66421356%2C1%209%2C1.33578644%209%2C1.75%20L9%2C1.75%20C9%2C2.16421356%208.66421356%2C2.5%208.25%2C2.5%20L2.5%2C2.5%20L2.5%2C8.25%20C2.5%2C8.66421356%202.16421356%2C9%201.75%2C9%20L1.75%2C9%20C1.33578644%2C9%201%2C8.66421356%201%2C8.25%20L1%2C1%20Z%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A"},8971:A=>{A.exports="data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M4%203h16a1%201%200%200%201%201%201v16a1%201%200%200%201-1%201H4a1%201%200%200%201-1-1V4a1%201%200%200%201%201-1zm1%202v14h14V5H5zm4.79%202.565l5.64%204.028a.5.5%200%200%201%200%20.814l-5.64%204.028a.5.5%200%200%201-.79-.407V7.972a.5.5%200%200%201%20.79-.407z%22%2F%3E%3C%2Fsvg%3E%0A"}}]);
//# sourceMappingURL=chunk.816.a6ceae19f8d7ef12ff06.js.map