import{J as x}from"./JoinCardRow-d7954a4c.js";import{L as A}from"./LeafletMap-06afed68.js";import{_ as I,s as w,t as m,a as c,d as s,b as a,F as d,B as v,u as B,r as o,o as l,v as C,w as b}from"./index-3e1b4187.js";import{j as u}from"./activitiesStore-fd89c034.js";import{P as M}from"./PaginationComponent-a22621fc.js";import{B as J}from"./BookMark-7b56f2b7.js";import"./leaflet-src-7087ddc7.js";const T={name:"JoinListHotView",components:{JoinCardRow:x,LeafletMap:A,PaginationComponent:M,BookMark:J},data(){return{userId:null,currentPage:1}},computed:{...w(u,["availableActivities","isLoading"]),hotActivitiesList:({availableActivities:i,arrangePage:r})=>{const p=i.filter(e=>e.isCancelled===!1).sort((e,n)=>n.numParticipants-e.numParticipants);return r(p)}},methods:{...m(u,["getOrders","getActivities","changePage","arrangePage"]),...m(B,["getUserId"])},watch:{$route(i){this.currentPage=i.params.page,this.changePage(i.params.page)}},mounted(){this.getActivities(),this.getOrders(),this.changePage(this.$route.params.page),this.userId=this.getUserId()}},j={class:"pt-4 pb-20 md:pt-10"},V={class:"container"},H=a("h2",{class:"mb-6 text-center text-2xl md:mb-10 md:text-start"},"熱門揪團",-1),R={class:"grid gap-8 md:grid-cols-12 lg:gap-0"},S={class:"col-span-7 flex flex-col gap-6"},U={class:"sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"};function F(i,r,g,p,e,n){const _=o("PToast"),h=o("PaginationComponent"),f=o("BookMark"),L=o("join-card-row"),P=o("RouterLink"),k=o("LeafletMap");return l(),c(d,null,[s(_),a("main",j,[a("div",V,[H,s(h,{currentPage:e.currentPage,pageTotal:n.hotActivitiesList.pageTotal,pageUrl:"/JoinList/Hot/",class:"mb-4"},null,8,["currentPage","pageTotal"]),a("section",R,[a("ul",S,[(l(!0),c(d,null,v(n.hotActivitiesList.list,t=>(l(),c("li",{key:t==null?void 0:t.id,class:"relative"},[s(f,{class:"absolute right-4 top-3 z-50",userId:e.userId,activity:t,onClick:r[0]||(r[0]=C(()=>{},["stop"]))},null,8,["userId","activity"]),s(P,{to:`/JoinDetail/id=${t==null?void 0:t.id}`},{default:b(()=>[s(L,{activity:t,userId:e.userId},null,8,["activity","userId"])]),_:2},1032,["to"])]))),128))]),a("aside",U,[s(k,{mapActivities:n.hotActivitiesList.list},null,8,["mapActivities"])])])])])],64)}const G=I(T,[["render",F]]);export{G as default};
