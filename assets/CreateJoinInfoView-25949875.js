import{_ as r,v as c,s as m,a as d,b as t,d as e,r as o,o as l}from"./index-4ff3593d.js";import{V as p}from"./VuelidateForm-634342ec.js";import{S as _}from"./StepPagination-4c57ff40.js";import{c as s}from"./createSteps-7f501df7.js";import"./i18n-validators-5582fd1f.js";const h={components:{VuelidateForm:p,StepPagination:_},computed:{...c(s,["isChildFormValid"])},methods:{submitChildForm(){this.$refs.childForm.v$.$invalid?this.updateFormValid(!0):this.updateFormValid(!1),this.$refs.childForm.handleSubmit(!this.$refs.childForm.v$.$invalid)},...m(s,["updateFormValid"])}},u={class:"mb-10 py-10"},f={class:"container"},x=t("h1",{class:"mb-8 text-center text-4xl"},"五個步驟，讓您快速開團",-1),F=t("h2",{class:"mb-12 text-center text-xl"},"首先設定必要的資訊",-1),V={class:"flex justify-center"},$={class:"mx-auto mt-20 w-1/2"};function v(b,S,C,N,g,i){const a=o("VuelidateForm"),n=o("StepPagination");return l(),d("section",u,[t("div",f,[x,F,t("div",V,[e(a,{ref:"childForm"},null,512)]),t("div",$,[e(n,{onEmitNext:i.submitChildForm},null,8,["onEmitNext"])])])])}const y=r(h,[["render",v]]);export{y as default};