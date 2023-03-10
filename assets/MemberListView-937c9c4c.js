import{_ as T,G as $,s as f,a as o,b as s,d as h,w as A,D as v,F as x,C as b,t as I,r as w,o as i,e as _,B as p}from"./index-56f709e6.js";import{j as D}from"./joinActivitiesStore-c05b16c9.js";import{J as S}from"./JoinCardRow-ccaacc3c.js";const C={components:{JoinCardRow:S},computed:{...$(D,["restructureActivitiesList"]),filteredArray(){const c=parseInt(this.getUserId(),10);return this.restructureActivitiesList.filter(l=>l.participantsId.includes(c))},membersActivities(){return this.filteredArray.map(e=>{var g,y;const r=(g=e.date)==null?void 0:g.split("/")[0],t=(y=e.date)==null?void 0:y.split("/")[1],m=new Date().getFullYear(),u=new Date(e.originDate),n=u.getDay(),k=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][n];return{...e,month:parseInt(r,10),day:parseInt(t,10),year:m,dayOfWeekZHTW:k,originTime:u}}).sort((e,r)=>e.originTime-r.originTime).reduce((e,r)=>{const{date:t}=r;return e[t]||(e[t]=[]),e[t].push(r),e},{})},hasTodayActivity(){const c=new Date().getFullYear(),d=new Date().getMonth()+1,l=new Date().getDate(),e=`${c}-${d.toString().padStart(2,"0")}-${l.toString().padStart(2,"0")}`;return this.filteredArray.find(t=>t.originDate===e)!==void 0}},methods:{...f(D,["getActivities","getOrders"]),...f(I,["getUserId"])},mounted(){this.getActivities(),this.getOrders(),this.getUserId()}},L=s("h1",{class:"mb-12 text-3xl"},"已參與的揪團",-1),J={key:0,class:"mb-10"},W=s("h3",{class:"mb-6 border-b pb-4 text-xl"},"今天",-1),F={class:"mb-4 flex items-center text-lg"},H=s("i",{class:"pi pi-calendar-plus mr-2 text-lg"},null,-1),R=s("p",{class:"flex items-center group-hover:text-primary-01"},[_(" 探索更多揪團活動 "),s("i",{class:"pi pi-search-plus ml-1 text-xs"})],-1),V={key:0,class:"mb-6 border-b pb-4 text-xl"},B={key:1,class:"mb-6 border-b pb-4 text-xl"},M=s("i",{class:"pi pi-calendar text-xl"},null,-1);function N(c,d,l,e,r,t){const m=w("RouterLink"),u=w("JoinCardRow");return i(),o("section",null,[L,s("ul",null,[t.hasTodayActivity?v("",!0):(i(),o("li",J,[W,h(m,{to:"/JoinList/Hot/1",class:"group flex flex-col items-center justify-center py-10"},{default:A(()=>[s("p",F,[H,_(p(`今天沒有符合條件的活動 ${new Date().getFullYear()} 年 ${new Date().getMonth()+1} 月 ${new Date().getDate()} 日`),1)]),R]),_:1})])),(i(!0),o(x,null,b(t.membersActivities,n=>(i(),o("li",{key:n,class:"mb-10"},[n[0].day===parseInt(new Date().getDate(),10)?(i(),o("h3",V," 今天 ")):(i(),o("h3",B,[M,_(" "+p(n[0].dayOfWeekZHTW)+" "+p(n[0].month)+" 月 "+p(n[0].day)+" 日 ",1)])),s("ul",null,[(i(!0),o(x,null,b(n,a=>(i(),o("li",{key:a.id,class:"mb-6"},[h(m,{to:`/JoinDetail/id=${a==null?void 0:a.id}`},{default:A(()=>[h(u,{activity:a},null,8,["activity"])]),_:2},1032,["to"])]))),128))])]))),128))])])}const Y=T(C,[["render",N]]);export{Y as default};
