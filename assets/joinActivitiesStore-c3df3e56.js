import{H as d,I as n}from"./index-7d43ac81.js";const{VITE_URL:o}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},h=d("joinActivities",{state:()=>({activitiesList:[],orders:[],currentPage:1,pageLimit:6}),getters:{restructureActivitiesList(){const t=[];return this.activitiesList.forEach(i=>{const a=i.date.split("-"),s=`${a[1]}/${a[2]}`;t.push({...i,date:s,participants:[],numParticipants:0,participantsId:[],originDate:i.date})}),this.orders.forEach(({user:i,activity:a})=>{const s=a.id,r=i.img,c=i.id;t[s-1]=t[s-1]||{participants:[],participantsId:[]},t[s-1].participants.push(r),t[s-1].numParticipants=t[s-1].participants.length,t[s-1].participantsId.push(c)}),t.map(i=>({...i,participants:i.participants.slice(0,3)}))}},actions:{getActivities(){const t=`${o}/activities`;n.get(t).then(e=>{this.activitiesList=e.data}).catch(e=>{console.log(e),alert("err")})},getOrders(){const t=`${o}/orders?isCancelled=false&_expand=activity&_expand=user`;n.get(t).then(e=>{this.orders=e.data}).catch(e=>{console.log(e),alert("err")})},changePage(t=1){this.currentPage=t},arrangePage(t){const e=(this.currentPage-1)*this.pageLimit,i=this.currentPage*this.pageLimit,a=t.slice(e,i),s=this.restructureActivitiesList.filter(p=>p.isCancelled===!1),r=Math.ceil(s.length/this.pageLimit);return{list:a,pageTotal:r}}}});export{h as j};
