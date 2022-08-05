"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5140],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(f,o(o({ref:n},l),{},{components:t})):a.createElement(f,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44398:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"Custom authentication",sidebar_position:40},o=void 0,c={unversionedId:"admin-manual/custom-authentication",id:"admin-manual/custom-authentication",title:"Custom authentication",description:"Since LibreTime v3.0.0-alpha.13, this documentation is out of date, as it relies on the Apache2 web server and the default web server installed by LibreTime is now NGINX.",source:"@site/../docs/admin-manual/custom-authentication.md",sourceDirName:"admin-manual",slug:"/admin-manual/custom-authentication",permalink:"/pr-2018/docs/next/admin-manual/custom-authentication",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/admin-manual/custom-authentication.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Custom authentication",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Stream configuration",permalink:"/pr-2018/docs/next/admin-manual/stream-configuration"},next:{title:"Change default passwords",permalink:"/pr-2018/docs/next/admin-manual/default-passwords"}},u={},s=[{value:"Setup FreeIPA authentication",id:"setup-freeipa-authentication",level:2},{value:"Apache configuration",id:"apache-configuration",level:3},{value:"PAM configuration",id:"pam-configuration",level:3},{value:"LDAP configuration",id:"ldap-configuration",level:3},{value:"Enable FreeIPA authentication",id:"enable-freeipa-authentication",level:3}],l={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Since LibreTime v3.0.0-alpha.13, this documentation is out of date, as it relies on the Apache2 web server and the default web server installed by LibreTime is now NGINX.")),(0,r.kt)("h2",{id:"setup-freeipa-authentication"},"Setup FreeIPA authentication"),(0,r.kt)("p",null,"You can configure LibreTime to delegate all authentication to a FreeIPA server."),(0,r.kt)("p",null,"This allows you users to use their existing FreeIPA credentials. For this to\nwork you need to configure Apache to use ",(0,r.kt)("inlineCode",{parentName:"p"},"mod_authnz_pam")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mod_intercept_form_submit"),"."),(0,r.kt)("h3",{id:"apache-configuration"},"Apache configuration"),(0,r.kt)("p",null,"After installing the needed modules you can set up Apache to intercept form logins and\ncheck them against pam."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-apacheconf"},"<Location /login>\n    InterceptFormPAMService http-libretime\n    InterceptFormLogin username\n    InterceptFormPassword password\n    InterceptFormLoginSkip admin\n    InterceptFormPasswordRedact on\n    InterceptFormLoginRealms INT.RABE.CH\n    Require pam-account http-libretime\n</Location>\n\n<Location />\n    <RequireAny>\n       <RequireAny>\n           Require pam-account http-libretime\n           Require all granted\n       </RequireAny>\n       <RequireAll>\n           Require expr %{REQUEST_URI} =~  /(index.php|login|favicon.ico|js|css|locale)/\n           Require all granted\n       </RequireAll>\n    </RequireAny>\n</Location>\n")),(0,r.kt)("h3",{id:"pam-configuration"},"PAM configuration"),(0,r.kt)("p",null,"The above configuration expects a PAM configuration for the ",(0,r.kt)("inlineCode",{parentName:"p"},"http-libretime")," service."),(0,r.kt)("p",null,"To confiure this you need to create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/pam.d/http-libretime")," with the following contents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"auth    required   pam_sss.so\naccount required   pam_sss.so\n")),(0,r.kt)("h3",{id:"ldap-configuration"},"LDAP configuration"),(0,r.kt)("p",null,"LibreTime needs direct access to LDAP so it can fetch additional information. It does so with\na ",(0,r.kt)("a",{parentName:"p",href:"https://www.freeipa.org/page/HowTo/LDAP#System_Accounts"},"system account")," that you need to\nset up beforehand."),(0,r.kt)("p",null,"You can configure everything pertaining to how LibreTime accesses LDAP in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/libretime/config.yml"),". The default file has the following values you need to change."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'#\n# ----------------------------------------------------------------------\n#                          L D A P\n# ----------------------------------------------------------------------\n#\n# hostname:       Hostname of LDAP server\n#\n# binddn:         Complete DN of user used to bind to LDAP\n#\n# password:       Password for binddn user\n#\n# account_domain: Domain part of username\n#\n# basedn:         base search DN\n#\n# filter_field:   Name of the uid field for searching\n#                 Usually uid, may be cn\n#\n# groupmap_*:     Map LibreTime user types to LDAP groups\n#                 Lets LibreTime assign user types based on the\n#                 group a given user is in.\n#\nldap:\n  hostname: ldap.example.org\n  binddn: "uid=libretime,cn=sysaccounts,cn=etc,dc=int,dc=example,dc=org"\n  password: hackme\n  account_domain: INT.EXAMPLE.ORG\n  basedn: "cn=users,cn=accounts,dc=int,dc=example,dc=org"\n  filter_field: uid\n  groupmap_guest: "cn=guest,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_host: "cn=host,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_program_manager: "cn=program_manager,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_admin: "cn=admins,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n  groupmap_superadmin: "cn=superadmin,cn=groups,cn=accounts,dc=int,dc=example,dc=org"\n')),(0,r.kt)("h3",{id:"enable-freeipa-authentication"},"Enable FreeIPA authentication"),(0,r.kt)("p",null,"After everything is set up properly you can enable FreeIPA auth in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"general:\n  auth: LibreTime_Auth_Adaptor_FreeIpa\n")),(0,r.kt)("p",null,"You should now be able to use your FreeIPA credentials to log in to LibreTime."))}p.isMDXComponent=!0}}]);