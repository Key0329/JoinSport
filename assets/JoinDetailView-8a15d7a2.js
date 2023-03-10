import{_ as K,G as Q,s as j,a as l,d as c,b as t,B as n,D as O,e as y,w as _,F as b,C as f,t as X,r as h,o as d,z as $,A as tt}from"./index-08f5dae2.js";import{j as L}from"./joinActivitiesStore-ab7967d2.js";import{F as et}from"./FrontHeader-6243b544.js";import{J as st,a as it}from"./JoinDetailAside-a1e23e7e.js";import{J as at}from"./JoinCardRow-2fe3ad7f.js";import{_ as S}from"./avatar01-e06217d0.js";import"./LeafletMap-5a0fd7bb.js";import"./leaflet-src-0db38beb.js";import"./group03-b38e3255.js";const{VITE_URL:p}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},ot={inject:["reload"],components:{FrontHeader:et,JoinAttendees:st,JoinCardRow:at,JoinDetailAside:it},data(){return{userId:null,activity:[],orders:[],textareaValue:"",bookmarkId:null,isBookmarked:!1}},computed:{...Q(L,["restructureActivitiesList"]),newDateActivity(){if(!this.activity.date)return{};const i=this.activity.date.split("-"),s=`${i[1]}/${i[2]}`,o=new Date(this.activity.date).getDay(),u=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][o];return{...this.activity,date:s,dayOfWeekText:u}},slicedActivities(){return[...this.restructureActivitiesList].filter(e=>(e==null?void 0:e.isCancelled)===!1).filter(e=>e!=null&&e.id?e.id!==parseInt(this.$route.params.id,10):[]).sort(()=>Math.random()-.5).slice(0,2)},hadJoined(){return this.orders.find(i=>i.userId===parseInt(this.userId,10))!==void 0},isHost(){return this.activity.userId===this.userId}},methods:{...j(L,["getActivities","getOrders"]),...j(X,["getUserId"]),getActivityDetail(i){const s=`${p}/activities/${i}?_expand=user&_expand=group`;this.$http.get(s).then(o=>(this.activity=o.data,this.getActivityBookmark())).catch(o=>{console.log(o),alert("err")})},getActivityOrders(i){const s=`${p}/orders?isCancelled=false&activityId=${i}&_expand=user`;this.$http.get(s).then(o=>{this.orders=o.data}).catch(o=>{console.log(o),alert("err")})},getActivityBookmark(){const i=`${p}/users/${this.userId}/bookmarks?activityId=${this.activity.id}`;this.$http.get(i).then(s=>{s.data[0]&&(s.data[0].isCancelled===!1&&(this.isBookmarked=!0),this.bookmarkId=s.data[0].id)}).catch(s=>{console.log(s),alert("err")})},userConfirmJoin(){const i={userId:parseInt(this.userId,10),activityId:this.activity.id,isCancelled:!1},s=`${p}/orders`;this.$confirm.require({message:`${this.activity.title}`,header:"確認參加",accept:()=>{this.$http.post(s,i).then(()=>{alert("報名成功"),this.reload()}).catch(o=>{console.log(o)})}})},userCancelJoin(){const i=this.orders.find(m=>m.userId===parseInt(this.userId,10)),{id:s}=i,o={isCancelled:!0},u=`${p}/orders/${s}`;this.$confirm.require({message:`${this.activity.title}`,header:"確認取消",accept:()=>{this.$http.patch(u,o).then(()=>{alert("取消揪團成功"),this.reload()}).catch(m=>{console.log(m)})}})},hostCancelActivity(){const{id:i}=this.$route.params,s={isCancelled:!0},o=`${p}/activities/${i}`;this.$confirm.require({message:`${this.activity.title}`,header:"確認關閉此揪團",accept:()=>{this.$http.patch(o,s).then(()=>{alert("已關閉此揪團"),this.reload()}).catch(u=>{console.log(u)})}})},changeToZhTW(){this.$primevue.config.locale.accept="確認",this.$primevue.config.locale.reject="取消"},handleBookmark(){if(!this.bookmarkId&&this.isBookmarked===!1){const u=`${p}/bookmarks/`,m={userId:parseInt(this.userId,10),activityId:this.activity.id,isCancelled:!1};this.$http.post(u,m).then(e=>{console.log(e.data),this.isBookmarked=!0,this.bookmarkId=e.data.id}).catch(e=>{console.log(e)});return}const i=this.bookmarkId,s=`${p}/bookmarks/${i}`,o={isCancelled:!1};this.isBookmarked===!0&&(o.isCancelled=!0),this.$http.patch(s,o).then(()=>{this.isBookmarked=!this.isBookmarked}).catch(u=>{console.log(u)})}},watch:{$route(i){i.params.id&&(this.getActivityDetail(i.params.id),this.getActivityOrders(i.params.id))}},mounted(){this.getActivityDetail(this.$route.params.id),this.getActivityOrders(this.$route.params.id),this.userId=this.getUserId(),this.getActivities(),this.getOrders(),this.changeToZhTW()}},r=i=>($("data-v-1bef78ec"),i=i(),tt(),i),nt={key:0,class:"pt-[120px] pb-5 md:pt-[92px]"},rt={class:"container"},lt={class:"mb-4 text-xl font-bold md:text-3xl"},ct={class:"flex items-center gap-4"},dt=r(()=>t("p",null,"主辦者",-1)),mt={key:1,class:"bg-primary-03 py-10 md:py-20"},ht={class:"container"},ut={class:"grid h-full grid-cols-12 border-b border-[#3d3d3d] pb-10 md:pb-20"},pt={class:"col-span-12 md:col-span-8"},_t=["src"],bt={class:"mb-4 flex items-center justify-between border-b md:mb-0 md:hidden md:border-0"},yt=r(()=>t("h3",{class:"whitespace-nowrap text-lg font-medium md:mb-8 md:text-xl"}," 揪團詳情 ",-1)),vt={class:"p-4"},ft={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},xt=r(()=>t("span",{class:"material-icons mr-1 text-primary-01"}," schedule ",-1)),gt={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},kt=r(()=>t("span",{class:"material-icons text-primary-01"}," room ",-1)),At={class:"pl-8 text-sm text-[#b7b7b7]"},wt={class:"mb-10 md:mb-20"},Dt={class:"mb-10 flex justify-evenly border-y border-[#3d3d3d] py-10 md:mb-20"},It={class:"text-center"},Ct=r(()=>t("span",{class:"material-symbols-outlined text-4xl"}," credit_card ",-1)),Jt={class:"text-center"},Tt=r(()=>t("span",{class:"material-symbols-outlined text-4xl"}," monetization_on ",-1)),Bt={class:"text-center"},Vt=r(()=>t("span",{class:"material-symbols-outlined text-4xl"}," group ",-1)),Pt={class:"flex flex-wrap gap-4"},Et={class:"flex flex-col justify-evenly gap-2 md:flex-row"},jt=["src"],Ot=r(()=>t("ul",{class:"mb-10 flex flex-col gap-8 md:mb-20"},[t("li",{class:"flex gap-4"},[t("div",null,[t("img",{class:"inline-block h-20 w-20 rounded-full ring-2 ring-white",src:S,alt:"avatar01"})]),t("div",{class:"w-full rounded-lg bg-white p-4"},[t("p",{class:"mb-2 text-sm"},"Annie"),t("p",{class:"mb-4"},"請問租借球拍的費用是多少呢?"),t("div",{class:"mb-2 flex text-sm"},[t("span",{class:"mr-2"},"B1"),t("span",{class:"mr-2"},"4 小時前"),t("a",{href:"#",class:"text-[#b7b7b7]"},"回覆")]),t("a",{href:"#",class:"text-sm text-[#b1b1b1]"},"— 查看其他 1 則留言")])]),t("li",{class:"flex gap-4"},[t("div",null,[t("img",{class:"inline-block h-20 w-20 rounded-full ring-2 ring-white",src:S,alt:"avatar01"})]),t("div",{class:"w-full rounded-lg bg-white p-4"},[t("p",{class:"mb-2 text-sm"},"Annie"),t("p",{class:"mb-4"},"請問租借球拍的費用是多少呢?"),t("div",{class:"mb-2 flex text-sm"},[t("span",{class:"mr-2"},"B1"),t("span",{class:"mr-2"},"4 小時前"),t("a",{href:"#",class:"text-[#b7b7b7]"},"回覆")]),t("a",{href:"#",class:"text-sm text-[#b1b1b1]"},"— 查看其他 1 則留言")])])],-1)),Lt=r(()=>t("p",{class:"mb-4"},"留言",-1)),St=r(()=>t("div",{class:"flex justify-end gap-4"},[t("button",{type:"button",class:"btn bg-white transition-colors hover:bg-primary-02"}," 取消 "),t("button",{type:"button",class:"btn bg-primary-04 transition-colors hover:bg-primary-02"}," 確認 ")],-1)),Rt={class:"pt-10"},Ut=r(()=>t("h3",{class:"mb-8 text-xl font-medium"},"更多揪團活動",-1)),zt={class:"grid grid-cols-2 gap-6"},Ft={key:2},Nt={class:"flex h-screen flex-col items-center justify-center bg-primary-03"},Mt=r(()=>t("h1",{class:"mb-10 text-4xl"},"Oops...此揪團已取消",-1)),Wt={class:"mb-4 text-xl font-bold md:text-3xl"},Ht={class:"mb-10 flex items-center gap-4"},qt=r(()=>t("p",null,"主辦者",-1)),Yt={key:3,class:"sticky bottom-0 z-30 bg-white py-5"},Zt={class:"container"},Gt={class:"flex flex-col items-center md:flex-row md:justify-between"},Kt={class:"mb-2 md:mb-0"},Qt={class:"mb-2 flex items-center md:mb-0"},Xt=r(()=>t("span",{class:"material-symbols-outlined mr-1 text-primary-01"}," calendar_month ",-1)),$t=r(()=>t("span",{class:"material-icons ml-2 mr-1 text-primary-01"}," schedule ",-1)),te={class:"text-lg font-semibold sm:text-xl"},ee={class:"flex items-center gap-6"},se={key:0,class:"pi pi-star text-lg"},ie={key:1,class:"pi pi-star-fill text-lg text-yellow-300"},ae=r(()=>t("button",{type:"button",class:"btn btn-primary py-4 hover:bg-primary-01 hover:text-white",disabled:""}," 主辦者 ",-1)),oe=r(()=>t("button",{type:"button",class:"btn btn-primary py-4 hover:bg-primary-01 hover:text-white",disabled:""}," 已參加 ",-1));function ne(i,s,o,u,m,e){var g,k,A,w,D,I,C,J,T,B,V,P,E;const R=h("front-header"),x=h("PAvatar"),U=h("QuillEditor"),z=h("JoinAttendees"),v=h("TabPanel"),F=h("PTextarea"),N=h("TabView"),M=h("JoinDetailAside"),W=h("join-card-row"),H=h("RouterLink"),q=h("PButton"),Y=h("router-link"),Z=h("ConfirmDialog");return d(),l(b,null,[c(R),e.newDateActivity.isCancelled?O("",!0):(d(),l("section",nt,[t("div",rt,[t("h2",lt,n(e.newDateActivity.title),1),t("div",ct,[c(x,{image:(k=(g=e.newDateActivity)==null?void 0:g.user)==null?void 0:k.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[dt,t("p",null,n((w=(A=e.newDateActivity)==null?void 0:A.user)==null?void 0:w.name),1)])])])])),e.newDateActivity.isCancelled?(d(),l("main",Ft,[t("div",Nt,[Mt,t("h2",Wt,n(e.newDateActivity.title),1),t("div",Ht,[c(x,{image:(T=(J=e.newDateActivity)==null?void 0:J.user)==null?void 0:T.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[qt,t("p",null,n((V=(B=e.newDateActivity)==null?void 0:B.user)==null?void 0:V.name),1)])]),c(Y,{to:"/"},{default:_(()=>[c(q,{type:"button",label:"回到首頁",icon:"pi pi-home",iconPos:"right"})]),_:1})])])):(d(),l("main",mt,[t("div",ht,[t("div",ut,[t("div",pt,[t("img",{src:e.newDateActivity.mainImg,alt:"JoinDetailImage",class:"rounded md:mb-10"},null,8,_t),t("section",bt,[yt,t("div",vt,[t("p",ft,[xt,y(n((D=e.newDateActivity)==null?void 0:D.date)+" "+n((C=(I=e.newDateActivity)==null?void 0:I.startTime)==null?void 0:C.time),1)]),t("p",gt,[kt,y(n(e.newDateActivity.city)+n(e.newDateActivity.district),1)]),t("span",At,n(e.newDateActivity.address),1)])]),t("article",wt,[c(U,{content:e.newDateActivity.content,"onUpdate:content":s[0]||(s[0]=a=>e.newDateActivity.content=a),contentType:"html",readOnly:"",theme:"bubble"},null,8,["content"])]),t("section",Dt,[t("div",It,[Ct,t("p",null,n(e.newDateActivity.paymentMethod),1)]),t("div",Jt,[Tt,t("p",null,"$ "+n(e.newDateActivity.costPerPerson),1)]),t("div",Bt,[Vt,t("p",null,n(e.newDateActivity.maxJoinNum)+" 人",1)])]),c(N,null,{default:_(()=>[c(v,{header:"參與者"},{default:_(()=>[t("ul",Pt,[(d(!0),l(b,null,f(m.orders,a=>(d(),l("li",{key:a.userId},[c(z,{user:a},null,8,["user"])]))),128))])]),_:1}),c(v,{header:"更多照片"},{default:_(()=>[t("div",Et,[(d(!0),l(b,null,f(e.newDateActivity.imgs,(a,G)=>(d(),l("div",{class:"w-full",key:a+G},[t("img",{src:a,alt:"JoinDetailImg",class:"h-full"},null,8,jt)]))),128))])]),_:1}),c(v,{header:"留言"},{default:_(()=>[Ot,t("div",null,[Lt,t("form",null,[c(F,{modelValue:m.textareaValue,"onUpdate:modelValue":s[1]||(s[1]=a=>m.textareaValue=a),rows:"5",class:"mb-2 w-full",placeholder:"留下您的想法"},null,8,["modelValue"]),St])])]),_:1})]),_:1})]),c(M,{activity:e.newDateActivity},null,8,["activity"])]),t("section",Rt,[Ut,t("ul",zt,[(d(!0),l(b,null,f(e.slicedActivities,a=>(d(),l("li",{class:"col-span-1",key:a.id},[c(H,{class:"h-full",to:`/JoinDetail/id=${a.id}`},{default:_(()=>[c(W,{activity:a,userId:m.userId},null,8,["activity","userId"])]),_:2},1032,["to"])]))),128))])])])])),e.newDateActivity.isCancelled?O("",!0):(d(),l("section",Yt,[t("div",Zt,[t("div",Gt,[t("div",Kt,[t("p",Qt,[Xt,y(" "+n(e.newDateActivity.date)+" "+n(e.newDateActivity.dayOfWeekText)+" ",1),$t,y(" "+n((E=(P=e.newDateActivity)==null?void 0:P.startTime)==null?void 0:E.time),1)]),t("h2",te,n(e.newDateActivity.title),1)]),t("div",ee,[t("p",null,n(e.newDateActivity.maxJoinNum-m.orders.length)+" 個空位 ",1),t("button",{type:"button",onClick:s[2]||(s[2]=(...a)=>e.handleBookmark&&e.handleBookmark(...a))},[m.isBookmarked?(d(),l("i",ie)):(d(),l("i",se))]),e.isHost?(d(),l(b,{key:0},[ae,t("button",{type:"button",onClick:s[3]||(s[3]=(...a)=>e.hostCancelActivity&&e.hostCancelActivity(...a)),class:"btn border border-primary-01 py-4 hover:bg-primary-01 hover:text-white"}," 取消此揪團 ")],64)):e.hadJoined?(d(),l(b,{key:1},[oe,t("button",{type:"button",class:"btn border border-primary-01 py-4 hover:bg-primary-01 hover:text-white",onClick:s[4]||(s[4]=(...a)=>e.userCancelJoin&&e.userCancelJoin(...a)),label:"cancel"}," 取消報名 ")],64)):(d(),l("button",{key:2,type:"button",class:"btn btn-primary py-4",onClick:s[5]||(s[5]=(...a)=>e.userConfirmJoin&&e.userConfirmJoin(...a)),label:"confirm"}," 我要參加 "))])])])])),c(Z)],64)}const be=K(ot,[["render",ne],["__scopeId","data-v-1bef78ec"]]);export{be as default};