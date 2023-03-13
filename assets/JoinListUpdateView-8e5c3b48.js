import{J as L}from"./JoinCardRow-183d8e36.js";import{L as x}from"./LeafletMap-b8c3fb8a.js";import{_ as A,s as P,t as u,a as c,b as o,d as n,F as w,A as C,u as I,r as i,o as d,w as b}from"./index-fd707684.js";import{j as g}from"./joinActivitiesStore-9bff944d.js";import{P as k}from"./PaginationComponent-f740d959.js";import"./leaflet-src-e5c6e917.js";const v={name:"JoinListUpdateView",components:{JoinCardRow:L,LeafletMap:x,PaginationComponent:k},data(){return{userId:null,currentPage:1}},computed:{...P(g,["availableActivities"]),hotActivitiesList:({availableActivities:s,arrangePage:l})=>{const p=s.filter(t=>t.isCancelled===!1).sort((t,a)=>{const r=new Date(t.updateDate);return new Date(a.updateDate)-r});return l(p)}},methods:{...u(g,["getOrders","getActivities","changePage","arrangePage"]),...u(I,["getUserId"])},watch:{$route(s){this.currentPage=s.params.page,this.changePage(s.params.page)}},mounted(){this.getActivities(),this.getOrders(),this.changePage(this.$route.params.page),this.userId=this.getUserId()}},J={class:"pt-4 pb-20 md:pt-10"},U={class:"container"},B=o("h2",{class:"mb-6 text-center text-2xl md:mb-10 md:text-start"},"最新揪團",-1),D={class:"grid md:grid-cols-12 lg:gap-0"},j={class:"col-span-7 flex flex-col gap-6"},V={class:"sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"};function M(s,l,_,p,t,a){const r=i("PaginationComponent"),m=i("join-card-row"),h=i("RouterLink"),f=i("LeafletMap");return d(),c("section",J,[o("div",U,[B,n(r,{currentPage:t.currentPage,pageTotal:a.hotActivitiesList.pageTotal,pageUrl:"/JoinList/Update/",class:"mb-4"},null,8,["currentPage","pageTotal"]),o("div",D,[o("ul",j,[(d(!0),c(w,null,C(a.hotActivitiesList.list,e=>(d(),c("li",{key:e==null?void 0:e.id},[n(h,{to:`/JoinDetail/id=${e==null?void 0:e.id}`},{default:b(()=>[n(m,{userId:t.userId,activity:e},null,8,["userId","activity"])]),_:2},1032,["to"])]))),128))]),o("aside",V,[n(f,{mapActivities:a.hotActivitiesList.list},null,8,["mapActivities"])])])])])}const $=A(v,[["render",M]]);export{$ as default};