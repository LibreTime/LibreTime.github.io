"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"How to setup a static ip using Netplan"},o=void 0,l={unversionedId:"admin-manual/tutorials/setup-a-static-ip-using-netplan",id:"version-3.0.0-alpha.13/admin-manual/tutorials/setup-a-static-ip-using-netplan",title:"How to setup a static ip using Netplan",description:"This tutorials will walk you though the steps required to configure a server static IP address by modifying the Netplan configuration.",source:"@site/versioned_docs/version-3.0.0-alpha.13/admin-manual/tutorials/setup-a-static-ip-using-netplan.md",sourceDirName:"admin-manual/tutorials",slug:"/admin-manual/tutorials/setup-a-static-ip-using-netplan",permalink:"/pr-2018/docs/admin-manual/tutorials/setup-a-static-ip-using-netplan",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/admin-manual/tutorials/setup-a-static-ip-using-netplan.md",tags:[],version:"3.0.0-alpha.13",frontMatter:{title:"How to setup a static ip using Netplan"},sidebar:"tutorialSidebar",previous:{title:"How to setup a firewall using UFW",permalink:"/pr-2018/docs/admin-manual/tutorials/setup-a-firewall-using-ufw"},next:{title:"User manual",permalink:"/pr-2018/docs/user-manual/"}},s={},p=[{value:"1. Edit the configuration",id:"1-edit-the-configuration",level:2},{value:"2. Apply the configuration",id:"2-apply-the-configuration",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorials will walk you though the steps required to configure a server static IP address by modifying the ",(0,a.kt)("a",{parentName:"p",href:"https://netplan.io/reference/"},"Netplan")," configuration."),(0,a.kt)("h2",{id:"1-edit-the-configuration"},"1. Edit the configuration"),(0,a.kt)("p",null,"First find the right Netplan configuration filename, and edit the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/netplan && ls  # find the netplan filename\nsudo nano ##-network-manager-all.yaml\n")),(0,a.kt)("p",null,"If the Netplan configuration is empty, fill in the file with the example below. Otherwise,\ninput the IP address reserved for the server in ",(0,a.kt)("inlineCode",{parentName:"p"},"xxx.xxx.xxx.xxx/yy")," format, the gateway (the IP address\nof your router), and your DNS server's address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n  version: 2\n  renderer: networkd\n  ethernets:\n    enp3s0:\n      addresses: [192.168.88.8/24]\n      gateway4: 192.168.88.1\n      nameservers:\n        addresses: [192.168.88.1]\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you don't have your own DNS server you can use the router's address in most cases or a public DNS server like Google ",(0,a.kt)("inlineCode",{parentName:"p"},"8.8.8.8")," or Cloudflare ",(0,a.kt)("inlineCode",{parentName:"p"},"1.1.1.1"),".")),(0,a.kt)("h2",{id:"2-apply-the-configuration"},"2. Apply the configuration"),(0,a.kt)("p",null,"After the Netplan file has been saved, apply the changes by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo netplan apply\n")))}c.isMDXComponent=!0}}]);