import{H as c,I as s}from"./index-1031d0a2.js";const{VITE_URL:r}={VITE_URL:"https://vercel.com/key0329/join-sport-server-vercel",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},n=c("memberStore",{state:()=>({user:""}),getters:{},actions:{getMemberData(e){const o=`${r}/users/${e}`;s.get(o).then(t=>{this.user=t.data}).catch(t=>{console.log(t)})},editMemberData(e){const o=`${r}/users/${e.id}`;console.log(e),s.patch(o,e).then(()=>{alert("修改成功")}).catch(t=>{console.log(t)})}}});export{n as m};
