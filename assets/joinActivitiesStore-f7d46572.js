import{I as g,J as n}from"./index-aea1ee1d.js";const{VITE_URL:o}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},d=g("joinActivities",{state:()=>({activitiesList:[],orders:[],currentPage:1,pageLimit:6,isLoading:!0}),getters:{restructureActivitiesList(){const t=[];return this.activitiesList.forEach(i=>{const a=i.date.split("-"),e=`${a[1]}/${a[2]}`;t.push({...i,date:e,participants:[],numParticipants:0,participantsId:[],originDate:i.date})}),this.orders.forEach(({user:i,activity:a})=>{const e=a.id,r=i.img,c=i.id;t[e-1]=t[e-1]||{participants:[],participantsId:[]},t[e-1].participants.push(r),t[e-1].numParticipants=t[e-1].participants.length,t[e-1].participantsId.push(c)}),t.map(i=>({...i,participants:i.participants.slice(0,3)}))},availableActivities(){return this.restructureActivitiesList.map(i=>{const a=new Date(i.originDate).getTime(),e=i;return e.originDate=a,e}).filter(i=>{const a=new Date().getTime();return i.originDate>a})}},actions:{getActivities(){const t=`${o}/activities`;n.get(t).then(s=>{this.activitiesList=s.data,this.isLoading=!1}).catch(s=>{console.log(s),alert("err")})},getOrders(){const t=`${o}/orders?isCancelled=false&_expand=activity&_expand=user`;n.get(t).then(s=>{this.orders=s.data}).catch(s=>{console.log(s),alert("err")})},changePage(t=1){this.currentPage=t},arrangePage(t){const s=(this.currentPage-1)*this.pageLimit,i=this.currentPage*this.pageLimit,a=t.slice(s,i),e=this.restructureActivitiesList.filter(p=>p.isCancelled===!1),r=Math.ceil(e.length/this.pageLimit);return{list:a,pageTotal:r}}}});export{d as j};
