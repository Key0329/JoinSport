import{_ as w,s as E,t as k,a as n,H as V,w as x,F as f,B as b,u as D,b as i,r as g,o,e as T,C as u,d as A}from"./index-46b16702.js";import{j as y}from"./activitiesStore-92de757d.js";import{J as B}from"./JoinCardRow-6ffdd7e3.js";const{VITE_URL:C}={VITE_URL:"https://joinsport-server-render.onrender.com",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},R={name:"MemberCollectionView",components:{JoinCardRow:B},data(){return{userId:null,bookmarks:[],filteredArray:[]}},computed:{...E(y,["availableActivities"]),membersActivities(){return this.filteredArray.map(e=>{var h,_;const t=(h=e.date)==null?void 0:h.split("/")[0],s=(_=e.date)==null?void 0:_.split("/")[1],l=new Date().getFullYear(),d=new Date(e.originDate),r=d.getDay(),I=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][r];return{...e,month:parseInt(t,10),day:parseInt(s,10),year:l,dayOfWeekZHTW:I,originTime:d}}).sort((e,t)=>e.originTime-t.originTime).reduce((e,t)=>{const{date:s}=t;return e[s]||(e[s]=[]),e[s].push(t),e},{})}},methods:{...k(y,["getActivities","getOrders"]),...k(D,["getUserId"]),getBookmarks(m){const p=`${C}/bookmarks?isCancelled=false&userId=${m}`;this.$http.get(p).then(c=>{c.data.forEach(t=>{this.availableActivities.forEach(s=>{s.id===parseInt(t.activityId,10)&&(this.filteredArray.push(s),this.bookmarks.push(t))})})}).catch(c=>{const e=c.response.statusText;this.$toast.add({severity:"error",detail:`${e} 取得收藏資訊失敗`,life:3e3,contentStyleClass:"custom-toast-danger"})})}},mounted(){this.getActivities(),this.getOrders(),this.userId=this.getUserId(),this.getBookmarks(this.userId)}},v=i("h1",{class:"mb-6 text-center text-xl md:mb-12 md:text-left md:text-3xl"}," 已收藏的揪團 ",-1),L=i("p",{class:"mb-4 flex items-center text-2xl"},"目前尚無收藏揪團",-1),S=i("p",{class:"flex items-center group-hover:text-primary-01"},[T(" 探索更多揪團活動 "),i("i",{class:"pi pi-search-plus ml-1 text-xs"})],-1),J={key:1},$={key:0,class:"mb-6 border-b pb-4 md:text-xl"},H={key:1,class:"mb-6 border-b pb-4 text-center md:text-left md:text-xl"},O=i("i",{class:"pi pi-calendar md:text-xl"},null,-1);function M(m,p,c,e,t,s){const l=g("RouterLink"),d=g("JoinCardRow");return o(),n("section",null,[v,t.bookmarks.length===0?(o(),V(l,{key:0,to:"/JoinList/Hot/1",class:"group flex flex-col items-center justify-center py-10"},{default:x(()=>[L,S]),_:1})):(o(),n("ul",J,[(o(!0),n(f,null,b(s.membersActivities,r=>(o(),n("li",{key:r,class:"mb-10"},[r[0].day===parseInt(new Date().getDate(),10)?(o(),n("h3",$," 今天 ")):(o(),n("h3",H,[O,T(" "+u(r[0].dayOfWeekZHTW)+" "+u(r[0].month)+" 月 "+u(r[0].day)+" 日 ",1)])),i("ul",null,[(o(!0),n(f,null,b(r,a=>(o(),n("li",{key:a.id,class:"mb-6"},[A(l,{to:`/JoinDetail/id=${a==null?void 0:a.id}`},{default:x(()=>[A(d,{activity:a},null,8,["activity"])]),_:2},1032,["to"])]))),128))])]))),128))]))])}const P=w(R,[["render",M]]);export{P as default};