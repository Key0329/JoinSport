import{F as p}from"./FrontHeader-4cd15f33.js";import{_ as r,r as a,o as m,a as u,d as s,b as t,F as _,f}from"./index-d13cd449.js";import"./avatar01-e06217d0.js";const v={components:{FrontHeader:p},data(){return{listTypes:[{label:"熱門",icon:"pi pi-fw pi-hot",to:"/JoinList/JoinListHot"},{label:"最新",icon:"pi pi-fw pi-new",to:"/JoinList/JoinListNew"}],selectedTime:null,selectedType:null,selectedDistance:null,selectTime:[{time:"全部"},{time:"今天"},{time:"明天"},{time:"本周"},{time:"本月"}],selectType:[{type:"戶外運動"},{type:"室內運動"},{type:"場地運動"},{type:"水上運動"},{type:"球拍運動"}],selectDistance:[{distance:"全部"},{distance:"1 公里內"},{distance:"3 公里內"},{distance:"5 公里內"},{distance:"10 公里內"}]}}},w={class:"top-0 z-20 bg-white pt-[75px] sm:sticky"},y={class:"container"},h={class:"mt-5 flex w-full flex-col items-center justify-between border-b py-5 md:my-0 md:flex-row lg:py-0"},b=f('<div class="mb-6 hidden items-center gap-4 sm:flex md:mb-0 md:w-1/3" data-v-96124093><h3 data-v-96124093>Tags:</h3><ul class="flex flex-wrap items-center gap-2" data-v-96124093><li data-v-96124093><a class="tag" href="#" data-v-96124093>羽球</a></li><li data-v-96124093><a class="tag" href="#" data-v-96124093>潛水</a></li><li data-v-96124093><a class="tag" href="#" data-v-96124093>橄欖球</a></li><li data-v-96124093><a class="tag" href="#" data-v-96124093>高爾夫球</a></li><li data-v-96124093><a class="tag" href="#" data-v-96124093>攀岩</a></li></ul></div>',1),x={class:"flex flex-col items-center gap-4 sm:flex-row"};function T(V,l,g,L,e,D){const n=a("front-header"),c=a("TabMenu"),i=a("PDropdown"),d=a("router-view");return m(),u(_,null,[s(n),t("section",w,[t("div",y,[t("div",h,[s(c,{model:e.listTypes,class:"mb-6 text-3xl md:mb-0"},null,8,["model"]),b,t("ul",x,[t("li",null,[s(i,{modelValue:e.selectedTime,"onUpdate:modelValue":l[0]||(l[0]=o=>e.selectedTime=o),options:e.selectTime,optionLabel:"time",placeholder:"活動時間",class:"list-view-search"},null,8,["modelValue","options"])]),t("li",null,[s(i,{modelValue:e.selectedType,"onUpdate:modelValue":l[1]||(l[1]=o=>e.selectedType=o),options:e.selectType,optionLabel:"type",placeholder:"運動類型",class:"list-view-search"},null,8,["modelValue","options"])]),t("li",null,[s(i,{modelValue:e.selectedDistance,"onUpdate:modelValue":l[2]||(l[2]=o=>e.selectedDistance=o),options:e.selectDistance,optionLabel:"distance",placeholder:"任何距離",class:"list-view-search"},null,8,["modelValue","options"])])])])])]),s(d)],64)}const k=r(v,[["render",T],["__scopeId","data-v-96124093"]]);export{k as default};