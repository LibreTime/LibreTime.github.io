"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6019],{1086:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));i(1839);const a={title:"LibreTime API usage"},s=void 0,o={unversionedId:"developer-manual/legacy-api",id:"version-3.0.0/developer-manual/legacy-api",title:"LibreTime API usage",description:"We're in the process of rewriting LibreTime's API. This page contains the instructions for the current version, written in PHP.",source:"@site/versioned_docs/version-3.0.0/developer-manual/legacy-api.md",sourceDirName:"developer-manual",slug:"/developer-manual/legacy-api",permalink:"/pr-2216/docs/developer-manual/legacy-api",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0/developer-manual/legacy-api.md",tags:[],version:"3.0.0",frontMatter:{title:"LibreTime API usage"},sidebar:"tutorialSidebar",previous:{title:"Releases",permalink:"/pr-2216/docs/developer-manual/development/releases"},next:{title:"Widgets",permalink:"/pr-2216/docs/developer-manual/widgets"}},l={},p=[],m={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We're in the process of rewriting LibreTime's API. This page contains the instructions for the current version, written in PHP.")),(0,r.kt)("p",null,"The LibreTime API enables many types of information about the broadcast schedule and configuration to be retrieved from the LibreTime server. Other than the live-info and week-info data fetched by website widgets (see the chapter ",(0,r.kt)("em",{parentName:"p"},"Exporting the schedule"),"), all API requests must be authenticated using the secret API key stored in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/libretime/api_client.cfg")," on the LibreTime server. This key is autogenerated during LibreTime installation and should be unique for each server."),(0,r.kt)("p",null,"If you intend to use the LibreTime API across a public network, for security reasons it's highly recommended that all API requests are sent over encrypted https: and that the web server is configured to accept requests to the api/ directory from specific host names or IP addresses only."),(0,r.kt)("p",null,"The format of API requests is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://libretime.example.com/api/api-action/format/json/api_key/XXXXXX\n")),(0,r.kt)("p",null,"where api-action is the type of request and XXXXXX is the secret API key. Available actions include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"on-air-light - return true if the station is on air"),(0,r.kt)("li",{parentName:"ul"},"status - get the status of LibreTime components and resource usage"),(0,r.kt)("li",{parentName:"ul"},"version - returns the version of LibreTime installed"),(0,r.kt)("li",{parentName:"ul"},"get-files-without-silan-value - list files for which silence detection hasn't yet been performed"),(0,r.kt)("li",{parentName:"ul"},"get-stream-setting - gets the settings of LibreTime output streams"),(0,r.kt)("li",{parentName:"ul"},"get-stream-parameters - gets the parameters of LibreTime output streams")),(0,r.kt)("p",null,"For example, using the action ",(0,r.kt)("em",{parentName:"p"},"get-stream-setting")," returns the following output for the first configured stream:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"keyname":"s1_type","value":"ogg","type":"string"},\n\n{"keyname":"s1_host","value":"streaming.example.com","type":"string"},\n\n{"keyname":"s1_port","value":"8000","type":"integer"},\n\n{"keyname":"s1_mount","value":"main","type":"string"},\n\n{"keyname":"s1_url","value":"http:\\/\\/airtime.sourcefabric.org","type":"string"},\n\n{"keyname":"s1_description","value":"Airtime Radio! Stream #1","type":"string"},\n\n{"keyname":"s1_genre","value":"Screamo","type":"string"},\n')),(0,r.kt)("p",null,"which is enough information to construct a player widget dynamically. (s1_url is the station's homepage, not the stream URL). The same information is provided with an s2","_"," prefix for the second stream, and s3","_"," prefix for the third stream."),(0,r.kt)("p",null,"Some API requests require the directory ID number to be specified as ",(0,r.kt)("em",{parentName:"p"},"dir_id")," including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"list-all-files - list files in the specified directory"),(0,r.kt)("li",{parentName:"ul"},"get-files-without-replay-gain - list files in the specified directory for which ReplayGain hasn't been calculated yet")),(0,r.kt)("p",null,"For example, using a request such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://libretime.example.com/api/list-all-files/format/json/api_key/XXXXXX/dir_id/1/\n")),(0,r.kt)("p",null,"returns the full path to each media file in the LibreTime storage directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "files": [\n    "imported/1/Mark Ronson feat. Saigon/Here Comes the Fuzz/7-Diduntdidunt-unknown.flac",\n    "imported/1/Jimi Tenor & Tony Allen/Inspiration Information/3-Selfish Gene-128kbps.mp3"\n  ]\n}\n')))}u.isMDXComponent=!0}}]);