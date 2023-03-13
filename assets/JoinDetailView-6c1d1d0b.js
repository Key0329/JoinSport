import{s as Y,t as T,_ as x,u as j,r as d,o as n,a as r,b as t,F as f,A as C,d as l,w as g,e as A,B as m,H,E as w,C as K,D as N}from"./index-314ed5e4.js";import{_ as S,F as X}from"./FrontHeader-270b404c.js";import{j as M}from"./joinActivitiesStore-1e02a591.js";import{J as G}from"./JoinCardRow-9a6ec895.js";import{J as W,a as Z}from"./JoinAttendees-cf4ab076.js";import"./searchStore-3bcc8392.js";import"./LeafletMap-f1e3887c.js";import"./leaflet-src-017c201e.js";const q={components:{JoinCardRow:G},data(){return{userId:null}},computed:{...Y(M,["availableActivities"]),slicedActivities(){return[...this.availableActivities].filter(e=>(e==null?void 0:e.isCancelled)===!1).filter(e=>e!=null&&e.id?e.id!==parseInt(this.$route.params.id,10):[]).sort(()=>Math.random()-.5).slice(0,2)}},methods:{...T(M,["getActivities","getOrders"]),...T(j,["getUserId"])},mounted(){this.getActivities(),this.getOrders(),this.userId=this.getUserId()}},Q=t("h3",{class:"mb-8 text-xl font-medium"},"更多揪團活動",-1),tt={class:"grid grid-cols-2 gap-6"};function et(a,i,s,c,o,e){const u=d("JoinCardRow"),h=d("RouterLink");return n(),r(f,null,[Q,t("ul",tt,[(n(!0),r(f,null,C(e.slicedActivities,_=>(n(),r("li",{class:"col-span-1",key:_.id},[l(h,{class:"h-full",to:`/JoinDetail/id=${_.id}`},{default:g(()=>[l(u,{activity:_,userId:o.userId},null,8,["activity","userId"])]),_:2},1032,["to"])]))),128))])],64)}const st=x(q,[["render",et]]),{VITE_URL:D}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},it={props:{userId:{type:String},activity:{type:Object}},data(){return{bookmarkId:null,isBookmarked:!1}},methods:{getActivityBookmark(a){const i=`${D}/users/${this.userId}/bookmarks?activityId=${a}`;this.$http.get(i).then(s=>{s.data[0]&&(s.data[0].isCancelled===!1&&(this.isBookmarked=!0),this.bookmarkId=s.data[0].id)}).catch(s=>{const c=s.response.statusText;this.$toast.add({severity:"error",detail:`${c}'找不到收藏資料'`,life:1e3,contentStyleClass:"custom-toast-danger"})})},handleBookmark(){if(!this.bookmarkId&&this.isBookmarked===!1){const c=`${D}/bookmarks/`,o={userId:parseInt(this.userId,10),activityId:this.activity.id,isCancelled:!1};this.$http.post(c,o).then(e=>{this.isBookmarked=!0,this.bookmarkId=e.data.id}).catch(e=>{const u=e.response.statusText;this.$toast.add({severity:"error",detail:u,life:1e3,contentStyleClass:"custom-toast-danger"})});return}const a=this.bookmarkId,i=`${D}/bookmarks/${a}`,s={isCancelled:!1};this.isBookmarked===!0&&(s.isCancelled=!0),this.$http.patch(i,s).then(()=>{this.isBookmarked=!this.isBookmarked,this.isBookmarked===!0&&this.$toast.add({severity:"success",detail:"加入我的收藏",life:1e3}),this.isBookmarked===!1&&this.$toast.add({severity:"info",detail:"移除我的收藏",life:1e3})}).catch(c=>{const o=c.response.statusText;this.$toast.add({severity:"error",detail:o,life:1e3,contentStyleClass:"custom-toast-danger"})})}},watch:{activity(a){this.getActivityBookmark(a.id)}}},at={key:0,class:"pi pi-star text-lg"},ot={key:1,class:"pi pi-star-fill text-lg text-yellow-300"};function nt(a,i,s,c,o,e){return n(),r("button",{type:"button",onClick:i[0]||(i[0]=(...u)=>e.handleBookmark&&e.handleBookmark(...u))},[o.isBookmarked?(n(),r("i",ot)):(n(),r("i",at))])}const rt=x(it,[["render",nt]]),{VITE_URL:$}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},ct={props:{userId:{type:String},activity:{type:Object},orders:{type:Array}},components:{BookMark:rt},computed:{hadJoined(){return this.orders.find(a=>a.userId===parseInt(this.userId,10))!==void 0},isHost(){return this.activity.userId===this.userId}},methods:{userConfirmJoin(){const a={userId:parseInt(this.userId,10),activityId:this.activity.id,isCancelled:!1},i=`${$}/orders`;this.$confirm.require({message:`${this.activity.title}`,header:"確認參加",accept:()=>{this.$http.post(i,a).then(()=>{this.$toast.add({severity:"success",detail:"報名成功",life:1e3}),this.$emit("getActivitiesOrders",this.$route.params.id)}).catch(s=>{this.$toast.add({severity:"error",detail:`${s}'報名失敗'`,life:1e3,contentStyleClass:"custom-toast-danger"})})}})},userCancelJoin(){const a=this.orders.find(o=>o.userId===parseInt(this.userId,10)),{id:i}=a,s={isCancelled:!0},c=`${$}/orders/${i}`;this.$confirm.require({message:`${this.activity.title}`,header:"確認取消",accept:()=>{this.$http.patch(c,s).then(()=>{this.$toast.add({severity:"success",detail:"成功取消此揪團",life:1e3}),this.$emit("getActivitiesOrders",this.$route.params.id)}).catch(o=>{this.$toast.add({severity:"error",detail:`${o}'取消報名失敗'`,life:1e3,contentStyleClass:"custom-toast-danger"})})}})},hostCancelActivity(){const{id:a}=this.$route.params,i={isCancelled:!0},s=`${$}/activities/${a}`;this.$confirm.require({message:`${this.activity.title}`,header:"確認關閉此揪團",accept:()=>{this.$http.patch(s,i).then(()=>{this.$toast.add({severity:"success",detail:"已關閉此揪團",life:1e3}),this.$emit("getActivitiesOrders",this.$route.params.id)}).catch(c=>{this.$toast.add({severity:"error",detail:`${c}'關閉失敗'`,life:1e3,contentStyleClass:"custom-toast-danger"})})}})},changeToZhTW(){this.$primevue.config.locale.accept="確認",this.$primevue.config.locale.reject="取消"}},mounted(){this.changeToZhTW()}},lt={class:"flex flex-col items-center md:flex-row md:justify-between"},dt={class:"mb-2 md:mb-0"},mt={class:"mb-2 flex items-center md:mb-0"},ut=t("span",{class:"material-symbols-outlined mr-1 text-primary-01"}," calendar_month ",-1),ht=t("span",{class:"material-icons ml-2 mr-1 text-primary-01"}," schedule ",-1),_t={class:"text-lg font-semibold sm:text-xl"},pt={class:"flex items-center gap-6"},yt=t("button",{type:"button",class:"btn btn-primary py-4 hover:bg-primary-01 hover:text-white",disabled:""}," 主辦者 ",-1),vt=t("button",{type:"button",class:"btn btn-primary py-4 hover:bg-primary-01 hover:text-white",disabled:""}," 已參加 ",-1);function ft(a,i,s,c,o,e){var h,_;const u=d("BookMark");return n(),r("div",lt,[t("div",dt,[t("p",mt,[ut,A(" "+m(s.activity.date)+" "+m(s.activity.dayOfWeekText)+" ",1),ht,A(" "+m((_=(h=s.activity)==null?void 0:h.startTime)==null?void 0:_.time),1)]),t("h2",_t,m(s.activity.title),1)]),t("div",pt,[t("p",null,m(s.activity.maxJoinNum-s.orders.length)+" 個空位 ",1),l(u,{ref:"bookmark",userId:s.userId,activity:s.activity},null,8,["userId","activity"]),e.isHost?(n(),r(f,{key:0},[yt,t("button",{type:"button",onClick:i[0]||(i[0]=(...p)=>e.hostCancelActivity&&e.hostCancelActivity(...p)),class:"btn border border-primary-01 py-4 hover:bg-primary-01 hover:text-white"}," 取消此揪團 ")],64)):e.hadJoined?(n(),r(f,{key:1},[vt,t("button",{type:"button",class:"btn border border-primary-01 py-4 hover:bg-primary-01 hover:text-white",onClick:i[1]||(i[1]=(...p)=>e.userCancelJoin&&e.userCancelJoin(...p)),label:"cancel"}," 取消報名 ")],64)):(n(),r("button",{key:2,type:"button",class:"btn btn-primary py-4",onClick:i[2]||(i[2]=(...p)=>e.userConfirmJoin&&e.userConfirmJoin(...p)),label:"confirm"}," 我要參加 "))])])}const bt=x(ct,[["render",ft]]),gt={props:{orders:{type:Array},activity:{type:Object}},components:{JoinAttendees:W},data(){return{textareaValue:""}}},xt={class:"flex flex-wrap gap-4"},kt={class:"flex flex-col justify-evenly gap-2 md:flex-row"},At=["src"],It=t("ul",{class:"mb-10 flex flex-col gap-8 md:mb-20"},[t("li",{class:"flex gap-4"},[t("div",null,[t("img",{class:"inline-block h-20 w-20 rounded-full ring-2 ring-white",src:S,alt:"avatar01"})]),t("div",{class:"w-full rounded-lg bg-white p-4"},[t("p",{class:"mb-2 text-sm"},"Annie"),t("p",{class:"mb-4"},"請問租借球拍的費用是多少呢?"),t("div",{class:"mb-2 flex text-sm"},[t("span",{class:"mr-2"},"B1"),t("span",{class:"mr-2"},"4 小時前"),t("a",{href:"#",class:"text-[#b7b7b7]"},"回覆")]),t("a",{href:"#",class:"text-sm text-[#b1b1b1]"},"— 查看其他 1 則留言")])]),t("li",{class:"flex gap-4"},[t("div",null,[t("img",{class:"inline-block h-20 w-20 rounded-full ring-2 ring-white",src:S,alt:"avatar01"})]),t("div",{class:"w-full rounded-lg bg-white p-4"},[t("p",{class:"mb-2 text-sm"},"Annie"),t("p",{class:"mb-4"},"請問租借球拍的費用是多少呢?"),t("div",{class:"mb-2 flex text-sm"},[t("span",{class:"mr-2"},"B1"),t("span",{class:"mr-2"},"4 小時前"),t("a",{href:"#",class:"text-[#b7b7b7]"},"回覆")]),t("a",{href:"#",class:"text-sm text-[#b1b1b1]"},"— 查看其他 1 則留言")])])],-1),wt=t("p",{class:"mb-4"},"留言",-1),Dt=t("div",{class:"flex justify-end gap-4"},[t("button",{type:"button",class:"btn bg-white transition-colors hover:bg-primary-02"}," 取消 "),t("button",{type:"button",class:"btn bg-primary-04 transition-colors hover:bg-primary-02"}," 確認 ")],-1);function $t(a,i,s,c,o,e){const u=d("JoinAttendees"),h=d("TabPanel"),_=d("PTextarea"),p=d("TabView");return n(),H(p,null,{default:g(()=>[l(h,{header:"參與者"},{default:g(()=>[t("ul",xt,[(n(!0),r(f,null,C(s.orders,y=>(n(),r("li",{key:y.userId},[l(u,{user:y},null,8,["user"])]))),128))])]),_:1}),l(h,{header:"更多照片"},{default:g(()=>[t("div",kt,[(n(!0),r(f,null,C(s.activity.imgs,(y,b)=>(n(),r("div",{class:"w-full",key:y+b},[t("img",{src:y,alt:"JoinDetailImg",class:"h-full"},null,8,At)]))),128))])]),_:1}),l(h,{header:"留言"},{default:g(()=>[It,t("div",null,[wt,t("form",null,[l(_,{modelValue:o.textareaValue,"onUpdate:modelValue":i[0]||(i[0]=y=>o.textareaValue=y),rows:"5",class:"mb-2 w-full",placeholder:"留下您的想法"},null,8,["modelValue"]),Dt])])]),_:1})]),_:1})}const Tt=x(gt,[["render",$t]]),Ct={props:{activity:{type:Object}}},Jt={class:"flex h-screen flex-col items-center justify-center bg-primary-03"},Et=t("h1",{class:"mb-10 text-4xl"},"Oops...此揪團已取消",-1),Vt={class:"mb-4 text-xl font-bold md:text-3xl"},Bt={class:"mb-10 flex items-center gap-4"},Pt=t("p",null,"主辦者",-1);function Lt(a,i,s,c,o,e){var p,y,b,k;const u=d("PAvatar"),h=d("PButton"),_=d("router-link");return n(),r("div",Jt,[Et,t("h2",Vt,m(s.activity.title),1),t("div",Bt,[l(u,{image:(y=(p=s.activity)==null?void 0:p.user)==null?void 0:y.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[Pt,t("p",null,m((k=(b=s.activity)==null?void 0:b.user)==null?void 0:k.name),1)])]),l(_,{to:"/"},{default:g(()=>[l(h,{type:"button",label:"回到首頁",icon:"pi pi-home",iconPos:"right"})]),_:1})])}const Ot=x(Ct,[["render",Lt]]);const{VITE_URL:R}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},St={name:"JoinDetailView",components:{FrontHeader:X,JoinDetailMore:st,JoinDetailAside:Z,JoinDetailBottom:bt,JoinDetailTabView:Tt,JoinDetailCancel:Ot},data(){return{userId:null,activity:[],orders:[],imgLoading:!0}},computed:{newDateActivity(){if(!this.activity.date)return{};const a=this.activity.date.split("-"),i=`${a[1]}/${a[2]}`,s=new Date(this.activity.date).getDay(),c=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][s];return{...this.activity,date:i,dayOfWeekText:c}}},methods:{...T(j,["getUserId"]),getActivityDetail(a){const i=`${R}/activities/${a}?_expand=user&_expand=group`;this.$http.get(i).then(s=>{this.activity=s.data}).catch(s=>{const c=s.response.statusText;this.$toast.add({severity:"error",detail:`${c} 找不到活動資訊`,life:1e3,contentStyleClass:"custom-toast-danger"})})},getActivityOrders(a){const i=`${R}/orders?isCancelled=false&activityId=${a}&_expand=user`;this.$http.get(i).then(s=>{this.orders=s.data}).catch(s=>{const c=s.response.statusText;this.$toast.add({severity:"error",detail:`${c} 找不到參與者資訊`,life:1e3,contentStyleClass:"custom-toast-danger"})})},onImageLoad(){this.imgLoading=!1}},watch:{$route(a){a.params.id&&(this.getActivityDetail(a.params.id),this.getActivityOrders(a.params.id))}},mounted(){this.getActivityDetail(this.$route.params.id),this.getActivityOrders(this.$route.params.id),this.userId=this.getUserId()}},v=a=>(K("data-v-5314a5ae"),a=a(),N(),a),Mt={key:0,class:"pt-[120px] pb-5 md:pt-[92px]"},Rt={key:0,class:"container"},jt=v(()=>t("div",{class:"skeleton mb-4 h-12 w-1/3 rounded-lg"},null,-1)),Ut=v(()=>t("div",{class:"flex items-center gap-4"},[t("div",{class:"skeleton h-16 w-16 rounded-full"}),t("div",{class:"skeleton h-12 w-10 rounded-lg"})],-1)),zt=[jt,Ut],Ft={key:1,class:"container"},Yt={class:"mb-4 text-xl font-bold md:text-3xl"},Ht={class:"flex items-center gap-4"},Kt=v(()=>t("p",null,"主辦者",-1)),Nt={key:1,class:"bg-primary-03 py-10 md:py-20"},Xt={class:"container"},Gt={class:"grid h-full grid-cols-12 border-b border-[#3d3d3d] pb-10 md:pb-20"},Wt={class:"col-span-12 md:col-span-8"},Zt={key:0,class:"skeleton flex h-full w-full items-center justify-center rounded-l-[10px]"},qt=v(()=>t("i",{class:"pi pi-image text-xl text-gray-500"},null,-1)),Qt=[qt],te=["src"],ee={class:"mb-4 flex items-center justify-between border-b md:mb-0 md:hidden md:border-0"},se=v(()=>t("h3",{class:"whitespace-nowrap text-lg font-medium md:mb-8 md:text-xl"}," 揪團詳情 ",-1)),ie={class:"p-4"},ae={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},oe=v(()=>t("span",{class:"material-icons mr-1 text-primary-01"}," schedule ",-1)),ne={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},re=v(()=>t("span",{class:"material-icons text-primary-01"}," room ",-1)),ce={class:"pl-8 text-sm text-[#b7b7b7]"},le={class:"mb-10 md:mb-20"},de={class:"mb-10 flex justify-evenly border-y border-[#3d3d3d] py-10 md:mb-20"},me={class:"text-center"},ue=v(()=>t("span",{class:"material-symbols-outlined text-4xl"}," credit_card ",-1)),he={class:"text-center"},_e=v(()=>t("span",{class:"material-symbols-outlined text-4xl"}," monetization_on ",-1)),pe={class:"text-center"},ye=v(()=>t("span",{class:"material-symbols-outlined text-4xl"}," group ",-1)),ve={class:"pt-10"},fe={key:2},be={key:3,class:"sticky bottom-0 z-30 bg-white py-5"},ge={class:"container"};function xe(a,i,s,c,o,e){var J,E,V,B,P,L,O;const u=d("PToast"),h=d("front-header"),_=d("PAvatar"),p=d("QuillEditor"),y=d("JoinDetailTabView"),b=d("JoinDetailAside"),k=d("JoinDetailMore"),U=d("JoinDetailCancel"),z=d("JoinDetailBottom"),F=d("ConfirmDialog");return n(),r(f,null,[l(u),l(h),e.newDateActivity.isCancelled?w("",!0):(n(),r("section",Mt,[o.imgLoading?(n(),r("div",Rt,zt)):(n(),r("div",Ft,[t("h2",Yt,m(e.newDateActivity.title),1),t("div",Ht,[l(_,{image:(E=(J=e.newDateActivity)==null?void 0:J.user)==null?void 0:E.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[Kt,t("p",null,m((B=(V=e.newDateActivity)==null?void 0:V.user)==null?void 0:B.name),1)])])]))])),e.newDateActivity.isCancelled?(n(),r("main",fe,[l(U,{activity:e.newDateActivity},null,8,["activity"])])):(n(),r("main",Nt,[t("div",Xt,[t("div",Gt,[t("div",Wt,[o.imgLoading?(n(),r("div",Zt,Qt)):w("",!0),t("img",{onLoad:i[0]||(i[0]=(...I)=>e.onImageLoad&&e.onImageLoad(...I)),src:e.newDateActivity.mainImg,alt:"JoinDetailImage",class:"rounded md:mb-10"},null,40,te),t("section",ee,[se,t("div",ie,[t("p",ae,[oe,A(m((P=e.newDateActivity)==null?void 0:P.date)+" "+m((O=(L=e.newDateActivity)==null?void 0:L.startTime)==null?void 0:O.time),1)]),t("p",ne,[re,A(m(e.newDateActivity.city)+m(e.newDateActivity.district),1)]),t("span",ce,m(e.newDateActivity.address),1)])]),t("article",le,[l(p,{content:e.newDateActivity.content,"onUpdate:content":i[1]||(i[1]=I=>e.newDateActivity.content=I),contentType:"html",readOnly:"",theme:"bubble"},null,8,["content"])]),t("section",de,[t("div",me,[ue,t("p",null,m(e.newDateActivity.paymentMethod),1)]),t("div",he,[_e,t("p",null,"$ "+m(e.newDateActivity.costPerPerson),1)]),t("div",pe,[ye,t("p",null,m(e.newDateActivity.maxJoinNum)+" 人",1)])]),l(y,{orders:o.orders,activity:e.newDateActivity},null,8,["orders","activity"])]),l(b,{activity:e.newDateActivity},null,8,["activity"])]),t("section",ve,[l(k)])])])),e.newDateActivity.isCancelled?w("",!0):(n(),r("section",be,[t("div",ge,[l(z,{activity:e.newDateActivity,userId:o.userId,orders:o.orders,onGetActivitiesOrders:e.getActivityOrders},null,8,["activity","userId","orders","onGetActivitiesOrders"])])])),l(F)],64)}const Je=x(St,[["render",xe],["__scopeId","data-v-5314a5ae"]]);export{Je as default};
