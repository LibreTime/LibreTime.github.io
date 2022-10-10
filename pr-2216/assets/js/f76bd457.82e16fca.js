"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2733],{6963:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=n(7462),t=(n(7294),n(3905)),o=n(1839);const s={},r="Database schema creation and migrations",d={unversionedId:"developer-manual/design/database-migrations",id:"developer-manual/design/database-migrations",title:"Database schema creation and migrations",description:"The method to maintain the database schema, is to write both a migration file for already installed databases and to update a schema.sql file for fresh databases. On fresh installation, the database is filled with the schema.sql and data.sql files and LibreTime won't run any sql migration on top of it. Previously, when LibreTime was upgraded, the missing migrations were run using a custom php based migration tool, those migrations are now handled by Django. The missing migrations are tracked using both a schemaversion field in the ccpref table and a Django migration id.",source:"@site/../docs/developer-manual/design/database-migrations.md",sourceDirName:"developer-manual/design",slug:"/developer-manual/design/database-migrations",permalink:"/pr-2216/docs/next/developer-manual/design/database-migrations",draft:!1,editUrl:"https://github.com/libretime/libretime/blob/main/docs/../docs/developer-manual/design/database-migrations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/pr-2216/docs/next/developer-manual/design/architecture"},next:{title:"Development environment",permalink:"/pr-2216/docs/next/developer-manual/development/environment"}},m={},l=[],g={toc:l};function p(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,i.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"database-schema-creation-and-migrations"},"Database schema creation and migrations"),(0,t.kt)("p",null,"The method to maintain the database schema, is to write both a migration file for already installed databases and to update a ",(0,t.kt)("inlineCode",{parentName:"p"},"schema.sql")," file for fresh databases. On fresh installation, the database is filled with the ",(0,t.kt)("inlineCode",{parentName:"p"},"schema.sql")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"data.sql")," files and LibreTime won't run any sql migration on top of it. Previously, when LibreTime was upgraded, the missing migrations were run using a custom php based migration tool, those migrations are now handled by Django. The missing migrations are tracked using both a ",(0,t.kt)("inlineCode",{parentName:"p"},"schema_version")," field in the ",(0,t.kt)("inlineCode",{parentName:"p"},"cc_pref")," table and a Django migration id."),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Since LibreTime forked, the ",(0,t.kt)("inlineCode",{parentName:"p"},"schema_version")," in the ",(0,t.kt)("inlineCode",{parentName:"p"},"schema.sql")," was locked on ",(0,t.kt)("inlineCode",{parentName:"p"},"3.0.0-alpha")," and all the migrations were run during the first user connection. This has been fixed during the move to the Django based migrations.")),(0,t.kt)("p",null,"Django doesn't maintain a ",(0,t.kt)("inlineCode",{parentName:"p"},"schema.sql")," file, it applies every migrations until it reaches the targeted schema represented by the code. The legacy ",(0,t.kt)("inlineCode",{parentName:"p"},"schema_version")," has to be tracked until we remove the Propel schema generation and let Django handle all the schema migrations. Until then Propel generate the schema and Django handle migrations from already installed databases."),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"The first Django migration is the initial schema creation using the ",(0,t.kt)("inlineCode",{parentName:"p"},"schema.sql")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"data.sql")," files.")),(0,t.kt)(o.G,{chart:'stateDiagram-v2\n    state is_django_migration_applied <<choice>>\n    [*] --\x3e is_django_migration_applied: Is the django migration ID in the DB ?\n\n    is_django_migration_applied --\x3e [*]: Yes, ignoring...\n\n    state "Apply django migration" as apply_django_migration\n    is_django_migration_applied --\x3e apply_django_migration: No\n\n    state apply_django_migration {\n        state is_legacy_migration <<choice>>\n        [*] --\x3e is_legacy_migration: Is it a legacy migration ?\n\n        state "Run django migration" as run_django_migration\n        state "Apply changes" as run_django_migration\n        state "Save migration ID in DB" as run_django_migration\n        is_legacy_migration --\x3e run_django_migration: No\n        run_legacy_migration --\x3e run_django_migration\n        run_django_migration --\x3e [*]\n\n        state is_legacy_migration_applied <<choice>>\n        is_legacy_migration_applied --\x3e [*]: Yes, ignoring...\n\n        state "Run legacy migration" as run_legacy_migration\n        state "Apply changes" as run_legacy_migration\n        state "Bump legacy schema version" as run_legacy_migration\n        is_legacy_migration_applied --\x3e run_legacy_migration: No\n        is_legacy_migration --\x3e is_legacy_migration_applied:  Yes, is the DB schema version >= legacy migration schema version ?\n    }\n\n    apply_django_migration --\x3e [*]',mdxType:"Mermaid"}))}p.isMDXComponent=!0}}]);