"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=o,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},45462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Setting the server time",sidebar_position:20},i=void 0,s={unversionedId:"admin-manual/server-time",id:"admin-manual/server-time",title:"Setting the server time",description:"Accurate time keeping on your server is vital for LibreTime performance. You can confirm that the date and time of your server are set correctly with the date command.",source:"@site/../docs/admin-manual/server-time.md",sourceDirName:"admin-manual",slug:"/admin-manual/server-time",permalink:"/pr-2018/docs/next/admin-manual/server-time",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/server-time.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Setting the server time",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Backup",permalink:"/pr-2018/docs/next/admin-manual/backup"},next:{title:"Library management",permalink:"/pr-2018/docs/next/admin-manual/library"}},p={},l=[{value:"Configuring NTP",id:"configuring-ntp",level:2},{value:"Adjusting the server time zone",id:"adjusting-the-server-time-zone",level:2}],u={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Accurate time keeping on your server is vital for LibreTime performance. You can confirm that the date and time of your server are set correctly with the ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," command.\nThe server should respond with the date, time, time zone and year in a format similar to the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Tue Jul  2 15:08:57 BST 2013\n")),(0,o.kt)("p",null,"If the time on your server is wrong, we strongly recommend that you take LibreTime off-air until the problem is fixed."),(0,o.kt)("h2",{id:"configuring-ntp"},"Configuring NTP"),(0,o.kt)("p",null,"Although it is possible to set the date and time of the server manually, this is not recommended because the server clock can drift over time, compromising the accuracy of your broadcast schedule. If your LibreTime server is permanently connected to the Internet, you can synchronize your server to a time server with the ",(0,o.kt)("strong",{parentName:"p"},"ntp")," program. If ",(0,o.kt)("strong",{parentName:"p"},"ntp")," is not on your server, you can install it with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo apt-get install ntp"),"."),(0,o.kt)("p",null,"Optionally, open the ",(0,o.kt)("strong",{parentName:"p"},"ntp")," configuration file in the ",(0,o.kt)("strong",{parentName:"p"},"nano")," editor to add further time server names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo nano /etc/ntp.conf\n")),(0,o.kt)("p",null,"On Ubuntu GNU/Linux, the default time server is ",(0,o.kt)("inlineCode",{parentName:"p"},"ntp.ubuntu.com"),", but there are many other time servers available on the public Internet, including the group of servers listed at ",(0,o.kt)("a",{parentName:"p",href:"https://www.pool.ntp.org/"},"https://www.pool.ntp.org/")," for each country. Using a variety of NTP servers located closely to your LibreTime server should produce the most accurate results. For example, for a server in the United Kingdom you could use the following list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:'language-title="/etc/ntp.conf"'},"# You do need to talk to an NTP server or two (or three).\nserver ntp.ubuntu.com\nserver 0.uk.pool.ntp.org\nserver 1.uk.pool.ntp.org\nserver 2.uk.pool.ntp.org\nserver 3.uk.pool.ntp.org\n")),(0,o.kt)("p",null,"Enter the server names you require, press ",(0,o.kt)("strong",{parentName:"p"},"Ctrl+O")," to write out the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/ntp.conf")," file, then ",(0,o.kt)("strong",{parentName:"p"},"Ctrl+X")," to exit ",(0,o.kt)("strong",{parentName:"p"},"nano"),". Restart the ",(0,o.kt)("strong",{parentName:"p"},"ntp")," service with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart ntp"),"."),(0,o.kt)("p",null,"The server should respond:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* Stopping NTP server ntpd                                 [ OK ]\n* Starting NTP server ntpd                                 [ OK ]\n")),(0,o.kt)("p",null,"Then use the ",(0,o.kt)("strong",{parentName:"p"},"ntpq -p")," command to confirm that ",(0,o.kt)("strong",{parentName:"p"},"ntp")," is working. This command should produce output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ntpq -p\n    remote      refid     st t  when poll reach  delay offset jitter\n==================================================================\neuropium. 193.79.237.14  2 u   28   64    3  39.571  12.600  3.590\nnorb.v4.c 46.227.200.72  3 u   28   64    3  47.856  -6.908 10.028\n82.113.15 193.62.22.82   2 u   29   64    3  11.458  -0.513  2.629\nntppub.le 158.43.192.66  2 u   91   64    2 122.781  44.864  0.001\ndns0.rmpl 195.66.241.3   2 u   27   64    3  22.171   1.464  4.242\n")),(0,o.kt)("h2",{id:"adjusting-the-server-time-zone"},"Adjusting the server time zone"),(0,o.kt)("p",null,"The data centre which hosts your LibreTime server could be located anywhere in the world. Some servers are set to ",(0,o.kt)("em",{parentName:"p"},"Coordinated Universal Time")," or UTC (similar to ",(0,o.kt)("em",{parentName:"p"},"Greenwich Mean Time")," or GMT), regardless of their location. LibreTime uses UTC time in its database for scheduling purposes, independent of the server time zone."),(0,o.kt)("p",null,"Find your timezone's shortcode with ",(0,o.kt)("inlineCode",{parentName:"p"},"timedatectl list-timezones"),", then enter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo timedatectl set-timezone your_time_zone\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can check to see which time zone your server is set to by running ",(0,o.kt)("inlineCode",{parentName:"p"},"timedatectl")," without any arguments.")))}m.isMDXComponent=!0}}]);