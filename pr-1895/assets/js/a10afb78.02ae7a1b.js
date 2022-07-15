"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6937],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29770:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],s={title:"Broadcasting live"},l=void 0,u={unversionedId:"user-manual/live-broadcast",id:"version-3.0.0-alpha.13/user-manual/live-broadcast",title:"Broadcasting live",description:"MIXXX",source:"@site/versioned_docs/version-3.0.0-alpha.13/user-manual/live-broadcast.md",sourceDirName:"user-manual",slug:"/user-manual/live-broadcast",permalink:"/pr-1895/docs/user-manual/live-broadcast",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/user-manual/live-broadcast.md",tags:[],version:"3.0.0-alpha.13",frontMatter:{title:"Broadcasting live"},sidebar:"tutorialSidebar",previous:{title:"Listener statistics",permalink:"/pr-1895/docs/user-manual/listener-stats"},next:{title:"Playlists and smart blocks",permalink:"/pr-1895/docs/user-manual/playlists"}},c={},p=[{value:"MIXXX",id:"mixxx",level:2},{value:"B.U.T.T. (Broadcast Using This Tool)",id:"butt-broadcast-using-this-tool",level:2},{value:"Setup",id:"setup",level:3},{value:"Show time",id:"show-time",level:3},{value:"Recording your show",id:"recording-your-show",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"mixxx"},"MIXXX"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.mixxx.org"},"Mixxx")," is a cross-platform Open Source application for DJs."),(0,o.kt)("p",null,"Installed on a desktop or laptop computer, Mixxx complements your LibreTime server to provide a complete system\nfor both live and scheduled broadcasting. Although Mixxx has many features designed for dance music DJs\nthat require beat matching and pitch independent time stretching, the program can be used for any kind of\nmanually triggered broadcast playout, including live speech shows such as news or current affairs."),(0,o.kt)("p",null,"Mixxx supports a wide variety of popular hardware control surfaces, which can be connected to your\ncomputer using a USB cable. A control surface might replace or augment an analogue mixer in your studio,\ndepending on your live mixing and playout requirements."),(0,o.kt)("p",null,"Mixxx 1.9.0 or later includes a live streaming client which, like LibreTime, is compatible with the Icecast\nand SHOUTcast media servers. This feature can also be used to stream from Mixxx directly into LibreTime,\nusing either the ",(0,o.kt)("strong",{parentName:"p"},"Show Source")," or ",(0,o.kt)("strong",{parentName:"p"},"Master Source"),"."),(0,o.kt)("p",null,"To configure Mixxx for streaming into LibreTime, click ",(0,o.kt)("strong",{parentName:"p"},"Options"),", ",(0,o.kt)("strong",{parentName:"p"},"Preferences"),", then\n",(0,o.kt)("strong",{parentName:"p"},"Live Broadcasting")," on the main Mixxx menu. For server ",(0,o.kt)("strong",{parentName:"p"},"Type"),", select the default of ",(0,o.kt)("strong",{parentName:"p"},"Icecast 2"),".\nFor ",(0,o.kt)("strong",{parentName:"p"},"Host"),", ",(0,o.kt)("strong",{parentName:"p"},"Mount"),", ",(0,o.kt)("strong",{parentName:"p"},"Port"),", ",(0,o.kt)("strong",{parentName:"p"},"Login")," and ",(0,o.kt)("strong",{parentName:"p"},"Password"),", use the ",(0,o.kt)("strong",{parentName:"p"},"Input Stream Settings"),"\nconfigured in the LibreTime ",(0,o.kt)("strong",{parentName:"p"},"Streams")," page, on LibreTime's ",(0,o.kt)("strong",{parentName:"p"},"System")," menu."),(0,o.kt)("h2",{id:"butt-broadcast-using-this-tool"},"B.U.T.T. (Broadcast Using This Tool)"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/4GLsU9hPTtM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and install ",(0,o.kt)("a",{parentName:"li",href:"https://danielnoethen.de/"},"BUTT")," for your OS.\n",(0,o.kt)("em",{parentName:"li"},"Note: be sure you have butt version 0.1.17 or newer installed")),(0,o.kt)("li",{parentName:"ol"},"Open up BUTT"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"settings")),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("strong",{parentName:"li"},"Main")," > ",(0,o.kt)("strong",{parentName:"li"},"Server")," click ",(0,o.kt)("strong",{parentName:"li"},"ADD"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Type LibreTime (or your station) under Name"),(0,o.kt)("li",{parentName:"ul"},"Click the radio button next to ",(0,o.kt)("strong",{parentName:"li"},"IceCast")," under Type"),(0,o.kt)("li",{parentName:"ul"},"Type your stations URL (webpage address) under ",(0,o.kt)("strong",{parentName:"li"},"Address"),":"),(0,o.kt)("li",{parentName:"ul"},"Type ",(0,o.kt)("strong",{parentName:"li"},"8002")," under ",(0,o.kt)("strong",{parentName:"li"},"Port"),":"),(0,o.kt)("li",{parentName:"ul"},"Type your DJ login password under ",(0,o.kt)("strong",{parentName:"li"},"Password")),(0,o.kt)("li",{parentName:"ul"},"Type ",(0,o.kt)("strong",{parentName:"li"},"/show")," under IceCast mountpoint:"),(0,o.kt)("li",{parentName:"ul"},"Type your dj login under ",(0,o.kt)("strong",{parentName:"li"},"IceCast user:")))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"ADD")),(0,o.kt)("li",{parentName:"ol"},"Still in settings click, ",(0,o.kt)("strong",{parentName:"li"},"Audio")," and select your audio input device under\n",(0,o.kt)("strong",{parentName:"li"},"Audio Device"))),(0,o.kt)("h3",{id:"show-time"},"Show time"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When its almost your show time go to your LibreTime page and look at the time in the top right when your show starts go to Butt."),(0,o.kt)("li",{parentName:"ol"},"Click the white Play button (third button in the middle)."),(0,o.kt)("li",{parentName:"ol"},"If it says connecting... and then stream time with a counter- congratulations, your are connected!"),(0,o.kt)("li",{parentName:"ol"},"Go to the LibreTime page and at the top right under Source Streams the\ntab besides Show Source is to the left and Orange - if it is and Current\nshows Live Show you are connected."),(0,o.kt)("li",{parentName:"ol"},"If it is gray, click on the ",(0,o.kt)("strong",{parentName:"li"},"Show Source")," switch to the right of it and it\nwill toggle your show on and you will be broadcasting. ",(0,o.kt)("em",{parentName:"li"},"Note: whether auto\nconnect is turned on is a station specific setting so it could work either way"))),(0,o.kt)("h3",{id:"recording-your-show"},"Recording your show"),(0,o.kt)("p",null,"You can record your show under butt by clicking the red circle record button on\nthe left. It will save a mp3 based upon the date and time in your home/user\ndirectory by default."),(0,o.kt)("p",null,"Everything should now be working and you can broadcast for your entire time\nslot. If you choose to stop streaming before it is over click the white square\n",(0,o.kt)("strong",{parentName:"p"},"Stop")," button to disconnect. Then go to the LibreTime page and if the Show\nSource didn't automatically disconnect you can click it to the right and it\nshould turn gray."))}d.isMDXComponent=!0}}]);