var e=new class{API_KEY="e454020bbcf8fdaccdf0027d6b28b698";LANG="&language=en-US&page=";upcomingURL="https://api.themoviedb.org/3/movie/upcoming?api_key=";nowPlayingURL="https://api.themoviedb.org/3/movie/now_playing?api_key=";latestURL="https://api.themoviedb.org/3/movie/latest?api_key=";TopRatedURL="https://api.themoviedb.org/3/movie/top_rated?api_key=";MostPopular="https://api.themoviedb.org/3/movie/popular?api_key=";searchbox=document.querySelector(".input--text");searchbtn=document.querySelector(".btn--search");searchform=document.querySelector(".form--search");eachKEY=`api_key=${this.API_KEY}&language=en-US`;eachURL="https://api.themoviedb.org/3/movie/";time=2e3;clearInput(){this.searchbox.value=""}hideBut(){this.searchbtn.style.opcaity=0}},t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(e,t,n){var r=u;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return A()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=x(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?p:h,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(e,n,i),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u="suspendedStart",h="suspendedYield",v="executing",p="completed",g={};function f(){}function m(){}function y(){}var w={};c(w,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(P([])));L&&L!==n&&r.call(L,a)&&(w=L);var $=y.prototype=f.prototype=Object.create(w);function _(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,a,i,s){var c=d(e[o],e,a);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function x(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,x(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=d(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function P(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:A}}function A(){return{value:t,done:!0}}return m.prototype=y,c($,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create($),e},e.awrap=function(e){return{__await:e}},_(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_($),c($,s,"Generator"),c($,a,(function(){return this})),c($,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}let n,r,o;let a,i,s,c,l=1;async function d(){try{const t=await fetch(`${e.upcomingURL}${e.API_KEY}${e.LANG}${l}`);let n=await t.json();a=n.total_pages,n=n.results,i=n,console.log(i.length),n.forEach((e=>{_.renderUpcoming(e)}))}catch(e){console.log(e,"I am the")}}function u(){0!==l&&(l--,_.clear1(),d()),0===l&&(l=1,d())}function h(){l===a?(l=a,_.clear1(),d()):(l++,_.clear1(),d())}async function v(){try{const t=await fetch(`${e.nowPlayingURL}${e.API_KEY}${e.LANG}${l}`);let n=await t.json();a=n.total_pages,n=n.results,n.forEach((e=>{_.renderNowPlaying(e)}))}catch(e){console.log(e,"I am the")}}function p(){console.log("UP2 CLICKED"),0!==l&&(l--,_.clear2(),v()),0===l&&(l=1,v())}function g(){l===a?(l=a,_.clear2(),v()):(l++,_.clear2(),v())}async function f(){try{const t=await fetch(`${e.TopRatedURL}${e.API_KEY}${e.LANG}${l}`);let n=await t.json();a=n.total_pages,n=n.results,n.forEach((e=>{_.renderTopRated(e)}))}catch(e){console.log(e,"I am the")}}function m(){console.log("UP2 CLICKED"),0!==l&&(l--,_.clear4(),f()),0===l&&(l=1,f())}function y(){l===a?(l=a,_.clear4(),f()):(l++,_.clear4(),f())}async function w(){try{const t=await fetch(`${e.MostPopular}${e.API_KEY}${e.LANG}${l}`);let n=await t.json();a=n.total_pages,n=n.results,n.forEach((e=>{_.renderMostPopular(e)}))}catch(e){console.log(e,"I am the")}}function b(){console.log("UP2 CLICKED"),0!==l&&(l--,_.clear5(),w()),0===l&&(l=1,w())}function L(){l===a?(l=a,_.clear5(),w()):(l++,_.clear5(),w())}async function $(){try{const t=e.searchbox.value,n=await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${e.API_KEY}&query=${t}&language=en-US&page=${S}&include_adult=fals`);if(console.log(S),s=await n.json(),console.log(s),c=s.total_pages,s=s.results,0===s.length)throw new Error(`No result found for your search (${t})`)}catch(e){const t=`<h1 style="color:red; transform:translate(20vw)">${e.message}</h1>`;_.parent.insertAdjacentHTML("beforeend",t),setTimeout((()=>{_.parent.innerHTML=""}),5e3),console.error(e,"Please am here")}}var _=new class{parent=document.querySelector("#content--space");secParent=document.querySelector(".main--section--main");house1=document.querySelector("#house1");house2=document.querySelector("#house2");house4=document.querySelector("#house4");house5=document.querySelector("#house5");accHouse1=document.querySelector("#place1");accHouse2=document.querySelector("#place2");accHouse4=document.querySelector("#place4");accHouse5=document.querySelector("#place5");resHouse=document.querySelector(".result--search--container");clearsecParent(){this.secParent.innerHTML=""}ins(){this.secParent.insertAdjacentHTML("afterbegin",' <section class="result--search--container">  </section>')}ins2(){this.secParent.insertAdjacentHTML("afterbegin",'<section class="target"></section>')}renderRev(e,t){const n=`\n    <div  style="overflow-y:scroll; padding:3%;" class="review">\n                               <div class="img--holder">\n                                <img src="${e.author_details?`https://image.tmdb.org/t/p/w500/${e.author_details.avatar_path}`:"Devsldpi.a7b5d534.svg"}" class="revImg" alt="Author's Image">\n                                <h3>${e.author}</h3>\n                                <small>${e.created_at}</small>\n                               </div>\n                               <div  style="overflow-y:hidden" class="reviewHolder">\n                                <p style="overflow-y:hidden; margin: 0 0 2% 0">${e.content}</p>\n                               </div>\n                            </div> \n    `;t.insertAdjacentHTML("beforeend",n)}renderTarget(e,t){const n=e.genres.map((e=>e.name)).join(" , "),r=e.production_countries[0].name,o=`\n  \n                <section  style="background-image:url(https://image.tmdb.org/t/p/w500/${e.poster_path});backgrounf-size:cover; background-repeat: repeat-x" class="partA tar">\n                    <div class="space1 just"> \n                        <a href="https://www.youtube.com/results?search_query=${e.title}">\n                            <img src="youtube.svg" alt="youtube link" class="youtube--link">\n                        </a>\n                       \n                    </div>\n\n                </section>\n                 <a style="text-decoration:none;text-align:center; padding:1%; margin-left:40%; background:white; color:green; width:max-content;border-radius:10px;" id="homepage" href="${e.homepage}">\n                           <small> Visit video homepage</small>\n                        </a>\n                <section class="partB tar">\n\n                    <div class="pushover1">\n\n                        <button class="btn--tab tab-container tab--active" data-move="1">Info</button>\n\n                        <button class="btn--tab tab-container" data-move="2">Overview</button>\n\n                        <button class="btn--tab tab-container" data-move="3">Reviews</button>\n\n                        <button class="btn--tab tab-container" data-move="4">Recommended</button>\n\n\n\n\n                    </div>\n                    <div class="pushover2">\n                        <article id="Num--1" class="stack Num--1 content--active">\n                            \n                          <table>\n                            <tr>\n                                <td>Title</td>\n                                <td>${e.title}</td>\n                            </tr>\n\n                            <tr>\n                                <td>Genre</td>\n                                <td>${n}</td>\n                            </tr>\n\n\n                            <tr>\n                                <td>Release Date</td>\n                                <td>${e.release_date}</td>\n                            </tr>\n                            <tr>\n                                <td>Production Country</td>\n                                <td>${r}</td>\n                            </tr>\n                            <tr>\n                                <td>Ratings</td>\n                                <td>${e.vote_average}</td>\n                            </tr>\n\n                          </table>\n                        \n                        </article>\n                        <article id="Num--2" class="stack Num--2">\n                            <p>${e.overview}</p>\n                        </article>\n                        <article id="Num--3" class="stack Num--3">\n                            \n                        </article>\n                        <article id="Num--4" class="stack Num--4">\n                            <section id="rec-list">\n                           \n                               \n                              \n                               \n                                \n\n                            </section>\n                        </article>\n                    </div>\n                </section> \n    \n    \n    `;t.insertAdjacentHTML("afterbegin",o)}RecInfo(e,t){const n=`\n             <div style="background-image:url(https://image.tmdb.org/t/p/w500/${e.poster_path}" class="rec--movies eachRec"  data-id="${e.id}">\n                                        <aside class="internal">\n                                <h5 class="textA intro">${e.title}  </h5>\n                                <h6 class="textB intro">${e.release_date}</h6>\n                                <h6 class="textC intro">\n                                \n                                    <img src="star1.svg" alt="Not available" class="rate"> \n                                </h6>\n                            </aside>\n                                    </div>\n    `;t.insertAdjacentHTML("beforeend",n)}renderSearchResult(e,t){const n=`\n            <div class="each-result spread" style="background-image:url(https://image.tmdb.org/t/p/w500/${e.poster_path||e.backdrop_path}); overflow: hidden" data-id="${e.id}"">\n                   <aside class="internal">\n                                <h5 class="textA intro">${e.original_title||e.name}  </h5>\n                                <h6 class="textB intro">${e.release_date||e.first_air_date}</h6>\n                                <h6 class="textC intro">\n                                \n                                    <img src="star1.svg" alt="Not available" class="rate"> \n                                </h6>\n                            </aside>\n                </div>\n    `;return t.insertAdjacentHTML("beforeend",n),n}renderSpinner(){const e='\n        <section class="spinner">\n              <img src="spinner-gap.82a45b17.svg"  alt="" class="spin">\n            </section>\n        ';return this.parent.insertAdjacentHTML("afterbegin",e),e}UP1(e){document.querySelector(".arrowUp").addEventListener("click",(function(){e()}))}Down1(e){document.querySelector(".arrowDown").addEventListener("click",(function(){e()}))}UP2(e){document.querySelector("#arru1").addEventListener("click",(function(){e()}))}Down2(e){document.querySelector("#arrd1").addEventListener("click",(function(){e()}))}UP3(e){document.querySelector("#arru2").addEventListener("click",(function(){e()}))}Down3(e){document.querySelector("#arrd2").addEventListener("click",(function(){e()}))}UP4(e){document.querySelector("#arru3").addEventListener("click",(function(){e()}))}Down4(e){document.querySelector("#arrd3").addEventListener("click",(function(){e()}))}clear1(){this.house1.innerHTML=""}clear2(){this.house2.innerHTML=""}clear3(){this.house3.innerHTML=""}clear4(){this.house4.innerHTML=""}clear5(){this.house5.innerHTML=""}renderMove(){this.accHouse1.insertAdjacentHTML("beforeend",'\n   <section class="accordion first--acordion">\n                        <div class="arrowUp"> <img class="move--to" src="CaretU.svg"  alt="l"> </div>\n                        <div class="arrowDown"> <img class="move--to" src="next11.svg" alt="">\n                        </div>\n                    </section>\n  ')}renderMoveRes(e){e.insertAdjacentHTML("beforebegin",'\n   <section class="accordion first--acordion" >\n\n                        <div id="arru5" class="arrowUp"> <img  class="move--to " src="CaretU.svg" style="filter:sepia(27%)" alt="ccc"> </div>\n                        <div id="arrd5" class="arrowDown"> <img class="move--to" src="next11.svg" alt="">\n                        </div>\n                    </section>\n  ')}renderMove2(){this.accHouse2.insertAdjacentHTML("beforeend",'\n   <section class="accordion first--acordion">\n                        <div id="arru1" class="arrowUp"> <img class="move--to " src="CaretU.svg" alt="ttt"> </div>\n                        <div id="arrd1" class="arrowDown"> <img class="move--to" src="next11.svg" alt="">\n                        </div>\n                    </section>\n  ')}renderMove3(){this.accHouse4.insertAdjacentHTML("beforeend",'\n   <section class="accordion first--acordion">\n                        <div id="arru2" class="arrowUp"> <img class="move--to " src="CaretU.svg" alt=""> </div>\n                        <div id="arrd2" class="arrowDown"> <img class="move--to" src="next11.svg" alt="">\n                        </div>\n                    </section>\n  ')}renderMove4(){this.accHouse5.insertAdjacentHTML("beforeend",'\n   <section class="accordion first--acordion">\n                        <div id="arru3" class="arrowUp"> <img class="move--to " src="CaretU.svg" alt=""> </div>\n                        <div id="arrd3" class="arrowDown"> <img class="move--to" src="next11.svg" alt="">\n                        </div>\n                    </section>\n  ')}renderUpcoming(e){const t=`\n       \n                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${e.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${e.id}"">\n                            <aside class="internal">\n                                <h5 class="textA intro">${e.title}  </h5>\n                                <h6 class="textB intro">${e.release_date}</h6>\n                                <h6 class="textC intro">\n                                \n                                    <img src="star1.svg" alt="Not available" class="rate"> \n                                </h6>\n                            </aside>\n                        </div>\n                         \n      `;return this.house1.insertAdjacentHTML("beforeend",t),t}renderNowPlaying(e){const t=`\n       \n                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${e.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${e.id}"">\n                            <aside class="internal">\n                                <h5 class="textA intro">${e.title}  </h5>\n                                <h6 class="textB intro">${e.release_date}</h6>\n                                <h6 class="textC intro">\n                                \n                                    <img src="star1.svg" alt="Not available" class="rate"> \n                                </h6>\n                            </aside>\n                        </div>\n                         \n      `;return this.house2.insertAdjacentHTML("beforeend",t),t}renderTopRated(e){const t=`\n       \n                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${e.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${e.id}"">\n                            <aside class="internal">\n                                <h5 class="textA intro">${e.title}  </h5>\n                                <h6 class="textB intro">${e.release_date}</h6>\n                                <h6 class="textC intro">\n                                \n                                    <img src="star1.svg" alt="Not available" class="rate"> \n                                </h6>\n                            </aside>\n                        </div>\n                         \n      `;return this.house4.insertAdjacentHTML("beforeend",t),t}renderMostPopular(e){const t=`\n       \n                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${e.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${e.id}"">\n                            <aside class="internal">\n                                <h5 class="textA intro">${e.title}  </h5>\n                                <h6 class="textB intro">${e.release_date}</h6>\n                                <h6 class="textC intro">\n                                \n                                    <img src="star1.svg" alt="Not available" class="rate"> \n                                </h6>\n                            </aside>\n                        </div>\n                         \n      `;return this.house5.insertAdjacentHTML("beforeend",t),t}renderHeader(){const e='\n    <section class="main--sect--nav">\n                <div class="main--list">\n                    <a id="linkA" href="#" class="list one">Latest</a>\n                    <a  id="linkB" href="#" class="list two"> Now Playing</a>\n                   \n                    <a  id="linkC" href="#" class="list four">Top Rated</a>\n                    <a  id="linkD" href="#" class="list five">Most Popular</a>\n                </div>\n\n            </section>';return this.parent.insertAdjacentHTML("afterbegin",e),e}};const E=document.querySelector(".paginate");let x,k;E.style.opacity=0,async function(){try{d(),v(),f(),w(),_.renderHeader(),_.renderMove(),_.renderMove2(),_.renderMove3(),_.renderMove4(),_.UP1(u),_.Down1(h),_.UP2(p),_.Down2(g),_.UP3(m),_.Down3(y),_.UP4(b),_.Down4(L),A()}catch(e){console.error(e)}}();let S=1;const T=document.querySelector(".main--sect--nav");function P(){setTimeout((()=>{const e=document.querySelector(".result--search--container");$(),E.textContent=`Page ${S} of ${c-1}`,E.style.opacity=1,console.log(s),s.forEach((t=>{_.renderSearchResult(t,e),i.length>1&&A()}))}),e.time)}function A(){setTimeout((()=>{document.querySelectorAll(".spread").forEach((t=>{t.addEventListener("click",(function(){T.innerHTML="",_.clearsecParent(),_.ins2(),async function(t){const a=await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=${e.API_KEY}&language=en-US`);n=await a.json(),console.log(n);const i=await fetch(`https://api.themoviedb.org/3/movie/${t}/reviews?api_key=${e.API_KEY}&language=en-US&page=1`);let s=await i.json();console.log(s),s=s.results,r=s,console.log(r);const c=await fetch(`https://api.themoviedb.org/3/movie/${t}/recommendations?api_key=${e.API_KEY}&language=en-US&page=1`);let l=await c.json();l=l.results,o=l,console.log(l)}(t.dataset.id),setTimeout((()=>{const e=document.querySelector(".target");_.renderTarget(n,e),setTimeout((()=>{const e=document.querySelector("#Num--3");if(0===r.length){const t='<h1 style="font-size:2em; color:red; padding:1%; height:2.2em; width: max-content; border-radius:10%;margin:10%;">No reviews yet !!</h1>';e.insertAdjacentHTML("afterbegin",t)}r.forEach((t=>{_.renderRev(t,e)}))}),1e3),setTimeout((()=>{const e=document.querySelector("#rec-list");o.forEach((t=>{_.RecInfo(t,e)}))}),1e3)}),1e3),setTimeout(M,1e3)}))}))}),2e3)}function M(){const e=document.querySelector(".pushover1"),t=document.querySelectorAll(".btn--tab"),n=document.querySelectorAll(".stack");e.addEventListener("click",(e=>{const r=e.target.closest(".tab-container");n.forEach((e=>e.classList.remove("content--active"))),t.forEach((e=>e.classList.remove("tab--active"))),r.classList.add("tab--active"),console.log(r),document.querySelector(`.Num--${r.dataset.move}`).classList.add("content--active")}))}function j(){setTimeout((()=>{const e=document.querySelector(".result--search--container");function t(){e.innerHTML=""}console.log(s),s.forEach((t=>{_.renderSearchResult(t,e)})),E.style.opacity=1,console.log(e),_.renderMoveRes(e,S),x=document.querySelector("#arru5"),k=document.querySelector("#arrd5"),i.length>1&&A(),console.log(k),x.addEventListener("click",(function(){console.log("UP2 CLICKED"),function(){0!==S&&(S--,t(),P(),console.log(S));0===S&&(S=1,P())}()})),k.addEventListener("click",(function(){console.log("UP2 CLICKED"),S===n?(S=n,t(),P()):(S++,t(),P(),console.log(S))}));let n=c;console.log(n)}),e.time)}e.searchform.addEventListener("submit",(e=>{e.preventDefault(),T.innerHTML="",_.clearsecParent(),_.ins(),$(),j()})),e.hideBut();
//# sourceMappingURL=index.d547149d.js.map
