import{J as x}from"./JoinCardRow-d7954a4c.js";import{L as A}from"./LeafletMap-06afed68.js";import{_ as w,s as B,t as u,a as l,d as s,b as a,F as g,B as I,u as v,r as o,o as p,v as C,w as b}from"./index-3e1b4187.js";import{j as _}from"./activitiesStore-fd89c034.js";import{P as M}from"./PaginationComponent-a22621fc.js";import{B as T}from"./BookMark-7b56f2b7.js";import"./leaflet-src-7087ddc7.js";const J={name:"JoinListUpdateView",components:{JoinCardRow:x,LeafletMap:A,PaginationComponent:M,BookMark:T},data(){return{userId:null,currentPage:1}},computed:{...B(_,["availableActivities"]),hotActivitiesList:({availableActivities:n,arrangePage:r})=>{const d=n.filter(e=>e.isCancelled===!1).sort((e,i)=>{const c=new Date(e.updateDate).getTime();return new Date(i.updateDate).getTime()-c});return r(d)}},methods:{...u(_,["getOrders","getActivities","changePage","arrangePage"]),...u(v,["getUserId"])},watch:{$route(n){this.currentPage=n.params.page,this.changePage(n.params.page)}},mounted(){this.getActivities(),this.getOrders(),this.changePage(this.$route.params.page),this.userId=this.getUserId()}},U={class:"pt-4 pb-20 md:pt-10"},D={class:"container"},j=a("h2",{class:"mb-6 text-center text-2xl md:mb-10 md:text-start"},"最新揪團",-1),V={class:"grid md:grid-cols-12 lg:gap-0"},R={class:"col-span-7 flex flex-col gap-6"},S={class:"sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"};function F(n,r,h,d,e,i){const c=o("PToast"),m=o("PaginationComponent"),f=o("BookMark"),L=o("join-card-row"),P=o("RouterLink"),k=o("LeafletMap");return p(),l(g,null,[s(c),a("section",U,[a("div",D,[j,s(m,{currentPage:e.currentPage,pageTotal:i.hotActivitiesList.pageTotal,pageUrl:"/JoinList/Update/",class:"mb-4"},null,8,["currentPage","pageTotal"]),a("div",V,[a("ul",R,[(p(!0),l(g,null,I(i.hotActivitiesList.list,t=>(p(),l("li",{key:t==null?void 0:t.id,class:"relative"},[s(f,{class:"absolute right-4 top-3 z-50",userId:e.userId,activity:t,onClick:r[0]||(r[0]=C(()=>{},["stop"]))},null,8,["userId","activity"]),s(P,{to:`/JoinDetail/id=${t==null?void 0:t.id}`},{default:b(()=>[s(L,{userId:e.userId,activity:t},null,8,["userId","activity"])]),_:2},1032,["to"])]))),128))]),a("aside",S,[s(k,{mapActivities:i.hotActivitiesList.list},null,8,["mapActivities"])])])])])],64)}const H=w(J,[["render",F]]);export{H as default};
