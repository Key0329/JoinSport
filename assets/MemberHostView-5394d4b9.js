import{_ as u,s as m,a,b as t,F as b,E as x,t as f,r as g,o as n,B as r,d as l,w as p,e as h}from"./index-531739a6.js";const{VITE_URL:y}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{activities:[]}},computed:{currentActivities(){return this.activities.filter(s=>s.isCancelled!==!0)}},methods:{...m(f,["getUserId"]),getUsersActivity(){const s=this.getUserId(),i=`${y}/activities?userId=${s}`;this.$http.get(i).then(o=>{this.activities=o.data}).catch(o=>{const c=o.response.statusText;this.$toast.add({severity:"error",detail:`${c} 未能取得會員活動資訊`,life:1e3,contentStyleClass:"custom-toast-danger"})})}},mounted(){this.getUsersActivity()}},A=t("h1",{class:"mb-12 text-3xl"},"我主持的揪團",-1),T={class:"mb-[160px] table-fixed"},I=t("thead",null,[t("tr",{class:"border-b border-gray-300"},[t("th",{width:"25%",class:"py-2 text-start font-normal"},"名稱"),t("th",{width:"15%",class:"py-2 text-start font-normal"},"日期"),t("th",{width:"30%",class:"py-2 text-start font-normal"},"地點"),t("th",{width:"10%",class:"py-2 text-center font-normal"},"參與人數"),t("th",{width:"20%",class:"py-2"})])],-1),V={class:"py-2"},$={class:"py-2"},w={class:"py-2"},L={class:"py-2 text-center"},U={class:"flex gap-1 py-2 text-center"},B=t("button",{type:"button",class:"btn border border-primary-01 px-2 py-1 hover:bg-primary-01 hover:text-white"},[t("i",{class:"pi pi-image"}),h(" 頁面 ")],-1),R=t("button",{type:"button",class:"btn btn-primary h-full px-2 py-1"},[t("i",{class:"pi pi-user-edit"}),h(" 編輯 ")],-1);function S(s,i,o,c,k,_){const d=g("RouterLink");return n(),a("main",null,[t("section",null,[A,t("table",T,[I,t("tbody",null,[(n(!0),a(b,null,x(_.currentActivities,e=>(n(),a("tr",{key:e==null?void 0:e.id,class:"mb-4"},[t("td",V,r(e.title),1),t("td",$,r(e.date),1),t("td",w,r(e.address),1),t("td",L,r(e.maxJoinNum),1),t("td",U,[l(d,{to:`/JoinDetail/id=${e.id}`},{default:p(()=>[B]),_:2},1032,["to"]),l(d,{to:`/Member/Edit/EditInfo=${e.id}&title=${e.title}`},{default:p(()=>[R]),_:2},1032,["to"])])]))),128))])])])])}const v=u(E,[["render",S]]);export{v as default};
