"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8371],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,b=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return r?n.createElement(b,l(l({ref:t},m),{},{components:r})):n.createElement(b,l({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"Uninstall",sidebar_position:91},l=void 0,o={unversionedId:"admin-manual/uninstall",id:"version-3.0.0-alpha.13/admin-manual/uninstall",title:"Uninstall",description:"This guide provide some guidance to uninstall LibreTime from your system.",source:"@site/versioned_docs/version-3.0.0-alpha.13/admin-manual/uninstall.md",sourceDirName:"admin-manual",slug:"/admin-manual/uninstall",permalink:"/pr-1986/docs/admin-manual/uninstall",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/admin-manual/uninstall.md",tags:[],version:"3.0.0-alpha.13",sidebarPosition:91,frontMatter:{title:"Uninstall",sidebar_position:91},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/pr-1986/docs/admin-manual/troubleshooting"},next:{title:"How to setup a firewall using UFW",permalink:"/pr-1986/docs/admin-manual/tutorials/setup-a-firewall-using-ufw"}},s={},u=[],m={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide provide some guidance to uninstall LibreTime from your system."),(0,a.kt)("p",null,"We recommend using ",(0,a.kt)("strong",{parentName:"p"},"disposable devices")," for your installations, so you can delete your old system and install on a fresh one easily without worrying about old files."),(0,a.kt)("p",null,"If you do not have a way use disposable devices, below are commands that should help you remove most of the LibreTime files from your system."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Use these commands at your ",(0,a.kt)("strong",{parentName:"p"},"own risk"),", we cannot guarantee that these commands are always up to date!")),(0,a.kt)("p",null,"Remove configuration directories:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -Rf /etc/airtime\nsudo rm -Rf /etc/libretime\n")),(0,a.kt)("p",null,"Remove logs directories:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -Rf /var/log/airtime\nsudo rm -Rf /var/log/libretime\n")),(0,a.kt)("p",null,"Remove runtime directories:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -Rf /var/lib/airtime\nsudo rm -Rf /var/lib/libretime\n")),(0,a.kt)("p",null,"Remove shared directories:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -Rf /usr/share/airtime\nsudo rm -Rf /usr/share/libretime\n")),(0,a.kt)("p",null,"Remove systemd services files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -f /{etc,usr/lib}/systemd/system/airtime*\nsudo rm -f /{etc,usr/lib}/systemd/system/libretime*\n")),(0,a.kt)("p",null,"Remove nginx configuration files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -f /etc/nginx/sites-{available,enabled}/airtime*\nsudo rm -f /etc/nginx/sites-{available,enabled}/libretime*\n")),(0,a.kt)("p",null,"Remove php-fpm configuration files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -f /etc/php/*/fpm/pool.d/airtime*\nsudo rm -f /etc/php/*/fpm/pool.d/libretime*\n")),(0,a.kt)("p",null,"Remove logrotate configuration files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -f /etc/logrotate.d/airtime*\nsudo rm -f /etc/logrotate.d/libretime*\n")),(0,a.kt)("p",null,"Remove python packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pip3 uninstall \\\n    libretime-analyzer \\\n    libretime-api \\\n    libretime-api-client \\\n    libretime-playout \\\n    libretime-shared \\\n    libretime-celery\n\n# Check if we forgot old python packages.\n# Remove packages that show up with this commands.\nsudo pip3 freeze | grep libretime\nsudo pip3 freeze | grep airtime\n")),(0,a.kt)("p",null,"Delete the postgresql database and user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u postgres dropdb airtime\nsudo -u postgres dropdb libretime\n\nsudo -u postgres dropuser airtime\nsudo -u postgres dropuser libretime\n")),(0,a.kt)("p",null,"Delete the rabbitmq vhost and user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rabbitmqctl delete_vhost airtime\nsudo rabbitmqctl delete_vhost libretime\n\nsudo rabbitmqctl delete_user airtime\nsudo rabbitmqctl delete_user libretime\n")),(0,a.kt)("p",null,"Delete the file storage (you probably don't want that):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -Rf /srv/airtime\nsudo rm -Rf /srv/libretime\n")),(0,a.kt)("p",null,"Search for remaining files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo find / -name "libretime*"\nsudo find / -name "airtime*"\n')))}p.isMDXComponent=!0}}]);