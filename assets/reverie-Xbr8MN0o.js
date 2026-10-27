import{j as e}from"./index-CET28yB6.js";const i={toc:[{id:"what-it-is",text:"What it is",depth:2},{id:"why-it-exists",text:"Why it exists",depth:2},{id:"architecture",text:"Architecture",depth:2},{id:"how-a-project-is-created",text:"How a project is created",depth:2},{id:"the-cat-tool",text:"The CAT tool",depth:2},{id:"translation-memory",text:"Translation memory",depth:2},{id:"additional-features",text:"Additional features",depth:2},{id:"infrastructure",text:"Infrastructure",depth:2},{id:"results",text:"Results",depth:2},{id:"stack",text:"Stack",depth:2}],placedProblems:!1};function r(s){const n={code:"code",h2:"h2",li:"li","mermaid-diagram":"mermaid-diagram",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components},t=n["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"what-it-is",children:"What it is"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Prabandhak"})," is a text translation platform built for India's ",e.jsx(n.strong,{children:"low-resource languages"}),". It supports ",e.jsx(n.strong,{children:"18 Indian languages"})," and ",e.jsx(n.strong,{children:"32 file formats"}),", and brings everything a translation team needs into one place: projects, a translation editor, translation memory, team management and a freelancer marketplace."]}),`
`,e.jsxs(n.p,{children:["It's used by Reverie's ",e.jsx(n.strong,{children:"in-house translation team"}),", by ",e.jsx(n.strong,{children:"language service providers (LSPs)"})," and ",e.jsx(n.strong,{children:"linguistic freelancers"})," across India, and by ",e.jsx(n.strong,{children:"government organisations"})," such as ",e.jsx(n.strong,{children:"GeM (Government e-Marketplace)"}),", the ",e.jsx(n.strong,{children:"Ministry of Education"})," and the ",e.jsx(n.strong,{children:"Ministry of Finance"}),". One of its biggest projects was localising a large volume of ",e.jsx(n.strong,{children:"taxation content"})," so taxpayers could read it in their own language."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Create project → upload file → file is split into segments → translators work in the CAT tool
              → reuse past translations or get machine suggestions → review → deliver
`})}),`
`,e.jsx(n.h2,{id:"why-it-exists",children:"Why it exists"}),`
`,e.jsx(n.p,{children:"Translating into Indian languages is harder than it looks. Good tools for low-resource languages were rare, typing in Indian scripts was slow, and the same sentences were translated again and again."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Problem"}),e.jsx(n.th,{children:"How Prabandhak solves it"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Content arrives in many different file types"}),e.jsxs(n.td,{children:["Projects can be created from ",e.jsx(n.strong,{children:"32 file formats"}),", all turned into the same simple segments."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Typing in Indian scripts is slow"}),e.jsxs(n.td,{children:["The built-in ",e.jsx(n.strong,{children:"Swalekh keyboard"})," makes typing in Indian languages fast."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Translating everything from scratch takes too long"}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"Machine translation"})," suggests a translation for every segment."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"The same sentences get translated again and again"}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"Translation memory"})," finds past translations and reuses them."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Mistakes slip through in low-resource languages"}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"Spell and grammar checks"})," built for these languages."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Managing many translators is hard"}),e.jsxs(n.td,{children:[e.jsx(n.strong,{children:"Teams, members and assignments"})," in one place."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Finding the right translator takes time"}),e.jsxs(n.td,{children:["A ",e.jsx(n.strong,{children:"marketplace"})," where 5,000+ freelancers can bid on projects."]})]})]})]}),`
`,e.jsx(n.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsxs(n.p,{children:["The frontend is built with ",e.jsx(n.strong,{children:"React"})," and ",e.jsx(n.strong,{children:"Ant Design"}),". The backend runs on ",e.jsx(n.strong,{children:"Node.js"})," with ",e.jsx(n.strong,{children:"MongoDB"}),", uses ",e.jsx(n.strong,{children:"Elasticsearch"})," for the translation memory, and connects to two in-house services: an ",e.jsx(n.strong,{children:"XLIFF manager"})," that reads files, and a ",e.jsx(n.strong,{children:"machine translation (NMT)"})," engine."]}),`
`,e.jsx(t,{chart:`flowchart LR
    UI["Browser<br/>projects, CAT tool"] --> API["Prabandhak API<br/>Node.js"]
    UI -->|upload| BLOB[(Azure Blob Storage)]
    BLOB -->|file uploaded| XLF["XLIFF manager<br/>in-house"]
    XLF -->|segments, via webhook| API
    API --> DB[(MongoDB)]
    API -->|search past translations| ES[(Elasticsearch<br/>translation memory)]
    API -->|suggestions| NMT["Machine translation<br/>in-house"]`}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Part"}),e.jsx(n.th,{children:"What it does"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"React + Ant Design"})}),e.jsx(n.td,{children:"Projects, the CAT tool, teams and the marketplace."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Node.js API"})}),e.jsx(n.td,{children:"Projects, segments, teams, assignments and the marketplace."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"MongoDB"})}),e.jsx(n.td,{children:"Stores projects, segments, users and teams."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Azure Blob Storage"})}),e.jsx(n.td,{children:"Keeps uploaded files."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"XLIFF manager"})}),e.jsx(n.td,{children:"An in-house Java library that reads files and turns them into segments."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Elasticsearch"})}),e.jsx(n.td,{children:"Powers the translation memory search."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Machine translation"})}),e.jsx(n.td,{children:"Reverie's in-house NMT engine, which suggests translations."})]})]})]}),`
`,e.jsx(n.h2,{id:"how-a-project-is-created",children:"How a project is created"}),`
`,e.jsx(n.p,{children:"Creating a project is a small pipeline that runs in the background, so the user never waits for a large file to be processed."}),`
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
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Add the project details"}),": name, languages and other metadata."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Upload the file"})," to Azure Blob Storage."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The upload triggers an event"}),", which sends the file to the ",e.jsx(n.strong,{children:"XLIFF manager"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The XLIFF manager reads the file"})," (any of the 32 formats) and splits it into ",e.jsx(n.strong,{children:"segments"}),": small pieces of text, usually a sentence each, saved as JSON."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The segments are sent back"})," to Prabandhak through a ",e.jsx(n.strong,{children:"webhook"}),", and the project is ready to translate."]}),`
`]}),`
`,e.jsx(n.p,{children:"Because every file becomes the same kind of segments, the rest of the platform never needs to know whether the content came from a Word document, a spreadsheet or a web page."}),`
`,e.jsx(n.h2,{id:"the-cat-tool",children:"The CAT tool"}),`
`,e.jsxs(n.p,{children:["As technical lead, I led a team of ",e.jsx(n.strong,{children:"4 developers and 2 testers"}),", and built the ",e.jsx(n.strong,{children:"CAT tool"})," (computer-assisted translation), the editor where translators spend their day. It shows each segment in the original language next to its translation, and gives translators the help they need right where they type:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Swalekh keyboard:"})," Reverie's keyboard for typing quickly in Indian languages."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Spell correction and grammar checks"})," designed for low-resource languages."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Machine translation suggestions:"})," the in-house NMT engine suggests a translation for the current segment, so translators edit instead of starting from a blank line."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Translation memory matches:"})," if this sentence was translated before, the earlier translation is shown first."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Glossary checks:"})," key terms are always translated the same way, so the final output stays consistent."]}),`
`]}),`
`,e.jsx(n.h2,{id:"translation-memory",children:"Translation memory"}),`
`,e.jsx(n.p,{children:"Many documents repeat the same sentences: legal text, product names, standard phrases. Translating them again wastes time and money."}),`
`,e.jsx(t,{chart:`flowchart LR
    S["New segment"] --> TM{"Translated<br/>before?"}
    TM -->|yes| R["Reuse the past translation"]
    TM -->|no| NMT["Ask machine translation"]
    R --> T["Translator reviews"]
    NMT --> T
    T -->|save| ES[(Elasticsearch)]`}),`
