import{_ as m,G as d,s as n,a as p,d as h,b as s,r as u,o as v}from"./index-56f709e6.js";import{V as b}from"./VuelidateForm-935171b9.js";import{c as r}from"./createSteps-ecbfdee0.js";import"./i18n-validators-c6003628.js";const{VITE_URL:_}={VITE_URL:"https://vercel.com/key0329/join-sport-server-vercel",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},E={inject:["reload"],components:{VuelidateForm:b},data(){return{activity:{},isDisabled:!0}},computed:{...d(r,["isChildFormValid"])},methods:{...n(r,["updateFormValid"]),submitChildForm(){this.$refs.childForm.v$.$invalid?this.updateFormValid(!0):this.updateFormValid(!1),this.$refs.childForm.handleUpdate(!this.$refs.childForm.v$.$invalid)},getActivity(){const{id:a}=this.$route.params,t=`${_}/activities/${a}`;this.$http.get(t).then(e=>{this.activity=e.data}).catch(e=>{console.log(e)})},enableEdit(){this.isDisabled=!this.isDisabled},cancelEdit(){this.reload()},removeLocal(){localStorage.removeItem("createTempFormData")}},mounted(){this.getActivity(),this.removeLocal()}},V={class:"mb-10 py-10"},f={class:"mt-16 flex gap-4"};function F(a,t,e,y,c,i){const l=u("VuelidateForm");return v(),p("section",V,[h(l,{activity:c.activity,ref:"childForm"},null,8,["activity"]),s("div",f,[s("button",{type:"button",class:"btn btn-primary ml-auto",onClick:t[0]||(t[0]=(...o)=>i.submitChildForm&&i.submitChildForm(...o))}," 確認 "),s("button",{type:"button",onClick:t[1]||(t[1]=(...o)=>i.cancelEdit&&i.cancelEdit(...o)),class:"btn border border-primary-01 hover:bg-primary-01 hover:text-white"}," 取消 ")])])}const I=m(E,[["render",F]]);export{I as default};
