"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[756],{4692:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(7294),n=a(9960);const o=e=>{let{version:t,children:a}=e;return i.createElement(n.Z,{to:`https://github.com/libretime/libretime/releases/download/${t}/libretime-${t}.tar.gz`},a)}},9035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=a(7462),n=(a(7294),a(3905)),o=(a(1839),a(2973));const l={title:"LibreTime 3.0.0 alpha 7"},r=void 0,s={unversionedId:"releases/3.0.0-alpha.07",id:"releases/3.0.0-alpha.07",title:"LibreTime 3.0.0 alpha 7",description:"Contributors",source:"@site/../docs/releases/3.0.0-alpha.07.md",sourceDirName:"releases",slug:"/releases/3.0.0-alpha.07",permalink:"/pr-2216/docs/next/releases/3.0.0-alpha.07",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/releases/3.0.0-alpha.07.md",tags:[],version:"current",frontMatter:{title:"LibreTime 3.0.0 alpha 7"},sidebar:"tutorialSidebar",previous:{title:"LibreTime 3.0.0 alpha 8",permalink:"/pr-2216/docs/next/releases/3.0.0-alpha.08"},next:{title:"LibreTime 3.0.0 alpha 6",permalink:"/pr-2216/docs/next/releases/3.0.0-alpha.06"}},u={},p=[{value:"\ud83d\udc96 Contributors",id:"-contributors",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"Deprecation of Debian 8 (Jessie)",id:"deprecation-of-debian-8-jessie",level:3},{value:"\u26a0\ufe0f Known issues",id:"\ufe0f-known-issues",level:2},{value:"Installer Issues",id:"installer-issues",level:3},{value:"Media-Monitor config needs manual removing",id:"media-monitor-config-needs-manual-removing",level:3},{value:"Outdated silan reports unreliable cue in/out information",id:"outdated-silan-reports-unreliable-cue-inout-information",level:3},{value:"Liquidsoap Support",id:"liquidsoap-support",level:3},{value:"Liquidsoap 1.3.0 Patchset (#192)",id:"liquidsoap-130-patchset-192",level:4},{value:"Install old liquidsoap from opam (#192)",id:"install-old-liquidsoap-from-opam-192",level:4},{value:"No watched folder support",id:"no-watched-folder-support",level:3},{value:"No line in support",id:"no-line-in-support",level:3},{value:"Playout won&#39;t work if locale is missing",id:"playout-wont-work-if-locale-is-missing",level:3},{value:"Lack of i18n toolchain is disturbing",id:"lack-of-i18n-toolchain-is-disturbing",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.ZP,{date:"2019-04-22",version:"3.0.0-alpha.7",mdxType:"ReleaseHead"}),(0,n.kt)("h2",{id:"-contributors"},"\ud83d\udc96 Contributors"),(0,n.kt)("p",null,"The LibreTime project wants to thank the following contributors for contributing to this release:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@robbt"),(0,n.kt)("li",{parentName:"ul"},"@frecuencialibre"),(0,n.kt)("li",{parentName:"ul"},"@detobate"),(0,n.kt)("li",{parentName:"ul"},"@greenjon"),(0,n.kt)("li",{parentName:"ul"},"@xabispacebiker"),(0,n.kt)("li",{parentName:"ul"},"@mikeopensauce"),(0,n.kt)("li",{parentName:"ul"},"@paddatrapper"),(0,n.kt)("li",{parentName:"ul"},"@hairmare"),(0,n.kt)("li",{parentName:"ul"},"@ryanrain")),(0,n.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set default focus to search field on library page."),(0,n.kt)("li",{parentName:"ul"},"PHP 7.2 and 7.3 compatibility (for Ubuntu 18.04.1 LTS (Bionic Beaver) and other modern distros)"),(0,n.kt)("li",{parentName:"ul"},'"Podcast Album Override" is now "Podcast Metadata Override " and additionally overrides the track title with the title from the RSS feed. The artist field is set to the podcast name in LibreTime.'),(0,n.kt)("li",{parentName:"ul"},"Allowed users to customize the title of podcasts"),(0,n.kt)("li",{parentName:"ul"},"Disabled the creation of smartblocks and playlists for new podcasts by default and added a generate button under the edit podcast tab"),(0,n.kt)("li",{parentName:"ul"},"Better libvirt integration in Vagrant setup."),(0,n.kt)("li",{parentName:"ul"},"Debian 11 (Buster) support"),(0,n.kt)("li",{parentName:"ul"},"Add columns for uploaded and genre to default library view, sorts it by uploaded and removes album column by default"),(0,n.kt)("li",{parentName:"ul"},"Add more details to the information returned by the API ",(0,n.kt)("inlineCode",{parentName:"li"},"onAirLightAction")," call"),(0,n.kt)("li",{parentName:"ul"},"Update Spanish translations"),(0,n.kt)("li",{parentName:"ul"},"Allow admins to edit the owner of a track"),(0,n.kt)("li",{parentName:"ul"},"Added system-wide intro and outro playlists for autoloading playlists"),(0,n.kt)("li",{parentName:"ul"},"Added show-source info to live-info-v2 API"),(0,n.kt)("li",{parentName:"ul"},"Update much of the documentation"),(0,n.kt)("li",{parentName:"ul"},"Allow program managers to view listeners statistics")),(0,n.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix DOS line-endings in vendorized PHP dependencies for packaging."),(0,n.kt)("li",{parentName:"ul"},"Fix overlapping show names if show doesn't fit in calendar."),(0,n.kt)("li",{parentName:"ul"},"Fall back to treating file as MP3 if it isn't recognized by mutagen."),(0,n.kt)("li",{parentName:"ul"},"Remove defunct support-setting page."),(0,n.kt)("li",{parentName:"ul"},"Remove legacy AAC code, fix AAC support for SHOUTcast."),(0,n.kt)("li",{parentName:"ul"},"Display Settings menu for all users."),(0,n.kt)("li",{parentName:"ul"},'Make "Time Remaining" Smartblock work in Playlist.'),(0,n.kt)("li",{parentName:"ul"},"Fix non-audio enclosure crash when importing badly formed podcast feeds"),(0,n.kt)("li",{parentName:"ul"},"Fix flac files not playing out"),(0,n.kt)("li",{parentName:"ul"},"Fix 500 error when making API call ",(0,n.kt)("inlineCode",{parentName:"li"},"onAirLightAction")),(0,n.kt)("li",{parentName:"ul"},"Fix warning message shown in ",(0,n.kt)("inlineCode",{parentName:"li"},"schedule")," API call"),(0,n.kt)("li",{parentName:"ul"},"Fix bug where many empty playlists were created when using autoloading"),(0,n.kt)("li",{parentName:"ul"},"Passed show variable to smartblocks loaded via playlist to fix time remaining smartblocks with autoloading playlists."),(0,n.kt)("li",{parentName:"ul"},"Restore top right user setting link and logout link to UI"),(0,n.kt)("li",{parentName:"ul"},"Fix an unnecessary type conversion to seconds that caused errors with PHP 7.2"),(0,n.kt)("li",{parentName:"ul"},"Fix import errors on podcast episodes with long descriptions"),(0,n.kt)("li",{parentName:"ul"},"Fix issue with multiple time remaining smartblocks in a single playlist not detecting remaining time correctly"),(0,n.kt)("li",{parentName:"ul"},"Fix occasional empty administration page due to null previous file reference")),(0,n.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,n.kt)("h3",{id:"deprecation-of-debian-8-jessie"},"Deprecation of Debian 8 (Jessie)"),(0,n.kt)("p",null,"This info is an early warning that we're deprecating a major os version."),(0,n.kt)("p",null,"Debian 9 (Stretch) is now available and Jessie is EOL since June 2018."),(0,n.kt)("h2",{id:"\ufe0f-known-issues"},"\u26a0\ufe0f Known issues"),(0,n.kt)("p",null,"The following issues may need a workaround for the time being. Please search the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"issues")," before reporting problems not listed below."),(0,n.kt)("h3",{id:"installer-issues"},"Installer Issues"),(0,n.kt)("p",null,"The installer is generally a bit unstable, we hope to be able to offer some reasonable packages at some point. Some of the GUI driven parts before the first login are also in a somewhat questionable state."),(0,n.kt)("p",null,"For now the installer distro selection is pretty good at auto detecting your os and usually does an ok job depending on your distro. You should usually not need to pass a --distribution and --release parameter, those are still supported for the time being but their use isn't recommended."),(0,n.kt)("p",null,"The UI works best if you don't use it in an opinionated fashion and change just the bare minimal."),(0,n.kt)("p",null,"If you want to skip the installer GUI completely you can configure LibreTime using ",(0,n.kt)("inlineCode",{parentName:"p"},"airtime_mvc/build/airtime.example.conf")," as an template. Due to some python/PHP differences you must remove all comments from the example to use it \ud83d\ude1e. You'll also have to create some folder structures manually and check if the music dir got properly created directly in the database. Referencing a second ",(0,n.kt)("inlineCode",{parentName:"p"},"install -fiap")," install on a non productive system for reference can help with this type of bootstrap."),(0,n.kt)("h3",{id:"media-monitor-config-needs-manual-removing"},"Media-Monitor config needs manual removing"),(0,n.kt)("p",null,"If you are using the ",(0,n.kt)("inlineCode",{parentName:"p"},"install")," script you should most likely remove the ",(0,n.kt)("inlineCode",{parentName:"p"},"[media-monitor]")," config section from your ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/airtime/airtime.conf")," file to ensure you don't run into the problems described in\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/450"},"https://github.com/libretime/libretime/issues/450"),". We recommend you do this before running the update since there are no known LibreTime releases that depend on the config value."),(0,n.kt)("h3",{id:"outdated-silan-reports-unreliable-cue-inout-information"},"Outdated silan reports unreliable cue in/out information"),(0,n.kt)("p",null,"Out of the box the installer installs a broken, outdated version of silan (0.3.2) on some Debian based Platforms (ie. Ubuntu). This affects Ubuntu 16.04, Debian Jessie and Debian Stretch. CentOS doesn't have upstream packages and you may either install from source or use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/radiorabe/centos-rpm-silan"},"0.3.3 packages")," from ",(0,n.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:audio"},"RaBe APEL"),"."),(0,n.kt)("p",null,"Check your version of silan by running ",(0,n.kt)("inlineCode",{parentName:"p"},"silan --version"),". This should report ",(0,n.kt)("inlineCode",{parentName:"p"},"0.3.3")," or higher. If not please see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/wiki/Silan-Installation"},"Silan Installation")," wiki page for more details & workarounds."),(0,n.kt)("p",null,"To date silan 0.3.3 or higher is in Debian testing & Ubuntu Bionic. You can check the upstream progress the ",(0,n.kt)("a",{parentName:"p",href:"https://tracker.debian.org/pkg/silan"},"Debian PTS")," and ",(0,n.kt)("a",{parentName:"p",href:"https://launchpad.net/ubuntu/+source/silan"},"Ubuntu launchpad"),". This section will get removed once the package is in stable."),(0,n.kt)("p",null,"tldr: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/libretime/libretime/wiki/Silan-Installation"},"Silan Installation"))),(0,n.kt)("h3",{id:"liquidsoap-support"},"Liquidsoap Support"),(0,n.kt)("p",null,"LibreTime currently only supports liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," out of the box. If you install a current version of liquidsoap ",(0,n.kt)("a",{parentName:"p",href:"https://www.liquidsoap.info/"},"using OPAM")," or through the ",(0,n.kt)("a",{parentName:"p",href:"https://build.opensuse.org/project/show/home:radiorabe:liquidsoap"},"Rabe Liquidsoap Distribution for CentOS (RaBe LSD)")," you will most likely have liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"1.3.2")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"1.3.3")," installed."),(0,n.kt)("p",null,"#352 reports that liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"< 1.3.0")," can exhibit issues on Debian Stretch installs. One fix for the issue is to install liquidsoap ",(0,n.kt)("inlineCode",{parentName:"p"},"1.3.0")," and to use the following patching steps."),(0,n.kt)("p",null,"You can check your liquidsoap version by running ",(0,n.kt)("inlineCode",{parentName:"p"},"liquidsoap --version"),"."),(0,n.kt)("p",null,"If you already have liquidsoap >= 1.3.0 you have a couple of options."),(0,n.kt)("h4",{id:"liquidsoap-130-patchset-192"},"Liquidsoap 1.3.0 Patchset (#192)"),(0,n.kt)("p",null,"You can patch your installation of LibreTime to support liquidsoap 1.3.0."),(0,n.kt)("p",null,"An up to date patch is available through GitHub and can be applied to an unpacked tarball as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd libretime-3.0.0-alpha.7/\ncurl -L https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0.patch | patch -p1\n")),(0,n.kt)("p",null,"Git users can pull from the branch at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0"},"https://github.com/libretime/libretime/compare/main...radiorabe:feature/liquidsoap-1.3.0")," directly."),(0,n.kt)("h4",{id:"install-old-liquidsoap-from-opam-192"},"Install old liquidsoap from opam (#192)"),(0,n.kt)("p",null,"You can downgrade an OPAM install of liquidsoap by running the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'opam install "liquidsoap<1.3.0"\n')),(0,n.kt)("h3",{id:"no-watched-folder-support"},"No watched folder support"),(0,n.kt)("p",null,"Currently LibreTime doesn't support watching folders. Uploading files through the web interface works fine and can be automated via a REST API. Re-implementing watched folder support is on the roadmap. Please consider helping out with the code to help speed things along if you want to use the feature."),(0,n.kt)("h3",{id:"no-line-in-support"},"No line in support"),(0,n.kt)("p",null,"This feature went missing from LibreTime due to the fact that we based our code off of the saas-dev branch of legacy upstream and support for recording hasn't been ported to the new airtime analyzer ingest system. #42 currently tracks the progress being made on line in recording."),(0,n.kt)("h3",{id:"playout-wont-work-if-locale-is-missing"},"Playout won't work if locale is missing"),(0,n.kt)("p",null,"Some minimal OS installs don't have a default locale configured. This only seems to affect some VPS installs as they often don't have a locale setup in the default images provided."),(0,n.kt)("p",null,"You can set up the locale using a combination of the following commands. You might also want to consult the documentation of your VPS provider as it may contain an official way to set up locales when provisioning a VPS."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Set locale using systemds localectl\nlocalectl set-locale LANG="en_US.utf8"\n')),(0,n.kt)("p",null,"These instructions don't seem to work on all Debian based distros so you might need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"update-locale")," as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'#Purge all locales but en_US.UTF-8\nsudo locale-gen --purge en_US.UTF-8\n#Populate LANGUAGE=\nsudo update-locale LANGUAGE="en_US.UTF-8"\n')),(0,n.kt)("h3",{id:"lack-of-i18n-toolchain-is-disturbing"},"Lack of i18n toolchain is disturbing"),(0,n.kt)("p",null,"Some translations might miss the tarball. They didn't get lost, but the build chain needs fixing. Work is in #301 and additional work is needed as it has become clear that we probably want to support bidirectional translation syncing with zanata."))}m.isMDXComponent=!0},2973:(e,t,a)=>{a.d(t,{ZP:()=>r});var i=a(7462),n=(a(7294),a(3905)),o=(a(1839),a(4692));const l={toc:[]};function r(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This version was released the ",(0,n.kt)("strong",null,a.date),"."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please report new issues and/or feature requests in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,n.kt)("p",{parentName:"admonition"},"For general discussion or if you need help, you can join the ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," forum or chat on the ",(0,n.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," server.")),(0,n.kt)("p",null,"The full tarball for the ",(0,n.kt)("code",null,a.version)," release of LibreTime is available ",(0,n.kt)(o.Z,{version:a.version,mdxType:"TarballLink"},"here"),"."))}r.isMDXComponent=!0}}]);