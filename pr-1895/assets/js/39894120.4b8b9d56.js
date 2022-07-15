"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},99172:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return m}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],u={title:"Migrate from Airtime",sidebar_position:90},s=void 0,l={unversionedId:"admin-manual/setup/migrate-from-airtime",id:"version-3.0.0-alpha.13/admin-manual/setup/migrate-from-airtime",title:"Migrate from Airtime",description:"This guide walk you though the steps required to migrate your data from Airtime to LibreTime.",source:"@site/versioned_docs/version-3.0.0-alpha.13/admin-manual/setup/migrate-from-airtime.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/migrate-from-airtime",permalink:"/pr-1895/docs/admin-manual/setup/migrate-from-airtime",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/admin-manual/setup/migrate-from-airtime.md",tags:[],version:"3.0.0-alpha.13",sidebarPosition:90,frontMatter:{title:"Migrate from Airtime",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Upgrade",permalink:"/pr-1895/docs/admin-manual/setup/upgrade"},next:{title:"Backup",permalink:"/pr-1895/docs/admin-manual/backup"}},p={},m=[{value:"Make a backup",id:"make-a-backup",level:2},{value:"Install",id:"install",level:2},{value:"Restore the backup",id:"restore-the-backup",level:2},{value:"Update the configuration files",id:"update-the-configuration-files",level:2},{value:"Finish",id:"finish",level:2}],c={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide walk you though the steps required to migrate your data from Airtime to LibreTime."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Airtime ",(0,i.kt)("strong",{parentName:"p"},"linked files")," and ",(0,i.kt)("strong",{parentName:"p"},"watched folders")," features are either deprecated or not working in LibreTime."))),(0,i.kt)("p",null,"LibreTime dropped support for Ubuntu 16.04, which is the last supported version of Ubuntu that Airtime supports."),(0,i.kt)("h2",{id:"make-a-backup"},"Make a backup"),(0,i.kt)("p",null,"Follow ",(0,i.kt)("a",{parentName:"p",href:"/pr-1895/docs/admin-manual/backup"},"the backup guide")," to make a backup of your current Airtime installation."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Install LibreTime on a new system by ",(0,i.kt)("a",{parentName:"p",href:"/pr-1895/docs/admin-manual/setup/install#run-the-installer"},"running the installer"),", and ",(0,i.kt)("strong",{parentName:"p"},"don't run the setup tasks"),"."),(0,i.kt)("h2",{id:"restore-the-backup"},"Restore the backup"),(0,i.kt)("p",null,"Restore ",(0,i.kt)("a",{parentName:"p",href:"/pr-1895/docs/admin-manual/backup#restore"},"the Airtime backup")," on the newly installed LibreTime server."),(0,i.kt)("p",null,"You have to restore the ",(0,i.kt)("strong",{parentName:"p"},"database"),", the ",(0,i.kt)("strong",{parentName:"p"},"files storage")," and the ",(0,i.kt)("strong",{parentName:"p"},"configuration files"),"."),(0,i.kt)("h2",{id:"update-the-configuration-files"},"Update the configuration files"),(0,i.kt)("p",null,"Update the configuration file to match the new configuration schema and update any changed values. See the ",(0,i.kt)("a",{parentName:"p",href:"/pr-1895/docs/admin-manual/setup/configuration"},"configuration")," documentation for more details."),(0,i.kt)("p",null,"Edit the Icecast password in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," to reflect the password used in Airtime."),(0,i.kt)("h2",{id:"finish"},"Finish"),(0,i.kt)("p",null,"Restart the LibreTime services and navigate to the LibreTime web-page."))}d.isMDXComponent=!0}}]);