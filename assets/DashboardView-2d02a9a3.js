import{_ as c,a as u,d as o,w as r,e,b as a,v as _,F as p,r as d,o as m}from"./index-a122773d.js";const f={name:"DashboardView",data(){return{}}},h=a("h1",{class:"mb-5"},"這裡是後台頁面",-1),w=a("hr",null,null,-1);function k(s,n,v,V,b,$){const t=d("router-link"),l=d("router-view");return m(),u(p,null,[h,o(t,{to:"/"},{default:r(()=>[e("回到前台")]),_:1}),e(" | "),o(t,{to:"/admin/products/1"},{default:r(()=>[e("後台產品列表")]),_:1}),e(" | "),o(t,{to:"/admin/orders"},{default:r(()=>[e("後台訂單")]),_:1}),e(" | "),a("a",{href:"#",onClick:n[0]||(n[0]=_((...i)=>s.logout&&s.logout(...i),["prevent"]))},"登出"),w,o(l)],64)}const x=c(f,[["render",k]]);export{x as default};
