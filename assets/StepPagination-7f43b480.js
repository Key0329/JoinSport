import{G as l,_ as u,r as h,o as s,a as m,E as i,D as a}from"./index-9dedc0dc.js";import{c as S}from"./createSteps-7ee460b1.js";const{VITE_URL:d}={VITE_URL:"https://join-sport-server-vercel.vercel.app",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},_={props:{activity:{type:Object}},data(){return{currentStep:null}},computed:{...l(S,["isChildFormValid"])},methods:{prevStep(){const t=parseInt(this.currentStep,10)-1,e=this.$route.path.replace(/\d+$/,t);this.$emit("emitPrev"),this.$router.push(e)},nextStep(){const t=parseInt(this.currentStep,10)+1,e=this.$route.path.replace(/\d+$/,t);this.$emit("emitNext"),!this.isChildFormValid&&this.$router.push(e)},handleSubmit(){const t=`${d}/activities`,e=this.activity;this.$http.post(t,e).then(r=>{console.log(r.data),this.nextStep(),["createTempFormData","editorValue","selectedTags"].forEach(o=>localStorage.removeItem(o))}).catch(r=>{console.log(r)})}},mounted(){var t;this.currentStep=(t=this.$route.path.match(/\d+$/))==null?void 0:t[0]}},v={class:"flex justify-between border-t pt-10"};function k(t,e,r,p,o,n){const c=h("PButton");return s(),m("div",v,[parseInt(o.currentStep)!==1?(s(),i(c,{key:0,type:"button",label:"上一步",icon:"pi pi-arrow-left",iconPos:"left",class:"w-1/4",onClick:n.prevStep},null,8,["onClick"])):a("",!0),parseInt(o.currentStep)!==4?(s(),i(c,{key:1,type:"button",label:"下一步",icon:"pi pi-arrow-right",iconPos:"right",class:"ml-auto w-1/4",onClick:n.nextStep},null,8,["onClick"])):a("",!0),parseInt(o.currentStep)===4?(s(),i(c,{key:2,type:"button",label:"確認開團",icon:"pi pi-arrow-right",iconPos:"right",class:"ml-auto w-1/4",onClick:n.handleSubmit},null,8,["onClick"])):a("",!0)])}const T=u(_,[["render",k]]);export{T as S};
