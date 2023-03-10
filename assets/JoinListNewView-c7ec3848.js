import{J as L}from"./JoinCardRow-5aa51337.js";import{L as w}from"./LeafletMap-0ab585ea.js";import{_ as x,G as P,s as u,a as c,b as a,d as n,F as A,C,t as I,r,o as d,w as k}from"./index-9dedc0dc.js";import{j as g}from"./joinActivitiesStore-e0de396f.js";import{P as J}from"./PaginationComponent-23b150ed.js";import"./leaflet-src-01bd1843.js";const b={name:"JoinListNewView",components:{JoinCardRow:L,LeafletMap:w,PaginationComponent:J},data(){return{userId:null,currentPage:1}},computed:{...P(g,["restructureActivitiesList"]),hotActivitiesList:({restructureActivitiesList:s,arrangePage:l})=>{const p=s.filter(t=>t.isCancelled===!1).sort((t,o)=>{const i=new Date(t.updateDate);return new Date(o.updateDate)-i});return l(p)}},methods:{...u(g,["getOrders","getActivities","changePage","arrangePage"]),...u(I,["getUserId"])},watch:{$route(s){this.currentPage=s.params.page,this.changePage(s.params.page)}},mounted(){this.getActivities(),this.getOrders(),this.changePage(this.$route.params.page),this.userId=this.getUserId()}},v={class:"pt-4 pb-20 md:pt-10"},B={class:"container"},D=a("h2",{class:"mb-6 text-center text-2xl md:mb-10 md:text-start"},"最新揪團",-1),N={class:"grid md:grid-cols-12 lg:gap-0"},j={class:"col-span-7 flex flex-col gap-6"},V={class:"sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"};function M(s,l,_,p,t,o){const i=r("PaginationComponent"),m=r("join-card-row"),h=r("RouterLink"),f=r("LeafletMap");return d(),c("section",v,[a("div",B,[D,n(i,{currentPage:t.currentPage,pageTotal:o.hotActivitiesList.pageTotal,pageUrl:"/JoinList/New/",class:"mb-4"},null,8,["currentPage","pageTotal"]),a("div",N,[a("ul",j,[(d(!0),c(A,null,C(o.hotActivitiesList.list,e=>(d(),c("li",{key:e==null?void 0:e.id},[n(h,{to:`/JoinDetail/id=${e==null?void 0:e.id}`},{default:k(()=>[n(m,{userId:t.userId,activity:e},null,8,["userId","activity"])]),_:2},1032,["to"])]))),128))]),a("aside",V,[n(f,{mapActivities:o.hotActivitiesList.list},null,8,["mapActivities"])])])])])}const $=x(b,[["render",M]]);export{$ as default};