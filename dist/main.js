!function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=1)}([function(e,n,o){const t=o(2);e.exports=async(e,n={})=>{const o=`http://api.lvh.me/v2${n.path||""}`;let r=await t(o,{method:n.method||"POST",body:JSON.stringify(e||{}),headers:{Authorization:n.token,"Content-Type":"application/json"}});if(!r.headers.get("content-type").includes("application/json"))throw new Error("Invalid content-type on response from monday api graphql");let i;try{i=await r.json()}catch(e){throw new Error("Could not parse monday graphql response to JSON")}if(i.errors)throw new Error("Graphql validation errors");const{status_code:a,error_code:s,error_message:d,error_data:l}=i;if(!r.ok||s){const e="There was an error in response from monday.com graphql API";throw JSON.stringify(l),new ApiError(e,{statusCode:a,errorCode:s,errorMessage:d,errorData:l})}return i}},function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t);window.monday={listeners:{},init:e=>{window.monday.client_id=e,window.addEventListener("message",window.monday.receiveMessage,!1)},token:e=>{window.monday.token=e},api:e=>(console.log("api",e,window.monday.token),r()({query:e},{token:window.monday.token})),localApi:(e,n)=>new Promise(function(o,t){window.parent.postMessage({method:e,args:n},"*");var r=n=>{n.data.method==e&&(o(n.data),window.removeEventListener("message",r))};window.addEventListener("message",r,!1)}),receiveMessage:e=>{const{method:n}=e.data,o=window.monday.listeners[n];o&&o.forEach(n=>{n(e.data)})},listen:(e,n)=>{window.monday.localApi("listen",{type:e}),window.monday.listeners[e]=window.monday.listeners[e]||[],window.monday.listeners[e].push(n)},authenticate:()=>{var e=`http://auth.lvh.me/oauth/authorize?client_id=${window.monday.client_id}&scope=me:monday_service_session`;window.location=e}}},function(e,n,o){"use strict";var t=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("unable to locate global object")}();e.exports=n=t.fetch,n.default=t.fetch.bind(t),n.Headers=t.Headers,n.Request=t.Request,n.Response=t.Response}]);