import{s as Y,t as E,_ as k,u as j,r as u,o as n,a as r,b as t,F as x,B as A,d,w as b,e as $,C as m,H as G,x as I,v as O,D as K,E as X}from"./index-121a7c0d.js";import{F as N}from"./FrontHeader-494416e3.js";import{j as P}from"./activitiesStore-5010f3f3.js";import{J as Z}from"./JoinCardRow-989e5aeb.js";import{J as W,a as q}from"./JoinAttendees-ff47fa46.js";import"./searchStore-372e266e.js";import"./LeafletMap-d358d86e.js";import"./leaflet-src-dba6b316.js";const Q={components:{JoinCardRow:Z},data(){return{userId:null}},computed:{...Y(P,["availableActivities"]),slicedActivities(){return[...this.availableActivities].filter(e=>(e==null?void 0:e.isCancelled)===!1).filter(e=>e!=null&&e.id?e.id!==parseInt(this.$route.params.id,10):[]).sort(()=>Math.random()-.5).slice(0,2)}},methods:{...E(P,["getActivities","getOrders"]),...E(j,["getUserId"])},mounted(){this.getActivities(),this.getOrders(),this.userId=this.getUserId()}},tt=t("h3",{class:"mb-8 text-xl font-medium"},"更多揪團活動",-1),et={class:"grid gap-6 md:grid-cols-2"};function st(a,i,s,l,o,e){const _=u("JoinCardRow"),p=u("RouterLink");return n(),r(x,null,[tt,t("ul",et,[(n(!0),r(x,null,A(e.slicedActivities,y=>(n(),r("li",{class:"col-span-1",key:y.id},[d(p,{class:"h-full",to:`/JoinDetail/id=${y.id}`},{default:b(()=>[d(_,{activity:y,userId:o.userId},null,8,["activity","userId"])]),_:2},1032,["to"])]))),128))])],64)}const it=k(Q,[["render",st]]),{VITE_URL:D}={VITE_URL:"https://joinsport-server-render.onrender.com",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},at={props:{userId:{type:String},activity:{type:Object}},data(){return{bookmarkId:null,isBookmarked:!1}},methods:{getActivityBookmark(a){const i=`${D}/users/${this.userId}/bookmarks?activityId=${a}`;this.$http.get(i).then(s=>{s.data[0]&&(s.data[0].isCancelled===!1&&(this.isBookmarked=!0),this.bookmarkId=s.data[0].id)}).catch(s=>{const l=s.response.statusText;this.$toast.add({severity:"error",detail:`${l}'找不到收藏資料'`,life:3e3,contentStyleClass:"custom-toast-danger"})})},handleBookmark(){if(!this.bookmarkId&&this.isBookmarked===!1){const l=`${D}/bookmarks/`,o={userId:parseInt(this.userId,10),activityId:this.activity.id,isCancelled:!1};this.$http.post(l,o).then(e=>{this.isBookmarked=!0,this.bookmarkId=e.data.id}).catch(e=>{const _=e.response.statusText;this.$toast.add({severity:"error",detail:_,life:3e3,contentStyleClass:"custom-toast-danger"})});return}const a=this.bookmarkId,i=`${D}/bookmarks/${a}`,s={isCancelled:!1};this.isBookmarked===!0&&(s.isCancelled=!0),this.$http.patch(i,s).then(()=>{this.isBookmarked=!this.isBookmarked,this.isBookmarked===!0&&this.$toast.add({severity:"success",detail:"加入我的收藏",life:3e3}),this.isBookmarked===!1&&this.$toast.add({severity:"info",detail:"移除我的收藏",life:3e3})}).catch(l=>{const o=l.response.statusText;this.$toast.add({severity:"error",detail:o,life:3e3,contentStyleClass:"custom-toast-danger"})})}},watch:{activity(a){this.getActivityBookmark(a.id)}}},ot={key:0,class:"pi pi-star text-lg"},nt={key:1,class:"pi pi-star-fill text-lg text-yellow-300"};function rt(a,i,s,l,o,e){return n(),r("button",{type:"button",onClick:i[0]||(i[0]=(..._)=>e.handleBookmark&&e.handleBookmark(..._))},[o.isBookmarked?(n(),r("i",nt)):(n(),r("i",ot))])}const ct=k(at,[["render",rt]]),{VITE_URL:V}={VITE_URL:"https://joinsport-server-render.onrender.com",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},lt={props:{userId:{type:String},activity:{type:Object},orders:{type:Array}},components:{BookMark:ct},computed:{hadJoined(){return this.orders.find(a=>a.userId===parseInt(this.userId,10))!==void 0},isHost(){return this.activity.userId===this.userId}},methods:{userConfirmJoin(){const a={userId:parseInt(this.userId,10),activityId:this.activity.id,isCancelled:!1},i=`${V}/orders`;this.$confirm.require({message:`${this.activity.title}`,header:"確認參加",accept:()=>{this.$http.post(i,a).then(()=>{this.$toast.add({severity:"success",detail:"報名成功",life:3e3}),this.$emit("getActivitiesOrders",this.$route.params.id)}).catch(s=>{this.$toast.add({severity:"error",detail:`${s}'報名失敗'`,life:3e3,contentStyleClass:"custom-toast-danger"})})}})},userCancelJoin(){const a=this.orders.find(o=>o.userId===parseInt(this.userId,10)),{id:i}=a,s={isCancelled:!0},l=`${V}/orders/${i}`;this.$confirm.require({message:`${this.activity.title}`,header:"確認取消",accept:()=>{this.$http.patch(l,s).then(()=>{this.$toast.add({severity:"success",detail:"成功取消此揪團",life:3e3}),this.$emit("getActivitiesOrders",this.$route.params.id)}).catch(o=>{this.$toast.add({severity:"error",detail:`${o}'取消報名失敗'`,life:3e3,contentStyleClass:"custom-toast-danger"})})}})},hostCancelActivity(){const{id:a}=this.$route.params,i={isCancelled:!0},s=`${V}/activities/${a}`;this.$confirm.require({message:`${this.activity.title}`,header:"確認關閉此揪團",accept:()=>{this.$http.patch(s,i).then(()=>{this.$toast.add({severity:"success",detail:"已關閉此揪團",life:3e3}),this.$router.push("/")}).catch(l=>{this.$toast.add({severity:"error",detail:`${l}'關閉失敗'`,life:3e3,contentStyleClass:"custom-toast-danger"})})}})},changeToZhTW(){this.$primevue.config.locale.accept="確認",this.$primevue.config.locale.reject="取消"}},mounted(){this.changeToZhTW()}},dt={class:"flex flex-col items-center md:flex-row md:justify-between"},mt={class:"mb-2 md:mb-0"},ut={class:"mb-2 flex items-center md:mb-0"},ht=t("span",{class:"material-symbols-outlined mr-1 text-primary-01"}," calendar_month ",-1),_t=t("span",{class:"material-icons ml-2 mr-1 text-primary-01"}," schedule ",-1),pt={class:"text-lg font-semibold sm:text-xl"},yt={class:"flex flex-col items-center gap-2 md:flex-row md:gap-6"},vt={class:"flex items-center gap-2 md:flex-col"},ft={key:0,class:"flex gap-6"},gt=t("button",{type:"button",class:"btn btn-primary w-full py-2 hover:bg-primary-01 hover:text-white md:w-auto md:py-4",disabled:""}," 主辦者 ",-1),xt=t("button",{type:"button",class:"btn btn-primary w-full py-2 hover:bg-primary-01 hover:text-white md:w-auto md:py-4",disabled:""}," 已參加 ",-1),bt={key:2,type:"button",class:"btn btn-primary w-full py-2 disabled:opacity-70 md:w-auto md:py-4",label:"cancel",disabled:""};function It(a,i,s,l,o,e){var p,y;const _=u("BookMark");return n(),r("div",dt,[t("div",mt,[t("p",ut,[ht,$(" "+m(s.activity.date)+" "+m(s.activity.dayOfWeekText)+" ",1),_t,$(" "+m((y=(p=s.activity)==null?void 0:p.startTime)==null?void 0:y.time),1)]),t("h2",pt,m(s.activity.title),1)]),t("div",yt,[t("div",vt,[t("p",null,m(s.activity.maxJoinNum-s.orders.length)+" 個空位 ",1),d(_,{ref:"bookmark",userId:s.userId,activity:s.activity},null,8,["userId","activity"])]),e.isHost?(n(),r("div",ft,[gt,t("button",{type:"button",onClick:i[0]||(i[0]=(...v)=>e.hostCancelActivity&&e.hostCancelActivity(...v)),class:"btn w-full whitespace-nowrap border border-primary-01 py-2 hover:bg-primary-01 hover:text-white md:w-auto md:py-4"}," 取消此揪團 ")])):e.hadJoined?(n(),r(x,{key:1},[xt,t("button",{type:"button",class:"btn w-full border border-primary-01 py-2 hover:bg-primary-01 hover:text-white md:w-auto md:py-4",onClick:i[1]||(i[1]=(...v)=>e.userCancelJoin&&e.userCancelJoin(...v)),label:"cancel"}," 取消報名 ")],64)):s.activity.maxJoinNum-s.orders.length===0?(n(),r("button",bt," 此揪團已滿 ")):(n(),r("button",{key:3,type:"button",class:"btn btn-primary w-full py-2 md:w-auto md:py-4",onClick:i[2]||(i[2]=(...v)=>e.userConfirmJoin&&e.userConfirmJoin(...v)),label:"confirm"}," 我要參加 "))])])}const kt=k(lt,[["render",It]]),{VITE_URL:w}={VITE_URL:"https://joinsport-server-render.onrender.com",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},wt={props:{userId:{type:String},orders:{type:Array},activity:{type:Object}},components:{JoinAttendees:W},data(){return{textareaValue:"",userMessages:[],hostReplyMessages:[],isOpened:!1,openedTextarea:"",userTimeDiff:""}},methods:{getMessages(a){const i=`${w}/messages?activityId=${a}&_expand=user`;this.$http.get(i).then(s=>{this.userMessages=s.data}).catch(s=>{this.$toast.add({severity:"error",detail:`${s} 找不到資料`,life:3e3,contentStyleClass:"custom-toast-danger"})})},getReplyMessage(a){const i=`${w}/messageReply?userId=${a}&_expand=user`;this.$http.get(i).then(s=>{this.hostReplyMessages=s.data}).catch(s=>{this.$toast.add({severity:"err",detail:`${s} 找不到資料`,life:3e3,contentStyleClass:"custom-toast-danger"})})},sendMessageHandler(a,i){const s=this.textareaValue,l=new Date().getTime();let o="",e={},_="",p="";i&&(o=`${w}/messageReply`,e={userId:this.userId,messageId:i,content:s,updateTime:l,isCancelled:!1},_="回覆成功",p="回覆失敗"),i||(o=`${w}/messages`,e={userId:this.userId,activityId:this.activity.id,content:s,updateTime:l,isCancelled:!1},_="留言成功",p="留言失敗"),this.$http.post(o,e).then(()=>{this.$emit("getActivity",this.$route.params.id),this.$toast.add({severity:"success",detail:_,life:3e3}),this.textareaValue=""}).catch(()=>{this.$toast.add({severity:"error",detail:p,life:3e3,contentStyleClass:"custom-toast-danger"})})},textareaHandler(a){this.isOpened=!this.isOpened,this.openedTextarea=a,this.textareaValue=""},isHost(){return this.activity.userId===this.userId}},watch:{activity(a){this.getMessages(a.id),this.getReplyMessage(a.userId)}}},At={class:"flex flex-wrap gap-4"},$t={class:"flex flex-col justify-evenly gap-2 md:flex-row"},Tt=["src"],Dt={class:"mb-2 flex flex-col gap-4 sm:mb-10 sm:gap-8 md:mb-20"},Vt={class:"mr-1 flex-shrink-0 xs:mr-4"},Et=["src"],Ct={class:"w-full"},Jt={class:"mb-6 w-3/4 rounded-lg bg-white p-4"},Bt={class:"mb-2 text-sm font-bold xs:text-base"},Mt={class:"mb-4 text-sm xs:text-base"},St={class:"flex text-sm"},Rt={class:"mr-2"},Lt={key:0,class:"text-[#b7b7b7]"},Ot=["onClick"],Pt={key:0,class:"ml-auto flex items-center gap-6 pl-2 xs:pl-10"},Ut=t("i",{class:"pi pi-reply rotate-180 scale-x-[-1] transform text-base sm:text-2xl"},null,-1),jt={class:"flex w-full items-center justify-between rounded-lg bg-white p-4"},Ht={class:"mb-2 text-sm xs:text-base"},zt={class:"text-sm xs:text-base"},Ft=["src"],Yt={key:1},Gt=["onSubmit"],Kt={class:"flex justify-end gap-4"},Xt=t("button",{type:"submit",class:"btn bg-primary-04 px-2 transition-colors hover:bg-primary-02"}," 確認 ",-1),Nt={key:0,class:"border-t pt-4"},Zt=t("p",{class:"mb-4"},"留言",-1),Wt={class:"flex justify-end gap-4"},qt=t("button",{type:"submit",class:"btn bg-primary-04 !px-2 transition-colors hover:bg-primary-02"}," 確認 ",-1);function Qt(a,i,s,l,o,e){const _=u("JoinAttendees"),p=u("TabPanel"),y=u("PTextarea"),v=u("TabView");return n(),G(v,null,{default:b(()=>[d(p,{header:"參與者"},{default:b(()=>[t("ul",At,[(n(!0),r(x,null,A(s.orders,c=>(n(),r("li",{key:c.userId},[d(_,{user:c},null,8,["user"])]))),128))])]),_:1}),d(p,{header:"更多照片"},{default:b(()=>[t("div",$t,[(n(!0),r(x,null,A(s.activity.imgs,(c,g)=>(n(),r("div",{class:"w-full",key:c+g},[t("img",{src:c,alt:"JoinDetailImg",class:"h-[200px] w-full sm:h-[400px] md:h-full"},null,8,Tt)]))),128))])]),_:1}),d(p,{header:"留言"},{default:b(()=>[t("ul",Dt,[(n(!0),r(x,null,A(o.userMessages,(c,g)=>(n(),r("li",{key:c.id,class:"flex"},[t("div",Vt,[t("img",{class:"h-10 w-10 rounded-full ring-2 ring-white sm:h-20 sm:w-20",src:c.user.img,alt:"avatar01"},null,8,Et)]),t("div",Ct,[t("div",Jt,[t("p",Bt,m(c.user.name),1),t("p",Mt,m(c.content),1),t("div",St,[t("span",Rt,"B"+m(g+1),1),e.isHost()&&o.hostReplyMessages.find(h=>parseInt(h.messageId,10)===c.id)?(n(),r("span",Lt,"已回覆")):e.isHost()?(n(),r("button",{key:1,onClick:h=>e.textareaHandler(c.id),type:"button",class:"hover:text-primary-01"}," 回覆 ",8,Ot)):I("",!0)])]),o.hostReplyMessages.find(h=>parseInt(h.messageId,10)===c.id)?(n(),r("div",Pt,[Ut,t("div",jt,[t("div",null,[t("p",Ht," 主辦者回覆 B"+m(g+1),1),t("p",zt,m(o.hostReplyMessages.filter(h=>parseInt(h.messageId,10)===c.id)[0].content),1)]),t("div",null,[t("img",{class:"inline-block h-10 w-10 rounded-full ring-2 ring-white sm:h-20 sm:w-20",src:o.hostReplyMessages.filter(h=>parseInt(h.messageId,10)===c.id)[0].user.img,alt:"avatar01"},null,8,Ft)])])])):(n(),r("div",Yt,[o.isOpened&&o.openedTextarea===c.id?(n(),r("form",{key:0,onSubmit:O(h=>e.sendMessageHandler(h,c.id),["prevent"])},[d(y,{modelValue:o.textareaValue,"onUpdate:modelValue":i[0]||(i[0]=h=>o.textareaValue=h),rows:"3",class:"mb-2 w-full",placeholder:"回覆"},null,8,["modelValue"]),t("div",Kt,[t("button",{onClick:i[1]||(i[1]=(...h)=>e.textareaHandler&&e.textareaHandler(...h)),type:"button",class:"btn bg-white px-2 transition-colors hover:bg-primary-02"}," 取消 "),Xt])],40,Gt)):I("",!0)]))])]))),128))]),e.isHost()?I("",!0):(n(),r("div",Nt,[Zt,t("form",{onSubmit:i[4]||(i[4]=O(c=>e.sendMessageHandler(c),["prevent"]))},[d(y,{modelValue:o.textareaValue,"onUpdate:modelValue":i[2]||(i[2]=c=>o.textareaValue=c),rows:"5",class:"mb-2 w-full",placeholder:"留下您的想法"},null,8,["modelValue"]),t("div",Wt,[t("button",{onClick:i[3]||(i[3]=(...c)=>e.textareaHandler&&e.textareaHandler(...c)),type:"button",class:"btn bg-white !px-2 transition-colors hover:bg-primary-02"}," 取消 "),qt])],32)]))]),_:1})]),_:1})}const te=k(wt,[["render",Qt]]),ee={props:{activity:{type:Object}}},se={class:"flex h-screen flex-col items-center justify-center bg-primary-03"},ie=t("h1",{class:"mb-10 text-4xl"},"Oops...此揪團已取消",-1),ae={class:"mb-4 text-xl font-bold md:text-3xl"},oe={class:"mb-10 flex items-center gap-4"},ne=t("p",null,"主辦者",-1);function re(a,i,s,l,o,e){var v,c,g,h;const _=u("PAvatar"),p=u("PButton"),y=u("router-link");return n(),r("div",se,[ie,t("h2",ae,m(s.activity.title),1),t("div",oe,[d(_,{image:(c=(v=s.activity)==null?void 0:v.user)==null?void 0:c.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[ne,t("p",null,m((h=(g=s.activity)==null?void 0:g.user)==null?void 0:h.name),1)])]),d(y,{to:"/"},{default:b(()=>[d(p,{type:"button",label:"回到首頁",icon:"pi pi-home",iconPos:"right"})]),_:1})])}const ce=k(ee,[["render",re]]);const{VITE_URL:U}={VITE_URL:"https://joinsport-server-render.onrender.com",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},le={name:"JoinDetailView",components:{FrontHeader:N,JoinDetailMore:it,JoinDetailAside:q,JoinDetailBottom:kt,JoinDetailTabView:te,JoinDetailCancel:ce},data(){return{userId:null,activity:[],orders:[],imgLoading:!0}},computed:{newDateActivity(){if(!this.activity.date)return{};const a=this.activity.date.split("-"),i=`${a[1]}/${a[2]}`,s=new Date(this.activity.date).getDay(),l=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][s];return{...this.activity,date:i,dayOfWeekText:l}}},methods:{...E(j,["getUserId"]),getActivityDetail(a){const i=`${U}/activities/${a}?_expand=user&_expand=group`;this.$http.get(i).then(s=>{this.activity=s.data}).catch(s=>{const l=s.response.statusText;this.$toast.add({severity:"error",detail:`${l} 找不到活動資訊`,life:3e3,contentStyleClass:"custom-toast-danger"})})},getActivityOrders(a){const i=`${U}/orders?isCancelled=false&activityId=${a}&_expand=user`;this.$http.get(i).then(s=>{this.orders=s.data}).catch(s=>{const l=s.response.statusText;this.$toast.add({severity:"error",detail:`${l} 找不到參與者資訊`,life:3e3,contentStyleClass:"custom-toast-danger"})})},onImageLoad(){this.imgLoading=!1}},watch:{$route(a){a.params.id&&(this.getActivityDetail(a.params.id),this.getActivityOrders(a.params.id))}},mounted(){this.getActivityDetail(this.$route.params.id),this.getActivityOrders(this.$route.params.id),this.userId=this.getUserId()}},f=a=>(K("data-v-a797b7fc"),a=a(),X(),a),de={key:0,class:"pt-[120px] pb-5 md:pt-[92px]"},me={key:0,class:"container"},ue=f(()=>t("div",{class:"skeleton mb-4 h-12 w-1/3 rounded-lg"},null,-1)),he=f(()=>t("div",{class:"flex items-center gap-4"},[t("div",{class:"skeleton h-16 w-16 rounded-full"}),t("div",{class:"skeleton h-12 w-10 rounded-lg"})],-1)),_e=[ue,he],pe={key:1,class:"container"},ye={class:"mb-4 text-xl font-bold md:text-3xl"},ve={class:"flex items-center gap-4"},fe=f(()=>t("p",null,"主辦者",-1)),ge={key:1,class:"bg-primary-03 py-10 md:py-20"},xe={class:"container"},be={class:"grid h-full grid-cols-12 border-b border-[#3d3d3d] pb-10 md:pb-20"},Ie={class:"col-span-12 md:col-span-8"},ke={key:0,class:"skeleton flex h-full w-full items-center justify-center rounded-l-[10px]"},we=f(()=>t("i",{class:"pi pi-image text-xl text-gray-500"},null,-1)),Ae=[we],$e=["src"],Te={class:"mb-4 flex items-center justify-between border-b md:mb-0 md:hidden md:border-0"},De=f(()=>t("h3",{class:"whitespace-nowrap text-lg font-medium md:mb-8 md:text-xl"}," 揪團詳情 ",-1)),Ve={class:"p-4"},Ee={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},Ce=f(()=>t("span",{class:"material-icons mr-1 text-primary-01"}," schedule ",-1)),Je={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},Be=f(()=>t("span",{class:"material-icons text-primary-01"}," room ",-1)),Me={class:"pl-8 text-sm text-[#b7b7b7]"},Se={class:"mb-10 md:mb-20"},Re={class:"mb-10 flex justify-evenly border-y border-[#3d3d3d] py-4 md:mb-20 md:py-10"},Le={class:"text-center"},Oe=f(()=>t("span",{class:"material-symbols-outlined text-xl md:text-4xl"}," credit_card ",-1)),Pe={class:"text-center"},Ue=f(()=>t("span",{class:"material-symbols-outlined text-xl md:text-4xl"}," monetization_on ",-1)),je={class:"text-center"},He=f(()=>t("span",{class:"material-symbols-outlined text-xl md:text-4xl"}," group ",-1)),ze={class:"pt-10"},Fe={key:2},Ye={key:3,class:"sticky bottom-0 z-30 bg-white py-5"},Ge={class:"container"};function Ke(a,i,s,l,o,e){var C,J,B,M,S,R,L;const _=u("PToast"),p=u("front-header"),y=u("PAvatar"),v=u("QuillEditor"),c=u("JoinDetailTabView"),g=u("JoinDetailAside"),h=u("JoinDetailMore"),H=u("JoinDetailCancel"),z=u("JoinDetailBottom"),F=u("ConfirmDialog");return n(),r(x,null,[d(_),d(p),e.newDateActivity.isCancelled?I("",!0):(n(),r("section",de,[o.imgLoading?(n(),r("div",me,_e)):(n(),r("div",pe,[t("h2",ye,m(e.newDateActivity.title),1),t("div",ve,[d(y,{image:(J=(C=e.newDateActivity)==null?void 0:C.user)==null?void 0:J.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[fe,t("p",null,m((M=(B=e.newDateActivity)==null?void 0:B.user)==null?void 0:M.name),1)])])]))])),e.newDateActivity.isCancelled?(n(),r("main",Fe,[d(H,{activity:e.newDateActivity},null,8,["activity"])])):(n(),r("main",ge,[t("div",xe,[t("div",be,[t("div",Ie,[o.imgLoading?(n(),r("div",ke,Ae)):I("",!0),t("img",{onLoad:i[0]||(i[0]=(...T)=>e.onImageLoad&&e.onImageLoad(...T)),src:e.newDateActivity.mainImg,alt:"JoinDetailImage",class:"rounded md:mb-10"},null,40,$e),t("section",Te,[De,t("div",Ve,[t("p",Ee,[Ce,$(m((S=e.newDateActivity)==null?void 0:S.date)+" "+m((L=(R=e.newDateActivity)==null?void 0:R.startTime)==null?void 0:L.time),1)]),t("p",Je,[Be,$(m(e.newDateActivity.city)+m(e.newDateActivity.district),1)]),t("span",Me,m(e.newDateActivity.address),1)])]),t("article",Se,[d(v,{content:e.newDateActivity.content,"onUpdate:content":i[1]||(i[1]=T=>e.newDateActivity.content=T),contentType:"html",readOnly:"",theme:"bubble"},null,8,["content"])]),t("section",Re,[t("div",Le,[Oe,t("p",null,m(e.newDateActivity.paymentMethod),1)]),t("div",Pe,[Ue,t("p",null,"$ "+m(e.newDateActivity.costPerPerson),1)]),t("div",je,[He,t("p",null,m(e.newDateActivity.maxJoinNum)+" 人",1)])]),d(c,{userId:o.userId,orders:o.orders,activity:e.newDateActivity,onGetActivity:e.getActivityDetail},null,8,["userId","orders","activity","onGetActivity"])]),d(g,{activity:e.newDateActivity},null,8,["activity"])]),t("section",ze,[d(h)])])])),e.newDateActivity.isCancelled?I("",!0):(n(),r("section",Ye,[t("div",Ge,[d(z,{activity:e.newDateActivity,userId:o.userId,orders:o.orders,onGetActivitiesOrders:e.getActivityOrders},null,8,["activity","userId","orders","onGetActivitiesOrders"])])])),d(F)],64)}const ss=k(le,[["render",Ke],["__scopeId","data-v-a797b7fc"]]);export{ss as default};