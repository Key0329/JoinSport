import{_ as R,r as V,x as E,o as s,a as i,b as t,E as _,F as J,D as B,B as a,e as r,y as F,G as H,w as S,C as T}from"./index-aea1ee1d.js";const z={props:{activity:{type:Object},userId:{type:String}},data(){return{isLoading:!0}},computed:{hasJoined(){var l,o;return(o=(l=this.activity)==null?void 0:l.participantsId)==null?void 0:o.includes(parseInt(this.userId,10))},isHost(){var l;return((l=this.activity)==null?void 0:l.userId)===this.userId},isCancelled(){var l;return(l=this.activity)==null?void 0:l.isCancelled}},methods:{onImageLoad(){this.isLoading=!1}}},G={class:"relative w-full sm:w-1/2"},O={key:0,class:"skeleton h-full w-full rounded-l-[10px]"},q=["src"],A={class:"absolute top-3 left-2 flex flex-col flex-wrap gap-1"},K={class:"tag py-1 text-xs hover:text-black"},M={class:"w-full rounded-b-[10px] border-x border-b px-3 pt-2 pb-3 sm:border-0"},Q={class:"flex items-center justify-between"},U={class:"mb-2 text-lg"},W={key:0,class:"flex items-center rounded-lg bg-primary-04 px-2 py-1 text-xs text-gray-600"},X=t("i",{class:"pi pi-check mr-1"},null,-1),Y={key:1,class:"flex items-center rounded-lg bg-primary-01 px-2 py-1 text-xs text-white"},Z=t("i",{class:"pi pi-user mr-1"},null,-1),$={key:2,class:"flex items-center rounded-lg bg-red-400 px-2 py-1 text-xs text-white"},tt=t("i",{class:"pi pi-user mr-1"},null,-1),et={class:"mb-4 text-sm text-[#6f6f6f]"},st={class:"mb-2 flex flex-col gap-2 md:flex-row"},it={class:"flex items-center rounded-full bg-primary-03 py-1 px-2 text-sm text-[#3D3D3D]"},at=t("span",{class:"material-icons text-primary-01"}," room ",-1),lt={class:"flex items-center rounded-full bg-primary-03 py-1 px-2 text-sm text-[#3D3D3D]"},ct=t("span",{class:"material-icons mr-1 text-primary-01"}," schedule ",-1),nt={class:"flex flex-col md:flex-row md:items-end"},rt={class:"mb-2 md:mb-0"},ot={class:"my-3 flex -space-x-2 overflow-hidden"},dt=["src"],_t={key:0},mt={class:"flex h-9 w-9 items-center justify-center rounded-full bg-gray-400 text-white ring-2 ring-white"},ut={class:"mr-2 text-sm"},xt={class:"text-sm text-red-500"};function ht(l,o,e,yt,N,c){var m,u,x,h,y,p,f,v,g,b,w,k,D,C,I,L;const P=V("RouterLink"),j=E("ripple");return s(),i("div",{class:T(["group flex h-full flex-col gap-4 rounded-[10px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] sm:flex-row",{"opacity-50":c.isCancelled}])},[t("div",G,[N.isLoading?(s(),i("div",O)):_("",!0),t("img",{onLoad:o[0]||(o[0]=(...n)=>c.onImageLoad&&c.onImageLoad(...n)),class:"h-full rounded-l-[10px]",src:(m=e.activity)==null?void 0:m.mainImg,alt:"card-img-01"},null,40,q),t("ul",A,[(s(!0),i(J,null,B((u=e.activity)==null?void 0:u.tags,(n,d)=>(s(),i("li",{key:n+d},[t("span",K,a(n),1)]))),128))])]),t("div",M,[t("div",Q,[t("h5",U,a((x=e.activity)==null?void 0:x.title),1),c.hasJoined?(s(),i("div",W,[X,r("已參加揪團 ")])):c.isHost?(s(),i("div",Y,[Z,r("您是主辦者 ")])):c.isCancelled?(s(),i("div",$,[tt,r("此揪團已取消 ")])):_("",!0)]),t("p",et,a((h=e.activity)==null?void 0:h.description),1),t("div",st,[t("p",it,[at,r(a((y=e.activity)==null?void 0:y.city)+a((p=e.activity)==null?void 0:p.district),1)]),t("p",lt,[ct,r(a((f=e.activity)==null?void 0:f.date)+" "+a((g=(v=e.activity)==null?void 0:v.startTime)==null?void 0:g.time),1)])]),t("div",nt,[t("div",rt,[t("ul",ot,[(s(!0),i(J,null,B((b=e.activity)==null?void 0:b.participants,(n,d)=>(s(),i("li",{key:"participant"+d},[t("img",{class:"inline-block h-9 w-9 rounded-full ring-2 ring-white",src:n,alt:"avatar01"},null,8,dt)]))),128)),((w=e.activity)==null?void 0:w.numParticipants)>3?(s(),i("li",_t,[t("div",mt," +"+a(((k=e.activity)==null?void 0:k.numParticipants)-3),1)])):_("",!0)]),t("div",null,[t("span",ut,a((D=e.activity)==null?void 0:D.numParticipants)+" 位已參加揪團",1),t("span",xt,"剩餘 "+a(((C=e.activity)==null?void 0:C.maxJoinNum)-((I=e.activity)==null?void 0:I.numParticipants))+" 空位",1)])]),F((s(),H(P,{to:`/JoinDetail/id=${(L=e.activity)==null?void 0:L.id}`,class:"btn-primary btn p-ripple p-2 group-hover:bg-secondary-yellow group-hover:text-[#3D3D3D] sm:w-1/4 md:ml-auto"},{default:S(()=>[r("查看詳情")]),_:1},8,["to"])),[[j]])])])],2)}const ft=R(z,[["render",ht]]);export{ft as J};