import{j as e}from"./index-DAzFAmNs.js";const i={toc:[{id:"what-it-is",text:"What it is",depth:2},{id:"why-it-exists",text:"Why it exists",depth:2},{id:"architecture",text:"Architecture",depth:2},{id:"how-the-assistant-knows-your-content",text:"How the assistant knows your content",depth:2},{id:"images-and-music",text:"Images and music",depth:2},{id:"the-storyboard",text:"The storyboard",depth:2},{id:"infrastructure",text:"Infrastructure",depth:2},{id:"results",text:"Results",depth:2},{id:"stack",text:"Stack",depth:2}],placedProblems:!1};function r(n){const s={code:"code",h2:"h2",li:"li","mermaid-diagram":"mermaid-diagram",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components},t=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"what-it-is",children:"What it is"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"StorytellerAI"})," lets anyone build ",e.jsx(s.strong,{children:"their own AI assistant"})," and use it to create stories, much like the OpenAI Playground but built around your own content."]}),`
`,e.jsxs(s.p,{children:["You create a ",e.jsx(s.strong,{children:"project"})," and teach the assistant what it needs to know:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Instructions:"})," how the assistant should behave and respond."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Personas:"})," the voice and character it should speak in."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Knowledge base:"})," files, public web pages and other resources it should learn from."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Then you ",e.jsx(s.strong,{children:"chat"})," with the assistant, and it answers using everything you gave it. Along the way you can ",e.jsx(s.strong,{children:"generate images and music"}),", ",e.jsx(s.strong,{children:"bookmark"})," the best answers, and arrange them on a ",e.jsx(s.strong,{children:"storyboard"}),": an infinite canvas where the story comes together."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Create project → add instructions, personas and knowledge → chat with the assistant
              → generate images and music → bookmark the best parts → build the storyboard
`})}),`
`,e.jsx(s.h2,{id:"why-it-exists",children:"Why it exists"}),`
`,e.jsx(s.p,{children:"General AI chat tools don't know your world. Every conversation starts from zero, so creative teams kept pasting the same background, tone and references again and again, and the good ideas ended up scattered across long chat histories."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Problem"}),e.jsx(s.th,{children:"How StorytellerAI solves it"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"The AI doesn't know your story, brand or world"}),e.jsxs(s.td,{children:["A ",e.jsx(s.strong,{children:"knowledge base"})," per project, built from your files and links, so every answer uses your material."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Tone and style change from chat to chat"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Instructions and personas"})," are saved with the project and applied to every conversation."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Text alone isn't enough for creative work"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Image and music generation"})," sit right next to the chat."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Good ideas get lost in long conversations"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Bookmark"})," any message and place it on the ",e.jsx(s.strong,{children:"storyboard"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Ideas need structure to become a story"}),e.jsxs(s.td,{children:["The ",e.jsx(s.strong,{children:"storyboard"})," is an infinite canvas where pieces can be arranged and connected."]})]})]})]}),`
`,e.jsx(s.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsxs(s.p,{children:["StorytellerAI uses the same stack as BeyondCaptions: ",e.jsx(s.strong,{children:"React and TypeScript"})," on the frontend and ",e.jsx(s.strong,{children:"Node.js"})," services with ",e.jsx(s.strong,{children:"MongoDB"})," on the backend. It runs on ",e.jsx(s.strong,{children:"Kubernetes on Azure"}),", with files stored in ",e.jsx(s.strong,{children:"Azure Blob Storage"}),", and connects to ",e.jsx(s.strong,{children:"OpenAI"}),", ",e.jsx(s.strong,{children:"Midjourney"})," and ",e.jsx(s.strong,{children:"Suno AI"})," for text, images and music."]}),`
`,e.jsx(t,{chart:`flowchart LR
    UI["Browser<br/>chat, storyboard"] --> API["Node.js services<br/>on Kubernetes"]
    API --> DB[(MongoDB)]
    API --> BLOB[(Azure Blob Storage)]
    API -->|knowledge, chat| OAI["OpenAI"]
    API -->|images| MJ["Midjourney"]
    API -->|music| SUNO["Suno AI"]`}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Part"}),e.jsx(s.th,{children:"What it does"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"React app"})}),e.jsx(s.td,{children:"The chat, the project settings and the storyboard canvas."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Node.js services"})}),e.jsx(s.td,{children:"Projects, knowledge bases, chats, generations and storyboards."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"MongoDB"})}),e.jsx(s.td,{children:"Stores projects, personas, instructions, chats, bookmarks and storyboards."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Azure Blob Storage"})}),e.jsx(s.td,{children:"Keeps uploaded files and generated images and music."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"OpenAI"})}),e.jsx(s.td,{children:"Powers the assistant: the knowledge base search and the chat replies."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Midjourney and Suno AI"})}),e.jsx(s.td,{children:"Generate images and music from the story."})]})]})]}),`
