"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4096],{6566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=a(7462),n=(a(7294),a(3905)),s=a(1839);const r={title:"Architecture"},o=void 0,l={unversionedId:"developer-manual/design/architecture",id:"version-3.0.0/developer-manual/design/architecture",title:"Architecture",description:"This document explains the design details and goals for the architecture of LibreTime. It describes the result of a discussion that happened on Github.",source:"@site/versioned_docs/version-3.0.0/developer-manual/design/architecture.md",sourceDirName:"developer-manual/design",slug:"/developer-manual/design/architecture",permalink:"/pr-2216/docs/developer-manual/design/architecture",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0/developer-manual/design/architecture.md",tags:[],version:"3.0.0",frontMatter:{title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Developer manual",permalink:"/pr-2216/docs/developer-manual/"},next:{title:"Database schema creation and migrations",permalink:"/pr-2216/docs/developer-manual/design/database-migrations"}},c={},u=[{value:"Previous architecture",id:"previous-architecture",level:2},{value:"New architecture",id:"new-architecture",level:2},{value:"Create the schedule",id:"create-the-schedule",level:3},{value:"Play the schedule",id:"play-the-schedule",level:3},{value:"One setup per radio station",id:"one-setup-per-radio-station",level:3},{value:"Separation of concerns",id:"separation-of-concerns",level:3}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document explains the design details and goals for the architecture of LibreTime. It describes the result of a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/libretime/libretime/issues/1610"},"discussion that happened on Github"),"."),(0,n.kt)("h2",{id:"previous-architecture"},"Previous architecture"),(0,n.kt)("p",null,"The previous architecture of LibreTime (based on AirTime) was missing a proper separation of concerns. It was build around a legacy MVC app written in PHP, and services in Python to accomplish specific tasks."),(0,n.kt)("h2",{id:"new-architecture"},"New architecture"),(0,n.kt)("p",null,"Below is the new architecture goal of LibreTime, with a proper separation of concerns."),(0,n.kt)(s.G,{chart:"flowchart TD\n    users([Users])\n    public([Public])\n\n    subgraph create_schedule[Create the schedule]\n        webapp[Web app]\n        subgraph core[Backend]\n            message_api[Message API]\n            api[Web API]\n            worker[Worker]\n        end\n    end\n\n    subgraph play_schedule[Play the schedule]\n        playout[Playout]\n        liquidsoap[[Liquidsoap]]\n        icecast[[Icecast]]\n        hls[[HLS]]\n    end\n\n    message_queue[[Message Queue]]\n    database[[Database]]\n    storage[[Storage]]\n\n    users --\x3e |Edit| webapp\n\n    webapp --\x3e api\n    api --\x3e database\n    api --\x3e storage\n    api --\x3e message_queue\n\n    message_queue <--\x3e worker\n    worker --\x3e database\n    worker --\x3e storage\n\n    message_queue <--\x3e message_api\n    message_api --\x3e database\n\n    message_queue <--\x3e playout\n    playout <-. via message queue .-> message_api\n    playout --\x3e |e.g. download file| api\n    playout <--\x3e liquidsoap\n    liquidsoap --\x3e icecast\n    liquidsoap --\x3e hls\n\n    public --\x3e webapp\n    public --\x3e |Listen| icecast\n    public --\x3e |Listen| hls",mdxType:"Mermaid"}),(0,n.kt)("p",null,"The LibreTime architecture is split into 2 main monolithic blocks ",(0,n.kt)("inlineCode",{parentName:"p"},"Create the schedule")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Play the schedule"),". Both blocks must be able to scale horizontally."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"A microservice architecture was rejected as it won't fix or improve any aspect of LibreTime.")),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"This document tries to focus on creating and playing a schedule, it doesn't consider features such as monitoring, logging or archiving.")),(0,n.kt)("h3",{id:"create-the-schedule"},"Create the schedule"),(0,n.kt)("p",null,"This block contains the following components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a web API,"),(0,n.kt)("li",{parentName:"ul"},"a worker to run background tasks,"),(0,n.kt)("li",{parentName:"ul"},"a message API to communicate with the ",(0,n.kt)("inlineCode",{parentName:"li"},"Play the schedule")," block, and other services,"),(0,n.kt)("li",{parentName:"ul"},"a web app to interface with the users.")),(0,n.kt)("p",null,"The web API, the worker and the message API rely on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.djangoproject.com/"},"Django framework")," to handle database, message queue and storage access."),(0,n.kt)("h3",{id:"play-the-schedule"},"Play the schedule"),(0,n.kt)("p",null,"Since the ",(0,n.kt)("inlineCode",{parentName:"p"},"Play the schedule")," has its own requirements in terms of logic and uptime, it's handled separately from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Create the schedule")," block. This block needs to be able to be duplicated in a high availability context."),(0,n.kt)("p",null,"This block contains the following components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a Playout app that communicates with the ",(0,n.kt)("inlineCode",{parentName:"li"},"Play the schedule")," block to gather the schedule,"),(0,n.kt)("li",{parentName:"ul"},"a Liquisoap app that plays and mixes the scheduled items, and dispatch them to the delivery services,"),(0,n.kt)("li",{parentName:"ul"},"an Icecast server that delivers a legacy audio stream to the public,"),(0,n.kt)("li",{parentName:"ul"},"a HLS stream that delivers a modern audio stream to the public.")),(0,n.kt)("h3",{id:"one-setup-per-radio-station"},"One setup per radio station"),(0,n.kt)("p",null,"LibreTime isn't meant to be used in a multi-tenant architecture, and an entire LibreTime installation should be dedicated to a single radio station. Previous SAAS or multi-tenant features from Airtime should be deprecated or removed."),(0,n.kt)("h3",{id:"separation-of-concerns"},"Separation of concerns"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Create the schedule")," block must only prepare a schedule, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Play the schedule")," must only play that schedule. A strong separation of concerns is required between the 2 blocks to allow the ",(0,n.kt)("inlineCode",{parentName:"p"},"Play the schedule")," block to meet its uptime requirements while not depending on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Create the schedule")," in case of a failure. Development will be simplified if both blocks share a single and properly defined protocol."))}p.isMDXComponent=!0}}]);