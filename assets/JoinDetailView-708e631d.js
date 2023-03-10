import{_ as G,G as K,s as j,a as l,d as n,b as t,B as r,D as O,e as v,w as _,F as y,C as x,t as Q,r as h,o as d,z as X,A as $}from"./index-56f709e6.js";import{j as L}from"./joinActivitiesStore-c05b16c9.js";import{F as tt}from"./FrontHeader-4420b9a3.js";import{J as et,a as st}from"./JoinDetailAside-aefe6a3e.js";import{J as it}from"./JoinCardRow-ccaacc3c.js";import"./avatar01-e06217d0.js";import"./LeafletMap-d50569dd.js";import"./leaflet-src-e6ce950e.js";import"./group03-b38e3255.js";const{VITE_URL:p}={VITE_URL:"https://vercel.com/key0329/join-sport-server-vercel",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},at={inject:["reload"],components:{FrontHeader:tt,JoinAttendees:et,JoinCardRow:it,JoinDetailAside:st},data(){return{userId:null,activity:[],orders:[],textareaValue:"",bookmarkId:null,isBookmarked:!1}},computed:{...K(L,["restructureActivitiesList"]),newDateActivity(){if(!this.activity.date)return{};const i=this.activity.date.split("-"),s=`${i[1]}/${i[2]}`,o=new Date(this.activity.date).getDay(),u=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][o];return{...this.activity,date:s,dayOfWeekText:u}},slicedActivities(){return[...this.restructureActivitiesList].filter(e=>(e==null?void 0:e.isCancelled)===!1).filter(e=>e!=null&&e.id?e.id!==parseInt(this.$route.params.id,10):[]).sort(()=>Math.random()-.5).slice(0,2)},hadJoined(){return this.orders.find(i=>i.userId===parseInt(this.userId,10))!==void 0},isHost(){return this.activity.userId===this.userId}},methods:{...j(L,["getActivities","getOrders"]),...j(Q,["getUserId"]),getActivityDetail(i){const s=`${p}/activities/${i}?_expand=user&_expand=group`;this.$http.get(s).then(o=>(this.activity=o.data,this.getActivityBookmark())).catch(o=>{console.log(o),alert("err")})},getActivityOrders(i){const s=`${p}/orders?isCancelled=false&activityId=${i}&_expand=user`;this.$http.get(s).then(o=>{this.orders=o.data}).catch(o=>{console.log(o),alert("err")})},getActivityBookmark(){const i=`${p}/users/${this.userId}/bookmarks?activityId=${this.activity.id}`;this.$http.get(i).then(s=>{s.data[0]&&(s.data[0].isCancelled===!1&&(this.isBookmarked=!0),this.bookmarkId=s.data[0].id)}).catch(s=>{console.log(s),alert("err")})},userConfirmJoin(){const i={userId:parseInt(this.userId,10),activityId:this.activity.id,isCancelled:!1},s=`${p}/orders`;this.$confirm.require({message:`${this.activity.title}`,header:"確認參加",accept:()=>{this.$http.post(s,i).then(()=>{alert("報名成功"),this.reload()}).catch(o=>{console.log(o)})}})},userCancelJoin(){const i=this.orders.find(m=>m.userId===parseInt(this.userId,10)),{id:s}=i,o={isCancelled:!0},u=`${p}/orders/${s}`;this.$confirm.require({message:`${this.activity.title}`,header:"確認取消",accept:()=>{this.$http.patch(u,o).then(()=>{alert("取消揪團成功"),this.reload()}).catch(m=>{console.log(m)})}})},hostCancelActivity(){const{id:i}=this.$route.params,s={isCancelled:!0},o=`${p}/activities/${i}`;this.$confirm.require({message:`${this.activity.title}`,header:"確認關閉此揪團",accept:()=>{this.$http.patch(o,s).then(()=>{alert("已關閉此揪團"),this.reload()}).catch(u=>{console.log(u)})}})},changeToZhTW(){this.$primevue.config.locale.accept="確認",this.$primevue.config.locale.reject="取消"},handleBookmark(){if(!this.bookmarkId&&this.isBookmarked===!1){const u=`${p}/bookmarks/`,m={userId:parseInt(this.userId,10),activityId:this.activity.id,isCancelled:!1};this.$http.post(u,m).then(e=>{console.log(e.data),this.isBookmarked=!0,this.bookmarkId=e.data.id}).catch(e=>{console.log(e)});return}const i=this.bookmarkId,s=`${p}/bookmarks/${i}`,o={isCancelled:!1};this.isBookmarked===!0&&(o.isCancelled=!0),this.$http.patch(s,o).then(()=>{this.isBookmarked=!this.isBookmarked}).catch(u=>{console.log(u)})}},watch:{$route(i){i.params.id&&(this.getActivityDetail(i.params.id),this.getActivityOrders(i.params.id))}},mounted(){this.getActivityDetail(this.$route.params.id),this.getActivityOrders(this.$route.params.id),this.userId=this.getUserId(),this.getActivities(),this.getOrders(),this.changeToZhTW()}},c=i=>(X("data-v-f54cde26"),i=i(),$(),i),ot={key:0,class:"pt-[120px] pb-5 md:pt-[92px]"},nt={class:"container"},ct={class:"mb-4 text-xl font-bold md:text-3xl"},rt={class:"flex items-center gap-4"},lt=c(()=>t("p",null,"主辦者",-1)),dt={key:1,class:"bg-primary-03 py-10 md:py-20"},mt={class:"container"},ht={class:"grid h-full grid-cols-12 border-b border-[#3d3d3d] pb-10 md:pb-20"},ut={class:"col-span-12 md:col-span-8"},pt=["src"],_t={class:"mb-4 flex items-center justify-between border-b md:mb-0 md:hidden md:border-0"},yt=c(()=>t("h3",{class:"whitespace-nowrap text-lg font-medium md:mb-8 md:text-xl"}," 揪團詳情 ",-1)),bt={class:"p-4"},vt={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},ft=c(()=>t("span",{class:"material-icons mr-1 text-primary-01"}," schedule ",-1)),xt={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},gt=c(()=>t("span",{class:"material-icons text-primary-01"}," room ",-1)),kt={class:"pl-8 text-sm text-[#b7b7b7]"},At={class:"mb-10 md:mb-20"},wt={class:"mb-10 flex justify-evenly border-y border-[#3d3d3d] py-10 md:mb-20"},Dt={class:"text-center"},It=c(()=>t("span",{class:"material-symbols-outlined text-4xl"}," credit_card ",-1)),Ct={class:"text-center"},Jt=c(()=>t("span",{class:"material-symbols-outlined text-4xl"}," monetization_on ",-1)),Tt={class:"text-center"},Bt=c(()=>t("span",{class:"material-symbols-outlined text-4xl"}," group ",-1)),Vt={class:"flex flex-wrap gap-4"},Pt={class:"flex flex-col justify-evenly gap-2 md:flex-row"},Et=["src"],jt={class:"mb-10 flex flex-col gap-8 md:mb-20"},Ot={class:"flex gap-4"},Lt=c(()=>t("div",{class:"w-full rounded-lg bg-white p-4"},[t("p",{class:"mb-2 text-sm"},"Annie"),t("p",{class:"mb-4"},"請問租借球拍的費用是多少呢?"),t("div",{class:"mb-2 flex text-sm"},[t("span",{class:"mr-2"},"B1"),t("span",{class:"mr-2"},"4 小時前"),t("a",{href:"#",class:"text-[#b7b7b7]"},"回覆")]),t("a",{href:"#",class:"text-sm text-[#b1b1b1]"},"— 查看其他 1 則留言")],-1)),St={class:"flex gap-4"},zt=c(()=>t("div",{class:"w-full rounded-lg bg-white p-4"},[t("p",{class:"mb-2 text-sm"},"Annie"),t("p",{class:"mb-4"},"請問租借球拍的費用是多少呢?"),t("div",{class:"mb-2 flex text-sm"},[t("span",{class:"mr-2"},"B1"),t("span",{class:"mr-2"},"4 小時前"),t("a",{href:"#",class:"text-[#b7b7b7]"},"回覆")]),t("a",{href:"#",class:"text-sm text-[#b1b1b1]"},"— 查看其他 1 則留言")],-1)),Rt=c(()=>t("p",{class:"mb-4"},"留言",-1)),Ut=c(()=>t("div",{class:"flex justify-end gap-4"},[t("button",{type:"button",class:"btn bg-white transition-colors hover:bg-primary-02"}," 取消 "),t("button",{type:"button",class:"btn bg-primary-04 transition-colors hover:bg-primary-02"}," 確認 ")],-1)),Ft={class:"pt-10"},Nt=c(()=>t("h3",{class:"mb-8 text-xl font-medium"},"更多揪團活動",-1)),Mt={class:"grid grid-cols-2 gap-6"},Wt={key:2},Ht={class:"flex h-screen flex-col items-center justify-center bg-primary-03"},qt=c(()=>t("h1",{class:"mb-10 text-4xl"},"Oops...此揪團已取消",-1)),Yt={class:"mb-4 text-xl font-bold md:text-3xl"},Zt={class:"mb-10 flex items-center gap-4"},Gt=c(()=>t("p",null,"主辦者",-1)),Kt={key:3,class:"sticky bottom-0 z-30 bg-white py-5"},Qt={class:"container"},Xt={class:"flex flex-col items-center md:flex-row md:justify-between"},$t={class:"mb-2 md:mb-0"},te={class:"mb-2 flex items-center md:mb-0"},ee=c(()=>t("span",{class:"material-symbols-outlined mr-1 text-primary-01"}," calendar_month ",-1)),se=c(()=>t("span",{class:"material-icons ml-2 mr-1 text-primary-01"}," schedule ",-1)),ie={class:"text-lg font-semibold sm:text-xl"},ae={class:"flex items-center gap-6"},oe={key:0,class:"pi pi-star text-lg"},ne={key:1,class:"pi pi-star-fill text-lg text-yellow-300"},ce=c(()=>t("button",{type:"button",class:"btn btn-primary py-4 hover:bg-primary-01 hover:text-white",disabled:""}," 主辦者 ",-1)),re=c(()=>t("button",{type:"button",class:"btn btn-primary py-4 hover:bg-primary-01 hover:text-white",disabled:""}," 已參加 ",-1));function le(i,s,o,u,m,e){var g,k,A,w,D,I,C,J,T,B,V,P,E;const S=h("front-header"),b=h("PAvatar"),z=h("QuillEditor"),R=h("JoinAttendees"),f=h("TabPanel"),U=h("PTextarea"),F=h("TabView"),N=h("JoinDetailAside"),M=h("join-card-row"),W=h("RouterLink"),H=h("PButton"),q=h("router-link"),Y=h("ConfirmDialog");return d(),l(y,null,[n(S),e.newDateActivity.isCancelled?O("",!0):(d(),l("section",ot,[t("div",nt,[t("h2",ct,r(e.newDateActivity.title),1),t("div",rt,[n(b,{image:(k=(g=e.newDateActivity)==null?void 0:g.user)==null?void 0:k.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[lt,t("p",null,r((w=(A=e.newDateActivity)==null?void 0:A.user)==null?void 0:w.name),1)])])])])),e.newDateActivity.isCancelled?(d(),l("main",Wt,[t("div",Ht,[qt,t("h2",Yt,r(e.newDateActivity.title),1),t("div",Zt,[n(b,{image:(T=(J=e.newDateActivity)==null?void 0:J.user)==null?void 0:T.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[Gt,t("p",null,r((V=(B=e.newDateActivity)==null?void 0:B.user)==null?void 0:V.name),1)])]),n(q,{to:"/"},{default:_(()=>[n(H,{type:"button",label:"回到首頁",icon:"pi pi-home",iconPos:"right"})]),_:1})])])):(d(),l("main",dt,[t("div",mt,[t("div",ht,[t("div",ut,[t("img",{src:e.newDateActivity.mainImg,alt:"JoinDetailImage",class:"rounded md:mb-10"},null,8,pt),t("section",_t,[yt,t("div",bt,[t("p",vt,[ft,v(r((D=e.newDateActivity)==null?void 0:D.date)+" "+r((C=(I=e.newDateActivity)==null?void 0:I.startTime)==null?void 0:C.time),1)]),t("p",xt,[gt,v(r(e.newDateActivity.city)+r(e.newDateActivity.district),1)]),t("span",kt,r(e.newDateActivity.address),1)])]),t("article",At,[n(z,{content:e.newDateActivity.content,"onUpdate:content":s[0]||(s[0]=a=>e.newDateActivity.content=a),contentType:"html",readOnly:"",theme:"bubble"},null,8,["content"])]),t("section",wt,[t("div",Dt,[It,t("p",null,r(e.newDateActivity.paymentMethod),1)]),t("div",Ct,[Jt,t("p",null,"$ "+r(e.newDateActivity.costPerPerson),1)]),t("div",Tt,[Bt,t("p",null,r(e.newDateActivity.maxJoinNum)+" 人",1)])]),n(F,null,{default:_(()=>[n(f,{header:"參與者"},{default:_(()=>[t("ul",Vt,[(d(!0),l(y,null,x(m.orders,a=>(d(),l("li",{key:a.userId},[n(R,{user:a},null,8,["user"])]))),128))])]),_:1}),n(f,{header:"更多照片"},{default:_(()=>[t("div",Pt,[(d(!0),l(y,null,x(e.newDateActivity.imgs,(a,Z)=>(d(),l("div",{class:"w-full",key:a+Z},[t("img",{src:a,alt:"JoinDetailImg",class:"h-full"},null,8,Et)]))),128))])]),_:1}),n(f,{header:"留言"},{default:_(()=>[t("ul",jt,[t("li",Ot,[t("div",null,[n(b,{image:"/src/assets/images/avatar/avatar01.png",size:"xlarge",shape:"circle",class:"mb-2"})]),Lt]),t("li",St,[t("div",null,[n(b,{image:"/src/assets/images/avatar/avatar01.png",size:"xlarge",shape:"circle",class:"mb-2"})]),zt])]),t("div",null,[Rt,t("form",null,[n(U,{modelValue:m.textareaValue,"onUpdate:modelValue":s[1]||(s[1]=a=>m.textareaValue=a),rows:"5",class:"mb-2 w-full",placeholder:"留下您的想法"},null,8,["modelValue"]),Ut])])]),_:1})]),_:1})]),n(N,{activity:e.newDateActivity},null,8,["activity"])]),t("section",Ft,[Nt,t("ul",Mt,[(d(!0),l(y,null,x(e.slicedActivities,a=>(d(),l("li",{class:"col-span-1",key:a.id},[n(W,{class:"h-full",to:`/JoinDetail/id=${a.id}`},{default:_(()=>[n(M,{activity:a,userId:m.userId},null,8,["activity","userId"])]),_:2},1032,["to"])]))),128))])])])])),e.newDateActivity.isCancelled?O("",!0):(d(),l("section",Kt,[t("div",Qt,[t("div",Xt,[t("div",$t,[t("p",te,[ee,v(" "+r(e.newDateActivity.date)+" "+r(e.newDateActivity.dayOfWeekText)+" ",1),se,v(" "+r((E=(P=e.newDateActivity)==null?void 0:P.startTime)==null?void 0:E.time),1)]),t("h2",ie,r(e.newDateActivity.title),1)]),t("div",ae,[t("p",null,r(e.newDateActivity.maxJoinNum-m.orders.length)+" 個空位 ",1),t("button",{type:"button",onClick:s[2]||(s[2]=(...a)=>e.handleBookmark&&e.handleBookmark(...a))},[m.isBookmarked?(d(),l("i",ne)):(d(),l("i",oe))]),e.isHost?(d(),l(y,{key:0},[ce,t("button",{type:"button",onClick:s[3]||(s[3]=(...a)=>e.hostCancelActivity&&e.hostCancelActivity(...a)),class:"btn border border-primary-01 py-4 hover:bg-primary-01 hover:text-white"}," 取消此揪團 ")],64)):e.hadJoined?(d(),l(y,{key:1},[re,t("button",{type:"button",class:"btn border border-primary-01 py-4 hover:bg-primary-01 hover:text-white",onClick:s[4]||(s[4]=(...a)=>e.userCancelJoin&&e.userCancelJoin(...a)),label:"cancel"}," 取消報名 ")],64)):(d(),l("button",{key:2,type:"button",class:"btn btn-primary py-4",onClick:s[5]||(s[5]=(...a)=>e.userConfirmJoin&&e.userConfirmJoin(...a)),label:"confirm"}," 我要參加 "))])])])])),n(Y)],64)}const fe=G(at,[["render",le],["__scopeId","data-v-f54cde26"]]);export{fe as default};
