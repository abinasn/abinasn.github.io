import{j as e}from"./index-GyExuTDf.js";const o={toc:[{id:"what-it-is",text:"What it is",depth:2},{id:"why-it-exists",text:"Why it exists",depth:2},{id:"architecture",text:"Architecture",depth:2},{id:"backend-design",text:"Backend design",depth:2},{id:"hard-problem-1-a-pipeline-that-can-resume",text:"Hard problem 1: a pipeline that can resume",depth:2},{id:"hard-problem-2-heavy-work-without-slowing-down",text:"Hard problem 2: heavy work without slowing down",depth:2},{id:"frontend",text:"Frontend",depth:2},{id:"hard-problem-3-the-subtitle-editor",text:"Hard problem 3: the subtitle editor",depth:2},{id:"teams-roles-and-assignments",text:"Teams, roles and assignments",depth:2},{id:"data-model",text:"Data model",depth:2},{id:"infrastructure",text:"Infrastructure",depth:2},{id:"highlights",text:"Highlights",depth:2},{id:"stack",text:"Stack",depth:2}],placedProblems:!1};function r(t){const s={code:"code",em:"em",h2:"h2",h3:"h3",li:"li","mermaid-diagram":"mermaid-diagram",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t.components},n=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"what-it-is",children:"What it is"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"BeyondCaptions"})," turns video and audio into ready-to-broadcast subtitles in any language."]}),`
`,e.jsxs(s.p,{children:["A user uploads a video. The platform prepares it, pulls out the audio, and sends it to an AI model that writes down what is said. For Filipino, the AI gets about ",e.jsx(s.strong,{children:"88% right on the first try"}),". The text is then split into subtitle lines that follow the team's rules, such as how many characters fit on a line and how long a line stays on screen."]}),`
`,e.jsxs(s.p,{children:["Editors then check and fix the subtitles in a ",e.jsx(s.strong,{children:"browser-based editor"})," that shows the video, the audio waveform and the subtitles together. Once the original language is approved, the AI translates it into other languages, and editors review those too. The final subtitles can be downloaded as ",e.jsx(s.code,{children:"SRT"}),", ",e.jsx(s.code,{children:"VTT"}),", ",e.jsx(s.code,{children:"TXT"}),", ",e.jsx(s.code,{children:"JSON"}),", broadcast formats like ",e.jsx(s.code,{children:"SCC"}),", or a dubbing script."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Upload → AI writes the text → AI splits it into subtitles → editors review
       → approve → AI translates → editors review translations → download
`})}),`
`,e.jsx(s.h2,{id:"why-it-exists",children:"Why it exists"}),`
`,e.jsxs(s.p,{children:["Before BeyondCaptions, subtitlers typed every line by hand in tools like ",e.jsx(s.strong,{children:"Subtitle Edit"}),", moving the video back and forth to line up the timing. It was slow, costly and hard to manage across a team."]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Problem"}),e.jsx(s.th,{children:"How BeyondCaptions solves it"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Typing subtitles takes hours for every hour of video"}),e.jsx(s.td,{children:"The AI writes the first draft. Editors only fix it, and the platform tracks the time saved."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Every client and channel has different subtitle rules"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Guidelines"})," store the rules. The AI follows them, and the editor warns when a line breaks one."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Every channel wants a different look"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Styles"})," store the font, size, colour and position, with a live preview on the video."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"A long video is too much for one person"}),e.jsxs(s.td,{children:["The video is split into ",e.jsx(s.strong,{children:"5-minute parts"}),", so several editors can work at the same time without clashing."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Managers can't see who is doing what"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Assignments"})," give work to a person with a target time. The platform measures the real time spent and marks it as a pass or fail."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Nobody knows how good the AI is"}),e.jsxs(s.td,{children:["The platform keeps the AI's original text, so it can show ",e.jsx(s.strong,{children:"how much editors had to change"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Different departments need their own space"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Teams"})," with invites, roles and permissions keep each department's work separate."]})]})]})]}),`
`,e.jsx(s.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsxs(s.p,{children:["The platform runs as ",e.jsx(s.strong,{children:"two Node.js microservices"})," on ",e.jsx(s.strong,{children:"AWS ECS"}),", each made up of several modules, and both share one set of TypeScript types."]}),`
`,e.jsx(n,{chart:`flowchart LR
    UI["Browser"] --> CORE["Core service<br/>users, teams, sessions"]
    UI --> PROJ["Project service<br/>projects, subtitles, translations"]
    UI -->|upload| S3[(S3)]
    PROJ -->|send job| AI["AI service"]
    AI -->|job finished| PROJ
    CORE --> DB[(MongoDB)]
    PROJ --> DB
    PROJ --> S3`}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Decision"}),e.jsx(s.th,{children:"Why"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Two services"}),": ",e.jsx(s.em,{children:"Core"})," handles people and teams, ",e.jsx(s.em,{children:"Project"})," handles the content"]}),e.jsx(s.td,{children:"Each can grow and be released on its own. Video work is heavy; login traffic is light and must stay fast."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Each service checks login tokens itself"})}),e.jsx(s.td,{children:"Core signs the tokens and shares its public key. The Project service checks tokens on its own, so it never waits for Core."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"The browser uploads files straight to S3"})}),e.jsx(s.td,{children:"Large video files never pass through our servers, so the servers stay small and fast."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Video streams in small pieces (HLS)"})}),e.jsx(s.td,{children:"The player loads the video bit by bit, straight from S3, instead of downloading the whole file first."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Live updates over WebSockets"})}),e.jsx(s.td,{children:"Progress, locks and notifications reach the browser instantly, without the page asking again and again."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"One shared set of types"})}),e.jsx(s.td,{children:"The frontend and both services use the same TypeScript types, so a mismatch is caught when the code is built, not by users."})]})]})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"The Core service"})," handles ",e.jsx(s.strong,{children:"users, teams and sessions"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"The Project service"})," handles ",e.jsx(s.strong,{children:"projects, subtitles and translations"}),"."]}),`
`,e.jsxs(s.p,{children:["Both services publish ",e.jsx(s.strong,{children:"API documentation that is generated from the code"}),", so the docs are always up to date."]}),`
`,e.jsx(s.h2,{id:"backend-design",children:"Backend design"}),`
`,e.jsx(s.h3,{children:"Every request follows the same path"}),`
`,e.jsx(s.p,{children:"Each request goes through the same layers, and each layer has one job:"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Layer"}),e.jsx(s.th,{children:"Its job"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Route"})}),e.jsx(s.td,{children:"Connects a URL to the right code. No logic."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Validation"})}),e.jsx(s.td,{children:"Checks the incoming data with Zod and rejects anything wrong."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Controller"})}),e.jsx(s.td,{children:"Reads the request, calls one service, sends back the answer."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Service"})}),e.jsx(s.td,{children:"Holds the business rules."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Repository"})}),e.jsx(s.td,{children:"Talks to the database. Nothing else does."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Model"})}),e.jsx(s.td,{children:"Describes the shape of the data in MongoDB."})]})]})]}),`
`,e.jsxs(s.p,{children:["Every module uses the same folder layout, so once you know one module, you know them all. If the validation rules and the shared types ever stop matching, ",e.jsx(s.strong,{children:"the build fails"})," before the change can go live."]}),`
`,e.jsx(s.h3,{children:"Built for production"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Settings are checked at startup."})," A missing setting stops the app with a clear message, instead of causing a strange bug days later."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Every request is logged with an id"}),", and passwords and tokens are hidden from the logs."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Security basics are built in:"})," safe HTTP headers, requests allowed only from our own UI, and limits on how many requests one visitor can make."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The app shuts down cleanly"}),", finishing current work before it stops."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Database drops are handled."})," The app keeps reconnecting and tells AWS it's not ready, so no user requests reach it until it recovers."]}),`
`]}),`
`,e.jsx(s.h2,{id:"hard-problem-1-a-pipeline-that-can-resume",children:"Hard problem 1: a pipeline that can resume"}),`
`,e.jsx(s.p,{children:"Creating a project means minutes of heavy video work plus an AI step that can take a long time. A web request can't wait that long, and any step can fail."}),`
`,e.jsx(s.p,{children:"So I designed it so that:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["the user gets an ",e.jsx(s.strong,{children:"answer straight away"}),","]}),`
`,e.jsxs(s.li,{children:["they can ",e.jsx(s.strong,{children:"watch every step live"}),","]}),`
`,e.jsxs(s.li,{children:["a failure shows ",e.jsx(s.strong,{children:"exactly which step"})," broke,"]}),`
`,e.jsxs(s.li,{children:["and ",e.jsx(s.strong,{children:"Retry continues from that step"})," instead of starting over."]}),`
`]}),`
`,e.jsx(n,{chart:`stateDiagram-v2
    [*] --> Preparation: project created
    Preparation --> Extraction: video
    Preparation --> Transcription: audio only
    Extraction --> Transcription
    Transcription --> Optimization: subtitles uploaded by user
    Transcription --> WaitingForAI: AI transcription
    WaitingForAI --> Optimization: AI finished
    WaitingForAI --> Failed: AI failed
    Optimization --> Segmentation
    Segmentation --> [*]: ready for editing

    Preparation --> Failed
    Extraction --> Failed
    Transcription --> Failed
    Optimization --> Failed
    Segmentation --> Failed
    Failed --> Preparation: Retry (from the failed step)`}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Step"}),e.jsx(s.th,{children:"What happens"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"1. Preparation"})}),e.jsx(s.td,{children:"Shrink large videos, make a thumbnail, add a watermark if needed, and prepare the video for streaming."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"2. Extraction"})}),e.jsx(s.td,{children:"Pull the audio out of the video."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"3. Transcription"})}),e.jsxs(s.td,{children:["Send the audio to the AI, then ",e.jsx(s.strong,{children:"pause"})," until the AI is done. Uploaded subtitles skip this step."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"4. Optimization"})}),e.jsx(s.td,{children:"Cut the media into 5-minute parts, each with its own thumbnail, audio and waveform, several at a time."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"5. Segmentation"})}),e.jsx(s.td,{children:"Turn the text into subtitle lines that follow the team's rules."})]})]})]}),`
`,e.jsxs(s.p,{children:["Each step works the same way. It marks itself as ",e.jsx(s.em,{children:"running"}),", does its work, saves the result, and starts the next step. If something goes wrong, it saves the error against that step."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Every change is saved and sent live"})," to the browser, so the project card updates on its own."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Steps never wait on each other"}),", so one slow step never blocks the user."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Temporary files are always deleted"}),", even when a step fails, so the disk never fills up."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Retry only runs the step that failed. Finished steps are never repeated, so a failure at the end doesn't mean processing the whole video again. That's why ",e.jsx(s.strong,{children:"fewer projects fail for good"}),": a network blip or a server restart becomes one click on ",e.jsx(s.em,{children:"Retry"})," instead of a new upload."]}),`
`,e.jsx(s.h2,{id:"hard-problem-2-heavy-work-without-slowing-down",children:"Hard problem 2: heavy work without slowing down"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Problem"}),e.jsx(s.th,{children:"Solution"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Video work used 100% of the CPU"})," and slowed everything down"]}),e.jsxs(s.td,{children:["Parts are processed in parallel on background threads, but always leaving one CPU core free for users. This made processing about ",e.jsx(s.strong,{children:"3× faster"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"A video job could get stuck"})}),e.jsx(s.td,{children:"Each job has a time limit and is always cleaned up."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Large files used too much memory"})}),e.jsx(s.td,{children:"Files are streamed to S3 piece by piece, never loaded fully into memory."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Waveforms for long videos were heavy"})}),e.jsx(s.td,{children:"The server turns the audio into a small summary file, so the browser downloads a few kilobytes instead of the full audio."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Files dropped straight into S3"})}),e.jsx(s.td,{children:"S3 sends an event to a queue (SQS). The app picks it up and adds the file, and failed ones are tried again later."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"The other service is down"})}),e.jsx(s.td,{children:"Calls give up after 5 seconds with a clear error, and less important features keep working without it."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Two editors on the same part"})}),e.jsx(s.td,{children:"Opening a part locks it, so nobody else can edit it at the same time."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"The same edit sent twice"})}),e.jsx(s.td,{children:"Each edit has a unique id, so a repeat is simply ignored."})]})]})]}),`
`,e.jsx(s.h2,{id:"frontend",children:"Frontend"}),`
`,e.jsxs(s.p,{children:["The UI is built with ",e.jsx(s.strong,{children:"React 19, TypeScript, Redux Toolkit, Tailwind CSS and shadcn/ui"}),", with ",e.jsx(s.strong,{children:"light and dark themes"}),"."]}),`
`,e.jsxs(s.p,{children:['All API calls go through one shared setup that adds the login token and team to every request. If a login expires, the user sees a clear "session expired" message instead of a silent failure. The frontend uses ',e.jsx(s.strong,{children:"the same types as the backend"}),", so if the API changes, the frontend build catches it."]}),`
`,e.jsx(s.p,{children:"Reusable parts keep the whole app consistent:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"One table component"})," powers every list in the app: projects, files, members and more."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Shared form fields"}),", so each create and edit form is defined once."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Permission checkboxes built from the shared types."})," A new permission appears in the UI automatically."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"An upload tray"}),", so users can keep working while big files upload."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Small details that matter: progress updates appear ",e.jsx(s.strong,{children:"live"}),"; opening a second tab is blocked so two tabs can't fight over one session; and the session is closed properly even when the tab is closed."]}),`
`,e.jsx(s.h2,{id:"hard-problem-3-the-subtitle-editor",children:"Hard problem 3: the subtitle editor"}),`
`,e.jsxs(s.p,{children:["The editor is where subtitlers spend their day. It shows the ",e.jsx(s.strong,{children:"video, waveform, timeline, subtitle preview and the list of subtitles"}),", all kept in perfect sync, while saving every change and letting several people work on one project."]}),`
`,e.jsx(s.h3,{children:"One clock for everything"}),`
`,e.jsx(s.p,{children:"Six parts of the screen need to agree on the current time: the video, the waveform cursor, the highlighted subtitle, the subtitle preview, the waveform region and the seek bar. If each tracked time on its own, they would drift apart and slow the page down."}),`
`,e.jsx(n,{chart:`flowchart LR
    V["Video"] -->|current time| CTS
    subgraph CTS["One shared clock"]
        T["Reads the time<br/>once per frame"]
    end
    CTS --> W[Waveform cursor]
    CTS --> L[Highlighted subtitle]
    CTS --> O[Subtitle preview]
    CTS --> S[Seek bar]
    W -->|click| CTS
    S -->|seek| CTS
    L -->|click| CTS`}),`
`,e.jsx(s.p,{children:"One shared clock reads the video's time once per frame and tells everyone else. Click anywhere (the waveform, the seek bar or a subtitle) and every part jumps to the same moment, even while the video is paused."}),`
`,e.jsx(s.h3,{children:"Typing without a jumping cursor"}),`
`,e.jsxs(s.p,{children:["Each subtitle supports ",e.jsx(s.strong,{children:"bold, italic, underline and colour"}),". A common problem with editable text in React is that the cursor jumps to the start while you type. To avoid that, the browser handles the typing, and the app only saves the text after a short pause. When formatting is applied, the app remembers where the cursor was and puts it back."]}),`
`,e.jsxs(s.p,{children:["Spell check works ",e.jsx(s.strong,{children:"offline"}),", with suggestions on right-click."]}),`
`,e.jsx(s.h3,{children:"Waveform and preview"}),`
`,e.jsxs(s.p,{children:["The waveform is drawn from the small summary file made by the server. Each subtitle appears as a block on the waveform that can be ",e.jsx(s.strong,{children:"dragged and resized"}),". Only the block being moved redraws, and subtitles can never overlap."]}),`
`,e.jsxs(s.p,{children:["The video streams with ",e.jsx(s.strong,{children:"HLS"}),", and the subtitles are shown on top using the project's style, so editors see exactly what viewers will see."]}),`
`,e.jsx(s.h3,{children:"Autosave that survives bad internet"}),`
`,e.jsxs(s.p,{children:["Changes aren't sent on every keystroke. Each change (add, delete, split, merge, retime) is saved ",e.jsx(s.strong,{children:"in the browser first"})," and sent to the server in small batches in the background."]}),`
`,e.jsx(n,{chart:`sequenceDiagram
    participant U as Editor
    participant B as Browser storage
    participant W as Background worker
    participant P as Server

    U->>U: Change shows instantly
    U->>B: Save the change
    loop every second
        W->>B: Read waiting changes
        W->>P: Send up to 10 changes
        P-->>W: Which ones worked
        W->>B: Remove saved ones, retry the rest later
        W-->>U: Saved / Saving / Error
    end`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Nothing is lost."})," Changes are stored in the browser, so a refresh or a dropped connection loses nothing."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Typing never lags."})," Syncing runs in a background worker, away from the screen."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Only failures are retried"}),", with longer waits between each try."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Undo and redo are saved too"}),", just like normal changes."]}),`
`]}),`
`,e.jsx(s.h3,{children:"Editing tools and teamwork"}),`
`,e.jsxs(s.p,{children:["Editors can ",e.jsx(s.strong,{children:"split and merge"})," subtitles, ",e.jsx(s.strong,{children:"shift the timing"})," of all later subtitles in one go, use ",e.jsx(s.strong,{children:"find and replace"}),", add bookmarks, and see ",e.jsx(s.strong,{children:"live warnings"})," when a line is too long or too fast to read."]}),`
`,e.jsxs(s.p,{children:["When someone opens a part, it's ",e.jsx(s.strong,{children:"locked"})," for them, and others see who has it. While they work, the editor records their ",e.jsx(s.strong,{children:"active time"}),", which feeds the reports."]}),`
`,e.jsx(s.h2,{id:"teams-roles-and-assignments",children:"Teams, roles and assignments"}),`
`,e.jsx(n,{chart:`erDiagram
    USER ||--o{ TEAM : owns
    TEAM ||--o{ MEMBER : has
    TEAM ||--o{ ROLE : defines
    TEAM ||--o{ PROJECT : contains
    PROJECT ||--o{ JOB : "translations"
    PROJECT ||--o{ ASSIGNMENT : "given out as"
    JOB ||--o{ ASSIGNMENT : "given out as"
    MEMBER ||--o{ ASSIGNMENT : "works on"
    ASSIGNMENT ||--o{ SESSION : "time measured by"`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Teams"})," are separate workspaces. Every request only sees the data of the current team."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Invites"})," expire after 24 hours, and only the invited email address can accept them."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Access roles"})," (Admin, Co-admin, Collaborator) come with permissions that can be adjusted per person."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Work roles"}),' like "Transcriber", "QC" or "Translator" describe the kind of work.']}),`
`]}),`
`,e.jsxs(s.p,{children:["A manager gives a project or translation to a team member with a ",e.jsx(s.strong,{children:"target time"}),". When the member clicks ",e.jsx(s.strong,{children:"Done"}),", the platform adds up their ",e.jsx(s.strong,{children:"real active editing time"}),", not just the time the page was open, and marks the work as a ",e.jsx(s.strong,{children:"pass"})," or ",e.jsx(s.strong,{children:"fail"}),"."]}),`
`,e.jsxs(s.p,{children:["This data feeds reports on ",e.jsx(s.strong,{children:"team performance, productivity and project status"}),", plus a ",e.jsx(s.strong,{children:"quality report"})," that shows how much of the AI's work editors had to change."]}),`
`,e.jsx(s.h2,{id:"data-model",children:"Data model"}),`
`,e.jsxs(s.p,{children:["The key idea: ",e.jsx(s.strong,{children:"a project is also its own source-language job."})," Translations are separate jobs. Every subtitle has a ",e.jsx(s.code,{children:"jobId"}),": empty means the original language, a value means a translation. Because of this, ",e.jsx(s.strong,{children:"the same editor code works for both"})," originals and translations."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Every record has its own public id"}),", and database internals are never shown to users."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Every record carries its team id"}),", so keeping teams apart is one simple filter."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Each project saves its own progress"}),", so nothing is lost if a server restarts."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The AI's original text is kept"}),", which powers the quality report."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Reports are calculated once and stored"}),", so they load fast."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"New fields always have defaults"}),", so old data keeps working with no downtime."]}),`
`]}),`
`,e.jsx(s.h2,{id:"infrastructure",children:"Infrastructure"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Docker images"})," built for ",e.jsx(s.strong,{children:"AWS Graviton"})," (ARM) servers, containing only what's needed to run."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Automatic deployment:"})," every change is built and released through ",e.jsx(s.strong,{children:"AWS CodeBuild and CodePipeline"})," to ",e.jsx(s.strong,{children:"ECS"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"AWS services:"})," ECS for the servers, S3 for media, SQS for file events, CloudFront for the website, and MongoDB for data."]}),`
`]}),`
`,e.jsx(s.h2,{id:"highlights",children:"Highlights"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"QC time cut by 86%"})," compared with manual offline editing, and ",e.jsx(s.strong,{children:"30+ hours of content"})," processed every day."]}),`
`,e.jsxs(s.li,{children:["Designed and built end to end as the ",e.jsx(s.strong,{children:"sole engineer"}),": architecture, design and implementation."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Two Node.js microservices"})," with clear modules, one shared set of types and docs generated from the code."]}),`
`,e.jsxs(s.li,{children:["A ",e.jsx(s.strong,{children:"5-step video pipeline"})," that shows live progress and ",e.jsx(s.strong,{children:"resumes from the failed step"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"About 3× faster video processing"}),", while keeping the app responsive."]}),`
`,e.jsxs(s.li,{children:["A ",e.jsx(s.strong,{children:"professional subtitle editor in the browser"}),", with video, waveform and subtitles kept in sync by one shared clock."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Autosave that survives bad internet"}),", with undo and redo."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Real-time teamwork"}),": part locking, live updates and measured working time."]}),`
`]}),`
`,e.jsx(s.h2,{id:"stack",children:"Stack"}),`
`,e.jsx(s.p,{children:"React, TypeScript, Redux Toolkit, Tailwind CSS, shadcn/ui, Node.js, Express, Zod, MongoDB, AWS ECS, S3, SQS, CloudFront, CodePipeline, FFmpeg, HLS and Socket.IO."})]})}function d(t={}){const{wrapper:s}=t.components||{};return s?e.jsx(s,{...t,children:e.jsx(r,{...t})}):r(t)}export{d as default,o as outline};
