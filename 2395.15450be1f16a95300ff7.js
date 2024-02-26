(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[2395,7423],{22395:(e,t,n)=>{"use strict";n.r(t);n.d(t,{ILauncher:()=>k,LauncherModel:()=>w,Launcher:()=>L});var s=n(67616);var a=n.n(s);var c=n(70278);var r=n.n(c);var i=n(29131);var o=n.n(i);var l=n(47063);var d=n.n(l);var h=n(98034);var m=n.n(h);var u=n(15989);var p=n.n(u);var _=n(97083);var g=n.n(_);var v=n(18453);var b=n.n(v);var j=n(2411);var f=n.n(j);const y="jp-Launcher";const k=new h.Token("@jupyterlab/launcher:ILauncher");class w extends s.VDomModel{constructor(){super(...arguments);this.itemsList=[]}add(e){const t=E.createItem(e);this.itemsList.push(t);this.stateChanged.emit(void 0);return new u.DisposableDelegate((()=>{l.ArrayExt.removeFirstOf(this.itemsList,t);this.stateChanged.emit(void 0)}))}items(){return new l.ArrayIterator(this.itemsList)}}class L extends s.VDomRenderer{constructor(e){super(e.model);this._pending=false;this._cwd="";this._cwd=e.cwd;this.translator=e.translator||c.nullTranslator;this._trans=this.translator.load("jupyterlab");this._callback=e.callback;this._commands=e.commands;this.addClass(y)}get cwd(){return this._cwd}set cwd(e){this._cwd=e;this.update()}get pending(){return this._pending}set pending(e){this._pending=e}render(){if(!this.model){return null}const e=[this._trans.__("Notebook"),this._trans.__("Console"),this._trans.__("Other")];const t=[this._trans.__("Notebook"),this._trans.__("Console")];const n=Object.create(null);(0,l.each)(this.model.items(),((e,t)=>{const s=e.category||this._trans.__("Other");if(!(s in n)){n[s]=[]}n[s].push(e)}));for(const r in n){n[r]=n[r].sort(((e,t)=>E.sortCmp(e,t,this._cwd,this._commands)))}const s=[];let a;const c=[];(0,l.each)(e,((e,t)=>{c.push(e)}));for(const r in n){if(e.indexOf(r)===-1){c.push(r)}}c.forEach((e=>{if(!n[e]){return}const c=n[e][0];const r=Object.assign(Object.assign({},c.args),{cwd:this.cwd});const o=t.indexOf(e)>-1;const d=this._commands.iconClass(c.command,r);const h=this._commands.icon(c.command,r);const m=h===d?undefined:h;if(e in n){a=j.createElement("div",{className:"jp-Launcher-section",key:e},j.createElement("div",{className:"jp-Launcher-sectionHeader"},j.createElement(i.LabIcon.resolveReact,{icon:m,iconClass:(0,i.classes)(d,"jp-Icon-cover"),stylesheet:"launcherSection"}),j.createElement("h2",{className:"jp-Launcher-sectionTitle"},e)),j.createElement("div",{className:"jp-Launcher-cardContainer"},(0,l.toArray)((0,l.map)(n[e],(e=>C(o,e,this,this._commands,this._trans,this._callback))))));s.push(a)}}));return j.createElement("div",{className:"jp-Launcher-body"},j.createElement("div",{className:"jp-Launcher-content"},j.createElement("div",{className:"jp-Launcher-cwd"},j.createElement("h3",null,this.cwd)),s))}}function C(e,t,n,a,c,r){const o=t.command;const l=Object.assign(Object.assign({},t.args),{cwd:n.cwd});const d=a.caption(o,l);const h=a.label(o,l);const m=e?h:d||h;const u=()=>{if(n.pending===true){return}n.pending=true;void a.execute(o,Object.assign(Object.assign({},t.args),{cwd:n.cwd})).then((e=>{n.pending=false;if(e instanceof v.Widget){r(e);n.dispose()}})).catch((e=>{n.pending=false;void(0,s.showErrorMessage)(c._p("Error","Launcher Error"),e)}))};const p=e=>{if(e.key==="Enter"){u()}};const _=a.iconClass(o,l);const g=a.icon(o,l);const b=g===_?undefined:g;return j.createElement("div",{className:"jp-LauncherCard",title:m,onClick:u,onKeyPress:p,tabIndex:0,"data-category":t.category||c.__("Other"),key:E.keyProperty.get(t)},j.createElement("div",{className:"jp-LauncherCard-icon"},e?t.kernelIconUrl?j.createElement("img",{src:t.kernelIconUrl,className:"jp-Launcher-kernelIcon"}):j.createElement("div",{className:"jp-LauncherCard-noKernelIcon"},h[0].toUpperCase()):j.createElement(i.LabIcon.resolveReact,{icon:b,iconClass:(0,i.classes)(_,"jp-Icon-cover"),stylesheet:"launcherCard"})),j.createElement("div",{className:"jp-LauncherCard-label",title:m},j.createElement("p",null,h)))}var E;(function(e){let t=0;e.keyProperty=new _.AttachedProperty({name:"key",create:()=>t++});function n(e){return Object.assign(Object.assign({},e),{category:e.category||"",rank:e.rank!==undefined?e.rank:Infinity})}e.createItem=n;function s(e,t,n,s){const a=e.rank;const c=t.rank;if(a!==c&&a!==undefined&&c!==undefined){return a<c?-1:1}const r=s.label(e.command,Object.assign(Object.assign({},e.args),{cwd:n}));const i=s.label(t.command,Object.assign(Object.assign({},t.args),{cwd:n}));return r.localeCompare(i)}e.sortCmp=s})(E||(E={}))}}]);
//# sourceMappingURL=2395.15450be1f16a95300ff7.js.map?v=15450be1f16a95300ff7