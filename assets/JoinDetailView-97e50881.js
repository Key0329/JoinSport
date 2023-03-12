import{_ as Q,v as X,s as E,a as l,d as m,b as t,B as h,E as g,e as v,w as _,F as y,A as x,t as G,r as u,o as c,C as tt,D as et}from"./index-4ff3593d.js";import{j as O}from"./joinActivitiesStore-b2ea23ce.js";import{F as st}from"./FrontHeader-bc6eacf1.js";import{J as it,a as at}from"./JoinDetailAside-6c9aeb39.js";import{J as ot}from"./JoinCardRow-b30befcb.js";import{_ as j}from"./avatar01-e06217d0.js";import"./searchStore-df1774db.js";import"./LeafletMap-12a0517c.js";import"./leaflet-src-4a455192.js";import"./group03-b38e3255.js";const{VITE_URL:p}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},rt={components:{FrontHeader:st,JoinAttendees:it,JoinCardRow:ot,JoinDetailAside:at},data(){return{userId:null,activity:[],orders:[],textareaValue:"",bookmarkId:null,isBookmarked:!1,imgLoading:!0,sectionRerender:!1}},computed:{...X(O,["availableActivities"]),newDateActivity(){if(!this.activity.date)return{};const i=this.activity.date.split("-"),s=`${i[1]}/${i[2]}`,o=new Date(this.activity.date).getDay(),d=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][o];return{...this.activity,date:s,dayOfWeekText:d}},slicedActivities(){return[...this.availableActivities].filter(e=>(e==null?void 0:e.isCancelled)===!1).filter(e=>e!=null&&e.id?e.id!==parseInt(this.$route.params.id,10):[]).sort(()=>Math.random()-.5).slice(0,2)},hadJoined(){return this.orders.find(i=>i.userId===parseInt(this.userId,10))!==void 0},isHost(){return this.activity.userId===this.userId}},methods:{...E(O,["getActivities","getOrders"]),...E(G,["getUserId"]),getActivityDetail(i){const s=`${p}/activities/${i}?_expand=user&_expand=group`;this.$http.get(s).then(o=>(this.activity=o.data,this.getActivityBookmark())).catch(o=>{const d=o.response.statusText;this.$toast.add({severity:"error",detail:`${d} 找不到活動資訊`,life:1e3,contentStyleClass:"custom-toast-danger"})})},getActivityOrders(i){const s=`${p}/orders?isCancelled=false&activityId=${i}&_expand=user`;this.$http.get(s).then(o=>{this.orders=o.data}).catch(o=>{const d=o.response.statusText;this.$toast.add({severity:"error",detail:`${d} 找不到參與者資訊`,life:1e3,contentStyleClass:"custom-toast-danger"})})},getActivityBookmark(){const i=`${p}/users/${this.userId}/bookmarks?activityId=${this.activity.id}`;this.$http.get(i).then(s=>{s.data[0]&&(s.data[0].isCancelled===!1&&(this.isBookmarked=!0),this.bookmarkId=s.data[0].id)}).catch(s=>{const o=s.response.statusText;this.$toast.add({severity:"error",detail:`${o}'找不到收藏資料'`,life:1e3,contentStyleClass:"custom-toast-danger"})})},userConfirmJoin(){const i={userId:parseInt(this.userId,10),activityId:this.activity.id,isCancelled:!1},s=`${p}/orders`;this.$confirm.require({message:`${this.activity.title}`,header:"確認參加",accept:()=>{this.$http.post(s,i).then(()=>{this.$toast.add({severity:"success",detail:"報名成功",life:1e3}),this.getActivityOrders(this.$route.params.id)}).catch(o=>{const d=o.response.statusText;this.$toast.add({severity:"error",detail:`${d}'報名失敗'`,life:1e3,contentStyleClass:"custom-toast-danger"})})}})},userCancelJoin(){const i=this.orders.find(r=>r.userId===parseInt(this.userId,10)),{id:s}=i,o={isCancelled:!0},d=`${p}/orders/${s}`;this.$confirm.require({message:`${this.activity.title}`,header:"確認取消",accept:()=>{this.$http.patch(d,o).then(()=>{this.$toast.add({severity:"success",detail:"成功取消此揪團",life:1e3}),this.getActivityOrders(this.$route.params.id)}).catch(r=>{const e=r.response.statusText;this.$toast.add({severity:"error",detail:`${e}'取消報名失敗'`,life:1e3,contentStyleClass:"custom-toast-danger"})})}})},hostCancelActivity(){const{id:i}=this.$route.params,s={isCancelled:!0},o=`${p}/activities/${i}`;this.$confirm.require({message:`${this.activity.title}`,header:"確認關閉此揪團",accept:()=>{this.$http.patch(o,s).then(()=>{this.$toast.add({severity:"success",detail:"已關閉此揪團",life:1e3}),this.getActivityDetail(this.$route.params.id)}).catch(d=>{const r=d.response.statusText;this.$toast.add({severity:"error",detail:`${r}'關閉失敗'`,life:1e3,contentStyleClass:"custom-toast-danger"})})}})},changeToZhTW(){this.$primevue.config.locale.accept="確認",this.$primevue.config.locale.reject="取消"},handleBookmark(){if(!this.bookmarkId&&this.isBookmarked===!1){const d=`${p}/bookmarks/`,r={userId:parseInt(this.userId,10),activityId:this.activity.id,isCancelled:!1};this.$http.post(d,r).then(e=>{this.isBookmarked=!0,this.bookmarkId=e.data.id}).catch(e=>{const b=e.response.statusText;this.$toast.add({severity:"error",detail:b,life:1e3,contentStyleClass:"custom-toast-danger"})});return}const i=this.bookmarkId,s=`${p}/bookmarks/${i}`,o={isCancelled:!1};this.isBookmarked===!0&&(o.isCancelled=!0),this.$http.patch(s,o).then(()=>{this.isBookmarked=!this.isBookmarked,this.isBookmarked===!0&&this.$toast.add({severity:"success",detail:"加入我的收藏",life:1e3}),this.isBookmarked===!1&&this.$toast.add({severity:"info",detail:"移除我的收藏",life:1e3})}).catch(d=>{const r=d.response.statusText;this.$toast.add({severity:"error",detail:r,life:1e3,contentStyleClass:"custom-toast-danger"})})},onImageLoad(){this.imgLoading=!1}},watch:{$route(i){i.params.id&&(this.getActivityDetail(i.params.id),this.getActivityOrders(i.params.id))}},mounted(){this.getActivityDetail(this.$route.params.id),this.getActivityOrders(this.$route.params.id),this.userId=this.getUserId(),this.getActivities(),this.getOrders(),this.changeToZhTW()}},n=i=>(tt("data-v-1bcd0571"),i=i(),et(),i),nt={key:0,class:"pt-[120px] pb-5 md:pt-[92px]"},lt={key:0,class:"container"},ct=n(()=>t("div",{class:"skeleton mb-4 h-12 w-1/3 rounded-lg"},null,-1)),dt=n(()=>t("div",{class:"flex items-center gap-4"},[t("div",{class:"skeleton h-16 w-16 rounded-full"}),t("div",{class:"skeleton h-12 w-10 rounded-lg"})],-1)),mt=[ct,dt],ht={key:1,class:"container"},ut={class:"mb-4 text-xl font-bold md:text-3xl"},pt={class:"flex items-center gap-4"},_t=n(()=>t("p",null,"主辦者",-1)),yt={key:1,class:"bg-primary-03 py-10 md:py-20"},vt={class:"container"},bt={class:"grid h-full grid-cols-12 border-b border-[#3d3d3d] pb-10 md:pb-20"},ft={class:"col-span-12 md:col-span-8"},gt={key:0,class:"skeleton flex h-full w-full items-center justify-center rounded-l-[10px]"},xt=n(()=>t("i",{class:"pi pi-image text-xl text-gray-500"},null,-1)),kt=[xt],wt=["src"],At={class:"mb-4 flex items-center justify-between border-b md:mb-0 md:hidden md:border-0"},Dt=n(()=>t("h3",{class:"whitespace-nowrap text-lg font-medium md:mb-8 md:text-xl"}," 揪團詳情 ",-1)),It={class:"p-4"},Ct={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},Tt=n(()=>t("span",{class:"material-icons mr-1 text-primary-01"}," schedule ",-1)),Bt={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},Jt=n(()=>t("span",{class:"material-icons text-primary-01"}," room ",-1)),Vt={class:"pl-8 text-sm text-[#b7b7b7]"},Pt={class:"mb-10 md:mb-20"},St={class:"mb-10 flex justify-evenly border-y border-[#3d3d3d] py-10 md:mb-20"},Lt={class:"text-center"},$t=n(()=>t("span",{class:"material-symbols-outlined text-4xl"}," credit_card ",-1)),Et={class:"text-center"},Ot=n(()=>t("span",{class:"material-symbols-outlined text-4xl"}," monetization_on ",-1)),jt={class:"text-center"},Mt=n(()=>t("span",{class:"material-symbols-outlined text-4xl"}," group ",-1)),Rt={class:"flex flex-wrap gap-4"},Ut={class:"flex flex-col justify-evenly gap-2 md:flex-row"},zt=["src"],Ft=n(()=>t("ul",{class:"mb-10 flex flex-col gap-8 md:mb-20"},[t("li",{class:"flex gap-4"},[t("div",null,[t("img",{class:"inline-block h-20 w-20 rounded-full ring-2 ring-white",src:j,alt:"avatar01"})]),t("div",{class:"w-full rounded-lg bg-white p-4"},[t("p",{class:"mb-2 text-sm"},"Annie"),t("p",{class:"mb-4"},"請問租借球拍的費用是多少呢?"),t("div",{class:"mb-2 flex text-sm"},[t("span",{class:"mr-2"},"B1"),t("span",{class:"mr-2"},"4 小時前"),t("a",{href:"#",class:"text-[#b7b7b7]"},"回覆")]),t("a",{href:"#",class:"text-sm text-[#b1b1b1]"},"— 查看其他 1 則留言")])]),t("li",{class:"flex gap-4"},[t("div",null,[t("img",{class:"inline-block h-20 w-20 rounded-full ring-2 ring-white",src:j,alt:"avatar01"})]),t("div",{class:"w-full rounded-lg bg-white p-4"},[t("p",{class:"mb-2 text-sm"},"Annie"),t("p",{class:"mb-4"},"請問租借球拍的費用是多少呢?"),t("div",{class:"mb-2 flex text-sm"},[t("span",{class:"mr-2"},"B1"),t("span",{class:"mr-2"},"4 小時前"),t("a",{href:"#",class:"text-[#b7b7b7]"},"回覆")]),t("a",{href:"#",class:"text-sm text-[#b1b1b1]"},"— 查看其他 1 則留言")])])],-1)),Nt=n(()=>t("p",{class:"mb-4"},"留言",-1)),Wt=n(()=>t("div",{class:"flex justify-end gap-4"},[t("button",{type:"button",class:"btn bg-white transition-colors hover:bg-primary-02"}," 取消 "),t("button",{type:"button",class:"btn bg-primary-04 transition-colors hover:bg-primary-02"}," 確認 ")],-1)),Ht={class:"pt-10"},qt=n(()=>t("h3",{class:"mb-8 text-xl font-medium"},"更多揪團活動",-1)),Yt={class:"grid grid-cols-2 gap-6"},Zt={key:2},Kt={class:"flex h-screen flex-col items-center justify-center bg-primary-03"},Qt=n(()=>t("h1",{class:"mb-10 text-4xl"},"Oops...此揪團已取消",-1)),Xt={class:"mb-4 text-xl font-bold md:text-3xl"},Gt={class:"mb-10 flex items-center gap-4"},te=n(()=>t("p",null,"主辦者",-1)),ee={class:"container"},se={class:"flex flex-col items-center md:flex-row md:justify-between"},ie={class:"mb-2 md:mb-0"},ae={class:"mb-2 flex items-center md:mb-0"},oe=n(()=>t("span",{class:"material-symbols-outlined mr-1 text-primary-01"}," calendar_month ",-1)),re=n(()=>t("span",{class:"material-icons ml-2 mr-1 text-primary-01"}," schedule ",-1)),ne={class:"text-lg font-semibold sm:text-xl"},le={class:"flex items-center gap-6"},ce={key:0,class:"pi pi-star text-lg"},de={key:1,class:"pi pi-star-fill text-lg text-yellow-300"},me=n(()=>t("button",{type:"button",class:"btn btn-primary py-4 hover:bg-primary-01 hover:text-white",disabled:""}," 主辦者 ",-1)),he=n(()=>t("button",{type:"button",class:"btn btn-primary py-4 hover:bg-primary-01 hover:text-white",disabled:""}," 已參加 ",-1));function ue(i,s,o,d,r,e){var w,A,D,I,C,T,B,J,V,P,S,L,$;const b=u("PToast"),M=u("front-header"),k=u("PAvatar"),R=u("QuillEditor"),U=u("JoinAttendees"),f=u("TabPanel"),z=u("PTextarea"),F=u("TabView"),N=u("JoinDetailAside"),W=u("join-card-row"),H=u("RouterLink"),q=u("PButton"),Y=u("router-link"),Z=u("ConfirmDialog");return c(),l(y,null,[m(b),m(M),e.newDateActivity.isCancelled?g("",!0):(c(),l("section",nt,[r.imgLoading?(c(),l("div",lt,mt)):(c(),l("div",ht,[t("h2",ut,h(e.newDateActivity.title),1),t("div",pt,[m(k,{image:(A=(w=e.newDateActivity)==null?void 0:w.user)==null?void 0:A.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[_t,t("p",null,h((I=(D=e.newDateActivity)==null?void 0:D.user)==null?void 0:I.name),1)])])]))])),e.newDateActivity.isCancelled?(c(),l("main",Zt,[t("div",Kt,[Qt,t("h2",Xt,h(e.newDateActivity.title),1),t("div",Gt,[m(k,{image:(V=(J=e.newDateActivity)==null?void 0:J.user)==null?void 0:V.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[te,t("p",null,h((S=(P=e.newDateActivity)==null?void 0:P.user)==null?void 0:S.name),1)])]),m(Y,{to:"/"},{default:_(()=>[m(q,{type:"button",label:"回到首頁",icon:"pi pi-home",iconPos:"right"})]),_:1})])])):(c(),l("main",yt,[t("div",vt,[t("div",bt,[t("div",ft,[r.imgLoading?(c(),l("div",gt,kt)):g("",!0),t("img",{onLoad:s[0]||(s[0]=(...a)=>e.onImageLoad&&e.onImageLoad(...a)),src:e.newDateActivity.mainImg,alt:"JoinDetailImage",class:"rounded md:mb-10"},null,40,wt),t("section",At,[Dt,t("div",It,[t("p",Ct,[Tt,v(h((C=e.newDateActivity)==null?void 0:C.date)+" "+h((B=(T=e.newDateActivity)==null?void 0:T.startTime)==null?void 0:B.time),1)]),t("p",Bt,[Jt,v(h(e.newDateActivity.city)+h(e.newDateActivity.district),1)]),t("span",Vt,h(e.newDateActivity.address),1)])]),t("article",Pt,[m(R,{content:e.newDateActivity.content,"onUpdate:content":s[1]||(s[1]=a=>e.newDateActivity.content=a),contentType:"html",readOnly:"",theme:"bubble"},null,8,["content"])]),t("section",St,[t("div",Lt,[$t,t("p",null,h(e.newDateActivity.paymentMethod),1)]),t("div",Et,[Ot,t("p",null,"$ "+h(e.newDateActivity.costPerPerson),1)]),t("div",jt,[Mt,t("p",null,h(e.newDateActivity.maxJoinNum)+" 人",1)])]),m(F,null,{default:_(()=>[m(f,{header:"參與者"},{default:_(()=>[t("ul",Rt,[(c(!0),l(y,null,x(r.orders,a=>(c(),l("li",{key:a.userId},[m(U,{user:a},null,8,["user"])]))),128))])]),_:1}),m(f,{header:"更多照片"},{default:_(()=>[t("div",Ut,[(c(!0),l(y,null,x(e.newDateActivity.imgs,(a,K)=>(c(),l("div",{class:"w-full",key:a+K},[t("img",{src:a,alt:"JoinDetailImg",class:"h-full"},null,8,zt)]))),128))])]),_:1}),m(f,{header:"留言"},{default:_(()=>[Ft,t("div",null,[Nt,t("form",null,[m(z,{modelValue:r.textareaValue,"onUpdate:modelValue":s[2]||(s[2]=a=>r.textareaValue=a),rows:"5",class:"mb-2 w-full",placeholder:"留下您的想法"},null,8,["modelValue"]),Wt])])]),_:1})]),_:1})]),m(N,{activity:e.newDateActivity},null,8,["activity"])]),t("section",Ht,[qt,t("ul",Yt,[(c(!0),l(y,null,x(e.slicedActivities,a=>(c(),l("li",{class:"col-span-1",key:a.id},[m(H,{class:"h-full",to:`/JoinDetail/id=${a.id}`},{default:_(()=>[m(W,{activity:a,userId:r.userId},null,8,["activity","userId"])]),_:2},1032,["to"])]))),128))])])])])),e.newDateActivity.isCancelled?g("",!0):(c(),l("section",{key:r.sectionRerender,class:"sticky bottom-0 z-30 bg-white py-5"},[t("div",ee,[t("div",se,[t("div",ie,[t("p",ae,[oe,v(" "+h(e.newDateActivity.date)+" "+h(e.newDateActivity.dayOfWeekText)+" ",1),re,v(" "+h(($=(L=e.newDateActivity)==null?void 0:L.startTime)==null?void 0:$.time),1)]),t("h2",ne,h(e.newDateActivity.title),1)]),t("div",le,[t("p",null,h(e.newDateActivity.maxJoinNum-r.orders.length)+" 個空位 ",1),t("button",{type:"button",onClick:s[3]||(s[3]=(...a)=>e.handleBookmark&&e.handleBookmark(...a))},[r.isBookmarked?(c(),l("i",de)):(c(),l("i",ce))]),e.isHost?(c(),l(y,{key:0},[me,t("button",{type:"button",onClick:s[4]||(s[4]=(...a)=>e.hostCancelActivity&&e.hostCancelActivity(...a)),class:"btn border border-primary-01 py-4 hover:bg-primary-01 hover:text-white"}," 取消此揪團 ")],64)):e.hadJoined?(c(),l(y,{key:1},[he,t("button",{type:"button",class:"btn border border-primary-01 py-4 hover:bg-primary-01 hover:text-white",onClick:s[5]||(s[5]=(...a)=>e.userCancelJoin&&e.userCancelJoin(...a)),label:"cancel"}," 取消報名 ")],64)):(c(),l("button",{key:2,type:"button",class:"btn btn-primary py-4",onClick:s[6]||(s[6]=(...a)=>e.userConfirmJoin&&e.userConfirmJoin(...a)),label:"confirm"}," 我要參加 "))])])])])),m(Z)],64)}const Ae=Q(rt,[["render",ue],["__scopeId","data-v-1bcd0571"]]);export{Ae as default};
