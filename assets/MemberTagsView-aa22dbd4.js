import{_ as w,H as b,s as g,a as r,d as f,b as t,e as m,B as u,U as D,u as T,F as h,E as y,C as p,t as E,r as _,o as n,D as L}from"./index-531739a6.js";import{t as x}from"./tagsStore-ae468c09.js";import{m as S}from"./memberStore-3b80990c.js";const N={data(){return{userId:null,isDisabled:!0,tempSelectedTag:"",selectedTags:[],filteredTags:null,filterList:[]}},computed:{...b(x,["tags","tagList"]),...b(S,["user"])},methods:{...g(E,["getUserId"]),...g(x,["getTags"]),...g(S,["getMemberData","editMemberData"]),searchTag(l){this.selectedTags.length<=4&&setTimeout(()=>{l.query.trim().length?this.filteredTags=this.filterList.filter(e=>e.label.toLowerCase().match(l.query.toLowerCase())):this.filteredTags=[...this.filterList]},250)},addTag(l){if(l.target.tagName==="BUTTON"){const o=l.target.textContent;this.selectedTags.push(o),this.tempSelectedTag="";return}if(l.target.tagName==="A"){const o=this.tempSelectedTag.value||this.tempSelectedTag;if(this.selectedTags.some(a=>a===o)){this.$toast.add({severity:"warn",detail:"已有相同標籤",life:1e3});return}if(o===""){this.$toast.add({severity:"info",detail:"請輸入標籤內容",life:1e3});return}this.selectedTags.push(o),this.tempSelectedTag="";return}const e=l.target.value;if(this.selectedTags.some(o=>o===e)){this.$toast.add({severity:"warn",detail:"已有相同標籤",life:1e3});return}if(e===""){this.$toast.add({severity:"info",detail:"請輸入標籤內容",life:1e3});return}this.selectedTags.push(e),this.tempSelectedTag=""},handleSubmit(){const l={id:this.userId,favoriteSports:this.selectedTags};this.editMemberData(l),this.$toast.add({severity:"success",detail:"修改成功",life:1e3}),this.isDisabled=!0},enableEdit(){this.isDisabled=!this.isDisabled},removeTag(l){this.selectedTags.splice(l,1)},cancelEdit(){this.getMemberData(this.user.id),this.enableEdit()}},watch:{tagList(){this.filterList=JSON.parse(JSON.stringify(this.tagList))},user(){this.selectedTags=JSON.parse(JSON.stringify(this.user.favoriteSports))}},mounted(){this.getTags(),this.userId=this.getUserId(),this.getMemberData(this.userId)}},V=t("h2",{class:"mb-8 text-xl"},"設定個人標籤",-1),I={class:"mb-10"},M={class:"mb-4 text-lg"},B={class:"text-primary-01"},O={class:"flex items-center"},U=t("i",{class:"pi pi-pencil ml-4 mr-1"},null,-1),A={class:"mb-10"},J={class:"flex flex-wrap items-center gap-3"},K={class:"mr-4 text-sm"},j=["onClick"],q=t("i",{class:"pi pi-times text-xs"},null,-1),F=[q],P={key:0,class:"mt-10 ml-auto flex gap-4"},z={key:0},H={class:"mb-10"},G=t("h3",{class:"mb-4 ml-2 text-lg"},"Tags :",-1),Q={class:"flex flex-wrap"},R=["disabled"];function W(l,e,C,o,i,a){const k=_("PToast"),v=_("AutoComplete");return n(),r(h,null,[f(k),t("main",null,[V,t("section",I,[t("h3",M,[m(" 可以新增 "),t("strong",B,u(5-i.selectedTags.length),1),m(" 個標籤 ")]),t("div",O,[f(v,{modelValue:i.tempSelectedTag,"onUpdate:modelValue":e[0]||(e[0]=s=>i.tempSelectedTag=s),suggestions:i.filteredTags,onComplete:a.searchTag,onKeyup:D(a.addTag,["enter"]),optionLabel:"label",loadingIcon:"false",placeholder:"輸入適合您的標籤 ( 例如: 攀岩 )",disabled:i.selectedTags.length===5||i.isDisabled===!0},null,8,["modelValue","suggestions","onComplete","onKeyup","disabled"]),i.isDisabled===!0?(n(),r("a",{key:0,href:"#",onClick:e[1]||(e[1]=T((...s)=>a.enableEdit&&a.enableEdit(...s),["prevent"])),class:"hover:text-primary-01"},[U,m(" 編輯標籤 ")])):(n(),r("a",{key:1,href:"#",onClick:e[2]||(e[2]=T((...s)=>a.addTag&&a.addTag(...s),["prevent"])),class:"btn btn-primary ml-1 px-2 py-3"}," 新增 "))])]),t("section",A,[t("ul",J,[(n(!0),r(h,null,y(i.selectedTags,(s,d)=>(n(),r("li",{class:"flex items-center rounded-full bg-secondary-yellow py-2 pl-8 pr-4",key:s+d},[t("span",K,u(s),1),i.isDisabled?p("",!0):(n(),r("button",{key:0,type:"button",class:"flex h-5 w-5 items-center justify-center rounded-full bg-primary-03",onClick:c=>a.removeTag(d)},F,8,j))]))),128))]),i.isDisabled?p("",!0):(n(),r("div",P,[t("button",{type:"button",onClick:e[3]||(e[3]=(...s)=>a.handleSubmit&&a.handleSubmit(...s)),class:"btn btn-primary px-3"}," 儲存變更 "),t("button",{type:"button",onClick:e[4]||(e[4]=(...s)=>a.cancelEdit&&a.cancelEdit(...s)),class:"btn btn-primary px-3"}," 取消 ")]))]),i.isDisabled?p("",!0):(n(),r("section",z,[t("div",H,[G,t("ul",Q,[(n(!0),r(h,null,y(l.tags,(s,d)=>(n(),r("li",{class:"flex items-center justify-center",key:s+d},[t("button",{class:L(["mb-2 mr-2 rounded-full bg-primary-02 px-8 py-2 hover:bg-primary-04",{hidden:i.selectedTags.some(c=>c===s),"cursor-not-allowed opacity-50":i.selectedTags.length===5}]),type:"button",disabled:i.selectedTags.length===5,onClick:e[5]||(e[5]=(...c)=>a.addTag&&a.addTag(...c))},u(s),11,R)]))),128))])])]))])],64)}const $=w(N,[["render",W]]);export{$ as default};
