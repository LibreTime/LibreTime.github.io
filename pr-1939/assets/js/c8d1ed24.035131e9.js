"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5406],{4692:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(7294),n=a(9960);const o=e=>{let{version:t,children:a}=e;return i.createElement(n.Z,{to:`https://github.com/libretime/libretime/releases/download/${t}/libretime-${t}.tar.gz`},a)}},1382:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=a(7462),n=(a(7294),a(3905)),o=(a(1839),a(2309));const l={title:"LibreTime 3.0.0 alpha 9"},r=void 0,s={unversionedId:"releases/3.0.0-alpha.09",id:"version-3.0.0-beta.0/releases/3.0.0-alpha.09",title:"LibreTime 3.0.0 alpha 9",description:"Contributors",source:"@site/versioned_docs/version-3.0.0-beta.0/releases/3.0.0-alpha.09.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.09",permalink:"/pr-1939/docs/releases/3.0.0-alpha.09",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-beta.0/releases/3.0.0-alpha.09.md",tags:[],version:"3.0.0-beta.0",frontMatter:{title:"LibreTime 3.0.0 alpha 9"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 10",permalink:"/pr-1939/docs/releases/3.0.0-alpha.10"},next:{title:"LibreTime 3.0.0 alpha 8",permalink:"/pr-1939/docs/releases/3.0.0-alpha.08"}},u={},p=[{value:"\ud83d\udc96 Contributors",id:"-contributors",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Installer Issues",id:"installer-issues",level:3},{value:"Media-Monitor config needs manual removing",id:"media-monitor-config-needs-manual-removing",level:3},{value:"Outdated silan reports unreliable cue in/out information",id:"outdated-silan-reports-unreliable-cue-inout-information",level:3},{value:"No watched folder support",id:"no-watched-folder-support",level:3},{value:"No line in support",id:"no-line-in-support",level:3},{value:"Playout won&#39;t work if locale is missing",id:"playout-wont-work-if-locale-is-missing",level:3},{value:"Lack of i18n toolchain is disturbing",id:"lack-of-i18n-toolchain-is-disturbing",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.ZP,{date:"2021-01-05",version:"3.0.0-alpha.9",mdxType:"ReleaseHead"}),(0,n.kt)("h2",{id:"-contributors"},"\ud83d\udc96 Contributors"),(0,n.kt)("p",null,"The LibreTime project wants to thank the following contributors for contributing to this release:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@caveman99"),(0,n.kt)("li",{parentName:"ul"},"@codenift"),(0,n.kt)("li",{parentName:"ul"},"@farggus"),(0,n.kt)("li",{parentName:"ul"},"glibloc"),(0,n.kt)("li",{parentName:"ul"},"@hairmare"),(0,n.kt)("li",{parentName:"ul"},"@jeromelebleu"),(0,n.kt)("li",{parentName:"ul"},"@kmahelona"),(0,n.kt)("li",{parentName:"ul"},"@monkeywithacupcake"),(0,n.kt)("li",{parentName:"ul"},"@Numerico"),(0,n.kt)("li",{parentName:"ul"},"@paddatrapper"),(0,n.kt)("li",{parentName:"ul"},"@q84fh"),(0,n.kt)("li",{parentName:"ul"},"@rjhelms"),(0,n.kt)("li",{parentName:"ul"},"@Robbt"),(0,n.kt)("li",{parentName:"ul"},"@samkitk"),(0,n.kt)("li",{parentName:"ul"},"@teotikalki"),(0,n.kt)("li",{parentName:"ul"},"@valerio"),(0,n.kt)("li",{parentName:"ul"},"@xabispacebiker"),(0,n.kt)("li",{parentName:"ul"},"@zklosko")),(0,n.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Display artwork from ID3 tags if available"),(0,n.kt)("li",{parentName:"ul"},"Expose track metadata or artwork in new API endpoint"),(0,n.kt)("li",{parentName:"ul"},'"Track Type" feature to classify tracks for auto-DJ'),(0,n.kt)("li",{parentName:"ul"},"support liquidsoap versions 1.1.1, 1.3.x and 1.4.x out of the box"),(0,n.kt)("li",{parentName:"ul"},"Improved French translation"),(0,n.kt)("li",{parentName:"ul"},"Updated jquery.cookie to js.cookie"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"forceSSL")," config to support TLS on non default ports"),(0,n.kt)("li",{parentName:"ul"},"macOS Catalina support for Vagrant"),(0,n.kt)("li",{parentName:"ul"},"CentOS 8 Support"),(0,n.kt)("li",{parentName:"ul"},"Installer creates a secure icecast password on first run"),(0,n.kt)("li",{parentName:"ul"},"Support Multipass as an alternative to Vagrant dev environments")),(0,n.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Fix using outro playlist in "repeat until full" smartblock'),(0,n.kt)("li",{parentName:"ul"},"Switch to reliable message consumption to prevent RabbitMQ connections getting dropped side-effects"),(0,n.kt)("li",{parentName:"ul"},"Replace absolute css and js URLs with relative URLs"),(0,n.kt)("li",{parentName:"ul"},"remove legacy upstream conversion tracking, provisioning, and billing code"),(0,n.kt)("li",{parentName:"ul"},"disabled version notification to avoid confusion, users can check current version in Settings > Status."),(0,n.kt)("li",{parentName:"ul"},"Swap out MusesPlayer for HTML5Player for playout"),(0,n.kt)("li",{parentName:"ul"},"Make lots of untranslatable strings translatable")),(0,n.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,n.kt)("p",null,"The following issues may need a workaround for the time being. Please search the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,n.kt)("h3",{id:"installer-issues"},"Installer Issues"),(0,n.kt)("p",null,"The installer is generally a bit unstable, we hope to be able to offer some reasonable packages at some point. Some of the GUI driven parts before the first login are also in a somewhat questionable state, ymmv."),(0,n.kt)("p",null,"For now the installer distro selection is pretty good at auto-detecting your os and usually does an ok job depending on your distro. You should usually not need to pass a --distribution and --release parameter, those are still supported for the time being but their use is not recommended."),(0,n.kt)("p",null,"The UI works best if you don't use it in an opinionated fashion and change just the bare minimal."),(0,n.kt)("p",null,"If you want to skip the installer GUI completely you can configure LibreTime using ",(0,n.kt)("inlineCode",{parentName:"p"},"airtime_mvc/build/airtime.example.conf")," as an template. Due to some python/PHP differences you must remove all comments from the example to use it \ud83d\ude1e. You'll also have to create some folder structures manually and check if the music dir got properly created directly in the database. Referencing a second ",(0,n.kt)("inlineCode",{parentName:"p"},"install -fiap")," install on a non productive system for reference can help with this type of bootstrap.\nf"),(0,n.kt)("h3",{id:"media-monitor-config-needs-manual-removing"},"Media-Monitor config needs manual removing"),(0,n.kt)("p",null,"If you are using the ",(0,n.kt)("inlineCode",{parentName:"p"},"install")," script you should most likely remove the ",(0,n.kt)("inlineCode",{parentName:"p"},"[media-monitor]")," config section from your ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.conf")," file to ensure you do not run into the problems described in\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/450"},"https://github.com/libretime/libretime/issues/450"),". We recommend you do this before running the update since there are no known LibreTime releases that depend on the config value."),(0,n.kt)("h3",{id:"outdated-silan-reports-unreliable-cue-inout-information"},"Outdated silan reports unreliable cue in/out information"),(0,n.kt)("p",null,"Out of the box the installer installs a broken, outdated version of silan (0.3.2) on some Ubuntu 16.04. CentOS does not have upstream packages and you may either install from source or use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/radiorabe/centos-rpm-silan"},"0.3.3 packages")," from ",(0,n.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:audio"},"RaBe APEL"),"."),(0,n.kt)("p",null,"Check your version of silan by running ",(0,n.kt)("inlineCode",{parentName:"p"},"silan --version"),". This should report ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.3")," or higher. If not please see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/wiki/Silan-Installation"},"Silan Installation")," wiki page for more details & workarounds."),(0,n.kt)("p",null,"tldr: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/libretime/libretime/wiki/Silan-Installation"},"Silan Installation"))),(0,n.kt)("h3",{id:"no-watched-folder-support"},"No watched folder support"),(0,n.kt)("p",null,"Currently LibreTime does not support watching folders. Uploading files through the web interface works fine and can be automated via a REST API. Re-implementing watched folder support is on the roadmap. Please consider helping out with the code to help speed things along if you want to use the feature."),(0,n.kt)("h3",{id:"no-line-in-support"},"No line in support"),(0,n.kt)("p",null,"This feature went missing from LibreTime due to the fact that we based our code off of the saas-dev branch of legacy upstream and support for recording hasn't been ported to the new airtime analyzer ingest system. #42 currently tracks the progress being made on line in recording."),(0,n.kt)("h3",{id:"playout-wont-work-if-locale-is-missing"},"Playout won't work if locale is missing"),(0,n.kt)("p",null,"Some minimal OS installs do not have a default locale configured. This only seems to affect some VPS installs as they often do not have a locale setup in the default images provided."),(0,n.kt)("p",null,"You can set up the locale using a combination of the following commands. You might also want to consult the documentation of your VPS provider as it may contain an official way to set up locales when provisioning a VPS."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Set locale using systemds localectl\nlocalectl set-locale LANG="en_US.utf8"\n')),(0,n.kt)("p",null,"These instructions do not seem to work on all Debian based distros so you might need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"update-locale")," as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#Purge all locales but en_US.UTF-8\nsudo locale-gen --purge en_US.UTF-8\n#Populate LANGUAGE=\nsudo update-locale LANGUAGE="en_US.UTF-8"\n')),(0,n.kt)("h3",{id:"lack-of-i18n-toolchain-is-disturbing"},"Lack of i18n toolchain is disturbing"),(0,n.kt)("p",null,"Some translations might miss the tarball. They didn't get lost, but the build chain needs fixing. Work is in #301 and additional work is needed as it has become clear that we probably want to support bidirectional translation syncing with zanata."))}d.isMDXComponent=!0},2309:(e,t,a)=>{a.d(t,{ZP:()=>r});var i=a(7462),n=(a(7294),a(3905)),o=(a(1839),a(4692));const l={toc:[]};function r(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This version was released the ",(0,n.kt)("strong",null,a.date),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please report new issues and/or feature requests in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,n.kt)("p",{parentName:"admonition"},"Join our ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,n.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion.")),(0,n.kt)("p",null,"The full tarball for the ",(0,n.kt)("code",null,a.version)," release of LibreTime is available ",(0,n.kt)(o.Z,{version:a.version,mdxType:"TarballLink"},"here"),"."))}r.isMDXComponent=!0}}]);