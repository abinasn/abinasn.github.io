import{j as e}from"./index-DiYJGX5p.js";const o={toc:[{id:"what-it-is",text:"What it is",depth:2},{id:"why-it-exists",text:"Why it exists",depth:2},{id:"architecture",text:"Architecture",depth:2},{id:"backend-design",text:"Backend design",depth:2},{id:"hard-problem-1-a-pipeline-that-resumes",text:"Hard problem 1: a pipeline that resumes",depth:2},{id:"hard-problem-2-an-async-ai-service",text:"Hard problem 2: an async AI service",depth:2},{id:"hard-problem-3-concurrency-and-availability",text:"Hard problem 3: concurrency and availability",depth:2},{id:"frontend",text:"Frontend",depth:2},{id:"hard-problem-4-the-subtitle-editor",text:"Hard problem 4: the subtitle editor",depth:2},{id:"teams-roles-and-assignments",text:"Teams, roles and assignments",depth:2},{id:"data-model",text:"Data model",depth:2},{id:"infrastructure-and-delivery",text:"Infrastructure and delivery",depth:2},{id:"highlights",text:"Highlights",depth:2}],placedProblems:!1};function t(n){const s={code:"code",em:"em",h2:"h2",h3:"h3",li:"li","mermaid-diagram":"mermaid-diagram",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components},r=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"what-it-is",children:"What it is"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"BeyondCaptions"})," turns video and audio into broadcast-ready subtitles in any language."]}),`
`,e.jsxs(s.p,{children:["A user uploads a video. The platform compresses it, prepares it for streaming, extracts the audio and sends it to an AI model that transcribes the speech, with about ",e.jsx(s.strong,{children:"88% first-pass accuracy for Filipino"}),". The transcript is then split into subtitle segments that follow the team's caption rules: characters per line, number of lines, and minimum and maximum time on screen."]}),`
`,e.jsxs(s.p,{children:["Editors review and correct those subtitles in a ",e.jsx(s.strong,{children:"browser-based editor"})," that shows the video, its audio waveform and the live subtitles side by side. Once the source language is approved, translation jobs produce subtitles in other languages, reviewed in the same editor. Finished subtitles export as ",e.jsx(s.code,{children:"SRT"}),", ",e.jsx(s.code,{children:"VTT"}),", ",e.jsx(s.code,{children:"TXT"})," or ",e.jsx(s.code,{children:"JSON"}),", as broadcast captions (including ",e.jsx(s.code,{children:"SCC"}),", through an encoder written in-house), or as a three-column dubbing script."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Upload media → AI transcribes → AI segments into subtitles → humans review in the editor
            → approve → AI translates into N languages → humans review translations → export
`})}),`
`,e.jsx(s.h2,{id:"why-it-exists",children:"Why it exists"}),`
`,e.jsxs(s.p,{children:["Before BeyondCaptions, subtitlers typed every line by hand in tools like ",e.jsx(s.strong,{children:"Subtitle Edit"}),", scrubbing the video back and forth to sync each line. It was slow, expensive and hard to coordinate across a team."]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Problem"}),e.jsx(s.th,{children:"How BeyondCaptions handles it"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Typing subtitles takes several hours for each hour of video"}),e.jsx(s.td,{children:"The AI writes the first draft, so editors correct text instead of typing it. The platform measures the time saved on every project."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Caption rules differ by client and channel"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Guidelines"})," store the rules. AI segmentation follows them, and the editor shows live characters-per-second and character counts."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Visual presentation differs by channel"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Styles"})," store font, size, colour, alignment and position, previewed on the video in real time."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"A 90-minute video is too much for one person on a deadline"}),e.jsxs(s.td,{children:["Media is split into ~5-minute ",e.jsx(s.strong,{children:"parts"}),". Several editors work on different parts at once, with locking so two people never edit the same part."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Managers can't see who is doing what"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Assignments"})," delegate work with an expected SLA. Actual time is measured from editor sessions, and each assignment is marked SLA ",e.jsx(s.code,{children:"PASS"})," or ",e.jsx(s.code,{children:"FAIL"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Measuring AI quality"}),e.jsxs(s.td,{children:["Every segment keeps its original AI text and timing, so the platform computes an ",e.jsx(s.strong,{children:"edit rate"}),": how much of the AI output humans changed."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Departments need their own workspaces"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Teams"})," with invitations, roles and fine-grained permissions isolate each department's data."]})]})]})]}),`
`,e.jsx(s.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsxs(s.p,{children:["The platform began as a ",e.jsx(s.strong,{children:"Moleculer"})," microservices monorepo. I re-platformed it into ",e.jsx(s.strong,{children:"two focused Express 5 services"})," that share one typed contract package."]}),`
`,e.jsx(r,{chart:`flowchart LR
    subgraph Browser
        UI["React SPA<br/>(Redux, shadcn/ui)"]
        ED["Subtitle Editor<br/>+ Web Worker sync"]
    end

    subgraph AWS
        CF[CloudFront]
        subgraph ECS["ECS on Graviton (ARM64)"]
            CORE["beyond-captions-core<br/>identity & collaboration"]
            WS["Socket.IO worker thread<br/>(real-time events)"]
            PROJ["beyond-captions-project<br/>content & media pipeline"]
            WK["worker_threads pool<br/>(chunk + waveform)"]
        end
        S3[(S3<br/>media, HLS, peaks)]
        SQS[[SQS<br/>S3 ingest events]]
        DB[(MongoDB)]
    end

    AI["AI Model Service<br/>transcribe / segment / translate"]
    CCC["Caption Format<br/>Converter API"]

    UI -->|REST + JWT| CORE
    UI -->|REST + JWT| PROJ
    ED -->|batched autosave| PROJ
    UI <-->|WebSocket| WS
    UI -->|presigned PUT/GET| S3
    UI --> CF --> S3

    PROJ -->|JWKS verify, token relay| CORE
    CORE -->|token relay| PROJ
    PROJ -->|emit events| WS
    PROJ --> WK
    PROJ --> S3
    SQS --> PROJ
    PROJ -->|submit job| AI
    AI -->|webhook callback| PROJ
    PROJ --> CCC
    CORE --> DB
    PROJ --> DB`}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Decision"}),e.jsx(s.th,{children:"Reasoning"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Two services split by domain"}),": ",e.jsx(s.em,{children:"core"})," (who you are, which team you're in) and ",e.jsx(s.em,{children:"project"})," (the content you work on)"]}),e.jsx(s.td,{children:"Each scales and deploys independently. The media pipeline is CPU-heavy; identity traffic is light and latency-sensitive."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"RS256 JWT + JWKS"})}),e.jsxs(s.td,{children:["Core signs tokens and publishes its public key at ",e.jsx(s.code,{children:"/.well-known/jwks.json"}),". The project service verifies tokens ",e.jsx(s.strong,{children:"locally"})," with a cached key set, so no request waits on core just to check a token."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Token relay between services"})}),e.jsxs(s.td,{children:["Every cross-service call happens inside a user's request, so the caller forwards that user's bearer token. No second token type or shared secret. A 5-second timeout returns a clean ",e.jsx(s.code,{children:"503"})," if the other service is down."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Presigned S3 URLs"})}),e.jsx(s.td,{children:"The browser uploads and downloads media directly. The API never carries media bytes, which keeps the API servers small and fast."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"HLS with per-segment presigned URLs"})}),e.jsxs(s.td,{children:["Presigned URLs can't use wildcards, so the service rewrites the ",e.jsx(s.code,{children:".m3u8"})," playlist to give every ",e.jsx(s.code,{children:".ts"})," segment its own signed URL, generated in parallel."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsxs(s.strong,{children:["Shared ",e.jsx(s.code,{children:"interfaces"})," package"]})}),e.jsx(s.td,{children:"One TypeScript contract package is used by the UI and both services, so frontend and backend agree on every request and response at compile time."})]})]})]}),`
`,e.jsx(s.h3,{children:"Two services"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"beyond-captions-core"})})," owns identity and collaboration: SSO (OneLogin/OIDC) and password login, JWKS publication, teams, invitations and per-member permissions, custom work roles, editor sessions with part locking and active-time tracking, settings, and notifications delivered by a ",e.jsx(s.strong,{children:"Socket.IO server running in its own worker thread"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"beyond-captions-project"})})," owns content and media: the project and its ",e.jsx(s.strong,{children:"5-stage processing pipeline"}),", ~5-minute media parts with waveform data, subtitles with batched autosave and multi-format export, translation jobs, a single S3 gateway with automatic ingest from S3 events through SQS, guidelines, styles, watermarks, and assignments with SLA tracking."]}),`
`,e.jsxs(s.p,{children:["Both services expose ",e.jsx(s.strong,{children:"auto-generated OpenAPI docs"})," at ",e.jsx(s.code,{children:"/docs"}),", built from the same Zod schemas that validate requests, so the docs can't drift from the real behaviour."]}),`
`,e.jsx(s.h2,{id:"backend-design",children:"Backend design"}),`
`,e.jsx(s.h3,{children:"One job per layer"}),`
`,e.jsx(s.p,{children:"Both services use a strict layered MVC. Every request takes the same path:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`route → validate(Zod) → controller → service → repository → model (Mongoose)
                                         │
                                         └── throws a typed AppError
                                                    │
                                                    ▼
                                           errorHandler → { success:false, message, data:null }
`})}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Layer"}),e.jsx(s.th,{children:"Allowed to"}),e.jsx(s.th,{children:"Not allowed to"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Route"})}),e.jsx(s.td,{children:"Register the OpenAPI doc and the route, chain middleware"}),e.jsx(s.td,{children:"Contain logic"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Validate"})}),e.jsxs(s.td,{children:["Parse ",e.jsx(s.code,{children:"body"}),", ",e.jsx(s.code,{children:"query"})," and ",e.jsx(s.code,{children:"params"})," with Zod and ",e.jsx(s.strong,{children:"replace"})," the raw input with the parsed result"]}),e.jsx(s.td,{children:"—"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Controller"})}),e.jsxs(s.td,{children:["Unwrap the request, call ",e.jsx(s.strong,{children:"one"})," service method, send the response"]}),e.jsxs(s.td,{children:["Hold business logic or ",e.jsx(s.code,{children:"try/catch"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Service"})}),e.jsx(s.td,{children:"Hold all the rules and throw typed errors"}),e.jsxs(s.td,{children:["Touch ",e.jsx(s.code,{children:"req"}),"/",e.jsx(s.code,{children:"res"})," or call Mongoose"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Repository"})}),e.jsx(s.td,{children:"Run every Mongoose query and own field projections, so sensitive fields can't leak"}),e.jsx(s.td,{children:"Be imported by another module"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Model"})}),e.jsx(s.td,{children:"Define the Mongoose schema, typed against the shared interface"}),e.jsx(s.td,{children:"—"})]})]})]}),`
`,e.jsx(s.p,{children:"The rules that keep it consistent:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"One response shape."})," Every success and failure is ",e.jsx(s.code,{children:"{ success, message, data }"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"One error handler."})," Services throw and ",e.jsx(s.code,{children:"error.middleware.ts"})," renders. Express 5 forwards rejected promises, so ",e.jsxs(s.strong,{children:["no route has a ",e.jsx(s.code,{children:"try/catch"})]}),". Zod errors, duplicate keys, bad ids, expired JWTs, bad JSON and oversized payloads become readable 4xx messages; anything else is a generic 500, and stack traces never reach production clients."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"One source of truth per contract."})," The same Zod schema drives validation and Swagger."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Only repositories touch Mongoose"}),", and modules call each other's ",e.jsx(s.strong,{children:"services, never repositories"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["No ",e.jsx(s.code,{children:"any"}),"."]})," Strict TypeScript with ",e.jsx(s.code,{children:"noUncheckedIndexedAccess"})," and ",e.jsx(s.code,{children:"verbatimModuleSyntax"}),"."]}),`
`]}),`
`,e.jsx(s.p,{children:"Every module has the same shape, so reading one module teaches you all of them:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`src/modules/<module>/
├── <module>.model.ts        Mongoose schema
├── <module>.constant.ts     route prefix, OpenAPI tags, projections
├── <module>.repository.ts   all database access
├── <module>.helper.ts       pure functions, no I/O
├── <module>.validation.ts   Zod schemas + contract lock
├── <module>.controller.ts   thin HTTP handlers
├── <module>.routes.ts       OpenAPI registration + router
└── services/
    ├── create.service.ts    one file per group of related use cases
    ├── query.service.ts
    ├── update.service.ts
    └── delete.service.ts
`})}),`
`,e.jsxs(s.p,{children:["Only ",e.jsx(s.code,{children:"services/"})," is split into several files. Business logic is what grows out of control, so it alone is split by use case."]}),`
`,e.jsx(s.h3,{children:"The contract lock"}),`
`,e.jsxs(s.p,{children:["Types live in the shared package and runtime validation lives in Zod. A compile-time assertion ties the two together, so if a schema drifts from its contract, ",e.jsx(s.strong,{children:"the build fails"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"export"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" type"}),e.jsx(s.span,{style:{color:"#FFA657"},children:" CreateJobBody"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#FFA657"},children:" z"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"."}),e.jsx(s.span,{style:{color:"#FFA657"},children:"infer"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"<"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"typeof"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" CreateJobBodySchema>;"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"export"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" type"}),e.jsx(s.span,{style:{color:"#FFA657"},children:" _CreateJobBodyMatchesContract"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#FFA657"},children:" AssertAssignable"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"<"}),e.jsx(s.span,{style:{color:"#FFA657"},children:"CreateJobBody"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#FFA657"},children:"CreateJobParams"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:">;"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// AssertAssignable<T extends U, U> = T  →  if the schema drifts from the contract, the build fails on this line"})})]})})}),`
`,e.jsx(s.h3,{children:"Dependency injection without a container"}),`
`,e.jsx(s.p,{children:"Each service is a class that receives its repository as a constructor default and is exported as a singleton. That keeps services testable without a DI framework:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"export"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" class"}),e.jsx(s.span,{style:{color:"#FFA657"},children:" ProjectCreateService"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"    constructor"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"private"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" readonly"}),e.jsx(s.span,{style:{color:"#FFA657"},children:" projects"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:":"}),e.jsx(s.span,{style:{color:"#FFA657"},children:" ProjectRepository"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" projectRepository) {}"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"    public"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" async"}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:" createProject"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#FFA657"},children:"body"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:":"}),e.jsx(s.span,{style:{color:"#FFA657"},children:" CreateProjectBody"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#FFA657"},children:"actor"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:":"}),e.jsx(s.span,{style:{color:"#FFA657"},children:" AuthenticatedUser"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#FFA657"},children:"teamId"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:":"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" string"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:") { … }"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"}"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"export"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" projectCreateService"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" new"}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:" ProjectCreateService"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"();"})]})]})})}),`
`,e.jsxs(s.p,{children:["Where two modules depend on each other (like ",e.jsx(s.code,{children:"auth"})," and ",e.jsx(s.code,{children:"teams"}),"), constructor injection would crash at boot with ",e.jsx(s.em,{children:"access before initialization"}),". Those calls read the other singleton ",e.jsx(s.strong,{children:"inside the method body"}),", which only runs after the whole module graph has loaded."]}),`
`,e.jsx(s.h3,{children:"Built to run in production"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Environment validated at boot."})," A missing variable stops startup with a readable list, instead of surfacing as ",e.jsx(s.code,{children:"undefined"})," days later."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Structured logging"})," with ",e.jsx(s.code,{children:"pino"}),": a request id and logger per request, with credentials redacted."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Security middleware:"})," ",e.jsx(s.code,{children:"helmet"}),", CORS locked to the UI origin, and per-IP rate limiting. Health checks sit before the limiter, so probes are never throttled."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Process guards:"})," unhandled rejections are logged; uncaught exceptions trigger a graceful shutdown. On ",e.jsx(s.code,{children:"SIGTERM"})," the HTTP server closes first, then the database, with a force-exit timer as a backstop."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Database resilience:"})," the first connection retries with exponential backoff and jitter. Later drops reconnect without limit while readiness reports unhealthy, so the orchestrator pulls the instance from rotation instead of killing work in progress."]}),`
`]}),`
`,e.jsx(s.h2,{id:"hard-problem-1-a-pipeline-that-resumes",children:"Hard problem 1: a pipeline that resumes"}),`
`,e.jsxs(s.p,{children:["Creating a project means minutes of CPU-heavy media work plus a long external AI call. An HTTP request can't wait for that, and any step can fail. So the pipeline was designed so that the user gets an ",e.jsx(s.strong,{children:"immediate response"}),", every step is ",e.jsx(s.strong,{children:"visible live"})," in the UI, a failure is recorded against the ",e.jsx(s.strong,{children:"exact step"})," that failed, and ",e.jsx(s.strong,{children:"a retry resumes from that step"})," instead of starting over."]}),`
`,e.jsx(r,{chart:`stateDiagram-v2
    [*] --> Preparation: POST /project (returns immediately)
    Preparation --> Extraction: video
    Preparation --> Transcription: audio
    Extraction --> Transcription
    Transcription --> Optimization: manual / uploaded subtitles
    Transcription --> WaitingForAI: AI transcription
    WaitingForAI --> Optimization: webhook status = Success
    WaitingForAI --> Failed: webhook status = Failed
    Optimization --> Segmentation
    Segmentation --> [*]: captions ready for editing

    Preparation --> Failed
    Extraction --> Failed
    Transcription --> Failed
    Optimization --> Failed
    Segmentation --> Failed
    Failed --> Preparation: retry (resume from failed step)`}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Stage"}),e.jsx(s.th,{children:"What happens"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1. Preparation"})}),e.jsxs(s.td,{children:["Download the source from S3, compress it if it's over 100 MB, generate a thumbnail, optionally burn in a watermark with FFmpeg, probe the duration, and generate an ",e.jsx(s.strong,{children:"HLS"})," rendition."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2. Extraction"})}),e.jsx(s.td,{children:"Extract the audio track (video projects only)."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"3. Transcription"})}),e.jsxs(s.td,{children:["Uploaded or manual subtitles pass straight through. For AI transcription, submit the job and ",e.jsx(s.strong,{children:"stop"}),": the pipeline resumes from a webhook."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"4. Optimization"})}),e.jsxs(s.td,{children:["Split the media into ~5-minute parts that overlap by 10 seconds, each with a thumbnail, audio clip and waveform peaks, built in ",e.jsx(s.strong,{children:"parallel worker threads"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"5. Segmentation"})}),e.jsx(s.td,{children:"Create subtitle segments from the AI transcript (re-flowed to follow the guideline) or from an uploaded subtitle file in any format."})]})]})]}),`
`,e.jsx(s.p,{children:"Every stage is a plain async function built on the same template:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"export"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" async"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" function"}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:" runOptimizationPipeline"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#FFA657"},children:"project"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#FFA657"},children:"actor"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#FFA657"},children:"teamId"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#FFA657"},children:"retryPipeline"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"?"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"    const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" startedAt"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" Date."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"now"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"    try"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"        await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" projectWorkflowService."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"updateAndNotify"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(id, teamId, { currentStep: "}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:'"Optimization"'}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", currentStepStatus: "}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:'"Processing"'}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" });"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"        // … do the work …"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"        const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" updated"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" projectWorkflowService."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"updateAndNotify"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(id, teamId, {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"            currentStep: "}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:'"Optimization"'}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", currentStepStatus: "}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:'"Success"'}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"            optimizationTimeTaken: Date."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"now"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"() "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"-"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" startedAt, isOptimizationCompleted: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"true"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"        });"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"        void"}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:" runSegmentationPipeline"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(updated, actor, teamId)."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"catch"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(logError);   "}),e.jsx(s.span,{style:{color:"#8B949E"},children:"// fire-and-forget hand-off"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"    } "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"catch"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" (error) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"        await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" projectWorkflowService."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"updateAndNotify"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(id, teamId, {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"            currentStep: "}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:'"Optimization"'}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", currentStepStatus: "}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:'"Failed"'}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", errorMessage: error.message,"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"        });"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"    } "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"finally"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"        await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" fs.promises."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"rm"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(tempFolder, { recursive: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"true"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", force: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"true"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" });       "}),e.jsx(s.span,{style:{color:"#8B949E"},children:"// always clean up the disk"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"    }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"}"})})]})})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Every state change is saved ",e.jsx(s.em,{children:"and"})," broadcast."]})," ",e.jsx(s.code,{children:"updateAndNotify()"})," writes to MongoDB, then emits events for the project page and the team's project list, so each card shows its progress live without polling."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Fire-and-forget hand-offs."})," One stage never blocks the HTTP response or the previous stage, and a later failure can't crash the process."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Guaranteed cleanup."})," Each stage works in a per-project temp folder that a ",e.jsx(s.code,{children:"finally"})," block deletes, so disk usage stays flat even when stages fail."]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Retry resumes only the failed stage"}),", and each stage is safe to resume. Optimization re-downloads its input from S3 if the retry lands on a different container. Chunk creation is all-or-nothing (",e.jsx(s.code,{children:"deleteMany"})," then ",e.jsx(s.code,{children:"insertMany"}),"), so a retry never leaves duplicate parts. Completed stages never repeat, so a failure at segmentation doesn't re-encode the video."]}),`
`,e.jsxs(s.p,{children:["That's the main reason ",e.jsx(s.strong,{children:"fewer projects fail for good"}),": an S3 hiccup, an AI timeout or a container restart becomes one click on ",e.jsx(s.em,{children:"Retry"})," instead of a new upload."]}),`
`,e.jsx(s.h2,{id:"hard-problem-2-an-async-ai-service",children:"Hard problem 2: an async AI service"}),`
`,e.jsxs(s.p,{children:["Transcription is the one truly asynchronous leg. It can take longer than the media itself and runs on a separate AI service, so the project service hands the work off and ",e.jsx(s.strong,{children:"waits for a webhook"}),"."]}),`
`,e.jsx(r,{chart:`sequenceDiagram
    autonumber
    participant UI as React UI
    participant P as Project Service
    participant S3
    participant AI as AI Model Service
    participant C as Core (Socket.IO)

    UI->>P: POST /project
    P-->>UI: 201 (project created, status Processing)
    P->>S3: prepare + extract audio
    P->>S3: create empty transcription.json
    P->>AI: submit {audio key, output key, language}
    AI-->>P: { job_id }
    P->>P: store transcriptionRequestId = job_id
    P->>C: emit workflow status
    C-->>UI: "Transcription: Processing"
    Note over P: Pipeline pauses. No thread or request is held open.
    AI->>S3: read audio, write transcript JSON
    AI->>P: POST /webhook/ai-transcription { job_id, status }
    P->>P: find project by transcriptionRequestId
    alt status = Success
        P->>P: resume → Optimization → Segmentation
        P->>C: emit status per stage
    else status = Failed
        P->>P: mark Transcription Failed + errorMessage
        P->>C: emit failure → UI shows Retry
    end`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Shared storage instead of payloads."})," The AI service gets the S3 location of the audio and an ",e.jsx(s.em,{children:"empty output file created in advance"}),". Large audio and transcripts never travel over HTTP."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Correlation id."})," The returned ",e.jsx(s.code,{children:"job_id"})," is stored as ",e.jsx(s.code,{children:"transcriptionRequestId"}),", which the webhook uses to find the project."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Idempotent webhook."})," If the project is already transcribed, the callback is rejected, so a duplicate or late delivery can never start the pipeline twice."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"No user session needed."})," The callback is machine-to-machine, so the handler builds an internal actor from the project's stored owner to resume the pipeline, and status events still reach the user's browser."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Pausing costs nothing."})," While the AI works, nothing is held open. The project is just a document waiting for its callback, and the service can restart in the meantime."]}),`
`]}),`
`,e.jsx(s.h2,{id:"hard-problem-3-concurrency-and-availability",children:"Hard problem 3: concurrency and availability"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Concern"}),e.jsx(s.th,{children:"Solution"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Video processing saturated the CPU"})," (sequential chunking drove ECS tasks to 100%)"]}),e.jsxs(s.td,{children:["Chunks run in ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"worker_threads"})}),", limited by a ",e.jsx(s.strong,{children:"semaphore"})," to ",e.jsx(s.code,{children:"min(3, CPUs − 1)"}),". One core always stays free for API traffic. Parallel chunking gave roughly ",e.jsx(s.strong,{children:"3× throughput"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"A stuck FFmpeg process"})}),e.jsx(s.td,{children:"Each worker has a one-hour timeout, results are accepted only once, and workers are always terminated."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Large file transfers"})}),e.jsx(s.td,{children:"Streaming multipart uploads send FFmpeg output to S3 without buffering whole files in memory. Browsers upload straight to S3."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Waveforms for long media"})}),e.jsxs(s.td,{children:["Audio is downsampled on the server to ",e.jsx(s.strong,{children:"min/max pairs per pixel"}),", so the browser fetches a small JSON file instead of raw audio."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Files dropped into S3"})}),e.jsxs(s.td,{children:["S3 events flow through ",e.jsx(s.strong,{children:"SQS"})," to a long-polling consumer. Messages are acknowledged only after a successful ingest, with exponential backoff on errors."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"The other service is down"})}),e.jsxs(s.td,{children:["Service calls time out after 5 s with a clean ",e.jsx(s.code,{children:"503"}),", and non-essential calls degrade instead of failing: completing an assignment still succeeds without SLA data."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Two editors on the same part"})}),e.jsxs(s.td,{children:["Editor sessions lock a part. A project-wide ",e.jsx(s.em,{children:"Shift Segments"})," session is ",e.jsx(s.strong,{children:"refused while anyone else is editing"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"The same edit sent twice, or one bad edit in a batch"})}),e.jsx(s.td,{children:'Inserts treat a duplicate key as "already applied", and each operation in a batch succeeds or fails on its own, so the client retries only the failures.'})]})]})]}),`
`,e.jsx(s.h2,{id:"frontend",children:"Frontend"}),`
`,e.jsxs(s.p,{children:["The UI is ",e.jsx(s.strong,{children:"React 19 + TypeScript"})," built with Vite, with ",e.jsx(s.strong,{children:"Redux Toolkit"})," (one slice per feature, every API call in a ",e.jsx(s.code,{children:"createAsyncThunk"}),"), ",e.jsx(s.strong,{children:"Tailwind CSS v4 + shadcn/ui"})," for an accessible design system with ",e.jsx(s.strong,{children:"light and dark themes"}),", and ",e.jsx(s.strong,{children:"React Router 7"}),"."]}),`
`,e.jsxs(s.p,{children:["There's ",e.jsx(s.strong,{children:"one Axios instance per backend"}),", built from the same factory. Interceptors add the bearer token and ",e.jsx(s.code,{children:"team-id"})," header to every call, and turn a ",e.jsx(s.code,{children:"401"})," into a global ",e.jsx(s.em,{children:"session expired"})," modal instead of a silent failure. Request and response types come from the ",e.jsx(s.strong,{children:"same shared package as the backend"}),", so a backend contract change breaks the frontend build, not production."]}),`
`,e.jsx(s.p,{children:"Reusable pieces keep the app consistent:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"CommonTable"})}),": a generic TanStack table. Every list (projects, files, guidelines, styles, members, roles) is the same component with a different column file, and search, pagination, selection and resizing are opt-in flags."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Shared field components"})," per entity, so create and update dialogs define validation and layout once."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"PermissionCheckBox"})}),", built from permission metadata in the shared contract. Adding a permission to the contract adds it to the UI automatically."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:e.jsx(s.code,{children:"UploadTracker"})}),": a global upload tray, so users keep working while large media uploads."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Custom hooks"})," keep behaviour out of components: ",e.jsx(s.code,{children:"useSocket"}),", ",e.jsx(s.code,{children:"useEditorSession"}),", ",e.jsx(s.code,{children:"useUndoRedo"}),", ",e.jsx(s.code,{children:"useSingleTab"})," and more."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Small details that matter: pipeline progress updates ",e.jsx(s.strong,{children:"live over WebSocket"}),"; ",e.jsx(s.code,{children:"useSingleTab"})," uses the ",e.jsx(s.strong,{children:"Web Locks API"})," to stop a second tab fighting over the same editor session; ",e.jsx(s.code,{children:"navigator.sendBeacon"})," ends the session reliably when a tab closes; and the waveform canvas reads its colour from CSS variables, so it follows the theme."]}),`
`,e.jsx(s.h2,{id:"hard-problem-4-the-subtitle-editor",children:"Hard problem 4: the subtitle editor"}),`
`,e.jsxs(s.p,{children:["The editor is a full-viewport application inside the SPA where ",e.jsx(s.strong,{children:"video, waveform, timeline, subtitle overlay and a rich-text segment list stay in sync to the millisecond"}),", while edits save continuously and several people work on the same project. It has a ",e.jsx(s.strong,{children:"subtitle mode"})," (cards with timing, duration, character count and CPS), a ",e.jsx(s.strong,{children:"generic mode"})," for reading flow, and a ",e.jsx(s.strong,{children:"translation mode"})," that shows the matching source text under each translated line."]}),`
`,e.jsx(s.h3,{children:"One clock for everything"}),`
`,e.jsxs(s.p,{children:['Six things must agree on "now": the video, the waveform cursor, the active segment, the subtitle overlay, the active waveform region and the seek bar. If each listened to ',e.jsx(s.code,{children:"timeupdate"})," on its own, they would drift apart and re-render React far too often."]}),`
`,e.jsx(r,{chart:`flowchart LR
    V["video element (HLS)"] -->|currentTime| CTS
    subgraph CTS["CurrentTimeService (singleton)"]
        RAF["requestAnimationFrame tick"]
        CONV["video time ⇄ absolute time<br/>(chunk offset, virtual chunks)"]
        BOUND["part boundaries:<br/>clamp + auto-pause at end"]
    end
    CTS --> W[Waveform cursor]
    CTS --> L[Active segment highlight]
    CTS --> O[Subtitle overlay]
    CTS --> R[Active waveform region]
    CTS --> S[Seekbar]
    W -->|click / drag| CTS
    S -->|seek| CTS
    L -->|click segment| CTS`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["A single ",e.jsx(s.code,{children:"requestAnimationFrame"})," loop"]})," reads ",e.jsx(s.code,{children:"currentTime"})," once per frame and pushes it to subscribers, which update their own DOM, so the store isn't rewritten 60 times a second."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Absolute time everywhere."})," Segments use project time; conversion to video time happens ",e.jsx(s.strong,{children:"only"})," here. That makes ",e.jsx(s.strong,{children:"virtual chunks"})," possible: when edits push subtitles past the end of the media, metadata-only parts extend the timeline."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Part boundaries."})," The service clamps seeking to the loaded part and pauses exactly at its end."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Two-way."})," Clicking the waveform, seek bar or a segment sets the time once, and everyone updates, even while paused."]}),`
`]}),`
`,e.jsx(s.h3,{children:"Rich text without a jumping cursor"}),`
`,e.jsxs(s.p,{children:["Each segment body is a ",e.jsx(s.code,{children:"contenteditable"})," with bold, italic, underline and colour. React and ",e.jsx(s.code,{children:"contenteditable"})," don't mix well: if React re-renders the content, the caret jumps to the start. So the editor follows a strict pattern:"]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Set the content once"})," when the card mounts."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Let the browser own the DOM"}),": typing, caret, IME input and selection stay native."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["A ",e.jsx(s.code,{children:"MutationObserver"})," detects changes"]})," and debounces a save after a short pause."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Redux stays the source of truth"}),": the save converts the DOM back to ",e.jsx(s.code,{children:"styledText"})," and plain ",e.jsx(s.code,{children:"text"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Toolbar formatting"})," saves the selection as character offsets, rewrites the HTML, then restores the caret with a ",e.jsx(s.code,{children:"Range"}),"."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Spell checking runs ",e.jsx(s.strong,{children:"offline"})," with ",e.jsx(s.code,{children:"nspell"})," and Hunspell dictionaries, with suggestions in a right-click menu."]}),`
`,e.jsx(s.h3,{children:"Waveform, timeline and preview"}),`
`,e.jsxs(s.p,{children:["Waveform peaks are ",e.jsx(s.strong,{children:"precomputed on the server"})," and drawn on a canvas whose width is ",e.jsx(s.code,{children:"duration × zoom"}),". Segment regions sit on top, ",e.jsx(s.strong,{children:"memoized per region"}),", so dragging one re-renders only that one. A drag updates locally and commits ",e.jsx(s.strong,{children:"once"})," on release, as a single operation that stores both the new and original timing for undo, and neighbouring segments stop regions from overlapping."]}),`
`,e.jsxs(s.p,{children:["Video plays over ",e.jsx(s.strong,{children:"HLS"})," (",e.jsx(s.code,{children:"hls.js"}),", native in Safari) with error recovery. Subtitles are an ",e.jsx(s.strong,{children:"overlay"}),", not burned in, rendered with the project's ",e.jsx(s.strong,{children:"Style"}),", so editors see exactly what viewers will see as they type."]}),`
`,e.jsx(s.h3,{children:"Offline-first autosave"}),`
`,e.jsxs(s.p,{children:["Edits aren't sent once per keystroke. Each action becomes an ",e.jsx(s.strong,{children:"operation"})," (",e.jsx(s.code,{children:"addSegment"}),", ",e.jsx(s.code,{children:"deleteSegment"}),", ",e.jsx(s.code,{children:"mergeSegment"}),", ",e.jsx(s.code,{children:"splitSegment"}),", ",e.jsx(s.code,{children:"updateSegmentFields"}),", ",e.jsx(s.code,{children:"updateSegmentTimestamp"}),", ",e.jsx(s.code,{children:"rippleSegmentsOffset"}),") that's applied to Redux immediately and queued for the server."]}),`
`,e.jsx(r,{chart:`sequenceDiagram
    participant U as User action
    participant R as Redux (optimistic)
    participant Q as IndexedDB queue
    participant W as Sync Web Worker
    participant P as POST /segment/update

    U->>R: apply change immediately (UI updates)
    U->>Q: enqueue {operationId, operation}
    loop every 1s (not paused, not already syncing)
        W->>Q: read pending + failed (due for retry), oldest first
        W->>P: batch of up to 10 operations
        P-->>W: { operationIds, failedOperationIds }
        W->>Q: delete succeeded
        W->>Q: failed → retryCount++, nextRetryAt = backoff(2s→32s), max 5
        W-->>U: status: idle / syncing / error
    end`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Durable:"})," operations live in ",e.jsx(s.strong,{children:"IndexedDB"}),", so a reload or a short outage loses nothing."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Off the main thread:"})," a dedicated ",e.jsx(s.strong,{children:"Web Worker"})," runs the sync loop, so typing and playback never stutter."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Idempotent and partial-failure safe:"})," every operation has a UUID, and the worker retries only the operations the server reports as failed, with exponential backoff."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Undo is a real edit:"})," undo and redo apply the inverse to Redux ",e.jsx(s.em,{children:"and"})," queue the inverse operation, so they persist like any other change."]}),`
`]}),`
`,e.jsx(s.h3,{children:"Editing tools and collaboration"}),`
`,e.jsxs(s.p,{children:["Editors can ",e.jsx(s.strong,{children:"split"})," at the caret (keeping inline formatting intact), ",e.jsx(s.strong,{children:"merge"})," segments, and use ",e.jsx(s.strong,{children:"ripple tools"})," that retime one subtitle and shift every later one in a single server-side update. There's ",e.jsx(s.strong,{children:"find and replace"}),", bookmarks, validation status, and ",e.jsx(s.strong,{children:"live CPS and character counts"})," checked against the guideline."]}),`
`,e.jsxs(s.p,{children:["Opening a part ",e.jsx(s.strong,{children:"acquires a session"})," in core. Other users see a ",e.jsx(s.em,{children:"Part Locked"})," modal listing the free parts, and real-time lock events update everyone's parts strip. A ",e.jsx(s.strong,{children:"heartbeat every 60 seconds"})," adds to the measured active time that feeds SLA reports."]}),`
`,e.jsx(s.h2,{id:"teams-roles-and-assignments",children:"Teams, roles and assignments"}),`
`,e.jsx(r,{chart:`erDiagram
    USER ||--o{ TEAM : owns
    TEAM ||--o{ MEMBER : "invites / has"
    TEAM ||--o{ ROLE : defines
    MEMBER }o--|| ROLE : "assigned work under"
    TEAM ||--o{ PROJECT : contains
    PROJECT ||--o{ JOB : "translation jobs"
    PROJECT ||--o{ ASSIGNMENT : delegates
    JOB ||--o{ ASSIGNMENT : delegates
    MEMBER ||--o{ ASSIGNMENT : "assigned to"
    ASSIGNMENT ||--o{ SESSION : "work measured by"`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Teams"})," are workspaces. The active team travels on every request as a ",e.jsx(s.code,{children:"team-id"})," header, and middleware ",e.jsx(s.strong,{children:"scopes every query"})," to it."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Members"})," are invitations that expire after 24 hours. Accepting requires the signed-in email to ",e.jsx(s.strong,{children:"match the invited email"}),", so nobody else can accept an invite."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Access roles"})," (",e.jsx(s.code,{children:"Admin"}),", ",e.jsx(s.code,{children:"Co-admin"}),", ",e.jsx(s.code,{children:"Collaborator"}),") come with a ",e.jsx(s.strong,{children:"permission map"})," customizable per member, from ",e.jsx(s.code,{children:"canEditCaption"})," to ",e.jsx(s.code,{children:"canManageMembers"}),". Defaults live in the shared contract, so API checks and UI checkboxes always match."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Work roles"}),' like "Transcriber", "QC" or "Translator" describe ',e.jsx(s.em,{children:"what kind of work"})," an assignment is."]}),`
`]}),`
`,e.jsxs(s.p,{children:["A manager assigns the source project or a translation job to a member, with an ",e.jsx(s.strong,{children:"expected SLA"}),". When the member clicks ",e.jsx(s.strong,{children:"Done"}),", the service collects that assignment's editor sessions and computes the real working time from ",e.jsx(s.strong,{children:"measured active seconds, not wall-clock time"}),". The assignment is marked ",e.jsx(s.code,{children:"PASS"})," if that's within the SLA, otherwise ",e.jsx(s.code,{children:"FAIL"}),"."]}),`
`,e.jsxs(s.p,{children:["That data feeds ",e.jsx(s.strong,{children:"writer, member-performance, editor-productivity and project-status reports"}),", plus a ",e.jsx(s.strong,{children:"QC edit-rate report"})," that compares final subtitles with the stored AI originals to show how much correction the AI needed and how much time it saved."]}),`
`,e.jsx(s.h2,{id:"data-model",children:"Data model"}),`
`,e.jsxs(s.p,{children:["The key decision: ",e.jsxs(s.strong,{children:["a project ",e.jsx(s.em,{children:"is"})," the source job."]})," Projects aren't copied into the ",e.jsx(s.code,{children:"jobs"})," collection. Instead, ",e.jsx(s.code,{children:"jobId"})," on segments and assignments is a ",e.jsx(s.strong,{children:"nullable discriminator"}),": ",e.jsx(s.code,{children:"null"})," means source, a value means a translation. One query shape, ",e.jsx(s.code,{children:"{ projectId, jobId }"}),", serves both editors, so the source and translation editors share 100% of their code."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`projects (1) ←── jobs (many)
    │                 │
    ├──→ segments ←───┘        jobId: null  → source segment
    │                 │        jobId: <id>  → translation segment
    └──→ assignments ←┘        same discriminator for assignments
`})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Public UUIDs, hidden ",e.jsx(s.code,{children:"_id"}),"."]})," Every entity has its own ",e.jsx(s.strong,{children:"UUID v6"})," (time-ordered, so it sorts by creation time), and repositories hide Mongo's ",e.jsx(s.code,{children:"_id"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Tenant key on every document."})," ",e.jsx(s.code,{children:"teamId"})," is copied onto every content document, so tenant isolation is one filter, with no joins."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The pipeline state lives on the project document"}),", so state survives restarts."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:[e.jsx(s.code,{children:"original*"})," fields"]})," on segments keep the AI's first text and timing, which powers the edit-rate report and source-to-translation matching."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Precomputed metrics."})," QC metrics are computed once and stored, so reports don't diff thousands of segments on every view."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Schema changes never break data."})," New fields always ship with defaults, and backfills run as a separate migration project."]}),`
`]}),`
`,e.jsx(s.h2,{id:"infrastructure-and-delivery",children:"Infrastructure and delivery"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Containers:"})," multi-stage Docker builds for ",e.jsx(s.strong,{children:"ARM64 / AWS Graviton"}),". The runtime image ships only compiled output and production dependencies, plus FFmpeg for the project service."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CI/CD:"})," CodeBuild → ECR (images tagged with the commit hash) → ",e.jsx(s.strong,{children:"CodePipeline"})," → ECS deploy."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Runtime:"})," ECS services (4 vCPU / 8 GB for media processing), MongoDB, S3 for all media, SQS for ingest events, and a Socket.IO port for real-time updates."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Frontend:"})," a Vite production build served through ",e.jsx(s.strong,{children:"CloudFront"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"highlights",children:"Highlights"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Backend"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Re-platformed a Moleculer monorepo into two Express 5 services with ",e.jsx(s.strong,{children:"strict layered MVC"}),", one error pipeline, and ",e.jsx(s.strong,{children:"Zod schemas that drive validation, OpenAPI docs and compile-time contract checks"}),"."]}),`
`,e.jsxs(s.li,{children:["A ",e.jsx(s.strong,{children:"resumable, event-driven 5-stage media pipeline"})," with live progress and retry from the failed step."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Async AI integration through webhooks"}),", with shared-storage hand-off, a correlation id and an idempotent callback."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CPU-aware parallel processing"})," with worker threads and a semaphore: about ",e.jsx(s.strong,{children:"3× throughput"})," with the API still responsive."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"RS256/JWKS auth"})," verified locally, and service-to-service ",e.jsx(s.strong,{children:"token relay"})," with timeouts and graceful fallbacks."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Frontend"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["A professional ",e.jsx(s.strong,{children:"browser subtitle editor"}),": HLS video, canvas waveform with draggable regions, live styled overlay and a rich-text segment list, all driven by ",e.jsxs(s.strong,{children:["one ",e.jsx(s.code,{children:"requestAnimationFrame"})," clock"]}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Offline-first autosave"})," with an IndexedDB queue, a sync ",e.jsx(s.strong,{children:"Web Worker"}),", idempotent operations and persisted ",e.jsx(s.strong,{children:"undo/redo"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Real-time collaboration"}),": part locking, heartbeats, beacon on tab close and a single-tab guard with the Web Locks API."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Data"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["A MongoDB model where ",e.jsx(s.strong,{children:"the project is the source job"}),", segments know their parts, AI originals enable QC analytics, and every document carries its tenant key."]}),`
`]})]})}function a(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{a as default,o as outline};
