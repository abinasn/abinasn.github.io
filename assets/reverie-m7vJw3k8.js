import{j as e}from"./index-HGUiUA8v.js";const i={toc:[{id:"what-it-is",text:"What it is",depth:2},{id:"why-it-exists",text:"Why it exists",depth:2},{id:"architecture",text:"Architecture",depth:2},{id:"how-a-project-is-created",text:"How a project is created",depth:2},{id:"the-cat-tool",text:"The CAT tool",depth:2},{id:"translation-memory",text:"Translation memory",depth:2},{id:"teams-and-projects",text:"Teams and projects",depth:2},{id:"the-marketplace",text:"The marketplace",depth:2},{id:"infrastructure",text:"Infrastructure",depth:2},{id:"results",text:"Results",depth:2},{id:"stack",text:"Stack",depth:2}],placedProblems:!1};function r(n){const s={code:"code",h2:"h2",li:"li","mermaid-diagram":"mermaid-diagram",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components},t=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"what-it-is",children:"What it is"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Prabandhak"})," is a text translation platform built for India's ",e.jsx(s.strong,{children:"low-resource languages"}),". It supports ",e.jsx(s.strong,{children:"18 Indian languages"})," and ",e.jsx(s.strong,{children:"32 file formats"}),", and brings everything a translation team needs into one place: projects, a translation editor, translation memory, team management and a freelancer marketplace."]}),`
`,e.jsxs(s.p,{children:["It's used by Reverie's ",e.jsx(s.strong,{children:"in-house translation team"}),", by ",e.jsx(s.strong,{children:"language service providers (LSPs)"})," and ",e.jsx(s.strong,{children:"linguistic freelancers"})," across India, and by ",e.jsx(s.strong,{children:"government organisations"})," such as ",e.jsx(s.strong,{children:"GeM (Government e-Marketplace)"}),", the ",e.jsx(s.strong,{children:"Ministry of Education"})," and the ",e.jsx(s.strong,{children:"Ministry of Finance"}),". One of its biggest projects was localising a large volume of ",e.jsx(s.strong,{children:"taxation content"})," so taxpayers could read it in their own language."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Create project → upload file → file is split into segments → translators work in the CAT tool
              → reuse past translations or get machine suggestions → review → deliver
`})}),`
`,e.jsx(s.h2,{id:"why-it-exists",children:"Why it exists"}),`
`,e.jsx(s.p,{children:"Translating into Indian languages is harder than it looks. Good tools for low-resource languages were rare, typing in Indian scripts was slow, and the same sentences were translated again and again."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Problem"}),e.jsx(s.th,{children:"How Prabandhak solves it"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Content arrives in many different file types"}),e.jsxs(s.td,{children:["Projects can be created from ",e.jsx(s.strong,{children:"32 file formats"}),", all turned into the same simple segments."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Typing in Indian scripts is slow"}),e.jsxs(s.td,{children:["The built-in ",e.jsx(s.strong,{children:"Swalekh keyboard"})," makes typing in Indian languages fast."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Translating everything from scratch takes too long"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Machine translation"})," suggests a translation for every segment."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"The same sentences get translated again and again"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Translation memory"})," finds past translations and reuses them."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Mistakes slip through in low-resource languages"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Spell and grammar checks"})," built for these languages."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Managing many translators is hard"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Teams, members and assignments"})," in one place."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Finding the right translator takes time"}),e.jsxs(s.td,{children:["A ",e.jsx(s.strong,{children:"marketplace"})," where thousands of freelancers can bid on projects."]})]})]})]}),`
`,e.jsx(s.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsxs(s.p,{children:["The frontend is built with ",e.jsx(s.strong,{children:"React"})," and ",e.jsx(s.strong,{children:"Ant Design"}),". The backend runs on ",e.jsx(s.strong,{children:"Node.js"})," with ",e.jsx(s.strong,{children:"MongoDB"}),", uses ",e.jsx(s.strong,{children:"Elasticsearch"})," for the translation memory, and connects to two in-house services: an ",e.jsx(s.strong,{children:"XLIFF manager"})," that reads files, and a ",e.jsx(s.strong,{children:"machine translation (NMT)"})," engine."]}),`
`,e.jsx(t,{chart:`flowchart LR
    UI["Browser<br/>projects, CAT tool"] --> API["Prabandhak API<br/>Node.js"]
    UI -->|upload| BLOB[(Azure Blob Storage)]
    BLOB -->|file uploaded| XLF["XLIFF manager<br/>in-house"]
    XLF -->|segments, via webhook| API
    API --> DB[(MongoDB)]
    API -->|search past translations| ES[(Elasticsearch<br/>translation memory)]
    API -->|suggestions| NMT["Machine translation<br/>in-house"]`}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Part"}),e.jsx(s.th,{children:"What it does"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"React + Ant Design"})}),e.jsx(s.td,{children:"Projects, the CAT tool, teams and the marketplace."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Node.js API"})}),e.jsx(s.td,{children:"Projects, segments, teams, assignments and the marketplace."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"MongoDB"})}),e.jsx(s.td,{children:"Stores projects, segments, users and teams."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Azure Blob Storage"})}),e.jsx(s.td,{children:"Keeps uploaded files."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"XLIFF manager"})}),e.jsx(s.td,{children:"An in-house Java library that reads files and turns them into segments."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Elasticsearch"})}),e.jsx(s.td,{children:"Powers the translation memory search."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Machine translation"})}),e.jsx(s.td,{children:"Reverie's in-house NMT engine, which suggests translations."})]})]})]}),`
