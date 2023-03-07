import{_ as v,G as T,s as g,a as n,b as r,d as f,w as I,D as L,F as x,C as A,t as S,r as b,o,e as h,B as l}from"./index-1031d0a2.js";import{j as w}from"./joinActivitiesStore-e4b70ed2.js";import{J as $}from"./JoinCardRow-f834328c.js";const C={components:{JoinCardRow:$},computed:{...T(w,["restructureActivitiesList"]),membersActivities(){const c=parseInt(this.getUserId(),10);return this.restructureActivitiesList.filter(t=>t.participantsId.includes(c)).map(t=>{var y,_;const s=(y=t.date)==null?void 0:y.split("/")[0],e=(_=t.date)==null?void 0:_.split("/")[1],i=new Date().getFullYear(),a=new Date(t.originDate),D=a.getDay(),k=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][D];return{...t,month:parseInt(s,10),day:parseInt(e,10),year:i,dayOfWeekZHTW:k,originTime:a}}).sort((t,s)=>t.originTime-s.originTime).reduce((t,s)=>{const{date:e}=s;return t[e]||(t[e]=[]),t[e].push(s),t},{})},hasTodayActivity(){const c=parseInt(this.getUserId(),10),d=this.restructureActivitiesList.filter(e=>e.participantsId.includes(c)),m=new Date().getFullYear(),u=new Date().getMonth()+1,p=new Date().getDate(),t=`${m}-${u.toString().padStart(2,"0")}-${p.toString().padStart(2,"0")}`;return d.find(e=>e.originDate===t)!==void 0}},methods:{...g(w,["getActivities","getOrders"]),...g(S,["getUserId"])},mounted(){this.getActivities(),this.getOrders(),this.getUserId()}},W=r("h1",{class:"mb-12 text-3xl"},"已參與的揪團",-1),F={key:0,class:"mb-10"},H=r("h3",{class:"mb-6 border-b pb-4 text-xl"},"今天",-1),J={class:"mb-4 flex items-center text-lg"},R=r("i",{class:"pi pi-calendar-plus mr-2 text-lg"},null,-1),V=r("p",{class:"flex items-center group-hover:text-primary-01"},[h(" 探索更多揪團活動 "),r("i",{class:"pi pi-search-plus ml-1 text-xs"})],-1),B={key:0,class:"mb-6 border-b pb-4 text-xl"},M={key:1,class:"mb-6 border-b pb-4 text-xl"},N=r("i",{class:"pi pi-calendar text-xl"},null,-1);function O(c,d,m,u,p,t){const s=b("RouterLink"),e=b("JoinCardRow");return o(),n("section",null,[W,r("ul",null,[t.hasTodayActivity?L("",!0):(o(),n("li",F,[H,f(s,{to:"/JoinList/Hot/1",class:"group flex flex-col items-center justify-center py-10"},{default:I(()=>[r("p",J,[R,h(l(`今天沒有符合條件的活動 ${new Date().getFullYear()} 年 ${new Date().getMonth()+1} 月 ${new Date().getDate()} 日`),1)]),V]),_:1})])),(o(!0),n(x,null,A(t.membersActivities,i=>(o(),n("li",{key:i,class:"mb-10"},[i[0].day===parseInt(new Date().getDate(),10)?(o(),n("h3",B," 今天 ")):(o(),n("h3",M,[N,h(" "+l(i[0].dayOfWeekZHTW)+" "+l(i[0].month)+" 月 "+l(i[0].day)+" 日 ",1)])),r("ul",null,[(o(!0),n(x,null,A(i,a=>(o(),n("li",{key:a.id,class:"mb-6"},[f(e,{activity:a},null,8,["activity"])]))),128))])]))),128))])])}const G=v(C,[["render",O]]);export{G as default};
