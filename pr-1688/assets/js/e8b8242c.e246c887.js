(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5597],{85162:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(67294),i=a(86010),l="tabItem_Ymn6";function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:a},t)}},65488:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(83117),i=a(67294),l=a(86010),r=a(72389),o=a(67392),s=a(7094),u=a(12466),m="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,a,r=e.lazy,p=e.block,c=e.defaultValue,h=e.values,v=e.groupId,g=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(t=null!=c?c:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==f&&!b.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),y=w.tabGroupChoices,x=w.setTabGroupChoices,T=(0,i.useState)(f),C=T[0],L=T[1],z=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var M=y[v];null!=M&&M!==C&&b.some((function(e){return e.value===M}))&&L(M)}var R=function(e){var t=e.currentTarget,a=z.indexOf(t),n=b[a].value;n!==C&&(I(t),L(n),null!=v&&x(v,String(n)))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,i=z.indexOf(e.currentTarget)+1;a=null!=(n=z[i])?n:z[0];break;case"ArrowLeft":var l,r=z.indexOf(e.currentTarget)-1;a=null!=(l=z[r])?l:z[z.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},b.map((function(e){var t=e.value,a=e.label,r=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return z.push(e)},onKeyDown:E,onFocus:R,onClick:R},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),r?(0,i.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,r.Z)();return i.createElement(p,(0,n.Z)({key:String(t)},e))}},41838:function(e){e.exports={title:"LibreTime",description:"Radio Broadcast & Automation Platform",version:"3.0.0-alpha.12",website:"https://libretime.org",repository:{href:"https://github.com/libretime/libretime",label:"Github"},forum:{href:"https://discourse.libretime.org",label:"Discourse"},channel:{href:"https://chat.libretime.org",label:"Mattermost"},home:{links:[{label:"Get started \ud83d\ude80",to:"/docs/admin-manual"},{label:"Release note",to:"/docs/releases/3.0.0-alpha.12"}]},doc:{sections:[{label:"Admin manual",to:"/docs/admin-manual"},{label:"User manual",to:"/docs/user-manual"},{label:"Developer manual",to:"/docs/developer-manual"}]}}},56534:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return g}});var n=a(83117),i=a(80102),l=(a(67294),a(3905)),r=a(65488),o=a(85162),s=a(46975),u=a(41838),m=a.n(u),d=["components"],p={title:"Install",sidebar_position:10},c=void 0,h={unversionedId:"admin-manual/setup/install",id:"admin-manual/setup/install",title:"Install",description:"This guide walk you though the steps required to install LibreTime on your system.",source:"@site/../docs/admin-manual/setup/install.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/install",permalink:"/pr-1688/docs/next/admin-manual/setup/install",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/setup/install.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Install",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Administrator manual",permalink:"/pr-1688/docs/next/admin-manual/"},next:{title:"Configuration",permalink:"/pr-1688/docs/next/admin-manual/setup/configuration"}},v={},g=[{value:"Minimum system requirements",id:"minimum-system-requirements",level:4},{value:"Using the installer",id:"using-the-installer",level:2},{value:"Download",id:"download",level:3},{value:"Run the installer",id:"run-the-installer",level:3},{value:"Using hardware audio output",id:"using-hardware-audio-output",level:4},{value:"Setup",id:"setup",level:3}],k={toc:g};function b(e){var t=e.components,a=(0,i.Z)(e,d);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This guide walk you though the steps required to install LibreTime on your system."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you are coming from ",(0,l.kt)("strong",{parentName:"p"},"Airtime"),", please follow the ",(0,l.kt)("a",{parentName:"p",href:"/pr-1688/docs/next/admin-manual/setup/migrate-from-airtime"},"Airtime migration guide"),"."))),(0,l.kt)("p",null,"You can install LibreTime using the one of the following methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#using-the-installer"},"\ud83d\ude80 Using the installer")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udea7 Using Ansible")),(0,l.kt)("h4",{id:"minimum-system-requirements"},"Minimum system requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"One of the following Linux distributions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Ubuntu ",(0,l.kt)("a",{parentName:"li",href:"https://wiki.ubuntu.com/Releases"},"current LTS"),".\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1845"},"Note Ubuntu 22.04 LTS is not yet supported")),(0,l.kt)("li",{parentName:"ul"},"Debian ",(0,l.kt)("a",{parentName:"li",href:"https://www.debian.org/releases/"},"current stable")))),(0,l.kt)("li",{parentName:"ul"},"1 Ghz Processor"),(0,l.kt)("li",{parentName:"ul"},"2 GB RAM recommended (1 GB required)"),(0,l.kt)("li",{parentName:"ul"},"A static external IP address (",(0,l.kt)("a",{parentName:"li",href:"/pr-1688/docs/next/admin-manual/tutorials/setup-a-static-ip-using-netplan"},"How to setup a static ip using Netplan"),")")),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Make sure that you have configured a ",(0,l.kt)("strong",{parentName:"p"},"firewall")," and it's not blocking connection to the desired ports."),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-1688/docs/next/admin-manual/tutorials/setup-a-firewall-using-ufw"},"How to setup a firewall using UFW"))),(0,l.kt)("p",{parentName:"div"},"LibreTime requires the following default ports to be open:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"80")," for the web interface,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"8000")," for the Icecast streams,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"8001")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"8002")," for the live stream input endpoint.")))),(0,l.kt)("h2",{id:"using-the-installer"},"Using the installer"),(0,l.kt)("p",null,"The installer is shipped in the released tarballs or directly in the project repository."),(0,l.kt)("h3",{id:"download"},"Download"),(0,l.kt)("p",null,"You can either download the latest released tarball or clone the repository."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{label:"Release tarball",value:"tarball",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Download the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/releases"},"latest released")," tarball from Github."),(0,l.kt)("p",null,"Or directly from the command-line:"),(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"wget https://github.com/libretime/libretime/releases/download/",m().version,"/libretime-",m().version,".tar.gz"),(0,l.kt)("p",null,"And extract the tarball:"),(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"tar -xvf libretime-",m().version,".tar.gz && cd libretime")),(0,l.kt)(o.Z,{label:"Git repository",value:"git",mdxType:"TabItem"},(0,l.kt)("p",null,"Clone the project repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/libretime/libretime\ncd libretime\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Don't use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime-debian-packaging"},"https://github.com/libretime/libretime-debian-packaging")," repository, it is only used to create LibreTime packages."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When upgrading, you should clean the local repository, pull the latest changes and finally check out the desired version:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd libretime\ngit clean -xdf\ngit pull\n")))),(0,l.kt)("p",null,"And checkout the latest version:"),(0,l.kt)(s.Z,{language:"bash",mdxType:"CodeBlock"},"git checkout ",m().version))),(0,l.kt)("h3",{id:"run-the-installer"},"Run the installer"),(0,l.kt)("p",null,"Install LibreTime with the recommended options, be sure to replace ",(0,l.kt)("inlineCode",{parentName:"p"},"PUBLIC_URL")," with the public url of your installation,\nfor example ",(0,l.kt)("inlineCode",{parentName:"p"},"https://libretime.example.com")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"http://192.168.10.100:80"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./install PUBLIC_URL\n")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When upgrading be sure to run the installer using the same arguments you used during the initial install."))),(0,l.kt)("p",null,"If you need to change some configuration, the install script can be configured using flags or environment variables. Changing the listening port of LibreTime or whether you want to install some dependency by yourself, you could run the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install LibreTime on your system with the following tweaks:\n# - do not install the liquidsoap package (remember to install liquidsoap yourself)\n# - set the listen port to 8080\n# - do not run the PostgreSQL setup (remember to setup PostgreSQL yourself)\nsudo \\\nLIBRETIME_PACKAGES_EXCLUDES='liquidsoap' \\\n./install \\\n  --listen-port 8080 \\\n  --no-setup-postgresql\xa0\\\n  https://libretime.example.com\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The install script will use randomly generated passwords to create the PostgreSQL user, RabbitMQ user and to update the default Icecast passwords. Those passwords will be saved to the configuration files."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"By default, the install script will not restart any service for you, this is to prevent unwanted restarts on production environment. To let the install script restart the services, you need to pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"--allow-restart")," flag."))),(0,l.kt)("p",null,"Feel free to run ",(0,l.kt)("inlineCode",{parentName:"p"},"./install --help")," to get more details."),(0,l.kt)("h4",{id:"using-hardware-audio-output"},"Using hardware audio output"),(0,l.kt)("p",null,"If you plan to output analog audio directly to a mixing console or transmitter, the user running LibreTime (by default ",(0,l.kt)("inlineCode",{parentName:"p"},"www-data"),") needs to be added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"audio")," user group using the command below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser www-data audio\n")),(0,l.kt)("h3",{id:"setup"},"Setup"),(0,l.kt)("p",null,"Once the installation is completed, edit the ",(0,l.kt)("a",{parentName:"p",href:"/pr-1688/docs/next/admin-manual/setup/configuration"},"configuration file")," at ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/libretime/config.yml")," to fill required information and to match your needs."),(0,l.kt)("p",null,"Next, run the following commands to setup the database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u www-data libretime-api migrate\n")),(0,l.kt)("p",null,"Synchronize the new Icecast passwords into the database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo libretime-api set_icecast_passwords --from-icecast-config\n")),(0,l.kt)("p",null,"Finally, start the services, and check that they are running properly using the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start libretime.target\n\nsudo systemctl --all --plain | grep libretime\n")),(0,l.kt)("p",null,"Once completed, it's recommended to ",(0,l.kt)("a",{parentName:"p",href:"/pr-1688/docs/next/admin-manual/setup/reverse-proxy"},"install a reverse proxy")," to setup SSL termination and secure your installation."))}b.isMDXComponent=!0}}]);