"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5637],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},49130:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Settings"},s=void 0,i={unversionedId:"user-manual/settings",id:"user-manual/settings",title:"Settings",description:"General settings",source:"@site/../docs/user-manual/settings.md",sourceDirName:"user-manual",slug:"/user-manual/settings",permalink:"/pr-1986/docs/next/user-manual/settings",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/user-manual/settings.md",tags:[],version:"current",frontMatter:{title:"Settings"},sidebar:"tutorialSidebar",previous:{title:"Scheduling shows",permalink:"/pr-1986/docs/next/user-manual/scheduling-shows"},next:{title:"System status",permalink:"/pr-1986/docs/next/user-manual/status"}},l={},p=[{value:"General settings",id:"general-settings",level:2},{value:"Track types",id:"track-types",level:2},{value:"Create track types",id:"create-track-types",level:3},{value:"Stream settings",id:"stream-settings",level:2},{value:"Global settings",id:"global-settings",level:3},{value:"Input stream settings",id:"input-stream-settings",level:3},{value:"Switching input streams",id:"switching-input-streams",level:3},{value:"Output stream settings",id:"output-stream-settings",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general-settings"},"General settings"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(90425).Z,width:"807",height:"405"})),(0,r.kt)("p",null,"On the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," menu, click ",(0,r.kt)("strong",{parentName:"p"},"General")," to set your ",(0,r.kt)("strong",{parentName:"p"},"Station Name"),". This\ntext is shown in your web browser's title bar when your station staff are logged\ninto LibreTime, and optionally in stream metadata. You can also set a ",(0,r.kt)("strong",{parentName:"p"},"Station\nDescription")," and ",(0,r.kt)("strong",{parentName:"p"},"Station Logo")," here."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(89066).Z,width:"804",height:"744"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Default Interface Language")," drop-down menu sets the default localization\nfor your LibreTime instance, and the ",(0,r.kt)("strong",{parentName:"p"},"Station Timezone")," drop-down menu can be\nused to display local time at your station. LibreTime stores show times\ninternally in UTC format (similar to ",(0,r.kt)("em",{parentName:"p"},"Greenwich Mean Time"),"), but displays local\ntime for the convenience of your station staff. You can also set the day of the\nweek that you wish to start your station's weekly schedule on, which defaults\nto Sunday."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Track Type Default")," enables you to select a track type default for uploads."),(0,r.kt)("p",null,"Initially, the ",(0,r.kt)("strong",{parentName:"p"},"Default Fade In")," and ",(0,r.kt)("strong",{parentName:"p"},"Default Fade Out")," times for automated\nfades are set to half a second, and the ",(0,r.kt)("strong",{parentName:"p"},"Default Crossfade Duration")," is set to\nzero seconds. Custom fade and crossfade times can be set for adjacent items in a\nplaylist or static smart block. See the chapter ",(0,r.kt)("em",{parentName:"p"},"Library")," for details."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Intro Autoloading Playlist")," enables you to select a playlist that will be\nscheduled at the beginning of every show that has enabled an autoloading\nplaylist. This can be used for instance to insert a station ID or other\nannouncements a the top of every show."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Outro Autoloading Playlist")," enables you to select a playlist that will be\nscheduled after the content of every show with an autoloading playlist."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Overwrite Podcast Episode Metatags")," option which is enabled by default\ncauses LibreTime to override the Artist, Title & Album fields on any tracks\ndownloaded from a podcast with information from the RSS feed."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Generate a smartblock and a playlist upon creation of a new podcast"),"\noption when enabled will create a smartblock matching the newest episode of a\npodcast and a playlist containing that smartblock automatically upon adding a\npodcast to LibreTime. This can also be done manually by the generate smartblock\nand playlist button under a podcasts settings which is why it is disabled by\ndefault."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(95847).Z,width:"643",height:"364"})),(0,r.kt)("p",null,"You can opt-in to test new features with the ",(0,r.kt)("strong",{parentName:"p"},"Feature Previews")," option.\nFeatures that we soft rollout this way may need more feedback or still have\ntolerable bugs. This contains but is not limited to features like large ui\nrefactors. You can switch back at any time."),(0,r.kt)("p",null,"You can enable live, read-only access to the LibreTime schedule calendar for\nyour station's public website with the ",(0,r.kt)("strong",{parentName:"p"},"Public LibreTime API")," option, if you\nwish. (There is more about this feature in the\n",(0,r.kt)("a",{parentName:"p",href:"/pr-1986/docs/next/user-manual/playout-history"},(0,r.kt)("em",{parentName:"a"},"Exporting the schedule"))," chapter, in the\n",(0,r.kt)("em",{parentName:"p"},"Advanced Configuration")," section of this book)."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Allowed CORS URLs")," is intended to deal with situations where you want a\nremote site with a different domain to access the API. This is relevant when\nthere is a reverse proxy server in front of LibreTime. If you are using a\nreverse proxy, the URLs that will be used to access it should be added here."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Display login button on your Radio Page?")," will determine whether visitors\nto your site see a link to login. If this is disabled, DJs and admins will need\nto goto ",(0,r.kt)("a",{parentName:"p",href:"http://example.org/login"},"http://example.org/login")," to be able to login."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Tune-In Settings")," section is intended for stations that have partnered\nwith TuneIn to automatically push their now playing metadata to TuneIn. This\nhasn't been tested and also requires special credentials from TuneIn."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Dangerous Options")," section provides an administrator the ability to erase LibreTime's track library."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Erasing LibreTime's track library cannot be undone.")),(0,r.kt)("p",null,"Individual LibreTime users can choose another interface localization when they\nlog in, or set personal preferences for localization and time zone by clicking\ntheir username on the right side of the menu bar."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"track-types"},"Track types"),(0,r.kt)("h3",{id:"create-track-types"},"Create track types"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Settings")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Track Types")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"New Track Type")),(0,r.kt)("li",{parentName:"ol"},'On the "Code" field, type a unique code that can be easily identifiable. Example, for Music use "MUS" or for Sound Effects use something like "FX".'),(0,r.kt)("li",{parentName:"ol"},'On the "Type Name" field, type a the name of the type of tracks. Example, "Station IDs".'),(0,r.kt)("li",{parentName:"ol"},'On the "Description" field, enter the description of the type given.'),(0,r.kt)("li",{parentName:"ol"},'On the "Visibility" drop down menu, choose to enable or disable the track type. By default, it is enabled. If disabled, it won\'t be shown across LibreTime or in the API for developers.'),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"stream-settings"},"Stream settings"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/QPNo52Fc0ck",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h3",{id:"global-settings"},"Global settings"),(0,r.kt)("p",null,"You can configure direct Icecast and SHOUTcast streams and sound card output by clicking ",(0,r.kt)("strong",{parentName:"p"},"Streams")," on the ",(0,r.kt)("strong",{parentName:"p"},"System")," menu."),(0,r.kt)("p",null,"At the top left of the ",(0,r.kt)("strong",{parentName:"p"},"Stream Settings")," page are global settings including ",(0,r.kt)("strong",{parentName:"p"},"Hardware Audio Output"),", which enables playout from the default sound card on the server, if one is fitted. The default ",(0,r.kt)("strong",{parentName:"p"},"Output Type")," of ",(0,r.kt)("em",{parentName:"p"},"ALSA")," on the drop-down menu will be suitable for most servers with a sound card. If not, you have the option to choose from other Liquidsoap interfaces available, such as ",(0,r.kt)("em",{parentName:"p"},"OSS")," or ",(0,r.kt)("em",{parentName:"p"},"PortAudio"),"."),(0,r.kt)("p",null,"The second checkbox under Global Settings enables the sending of ",(0,r.kt)("strong",{parentName:"p"},"Icecast Vorbis Metadata")," with direct streams. This setting is optional, because some media players have a bug which makes them disconnect from Ogg Vorbis streams when an Icecast server notifies the player that a new track is starting."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Stream Label")," radio button allows you to set the metadata that will be sent with direct streams; ",(0,r.kt)("em",{parentName:"p"},"Artist")," and ",(0,r.kt)("em",{parentName:"p"},"Title"),", ",(0,r.kt)("em",{parentName:"p"},"Show"),", ",(0,r.kt)("em",{parentName:"p"},"Artist")," and ",(0,r.kt)("em",{parentName:"p"},"Title"),", or ",(0,r.kt)("em",{parentName:"p"},"Station name")," and ",(0,r.kt)("em",{parentName:"p"},"Show name"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Off Air Metadata")," field configures the text that will be sent to any configured streaming servers, and from there on to media players, when Airtime is not streaming any output."),(0,r.kt)("p",null,"Below this is the ",(0,r.kt)("strong",{parentName:"p"},"Enable Replay Gain")," checkbox which, if checked, automatically adjusts Airtime's output level to an average of -14dBFS, based on prior analysis of the level of individual files in the ",(0,r.kt)("strong",{parentName:"p"},"Library"),". This feature helps guard against unwanted changes in Airtime's output level caused by the typical variation in average level of recordings made in different studios at different times. The correction value for each file can be viewed by enabling the ReplayGain column in the ",(0,r.kt)("strong",{parentName:"p"},"Library"),"."),(0,r.kt)("p",null,"If Replay Gain is enabled, output level can be adjusted up to 10dB louder or quieter from the reference level of -14dBFS by clicking and dragging the ",(0,r.kt)("strong",{parentName:"p"},"Replay Gain Modifier")," control. Increasing level too far is likely to result in clipping (distortion) since the output level is adjusted to be greater than that of the original files. This scenario is indicated by amplitude correction factors greater than 1.0 in the Liquidsoap log file."),(0,r.kt)("p",null,"Click the ",(0,r.kt)("strong",{parentName:"p"},"Save")," button on the right side of the page to save any changes that you have made to global settings. If you are only using the hardware audio output, and will not be streaming to or from Airtime, you can leave the ",(0,r.kt)("strong",{parentName:"p"},"Stream Settings")," page after clicking the ",(0,r.kt)("strong",{parentName:"p"},"Save")," button."),(0,r.kt)("h3",{id:"input-stream-settings"},"Input stream settings"),(0,r.kt)("p",null,"On the lower left side of the Stream Settings page you can configure remote live input streams from DJ programs such as ",(0,r.kt)("strong",{parentName:"p"},"Mixxx")," or ",(0,r.kt)("strong",{parentName:"p"},"IDJC"),", or smartphone applications used by broadcast journalists. A bug with ",(0,r.kt)("strong",{parentName:"p"},"Butt")," versions 1.14 to 1.16 causes streams not to connect to LibreTime. A fix has been introduced with ",(0,r.kt)("strong",{parentName:"p"},"Butt")," version 1.17 that allows it to be used by LibreTime."),(0,r.kt)("p",null,"Airtime supports two types of live input stream; the ",(0,r.kt)("strong",{parentName:"p"},"Show Source"),", which enables a specific person to stream in during their own show, and the ",(0,r.kt)("strong",{parentName:"p"},"Master Source"),", which can override the Show Source if necessary. If neither type of live input is available, Airtime will fall back to ",(0,r.kt)("strong",{parentName:"p"},"Scheduled Play")," (playlists, smart blocks, remote streams and files scheduled in Airtime, in advance of or during a show)."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Auto Switch Off")," and ",(0,r.kt)("strong",{parentName:"p"},"Auto Switch On")," checkboxes enable playout to be switched automatically to the highest priority source whenever an authenticated input source disconnects from or connects to Airtime, respectively. The field ",(0,r.kt)("strong",{parentName:"p"},"Switch Transition Fade")," sets the length of the audio fade as scheduled playout is switched to a remote input source, and back."),(0,r.kt)("p",null,"Each type of input stream requires a username and password before the remote broadcaster can connect to Airtime. The ",(0,r.kt)("strong",{parentName:"p"},"Master Username")," and ",(0,r.kt)("strong",{parentName:"p"},"Master Password")," can be set in the Input Stream Settings box, while the authentication for individual Show Sources is set up in Airtime's schedule calendar. See the ",(0,r.kt)("em",{parentName:"p"},"Calendar")," chapter for details."),(0,r.kt)("p",null,"Input streams must have a ",(0,r.kt)("strong",{parentName:"p"},"Port")," for the remote broadcaster to connect to, which should be a number in the range from 1024 to 49151. If you have the Icecast or SHOUTcast streaming server running on the same machine as Airtime, you should avoid using port 8000 or 8001 for either type of Airtime input stream. This is because both Icecast and SHOUTcast use port 8000, and SHOUTcast also uses port 8001. If the usernames and passwords were similar, remote broadcasters might accidentally connect to the streaming server directly, bypassing Airtime."),(0,r.kt)("p",null,"To avoid further confusion, it is also recommended that you set a different ",(0,r.kt)("strong",{parentName:"p"},"Mount Point")," (the specific filename for broadcasters and listeners to connect to) from that used on your public Icecast or SHOUTcast server."),(0,r.kt)("p",null,"If your Airtime server is behind a firewall, and you wish remote broadcasters to connect input streams to it across the public Internet, you may need to click the ",(0,r.kt)("strong",{parentName:"p"},"Override")," link to set a ",(0,r.kt)("strong",{parentName:"p"},"Connection URL")," which is available from outside your local area network. This URL might be based on the domain name assigned to the router which forwards the appropriate port to your Airtime server. Then click ",(0,r.kt)("strong",{parentName:"p"},"OK")," to save the new connection URL."),(0,r.kt)("h3",{id:"switching-input-streams"},"Switching input streams"),(0,r.kt)("p",null,"In the Master Panel, available input source streams are shown with an orange line connecting the source to the switch, which you could think of like a patch cable connecting a source to a broadcast mixer. When that switch is active, another orange line connects the switch to the On Air indicator, like a patch cable connecting a mixer to a transmitter."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(47880).Z,width:"447",height:"103"})),(0,r.kt)("p",null,"If you have checked the ",(0,r.kt)("strong",{parentName:"p"},"Auto Switch On")," box in the Stream Settings page, the ",(0,r.kt)("strong",{parentName:"p"},"Master Source")," switch will move automatically to the active position, on the left, when an authenticated master source connects to Airtime. Otherwise, you can activate the switches manually by clicking the left side of each switch, or deactivate them by clicking the right side. The switches do not have to be dragged with the mouse, in the way that a switch on a hardware mixer would be pushed sideways. ",(0,r.kt)("strong",{parentName:"p"},"Show Source")," live input streams can also be manually activated or deactivated in the same way. If neither the show source or master source is active then LibreTime will default to what is scheduled to play in the Calendar."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(22043).Z,width:"453",height:"101"})),(0,r.kt)("p",null,"If you have the ",(0,r.kt)("strong",{parentName:"p"},"Auto Switch Off")," box checked LibreTime will resume scheduled playback whenever a stream disconnects. Otherwise you will need to slide to disable a source after a DJ stops streaming."),(0,r.kt)("p",null,"You can also force disconnection of a live remote source, for example when the remote input source has crashed and is no longer sending audio data, click the ",(0,r.kt)("strong",{parentName:"p"},"X")," icon to the left of the source name."),(0,r.kt)("h3",{id:"output-stream-settings"},"Output stream settings"),(0,r.kt)("p",null,"The Default Streaming radio button that is configured by default currently relies upon an insecure icecast password. You will want to change the Icecast2 password and select Custom Streaming. See the notice above for a tutorial on how to fix this."),(0,r.kt)("p",null,"On the right side of the page, you can configure up to three independent output streams with different bit rates or formats, and send these streams to different Icecast or SHOUTcast servers. By default, only Stream 1 is enabled, with this stream being sent the Icecast server configured at installation time."),(0,r.kt)("p",null,"To configure another stream, click the bar with the stream number to expand its box, and make sure ",(0,r.kt)("strong",{parentName:"p"},"Enabled")," is checked. Enter at least the streaming ",(0,r.kt)("strong",{parentName:"p"},"Server")," IP address or domain name, and ",(0,r.kt)("strong",{parentName:"p"},"Port")," details. The default port for Icecast and SHOUTcast servers is 8000."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Additional Options")," to expand a box in which you can enter the usernames, passwords and metadata to send to the streaming server. The default ",(0,r.kt)("strong",{parentName:"p"},"Username")," for Icecast servers is ",(0,r.kt)("em",{parentName:"p"},"source"),", and if this the name in use on your streaming server, you can leave this field empty. The ",(0,r.kt)("strong",{parentName:"p"},"Admin User")," and ",(0,r.kt)("strong",{parentName:"p"},"Admin Password")," settings are optional, and are used to query the streaming server for audience numbers by the ",(0,r.kt)("strong",{parentName:"p"},"Listener Stats")," page on the ",(0,r.kt)("strong",{parentName:"p"},"System")," menu."),(0,r.kt)("p",null,"You can also set the specific ",(0,r.kt)("strong",{parentName:"p"},"Mount Point")," that listeners will connect to here. Then click one of the ",(0,r.kt)("strong",{parentName:"p"},"Save")," buttons in the upper or lower right corner of the page to update the Airtime server's settings."),(0,r.kt)("p",null,"Airtime supports output to Icecast in Ogg Vorbis, Ogg Opus, MP3 and AAC formats. When selecting a SHOUTcast server from the ",(0,r.kt)("strong",{parentName:"p"},"Service Type")," drop-down menu, you are restricted to using MP3 or AAC formats only, so the choice of Ogg Vorbis and Opus formats is greyed out in the ",(0,r.kt)("strong",{parentName:"p"},"Stream Type")," drop-down menu. The SHOUTcast username for stream sources is fixed, so you do not need to enter this value under ",(0,r.kt)("strong",{parentName:"p"},"Additional Options"),", but you will usually have to enter a password."),(0,r.kt)("p",null,"Any connection problems between Liquidsoap and Icecast or SHOUTcast are shown on the Stream Settings page. For example, if you enter the wrong password, you will see an ",(0,r.kt)("em",{parentName:"p"},"Authentication Required")," error message. To fix this, enter the correct password in the ",(0,r.kt)("strong",{parentName:"p"},"Additional Options")," box, and click the ",(0,r.kt)("strong",{parentName:"p"},"Save")," button. If the streaming server is down for any reason, or you have entered an incorrect ",(0,r.kt)("strong",{parentName:"p"},"Server")," name or ",(0,r.kt)("strong",{parentName:"p"},"Port")," number, you will see the message ",(0,r.kt)("em",{parentName:"p"},"Can not connect to the streaming server"),"."))}u.isMDXComponent=!0},95847:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/settings-api-settings-9525e03540a073401fbc8dd369a57bc3.png"},89066:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/settings-general-playback-settings-f4710a7759ca25e725ae0cc1225e7a21.png"},47880:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/settings-libretime-master-source-stream-8a3d466f7ff3d7c865127171e1f5f633.png"},22043:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/settings-libretime-show-source-stream-f77cfb68ba9484ea88b5984080aeb4d2.png"},90425:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/settings-station-info-settings-4b4e687dee7e4a04085b0cc7057908ee.png"}}]);