import{s as p,_ as u,t as m,r as f,o as l,a as i,b as e,d as r,w as o,e as n,J as a,u as h,f as d}from"./index-1031d0a2.js";import{_ as x}from"./avatar01-e06217d0.js";const b={methods:{...p(m,["getToken","logOut"])}},y={class:"fixed z-30 w-full bg-white"},v={class:"flex justify-between border-b px-4 py-3 md:py-4"},_=d('<div class="md:flex"><h2 class="mr-8"><a class="h-10 w-[163px] overflow-hidden whitespace-nowrap bg-[url(&#39;./images/logo/JoinSport01.png&#39;)] bg-cover bg-no-repeat indent-[101%] hover:opacity-75" href="#">Join Sport 揪運動</a></h2><div class="hidden md:flex"><div class="flex w-[200px] items-center rounded-l-lg border border-r-0 border-[#B7B7B7] py-2"><span class="material-icons pointer-events-none ml-2 mr-2 text-primary-01"> search </span><input class="w-full bg-transparent text-sm focus:outline-none" type="text" placeholder="搜尋 ＂爬山＂"></div><div class="flex w-[200px] items-center border border-r-0 border-[#B7B7B7] py-2"><span class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"> room </span><input class="w-full bg-transparent text-sm focus:outline-none" type="text" placeholder="地區"></div><button type="button" class="btn btn-primary rounded-l-none rounded-r-lg px-4"> 搜尋 </button></div></div>',1),g={key:0,class:"hidden items-center gap-10 md:flex"},w={key:1,class:"hidden items-center gap-10 md:flex"},B=e("li",null,[e("img",{src:x,alt:"member-avatar",class:"h-10 w-10 rounded-full object-cover"})],-1),$=e("a",{href:"#",class:"flex items-center md:hidden"},[e("span",{class:"material-icons"}," menu ")],-1),J=d('<div class="flex md:hidden"><div class="flex w-full items-center border border-r-0 border-[#B7B7B7] py-2"><span class="material-icons pointer-events-none ml-2 mr-2 text-primary-01"> search </span><input class="w-full bg-transparent text-sm focus:outline-none" type="text" placeholder="搜尋 ＂爬山＂"></div><div class="hidden w-full items-center border border-r-0 border-[#B7B7B7] py-2 sm:flex"><span class="material-icons pointer-events-none ml-5 mr-3 text-primary-01"> room </span><input class="w-full bg-transparent text-sm focus:outline-none" type="text" placeholder="地區"></div><button type="button" class="btn btn-primary w-1/2 rounded-none px-4"> 搜尋 </button></div>',1);function k(t,c,C,L,H,M){const s=f("router-link");return l(),i("header",y,[e("nav",v,[_,t.getToken()?(l(),i("ul",w,[e("li",null,[r(s,{class:a(["hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/JoinList/Hot")}]),to:"/JoinList/Hot/1"},{default:o(()=>[n("揪團列表")]),_:1},8,["class"])]),e("li",null,[r(s,{class:a(["hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/CreateJoin")}]),to:"/CreateJoin/step1"},{default:o(()=>[n("我要開團")]),_:1},8,["class"])]),e("li",null,[r(s,{class:a(["hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/Member/List")}]),to:"/Member/List"},{default:o(()=>[n("我的揪團")]),_:1},8,["class"])]),e("li",null,[r(s,{class:a(["hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/Member/Info")}]),to:"/Member/Info"},{default:o(()=>[n("會員資料")]),_:1},8,["class"])]),e("li",null,[e("a",{href:"#",onClick:c[0]||(c[0]=h(N=>t.logOut(this.$router),["prevent"])),class:"transition-colors hover:text-primary-01 focus:text-secondary-blue",to:"/login"},"登出")]),B])):(l(),i("ul",g,[e("li",null,[r(s,{class:a(["transition-colors hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/JoinList/Hot")}]),to:"/JoinList/Hot/1"},{default:o(()=>[n("揪團列表")]),_:1},8,["class"])]),e("li",null,[r(s,{class:a(["hover:text-primary-01 focus:text-secondary-blue",{"text-primary-01":t.$route.path.includes("/CreateJoin")}]),to:"/CreateJoin/step1"},{default:o(()=>[n("我要開團")]),_:1},8,["class"])]),e("li",null,[r(s,{class:"transition-colors hover:text-primary-01 focus:text-secondary-blue",to:"/login"},{default:o(()=>[n("登入 / 註冊")]),_:1})])])),$]),J])}const T=u(b,[["render",k]]);export{T as F};
