!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],t):t((e=e||self).firebase)}(this,function(g){"use strict";try{(function(){g=g&&g.hasOwnProperty("default")?g.default:g;var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function e(i,a,s,u){return new(s=s||Promise)(function(e,t){function n(e){try{o(u.next(e))}catch(e){t(e)}}function r(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(n,r)}o((u=u.apply(i,a||[])).next())})}function d(n,r){var o,i,a,e,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,i&&(a=2&t[0]?i.return:t[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,i=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],i=0}finally{o=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}var t,r,o,p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},h=(o=Error,n(t=a,r=o),void(t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)),a);function i(){this.constructor=t}function a(e,t,n){var r=o.call(this,t)||this;return Object.setPrototypeOf(r,a.prototype),r.code=e,r.details=n,r}var s=(u.prototype.getAuthToken=function(){return e(this,void 0,void 0,function(){var t;return d(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.app.INTERNAL.getToken()];case 1:return(t=e.sent())?[2,t.accessToken]:[2,void 0];case 2:return e.sent(),[2,void 0];case 3:return[2]}})})},u.prototype.getInstanceIdToken=function(){return e(this,void 0,void 0,function(){var t;return d(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),this.app.messaging?[4,this.app.messaging().getToken()]:[2,void 0];case 1:return(t=e.sent())?[2,t]:[2,void 0];case 2:return e.sent(),[2,void 0];case 3:return[2]}})})},u.prototype.getContext=function(){return e(this,void 0,void 0,function(){var t,n;return d(this,function(e){switch(e.label){case 0:return[4,this.getAuthToken()];case 1:return t=e.sent(),[4,this.getInstanceIdToken()];case 2:return n=e.sent(),[2,{authToken:t,instanceIdToken:n}]}})})},u);function u(e){this.app=e}function c(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}var l=(f.prototype.encode=function(e){var t=this;if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(Array.isArray(e))return e.map(function(e){return t.encode(e)});if("function"==typeof e||"object"==typeof e)return c(e,function(e){return t.encode(e)});throw new Error("Data cannot be encoded in JSON: "+e)},f.prototype.decode=function(e){var t=this;if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":var n=Number(e.value);if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+e);return n;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(function(e){return t.decode(e)}):"function"==typeof e||"object"==typeof e?c(e,function(e){return t.decode(e)}):e},f);function f(){}var v=(Object.defineProperty(y.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),y.prototype._url=function(e){var t=this.app_.options.projectId,n=this.region_;return null===this.emulatorOrigin?"https://"+n+"-"+t+".cloudfunctions.net/"+e:this.emulatorOrigin+"/"+t+"/"+n+"/"+e},y.prototype.useFunctionsEmulator=function(e){this.emulatorOrigin=e},y.prototype.httpsCallable=function(t,n){var r=this;return function(e){return r.call(t,e,n||{})}},y.prototype.postJSON=function(r,o,i){return e(this,void 0,void 0,function(){var t,n;return d(this,function(e){switch(e.label){case 0:i.append("Content-Type","application/json"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch(r,{method:"POST",body:JSON.stringify(o),headers:i})];case 2:return t=e.sent(),[3,4];case 3:return e.sent(),[2,{status:0,json:null}];case 4:n=null,e.label=5;case 5:return e.trys.push([5,7,,8]),[4,t.json()];case 6:return n=e.sent(),[3,8];case 7:return e.sent(),[3,8];case 8:return[2,{status:t.status,json:n}]}})})},y.prototype.call=function(c,l,f){return e(this,void 0,void 0,function(){var t,n,r,o,i,a,s,u;return d(this,function(e){switch(e.label){case 0:return t=this._url(c),l=this.serializer.encode(l),n={data:l},r=new Headers,[4,this.contextProvider.getContext()];case 1:return(o=e.sent()).authToken&&r.append("Authorization","Bearer "+o.authToken),o.instanceIdToken&&r.append("Firebase-Instance-ID-Token",o.instanceIdToken),i=f.timeout||7e4,[4,Promise.race([this.postJSON(t,n,r),function(n){return new Promise(function(e,t){setTimeout(function(){t(new h("deadline-exceeded","deadline-exceeded"))},n)})}(i),this.cancelAllRequests])];case 2:if(!(a=e.sent()))throw new h("cancelled","Firebase Functions instance was deleted.");if(s=function(e,t,n){var r=function(e){if(200<=e&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),o=r,i=void 0;try{var a=t&&t.error;if(a){var s=a.status;if("string"==typeof s){if(!p[s])return new h("internal","internal");r=p[s],o=s}var u=a.message;"string"==typeof u&&(o=u),void 0!==(i=a.details)&&(i=n.decode(i))}}catch(e){}return"ok"===r?null:new h(r,o,i)}(a.status,a.json,this.serializer))throw s;if(!a.json)throw new h("internal","Response is not valid JSON object.");if(void 0===(u=a.json.data)&&(u=a.json.result),void 0===u)throw new h("internal","Response is missing data field.");return[2,{data:this.serializer.decode(u)}]}})})},y);function y(e,t){var n=this;void 0===t&&(t="us-central1"),this.app_=e,this.region_=t,this.serializer=new l,this.emulatorOrigin=null,this.INTERNAL={delete:function(){return n.deleteService()}},this.contextProvider=new s(e),this.cancelAllRequests=new Promise(function(e){n.deleteService=function(){return e()}})}var b;function w(e,t,n){return new v(e,n)}b={Functions:v},g.INTERNAL.registerService("functions",w,b,void 0,!0)}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-functions - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-functions.js.map
