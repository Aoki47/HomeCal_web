(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hf={exports:{}},Ko={},$f={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=Symbol.for("react.element"),vy=Symbol.for("react.portal"),wy=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),Sy=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Iy=Symbol.for("react.context"),Ty=Symbol.for("react.forward_ref"),ky=Symbol.for("react.suspense"),Ny=Symbol.for("react.memo"),Ry=Symbol.for("react.lazy"),wd=Symbol.iterator;function Py(t){return t===null||typeof t!="object"?null:(t=wd&&t[wd]||t["@@iterator"],typeof t=="function"?t:null)}var jf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gf=Object.assign,Kf={};function Mr(t,e,n){this.props=t,this.context=e,this.refs=Kf,this.updater=n||jf}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qf(){}qf.prototype=Mr.prototype;function Pu(t,e,n){this.props=t,this.context=e,this.refs=Kf,this.updater=n||jf}var Au=Pu.prototype=new qf;Au.constructor=Pu;Gf(Au,Mr.prototype);Au.isPureReactComponent=!0;var Ed=Array.isArray,Qf=Object.prototype.hasOwnProperty,xu={current:null},Yf={key:!0,ref:!0,__self:!0,__source:!0};function Xf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qf.call(e,r)&&!Yf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zi,type:t,key:s,ref:o,props:i,_owner:xu.current}}function Ay(t,e){return{$$typeof:Zi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ou(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zi}function xy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sd=/\/+/g;function Tl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xy(""+t.key):e.toString(36)}function bs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zi:case vy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Tl(o,0):r,Ed(i)?(n="",t!=null&&(n=t.replace(Sd,"$&/")+"/"),bs(i,e,n,"",function(u){return u})):i!=null&&(Ou(i)&&(i=Ay(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ed(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Tl(s,l);o+=bs(s,e,n,a,i)}else if(a=Py(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Tl(s,l++),o+=bs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gs(t,e,n){if(t==null)return t;var r=[],i=0;return bs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Oy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ke={current:null},Us={transition:null},Dy={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Us,ReactCurrentOwner:xu};function Jf(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:gs,forEach:function(t,e,n){gs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gs(t,function(){e++}),e},toArray:function(t){return gs(t,function(e){return e})||[]},only:function(t){if(!Ou(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=Mr;F.Fragment=wy;F.Profiler=Sy;F.PureComponent=Pu;F.StrictMode=Ey;F.Suspense=ky;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;F.act=Jf;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Qf.call(e,a)&&!Yf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Zi,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:Iy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cy,_context:t},t.Consumer=t};F.createElement=Xf;F.createFactory=function(t){var e=Xf.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:Ty,render:t}};F.isValidElement=Ou;F.lazy=function(t){return{$$typeof:Ry,_payload:{_status:-1,_result:t},_init:Oy}};F.memo=function(t,e){return{$$typeof:Ny,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=Us.transition;Us.transition={};try{t()}finally{Us.transition=e}};F.unstable_act=Jf;F.useCallback=function(t,e){return ke.current.useCallback(t,e)};F.useContext=function(t){return ke.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return ke.current.useDeferredValue(t)};F.useEffect=function(t,e){return ke.current.useEffect(t,e)};F.useId=function(){return ke.current.useId()};F.useImperativeHandle=function(t,e,n){return ke.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return ke.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return ke.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return ke.current.useMemo(t,e)};F.useReducer=function(t,e,n){return ke.current.useReducer(t,e,n)};F.useRef=function(t){return ke.current.useRef(t)};F.useState=function(t){return ke.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return ke.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return ke.current.useTransition()};F.version="18.3.1";$f.exports=F;var pt=$f.exports;const _s=yy(pt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly=pt,My=Symbol.for("react.element"),Fy=Symbol.for("react.fragment"),by=Object.prototype.hasOwnProperty,Uy=Ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zy={key:!0,ref:!0,__self:!0,__source:!0};function Zf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)by.call(e,r)&&!zy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:My,type:t,key:s,ref:o,props:i,_owner:Uy.current}}Ko.Fragment=Fy;Ko.jsx=Zf;Ko.jsxs=Zf;Hf.exports=Ko;var ae=Hf.exports,ep={exports:{}},Be={},tp={exports:{}},np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,x){var O=I.length;I.push(x);e:for(;0<O;){var te=O-1>>>1,le=I[te];if(0<i(le,x))I[te]=x,I[O]=le,O=te;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var x=I[0],O=I.pop();if(O!==x){I[0]=O;e:for(var te=0,le=I.length,ps=le>>>1;te<ps;){var wn=2*(te+1)-1,Il=I[wn],En=wn+1,ms=I[En];if(0>i(Il,O))En<le&&0>i(ms,Il)?(I[te]=ms,I[En]=O,te=En):(I[te]=Il,I[wn]=O,te=wn);else if(En<le&&0>i(ms,O))I[te]=ms,I[En]=O,te=En;else break e}}return x}function i(I,x){var O=I.sortIndex-x.sortIndex;return O!==0?O:I.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,y=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=I)r(u),x.sortIndex=x.expirationTime,e(a,x);else break;x=n(u)}}function v(I){if(y=!1,m(I),!_)if(n(a)!==null)_=!0,Sl(C);else{var x=n(u);x!==null&&Cl(v,x.startTime-I)}}function C(I,x){_=!1,y&&(y=!1,p(N),N=-1),g=!0;var O=h;try{for(m(x),c=n(a);c!==null&&(!(c.expirationTime>x)||I&&!Je());){var te=c.callback;if(typeof te=="function"){c.callback=null,h=c.priorityLevel;var le=te(c.expirationTime<=x);x=t.unstable_now(),typeof le=="function"?c.callback=le:c===n(a)&&r(a),m(x)}else r(a);c=n(a)}if(c!==null)var ps=!0;else{var wn=n(u);wn!==null&&Cl(v,wn.startTime-x),ps=!1}return ps}finally{c=null,h=O,g=!1}}var T=!1,k=null,N=-1,ee=5,b=-1;function Je(){return!(t.unstable_now()-b<ee)}function Gr(){if(k!==null){var I=t.unstable_now();b=I;var x=!0;try{x=k(!0,I)}finally{x?Kr():(T=!1,k=null)}}else T=!1}var Kr;if(typeof f=="function")Kr=function(){f(Gr)};else if(typeof MessageChannel<"u"){var vd=new MessageChannel,_y=vd.port2;vd.port1.onmessage=Gr,Kr=function(){_y.postMessage(null)}}else Kr=function(){A(Gr,0)};function Sl(I){k=I,T||(T=!0,Kr())}function Cl(I,x){N=A(function(){I(t.unstable_now())},x)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Sl(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var x=3;break;default:x=h}var O=h;h=x;try{return I()}finally{h=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,x){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var O=h;h=I;try{return x()}finally{h=O}},t.unstable_scheduleCallback=function(I,x,O){var te=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?te+O:te):O=te,I){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=O+le,I={id:d++,callback:x,priorityLevel:I,startTime:O,expirationTime:le,sortIndex:-1},O>te?(I.sortIndex=O,e(u,I),n(a)===null&&I===n(u)&&(y?(p(N),N=-1):y=!0,Cl(v,O-te))):(I.sortIndex=le,e(a,I),_||g||(_=!0,Sl(C))),I},t.unstable_shouldYield=Je,t.unstable_wrapCallback=function(I){var x=h;return function(){var O=h;h=x;try{return I.apply(this,arguments)}finally{h=O}}}})(np);tp.exports=np;var Wy=tp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By=pt,We=Wy;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rp=new Set,ki={};function Gn(t,e){Sr(t,e),Sr(t+"Capture",e)}function Sr(t,e){for(ki[t]=e,t=0;t<e.length;t++)rp.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fa=Object.prototype.hasOwnProperty,Vy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cd={},Id={};function Hy(t){return fa.call(Id,t)?!0:fa.call(Cd,t)?!1:Vy.test(t)?Id[t]=!0:(Cd[t]=!0,!1)}function $y(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jy(t,e,n,r){if(e===null||typeof e>"u"||$y(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ne(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_e[t]=new Ne(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_e[e]=new Ne(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_e[t]=new Ne(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_e[t]=new Ne(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_e[t]=new Ne(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_e[t]=new Ne(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_e[t]=new Ne(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_e[t]=new Ne(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_e[t]=new Ne(t,5,!1,t.toLowerCase(),null,!1,!1)});var Du=/[\-:]([a-z])/g;function Lu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Du,Lu);_e[e]=new Ne(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Du,Lu);_e[e]=new Ne(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Du,Lu);_e[e]=new Ne(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_e[t]=new Ne(t,1,!1,t.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_e[t]=new Ne(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mu(t,e,n,r){var i=_e.hasOwnProperty(e)?_e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jy(e,n,i,r)&&(n=null),r||i===null?Hy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ut=By.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ys=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Fu=Symbol.for("react.strict_mode"),pa=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),sp=Symbol.for("react.context"),bu=Symbol.for("react.forward_ref"),ma=Symbol.for("react.suspense"),ga=Symbol.for("react.suspense_list"),Uu=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),op=Symbol.for("react.offscreen"),Td=Symbol.iterator;function qr(t){return t===null||typeof t!="object"?null:(t=Td&&t[Td]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,kl;function oi(t){if(kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kl=e&&e[1]||""}return`
`+kl+t}var Nl=!1;function Rl(t,e){if(!t||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oi(t):""}function Gy(t){switch(t.tag){case 5:return oi(t.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return t=Rl(t.type,!1),t;case 11:return t=Rl(t.type.render,!1),t;case 1:return t=Rl(t.type,!0),t;default:return""}}function _a(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jn:return"Fragment";case Xn:return"Portal";case pa:return"Profiler";case Fu:return"StrictMode";case ma:return"Suspense";case ga:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sp:return(t.displayName||"Context")+".Consumer";case ip:return(t._context.displayName||"Context")+".Provider";case bu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uu:return e=t.displayName||null,e!==null?e:_a(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return _a(t(e))}catch{}}return null}function Ky(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _a(e);case 8:return e===Fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qy(t){var e=lp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vs(t){t._valueTracker||(t._valueTracker=qy(t))}function ap(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function eo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ya(t,e){var n=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function up(t,e){e=e.checked,e!=null&&Mu(t,"checked",e,!1)}function va(t,e){up(t,e);var n=dn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wa(t,e.type,n):e.hasOwnProperty("defaultValue")&&wa(t,e.type,dn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wa(t,e,n){(e!=="number"||eo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var li=Array.isArray;function cr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ea(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(li(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dn(n)}}function cp(t,e){var n=dn(e.value),r=dn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Pd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ws,hp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ws=ws||document.createElement("div"),ws.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ws.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ni(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qy=["Webkit","ms","Moz","O"];Object.keys(ci).forEach(function(t){Qy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ci[e]=ci[t]})});function fp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ci.hasOwnProperty(t)&&ci[t]?(""+e).trim():e+"px"}function pp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Yy=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ca(t,e){if(e){if(Yy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Ia(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ta=null;function zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ka=null,dr=null,hr=null;function Ad(t){if(t=ns(t)){if(typeof ka!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Jo(e),ka(t.stateNode,t.type,e))}}function mp(t){dr?hr?hr.push(t):hr=[t]:dr=t}function gp(){if(dr){var t=dr,e=hr;if(hr=dr=null,Ad(t),e)for(t=0;t<e.length;t++)Ad(e[t])}}function _p(t,e){return t(e)}function yp(){}var Pl=!1;function vp(t,e,n){if(Pl)return t(e,n);Pl=!0;try{return _p(t,e,n)}finally{Pl=!1,(dr!==null||hr!==null)&&(yp(),gp())}}function Ri(t,e){var n=t.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Na=!1;if(At)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Na=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Na=!1}function Xy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var di=!1,to=null,no=!1,Ra=null,Jy={onError:function(t){di=!0,to=t}};function Zy(t,e,n,r,i,s,o,l,a){di=!1,to=null,Xy.apply(Jy,arguments)}function ev(t,e,n,r,i,s,o,l,a){if(Zy.apply(this,arguments),di){if(di){var u=to;di=!1,to=null}else throw Error(w(198));no||(no=!0,Ra=u)}}function Kn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xd(t){if(Kn(t)!==t)throw Error(w(188))}function tv(t){var e=t.alternate;if(!e){if(e=Kn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xd(i),t;if(s===r)return xd(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Ep(t){return t=tv(t),t!==null?Sp(t):null}function Sp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sp(t);if(e!==null)return e;t=t.sibling}return null}var Cp=We.unstable_scheduleCallback,Od=We.unstable_cancelCallback,nv=We.unstable_shouldYield,rv=We.unstable_requestPaint,ne=We.unstable_now,iv=We.unstable_getCurrentPriorityLevel,Wu=We.unstable_ImmediatePriority,Ip=We.unstable_UserBlockingPriority,ro=We.unstable_NormalPriority,sv=We.unstable_LowPriority,Tp=We.unstable_IdlePriority,qo=null,gt=null;function ov(t){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(qo,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:uv,lv=Math.log,av=Math.LN2;function uv(t){return t>>>=0,t===0?32:31-(lv(t)/av|0)|0}var Es=64,Ss=4194304;function ai(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function io(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ai(l):(s&=o,s!==0&&(r=ai(s)))}else o=n&~i,o!==0?r=ai(o):s!==0&&(r=ai(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lt(e),i=1<<n,r|=t[n],e&=~i;return r}function cv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-lt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=cv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Pa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kp(){var t=Es;return Es<<=1,!(Es&4194240)&&(Es=64),t}function Al(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function es(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lt(e),t[e]=n}function hv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Bu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function Np(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rp,Vu,Pp,Ap,xp,Aa=!1,Cs=[],Xt=null,Jt=null,Zt=null,Pi=new Map,Ai=new Map,$t=[],fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(t,e){switch(t){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Pi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(e.pointerId)}}function Yr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ns(e),e!==null&&Vu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pv(t,e,n,r,i){switch(e){case"focusin":return Xt=Yr(Xt,t,e,n,r,i),!0;case"dragenter":return Jt=Yr(Jt,t,e,n,r,i),!0;case"mouseover":return Zt=Yr(Zt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pi.set(s,Yr(Pi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ai.set(s,Yr(Ai.get(s)||null,t,e,n,r,i)),!0}return!1}function Op(t){var e=kn(t.target);if(e!==null){var n=Kn(e);if(n!==null){if(e=n.tag,e===13){if(e=wp(n),e!==null){t.blockedOn=e,xp(t.priority,function(){Pp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ta=r,n.target.dispatchEvent(r),Ta=null}else return e=ns(n),e!==null&&Vu(e),t.blockedOn=n,!1;e.shift()}return!0}function Ld(t,e,n){zs(t)&&n.delete(e)}function mv(){Aa=!1,Xt!==null&&zs(Xt)&&(Xt=null),Jt!==null&&zs(Jt)&&(Jt=null),Zt!==null&&zs(Zt)&&(Zt=null),Pi.forEach(Ld),Ai.forEach(Ld)}function Xr(t,e){t.blockedOn===e&&(t.blockedOn=null,Aa||(Aa=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,mv)))}function xi(t){function e(i){return Xr(i,t)}if(0<Cs.length){Xr(Cs[0],t);for(var n=1;n<Cs.length;n++){var r=Cs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xt!==null&&Xr(Xt,t),Jt!==null&&Xr(Jt,t),Zt!==null&&Xr(Zt,t),Pi.forEach(e),Ai.forEach(e),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)Op(n),n.blockedOn===null&&$t.shift()}var fr=Ut.ReactCurrentBatchConfig,so=!0;function gv(t,e,n,r){var i=W,s=fr.transition;fr.transition=null;try{W=1,Hu(t,e,n,r)}finally{W=i,fr.transition=s}}function _v(t,e,n,r){var i=W,s=fr.transition;fr.transition=null;try{W=4,Hu(t,e,n,r)}finally{W=i,fr.transition=s}}function Hu(t,e,n,r){if(so){var i=xa(t,e,n,r);if(i===null)Wl(t,e,r,oo,n),Dd(t,r);else if(pv(i,t,e,n,r))r.stopPropagation();else if(Dd(t,r),e&4&&-1<fv.indexOf(t)){for(;i!==null;){var s=ns(i);if(s!==null&&Rp(s),s=xa(t,e,n,r),s===null&&Wl(t,e,r,oo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wl(t,e,r,null,n)}}var oo=null;function xa(t,e,n,r){if(oo=null,t=zu(r),t=kn(t),t!==null)if(e=Kn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return oo=t,null}function Dp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iv()){case Wu:return 1;case Ip:return 4;case ro:case sv:return 16;case Tp:return 536870912;default:return 16}default:return 16}}var Qt=null,$u=null,Ws=null;function Lp(){if(Ws)return Ws;var t,e=$u,n=e.length,r,i="value"in Qt?Qt.value:Qt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ws=i.slice(t,1<r?1-r:void 0)}function Bs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Is(){return!0}function Md(){return!1}function Ve(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Is:Md,this.isPropagationStopped=Md,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Is)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Is)},persist:function(){},isPersistent:Is}),e}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ju=Ve(Fr),ts=X({},Fr,{view:0,detail:0}),yv=Ve(ts),xl,Ol,Jr,Qo=X({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jr&&(Jr&&t.type==="mousemove"?(xl=t.screenX-Jr.screenX,Ol=t.screenY-Jr.screenY):Ol=xl=0,Jr=t),xl)},movementY:function(t){return"movementY"in t?t.movementY:Ol}}),Fd=Ve(Qo),vv=X({},Qo,{dataTransfer:0}),wv=Ve(vv),Ev=X({},ts,{relatedTarget:0}),Dl=Ve(Ev),Sv=X({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=Ve(Sv),Iv=X({},Fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tv=Ve(Iv),kv=X({},Fr,{data:0}),bd=Ve(kv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pv[t])?!!e[t]:!1}function Gu(){return Av}var xv=X({},ts,{key:function(t){if(t.key){var e=Nv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(t){return t.type==="keypress"?Bs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ov=Ve(xv),Dv=X({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ud=Ve(Dv),Lv=X({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),Mv=Ve(Lv),Fv=X({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=Ve(Fv),Uv=X({},Qo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zv=Ve(Uv),Wv=[9,13,27,32],Ku=At&&"CompositionEvent"in window,hi=null;At&&"documentMode"in document&&(hi=document.documentMode);var Bv=At&&"TextEvent"in window&&!hi,Mp=At&&(!Ku||hi&&8<hi&&11>=hi),zd=" ",Wd=!1;function Fp(t,e){switch(t){case"keyup":return Wv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zn=!1;function Vv(t,e){switch(t){case"compositionend":return bp(e);case"keypress":return e.which!==32?null:(Wd=!0,zd);case"textInput":return t=e.data,t===zd&&Wd?null:t;default:return null}}function Hv(t,e){if(Zn)return t==="compositionend"||!Ku&&Fp(t,e)?(t=Lp(),Ws=$u=Qt=null,Zn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mp&&e.locale!=="ko"?null:e.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$v[t.type]:e==="textarea"}function Up(t,e,n,r){mp(r),e=lo(e,"onChange"),0<e.length&&(n=new ju("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fi=null,Oi=null;function jv(t){Qp(t,0)}function Yo(t){var e=nr(t);if(ap(e))return t}function Gv(t,e){if(t==="change")return e}var zp=!1;if(At){var Ll;if(At){var Ml="oninput"in document;if(!Ml){var Vd=document.createElement("div");Vd.setAttribute("oninput","return;"),Ml=typeof Vd.oninput=="function"}Ll=Ml}else Ll=!1;zp=Ll&&(!document.documentMode||9<document.documentMode)}function Hd(){fi&&(fi.detachEvent("onpropertychange",Wp),Oi=fi=null)}function Wp(t){if(t.propertyName==="value"&&Yo(Oi)){var e=[];Up(e,Oi,t,zu(t)),vp(jv,e)}}function Kv(t,e,n){t==="focusin"?(Hd(),fi=e,Oi=n,fi.attachEvent("onpropertychange",Wp)):t==="focusout"&&Hd()}function qv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Oi)}function Qv(t,e){if(t==="click")return Yo(e)}function Yv(t,e){if(t==="input"||t==="change")return Yo(e)}function Xv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dt=typeof Object.is=="function"?Object.is:Xv;function Di(t,e){if(dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fa.call(e,i)||!dt(t[i],e[i]))return!1}return!0}function $d(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jd(t,e){var n=$d(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$d(n)}}function Bp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vp(){for(var t=window,e=eo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=eo(t.document)}return e}function qu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Jv(t){var e=Vp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bp(n.ownerDocument.documentElement,n)){if(r!==null&&qu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jd(n,s);var o=jd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zv=At&&"documentMode"in document&&11>=document.documentMode,er=null,Oa=null,pi=null,Da=!1;function Gd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Da||er==null||er!==eo(r)||(r=er,"selectionStart"in r&&qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&Di(pi,r)||(pi=r,r=lo(Oa,"onSelect"),0<r.length&&(e=new ju("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=er)))}function Ts(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var tr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionend:Ts("Transition","TransitionEnd")},Fl={},Hp={};At&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Xo(t){if(Fl[t])return Fl[t];if(!tr[t])return t;var e=tr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hp)return Fl[t]=e[n];return t}var $p=Xo("animationend"),jp=Xo("animationiteration"),Gp=Xo("animationstart"),Kp=Xo("transitionend"),qp=new Map,Kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(t,e){qp.set(t,e),Gn(e,[t])}for(var bl=0;bl<Kd.length;bl++){var Ul=Kd[bl],ew=Ul.toLowerCase(),tw=Ul[0].toUpperCase()+Ul.slice(1);mn(ew,"on"+tw)}mn($p,"onAnimationEnd");mn(jp,"onAnimationIteration");mn(Gp,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Kp,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function qd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ev(r,e,void 0,t),t.currentTarget=null}function Qp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;qd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;qd(i,l,u),s=a}}}if(no)throw t=Ra,no=!1,Ra=null,t}function j(t,e){var n=e[Ua];n===void 0&&(n=e[Ua]=new Set);var r=t+"__bubble";n.has(r)||(Yp(e,t,2,!1),n.add(r))}function zl(t,e,n){var r=0;e&&(r|=4),Yp(n,t,r,e)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Li(t){if(!t[ks]){t[ks]=!0,rp.forEach(function(n){n!=="selectionchange"&&(nw.has(n)||zl(n,!1,t),zl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ks]||(e[ks]=!0,zl("selectionchange",!1,e))}}function Yp(t,e,n,r){switch(Dp(e)){case 1:var i=gv;break;case 4:i=_v;break;default:i=Hu}n=i.bind(null,e,n,t),i=void 0,!Na||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=kn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}vp(function(){var u=s,d=zu(n),c=[];e:{var h=qp.get(t);if(h!==void 0){var g=ju,_=t;switch(t){case"keypress":if(Bs(n)===0)break e;case"keydown":case"keyup":g=Ov;break;case"focusin":_="focus",g=Dl;break;case"focusout":_="blur",g=Dl;break;case"beforeblur":case"afterblur":g=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Mv;break;case $p:case jp:case Gp:g=Cv;break;case Kp:g=bv;break;case"scroll":g=yv;break;case"wheel":g=zv;break;case"copy":case"cut":case"paste":g=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ud}var y=(e&4)!==0,A=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,m;f!==null;){m=f;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=Ri(f,p),v!=null&&y.push(Mi(f,v,m)))),A)break;f=f.return}0<y.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Ta&&(_=n.relatedTarget||n.fromElement)&&(kn(_)||_[xt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?kn(_):null,_!==null&&(A=Kn(_),_!==A||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=Fd,v="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ud,v="onPointerLeave",p="onPointerEnter",f="pointer"),A=g==null?h:nr(g),m=_==null?h:nr(_),h=new y(v,f+"leave",g,n,d),h.target=A,h.relatedTarget=m,v=null,kn(d)===u&&(y=new y(p,f+"enter",_,n,d),y.target=m,y.relatedTarget=A,v=y),A=v,g&&_)t:{for(y=g,p=_,f=0,m=y;m;m=Qn(m))f++;for(m=0,v=p;v;v=Qn(v))m++;for(;0<f-m;)y=Qn(y),f--;for(;0<m-f;)p=Qn(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=Qn(y),p=Qn(p)}y=null}else y=null;g!==null&&Qd(c,h,g,y,!1),_!==null&&A!==null&&Qd(c,A,_,y,!0)}}e:{if(h=u?nr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var C=Gv;else if(Bd(h))if(zp)C=Yv;else{C=qv;var T=Kv}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Qv);if(C&&(C=C(t,u))){Up(c,C,n,d);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&wa(h,"number",h.value)}switch(T=u?nr(u):window,t){case"focusin":(Bd(T)||T.contentEditable==="true")&&(er=T,Oa=u,pi=null);break;case"focusout":pi=Oa=er=null;break;case"mousedown":Da=!0;break;case"contextmenu":case"mouseup":case"dragend":Da=!1,Gd(c,n,d);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":Gd(c,n,d)}var k;if(Ku)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Zn?Fp(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Mp&&n.locale!=="ko"&&(Zn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Zn&&(k=Lp()):(Qt=d,$u="value"in Qt?Qt.value:Qt.textContent,Zn=!0)),T=lo(u,N),0<T.length&&(N=new bd(N,t,null,n,d),c.push({event:N,listeners:T}),k?N.data=k:(k=bp(n),k!==null&&(N.data=k)))),(k=Bv?Vv(t,n):Hv(t,n))&&(u=lo(u,"onBeforeInput"),0<u.length&&(d=new bd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}Qp(c,e)})}function Mi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ri(t,n),s!=null&&r.unshift(Mi(t,s,i)),s=Ri(t,e),s!=null&&r.push(Mi(t,s,i))),t=t.return}return r}function Qn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ri(n,s),a!=null&&o.unshift(Mi(n,a,l))):i||(a=Ri(n,s),a!=null&&o.push(Mi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rw=/\r\n?/g,iw=/\u0000|\uFFFD/g;function Yd(t){return(typeof t=="string"?t:""+t).replace(rw,`
`).replace(iw,"")}function Ns(t,e,n){if(e=Yd(e),Yd(t)!==e&&n)throw Error(w(425))}function ao(){}var La=null,Ma=null;function Fa(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,sw=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,ow=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(t){return Xd.resolve(null).then(t).catch(lw)}:ba;function lw(t){setTimeout(function(){throw t})}function Bl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xi(e)}function en(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var br=Math.random().toString(36).slice(2),mt="__reactFiber$"+br,Fi="__reactProps$"+br,xt="__reactContainer$"+br,Ua="__reactEvents$"+br,aw="__reactListeners$"+br,uw="__reactHandles$"+br;function kn(t){var e=t[mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xt]||n[mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jd(t);t!==null;){if(n=t[mt])return n;t=Jd(t)}return e}t=n,n=t.parentNode}return null}function ns(t){return t=t[mt]||t[xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function nr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Jo(t){return t[Fi]||null}var za=[],rr=-1;function gn(t){return{current:t}}function K(t){0>rr||(t.current=za[rr],za[rr]=null,rr--)}function $(t,e){rr++,za[rr]=t.current,t.current=e}var hn={},Se=gn(hn),Oe=gn(!1),Ln=hn;function Cr(t,e){var n=t.type.contextTypes;if(!n)return hn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function De(t){return t=t.childContextTypes,t!=null}function uo(){K(Oe),K(Se)}function Zd(t,e,n){if(Se.current!==hn)throw Error(w(168));$(Se,e),$(Oe,n)}function Xp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,Ky(t)||"Unknown",i));return X({},n,r)}function co(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hn,Ln=Se.current,$(Se,t),$(Oe,Oe.current),!0}function eh(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=Xp(t,e,Ln),r.__reactInternalMemoizedMergedChildContext=t,K(Oe),K(Se),$(Se,t)):K(Oe),$(Oe,n)}var Et=null,Zo=!1,Vl=!1;function Jp(t){Et===null?Et=[t]:Et.push(t)}function cw(t){Zo=!0,Jp(t)}function _n(){if(!Vl&&Et!==null){Vl=!0;var t=0,e=W;try{var n=Et;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Et=null,Zo=!1}catch(i){throw Et!==null&&(Et=Et.slice(t+1)),Cp(Wu,_n),i}finally{W=e,Vl=!1}}return null}var ir=[],sr=0,ho=null,fo=0,$e=[],je=0,Mn=null,Ct=1,It="";function Sn(t,e){ir[sr++]=fo,ir[sr++]=ho,ho=t,fo=e}function Zp(t,e,n){$e[je++]=Ct,$e[je++]=It,$e[je++]=Mn,Mn=t;var r=Ct;t=It;var i=32-lt(r)-1;r&=~(1<<i),n+=1;var s=32-lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ct=1<<32-lt(e)+i|n<<i|r,It=s+t}else Ct=1<<s|n<<i|r,It=t}function Qu(t){t.return!==null&&(Sn(t,1),Zp(t,1,0))}function Yu(t){for(;t===ho;)ho=ir[--sr],ir[sr]=null,fo=ir[--sr],ir[sr]=null;for(;t===Mn;)Mn=$e[--je],$e[je]=null,It=$e[--je],$e[je]=null,Ct=$e[--je],$e[je]=null}var ze=null,Ue=null,q=!1,nt=null;function em(t,e){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function th(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ze=t,Ue=en(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ze=t,Ue=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mn!==null?{id:Ct,overflow:It}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ze=t,Ue=null,!0):!1;default:return!1}}function Wa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ba(t){if(q){var e=Ue;if(e){var n=e;if(!th(t,e)){if(Wa(t))throw Error(w(418));e=en(n.nextSibling);var r=ze;e&&th(t,e)?em(r,n):(t.flags=t.flags&-4097|2,q=!1,ze=t)}}else{if(Wa(t))throw Error(w(418));t.flags=t.flags&-4097|2,q=!1,ze=t}}}function nh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ze=t}function Rs(t){if(t!==ze)return!1;if(!q)return nh(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fa(t.type,t.memoizedProps)),e&&(e=Ue)){if(Wa(t))throw tm(),Error(w(418));for(;e;)em(t,e),e=en(e.nextSibling)}if(nh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ue=en(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ue=null}}else Ue=ze?en(t.stateNode.nextSibling):null;return!0}function tm(){for(var t=Ue;t;)t=en(t.nextSibling)}function Ir(){Ue=ze=null,q=!1}function Xu(t){nt===null?nt=[t]:nt.push(t)}var dw=Ut.ReactCurrentBatchConfig;function Zr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function Ps(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rh(t){var e=t._init;return e(t._payload)}function nm(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=sn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,v){return f===null||f.tag!==6?(f=Ql(m,p.mode,v),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,v){var C=m.type;return C===Jn?d(p,f,m.props.children,v,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&rh(C)===f.type)?(v=i(f,m.props),v.ref=Zr(p,f,m),v.return=p,v):(v=qs(m.type,m.key,m.props,null,p.mode,v),v.ref=Zr(p,f,m),v.return=p,v)}function u(p,f,m,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Yl(m,p.mode,v),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,v,C){return f===null||f.tag!==7?(f=Dn(m,p.mode,v,C),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ql(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ys:return m=qs(f.type,f.key,f.props,null,p.mode,m),m.ref=Zr(p,null,f),m.return=p,m;case Xn:return f=Yl(f,p.mode,m),f.return=p,f;case Vt:var v=f._init;return c(p,v(f._payload),m)}if(li(f)||qr(f))return f=Dn(f,p.mode,m,null),f.return=p,f;Ps(p,f)}return null}function h(p,f,m,v){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:l(p,f,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ys:return m.key===C?a(p,f,m,v):null;case Xn:return m.key===C?u(p,f,m,v):null;case Vt:return C=m._init,h(p,f,C(m._payload),v)}if(li(m)||qr(m))return C!==null?null:d(p,f,m,v,null);Ps(p,m)}return null}function g(p,f,m,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,l(f,p,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ys:return p=p.get(v.key===null?m:v.key)||null,a(f,p,v,C);case Xn:return p=p.get(v.key===null?m:v.key)||null,u(f,p,v,C);case Vt:var T=v._init;return g(p,f,m,T(v._payload),C)}if(li(v)||qr(v))return p=p.get(m)||null,d(f,p,v,C,null);Ps(f,v)}return null}function _(p,f,m,v){for(var C=null,T=null,k=f,N=f=0,ee=null;k!==null&&N<m.length;N++){k.index>N?(ee=k,k=null):ee=k.sibling;var b=h(p,k,m[N],v);if(b===null){k===null&&(k=ee);break}t&&k&&b.alternate===null&&e(p,k),f=s(b,f,N),T===null?C=b:T.sibling=b,T=b,k=ee}if(N===m.length)return n(p,k),q&&Sn(p,N),C;if(k===null){for(;N<m.length;N++)k=c(p,m[N],v),k!==null&&(f=s(k,f,N),T===null?C=k:T.sibling=k,T=k);return q&&Sn(p,N),C}for(k=r(p,k);N<m.length;N++)ee=g(k,p,N,m[N],v),ee!==null&&(t&&ee.alternate!==null&&k.delete(ee.key===null?N:ee.key),f=s(ee,f,N),T===null?C=ee:T.sibling=ee,T=ee);return t&&k.forEach(function(Je){return e(p,Je)}),q&&Sn(p,N),C}function y(p,f,m,v){var C=qr(m);if(typeof C!="function")throw Error(w(150));if(m=C.call(m),m==null)throw Error(w(151));for(var T=C=null,k=f,N=f=0,ee=null,b=m.next();k!==null&&!b.done;N++,b=m.next()){k.index>N?(ee=k,k=null):ee=k.sibling;var Je=h(p,k,b.value,v);if(Je===null){k===null&&(k=ee);break}t&&k&&Je.alternate===null&&e(p,k),f=s(Je,f,N),T===null?C=Je:T.sibling=Je,T=Je,k=ee}if(b.done)return n(p,k),q&&Sn(p,N),C;if(k===null){for(;!b.done;N++,b=m.next())b=c(p,b.value,v),b!==null&&(f=s(b,f,N),T===null?C=b:T.sibling=b,T=b);return q&&Sn(p,N),C}for(k=r(p,k);!b.done;N++,b=m.next())b=g(k,p,N,b.value,v),b!==null&&(t&&b.alternate!==null&&k.delete(b.key===null?N:b.key),f=s(b,f,N),T===null?C=b:T.sibling=b,T=b);return t&&k.forEach(function(Gr){return e(p,Gr)}),q&&Sn(p,N),C}function A(p,f,m,v){if(typeof m=="object"&&m!==null&&m.type===Jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ys:e:{for(var C=m.key,T=f;T!==null;){if(T.key===C){if(C=m.type,C===Jn){if(T.tag===7){n(p,T.sibling),f=i(T,m.props.children),f.return=p,p=f;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vt&&rh(C)===T.type){n(p,T.sibling),f=i(T,m.props),f.ref=Zr(p,T,m),f.return=p,p=f;break e}n(p,T);break}else e(p,T);T=T.sibling}m.type===Jn?(f=Dn(m.props.children,p.mode,v,m.key),f.return=p,p=f):(v=qs(m.type,m.key,m.props,null,p.mode,v),v.ref=Zr(p,f,m),v.return=p,p=v)}return o(p);case Xn:e:{for(T=m.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Yl(m,p.mode,v),f.return=p,p=f}return o(p);case Vt:return T=m._init,A(p,f,T(m._payload),v)}if(li(m))return _(p,f,m,v);if(qr(m))return y(p,f,m,v);Ps(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Ql(m,p.mode,v),f.return=p,p=f),o(p)):n(p,f)}return A}var Tr=nm(!0),rm=nm(!1),po=gn(null),mo=null,or=null,Ju=null;function Zu(){Ju=or=mo=null}function ec(t){var e=po.current;K(po),t._currentValue=e}function Va(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function pr(t,e){mo=t,Ju=or=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pe=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(Ju!==t)if(t={context:t,memoizedValue:e,next:null},or===null){if(mo===null)throw Error(w(308));or=t,mo.dependencies={lanes:0,firstContext:t}}else or=or.next=t;return e}var Nn=null;function tc(t){Nn===null?Nn=[t]:Nn.push(t)}function im(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,tc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ot(t,r)}function Ot(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ht=!1;function nc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ot(t,n)}return i=r.interleaved,i===null?(e.next=e,tc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ot(t,n)}function Vs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bu(t,n)}}function ih(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function go(t,e,n,r){var i=t.updateQueue;Ht=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=X({},c,h);break e;case 2:Ht=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bn|=o,t.lanes=o,t.memoizedState=c}}function sh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var rs={},_t=gn(rs),bi=gn(rs),Ui=gn(rs);function Rn(t){if(t===rs)throw Error(w(174));return t}function rc(t,e){switch($(Ui,e),$(bi,t),$(_t,rs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sa(e,t)}K(_t),$(_t,e)}function kr(){K(_t),K(bi),K(Ui)}function om(t){Rn(Ui.current);var e=Rn(_t.current),n=Sa(e,t.type);e!==n&&($(bi,t),$(_t,n))}function ic(t){bi.current===t&&(K(_t),K(bi))}var Q=gn(0);function _o(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hl=[];function sc(){for(var t=0;t<Hl.length;t++)Hl[t]._workInProgressVersionPrimary=null;Hl.length=0}var Hs=Ut.ReactCurrentDispatcher,$l=Ut.ReactCurrentBatchConfig,Fn=0,Y=null,ie=null,ce=null,yo=!1,mi=!1,zi=0,hw=0;function ye(){throw Error(w(321))}function oc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dt(t[n],e[n]))return!1;return!0}function lc(t,e,n,r,i,s){if(Fn=s,Y=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hs.current=t===null||t.memoizedState===null?gw:_w,t=n(r,i),mi){s=0;do{if(mi=!1,zi=0,25<=s)throw Error(w(301));s+=1,ce=ie=null,e.updateQueue=null,Hs.current=yw,t=n(r,i)}while(mi)}if(Hs.current=vo,e=ie!==null&&ie.next!==null,Fn=0,ce=ie=Y=null,yo=!1,e)throw Error(w(300));return t}function ac(){var t=zi!==0;return zi=0,t}function ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Y.memoizedState=ce=t:ce=ce.next=t,ce}function Xe(){if(ie===null){var t=Y.alternate;t=t!==null?t.memoizedState:null}else t=ie.next;var e=ce===null?Y.memoizedState:ce.next;if(e!==null)ce=e,ie=t;else{if(t===null)throw Error(w(310));ie=t,t={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ce===null?Y.memoizedState=ce=t:ce=ce.next=t}return ce}function Wi(t,e){return typeof e=="function"?e(t):e}function jl(t){var e=Xe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Fn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,Y.lanes|=d,bn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,dt(r,e.memoizedState)||(Pe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Y.lanes|=s,bn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gl(t){var e=Xe(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dt(s,e.memoizedState)||(Pe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function lm(){}function am(t,e){var n=Y,r=Xe(),i=e(),s=!dt(r.memoizedState,i);if(s&&(r.memoizedState=i,Pe=!0),r=r.queue,uc(dm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,Bi(9,cm.bind(null,n,r,i,e),void 0,null),fe===null)throw Error(w(349));Fn&30||um(n,e,i)}return i}function um(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cm(t,e,n,r){e.value=n,e.getSnapshot=r,hm(e)&&fm(t)}function dm(t,e,n){return n(function(){hm(e)&&fm(t)})}function hm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dt(t,n)}catch{return!0}}function fm(t){var e=Ot(t,1);e!==null&&at(e,t,1,-1)}function oh(t){var e=ft();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},e.queue=t,t=t.dispatch=mw.bind(null,Y,t),[e.memoizedState,t]}function Bi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Y.updateQueue,e===null?(e={lastEffect:null,stores:null},Y.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pm(){return Xe().memoizedState}function $s(t,e,n,r){var i=ft();Y.flags|=t,i.memoizedState=Bi(1|e,n,void 0,r===void 0?null:r)}function el(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(ie!==null){var o=ie.memoizedState;if(s=o.destroy,r!==null&&oc(r,o.deps)){i.memoizedState=Bi(e,n,s,r);return}}Y.flags|=t,i.memoizedState=Bi(1|e,n,s,r)}function lh(t,e){return $s(8390656,8,t,e)}function uc(t,e){return el(2048,8,t,e)}function mm(t,e){return el(4,2,t,e)}function gm(t,e){return el(4,4,t,e)}function _m(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ym(t,e,n){return n=n!=null?n.concat([t]):null,el(4,4,_m.bind(null,e,t),n)}function cc(){}function vm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&oc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Em(t,e,n){return Fn&21?(dt(n,e)||(n=kp(),Y.lanes|=n,bn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pe=!0),t.memoizedState=n)}function fw(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=$l.transition;$l.transition={};try{t(!1),e()}finally{W=n,$l.transition=r}}function Sm(){return Xe().memoizedState}function pw(t,e,n){var r=rn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cm(t))Im(e,n);else if(n=im(t,e,n,r),n!==null){var i=Ie();at(n,t,r,i),Tm(n,e,r)}}function mw(t,e,n){var r=rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cm(t))Im(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dt(l,o)){var a=e.interleaved;a===null?(i.next=i,tc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=im(t,e,i,r),n!==null&&(i=Ie(),at(n,t,r,i),Tm(n,e,r))}}function Cm(t){var e=t.alternate;return t===Y||e!==null&&e===Y}function Im(t,e){mi=yo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bu(t,n)}}var vo={readContext:Ye,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},gw={readContext:Ye,useCallback:function(t,e){return ft().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:lh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$s(4194308,4,_m.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $s(4194308,4,t,e)},useInsertionEffect:function(t,e){return $s(4,2,t,e)},useMemo:function(t,e){var n=ft();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ft();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pw.bind(null,Y,t),[r.memoizedState,t]},useRef:function(t){var e=ft();return t={current:t},e.memoizedState=t},useState:oh,useDebugValue:cc,useDeferredValue:function(t){return ft().memoizedState=t},useTransition:function(){var t=oh(!1),e=t[0];return t=fw.bind(null,t[1]),ft().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Y,i=ft();if(q){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),fe===null)throw Error(w(349));Fn&30||um(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lh(dm.bind(null,r,s,t),[t]),r.flags|=2048,Bi(9,cm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ft(),e=fe.identifierPrefix;if(q){var n=It,r=Ct;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_w={readContext:Ye,useCallback:vm,useContext:Ye,useEffect:uc,useImperativeHandle:ym,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:wm,useReducer:jl,useRef:pm,useState:function(){return jl(Wi)},useDebugValue:cc,useDeferredValue:function(t){var e=Xe();return Em(e,ie.memoizedState,t)},useTransition:function(){var t=jl(Wi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:lm,useSyncExternalStore:am,useId:Sm,unstable_isNewReconciler:!1},yw={readContext:Ye,useCallback:vm,useContext:Ye,useEffect:uc,useImperativeHandle:ym,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:wm,useReducer:Gl,useRef:pm,useState:function(){return Gl(Wi)},useDebugValue:cc,useDeferredValue:function(t){var e=Xe();return ie===null?e.memoizedState=t:Em(e,ie.memoizedState,t)},useTransition:function(){var t=Gl(Wi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:lm,useSyncExternalStore:am,useId:Sm,unstable_isNewReconciler:!1};function et(t,e){if(t&&t.defaultProps){e=X({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ha(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:X({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tl={isMounted:function(t){return(t=t._reactInternals)?Kn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ie(),i=rn(t),s=Rt(r,i);s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(at(e,t,i,r),Vs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ie(),i=rn(t),s=Rt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tn(t,s,i),e!==null&&(at(e,t,i,r),Vs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ie(),r=rn(t),i=Rt(n,r);i.tag=2,e!=null&&(i.callback=e),e=tn(t,i,r),e!==null&&(at(e,t,r,n),Vs(e,t,r))}};function ah(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Di(n,r)||!Di(i,s):!0}function km(t,e,n){var r=!1,i=hn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=De(e)?Ln:Se.current,r=e.contextTypes,s=(r=r!=null)?Cr(t,i):hn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function uh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tl.enqueueReplaceState(e,e.state,null)}function $a(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},nc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=De(e)?Ln:Se.current,i.context=Cr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ha(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tl.enqueueReplaceState(i,i.state,null),go(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Nr(t,e){try{var n="",r=e;do n+=Gy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ja(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vw=typeof WeakMap=="function"?WeakMap:Map;function Nm(t,e,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Eo||(Eo=!0,tu=r),ja(t,e)},n}function Rm(t,e,n){n=Rt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ja(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ja(t,e),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ch(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Dw.bind(null,t,e,n),e.then(t,t))}function dh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rt(-1,1),e.tag=2,tn(n,e,1))),n.lanes|=1),t)}var ww=Ut.ReactCurrentOwner,Pe=!1;function Ce(t,e,n,r){e.child=t===null?rm(e,null,n,r):Tr(e,t.child,n,r)}function fh(t,e,n,r,i){n=n.render;var s=e.ref;return pr(e,i),r=lc(t,e,n,r,s,i),n=ac(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(q&&n&&Qu(e),e.flags|=1,Ce(t,e,r,i),e.child)}function ph(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Pm(t,e,s,r,i)):(t=qs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Di,n(o,r)&&t.ref===e.ref)return Dt(t,e,i)}return e.flags|=1,t=sn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Pm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Di(s,r)&&t.ref===e.ref)if(Pe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pe=!0);else return e.lanes=t.lanes,Dt(t,e,i)}return Ga(t,e,n,r,i)}function Am(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(ar,be),be|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(ar,be),be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$(ar,be),be|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$(ar,be),be|=r;return Ce(t,e,i,n),e.child}function xm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ga(t,e,n,r,i){var s=De(n)?Ln:Se.current;return s=Cr(e,s),pr(e,i),n=lc(t,e,n,r,s,i),r=ac(),t!==null&&!Pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dt(t,e,i)):(q&&r&&Qu(e),e.flags|=1,Ce(t,e,n,i),e.child)}function mh(t,e,n,r,i){if(De(n)){var s=!0;co(e)}else s=!1;if(pr(e,i),e.stateNode===null)js(t,e),km(e,n,r),$a(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=De(n)?Ln:Se.current,u=Cr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&uh(e,o,r,u),Ht=!1;var h=e.memoizedState;o.state=h,go(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Oe.current||Ht?(typeof d=="function"&&(Ha(e,n,d,r),a=e.memoizedState),(l=Ht||ah(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:et(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=De(n)?Ln:Se.current,a=Cr(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&uh(e,o,r,a),Ht=!1,h=e.memoizedState,o.state=h,go(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Oe.current||Ht?(typeof g=="function"&&(Ha(e,n,g,r),_=e.memoizedState),(u=Ht||ah(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Ka(t,e,n,r,s,i)}function Ka(t,e,n,r,i,s){xm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&eh(e,n,!1),Dt(t,e,s);r=e.stateNode,ww.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Tr(e,t.child,null,s),e.child=Tr(e,null,l,s)):Ce(t,e,l,s),e.memoizedState=r.state,i&&eh(e,n,!0),e.child}function Om(t){var e=t.stateNode;e.pendingContext?Zd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zd(t,e.context,!1),rc(t,e.containerInfo)}function gh(t,e,n,r,i){return Ir(),Xu(i),e.flags|=256,Ce(t,e,n,r),e.child}var qa={dehydrated:null,treeContext:null,retryLane:0};function Qa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dm(t,e,n){var r=e.pendingProps,i=Q.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(Q,i&1),t===null)return Ba(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=il(o,r,0,null),t=Dn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qa(n),e.memoizedState=qa,t):dc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ew(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=sn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=sn(l,s):(s=Dn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qa,r}return s=t.child,t=s.sibling,r=sn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function dc(t,e){return e=il({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function As(t,e,n,r){return r!==null&&Xu(r),Tr(e,t.child,null,n),t=dc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ew(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kl(Error(w(422))),As(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=il({mode:"visible",children:r.children},i,0,null),s=Dn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Tr(e,t.child,null,o),e.child.memoizedState=Qa(o),e.memoizedState=qa,s);if(!(e.mode&1))return As(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=Kl(s,r,void 0),As(t,e,o,r)}if(l=(o&t.childLanes)!==0,Pe||l){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ot(t,i),at(r,t,i,-1))}return _c(),r=Kl(Error(w(421))),As(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Lw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ue=en(i.nextSibling),ze=e,q=!0,nt=null,t!==null&&($e[je++]=Ct,$e[je++]=It,$e[je++]=Mn,Ct=t.id,It=t.overflow,Mn=e),e=dc(e,r.children),e.flags|=4096,e)}function _h(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Va(t.return,e,n)}function ql(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Lm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ce(t,e,r.children,n),r=Q.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_h(t,n,e);else if(t.tag===19)_h(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(Q,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_o(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ql(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_o(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ql(e,!0,n,null,s);break;case"together":ql(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function js(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=sn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sw(t,e,n){switch(e.tag){case 3:Om(e),Ir();break;case 5:om(e);break;case 1:De(e.type)&&co(e);break;case 4:rc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$(po,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(Q,Q.current&1),e.flags|=128,null):n&e.child.childLanes?Dm(t,e,n):($(Q,Q.current&1),t=Dt(t,e,n),t!==null?t.sibling:null);$(Q,Q.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Lm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(Q,Q.current),r)break;return null;case 22:case 23:return e.lanes=0,Am(t,e,n)}return Dt(t,e,n)}var Mm,Ya,Fm,bm;Mm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};Fm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Rn(_t.current);var s=null;switch(n){case"input":i=ya(t,i),r=ya(t,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=Ea(t,i),r=Ea(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ao)}Ca(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ki.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ki.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&j("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ei(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Cw(t,e,n){var r=e.pendingProps;switch(Yu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(e),null;case 1:return De(e.type)&&uo(),ve(e),null;case 3:return r=e.stateNode,kr(),K(Oe),K(Se),sc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Rs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nt!==null&&(iu(nt),nt=null))),Ya(t,e),ve(e),null;case 5:ic(e);var i=Rn(Ui.current);if(n=e.type,t!==null&&e.stateNode!=null)Fm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return ve(e),null}if(t=Rn(_t.current),Rs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mt]=e,r[Fi]=s,t=(e.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<ui.length;i++)j(ui[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":kd(r,s),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},j("invalid",r);break;case"textarea":Rd(r,s),j("invalid",r)}Ca(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ns(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ns(r.textContent,l,t),i=["children",""+l]):ki.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&j("scroll",r)}switch(n){case"input":vs(r),Nd(r,s,!0);break;case"textarea":vs(r),Pd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ao)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mt]=e,t[Fi]=r,Mm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ia(n,r),n){case"dialog":j("cancel",t),j("close",t),i=r;break;case"iframe":case"object":case"embed":j("load",t),i=r;break;case"video":case"audio":for(i=0;i<ui.length;i++)j(ui[i],t);i=r;break;case"source":j("error",t),i=r;break;case"img":case"image":case"link":j("error",t),j("load",t),i=r;break;case"details":j("toggle",t),i=r;break;case"input":kd(t,r),i=ya(t,r),j("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),j("invalid",t);break;case"textarea":Rd(t,r),i=Ea(t,r),j("invalid",t);break;default:i=r}Ca(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?pp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&hp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ni(t,a):typeof a=="number"&&Ni(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ki.hasOwnProperty(s)?a!=null&&s==="onScroll"&&j("scroll",t):a!=null&&Mu(t,s,a,o))}switch(n){case"input":vs(t),Nd(t,r,!1);break;case"textarea":vs(t),Pd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?cr(t,!!r.multiple,s,!1):r.defaultValue!=null&&cr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ve(e),null;case 6:if(t&&e.stateNode!=null)bm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Rn(Ui.current),Rn(_t.current),Rs(e)){if(r=e.stateNode,n=e.memoizedProps,r[mt]=e,(s=r.nodeValue!==n)&&(t=ze,t!==null))switch(t.tag){case 3:Ns(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ns(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=e,e.stateNode=r}return ve(e),null;case 13:if(K(Q),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&Ue!==null&&e.mode&1&&!(e.flags&128))tm(),Ir(),e.flags|=98560,s=!1;else if(s=Rs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[mt]=e}else Ir(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ve(e),s=!1}else nt!==null&&(iu(nt),nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Q.current&1?oe===0&&(oe=3):_c())),e.updateQueue!==null&&(e.flags|=4),ve(e),null);case 4:return kr(),Ya(t,e),t===null&&Li(e.stateNode.containerInfo),ve(e),null;case 10:return ec(e.type._context),ve(e),null;case 17:return De(e.type)&&uo(),ve(e),null;case 19:if(K(Q),s=e.memoizedState,s===null)return ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ei(s,!1);else{if(oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_o(t),o!==null){for(e.flags|=128,ei(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(Q,Q.current&1|2),e.child}t=t.sibling}s.tail!==null&&ne()>Rr&&(e.flags|=128,r=!0,ei(s,!1),e.lanes=4194304)}else{if(!r)if(t=_o(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ei(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!q)return ve(e),null}else 2*ne()-s.renderingStartTime>Rr&&n!==1073741824&&(e.flags|=128,r=!0,ei(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ne(),e.sibling=null,n=Q.current,$(Q,r?n&1|2:n&1),e):(ve(e),null);case 22:case 23:return gc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?be&1073741824&&(ve(e),e.subtreeFlags&6&&(e.flags|=8192)):ve(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function Iw(t,e){switch(Yu(e),e.tag){case 1:return De(e.type)&&uo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return kr(),K(Oe),K(Se),sc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ic(e),null;case 13:if(K(Q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Ir()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return K(Q),null;case 4:return kr(),null;case 10:return ec(e.type._context),null;case 22:case 23:return gc(),null;case 24:return null;default:return null}}var xs=!1,we=!1,Tw=typeof WeakSet=="function"?WeakSet:Set,S=null;function lr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(t,e,r)}else n.current=null}function Xa(t,e,n){try{n()}catch(r){J(t,e,r)}}var yh=!1;function kw(t,e){if(La=so,t=Vp(),qu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ma={focusedElem:t,selectionRange:n},so=!1,S=e;S!==null;)if(e=S,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,S=t;else for(;S!==null;){e=S;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,A=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:et(e.type,y),A);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){J(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,S=t;break}S=e.return}return _=yh,yh=!1,_}function gi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xa(e,n,s)}i=i.next}while(i!==r)}}function nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ja(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Um(t){var e=t.alternate;e!==null&&(t.alternate=null,Um(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mt],delete e[Fi],delete e[Ua],delete e[aw],delete e[uw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zm(t){return t.tag===5||t.tag===3||t.tag===4}function vh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Za(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ao));else if(r!==4&&(t=t.child,t!==null))for(Za(t,e,n),t=t.sibling;t!==null;)Za(t,e,n),t=t.sibling}function eu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(eu(t,e,n),t=t.sibling;t!==null;)eu(t,e,n),t=t.sibling}var pe=null,tt=!1;function Wt(t,e,n){for(n=n.child;n!==null;)Wm(t,e,n),n=n.sibling}function Wm(t,e,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:we||lr(n,e);case 6:var r=pe,i=tt;pe=null,Wt(t,e,n),pe=r,tt=i,pe!==null&&(tt?(t=pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(tt?(t=pe,n=n.stateNode,t.nodeType===8?Bl(t.parentNode,n):t.nodeType===1&&Bl(t,n),xi(t)):Bl(pe,n.stateNode));break;case 4:r=pe,i=tt,pe=n.stateNode.containerInfo,tt=!0,Wt(t,e,n),pe=r,tt=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xa(n,e,o),i=i.next}while(i!==r)}Wt(t,e,n);break;case 1:if(!we&&(lr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){J(n,e,l)}Wt(t,e,n);break;case 21:Wt(t,e,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Wt(t,e,n),we=r):Wt(t,e,n);break;default:Wt(t,e,n)}}function wh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tw),e.forEach(function(r){var i=Mw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:pe=l.stateNode,tt=!1;break e;case 3:pe=l.stateNode.containerInfo,tt=!0;break e;case 4:pe=l.stateNode.containerInfo,tt=!0;break e}l=l.return}if(pe===null)throw Error(w(160));Wm(s,o,i),pe=null,tt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){J(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bm(e,t),e=e.sibling}function Bm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ze(e,t),ht(t),r&4){try{gi(3,t,t.return),nl(3,t)}catch(y){J(t,t.return,y)}try{gi(5,t,t.return)}catch(y){J(t,t.return,y)}}break;case 1:Ze(e,t),ht(t),r&512&&n!==null&&lr(n,n.return);break;case 5:if(Ze(e,t),ht(t),r&512&&n!==null&&lr(n,n.return),t.flags&32){var i=t.stateNode;try{Ni(i,"")}catch(y){J(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&up(i,s),Ia(l,o);var u=Ia(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?pp(i,c):d==="dangerouslySetInnerHTML"?hp(i,c):d==="children"?Ni(i,c):Mu(i,d,c,u)}switch(l){case"input":va(i,s);break;case"textarea":cp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?cr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?cr(i,!!s.multiple,s.defaultValue,!0):cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fi]=s}catch(y){J(t,t.return,y)}}break;case 6:if(Ze(e,t),ht(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){J(t,t.return,y)}}break;case 3:if(Ze(e,t),ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xi(e.containerInfo)}catch(y){J(t,t.return,y)}break;case 4:Ze(e,t),ht(t);break;case 13:Ze(e,t),ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(pc=ne())),r&4&&wh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(we=(u=we)||d,Ze(e,t),we=u):Ze(e,t),ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(S=t,d=t.child;d!==null;){for(c=S=d;S!==null;){switch(h=S,g=h.child,h.tag){case 0:case 11:case 14:case 15:gi(4,h,h.return);break;case 1:lr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){J(r,n,y)}}break;case 5:lr(h,h.return);break;case 22:if(h.memoizedState!==null){Sh(c);continue}}g!==null?(g.return=h,S=g):Sh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=fp("display",o))}catch(y){J(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){J(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ze(e,t),ht(t),r&4&&wh(t);break;case 21:break;default:Ze(e,t),ht(t)}}function ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zm(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var s=vh(t);eu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=vh(t);Za(t,l,o);break;default:throw Error(w(161))}}catch(a){J(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nw(t,e,n){S=t,Vm(t)}function Vm(t,e,n){for(var r=(t.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||we;l=xs;var u=we;if(xs=o,(we=a)&&!u)for(S=i;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?Ch(i):a!==null?(a.return=o,S=a):Ch(i);for(;s!==null;)S=s,Vm(s),s=s.sibling;S=i,xs=l,we=u}Eh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):Eh(t)}}function Eh(t){for(;S!==null;){var e=S;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:we||nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&xi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}we||e.flags&512&&Ja(e)}catch(h){J(e,e.return,h)}}if(e===t){S=null;break}if(n=e.sibling,n!==null){n.return=e.return,S=n;break}S=e.return}}function Sh(t){for(;S!==null;){var e=S;if(e===t){S=null;break}var n=e.sibling;if(n!==null){n.return=e.return,S=n;break}S=e.return}}function Ch(t){for(;S!==null;){var e=S;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nl(4,e)}catch(a){J(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){J(e,i,a)}}var s=e.return;try{Ja(e)}catch(a){J(e,s,a)}break;case 5:var o=e.return;try{Ja(e)}catch(a){J(e,o,a)}}}catch(a){J(e,e.return,a)}if(e===t){S=null;break}var l=e.sibling;if(l!==null){l.return=e.return,S=l;break}S=e.return}}var Rw=Math.ceil,wo=Ut.ReactCurrentDispatcher,hc=Ut.ReactCurrentOwner,Qe=Ut.ReactCurrentBatchConfig,U=0,fe=null,re=null,ge=0,be=0,ar=gn(0),oe=0,Vi=null,bn=0,rl=0,fc=0,_i=null,Re=null,pc=0,Rr=1/0,wt=null,Eo=!1,tu=null,nn=null,Os=!1,Yt=null,So=0,yi=0,nu=null,Gs=-1,Ks=0;function Ie(){return U&6?ne():Gs!==-1?Gs:Gs=ne()}function rn(t){return t.mode&1?U&2&&ge!==0?ge&-ge:dw.transition!==null?(Ks===0&&(Ks=kp()),Ks):(t=W,t!==0||(t=window.event,t=t===void 0?16:Dp(t.type)),t):1}function at(t,e,n,r){if(50<yi)throw yi=0,nu=null,Error(w(185));es(t,n,r),(!(U&2)||t!==fe)&&(t===fe&&(!(U&2)&&(rl|=n),oe===4&&jt(t,ge)),Le(t,r),n===1&&U===0&&!(e.mode&1)&&(Rr=ne()+500,Zo&&_n()))}function Le(t,e){var n=t.callbackNode;dv(t,e);var r=io(t,t===fe?ge:0);if(r===0)n!==null&&Od(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Od(n),e===1)t.tag===0?cw(Ih.bind(null,t)):Jp(Ih.bind(null,t)),ow(function(){!(U&6)&&_n()}),n=null;else{switch(Np(r)){case 1:n=Wu;break;case 4:n=Ip;break;case 16:n=ro;break;case 536870912:n=Tp;break;default:n=ro}n=Ym(n,Hm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hm(t,e){if(Gs=-1,Ks=0,U&6)throw Error(w(327));var n=t.callbackNode;if(mr()&&t.callbackNode!==n)return null;var r=io(t,t===fe?ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Co(t,r);else{e=r;var i=U;U|=2;var s=jm();(fe!==t||ge!==e)&&(wt=null,Rr=ne()+500,On(t,e));do try{xw();break}catch(l){$m(t,l)}while(!0);Zu(),wo.current=s,U=i,re!==null?e=0:(fe=null,ge=0,e=oe)}if(e!==0){if(e===2&&(i=Pa(t),i!==0&&(r=i,e=ru(t,i))),e===1)throw n=Vi,On(t,0),jt(t,r),Le(t,ne()),n;if(e===6)jt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Pw(i)&&(e=Co(t,r),e===2&&(s=Pa(t),s!==0&&(r=s,e=ru(t,s))),e===1))throw n=Vi,On(t,0),jt(t,r),Le(t,ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:Cn(t,Re,wt);break;case 3:if(jt(t,r),(r&130023424)===r&&(e=pc+500-ne(),10<e)){if(io(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ie(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ba(Cn.bind(null,t,Re,wt),e);break}Cn(t,Re,wt);break;case 4:if(jt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rw(r/1960))-r,10<r){t.timeoutHandle=ba(Cn.bind(null,t,Re,wt),r);break}Cn(t,Re,wt);break;case 5:Cn(t,Re,wt);break;default:throw Error(w(329))}}}return Le(t,ne()),t.callbackNode===n?Hm.bind(null,t):null}function ru(t,e){var n=_i;return t.current.memoizedState.isDehydrated&&(On(t,e).flags|=256),t=Co(t,e),t!==2&&(e=Re,Re=n,e!==null&&iu(e)),t}function iu(t){Re===null?Re=t:Re.push.apply(Re,t)}function Pw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jt(t,e){for(e&=~fc,e&=~rl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lt(e),r=1<<n;t[n]=-1,e&=~r}}function Ih(t){if(U&6)throw Error(w(327));mr();var e=io(t,0);if(!(e&1))return Le(t,ne()),null;var n=Co(t,e);if(t.tag!==0&&n===2){var r=Pa(t);r!==0&&(e=r,n=ru(t,r))}if(n===1)throw n=Vi,On(t,0),jt(t,e),Le(t,ne()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cn(t,Re,wt),Le(t,ne()),null}function mc(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Rr=ne()+500,Zo&&_n())}}function Un(t){Yt!==null&&Yt.tag===0&&!(U&6)&&mr();var e=U;U|=1;var n=Qe.transition,r=W;try{if(Qe.transition=null,W=1,t)return t()}finally{W=r,Qe.transition=n,U=e,!(U&6)&&_n()}}function gc(){be=ar.current,K(ar)}function On(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sw(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uo();break;case 3:kr(),K(Oe),K(Se),sc();break;case 5:ic(r);break;case 4:kr();break;case 13:K(Q);break;case 19:K(Q);break;case 10:ec(r.type._context);break;case 22:case 23:gc()}n=n.return}if(fe=t,re=t=sn(t.current,null),ge=be=e,oe=0,Vi=null,fc=rl=bn=0,Re=_i=null,Nn!==null){for(e=0;e<Nn.length;e++)if(n=Nn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nn=null}return t}function $m(t,e){do{var n=re;try{if(Zu(),Hs.current=vo,yo){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yo=!1}if(Fn=0,ce=ie=Y=null,mi=!1,zi=0,hc.current=null,n===null||n.return===null){oe=1,Vi=e,re=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ge,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=dh(o);if(g!==null){g.flags&=-257,hh(g,o,l,s,e),g.mode&1&&ch(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){ch(s,u,e),_c();break e}a=Error(w(426))}}else if(q&&l.mode&1){var A=dh(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),hh(A,o,l,s,e),Xu(Nr(a,l));break e}}s=a=Nr(a,l),oe!==4&&(oe=2),_i===null?_i=[s]:_i.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Nm(s,a,e);ih(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(nn===null||!nn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Rm(s,l,e);ih(s,v);break e}}s=s.return}while(s!==null)}Km(n)}catch(C){e=C,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function jm(){var t=wo.current;return wo.current=vo,t===null?vo:t}function _c(){(oe===0||oe===3||oe===2)&&(oe=4),fe===null||!(bn&268435455)&&!(rl&268435455)||jt(fe,ge)}function Co(t,e){var n=U;U|=2;var r=jm();(fe!==t||ge!==e)&&(wt=null,On(t,e));do try{Aw();break}catch(i){$m(t,i)}while(!0);if(Zu(),U=n,wo.current=r,re!==null)throw Error(w(261));return fe=null,ge=0,oe}function Aw(){for(;re!==null;)Gm(re)}function xw(){for(;re!==null&&!nv();)Gm(re)}function Gm(t){var e=Qm(t.alternate,t,be);t.memoizedProps=t.pendingProps,e===null?Km(t):re=e,hc.current=null}function Km(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Iw(n,e),n!==null){n.flags&=32767,re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{oe=6,re=null;return}}else if(n=Cw(n,e,be),n!==null){re=n;return}if(e=e.sibling,e!==null){re=e;return}re=e=t}while(e!==null);oe===0&&(oe=5)}function Cn(t,e,n){var r=W,i=Qe.transition;try{Qe.transition=null,W=1,Ow(t,e,n,r)}finally{Qe.transition=i,W=r}return null}function Ow(t,e,n,r){do mr();while(Yt!==null);if(U&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(hv(t,s),t===fe&&(re=fe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,Ym(ro,function(){return mr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qe.transition,Qe.transition=null;var o=W;W=1;var l=U;U|=4,hc.current=null,kw(t,n),Bm(n,t),Jv(Ma),so=!!La,Ma=La=null,t.current=n,Nw(n),rv(),U=l,W=o,Qe.transition=s}else t.current=n;if(Os&&(Os=!1,Yt=t,So=i),s=t.pendingLanes,s===0&&(nn=null),ov(n.stateNode),Le(t,ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Eo)throw Eo=!1,t=tu,tu=null,t;return So&1&&t.tag!==0&&mr(),s=t.pendingLanes,s&1?t===nu?yi++:(yi=0,nu=t):yi=0,_n(),null}function mr(){if(Yt!==null){var t=Np(So),e=Qe.transition,n=W;try{if(Qe.transition=null,W=16>t?16:t,Yt===null)var r=!1;else{if(t=Yt,Yt=null,So=0,U&6)throw Error(w(331));var i=U;for(U|=4,S=t.current;S!==null;){var s=S,o=s.child;if(S.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(S=u;S!==null;){var d=S;switch(d.tag){case 0:case 11:case 15:gi(8,d,s)}var c=d.child;if(c!==null)c.return=d,S=c;else for(;S!==null;){d=S;var h=d.sibling,g=d.return;if(Um(d),d===u){S=null;break}if(h!==null){h.return=g,S=h;break}S=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var A=y.sibling;y.sibling=null,y=A}while(y!==null)}}S=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,S=o;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,S=p;break e}S=s.return}}var f=t.current;for(S=f;S!==null;){o=S;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,S=m;else e:for(o=f;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nl(9,l)}}catch(C){J(l,l.return,C)}if(l===o){S=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,S=v;break e}S=l.return}}if(U=i,_n(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(qo,t)}catch{}r=!0}return r}finally{W=n,Qe.transition=e}}return!1}function Th(t,e,n){e=Nr(n,e),e=Nm(t,e,1),t=tn(t,e,1),e=Ie(),t!==null&&(es(t,1,e),Le(t,e))}function J(t,e,n){if(t.tag===3)Th(t,t,n);else for(;e!==null;){if(e.tag===3){Th(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){t=Nr(n,t),t=Rm(e,t,1),e=tn(e,t,1),t=Ie(),e!==null&&(es(e,1,t),Le(e,t));break}}e=e.return}}function Dw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ie(),t.pingedLanes|=t.suspendedLanes&n,fe===t&&(ge&n)===n&&(oe===4||oe===3&&(ge&130023424)===ge&&500>ne()-pc?On(t,0):fc|=n),Le(t,e)}function qm(t,e){e===0&&(t.mode&1?(e=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):e=1);var n=Ie();t=Ot(t,e),t!==null&&(es(t,e,n),Le(t,n))}function Lw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qm(t,n)}function Mw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),qm(t,n)}var Qm;Qm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Oe.current)Pe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pe=!1,Sw(t,e,n);Pe=!!(t.flags&131072)}else Pe=!1,q&&e.flags&1048576&&Zp(e,fo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;js(t,e),t=e.pendingProps;var i=Cr(e,Se.current);pr(e,n),i=lc(null,e,r,t,i,n);var s=ac();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,De(r)?(s=!0,co(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,nc(e),i.updater=tl,e.stateNode=i,i._reactInternals=e,$a(e,r,t,n),e=Ka(null,e,r,!0,s,n)):(e.tag=0,q&&s&&Qu(e),Ce(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(js(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bw(r),t=et(r,t),i){case 0:e=Ga(null,e,r,t,n);break e;case 1:e=mh(null,e,r,t,n);break e;case 11:e=fh(null,e,r,t,n);break e;case 14:e=ph(null,e,r,et(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Ga(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),mh(t,e,r,i,n);case 3:e:{if(Om(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sm(t,e),go(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Nr(Error(w(423)),e),e=gh(t,e,r,n,i);break e}else if(r!==i){i=Nr(Error(w(424)),e),e=gh(t,e,r,n,i);break e}else for(Ue=en(e.stateNode.containerInfo.firstChild),ze=e,q=!0,nt=null,n=rm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ir(),r===i){e=Dt(t,e,n);break e}Ce(t,e,r,n)}e=e.child}return e;case 5:return om(e),t===null&&Ba(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fa(r,i)?o=null:s!==null&&Fa(r,s)&&(e.flags|=32),xm(t,e),Ce(t,e,o,n),e.child;case 6:return t===null&&Ba(e),null;case 13:return Dm(t,e,n);case 4:return rc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Tr(e,null,r,n):Ce(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),fh(t,e,r,i,n);case 7:return Ce(t,e,e.pendingProps,n),e.child;case 8:return Ce(t,e,e.pendingProps.children,n),e.child;case 12:return Ce(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$(po,r._currentValue),r._currentValue=o,s!==null)if(dt(s.value,o)){if(s.children===i.children&&!Oe.current){e=Dt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Rt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Va(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Va(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ce(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,pr(e,n),i=Ye(i),r=r(i),e.flags|=1,Ce(t,e,r,n),e.child;case 14:return r=e.type,i=et(r,e.pendingProps),i=et(r.type,i),ph(t,e,r,i,n);case 15:return Pm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),js(t,e),e.tag=1,De(r)?(t=!0,co(e)):t=!1,pr(e,n),km(e,r,i),$a(e,r,i,n),Ka(null,e,r,!0,t,n);case 19:return Lm(t,e,n);case 22:return Am(t,e,n)}throw Error(w(156,e.tag))};function Ym(t,e){return Cp(t,e)}function Fw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,n,r){return new Fw(t,e,n,r)}function yc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bw(t){if(typeof t=="function")return yc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bu)return 11;if(t===Uu)return 14}return 2}function sn(t,e){var n=t.alternate;return n===null?(n=qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jn:return Dn(n.children,i,s,e);case Fu:o=8,i|=8;break;case pa:return t=qe(12,n,e,i|2),t.elementType=pa,t.lanes=s,t;case ma:return t=qe(13,n,e,i),t.elementType=ma,t.lanes=s,t;case ga:return t=qe(19,n,e,i),t.elementType=ga,t.lanes=s,t;case op:return il(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ip:o=10;break e;case sp:o=9;break e;case bu:o=11;break e;case Uu:o=14;break e;case Vt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Dn(t,e,n,r){return t=qe(7,t,r,e),t.lanes=n,t}function il(t,e,n,r){return t=qe(22,t,r,e),t.elementType=op,t.lanes=n,t.stateNode={isHidden:!1},t}function Ql(t,e,n){return t=qe(6,t,null,e),t.lanes=n,t}function Yl(t,e,n){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Uw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vc(t,e,n,r,i,s,o,l,a){return t=new Uw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nc(s),t}function zw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Xm(t){if(!t)return hn;t=t._reactInternals;e:{if(Kn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(De(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(De(n))return Xp(t,n,e)}return e}function Jm(t,e,n,r,i,s,o,l,a){return t=vc(n,r,!0,t,i,s,o,l,a),t.context=Xm(null),n=t.current,r=Ie(),i=rn(n),s=Rt(r,i),s.callback=e??null,tn(n,s,i),t.current.lanes=i,es(t,i,r),Le(t,r),t}function sl(t,e,n,r){var i=e.current,s=Ie(),o=rn(i);return n=Xm(n),e.context===null?e.context=n:e.pendingContext=n,e=Rt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tn(i,e,o),t!==null&&(at(t,i,o,s),Vs(t,i,o)),o}function Io(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wc(t,e){kh(t,e),(t=t.alternate)&&kh(t,e)}function Ww(){return null}var Zm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ec(t){this._internalRoot=t}ol.prototype.render=Ec.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));sl(t,e,null,null)};ol.prototype.unmount=Ec.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Un(function(){sl(null,t,null,null)}),e[xt]=null}};function ol(t){this._internalRoot=t}ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ap();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$t.length&&e!==0&&e<$t[n].priority;n++);$t.splice(n,0,t),n===0&&Op(t)}};function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nh(){}function Bw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Io(o);s.call(u)}}var o=Jm(e,r,t,0,null,!1,!1,"",Nh);return t._reactRootContainer=o,t[xt]=o.current,Li(t.nodeType===8?t.parentNode:t),Un(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Io(a);l.call(u)}}var a=vc(t,0,!1,null,null,!1,!1,"",Nh);return t._reactRootContainer=a,t[xt]=a.current,Li(t.nodeType===8?t.parentNode:t),Un(function(){sl(e,a,n,r)}),a}function al(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Io(o);l.call(a)}}sl(e,o,t,i)}else o=Bw(n,e,t,i,r);return Io(o)}Rp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ai(e.pendingLanes);n!==0&&(Bu(e,n|1),Le(e,ne()),!(U&6)&&(Rr=ne()+500,_n()))}break;case 13:Un(function(){var r=Ot(t,1);if(r!==null){var i=Ie();at(r,t,1,i)}}),wc(t,1)}};Vu=function(t){if(t.tag===13){var e=Ot(t,134217728);if(e!==null){var n=Ie();at(e,t,134217728,n)}wc(t,134217728)}};Pp=function(t){if(t.tag===13){var e=rn(t),n=Ot(t,e);if(n!==null){var r=Ie();at(n,t,e,r)}wc(t,e)}};Ap=function(){return W};xp=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};ka=function(t,e,n){switch(e){case"input":if(va(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Jo(r);if(!i)throw Error(w(90));ap(r),va(r,i)}}}break;case"textarea":cp(t,n);break;case"select":e=n.value,e!=null&&cr(t,!!n.multiple,e,!1)}};_p=mc;yp=Un;var Vw={usingClientEntryPoint:!1,Events:[ns,nr,Jo,mp,gp,mc]},ti={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hw={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ep(t),t===null?null:t.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||Ww,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ds.isDisabled&&Ds.supportsFiber)try{qo=Ds.inject(Hw),gt=Ds}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vw;Be.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(e))throw Error(w(200));return zw(t,e,null,n)};Be.createRoot=function(t,e){if(!Sc(t))throw Error(w(299));var n=!1,r="",i=Zm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vc(t,1,!1,null,null,n,!1,r,i),t[xt]=e.current,Li(t.nodeType===8?t.parentNode:t),new Ec(e)};Be.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Ep(e),t=t===null?null:t.stateNode,t};Be.flushSync=function(t){return Un(t)};Be.hydrate=function(t,e,n){if(!ll(e))throw Error(w(200));return al(null,t,e,!0,n)};Be.hydrateRoot=function(t,e,n){if(!Sc(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Zm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Jm(e,null,t,1,n??null,i,!1,s,o),t[xt]=e.current,Li(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ol(e)};Be.render=function(t,e,n){if(!ll(e))throw Error(w(200));return al(null,t,e,!1,n)};Be.unmountComponentAtNode=function(t){if(!ll(t))throw Error(w(40));return t._reactRootContainer?(Un(function(){al(null,null,t,!1,function(){t._reactRootContainer=null,t[xt]=null})}),!0):!1};Be.unstable_batchedUpdates=mc;Be.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ll(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return al(t,e,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function eg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eg)}catch(t){console.error(t)}}eg(),ep.exports=Be;var $w=ep.exports,jw,Rh=$w;jw=Rh.createRoot,Rh.hydrateRoot;const Ph=t=>{let e;const n=new Set,r=(u,d)=>{const c=typeof u=="function"?u(e):u;if(!Object.is(c,e)){const h=e;e=d??(typeof c!="object"||c===null)?c:Object.assign({},e,c),n.forEach(g=>g(e,h))}},i=()=>e,l={setState:r,getState:i,getInitialState:()=>a,subscribe:u=>(n.add(u),()=>n.delete(u))},a=e=t(r,i,l);return l},Gw=t=>t?Ph(t):Ph,Kw=t=>t;function qw(t,e=Kw){const n=_s.useSyncExternalStore(t.subscribe,_s.useCallback(()=>e(t.getState()),[t,e]),_s.useCallback(()=>e(t.getInitialState()),[t,e]));return _s.useDebugValue(n),n}const Ah=t=>{const e=Gw(t),n=r=>qw(e,r);return Object.assign(n,e),n},Qw=t=>t?Ah(t):Ah,Yw=()=>{};var xh={};/**
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
 */const tg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw Ur(e)},Ur=function(t){return new Error("Firebase Database ("+tg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ng=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ng(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new Jw;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rg=function(t){const e=ng(t);return Cc.encodeByteArray(e,!0)},To=function(t){return rg(t).replace(/\./g,"")},ko=function(t){try{return Cc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zw(t){return ig(void 0,t)}function ig(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eE(n)||(t[n]=ig(t[n],e[n]));return t}function eE(t){return t!=="__proto__"}/**
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
 */function tE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nE=()=>tE().__FIREBASE_DEFAULTS__,rE=()=>{if(typeof process>"u"||typeof xh>"u")return;const t=xh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ko(t[1]);return e&&JSON.parse(e)},Ic=()=>{try{return Yw()||nE()||rE()||iE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sg=t=>{var e,n;return(n=(e=Ic())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},sE=t=>{const e=sg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},og=()=>{var t;return(t=Ic())==null?void 0:t.config},lg=t=>{var e;return(e=Ic())==null?void 0:e[`_${t}`]};/**
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
 */class ul{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function oE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[To(JSON.stringify(n)),To(JSON.stringify(o)),""].join(".")}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function lE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ag(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uE(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cE(){return tg.NODE_ADMIN===!0}function dE(){try{return typeof indexedDB=="object"}catch{return!1}}function hE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const fE="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fE,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pE(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new yn(i,l,r)}}function pE(t,e){return t.replace(mE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mE=/\{\$([^}]+)}/g;/**
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
 */function Hi(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
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
 */const ug=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Hi(ko(s[0])||""),n=Hi(ko(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},gE=function(t){const e=ug(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_E=function(t){const e=ug(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function su(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function zn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Oh(s)&&Oh(o)){if(!zn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Oh(t){return t!==null&&typeof t=="object"}/**
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
 */function zr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class yE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function vE(t,e){const n=new wE(t,e);return n.subscribe.bind(n)}class wE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xl),i.error===void 0&&(i.error=Xl),i.complete===void 0&&(i.complete=Xl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xl(){}function kc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const SE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ss(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cg(t){return(await fetch(t,{credentials:"include"})).ok}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const In="[DEFAULT]";/**
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
 */class CE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ul;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TE(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IE(t){return t===In?void 0:t}function TE(t){return t.instantiationMode==="EAGER"}/**
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
 */class kE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const NE={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},RE=B.INFO,PE={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},AE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=RE,this._logHandler=AE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const xE=(t,e)=>e.some(n=>t instanceof n);let Dh,Lh;function OE(){return Dh||(Dh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DE(){return Lh||(Lh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dg=new WeakMap,ou=new WeakMap,hg=new WeakMap,Jl=new WeakMap,Rc=new WeakMap;function LE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(on(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dg.set(n,t)}).catch(()=>{}),Rc.set(e,t),e}function ME(t){if(ou.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ou.set(t,e)}let lu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ou.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FE(t){lu=t(lu)}function bE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zl(this),e,...n);return hg.set(r,e.sort?e.sort():[e]),on(r)}:DE().includes(t)?function(...e){return t.apply(Zl(this),e),on(dg.get(this))}:function(...e){return on(t.apply(Zl(this),e))}}function UE(t){return typeof t=="function"?bE(t):(t instanceof IDBTransaction&&ME(t),xE(t,OE())?new Proxy(t,lu):t)}function on(t){if(t instanceof IDBRequest)return LE(t);if(Jl.has(t))return Jl.get(t);const e=UE(t);return e!==t&&(Jl.set(t,e),Rc.set(e,t)),e}const Zl=t=>Rc.get(t);function zE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=on(o);return r&&o.addEventListener("upgradeneeded",a=>{r(on(o.result),a.oldVersion,a.newVersion,on(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const WE=["get","getKey","getAll","getAllKeys","count"],BE=["put","add","delete","clear"],ea=new Map;function Mh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ea.get(e))return ea.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ea.set(e,s),s}FE(t=>({...t,get:(e,n,r)=>Mh(e,n)||t.get(e,n,r),has:(e,n)=>!!Mh(e,n)||t.has(e,n)}));/**
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
 */class VE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const au="@firebase/app",Fh="0.14.13";/**
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
 */const Lt=new Nc("@firebase/app"),$E="@firebase/app-compat",jE="@firebase/analytics-compat",GE="@firebase/analytics",KE="@firebase/app-check-compat",qE="@firebase/app-check",QE="@firebase/auth",YE="@firebase/auth-compat",XE="@firebase/database",JE="@firebase/data-connect",ZE="@firebase/database-compat",eS="@firebase/functions",tS="@firebase/functions-compat",nS="@firebase/installations",rS="@firebase/installations-compat",iS="@firebase/messaging",sS="@firebase/messaging-compat",oS="@firebase/performance",lS="@firebase/performance-compat",aS="@firebase/remote-config",uS="@firebase/remote-config-compat",cS="@firebase/storage",dS="@firebase/storage-compat",hS="@firebase/firestore",fS="@firebase/ai",pS="@firebase/firestore-compat",mS="firebase",gS="12.14.0";/**
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
 */const uu="[DEFAULT]",_S={[au]:"fire-core",[$E]:"fire-core-compat",[GE]:"fire-analytics",[jE]:"fire-analytics-compat",[qE]:"fire-app-check",[KE]:"fire-app-check-compat",[QE]:"fire-auth",[YE]:"fire-auth-compat",[XE]:"fire-rtdb",[JE]:"fire-data-connect",[ZE]:"fire-rtdb-compat",[eS]:"fire-fn",[tS]:"fire-fn-compat",[nS]:"fire-iid",[rS]:"fire-iid-compat",[iS]:"fire-fcm",[sS]:"fire-fcm-compat",[oS]:"fire-perf",[lS]:"fire-perf-compat",[aS]:"fire-rc",[uS]:"fire-rc-compat",[cS]:"fire-gcs",[dS]:"fire-gcs-compat",[hS]:"fire-fst",[pS]:"fire-fst-compat",[fS]:"fire-vertex","fire-js":"fire-js",[mS]:"fire-js-all"};/**
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
 */const $i=new Map,yS=new Map,cu=new Map;function bh(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ar(t){const e=t.name;if(cu.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;cu.set(e,t);for(const n of $i.values())bh(n,t);for(const n of yS.values())bh(n,t);return!0}function Pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ge(t){return t==null?!1:t.settings!==void 0}/**
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
 */const vS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new is("app","Firebase",vS);/**
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
 */class wS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Wr=gS;function fg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:uu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(n||(n=og()),!n)throw ln.create("no-options");const s=$i.get(i);if(s){if(zn(n,s.options)&&zn(r,s.config))return s;throw ln.create("duplicate-app",{appName:i})}const o=new kE(i);for(const a of cu.values())o.addComponent(a);const l=new wS(n,r,o);return $i.set(i,l),l}function pg(t=uu){const e=$i.get(t);if(!e&&t===uu&&og())return fg();if(!e)throw ln.create("no-app",{appName:t});return e}function Uh(){return Array.from($i.values())}function an(t,e,n){let r=_S[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(o.join(" "));return}Ar(new Wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ES="firebase-heartbeat-database",SS=1,ji="firebase-heartbeat-store";let ta=null;function mg(){return ta||(ta=zE(ES,SS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),ta}async function CS(t){try{const n=(await mg()).transaction(ji),r=await n.objectStore(ji).get(gg(t));return await n.done,r}catch(e){if(e instanceof yn)Lt.warn(e.message);else{const n=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(n.message)}}}async function zh(t,e){try{const r=(await mg()).transaction(ji,"readwrite");await r.objectStore(ji).put(e,gg(t)),await r.done}catch(n){if(n instanceof yn)Lt.warn(n.message);else{const r=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lt.warn(r.message)}}}function gg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IS=1024,TS=30;class kS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>TS){const o=PS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wh(),{heartbeatsToSend:r,unsentEntries:i}=NS(this._heartbeatsCache.heartbeats),s=To(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Lt.warn(n),""}}}function Wh(){return new Date().toISOString().substring(0,10)}function NS(t,e=IS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dE()?hE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bh(t){return To(JSON.stringify({version:2,heartbeats:t})).length}function PS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function AS(t){Ar(new Wn("platform-logger",e=>new VE(e),"PRIVATE")),Ar(new Wn("heartbeat",e=>new kS(e),"PRIVATE")),an(au,Fh,t),an(au,Fh,"esm2020"),an("fire-js","")}AS("");var Vh={};const Hh="@firebase/database",$h="1.1.3";/**
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
 */let _g="";function xS(t){_g=t}/**
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
 */class OS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class DS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const yg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new OS(e)}}catch{}return new DS},Pn=yg("localStorage"),LS=yg("sessionStorage");/**
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
 */const gr=new Nc("@firebase/database"),MS=function(){let t=1;return function(){return t++}}(),vg=function(t){const e=SE(t),n=new yE;n.update(e);const r=n.digest();return Cc.encodeByteArray(r)},os=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=os.apply(null,r):typeof r=="object"?e+=he(r):e+=r,e+=" "}return e};let vi=null,jh=!0;const FS=function(t,e){E(!0,"Can't turn on custom loggers persistently."),gr.logLevel=B.VERBOSE,vi=gr.log.bind(gr)},Ee=function(...t){if(jh===!0&&(jh=!1,vi===null&&LS.get("logging_enabled")===!0&&FS()),vi){const e=os.apply(null,t);vi(e)}},ls=function(t){return function(...e){Ee(t,...e)}},du=function(...t){const e="FIREBASE INTERNAL ERROR: "+os(...t);gr.error(e)},Mt=function(...t){const e=`FIREBASE FATAL ERROR: ${os(...t)}`;throw gr.error(e),new Error(e)},Me=function(...t){const e="FIREBASE WARNING: "+os(...t);gr.warn(e)},bS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},US=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xr="[MIN_NAME]",Bn="[MAX_NAME]",Br=function(t,e){if(t===e)return 0;if(t===xr||e===Bn)return-1;if(e===xr||t===Bn)return 1;{const n=Gh(t),r=Gh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zS=function(t,e){return t===e?0:t<e?-1:1},ni=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},Ac=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=he(e[r]),n+=":",n+=Ac(t[e[r]]);return n+="}",n},Eg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sg=function(t){E(!wg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},WS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},BS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function VS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const HS=new RegExp("^-?(0*)\\d{1,10}$"),$S=-2147483648,jS=2147483647,Gh=function(t){if(HS.test(t)){const e=Number(t);if(e>=$S&&e<=jS)return e}return null},Vr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Me("Exception was thrown by user callback.",n),e},Math.floor(0))}},GS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class KS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ge(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Me(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class qS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Me(e)}}class Qs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qs.OWNER="owner";/**
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
 */const xc="5",Cg="v",Ig="s",Tg="r",kg="f",Ng=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rg="ls",Pg="p",hu="ac",Ag="websocket",xg="long_polling";/**
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
 */class Og{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function QS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Dg(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===Ag)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===xg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);QS(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class YS{constructor(){this.counters_={}}incrementCounter(e,n=1){zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Zw(this.counters_)}}/**
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
 */const na={},ra={};function Oc(t){const e=t.toString();return na[e]||(na[e]=new YS),na[e]}function XS(t,e){const n=t.toString();return ra[n]||(ra[n]=e()),ra[n]}/**
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
 */class JS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Vr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Kh="start",ZS="close",eC="pLPCommand",tC="pRTLPCB",Lg="id",Mg="pw",Fg="ser",nC="cb",rC="seg",iC="ts",sC="d",oC="dframe",bg=1870,Ug=30,lC=bg-Ug,aC=25e3,uC=3e4;class ur{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ls(e),this.stats_=Oc(n),this.urlFn=a=>(this.appCheckToken&&(a[hu]=this.appCheckToken),Dg(n,xg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new JS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(uC)),US(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dc((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kh)this.id=l,this.password=a;else if(o===ZS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Kh]="t",r[Fg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[nC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Cg]=xc,this.transportSessionId&&(r[Ig]=this.transportSessionId),this.lastSessionId&&(r[Rg]=this.lastSessionId),this.applicationId&&(r[Pg]=this.applicationId),this.appCheckToken&&(r[hu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ng.test(location.hostname)&&(r[Tg]=kg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ur.forceAllow_=!0}static forceDisallow(){ur.forceDisallow_=!0}static isAvailable(){return ur.forceAllow_?!0:!ur.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!WS()&&!BS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=rg(n),i=Eg(r,lC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[oC]="t",r[Lg]=e,r[Mg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Dc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MS(),window[eC+this.uniqueCallbackIdentifier]=e,window[tC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Dc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ee("frame writing exception"),l.stack&&Ee(l.stack),Ee(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lg]=this.myID,e[Mg]=this.myPW,e[Fg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ug+r.length<=bg;){const o=this.pendingSegs.shift();r=r+"&"+rC+i+"="+o.seg+"&"+iC+i+"="+o.ts+"&"+sC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(aC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const cC=16384,dC=45e3;let Ro=null;typeof MozWebSocket<"u"?Ro=MozWebSocket:typeof WebSocket<"u"&&(Ro=WebSocket);class rt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ls(this.connId),this.stats_=Oc(n),this.connURL=rt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Cg]=xc,typeof location<"u"&&location.hostname&&Ng.test(location.hostname)&&(o[Tg]=kg),n&&(o[Ig]=n),r&&(o[Rg]=r),i&&(o[hu]=i),s&&(o[Pg]=s),Dg(e,Ag,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pn.set("previous_websocket_failure",!0);try{let r;cE(),this.mySock=new Ro(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ro!==null&&!rt.forceDisallow_}static previouslyFailed(){return Pn.isInMemoryStorage||Pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Hi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Eg(n,cC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
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
 */class Gi{static get ALL_TRANSPORTS(){return[ur,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=rt&&rt.isAvailable();let r=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||Me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[rt];else{const i=this.transports_=[];for(const s of Gi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Gi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gi.globalTransportInitialized_=!1;/**
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
 */const hC=6e4,fC=5e3,pC=10*1024,mC=100*1024,ia="t",qh="d",gC="s",Qh="r",_C="e",Yh="o",Xh="a",Jh="n",Zh="p",yC="h";class vC{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ls("c:"+this.id+":"),this.transportManager_=new Gi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>pC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ia in e){const n=e[ia];n===Xh?this.upgradeIfSecondaryHealthy_():n===Qh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ni("t",e),r=ni("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ni("t",e),r=ni("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ni(ia,e);if(qh in e){const r=e[qh];if(n===yC){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Jh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===gC?this.onConnectionShutdown_(r):n===Qh?this.onReset_(r):n===_C?du("Server Error: "+r):n===Yh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):du("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xc!==r&&Me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class zg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Wg{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Po extends Wg{static getInstance(){return new Po}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ef=32,tf=768;class V{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new V("")}function D(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fn(t){return t.pieces_.length-t.pieceNum_}function H(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new V(t.pieces_,e)}function Bg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function wC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Vg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new V(e,0)}function se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof V)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new V(n,0)}function M(t){return t.pieceNum_>=t.pieces_.length}function Ae(t,e){const n=D(t),r=D(e);if(n===null)return e;if(n===r)return Ae(H(t),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Lc(t,e){if(fn(t)!==fn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function it(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fn(t)>fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class EC{constructor(e,n){this.errorPrefix_=n,this.parts_=Vg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=cl(this.parts_[r]);$g(this)}}function SC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=cl(e),$g(t)}function CC(t){const e=t.parts_.pop();t.byteLength_-=cl(e),t.parts_.length>0&&(t.byteLength_-=1)}function $g(t){if(t.byteLength_>tf)throw new Error(t.errorPrefix_+"has a key path longer than "+tf+" bytes ("+t.byteLength_+").");if(t.parts_.length>ef)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ef+") or object contains a cycle "+Tn(t))}function Tn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Mc extends Wg{static getInstance(){return new Mc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ri=1e3,IC=60*5*1e3,nf=30*1e3,TC=1.3,kC=3e4,NC="server_kill",rf=3;class Pt extends zg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Pt.nextPersistentConnectionId_++,this.log_=ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ri,this.maxReconnectDelay_=IC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Po.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(he(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ul,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Pt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&zt(e,"w")){const r=Pr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_E(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):du("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kC&&(this.reconnectDelay_=ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*TC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new vC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Me(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(NC)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Me(c),a())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],su(this.interruptReasons_)&&(this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ac(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new V(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=rf&&(this.reconnectDelay_=nf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=rf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_g.replace(/\./g,"-")]=1,Tc()?e["framework.cordova"]=1:ag()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Po.getInstance().currentlyOnline();return su(this.interruptReasons_)&&e}}Pt.nextPersistentConnectionId_=0;Pt.nextConnectionId_=0;/**
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
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
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
 */class dl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new L(xr,e),i=new L(xr,n);return this.compare(r,i)!==0}minPost(){return L.MIN}}/**
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
 */let Ls;class jg extends dl{static get __EMPTY_NODE(){return Ls}static set __EMPTY_NODE(e){Ls=e}compare(e,n){return Br(e.name,n.name)}isDefinedOn(e){throw Ur("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Bn,Ls)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,Ls)}toString(){return".key"}}const _r=new jg;/**
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
 */class Ms{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class de{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??de.RED,this.left=i??xe.EMPTY_NODE,this.right=s??xe.EMPTY_NODE}copy(e,n,r,i,s){return new de(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return xe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}de.RED=!0;de.BLACK=!1;class RC{copy(e,n,r,i,s){return this}insert(e,n,r){return new de(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xe{constructor(e,n=xe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,de.BLACK,null,null))}remove(e){return new xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,de.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ms(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ms(this.root_,null,this.comparator_,!0,e)}}xe.EMPTY_NODE=new RC;/**
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
 */function PC(t,e){return Br(t.name,e.name)}function Fc(t,e){return Br(t,e)}/**
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
 */let fu;function AC(t){fu=t}const Gg=function(t){return typeof t=="number"?"number:"+Sg(t):"string:"+t},Kg=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zt(e,".sv"),"Priority must be a string or number.")}else E(t===fu||t.isEmpty(),"priority of unexpected type.");E(t===fu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let sf;class ue{static set __childrenNodeConstructor(e){sf=e}static get __childrenNodeConstructor(){return sf}constructor(e,n=ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Kg(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:D(e)===".priority"?this.priorityNode_:ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=D(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sg(this.value_):e+=this.value_,this.lazyHash_=vg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ue.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ue.VALUE_TYPE_ORDER.indexOf(n),s=ue.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let qg,Qg;function xC(t){qg=t}function OC(t){Qg=t}class DC extends dl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Br(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Bn,new ue("[PRIORITY-POST]",Qg))}makePost(e,n){const r=qg(e);return new L(n,new ue("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new DC;/**
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
 */const LC=Math.log(2);class MC{constructor(e){const n=s=>parseInt(Math.log(s)/LC,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ao=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new de(h,c.node,de.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),y=i(g+1,u);return c=t[g],h=n?n(c):c,new de(h,c.node,de.BLACK,_,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,y){const A=c-_,p=c;c-=_;const f=i(A+1,p),m=t[A],v=n?n(m):m;g(new de(v,m.node,y,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),A=Math.pow(2,a.count-(_+1));y?h(A,de.BLACK):(h(A,de.BLACK),h(A,de.RED))}return d},o=new MC(t.length),l=s(o);return new xe(r||e,l)};/**
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
 */let sa;const Yn={};class Tt{static get Default(){return E(Yn&&Z,"ChildrenNode.ts has not been loaded"),sa=sa||new Tt({".priority":Yn},{".priority":Z}),sa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Pr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xe?n:null}hasIndex(e){return zt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==_r,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(L.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Ao(r,e.getCompare()):l=Yn;const a=e.toString(),u={...this.indexSet_};u[a]=e;const d={...this.indexes_};return d[a]=l,new Tt(d,u)}addToIndexes(e,n){const r=No(this.indexes_,(i,s)=>{const o=Pr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===Yn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Ao(l,o.getCompare())}else return Yn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new Tt(r,this.indexSet_)}removeFromIndexes(e,n){const r=No(this.indexes_,i=>{if(i===Yn)return i;{const s=n.get(e.name);return s?i.remove(new L(e.name,s)):i}});return new Tt(r,this.indexSet_)}}/**
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
 */let ii;class R{static get EMPTY_NODE(){return ii||(ii=new R(new xe(Fc),null,Tt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Kg(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ii}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ii:n}}getChild(e){const n=D(e);return n===null?this:this.getImmediateChild(n).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new L(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ii:this.priorityNode_;return new R(i,o,s)}}updateChild(e,n){const r=D(e);if(r===null)return n;{E(D(e)!==".priority"||fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(H(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Z,(o,l)=>{n[o]=l.val(e),r++,s&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gg(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":vg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new L(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===as?-1:0}withIndex(e){if(e===_r||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===_r||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_r?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FC extends R{constructor(){super(new xe(Fc),R.EMPTY_NODE,Tt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const as=new FC;Object.defineProperties(L,{MIN:{value:new L(xr,R.EMPTY_NODE)},MAX:{value:new L(Bn,as)}});jg.__EMPTY_NODE=R.EMPTY_NODE;ue.__childrenNodeConstructor=R;AC(as);OC(as);/**
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
 */const bC=!0;function me(t,e=null){if(t===null)return R.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ue(n,me(e))}if(!(t instanceof Array)&&bC){const n=[];let r=!1;if(Fe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=me(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return R.EMPTY_NODE;const s=Ao(n,PC,o=>o.name,Fc);if(r){const o=Ao(n,Z.getCompare());return new R(s,me(e),new Tt({".priority":o},{".priority":Z}))}else return new R(s,me(e),Tt.Default)}else{let n=R.EMPTY_NODE;return Fe(t,(r,i)=>{if(zt(t,r)&&r.substring(0,1)!=="."){const s=me(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(me(e))}}xC(me);/**
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
 */class UC extends dl{constructor(e){super(),this.indexPath_=e,E(!M(e)&&D(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Br(e.name,n.name):s}makePost(e,n){const r=me(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,r);return new L(n,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,as);return new L(Bn,e)}toString(){return Vg(this.indexPath_,0).join("/")}}/**
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
 */class zC extends dl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Br(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const r=me(e);return new L(n,r)}toString(){return".value"}}const WC=new zC;/**
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
 */function Yg(t){return{type:"value",snapshotNode:t}}function Or(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ki(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function BC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class bc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ki(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Or(n,r)):o.trackChildChange(qi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ki(i,s))}),n.isLeafNode()||n.forEachChild(Z,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(qi(i,s,o))}else r.trackChildChange(Or(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Qi{constructor(e){this.indexedFilter_=new bc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qi.getStartPost_(e),this.endPost_=Qi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new L(n,r))||(r=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=R.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const s=this;return n.forEachChild(Z,(o,l)=>{s.matches(new L(o,l))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class VC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Qi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new L(n,r))||(r=R.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new L(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(qi(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ki(n,c));const y=l.updateImmediateChild(n,R.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Or(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ki(u.name,u.node)),s.trackChildChange(Or(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,R.EMPTY_NODE)):e}}/**
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
 */class Uc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new Uc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function HC(t){return t.loadsAllData()?new bc(t.getIndex()):t.hasLimit()?new VC(t):new Qi(t)}function of(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Z?n="$priority":t.index_===WC?n="$value":t.index_===_r?n="$key":(E(t.index_ instanceof UC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=he(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+he(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=he(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+he(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
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
 */class xo extends zg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ls("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=xo.getListenId_(e,r),l={};this.listens_[o]=l;const a=of(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Pr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=xo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=of(e._queryParams),r=e._path.toString(),i=new ul;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Hi(l.responseText)}catch{Me("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Me("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class $C{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Oo(){return{value:null,children:new Map}}function Xg(t,e,n){if(M(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=D(e);t.children.has(r)||t.children.set(r,Oo());const i=t.children.get(r);e=H(e),Xg(i,e,n)}}function pu(t,e,n){t.value!==null?n(e,t.value):jC(t,(r,i)=>{const s=new V(e.toString()+"/"+r);pu(i,s,n)})}function jC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class GC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Fe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const af=10*1e3,KC=30*1e3,qC=5*60*1e3;class QC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new GC(e);const r=af+(KC-af)*Math.random();wi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Fe(e,(i,s)=>{s>0&&zt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*qC))}}/**
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
 */var st;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function Jg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Do{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=st.ACK_USER_WRITE,this.source=Jg()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new V(e));return new Do(z(),n,this.revert)}}else return E(D(this.path)===e,"operationForChild called for unrelated child."),new Do(H(this.path),this.affectedTree,this.revert)}}/**
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
 */class Yi{constructor(e,n){this.source=e,this.path=n,this.type=st.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new Yi(this.source,z()):new Yi(this.source,H(this.path))}}/**
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
 */class Vn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=st.OVERWRITE}operationForChild(e){return M(this.path)?new Vn(this.source,z(),this.snap.getImmediateChild(e)):new Vn(this.source,H(this.path),this.snap)}}/**
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
 */class Xi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=st.MERGE}operationForChild(e){if(M(this.path)){const n=this.children.subtree(new V(e));return n.isEmpty()?null:n.value?new Vn(this.source,z(),n.value):new Xi(this.source,z(),n)}else return E(D(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xi(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Hn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const n=D(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class YC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function XC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(BC(o.childName,o.snapshotNode))}),si(t,i,"child_removed",e,r,n),si(t,i,"child_added",e,r,n),si(t,i,"child_moved",s,r,n),si(t,i,"child_changed",e,r,n),si(t,i,"value",e,r,n),i}function si(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>ZC(t,l,a)),o.forEach(l=>{const a=JC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function JC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ZC(t,e,n){if(e.childName==null||n.childName==null)throw Ur("Should only compare child_ events.");const r=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function hl(t,e){return{eventCache:t,serverCache:e}}function Ei(t,e,n,r){return hl(new Hn(e,n,r),t.serverCache)}function Zg(t,e,n,r){return hl(t.eventCache,new Hn(e,n,r))}function mu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $n(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let oa;const e0=()=>(oa||(oa=new xe(zS)),oa);class G{static fromObject(e){let n=new G(null);return Fe(e,(r,i)=>{n=n.set(new V(r),i)}),n}constructor(e,n=e0()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(M(e))return null;{const r=D(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(H(e),n);return s!=null?{path:se(new V(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const n=D(e),r=this.children.get(n);return r!==null?r.subtree(H(e)):new G(null)}}set(e,n){if(M(e))return new G(n,this.children);{const r=D(e),s=(this.children.get(r)||new G(null)).set(H(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=D(e),r=this.children.get(n);if(r){const i=r.remove(H(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(M(e))return this.value;{const n=D(e),r=this.children.get(n);return r?r.get(H(e)):null}}setTree(e,n){if(M(e))return n;{const r=D(e),s=(this.children.get(r)||new G(null)).setTree(H(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(M(e))return null;{const s=D(e),o=this.children.get(s);return o?o.findOnPath_(H(e),se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,r){if(M(e))return this;{this.value&&r(n,this.value);const i=D(e),s=this.children.get(i);return s?s.foreachOnPath_(H(e),se(n,i),r):new G(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new G(null))}}function Si(t,e,n){if(M(e))return new ut(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ae(i,e);return s=s.updateChild(o,n),new ut(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new ut(s)}}}function uf(t,e,n){let r=t;return Fe(n,(i,s)=>{r=Si(r,se(e,i),s)}),r}function cf(t,e){if(M(e))return ut.empty();{const n=t.writeTree_.setTree(e,new G(null));return new ut(n)}}function gu(t,e){return qn(t,e)!=null}function qn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ae(n.path,e)):null}function df(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{e.push(new L(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new L(r,i.value))}),e}function un(t,e){if(M(e))return t;{const n=qn(t,e);return n!=null?new ut(new G(n)):new ut(t.writeTree_.subtree(e))}}function _u(t){return t.writeTree_.isEmpty()}function Dr(t,e){return e_(z(),t.writeTree_,e)}function e_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=e_(se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(se(t,".priority"),r)),n}}/**
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
 */function Bc(t,e){return i_(e,t)}function t0(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Si(t.visibleWrites,e,n)),t.lastWriteId=r}function n0(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function r0(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&i0(l,r.path)?i=!1:it(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return s0(t),!0;if(r.snap)t.visibleWrites=cf(t.visibleWrites,r.path);else{const l=r.children;Fe(l,a=>{t.visibleWrites=cf(t.visibleWrites,se(r.path,a))})}return!0}else return!1}function i0(t,e){if(t.snap)return it(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&it(se(t.path,n),e))return!0;return!1}function s0(t){t.visibleWrites=t_(t.allWrites,o0,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function o0(t){return t.visible}function t_(t,e,n){let r=ut.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)it(n,o)?(l=Ae(n,o),r=Si(r,l,s.snap)):it(o,n)&&(l=Ae(o,n),r=Si(r,z(),s.snap.getChild(l)));else if(s.children){if(it(n,o))l=Ae(n,o),r=uf(r,l,s.children);else if(it(o,n))if(l=Ae(o,n),M(l))r=uf(r,z(),s.children);else{const a=Pr(s.children,D(l));if(a){const u=a.getChild(H(l));r=Si(r,z(),u)}}}else throw Ur("WriteRecord should have .snap or .children")}}return r}function n_(t,e,n,r,i){if(!r&&!i){const s=qn(t.visibleWrites,e);if(s!=null)return s;{const o=un(t.visibleWrites,e);if(_u(o))return n;if(n==null&&!gu(o,z()))return null;{const l=n||R.EMPTY_NODE;return Dr(o,l)}}}else{const s=un(t.visibleWrites,e);if(!i&&_u(s))return n;if(!i&&n==null&&!gu(s,z()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(it(u.path,e)||it(e,u.path))},l=t_(t.allWrites,o,e),a=n||R.EMPTY_NODE;return Dr(l,a)}}}function l0(t,e,n){let r=R.EMPTY_NODE;const i=qn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=un(t.visibleWrites,e);return n.forEachChild(Z,(o,l)=>{const a=Dr(un(s,new V(o)),l);r=r.updateImmediateChild(o,a)}),df(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=un(t.visibleWrites,e);return df(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function a0(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=se(e,n);if(gu(t.visibleWrites,s))return null;{const o=un(t.visibleWrites,s);return _u(o)?i.getChild(n):Dr(o,i.getChild(n))}}function u0(t,e,n,r){const i=se(e,n),s=qn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=un(t.visibleWrites,i);return Dr(o,r.getNode().getImmediateChild(n))}else return null}function c0(t,e){return qn(t.visibleWrites,e)}function d0(t,e,n,r,i,s,o){let l;const a=un(t.visibleWrites,e),u=qn(a,z());if(u!=null)l=u;else if(n!=null)l=Dr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function h0(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function Lo(t,e,n,r){return n_(t.writeTree,t.treePath,e,n,r)}function Vc(t,e){return l0(t.writeTree,t.treePath,e)}function hf(t,e,n,r){return a0(t.writeTree,t.treePath,e,n,r)}function Mo(t,e){return c0(t.writeTree,se(t.treePath,e))}function f0(t,e,n,r,i,s){return d0(t.writeTree,t.treePath,e,n,r,i,s)}function Hc(t,e,n){return u0(t.writeTree,t.treePath,e,n)}function r_(t,e){return i_(se(t.treePath,e),t.writeTree)}function i_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class p0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,qi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ki(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Or(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,qi(r,e.snapshotNode,i.oldSnap));else throw Ur("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class m0{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const s_=new m0;class $c{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Hn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$n(this.viewCache_),s=f0(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function g0(t){return{filter:t}}function _0(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function y0(t,e,n,r,i){const s=new p0;let o,l;if(n.type===st.OVERWRITE){const u=n;u.source.fromUser?o=yu(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!M(u.path),o=Fo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===st.MERGE){const u=n;u.source.fromUser?o=w0(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=vu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===st.ACK_USER_WRITE){const u=n;u.revert?o=C0(t,e,u.path,r,i,s):o=E0(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===st.LISTEN_COMPLETE)o=S0(t,e,n.path,r,s);else throw Ur("Unknown operation type: "+n.type);const a=s.getChanges();return v0(e,o,a),{viewCache:o,changes:a}}function v0(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=mu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Yg(mu(e)))}}function o_(t,e,n,r,i,s){const o=e.eventCache;if(Mo(r,n)!=null)return e;{let l,a;if(M(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=$n(e),d=u instanceof R?u:R.EMPTY_NODE,c=Vc(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Lo(r,$n(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=D(n);if(u===".priority"){E(fn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=hf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=H(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=hf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Hc(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Ei(e,l,o.isFullyInitialized()||M(n),t.filter.filtersNodes())}}function Fo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(M(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=D(n);if(!a.isCompleteForPath(n)&&fn(n)>1)return e;const _=H(n),A=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),A):u=d.updateChild(a.getNode(),g,A,_,s_,null)}const c=Zg(e,u,a.isFullyInitialized()||M(n),d.filtersNodes()),h=new $c(i,c,s);return o_(t,c,n,i,h,l)}function yu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new $c(i,e,s);if(M(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ei(e,u,!0,t.filter.filtersNodes());else{const c=D(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ei(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=H(n),g=l.getNode().getImmediateChild(c);let _;if(M(h))_=r;else{const y=d.getCompleteChild(c);y!=null?Bg(h)===".priority"&&y.getChild(Hg(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=R.EMPTY_NODE}if(g.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Ei(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ff(t,e){return t.eventCache.isCompleteForChild(e)}function w0(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=se(n,a);ff(e,D(d))&&(l=yu(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=se(n,a);ff(e,D(d))||(l=yu(t,l,d,u,i,s,o))}),l}function pf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function vu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;M(n)?u=r:u=new G(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=pf(t,g,h);a=Fo(t,a,new V(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),y=pf(t,_,h);a=Fo(t,a,new V(c),y,i,s,o,l)}}),a}function E0(t,e,n,r,i,s,o){if(Mo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(M(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Fo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(M(n)){let u=new G(null);return a.getNode().forEachChild(_r,(d,c)=>{u=u.set(new V(d),c)}),vu(t,e,n,u,i,s,l,o)}else return e}else{let u=new G(null);return r.foreach((d,c)=>{const h=se(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),vu(t,e,n,u,i,s,l,o)}}function S0(t,e,n,r,i){const s=e.serverCache,o=Zg(e,s.getNode(),s.isFullyInitialized()||M(n),s.isFiltered());return o_(t,o,n,r,s_,i)}function C0(t,e,n,r,i,s){let o;if(Mo(r,n)!=null)return e;{const l=new $c(r,e,i),a=e.eventCache.getNode();let u;if(M(n)||D(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Lo(r,$n(e));else{const c=e.serverCache.getNode();E(c instanceof R,"serverChildren would be complete if leaf node"),d=Vc(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=D(n);let c=Hc(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,H(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,R.EMPTY_NODE,H(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Lo(r,$n(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Mo(r,z())!=null,Ei(e,u,o,t.filter.filtersNodes())}}/**
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
 */class I0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new bc(r.getIndex()),s=HC(r);this.processor_=g0(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(R.EMPTY_NODE,l.getNode(),null),d=new Hn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Hn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=hl(c,d),this.eventGenerator_=new YC(this.query_)}get query(){return this.query_}}function T0(t){return t.viewCache_.serverCache.getNode()}function k0(t,e){const n=$n(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!M(e)&&!n.getImmediateChild(D(e)).isEmpty())?n.getChild(e):null}function mf(t){return t.eventRegistrations_.length===0}function N0(t,e){t.eventRegistrations_.push(e)}function gf(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function _f(t,e,n,r){e.type===st.MERGE&&e.source.queryId!==null&&(E($n(t.viewCache_),"We should always have a full cache before handling merges"),E(mu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=y0(t.processor_,i,e,n,r);return _0(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,l_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function R0(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(s,o)=>{r.push(Or(s,o))}),n.isFullyInitialized()&&r.push(Yg(n.getNode())),l_(t,r,n.getNode(),e)}function l_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return XC(t.eventGenerator_,e,n,i)}/**
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
 */let bo;class P0{constructor(){this.views=new Map}}function A0(t){E(!bo,"__referenceConstructor has already been defined"),bo=t}function x0(){return E(bo,"Reference.ts has not been loaded"),bo}function O0(t){return t.views.size===0}function jc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),_f(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(_f(o,e,n,r));return s}}function D0(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Lo(n,i?r:null),a=!1;l?a=!0:r instanceof R?(l=Vc(n,r),a=!1):(l=R.EMPTY_NODE,a=!1);const u=hl(new Hn(l,a,!1),new Hn(r,i,!1));return new I0(e,u)}return o}function L0(t,e,n,r,i,s){const o=D0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),N0(o,n),R0(o,n)}function M0(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=pn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(gf(u,n,r)),mf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(gf(a,n,r)),mf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!pn(t)&&s.push(new(x0())(e._repo,e._path)),{removed:s,events:o}}function a_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yr(t,e){let n=null;for(const r of t.views.values())n=n||k0(r,e);return n}function u_(t,e){if(e._queryParams.loadsAllData())return fl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function c_(t,e){return u_(t,e)!=null}function pn(t){return fl(t)!=null}function fl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Uo;function F0(t){E(!Uo,"__referenceConstructor has already been defined"),Uo=t}function b0(){return E(Uo,"Reference.ts has not been loaded"),Uo}let U0=1;class yf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=h0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function d_(t,e,n,r,i){return t0(t.pendingWriteTree_,e,n,r,i),i?us(t,new Vn(Jg(),e,n)):[]}function An(t,e,n=!1){const r=n0(t.pendingWriteTree_,e);if(r0(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(z(),!0):Fe(r.children,o=>{s=s.set(new V(o),!0)}),us(t,new Do(r.path,s,n))}else return[]}function pl(t,e,n){return us(t,new Vn(zc(),e,n))}function z0(t,e,n){const r=G.fromObject(n);return us(t,new Xi(zc(),e,r))}function W0(t,e){return us(t,new Yi(zc(),e))}function B0(t,e,n){const r=Kc(t,n);if(r){const i=qc(r),s=i.path,o=i.queryId,l=Ae(s,e),a=new Yi(Wc(o),l);return Qc(t,s,a)}else return[]}function wu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||c_(o,e))){const a=M0(o,e,n,r);O0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>pn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=$0(h);for(let _=0;_<g.length;++_){const y=g[_],A=y.query,p=p_(t,y);t.listenProvider_.startListening(Ci(A),zo(t,A),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Ci(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(ml(h));t.listenProvider_.stopListening(Ci(h),g)}))}j0(t,u)}return l}function V0(t,e,n,r){const i=Kc(t,r);if(i!=null){const s=qc(i),o=s.path,l=s.queryId,a=Ae(o,e),u=new Vn(Wc(l),a,n);return Qc(t,o,u)}else return[]}function H0(t,e,n,r){const i=Kc(t,r);if(i){const s=qc(i),o=s.path,l=s.queryId,a=Ae(o,e),u=G.fromObject(n),d=new Xi(Wc(l),a,u);return Qc(t,o,d)}else return[]}function vf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Ae(h,i);s=s||yr(g,_),o=o||pn(g)});let l=t.syncPointTree_.get(i);l?(o=o||pn(l),s=s||yr(l,z())):(l=new P0,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=R.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const y=yr(_,z());y&&(s=s.updateImmediateChild(g,y))}));const u=c_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=ml(e);E(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=G0();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Bc(t.pendingWriteTree_,i);let c=L0(l,e,n,d,s,a);if(!u&&!o&&!r){const h=u_(l,e);c=c.concat(K0(t,e,h))}return c}function Gc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ae(o,e),u=yr(l,a);if(u)return u});return n_(i,e,s,n,!0)}function us(t,e){return h_(e,t.syncPointTree_,null,Bc(t.pendingWriteTree_,z()))}function h_(t,e,n,r){if(M(t.path))return f_(t,e,n,r);{const i=e.get(z());n==null&&i!=null&&(n=yr(i,z()));let s=[];const o=D(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=r_(r,o);s=s.concat(h_(l,a,u,d))}return i&&(s=s.concat(jc(i,t,r,n))),s}}function f_(t,e,n,r){const i=e.get(z());n==null&&i!=null&&(n=yr(i,z()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=r_(r,o),d=t.operationForChild(o);d&&(s=s.concat(f_(d,l,a,u)))}),i&&(s=s.concat(jc(i,t,r,n))),s}function p_(t,e){const n=e.query,r=zo(t,n);return{hashFn:()=>(T0(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?B0(t,n._path,r):W0(t,n._path);{const s=VS(i,n);return wu(t,n,null,s)}}}}function zo(t,e){const n=ml(e);return t.queryToTagMap.get(n)}function ml(t){return t._path.toString()+"$"+t._queryIdentifier}function Kc(t,e){return t.tagToQueryMap.get(e)}function qc(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new V(t.substr(0,e))}}function Qc(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=Bc(t.pendingWriteTree_,e);return jc(r,n,i,null)}function $0(t){return t.fold((e,n,r)=>{if(n&&pn(n))return[fl(n)];{let i=[];return n&&(i=a_(n)),Fe(r,(s,o)=>{i=i.concat(o)}),i}})}function Ci(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(b0())(t._repo,t._path):t}function j0(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ml(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function G0(){return U0++}function K0(t,e,n){const r=e._path,i=zo(t,e),s=p_(t,n),o=t.listenProvider_.startListening(Ci(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!pn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!M(u)&&d&&pn(d))return[fl(d).query];{let h=[];return d&&(h=h.concat(a_(d).map(g=>g.query))),Fe(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Ci(d),zo(t,d))}}return o}/**
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
 */class Yc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yc(n)}node(){return this.node_}}class Xc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new Xc(this.syncTree_,n)}node(){return Gc(this.syncTree_,this.path_)}}const q0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wf=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Q0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Y0(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Q0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Y0=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},X0=function(t,e,n,r){return Jc(e,new Xc(n,t),r)},m_=function(t,e,n){return Jc(t,new Yc(e),n)};function Jc(t,e,n){const r=t.getPriority().val(),i=wf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=wf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ue(l,me(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ue(i))),o.forEachChild(Z,(l,a)=>{const u=Jc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Zc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ed(t,e){let n=e instanceof V?e:new V(e),r=t,i=D(n);for(;i!==null;){const s=Pr(r.node.children,i)||{children:{},childCount:0};r=new Zc(i,r,s),n=H(n),i=D(n)}return r}function Hr(t){return t.node.value}function g_(t,e){t.node.value=e,Eu(t)}function __(t){return t.node.childCount>0}function J0(t){return Hr(t)===void 0&&!__(t)}function gl(t,e){Fe(t.node.children,(n,r)=>{e(new Zc(n,t,r))})}function y_(t,e,n,r){n&&e(t),gl(t,i=>{y_(i,e,!0)})}function Z0(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function cs(t){return new V(t.parent===null?t.name:cs(t.parent)+"/"+t.name)}function Eu(t){t.parent!==null&&eI(t.parent,t.name,t)}function eI(t,e,n){const r=J0(n),i=zt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Eu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Eu(t))}/**
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
 */const tI=/[\[\].#$\/\u0000-\u001F\u007F]/,nI=/[\[\].#$\u0000-\u001F\u007F]/,la=10*1024*1024,v_=function(t){return typeof t=="string"&&t.length!==0&&!tI.test(t)},w_=function(t){return typeof t=="string"&&t.length!==0&&!nI.test(t)},rI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),w_(t)},iI=function(t,e,n,r){td(kc(t,"value"),e,n)},td=function(t,e,n){const r=n instanceof V?new EC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Tn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Tn(r)+" with contents = "+e.toString());if(wg(e))throw new Error(t+"contains "+e.toString()+" "+Tn(r));if(typeof e=="string"&&e.length>la/3&&cl(e)>la)throw new Error(t+"contains a string greater than "+la+" utf8 bytes "+Tn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Fe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!v_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Tn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);SC(r,o),td(t,l,r),CC(r)}),i&&s)throw new Error(t+' contains ".value" child '+Tn(r)+" in addition to actual children.")}},E_=function(t,e,n,r){if(!w_(n))throw new Error(kc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),E_(t,e,n)},S_=function(t,e){if(D(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},oI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!v_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rI(n))throw new Error(kc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class lI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Lc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function C_(t,e,n){nd(t,n),I_(t,r=>Lc(r,e))}function Ft(t,e,n){nd(t,n),I_(t,r=>it(r,e)||it(e,r))}function I_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(aI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function aI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();vi&&Ee("event: "+n.toString()),Vr(r)}}}/**
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
 */const uI="repo_interrupt",cI=25;class dI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oo(),this.transactionQueueTree_=new Zc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hI(t,e,n){if(t.stats_=Oc(t.repoInfo_),t.forceRestClient_||GS())t.server_=new xo(t.repoInfo_,(r,i,s,o)=>{Ef(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Sf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Pt(t.repoInfo_,e,(r,i,s,o)=>{Ef(t,r,i,s,o)},r=>{Sf(t,r)},r=>{pI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=XS(t.repoInfo_,()=>new QC(t.stats_,t.server_)),t.infoData_=new $C,t.infoSyncTree_=new yf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=pl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),id(t,"connected",!1),t.serverSyncTree_=new yf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ft(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function fI(t){const n=t.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rd(t){return q0({timestamp:fI(t)})}function Ef(t,e,n,r,i){t.dataUpdateCount++;const s=new V(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=No(n,u=>me(u));o=H0(t.serverSyncTree_,s,a,i)}else{const a=me(n);o=V0(t.serverSyncTree_,s,a,i)}else if(r){const a=No(n,u=>me(u));o=z0(t.serverSyncTree_,s,a)}else{const a=me(n);o=pl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=_l(t,s)),Ft(t.eventQueue_,l,o)}function Sf(t,e){id(t,"connected",e),e===!1&&gI(t)}function pI(t,e){Fe(e,(n,r)=>{id(t,n,r)})}function id(t,e,n){const r=new V("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(r,i);const s=pl(t.infoSyncTree_,r,i);Ft(t.eventQueue_,r,s)}function T_(t){return t.nextWriteId_++}function mI(t,e,n,r,i){sd(t,"set",{path:e.toString(),value:n,priority:r});const s=rd(t),o=me(n,r),l=Gc(t.serverSyncTree_,e),a=m_(o,l,s),u=T_(t),d=d_(t.serverSyncTree_,e,a,u,!0);nd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Me("set at "+e+" failed: "+h);const y=An(t.serverSyncTree_,u,!_);Ft(t.eventQueue_,e,y),vI(t,i,h,g)});const c=A_(t,e);_l(t,c),Ft(t.eventQueue_,c,[])}function gI(t){sd(t,"onDisconnectEvents");const e=rd(t),n=Oo();pu(t.onDisconnect_,z(),(i,s)=>{const o=X0(i,s,t.serverSyncTree_,e);Xg(n,i,o)});let r=[];pu(n,z(),(i,s)=>{r=r.concat(pl(t.serverSyncTree_,i,s));const o=A_(t,i);_l(t,o)}),t.onDisconnect_=Oo(),Ft(t.eventQueue_,z(),r)}function _I(t,e,n){let r;D(e._path)===".info"?r=vf(t.infoSyncTree_,e,n):r=vf(t.serverSyncTree_,e,n),C_(t.eventQueue_,e._path,r)}function Cf(t,e,n){let r;D(e._path)===".info"?r=wu(t.infoSyncTree_,e,n):r=wu(t.serverSyncTree_,e,n),C_(t.eventQueue_,e._path,r)}function yI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uI)}function sd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function vI(t,e,n,r){e&&Vr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function k_(t,e,n){return Gc(t.serverSyncTree_,e,n)||R.EMPTY_NODE}function od(t,e=t.transactionQueueTree_){if(e||yl(t,e),Hr(e)){const n=R_(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&wI(t,cs(e),n)}else __(e)&&gl(e,n=>{od(t,n)})}function wI(t,e,n){const r=n.map(u=>u.currentWriteId),i=k_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ae(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{sd(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(An(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();yl(t,ed(t.transactionQueueTree_,e)),od(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Vr(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Me("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}_l(t,e)}},o)}function _l(t,e){const n=N_(t,e),r=cs(n),i=R_(t,n);return EI(t,i,r),r}function EI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ae(n,a.path);let d=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(An(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=cI)d=!0,c="maxretry",i=i.concat(An(t.serverSyncTree_,a.currentWriteId,!0));else{const h=k_(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){td("transaction failed: Data returned ",g,a.path);let _=me(g);typeof g=="object"&&g!=null&&zt(g,".priority")||(_=_.updatePriority(h.getPriority()));const A=a.currentWriteId,p=rd(t),f=m_(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=T_(t),o.splice(o.indexOf(A),1),i=i.concat(d_(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(An(t.serverSyncTree_,A,!0))}else d=!0,c="nodata",i=i.concat(An(t.serverSyncTree_,a.currentWriteId,!0))}Ft(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}yl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Vr(r[l]);od(t,t.transactionQueueTree_)}function N_(t,e){let n,r=t.transactionQueueTree_;for(n=D(e);n!==null&&Hr(r)===void 0;)r=ed(r,n),e=H(e),n=D(e);return r}function R_(t,e){const n=[];return P_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function P_(t,e,n){const r=Hr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);gl(e,i=>{P_(t,i,n)})}function yl(t,e){const n=Hr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,g_(e,n.length>0?n:void 0)}gl(e,r=>{yl(t,r)})}function A_(t,e){const n=cs(N_(t,e)),r=ed(t.transactionQueueTree_,e);return Z0(r,i=>{aa(t,i)}),aa(t,r),y_(r,i=>{aa(t,i)}),n}function aa(t,e){const n=Hr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(An(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?g_(e,void 0):n.length=s+1,Ft(t.eventQueue_,cs(e),i);for(let o=0;o<r.length;o++)Vr(r[o])}}/**
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
 */function SI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function CI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Me(`Invalid query segment '${n}' in query '${t}'`)}return e}const If=function(t,e){const n=II(t),r=n.namespace;n.domain==="firebase.com"&&Mt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||bS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Og(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new V(n.pathString)}},II=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=SI(t.substring(d,c)));const h=CI(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class TI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class kI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class NI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ld{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return M(this._path)?null:Bg(this._path)}get ref(){return new vn(this._repo,this._path)}get _queryIdentifier(){const e=lf(this._queryParams),n=Ac(e);return n==="{}"?"default":n}get _queryObject(){return lf(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof ld))return!1;const n=this._repo===e._repo,r=Lc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+wC(this._path)}}class vn extends ld{constructor(e,n){super(e,n,new Uc,!1)}get parent(){const e=Hg(this._path);return e===null?null:new vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new V(e),r=Su(this.ref,e);return new Wo(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Wo(i,Su(this.ref,r),Z)))}hasChild(e){const n=new V(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vk(t,e){return t=He(t),t._checkNotDeleted("ref"),e!==void 0?Su(t._root,e):t._root}function Su(t,e){return t=He(t),D(t._path)===null?sI("child","path",e):E_("child","path",e),new vn(t._repo,se(t._path,e))}function Hk(t){return S_("remove",t._path),RI(t,null)}function RI(t,e){t=He(t),S_("set",t._path),iI("set",e,t._path);const n=new ul;return mI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class ad{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new TI("value",this,new Wo(e.snapshotNode,new vn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new kI(this,e,n):null}matches(e){return e instanceof ad?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function PI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Cf(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new NI(n,s||void 0),l=new ad(o);return _I(t._repo,t,l),()=>Cf(t._repo,t,l)}function $k(t,e,n,r){return PI(t,"value",e,n,r)}A0(vn);F0(vn);/**
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
 */const AI="FIREBASE_DATABASE_EMULATOR_HOST",Cu={};let xI=!1;function OI(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=ss(s);t.repoInfo_=new Og(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function DI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=If(s,i),l=o.repoInfo,a;typeof process<"u"&&Vh&&(a=Vh[AI]),a?(s=`http://${a}?ns=${l.namespace}`,o=If(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new qS(t.name,t.options,e);oI("Invalid Firebase Database URL",o),M(o.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=MI(l,t,u,new KS(t,n));return new FI(d,t)}function LI(t,e){const n=Cu[e];(!n||n[t.key]!==t)&&Mt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yI(t),delete n[t.key]}function MI(t,e,n,r){let i=Cu[e.name];i||(i={},Cu[e.name]=i);let s=i[t.toURLString()];return s&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new dI(t,xI,n,r),i[t.toURLString()]=s,s}class FI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vn(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(LI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function bI(t=pg(),e){const n=Pc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=sE("database");r&&UI(n,...r)}return n}function UI(t,e,n,r={}){t=He(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&zn(r,s.repoInfo_.emulatorOptions))return;Mt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Qs(Qs.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:oE(r.mockUserToken,t.app.options.projectId);o=new Qs(l)}ss(e)&&cg(e),OI(s,i,r,o)}/**
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
 */function zI(t){xS(Wr),Ar(new Wn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return DI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),an(Hh,$h,t),an(Hh,$h,"esm2020")}Pt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zI();var WI="firebase",BI="12.14.0";/**
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
 */an(WI,BI,"app");function x_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VI=x_,O_=new is("auth","Firebase",x_());/**
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
 */const Bo=new Nc("@firebase/auth");function HI(t,...e){Bo.logLevel<=B.WARN&&Bo.warn(`Auth (${Wr}): ${t}`,...e)}function Ys(t,...e){Bo.logLevel<=B.ERROR&&Bo.error(`Auth (${Wr}): ${t}`,...e)}/**
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
 */function vt(t,...e){throw cd(t,...e)}function ct(t,...e){return cd(t,...e)}function ud(t,e,n){const r={...VI(),[e]:n};return new is("auth","Firebase",r).create(e,{appName:t.name})}function cn(t){return ud(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function D_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vt(t,"argument-error"),ud(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return O_.create(t,...e)}function P(t,e,...n){if(!t)throw cd(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ys(e),new Error(e)}function bt(t,e){t||kt(e)}/**
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
 */function Iu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function $I(){return Tf()==="http:"||Tf()==="https:"}function Tf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function jI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($I()||aE()||"connection"in navigator)?navigator.onLine:!0}function GI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ds{constructor(e,n){this.shortDelay=e,this.longDelay=n,bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Tc()||ag()}get(){return jI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dd(t,e){bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class L_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QI=new ds(3e4,6e4);function hd(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function $r(t,e,n,r,i={}){return M_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=zr({key:t.config.apiKey,...o}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:a,...s};return lE()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ss(t.emulatorConfig.host)&&(u.credentials="include"),L_.fetch()(await F_(t,t.config.apiHost,n,l),u)})}async function M_(t,e,n){t._canInitEmulator=!1;const r={...KI,...e};try{const i=new XI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Fs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Fs(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ud(t,d,u);vt(t,d)}}catch(i){if(i instanceof yn)throw i;vt(t,"network-request-failed",{message:String(i)})}}async function YI(t,e,n,r,i={}){const s=await $r(t,e,n,r,i);return"mfaPendingCredential"in s&&vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function F_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?dd(t.config,i):`${t.config.apiScheme}://${i}`;return qI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class XI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),QI.get())})}}function Fs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ct(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function JI(t,e){return $r(t,"POST","/v1/accounts:delete",e)}async function Vo(t,e){return $r(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZI(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=fd(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ii(ua(i.auth_time)),issuedAtTime:Ii(ua(i.iat)),expirationTime:Ii(ua(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ua(t){return Number(t)*1e3}function fd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const i=ko(n);return i?JSON.parse(i):(Ys("Failed to decode base64 JWT payload"),null)}catch(i){return Ys("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kf(t){const e=fd(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&eT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Tu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ho(t){var c;const e=t.auth,n=await t.getIdToken(),r=await Ji(t,Vo(e,{idToken:n}));P(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(c=i.providerUserInfo)!=null&&c.length?b_(i.providerUserInfo):[],o=rT(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?a:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Tu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function nT(t){const e=He(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function b_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function iT(t,e){const n=await M_(t,{},async()=>{const r=zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await F_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&ss(t.emulatorConfig.host)&&(a.credentials="include"),L_.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sT(t,e){return $r(t,"POST","/v2/accounts:revokeToken",hd(t,e))}/**
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
 */class vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=kf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await iT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new vr;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function Bt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ot{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new tT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ji(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZI(this,e)}reload(){return nT(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await Ji(this,JI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:c,emailVerified:h,isAnonymous:g,providerData:_,stsTokenManager:y}=n;P(c&&y,e,"internal-error");const A=vr.fromJSON(this.name,y);P(typeof c=="string",e,"internal-error"),Bt(r,e.name),Bt(i,e.name),P(typeof h=="boolean",e,"internal-error"),P(typeof g=="boolean",e,"internal-error"),Bt(s,e.name),Bt(o,e.name),Bt(l,e.name),Bt(a,e.name),Bt(u,e.name),Bt(d,e.name);const p=new ot({uid:c,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:A,createdAt:u,lastLoginAt:d});return _&&Array.isArray(_)&&(p.providerData=_.map(f=>({...f}))),a&&(p._redirectEventId=a),p}static async _fromIdTokenResponse(e,n,r=!1){const i=new vr;i.updateFromServerResponse(n);const s=new ot({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ho(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];P(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?b_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new vr;l.updateFromIdToken(r);const a=new ot({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Tu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
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
 */const Nf=new Map;function Nt(t){bt(t instanceof Function,"Expected a class definition");let e=Nf.get(t);return e?(bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nf.set(t,e),e)}/**
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
 */class U_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}U_.type="NONE";const Rf=U_;/**
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
 */function Xs(t,e,n){return`firebase:${t}:${e}:${n}`}class wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Vo(this.auth,{idToken:e}).catch(()=>{});return n?ot._fromGetAccountInfoResponse(this.auth,n,e):null}return ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wr(Nt(Rf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nt(Rf);const o=Xs(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let c;if(typeof d=="string"){const h=await Vo(e,{idToken:d}).catch(()=>{});if(!h)break;c=await ot._fromGetAccountInfoResponse(e,h,d)}else c=ot._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new wr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new wr(s,e,r))}}/**
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
 */function Pf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(V_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($_(e))return"Blackberry";if(j_(e))return"Webos";if(W_(e))return"Safari";if((e.includes("chrome/")||B_(e))&&!e.includes("edge/"))return"Chrome";if(H_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z_(t=Te()){return/firefox\//i.test(t)}function W_(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function B_(t=Te()){return/crios\//i.test(t)}function V_(t=Te()){return/iemobile/i.test(t)}function H_(t=Te()){return/android/i.test(t)}function $_(t=Te()){return/blackberry/i.test(t)}function j_(t=Te()){return/webos/i.test(t)}function pd(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oT(t=Te()){var e;return pd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function lT(){return uE()&&document.documentMode===10}function G_(t=Te()){return pd(t)||H_(t)||j_(t)||$_(t)||/windows phone/i.test(t)||V_(t)}/**
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
 */function K_(t,e=[]){let n;switch(t){case"Browser":n=Pf(Te());break;case"Worker":n=`${Pf(Te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wr}/${r}`}/**
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
 */class aT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function uT(t,e={}){return $r(t,"GET","/v2/passwordPolicy",hd(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const cT=6;class dT{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??cT,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class hT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Af(this),this.idTokenSubscription=new Af(this),this.beforeStateQueue=new aT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=O_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await wr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vo(this,{idToken:e}),r=await ot._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(cn(this));const n=e?He(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uT(this),n=new dT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await wr.create(this,[Nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=K_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&HI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function jr(t){return He(t)}class Af{constructor(e){this.auth=e,this.observer=null,this.addObserver=vE(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fT(t){md=t}function pT(t){return md.loadJS(t)}function mT(){return md.gapiScript}function gT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function q_(t,e){const n=Pc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zn(s,e??{}))return i;vt(i,"already-initialized")}return n.initialize({options:e})}function _T(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yT(t,e,n){const r=jr(t);P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Q_(e),{host:o,port:l}=vT(e),a=l===null?"":`:${l}`,u={url:`${s}//${o}${a}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){P(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),P(zn(u,r.config.emulator)&&zn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ss(o)?cg(`${s}//${o}${a}`):wT()}function Q_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vT(t){const e=Q_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xf(o)}}}function xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Y_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
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
 */async function Er(t,e){return YI(t,"POST","/v1/accounts:signInWithIdp",hd(t,e))}/**
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
 */const ET="http://localhost";class jn extends Y_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new jn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Er(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Er(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Er(e,n)}buildRequest(){const e={requestUri:ET,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zr(n)}return e}}/**
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
 */class vl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hs extends vl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gt extends hs{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
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
 */class St extends hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return St.credential(n,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
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
 */class Kt extends hs{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
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
 */class qt extends hs{constructor(){super("twitter.com")}static credential(e,n){return jn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ot._fromIdTokenResponse(e,r,i),o=Of(r);return new Lr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Of(r);return new Lr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Of(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $o extends yn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$o.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $o(e,n,r,i)}}function X_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$o._fromErrorAndOperation(t,s,e,r):s})}async function ST(t,e,n=!1){const r=await Ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
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
 */async function CT(t,e,n=!1){const{auth:r}=t;if(Ge(r.app))return Promise.reject(cn(r));const i="reauthenticate";try{const s=await Ji(t,X_(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=fd(s.idToken);P(o,r,"internal-error");const{sub:l}=o;return P(t.uid===l,r,"user-mismatch"),Lr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
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
 */async function IT(t,e,n=!1){if(Ge(t.app))return Promise.reject(cn(t));const r="signIn",i=await X_(t,r,e),s=await Lr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function TT(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function kT(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function J_(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function NT(t){return He(t).signOut()}const jo="__sak";/**
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
 */class Z_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const RT=1e3,PT=10;class ey extends Z_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=G_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ey.type="LOCAL";const ty=ey;/**
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
 */class ny extends Z_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ny.type="SESSION";const ry=ny;/**
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
 */function AT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await AT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wl.receivers=[];/**
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
 */function gd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=gd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yt(){return window}function OT(t){yt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function iy(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function DT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function MT(){return iy()?self:null}/**
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
 */const sy="firebaseLocalStorageDb",FT=1,Go="firebaseLocalStorage",oy="fbase_key";class fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function El(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function bT(){const t=indexedDB.deleteDatabase(sy);return new fs(t).toPromise()}function ly(){const t=indexedDB.open(sy,FT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Go,{keyPath:oy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await bT(),e(await ly()))})})}async function Df(t,e,n){const r=El(t,!0).put({[oy]:e,value:n});return new fs(r).toPromise()}async function UT(t,e){const n=El(t,!1).get(e),r=await new fs(n).toPromise();return r===void 0?null:r.value}function Lf(t,e){const n=El(t,!0).delete(e);return new fs(n).toPromise()}const zT=800,WT=3;class ay{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=ly(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WT)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return iy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wl._getInstance(MT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await DT(),!this.activeServiceWorker)return;this.sender=new xT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Df(e,jo,"1"),await Lf(e,jo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Df(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=El(i,!1).getAll();return new fs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ay.type="LOCAL";const uy=ay;new ds(3e4,6e4);/**
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
 */function _d(t,e){return e?Nt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yd extends Y_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Er(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Er(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Er(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BT(t){return IT(t.auth,new yd(t),t.bypassAuthState)}function VT(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),CT(n,new yd(t),t.bypassAuthState)}async function HT(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),ST(n,new yd(t),t.bypassAuthState)}/**
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
 */class cy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BT;case"linkViaPopup":case"linkViaRedirect":return HT;case"reauthViaPopup":case"reauthViaRedirect":return VT;default:vt(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $T=new ds(2e3,1e4);async function jT(t,e,n){if(Ge(t.app))return Promise.reject(ct(t,"operation-not-supported-in-this-environment"));const r=jr(t);D_(t,e,vl);const i=_d(r,n);return new xn(r,"signInViaPopup",e,i).executeNotNull()}class xn extends cy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$T.get())};e()}}xn.currentPopupAction=null;/**
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
 */const GT="pendingRedirect",Js=new Map;class KT extends cy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Js.get(this.auth._key());if(!e){try{const r=await qT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Js.set(this.auth._key(),e)}return this.bypassAuthState||Js.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qT(t,e){const n=hy(e),r=dy(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function QT(t,e){return dy(t)._set(hy(e),"true")}function YT(t,e){Js.set(t._key(),e)}function dy(t){return Nt(t._redirectPersistence)}function hy(t){return Xs(GT,t.config.apiKey,t.name)}/**
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
 */function XT(t,e,n){return JT(t,e,n)}async function JT(t,e,n){if(Ge(t.app))return Promise.reject(cn(t));const r=jr(t);D_(t,e,vl),await r._initializationPromise;const i=_d(r,n);return await QT(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function ZT(t,e){return await jr(t)._initializationPromise,fy(t,e,!1)}async function fy(t,e,n=!1){if(Ge(t.app))return Promise.reject(cn(t));const r=jr(t),i=_d(r,e),o=await new KT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ek=10*60*1e3;class tk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!py(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ek&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mf(e))}saveEventToCache(e){this.cachedEventUids.add(Mf(e)),this.lastProcessedEventTime=Date.now()}}function Mf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function py({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return py(t);default:return!1}}/**
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
 */async function rk(t,e={}){return $r(t,"GET","/v1/projects",e)}/**
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
 */const ik=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sk=/^https?/;async function ok(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rk(t);for(const n of e)try{if(lk(n))return}catch{}vt(t,"unauthorized-domain")}function lk(t){const e=Iu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sk.test(n))return!1;if(ik.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ak=new ds(3e4,6e4);function Ff(){const t=yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uk(t){return new Promise((e,n)=>{var i,s,o;function r(){Ff(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ff(),n(ct(t,"network-request-failed"))},timeout:ak.get()})}if((s=(i=yt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=yt().gapi)!=null&&o.load)r();else{const l=gT("iframefcb");return yt()[l]=()=>{gapi.load?r():n(ct(t,"network-request-failed"))},pT(`${mT()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Zs=null,e})}let Zs=null;function ck(t){return Zs=Zs||uk(t),Zs}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const dk=new ds(5e3,15e3),hk="__/auth/iframe",fk="emulator/auth/iframe",pk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gk(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dd(e,fk):`https://${t.config.authDomain}/${hk}`,r={apiKey:e.apiKey,appName:t.name,v:Wr},i=mk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zr(r).slice(1)}`}async function _k(t){const e=await ck(t),n=yt().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:gk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ct(t,"network-request-failed"),l=yt().setTimeout(()=>{s(o)},dk.get());function a(){yt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const yk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vk=500,wk=600,Ek="_blank",Sk="http://localhost";class bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ck(t,e,n,r=vk,i=wk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...yk,width:r.toString(),height:i.toString(),top:s,left:o},u=Te().toLowerCase();n&&(l=B_(u)?Ek:n),z_(u)&&(e=e||Sk,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(oT(u)&&l!=="_self")return Ik(e||"",l),new bf(null);const c=window.open(e||"",l,d);P(c,t,"popup-blocked");try{c.focus()}catch{}return new bf(c)}function Ik(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Tk="__/auth/handler",kk="emulator/auth/handler",Nk=encodeURIComponent("fac");async function Uf(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wr,eventId:i};if(e instanceof vl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",su(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof hs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${Nk}=${encodeURIComponent(a)}`:"";return`${Rk(t)}?${zr(l).slice(1)}${u}`}function Rk({config:t}){return t.emulator?dd(t,kk):`https://${t.authDomain}/${Tk}`}/**
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
 */const ca="webStorageSupport";class Pk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ry,this._completeRedirectFn=fy,this._overrideRedirectResult=YT}async _openPopup(e,n,r,i){var o;bt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Uf(e,n,r,Iu(),i);return Ck(e,s,gd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Uf(e,n,r,Iu(),i);return OT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _k(e),r=new tk(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ca,{type:ca},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ca];s!==void 0&&n(!!s),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ok(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return G_()||W_()||pd()}}const my=Pk;var zf="@firebase/auth",Wf="1.13.2";/**
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
 */class Ak{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ok(t){Ar(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:K_(t)},u=new hT(r,i,s,a);return _T(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ar(new Wn("auth-internal",e=>{const n=jr(e.getProvider("auth").getImmediate());return(r=>new Ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(zf,Wf,xk(t)),an(zf,Wf,"esm2020")}/**
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
 */const Dk=5*60,Lk=lg("authIdTokenMaxAge")||Dk;let Bf=null;const Mk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Lk)return;const i=n==null?void 0:n.token;Bf!==i&&(Bf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fk(t=pg()){const e=Pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=q_(t,{popupRedirectResolver:my,persistence:[uy,ty,ry]}),r=lg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Mk(s.toString());kT(n,o,()=>o(n.currentUser)),TT(n,l=>o(l))}}const i=sg("auth");return i&&yT(n,`http://${i}`),n}function bk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}fT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ok("Browser");const ku={apiKey:"AIzaSyDgTPstWV5pgWnzBtF81qACByWhBrpA7kM",authDomain:"homecal-49c87.firebaseapp.com",databaseURL:"https://homecal-49c87-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"homecal-49c87",storageBucket:"homecal-49c87.firebasestorage.app",messagingSenderId:"39884528639",appId:"1:39884528639:web:1e8be22a702053733a25ca"},gy=!!(ku.databaseURL&&ku.apiKey),Ti=gy?Uh().length===0?fg(ku):Uh()[0]:null;function Uk(){if(!Ti)return null;try{return q_(Ti,{persistence:[uy,ty],popupRedirectResolver:my})}catch{return Fk(Ti)}}const Ke=Uk(),jk=Ti?bI(Ti):null,Gk=["papa","mama","momo","asa","aoi"],Kk={papa:"パパ",mama:"ママ",momo:"もも",asa:"朝",aoi:"碧"},qk=["日","準","深","◯"],Qk=["red","orange","yellow","green","blue","purple","pink","gray"],Yk={red:"赤",orange:"橙",yellow:"黄",green:"緑",blue:"青",purple:"紫",pink:"ピンク",gray:"グレー"},Xk={red:"bg-red-100 text-red-800 border-red-300",orange:"bg-orange-100 text-orange-800 border-orange-300",yellow:"bg-yellow-100 text-yellow-800 border-yellow-300",green:"bg-green-100 text-green-800 border-green-300",blue:"bg-blue-100 text-blue-800 border-blue-300",purple:"bg-purple-100 text-purple-800 border-purple-300",pink:"bg-pink-100 text-pink-800 border-pink-300",gray:"bg-gray-100 text-gray-800 border-gray-300"},Jk={light:"ライト",dark:"ダーク",natural:"ナチュラル",pastel:"パステル"},Zk=["日","月","火","水","木","金","土"];function e1(){return{enabled:!0,days:Object.fromEntries([0,1,2,3,4,5,6].map(t=>[t,{enabled:!1,startTime:"17:00",endTime:"19:00"}]))}}const Nu=Qw(t=>({permissionDenied:!1,setPermissionDenied:e=>t({permissionDenied:e})}));function zk(t){const e=t,n=`${(e==null?void 0:e.code)??""} ${(e==null?void 0:e.message)??""}`.toLowerCase();return n.includes("permission_denied")||n.includes("permission denied")}function t1(t){console.error("[HomeCal] RTDB error:",t),zk(t)&&Nu.getState().setPermissionDenied(!0)}function n1(t,e,n){return`${t}-${String(e).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function r1(t,e){return new Date(t,e,0).getDate()}function i1(t,e,n){return new Date(t,e-1,n).getDay()}function s1(t,e,n){const r=new Date;return r.getFullYear()===t&&r.getMonth()+1===e&&r.getDate()===n}function o1(t,e,n,r,i){const s=i.find(l=>l.source===r&&l.date===n);if((s==null?void 0:s.action)==="delete")return null;const o=t.days[e];return o!=null&&o.enabled?(s==null?void 0:s.action)==="modify"&&s.startTime&&s.endTime?{startTime:s.startTime,endTime:s.endTime}:{startTime:o.startTime,endTime:o.endTime}:null}function l1(){return`${Date.now()}-${Math.random().toString(36).slice(2,9)}`}const Wk=["auth/popup-blocked","auth/operation-not-supported-in-environment","auth/web-storage-unsupported"],Vf=["auth/popup-closed-by-user","auth/cancelled-popup-request"];function Ru(t){return(t==null?void 0:t.code)??""}function da(t){const e=Ru(t),n=(t==null?void 0:t.message)??String(t);return e?`${e}: ${n}`:n}function ha({children:t}){return ae.jsx("div",{className:"h-dvh flex items-center justify-center bg-gray-100 px-4",children:ae.jsx("div",{className:"w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-center text-gray-800",children:t})})}function Bk(){Ke&&NT(Ke)}function a1(){const[t,e]=pt.useState((Ke==null?void 0:Ke.currentUser)??null);return pt.useEffect(()=>{if(Ke)return J_(Ke,e)},[]),t}function u1({children:t}){const[e,n]=pt.useState(!0),[r,i]=pt.useState(null),[s,o]=pt.useState(null),[l,a]=pt.useState(!1),u=Nu(g=>g.permissionDenied),d=Nu(g=>g.setPermissionDenied);if(pt.useEffect(()=>{if(Ke)return ZT(Ke).catch(g=>{Vf.includes(Ru(g))||o(da(g))}),J_(Ke,g=>{i(g),n(!1),g||d(!1)})},[d]),!gy||!Ke)return ae.jsx(ae.Fragment,{children:t});const c=Ke,h=async()=>{o(null),a(!0);const g=new St;g.setCustomParameters({prompt:"select_account"});try{await jT(c,g)}catch(_){const y=Ru(_);if(Wk.includes(y))try{await XT(c,g);return}catch(A){o(da(A))}else Vf.includes(y)||o(da(_))}finally{a(!1)}};return e?ae.jsxs(ha,{children:[ae.jsx("div",{className:"mx-auto mb-3 w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"}),ae.jsx("p",{className:"text-sm text-gray-500",children:"読み込み中…"})]}):r?u?ae.jsxs(ha,{children:[ae.jsx("h1",{className:"text-lg font-bold mb-2",children:"アクセスできません"}),ae.jsxs("p",{className:"text-sm text-gray-700 mb-5 break-words",children:["このアカウント（",r.email??r.uid,"）は許可されていません"]}),ae.jsx("button",{onClick:Bk,className:"w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm active:bg-gray-100",children:"ログアウト"})]}):ae.jsx(ae.Fragment,{children:t}):ae.jsxs(ha,{children:[ae.jsx("h1",{className:"text-lg font-bold mb-1",children:"HomeCal"}),ae.jsx("p",{className:"text-sm text-gray-500 mb-5",children:"続けるにはログインしてください"}),ae.jsx("button",{onClick:h,disabled:l,className:"w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm active:bg-gray-100 disabled:opacity-50",children:"Google でログイン"}),s&&ae.jsx("p",{className:"mt-4 text-xs text-red-600 break-words text-left",children:s})]})}export{u1 as A,Zk as D,Qk as E,qk as M,Jk as T,Vk as a,$w as b,Gk as c,jk as d,Kk as e,Yk as f,Xk as g,t1 as h,gy as i,ae as j,l1 as k,i1 as l,e1 as m,s1 as n,$k as o,o1 as p,r1 as q,pt as r,RI as s,n1 as t,a1 as u,Bk as v,jw as w,Qw as x,Hk as y};
