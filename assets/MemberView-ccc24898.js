import{F as z}from"./FrontHeader-ca8b03bd.js";import{s as E,t as A,_ as C,u as R,r as h,o as x,a as D,b as o,d as m,B as g,F as j,A as W,w as y,e as w,H as J}from"./index-fd707684.js";import{m as H}from"./memberStore-6a732213.js";import{j as $}from"./joinActivitiesStore-9bff944d.js";import{c as U,D as q,m as L,g as T,v as c,S as Y,V as K,C as F,s as X,i as Q,f as V,a as Z,b as ee,N as te,d as se,e as N,B,h as ae,j as P,k as re,l as G,E as ne,n as ie,o as oe,p as M,q as le,r as de,t as I,F as ce,u as ue}from"./zh-tw-5718cbf5.js";import{_ as fe}from"./group03-b38e3255.js";import"./searchStore-b234accf.js";const me={name:"MemberPanel",data(){return{userId:null}},computed:{...E(H,["user"])},methods:{...A(R,["getUserId"]),...A(H,["getMemberData"])},mounted(){this.userId=this.getUserId(),this.getMemberData(this.userId)}},he={class:"rounded-lg bg-primary-03 px-10 py-6"},pe={class:"mb-8 flex items-center gap-6"},ve={class:"text-xl"},ge={class:"text-sm"},_e={class:"flex flex-wrap gap-2"},ye=o("i",{class:"pi pi-tag mr-1"},null,-1);function xe(t,e,s,a,i,r){const n=h("PAvatar"),l=h("RouterLink");return x(),D("div",he,[o("div",pe,[m(n,{image:t.user.img,size:"xlarge",shape:"circle",class:"ring-2 ring-white"},null,8,["image"]),o("div",null,[o("h3",ve,g(t.user.name),1),o("span",ge,g(t.user.email),1)])]),o("ul",_e,[(x(!0),D(j,null,W(t.user.favoriteSports,d=>(x(),D("li",{key:"tag"+d},[m(l,{to:`/joinList/search/text=${d}&area=0&date=0&page=1`,class:"tag flex items-center"},{default:y(()=>[ye,w(" "+g(d),1)]),_:2},1032,["to"])]))),128))])])}const be=C(me,[["render",xe]]),we={data(){return{items:[{label:"我的揪團",icon:"pi pi-fw pi-calendar",items:[{label:"我參加的揪團",icon:"pi pi-fw pi-users",to:"/Member/List"},{label:"我主持的揪團",icon:"pi pi-fw pi-key",to:"/Member/Host"},{label:"已收藏的揪團",icon:"pi pi-fw pi-heart",to:"/Member/Collection"}]},{label:"我的資訊",icon:"pi pi-fw pi-user",items:[{label:"個人資訊",icon:"pi pi-fw pi-align-left",to:"/Member/Info"},{label:"個人標籤",icon:"pi pi-fw pi-id-card",to:"/Member/Tags"}]}]}}};function De(t,e,s,a,i,r){const n=h("PanelMenu",!0);return x(),J(n,{model:i.items},null,8,["model"])}const Ae=C(we,[["render",De]]);class Se extends B{constructor(){super(...arguments),this.state={textId:T()}}render(){let{theme:e,dateEnv:s,options:a,viewApi:i}=this.context,{cellId:r,dayDate:n,todayRange:l}=this.props,{textId:d}=this.state,u=ae(n,l),f=a.listDayFormat?s.format(n,a.listDayFormat):"",p=a.listDaySideFormat?s.format(n,a.listDaySideFormat):"",v=Object.assign({date:s.toDate(n),view:i,textId:d,text:f,sideText:p,navLinkAttrs:P(this.context,n),sideNavLinkAttrs:P(this.context,n,"day",!1)},u);return c(F,{elTag:"tr",elClasses:["fc-list-day",...re(u,e)],elAttrs:{"data-date":V(n)},renderProps:v,generatorName:"dayHeaderContent",customGenerator:a.dayHeaderContent,defaultGenerator:Ce,classNameGenerator:a.dayHeaderClassNames,didMount:a.dayHeaderDidMount,willUnmount:a.dayHeaderWillUnmount},_=>c("th",{scope:"colgroup",colSpan:3,id:r,"aria-labelledby":d},c(_,{elTag:"div",elClasses:["fc-list-day-cushion",e.getClass("tableCellShaded")]})))}}function Ce(t){return c(G,null,t.text&&c("a",Object.assign({id:t.textId,className:"fc-list-day-text"},t.navLinkAttrs),t.text),t.sideText&&c("a",Object.assign({"aria-hidden":!0,className:"fc-list-day-side-text"},t.sideNavLinkAttrs),t.sideText))}const Ie=U({hour:"numeric",minute:"2-digit",meridiem:"short"});class Te extends B{render(){let{props:e,context:s}=this,{options:a}=s,{seg:i,timeHeaderId:r,eventHeaderId:n,dateHeaderId:l}=e,d=a.eventTimeFormat||Ie;return c(ne,Object.assign({},e,{elTag:"tr",elClasses:["fc-list-event",i.eventRange.def.url&&"fc-event-forced-url"],defaultGenerator:()=>$e(i,s),seg:i,timeText:"",disableDragging:!0,disableResizing:!0}),(u,f)=>c(G,null,ke(i,d,s,r,l),c("td",{"aria-hidden":!0,className:"fc-list-event-graphic"},c("span",{className:"fc-list-event-dot",style:{borderColor:f.borderColor||f.backgroundColor}})),c(u,{elTag:"td",elClasses:["fc-list-event-title"],elAttrs:{headers:`${n} ${l}`}})))}}function $e(t,e){let s=ie(t,e);return c("a",Object.assign({},s),t.eventRange.def.title)}function ke(t,e,s,a,i){let{options:r}=s;if(r.displayEventTime!==!1){let n=t.eventRange.def,l=t.eventRange.instance,d=!1,u;if(n.allDay?d=!0:oe(t.eventRange.range)?t.isStart?u=M(t,e,s,null,null,l.range.start,t.end):t.isEnd?u=M(t,e,s,null,null,t.start,l.range.end):d=!0:u=M(t,e,s),d){let f={text:s.options.allDayText,view:s.viewApi};return c(F,{elTag:"td",elClasses:["fc-list-event-time"],elAttrs:{headers:`${a} ${i}`},renderProps:f,generatorName:"allDayContent",customGenerator:r.allDayContent,defaultGenerator:Me,classNameGenerator:r.allDayClassNames,didMount:r.allDayDidMount,willUnmount:r.allDayWillUnmount})}return c("td",{className:"fc-list-event-time"},u)}return null}function Me(t){return t.text}class Ee extends q{constructor(){super(...arguments),this.computeDateVars=L(Fe),this.eventStoreToSegs=L(this._eventStoreToSegs),this.state={timeHeaderId:T(),eventHeaderId:T(),dateHeaderIdRoot:T()},this.setRootEl=e=>{e?this.context.registerInteractiveComponent(this,{el:e}):this.context.unregisterInteractiveComponent(this)}}render(){let{props:e,context:s}=this,{dayDates:a,dayRanges:i}=this.computeDateVars(e.dateProfile),r=this.eventStoreToSegs(e.eventStore,e.eventUiBases,i);return c(K,{elRef:this.setRootEl,elClasses:["fc-list",s.theme.getClass("table"),s.options.stickyHeaderDates!==!1?"fc-list-sticky":""],viewSpec:s.viewSpec},c(Y,{liquid:!e.isHeightAuto,overflowX:e.isHeightAuto?"visible":"hidden",overflowY:e.isHeightAuto?"visible":"auto"},r.length>0?this.renderSegList(r,a):this.renderEmptyMessage()))}renderEmptyMessage(){let{options:e,viewApi:s}=this.context,a={text:e.noEventsText,view:s};return c(F,{elTag:"div",elClasses:["fc-list-empty"],renderProps:a,generatorName:"noEventsContent",customGenerator:e.noEventsContent,defaultGenerator:Re,classNameGenerator:e.noEventsClassNames,didMount:e.noEventsDidMount,willUnmount:e.noEventsWillUnmount},i=>c(i,{elTag:"div",elClasses:["fc-list-empty-cushion"]}))}renderSegList(e,s){let{theme:a,options:i}=this.context,{timeHeaderId:r,eventHeaderId:n,dateHeaderIdRoot:l}=this.state,d=He(e);return c(te,{unit:"day"},(u,f)=>{let p=[];for(let v=0;v<d.length;v+=1){let _=d[v];if(_){let b=V(s[v]),S=l+"-"+b;p.push(c(Se,{key:b,cellId:S,dayDate:s[v],todayRange:f})),_=Z(_,i.eventOrder);for(let k of _)p.push(c(Te,Object.assign({key:b+":"+k.eventRange.instance.instanceId,seg:k,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,timeHeaderId:r,eventHeaderId:n,dateHeaderId:S},ee(k,f,u))))}}return c("table",{className:"fc-list-table "+a.getClass("table")},c("thead",null,c("tr",null,c("th",{scope:"col",id:r},i.timeHint),c("th",{scope:"col","aria-hidden":!0}),c("th",{scope:"col",id:n},i.eventHint))),c("tbody",null,p))})}_eventStoreToSegs(e,s,a){return this.eventRangesToSegs(X(e,s,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,a)}eventRangesToSegs(e,s){let a=[];for(let i of e)a.push(...this.eventRangeToSegs(i,s));return a}eventRangeToSegs(e,s){let{dateEnv:a}=this.context,{nextDayThreshold:i}=this.context.options,r=e.range,n=e.def.allDay,l,d,u,f=[];for(l=0;l<s.length;l+=1)if(d=Q(r,s[l]),d&&(u={component:this,eventRange:e,start:d.start,end:d.end,isStart:e.isStart&&d.start.valueOf()===r.start.valueOf(),isEnd:e.isEnd&&d.end.valueOf()===r.end.valueOf(),dayIndex:l},f.push(u),!u.isEnd&&!n&&l+1<s.length&&r.end<a.add(s[l+1].start,i))){u.end=r.end,u.isEnd=!0;break}return f}}function Re(t){return t.text}function Fe(t){let e=se(t.renderRange.start),s=t.renderRange.end,a=[],i=[];for(;e<s;)a.push(e),i.push({start:e,end:N(e,1)}),e=N(e,1);return{dayDates:a,dayRanges:i}}function He(t){let e=[],s,a;for(s=0;s<t.length;s+=1)a=t[s],(e[a.dayIndex]||(e[a.dayIndex]=[])).push(a);return e}const Le={listDayFormat:O,listDaySideFormat:O,noEventsClassNames:I,noEventsContent:I,noEventsDidMount:I,noEventsWillUnmount:I};function O(t){return t===!1?null:U(t)}var Ne=':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}';le(Ne);var Pe=de({name:"@fullcalendar/list",optionRefiners:Le,views:{list:{component:Ee,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDaySideFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDaySideFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDaySideFormat:{weekday:"long"}}}});const Oe={name:"FullCalendarList",components:{FullCalendar:ce},data(){return{calendarOptions:{plugins:[Pe],initialView:"listWeek",weekends:!0,locale:ue,headerToolbar:{left:"",center:"",right:""},eventDidMount:t=>{if(t.event.extendedProps.status==="done"){const e=t.el.style;e.backgroundColor="#faede2",e.textDecoration="line-through";const s=t.el.getElementsByClassName("fc-list-event-dot")[0];s&&(s.style.borderColor="#f1675d")}},eventClick:t=>{this.$router.push(`/JoinDetail/id=${t.event.id}`)},events:[{title:"開會",start:new Date},{title:"打球",start:"2023-03-15T14:30:00",extendedProps:{status:"done"}}],editable:!0}}},computed:{...E($,["restructureActivitiesList"]),getMemberEvent(){const t=parseInt(this.getUserId(),10);return this.restructureActivitiesList.filter(a=>a.participantsId.includes(t)).map(a=>{var d;const r=`${new Date(a.originDate).toISOString().split("T")[0]}T${(d=a.startTime)==null?void 0:d.time}:00`,n=new Date(r).getTime()-new Date().getTime()<0?"done":"";return{title:a.title,id:a.id,start:r,borderColor:"#36D488",extendedProps:{status:n}}})}},methods:{...A($,["getActivities","getOrders"]),...A(R,["getUserId"])},watch:{getMemberEvent(t){this.calendarOptions.events=t}},mounted(){this.getActivities(),this.getOrders()}},je={class:"my-6"},Ue=o("h3",{class:"text-lg"},"本周活動",-1),Ve=o("i",{class:"pi pi-arrow-up-right ml-1"},null,-1);function Be(t,e,s,a,i,r){const n=h("FullCalendar"),l=h("RouterLink");return x(),D("div",je,[Ue,m(n,{options:i.calendarOptions},null,8,["options"]),m(l,{to:"/Member/Calendar",class:"mt-1 flex items-center justify-end hover:text-primary-01"},{default:y(()=>[w("詳細月曆"),Ve]),_:1})])}const Ge=C(Oe,[["render",Be]]),ze="/JoinSport/assets/group04-2b843bd7.png",We="/JoinSport/assets/group05-fa5823cb.png",Je={name:"ActivityPanel",computed:{...E($,["availableActivities"]),filteredArray(){const t=parseInt(this.getUserId(),10);return this.availableActivities.filter(s=>s.participantsId.includes(t))},nextActivity(){return this.filteredArray.map(s=>{var n,l;const a=(n=s.date)==null?void 0:n.split("/")[0],i=(l=s.date)==null?void 0:l.split("/")[1];return{...s,month:parseInt(a,10),day:parseInt(i,10)}}).sort((s,a)=>s.originTime-a.originTime).slice(0,1)}},methods:{...A($,["getActivities","getOrders"]),...A(R,["getUserId"])},mounted(){this.getActivities(),this.getOrders(),this.getUserId()}},qe={class:"flex flex-col gap-8 rounded-lg bg-primary-03 p-6"},Ye={class:"mb-4 flex items-center justify-between"},Ke=o("h5",null,"下一個活動",-1),Xe={class:"relative flex w-full items-center py-4 pl-4 sm:w-1/2"},Qe=["src"],Ze={class:"w-full rounded-b-[10px] border-x border-b px-2 pt-2 pb-3 sm:border-0"},et={class:"mb-2 group-hover:text-primary-01"},tt={class:"flex items-center text-sm text-[#3D3D3D]"},st=o("span",{class:"material-icons mr-1 text-primary-01"}," room ",-1),at={class:"mb-1 flex items-center text-sm text-[#3D3D3D]"},rt=o("span",{class:"material-icons mr-1 text-primary-01"}," schedule ",-1),nt={class:"text-end text-xs"},it={class:"mb-4 flex items-center justify-between"},ot=o("h5",null,"我關注的運動",-1),lt={class:"grid grid-cols-3 gap-4 rounded-[10px] bg-white p-4 shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)]"},dt=o("img",{class:"h-full w-full rounded-lg",src:fe,alt:"favoriteSport"},null,-1),ct=o("img",{class:"h-full w-full rounded-lg",src:ze,alt:"favoriteSport"},null,-1),ut=o("img",{class:"h-full w-full rounded-lg",src:We,alt:"favoriteSport"},null,-1);function ft(t,e,s,a,i,r){var l;const n=h("RouterLink");return x(),D("div",qe,[o("div",null,[o("div",Ye,[Ke,m(n,{to:"/Member/List",class:"text-sm text-[#3d3d3d] hover:text-primary-01"},{default:y(()=>[w("所有參加的活動")]),_:1})]),m(n,{to:`/JoinDetail/id=${(l=r.nextActivity[0])==null?void 0:l.id}`,class:"group flex flex-col rounded-[10px] bg-white shadow-[0_0_4px_rgba(0,0,0,0.3)] transition-all duration-100 ease-in-out hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] sm:flex-row"},{default:y(()=>{var d,u,f,p,v,_,b,S;return[o("div",Xe,[o("img",{class:"h-full rounded",src:(d=r.nextActivity[0])==null?void 0:d.mainImg,alt:"card-img-01"},null,8,Qe)]),o("div",Ze,[o("h5",et,g((u=r.nextActivity[0])==null?void 0:u.title),1),o("p",tt,[st,w(g((f=r.nextActivity[0])==null?void 0:f.city)+g((p=r.nextActivity[0])==null?void 0:p.district),1)]),o("p",at,[rt,w(g((v=r.nextActivity[0])==null?void 0:v.month)+"/"+g((_=r.nextActivity[0])==null?void 0:_.day)+" "+g((b=r.nextActivity[0])==null?void 0:b.startTime.time),1)]),o("p",nt,g((S=r.nextActivity[0])==null?void 0:S.participantsId.length)+" 位參加者 ",1)])]}),_:1},8,["to"])]),o("div",null,[o("div",it,[ot,m(n,{to:"/JoinList/Hot/1",class:"text-sm text-[#3d3d3d] hover:text-primary-01"},{default:y(()=>[w("探索更多運動")]),_:1})]),o("div",lt,[m(n,{to:"/joinList/search/text=健身&area=0&date=0&page=1",href:"#",class:"relative col-span-1 h-[100px] hover:opacity-80 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:text-xl hover:after:text-white hover:after:content-['健身']"},{default:y(()=>[dt]),_:1}),m(n,{to:"/joinList/search/text=潛水&area=0&date=0&page=1",href:"#",class:"relative col-span-1 h-[100px] hover:opacity-80 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:text-xl hover:after:text-white hover:after:content-['潛水']"},{default:y(()=>[ct]),_:1}),m(n,{to:"/joinList/search/text=籃球&area=0&date=0&page=1",href:"#",class:"relative col-span-1 h-[100px] hover:opacity-80 hover:after:absolute hover:after:left-1/2 hover:after:top-1/2 hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:text-xl hover:after:text-white hover:after:content-['籃球']"},{default:y(()=>[ut]),_:1})])])])}const mt=C(Je,[["render",ft]]);const ht={name:"MemberView",components:{FrontHeader:z,MemberPanel:be,PanelMenu:Ae,FullCalendarList:Ge,ActivityPanel:mt},data(){return{}}},pt={class:"pb-20 pt-[120px]"},vt={class:"container"},gt={class:"grid grid-cols-12"},_t={class:"col-span-4"},yt={class:"flex flex-col gap-4"},xt={class:"col-span-7 col-end-13"};function bt(t,e,s,a,i,r){const n=h("FrontHeader"),l=h("MemberPanel"),d=h("PanelMenu"),u=h("ActivityPanel"),f=h("FullCalendarList"),p=h("RouterView");return x(),D(j,null,[m(n),o("main",pt,[o("div",vt,[o("div",gt,[o("div",_t,[o("div",yt,[m(l),m(d),m(u),m(f)])]),o("div",xt,[m(p)])])])])],64)}const $t=C(ht,[["render",bt],["__scopeId","data-v-75170f6f"]]);export{$t as default};
