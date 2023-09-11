import{r as t}from"./index-40f6b818.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var o=function(){return o=Object.assign||function(i){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(i[c]=n[c])}return i},o.apply(this,arguments)};function R(e,i){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)i.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}var S=function(){return Math.random().toString(36).substring(6)},b=function(e){var i=e.animate,n=e.backgroundColor,r=e.backgroundOpacity,a=e.baseUrl,c=e.children,v=e.foregroundColor,E=e.foregroundOpacity,l=e.gradientRatio,O=e.gradientDirection,C=e.uniqueKey,x=e.interval,k=e.rtl,w=e.speed,P=e.style,m=e.title,d=e.beforeMask,j=R(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),u=C||S(),g=u+"-diff",p=u+"-animated-diff",y=u+"-aria",T=k?{transform:"scaleX(-1)"}:null,f="0; "+x+"; 1",s=w+"s",M=O==="top-bottom"?"rotate(90)":void 0;return t.createElement("svg",o({"aria-labelledby":y,role:"img",style:o(o({},P),T)},j),m?t.createElement("title",{id:y},m):null,d&&t.isValidElement(d)?d:null,t.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+a+"#"+g+")",style:{fill:"url("+a+"#"+p+")"}}),t.createElement("defs",null,t.createElement("clipPath",{id:g},c),t.createElement("linearGradient",{id:p,gradientTransform:M},t.createElement("stop",{offset:"0%",stopColor:n,stopOpacity:r},i&&t.createElement("animate",{attributeName:"offset",values:-l+"; "+-l+"; 1",keyTimes:f,dur:s,repeatCount:"indefinite"})),t.createElement("stop",{offset:"50%",stopColor:v,stopOpacity:E},i&&t.createElement("animate",{attributeName:"offset",values:-l/2+"; "+-l/2+"; "+(1+l/2),keyTimes:f,dur:s,repeatCount:"indefinite"})),t.createElement("stop",{offset:"100%",stopColor:n,stopOpacity:r},i&&t.createElement("animate",{attributeName:"offset",values:"0; 0; "+(1+l),keyTimes:f,dur:s,repeatCount:"indefinite"})))))};b.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var h=function(e){return e.children?t.createElement(b,o({},e)):t.createElement(D,o({},e))},D=function(e){return t.createElement(h,o({viewBox:"0 0 476 124"},e),t.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),t.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),t.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const U=h;export{U as C};
