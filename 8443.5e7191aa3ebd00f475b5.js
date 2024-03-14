(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[8443,2980],{78443:(e,t,s)=>{"use strict";s.r(t);s.d(t,{ITerminal:()=>i.w,ITerminalTracker:()=>i.f,Terminal:()=>n.Terminal});var i=s(1085);var n=s(32980)},1085:(e,t,s)=>{"use strict";s.d(t,{f:()=>o,w:()=>r});var i=s(98034);var n=s.n(i);const o=new i.Token("@jupyterlab/terminal:ITerminalTracker");var r;(function(e){e.defaultOptions={theme:"inherit",fontFamily:'Menlo, Consolas, "DejaVu Sans Mono", monospace',fontSize:13,lineHeight:1,scrollback:1e3,shutdownOnClose:false,closeOnExit:true,cursorBlink:true,initialCommand:"",screenReaderMode:false,pasteWithCtrlV:true,autoFit:true,macOptionIsMeta:false}})(r||(r={}))},32980:(e,t,s)=>{"use strict";s.r(t);s.d(t,{Terminal:()=>y});var i=s(70278);var n=s.n(i);var o=s(64936);var r=s.n(o);var a=s(18453);var h=s.n(a);var c=s(77289);var d=s.n(c);var l=s(78440);var u=s.n(l);var f=s(1085);var m=s(89650);var p=s.n(m);var _=undefined&&undefined.__rest||function(e,t){var s={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0)s[i]=e[i];if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++){if(t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n]))s[i[n]]=e[i[n]]}return s};const g="jp-Terminal";const b="jp-Terminal-body";class y extends a.Widget{constructor(e,t={},s,n){super();this._needsResize=true;this._termOpened=false;this._offsetWidth=-1;this._offsetHeight=-1;n=n||i.nullTranslator;this._trans=n.load("jupyterlab");this.session=e;this._commandRegistry=s;this._options=Object.assign(Object.assign({},f.w.defaultOptions),t);const o=this._options,{theme:r}=o,a=_(o,["theme"]);const h=Object.assign({theme:T.getXTermTheme(r)},a);this.addClass(g);this._setThemeAttribute(r);this._term=new c.Terminal(h);this._fitAddon=new l.FitAddon;this._term.loadAddon(this._fitAddon);this._initializeTerm();this.id=`jp-Terminal-${T.id++}`;this.title.label=this._trans.__("Terminal");e.messageReceived.connect(this._onMessage,this);e.disposed.connect((()=>{if(this.getOption("closeOnExit")){this.dispose()}}),this);if(e.connectionStatus==="connected"){this._initialConnection()}else{e.connectionStatusChanged.connect(this._initialConnection,this)}}_setThemeAttribute(e){if(this.isDisposed){return}this.node.setAttribute("data-term-theme",e?e.toLowerCase():"inherit")}_initialConnection(){if(this.isDisposed){return}if(this.session.connectionStatus!=="connected"){return}this.title.label=this._trans.__("Terminal %1",this.session.name);this._setSessionSize();if(this._options.initialCommand){this.session.send({type:"stdin",content:[this._options.initialCommand+"\r"]})}this.session.connectionStatusChanged.disconnect(this._initialConnection,this)}getOption(e){return this._options[e]}setOption(e,t){if(e!=="theme"&&(this._options[e]===t||e==="initialCommand")){return}this._options[e]=t;switch(e){case"shutdownOnClose":case"closeOnExit":break;case"theme":this._term.setOption("theme",T.getXTermTheme(t));this._setThemeAttribute(t);break;default:this._term.setOption(e,t);break}this._needsResize=true;this.update()}dispose(){if(!this.session.isDisposed){if(this.getOption("shutdownOnClose")){this.session.shutdown().catch((e=>{console.error(`Terminal not shut down: ${e}`)}))}}this._term.dispose();super.dispose()}async refresh(){if(!this.isDisposed){await this.session.reconnect();this._term.clear()}}processMessage(e){super.processMessage(e);switch(e.type){case"fit-request":this.onFitRequest(e);break;default:break}}onAfterAttach(e){this.update()}onAfterShow(e){this.update()}onResize(e){this._offsetWidth=e.width;this._offsetHeight=e.height;this._needsResize=true;this.update()}onUpdateRequest(e){var t;if(!this.isVisible||!this.isAttached){return}if(!this._termOpened){this._term.open(this.node);(t=this._term.element)===null||t===void 0?void 0:t.classList.add(b);this._termOpened=true}if(this._needsResize){this._resizeTerminal()}}onFitRequest(e){const t=a.Widget.ResizeMessage.UnknownSize;o.MessageLoop.sendMessage(this,t)}onActivateRequest(e){this._term.focus()}_initializeTerm(){const e=this._term;e.onData((e=>{if(this.isDisposed){return}this.session.send({type:"stdin",content:[e]})}));e.onTitleChange((e=>{this.title.label=e}));e.attachCustomKeyEventHandler((t=>{const s=m.Platform.IS_MAC?t.metaKey:t.ctrlKey;if(s&&t.key==="c"&&e.hasSelection()){return false}if(s&&t.key==="v"&&this._options.pasteWithCtrlV){void window.navigator.clipboard.readText().then((e=>{this._commandRegistry.execute("hackerrank.handlePasteFromClipboard",{fileName:`Terminal:: ${this.session.name}`,text:e}).catch((e=>{console.warn(e)}))}));return false}return true}))}_onMessage(e,t){switch(t.type){case"stdout":if(t.content){this._term.write(t.content[0])}break;case"disconnect":this._term.write("\r\n\r\n[Finished… Term Session]\r\n");break;default:break}}_resizeTerminal(){if(this._options.autoFit){this._fitAddon.fit()}if(this._offsetWidth===-1){this._offsetWidth=this.node.offsetWidth}if(this._offsetHeight===-1){this._offsetHeight=this.node.offsetHeight}this._setSessionSize();this._needsResize=false}_setSessionSize(){const e=[this._term.rows,this._term.cols,this._offsetHeight,this._offsetWidth];if(!this.isDisposed){this.session.send({type:"set_size",content:e})}}}var T;(function(e){e.id=0;e.lightTheme={foreground:"#000",background:"#fff",cursor:"#616161",cursorAccent:"#F5F5F5",selection:"rgba(97, 97, 97, 0.3)"};e.darkTheme={foreground:"#fff",background:"#000",cursor:"#fff",cursorAccent:"#000",selection:"rgba(255, 255, 255, 0.3)"};e.inheritTheme=()=>({foreground:getComputedStyle(document.body).getPropertyValue("--jp-ui-font-color0").trim(),background:getComputedStyle(document.body).getPropertyValue("--jp-layout-color0").trim(),cursor:getComputedStyle(document.body).getPropertyValue("--jp-ui-font-color1").trim(),cursorAccent:getComputedStyle(document.body).getPropertyValue("--jp-ui-inverse-font-color0").trim(),selection:getComputedStyle(document.body).getPropertyValue("--jp-ui-font-color3").trim()});function t(t){switch(t){case"light":return e.lightTheme;case"dark":return e.darkTheme;case"inherit":default:return e.inheritTheme()}}e.getXTermTheme=t})(T||(T={}))}}]);
//# sourceMappingURL=8443.5e7191aa3ebd00f475b5.js.map?v=5e7191aa3ebd00f475b5