import{_ as l,a as p,b as n,d as u,r as m,o as h}from"./index-1742c032.js";const{VITE_URL:c}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},E={name:"MemberEditContentView",data(){return{editorValue:"",quillEditor:null}},methods:{getActivity(){const{id:o}=this.$route.params,t=`${c}/activities/${o}`;this.$http.get(t).then(e=>{this.editorValue=e.data.content}).catch(e=>{const a=e.response.statusText;this.$toast.add({severity:"error",detail:`${a} 取得活動資訊失敗`,life:1e3,contentStyleClass:"custom-toast-danger"})})},updateActivityContent(){const{id:o}=this.$route.params,t=`${c}/activities/${o}`,e={content:this.editorValue};this.$http.patch(t,e).then(()=>{this.$toast.add({severity:"success",detail:"修改成功",life:1e3})}).catch(a=>{const i=a.response.statusText;this.$toast.add({severity:"error",detail:`${i} 更新活動資訊失敗`,life:1e3,contentStyleClass:"custom-toast-danger"})})},cancelEdit(){this.getActivity()}},mounted(){this.getActivity()}},v={class:"py-10"},y={class:"mb-10 flex flex-col items-center"},_={class:"mt-10 flex gap-4"};function V(o,t,e,a,i,r){const d=m("PEditor");return h(),p("section",v,[n("div",y,[u(d,{modelValue:i.editorValue,"onUpdate:modelValue":t[0]||(t[0]=s=>i.editorValue=s),editorStyle:"height: 320px",placeholder:"請輸入簡介"},null,8,["modelValue"])]),n("div",_,[n("button",{type:"button",class:"btn btn-primary ml-auto",onClick:t[1]||(t[1]=(...s)=>r.updateActivityContent&&r.updateActivityContent(...s))}," 確認 "),n("button",{type:"button",onClick:t[2]||(t[2]=(...s)=>r.cancelEdit&&r.cancelEdit(...s)),class:"btn border border-primary-01 hover:bg-primary-01 hover:text-white"}," 取消 ")])])}const b=l(E,[["render",V]]);export{b as default};