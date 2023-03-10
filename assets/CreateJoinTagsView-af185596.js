import{_ as S,G as w,s as v,a as n,b as t,e as m,B as p,d as u,U as C,F as T,C as _,r as h,o as i,J as L,z as N,A as I}from"./index-9dedc0dc.js";import{t as f}from"./tagsStore-25218331.js";import{S as V}from"./StepPagination-7f43b480.js";import"./createSteps-7ee460b1.js";const k={components:{StepPagination:V},data(){return{tempSelectedTag:null,selectedTags:[],filteredTags:null}},computed:{...w(f,["tags","tagList"])},methods:{...v(f,["getTags"]),searchTag(e){this.selectedTags.length<=4&&setTimeout(()=>{e.query.trim().length?this.filteredTags=this.tagList.filter(s=>s.label.toLowerCase().match(e.query.toLowerCase())):this.filteredTags=[...this.tagList]},250)},addTag(e){if(e.target.tagName==="BUTTON"){const r=e.target.textContent;this.selectedTags.push(r),this.tempSelectedTag="";return}const s=e.target.value;if(this.selectedTags.some(r=>r===s)){alert("已有相同標籤");return}if(s===""){alert("請輸入標籤內容");return}this.selectedTags.push(s),this.tempSelectedTag=""},removeTag(e){this.selectedTags.splice(e,1)},saveTagsToLocal(){localStorage.setItem("selectedTags",JSON.stringify(this.selectedTags))},getLocalTags(){if(localStorage.getItem("selectedTags")){const e=JSON.parse(localStorage.getItem("selectedTags"));this.selectedTags=e}}},mounted(){this.getLocalTags(),this.getTags()}},c=e=>(N("data-v-fa0b3fae"),e=e(),I(),e),E={class:"py-10"},B={class:"container"},J=c(()=>t("h1",{class:"mb-8 text-center text-4xl"},"選擇適合的標籤來描述將要開的團",-1)),P={class:"mb-12 text-center text-xl"},j=c(()=>t("br",null,null,-1)),A={class:"text-primary-01"},O={class:"flex flex-col items-center justify-center"},U={class:"mb-[100px] flex w-1/2 flex-wrap gap-3"},q={class:"mr-8 text-lg"},z=c(()=>t("i",{class:"pi pi-tag mr-2"},null,-1)),F=["onClick"],K=c(()=>t("i",{class:"pi pi-times text-xs"},null,-1)),D=[K],G={class:"mb-10 w-1/2"},H=c(()=>t("h3",{class:"mb-4 ml-2 text-lg"},"Tags :",-1)),M={class:"flex flex-wrap"},Q=["disabled"],R={class:"mx-auto w-1/2"};function W(e,s,x,r,l,o){const b=h("AutoComplete"),y=h("StepPagination");return i(),n("section",E,[t("div",B,[J,t("h2",P,[m(" 請盡量詳細地選擇，將會幫助您的揪團找到最適合的團員"),j,m("可以新增 "),t("strong",A,p(5-l.selectedTags.length),1),m(" 個標籤 ")]),t("div",O,[u(b,{modelValue:l.tempSelectedTag,"onUpdate:modelValue":s[0]||(s[0]=a=>l.tempSelectedTag=a),suggestions:l.filteredTags,onComplete:s[1]||(s[1]=a=>o.searchTag(a)),onKeyup:s[2]||(s[2]=C(a=>o.addTag(a),["enter"])),optionLabel:"label",loadingIcon:"false",placeholder:"輸入適合揪團的標籤 ( 例如: 攀岩、潛水、戶外運動 )",disabled:l.selectedTags.length===5,class:"mb-10 flex w-full justify-center"},null,8,["modelValue","suggestions","disabled"]),t("ul",U,[(i(!0),n(T,null,_(l.selectedTags,(a,g)=>(i(),n("li",{class:"flex items-center rounded-full bg-secondary-yellow py-2 pl-8 pr-4",key:a+g},[t("span",q,[z,m(p(a),1)]),t("button",{type:"button",class:"flex h-5 w-5 items-center justify-center rounded-full bg-primary-03",onClick:d=>o.removeTag(g)},D,8,F)]))),128))]),t("div",G,[H,t("ul",M,[(i(!0),n(T,null,_(e.tags,(a,g)=>(i(),n("li",{class:"flex items-center justify-center",key:a+g},[t("button",{class:L(["mb-2 mr-2 rounded-full bg-primary-02 px-8 py-2 hover:bg-primary-04",{hidden:l.selectedTags.some(d=>d===a),"cursor-not-allowed opacity-50":l.selectedTags.length===5}]),type:"button",disabled:l.selectedTags.length===5,onClick:s[3]||(s[3]=d=>o.addTag(d))},p(a),11,Q)]))),128))])]),t("div",R,[u(y,{onEmitNext:o.saveTagsToLocal,onEmitPrev:o.saveTagsToLocal},null,8,["onEmitNext","onEmitPrev"])])])])])}const ee=S(k,[["render",W],["__scopeId","data-v-fa0b3fae"]]);export{ee as default};