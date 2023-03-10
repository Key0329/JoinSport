import{_ as A,s as P,a as E,b as t,B as o,d as c,e as v,w as m,F as V,t as j,r,o as L,z as C,A as M}from"./index-9dedc0dc.js";import{S as U}from"./StepPagination-7f43b480.js";import{a as N,J as O}from"./JoinDetailAside-d4806e6b.js";import"./createSteps-7ee460b1.js";import"./LeafletMap-0ab585ea.js";import"./joinActivitiesStore-e0de396f.js";import"./leaflet-src-01bd1843.js";import"./group03-b38e3255.js";const k="/JoinSport/assets/activity15-e1a908b3.jpg",B="/JoinSport/assets/activity1501-cc44200c.jpg",K="/JoinSport/assets/activity1502-fecf73f6.jpg",R="/JoinSport/assets/activity1503-c2380af1.jpg";const{VITE_URL:z,VITE_MAP_KEY:Y,VITE_MAP_URL:W}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},Q={components:{StepPagination:U,JoinDetailAside:N,JoinAttendees:O},data(){return{user:{},userId:null,tempForm:{},tempTags:[],editorContent:"",location:[]}},computed:{tempActivity(){var a,i,l,e;const s={...this.tempForm,userId:this.userId,city:(a=this.tempForm.city)==null?void 0:a.name,district:(i=this.tempForm.district)==null?void 0:i.name,tags:this.tempTags,mainImg:"https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity15.jpg?raw=true",imgs:["https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity1501.jpg?raw=true","https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity1502.jpg?raw=true","https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity1503.jpg?raw=true"],content:this.editorContent,maxJoinNum:(l=this.tempForm.maxJoinNum)==null?void 0:l.number,cost:this.tempForm.costPerPerson,paymentMethod:(e=this.tempForm.paymentMethod)==null?void 0:e.method,groupId:"",updateDate:new Date().getTime(),isCancelled:!1,location:this.location};return console.log(s),s}},methods:{...P(j,["getUserId"]),getLocalData(){if(localStorage.getItem("createTempFormData")){const s=JSON.parse(localStorage.getItem("createTempFormData")),a=s.date.split("-"),i=`${a[1]}/${a[2]}`,l=new Date(s.date).getDay(),e=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][l];this.tempForm={...s,newDate:i,dayOfWeekText:e}}if(localStorage.getItem("editorValue")){const s=localStorage.getItem("editorValue");this.editorContent=s}if(localStorage.getItem("selectedTags")){const s=JSON.parse(localStorage.getItem("selectedTags"));this.tempTags=s}console.log(this.tempForm)},getUser(){const s=this.userId,a=`${z}/users/${s}`;this.$http.get(a).then(i=>{this.user=i.data}).catch(i=>{console.log(i)})},getMapLatLng(s){const a=`${W}?address=${s}&key=${Y}`;this.$http.get(a).then(i=>{const l=i.data.results[0].geometry.location;this.location=[l.lat,l.lng],console.log(this.location)}).then(i=>{console.log(i)})}},mounted(){this.getLocalData(),this.userId=this.getUserId(),this.getUser(),this.getMapLatLng(this.tempForm.address)}},n=s=>(C("data-v-c4fa9345"),s=s(),M(),s),X={class:"px-4 pt-20 pb-5"},G={class:"container"},H={class:"flex items-center"},Z={class:"mb-4 mr-4 text-xl font-bold md:text-3xl"},q={class:"items-end"},$={class:"flex items-center gap-4"},tt=n(()=>t("p",null,"主辦者",-1)),et={class:"bg-primary-03 px-4 py-10 md:py-20"},st={class:"container"},ot={class:"grid h-full grid-cols-12 border-b border-[#3d3d3d] pb-10 md:pb-20"},it={class:"col-span-12 md:col-span-8"},nt=n(()=>t("img",{src:k,alt:"JoinDetailImage",class:"rounded md:mb-10"},null,-1)),at={class:"mb-4 flex items-center justify-between border-b md:mb-0 md:hidden md:border-0"},ct=n(()=>t("h3",{class:"whitespace-nowrap text-lg font-medium md:mb-8 md:text-xl"}," 揪團詳情 ",-1)),lt={class:"p-4"},rt={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},mt=n(()=>t("span",{class:"material-icons mr-1 text-primary-01"}," schedule ",-1)),dt={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},pt=n(()=>t("span",{class:"material-icons mr-1 text-primary-01"}," room ",-1)),_t={class:"mb-10 md:mb-20"},ht={class:"mb-10 flex justify-evenly border-y border-[#3d3d3d] py-10 md:mb-20"},ut={class:"text-center"},gt=n(()=>t("span",{class:"material-symbols-outlined text-4xl"}," credit_card ",-1)),bt={class:"text-center"},yt=n(()=>t("span",{class:"material-symbols-outlined text-4xl"}," monetization_on ",-1)),xt={class:"text-center"},ft=n(()=>t("span",{class:"material-symbols-outlined text-4xl"}," group ",-1)),vt={class:"flex flex-wrap gap-4"},wt=n(()=>t("div",{class:"flex flex-col justify-evenly gap-2 md:flex-row"},[t("div",{class:"w-full"},[t("img",{src:B,alt:"JoinDetailImg",class:"h-full"})]),t("div",{class:"w-full"},[t("img",{src:K,alt:"JoinDetailImg",class:"h-full"})]),t("div",{class:"w-full"},[t("img",{src:R,alt:"JoinDetailImg",class:"h-full"})])],-1)),Tt=n(()=>t("p",{class:"mb-4"},"留言",-1)),It=n(()=>t("div",{class:"flex justify-end gap-4"},[t("button",{type:"button",class:"btn transition-color bg-white disabled:opacity-50",disabled:""}," 取消 "),t("button",{type:"button",class:"btn transition-color bg-primary-04 disabled:opacity-50",disabled:""}," 確認 ")],-1)),Ft={class:"bg-white py-5"},Jt={class:"container"},St={class:"flex flex-col items-center md:flex-row md:justify-between"},Dt={class:"mb-2 md:mb-0"},At={class:"mb-2 md:mb-0"},Pt={class:"text-lg font-semibold sm:text-xl"},Et={class:"flex items-center gap-6"},Vt=n(()=>t("p",null,[t("i",{class:"pi pi-star text-lg"})],-1)),jt=n(()=>t("button",{type:"button",class:"btn btn-primary py-4 hover:bg-primary-01 hover:text-white disabled:opacity-70",disabled:""}," 我要參加 ",-1));function Lt(s,a,i,l,e,_){var h,u,g,b,y,x,f;const w=r("PAvatar"),T=r("QuillEditor"),d=r("JoinAttendees"),p=r("TabPanel"),I=r("PTextarea"),F=r("TabView"),J=r("JoinDetailAside"),S=r("StepPagination");return L(),E(V,null,[t("section",X,[t("div",G,[t("div",H,[t("h2",Z,o(e.tempForm.title),1),t("p",q,o((h=e.tempForm.city)==null?void 0:h.name)+" "+o((u=e.tempForm.district)==null?void 0:u.name),1)]),t("div",$,[c(w,{image:e.user.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[tt,t("p",null,o(e.user.name),1)])])])]),t("main",et,[t("div",st,[t("div",ot,[t("div",it,[nt,t("section",at,[ct,t("div",lt,[t("p",rt,[mt,v(o(e.tempForm.newDate)+" "+o((g=e.tempForm.startTime)==null?void 0:g.time),1)]),t("p",dt,[pt,v(o(e.tempForm.address),1)])])]),t("article",_t,[c(T,{content:e.editorContent,"onUpdate:content":a[0]||(a[0]=D=>e.editorContent=D),contentType:"html",readOnly:"",theme:"bubble"},null,8,["content"])]),t("section",ht,[t("div",ut,[gt,t("p",null,o((b=e.tempForm.paymentMethod)==null?void 0:b.method),1)]),t("div",bt,[yt,t("p",null,"$ "+o(e.tempForm.costPerPerson),1)]),t("div",xt,[ft,t("p",null,o((y=e.tempForm.maxJoinNum)==null?void 0:y.number)+" 人",1)])]),c(F,null,{default:m(()=>[c(p,{header:"參與者"},{default:m(()=>[t("ul",vt,[t("li",null,[c(d)]),t("li",null,[c(d)]),t("li",null,[c(d)])])]),_:1}),c(p,{header:"更多照片"},{default:m(()=>[wt]),_:1}),c(p,{header:"留言"},{default:m(()=>[t("div",null,[Tt,t("form",null,[c(I,{rows:"5",class:"mb-2 w-full",placeholder:"留下您的想法",disabled:""}),It])])]),_:1})]),_:1})]),c(J,{activity:_.tempActivity},null,8,["activity"])])])]),t("section",Ft,[t("div",Jt,[t("div",St,[t("div",Dt,[t("p",At,o(e.tempForm.newDate)+" "+o(e.tempForm.dayOfWeekText)+" "+o((x=e.tempForm.startTime)==null?void 0:x.time),1),t("h2",Pt,o(e.tempForm.title),1)]),t("div",Et,[t("p",null,o((f=e.tempForm.maxJoinNum)==null?void 0:f.number)+" 個空位",1),Vt,jt])])])]),c(S,{activity:_.tempActivity,class:"mt-20"},null,8,["activity"])],64)}const Rt=A(Q,[["render",Lt],["__scopeId","data-v-c4fa9345"]]);export{Rt as default};
