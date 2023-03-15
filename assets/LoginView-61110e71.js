import{F as T}from"./FrontHeader-80448733.js";import{u as P,r as $,e as L,m as C,c as D}from"./i18n-validators-c6c32056.js";import{_ as B,a as i,d as n,b as s,v as A,G as u,F as v,B as f,C as c,x as b,w as g,r as d,o as l,e as w,D as F,E as U}from"./index-cbe3335a.js";import{_ as M}from"./Frame-d925d16c.js";import"./searchStore-f172184d.js";const{VITE_URL:R}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},j=e=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e),J={name:"LoginView",components:{FrontHeader:T},setup:()=>({v$:P()}),data(){return{email:"",password:"",submitted:!1,checked:!1}},validations(){return{email:{required:$,email:L},password:{required:$,minLength:C(8),validatePassword:D.withMessage("請檢查格式是否正確",j)}}},methods:{handleSubmit(e){this.submitted=!0,e&&this.login()},login(){const e={email:this.email,password:this.password},t=`${R}/login`;this.$http.post(t,e).then(r=>{const p=r.data.accessToken,o=r.data.user.id;this.setCookie(p,o),this.checked&&localStorage.setItem("loginEmail",JSON.stringify(this.email)),this.checked||localStorage.removeItem("loginEmail"),this.$toast.add({severity:"success",detail:"登入成功，即將返回頁面",life:1e3});const _=this.$route.query.redirect||"/";setTimeout(()=>{this.$router.push(_)},1e3)}).catch(r=>{const p=r.response.statusText;this.$toast.add({severity:"error",detail:`${p} 登入失敗`,life:1e3,contentStyleClass:"custom-toast-danger"})})},setCookie(e,t){const r=new Date(Date.now()+2592e5);document.cookie=`JoinSportToken=${e}; max-age=${(r-new Date)/1e3}`,document.cookie=`JoinSportUserId=${t}; max-age=${(r-new Date)/1e3}`}},mounted(){const e=JSON.parse(localStorage.getItem("loginEmail"));e&&(this.email=e,this.checked=!0)}},m=e=>(F("data-v-158d354a"),e=e(),U(),e),N={class:"py-10 md:py-[120px]"},O={class:"container"},q={class:"flex justify-center md:justify-start"},z=m(()=>s("div",{class:"hidden items-center justify-center md:flex"},[s("img",{class:"h-2/3",src:M,alt:"loginImg"})],-1)),H={class:"flex flex-col items-center pt-[120px]"},Y=m(()=>s("h1",{class:"mb-10 text-3xl"},"會員登入",-1)),G={class:"mb-10"},K={class:"p-float-label p-input-icon-right"},X=m(()=>s("i",{class:"pi pi-envelope"},null,-1)),Z={key:0},Q={class:"p-error"},W={key:1,class:"p-error block text-end"},ee={class:"mb-4"},se={class:"p-float-label"},te=m(()=>s("h6",null,"請輸入密碼",-1)),oe=m(()=>s("ul",{class:"mt-0 border-t pt-1",style:{"line-height":"1.5"}},[s("li",null,"至少 1 個數字"),s("li",null,"至少 1 個小寫英文字母"),s("li",null,"至少 1 個大寫英文字母"),s("li",null,"最少 8 個字母")],-1)),ae={key:0},ie={class:"p-error"},le={key:1,class:"p-error block text-end"},re={class:"mb-6 flex items-center justify-end"},ne=m(()=>s("label",{for:"remember",class:"ml-1 text-sm text-gray-500"},"記住帳號",-1)),de=m(()=>s("span",{class:"flex items-center text-sm text-gray-500 group-hover:text-primary-01"},[w(" 註冊帳號 "),s("i",{class:"pi pi-external-link ml-1"})],-1));function me(e,t,r,p,o,_){const k=d("PToast"),y=d("FrontHeader"),V=d("InputText"),I=d("PPassword"),x=d("PCheckbox"),E=d("PButton"),S=d("RouterLink");return l(),i(v,null,[n(k),n(y),s("main",N,[s("div",O,[s("div",q,[z,s("div",H,[Y,s("form",{onSubmit:t[3]||(t[3]=A(a=>_.handleSubmit(!e.v$.$invalid),["prevent"]))},[s("div",G,[s("div",K,[X,n(V,{id:"email",modelValue:e.v$.email.$model,"onUpdate:modelValue":t[0]||(t[0]=a=>e.v$.email.$model=a),placeholder:"請輸入 Email",class:u(["w-full",{"p-invalid":e.v$.email.$invalid&&o.submitted}]),"aria-describedby":"email-error",autocomplete:"email"},null,8,["modelValue","class"]),s("label",{for:"email",class:u({"p-error":e.v$.email.$invalid&&o.submitted})},"請輸入電子信箱",2)]),e.v$.email.$error&&o.submitted?(l(),i("span",Z,[(l(!0),i(v,null,f(e.v$.email.$errors,(a,h)=>(l(),i("span",{id:"email-error",key:h,class:"block text-end"},[s("small",Q,c(a.$message.replace("Value","電子信箱")),1)]))),128))])):e.v$.email.$invalid&&o.submitted||e.v$.email.$pending.$response?(l(),i("small",W,c(e.v$.email.required.$message.replace("Value","電子信箱")),1)):b("",!0)]),s("div",ee,[s("div",se,[n(I,{id:"password",modelValue:e.v$.password.$model,"onUpdate:modelValue":t[1]||(t[1]=a=>e.v$.password.$model=a),class:u({"p-invalid":e.v$.password.$invalid&&o.submitted}),toggleMask:"",inputProps:{autocomplete:"current-password"}},{header:g(()=>[te]),footer:g(a=>[w(c(a.level)+" ",1),oe]),_:1},8,["modelValue","class"]),s("label",{for:"password",class:u({"p-error":e.v$.password.$invalid&&o.submitted})},"請輸入密碼",2)]),e.v$.password.$error&&o.submitted?(l(),i("span",ae,[(l(!0),i(v,null,f(e.v$.password.$errors,(a,h)=>(l(),i("span",{id:"password-error",key:h,class:"block text-end"},[s("small",ie,c(a.$message.replace("Value","密碼")),1)]))),128))])):e.v$.password.$invalid&&o.submitted||e.v$.password.$pending.$response?(l(),i("small",le,c(e.v$.password.required.$message.replace("Value","密碼")),1)):b("",!0)]),s("div",re,[n(x,{inputId:"remember",modelValue:o.checked,"onUpdate:modelValue":t[2]||(t[2]=a=>o.checked=a),binary:!0},null,8,["modelValue"]),ne]),n(E,{type:"submit",label:"登入",class:"mt-10 w-full"})],32),n(S,{to:"/register",class:"group mt-2"},{default:g(()=>[de]),_:1})])])])])],64)}const ve=B(J,[["render",me],["__scopeId","data-v-158d354a"]]);export{ve as default};
