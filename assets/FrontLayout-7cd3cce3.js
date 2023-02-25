import{_ as i,r as l,o as a,a as r,b as A,d as e,w as s,e as o,f,R as w,F as u}from"./index-d13cd449.js";const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHiSURBVHgBtVXtUcJAEH134Iz+ccjYQOwAKgAqEGzAdKBWIFQAVgA2gLECoQJiBWIF4F9HL+7mLiGEXIgCb+aG3C73dm+/TqAAy069Bok7CDQRwiWRa1QrkgUS8NUPXhw/WNg4hIXYJeIBfXZQDmMo9PMMiRxyz5DX8DesaPWdSTBMC+UG+XW9R5LRP8hhzgwijhREityjnxHKYUE5WSTEAvW0sqLgnfvBU2LAxHyOXZ6HCOiI5zzP39Jico4d81KiFeWkwTnRIZJ4KEHOXrez5BbUDCeE8f595xG6tmOunXjOZcxkFSqKMKfiFJwqKa9IWQabYenWhxTg22hjO1/BDYeoVK2fSrHE2nM3IS+CQkeaDj0OBFy+gYvjwZWF6lC0yA2X19lk/hGL9UjQcr2SntiCoBrm2OaW6GmGOA9mIC4t6pXUzbMHTgpCTNxVSsSUPlt5+i8RduiGn9FGwafQ8ECLvdbV901jQlgMCDagMIMlEypEMhmpTF+hJyaDQzoyJHYoPEryakpXmeLw8NezKMQ9Dg2lOSMDZClQOKARhV78uiXRv+CXiBTYF5q8H2830hsp9jGSId8ykDLSRkF3boGLhLo+S86o5v0/qizgctltNCFCD/l9sqDFxGN6hGaw4BfYfq/yknWafQAAAABJRU5ErkJggg==",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG5SURBVHgB5VXbccIwEFw5FACTFEAHcQnQAZD8AxWEVABUEKgg0AA4FUAqwB1gKjCT7yBlJTDI2GAH+MlkZwRn3+n2HtIZ+OsQuABhzS3CQYdik6vMtebyINEveX5gbJ7dCr4RGIKw4b5ROabSz+G8TOezneM4FAKG7HG5lNeliV+PCEJjIFEnyfwsQcN951/rnA2d+3cKAy1GBMpS98ncw+nol8gDnY1C1dk9BpaqG9bd5VfNbSY23TH1fM597Vz3o7B7NeLq7Q0EyhuBEYl6pqYOPtiwzP5Y+73SdNvsbQYSw6Ms9kT87VA/o2XIqKb4JZydo4XuOm4Fdcj20AORs775CFZxAoU+bgWeHvs+GQJz9qXV5GsgMLcfHUse8qlq1+8iyHg1CkfKKSMo4nKMolkUYZ8BFWuJK3qhb65M7rdLhPuJP9gAbaTdiQxsFF6Po9c4Oa7DJ/eFUfUoZpdMokXn4zRVgsDMcYUuVwXZWG8k2g+e750yEMahNB8OfdHKuSLWUDyOCu20ssQITNTbMdylWEHah8SKGHowKsFhtvhEDiRLpMkEHklYZIRaDrYRi3lpsljh3+EHq7OkHAh5LykAAAAASUVORK5CYII=",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJeSURBVHgBvVXtcdpAEH2SzH80aUAdRB1ErgBw8h+lguAKjCuADiwKiA0VBFeAUoFVQDKQ3x5JeXu3UpBAJDiJ34zY427v7d5+3AH/GU57YvshjFBgzGGkUwFOY8cv45eSbeV/TpdHDWyHYR8eHlDWxC9FQgev/WUqhnFRT7uYKfmOCvNnYNWjZ5ViF8Qx6gaui9ADbjgV0+2A8rI+wfZ9OCS5eJ/xuyRphjNAIwFsqPp0dGNkYXjWrtEoMVA5PZtcnHPxRFc3amRuFlyTxzpEocqvOO5h3/UwLkqr5zpIi5wJpTN5ib4nkxKW0ni+IPkUWiSVgUBldkB+FU4obgrZrOBYPJxz7da/T6ffrkJ4pfPkLzeZKZY9OEoiW0Blp0U+hU2chG9N0kTHESSZFtfcN2/tq/ku0AFNnCUvEDMci73lBdcfafBOdDhOuqrN7TLAlUhHSYvcgHMJzy9NJf0z7qbpxjvz6zA0HWCCV2ZQ1kVyloF/gm4DLEUjizqZB/B+nTI930AOifuOmyMt1QaY2BhVJeUaqiPorCKpiu+sc3ow498Zjbw1DVbiB40OGPehUSxOd391gky9ajTJG9Z3wTqHvQJikku93ym5XIoTkt+2TlZxtG5TiwBoxlOMcNMyZ9k2Ys4QHq39HjlywFycewbW4iHPM2gbEGgIEv1OI9eS1cTbEBWoGmmiHfwiNLq/NE2496KNwi9SMXI0j9d23uPN+vxnDw7sOxBTfjJj6f779GPTgCi6pmJi/A3kUiwxqhw7fPRH4YCzQ9P+9unr/4YyU0liJ/EfNo94TfwEcn72TY6SKToAAAAASUVORK5CYII=",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgB7VTtsYIwENxkLEA6sIS8Dt7rAF4DagVqB6QDO9AKxBLsQDrQDmAsQNwLOOPwoYjwz51J5pKDPdj7AL54AZX4xkBjQ9ugT2Q4cwUjkkc8TtA3lOPcaG5jDAUFIwG2GApXrLW3i1c0QvQNcnr7eKWTf7OkYXkR8PqMT+GSq36FU7gVt0x+hS4LyYdi0lXHispw4JrTSskRci20c2gseTiK6UXxTyfJRJIo/iv4jkKem3dIWdFx8c30LclKkjjyh7LPJap+zVoSxCacPJWsRpLyI7r2RUqWBOYkZqNkDZK0CyBokuxREt/MypJUaGolqsKyX8L7gcTjJkm6BsiTqVzXy2jx0XJ+tQ/QEZKDFMMhHXrYbUfcbFFLM/Q3utOilyy+eIUbgAeBYHG2lo4AAAAASUVORK5CYII=",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGHSURBVHgBrVXtVYMwFL2g/y3HBeoGcQOYwPrxX7tBO4G4AZ2gdAC1TlA2MBvIBnSCxJcUKx9JCNp7Tg6Q5N37ckNeAgygemAxBB7pNaY2rbu5bgE+ole+dcUHVuIZm+IMa0hNbIdESS2Jtrz0FiByhhA7ep3AD3tapRLhgwI68xCfI8ibItfdlYS9aeMyb2JC6a77dA1U92yG340cjwAxORBbBWizbqzBAim1SDUBLK3zQv3HHXHeGWYwky/I21WjJ6vu2AU9U8PsuK3nIwBsDKIry9ypS+Dk6Apwy6wnrz4F2ebo7oE69iabnslzZUteky9UH0wIULQ/G6gP2Rf+A4Gr5mFrWaQHZDuDkciHT7LEC/4K0Y/tCVAGhcoE45GbKmroyGQPX6iSLcwrNwqoTKgc+FslkY66D35Q3bKdKmBwkxfRO09sw+FA8Bwuqw632dxF4RQYtMphjZeAwuUbz+iR9QYEMiLfDMX7FbvDH1Iev8kaIl/6hHoJEJm+1LWIKmYSCTzxDRPNiY1jqL78AAAAAElFTkSuQmCC",U={},y={class:"border-t-4 border-primary-01 bg-primary-03 py-8 md:py-10"},b={class:"container"},Y={class:"flex flex-col items-center gap-4 md:flex-row md:items-stretch md:justify-between"},E={class:"flex flex-col items-center lg:flex-row"},C=A("h2",{class:"mb-4 md:mr-[134px] lg:mb-0"},[A("a",{class:"h-12 w-[196px] overflow-hidden whitespace-nowrap bg-[url('./images/logo/JoinSport03.png')] bg-cover bg-no-repeat indent-[101%] hover:opacity-75",href:"#"},"Join Sport 揪運動")],-1),F={class:"flex gap-10 text-left xs:gap-[72px]"},Q=A("p",{class:"text-lg text-[#6F6F6F] md:mb-4"},"帳號",-1),S=A("p",{class:"text-lg text-[#6F6F6F] md:mb-4"},"揪團",-1),I=A("p",{class:"text-lg text-[#6F6F6F] md:mb-4"},"探索",-1),R=f('<div><div class="flex h-full flex-col justify-evenly lg:justify-between"><ul class="mb-4 flex gap-2 xs:gap-6 md:gap-10"><li><a href="#" class="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-90"><img class="" src="'+m+'" alt=""></a></li><li><a href="#" class="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-90"><img class="" src="'+p+'" alt=""></a></li><li><a href="#" class="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-90"><img class="" src="'+h+'" alt=""></a></li><li><a href="#" class="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-90"><img class="" src="'+x+'" alt=""></a></li><li><a href="#" class="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-90"><img class="" src="'+B+'" alt=""></a></li></ul><p class="text-center text-xs text-[#3D3D3D] md:text-end"> Copyright© Join Sport All Rights Reserved. </p></div></div>',1);function k(c,n){const t=l("router-link");return a(),r("footer",y,[A("div",b,[A("div",Y,[A("div",E,[C,A("div",F,[A("div",null,[Q,A("ul",null,[A("li",null,[e(t,{class:"leading-8 hover:text-primary-01 focus:text-secondary-blue",to:""},{default:s(()=>[o("註冊")]),_:1})]),A("li",null,[e(t,{class:"leading-8 hover:text-primary-01 focus:text-secondary-blue",to:""},{default:s(()=>[o("登入")]),_:1})])])]),A("div",null,[S,A("ul",null,[A("li",null,[e(t,{class:"leading-8 hover:text-primary-01 focus:text-secondary-blue",to:""},{default:s(()=>[o("參加揪團")]),_:1})]),A("li",null,[e(t,{class:"leading-8 hover:text-primary-01 focus:text-secondary-blue",to:""},{default:s(()=>[o("當主揪開團")]),_:1})])])]),A("div",null,[I,A("ul",null,[A("li",null,[e(t,{class:"leading-8 hover:text-primary-01 focus:text-secondary-blue",to:""},{default:s(()=>[o("熱門群組")]),_:1})]),A("li",null,[e(t,{class:"leading-8 hover:text-primary-01 focus:text-secondary-blue",to:""},{default:s(()=>[o("城市搜尋")]),_:1})])])])])]),R])])])}const v=i(U,[["render",k]]),H={components:{RouterView:w,FooterComponent:v}};function D(c,n,t,K,_,T){const g=l("router-view"),d=l("footer-component");return a(),r(u,null,[e(g),e(d)],64)}const O=i(H,[["render",D]]);export{O as default};
