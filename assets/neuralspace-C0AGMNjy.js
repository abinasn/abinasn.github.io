import{j as e}from"./index-CET28yB6.js";const o={toc:[{id:"what-it-is",text:"What it is",depth:2},{id:"why-it-exists",text:"Why it exists",depth:2},{id:"architecture",text:"Architecture",depth:2},{id:"how-the-assistant-knows-your-content",text:"How the assistant knows your content",depth:2},{id:"images-and-music",text:"Images and music",depth:2},{id:"the-storyboard",text:"The storyboard",depth:2},{id:"infrastructure",text:"Infrastructure",depth:2},{id:"results",text:"Results",depth:2},{id:"stack",text:"Stack",depth:2}],placedProblems:!1};function t(n){const s={code:"code",em:"em",h2:"h2",img:"img",li:"li","mermaid-diagram":"mermaid-diagram",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components},r=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"what-it-is",children:"What it is"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"StorytellerAI"})," is a creative AI companion. It works like the OpenAI Playground, but built around ",e.jsx(s.strong,{children:"your own AI assistants"}),", called ",e.jsx(s.strong,{children:"storytellers"}),", that help creators with ideas, scripts, images and music. It's made for ",e.jsx(s.strong,{children:"podcasters, scriptwriters, makeup artists, marketers"})," and any creative professional who wants to work faster while keeping their own voice."]}),`
`,e.jsxs(s.p,{children:["You can create ",e.jsx(s.strong,{children:"as many storytellers as you need"}),", each with its own:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Name and persona:"})," who the storyteller is, for example ",e.jsx(s.em,{children:'"Jacob, a writer who loves making up mystery stories"'}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Genre and style:"})," fantasy and concise, mystery and descriptive, horror and emotional, and so on."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Instructions:"})," how it should behave and respond."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Knowledge base:"})," documents, PDFs, videos, voice notes, images and public links it should learn from."]}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/work/neuralspace/storytellers.webp",alt:"Several storytellers, each with a name, persona and knowledge base"})}),`
`,e.jsxs(s.p,{children:["Then you ",e.jsx(s.strong,{children:"chat"})," with your storyteller, and it answers using everything you gave it. Every reply can be ",e.jsx(s.strong,{children:"bookmarked, copied, regenerated"})," or ",e.jsx(s.strong,{children:"turned into images"}),". You can also ",e.jsx(s.strong,{children:"generate music"}),", and collect the best pieces on a ",e.jsx(s.strong,{children:"storyboard"}),": an infinite canvas where the story comes together."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Create a storyteller → add persona, instructions and knowledge → chat
                     → generate images and music → bookmark the best parts → build the storyboard
`})}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/work/neuralspace/chat.webp",alt:"A storyteller replying with a story and generated images"})}),`
`,e.jsx(s.h2,{id:"why-it-exists",children:"Why it exists"}),`
`,e.jsx(s.p,{children:"General AI chat tools don't know your world. Every conversation starts from zero, so creative teams kept pasting the same background, tone and references again and again, and the good ideas ended up scattered across long chat histories."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Problem"}),e.jsx(s.th,{children:"How StorytellerAI solves it"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"The AI doesn't know your story, brand or world"}),e.jsxs(s.td,{children:["A ",e.jsx(s.strong,{children:"knowledge base"})," per storyteller, built from your documents, videos, voice notes, images and links."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Tone and style change from chat to chat"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Personas, genres and instructions"})," are saved with each storyteller and applied to every conversation."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"One assistant can't master every genre"}),e.jsxs(s.td,{children:["Create ",e.jsx(s.strong,{children:"many storytellers"}),", each with its own persona, purpose and style."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Text alone isn't enough for creative work"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Image and music generation"})," sit right next to the chat."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Good ideas get lost in long conversations"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Bookmark"})," any message and place it on the ",e.jsx(s.strong,{children:"storyboard"}),"."]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Ideas need structure to become a story"}),e.jsxs(s.td,{children:["The ",e.jsx(s.strong,{children:"storyboard"})," is an infinite canvas where pieces can be arranged and connected."]})]})]})]}),`
`,e.jsx(s.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsxs(s.p,{children:["StorytellerAI uses ",e.jsx(s.strong,{children:"React and TypeScript"})," on the frontend and ",e.jsx(s.strong,{children:"Node.js"})," services with ",e.jsx(s.strong,{children:"MongoDB"})," on the backend. It runs on ",e.jsx(s.strong,{children:"Kubernetes on Azure"}),", with files stored in ",e.jsx(s.strong,{children:"Azure Blob Storage"}),", and connects to ",e.jsx(s.strong,{children:"OpenAI"}),", ",e.jsx(s.strong,{children:"Midjourney"})," and ",e.jsx(s.strong,{children:"Suno AI"})," for text, images and music."]}),`
`,e.jsx(r,{chart:`flowchart LR
    UI["Browser<br/>storytellers, chat, storyboard"] --> API["Node.js services<br/>on Kubernetes"]
    API --> DB[(MongoDB)]
    API --> BLOB[(Azure Blob Storage)]
    API -->|knowledge, chat| OAI["OpenAI"]
    API -->|images| MJ["Midjourney"]
    API -->|music| SUNO["Suno AI"]`}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Part"}),e.jsx(s.th,{children:"What it does"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"React app"})}),e.jsx(s.td,{children:"The storyteller settings, the chat and the storyboard canvas."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Node.js services"})}),e.jsx(s.td,{children:"Storytellers, knowledge bases, chats, generations and storyboards."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"MongoDB"})}),e.jsx(s.td,{children:"Stores storytellers, personas, instructions, chats, bookmarks and storyboards."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Azure Blob Storage"})}),e.jsx(s.td,{children:"Keeps uploaded files and generated images and music."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"OpenAI"})}),e.jsx(s.td,{children:"Powers the assistant: the knowledge base search and the chat replies."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Midjourney and Suno AI"})}),e.jsx(s.td,{children:"Generate images and music from the story."})]})]})]}),`
`,e.jsx(s.h2,{id:"how-the-assistant-knows-your-content",children:"How the assistant knows your content"}),`
`,e.jsx(s.p,{children:"The heart of StorytellerAI is giving the AI the right context for every answer."}),`
`,e.jsx(r,{chart:`flowchart LR
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
`,e.jsx(s.p,{children:"Text alone isn't enough for creative work, so visuals and sound sit right next to the chat."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Images"})," are generated with ",e.jsx(s.strong,{children:"Midjourney"}),". Any reply can be turned into images with one click, and users can create ",e.jsx(s.strong,{children:"characters, scenes, costumes and hairstyles"}),". A ",e.jsx(s.strong,{children:"character consistency"})," feature keeps the same character looking the same across many images, which matters when you're building a story."]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/work/neuralspace/characters.webp",alt:"Generated character images in the chat"})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Music"})," is generated with ",e.jsx(s.strong,{children:"Suno AI"}),". Users describe the song they want, and the AI creates it, ",e.jsx(s.strong,{children:"complete with lyrics"}),". They can also use ",e.jsx(s.strong,{children:"their own lyrics"}),", pick any genre or style, or create ",e.jsx(s.strong,{children:"instrumental tracks"}),", like a background score for a trailer."]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/work/neuralspace/music.webp",alt:"A generated music track in the chat"})}),`
`,e.jsxs(s.p,{children:["Generated images and music are saved to ",e.jsx(s.strong,{children:"Azure Blob Storage"}),", so they stay with the storyteller and can be downloaded or placed on the storyboard."]}),`
`,e.jsx(s.h2,{id:"the-storyboard",children:"The storyboard"}),`
`,e.jsxs(s.p,{children:["Long chats are a poor place to build a story. So any reply can be ",e.jsx(s.strong,{children:"bookmarked"})," and added to the ",e.jsx(s.strong,{children:"storyboard"}),": an ",e.jsx(s.strong,{children:"infinite canvas"})," I built with ",e.jsx(s.strong,{children:"React Flow"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The storyboard holds three kinds of blocks: ",e.jsx(s.strong,{children:"messages"}),", ",e.jsx(s.strong,{children:"images"})," and ",e.jsx(s.strong,{children:"music"}),". Each one keeps the time it was created."]}),`
`,e.jsxs(s.li,{children:["Blocks can be ",e.jsx(s.strong,{children:"connected"})," to outline the story's timeline, scene by scene."]}),`
`,e.jsxs(s.li,{children:["Message blocks can be ",e.jsx(s.strong,{children:"edited"}),", images can be ",e.jsx(s.strong,{children:"viewed"})," full size, music can be ",e.jsx(s.strong,{children:"played"})," right on the canvas, and any block can be ",e.jsx(s.strong,{children:"removed"}),"."]}),`
`,e.jsxs(s.li,{children:["Storyboards can be ",e.jsx(s.strong,{children:"shared with the team"}),", so everyone can contribute to the same story."]}),`
`]}),`
`,e.jsx(s.p,{children:"The result is one place where ideas from many conversations turn into a single, organised story."}),`
`,e.jsx(s.h2,{id:"infrastructure",children:"Infrastructure"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Kubernetes on Azure"})," runs the services."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Azure Blob Storage"})," keeps uploaded and generated files."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CircleCI"})," builds, tests and deploys every change automatically."]}),`
`]}),`
`,e.jsx(s.h2,{id:"results",children:"Results"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"1,000+ users"})," on the platform."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"65% better creative efficiency"})," and ",e.jsx(s.strong,{children:"85% higher productivity"}),", according to beta testers."]}),`
`]}),`
`,e.jsx(s.h2,{id:"stack",children:"Stack"}),`
`,e.jsx(s.p,{children:"React, TypeScript, Redux Toolkit, Tailwind CSS, React Flow, Node.js, Express, MongoDB, OpenAI Assistants API, Midjourney, Suno AI, Azure Kubernetes, Azure Blob Storage and CircleCI."})]})}function a(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{a as default,o as outline};
