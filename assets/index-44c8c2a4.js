var l=e=>encodeURIComponent(e).replace(/[!'()*]/g,r=>`%${r.charCodeAt(0).toString(16).toUpperCase()}`),g="%[a-f0-9]{2}",f=new RegExp("("+g+")|([^%]+?)","gi"),h=new RegExp("("+g+")+","gi");function n(e,r){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;r=r||1;var t=e.slice(0,r),o=e.slice(r);return Array.prototype.concat.call([],n(t),n(o))}function v(e){try{return decodeURIComponent(e)}catch{for(var r=e.match(f)||[],t=1;t<r.length;t++)e=n(r,t).join(""),r=e.match(f)||[];return e}}function d(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},t=h.exec(e);t;){try{r[t[0]]=decodeURIComponent(t[0])}catch{var o=v(t[0]);o!==t[0]&&(r[t[0]]=o)}t=h.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),a=0;a<c.length;a++){var F=c[a];e=e.replace(new RegExp(F,"g"),r[F])}return e}var p=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return d(e)}},u=(e,r)=>{if(!(typeof e=="string"&&typeof r=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(r==="")return[e];const t=e.indexOf(r);return t===-1?[e]:[e.slice(0,t),e.slice(t+r.length)]};export{l as a,p as d,u as s};