`,e.jsx(s.h2,{id:"how-a-project-is-created",children:"How a project is created"}),`
`,e.jsx(s.p,{children:"Creating a project is a small pipeline that runs in the background, so the user never waits for a large file to be processed."}),`
`,e.jsx(t,{chart:`sequenceDiagram
    autonumber
    participant U as User
    participant P as Prabandhak API
    participant B as Azure Blob Storage
    participant X as XLIFF manager

    U->>P: Create project (with metadata)
    U->>B: Upload file
    B-->>X: File uploaded (event)
    X->>B: Read the file
    X->>X: Split it into segments
    X->>P: Send segments (webhook)
    P-->>U: Project ready for translation`}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Add the project details"}),": name, languages and other metadata."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Upload the file"})," to Azure Blob Storage."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The upload triggers an event"}),", which sends the file to the ",e.jsx(s.strong,{children:"XLIFF manager"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The XLIFF manager reads the file"})," (any of the 32 formats) and splits it into ",e.jsx(s.strong,{children:"segments"}),": small pieces of text, usually a sentence each, saved as JSON."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The segments are sent back"})," to Prabandhak through a ",e.jsx(s.strong,{children:"webhook"}),", and the project is ready to translate."]}),`
`]}),`
`,e.jsx(s.p,{children:"Because every file becomes the same kind of segments, the rest of the platform never needs to know whether the content came from a Word document, a spreadsheet or a web page."}),`
`,e.jsx(s.h2,{id:"the-cat-tool",children:"The CAT tool"}),`
`,e.jsxs(s.p,{children:["I built the ",e.jsx(s.strong,{children:"CAT tool"})," (computer-assisted translation), the editor where translators spend their day. It shows each segment in the original language next to its translation, and gives translators the help they need right where they type:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Swalekh keyboard:"})," Reverie's keyboard for typing quickly in Indian languages."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Spell correction and grammar checks"})," designed for low-resource languages."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Machine translation suggestions:"})," the in-house NMT engine suggests a translation for the current segment, so translators edit instead of starting from a blank line."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Translation memory matches:"})," if this sentence was translated before, the earlier translation is shown first."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Glossary checks:"})," key terms are always translated the same way, so the final output stays consistent."]}),`
`]}),`
`,e.jsx(s.h2,{id:"translation-memory",children:"Translation memory"}),`
`,e.jsx(s.p,{children:"Many documents repeat the same sentences: legal text, product names, standard phrases. Translating them again wastes time and money."}),`
`,e.jsx(t,{chart:`flowchart LR
    S["New segment"] --> TM{"Translated<br/>before?"}
    TM -->|yes| R["Reuse the past translation"]
    TM -->|no| NMT["Ask machine translation"]
    R --> T["Translator reviews"]
    NMT --> T
    T -->|save| ES[(Elasticsearch)]`}),`
`,e.jsxs(s.p,{children:["Every approved translation is saved in ",e.jsx(s.strong,{children:"Elasticsearch"}),". When a new segment arrives, Prabandhak ",e.jsx(s.strong,{children:"searches the memory first"}),". If the same text was already translated, it's reused right away. Only new text goes to the machine translation engine. This saves time, cuts cost, and keeps translations consistent across projects."]}),`
`,e.jsx(s.h2,{id:"teams-and-projects",children:"Teams and projects"}),`
`,e.jsxs(s.p,{children:["Prabandhak includes its own ",e.jsx(s.strong,{children:"project management"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Create a team"})," and ",e.jsx(s.strong,{children:"add members"})," to it."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Assign projects"})," to members."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Automated workflows"})," handle the repetitive work: file handling, task assignment and quality checks."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Reports and analytics"})," show how each project and translator is doing, including turnaround time."]}),`
`]}),`
`,e.jsx(s.h2,{id:"the-marketplace",children:"The marketplace"}),`
`,e.jsxs(s.p,{children:["India has a large community of ",e.jsx(s.strong,{children:"linguistic freelancers"})," and ",e.jsx(s.strong,{children:"language service providers"}),". Prabandhak connects them with work through a ",e.jsx(s.strong,{children:"marketplace"}),":"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Post a project"})," to the marketplace."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Thousands of freelancers"})," can see it and ",e.jsx(s.strong,{children:"place bids"}),"."]}),`
`,e.jsxs(s.li,{children:["The project owner ",e.jsx(s.strong,{children:"compares the bids"})," against their selection criteria and picks the right person."]}),`
`]}),`
`,e.jsx(s.h2,{id:"infrastructure",children:"Infrastructure"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Azure virtual machines"})," run the application."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"PM2"})," keeps the Node.js services running, with ",e.jsx(s.strong,{children:"automatic restart"})," if a process crashes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Azure Blob Storage"})," keeps uploaded files."]}),`
`]}),`
`,e.jsx(s.h2,{id:"results",children:"Results"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"42% of words reused"})," from translation memory."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"3.2× faster"})," review turnaround."]}),`
`]}),`
`,e.jsx(s.h2,{id:"stack",children:"Stack"}),`
`,e.jsx(s.p,{children:"React, Ant Design, Node.js, MongoDB, Elasticsearch, Azure Blob Storage, Azure VMs, PM2, plus Reverie's in-house XLIFF manager and machine translation engine."})]})}function l(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{l as default,i as outline};
