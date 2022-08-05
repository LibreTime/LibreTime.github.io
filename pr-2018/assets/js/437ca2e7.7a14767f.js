"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3113],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(h,o(o({ref:t},s),{},{components:a})):r.createElement(h,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Migrate from Airtime",sidebar_position:90},o=void 0,l={unversionedId:"admin-manual/setup/migrate-from-airtime",id:"admin-manual/setup/migrate-from-airtime",title:"Migrate from Airtime",description:"This guide walk you though the steps required to migrate your data from Airtime to LibreTime.",source:"@site/../docs/admin-manual/setup/migrate-from-airtime.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/migrate-from-airtime",permalink:"/pr-2018/docs/next/admin-manual/setup/migrate-from-airtime",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/setup/migrate-from-airtime.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"Migrate from Airtime",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Upgrade",permalink:"/pr-2018/docs/next/admin-manual/setup/upgrade"},next:{title:"Backup",permalink:"/pr-2018/docs/next/admin-manual/backup"}},u={},p=[{value:"Make a backup",id:"make-a-backup",level:2},{value:"Backup the configuration",id:"backup-the-configuration",level:3},{value:"Backup the database",id:"backup-the-database",level:3},{value:"Backup the storage",id:"backup-the-storage",level:3},{value:"Install",id:"install",level:2},{value:"Restore the backup",id:"restore-the-backup",level:2},{value:"Update the configuration files",id:"update-the-configuration-files",level:2},{value:"Finish",id:"finish",level:2}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This guide walk you though the steps required to migrate your data from Airtime to LibreTime."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Airtime ",(0,n.kt)("strong",{parentName:"p"},"linked files")," and ",(0,n.kt)("strong",{parentName:"p"},"watched folders")," features are either deprecated or not working in LibreTime.")),(0,n.kt)("p",null,"LibreTime dropped support for Ubuntu 16.04, which is the last supported version of Ubuntu that Airtime supports."),(0,n.kt)("h2",{id:"make-a-backup"},"Make a backup"),(0,n.kt)("h3",{id:"backup-the-configuration"},"Backup the configuration"),(0,n.kt)("p",null,"On common setups, you need to backup the entire ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime")," folder."),(0,n.kt)("h3",{id:"backup-the-database"},"Backup the database"),(0,n.kt)("p",null,"You need to backup the PostgreSQL database, which holds the entire data of your installation."),(0,n.kt)("p",null,"Here is an example to dump your PostgreSQL database:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres pg_dump --file=airtime.sql airtime\n")),(0,n.kt)("p",null,"Please read the ",(0,n.kt)("inlineCode",{parentName:"p"},"pg_dump")," usage for additional details."),(0,n.kt)("h3",{id:"backup-the-storage"},"Backup the storage"),(0,n.kt)("p",null,"You need to backup the entire file storage, which holds all the files of your installation."),(0,n.kt)("p",null,"The path to your storage was defined during the installation process, the default storage path is ",(0,n.kt)("inlineCode",{parentName:"p"},"/srv/airtime/stor"),"."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"Install LibreTime on a new system by ",(0,n.kt)("a",{parentName:"p",href:"/pr-2018/docs/next/admin-manual/setup/install#run-the-installer"},"running the installer"),", and ",(0,n.kt)("strong",{parentName:"p"},"don't run the setup tasks"),"."),(0,n.kt)("h2",{id:"restore-the-backup"},"Restore the backup"),(0,n.kt)("p",null,"Restore ",(0,n.kt)("a",{parentName:"p",href:"/pr-2018/docs/next/admin-manual/backup#restore"},"the Airtime backup")," on the newly installed LibreTime server."),(0,n.kt)("p",null,"You have to restore the ",(0,n.kt)("strong",{parentName:"p"},"database"),", the ",(0,n.kt)("strong",{parentName:"p"},"files storage")," and the ",(0,n.kt)("strong",{parentName:"p"},"configuration files"),"."),(0,n.kt)("h2",{id:"update-the-configuration-files"},"Update the configuration files"),(0,n.kt)("p",null,"Update the configuration file to match the new configuration schema and update any changed values. See the ",(0,n.kt)("a",{parentName:"p",href:"/pr-2018/docs/next/admin-manual/setup/configuration"},"configuration")," documentation for more details."),(0,n.kt)("p",null,"Edit the Icecast password in ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml")," to reflect the password used in Airtime."),(0,n.kt)("h2",{id:"finish"},"Finish"),(0,n.kt)("p",null,"Restart the LibreTime services and navigate to the LibreTime web-page."))}c.isMDXComponent=!0}}]);