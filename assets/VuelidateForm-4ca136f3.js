import{s as V,_ as w,r as b,o as d,a as r,b as i,G as l,d as n,C as m,x as p,D as T,E as P}from"./index-1742c032.js";import{u as D,r as c}from"./i18n-validators-1df3ab55.js";import{c as M}from"./createStepsStore-74a258d4.js";const{VITE_URL:N}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},S={name:"VuelidateForm",setup:()=>({v$:D()}),props:{activity:{type:Object}},data(){return{id:null,title:"",description:"",city:"",district:"",address:"",date:"",startTime:"",paymentMethod:"",costPerPerson:null,maxJoinNum:null,submitted:!1,tempDistrict:[]}},computed:{dateString(){const e=new Date(this.date),s=e.getFullYear(),a=e.getMonth()+1,u=e.getDate();return`${s}-${a.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`},tempFormData(){return{title:this.title,description:this.description,city:this.city,district:this.district,address:this.address,date:this.dateString,startTime:this.startTime,paymentMethod:this.paymentMethod,costPerPerson:this.costPerPerson,maxJoinNum:this.maxJoinNum}},taiwanCities(){return this.tempDistrict.map(s=>({name:s.name}))},districts(){var s;return this.tempDistrict.reduce((a,u)=>{const t=u.name,v=u.districts.map(h=>({name:h.name}));return a[t]?a[t].push(...v):a[t]=v,a},{})[(s=this.city)==null?void 0:s.name]},...V(M,["joinNums","startTimes","paymentMethods"])},validations(){return{title:{required:c},description:{required:c},city:{required:c},district:{required:c},address:{required:c},date:{required:c},startTime:{required:c},paymentMethod:{required:c},costPerPerson:{required:c},maxJoinNum:{required:c}}},methods:{handleSubmit(e){this.submitted=!0,e&&localStorage.setItem("createTempFormData",JSON.stringify(this.tempFormData))},handleUpdate(e){if(this.submitted=!0,!e)return;const s={...this.tempFormData,city:this.city.name,district:this.district.name,paymentMethod:this.paymentMethod.method,maxJoinNum:this.maxJoinNum.number},{id:a}=this,u=`${N}/activities/${a}`;this.$http.patch(u,s).then(()=>{this.$toast.add({severity:"success",detail:"更新成功",life:1e3}),this.getFormData()}).catch(t=>{const v=t.response.statusText;this.$toast.add({severity:"error",detail:`${v} 更新失敗`,life:1e3,contentStyleClass:"custom-toast-danger"})})},getFormData(){if(localStorage.getItem("createTempFormData")){const e=JSON.parse(localStorage.getItem("createTempFormData")),[s]=e.date.split("T");this.title=e.title,this.description=e.description,this.city=e.city,this.district=e.district,this.address=e.address,this.date=s,this.costPerPerson=e.costPerPerson,this.paymentMethod=e.paymentMethod,this.startTime=e.startTime,this.maxJoinNum=e.maxJoinNum}},getTaiwanDistrictData(){const e="https://gist.githubusercontent.com/abc873693/2804e64324eaaf26515281710e1792df/raw/a1e1fc17d04b47c564bbd9dba0d59a6a325ec7c1/taiwan_districts.json";this.$http.get(e).then(s=>{this.tempDistrict=s.data}).then(s=>{const a=s;this.$toast.add({severity:"error",detail:`${a}`,life:1e3,contentStyleClass:"custom-toast-danger"})})},changeToZhTW(){this.$primevue.config.locale.emptyMessage="請先選擇縣市",this.$primevue.config.locale.monthNames=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],this.$primevue.config.locale.dayNamesMin=["日","一","二","三","四","五","六"]}},watch:{activity(e){this.id=e.id,this.title=e.title,this.description=e.description,this.city={name:e.city},this.district={name:e.district},this.address=e.address,this.date=e.date,this.costPerPerson=e.costPerPerson,this.paymentMethod={method:e.paymentMethod},this.startTime=e.startTime,this.maxJoinNum={number:e.maxJoinNum}}},mounted(){this.getFormData(),this.getTaiwanDistrictData(),this.changeToZhTW()}},y=e=>(T("data-v-c484ab65"),e=e(),P(),e),k={class:"container"},J={class:"mx-auto flex flex-col gap-6 lg:w-1/2"},F={class:"items-center md:flex"},I={key:0,class:"p-error block text-end"},_={class:"items-center md:flex"},U={key:0,class:"p-error block text-end"},E={class:"flex flex-col gap-4 md:flex-row"},C={class:"items-center md:flex"},q={key:0,class:"p-error block text-end"},L={key:0,class:"p-error block text-end"},j={class:"items-center md:flex"},A={key:0,class:"p-error block text-end"},B={class:"flex flex-col justify-between gap-4 md:flex-row"},O={class:"items-center md:flex"},R={key:0,class:"p-error block text-end"},Y={class:"items-center md:flex"},x={key:0,class:"p-error block text-end"},z={class:"mt-6 flex flex-col items-center justify-between gap-6 md:flex-row"},Z={class:"w-full"},G={class:"p-float-label"},K=y(()=>i("label",{for:"paymentMethod"},"付費方式",-1)),W={key:0,class:"p-error block text-end"},X={class:"w-full"},H={class:"p-float-label"},Q=y(()=>i("label",{for:"costPerPerson"},"每人費用",-1)),ee={key:0,class:"p-error block text-end"},te={class:"w-full"},se={class:"p-float-label"},ie=y(()=>i("label",{for:"maxJoinNum"},"人數",-1)),oe={key:0,class:"p-error block text-end"};function le(e,s,a,u,t,v){const h=b("InputText"),$=b("PDropdown"),f=b("PCalendar"),g=b("InputNumber");return d(),r("div",k,[i("form",J,[i("div",null,[i("div",F,[i("label",{for:"title",class:l(["mr-4 whitespace-nowrap px-2 lg:mb-0",{"p-error":e.v$.title.$invalid&&t.submitted}])},"揪團標題",2),n(h,{id:"title",type:"text",modelValue:e.v$.title.$model,"onUpdate:modelValue":s[0]||(s[0]=o=>e.v$.title.$model=o),placeholder:"請輸入揪團標題",class:l(["mt-2 w-full md:mt-0",{"p-invalid":e.v$.title.$invalid&&t.submitted}])},null,8,["modelValue","class"])]),e.v$.title.$invalid&&t.submitted||e.v$.title.$pending.$response?(d(),r("small",I,m(e.v$.title.required.$message.replace("Value","標題")),1)):p("",!0)]),i("div",null,[i("div",_,[i("label",{for:"description",class:l(["mr-4 whitespace-nowrap px-2 lg:mb-0",{"p-error":e.v$.description.$invalid&&t.submitted}])},"揪團描述",2),n(h,{id:"description",type:"text",modelValue:e.v$.description.$model,"onUpdate:modelValue":s[1]||(s[1]=o=>e.v$.description.$model=o),placeholder:"簡單描述此揪團",class:l(["mt-2 w-full md:mt-0",{"p-invalid":e.v$.description.$invalid&&t.submitted}])},null,8,["modelValue","class"])]),e.v$.description.$invalid&&t.submitted||e.v$.description.$pending.$response?(d(),r("small",U,m(e.v$.description.required.$message.replace("Value","描述")),1)):p("",!0)]),i("div",E,[i("div",null,[i("div",C,[i("label",{for:"formCity",class:l(["mr-4 whitespace-nowrap px-2 lg:mb-0",{"p-error":e.v$.city.$invalid&&t.submitted}])},"活動地區",2),n($,{id:"formCity",modelValue:e.v$.city.$model,"onUpdate:modelValue":s[2]||(s[2]=o=>e.v$.city.$model=o),optionLabel:"name",placeholder:"請選擇活動縣市",options:v.taiwanCities,class:l(["mt-2 w-full md:mt-0",{"p-invalid":e.v$.city.$invalid&&t.submitted}])},null,8,["modelValue","options","class"])]),e.v$.city.$invalid&&t.submitted||e.v$.city.$pending.$response?(d(),r("small",q,m(e.v$.city.required.$message.replace("Value","縣市")),1)):p("",!0)]),i("div",null,[n($,{id:"district",modelValue:e.v$.district.$model,"onUpdate:modelValue":s[3]||(s[3]=o=>e.v$.district.$model=o),optionLabel:"name",placeholder:"請選擇活動地區",options:v.districts,class:l(["mt-0 w-full",{"p-invalid":e.v$.district.$invalid&&t.submitted}])},null,8,["modelValue","options","class"]),e.v$.district.$invalid&&t.submitted||e.v$.district.$pending.$response?(d(),r("small",L,m(e.v$.district.required.$message.replace("Value","地區")),1)):p("",!0)])]),i("div",null,[i("div",j,[i("label",{for:"address",class:l(["mr-4 whitespace-nowrap px-2 lg:mb-0",{"p-error":e.v$.address.$invalid&&t.submitted}])},"活動地址",2),n(h,{id:"address",type:"text",class:l(["mt-2 w-full md:mt-0",{"p-invalid":e.v$.address.$invalid&&t.submitted}]),modelValue:e.v$.address.$model,"onUpdate:modelValue":s[4]||(s[4]=o=>e.v$.address.$model=o),placeholder:"請輸入活動地址"},null,8,["modelValue","class"])]),e.v$.address.$invalid&&t.submitted||e.v$.address.$pending.$response?(d(),r("small",A,m(e.v$.address.required.$message.replace("Value","地址")),1)):p("",!0)]),i("div",B,[i("div",null,[i("div",O,[i("label",{for:"formDate",class:l(["mr-4 whitespace-nowrap px-2 lg:mb-0",{"p-error":e.v$.date.$invalid&&t.submitted}])},"活動日期",2),n(f,{id:"formDate",modelValue:e.v$.date.$model,"onUpdate:modelValue":s[5]||(s[5]=o=>e.v$.date.$model=o),placeholder:"請選擇活動日期",dateFormat:"yy-mm-dd",showIcon:!0,minDate:new Date,class:l(["mt-2 w-full md:mt-0",{"p-invalid":e.v$.date.$invalid&&t.submitted}])},null,8,["modelValue","minDate","class"])]),e.v$.date.$invalid&&t.submitted||e.v$.date.$pending.$response?(d(),r("small",R,m(e.v$.date.required.$message.replace("Value","日期")),1)):p("",!0)]),i("div",null,[i("div",Y,[i("label",{for:"startTime",class:l(["mr-4 whitespace-nowrap px-2 lg:mb-0",{"p-error":e.v$.startTime.$invalid&&t.submitted}])},"開始時間",2),n($,{id:"startTime",modelValue:t.startTime,"onUpdate:modelValue":s[6]||(s[6]=o=>t.startTime=o),options:e.startTimes,optionLabel:"time",placeholder:"請選擇開始時間",class:l(["mt-2 w-full md:mt-0",{"p-invalid":e.v$.startTime.$invalid&&t.submitted}])},null,8,["modelValue","options","class"])]),e.v$.startTime.$invalid&&t.submitted||e.v$.startTime.$pending.$response?(d(),r("small",x,m(e.v$.startTime.required.$message.replace("Value","時間")),1)):p("",!0)])]),i("div",z,[i("div",Z,[i("div",G,[n($,{id:"paymentMethod",modelValue:t.paymentMethod,"onUpdate:modelValue":s[7]||(s[7]=o=>t.paymentMethod=o),options:e.paymentMethods,optionLabel:"method",class:l(["w-full",{"p-invalid":e.v$.paymentMethod.$invalid&&t.submitted}])},null,8,["modelValue","options","class"]),K]),e.v$.paymentMethod.$invalid&&t.submitted||e.v$.paymentMethod.$pending.$response?(d(),r("small",W,m(e.v$.paymentMethod.required.$message.replace("Value","付費方式")),1)):p("",!0)]),i("div",X,[i("div",H,[n(g,{id:"costPerPerson",modelValue:t.costPerPerson,"onUpdate:modelValue":s[8]||(s[8]=o=>t.costPerPerson=o),class:l(["w-full",{"p-invalid":e.v$.costPerPerson.$invalid&&t.submitted}])},null,8,["modelValue","class"]),Q]),e.v$.costPerPerson.$invalid&&t.submitted||e.v$.costPerPerson.$pending.$response?(d(),r("small",ee,m(e.v$.costPerPerson.required.$message.replace("Value","費用")),1)):p("",!0)]),i("div",te,[i("div",se,[n($,{id:"maxJoinNum",modelValue:t.maxJoinNum,"onUpdate:modelValue":s[9]||(s[9]=o=>t.maxJoinNum=o),class:l(["w-full",{"p-invalid":e.v$.maxJoinNum.$invalid&&t.submitted}]),options:e.joinNums,optionLabel:"number"},null,8,["modelValue","options","class"]),ie]),e.v$.maxJoinNum.$invalid&&t.submitted||e.v$.maxJoinNum.$pending.$response?(d(),r("small",oe,m(e.v$.maxJoinNum.required.$message.replace("Value","人數")),1)):p("",!0)])])])])}const ne=w(S,[["render",le],["__scopeId","data-v-c484ab65"]]);export{ne as V};
