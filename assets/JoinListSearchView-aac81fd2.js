import{J as T}from"./JoinCardRow-989e5aeb.js";import{L as D}from"./LeafletMap-d358d86e.js";import{_ as k,s as w,t as _,a as m,b as p,C as g,H as C,x as S,d,w as x,F as I,B as b,u as J,e as A,r as u,o as h}from"./index-121a7c0d.js";import{j as f}from"./activitiesStore-5010f3f3.js";import{P as V}from"./PaginationComponent-0088f317.js";import"./leaflet-src-dba6b316.js";const B={name:"JoinListSearchView",components:{JoinCardRow:T,LeafletMap:D,PaginationComponent:V},data(){return{userId:null,currentPage:1,searchText:"",searchArea:"",searchDate:""}},computed:{...w(f,["availableActivities","isLoading"]),searchActivitiesList(){const n=this.availableActivities.filter(t=>t.isCancelled===!1),s=this.searchText,r=this.searchArea,a=this.searchDate,c=n.filter(t=>{const o=new Date(t.originDate).toISOString().split("T")[0];return s!=="0"&&r!=="0"&&a!=="0"?t.tags.some(i=>i.includes(s))&&t.city===r&&o===a:s!=="0"&&r!=="0"?t.tags.some(i=>i.includes(s))&&t.city===r:s!=="0"&&a!=="0"?t.tags.some(i=>i.includes(s))&&o===a:r!=="0"&&a!=="0"?t.city===r&&o===a:s!=="0"||r!=="0"||a!=="0"?t.tags.some(i=>i.includes(s))||t.city===r||o===a:t}).sort((t,o)=>o.numParticipants-t.numParticipants);return this.arrangePage(c)}},methods:{..._(f,["getOrders","getActivities","changePage","arrangePage"]),..._(J,["getUserId"]),getParams(){const{text:n,area:s,date:r}=this.$route.params;this.searchText=n,this.searchArea=s,this.searchDate=r}},watch:{$route(n){this.currentPage=n.params.page,this.changePage(n.params.page),this.getParams()}},mounted(){this.getActivities(),this.getOrders(),this.changePage(this.$route.params.page),this.userId=this.getUserId(),this.getParams()}},j={class:"pt-4 pb-20 md:pt-10"},N={class:"container"},U={class:"mb-6 text-center text-2xl md:mb-10 md:text-start"},M={class:"grid gap-8 md:grid-cols-12 lg:gap-0"},O={key:0,class:"col-span-7 flex"},R=p("h3",{class:"text-xl"},[A(" 無搜尋結果 "),p("i",{class:"pi pi-arrow-right px-4"})],-1),v={key:1,class:"col-span-7 flex flex-col gap-6"},F={class:"sticky top-[286px] col-span-4 col-end-13 hidden h-[400px] md:flex"};function E(n,s,r,a,e,c){const t=u("PaginationComponent"),o=u("router-link"),i=u("join-card-row"),L=u("RouterLink"),P=u("LeafletMap");return h(),m("main",j,[p("div",N,[p("h2",U," 搜尋揪團： "+g(e.searchText==="0"?"":e.searchText)+" "+g(e.searchText==="0"||e.searchArea==="0"&&e.searchDate==="0"?"":" +")+" "+g(e.searchArea==="0"?"":e.searchArea)+" "+g(e.searchArea==="0"||e.searchDate==="0"?"":" +")+" "+g(e.searchDate==="0"?"":e.searchDate),1),c.searchActivitiesList.pageTotal?(h(),C(t,{key:0,currentPage:e.currentPage,pageTotal:c.searchActivitiesList.pageTotal,pageUrl:`/JoinList/Search/text=${e.searchText}&area=${e.searchArea}&date=${e.searchDate}&page=`,class:"mb-4"},null,8,["currentPage","pageTotal","pageUrl"])):S("",!0),p("section",M,[c.searchActivitiesList.pageTotal===0?(h(),m("div",O,[R,d(o,{to:"/CreateJoin/step1",class:"text-xl hover:text-primary-01"},{default:x(()=>[A(" 馬上自己開一團")]),_:1})])):(h(),m("ul",v,[(h(!0),m(I,null,b(c.searchActivitiesList.list,l=>(h(),m("li",{key:l==null?void 0:l.id},[d(L,{to:`/JoinDetail/id=${l==null?void 0:l.id}`},{default:x(()=>[d(i,{activity:l,userId:e.userId},null,8,["activity","userId"])]),_:2},1032,["to"])]))),128))])),p("aside",F,[d(P,{mapActivities:c.searchActivitiesList.list},null,8,["mapActivities"])])])])])}const W=k(B,[["render",E]]);export{W as default};