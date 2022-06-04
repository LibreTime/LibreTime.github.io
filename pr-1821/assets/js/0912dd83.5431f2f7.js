"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8535],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={title:"LibreTime API usage"},l=void 0,p={unversionedId:"developer-manual/legacy-api",id:"version-3.0.0-alpha.12/developer-manual/legacy-api",title:"LibreTime API usage",description:"We're in the process of rewriting LibreTime's API. This page contains the instructions for the current version, written in PHP.",source:"@site/versioned_docs/version-3.0.0-alpha.12/developer-manual/legacy-api.md",sourceDirName:"developer-manual",slug:"/developer-manual/legacy-api",permalink:"/pr-1821/docs/developer-manual/legacy-api",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.12/developer-manual/legacy-api.md",tags:[],version:"3.0.0-alpha.12",frontMatter:{title:"LibreTime API usage"},sidebar:"tutorialSidebar",previous:{title:"Development environment",permalink:"/pr-1821/docs/developer-manual/environment"},next:{title:"Widgets",permalink:"/pr-1821/docs/developer-manual/widgets"}},u={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We're in the process of rewriting LibreTime's API. This page contains the instructions for the current version, written in PHP."))),(0,a.kt)("p",null,"The LibreTime API enables many types of information about the broadcast schedule and configuration to be retrieved from the LibreTime server. Other than the live-info and week-info data fetched by website widgets (see the chapter ",(0,a.kt)("em",{parentName:"p"},"Exporting the schedule"),"), all API requests must be authenticated using the secret API key stored in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/airtime/api_client.cfg")," on the LibreTime server. This key is autogenerated during LibreTime installation and should be unique for each server."),(0,a.kt)("p",null,"If you intend to use the LibreTime API across a public network, for security reasons it is highly recommended that all API requests are sent over encrypted https: and that the web server is configured to accept requests to the api/ directory from specific host names or IP addresses only."),(0,a.kt)("p",null,"The format of API requests is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://libretime.example.com/api/api-action/format/json/api_key/XXXXXX\n")),(0,a.kt)("p",null,"where api-action is the type of request and XXXXXX is the secret API key. Available actions include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on-air-light - return true if the station is on air"),(0,a.kt)("li",{parentName:"ul"},"status - get the status of LibreTime components and resource usage"),(0,a.kt)("li",{parentName:"ul"},"version - returns the version of LibreTime installed"),(0,a.kt)("li",{parentName:"ul"},"get-files-without-silan-value - list files for which silence detection has not yet been performed"),(0,a.kt)("li",{parentName:"ul"},"get-stream-setting - gets the settings of LibreTime output streams"),(0,a.kt)("li",{parentName:"ul"},"get-stream-parameters - gets the parameters of LibreTime output streams")),(0,a.kt)("p",null,"For example, using the action ",(0,a.kt)("em",{parentName:"p"},"get-stream-setting")," returns the following output for the first configured stream:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"keyname":"s1_type","value":"ogg","type":"string"},\n\n{"keyname":"s1_host","value":"streaming.example.com","type":"string"},\n\n{"keyname":"s1_port","value":"8000","type":"integer"},\n\n{"keyname":"s1_mount","value":"airtime_128","type":"string"},\n\n{"keyname":"s1_url","value":"http:\\/\\/airtime.sourcefabric.org","type":"string"},\n\n{"keyname":"s1_description","value":"Airtime Radio! Stream #1","type":"string"},\n\n{"keyname":"s1_genre","value":"Screamo","type":"string"},\n')),(0,a.kt)("p",null,"which is enough information to construct a player widget dynamically. (s1_url is the station's homepage, not the stream URL). The same information is provided with an s2","_"," prefix for the second stream, and s3","_"," prefix for the third stream."),(0,a.kt)("p",null,"Some API requests require the directory ID number to be specified as ",(0,a.kt)("em",{parentName:"p"},"dir_id")," including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"list-all-files - list files in the specified directory"),(0,a.kt)("li",{parentName:"ul"},"get-files-without-replay-gain - list files in the specified directory for which ReplayGain has not been calculated yet")),(0,a.kt)("p",null,"For example, using a request such as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://libretime.example.com/api/list-all-files/format/json/api_key/XXXXXX/dir_id/1/\n")),(0,a.kt)("p",null,"returns the full path to each media file in the LibreTime storage directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "files": [\n    "imported/1/Mark Ronson feat. Saigon/Here Comes the Fuzz/7-Diduntdidunt-unknown.flac",\n    "imported/1/Jimi Tenor & Tony Allen/Inspiration Information/3-Selfish Gene-128kbps.mp3"\n  ]\n}\n')))}d.isMDXComponent=!0}}]);