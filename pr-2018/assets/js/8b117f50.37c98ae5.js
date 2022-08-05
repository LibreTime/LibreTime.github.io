"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3725],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=o.createContext({}),l=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return a?o.createElement(h,s(s({ref:t},c),{},{components:a})):o.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27136:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=a(87462),n=(a(67294),a(3905));const r={title:"Podcasts"},s=void 0,i={unversionedId:"user-manual/podcasts",id:"user-manual/podcasts",title:"Podcasts",description:"The Podcasts page allows you add subscriptions to podcasts which are often used to syndicated audio files using a URL called a RSS feed. This allows your LibreTime instance to automatically download new shows from the web.",source:"@site/../docs/user-manual/podcasts.md",sourceDirName:"user-manual",slug:"/user-manual/podcasts",permalink:"/pr-2018/docs/next/user-manual/podcasts",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/user-manual/podcasts.md",tags:[],version:"current",frontMatter:{title:"Podcasts"},sidebar:"tutorialSidebar",previous:{title:"Playout history",permalink:"/pr-2018/docs/next/user-manual/playout-history"},next:{title:"Preparing media for upload",permalink:"/pr-2018/docs/next/user-manual/preparing-media"}},d={},l=[{value:"Podcasts dashboard",id:"podcasts-dashboard",level:3},{value:"Editor",id:"editor",level:3}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Podcasts page allows you add subscriptions to podcasts which are often used to syndicated audio files using a URL called a RSS feed. This allows your LibreTime instance to automatically download new shows from the web."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"All podcasts available on iTunes have a RSS feed but it is sometimes hidden. See issue ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/510"},"#510")," for more information. RSS feeds that do not end in ",(0,n.kt)("em",{parentName:"p"},".xml")," may be accepted by LibreTime yet fail to download episodes. A work-around is to download the episode using a podcast client such as ",(0,n.kt)("a",{parentName:"p",href:"https://gpodder.github.io/"},"gpodder")," and then manually upload and schedule the episode."),(0,n.kt)("p",{parentName:"admonition"},"Podcast feeds coming from Anchor.fm have been known to have a similar issue.")),(0,n.kt)("p",null,"The podcast interfaces provides you with the ability to generate ",(0,n.kt)("a",{parentName:"p",href:"/pr-2018/docs/next/user-manual/playlists"},"Smartblocks")," that can be used in conjunction with autoloading playlists to schedule the newest episode of a podcast without human intervention."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/g-4UcD8qvR8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h3",{id:"podcasts-dashboard"},"Podcasts dashboard"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(16794).Z,width:"631",height:"573"})),(0,n.kt)("p",null,"The podcasts dashboard is similar to the tracks view, allowing you to add, edit, and remove\npodcasts by the toolbar, in addition to sorting by columns."),(0,n.kt)("p",null,"To add a podcast, click on the ",(0,n.kt)("strong",{parentName:"p"},"+ Add")," button on the toolbar and provide the podcast's RSS feed, which usually ends in ",(0,n.kt)("em",{parentName:"p"},".xml"),".\nOnce the podcast's feed is recognized, the editor pane opens for the podcast."),(0,n.kt)("h3",{id:"editor"},"Editor"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(57904).Z,width:"631",height:"573"})),(0,n.kt)("p",null,"In the podcasts editor, you can rename the podcast, update settings for the podcast, and manage episodes.\nA search box is available to search for episodes within the feed."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To import an episode directly into LibreTime, double-click on an episode or select it and click ",(0,n.kt)("strong",{parentName:"li"},"+ Import"),". The podcast will appear under tracks with the Podcast Name as the Album."),(0,n.kt)("li",{parentName:"ul"},"To delete an episode from LibreTime, select the episode and click on the red trash can on the toolbar."),(0,n.kt)("li",{parentName:"ul"},"If you would like LibreTime to automatically download the latest episodes of a podcast, make sure ",(0,n.kt)("em",{parentName:"li"},"Download latest episodes")," is checked. This can be used in conjunction with Smartblocks and Playlists to automate downloading and scheduling shows that are received via podcast feed.")))}p.isMDXComponent=!0},16794:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/podcasts-podcasts_dashboard-ff3e96e64dc1ef099e3286db5dd43607.png"},57904:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/podcasts-podcasts_editor-71e8af41b93ad08ce11877ad593d60af.png"}}]);