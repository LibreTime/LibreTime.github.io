"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4821],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,v=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(v,l(l({ref:e},s),{},{components:n})):a.createElement(v,l({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33525:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"Development environment"},l=void 0,o={unversionedId:"developer-manual/development/environment",id:"developer-manual/development/environment",title:"Development environment",description:"Vagrant",source:"@site/../docs/developer-manual/development/environment.md",sourceDirName:"developer-manual/development",slug:"/developer-manual/development/environment",permalink:"/pr-2018/docs/next/developer-manual/development/environment",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/developer-manual/development/environment.md",tags:[],version:"current",frontMatter:{title:"Development environment"},sidebar:"tutorialSidebar",previous:{title:"Database schema creation and migrations",permalink:"/pr-2018/docs/next/developer-manual/design/database-migrations"},next:{title:"Releases",permalink:"/pr-2018/docs/next/developer-manual/development/releases"}},p={},u=[{value:"Vagrant",id:"vagrant",level:2},{value:"Installing Libvirt",id:"installing-libvirt",level:3},{value:"Starting LibreTime Vagrant",id:"starting-libretime-vagrant",level:3},{value:"Alternative OS installations",id:"alternative-os-installations",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Multipass",id:"multipass",level:2},{value:"Cloud-init options in cloud-init.yaml",id:"cloud-init-options-in-cloud-inityaml",level:3}],s={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vagrant"},"Vagrant"),(0,r.kt)("p",null,"To use Vagrant, you need to install a virtualization engine: ",(0,r.kt)("a",{parentName:"p",href:"https://www.virtualbox.org"},"VirtualBox")," or Libvirt. The ","[vagrant-vbguest]"," package on Github can help maintain guest extensions on host systems using VirtualBox."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you try run a libvirt provided box after using a VirtualBox one, you will receive an\nerror:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"Error while activating network:\nCall to virNetworkCreate failed: internal error: Network is already in use by interface vboxnet0.\n")),(0,r.kt)("p",{parentName:"admonition"},"This is fixed by stopping virtualbox and re-creating the vagrant box:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop virtualbox\nvagrant destroy bionic\nvagrant up bionic --provider=libvirt\n"))),(0,r.kt)("h3",{id:"installing-libvirt"},"Installing Libvirt"),(0,r.kt)("p",null,"On Debian and Ubuntu:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Vagrant")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install vagrant vagrant-libvirt libvirt-daemon-system vagrant-mutate libvirt-dev\nsudo usermod -aG libvirt $USER\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Reboot your computer, and then run")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant box add bento/ubuntu-18.04 --provider=virtualbox\nvagrant mutate bento/ubuntu-18.04 libvirt\nvagrant up bionic --provider=libvirt\n")),(0,r.kt)("p",null,"On other distributions, you will need to install ",(0,r.kt)("a",{parentName:"p",href:"https://libvirt.org/"},"libvirt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"vagrant-mutate")," and then run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant plugin install vagrant-libvirt\nsudo usermod -a -G libvirt $USER\n\n# Reboot\n\nvagrant plugin install vagrant-mutate\nvagrant box fetch bento/ubuntu-18.04\nvagrant mutate bento/ubuntu-18.04 libvirt\nvagrant up bionic --provider=libvirt\n")),(0,r.kt)("h3",{id:"starting-libretime-vagrant"},"Starting LibreTime Vagrant"),(0,r.kt)("p",null,"To get started you clone the repo and run ",(0,r.kt)("inlineCode",{parentName:"p"},"vagrant up"),". The command accepts a parameter to\nchange the default provider if you have multiple installed. This can be done by appending\n",(0,r.kt)("inlineCode",{parentName:"p"},"--provider=virtualbox")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--provider=libvirt")," as applicable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/libretime/libretime\ncd libretime\nvagrant up bionic\n")),(0,r.kt)("p",null,"If everything works out, you will find LibreTime on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"port 8080"),"\nand Icecast on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000"},"port 8000"),"."),(0,r.kt)("p",null,"Once you reach the web setup GUI you can click through it using the default values. To\nconnect to the vagrant machine you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"vagrant ssh bionic")," in the libretime\ndirectory."),(0,r.kt)("h3",{id:"alternative-os-installations"},"Alternative OS installations"),(0,r.kt)("p",null,"With the above instructions LibreTime is installed on Ubuntu Bionic. The Vagrant setup\noffers the option to choose a different operation system according to you needs."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OS"),(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Debian 10"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vagrant up buster")),(0,r.kt)("td",{parentName:"tr",align:null},"Install on Debian Buster.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Debian 11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vagrant up bullseye")),(0,r.kt)("td",{parentName:"tr",align:null},"Install on Debian Bullseye.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 18.04"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vagrant up bionic")),(0,r.kt)("td",{parentName:"tr",align:null},"Install on Ubuntu Bionic Beaver.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vagrant up focal")),(0,r.kt)("td",{parentName:"tr",align:null},"Install on Ubuntu Focal Fossa.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CentOS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vagrant up centos")),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS 8 with native systemd support and activated SELinux.")))),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If anything fails during the initial provisioning step you can try running ",(0,r.kt)("inlineCode",{parentName:"p"},"vagrant provision"),"\nto re-run the installer."),(0,r.kt)("p",null,"If you only want to re-run parts of the installer, use ",(0,r.kt)("inlineCode",{parentName:"p"},"--provision-with $step"),". The\nsupported steps are ",(0,r.kt)("inlineCode",{parentName:"p"},"prepare")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"install"),"."),(0,r.kt)("h2",{id:"multipass"},"Multipass"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://multipass.run"},"Multipass")," is a tool for easily setting up Ubuntu VMs on Windows, Mac, and Linux.\nSimilar to Docker, Multipass works through a CLI. To use, clone this repo and then create a new Multipass VM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/libretime/libretime\ncd libretime\nmultipass launch bionic -n ltTEST --cloud-init cloud-init.yaml\nmultipass shell ltTEST\n")),(0,r.kt)("p",null,"Multipass isn't currently able to do an automated install from the cloud-init script.\nAfter you enter the shell for the first time, you will still need to ",(0,r.kt)("a",{parentName:"p",href:"/pr-2018/docs/next/admin-manual/setup/install"},"run the LibreTime installer"),"."),(0,r.kt)("p",null,"The IP address of your new VM can be found by running ",(0,r.kt)("inlineCode",{parentName:"p"},"multipass list"),". Copy and paste it into your web browser to access the LibreTime interface and complete the setup wizard."),(0,r.kt)("p",null,"You can stop the VM with ",(0,r.kt)("inlineCode",{parentName:"p"},"multipass stop ltTEST")," and restart with ",(0,r.kt)("inlineCode",{parentName:"p"},"multipass start ltTEST"),".\nIf you want to delete the image and start again, run ",(0,r.kt)("inlineCode",{parentName:"p"},"multipass delete ltTEST && multipass purge"),"."),(0,r.kt)("h3",{id:"cloud-init-options-in-cloud-inityaml"},"Cloud-init options in cloud-init.yaml"),(0,r.kt)("p",null,"You may wish to change the below fields as per your location."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'timezone: America/New York # change as needed\nntp:\n  pools: ["north-america.pool.ntp.org"]\n  servers: ["0.north-america.pool.ntp.org", "0.pool.ntp.org"]\n')))}d.isMDXComponent=!0}}]);