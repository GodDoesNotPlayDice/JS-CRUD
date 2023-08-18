(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Ar=`<header id="header" class="bg-gray-100 transition-all top-0 w-full duration-500 z-10 ">\r
    <div class="p-5 flex items-center w-full lg:flex-auto lg:justify-between">\r
        <div class="flex items-center">\r
            <img class="w-6 mr-4 rounded-sm hover:scale-125 hover:transition-all transition-all duration-200"\r
                src="https://i.imgur.com/rG8yz2C.png" alt="">\r
            <div>\r
                <div class="flex items-center">\r
                    <h1 class="element-title text-2xl text-purple-500 text-cat">One Word a Day</h1>\r
                    <a class="mx-2" href="https://github.com/GodDoesNotPlayDice/JS-CRUD"><i\r
                            class="git-hub-icon fa-brands fa-github text-purple-600 text-xl hover:scale-110 cursor-pointer transition-all hover:transition-all"></i></a>\r
                </div>\r
                <p class=" text-purple-300 text-sm font-semibold mx-2">Created by God Does Not Play Dice\r
                </p>\r
            </div>\r
        </div>\r
    </div>\r
</header>\r
<main>\r
    <div class="lg:flex flex-col items-center lg:items-start">\r
        <div class="m-7 lg:ml-14 lg:w-4/5">\r
            <h2 class="lg:relative lg:left-16 lg:top-6 lg:text-5xl text-3xl py-2 font-medium text-purple-500">What is this?\r
            </h2>\r
            <p class="lg:relative lg:left-16 lg:top-6 lg:text-2xl text-xl py-2 font-medium text-gray-500"> shows you a word a\r
                day. You can also create your\r
                own words and share them with the world.</p>\r
        </div>\r
        <div class="m-4 my-16 flex flex-wrap justify-center lg:flex-row mb-20 lg:justify-start">\r
            <div class="lg:ml-10">\r
                <div class="flex justify-center lg:justify-start flex-wrap max-w-7xl">\r
                    <div class="bg-purple-600 p-3 rounded-lg m-1 hover:scale-110 hover:transition-all transition-all flex items-center">\r
                        <p class="element-title text-xl lg:text-xl font-medium text-white">Hello</p>\r
                    </div>\r
                    <div class="bg-blue-600 p-3 rounded-lg m-1 hover:scale-110 hover:transition-all transition-all flex items-center">\r
                        <p class="element-title text-xl lg:text-xl font-medium text-white">World</p>\r
                    </div>\r
                    <div class="bg-red-600 p-3 rounded-lg m-1 hover:scale-110 hover:transition-all transition-all flex items-center">\r
                        <p class="element-title text-xl lg:text-xl font-medium text-white">Everyone</p>\r
                    </div>\r
                    <div class="bg-yellow-600 p-3 rounded-lg m-1 hover:scale-110 hover:transition-all transition-all flex items-center">\r
                        <p class="element-title text-xl lg:text-xl font-medium text-white">Happy</p>\r
                    </div>\r
                    <div class="bg-green-600 p-3 rounded-lg m-1 hover:scale-110 hover:transition-all transition-all flex items-center">\r
                        <p class="element-title text-xl lg:text-xl font-medium text-white">Cool</p>\r
                    </div>\r
                    <div class="bg-orange-600 p-3 rounded-lg m-1 hover:scale-110 hover:transition-all transition-all flex items-center">\r
                        <p class="element-title text-xl lg:text-xl font-medium text-white">Stronger</p>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="mx-12">\r
            <h3 class="lg:text-5xl text-3xl text-center lg:text-start py-2 font-medium text-purple-500">Everything Words!</h3>\r
            <div id="container" class="lg:my-9 mb-28 flex items-center flex-col lg:block">\r
                <div class="words-container flex justify-center lg:justify-start flex-wrap max-w-7xl">\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="flex justify-center">\r
        <div class="bg-purple-200 animate__animated animate__zoomOut hidden modal rounded-lg fixed top-1/4 p-12 lg:p-14 overflow-hidden">\r
            <div class="close-modal absolute top-0 bg-red-500 cursor-pointer hover:bg-red-950 transition-all hover:transition-all duration-500 hover:duration-500 p-2 px-4 rounded-bl-xl right-0"><i class="fa-solid text-base text-white fa-x"></i></div>\r
            <form id="new_words_form" action="" class="flex items-center flex-col">\r
                <h2 class="text-3xl relative left-3 text-purple-600 font-semibold ">Writte a word!🍇</h2>\r
                <div class="my-6">\r
                    <label for="word">\r
                        <input name="word" id="new_words_text" class="p-3 outline-purple-700 outline-4 w-64 text-4xl font-semibold text-purple-600 text-center" type="text">\r
                    </label>\r
                </div>\r
                <span id="errors" class="opacity-0 text-red-600">Hello im error :D</span>\r
                <button id="create-btn" class="bg-purple-700 text-white py-2 px-24 rounded-lg relative top-4 font-semibold hover:bg-purple-900 transition-all duration-500 hover:transition-all">Ok!</button>\r
            </form>\r
        </div>\r
    </div>\r
    <div id="buttons-cont">\r
        <div class="flex justify-start">\r
            <div id="delete-words" class="hidden animate__bounce animate__animated group transition-all group-hover:trasition-all p-4 mx-2 lg:mx-4 lg:bottom-36 lg:right-0 fixed bottom-36 justify-center items-center bg-red-800 bg-opacity-95 rounded-full hover:bg-red-700 cursor-pointer">\r
                <i class="fa-solid cursor-pointer fa-trash text-white"></i>\r
                <p class="transition-all group-hover:trasition-all overflow-hidden opacity-0 w-0 h-0 text-sm text-white group-hover:opacity-100 group-hover:w-auto group-hover:h-auto group-hover:ml-2">Delete your word</p>\r
            </div>                        \r
        </div>\r
        <div class="loadMore">\r
            <div class="flex justify-start">\r
                <div class=" loadMore_btn animate__bounce animate__animated group transition-all group-hover:trasition-all p-4 mx-2 lg:mx-4 lg:bottom-20 lg:right-0 fixed bottom-20 flex justify-center items-center bg-purple-800 bg-opacity-95 rounded-full hover:bg-purple-700 cursor-pointer">\r
                    <i class="reload_icon fa-solid fa-spinner text-white"></i>\r
                    <p class="reload_text transition-all group-hover:trasition-all overflow-hidden opacity-0 w-0 h-0 text-sm text-white group-hover:opacity-100 group-hover:w-auto group-hover:h-auto group-hover:ml-2">Load More</p>\r
                </div>                        \r
            </div>\r
        </div>\r
        <div class="loadMore-block hidden">\r
            <div class="flex justify-start">\r
                <div class=" loadMore_btn animate__bounce animate__animated group transition-all group-hover:trasition-all p-4 mx-2 lg:mx-4 lg:bottom-20 lg:right-0 fixed bottom-20 flex justify-center items-center  bg-gray-800 bg-opacity-0 rounded-full cursor-not-allowed px-12">\r
                    <i class="reload_icon fa-solid fa-spinner text-white invisible"></i>\r
                    <p class="reload_text transition-all group-hover:trasition-all overflow-hidden opacity-0 w-0 h-0 text-sm text-white group-hover:opacity-100 group-hover:w-auto group-hover:h-auto group-hover:ml-2"></p>\r
                </div>                        \r
            </div>\r
        </div>\r
        <div id="create-word">\r
            <div class="flex justify-start">\r
                <div class="animate__bounce animate__animated group transition-all group-hover:trasition-all p-4 mx-2 lg:mx-4 lg:bottom-5 lg:right-0 fixed bottom-4 flex justify-center items-center bg-purple-800 bg-opacity-95 rounded-full hover:bg-purple-700 cursor-pointer">\r
                    <i class="fa-solid fa-plus text-white"></i>\r
                    <p class="transition-all group-hover:trasition-all overflow-hidden opacity-0 w-0 h-0 text-sm text-white group-hover:opacity-100 group-hover:w-auto group-hover:h-auto group-hover:ml-2">Add word</p>\r
                </div>                        \r
            </div>\r
        </div>\r
    </div>\r
</main>`,Ys=n=>{let e=[];return n.forEach(t=>{const s=["bg-purple-600","bg-green-600","bg-yellow-600","bg-red-600","bg-blue-600","bg-pink-600","bg-cyan-600","bg-orange-600","bg-lime-600"],i=Math.floor(Math.random()*s.length),r=s[i];let o;o=`<div class=" ${r} p-3 rounded-lg m-1 hover:scale-105 hover:transition-all transition-all flex items-center">
                <p class="element-title text-xl lg:text-xl font-medium text-white">${t.word}</p>
            </div>`,e.push(o)}),e};let ct;const Dr=new Uint8Array(16);function kr(){if(!ct&&(ct=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ct))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ct(Dr)}const P=[];for(let n=0;n<256;++n)P.push((n+256).toString(16).slice(1));function Pr(n,e=0){return(P[n[e+0]]+P[n[e+1]]+P[n[e+2]]+P[n[e+3]]+"-"+P[n[e+4]]+P[n[e+5]]+"-"+P[n[e+6]]+P[n[e+7]]+"-"+P[n[e+8]]+P[n[e+9]]+"-"+P[n[e+10]]+P[n[e+11]]+P[n[e+12]]+P[n[e+13]]+P[n[e+14]]+P[n[e+15]]).toLowerCase()}const Or=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),os={randomUUID:Or};function Mr(n,e,t){if(os.randomUUID&&!e&&!n)return os.randomUUID();n=n||{};const s=n.random||(n.rng||kr)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){t=t||0;for(let i=0;i<16;++i)e[t+i]=s[i];return e}return Pr(s)}class Ks{constructor({word:e,ip:t,date:s,uuid:i=Mr()}){this.word=e,this.ip=t,this.date=s,this.uuid=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(n,e){if(!n)throw xe(e)},xe=function(n){return new Error("Firebase Database ("+Qs.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Lr=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Cn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(t[u],t[h],t[d],t[_])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Lr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Fr;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Fr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Js=function(n){const e=Xs(n);return Cn.encodeByteArray(e,!0)},dt=function(n){return Js(n).replace(/\./g,"")},tn=function(n){try{return Cn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){return Zs(void 0,n)}function Zs(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Br(t)||(n[t]=Zs(n[t],e[t]));return n}function Br(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=()=>Ur().__FIREBASE_DEFAULTS__,Vr=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$r=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&tn(n[1]);return e&&JSON.parse(e)},ei=()=>{try{return Hr()||Vr()||$r()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qr=n=>{var e,t;return(t=(e=ei())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Gr=n=>{const e=qr(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},ti=()=>{var n;return(n=ei())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[dt(JSON.stringify(t)),dt(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ni(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zr())}function Yr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function si(){return Qs.NODE_ADMIN===!0}function Kr(){try{return typeof indexedDB=="object"}catch{return!1}}function Qr(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="FirebaseError";class tt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Xr,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ii.prototype.create)}}class ii{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Jr(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tt(i,a,s)}}function Jr(n,e){return n.replace(Zr,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Zr=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n){return JSON.parse(n)}function A(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=He(tn(r[0])||""),t=He(tn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},eo=function(n){const e=ri(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},to=function(n){const e=ri(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ee(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function as(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ft(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function nn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(ls(r)&&ls(o)){if(!nn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function ls(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Rt(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,f(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},At=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n){return n&&n._delegate?n._delegate:n}class Ve{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new et;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ao(e))try{this.getOrInitializeService({instanceIdentifier:re})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=re){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=re){return this.instances.has(e)}getOptions(e=re){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:oo(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=re){return this.component?this.component.multipleInstances?e:re:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oo(n){return n===re?void 0:n}function ao(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ro(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(I||(I={}));const co={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},ho=I.INFO,uo={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},fo=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=uo[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oi{constructor(e){this.name=e,this._logLevel=ho,this._logHandler=fo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?co[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const _o=(n,e)=>e.some(t=>n instanceof t);let cs,hs;function po(){return cs||(cs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function go(){return hs||(hs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ai=new WeakMap,sn=new WeakMap,li=new WeakMap,$t=new WeakMap,bn=new WeakMap;function mo(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(X(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ai.set(t,n)}).catch(()=>{}),bn.set(e,n),e}function yo(n){if(sn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});sn.set(n,e)}let rn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||li.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return X(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vo(n){rn=n(rn)}function wo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(qt(this),e,...t);return li.set(s,e.sort?e.sort():[e]),X(s)}:go().includes(n)?function(...e){return n.apply(qt(this),e),X(ai.get(this))}:function(...e){return X(n.apply(qt(this),e))}}function Eo(n){return typeof n=="function"?wo(n):(n instanceof IDBTransaction&&yo(n),_o(n,po())?new Proxy(n,rn):n)}function X(n){if(n instanceof IDBRequest)return mo(n);if($t.has(n))return $t.get(n);const e=Eo(n);return e!==n&&($t.set(n,e),bn.set(e,n)),e}const qt=n=>bn.get(n);function Co(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=X(o);return s&&o.addEventListener("upgradeneeded",l=>{s(X(o.result),l.oldVersion,l.newVersion,X(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bo=["get","getKey","getAll","getAllKeys","count"],Io=["put","add","delete","clear"],Gt=new Map;function us(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Gt.get(e))return Gt.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Io.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||bo.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Gt.set(e,r),r}vo(n=>({...n,get:(e,t,s)=>us(e,t)||n.get(e,t,s),has:(e,t)=>!!us(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(To(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function To(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const on="@firebase/app",ds="0.9.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new oi("@firebase/app"),xo="@firebase/app-compat",No="@firebase/analytics-compat",Ro="@firebase/analytics",Ao="@firebase/app-check-compat",Do="@firebase/app-check",ko="@firebase/auth",Po="@firebase/auth-compat",Oo="@firebase/database",Mo="@firebase/database-compat",Lo="@firebase/functions",Fo="@firebase/functions-compat",Wo="@firebase/installations",Bo="@firebase/installations-compat",Uo="@firebase/messaging",Ho="@firebase/messaging-compat",Vo="@firebase/performance",$o="@firebase/performance-compat",qo="@firebase/remote-config",Go="@firebase/remote-config-compat",jo="@firebase/storage",zo="@firebase/storage-compat",Yo="@firebase/firestore",Ko="@firebase/firestore-compat",Qo="firebase",Xo="10.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="[DEFAULT]",Jo={[on]:"fire-core",[xo]:"fire-core-compat",[Ro]:"fire-analytics",[No]:"fire-analytics-compat",[Do]:"fire-app-check",[Ao]:"fire-app-check-compat",[ko]:"fire-auth",[Po]:"fire-auth-compat",[Oo]:"fire-rtdb",[Mo]:"fire-rtdb-compat",[Lo]:"fire-fn",[Fo]:"fire-fn-compat",[Wo]:"fire-iid",[Bo]:"fire-iid-compat",[Uo]:"fire-fcm",[Ho]:"fire-fcm-compat",[Vo]:"fire-perf",[$o]:"fire-perf-compat",[qo]:"fire-rc",[Go]:"fire-rc-compat",[jo]:"fire-gcs",[zo]:"fire-gcs-compat",[Yo]:"fire-fst",[Ko]:"fire-fst-compat","fire-js":"fire-js",[Qo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Map,ln=new Map;function Zo(n,e){try{n.container.addComponent(e)}catch(t){ce.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pt(n){const e=n.name;if(ln.has(e))return ce.debug(`There were multiple attempts to register component ${e}.`),!1;ln.set(e,n);for(const t of _t.values())Zo(t,n);return!0}function ea(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},J=new ii("app","Firebase",ta);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=Xo;function ci(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:an,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw J.create("bad-app-name",{appName:String(i)});if(t||(t=ti()),!t)throw J.create("no-options");const r=_t.get(i);if(r){if(nn(t,r.options)&&nn(s,r.config))return r;throw J.create("duplicate-app",{appName:i})}const o=new lo(i);for(const l of ln.values())o.addComponent(l);const a=new na(t,s,o);return _t.set(i,a),a}function ia(n=an){const e=_t.get(n);if(!e&&n===an&&ti())return ci();if(!e)throw J.create("no-app",{appName:n});return e}function me(n,e,t){var s;let i=(s=Jo[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ce.warn(a.join(" "));return}pt(new Ve(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="firebase-heartbeat-database",oa=1,$e="firebase-heartbeat-store";let jt=null;function hi(){return jt||(jt=Co(ra,oa,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore($e)}}}).catch(n=>{throw J.create("idb-open",{originalErrorMessage:n.message})})),jt}async function aa(n){try{return await(await hi()).transaction($e).objectStore($e).get(ui(n))}catch(e){if(e instanceof tt)ce.warn(e.message);else{const t=J.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ce.warn(t.message)}}}async function fs(n,e){try{const s=(await hi()).transaction($e,"readwrite");await s.objectStore($e).put(e,ui(n)),await s.done}catch(t){if(t instanceof tt)ce.warn(t.message);else{const s=J.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ce.warn(s.message)}}}function ui(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=1024,ca=30*24*60*60*1e3;class ha{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new da(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_s();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ca}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_s(),{heartbeatsToSend:t,unsentEntries:s}=ua(this._heartbeatsCache.heartbeats),i=dt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _s(){return new Date().toISOString().substring(0,10)}function ua(n,e=la){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ps(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ps(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class da{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kr()?Qr().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aa(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return fs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ps(n){return dt(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n){pt(new Ve("platform-logger",e=>new So(e),"PRIVATE")),pt(new Ve("heartbeat",e=>new ha(e),"PRIVATE")),me(on,ds,n),me(on,ds,"esm2017"),me("fire-js","")}fa("");const gs="@firebase/database",ms="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di="";function _a(n){di=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),A(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:He(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return q(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pa(e)}}catch{}return new ga},ae=fi("localStorage"),cn=fi("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new oi("@firebase/database"),ma=function(){let n=1;return function(){return n++}}(),_i=function(n){const e=io(n),t=new so;t.update(e);const s=t.digest();return Cn.encodeByteArray(s)},nt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=nt.apply(null,s):typeof s=="object"?e+=A(s):e+=s,e+=" "}return e};let le=null,ys=!0;const ya=function(n,e){f(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(ye.logLevel=I.VERBOSE,le=ye.log.bind(ye),e&&cn.set("logging_enabled",!0)):typeof n=="function"?le=n:(le=null,cn.remove("logging_enabled"))},O=function(...n){if(ys===!0&&(ys=!1,le===null&&cn.get("logging_enabled")===!0&&ya(!0)),le){const e=nt.apply(null,n);le(e)}},st=function(n){return function(...e){O(n,...e)}},hn=function(...n){const e="FIREBASE INTERNAL ERROR: "+nt(...n);ye.error(e)},Y=function(...n){const e=`FIREBASE FATAL ERROR: ${nt(...n)}`;throw ye.error(e),new Error(e)},F=function(...n){const e="FIREBASE WARNING: "+nt(...n);ye.warn(e)},va=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&F("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},In=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wa=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ce="[MIN_NAME]",he="[MAX_NAME]",fe=function(n,e){if(n===e)return 0;if(n===Ce||e===he)return-1;if(e===Ce||n===he)return 1;{const t=vs(n),s=vs(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Ea=function(n,e){return n===e?0:n<e?-1:1},ke=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+A(e))},Sn=function(n){if(typeof n!="object"||n===null)return A(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=A(e[s]),t+=":",t+=Sn(n[e[s]]);return t+="}",t},pi=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function M(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const gi=function(n){f(!In(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Ca=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ba=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ia(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Sa=new RegExp("^-?(0*)\\d{1,10}$"),Ta=-2147483648,xa=2147483647,vs=function(n){if(Sa.test(n)){const e=Number(n);if(e>=Ta&&e<=xa)return e}return null},Re=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw F("Exception was thrown by user callback.",t),e},Math.floor(0))}},Na=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Le=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){F(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(O("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',F(e)}}class ve{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ve.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="5",mi="v",yi="s",vi="r",wi="f",Ei=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ci="ls",bi="p",un="ac",Ii="websocket",Si="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ae.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ae.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Da(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function xi(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let s;if(e===Ii)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Si)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Da(n)&&(t.ns=n.namespace);const i=[];return M(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.counters_={}}incrementCounter(e,t=1){q(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Wr(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt={},Yt={};function xn(n){const e=n.toString();return zt[e]||(zt[e]=new ka),zt[e]}function Pa(n,e){const t=n.toString();return Yt[t]||(Yt[t]=e()),Yt[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Re(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="start",Ma="close",La="pLPCommand",Fa="pRTLPCB",Ni="id",Ri="pw",Ai="ser",Wa="cb",Ba="seg",Ua="ts",Ha="d",Va="dframe",Di=1870,ki=30,$a=Di-ki,qa=25e3,Ga=3e4;class ge{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=st(e),this.stats_=xn(t),this.urlFn=l=>(this.appCheckToken&&(l[un]=this.appCheckToken),xi(t,Si,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Oa(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ga)),wa(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Nn((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ws)this.id=a,this.password=l;else if(o===Ma)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ws]="t",s[Ai]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Wa]=this.scriptTagHolder.uniqueCallbackIdentifier),s[mi]=Tn,this.transportSessionId&&(s[yi]=this.transportSessionId),this.lastSessionId&&(s[Ci]=this.lastSessionId),this.applicationId&&(s[bi]=this.applicationId),this.appCheckToken&&(s[un]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ei.test(location.hostname)&&(s[vi]=wi);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ge.forceAllow_=!0}static forceDisallow(){ge.forceDisallow_=!0}static isAvailable(){return ge.forceAllow_?!0:!ge.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ca()&&!ba()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=A(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Js(t),i=pi(s,$a);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Va]="t",s[Ni]=e,s[Ri]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=A(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Nn{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ma(),window[La+this.uniqueCallbackIdentifier]=e,window[Fa+this.uniqueCallbackIdentifier]=t,this.myIFrame=Nn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){O("frame writing exception"),a.stack&&O(a.stack),O(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||O("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ni]=this.myID,e[Ri]=this.myPW,e[Ai]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ki+s.length<=Di;){const o=this.pendingSegs.shift();s=s+"&"+Ba+i+"="+o.seg+"&"+Ua+i+"="+o.ts+"&"+Ha+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(qa)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{O("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=16384,za=45e3;let gt=null;typeof MozWebSocket<"u"?gt=MozWebSocket:typeof WebSocket<"u"&&(gt=WebSocket);class H{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=st(this.connId),this.stats_=xn(t),this.connURL=H.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[mi]=Tn,typeof location<"u"&&location.hostname&&Ei.test(location.hostname)&&(o[vi]=wi),t&&(o[yi]=t),s&&(o[Ci]=s),i&&(o[un]=i),r&&(o[bi]=r),xi(e,Ii,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ae.set("previous_websocket_failure",!0);try{let s;si(),this.mySock=new gt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){H.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&gt!==null&&!H.forceDisallow_}static previouslyFailed(){return ae.isInMemoryStorage||ae.get("previous_websocket_failure")===!0}markConnectionHealthy(){ae.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=He(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=A(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=pi(t,ja);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(za))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}H.responsesRequiredToBeHealthy=2;H.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ge,H]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=H&&H.isAvailable();let s=t&&!H.previouslyFailed();if(e.webSocketOnly&&(t||F("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[H];else{const i=this.transports_=[];for(const r of qe.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);qe.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qe.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=6e4,Ka=5e3,Qa=10*1024,Xa=100*1024,Kt="t",Es="d",Ja="s",Cs="r",Za="e",bs="o",Is="a",Ss="n",Ts="p",el="h";class tl{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=st("c:"+this.id+":"),this.transportManager_=new qe(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Le(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Xa?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qa?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Kt in e){const t=e[Kt];t===Is?this.upgradeIfSecondaryHealthy_():t===Cs?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===bs&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ke("t",e),s=ke("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ts,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Is,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ss,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ke("t",e),s=ke("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ke(Kt,e);if(Es in e){const s=e[Es];if(t===el){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Ss){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ja?this.onConnectionShutdown_(s):t===Cs?this.onReset_(s):t===Za?hn("Server Error: "+s):t===bs?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Tn!==s&&F("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Le(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ya))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Le(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ka))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ts,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ae.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Oi{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ni()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mt}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=32,Ns=768;class C{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function w(){return new C("")}function v(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function te(n){return n.pieces_.length-n.pieceNum_}function S(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new C(n.pieces_,e)}function Rn(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function nl(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ge(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Mi(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new C(e,0)}function T(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof C)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new C(t,0)}function y(n){return n.pieceNum_>=n.pieces_.length}function L(n,e){const t=v(n),s=v(e);if(t===null)return e;if(t===s)return L(S(n),S(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function sl(n,e){const t=Ge(n,0),s=Ge(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=fe(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Li(n,e){if(te(n)!==te(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function B(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(te(n)>te(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class il{constructor(e,t){this.errorPrefix_=t,this.parts_=Ge(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=At(this.parts_[s]);Fi(this)}}function rl(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=At(e),Fi(n)}function ol(n){const e=n.parts_.pop();n.byteLength_-=At(e),n.parts_.length>0&&(n.byteLength_-=1)}function Fi(n){if(n.byteLength_>Ns)throw new Error(n.errorPrefix_+"has a key path longer than "+Ns+" bytes ("+n.byteLength_+").");if(n.parts_.length>xs)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xs+") or object contains a cycle "+oe(n))}function oe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Oi{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new An}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1e3,al=60*5*1e3,Rs=30*1e3,ll=1.3,cl=3e4,hl="server_kill",As=3;class z extends Pi{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=z.nextPersistentConnectionId_++,this.log_=st("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pe,this.maxReconnectDelay_=al,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!si())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");An.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(A(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new et,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;z.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&q(e,"w")){const s=Ee(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();F(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||to(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=eo(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+A(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):hn("Unrecognized action received from server: "+A(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cl&&(this.reconnectDelay_=Pe),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ll)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+z.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?O("getToken() completed but was canceled"):(O("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new tl(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{F(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(hl)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&F(h),l())}}}interrupt(e){O("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){O("Resuming connection for reason: "+e),delete this.interruptReasons_[e],as(this.interruptReasons_)&&(this.reconnectDelay_=Pe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Sn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new C(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){O("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=As&&(this.reconnectDelay_=Rs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){O("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=As&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+di.replace(/\./g,"-")]=1,ni()?e["framework.cordova"]=1:Yr()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mt.getInstance().currentlyOnline();return as(this.interruptReasons_)&&e}}z.nextPersistentConnectionId_=0;z.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new m(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new m(Ce,e),i=new m(Ce,t);return this.compare(s,i)!==0}minPost(){return m.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht;class Wi extends Dt{static get __EMPTY_NODE(){return ht}static set __EMPTY_NODE(e){ht=e}compare(e,t){return fe(e.name,t.name)}isDefinedOn(e){throw xe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return m.MIN}maxPost(){return new m(he,ht)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new m(e,ht)}toString(){return".key"}}const we=new Wi;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class k{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??k.RED,this.left=i??W.EMPTY_NODE,this.right=r??W.EMPTY_NODE}copy(e,t,s,i,r){return new k(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return W.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return W.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,k.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,k.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}k.RED=!0;k.BLACK=!1;class ul{copy(e,t,s,i,r){return this}insert(e,t,s){return new k(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class W{constructor(e,t=W.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new W(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,k.BLACK,null,null))}remove(e){return new W(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,k.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ut(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ut(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ut(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ut(this.root_,null,this.comparator_,!0,e)}}W.EMPTY_NODE=new ul;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n,e){return fe(n.name,e.name)}function Dn(n,e){return fe(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;function fl(n){dn=n}const Bi=function(n){return typeof n=="number"?"number:"+gi(n):"string:"+n},Ui=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&q(e,".sv"),"Priority must be a string or number.")}else f(n===dn||n.isEmpty(),"priority of unexpected type.");f(n===dn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds;class D{constructor(e,t=D.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ui(this.priorityNode_)}static set __childrenNodeConstructor(e){Ds=e}static get __childrenNodeConstructor(){return Ds}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new D(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:D.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return y(e)?this:v(e)===".priority"?this.priorityNode_:D.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:D.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=v(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(f(s!==".priority"||te(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,D.__childrenNodeConstructor.EMPTY_NODE.updateChild(S(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bi(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=gi(this.value_):e+=this.value_,this.lazyHash_=_i(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===D.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof D.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=D.VALUE_TYPE_ORDER.indexOf(t),r=D.VALUE_TYPE_ORDER.indexOf(s);return f(i>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}D.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi,Vi;function _l(n){Hi=n}function pl(n){Vi=n}class gl extends Dt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?fe(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return m.MIN}maxPost(){return new m(he,new D("[PRIORITY-POST]",Vi))}makePost(e,t){const s=Hi(e);return new m(t,new D("[PRIORITY-POST]",s))}toString(){return".priority"}}const x=new gl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=Math.log(2);class yl{constructor(e){const t=r=>parseInt(Math.log(r)/ml,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yt=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new k(d,h.node,k.BLACK,null,null);{const _=parseInt(u/2,10)+l,p=i(l,_),E=i(_+1,c);return h=n[_],d=t?t(h):h,new k(d,h.node,k.BLACK,p,E)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,E){const N=h-p,G=h;h-=p;const ie=i(N+1,G),Vt=n[N],Rr=t?t(Vt):Vt;_(new k(Rr,Vt.node,E,null,ie))},_=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const E=l.nextBitIsOne(),N=Math.pow(2,l.count-(p+1));E?d(N,k.BLACK):(d(N,k.BLACK),d(N,k.RED))}return u},o=new yl(n.length),a=r(o);return new W(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt;const pe={};class j{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return f(pe&&x,"ChildrenNode.ts has not been loaded"),Qt=Qt||new j({".priority":pe},{".priority":x}),Qt}get(e){const t=Ee(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof W?t:null}hasIndex(e){return q(this.indexSet_,e.toString())}addIndex(e,t){f(e!==we,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(m.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=yt(s,e.getCompare()):a=pe;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new j(u,c)}addToIndexes(e,t){const s=ft(this.indexes_,(i,r)=>{const o=Ee(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),i===pe)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(m.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),yt(a,o.getCompare())}else return pe;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new m(e.name,a))),l.insert(e,e.node)}});return new j(s,this.indexSet_)}removeFromIndexes(e,t){const s=ft(this.indexes_,i=>{if(i===pe)return i;{const r=t.get(e.name);return r?i.remove(new m(e.name,r)):i}});return new j(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oe;class g{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ui(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Oe||(Oe=new g(new W(Dn),null,j.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oe}updatePriority(e){return this.children_.isEmpty()?this:new g(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Oe:t}}getChild(e){const t=v(e);return t===null?this:this.getImmediateChild(t).getChild(S(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new m(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Oe:this.priorityNode_;return new g(i,o,r)}}updateChild(e,t){const s=v(e);if(s===null)return t;{f(v(e)!==".priority"||te(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(S(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(x,(o,a)=>{t[o]=a.val(e),s++,r&&g.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bi(this.getPriority().val())+":"),this.forEachChild(x,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":_i(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new m(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new m(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new m(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,m.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,m.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===it?-1:0}withIndex(e){if(e===we||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new g(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===we||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(x),i=t.getIterator(x);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===we?null:this.indexMap_.get(e.toString())}}g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vl extends g{constructor(){super(new W(Dn),g.EMPTY_NODE,j.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}}const it=new vl;Object.defineProperties(m,{MIN:{value:new m(Ce,g.EMPTY_NODE)},MAX:{value:new m(he,it)}});Wi.__EMPTY_NODE=g.EMPTY_NODE;D.__childrenNodeConstructor=g;fl(it);pl(it);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=!0;function R(n,e=null){if(n===null)return g.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new D(t,R(e))}if(!(n instanceof Array)&&wl){const t=[];let s=!1;if(M(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=R(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new m(o,l)))}}),t.length===0)return g.EMPTY_NODE;const r=yt(t,dl,o=>o.name,Dn);if(s){const o=yt(t,x.getCompare());return new g(r,R(e),new j({".priority":o},{".priority":x}))}else return new g(r,R(e),j.Default)}else{let t=g.EMPTY_NODE;return M(n,(s,i)=>{if(q(n,s)&&s.substring(0,1)!=="."){const r=R(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(R(e))}}_l(R);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Dt{constructor(e){super(),this.indexPath_=e,f(!y(e)&&v(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?fe(e.name,t.name):r}makePost(e,t){const s=R(e),i=g.EMPTY_NODE.updateChild(this.indexPath_,s);return new m(t,i)}maxPost(){const e=g.EMPTY_NODE.updateChild(this.indexPath_,it);return new m(he,e)}toString(){return Ge(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Dt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?fe(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return m.MIN}maxPost(){return m.MAX}makePost(e,t){const s=R(e);return new m(t,s)}toString(){return".value"}}const bl=new Cl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n){return{type:"value",snapshotNode:n}}function be(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function je(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ze(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Il(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(je(t,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(be(t,s)):o.trackChildChange(ze(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(x,(i,r)=>{t.hasChild(i)||s.trackChildChange(je(i,r))}),t.isLeafNode()||t.forEachChild(x,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ze(i,r,o))}else s.trackChildChange(be(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.indexedFilter_=new kn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ye.getStartPost_(e),this.endPost_=Ye.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new m(t,s))||(s=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=g.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(g.EMPTY_NODE);const r=this;return t.forEachChild(x,(o,a)=>{r.matches(new m(o,a))||(i=i.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ye(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new m(t,s))||(s=g.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=g.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(g.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new m(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ze(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(je(t,h));const E=a.updateImmediateChild(t,g.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(be(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(je(c.name,c.node)),r.trackChildChange(be(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,g.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=x}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ce}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:he}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===x}copy(){const e=new Pn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Tl(n){return n.loadsAllData()?new kn(n.getIndex()):n.hasLimit()?new Sl(n):new Ye(n)}function ks(n){const e={};if(n.isDefault())return e;let t;if(n.index_===x?t="$priority":n.index_===bl?t="$value":n.index_===we?t="$key":(f(n.index_ instanceof El,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=A(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=A(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+A(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=A(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+A(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ps(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==x&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Pi{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=st("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vt.getListenId_(e,s),a={};this.listens_[o]=a;const l=ks(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ee(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=vt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ks(e._queryParams),s=e._path.toString(),i=new et;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+no(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=He(a.responseText)}catch{F("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&F("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return{value:null,children:new Map}}function qi(n,e,t){if(y(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=v(e);n.children.has(s)||n.children.set(s,wt());const i=n.children.get(s);e=S(e),qi(i,e,t)}}function fn(n,e,t){n.value!==null?t(e,n.value):Nl(n,(s,i)=>{const r=new C(e.toString()+"/"+s);fn(i,r,t)})}function Nl(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&M(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=10*1e3,Al=30*1e3,Dl=5*60*1e3;class kl{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Rl(e);const s=Os+(Al-Os)*Math.random();Le(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;M(e,(i,r)=>{r>0&&q(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Le(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dl))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(V||(V={}));function On(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ln(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=V.ACK_USER_WRITE,this.source=On()}operationForChild(e){if(y(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new C(e));return new Et(w(),t,this.revert)}}else return f(v(this.path)===e,"operationForChild called for unrelated child."),new Et(S(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t){this.source=e,this.path=t,this.type=V.LISTEN_COMPLETE}operationForChild(e){return y(this.path)?new Ke(this.source,w()):new Ke(this.source,S(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=V.OVERWRITE}operationForChild(e){return y(this.path)?new ue(this.source,w(),this.snap.getImmediateChild(e)):new ue(this.source,S(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=V.MERGE}operationForChild(e){if(y(this.path)){const t=this.children.subtree(new C(e));return t.isEmpty()?null:t.value?new ue(this.source,w(),t.value):new Ie(this.source,w(),t)}else return f(v(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ie(this.source,S(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(y(e))return this.isFullyInitialized()&&!this.filtered_;const t=v(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ol(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Il(o.childName,o.snapshotNode))}),Me(n,i,"child_removed",e,s,t),Me(n,i,"child_added",e,s,t),Me(n,i,"child_moved",r,s,t),Me(n,i,"child_changed",e,s,t),Me(n,i,"value",e,s,t),i}function Me(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Ll(n,a,l)),o.forEach(a=>{const l=Ml(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Ml(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Ll(n,e,t){if(e.childName==null||t.childName==null)throw xe("Should only compare child_ events.");const s=new m(e.childName,e.snapshotNode),i=new m(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n,e){return{eventCache:n,serverCache:e}}function Fe(n,e,t,s){return kt(new ne(e,t,s),n.serverCache)}function Gi(n,e,t,s){return kt(n.eventCache,new ne(e,t,s))}function Ct(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function de(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt;const Fl=()=>(Xt||(Xt=new W(Ea)),Xt);class b{constructor(e,t=Fl()){this.value=e,this.children=t}static fromObject(e){let t=new b(null);return M(e,(s,i)=>{t=t.set(new C(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:w(),value:this.value};if(y(e))return null;{const s=v(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(S(e),t);return r!=null?{path:T(new C(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(y(e))return this;{const t=v(e),s=this.children.get(t);return s!==null?s.subtree(S(e)):new b(null)}}set(e,t){if(y(e))return new b(t,this.children);{const s=v(e),r=(this.children.get(s)||new b(null)).set(S(e),t),o=this.children.insert(s,r);return new b(this.value,o)}}remove(e){if(y(e))return this.children.isEmpty()?new b(null):new b(null,this.children);{const t=v(e),s=this.children.get(t);if(s){const i=s.remove(S(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new b(null):new b(this.value,r)}else return this}}get(e){if(y(e))return this.value;{const t=v(e),s=this.children.get(t);return s?s.get(S(e)):null}}setTree(e,t){if(y(e))return t;{const s=v(e),r=(this.children.get(s)||new b(null)).setTree(S(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new b(this.value,o)}}fold(e){return this.fold_(w(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(T(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,w(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(y(e))return null;{const r=v(e),o=this.children.get(r);return o?o.findOnPath_(S(e),T(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,w(),t)}foreachOnPath_(e,t,s){if(y(e))return this;{this.value&&s(t,this.value);const i=v(e),r=this.children.get(i);return r?r.foreachOnPath_(S(e),T(t,i),s):new b(null)}}foreach(e){this.foreach_(w(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(T(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.writeTree_=e}static empty(){return new $(new b(null))}}function We(n,e,t){if(y(e))return new $(new b(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=L(i,e);return r=r.updateChild(o,t),new $(n.writeTree_.set(i,r))}else{const i=new b(t),r=n.writeTree_.setTree(e,i);return new $(r)}}}function _n(n,e,t){let s=n;return M(t,(i,r)=>{s=We(s,T(e,i),r)}),s}function Ms(n,e){if(y(e))return $.empty();{const t=n.writeTree_.setTree(e,new b(null));return new $(t)}}function pn(n,e){return _e(n,e)!=null}function _e(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(L(t.path,e)):null}function Ls(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(x,(s,i)=>{e.push(new m(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new m(s,i.value))}),e}function Z(n,e){if(y(e))return n;{const t=_e(n,e);return t!=null?new $(new b(t)):new $(n.writeTree_.subtree(e))}}function gn(n){return n.writeTree_.isEmpty()}function Se(n,e){return ji(w(),n.writeTree_,e)}function ji(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ji(T(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(T(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n,e){return Qi(e,n)}function Wl(n,e,t,s,i){f(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=We(n.visibleWrites,e,t)),n.lastWriteId=s}function Bl(n,e,t,s){f(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=_n(n.visibleWrites,e,t),n.lastWriteId=s}function Ul(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Hl(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Vl(a,s.path)?i=!1:B(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return $l(n),!0;if(s.snap)n.visibleWrites=Ms(n.visibleWrites,s.path);else{const a=s.children;M(a,l=>{n.visibleWrites=Ms(n.visibleWrites,T(s.path,l))})}return!0}else return!1}function Vl(n,e){if(n.snap)return B(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&B(T(n.path,t),e))return!0;return!1}function $l(n){n.visibleWrites=zi(n.allWrites,ql,w()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function ql(n){return n.visible}function zi(n,e,t){let s=$.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)B(t,o)?(a=L(t,o),s=We(s,a,r.snap)):B(o,t)&&(a=L(o,t),s=We(s,w(),r.snap.getChild(a)));else if(r.children){if(B(t,o))a=L(t,o),s=_n(s,a,r.children);else if(B(o,t))if(a=L(o,t),y(a))s=_n(s,w(),r.children);else{const l=Ee(r.children,v(a));if(l){const c=l.getChild(S(a));s=We(s,w(),c)}}}else throw xe("WriteRecord should have .snap or .children")}}return s}function Yi(n,e,t,s,i){if(!s&&!i){const r=_e(n.visibleWrites,e);if(r!=null)return r;{const o=Z(n.visibleWrites,e);if(gn(o))return t;if(t==null&&!pn(o,w()))return null;{const a=t||g.EMPTY_NODE;return Se(o,a)}}}else{const r=Z(n.visibleWrites,e);if(!i&&gn(r))return t;if(!i&&t==null&&!pn(r,w()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(B(c.path,e)||B(e,c.path))},a=zi(n.allWrites,o,e),l=t||g.EMPTY_NODE;return Se(a,l)}}}function Gl(n,e,t){let s=g.EMPTY_NODE;const i=_e(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(x,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Z(n.visibleWrites,e);return t.forEachChild(x,(o,a)=>{const l=Se(Z(r,new C(o)),a);s=s.updateImmediateChild(o,l)}),Ls(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Z(n.visibleWrites,e);return Ls(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function jl(n,e,t,s,i){f(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=T(e,t);if(pn(n.visibleWrites,r))return null;{const o=Z(n.visibleWrites,r);return gn(o)?i.getChild(t):Se(o,i.getChild(t))}}function zl(n,e,t,s){const i=T(e,t),r=_e(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Z(n.visibleWrites,i);return Se(o,s.getNode().getImmediateChild(t))}else return null}function Yl(n,e){return _e(n.visibleWrites,e)}function Kl(n,e,t,s,i,r,o){let a;const l=Z(n.visibleWrites,e),c=_e(l,w());if(c!=null)a=c;else if(t!=null)a=Se(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Ql(){return{visibleWrites:$.empty(),allWrites:[],lastWriteId:-1}}function bt(n,e,t,s){return Yi(n.writeTree,n.treePath,e,t,s)}function Fn(n,e){return Gl(n.writeTree,n.treePath,e)}function Fs(n,e,t,s){return jl(n.writeTree,n.treePath,e,t,s)}function It(n,e){return Yl(n.writeTree,T(n.treePath,e))}function Xl(n,e,t,s,i,r){return Kl(n.writeTree,n.treePath,e,t,s,i,r)}function Wn(n,e,t){return zl(n.writeTree,n.treePath,e,t)}function Ki(n,e){return Qi(T(n.treePath,e),n.writeTree)}function Qi(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,ze(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,je(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,be(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,ze(s,e.snapshotNode,i.oldSnap));else throw xe("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Xi=new Zl;class Bn{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ne(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wn(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:de(this.viewCache_),r=Xl(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n){return{filter:n}}function tc(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function nc(n,e,t,s,i){const r=new Jl;let o,a;if(t.type===V.OVERWRITE){const c=t;c.source.fromUser?o=mn(n,e,c.path,c.snap,s,i,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!y(c.path),o=St(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===V.MERGE){const c=t;c.source.fromUser?o=ic(n,e,c.path,c.children,s,i,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=yn(n,e,c.path,c.children,s,i,a,r))}else if(t.type===V.ACK_USER_WRITE){const c=t;c.revert?o=ac(n,e,c.path,s,i,r):o=rc(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===V.LISTEN_COMPLETE)o=oc(n,e,t.path,s,r);else throw xe("Unknown operation type: "+t.type);const l=r.getChanges();return sc(e,o,l),{viewCache:o,changes:l}}function sc(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ct(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push($i(Ct(e)))}}function Ji(n,e,t,s,i,r){const o=e.eventCache;if(It(s,t)!=null)return e;{let a,l;if(y(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=de(e),u=c instanceof g?c:g.EMPTY_NODE,h=Fn(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=bt(s,de(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=v(t);if(c===".priority"){f(te(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Fs(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=S(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Fs(s,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Wn(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Fe(e,a,o.isFullyInitialized()||y(t),n.filter.filtersNodes())}}function St(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(y(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=v(t);if(!l.isCompleteForPath(t)&&te(t)>1)return e;const p=S(t),N=l.getNode().getImmediateChild(_).updateChild(p,s);_===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),_,N,p,Xi,null)}const h=Gi(e,c,l.isFullyInitialized()||y(t),u.filtersNodes()),d=new Bn(i,h,r);return Ji(n,h,t,i,d,a)}function mn(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new Bn(i,e,r);if(y(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Fe(e,c,!0,n.filter.filtersNodes());else{const h=v(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Fe(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=S(t),_=a.getNode().getImmediateChild(h);let p;if(y(d))p=s;else{const E=u.getCompleteChild(h);E!=null?Rn(d)===".priority"&&E.getChild(Mi(d)).isEmpty()?p=E:p=E.updateChild(d,s):p=g.EMPTY_NODE}if(_.equals(p))l=e;else{const E=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=Fe(e,E,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ws(n,e){return n.eventCache.isCompleteForChild(e)}function ic(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=T(t,l);Ws(e,v(u))&&(a=mn(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=T(t,l);Ws(e,v(u))||(a=mn(n,a,u,c,i,r,o))}),a}function Bs(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function yn(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;y(t)?c=s:c=new b(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),p=Bs(n,_,d);l=St(n,l,new C(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const p=e.serverCache.getNode().getImmediateChild(h),E=Bs(n,p,d);l=St(n,l,new C(h),E,i,r,o,a)}}),l}function rc(n,e,t,s,i,r,o){if(It(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(y(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return St(n,e,t,l.getNode().getChild(t),i,r,a,o);if(y(t)){let c=new b(null);return l.getNode().forEachChild(we,(u,h)=>{c=c.set(new C(u),h)}),yn(n,e,t,c,i,r,a,o)}else return e}else{let c=new b(null);return s.foreach((u,h)=>{const d=T(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),yn(n,e,t,c,i,r,a,o)}}function oc(n,e,t,s,i){const r=e.serverCache,o=Gi(e,r.getNode(),r.isFullyInitialized()||y(t),r.isFiltered());return Ji(n,o,t,s,Xi,i)}function ac(n,e,t,s,i,r){let o;if(It(s,t)!=null)return e;{const a=new Bn(s,e,i),l=e.eventCache.getNode();let c;if(y(t)||v(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=bt(s,de(e));else{const h=e.serverCache.getNode();f(h instanceof g,"serverChildren would be complete if leaf node"),u=Fn(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=v(t);let h=Wn(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,S(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,g.EMPTY_NODE,S(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=bt(s,de(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||It(s,w())!=null,Fe(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new kn(s.getIndex()),r=Tl(s);this.processor_=ec(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(g.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(g.EMPTY_NODE,a.getNode(),null),u=new ne(l,o.isFullyInitialized(),i.filtersNodes()),h=new ne(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=kt(h,u),this.eventGenerator_=new Pl(this.query_)}get query(){return this.query_}}function cc(n){return n.viewCache_.serverCache.getNode()}function hc(n){return Ct(n.viewCache_)}function uc(n,e){const t=de(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!y(e)&&!t.getImmediateChild(v(e)).isEmpty())?t.getChild(e):null}function Us(n){return n.eventRegistrations_.length===0}function dc(n,e){n.eventRegistrations_.push(e)}function Hs(n,e,t){const s=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Vs(n,e,t,s){e.type===V.MERGE&&e.source.queryId!==null&&(f(de(n.viewCache_),"We should always have a full cache before handling merges"),f(Ct(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=nc(n.processor_,i,e,t,s);return tc(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Zi(n,r.changes,r.viewCache.eventCache.getNode(),null)}function fc(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(x,(r,o)=>{s.push(be(r,o))}),t.isFullyInitialized()&&s.push($i(t.getNode())),Zi(n,s,t.getNode(),e)}function Zi(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Ol(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tt;class er{constructor(){this.views=new Map}}function _c(n){f(!Tt,"__referenceConstructor has already been defined"),Tt=n}function pc(){return f(Tt,"Reference.ts has not been loaded"),Tt}function gc(n){return n.views.size===0}function Un(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return f(r!=null,"SyncTree gave us an op for an invalid query."),Vs(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Vs(o,e,t,s));return r}}function tr(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=bt(t,i?s:null),l=!1;a?l=!0:s instanceof g?(a=Fn(t,s),l=!1):(a=g.EMPTY_NODE,l=!1);const c=kt(new ne(a,l,!1),new ne(s,i,!1));return new lc(e,c)}return o}function mc(n,e,t,s,i,r){const o=tr(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),dc(o,t),fc(o,t)}function yc(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=se(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Hs(c,t,s)),Us(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Hs(l,t,s)),Us(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!se(n)&&r.push(new(pc())(e._repo,e._path)),{removed:r,events:o}}function nr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ee(n,e){let t=null;for(const s of n.views.values())t=t||uc(s,e);return t}function sr(n,e){if(e._queryParams.loadsAllData())return Ot(n);{const s=e._queryIdentifier;return n.views.get(s)}}function ir(n,e){return sr(n,e)!=null}function se(n){return Ot(n)!=null}function Ot(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt;function vc(n){f(!xt,"__referenceConstructor has already been defined"),xt=n}function wc(){return f(xt,"Reference.ts has not been loaded"),xt}let Ec=1;class $s{constructor(e){this.listenProvider_=e,this.syncPointTree_=new b(null),this.pendingWriteTree_=Ql(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rr(n,e,t,s,i){return Wl(n.pendingWriteTree_,e,t,s,i),i?Ae(n,new ue(On(),e,t)):[]}function Cc(n,e,t,s){Bl(n.pendingWriteTree_,e,t,s);const i=b.fromObject(t);return Ae(n,new Ie(On(),e,i))}function Q(n,e,t=!1){const s=Ul(n.pendingWriteTree_,e);if(Hl(n.pendingWriteTree_,e)){let r=new b(null);return s.snap!=null?r=r.set(w(),!0):M(s.children,o=>{r=r.set(new C(o),!0)}),Ae(n,new Et(s.path,r,t))}else return[]}function rt(n,e,t){return Ae(n,new ue(Mn(),e,t))}function bc(n,e,t){const s=b.fromObject(t);return Ae(n,new Ie(Mn(),e,s))}function Ic(n,e){return Ae(n,new Ke(Mn(),e))}function Sc(n,e,t){const s=Vn(n,t);if(s){const i=$n(s),r=i.path,o=i.queryId,a=L(r,e),l=new Ke(Ln(o),a);return qn(n,r,l)}else return[]}function or(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ir(o,e))){const l=yc(o,e,t,s);gc(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,_)=>se(_));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Rc(d);for(let p=0;p<_.length;++p){const E=_[p],N=E.query,G=hr(n,E);n.listenProvider_.startListening(Be(N),Qe(n,N),G.hashFn,G.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Be(e),null):c.forEach(d=>{const _=n.queryToTagMap.get(Mt(d));n.listenProvider_.stopListening(Be(d),_)}))}Ac(n,c)}return a}function ar(n,e,t,s){const i=Vn(n,s);if(i!=null){const r=$n(i),o=r.path,a=r.queryId,l=L(o,e),c=new ue(Ln(a),l,t);return qn(n,o,c)}else return[]}function Tc(n,e,t,s){const i=Vn(n,s);if(i){const r=$n(i),o=r.path,a=r.queryId,l=L(o,e),c=b.fromObject(t),u=new Ie(Ln(a),l,c);return qn(n,o,u)}else return[]}function xc(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,_)=>{const p=L(d,i);r=r||ee(_,p),o=o||se(_)});let a=n.syncPointTree_.get(i);a?(o=o||se(a),r=r||ee(a,w())):(a=new er,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=g.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,p)=>{const E=ee(p,w());E&&(r=r.updateImmediateChild(_,E))}));const c=ir(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Mt(e);f(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Dc();n.queryToTagMap.set(d,_),n.tagToQueryMap.set(_,d)}const u=Pt(n.pendingWriteTree_,i);let h=mc(a,e,t,u,r,l);if(!c&&!o&&!s){const d=sr(a,e);h=h.concat(kc(n,e,d))}return h}function Hn(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=L(o,e),c=ee(a,l);if(c)return c});return Yi(i,e,r,t,!0)}function Nc(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=L(c,t);s=s||ee(u,h)});let i=n.syncPointTree_.get(t);i?s=s||ee(i,w()):(i=new er,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new ne(s,!0,!1):null,a=Pt(n.pendingWriteTree_,e._path),l=tr(i,e,a,r?o.getNode():g.EMPTY_NODE,r);return hc(l)}function Ae(n,e){return lr(e,n.syncPointTree_,null,Pt(n.pendingWriteTree_,w()))}function lr(n,e,t,s){if(y(n.path))return cr(n,e,t,s);{const i=e.get(w());t==null&&i!=null&&(t=ee(i,w()));let r=[];const o=v(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Ki(s,o);r=r.concat(lr(a,l,c,u))}return i&&(r=r.concat(Un(i,n,s,t))),r}}function cr(n,e,t,s){const i=e.get(w());t==null&&i!=null&&(t=ee(i,w()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Ki(s,o),u=n.operationForChild(o);u&&(r=r.concat(cr(u,a,l,c)))}),i&&(r=r.concat(Un(i,n,s,t))),r}function hr(n,e){const t=e.query,s=Qe(n,t);return{hashFn:()=>(cc(e)||g.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Sc(n,t._path,s):Ic(n,t._path);{const r=Ia(i,t);return or(n,t,null,r)}}}}function Qe(n,e){const t=Mt(e);return n.queryToTagMap.get(t)}function Mt(n){return n._path.toString()+"$"+n._queryIdentifier}function Vn(n,e){return n.tagToQueryMap.get(e)}function $n(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new C(n.substr(0,e))}}function qn(n,e,t){const s=n.syncPointTree_.get(e);f(s,"Missing sync point for query tag that we're tracking");const i=Pt(n.pendingWriteTree_,e);return Un(s,t,i,null)}function Rc(n){return n.fold((e,t,s)=>{if(t&&se(t))return[Ot(t)];{let i=[];return t&&(i=nr(t)),M(s,(r,o)=>{i=i.concat(o)}),i}})}function Be(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(wc())(n._repo,n._path):n}function Ac(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Mt(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Dc(){return Ec++}function kc(n,e,t){const s=e._path,i=Qe(n,e),r=hr(n,t),o=n.listenProvider_.startListening(Be(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)f(!se(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!y(c)&&u&&se(u))return[Ot(u).query];{let d=[];return u&&(d=d.concat(nr(u).map(_=>_.query))),M(h,(_,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Be(u),Qe(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Gn(t)}node(){return this.node_}}class jn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=T(this.path_,e);return new jn(this.syncTree_,t)}node(){return Hn(this.syncTree_,this.path_)}}const Pc=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},qs=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Oc(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Mc(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Oc=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},Mc=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&f(!1,"Unexpected increment value: "+s);const i=e.node();if(f(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ur=function(n,e,t,s){return zn(e,new jn(t,n),s)},dr=function(n,e,t){return zn(n,new Gn(e),t)};function zn(n,e,t){const s=n.getPriority().val(),i=qs(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=qs(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new D(a,R(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new D(i))),o.forEachChild(x,(a,l)=>{const c=zn(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Kn(n,e){let t=e instanceof C?e:new C(e),s=n,i=v(t);for(;i!==null;){const r=Ee(s.node.children,i)||{children:{},childCount:0};s=new Yn(i,s,r),t=S(t),i=v(t)}return s}function De(n){return n.node.value}function fr(n,e){n.node.value=e,vn(n)}function _r(n){return n.node.childCount>0}function Lc(n){return De(n)===void 0&&!_r(n)}function Lt(n,e){M(n.node.children,(t,s)=>{e(new Yn(t,n,s))})}function pr(n,e,t,s){t&&!s&&e(n),Lt(n,i=>{pr(i,e,!0,s)}),t&&s&&e(n)}function Fc(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ot(n){return new C(n.parent===null?n.name:ot(n.parent)+"/"+n.name)}function vn(n){n.parent!==null&&Wc(n.parent,n.name,n)}function Wc(n,e,t){const s=Lc(t),i=q(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,vn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,vn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=/[\[\].#$\/\u0000-\u001F\u007F]/,Uc=/[\[\].#$\u0000-\u001F\u007F]/,Jt=10*1024*1024,Qn=function(n){return typeof n=="string"&&n.length!==0&&!Bc.test(n)},gr=function(n){return typeof n=="string"&&n.length!==0&&!Uc.test(n)},Hc=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gr(n)},Vc=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!In(n)||n&&typeof n=="object"&&q(n,".sv")},$c=function(n,e,t,s){s&&e===void 0||Ft(Rt(n,"value"),e,t)},Ft=function(n,e,t){const s=t instanceof C?new il(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+oe(s));if(typeof e=="function")throw new Error(n+"contains a function "+oe(s)+" with contents = "+e.toString());if(In(e))throw new Error(n+"contains "+e.toString()+" "+oe(s));if(typeof e=="string"&&e.length>Jt/3&&At(e)>Jt)throw new Error(n+"contains a string greater than "+Jt+" utf8 bytes "+oe(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(M(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Qn(o)))throw new Error(n+" contains an invalid key ("+o+") "+oe(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rl(s,o),Ft(n,a,s),ol(s)}),i&&r)throw new Error(n+' contains ".value" child '+oe(s)+" in addition to actual children.")}},qc=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=Ge(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Qn(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(sl);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&B(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Gc=function(n,e,t,s){if(s&&e===void 0)return;const i=Rt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];M(e,(o,a)=>{const l=new C(o);if(Ft(i,a,T(t,l)),Rn(l)===".priority"&&!Vc(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),qc(i,r)},mr=function(n,e,t,s){if(!(s&&t===void 0)&&!gr(t))throw new Error(Rt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jc=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mr(n,e,t,s)},yr=function(n,e){if(v(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},zc=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Qn(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Hc(t))throw new Error(Rt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xn(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Li(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function U(n,e,t){Xn(n,t),Kc(n,s=>B(s,e)||B(e,s))}function Kc(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Qc(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Qc(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();le&&O("event: "+t.toString()),Re(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="repo_interrupt",Jc=25;class Zc{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Yc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wt(),this.transactionQueueTree_=new Yn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eh(n,e,t){if(n.stats_=xn(n.repoInfo_),n.forceRestClient_||Na())n.server_=new vt(n.repoInfo_,(s,i,r,o)=>{Gs(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>js(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{A(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new z(n.repoInfo_,e,(s,i,r,o)=>{Gs(n,s,i,r,o)},s=>{js(n,s)},s=>{nh(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Pa(n.repoInfo_,()=>new kl(n.stats_,n.server_)),n.infoData_=new xl,n.infoSyncTree_=new $s({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=rt(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Jn(n,"connected",!1),n.serverSyncTree_=new $s({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);U(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function th(n){const t=n.infoData_.getNode(new C(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Wt(n){return Pc({timestamp:th(n)})}function Gs(n,e,t,s,i){n.dataUpdateCount++;const r=new C(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=ft(t,c=>R(c));o=Tc(n.serverSyncTree_,r,l,i)}else{const l=R(t);o=ar(n.serverSyncTree_,r,l,i)}else if(s){const l=ft(t,c=>R(c));o=bc(n.serverSyncTree_,r,l)}else{const l=R(t);o=rt(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Te(n,r)),U(n.eventQueue_,a,o)}function js(n,e){Jn(n,"connected",e),e===!1&&oh(n)}function nh(n,e){M(e,(t,s)=>{Jn(n,t,s)})}function Jn(n,e,t){const s=new C("/.info/"+e),i=R(t);n.infoData_.updateSnapshot(s,i);const r=rt(n.infoSyncTree_,s,i);U(n.eventQueue_,s,r)}function Zn(n){return n.nextWriteId_++}function sh(n,e,t){const s=Nc(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=R(i).withIndex(e._queryParams.getIndex());xc(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=rt(n.serverSyncTree_,e._path,r);else{const a=Qe(n.serverSyncTree_,e);o=ar(n.serverSyncTree_,e._path,r,a)}return U(n.eventQueue_,e._path,o),or(n.serverSyncTree_,e,t,null,!0),r},i=>(at(n,"get for query "+A(e)+" failed: "+i),Promise.reject(new Error(i))))}function ih(n,e,t,s,i){at(n,"set",{path:e.toString(),value:t,priority:s});const r=Wt(n),o=R(t,s),a=Hn(n.serverSyncTree_,e),l=dr(o,a,r),c=Zn(n),u=rr(n.serverSyncTree_,e,l,c,!0);Xn(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,_)=>{const p=d==="ok";p||F("set at "+e+" failed: "+d);const E=Q(n.serverSyncTree_,c,!p);U(n.eventQueue_,e,E),wn(n,i,d,_)});const h=ts(n,e);Te(n,h),U(n.eventQueue_,h,[])}function rh(n,e,t,s){at(n,"update",{path:e.toString(),value:t});let i=!0;const r=Wt(n),o={};if(M(t,(a,l)=>{i=!1,o[a]=ur(T(e,a),R(l),n.serverSyncTree_,r)}),i)O("update() called with empty data.  Don't do anything."),wn(n,s,"ok",void 0);else{const a=Zn(n),l=Cc(n.serverSyncTree_,e,o,a);Xn(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,u)=>{const h=c==="ok";h||F("update at "+e+" failed: "+c);const d=Q(n.serverSyncTree_,a,!h),_=d.length>0?Te(n,e):e;U(n.eventQueue_,_,d),wn(n,s,c,u)}),M(t,c=>{const u=ts(n,T(e,c));Te(n,u)}),U(n.eventQueue_,e,[])}}function oh(n){at(n,"onDisconnectEvents");const e=Wt(n),t=wt();fn(n.onDisconnect_,w(),(i,r)=>{const o=ur(i,r,n.serverSyncTree_,e);qi(t,i,o)});let s=[];fn(t,w(),(i,r)=>{s=s.concat(rt(n.serverSyncTree_,i,r));const o=ts(n,i);Te(n,o)}),n.onDisconnect_=wt(),U(n.eventQueue_,w(),s)}function ah(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Xc)}function at(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),O(t,...e)}function wn(n,e,t,s){e&&Re(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function vr(n,e,t){return Hn(n.serverSyncTree_,e,t)||g.EMPTY_NODE}function es(n,e=n.transactionQueueTree_){if(e||Bt(n,e),De(e)){const t=Er(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&lh(n,ot(e),t)}else _r(e)&&Lt(e,t=>{es(n,t)})}function lh(n,e,t){const s=t.map(c=>c.currentWriteId),i=vr(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];f(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=L(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{at(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Q(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Bt(n,Kn(n.transactionQueueTree_,e)),es(n,n.transactionQueueTree_),U(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Re(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{F("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Te(n,e)}},o)}function Te(n,e){const t=wr(n,e),s=ot(t),i=Er(n,t);return ch(n,i,s),s}function ch(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=L(t,l.path);let u=!1,h;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Q(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Jc)u=!0,h="maxretry",i=i.concat(Q(n.serverSyncTree_,l.currentWriteId,!0));else{const d=vr(n,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Ft("transaction failed: Data returned ",_,l.path);let p=R(_);typeof _=="object"&&_!=null&&q(_,".priority")||(p=p.updatePriority(d.getPriority()));const N=l.currentWriteId,G=Wt(n),ie=dr(p,d,G);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=ie,l.currentWriteId=Zn(n),o.splice(o.indexOf(N),1),i=i.concat(rr(n.serverSyncTree_,l.path,ie,l.currentWriteId,l.applyLocally)),i=i.concat(Q(n.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(Q(n.serverSyncTree_,l.currentWriteId,!0))}U(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Bt(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Re(s[a]);es(n,n.transactionQueueTree_)}function wr(n,e){let t,s=n.transactionQueueTree_;for(t=v(e);t!==null&&De(s)===void 0;)s=Kn(s,t),e=S(e),t=v(e);return s}function Er(n,e){const t=[];return Cr(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Cr(n,e,t){const s=De(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Lt(e,i=>{Cr(n,i,t)})}function Bt(n,e){const t=De(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,fr(e,t.length>0?t:void 0)}Lt(e,s=>{Bt(n,s)})}function ts(n,e){const t=ot(wr(n,e)),s=Kn(n.transactionQueueTree_,e);return Fc(s,i=>{Zt(n,i)}),Zt(n,s),pr(s,i=>{Zt(n,i)}),t}function Zt(n,e){const t=De(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Q(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?fr(e,void 0):t.length=r+1,U(n.eventQueue_,ot(e),i);for(let o=0;o<s.length;o++)Re(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function uh(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):F(`Invalid query segment '${t}' in query '${n}'`)}return e}const zs=function(n,e){const t=dh(n),s=t.namespace;t.domain==="firebase.com"&&Y(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Y("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||va();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ti(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new C(t.pathString)}},dh=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=hh(n.substring(u,h)));const d=uh(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+A(this.snapshot.exportVal())}}class _h{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return y(this._path)?null:Rn(this._path)}get ref(){return new K(this._repo,this._path)}get _queryIdentifier(){const e=Ps(this._queryParams),t=Sn(e);return t==="{}"?"default":t}get _queryObject(){return Ps(this._queryParams)}isEqual(e){if(e=Ne(e),!(e instanceof ns))return!1;const t=this._repo===e._repo,s=Li(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+nl(this._path)}}class K extends ns{constructor(e,t){super(e,t,new Pn,!1)}get parent(){const e=Mi(this._path);return e===null?null:new K(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xe{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new C(e),s=Je(this.ref,e);return new Xe(this._node.getChild(t),s,x)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xe(i,Je(this.ref,s),x)))}hasChild(e){const t=new C(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ut(n,e){return n=Ne(n),n._checkNotDeleted("ref"),e!==void 0?Je(n._root,e):n._root}function Je(n,e){return n=Ne(n),v(n._path)===null?jc("child","path",e,!1):mr("child","path",e,!1),new K(n._repo,T(n._path,e))}function gh(n){return yr("remove",n._path),br(n,null)}function br(n,e){n=Ne(n),yr("set",n._path),$c("set",e,n._path,!1);const t=new et;return ih(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function mh(n,e){Gc("update",e,n._path,!1);const t=new et;return rh(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Ir(n){n=Ne(n);const e=new ph(()=>{}),t=new ss(e);return sh(n._repo,n,t).then(s=>new Xe(s,new K(n._repo,n._path),n._queryParams.getIndex()))}class ss{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new fh("value",this,new Xe(e.snapshotNode,new K(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new _h(this,e,t):null}matches(e){return e instanceof ss?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}_c(K);vc(K);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="FIREBASE_DATABASE_EMULATOR_HOST",En={};let vh=!1;function wh(n,e,t,s){n.repoInfo_=new Ti(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Eh(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Y("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),O("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=zs(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[yh]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=zs(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ve(ve.OWNER):new Aa(n.name,n.options,e);zc("Invalid Firebase Database URL",o),y(o.path)||Y("Database URL must point to the root of a Firebase Database (not including a child path).");const h=bh(a,n,u,new Ra(n.name,t));return new Ih(h,n)}function Ch(n,e){const t=En[e];(!t||t[n.key]!==n)&&Y(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ah(n),delete t[n.key]}function bh(n,e,t,s){let i=En[e.name];i||(i={},En[e.name]=i);let r=i[n.toURLString()];return r&&Y("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Zc(n,vh,t,s),i[n.toURLString()]=r,r}class Ih{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new K(this._repo,w())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ch(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Y("Cannot call "+e+" on a deleted database.")}}function Ht(n=ia(),e){const t=ea(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Gr("database");s&&Sh(t,...s)}return t}function Sh(n,e,t,s={}){n=Ne(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Y("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Y('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ve(ve.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:jr(s.mockUserToken,n.app.options.projectId);r=new ve(o)}wh(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){_a(sa),pt(new Ve("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Eh(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),me(gs,ms,n),me(gs,ms,"esm2017")}z.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};z.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Th();var xh="firebase",Nh="10.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */me(xh,Nh,"app");const Rh=JSON.parse({}.VITE_FIREBASE_CONFIG),Sr=()=>{ci(Rh)};Sr();const Ah=async n=>{let e=new Ks(n);try{const t=await br(Ut(Ht(),`words/${e.uuid}`),e);return Nt(document.querySelector(".words-container ")),iziToast.success({title:"Added",message:"Successfully added!",position:"topRight"}),t}catch(t){console.log(t),iziToast.error({title:"Error",message:"Error adding word!",position:"topRight"})}},Dh=async n=>{let e=new Ks(n);try{const t=await mh(Ut(Ht(),`words/${e.uuid}`),{ip:e.ip});return Nt(document.querySelector(".words-container ")),iziToast.success({title:"Added",message:"Successfully added!",position:"topRight"}),t}catch(t){console.log(t),iziToast.error({title:"Error",message:"Error adding word!",position:"topRight"})}};Sr();const Tr=Ut(Ht()),kh=async()=>{const n=await Ir(Je(Tr,"words")).then(e=>{if(e.exists())return e.val()}).catch(e=>{console.error(e)});try{return Object.keys(n).map(s=>n[s]).slice(0,10)}catch{return[].slice(0,10)}},lt=async()=>{const n=await Ir(Je(Tr,"words")).then(e=>{if(e.exists())return e.val()}).catch(e=>{console.error(e)});try{return Object.keys(n).map(s=>n[s])}catch{return[]}},Ue={words:[]},Ph=async n=>CryptoJS.AES.encrypt(n,{}.VITE_SECRET_KEY).toString(),is=async n=>CryptoJS.AES.decrypt(n,{}.VITE_SECRET_KEY).toString(CryptoJS.enc.Utf8),rs=async()=>{try{return await(await fetch("https://api.ipify.org/")).text()}catch{return console.log("Error loading IP"),null}},Oh=async()=>{const n=await kh();Ue.words=n},Mh=async()=>{const n=await lt();return Ue.words=n,n},Lh=async()=>{const n=await lt(),e=await rs(),t=n.map(async r=>r.ip==="NULL"?!1:await is(r.ip)===e);return(await Promise.all(t)).includes(!0)},Ze={state:Ue,loadStationWords:Oh,loadMoreWords:Mh,word_confirm:Lh,getWords:()=>[...Ue.words],getCurrentPage:()=>Ue.currentPage},Fh=async()=>{const n=await lt(),e=await rs();for(const t of n)await is(t.ip)===e&&(await Wh(t.uuid),Hh())},Wh=async n=>{const e=Ht();gh(Ut(e,`words/${n}`)).then(()=>{}).catch(t=>{console.log(t)})},Bh=async()=>{const n=await lt(),e=n.some(s=>String(s.date)<`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`),t=n.filter(s=>String(s.date)<`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`);e&&t.forEach(async s=>{await Dh(s)})};Bh();const Uh=async()=>{const n=await lt(),e=await rs(),t=n.map(async o=>o.ip==="NULL"?!1:await is(o.ip)===e),i=(await Promise.all(t)).includes(!0),r=n.some(o=>String(o.date)==`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`);return!!(i&&r)},xr=()=>{const n=document.createElement("div");return n.innerHTML=`
    <div class="loader my-8">
        <li class="ball"></li>
        <li class="ball"></li>
        <li class="ball"></li>
    </div>
    `,n},Nr=async()=>{await Ze.word_confirm()&&document.querySelector("#delete-words").classList.replace("hidden","flex")},Hh=()=>{document.querySelector("#delete-words").classList.replace("flex","hidden")},Vh=async n=>{const e=xr();n.append(e);try{await Ze.loadStationWords(),e.remove();const t=Ze.getWords();Ys(t).forEach(i=>{n.innerHTML+=i}),Swal.fire("Welcome!","This web you can add a word a day and see the words of other people!, you can add a word every 24 hours!, enjoy!","success")}catch(t){Swal.fire({icon:"error",title:"Oops...",text:"Server does not respond!",footer:"if you have a problem contact me! #Discord: goddoesnotplaydice"});const s=document.createElement("h3");s.classList.add("text-center","lg:text-2xl","text-xl","py-2","font-medium","text-red-500"),s.innerHTML=`Error loading words: ${t.message} Maybe the DB is not working!`,n.innerHTML=s.outerHTML,document.querySelector(".loadMore").remove()}},$h=()=>{document.querySelector(".reload_icon").classList.replace("fa-spinner","fa-rotate-right"),document.querySelector(".reload_text").innerHTML="Reload"},qh=()=>{let n=document.querySelector(".loadMore_btn"),e=document.querySelector(".reload_text"),t=document.querySelector(".reload_icon");document.querySelector(".loadMore-block").classList.toggle("hidden"),n.classList.replace("bg-purple-800","bg-gray-700"),n.classList.replace("hover:bg-purple-700","hover:bg-gray-600"),t.classList.replace("fa-spinner","fa-rotate-right"),t.classList.add("animate-spin"),e.innerHTML="Reload",iziToast.warning({title:"Warning Reload",message:"You can't reload too fast!",position:"topRight"}),setTimeout(()=>{document.querySelector(".loadMore-block").classList.toggle("hidden"),n.classList.replace("bg-gray-700","bg-purple-800"),n.classList.replace("hover:bg-gray-600","hover:bg-purple-700"),t.classList.replace("fa-spinner","fa-rotate-right"),t.classList.remove("animate-spin"),e.innerHTML="Reload"},5e3)};let en=0;const Nt=async n=>{const e=xr();n.insertAdjacentElement("afterend",e);try{await Ze.loadMoreWords();const t=Ze.getWords();let s=Ys(t);n.innerHTML="",s.forEach(i=>{n.innerHTML+=i}),en>1?(qh(),en=0):($h(),en++,iziToast.info({title:"Reload",message:"Successfully Reloaded!",position:"topRight"})),Nr(),e.remove()}catch(t){const s=document.createElement("h3");s.classList.add("text-center","lg:text-2xl","text-xl","py-2","font-medium","text-red-500"),s.innerHTML=`Error loading words: ${t.message}`,n.innerHTML=s.outerHTML,document.querySelector(".loadMore").remove()}},Gh=async n=>{try{await Vh(n),Nr()}catch(e){console.log(e)}try{document.querySelector(".loadMore").addEventListener("click",async()=>{await Nt(n)})}catch(e){console.log(e)}try{document.querySelector("#delete-words").addEventListener("click",async()=>{await Fh(),await Nt(n)})}catch(e){console.log(e)}},jh=()=>{window.addEventListener("scroll",()=>{const n=document.querySelector("#header"),e=document.querySelectorAll(".element-text"),t=document.querySelector(".element-title"),s=document.querySelector(".git-hub-icon");if(window.scrollY>95){n.classList.add("fixed","bg-purple-600","shadow-md"),t.classList.replace("text-purple-500","text-white"),s.classList.replace("text-purple-600","text-white");for(const i of e)i.classList.replace("lg:text-purple-500","lg:text-white"),i.classList.replace("hover:bg-purple-600","hover:bg-white"),i.classList.replace("hover:text-white","hover:text-purple-500")}else if(window.scrollY==0){n.classList.remove("fixed","bg-purple-600","shadow-md"),t.classList.replace("text-white","text-purple-500"),s.classList.replace("text-white","text-purple-600");for(const i of e)i.classList.replace("lg:text-white","lg:text-purple-500"),i.classList.replace("hover:bg-white","hover:bg-purple-600"),i.classList.replace("hover:text-purple-500","hover:text-white")}})},zh=()=>{const n=document.querySelector(".modal"),e=document.querySelector("#create-word"),t=document.querySelector(".close-modal"),s=document.querySelector("#new_words_text"),i=document.querySelector("#new_words_form"),r=document.querySelector("#errors");let o=!1;const a=()=>{o||(o=!0,n.classList.contains("animate__zoomOut")?(n.classList.remove("animate__zoomOut"),n.classList.remove("hidden"),n.classList.add("animate__zoomIn"),o=!1,s.focus()):(n.classList.add("animate__zoomOut"),setTimeout(()=>{n.classList.add("hidden"),o=!1},500),i.reset(),r.classList.add("opacity-0")))};e.addEventListener("click",a),t.addEventListener("click",a);const l=async()=>{try{return await(await fetch("https://api.ipify.org/")).text()}catch{return console.log("Error loading IP"),null}},c=u=>{let h=u.split(" ");if(h=h[0].trim(),h===""){r.classList.remove("opacity-0"),r.innerHTML="Please enter a word";return}else if(h.length>45){r.classList.remove("opacity-0"),r.innerHTML="The word is too long";return}else if(h.length<3){r.classList.remove("opacity-0"),r.innerHTML="The word is too short";return}else{let d=/^[a-zA-Z]+$/;if(!h.match(d)){r.classList.remove("opacity-0"),r.innerHTML="The word must be letters only";return}}return!0};i.addEventListener("submit",async u=>{if(u.preventDefault(),await Uh())iziToast.error({title:"Invalid",message:"You already have a word!",position:"topRight"});else{const d=l(),_=new FormData(i),p=await d,N={ip:await Ph(p),date:`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`};for(const[G,ie]of _)if(G==="word")if(c(ie))N[G]=String(ie.split(" ")[0].trim());else return;await Ah(N),a()}})},Yh=async n=>{document.querySelector(n).innerHTML=Ar,jh(),zh(),Gh(document.querySelector(".words-container"))};Yh("#app");