`,e.jsx(s.h2,{id:"how-the-assistant-knows-your-content",children:"How the assistant knows your content"}),`
`,e.jsx(s.p,{children:"The heart of StorytellerAI is giving the AI the right context for every answer."}),`
`,e.jsx(t,{chart:`flowchart LR
    I["Instructions"] --> C["Chat request"]
    P["Persona"] --> C
    F["Files and links"] --> V[("OpenAI<br/>vector store")]
    V -->|relevant parts| C
    C --> R["Assistant reply"]
    R -->|bookmark| SB["Storyboard"]`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Knowledge base:"})," when you add files or public links, they are sent to the ",e.jsx(s.strong,{children:"OpenAI Assistants API"})," and stored in a ",e.jsx(s.strong,{children:"vector database"}),". A vector database stores text by meaning, so the assistant can find the parts that matter for each question."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Instructions and personas"})," are turned into ",e.jsx(s.strong,{children:"custom prompts"})," that shape every reply."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Chat replies"})," come from OpenAI's completion API, combining your question, the instructions, the persona and the relevant knowledge."]}),`
`]}),`
`,e.jsx(s.h2,{id:"images-and-music",children:"Images and music"}),`
`,e.jsx(s.p,{children:"Next to the chat, you can turn the story into visuals and sound:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Images"})," are generated with ",e.jsx(s.strong,{children:"Midjourney"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Music"})," is generated with ",e.jsx(s.strong,{children:"Suno AI"}),"."]}),`
`]}),`
`,e.jsxs(s.p,{children:["Generated files are saved to ",e.jsx(s.strong,{children:"Azure Blob Storage"}),", so they stay with the project and can be placed on the storyboard."]}),`
`,e.jsx(s.h2,{id:"the-storyboard",children:"The storyboard"}),`
`,e.jsxs(s.p,{children:["Long chats are a poor place to build a story. So any message can be ",e.jsx(s.strong,{children:"bookmarked"})," and added to the ",e.jsx(s.strong,{children:"storyboard"}),": an ",e.jsx(s.strong,{children:"infinite canvas"})," built with ",e.jsx(s.strong,{children:"React Flow"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Each piece (text, image or music) becomes a ",e.jsx(s.strong,{children:"node"})," on the canvas."]}),`
`,e.jsxs(s.li,{children:["Nodes can be ",e.jsx(s.strong,{children:"moved, grouped and connected"})," to show how the story flows."]}),`
`,e.jsxs(s.li,{children:["The canvas can be ",e.jsx(s.strong,{children:"zoomed and panned"})," freely, so a story of any size fits."]}),`
`]}),`
`,e.jsx(s.p,{children:"The result is one place where the ideas from many conversations turn into a single, organised story."}),`
`,e.jsx(s.h2,{id:"infrastructure",children:"Infrastructure"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Kubernetes on Azure"})," runs the services."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Azure Blob Storage"})," keeps uploaded and generated files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CircleCI"})," builds, tests and deploys every change automatically."]}),`
`]}),`
`,e.jsx(s.h2,{id:"results",children:"Results"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"1,000+ users"})," on the platform."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"85% faster"})," story creation, according to beta testers."]}),`
`]}),`
`,e.jsx(s.h2,{id:"stack",children:"Stack"}),`
`,e.jsx(s.p,{children:"React, TypeScript, Redux Toolkit, Tailwind CSS, React Flow, Node.js, Express, MongoDB, OpenAI Assistants API, Midjourney, Suno AI, Azure Kubernetes, Azure Blob Storage and CircleCI."})]})}function d(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{d as default,i as outline};