`,e.jsxs(n.p,{children:["Every approved translation is saved in ",e.jsx(n.strong,{children:"Elasticsearch"}),". When a new segment arrives, Prabandhak ",e.jsx(n.strong,{children:"searches the memory first"}),", using custom string matching to find the closest past translation. If the same text was already translated, it's reused right away. Only new text goes to the machine translation engine. This saves time, cuts cost, and keeps translations consistent across projects."]}),`
`,e.jsx(n.h2,{id:"additional-features",children:"Additional features"}),`
`,e.jsxs(n.p,{children:["Prabandhak also includes its own ",e.jsx(n.strong,{children:"project management"}),": users can create a ",e.jsx(n.strong,{children:"team"}),", add members and ",e.jsx(n.strong,{children:"assign projects"})," to them. ",e.jsx(n.strong,{children:"Automated workflows"})," take care of file handling, task assignment and quality checks, and ",e.jsx(n.strong,{children:"reports and analytics"})," show how each project and translator is doing, including turnaround time. For finding new talent, a ",e.jsx(n.strong,{children:"marketplace"})," lets project owners post work where ",e.jsx(n.strong,{children:"5,000+ linguistic freelancers"})," and language service providers can place bids, and then pick the right person by comparing bids against their own criteria."]}),`
`,e.jsx(n.h2,{id:"infrastructure",children:"Infrastructure"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Azure virtual machines"})," run the application."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PM2"})," keeps the Node.js services running, with ",e.jsx(n.strong,{children:"automatic restart"})," if a process crashes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Azure Blob Storage"})," keeps uploaded files."]}),`
`]}),`
`,e.jsx(n.h2,{id:"results",children:"Results"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"70% more efficient"})," translators, thanks to the translation memory."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"5,000+ freelance translators"})," joined the marketplace."]}),`
`,e.jsxs(n.li,{children:["Led a team of ",e.jsx(n.strong,{children:"4 developers and 2 testers"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"stack",children:"Stack"}),`
`,e.jsx(n.p,{children:"React, Ant Design, Node.js, MongoDB, Elasticsearch, Azure Blob Storage, Azure VMs, PM2, plus Reverie's in-house XLIFF manager and machine translation engine."})]})}function o(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{o as default,i as outline};
