import{_ as m,s as n,t as p,a as h,d as u,b as a,r as v,o as b}from"./index-1742c032.js";import{V as E}from"./VuelidateForm-4ca136f3.js";import{c}from"./createStepsStore-74a258d4.js";import"./i18n-validators-1df3ab55.js";const{VITE_URL:_}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},f={name:"MemberEditInfoView",components:{VuelidateForm:E},data(){return{activity:{},isDisabled:!0}},computed:{...n(c,["isChildFormValid"])},methods:{...p(c,["updateFormValid"]),submitChildForm(){this.$refs.childForm.v$.$invalid?this.updateFormValid(!0):this.updateFormValid(!1),this.$refs.childForm.handleUpdate(!this.$refs.childForm.v$.$invalid)},getActivity(){const{id:o}=this.$route.params,t=`${_}/activities/${o}`;this.$http.get(t).then(e=>{this.activity=e.data}).catch(e=>{const r=e.response.statusText;this.$toast.add({severity:"error",detail:`${r} 取得活動資訊失敗`,life:1e3,contentStyleClass:"custom-toast-danger"})})},enableEdit(){this.isDisabled=!this.isDisabled},cancelEdit(){this.getActivity(),this.enableEdit()},removeLocal(){localStorage.removeItem("createTempFormData")}},mounted(){this.getActivity(),this.removeLocal()}},V={class:"mb-10 py-10"},y={class:"mt-16 flex gap-4"};function F(o,t,e,r,d,i){const l=v("VuelidateForm");return b(),h("section",V,[u(l,{activity:d.activity,ref:"childForm"},null,8,["activity"]),a("div",y,[a("button",{type:"button",class:"btn btn-primary ml-auto",onClick:t[0]||(t[0]=(...s)=>i.submitChildForm&&i.submitChildForm(...s))}," 確認 "),a("button",{type:"button",onClick:t[1]||(t[1]=(...s)=>i.cancelEdit&&i.cancelEdit(...s)),class:"btn border border-primary-01 hover:bg-primary-01 hover:text-white"}," 取消 ")])])}const I=m(f,[["render",F]]);export{I as default};