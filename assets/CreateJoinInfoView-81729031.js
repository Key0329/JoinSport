import{G as g,_ as V,r as b,o as n,a,b as s,J as l,d as r,B as d,D as m,z as T,A as _,s as N}from"./index-1031d0a2.js";import{u as F,r as p}from"./i18n-validators-d7f9b0cf.js";import{c as f,S}from"./StepPagination-0cf77d89.js";const k={setup:()=>({v$:F()}),data(){return{title:"",description:"",city:"",district:"",address:"",date:"2023-03-19",startTime:"",paymentMethod:"",costPerPerson:null,joinNum:null,submitted:!1,area:[{name:"台北市"},{name:"Rome"},{name:"London"},{name:"Istanbul"},{name:"Paris"}],tempDistrict:[]}},computed:{dateString(){const e=new Date(this.date),i=e.getFullYear(),u=e.getMonth()+1,$=e.getDate();return`${i}-${u.toString().padStart(2,"0")}-${$.toString().padStart(2,"0")}`},tempFormData(){return{title:this.title,description:this.description,city:this.city,district:this.district,address:this.address,date:this.dateString,startTime:this.startTime,paymentMethod:this.paymentMethod,costPerPerson:this.costPerPerson,joinNum:this.joinNum}},taiwanCities(){return this.tempDistrict.map(i=>({name:i.name}))},districts(){var i;return this.tempDistrict.reduce((u,$)=>{const t=$.name,c=$.districts.map(v=>({name:v.name}));return u[t]?u[t].push(...c):u[t]=c,u},{})[(i=this.city)==null?void 0:i.name]},...g(f,["joinNums","startTimes","paymentMethods"])},validations(){return{title:{required:p},description:{required:p},city:{required:p},district:{required:p},address:{required:p},date:{required:p},startTime:{required:p},paymentMethod:{required:p},costPerPerson:{required:p},joinNum:{required:p}}},methods:{handleSubmit(e){this.submitted=!0,e&&localStorage.setItem("createTempFormData",JSON.stringify(this.tempFormData))},getLocalForm(){if(localStorage.getItem("createTempFormData")){const e=JSON.parse(localStorage.getItem("createTempFormData")),[i]=e.date.split("T");this.title=e.title,this.description=e.description,this.city=e.city,this.district=e.district,this.address=e.address,this.date=i,this.costPerPerson=e.costPerPerson,this.paymentMethod=e.paymentMethod,this.startTime=e.startTime,this.joinNum=e.joinNum}},resetForm(){this.title="",this.description="",this.city="",this.district="",this.address="",this.date=null,this.costPerPerson=null,this.paymentMethod="",this.startTime="",this.joinNum=null,this.submitted=!1},getTaiwanDistrictData(){const e="https://gist.githubusercontent.com/abc873693/2804e64324eaaf26515281710e1792df/raw/a1e1fc17d04b47c564bbd9dba0d59a6a325ec7c1/taiwan_districts.json";this.$http.get(e).then(i=>{this.tempDistrict=i.data}).then(i=>{console.log(i)})},changeToZhTW(){this.$primevue.config.locale.emptyMessage="請先選擇縣市",this.$primevue.config.locale.monthNames=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],this.$primevue.config.locale.dayNamesMin=["日","一","二","三","四","五","六"]}},mounted(){this.getLocalForm(),this.getTaiwanDistrictData(),this.changeToZhTW()}},y=e=>(T("data-v-5d884149"),e=e(),_(),e),M={class:"flex justify-center"},j={class:"flex w-1/2 flex-col gap-6"},D={class:"flex items-center"},I={key:0,class:"p-error block text-end"},C={class:"flex items-center"},q={key:0,class:"p-error block text-end"},U={class:"flex gap-4"},L={class:"flex items-center"},B={key:0,class:"p-error block text-end"},J={key:0,class:"p-error block text-end"},E={class:"flex items-center"},z={key:0,class:"p-error block text-end"},A={class:"flex justify-between"},O={class:"flex items-center"},W={key:0,class:"p-error block text-end"},Z={class:"flex items-center"},G={key:0,class:"p-error block text-end"},R={class:"mt-6 flex items-center justify-between gap-6"},Y={class:"w-full"},H={class:"p-float-label"},K=y(()=>s("label",{for:"paymentMethod"},"付費方式",-1)),Q={key:0,class:"p-error block text-end"},X={class:"w-full"},x={class:"p-float-label"},ee=y(()=>s("label",{for:"costPerPerson"},"每人費用",-1)),te={key:0,class:"p-error block text-end"},se={class:"w-full"},ie={class:"p-float-label"},oe=y(()=>s("label",{for:"joinNum"},"人數",-1)),le={key:0,class:"p-error block text-end"};function ne(e,i,u,$,t,c){const v=b("InputText"),h=b("PDropdown"),w=b("PCalendar"),P=b("InputNumber");return n(),a("div",M,[s("form",j,[s("div",null,[s("div",D,[s("label",{for:"title",class:l(["mr-4 whitespace-nowrap px-2",{"p-error":e.v$.title.$invalid&&t.submitted}])},"揪團標題",2),r(v,{id:"title",type:"text",modelValue:e.v$.title.$model,"onUpdate:modelValue":i[0]||(i[0]=o=>e.v$.title.$model=o),placeholder:"請輸入揪團標題",class:l(["w-full",{"p-invalid":e.v$.title.$invalid&&t.submitted}])},null,8,["modelValue","class"])]),e.v$.title.$invalid&&t.submitted||e.v$.title.$pending.$response?(n(),a("small",I,d(e.v$.title.required.$message.replace("Value","標題")),1)):m("",!0)]),s("div",null,[s("div",C,[s("label",{for:"description",class:l(["mr-4 whitespace-nowrap px-2",{"p-error":e.v$.description.$invalid&&t.submitted}])},"揪團描述",2),r(v,{id:"description",type:"text",modelValue:e.v$.description.$model,"onUpdate:modelValue":i[1]||(i[1]=o=>e.v$.description.$model=o),placeholder:"簡單描述此揪團",class:l(["w-full",{"p-invalid":e.v$.description.$invalid&&t.submitted}])},null,8,["modelValue","class"])]),e.v$.description.$invalid&&t.submitted||e.v$.description.$pending.$response?(n(),a("small",q,d(e.v$.description.required.$message.replace("Value","描述")),1)):m("",!0)]),s("div",U,[s("div",null,[s("div",L,[s("label",{for:"city",class:l(["mr-4 whitespace-nowrap px-2",{"p-error":e.v$.city.$invalid&&t.submitted}])},"活動地區",2),r(h,{id:"city",modelValue:e.v$.city.$model,"onUpdate:modelValue":i[2]||(i[2]=o=>e.v$.city.$model=o),optionLabel:"name",placeholder:"請選擇活動縣市",options:c.taiwanCities,filter:!0,showClear:!0,class:l(["w-full",{"p-invalid":e.v$.city.$invalid&&t.submitted}])},null,8,["modelValue","options","class"])]),e.v$.city.$invalid&&t.submitted||e.v$.city.$pending.$response?(n(),a("small",B,d(e.v$.city.required.$message.replace("Value","縣市")),1)):m("",!0)]),s("div",null,[r(h,{id:"district",modelValue:e.v$.district.$model,"onUpdate:modelValue":i[3]||(i[3]=o=>e.v$.district.$model=o),optionLabel:"name",placeholder:"請選擇活動地區",options:c.districts,filter:!0,showClear:!0,class:l(["w-full",{"p-invalid":e.v$.district.$invalid&&t.submitted}])},null,8,["modelValue","options","class"]),e.v$.district.$invalid&&t.submitted||e.v$.district.$pending.$response?(n(),a("small",J,d(e.v$.district.required.$message.replace("Value","地區")),1)):m("",!0)])]),s("div",null,[s("div",E,[s("label",{for:"address",class:l(["mr-4 whitespace-nowrap px-2",{"p-error":e.v$.address.$invalid&&t.submitted}])},"活動地址",2),r(v,{id:"address",type:"text",class:l(["w-full",{"p-invalid":e.v$.address.$invalid&&t.submitted}]),modelValue:e.v$.address.$model,"onUpdate:modelValue":i[4]||(i[4]=o=>e.v$.address.$model=o),placeholder:"請輸入活動地址"},null,8,["modelValue","class"])]),e.v$.address.$invalid&&t.submitted||e.v$.address.$pending.$response?(n(),a("small",z,d(e.v$.address.required.$message.replace("Value","地址")),1)):m("",!0)]),s("div",A,[s("div",null,[s("div",O,[s("label",{for:"date",class:l(["mr-4 whitespace-nowrap px-2",{"p-error":e.v$.date.$invalid&&t.submitted}])},"活動日期",2),r(w,{id:"date",modelValue:e.v$.date.$model,"onUpdate:modelValue":i[5]||(i[5]=o=>e.v$.date.$model=o),placeholder:"請選擇活動日期",dateFormat:"yy-mm-dd",showIcon:!0,class:l(["w-full",{"p-invalid":e.v$.date.$invalid&&t.submitted}])},null,8,["modelValue","class"])]),e.v$.date.$invalid&&t.submitted||e.v$.date.$pending.$response?(n(),a("small",W,d(e.v$.date.required.$message.replace("Value","日期")),1)):m("",!0)]),s("div",null,[s("div",Z,[s("label",{for:"startTime",class:l(["mr-4 whitespace-nowrap px-2",{"p-error":e.v$.startTime.$invalid&&t.submitted}])},"開始時間",2),r(h,{id:"startTime",modelValue:t.startTime,"onUpdate:modelValue":i[6]||(i[6]=o=>t.startTime=o),options:e.startTimes,optionLabel:"time",placeholder:"請選擇開始時間",class:l(["w-full",{"p-invalid":e.v$.startTime.$invalid&&t.submitted}])},null,8,["modelValue","options","class"])]),e.v$.startTime.$invalid&&t.submitted||e.v$.startTime.$pending.$response?(n(),a("small",G,d(e.v$.startTime.required.$message.replace("Value","時間")),1)):m("",!0)])]),s("div",R,[s("div",Y,[s("div",H,[r(h,{id:"paymentMethod",modelValue:t.paymentMethod,"onUpdate:modelValue":i[7]||(i[7]=o=>t.paymentMethod=o),options:e.paymentMethods,optionLabel:"method",class:l(["w-full",{"p-invalid":e.v$.paymentMethod.$invalid&&t.submitted}])},null,8,["modelValue","options","class"]),K]),e.v$.paymentMethod.$invalid&&t.submitted||e.v$.paymentMethod.$pending.$response?(n(),a("small",Q,d(e.v$.paymentMethod.required.$message.replace("Value","付費方式")),1)):m("",!0)]),s("div",X,[s("div",x,[r(P,{id:"costPerPerson",modelValue:t.costPerPerson,"onUpdate:modelValue":i[8]||(i[8]=o=>t.costPerPerson=o),class:l(["w-full",{"p-invalid":e.v$.costPerPerson.$invalid&&t.submitted}])},null,8,["modelValue","class"]),ee]),e.v$.costPerPerson.$invalid&&t.submitted||e.v$.costPerPerson.$pending.$response?(n(),a("small",te,d(e.v$.costPerPerson.required.$message.replace("Value","費用")),1)):m("",!0)]),s("div",se,[s("div",ie,[r(h,{id:"joinNum",modelValue:t.joinNum,"onUpdate:modelValue":i[9]||(i[9]=o=>t.joinNum=o),class:l(["w-full",{"p-invalid":e.v$.joinNum.$invalid&&t.submitted}]),options:e.joinNums,optionLabel:"number"},null,8,["modelValue","options","class"]),oe]),e.v$.joinNum.$invalid&&t.submitted||e.v$.joinNum.$pending.$response?(n(),a("small",le,d(e.v$.joinNum.required.$message.replace("Value","人數")),1)):m("",!0)])])])])}const ae=V(k,[["render",ne],["__scopeId","data-v-5d884149"]]),re={components:{VuelidateForm:ae,StepPagination:S},computed:{...g(f,["isChildFormValid"])},methods:{submitChildForm(){this.$refs.childForm.v$.$invalid?this.updateFormValid(!0):this.updateFormValid(!1),this.$refs.childForm.handleSubmit(!this.$refs.childForm.v$.$invalid)},...N(f,["updateFormValid"])}},de={class:"mb-10 py-10"},me={class:"container"},pe=s("h1",{class:"mb-8 text-center text-4xl"},"三個步驟，讓您快速開團",-1),ue=s("h2",{class:"mb-12 text-center text-xl"},"首先設定必要的資訊",-1),ce={class:"mx-auto mt-20 w-1/2"};function ve(e,i,u,$,t,c){const v=b("VuelidateForm"),h=b("StepPagination");return n(),a("section",de,[s("div",me,[pe,ue,r(v,{ref:"childForm"},null,512),s("div",ce,[r(h,{onEmitNext:c.submitChildForm},null,8,["onEmitNext"])])])])}const fe=V(re,[["render",ve]]);export{fe as default};
