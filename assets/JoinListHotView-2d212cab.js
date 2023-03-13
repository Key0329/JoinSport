import{J as L}from"./JoinCardRow-3e788fc8.js";import{L as P}from"./LeafletMap-aa7f2692.js";import{_ as x,s as A,t as d,a as r,b as a,d as i,F as w,A as C,u as I,r as n,o as c,w as b}from"./index-29bbafb4.js";import{j as m}from"./activitiesStore-3a3e71f1.js";import{P as k}from"./PaginationComponent-092fae5d.js";import"./leaflet-src-552bf412.js";const J={name:"JoinListHotView",components:{JoinCardRow:L,LeafletMap:P,PaginationComponent:k},data(){return{userId:null,currentPage:1}},computed:{...A(m,["availableActivities","isLoading"]),hotActivitiesList:({availableActivities:s,arrangePage:l})=>{const p=s.filter(e=>e.isCancelled===!1).sort((e,o)=>o.numParticipants-e.numParticipants);return l(p)}},methods:{...d(m,["getOrders","getActivities","changePage","arrangePage"]),...d(I,["getUserId"])},watch:{$route(s){this.currentPage=s.params.page,this.changePage(s.params.page)}},mounted(){this.getActivities(),this.getOrders(),this.changePage(this.$route.params.page),this.userId=this.getUserId()}},v={class:"pt-4 pb-20 md:pt-10"},j={class:"container"},V=a("h2",{class:"mb-6 text-center text-2xl md:mb-10 md:text-start"},"熱門揪團",-1),B={class:"grid gap-8 md:grid-cols-12 lg:gap-0"},H={class:"col-span-7 flex flex-col gap-6"},M={class:"sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"};function R(s,l,g,p,e,o){const u=n("PaginationComponent"),_=n("join-card-row"),h=n("RouterLink"),f=n("LeafletMap");return c(),r("main",v,[a("div",j,[V,i(u,{currentPage:e.currentPage,pageTotal:o.hotActivitiesList.pageTotal,pageUrl:"/JoinList/Hot/",class:"mb-4"},null,8,["currentPage","pageTotal"]),a("section",B,[a("ul",H,[(c(!0),r(w,null,C(o.hotActivitiesList.list,t=>(c(),r("li",{key:t==null?void 0:t.id},[i(h,{to:`/JoinDetail/id=${t==null?void 0:t.id}`},{default:b(()=>[i(_,{activity:t,userId:e.userId},null,8,["activity","userId"])]),_:2},1032,["to"])]))),128))]),a("aside",M,[i(f,{mapActivities:o.hotActivitiesList.list},null,8,["mapActivities"])])])])])}const $=x(J,[["render",R]]);export{$ as default};
