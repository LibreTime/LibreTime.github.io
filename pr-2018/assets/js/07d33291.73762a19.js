"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Change default passwords",sidebar_position:80},i=void 0,s={unversionedId:"admin-manual/default-passwords",id:"admin-manual/default-passwords",title:"Change default passwords",description:"LibreTime",source:"@site/../docs/admin-manual/default-passwords.md",sourceDirName:"admin-manual",slug:"/admin-manual/default-passwords",permalink:"/pr-2018/docs/next/admin-manual/default-passwords",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/default-passwords.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"Change default passwords",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Custom authentication",permalink:"/pr-2018/docs/next/admin-manual/custom-authentication"},next:{title:"Troubleshooting",permalink:"/pr-2018/docs/next/admin-manual/troubleshooting"}},l={},p=[{value:"LibreTime",id:"libretime",level:2},{value:"PostgreSQL",id:"postgresql",level:2},{value:"Icecast",id:"icecast",level:2},{value:"RabbitMQ",id:"rabbitmq",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"libretime"},"LibreTime"),(0,r.kt)("p",null,"To change the password of the current user:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to LibreTime"),(0,r.kt)("li",{parentName:"ol"},"Click on the username in the upper right corner (next to Log Out)"),(0,r.kt)("li",{parentName:"ol"},"Enter the new password twice and click ",(0,r.kt)("strong",{parentName:"li"},"Save"))),(0,r.kt)("p",null,"To change the password for a different user (requires ",(0,r.kt)("em",{parentName:"p"},"Administrator")," privileges):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to LibreTime"),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Settings")," > ",(0,r.kt)("strong",{parentName:"li"},"Manage Users")),(0,r.kt)("li",{parentName:"ol"},"Select the user, enter the new password twice, and click ",(0,r.kt)("strong",{parentName:"li"},"Save"))),(0,r.kt)("h2",{id:"postgresql"},"PostgreSQL"),(0,r.kt)("p",null,"Two of the most important passwords that should be changed ",(0,r.kt)("em",{parentName:"p"},"immediately")," after installation\nare the passwords used by the PostgreSQL database.\nIt is strongly recommended that you do this before exposing your server to the internet beyond your internal network."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to PostgreSQL with ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo -u postgres psql"),". The PostgreSQL shell - ",(0,r.kt)("inlineCode",{parentName:"li"},"postgres=#")," - means that you have logged in successfully."),(0,r.kt)("li",{parentName:"ol"},"Change the admin password with ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER USER postgres PASSWORD 'myPassword';"),", where ",(0,r.kt)("inlineCode",{parentName:"li"},"myPassword")," is the new password.\nMake sure to include the semicolon at the end! A response of ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER ROLE")," means that the command ran successfully."),(0,r.kt)("li",{parentName:"ol"},"Change the password for the ",(0,r.kt)("em",{parentName:"li"},"airtime")," user with ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER USER airtime WITH PASSWORD 'new_password';"),"\nA response of ",(0,r.kt)("inlineCode",{parentName:"li"},"ALTER ROLE")," means that the command ran successfully."),(0,r.kt)("li",{parentName:"ol"},"If all is successful, logout of PostgreSQL with ",(0,r.kt)("inlineCode",{parentName:"li"},"\\q"),", go back to ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/libretime/config.yml")," to edit the password\nin the config file, and restart all services mentioned in the previous section.")),(0,r.kt)("h2",{id:"icecast"},"Icecast"),(0,r.kt)("p",null,"Random passwords are generated for Icecast during the installation. To look up and change the passwords, edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/icecast2/icecast.xml"),"."),(0,r.kt)("p",null,"Replace the admin and ",(0,r.kt)("em",{parentName:"p"},"changeme")," fields below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<authentication>\n    \x3c!-- Sources log in with username 'source' --\x3e\n    <source-password>changeme</source-password>\n    \x3c!-- Relays log in with username 'relay' --\x3e\n    <relay-password>changeme</relay-password>\n    \x3c!-- Admin logs in with the username given below --\x3e\n    <admin-user>admin</admin-user>\n    <admin-password>changeme</admin-password>\n  </authentication>\n")),(0,r.kt)("p",null,"Then, restart your icecast2 service with ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart icecast2"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If you change the source password, you may need to manually configure LibreTime to use the new password: go to ",(0,r.kt)("strong",{parentName:"p"},"Settings")," > ",(0,r.kt)("strong",{parentName:"p"},"Streams"),", set the streaming server to ",(0,r.kt)("strong",{parentName:"p"},"Custom")," and fill out the ",(0,r.kt)("strong",{parentName:"p"},"Additional Options")," below Stream 1.")),(0,r.kt)("h2",{id:"rabbitmq"},"RabbitMQ"),(0,r.kt)("p",null,"To change the default password for RabbitMQ, run the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rabbitmqctl change_password airtime newpassword\n")),(0,r.kt)("p",null,"and then update the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/libretime/config.yml")," file with the new password."))}c.isMDXComponent=!0}}]);