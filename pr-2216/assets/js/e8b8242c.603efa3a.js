(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5597],{5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294),i=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(7462),i=n(7294),l=n(6010),o=n(2389),r=n(7392),s=n(7094),u=n(2466);const m="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:c,groupId:h,className:g}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,r.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:v}=(0,s.U)(),[w,T]=(0,i.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=h){const e=N[h];null!=e&&e!==w&&b.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==w&&(I(t),T(a),null!=h&&v(h,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},g)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,i.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,o.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},1838:e=>{e.exports={title:"LibreTime",description:"Radio Broadcast & Automation Platform",version:"3.0.0",website:"https://libretime.org",repository:{href:"https://github.com/libretime/libretime",label:"Github"},forum:{href:"https://discourse.libretime.org",label:"Discourse"},channel:{href:"https://chat.libretime.org",label:"Mattermost"},home:{links:[{label:"Get started \ud83d\ude80",to:"/docs/admin-manual"},{label:"Release note",to:"/docs/releases/3.0.0"}]},doc:{sections:[{label:"Admin manual",to:"/docs/admin-manual"},{label:"User manual",to:"/docs/user-manual"},{label:"Developer manual",to:"/docs/developer-manual"}]}}},6534:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>d,toc:()=>h});var a=n(7462),i=(n(7294),n(3905)),l=(n(1839),n(5488)),o=n(5162),r=n(814),s=n(1838),u=n.n(s);const m={title:"Install",sidebar_position:10},p=void 0,d={unversionedId:"admin-manual/setup/install",id:"admin-manual/setup/install",title:"Install",description:"This guide walk you though the steps required to install LibreTime on your system.",source:"@site/../docs/admin-manual/setup/install.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/install",permalink:"/pr-2216/docs/next/admin-manual/setup/install",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/setup/install.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Install",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Administrator manual",permalink:"/pr-2216/docs/next/admin-manual/"},next:{title:"Configuration",permalink:"/pr-2216/docs/next/admin-manual/setup/configuration"}},c={},h=[{value:"Minimum system requirements",id:"minimum-system-requirements",level:3},{value:"Using the installer",id:"using-the-installer",level:2},{value:"Before installing",id:"before-installing",level:3},{value:"Operating system time configuration",id:"operating-system-time-configuration",level:4},{value:"Download",id:"download",level:3},{value:"Run the installer",id:"run-the-installer",level:3},{value:"Using hardware audio output",id:"using-hardware-audio-output",level:4},{value:"Setup",id:"setup",level:3},{value:"Using docker-compose",id:"using-docker-compose",level:2},{value:"Download",id:"download-1",level:3},{value:"Setup",id:"setup-1",level:3},{value:"Configure",id:"configure",level:2},{value:"Next",id:"next",level:2}],g={toc:h};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide walk you though the steps required to install LibreTime on your system."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are coming from ",(0,i.kt)("strong",{parentName:"p"},"Airtime"),", please follow the ",(0,i.kt)("a",{parentName:"p",href:"/pr-2216/docs/next/admin-manual/setup/migrate-from-airtime"},"Airtime migration guide"),".")),(0,i.kt)("p",null,"You can install LibreTime using the one of the following methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-the-installer"},"\ud83d\ude80 Using the installer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-docker-compose"},"\ud83d\ude80 Using docker-compose")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udea7 Using ansible")),(0,i.kt)("h3",{id:"minimum-system-requirements"},"Minimum system requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 Ghz Processor"),(0,i.kt)("li",{parentName:"ul"},"2 GB RAM recommended (1 GB required)"),(0,i.kt)("li",{parentName:"ul"},"A static external IP address (",(0,i.kt)("a",{parentName:"li",href:"/pr-2216/docs/next/admin-manual/tutorials/setup-a-static-ip-using-netplan"},"How to setup a static ip using Netplan"),")")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Make sure that you have configured a ",(0,i.kt)("strong",{parentName:"p"},"firewall")," and it's not blocking connection to the desired ports."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pr-2216/docs/next/admin-manual/tutorials/setup-a-firewall-using-ufw"},"How to setup a firewall using UFW"))),(0,i.kt)("p",{parentName:"admonition"},"LibreTime requires the following default ports to be open:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"80")," for the web interface,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"8000")," for the Icecast streams,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"8001")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"8002")," for the live stream input endpoint."))),(0,i.kt)("h2",{id:"using-the-installer"},"Using the installer"),(0,i.kt)("p",null,"The installer is shipped in the released tarballs or directly in the project repository."),(0,i.kt)("p",null,"We recommend installing on one of the following ",(0,i.kt)("a",{parentName:"p",href:"/pr-2216/docs/next/developer-manual/development/releases#distributions-releases-support"},"distribution releases"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.debian.org/releases/"},"Debian 11")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.ubuntu.com/Releases"},"Ubuntu 20.04 LTS"))),(0,i.kt)("h3",{id:"before-installing"},"Before installing"),(0,i.kt)("p",null,"Before installing LibreTime, you need to make sure you operating system is properly configured."),(0,i.kt)("h4",{id:"operating-system-time-configuration"},"Operating system time configuration"),(0,i.kt)("p",null,"Check your operating system time configuration using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"timedatectl\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"               Local time: Fri 2022-08-05 12:43:39 CEST\n           Universal time: Fri 2022-08-05 10:43:39 UTC\n                 RTC time: Fri 2022-08-05 10:43:40\n                Time zone: Europe/Berlin (CEST, +0200)\nSystem clock synchronized: yes\n              NTP service: active\n          RTC in local TZ: no\n")),(0,i.kt)("p",null,"Make sure that your time zone is properly configured, if not you can set it using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/timedatectl.html#set-timezone%20%5BTIMEZONE%5D"},(0,i.kt)("inlineCode",{parentName:"a"},"timedatectl set-timezone")," command"),"."),(0,i.kt)("p",null,"If the NTP service is inactive, you should consider enabling it using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/timedatectl.html#set-ntp%20%5BBOOL%5D"},(0,i.kt)("inlineCode",{parentName:"a"},"timedatectl set-ntp")," command"),"."),(0,i.kt)("h3",{id:"download"},"Download"),(0,i.kt)("p",null,"You can either download the latest released tarball or clone the repository."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{label:"Release tarball",value:"tarball",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/releases"},"latest released")," tarball from Github."),(0,i.kt)("p",null,"Or directly from the command-line:"),(0,i.kt)(r.Z,{language:"bash",mdxType:"CodeBlock"},"wget https://github.com/libretime/libretime/releases/download/",u().version,"/libretime-",u().version,".tar.gz"),(0,i.kt)("p",null,"And extract the tarball:"),(0,i.kt)(r.Z,{language:"bash",mdxType:"CodeBlock"},"tar -xvf libretime-",u().version,".tar.gz && cd libretime")),(0,i.kt)(o.Z,{label:"Git repository",value:"git",mdxType:"TabItem"},(0,i.kt)("p",null,"Clone the project repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/libretime/libretime\ncd libretime\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Don't use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime-debian-packaging"},"https://github.com/libretime/libretime-debian-packaging")," repository, it's only used to create LibreTime packages.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When upgrading, you should clean the local repository, pull the latest changes and finally check out the desired version:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd libretime\ngit clean -xdf\ngit pull\n"))),(0,i.kt)("p",null,"And checkout the latest version:"),(0,i.kt)(r.Z,{language:"bash",mdxType:"CodeBlock"},"git checkout ",u().version))),(0,i.kt)("h3",{id:"run-the-installer"},"Run the installer"),(0,i.kt)("p",null,"Install LibreTime with the recommended options, be sure to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"PUBLIC_URL")," with the public url of your installation,\nfor example ",(0,i.kt)("inlineCode",{parentName:"p"},"https://libretime.example.com")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"http://192.168.10.100:80"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./install PUBLIC_URL\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When upgrading be sure to run the installer using the same arguments you used during the initial install.")),(0,i.kt)("p",null,"If you need to change some configuration, the install script can be configured using flags or environment variables. Changing the listening port of LibreTime or whether you want to install some dependency by yourself, you could run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Install LibreTime on your system with the following tweaks:\n# - don't install the liquidsoap package (remember to install liquidsoap yourself)\n# - set the listen port to 8080\n# - don't run the PostgreSQL setup (remember to setup PostgreSQL yourself)\nsudo \\\nLIBRETIME_PACKAGES_EXCLUDES='liquidsoap' \\\n./install \\\n  --listen-port 8080 \\\n  --no-setup-postgresql\xa0\\\n  https://libretime.example.com\n")),(0,i.kt)("p",null,"You can persist the install configuration in a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file next to the install script. For example, the above command could be persisted using the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file below, and you should be able to run the install script without arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"LIBRETIME_PACKAGES_EXCLUDES='liquidsoap'\nLIBRETIME_LISTEN_PORT='8080'\nLIBRETIME_SETUP_POSTGRESQL=false\nLIBRETIME_PUBLIC_URL='https://libretime.example.com'\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The install script will use randomly generated passwords to create the PostgreSQL user, RabbitMQ user and to update the default Icecast passwords. Those passwords will be saved to the configuration files.")),(0,i.kt)("p",null,"Feel free to run ",(0,i.kt)("inlineCode",{parentName:"p"},"./install --help")," to get more details."),(0,i.kt)("h4",{id:"using-hardware-audio-output"},"Using hardware audio output"),(0,i.kt)("p",null,"If you plan to output analog audio directly to a mixing console or transmitter, the user running LibreTime needs to be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"audio")," user group using the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser libretime audio\n")),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Once the installation is completed, edit the ",(0,i.kt)("a",{parentName:"p",href:"/pr-2216/docs/next/admin-manual/setup/configuration"},"configuration file")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/libretime/config.yml")," to fill required information and to match your needs."),(0,i.kt)("p",null,"Next, run the following commands to setup the database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u libretime libretime-api migrate\n")),(0,i.kt)("p",null,"Finally, start the services, and check that they're running properly using the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start libretime.target\n\nsudo systemctl --all --plain | grep libretime\n")),(0,i.kt)("p",null,"Next, continue by ",(0,i.kt)("a",{parentName:"p",href:"#configure"},"configuring your installation"),"."),(0,i.kt)("h2",{id:"using-docker-compose"},"Using docker-compose"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The docker-compose install is still a work in progress and is ",(0,i.kt)("strong",{parentName:"p"},"EXPERIMENTAL"),", breaking changes may occur without notice.")),(0,i.kt)("h3",{id:"download-1"},"Download"),(0,i.kt)("p",null,"Pick the version you want to install:"),(0,i.kt)(r.Z,{language:"bash",mdxType:"CodeBlock"},'echo LIBRETIME_VERSION="',u().version,'" > .env'),(0,i.kt)("p",null,"Download the docker-compose files from the repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Load LIBRETIME_VERSION variable\nsource .env\n\nwget "https://raw.githubusercontent.com/libretime/libretime/$LIBRETIME_VERSION/docker-compose.yml"\nwget "https://raw.githubusercontent.com/libretime/libretime/$LIBRETIME_VERSION/docker/nginx.conf"\nwget "https://raw.githubusercontent.com/libretime/libretime/$LIBRETIME_VERSION/docker/config.yml"\n')),(0,i.kt)("h3",{id:"setup-1"},"Setup"),(0,i.kt)("p",null,"Once the files are downloaded, edit the ",(0,i.kt)("a",{parentName:"p",href:"/pr-2216/docs/next/admin-manual/setup/configuration"},"configuration file")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"./config.yml")," to fill required information and to match your needs."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/config.yml")," configuration file you previously downloaded already contains specific values required by the container setup, you shouldn't change them:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'database:\n  host: "postgres"\nrabbitmq:\n  host: "rabbitmq"\nplayout:\n  liquidsoap_host: "liquidsoap"\nliquidsoap:\n  server_listen_address: "0.0.0.0"\nstream:\n  outputs:\n    .default_icecast_output:\n      host: "icecast"\n'))),(0,i.kt)("p",null,"Next, run the following commands to setup the database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose run --rm api libretime-api migrate\n")),(0,i.kt)("p",null,"Finally, start the services, and check that they're running properly using the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n\ndocker-compose ps\ndocker-compose logs -f\n")),(0,i.kt)("p",null,"Next, continue by ",(0,i.kt)("a",{parentName:"p",href:"#configure"},"configuring your installation"),"."),(0,i.kt)("h2",{id:"configure"},"Configure"),(0,i.kt)("p",null,"Once the setup is completed, log in the interface (with the default user ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," and password ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),"), and make sure to edit the project settings (go to ",(0,i.kt)("strong",{parentName:"p"},"Settings")," > ",(0,i.kt)("strong",{parentName:"p"},"General"),") to match your needs. Important settings are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First day of the week")),(0,i.kt)("h2",{id:"next"},"Next"),(0,i.kt)("p",null,"Once completed, it's recommended to ",(0,i.kt)("a",{parentName:"p",href:"/pr-2216/docs/next/admin-manual/setup/reverse-proxy"},"install a reverse proxy")," to setup SSL termination and secure your installation."))}k.isMDXComponent=!0}}]);