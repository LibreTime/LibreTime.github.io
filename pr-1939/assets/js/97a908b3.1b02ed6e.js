"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5092],{2498:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(1839);const l={title:"Releases"},s=void 0,i={unversionedId:"developer-manual/development/releases",id:"developer-manual/development/releases",title:"Releases",description:"Distributions releases support",source:"@site/../docs/developer-manual/development/releases.md",sourceDirName:"developer-manual/development",slug:"/developer-manual/development/releases",permalink:"/pr-1939/docs/next/developer-manual/development/releases",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/developer-manual/development/releases.md",tags:[],version:"current",frontMatter:{title:"Releases"},sidebar:"tutorialSidebar",previous:{title:"Development environment",permalink:"/pr-1939/docs/next/developer-manual/development/environment"},next:{title:"LibreTime API usage",permalink:"/pr-1939/docs/next/developer-manual/legacy-api"}},o={},p=[{value:"Distributions releases support",id:"distributions-releases-support",level:2},{value:"Versioning schema",id:"versioning-schema",level:2},{value:"Releasing a new version",id:"releasing-a-new-version",level:2},{value:"1. Version bump",id:"1-version-bump",level:3},{value:"2. Release note",id:"2-release-note",level:3},{value:"3. Website and docs",id:"3-website-and-docs",level:3},{value:"4. Create a new pull request",id:"4-create-a-new-pull-request",level:3},{value:"5. Create and push a tag",id:"5-create-and-push-a-tag",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"distributions-releases-support"},"Distributions releases support"),(0,r.kt)("p",null,"New releases target the current stable distributions release, and development should prepare for future stable distributions releases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We recommend installing LibreTime on the current stable distributions."),(0,r.kt)("li",{parentName:"ul"},"Maintenance only releases will provide bug and security fixes for stable and old stable distributions.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Ubuntu 18.04"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Debian 10"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Ubuntu 20.04"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Debian 11"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Release date"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2018-04-26"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2019-07-06"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2020-04-23"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2021-08-14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"End of life"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2023-04"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2024-06"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2025-04"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2026-06")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Versions"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3.0.x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"maintenance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"maintenance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"recommended"),(0,r.kt)("td",{parentName:"tr",align:"center"},"recommended")))),(0,r.kt)("h2",{id:"versioning-schema"},"Versioning schema"),(0,r.kt)("p",null,"We follow the ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"Semantic Versioning")," standards."),(0,r.kt)("p",null,"In a nutshell, given a version number ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJOR.MINOR.PATCH")," we increment the:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"MAJOR")," version when we make incompatible API changes,"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"MINOR")," version when we add functionality in a backwards-compatible manner, and"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"PATCH")," version when we make backwards-compatible bug fixes.")),(0,r.kt)("h2",{id:"releasing-a-new-version"},"Releasing a new version"),(0,r.kt)("p",null,"This guide walks you through the steps required to release a new version of LibreTime."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide is still a work in progress, and does not cover every use cases. Depending on\nthe version bump, some steps might be wrong. For example, in case of a patch release,\nthe documentation requires different changes.")),(0,r.kt)("p",null,"Before releasing a new version, make sure linter don't fail and tests are passing."),(0,r.kt)("p",null,"Start by cleaning the repository and make sure you don't have uncommitted changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git checkout main\nmake clean\ngit status\n")),(0,r.kt)("p",null,"Choose the next version based the our ",(0,r.kt)("a",{parentName:"p",href:"#versioning-schema"},"versioning schema"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export VERSION=3.0.0-beta.0\n")),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"release-$VERSION")," branch and release commit to prepare a release pull request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git checkout -b "release-$VERSION"\nexport COMMIT_MESSAGE="chore: release $VERSION"\ngit commit --allow-empty "$COMMIT_MESSAGE"\n')),(0,r.kt)("h3",{id:"1-version-bump"},"1. Version bump"),(0,r.kt)("p",null,"Write the new ",(0,r.kt)("inlineCode",{parentName:"p"},"$VERSION")," to the VERSION file, and bump the python packages version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bash tools/bump-python-version.sh "$VERSION"\n\ngit add .\ngit commit --fixup ":/$COMMIT_MESSAGE"\n')),(0,r.kt)("h3",{id:"2-release-note"},"2. Release note"),(0,r.kt)("p",null,"Prepare a new release note based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/releases/unreleased.md")," file. Be sure that\nthe filename match the releases notes naming conventions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l docs/releases/\ncp docs/releases/unreleased.md docs/releases/$VERSION.md\n")),(0,r.kt)("p",null,"The release note file must be updated with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the version and date of this release,"),(0,r.kt)("li",{parentName:"ul"},"an auto generated features and bug fixes changelog,"),(0,r.kt)("li",{parentName:"ul"},"instructions for upgrading,"),(0,r.kt)("li",{parentName:"ul"},"deprecation notices,"),(0,r.kt)("li",{parentName:"ul"},"remove empty sections.")),(0,r.kt)("p",null,"Reset and clean the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/releases/unreleased.md")," file for a future version."),(0,r.kt)("p",null,"Update the Github release creation job to use the new release note file in ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/release.yml"),"."),(0,r.kt)("p",null,"Commit the release note changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit --fixup ":/$COMMIT_MESSAGE"\n')),(0,r.kt)("h3",{id:"3-website-and-docs"},"3. Website and docs"),(0,r.kt)("p",null,"Update the version in the website files, the files that need changing are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"website/vars.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"website/versions.json"))),(0,r.kt)("p",null,"Replace the old versioned docs with the current docs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv website/versioned_sidebars/version-*-sidebars.json website/versioned_sidebars/version-$VERSION-sidebars.json\n\nrm -R website/versioned_docs/version-*\ncp -R docs website/versioned_docs/version-$VERSION\n")),(0,r.kt)("p",null,"Commit the website and docs changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit --fixup ":/$COMMIT_MESSAGE"\n')),(0,r.kt)("h3",{id:"4-create-a-new-pull-request"},"4. Create a new pull request"),(0,r.kt)("p",null,"Squash the changes and open a pull request for others to review:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git rebase --autosquash --interactive main\n")),(0,r.kt)("p",null,"Merge the pull request when it is reviewed and ready."),(0,r.kt)("h3",{id:"5-create-and-push-a-tag"},"5. Create and push a tag"),(0,r.kt)("p",null,"Pull the merged release commit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout main\ngit pull upstream main\n")),(0,r.kt)("p",null,"Make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," is the previously merged release commit and tag it with the new version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git show --quiet\n\ngit tag -a -m "$VERSION" "$VERSION"\n')),(0,r.kt)("p",null,"Generate the changelog for the newly tagged version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'make changelog\n\ngit add .\ngit commit -m "chore: generate changelog for $VERSION"\n')),(0,r.kt)("p",null,"Push the tag upstream to finalize the release process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git push upstream main --follow-tags\n")))}m.isMDXComponent=!0}}]);