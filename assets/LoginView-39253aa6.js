import{F as E}from"./FrontHeader-72a61db5.js";import{u as P,r as g,e as T,m as D,c as L}from"./i18n-validators-d7f9b0cf.js";import{_ as C,a,d,b as s,u as B,J as p,F as _,C as b,B as c,D as f,w as v,r as m,o as i,e as w,z as U,A as F}from"./index-1031d0a2.js";import{_ as J}from"./Frame-d925d16c.js";import"./avatar01-e06217d0.js";const{VITE_URL:N}={VITE_URL:"https://vercel.com/key0329/join-sport-server-vercel",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},R=e=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e),q={components:{FrontHeader:E},setup:()=>({v$:P()}),data(){return{email:"",password:"",submitted:!1,checked:!1}},validations(){return{email:{required:g,email:T},password:{required:g,minLength:D(8),validatePassword:L.withMessage("請檢查格式是否正確",R)}}},methods:{handleSubmit(e){this.submitted=!0,e&&this.login()},login(){const e={email:this.email,password:this.password},o=`${N}/login`;this.$http.post(o,e).then(r=>{const $=r.data.accessToken,t=r.data.user.id;this.setCookie($,t),this.checked&&localStorage.setItem("loginEmail",JSON.stringify(this.email)),this.checked||localStorage.removeItem("loginEmail"),alert("登入成功");const u=this.$route.query.redirect||"/";this.$router.push(u)}).catch(r=>{console.log(r)})},setCookie(e,o){const r=new Date(Date.now()+2592e5);document.cookie=`JoinSportToken=${e}; max-age=${(r-new Date)/1e3}`,document.cookie=`JoinSportUserId=${o}; max-age=${(r-new Date)/1e3}`}},mounted(){const e=JSON.parse(localStorage.getItem("loginEmail"));e&&(this.email=e,this.checked=!0)}},n=e=>(U("data-v-f447e4bc"),e=e(),F(),e),A={class:"py-[120px]"},H={class:"container"},M={class:"flex"},O=n(()=>s("div",{class:"hidden items-center justify-center md:flex"},[s("img",{class:"h-2/3",src:J,alt:"loginImg"})],-1)),j={class:"flex flex-col items-center pt-[120px]"},z=n(()=>s("h1",{class:"mb-10 text-3xl"},"會員登入",-1)),X={class:"mb-10"},Z={class:"p-float-label p-input-icon-right"},G=n(()=>s("i",{class:"pi pi-envelope"},null,-1)),K={key:0},Q={class:"p-error"},W={key:1,class:"p-error block text-end"},Y={class:"mb-4"},ee={class:"p-float-label"},se=n(()=>s("h6",null,"請輸入密碼",-1)),oe=n(()=>s("ul",{class:"mt-0 border-t pt-1",style:{"line-height":"1.5"}},[s("li",null,"至少 1 個數字"),s("li",null,"至少 1 個小寫英文字母"),s("li",null,"至少 1 個大寫英文字母"),s("li",null,"最少 8 個字母")],-1)),te={key:0},le={class:"p-error"},ae={key:1,class:"p-error block text-end"},ie={class:"mb-6 flex items-center justify-end"},re=n(()=>s("label",{for:"remember",class:"ml-1 text-sm text-gray-500"},"記住帳號",-1)),ne=n(()=>s("span",{class:"flex items-center text-sm text-gray-500 group-hover:text-primary-01"},[w(" 註冊帳號 "),s("i",{class:"pi pi-external-link ml-1"})],-1));function de(e,o,r,$,t,u){const k=m("FrontHeader"),V=m("InputText"),y=m("PPassword"),I=m("PCheckbox"),x=m("PButton"),S=m("RouterLink");return i(),a(_,null,[d(k),s("main",A,[s("div",H,[s("div",M,[O,s("div",j,[z,s("form",{onSubmit:o[3]||(o[3]=B(l=>u.handleSubmit(!e.v$.$invalid),["prevent"]))},[s("div",X,[s("div",Z,[G,d(V,{id:"email",modelValue:e.v$.email.$model,"onUpdate:modelValue":o[0]||(o[0]=l=>e.v$.email.$model=l),placeholder:"請輸入 Email",class:p(["w-full",{"p-invalid":e.v$.email.$invalid&&t.submitted}]),"aria-describedby":"email-error",autocomplete:"email"},null,8,["modelValue","class"]),s("label",{for:"email",class:p({"p-error":e.v$.email.$invalid&&t.submitted})},"請輸入電子信箱",2)]),e.v$.email.$error&&t.submitted?(i(),a("span",K,[(i(!0),a(_,null,b(e.v$.email.$errors,(l,h)=>(i(),a("span",{id:"email-error",key:h,class:"block text-end"},[s("small",Q,c(l.$message.replace("Value","電子信箱")),1)]))),128))])):e.v$.email.$invalid&&t.submitted||e.v$.email.$pending.$response?(i(),a("small",W,c(e.v$.email.required.$message.replace("Value","電子信箱")),1)):f("",!0)]),s("div",Y,[s("div",ee,[d(y,{id:"password",modelValue:e.v$.password.$model,"onUpdate:modelValue":o[1]||(o[1]=l=>e.v$.password.$model=l),class:p({"p-invalid":e.v$.password.$invalid&&t.submitted}),toggleMask:"",inputProps:{autocomplete:"current-password"}},{header:v(()=>[se]),footer:v(l=>[w(c(l.level)+" ",1),oe]),_:1},8,["modelValue","class"]),s("label",{for:"password",class:p({"p-error":e.v$.password.$invalid&&t.submitted})},"請輸入密碼",2)]),e.v$.password.$error&&t.submitted?(i(),a("span",te,[(i(!0),a(_,null,b(e.v$.password.$errors,(l,h)=>(i(),a("span",{id:"password-error",key:h,class:"block text-end"},[s("small",le,c(l.$message.replace("Value","密碼")),1)]))),128))])):e.v$.password.$invalid&&t.submitted||e.v$.password.$pending.$response?(i(),a("small",ae,c(e.v$.password.required.$message.replace("Value","密碼")),1)):f("",!0)]),s("div",ie,[d(I,{inputId:"remember",modelValue:t.checked,"onUpdate:modelValue":o[2]||(o[2]=l=>t.checked=l),binary:!0},null,8,["modelValue"]),re]),d(x,{type:"submit",label:"登入",class:"mt-10 w-full"})],32),d(S,{to:"/register",class:"group mt-2"},{default:v(()=>[ne]),_:1})])])])])],64)}const _e=C(q,[["render",de],["__scopeId","data-v-f447e4bc"]]);export{_e as default};
