"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1448],{4692:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(7294),r=a(9960);const n=e=>{let{version:t,children:a}=e;return i.createElement(r.Z,{to:`https://github.com/libretime/libretime/releases/download/${t}/libretime-${t}.tar.gz`},a)}},1236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=a(7462),r=(a(7294),a(3905)),n=(a(1839),a(2309));const l={title:"LibreTime 3.0.0 beta 0"},s=void 0,o={unversionedId:"releases/3.0.0-beta.0",id:"version-3.0.0-beta.0/releases/3.0.0-beta.0",title:"LibreTime 3.0.0 beta 0",description:"Contributors",source:"@site/versioned_docs/version-3.0.0-beta.0/releases/3.0.0-beta.0.md",sourceDirName:"releases",slug:"/releases/3.0.0-beta.0",permalink:"/pr-2134/docs/releases/3.0.0-beta.0",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-beta.0/releases/3.0.0-beta.0.md",tags:[],version:"3.0.0-beta.0",frontMatter:{title:"LibreTime 3.0.0 beta 0"},sidebar:"tutorialSidebar",previous:{title:"Unreleased",permalink:"/pr-2134/docs/releases/unreleased"},next:{title:"LibreTime 3.0.0 alpha 13",permalink:"/pr-2134/docs/releases/3.0.0-alpha.13"}},p={},m=[{value:"\ud83d\udc96 Contributors",id:"-contributors",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83d\udc1b Bug fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udd25 Deprecation and removal",id:"-deprecation-and-removal",level:2},{value:"Ubuntu Bionic support deprecation",id:"ubuntu-bionic-support-deprecation",level:3},{value:"Debian Buster support deprecation",id:"debian-buster-support-deprecation",level:3},{value:"\u2b06\ufe0f Before upgrading",id:"\ufe0f-before-upgrading",level:2},{value:"File based stream configuration",id:"file-based-stream-configuration",level:3},{value:"Timezone configuration",id:"timezone-configuration",level:3},{value:"Worker python package and service",id:"worker-python-package-and-service",level:3}],u={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(n.ZP,{date:"2022-09-16",version:"3.0.0-beta.0",mdxType:"ReleaseHead"}),(0,r.kt)("h2",{id:"-contributors"},"\ud83d\udc96 Contributors"),(0,r.kt)("p",null,"The LibreTime project wants to thank the following contributors for authoring PRs to this release:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@jooola"),(0,r.kt)("li",{parentName:"ul"},"@paddatrapper"),(0,r.kt)("li",{parentName:"ul"},"Milo Ivir")),(0,r.kt)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," use liquidsoap version functions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," replace pytz with zoneinfo (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1969"},"#1969"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," remove allow-restart flag (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1970"},"#1970"),")"),(0,r.kt)("li",{parentName:"ul"},"rename AirtimeApiClient to ApiClient"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," use single clients instance (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1980"},"#1980"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," don't use trailing slashes (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1982"},"#1982"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," cast StreamSetting raw_value to value (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1991"},"#1991"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"worker:")," load callback details from config (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1994"},"#1994"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," load callback details from config and file_id (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1993"},"#1993"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api-client:")," rewrite api-client v2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," integrate api-client v2 calls"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," don't use hyperlinked serializers (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1984"},"#1984"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," load env config using jsonschema"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," use ed for config update (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2013"},"#2013"),")"),(0,r.kt)("li",{parentName:"ul"},"move off_air_meta stream setting to pref table (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2023"},"#2023"),")"),(0,r.kt)("li",{parentName:"ul"},"move stream liquisoap status to pref table"),(0,r.kt)("li",{parentName:"ul"},"move stream stats status to pref table"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," override paths using env variables"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," rewrite stats collector (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2028"},"#2028"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," setup config schema validation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," add config dot notation access"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," pass config data via init (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2042"},"#2042"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," create liquidsoap client"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," integrate new liquisoap client"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"worker:")," rename service and package to libretime-worker (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2065"},"#2065"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," improve generate","_","*","_","events (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2088"},"#2088"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," remove set passwords command"),(0,r.kt)("li",{parentName:"ul"},"remove cc_stream_setting models"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," deploy stream config"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," read stream config from file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," add /info and /stream/","*"," endpoints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," create stream config models"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," build liquidsoap entrypoint with stream config"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," stats collector using stream config"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," allow updating message_offline value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," remove stream_setting update handler"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," liquidsoap bootstrap using new api endpoints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," allow liquidsoap listen address configuration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," move /api-auth to /api/browser (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2094"},"#2094"),")"),(0,r.kt)("li",{parentName:"ul"},"add container setup"),(0,r.kt)("li",{parentName:"ul"},"move timezone preference to config file (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2096"},"#2096"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," move message handling to main thread")),(0,r.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api-client:")," get status_code from response"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"analyzer:")," remove outdated urllib3 workaround"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api-client:")," fix base_url joining for client v2 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1998"},"#1998"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," update set_icecast_passwords StreamSetting fields (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2001"},"#2001"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," get local logo file (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/1999"},"#1999"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," clean legacy files before copying (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2002"},"#2002"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," sanitize track_type_id when updating file (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2003"},"#2003"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," validator value type can be wrong"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," remove unused field from rabbitmq config (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2012"},"#2012"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," replace deprecated harbor.bind_addr (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2025"},"#2025"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," do not rely on undefined SERVER_NAME (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2031"},"#2031"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api-client:")," remove unused v1 methods"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," use stream download when fetching files (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2048"},"#2048"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," add thread names (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2056"},"#2056"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," args comma syntax error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," 404 on listeners stats"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency mdx-mermaid to v1.3.0 ","[security]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," py36 compatibility broken typings"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," py39 compatibility zoneinfo import"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api:")," install gunicorn from pip for bionic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," only upgrade pip packages if needed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," fix compatibility with bionic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," look in /legacy for a VERSION file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," missing live show events (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2087"},"#2087"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," config default values are not sanitized"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," add liquidsoap config section"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," move non reusable fields from default output"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," consistent with docs in outputs public_url generation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," also shutdown on SIGTERM (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2104"},"#2104"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," simplify distro support notice (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2106"},"#2106"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," install tzdata distributions package (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2105"},"#2105"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," config dir should be read only"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"installer:")," config should not be world readable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"legacy:")," track_type_id should cast to int not text (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2112"},"#2112"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"worker:")," rewrite podcast download task"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shared:")," load env from oneOf union schema"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency friendsofphp/php-cs-fixer to <3.11.1"),(0,r.kt)("li",{parentName:"ul"},"nginx depends on legacy in docker-compose (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/libretime/libretime/issues/2147"},"#2147"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"playout:")," remove shutdown_handler")),(0,r.kt)("h2",{id:"-deprecation-and-removal"},"\ud83d\udd25 Deprecation and removal"),(0,r.kt)("h3",{id:"ubuntu-bionic-support-deprecation"},"Ubuntu Bionic support deprecation"),(0,r.kt)("p",null,"Support for Ubuntu Bionic is being deprecated, and will be removed in LibreTime v3.1.0. Maintenance only versions (3.0.x) for Ubuntu Bionic will be provided until the distribution release reaches its end of life. Please see the ",(0,r.kt)("a",{parentName:"p",href:"/pr-2134/docs/developer-manual/development/releases#distributions-releases-support"},"supported distributions release policy")," for details."),(0,r.kt)("p",null,"Along with the Ubuntu Bionic deprecation, the following dependencies versions are also being deprecated:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.ubuntu.com/bionic/liquidsoap"},"liquidsoap 1.1.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.ubuntu.com/bionic/php7.2"},"php7.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.ubuntu.com/bionic/python3"},"python3.6"))),(0,r.kt)("h3",{id:"debian-buster-support-deprecation"},"Debian Buster support deprecation"),(0,r.kt)("p",null,"Support for Debian Buster is being deprecated, and will be removed in LibreTime v3.1.0. Maintenance only versions (3.0.x) for Debian Buster will be provided until the distribution release reaches its end of life. Please see the ",(0,r.kt)("a",{parentName:"p",href:"/pr-2134/docs/developer-manual/development/releases#distributions-releases-support"},"supported distributions release policy")," for details."),(0,r.kt)("p",null,"Along with the Debian Buster deprecation, the following dependencies versions are also being deprecated:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.debian.org/buster/liquidsoap"},"liquidsoap 1.3.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.debian.org/buster/php7.3"},"php7.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.debian.org/buster/python3"},"python3.7"))),(0,r.kt)("h2",{id:"\ufe0f-before-upgrading"},"\u2b06\ufe0f Before upgrading"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please follow this ",(0,r.kt)("strong",{parentName:"p"},"before the upgrade procedure"),"!")),(0,r.kt)("h3",{id:"file-based-stream-configuration"},"File based stream configuration"),(0,r.kt)("p",null,"The stream configuration moved from the database to the ",(0,r.kt)("a",{parentName:"p",href:"/pr-2134/docs/admin-manual/setup/configuration#stream"},"configuration")," file. A configuration sample can be found in the project folder under ",(0,r.kt)("inlineCode",{parentName:"p"},"installer/config.yml"),". Make sure to save your existing stream config to the configuration file."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To prevent accidental data loss during upgrade, the stream configuration data will only be removed from the database in future releases. You can view the data using the following commands:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u libretime libretime-api dbshell --command=\"\n    SELECT *\n    FROM cc_stream_setting\n    ORDER BY keyname;\"\n\nsudo -u libretime libretime-api dbshell --command=\"\n    SELECT *\n    FROM cc_pref\n    WHERE keystr IN (\n        'default_icecast_password',\n        'default_stream_mount_point',\n        'live_dj_connection_url_override',\n        'live_dj_source_connection_url',\n        'master_dj_connection_url_override',\n        'master_dj_source_connection_url'\n    )\n    ORDER BY keystr;\"\n"))),(0,r.kt)("h3",{id:"timezone-configuration"},"Timezone configuration"),(0,r.kt)("p",null,"The timezone preference moved from the database to the ",(0,r.kt)("a",{parentName:"p",href:"/pr-2134/docs/admin-manual/setup/configuration#general"},"configuration")," file. Make sure to save your existing timezone preference to the configuration file."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To prevent accidental data loss during upgrade, the timezone preference will only be removed from the database in future releases. You can view the data using the following commands:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u libretime libretime-api dbshell --command=\"SELECT * FROM cc_pref WHERE keystr = 'timezone'\";\n"))),(0,r.kt)("h3",{id:"worker-python-package-and-service"},"Worker python package and service"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"libretime-celery")," python package and service was renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"libretime-worker"),". Make sure to remove the old python package and service using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pip3 uninstall libretime-celery\n\nsudo rm -f\xa0\\\n    /etc/systemd/system/libretime-celery.service \\\n    /usr/lib/systemd/system/libretime-celery.service\n")))}d.isMDXComponent=!0},2309:(e,t,a)=>{a.d(t,{ZP:()=>s});var i=a(7462),r=(a(7294),a(3905)),n=(a(1839),a(4692));const l={toc:[]};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This version was released the ",(0,r.kt)("strong",null,a.date),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please report new issues and/or feature requests in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues"},"the issue tracker"),"."),(0,r.kt)("p",{parentName:"admonition"},"Join our ",(0,r.kt)("a",{parentName:"p",href:"https://discourse.libretime.org/"},"discourse")," or chat with us on our ",(0,r.kt)("a",{parentName:"p",href:"https://chat.libretime.org/"},"mattermost")," if you need help and for general discussion.")),(0,r.kt)("p",null,"The full tarball for the ",(0,r.kt)("code",null,a.version)," release of LibreTime is available ",(0,r.kt)(n.Z,{version:a.version,mdxType:"TarballLink"},"here"),"."))}s.isMDXComponent=!0}}]);