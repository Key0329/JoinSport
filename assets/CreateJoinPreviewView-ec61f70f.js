import{_ as V,t as E,a as j,d as i,b as t,B as o,e as w,w as d,F as C,u as U,r as l,o as k,C as L,D as M}from"./index-69089313.js";import{S as N}from"./StepPagination-abe1a9bf.js";import{a as O,J as R}from"./JoinDetailAside-6073f85d.js";import"./createSteps-e62733b5.js";import"./LeafletMap-7be4c03b.js";import"./joinActivitiesStore-069dd3a6.js";import"./leaflet-src-e5bc363d.js";import"./group03-b38e3255.js";const B="/JoinSport/assets/activity15-e1a908b3.jpg",K="/JoinSport/assets/activity1501-cc44200c.jpg",z="/JoinSport/assets/activity1502-fecf73f6.jpg",Y="/JoinSport/assets/activity1503-c2380af1.jpg";const{VITE_URL:S,VITE_MAP_KEY:H,VITE_MAP_URL:W}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},$={name:"CreateJoinPreviewView",components:{StepPagination:N,JoinDetailAside:O,JoinAttendees:R},data(){return{user:{},userId:null,tempForm:{},tempTags:[],editorContent:"",location:[]}},computed:{tempActivity(){var n,c,r,e;return{...this.tempForm,userId:this.userId,city:(n=this.tempForm.city)==null?void 0:n.name,district:(c=this.tempForm.district)==null?void 0:c.name,tags:this.tempTags,mainImg:"https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity15.jpg?raw=true",imgs:["https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity1501.jpg?raw=true","https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity1502.jpg?raw=true","https://github.com/Key0329/JoinSport/blob/main/src/assets/images/activities/activity1503.jpg?raw=true"],content:this.editorContent,maxJoinNum:(r=this.tempForm.maxJoinNum)==null?void 0:r.number,cost:this.tempForm.costPerPerson,paymentMethod:(e=this.tempForm.paymentMethod)==null?void 0:e.method,groupId:"",updateDate:new Date().getTime(),isCancelled:!1,location:this.location}}},methods:{...E(U,["getUserId"]),getLocalData(){if(localStorage.getItem("createTempFormData")){const s=JSON.parse(localStorage.getItem("createTempFormData")),n=s.date.split("-"),c=`${n[1]}/${n[2]}`,r=new Date(s.date).getDay(),e=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][r];this.tempForm={...s,newDate:c,dayOfWeekText:e}}if(localStorage.getItem("editorValue")){const s=localStorage.getItem("editorValue");this.editorContent=s}if(localStorage.getItem("selectedTags")){const s=JSON.parse(localStorage.getItem("selectedTags"));this.tempTags=s}},getUser(){const s=this.userId,n=`${S}/users/${s}`;this.$http.get(n).then(c=>{this.user=c.data}).catch(c=>{const r=c.response.statusText;this.$toast.add({severity:"error",detail:`${r} 使用者資訊獲取失敗`,life:1e3,contentStyleClass:"custom-toast-danger"})})},async handleSubmit(){try{const s=`${this.tempForm.city.name}${this.tempForm.district.name}${this.tempForm.address}`,n=`${W}?address=${s}&key=${H}`,c=`${S}/activities`,e=(await this.$http.get(n)).data.results[0].geometry.location;this.location=[e.lat,e.lng];const m=this.tempActivity;await this.$http.post(c,m),this.$router.push("/CreateJoin/step5"),["createTempFormData","editorValue","selectedTags"].forEach(p=>localStorage.removeItem(p))}catch{this.$toast.add({severity:"error",detail:"開團失敗，因定位需求，請檢查地址格式是否正確",life:3e3,contentStyleClass:"custom-toast-danger"})}}},mounted(){this.getLocalData(),this.userId=this.getUserId(),this.getUser()}},a=s=>(L("data-v-52e3a612"),s=s(),M(),s),Q={class:"px-4 pt-20 pb-5"},X={class:"container"},G={class:"flex items-center"},Z={class:"mb-4 mr-4 text-xl font-bold md:text-3xl"},q={class:"items-end"},tt={class:"flex items-center gap-4"},et=a(()=>t("p",null,"主辦者",-1)),st={class:"bg-primary-03 px-4 py-10 md:py-20"},ot={class:"container"},it={class:"grid h-full grid-cols-12 border-b border-[#3d3d3d] pb-10 md:pb-20"},at={class:"col-span-12 md:col-span-8"},nt=a(()=>t("img",{src:B,alt:"JoinDetailImage",class:"rounded md:mb-10"},null,-1)),ct={class:"mb-4 flex items-center justify-between border-b md:mb-0 md:hidden md:border-0"},lt=a(()=>t("h3",{class:"whitespace-nowrap text-lg font-medium md:mb-8 md:text-xl"}," 揪團詳情 ",-1)),rt={class:"p-4"},mt={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},dt=a(()=>t("span",{class:"material-icons mr-1 text-primary-01"}," schedule ",-1)),pt={class:"flex items-center rounded-full py-1 px-2 text-sm text-[#3D3D3D]"},_t=a(()=>t("span",{class:"material-icons mr-1 text-primary-01"}," room ",-1)),ht={class:"mb-10 md:mb-20"},ut={class:"mb-10 flex justify-evenly border-y border-[#3d3d3d] py-10 md:mb-20"},gt={class:"text-center"},bt=a(()=>t("span",{class:"material-symbols-outlined text-4xl"}," credit_card ",-1)),yt={class:"text-center"},vt=a(()=>t("span",{class:"material-symbols-outlined text-4xl"}," monetization_on ",-1)),xt={class:"text-center"},ft=a(()=>t("span",{class:"material-symbols-outlined text-4xl"}," group ",-1)),Tt={class:"flex flex-wrap gap-4"},wt=a(()=>t("div",{class:"flex flex-col justify-evenly gap-2 md:flex-row"},[t("div",{class:"w-full"},[t("img",{src:K,alt:"JoinDetailImg",class:"h-full"})]),t("div",{class:"w-full"},[t("img",{src:z,alt:"JoinDetailImg",class:"h-full"})]),t("div",{class:"w-full"},[t("img",{src:Y,alt:"JoinDetailImg",class:"h-full"})])],-1)),St=a(()=>t("p",{class:"mb-4"},"留言",-1)),Ft=a(()=>t("div",{class:"flex justify-end gap-4"},[t("button",{type:"button",class:"btn transition-color bg-white disabled:opacity-50",disabled:""}," 取消 "),t("button",{type:"button",class:"btn transition-color bg-primary-04 disabled:opacity-50",disabled:""}," 確認 ")],-1)),It={class:"bg-white py-5"},Jt={class:"container"},Dt={class:"flex flex-col items-center md:flex-row md:justify-between"},Pt={class:"mb-2 md:mb-0"},At={class:"mb-2 md:mb-0"},Vt={class:"text-lg font-semibold sm:text-xl"},Et={class:"flex items-center gap-6"},jt=a(()=>t("p",null,[t("i",{class:"pi pi-star text-lg"})],-1)),Ct=a(()=>t("button",{type:"button",class:"btn btn-primary py-4 hover:bg-primary-01 hover:text-white disabled:opacity-70",disabled:""}," 我要參加 ",-1));function Ut(s,n,c,r,e,m){var g,b,y,v,x,f,T;const u=l("PToast"),p=l("PAvatar"),F=l("QuillEditor"),_=l("JoinAttendees"),h=l("TabPanel"),I=l("PTextarea"),J=l("TabView"),D=l("JoinDetailAside"),P=l("StepPagination");return k(),j(C,null,[i(u),t("section",Q,[t("div",X,[t("div",G,[t("h2",Z,o(e.tempForm.title),1),t("p",q,o((g=e.tempForm.city)==null?void 0:g.name)+" "+o((b=e.tempForm.district)==null?void 0:b.name),1)]),t("div",tt,[i(p,{image:e.user.img,size:"xlarge",shape:"circle"},null,8,["image"]),t("div",null,[et,t("p",null,o(e.user.name),1)])])])]),t("main",st,[t("div",ot,[t("div",it,[t("div",at,[nt,t("section",ct,[lt,t("div",rt,[t("p",mt,[dt,w(o(e.tempForm.newDate)+" "+o((y=e.tempForm.startTime)==null?void 0:y.time),1)]),t("p",pt,[_t,w(o(e.tempForm.address),1)])])]),t("article",ht,[i(F,{content:e.editorContent,"onUpdate:content":n[0]||(n[0]=A=>e.editorContent=A),contentType:"html",readOnly:"",theme:"bubble"},null,8,["content"])]),t("section",ut,[t("div",gt,[bt,t("p",null,o((v=e.tempForm.paymentMethod)==null?void 0:v.method),1)]),t("div",yt,[vt,t("p",null,"$ "+o(e.tempForm.costPerPerson),1)]),t("div",xt,[ft,t("p",null,o((x=e.tempForm.maxJoinNum)==null?void 0:x.number)+" 人",1)])]),i(J,null,{default:d(()=>[i(h,{header:"參與者"},{default:d(()=>[t("ul",Tt,[t("li",null,[i(_)]),t("li",null,[i(_)]),t("li",null,[i(_)])])]),_:1}),i(h,{header:"更多照片"},{default:d(()=>[wt]),_:1}),i(h,{header:"留言"},{default:d(()=>[t("div",null,[St,t("form",null,[i(I,{rows:"5",class:"mb-2 w-full",placeholder:"留下您的想法",disabled:""}),Ft])])]),_:1})]),_:1})]),i(D,{activity:m.tempActivity},null,8,["activity"])])])]),t("section",It,[t("div",Jt,[t("div",Dt,[t("div",Pt,[t("p",At,o(e.tempForm.newDate)+" "+o(e.tempForm.dayOfWeekText)+" "+o((f=e.tempForm.startTime)==null?void 0:f.time),1),t("h2",Vt,o(e.tempForm.title),1)]),t("div",Et,[t("p",null,o((T=e.tempForm.maxJoinNum)==null?void 0:T.number)+" 個空位",1),jt,Ct])])])]),i(P,{onHandleSubmit:m.handleSubmit,class:"mt-20"},null,8,["onHandleSubmit"])],64)}const zt=V($,[["render",Ut],["__scopeId","data-v-52e3a612"]]);export{zt as default};
