import{I as a,J as e,S as r}from"./index-121a7c0d.js";const{VITE_URL:i}={VITE_URL:"https://joinsport-server-render.onrender.com",VITE_PATH:"key0329",VITE_TEXT:"這是產品的環境",VITE_MAP_KEY:"AIzaSyAScKOJBsEFvLrg4YGx5ticXsBzFYZPATw",VITE_MAP_URL:"https://maps.googleapis.com/maps/api/geocode/json",BASE_URL:"/JoinSport/",MODE:"production",DEV:!1,PROD:!0},n=a("sportsStore",{state:()=>({tags:[],tempDistrict:[],filteredTags:[]}),getters:{tagList(){return this.tags.map(t=>({label:t,value:t}))},randomList(){return this.tagList.sort(()=>Math.random()-.5)},taiwanCities(){return this.tempDistrict.map(t=>({name:t.name}))}},actions:{getTags(){const s=`${i}/sports`;e.get(s).then(t=>{this.tags=t.data}).catch(t=>{r.fire({position:"top-end",icon:"error",title:t.response.message,showConfirmButton:!1,timer:1500})})},getTaiwanDistrictData(){const s="https://gist.githubusercontent.com/abc873693/2804e64324eaaf26515281710e1792df/raw/a1e1fc17d04b47c564bbd9dba0d59a6a325ec7c1/taiwan_districts.json";e.get(s).then(t=>{this.tempDistrict=t.data})},searchText(s){setTimeout(()=>{this.filteredTags=this.tagList.filter(t=>t.label.toLowerCase().match(s.query.toLowerCase()))},250)}}});export{n as s};
