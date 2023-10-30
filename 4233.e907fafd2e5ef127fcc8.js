/*! For license information please see 4233.e907fafd2e5ef127fcc8.js.LICENSE.txt */
(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[4233],{10475:(e,t,s)=>{"use strict";function n(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var i=n(s(99413));var r="firebase";var a="7.12.0";i.registerVersion(r,a,"app");e.exports=i},74233:(e,t,s)=>{"use strict";s.r(t);s.d(t,{default:()=>O});var n=s(10890);var i=s(10475);var r=s.n(i);const a=Object.freeze({dark:"Hackerrank Dark",light:"JupyterLab Light","light-hrds":"HRDS Light","dark-hrds":"HRDS Dark"});function o(e){return new Promise((t=>{const n=async function(){await Promise.all([s.e(8881),s.e(8161)]).then(s.bind(s,88161));await Promise.all([s.e(7145),s.e(2877)]).then(s.bind(s,42877));r().initializeApp(e);t()};if(e.akamaiProxyFirebase){window.fbProxyUrl=e.akamaiProxyEndpoint}else if(e.proxyFirebase){window.fbProxyUrl=e.fbProxyEndpoint}if(window.fbProxyUrl){window.nc=`https://${window.fbProxyUrl}/identitytoolkit/v3/relyingparty/`;e.databaseURL=`https://${window.fbProxyUrl}/?ns=${e.databaseName}`}void n()}))}function l(e,t,s,n=false){if(s==="document"){return e.execute("docmanager:open",{path:t,options:{activate:n}})}else if(s==="console"){return e.execute("console:open",{path:t,activate:n})}else if(s==="terminal"){return e.execute("terminal:open",{name:t,activate:n})}return Promise.resolve()}async function c(e){if(!e){throw new Error("No Firebase Token Found")}await r().auth().setPersistence(r().auth.Auth.Persistence.SESSION);return r().auth().signInWithCustomToken(e)}function d(e){return`${e}/`}function u(e,t){return`${e}/${t}/`}function h(e,t){return`${d(e)}indicators/${t}`}function m(e){return h(e,"")}var g=s(11609);var p=s.n(g);var f=s(76996);var v=s(67616);var w=s(70865);var C=s(13857);var I=s.n(C);var b=s(47063);class y{log(e,t={}){this.logFullStory("log",e,t);console.log(e,t)}info(e,t={}){this.logFullStory("info",e,t);console.info(e,t)}warn(e,t={}){this.logFullStory("warn",e,t);console.warn(e,t)}error(e,t={}){this.logFullStory("error",e,t);console.error(e,t)}logFullStory(e,t,s={}){var n;try{if(!this._fsInstance){this._fsInstance=this.getFSInstance()}(n=this._fsInstance)===null||n===void 0?void 0:n.event(`Theia (${e}):${t} `,s)}catch(i){console.error("Error while logging fullstory event",{message:t,data:s,e:i})}}getFSInstance(){const e=window["_fs_namespace"];const t=window[e];if(typeof t==="function"){return t}return undefined}}const k=new y;class S{constructor(e){this.shell=e;this.isReady=false;this.debouncedUpdatePathInFirebase=I()(this.updatePathInFirebase,400);this.setupFirebaseListener=e=>{const t=m(e);const s=p().database().ref(t);s.on("child_added",this.handleUserIndicatorChange);s.on("child_changed",this.handleUserIndicatorChange);s.on("child_removed",this.handleUserIndicatorRemove)};this.handleUserIndicatorChange=e=>{const t=e.key;const s=e.val();f.UserIndicatorState.set(t,s)};this.handleUserIndicatorRemove=e=>{const t=e.key;f.UserIndicatorState.delete(t)}}async initialize(e){try{this.options=e;await o(e.firebaseConfig);await c(e.firebaseToken);this.setupFirebaseListener(e.interviewSlug);this.setInterviewInfo({userId:e.userId,userColor:e.userColor,userName:e.userName,interviewSlug:e.interviewSlug,questionId:e.questionId});this.updateCurrentFiles();this.startWatchingFiles();this.isReady=true}catch(t){k.error("Couldn't setup collaboration",Object.assign({errName:t.name,errMsg:t.message,errStack:t.stack},e));void(0,v.showErrorMessage)("Couldn't setup collaboration","You'll still be able to see changes made on the document, but some features may not work. Please refresh the page to try again.")}}updateUser(e){if(!this.isReady)return;f.InterviewState.set("userId",e.userId);f.InterviewState.set("userColor",e.userColor);f.InterviewState.set("userName",e.userName);f.UserIndicatorState.set(e.userId,Object.assign(Object.assign({},f.UserIndicatorState.get(e.userId)),{screenname:e.userName,color:e.userColor}));this.updateCurrentFiles()}updatePathInFirebase(e,t){if(!this.isReady)return;const s=h(this.options.interviewSlug,this.options.userId);void p().database().ref(s).update({filePath:e,widgetType:t,color:this.options.userColor})}setInterviewInfo(e){Object.keys(e).forEach((t=>{f.InterviewState.set(t,e[t])}));return}updateCurrentFiles(){const e=f.InterviewState.get("userName");const t=f.InterviewState.get("userColor");const s=f.InterviewState.get("userId");(0,b.each)(this.shell.widgets("main"),(n=>{if(!(n instanceof w.DocumentWidget))return;const i=n.context.model.sharedModel;if(!i)return;const r=i.awareness;r.setLocalStateField("user",{name:e,color:t,userId:s})}))}onActiveChanged(e){var t,s,n;const{path:i,widgetType:r}=(0,f.getWidgetInfo)(e);this.debouncedUpdatePathInFirebase(i,r);if(e instanceof w.DocumentWidget){const i=e.context.model;if(i.sharedModel){const e=i.sharedModel;const r=e.awareness.getLocalState();const a=f.InterviewState.get("userId");if(!a)return;const o=f.InterviewState.get("userName");const l=f.InterviewState.get("userColor");if(r&&(((t=r.user)===null||t===void 0?void 0:t.name)!=o||((s=r.user)===null||s===void 0?void 0:s.color)!=l||((n=r.user)===null||n===void 0?void 0:n.userId)!=a)){e.awareness.setLocalStateField("user",{name:o,color:l,userId:a})}}}}startWatchingFiles(){this.shell.activeChanged.connect(((e,t)=>{this.onActiveChanged(this.shell.activeWidget)}));this.shell.currentChanged.connect(((e,t)=>{this.onActiveChanged(this.shell.activeWidget)}))}}var P=s(2411);var T=s.n(P);const E=e=>{const t=(0,P.useRef)();const[s,n]=(0,P.useState)(false);const i=()=>{t.current=setTimeout((()=>{n(true)}),e.delay||400)};const r=()=>{clearInterval(t.current);n(false)};return T().createElement("div",{className:"Tooltip-Wrapper",onMouseEnter:i,onMouseLeave:r},e.children,s&&T().createElement("div",{className:`Tooltip-Tip ${"bottom"}`},e.content))};const F=E;var N=s(29131);const M='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path class="jp-icon3" fill-rule="evenodd" clip-rule="evenodd" d="M1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H13C14.3261 14 15.5979 14.5268 16.5355 15.4645C17.4732 16.4021 18 17.6739 18 19V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V19C16 18.2044 15.6839 17.4413 15.1213 16.8787C14.5587 16.3161 13.7956 16 13 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19V21C2 21.5523 1.55228 22 1 22C0.447715 22 0 21.5523 0 21V19C0 17.6739 0.526784 16.4021 1.46447 15.4645Z" fill="#B5C0D0"/>\n<path class="jp-icon3" fill-rule="evenodd" clip-rule="evenodd" d="M9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4ZM4 7C4 4.23858 6.23858 2 9 2C11.7614 2 14 4.23858 14 7C14 9.76142 11.7614 12 9 12C6.23858 12 4 9.76142 4 7Z" fill="#B5C0D0"/>\n<path class="jp-icon3" fill-rule="evenodd" clip-rule="evenodd" d="M19.0318 14.88C19.1698 14.3453 19.7153 14.0237 20.25 14.1618C21.3227 14.4387 22.273 15.0641 22.9517 15.9397C23.6304 16.8152 23.9992 17.8914 24 18.9993L24 21C24 21.5523 23.5523 22 23 22C22.4477 22 22 21.5523 22 21L22 19.0007C21.9994 18.3361 21.7782 17.6902 21.371 17.165C20.9638 16.6396 20.3936 16.2644 19.75 16.0982C19.2153 15.9602 18.8937 15.4148 19.0318 14.88Z" fill="#B5C0D0"/>\n<path class="jp-icon3" fill-rule="evenodd" clip-rule="evenodd" d="M15.0312 2.88196C15.1682 2.34694 15.713 2.02426 16.248 2.16125C17.3236 2.43663 18.2768 3.06213 18.9576 3.93914C19.6383 4.81615 20.0078 5.89479 20.0078 7.005C20.0078 8.11521 19.6383 9.19385 18.9576 10.0709C18.2768 10.9479 17.3236 11.5734 16.248 11.8488C15.713 11.9857 15.1682 11.6631 15.0312 11.128C14.8943 10.593 15.2169 10.0482 15.752 9.91125C16.3973 9.74603 16.9692 9.37073 17.3777 8.84452C17.7861 8.31831 18.0078 7.67113 18.0078 7.005C18.0078 6.33887 17.7861 5.69169 17.3777 5.16548C16.9692 4.63928 16.3973 4.26398 15.752 4.09875C15.2169 3.96176 14.8943 3.41699 15.0312 2.88196Z" fill="#B5C0D0"/>\n</svg>\n';const x='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"\n  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-right jp-icon3">\n  <polyline points="15 14 20 9 15 4"></polyline>\n  <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>\n</svg>';var j=s(18241);var U=s(28871);var _=s(11038);const L="Interviewer";const R="participants-list-container";const $=new N.LabIcon({name:"users-icon",svgstr:M});const A=new N.LabIcon({name:"corner-up-right",svgstr:x});class D extends v.ReactWidget{constructor(e){super();this.commandsRegistry=e;this.jumpToCursor=async(e,t)=>{var s,n,i;try{await e.context.ready;const r=e.content;const a=e.context.model.sharedModel;if(!r||!a)return;const o=(s=a.awareness)===null||s===void 0?void 0:s.getStates();let l;o.forEach((e=>{var s,n;if(((n=(s=e.user)===null||s===void 0?void 0:s.userId)===null||n===void 0?void 0:n.toString())==t){l=e}}));if(!l)return;if(r instanceof j.Notebook){const e=(n=l.activeCellIndex)===null||n===void 0?void 0:n.newValue;if(e==undefined)return;const t=r.widgets[e];r.scrollToCell(t)}else if(r instanceof U.FileEditor){const e=r.editor;if(!((i=l.cursor)===null||i===void 0?void 0:i.head))return;const t=JSON.parse(l.cursor.head);const s=_.createAbsolutePositionFromRelativePosition(t,a.ydoc);if(!s)return;const n=e.editor.posFromIndex(s.index);e.scrollIntoView({from:n,to:n},0)}}catch(r){k.error("Couldn't open file",{errName:r.name,errMsg:r.message,errStack:r.stack})}};this.openFile=async(e,t,s)=>{if(!e)return;try{const n=await l(this.commandsRegistry,e,t,true);if(!n||t!=="document")return;void this.jumpToCursor(n,s)}catch(n){k.error("Couldn't open file",{errName:n.name,errMsg:n.message,errStack:n.stack,filePath:e,widgetType:t});return(0,v.showErrorMessage)("Could't open file","We encountered an error while jumping to the user's current position. Please refresh the page to try again")}};this.id="participants-list";this.title.caption="Participants List";this.title.icon=$;this.node.setAttribute("role","region");this.node.setAttribute("aria-label","Participants List Section");this.addClass(R);f.UserIndicatorState.changed.connect((()=>{this.update()}))}getScreenname(e,t,s){if(e==s)return"You";if(t.screenname===`${L} 1`){return L}return t.screenname||"Participant"}displayNameFromPath(e="",t){let s;if(t==="document"){s=e.split("/").pop()}else if(t==="terminal"){s=`Terminal ${e}`}else{s=e}return s||""}render(){const e=f.UserIndicatorState.keys();const t=f.InterviewState.get("questionId");const s=f.InterviewState.get("userId");if(f.UserIndicatorState.size===0||f.InterviewState.size===0||!t||!s){return P.createElement("div",{className:"users-list"},"No Participants...")}return P.createElement("div",{className:"users-list"},e.map((e=>{const n=f.UserIndicatorState.get(e);if(n==null||!n.insideInterview||n.qid!==t||!n.filePath||!n.widgetType||n.widgetType==="unknown"){return null}const i=this.getScreenname(e,n,s.toString());const r=this.displayNameFromPath(n.filePath,n.widgetType);let a;if(e==s){a=P.createElement("div",{className:"users-list-item-info self"},P.createElement("span",{className:"users-list-item-info-file-name"},r))}else{const t=()=>this.openFile(n.filePath,n.widgetType,e);const s=async e=>{e.preventDefault();if(["Enter"," "].includes(e.key)){await t()}};a=P.createElement(F,{content:"Jump to file",delay:200},P.createElement("div",{"aria-label":`Participant ${i} is in file ${r}. Click to go to that file.`,className:"users-list-item-info outline-offset-out",role:"button",onKeyDown:s,onClick:t,tabIndex:0},P.createElement("span",{className:"users-list-item-info-file-name"},r),P.createElement(A.react,null)))}return P.createElement("div",{className:"users-list-item",key:e},P.createElement("div",{style:{color:n.color}},i),a)})))}}class W{constructor(e,t){this.shell=e;this.commandsRegistry=t;this.hasFocus=false;this.pingInterval=0;this.handleParentMessage=e=>{const{data:t}=e;switch(t.messageType){case"codepair":{const{firebaseConfig:e,userColor:n,userId:i,interviewSlug:r,questionId:a,firebaseToken:o,userName:l,theme:c,pingInterval:d,pendoVisitorId:u,pendoAccountId:h,isSkadoosh:m,isAdmin:g,userEmail:p}=t;k.log("Collab config setup",{firebaseConfig:e,userColor:n,userId:i,userEmail:p,interviewSlug:r,questionId:a,firebaseToken:o,userName:l,pingInterval:d,pendoVisitorId:u,pendoAccountId:h,isSkadoosh:m,isAdmin:g,theme:c});try{if(window.pendo&&!m){if(u){window.pendo.initialize({visitor:{id:u,email:p,ide:"jupyter",variant:"julia"},account:{id:h}})}else if(!g&&p){window.pendo.initialize({visitor:{id:p,email:p,ide:"jupyter",variant:"julia"},account:{id:null}})}}}catch(s){k.error("Pendo initialization failed",{message:s.message,stack:s.stack})}void this.changeTheme(c);this.collabInst=new S(this.shell);void this.collabInst.initialize({firebaseConfig:e,firebaseToken:o,userName:l,questionId:a,interviewSlug:r,userId:i,userColor:n}).then((()=>{const e=new D(this.commandsRegistry);this.shell.add(e,"left",{rank:300})}));if(d>0){this.pingInterval=d;this.setupPingToParent()}break}case"jump_to_cursor":{const{filePath:e,widgetType:s}=t;l(this.commandsRegistry,e,s,true).catch((t=>{k.error("Couldn't jump to cursor",{errName:t.name,errMsg:t.message,errStack:t.stack,filePath:e,widgetType:s});return(0,v.showErrorMessage)("Could't open file","We encountered an error while jumping to the user's current position. Please refresh the page to try again")}));break}case"USER.CHANGE":{this.collabInst.updateUser(t);break}case"echo":{this.sendMessageToParent("echo",t);break}case"open_file_in_bg":{const{filePath:e,widgetType:s}=t;l(this.commandsRegistry,e,s,false).catch((e=>{k.error("Couldn't open file in background",{errName:e.name,errMsg:e.message,errStack:e.stack})}));break}case"change_theme":{const{theme:e}=t;void this.changeTheme(e);break}default:break}};this.setupPingToParent=()=>{if(this.hasFocus){this.sendMessageToParent("ping")}clearTimeout(this.pingTimeout);this.pingTimeout=setTimeout((()=>this.setupPingToParent()),this.pingInterval)};window.addEventListener("focus",(()=>{this.sendMessageToParent("ping");this.sendMessageToParent("event_focus");this.hasFocus=true}));window.addEventListener("blur",(e=>{setTimeout((()=>{var e,t;if(!(((e=document.activeElement)===null||e===void 0?void 0:e.tagName)==="IFRAME"||((t=document.activeElement)===null||t===void 0?void 0:t.tagName)==="EMBED"||document.activeElement instanceof HTMLIFrameElement||document.activeElement instanceof HTMLEmbedElement)){this.hasFocus=false;this.sendMessageToParent("event_blur");if(this.collabInst){this.collabInst.debouncedUpdatePathInFirebase("","unknown")}}}))}));window.addEventListener("message",this.handleParentMessage,false);void e.restored.then((()=>{this.sendMessageToParent("ide_ready",{})}))}changeTheme(e){console.log("theme",a[e]);return this.commandsRegistry.execute("apputils:change-theme",{theme:a[e]})}sendMessageToParent(e,t={}){try{window.parent.postMessage(Object.assign(Object.assign({},t),{messageType:e}),"*")}catch(s){k.error("Couldn't send message to parent",{errName:s.name,errMsg:s.message,errStack:s.stack,messageType:e,data:t})}}}const z={id:"@hackerrank/jupyterlab-collab-extension:plugin",autoStart:true,requires:[n.ILabShell],activate:(e,t)=>{new W(t,e.commands)}};const O=z}}]);
//# sourceMappingURL=4233.e907fafd2e5ef127fcc8.js.map?v=e907fafd2e5ef127fcc8