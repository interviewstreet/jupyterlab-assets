(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[5225],{25225:(e,t,n)=>{"use strict";n.r(t);n.d(t,{default:()=>E});var a=n(10890);var s=n(67616);var r=n(66853);var l=n(48305);var o=n(70278);var i=n(29131);var c=n(2411);var d=n(42911);var u=n(98034);var m=n(8595);var h=n(997);var p=n(18453);class g extends p.SplitPanel{constructor(e){super();this.addClass("jp-Licenses");this.model=e.model;this.initLeftPanel();this.initFilters();this.initBundles();this.initGrid();this.initLicenseText();this.setRelativeSizes([1,2,3]);void this.model.initLicenses().then((()=>this._updateBundles()));this.model.trackerDataChanged.connect((()=>{this.title.label=this.model.title}))}dispose(){if(this.isDisposed){return}this._bundles.currentChanged.disconnect(this.onBundleSelected,this);this.model.dispose();super.dispose()}initLeftPanel(){this._leftPanel=new p.Panel;this._leftPanel.addClass("jp-Licenses-FormArea");this.addWidget(this._leftPanel);p.SplitPanel.setStretch(this._leftPanel,1)}initFilters(){this._filters=new g.Filters(this.model);p.SplitPanel.setStretch(this._filters,1);this._leftPanel.addWidget(this._filters)}initBundles(){this._bundles=new p.TabBar({orientation:"vertical",renderer:new g.BundleTabRenderer(this.model)});this._bundles.addClass("jp-Licenses-Bundles");p.SplitPanel.setStretch(this._bundles,1);this._leftPanel.addWidget(this._bundles);this._bundles.currentChanged.connect(this.onBundleSelected,this);this.model.stateChanged.connect((()=>this._bundles.update()))}initGrid(){this._grid=new g.Grid(this.model);p.SplitPanel.setStretch(this._grid,1);this.addWidget(this._grid)}initLicenseText(){this._licenseText=new g.FullText(this.model);p.SplitPanel.setStretch(this._grid,1);this.addWidget(this._licenseText)}onBundleSelected(){var e;if((e=this._bundles.currentTitle)===null||e===void 0?void 0:e.label){this.model.currentBundleName=this._bundles.currentTitle.label}}_updateBundles(){this._bundles.clearTabs();let e=0;const{currentBundleName:t}=this.model;let n=0;for(const a of this.model.bundleNames){const s=new p.Widget;s.title.label=a;if(a===t){n=e}this._bundles.insertTab(++e,s.title)}this._bundles.currentIndex=n}}(function(e){e.REPORT_FORMATS={markdown:{id:"markdown",title:"Markdown",icon:i.markdownIcon},csv:{id:"csv",title:"CSV",icon:i.spreadsheetIcon},json:{id:"csv",title:"JSON",icon:i.jsonIcon}};e.DEFAULT_FORMAT="markdown";class t extends s.VDomModel{constructor(e){super();this._selectedPackageChanged=new m.Signal(this);this._trackerDataChanged=new m.Signal(this);this._currentPackageIndex=0;this._licensesReady=new u.PromiseDelegate;this._packageFilter={};this._trans=e.trans;this._licensesUrl=e.licensesUrl;this._serverSettings=e.serverSettings||d.ServerConnection.makeSettings();if(e.currentBundleName){this._currentBundleName=e.currentBundleName}if(e.packageFilter){this._packageFilter=e.packageFilter}if(e.currentPackageIndex){this._currentPackageIndex=e.currentPackageIndex}}async initLicenses(){try{const e=await d.ServerConnection.makeRequest(this._licensesUrl,{},this._serverSettings);this._serverResponse=await e.json();this._licensesReady.resolve();this.stateChanged.emit(void 0)}catch(e){this._licensesReady.reject(e)}}async download(e){const t=`${this._licensesUrl}?format=${e.format}&download=1`;const n=document.createElement("a");n.href=t;n.download="";document.body.appendChild(n);n.click();document.body.removeChild(n);return void 0}get selectedPackageChanged(){return this._selectedPackageChanged}get trackerDataChanged(){return this._trackerDataChanged}get bundleNames(){var e;return Object.keys(((e=this._serverResponse)===null||e===void 0?void 0:e.bundles)||{})}get currentBundleName(){if(this._currentBundleName){return this._currentBundleName}if(this.bundleNames.length){return this.bundleNames[0]}return null}set currentBundleName(e){if(this._currentBundleName!==e){this._currentBundleName=e;this.stateChanged.emit(void 0);this._trackerDataChanged.emit(void 0)}}get licensesReady(){return this._licensesReady.promise}get bundles(){var e;return((e=this._serverResponse)===null||e===void 0?void 0:e.bundles)||{}}get currentPackageIndex(){return this._currentPackageIndex}set currentPackageIndex(e){if(this._currentPackageIndex===e){return}this._currentPackageIndex=e;this._selectedPackageChanged.emit(void 0);this.stateChanged.emit(void 0);this._trackerDataChanged.emit(void 0)}get currentPackage(){var e;if(this.currentBundleName&&this.bundles&&this._currentPackageIndex!=null){return this.getFilteredPackages(((e=this.bundles[this.currentBundleName])===null||e===void 0?void 0:e.packages)||[])[this._currentPackageIndex]}return null}get trans(){return this._trans}get title(){return`${this._currentBundleName||""} ${this._trans.__("Licenses")}`.trim()}get packageFilter(){return this._packageFilter}set packageFilter(e){this._packageFilter=e;this.stateChanged.emit(void 0);this._trackerDataChanged.emit(void 0)}getFilteredPackages(e){let t=[];let n=Object.entries(this._packageFilter).filter((([e,t])=>t&&`${t}`.trim().length)).map((([e,t])=>[e,`${t}`.toLowerCase().trim().split(" ")]));for(const a of e){let e=0;for(const[t,s]of n){let n=0;let r=`${a[t]}`.toLowerCase();for(const e of s){if(r.includes(e)){n+=1}}if(n){e+=1}}if(e===n.length){t.push(a)}}return Object.values(t)}}e.Model=t;class n extends s.VDomRenderer{constructor(e){super(e);this.renderFilter=e=>{const t=this.model.packageFilter[e]||"";return c.createElement("input",{type:"text",name:e,defaultValue:t,className:"jp-mod-styled",onInput:this.onFilterInput})};this.onFilterInput=e=>{const t=e.currentTarget;const{name:n,value:a}=t;this.model.packageFilter=Object.assign(Object.assign({},this.model.packageFilter),{[n]:a})};this.addClass("jp-Licenses-Filters");this.addClass("jp-RenderedHTMLCommon")}render(){const{trans:e}=this.model;return c.createElement("div",null,c.createElement("label",null,c.createElement("strong",null,e.__("Filter Licenses By"))),c.createElement("ul",null,c.createElement("li",null,c.createElement("label",null,e.__("Package")),this.renderFilter("name")),c.createElement("li",null,c.createElement("label",null,e.__("Version")),this.renderFilter("versionInfo")),c.createElement("li",null,c.createElement("label",null,e.__("License")),this.renderFilter("licenseId"))),c.createElement("label",null,c.createElement("strong",null,e.__("Distributions"))))}}e.Filters=n;class a extends p.TabBar.Renderer{constructor(e){super();this.closeIconSelector=".lm-TabBar-tabCloseIcon";this.model=e}renderTab(e){let t=e.title.caption;let n=this.createTabKey(e);let a=this.createTabStyle(e);let s=this.createTabClass(e);let r=this.createTabDataset(e);return h.h.li({key:n,className:s,title:t,style:a,dataset:r},this.renderIcon(e),this.renderLabel(e),this.renderCountBadge(e))}renderCountBadge(e){const t=e.title.label;const{bundles:n}=this.model;const a=this.model.getFilteredPackages((n&&t?n[t].packages:[])||[]);return h.h.label({},`${a.length}`)}}e.BundleTabRenderer=a;class r extends s.VDomRenderer{constructor(e){super(e);this.renderRow=(e,t)=>{const n=t===this.model.currentPackageIndex;const a=()=>this.model.currentPackageIndex=t;return c.createElement("tr",{key:e.name,className:n?"jp-mod-selected":"",onClick:a},c.createElement("td",null,c.createElement("input",{type:"radio",name:"show-package-license",value:t,onChange:a,checked:n})),c.createElement("th",null,e.name),c.createElement("td",null,c.createElement("code",null,e.versionInfo)),c.createElement("td",null,c.createElement("code",null,e.licenseId)))};this.addClass("jp-Licenses-Grid");this.addClass("jp-RenderedHTMLCommon")}render(){var e;const{bundles:t,currentBundleName:n,trans:a}=this.model;const s=this.model.getFilteredPackages(t&&n?((e=t[n])===null||e===void 0?void 0:e.packages)||[]:[]);if(!s.length){return c.createElement("blockquote",null,c.createElement("em",null,a.__("No Packages found")))}return c.createElement("form",null,c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("td",null),c.createElement("th",null,a.__("Package")),c.createElement("th",null,a.__("Version")),c.createElement("th",null,a.__("License")))),c.createElement("tbody",null,s.map(this.renderRow))))}}e.Grid=r;class l extends s.VDomRenderer{constructor(e){super(e);this.addClass("jp-Licenses-Text");this.addClass("jp-RenderedHTMLCommon");this.addClass("jp-RenderedMarkdown")}render(){const{currentPackage:e,trans:t}=this.model;let n="";let a=t.__("No Package selected");let s="";if(e){const{name:r,versionInfo:l,licenseId:o,extractedText:i}=e;n=`${r} v${l}`;a=`${t.__("License")}: ${o||t.__("No License ID found")}`;s=i||t.__("No License Text found")}return[c.createElement("h1",{key:"h1"},n),c.createElement("blockquote",{key:"quote"},c.createElement("em",null,a)),c.createElement("code",{key:"code"},s)]}}e.FullText=l})(g||(g={}));var _;(function(e){e.open="help:open";e.about="help:about";e.activate="help:activate";e.close="help:close";e.show="help:show";e.hide="help:hide";e.launchClassic="help:launch-classic-notebook";e.jupyterForum="help:jupyter-forum";e.licenses="help:licenses";e.licenseReport="help:license-report";e.refreshLicenses="help:licenses-refresh"})(_||(_={}));const b=window.location.protocol==="https:";const f="jp-Help";const v={id:"@jupyterlab/help-extension:about",autoStart:true,requires:[o.ITranslator],optional:[s.ICommandPalette],activate:(e,t,n)=>{const{commands:a}=e;const r=t.load("jupyterlab");const l=r.__("Help");a.addCommand(_.about,{label:r.__("About %1",e.name),execute:()=>{const t=r.__("Version %1",e.version);const n=c.createElement("span",{className:"jp-About-version-info"},c.createElement("span",{className:"jp-About-version"},t,"(","17-python",")"));const a=c.createElement("span",{className:"jp-About-header"},c.createElement(i.jupyterIcon.react,{margin:"7px 9.5px",height:"auto",width:"58px"}),c.createElement("div",{className:"jp-About-header-info"},c.createElement(i.jupyterlabWordmarkIcon.react,{height:"auto",width:"196px"}),n));const l="https://jupyter.org/about.html";const o="https://github.com/jupyterlab/jupyterlab/graphs/contributors";const d=c.createElement("span",{className:"jp-About-externalLinks"},c.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat"},r.__("CONTRIBUTOR LIST")),c.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"jp-Button-flat"},r.__("ABOUT PROJECT JUPYTER")));const u=c.createElement("span",{className:"jp-About-copyright"},r.__("© 2015-2022 Project Jupyter Contributors"));const m=c.createElement("div",{className:"jp-About-body"},d,u);return(0,s.showDialog)({title:a,body:m,buttons:[s.Dialog.createButton({label:r.__("Dismiss"),className:"jp-About-button jp-mod-reject jp-mod-styled"})]})}});if(n){n.addItem({command:_.about,category:l})}}};const k={id:"@jupyterlab/help-extension:launch-classic",autoStart:true,requires:[o.ITranslator],optional:[s.ICommandPalette],activate:(e,t,n)=>{const{commands:a}=e;const s=t.load("jupyterlab");const l=s.__("Help");a.addCommand(_.launchClassic,{label:s.__("Launch Classic Notebook"),execute:()=>{window.open(r.PageConfig.getBaseUrl()+"tree")}});if(n){n.addItem({command:_.launchClassic,category:l})}}};const C={id:"@jupyterlab/help-extension:jupyter-forum",autoStart:true,requires:[o.ITranslator],optional:[s.ICommandPalette],activate:(e,t,n)=>{const{commands:a}=e;const s=t.load("jupyterlab");const r=s.__("Help");a.addCommand(_.jupyterForum,{label:s.__("Jupyter Forum"),execute:()=>{window.open("https://discourse.jupyter.org/c/jupyterlab")}});if(n){n.addItem({command:_.jupyterForum,category:r})}}};const y={id:"@jupyterlab/help-extension:resources",autoStart:true,requires:[l.IMainMenu,o.ITranslator],optional:[s.ICommandPalette,a.ILayoutRestorer],activate:(e,t,n,a,l)=>{const o=n.load("jupyterlab");let i=0;const d=o.__("Help");const u="help-doc";const{commands:m,shell:h,serviceManager:p}=e;const g=new s.WidgetTracker({namespace:u});const v=[{text:o.__("JupyterLab Reference"),url:"https://jupyterlab.readthedocs.io/en/3.4.x/"},{text:o.__("JupyterLab FAQ"),url:"https://jupyterlab.readthedocs.io/en/3.4.x/getting_started/faq.html"},{text:o.__("Jupyter Reference"),url:"https://jupyter.org/documentation"},{text:o.__("Markdown Reference"),url:"https://commonmark.org/help/"}];v.sort(((e,t)=>e.text.localeCompare(t.text)));if(l){void l.restore(g,{command:_.open,args:e=>({url:e.content.url,text:e.content.title.label}),name:e=>e.content.url})}function k(e,t){const n=new s.IFrame({sandbox:["allow-scripts","allow-forms"]});n.url=e;n.addClass(f);n.title.label=t;n.id=`${u}-${++i}`;const a=new s.MainAreaWidget({content:n});a.addClass("jp-Help");return a}const C=t.helpMenu;const y=v.map((e=>({args:e,command:_.open})));C.addGroup(y,10);const j=new Map;p.sessions.runningChanged.connect(((t,n)=>{var a;if(!n.length){return}const r=n[n.length-1];if(!r.kernel||j.has(r.kernel.name)){return}const l=p.sessions.connectTo({model:r,kernelConnectionOptions:{handleComms:false}});void((a=l.kernel)===null||a===void 0?void 0:a.info.then((t=>{var n,a;const r=l.kernel.name;if(j.has(r)){return}j.set(r,t);const i=()=>{let t=false;const n=e.shell.currentWidget;if(!n){return t}C.kernelUsers.forEach((e=>{var a;if(e.tracker.has(n)&&((a=e.getKernel(n))===null||a===void 0?void 0:a.name)===r){t=true}}));return t};const d=`help-menu-${r}:banner`;const u=(a=(n=p.kernelspecs)===null||n===void 0?void 0:n.specs)===null||a===void 0?void 0:a.kernelspecs[r];if(!u){return}const h=u.display_name;let g=u.resources["logo-64x64"];m.addCommand(d,{label:o.__("About the %1 Kernel",h),isVisible:i,isEnabled:i,execute:()=>{const e=c.createElement("img",{src:g});const n=c.createElement("span",{className:"jp-About-header"},e,c.createElement("div",{className:"jp-About-header-info"},h));const a=c.createElement("pre",null,t.banner);const r=c.createElement("div",{className:"jp-About-body"},a);return(0,s.showDialog)({title:n,body:r,buttons:[s.Dialog.createButton({label:o.__("Dismiss"),className:"jp-About-button jp-mod-reject jp-mod-styled"})]})}});C.addGroup([{command:d}],20);const b=[];(t.help_links||[]).forEach((e=>{const t=`help-menu-${r}:${e.text}`;m.addCommand(t,{label:e.text,isVisible:i,isEnabled:i,execute:()=>m.execute(_.open,e)});b.push({command:t})}));C.addGroup(b,21);l.dispose()})))}));m.addCommand(_.open,{label:e=>e["text"],execute:e=>{const t=e["url"];const n=e["text"];const a=e["newBrowserTab"]||false;if(a||b&&r.URLExt.parse(t).protocol!=="https:"){window.open(t);return}const s=k(t,n);void g.add(s);h.add(s,"main");return s}});if(a){v.forEach((e=>{a.addItem({args:e,command:_.open,category:d})}));a.addItem({args:{reload:true},command:"apputils:reset",category:d})}}};const j={id:"@jupyterlab/help-extension:licenses",autoStart:true,requires:[o.ITranslator],optional:[l.IMainMenu,s.ICommandPalette,a.ILayoutRestorer],activate:(e,t,n,a,l)=>{if(!r.PageConfig.getOption("licensesUrl")){return}const{commands:o,shell:c}=e;const d=t.load("jupyterlab");const u=d.__("Help");const m=d.__("Download All Licenses as");const h=d.__("Licenses");const p=d.__("Refresh Licenses");let b=0;const f=r.URLExt.join(r.PageConfig.getBaseUrl(),r.PageConfig.getOption("licensesUrl"))+"/";const v="help-licenses";const k=new s.WidgetTracker({namespace:v});function C(e){return g.REPORT_FORMATS[e]||g.REPORT_FORMATS[g.DEFAULT_FORMAT]}function y(t){const n=new g.Model(Object.assign(Object.assign({},t),{licensesUrl:f,trans:d,serverSettings:e.serviceManager.serverSettings}));const a=new g({model:n});a.id=`${v}-${++b}`;a.title.label=h;a.title.icon=i.copyrightIcon;const r=new s.MainAreaWidget({content:a,reveal:n.licensesReady});r.toolbar.addItem("refresh-licenses",new s.CommandToolbarButton({id:_.refreshLicenses,args:{noLabel:1},commands:o}));r.toolbar.addItem("spacer",s.Toolbar.createSpacerItem());for(const e of Object.keys(g.REPORT_FORMATS)){const t=new s.CommandToolbarButton({id:_.licenseReport,args:{format:e,noLabel:1},commands:o});r.toolbar.addItem(`download-${e}`,t)}return r}o.addCommand(_.licenses,{label:h,execute:e=>{const t=y(e);c.add(t,"main");void k.add(t);t.content.model.trackerDataChanged.connect((()=>{void k.save(t)}));return t}});o.addCommand(_.refreshLicenses,{label:e=>e.noLabel?"":p,caption:p,icon:i.refreshIcon,execute:async()=>{var e;return(e=k.currentWidget)===null||e===void 0?void 0:e.content.model.initLicenses()}});o.addCommand(_.licenseReport,{label:e=>{if(e.noLabel){return""}const t=C(`${e.format}`);return`${m} ${t.title}`},caption:e=>{const t=C(`${e.format}`);return`${m} ${t.title}`},icon:e=>{const t=C(`${e.format}`);return t.icon},execute:async e=>{var t;const n=C(`${e.format}`);return await((t=k.currentWidget)===null||t===void 0?void 0:t.content.model.download({format:n.id}))}});if(a){a.addItem({command:_.licenses,category:u})}if(n){const e=n.helpMenu;e.addGroup([{command:_.licenses}],0)}if(l){void l.restore(k,{command:_.licenses,name:e=>"licenses",args:e=>{const{currentBundleName:t,currentPackageIndex:n,packageFilter:a}=e.content.model;const s={currentBundleName:t,currentPackageIndex:n,packageFilter:a};return s}})}}};const x=[v,k,C,y,j];const E=x}}]);
//# sourceMappingURL=5225.9fd5cbbf9f6f7ea51f16.js.map?v=9fd5cbbf9f6f7ea51f16