import{j as e}from"./index-B9-krpWu.js";const i={toc:[{id:"the-problem",text:"The problem",depth:2},{id:"what-i-built",text:"What I built",depth:2},{id:"how-it-works",text:"How it works",depth:2},{id:"hard-problems-i-solved",text:"Hard problems I solved",depth:2},{id:"stack",text:"Stack",depth:2}],placedProblems:!1};function t(n){const s={code:"code",h2:"h2",h3:"h3",li:"li","mermaid-diagram":"mermaid-diagram",ol:"ol",p:"p",strong:"strong",ul:"ul",...n.components},r=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"the-problem",children:"The problem"}),`
`,e.jsxs(s.p,{children:["Subtitlers typed every line by hand in tools like ",e.jsx(s.strong,{children:"Subtitle Edit"}),", moving the video back and forth to match the timing. One hour of video took several hours of work."]}),`
`,e.jsx(s.h2,{id:"what-i-built",children:"What I built"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"BeyondCaptions"})," lets AI write the first draft, so people only need to review it."]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Upload"})," a video."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"AI writes the subtitles"}),": about ",e.jsx(s.strong,{children:"88% accurate for Filipino"})," on the first try."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Editors review"})," them in a browser editor with the video, waveform and subtitles side by side."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"AI translates"})," them into other languages."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Download"})," as ",e.jsx(s.code,{children:"SRT"}),", ",e.jsx(s.code,{children:"VTT"}),", ",e.jsx(s.code,{children:"SCC"})," and more."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Teams can also set ",e.jsx(s.strong,{children:"subtitle rules and styles"}),", split long videos so ",e.jsx(s.strong,{children:"several editors work at once"}),", and ",e.jsx(s.strong,{children:"assign work"})," with target times and reports."]}),`
`,e.jsx(s.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsxs(s.p,{children:["Two Node.js services run on ",e.jsx(s.strong,{children:"AWS ECS"}),": one for ",e.jsx(s.strong,{children:"users and teams"}),", one for ",e.jsx(s.strong,{children:"projects and video"}),". The browser uploads files straight to ",e.jsx(s.strong,{children:"S3"}),", and live updates arrive over ",e.jsx(s.strong,{children:"WebSockets"}),"."]}),`
`,e.jsx(r,{chart:`flowchart LR
    UI["Browser"] --> CORE["Core service<br/>users, teams"]
    UI --> PROJ["Project service<br/>projects, video, subtitles"]
    UI -->|upload| S3[(S3)]
    PROJ -->|send job| AI["AI service"]
    AI -->|job finished| PROJ
    CORE --> DB[(MongoDB)]
    PROJ --> DB
    PROJ --> S3`}),`
`,e.jsx(s.h2,{id:"hard-problems-i-solved",children:"Hard problems I solved"}),`
`,e.jsx(s.h3,{children:"A pipeline that can resume"}),`
`,e.jsxs(s.p,{children:["Processing a video takes minutes and any step can fail. Each project moves through ",e.jsx(s.strong,{children:"5 steps"})," and saves its progress after every one. The user sees each step live, and ",e.jsx(s.strong,{children:"Retry continues from the failed step"})," instead of starting over."]}),`
`,e.jsx(r,{chart:`flowchart LR
    A[Prepare video] --> B[Extract audio] --> C[AI transcribes] --> D[Split into parts] --> E[Create subtitles]
    C -. failed .-> R[Retry from this step]`}),`
`,e.jsx(s.h3,{children:"Waiting for the AI"}),`
`,e.jsxs(s.p,{children:["The AI can take longer than the video itself. Instead of waiting, the service sends the job and moves on, and the AI ",e.jsx(s.strong,{children:"calls back"})," when it's done. Nothing is held open, and a repeated callback is safely ignored."]}),`
`,e.jsx(s.h3,{children:"Fast without slowing down"}),`
`,e.jsxs(s.p,{children:["Video work used to take 100% of the CPU. Now video parts are processed ",e.jsx(s.strong,{children:"in parallel"}),", always leaving one core free for users. Processing became ",e.jsx(s.strong,{children:"about 3× faster"}),"."]}),`
`,e.jsx(s.h3,{children:"An editor that never loses work"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"One shared clock"})," keeps the video, waveform and subtitles in perfect sync."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Every change is saved in the browser first"})," and synced in the background, so a bad connection loses nothing."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Parts are locked"})," while someone edits them, so two people never clash."]}),`
`]}),`
`,e.jsx(s.h2,{id:"stack",children:"Stack"}),`
`,e.jsx(s.p,{children:"React, TypeScript, Redux Toolkit, Tailwind CSS, Node.js, Express, MongoDB, AWS ECS, S3, SQS, CloudFront, FFmpeg and Socket.IO."})]})}function d(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{d as default,i as outline};
