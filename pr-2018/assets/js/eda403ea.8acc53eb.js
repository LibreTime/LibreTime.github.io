"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=u(a),c=n,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?i.createElement(h,l(l({ref:t},p),{},{components:a})):i.createElement(h,l({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var u=2;u<o;u++)l[u]=a[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54692:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(67294),n=a(39960);const o=e=>{let{version:t,children:a}=e;return i.createElement(n.Z,{to:"https://github.com/libretime/libretime/releases/download/"+t+"/libretime-"+t+".tar.gz"},a)}},44128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=a(87462),n=(a(67294),a(3905)),o=a(92973);const l={title:"LibreTime 3.0.0 alpha 6"},r=void 0,s={unversionedId:"releases/3.0.0-alpha.06",id:"releases/3.0.0-alpha.06",title:"LibreTime 3.0.0 alpha 6",description:"Features",source:"@site/../docs/releases/3.0.0-alpha.06.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.06",permalink:"/pr-2018/docs/next/releases/3.0.0-alpha.06",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/releases/3.0.0-alpha.06.md",tags:[],version:"current",frontMatter:{title:"LibreTime 3.0.0 alpha 6"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 7",permalink:"/pr-2018/docs/next/releases/3.0.0-alpha.07"},next:{title:"LibreTime 3.0.0 alpha 5",permalink:"/pr-2018/docs/next/releases/3.0.0-alpha.05"}},u={},p=[{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Installer Issues",id:"installer-issues",level:3},{value:"Media-Monitor config needs manual removing",id:"media-monitor-config-needs-manual-removing",level:3},{value:"Outdated silan reports unreliable cue in/out information",id:"outdated-silan-reports-unreliable-cue-inout-information",level:3},{value:"Liquidsoap Support",id:"liquidsoap-support",level:3},{value:"Liquidsoap 1.3.0 Patchset (#192)",id:"liquidsoap-130-patchset-192",level:4},{value:"Install old liquidsoap from opam (#192)",id:"install-old-liquidsoap-from-opam-192",level:4},{value:"No watched folder support",id:"no-watched-folder-support",level:3},{value:"No line in support",id:"no-line-in-support",level:3},{value:"Playout won&#39;t work if locale is missing",id:"playout-wont-work-if-locale-is-missing",level:3},{value:"Lack of i18n toolchain is disturbing",id:"lack-of-i18n-toolchain-is-disturbing",level:3},{value:"\ud83d\udcdd Colophon",id:"-colophon",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.ZP,{date:"2018-12-23",version:"3.0.0-alpha.6",mdxType:"ReleaseHead"}),(0,n.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Turn on the podcast album override by default on new installs."),(0,n.kt)("li",{parentName:"ul"},"Ubuntu 18.04 (Bionic) ",(0,n.kt)("strong",{parentName:"li"},"developer")," tooling."),(0,n.kt)("li",{parentName:"ul"},"Collapse advanced configuration in show edit form."),(0,n.kt)("li",{parentName:"ul"},"Clock icon in calendar for autoloading playlists."),(0,n.kt)("li",{parentName:"ul"},"Let user edit podcast name."),(0,n.kt)("li",{parentName:"ul"},"Default to creating dynamic smartblock when creating new smartblocks."),(0,n.kt)("li",{parentName:"ul"},'Move advanced smartblock configuration to collapsed "Advanced options" section.'),(0,n.kt)("li",{parentName:"ul"},'Assume "Y" as answer for questions during installer.')),(0,n.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix sizing for playlist and smart block on shorter screens."),(0,n.kt)("li",{parentName:"ul"},"Increased celery timeout to 1800 seconds (affects podcast downloads and other tasks like things related to the soundcloud integration)."),(0,n.kt)("li",{parentName:"ul"},"remove some obsolete scripts from ",(0,n.kt)("inlineCode",{parentName:"li"},"utils/"),"."),(0,n.kt)("li",{parentName:"ul"},"Fix version check for cases where GitHub is not available or temporarily fails."),(0,n.kt)("li",{parentName:"ul"},'Clarify wording for "Autoloading Playlist" (used to be called "Auto Schedule" or other names).'),(0,n.kt)("li",{parentName:"ul"},'Remove "Record & Rebroadcast" from ui.'),(0,n.kt)("li",{parentName:"ul"},'Fix scrolling issue in "Add Show" dialog.'),(0,n.kt)("li",{parentName:"ul"},"Allow ampersand in smartblock search criteria."),(0,n.kt)("li",{parentName:"ul"},"Fix display of selected tracks in Smartblock criteria."),(0,n.kt)("li",{parentName:"ul"},"Add docs into enriched tarball for packagers."),(0,n.kt)("li",{parentName:"ul"},"Improve filling smartblocks, they should not get overscheduled rather than not getting filled up all the way."),(0,n.kt)("li",{parentName:"ul"},"Remove broken ReCaptcha."),(0,n.kt)("li",{parentName:"ul"},"Fix reading metadata from non-mp3 sources (in podcasts and uploads)."),(0,n.kt)("li",{parentName:"ul"},"Update mutagen to fix some edge cases when reading metadata from files in analyzer."),(0,n.kt)("li",{parentName:"ul"},"Fix shuffling playlists that contain a smart block."),(0,n.kt)("li",{parentName:"ul"},"Remove unused zfdebug from dev environment.")),(0,n.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dropped support for Ubuntu 14.04 (Trusty) as it is end-of-life"),(0,n.kt)("li",{parentName:"ul"},'Remove "Record & Rebroadcast" from ui.')),(0,n.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,n.kt)("p",null,"The following issues may need a workaround for the time being. Please search the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,n.kt)("h3",{id:"installer-issues"},"Installer Issues"),(0,n.kt)("p",null,"The installer is generally a bit unstable, we hope to be able to offer some reasonable packages at some point. Some of the GUI driven parts before the first login are also in a somewhat questionable state, ymmv."),(0,n.kt)("p",null,"For now the installer distro selection is pretty good at auto-detecting your os and usually does an ok job depending on your distro. You should usually not need to pass a --distribution and --release parameter, those are still supported for the time being but their use is not recommended."),(0,n.kt)("p",null,"The ui works best if you don't use it in an opinionated fashion and change just the bare minimal."),(0,n.kt)("p",null,"If you want to skip the installer GUI completely you can configure LibreTime using ",(0,n.kt)("inlineCode",{parentName:"p"},"airtime_mvc/build/airtime.example.conf")," as an template. Due to some python/PHP differences you must remove all comments from the example to use it \ud83d\ude1e. You'll also have to create some folder structures manually and check if the music dir got properly created directly in the database. Referencing a second ",(0,n.kt)("inlineCode",{parentName:"p"},"install -fiap")," install on a non productive system for reference can help with this type of bootstrap."),(0,n.kt)("h3",{id:"media-monitor-config-needs-manual-removing"},"Media-Monitor config needs manual removing"),(0,n.kt)("p",null,"If you are using the ",(0,n.kt)("inlineCode",{parentName:"p"},"install")," script you should most likely remove the ",(0,n.kt)("inlineCode",{parentName:"p"},"[media-monitor]")," config section from your ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.conf")," file to ensure you do not run into the problems described in\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/450"},"https://github.com/libretime/libretime/issues/450"),". We recommend you do this before running the update since there are no known LibreTime releases that depend on the config value."),(0,n.kt)("h3",{id:"outdated-silan-reports-unreliable-cue-inout-information"},"Outdated silan reports unreliable cue in/out information"),(0,n.kt)("p",null,"Out of the box the installer installs a broken, outdated version of silan on some Debian based Platforms (ie. Ubuntu). This affects all distros supported by the installer except Debian testing which has the silan 0.3.3 and CentOS which does not have upstream packages and you may either install from source or use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/radiorabe/centos-rpm-silan"},"0.3.3 packages")," from ",(0,n.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:audio"},"RaBe APEL"),"."),(0,n.kt)("p",null,"Check your version of silan by running ",(0,n.kt)("inlineCode",{parentName:"p"},"silan --version"),". This should report ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.3")," or higher. If not please see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/wiki/Silan-Installation"},"Silan Installation")," wiki page for more details & workarounds."),(0,n.kt)("p",null,"To date silan 0.3.3 or higher is in Debian testing & Ubuntu Bionic. You can check the upstream progress the ",(0,n.kt)("a",{parentName:"p",href:"https://tracker.debian.org/pkg/silan"},"Debian PTS")," and ",(0,n.kt)("a",{parentName:"p",href:"https://launchpad.net/ubuntu/+source/silan"},"Ubuntu launchpad"),". This section will get removed once the package is in stable."),(0,n.kt)("p",null,"tldr: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/libretime/libretime/wiki/Silan-Installation"},"Silan Installation"))),(0,n.kt)("h3",{id:"liquidsoap-support"},"Liquidsoap Support"),(0,n.kt)("p",null,"LibreTime currently only supports liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," out of the box. If you install a current version of liquidsoap ",(0,n.kt)("a",{parentName:"p",href:"https://www.liquidsoap.info/"},"using OPAM")," or through the ",(0,n.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:liquidsoap"},"Rabe Liquidsoap Distribution for CentOS (RaBe LSD)")," you will most likely have liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"1.3.2")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"1.3.3")," installed."),(0,n.kt)("p",null,"#352 reports that liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," can exhibit issues on some Debian based installs. One fix for the issue is to install liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"1.3.0")," and to use the following patching steps. Kyle from silan fame is taking the needed steps to get liquidsoap maintained again in Debian so we expect the situation to improve over time."),(0,n.kt)("p",null,"You can check your liquidsoap version by running ",(0,n.kt)("inlineCode",{parentName:"p"},"liquidsoap --version"),"."),(0,n.kt)("p",null,"If you already have liquidsoap >= 1.3.0 you have a couple of options."),(0,n.kt)("h4",{id:"liquidsoap-130-patchset-192"},"Liquidsoap 1.3.0 Patchset (#192)"),(0,n.kt)("p",null,"You can patch your installation of LibreTime to support liquidsoap 1.3.0."),(0,n.kt)("p",null,"An up to date patch is available through GitHub and can be applied to an unpacked tarball as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd libretime-3.0.0-alpha.6/\ncurl -L https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0.patch | patch -p1\n")),(0,n.kt)("p",null,"Git users can pull from the branch at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0"},"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0")," directly."),(0,n.kt)("h4",{id:"install-old-liquidsoap-from-opam-192"},"Install old liquidsoap from opam (#192)"),(0,n.kt)("p",null,"You can downgrade an OPAM install of liquidsoap by running the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'opam install "liquidsoap<1.3.0"\n')),(0,n.kt)("h3",{id:"no-watched-folder-support"},"No watched folder support"),(0,n.kt)("p",null,"Currently LibreTime does not support watching folders. Uploading files through the web interface works fine and can be automated via a REST API. Re-implementing watched folder support is on the roadmap. Please consider helping out with the code to help speed things along if you want to use the feature."),(0,n.kt)("h3",{id:"no-line-in-support"},"No line in support"),(0,n.kt)("p",null,"This feature went missing from LibreTime due to the fact that we based our code off of the saas-dev branch of legacy upstream and support for recording hasn't been ported to the new airtime analyzer ingest system. #42 currently tracks the progress being made on line in recording."),(0,n.kt)("h3",{id:"playout-wont-work-if-locale-is-missing"},"Playout won't work if locale is missing"),(0,n.kt)("p",null,"Some minimal OS installs do not have a default locale configured. This only seems to affect some VPS installs as they often do not have a locale setup in the default images provided."),(0,n.kt)("p",null,"You can set up the locale using a combination of the following commands. You might also want to consult the documentation of your VPS provider as it may contain an official way to set up locales when provisioning a VPS."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Set locale using systemds localectl\nlocalectl set-locale LANG="en_US.utf8"\n')),(0,n.kt)("p",null,"These instructions do not seem to work on all Debian based distros so you might need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"update-locale")," as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#Purge all locales but en_US.UTF-8\nsudo locale-gen --purge en_US.UTF-8\n#Populate LANGUAGE=\nsudo update-locale LANGUAGE="en_US.UTF-8"\n')),(0,n.kt)("h3",{id:"lack-of-i18n-toolchain-is-disturbing"},"Lack of i18n toolchain is disturbing"),(0,n.kt)("p",null,"Some translations might miss the tarball. They didn't get lost but the build chain needs fixing. Work is in #301 and additional work is needed as it has become clear that we probably want to support bidirectional translation syncing with zanata."),(0,n.kt)("h2",{id:"-colophon"},"\ud83d\udcdd Colophon"),(0,n.kt)("p",null,"I would like to use this space to extend a warm welcome to our new Maintainers @paddatrapper, @frecuencialibre and @ned-kelly. We are happy to have you on board. Thank you very much for helping maintain LibreTime \u2764\ufe0f"))}m.isMDXComponent=!0},92973:(e,t,a)=>{a.d(t,{ZP:()=>r});var i=a(87462),n=(a(67294),a(3905)),o=a(54692);const l={toc:[]};function r(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This version was released the ",(0,n.kt)("strong",null,a.date),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please report new issues and/or feature requests in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,n.kt)("p",{parentName:"admonition"},"Join our ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,n.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion.")),(0,n.kt)("p",null,"The full tarball for the ",(0,n.kt)("code",null,a.version)," release of LibreTime is available ",(0,n.kt)(o.Z,{version:a.version,mdxType:"TarballLink"},"here"),"."))}r.isMDXComponent=!0}}]);