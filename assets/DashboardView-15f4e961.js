import{_ as i,r as d,o as u,c as _,b as o,w as r,d as e,e as s,f as p,F as f}from"./index-10924d55.js";const m={data(){return{}}},h=s("h1",{class:"mb-5"},"這裡是後台頁面",-1),w=s("hr",null,null,-1);function k(n,a,v,V,$,b){const t=d("router-link"),l=d("router-view");return u(),_(f,null,[h,o(t,{to:"/"},{default:r(()=>[e("回到前台")]),_:1}),e(" | "),o(t,{to:"/admin/products/1"},{default:r(()=>[e("後台產品列表")]),_:1}),e(" | "),o(t,{to:"/admin/orders"},{default:r(()=>[e("後台訂單")]),_:1}),e(" | "),s("a",{href:"#",onClick:a[0]||(a[0]=p((...c)=>n.logout&&n.logout(...c),["prevent"]))},"登出"),w,o(l)],64)}const x=i(m,[["render",k]]);export{x as default};
