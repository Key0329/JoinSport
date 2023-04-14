import{J as x}from"./JoinCardRow-9658a50c.js";import{L as C}from"./LeafletMap-b1cfa321.js";import{_ as A,s as I,t as m,a as l,d as n,b as o,F as d,B as w,u as B,r as s,o as c,H as v,v as b,x as M,w as J}from"./index-0bad7370.js";import{j as g}from"./activitiesStore-f5b33199.js";import{P as T}from"./PaginationComponent-c57898aa.js";import{B as V}from"./BookMark-8fd57c64.js";import"./leaflet-src-afaa424b.js";const j={name:"JoinListComingView",components:{JoinCardRow:x,LeafletMap:C,PaginationComponent:T,BookMark:V},data(){return{userId:null,currentPage:1}},computed:{...I(g,["availableActivities","isLoading"]),hotActivitiesList:({availableActivities:a,arrangePage:r})=>{const p=a.filter(e=>e.isCancelled===!1).sort((e,i)=>e.originDate-i.originDate);return r(p)}},methods:{...m(g,["getOrders","getActivities","changePage","arrangePage"]),...m(B,["getUserId"])},watch:{$route(a){this.currentPage=a.params.page,this.changePage(a.params.page)}},mounted(){this.getActivities(),this.getOrders(),this.changePage(this.$route.params.page),this.userId=this.getUserId()}},D={class:"pt-4 pb-20 md:pt-10"},N={class:"container"},R=o("h2",{class:"mb-6 text-center text-2xl md:mb-10 md:text-start"}," 即將到來的揪團 ",-1),S={class:"grid gap-8 md:grid-cols-12 lg:gap-0"},U={class:"col-span-7 flex flex-col gap-6"},F={class:"sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"};function O(a,r,u,p,e,i){const _=s("PToast"),h=s("PaginationComponent"),f=s("BookMark"),L=s("join-card-row"),k=s("RouterLink"),P=s("LeafletMap");return c(),l(d,null,[n(_),o("main",D,[o("div",N,[R,n(h,{currentPage:e.currentPage,pageTotal:i.hotActivitiesList.pageTotal,pageUrl:"/JoinList/Coming/",class:"mb-4"},null,8,["currentPage","pageTotal"]),o("section",S,[o("ul",U,[(c(!0),l(d,null,w(i.hotActivitiesList.list,t=>(c(),l("li",{key:t==null?void 0:t.id,class:"relative"},[e.userId?(c(),v(f,{key:0,class:"absolute right-4 top-3 z-50",userId:e.userId,activity:t,onClick:r[0]||(r[0]=b(()=>{},["stop"]))},null,8,["userId","activity"])):M("",!0),n(k,{to:`/JoinDetail/id=${t==null?void 0:t.id}`},{default:J(()=>[n(L,{activity:t,userId:e.userId},null,8,["activity","userId"])]),_:2},1032,["to"])]))),128))]),o("aside",F,[n(P,{mapActivities:i.hotActivitiesList.list},null,8,["mapActivities"])])])])])],64)}const W=A(j,[["render",O]]);export{W as default};