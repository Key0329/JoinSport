import{s as c,_ as a,r as l,o as r,a as u,H as s,E as p}from"./index-29bbafb4.js";import{c as h}from"./createStepsStore-819a7cb8.js";const m={name:"StepPagination",props:{activity:{type:Object}},data(){return{currentStep:null}},computed:{...c(h,["isChildFormValid"])},methods:{prevStep(){const t=parseInt(this.currentStep,10)-1,e=this.$route.path.replace(/\d+$/,t);this.$emit("emitPrev"),this.$router.push(e)},nextStep(){const t=parseInt(this.currentStep,10)+1,e=this.$route.path.replace(/\d+$/,t);this.$emit("emitNext"),!this.isChildFormValid&&this.$router.push(e)},handleSubmit(){this.$emit("handleSubmit")}},mounted(){var t;this.currentStep=(t=this.$route.path.match(/\d+$/))==null?void 0:t[0]}},S={class:"flex justify-between border-t pt-10"};function d(t,e,_,b,n,o){const i=l("PButton");return r(),u("div",S,[parseInt(n.currentStep)!==1?(r(),s(i,{key:0,type:"button",label:"上一步",icon:"pi pi-arrow-left",iconPos:"left",class:"w-1/4",onClick:o.prevStep},null,8,["onClick"])):p("",!0),parseInt(n.currentStep)!==4?(r(),s(i,{key:1,type:"button",label:"下一步",icon:"pi pi-arrow-right",iconPos:"right",class:"ml-auto w-1/4",onClick:o.nextStep},null,8,["onClick"])):p("",!0),parseInt(n.currentStep)===4?(r(),s(i,{key:2,type:"button",label:"確認開團",icon:"pi pi-arrow-right",iconPos:"right",class:"ml-auto w-1/4",onClick:o.handleSubmit},null,8,["onClick"])):p("",!0)])}const C=a(m,[["render",d]]);export{C as S};
