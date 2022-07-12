"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9261],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),c=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,f=p["".concat(m,".").concat(d)]||p[d]||l[d]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},38268:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),s=["components"],i={title:"Webstreams"},m=void 0,c={unversionedId:"user-manual/webstreams",id:"user-manual/webstreams",title:"Webstreams",description:"<iframe",source:"@site/../docs/user-manual/webstreams.md",sourceDirName:"user-manual",slug:"/user-manual/webstreams",permalink:"/pr-1895/docs/next/user-manual/webstreams",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/user-manual/webstreams.md",tags:[],version:"current",frontMatter:{title:"Webstreams"},sidebar:"tutorialSidebar",previous:{title:"Managing users",permalink:"/pr-1895/docs/next/user-manual/users"},next:{title:"Developer manual",permalink:"/pr-1895/docs/next/developer-manual/"}},u={},l=[{value:"Adding a webstream",id:"adding-a-webstream",level:2}],p={toc:l};function d(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/Ha3X6aYdY04",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"adding-a-webstream"},"Adding a webstream"),(0,o.kt)("p",null,"A web stream URL and metadata can be added to the LibreTime library, so that a remote stream can be searched for and scheduled to be ",(0,o.kt)("em",{parentName:"p"},"pulled")," into a show. For example, at the top of the hour your station may pull a news report from journalists working in another studio. This is a different concept from ",(0,o.kt)("strong",{parentName:"p"},"Master Source")," and ",(0,o.kt)("strong",{parentName:"p"},"Show Source")," remote streams which are ",(0,o.kt)("em",{parentName:"p"},"pushed")," into the LibreTime playout schedule."),(0,o.kt)("p",null,"To add a web stream, click the ",(0,o.kt)("strong",{parentName:"p"},"+ New")," button on the left side of the Webstreams page. Like a playlist, web streams in the Library can have a title and ",(0,o.kt)("strong",{parentName:"p"},"Description"),", which may help you find them in searches later."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(71796).Z,width:"632",height:"575"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Stream URL")," setting must include the ",(0,o.kt)("em",{parentName:"p"},"port number")," (such as 8000) and ",(0,o.kt)("em",{parentName:"p"},"mount point")," (such as remote_stream) of the remote stream, in addition to the streaming server name. A ",(0,o.kt)("strong",{parentName:"p"},"Default Length")," for the remote stream can also be set. If the stream is added at the end of a show which becomes overbooked as a result, it will be faded out when the show ends."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"LibreTime checks the remote webstream's status upon editing stream settings, so an offline stream will result in an error. There are many tools such as ",(0,o.kt)("a",{parentName:"p",href:"https://danielnoethen.de/butt/"},"BUTT")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.mixxx.org"},"MIXXX")," that can be used to send a test stream to LibreTime can save it; read more ",(0,o.kt)("a",{parentName:"p",href:"/pr-1895/docs/next/user-manual/live-broadcast"},"here"),"."))))}d.isMDXComponent=!0},71796:function(e,t,r){t.Z=r.p+"assets/images/webstreams-webstream-df70a33364a43def4a2c8a8ff6335369.jpg"}}]);