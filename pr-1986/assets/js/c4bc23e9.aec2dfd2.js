"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5419],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(b,i(i({ref:t},s),{},{components:a})):r.createElement(b,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54561:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Backup",sidebar_position:10},i=void 0,l={unversionedId:"admin-manual/backup",id:"version-3.0.0-alpha.13/admin-manual/backup",title:"Backup",description:"Create a backup",source:"@site/versioned_docs/version-3.0.0-alpha.13/admin-manual/backup.md",sourceDirName:"admin-manual",slug:"/admin-manual/backup",permalink:"/pr-1986/docs/admin-manual/backup",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/admin-manual/backup.md",tags:[],version:"3.0.0-alpha.13",sidebarPosition:10,frontMatter:{title:"Backup",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Migrate from Airtime",permalink:"/pr-1986/docs/admin-manual/setup/migrate-from-airtime"},next:{title:"Setting the server time",permalink:"/pr-1986/docs/admin-manual/server-time"}},u={},p=[{value:"Create a backup",id:"create-a-backup",level:2},{value:"Backup the configuration",id:"backup-the-configuration",level:3},{value:"Backup the database",id:"backup-the-database",level:3},{value:"Backup the storage",id:"backup-the-storage",level:3},{value:"Restore a backup",id:"restore-a-backup",level:2},{value:"Restore the configuration",id:"restore-the-configuration",level:3},{value:"Restore the database",id:"restore-the-database",level:3},{value:"Restore the storage",id:"restore-the-storage",level:3}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-a-backup"},"Create a backup"),(0,n.kt)("p",null,"This guide walk you though the steps required to create a full backup of your installation."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Remember to ",(0,n.kt)("strong",{parentName:"p"},"automate")," and ",(0,n.kt)("strong",{parentName:"p"},"test")," the backup process and to have it run regularly. Having an ",(0,n.kt)("strong",{parentName:"p"},"automated")," and ",(0,n.kt)("strong",{parentName:"p"},"tested")," restoring process is also recommended.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Feel free to pick the backup software of your choice, but know that rsync and similar tools are not backup tools. You could use ",(0,n.kt)("a",{parentName:"p",href:"https://restic.net/"},"restic")," or ",(0,n.kt)("a",{parentName:"p",href:"https://borgbackup.readthedocs.io/"},"borg"),".")),(0,n.kt)("h3",{id:"backup-the-configuration"},"Backup the configuration"),(0,n.kt)("p",null,"On common setups, you need to backup the entire ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/libretime")," folder."),(0,n.kt)("h3",{id:"backup-the-database"},"Backup the database"),(0,n.kt)("p",null,"You need to backup the PostgreSQL database, which holds the entire data of your installation."),(0,n.kt)("p",null,"Here is an example to dump your PostgreSQL database:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres pg_dump --file=libretime.sql libretime\n")),(0,n.kt)("p",null,"Please read the ",(0,n.kt)("inlineCode",{parentName:"p"},"pg_dump")," usage for additional details."),(0,n.kt)("h3",{id:"backup-the-storage"},"Backup the storage"),(0,n.kt)("p",null,"You need to backup the entire file storage, which holds all the files of your installation."),(0,n.kt)("p",null,"The path to your storage was defined during the installation process."),(0,n.kt)("h2",{id:"restore-a-backup"},"Restore a backup"),(0,n.kt)("h3",{id:"restore-the-configuration"},"Restore the configuration"),(0,n.kt)("p",null,"Copy the backed configuration files back to the configuration folder."),(0,n.kt)("h3",{id:"restore-the-database"},"Restore the database"),(0,n.kt)("p",null,"\ud83d\udea7"),(0,n.kt)("h3",{id:"restore-the-storage"},"Restore the storage"),(0,n.kt)("p",null,"\ud83d\udea7"))}c.isMDXComponent=!0}}]);