import{_ as v,o as i,a as d,f as B,s as b,t as g,u as x,r as h,b as e,v as f,z as S,d as o,w as a,e as l,G as u,x as T,D as k,E as J}from"./index-0bad7370.js";import{s as _}from"./searchStore-a1ba9f66.js";const L={},H={class:"flex md:hidden"},M=B('<div class="flex w-full items-center border border-r-0 border-[#B7B7B7] py-2"><span class="material-icons pointer-events-none ml-2 mr-2 text-primary-01"> search </span><input class="w-full bg-transparent text-sm focus:outline-none" type="text" placeholder="搜尋 ＂爬山＂"></div><div class="hidden w-full items-center border border-r-0 border-[#B7B7B7] py-2 sm:flex"><span class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"> room </span><input class="w-full bg-transparent text-sm focus:outline-none" type="text" placeholder="地區"></div><button type="button" class="btn btn-primary w-1/2 rounded-none px-4"> 搜尋 </button>',3),$=[M];function I(t,s){return i(),d("div",H,$)}const A=v(L,[["render",I]]);const D={name:"FrontHeader",components:{FrontHeaderMobileSearchBar:A},data(){return{searchTagsValue:"",searchAreaValue:"",isOpened:!1}},computed:{...b(_,["tags","randomList","taiwanCities","filteredTags"]),...b(x,["user"])},methods:{...g(x,["getUserId","getUser","getToken","logOut"]),...g(_,["getTags","getTaiwanDistrictData","searchText"]),handleSubmit(){let t=this.searchTagsValue;typeof t!="string"&&(t=this.searchTagsValue.value);const s=this.searchAreaValue;if(t||s){const y=`/joinList/search/text=${t||0}&area=${s.name||0}&date=0&page=1`;this.$router.push(y)}else this.$router.push("/joinList/Hot/1")},toggleMenu(){this.isOpened=!this.isOpened}},mounted(){this.getTags(),this.getTaiwanDistrictData(),this.getUser(this.getUserId())}},m=t=>(k("data-v-4346606a"),t=t(),J(),t),F={class:"fixed z-30 w-full bg-white"},O={class:"flex justify-between border-b px-4 py-3 md:py-4"},U={class:"md:flex"},N=m(()=>e("h2",{class:"mr-4 lg:mr-8"},[e("a",{class:"h-10 w-[163px] overflow-hidden whitespace-nowrap bg-[url('./images/logo/JoinSport01.png')] bg-cover bg-no-repeat indent-[101%] hover:opacity-75",href:"#"},"Join Sport 揪運動")],-1)),j={class:"flex w-[136px] items-center rounded-l-lg border border-r-0 border-[#B7B7B7] py-2 lg:w-[200px]"},z=m(()=>e("span",{class:"material-icons pointer-events-none ml-1 mr-1 text-primary-01 lg:mr-2"}," search ",-1)),E={class:"flex w-[136px] items-center border border-r-0 border-[#B7B7B7] py-2 lg:w-[200px]"},K=m(()=>e("span",{class:"material-icons pointer-events-none ml-1 mr-1 text-primary-01 lg:mr-3 lg:ml-5"}," room ",-1)),P=m(()=>e("button",{type:"submit",class:"btn btn-primary rounded-l-none rounded-r-lg px-2 lg:px-4"}," 搜尋 ",-1)),G={key:0,class:"hidden items-center gap-4 md:flex lg:gap-10"},q={key:1,class:"hidden items-center gap-4 md:flex lg:gap-10"},Q=["src"],R=m(()=>e("span",{class:"material-icons"}," menu ",-1)),W=[R],X={key:0},Y={key:0,class:"text-center"},Z={key:1,class:"text-center"};function ee(t,s,y,te,p,c){const w=h("AutoComplete"),V=h("PDropdown"),r=h("router-link"),C=h("FrontHeaderMobileSearchBar");return i(),d("header",F,[e("nav",O,[e("div",U,[N,e("form",{onSubmit:s[2]||(s[2]=f((...n)=>c.handleSubmit&&c.handleSubmit(...n),["prevent"])),onKeyup:s[3]||(s[3]=S((...n)=>c.handleSubmit&&c.handleSubmit(...n),["enter"])),class:"hidden md:flex"},[e("div",j,[z,o(w,{modelValue:p.searchTagsValue,"onUpdate:modelValue":s[0]||(s[0]=n=>p.searchTagsValue=n),suggestions:t.filteredTags,onComplete:t.searchText,optionLabel:"label",loadingIcon:"false",placeholder:"搜尋 ＂爬山＂",class:"w-full"},null,8,["modelValue","suggestions","onComplete"])]),e("div",E,[K,o(V,{id:"city",modelValue:p.searchAreaValue,"onUpdate:modelValue":s[1]||(s[1]=n=>p.searchAreaValue=n),optionLabel:"name",placeholder:"選擇縣市",options:t.taiwanCities,class:"w-full"},null,8,["modelValue","options"])]),P],32)]),t.getToken()?(i(),d("ul",q,[e("li",null,[o(r,{class:u(["hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/JoinList/Hot")}]),to:"/JoinList/Hot/1"},{default:a(()=>[l("揪團列表")]),_:1},8,["class"])]),e("li",null,[o(r,{class:u(["hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/CreateJoin")}]),to:"/CreateJoin/step1"},{default:a(()=>[l("我要開團")]),_:1},8,["class"])]),e("li",null,[o(r,{class:u(["hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/Member/List")}]),to:"/Member/List"},{default:a(()=>[l("我的揪團")]),_:1},8,["class"])]),e("li",null,[o(r,{class:u(["hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/Member/Info")}]),to:"/Member/Info"},{default:a(()=>[l("會員資料")]),_:1},8,["class"])]),e("li",null,[e("a",{href:"#",onClick:s[4]||(s[4]=f(n=>t.logOut(this.$router),["prevent"])),class:"transition-colors hover:text-primary-01 focus:text-secondary-blue",to:"/login"},"登出")]),e("li",null,[e("img",{src:t.user.img,alt:"member-avatar",class:"h-10 w-10 rounded-full object-cover"},null,8,Q)])])):(i(),d("ul",G,[e("li",null,[o(r,{class:u(["transition-colors hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/JoinList/Hot")}]),to:"/JoinList/Hot/1"},{default:a(()=>[l("揪團列表")]),_:1},8,["class"])]),e("li",null,[o(r,{class:u(["hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/CreateJoin")}]),to:"/CreateJoin/step1"},{default:a(()=>[l("我要開團")]),_:1},8,["class"])]),e("li",null,[o(r,{class:"transition-colors hover:text-primary-01 focus:text-secondary-blue",to:"/login"},{default:a(()=>[l("登入 / 註冊")]),_:1})])])),e("button",{onClick:s[5]||(s[5]=(...n)=>c.toggleMenu&&c.toggleMenu(...n)),type:"button",class:"flex items-center md:hidden"},W)]),o(C),p.isOpened?(i(),d("nav",X,[t.getToken()?(i(),d("ul",Z,[e("li",null,[o(r,{class:"py-4 hover:text-primary-01 focus:text-secondary-blue",to:"/JoinList/Hot/1"},{default:a(()=>[l("揪團列表")]),_:1})]),e("li",null,[o(r,{class:"border-t py-4 hover:text-primary-01 focus:text-secondary-blue",to:"/CreateJoin/step1"},{default:a(()=>[l("我要開團")]),_:1})]),e("li",null,[o(r,{class:"border-t py-4 hover:text-primary-01 focus:text-secondary-blue",to:"/Member/List"},{default:a(()=>[l("我的揪團")]),_:1})]),e("li",null,[o(r,{class:"border-t py-4 hover:text-primary-01 focus:text-secondary-blue",to:"/Member/Info"},{default:a(()=>[l("會員資料")]),_:1})]),e("li",null,[e("a",{href:"#",onClick:s[6]||(s[6]=f(n=>t.logOut(this.$router),["prevent"])),class:"border-y py-4 transition-colors hover:text-primary-01 focus:text-secondary-blue",to:"/login"},"登出")])])):(i(),d("ul",Y,[e("li",null,[o(r,{class:"py-4 transition-colors hover:text-primary-01 focus:text-secondary-blue",to:"/JoinList/Hot/1"},{default:a(()=>[l("揪團列表")]),_:1})]),e("li",null,[o(r,{class:"border-t py-4 hover:text-primary-01 focus:text-secondary-blue",to:"/CreateJoin/step1"},{default:a(()=>[l("我要開團")]),_:1})]),e("li",null,[o(r,{class:"border-y py-4 transition-colors hover:text-primary-01 focus:text-secondary-blue",to:"/login"},{default:a(()=>[l("登入 / 註冊")]),_:1})])]))])):T("",!0)])}const re=v(D,[["render",ee],["__scopeId","data-v-4346606a"]]);export{re as F};