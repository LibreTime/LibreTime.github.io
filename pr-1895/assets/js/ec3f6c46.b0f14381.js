(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5434],{7694:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=n(93456),s=["components"],l={title:"Reverse proxy",sidebar_position:30},p=void 0,m={unversionedId:"admin-manual/setup/reverse-proxy",id:"version-3.0.0-alpha.13/admin-manual/setup/reverse-proxy",title:"Reverse proxy",description:"This guide walk you though the steps required to setup a reverse proxy in front of LibreTime.",source:"@site/versioned_docs/version-3.0.0-alpha.13/admin-manual/setup/reverse-proxy.md",sourceDirName:"admin-manual/setup",slug:"/admin-manual/setup/reverse-proxy",permalink:"/pr-1895/docs/admin-manual/setup/reverse-proxy",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/versioned_docs/version-3.0.0-alpha.13/admin-manual/setup/reverse-proxy.md",tags:[],version:"3.0.0-alpha.13",sidebarPosition:30,frontMatter:{title:"Reverse proxy",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/pr-1895/docs/admin-manual/setup/configuration"},next:{title:"Upgrade",permalink:"/pr-1895/docs/admin-manual/setup/upgrade"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install a reverse proxy",id:"install-a-reverse-proxy",level:2},{value:"Apache",id:"apache",level:3},{value:"Nginx",id:"nginx",level:3},{value:"Icecast",id:"icecast",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide walk you though the steps required to setup a reverse proxy in front of LibreTime."),(0,r.kt)("p",null,"Setting a reverse proxy in front of LibreTime is recommended, it prevents LibreTime to be\nopen to the Internet, adds security by enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"https")," and let's you manage your certificates in\na single place."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The current input and output streams are Icecast based protocols and does not support being behind a reverse proxy. ",(0,r.kt)("strong",{parentName:"p"},"Do not attempt")," to ",(0,r.kt)("a",{parentName:"p",href:"#icecast"},"reverse proxy Icecast")," or the Liquidsoap harbor inputs."),(0,r.kt)("p",{parentName:"div"},"Modern protocols such as ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_Live_Streaming"},"HLS")," and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Secure_Reliable_Transport"},"SRT")," will be implement in the future to fix those limitations."))),(0,r.kt)("p",null,"Below is a schema that illustrate the goals when setting up a reverse proxy in front of LibreTime:"),(0,r.kt)(o.Mermaid,{config:{},chart:"flowchart TD\n    internet[Internet]\n\n    subgraph internal[Your system or private network]\n        libretime[LibreTime service, listen on :8080]\n\n        icecast[Icecast service, listen on :8000]\n        liquidsoap[Liquidsoap service, listen on :8001 and 8002]\n\n        subgraph proxy[Your reverse proxy]\n            front_http[Listen on :80]\n            front_https[Listen on :443]\n            front_http -.-> |Redirect to https| front_https\n\n            router[Router]\n            front_https --\x3e |Terminate https| router\n        end\n\n        router --\x3e |If hostname is radio.example.com| libretime\n    end\n\n    internet ==> front_http\n    internet ==> front_https\n\n    internet ==> icecast\n    internet ==> liquidsoap",mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You need a domain name (",(0,r.kt)("inlineCode",{parentName:"p"},"radio.example.com"),") and a ",(0,r.kt)("inlineCode",{parentName:"p"},"tls")," certificate for that domain. You can get certificates from Let's Encrypt by using ",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"Certbot"),"."),(0,r.kt)("p",null,"You need to identify the location of the services that should be exposed to the public:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the LibreTime web server (usually ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:8080"),", for documentation clarity we use ",(0,r.kt)("inlineCode",{parentName:"li"},"libretime:8080"),").")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If LibreTime is running on the same host as the reverse proxy, you need to change the LibreTime web server default listening port because the reverse proxy needs to listen on the ",(0,r.kt)("inlineCode",{parentName:"p"},"80"),"and ",(0,r.kt)("inlineCode",{parentName:"p"},"443")," ports."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Be sure that your firewall and network allows communications from the reverse proxy to the services. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ping"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"telnet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," to check that communication is working."))),(0,r.kt)("h2",{id:"install-a-reverse-proxy"},"Install a reverse proxy"),(0,r.kt)("h3",{id:"apache"},"Apache"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You follow one of these guides to configure Apache with a Let's Encrypt certificate."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-20-04"},"How To Secure Apache with Let's Encrypt on Ubuntu 20.04"))))),(0,r.kt)("p",null,"\ud83d\udea7"),(0,r.kt)("h3",{id:"nginx"},"Nginx"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You follow one of these guides to configure Nginx with a Let's Encrypt certificate."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04"},"How To Secure Nginx with Let's Encrypt on Ubuntu 20.04"))))),(0,r.kt)("p",null,"Once you installed nginx and retrieved the required certificates, you can configure the reverse proxy to work with LibreTime."),(0,r.kt)("p",null,"Paste the following configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/libretime.conf")," and be sure to replace:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"radio.example.com")," with your own station url,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libretime:8080")," with the location of your LibreTime web server;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80;\n    server_name radio.example.com;\n    location / {\n        rewrite ^ https://$server_name$request_uri? permanent;\n    }\n}\n\nserver {\n    listen 443 ssl;\n    server_name radio.example.com;\n\n    ssl_certificate /etc/letsencrypt/live/radio.example.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/radio.example.com/privkey.pem;\n\n    location / {\n        proxy_set_header Host              $host;\n        proxy_set_header X-Real-IP         $remote_addr;\n        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header X-Forwarded-Host  $host;\n        proxy_set_header X-Forwarded-Port  $server_port;\n\n        proxy_pass http://libretime:8080/;\n    }\n}\n")),(0,r.kt)("p",null,"Enable the nginx configuration and restart nginx using the commands below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /etc/nginx/sites-available/libretime.conf /etc/nginx/sites-enabled/\nsudo systemctl restart nginx\n")),(0,r.kt)("h2",{id:"icecast"},"Icecast"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you attempt to listen an insecure Icecast stream on a secure website, a\n",(0,r.kt)("a",{parentName:"p",href:"https://support.mozilla.org/en-US/kb/mixed-content-blocking-firefox"},"mixed content error"),"\nwill be raised by your browser and should prevent your player from listening to the stream."),(0,r.kt)("p",{parentName:"div"},"You follow one of these guides to configure a secure Icecast server with a Let's Encrypt certificate."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mediarealm.com.au/articles/icecast-https-ssl-setup-lets-encrypt/"},"Icecast HTTPS/SSL with Let\u2019s Encrypt"))))))}h.isMDXComponent=!0},11748:function(e,t,n){var a={"./locale":89234,"./locale.js":89234};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=11748}}]);