(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[6551],{9627:(e,n,r)=>{"use strict";r.d(n,{Z:()=>s});var t=r(1799);var o=r.n(t);var c=r(82609);var i=r.n(c);var a=i()(o());a.push([e.id,"/*\n\n    Name:       Bespin\n    Author:     Mozilla / Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-bespin.CodeMirror {background: #28211c; color: #9d9b97;}\n.cm-s-bespin div.CodeMirror-selected {background: #36312e !important;}\n.cm-s-bespin .CodeMirror-gutters {background: #28211c; border-right: 0px;}\n.cm-s-bespin .CodeMirror-linenumber {color: #666666;}\n.cm-s-bespin .CodeMirror-cursor {border-left: 1px solid #797977 !important;}\n\n.cm-s-bespin span.cm-comment {color: #937121;}\n.cm-s-bespin span.cm-atom {color: #9b859d;}\n.cm-s-bespin span.cm-number {color: #9b859d;}\n\n.cm-s-bespin span.cm-property, .cm-s-bespin span.cm-attribute {color: #54be0d;}\n.cm-s-bespin span.cm-keyword {color: #cf6a4c;}\n.cm-s-bespin span.cm-string {color: #f9ee98;}\n\n.cm-s-bespin span.cm-variable {color: #54be0d;}\n.cm-s-bespin span.cm-variable-2 {color: #5ea6ea;}\n.cm-s-bespin span.cm-def {color: #cf7d34;}\n.cm-s-bespin span.cm-error {background: #cf6a4c; color: #797977;}\n.cm-s-bespin span.cm-bracket {color: #9d9b97;}\n.cm-s-bespin span.cm-tag {color: #cf6a4c;}\n.cm-s-bespin span.cm-link {color: #9b859d;}\n\n.cm-s-bespin .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-bespin .CodeMirror-activeline-background { background: #404040; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/bespin.css"],names:[],mappings:"AAAA;;;;;;;;CAQC;;AAED,yBAAyB,mBAAmB,EAAE,cAAc,CAAC;AAC7D,sCAAsC,8BAA8B,CAAC;AACrE,kCAAkC,mBAAmB,EAAE,iBAAiB,CAAC;AACzE,qCAAqC,cAAc,CAAC;AACpD,iCAAiC,yCAAyC,CAAC;;AAE3E,8BAA8B,cAAc,CAAC;AAC7C,2BAA2B,cAAc,CAAC;AAC1C,6BAA6B,cAAc,CAAC;;AAE5C,+DAA+D,cAAc,CAAC;AAC9E,8BAA8B,cAAc,CAAC;AAC7C,6BAA6B,cAAc,CAAC;;AAE5C,+BAA+B,cAAc,CAAC;AAC9C,iCAAiC,cAAc,CAAC;AAChD,0BAA0B,cAAc,CAAC;AACzC,4BAA4B,mBAAmB,EAAE,cAAc,CAAC;AAChE,8BAA8B,cAAc,CAAC;AAC7C,0BAA0B,cAAc,CAAC;AACzC,2BAA2B,cAAc,CAAC;;AAE1C,2CAA2C,0BAA0B,EAAE,uBAAuB,CAAC;AAC/F,iDAAiD,mBAAmB,EAAE",sourcesContent:["/*\n\n    Name:       Bespin\n    Author:     Mozilla / Jan T. Sott\n\n    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)\n    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)\n\n*/\n\n.cm-s-bespin.CodeMirror {background: #28211c; color: #9d9b97;}\n.cm-s-bespin div.CodeMirror-selected {background: #36312e !important;}\n.cm-s-bespin .CodeMirror-gutters {background: #28211c; border-right: 0px;}\n.cm-s-bespin .CodeMirror-linenumber {color: #666666;}\n.cm-s-bespin .CodeMirror-cursor {border-left: 1px solid #797977 !important;}\n\n.cm-s-bespin span.cm-comment {color: #937121;}\n.cm-s-bespin span.cm-atom {color: #9b859d;}\n.cm-s-bespin span.cm-number {color: #9b859d;}\n\n.cm-s-bespin span.cm-property, .cm-s-bespin span.cm-attribute {color: #54be0d;}\n.cm-s-bespin span.cm-keyword {color: #cf6a4c;}\n.cm-s-bespin span.cm-string {color: #f9ee98;}\n\n.cm-s-bespin span.cm-variable {color: #54be0d;}\n.cm-s-bespin span.cm-variable-2 {color: #5ea6ea;}\n.cm-s-bespin span.cm-def {color: #cf7d34;}\n.cm-s-bespin span.cm-error {background: #cf6a4c; color: #797977;}\n.cm-s-bespin span.cm-bracket {color: #9d9b97;}\n.cm-s-bespin span.cm-tag {color: #cf6a4c;}\n.cm-s-bespin span.cm-link {color: #9b859d;}\n\n.cm-s-bespin .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}\n.cm-s-bespin .CodeMirror-activeline-background { background: #404040; }\n"],sourceRoot:""}]);const s=a},82609:e=>{"use strict";e.exports=function(e){var n=[];n.toString=function n(){return this.map((function(n){var r=e(n);if(n[2]){return"@media ".concat(n[2]," {").concat(r,"}")}return r})).join("")};n.i=function(e,r,t){if(typeof e==="string"){e=[[null,e,""]]}var o={};if(t){for(var c=0;c<this.length;c++){var i=this[c][0];if(i!=null){o[i]=true}}}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);if(t&&o[s[0]]){continue}if(r){if(!s[2]){s[2]=r}else{s[2]="".concat(r," and ").concat(s[2])}}n.push(s)}};return n}},1799:e=>{"use strict";function n(e,n){return i(e)||c(e,n)||t(e,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(!e)return;if(typeof e==="string")return o(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor)r=e.constructor.name;if(r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,n)}function o(e,n){if(n==null||n>e.length)n=e.length;for(var r=0,t=new Array(n);r<n;r++){t[r]=e[r]}return t}function c(e,n){var r=e&&(typeof Symbol!=="undefined"&&e[Symbol.iterator]||e["@@iterator"]);if(r==null)return;var t=[];var o=true;var c=false;var i,a;try{for(r=r.call(e);!(o=(i=r.next()).done);o=true){t.push(i.value);if(n&&t.length===n)break}}catch(s){c=true;a=s}finally{try{if(!o&&r["return"]!=null)r["return"]()}finally{if(c)throw a}}return t}function i(e){if(Array.isArray(e))return e}e.exports=function e(r){var t=n(r,4),o=t[1],c=t[3];if(typeof btoa==="function"){var i=btoa(unescape(encodeURIComponent(JSON.stringify(c))));var a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i);var s="/*# ".concat(a," */");var A=c.sources.map((function(e){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(e," */")}));return[o].concat(A).concat([s]).join("\n")}return[o].join("\n")}},26551:(e,n,r)=>{"use strict";r.r(n);r.d(n,{default:()=>s});var t=r(46062);var o=r.n(t);var c=r(9627);var i={};i.insert="head";i.singleton=false;var a=o()(c.Z,i);const s=c.Z.locals||{}},46062:(e,n,r)=>{"use strict";var t=function e(){var n;return function e(){if(typeof n==="undefined"){n=Boolean(window&&document&&document.all&&!window.atob)}return n}}();var o=function e(){var n={};return function e(r){if(typeof n[r]==="undefined"){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement){try{t=t.contentDocument.head}catch(o){t=null}}n[r]=t}return n[r]}}();var c=[];function i(e){var n=-1;for(var r=0;r<c.length;r++){if(c[r].identifier===e){n=r;break}}return n}function a(e,n){var r={};var t=[];for(var o=0;o<e.length;o++){var a=e[o];var s=n.base?a[0]+n.base:a[0];var A=r[s]||0;var u="".concat(s," ").concat(A);r[s]=A+1;var l=i(u);var p={css:a[1],media:a[2],sourceMap:a[3]};if(l!==-1){c[l].references++;c[l].updater(p)}else{c.push({identifier:u,updater:b(p,n),references:1})}t.push(u)}return t}function s(e){var n=document.createElement("style");var t=e.attributes||{};if(typeof t.nonce==="undefined"){var c=true?r.nc:0;if(c){t.nonce=c}}Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])}));if(typeof e.insert==="function"){e.insert(n)}else{var i=o(e.insert||"head");if(!i){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}i.appendChild(n)}return n}function A(e){if(e.parentNode===null){return false}e.parentNode.removeChild(e)}var u=function e(){var n=[];return function e(r,t){n[r]=t;return n.filter(Boolean).join("\n")}}();function l(e,n,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet){e.styleSheet.cssText=u(n,o)}else{var c=document.createTextNode(o);var i=e.childNodes;if(i[n]){e.removeChild(i[n])}if(i.length){e.insertBefore(c,i[n])}else{e.appendChild(c)}}}function p(e,n,r){var t=r.css;var o=r.media;var c=r.sourceMap;if(o){e.setAttribute("media",o)}else{e.removeAttribute("media")}if(c&&typeof btoa!=="undefined"){t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")}if(e.styleSheet){e.styleSheet.cssText=t}else{while(e.firstChild){e.removeChild(e.firstChild)}e.appendChild(document.createTextNode(t))}}var m=null;var d=0;function b(e,n){var r;var t;var o;if(n.singleton){var c=d++;r=m||(m=s(n));t=l.bind(null,r,c,false);o=l.bind(null,r,c,true)}else{r=s(n);t=p.bind(null,r,n);o=function e(){A(r)}}t(e);return function n(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap){return}t(e=r)}else{o()}}}e.exports=function(e,n){n=n||{};if(!n.singleton&&typeof n.singleton!=="boolean"){n.singleton=t()}e=e||[];var r=a(e,n);return function e(t){t=t||[];if(Object.prototype.toString.call(t)!=="[object Array]"){return}for(var o=0;o<r.length;o++){var s=r[o];var A=i(s);c[A].references--}var u=a(t,n);for(var l=0;l<r.length;l++){var p=r[l];var m=i(p);if(c[m].references===0){c[m].updater();c.splice(m,1)}}r=u}}}}]);
//# sourceMappingURL=6551.9fba098f9e1c2413fafe.js.map?v=9fba098f9e1c2413fafe