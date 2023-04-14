import{_ as d,r as _,o as u,a as g,b as t,d as n,w as c,G as i,F as m,B as p,e as f,C as h,D as x,E as P}from"./index-0bad7370.js";const b={name:"PaginationComponent",props:["currentPage","pageTotal","pageUrl"],computed:{currentPageNum(){return parseInt(this.currentPage,10)},prev(){return this.currentPageNum-1<1?1:this.currentPageNum-1},next(){return this.currentPageNum+1>this.pageTotal?this.pageTotal:this.currentPageNum+1}}},o=a=>(x("data-v-37b09ec5"),a=a(),P(),a),v={class:"flex gap-1 xs:gap-2"},y=o(()=>t("i",{class:"pi pi-angle-double-left"},null,-1)),w=o(()=>t("i",{class:"pi pi-angle-left"},null,-1)),N=o(()=>t("i",{class:"pi pi-angle-right"},null,-1)),T=o(()=>t("i",{class:"pi pi-angle-double-right"},null,-1));function C(a,U,e,j,k,r){const l=_("router-link");return u(),g("nav",null,[t("ul",v,[t("li",null,[n(l,{class:i(["flex h-10 w-8 items-center justify-center rounded-full p-2 text-gray-800 transition-colors hover:bg-primary-03 xs:w-10",{disabled:r.currentPageNum===1}]),to:e.pageUrl+1,"aria-label":"Previous"},{default:c(()=>[y]),_:1},8,["to","class"])]),t("li",null,[n(l,{class:i(["flex h-10 w-8 items-center justify-center rounded-full p-2 text-gray-800 transition-colors hover:bg-primary-03 xs:w-10",{disabled:r.currentPageNum===1}]),to:e.pageUrl+r.prev,"aria-label":"Previous"},{default:c(()=>[w]),_:1},8,["to","class"])]),(u(!0),g(m,null,p(e.pageTotal,s=>(u(),g("li",{key:"page"+s},[n(l,{active:s==e.currentPage,class:i([{active:s==e.currentPage},"flex h-10 w-8 items-center justify-center rounded-full p-2 text-gray-800 transition-colors hover:bg-primary-03 xs:w-10"]),to:e.pageUrl+s,"active-class":"bg-primary-04"},{default:c(()=>[f(h(s),1)]),_:2},1032,["active","class","to"])]))),128)),t("li",null,[n(l,{class:i(["flex h-10 w-8 items-center justify-center rounded-full p-2 text-gray-800 transition-colors hover:bg-primary-03 xs:w-10",{disabled:r.currentPageNum===e.pageTotal}]),to:e.pageUrl+r.next,"aria-label":"Next"},{default:c(()=>[N]),_:1},8,["to","class"])]),t("li",null,[n(l,{class:i(["flex h-10 w-8 items-center justify-center rounded-full p-2 text-gray-800 transition-colors hover:bg-primary-03 xs:w-10",{disabled:r.currentPageNum===e.pageTotal}]),to:e.pageUrl+e.pageTotal,"aria-label":"Previous"},{default:c(()=>[T]),_:1},8,["to","class"])])])])}const B=d(b,[["render",C],["__scopeId","data-v-37b09ec5"]]);export{B as P};