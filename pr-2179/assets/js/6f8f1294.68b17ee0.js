"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9725],{9173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>r});var l=a(7462),n=(a(7294),a(3905));a(1839);const i={title:"How to setup a firewall using UFW"},s=void 0,u={unversionedId:"admin-manual/tutorials/setup-a-firewall-using-ufw",id:"version-3.0.0-beta.1/admin-manual/tutorials/setup-a-firewall-using-ufw",title:"How to setup a firewall using UFW",description:"This tutorials will walk you though the steps required to setup a firewall using UFW.",source:"@site/versioned_docs/version-3.0.0-beta.1/admin-manual/tutorials/setup-a-firewall-using-ufw.md",sourceDirName:"admin-manual/tutorials",slug:"/admin-manual/tutorials/setup-a-firewall-using-ufw",permalink:"/pr-2179/docs/admin-manual/tutorials/setup-a-firewall-using-ufw",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-beta.1/admin-manual/tutorials/setup-a-firewall-using-ufw.md",tags:[],version:"3.0.0-beta.1",frontMatter:{title:"How to setup a firewall using UFW"},sidebar:"tutorialSidebar",previous:{title:"Uninstall",permalink:"/pr-2179/docs/admin-manual/uninstall"},next:{title:"How to setup a static ip using Netplan",permalink:"/pr-2179/docs/admin-manual/tutorials/setup-a-static-ip-using-netplan"}},o={},r=[{value:"1. Install and enable <code>UFW</code>",id:"1-install-and-enable-ufw",level:2},{value:"2. Configure allowed ports",id:"2-configure-allowed-ports",level:2}],p={toc:r};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This tutorials will walk you though the steps required to setup a firewall using ",(0,n.kt)("a",{parentName:"p",href:"https://doc.ubuntu-fr.org/ufw"},"UFW"),"."),(0,n.kt)("h2",{id:"1-install-and-enable-ufw"},"1. Install and enable ",(0,n.kt)("inlineCode",{parentName:"h2"},"UFW")),(0,n.kt)("p",null,"First you need to make sure UFW is installed and enabled:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install ufw\nsudo ufw enable\n")),(0,n.kt)("h2",{id:"2-configure-allowed-ports"},"2. Configure allowed ports"),(0,n.kt)("p",null,"Next, you need to configure the firewall allowed ports:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 22,80,8000/tcp\n")),(0,n.kt)("p",null,"If you plan to use the live stream input endpoint, be sure to open the ",(0,n.kt)("inlineCode",{parentName:"p"},"8001")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"8002")," ports:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 8001,8002/tcp\n")))}d.isMDXComponent=!0}}]);