import{_ as S,s as v,t as C,a as n,d as p,b as e,e as m,C as u,z as L,F as _,B as h,r as T,o as i,G as N,D as V,E}from"./index-a204954f.js";import{s as f}from"./searchStore-8230aa9d.js";import{S as I}from"./StepPagination-e178c4c6.js";import"./createStepsStore-e27f39a6.js";const k={name:"CreateJoinTagsView",components:{StepPagination:I},data(){return{tempSelectedTag:null,selectedTags:[],filteredTags:null}},computed:{...v(f,["tags","tagList"])},methods:{...C(f,["getTags"]),searchTag(t){this.selectedTags.length<=4&&setTimeout(()=>{t.query.trim().length?this.filteredTags=this.tagList.filter(s=>s.label.toLowerCase().match(t.query.toLowerCase())):this.filteredTags=[...this.tagList]},250)},addTag(t){if(t.target.tagName==="BUTTON"){const d=t.target.textContent;this.selectedTags.push(d),this.tempSelectedTag="";return}const s=t.target.value;if(this.selectedTags.some(d=>d===s)){this.$toast.add({severity:"warn",detail:"已有相同標籤",life:3e3});return}if(s===""){this.$toast.add({severity:"info",detail:"請輸入標籤內容",life:3e3});return}this.selectedTags.push(s),this.tempSelectedTag=""},removeTag(t){this.selectedTags.splice(t,1)},saveTagsToLocal(){localStorage.setItem("selectedTags",JSON.stringify(this.selectedTags))},getLocalTags(){if(localStorage.getItem("selectedTags")){const t=JSON.parse(localStorage.getItem("selectedTags"));this.selectedTags=t}}},mounted(){this.getLocalTags(),this.getTags()}},c=t=>(V("data-v-05dbd900"),t=t(),E(),t),P={class:"py-10"},B={class:"container"},J=c(()=>e("h1",{class:"mb-8 text-center text-xl md:text-4xl"}," 選擇適合的標籤來描述將要開的團 ",-1)),j={class:"mb-6 text-center text-lg md:mb-12 md:text-xl"},A=c(()=>e("br",null,null,-1)),K={class:"text-primary-01"},O={class:"flex flex-col items-center justify-center"},q={class:"mb-4 flex flex-wrap gap-3 sm:mb-10 md:mb-[100px] md:w-1/2"},z={class:"mr-2 text-sm md:mr-8 md:text-lg"},D=c(()=>e("i",{class:"pi pi-tag mr-2"},null,-1)),F=["onClick"],U=c(()=>e("i",{class:"pi pi-times text-xs"},null,-1)),G=[U],H={class:"mb-10 md:w-1/2"},M=c(()=>e("h3",{class:"mb-4 ml-2 text-lg"},"Tags :",-1)),Q={class:"flex flex-wrap"},R=["disabled"],W={class:"mx-auto w-full md:w-1/2"};function X(t,s,x,d,a,o){const b=T("PToast"),y=T("AutoComplete"),w=T("StepPagination");return i(),n(_,null,[p(b),e("section",P,[e("div",B,[J,e("h2",j,[m(" 請盡量詳細地選擇，將會幫助您的揪團找到最適合的團員"),A,m("可以新增 "),e("strong",K,u(5-a.selectedTags.length),1),m(" 個標籤 ")]),e("div",O,[p(y,{modelValue:a.tempSelectedTag,"onUpdate:modelValue":s[0]||(s[0]=l=>a.tempSelectedTag=l),suggestions:a.filteredTags,onComplete:o.searchTag,onKeyup:L(o.addTag,["enter"]),optionLabel:"label",loadingIcon:"false",placeholder:"輸入適合揪團的標籤 ( 例如: 攀岩、潛水、戶外運動 )",disabled:a.selectedTags.length===5,class:"mb-10 flex w-full justify-center"},null,8,["modelValue","suggestions","onComplete","onKeyup","disabled"]),e("ul",q,[(i(!0),n(_,null,h(a.selectedTags,(l,r)=>(i(),n("li",{class:"flex items-center rounded-full bg-secondary-yellow py-2 pl-4 pr-4 md:pl-8",key:l+r},[e("span",z,[D,m(u(l),1)]),e("button",{type:"button",class:"flex h-5 w-5 items-center justify-center rounded-full bg-primary-03",onClick:g=>o.removeTag(r)},G,8,F)]))),128))]),e("div",H,[M,e("ul",Q,[(i(!0),n(_,null,h(t.tags,(l,r)=>(i(),n("li",{class:"flex items-center justify-center",key:l+r},[e("button",{class:N(["mb-2 mr-2 rounded-full bg-primary-02 px-4 py-2 text-xs hover:bg-primary-04 md:px-8 md:text-base",{hidden:a.selectedTags.some(g=>g===l),"cursor-not-allowed opacity-50":a.selectedTags.length===5}]),type:"button",disabled:a.selectedTags.length===5,onClick:s[1]||(s[1]=g=>o.addTag(g))},u(l),11,R)]))),128))])]),e("div",W,[p(w,{onEmitNext:o.saveTagsToLocal,onEmitPrev:o.saveTagsToLocal},null,8,["onEmitNext","onEmitPrev"])])])])])],64)}const te=S(k,[["render",X],["__scopeId","data-v-05dbd900"]]);export{te as default};