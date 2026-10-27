import{j as e}from"./index-GyExuTDf.js";const a={toc:[{id:"what-it-was",text:"What it was",depth:2},{id:"what-i-did",text:"What I did",depth:2},{id:"result",text:"Result",depth:2},{id:"what-i-learned",text:"What I learned",depth:2},{id:"stack",text:"Stack",depth:2}],placedProblems:!1};function s(t){const n={h2:"h2",h3:"h3",li:"li","mermaid-diagram":"mermaid-diagram",p:"p",strong:"strong",ul:"ul",...t.components},r=n["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"what-it-was",children:"What it was"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"MetaDemy"})," was a small ed-tech startup I co-founded under ",e.jsx(n.strong,{children:"Metaverse Internet Pvt. Ltd."})," in Bhubaneswar."]}),`
`,e.jsxs(n.p,{children:["We saw that many students and working professionals wanted to learn ",e.jsx(n.strong,{children:"competitive coding"})," and ",e.jsx(n.strong,{children:"full-stack development"}),", but good courses were either too expensive or not available locally. MetaDemy offered practical courses at an ",e.jsx(n.strong,{children:"affordable price"}),", taught by people who wrote code every day."]}),`
`,e.jsx(n.h2,{id:"what-i-did",children:"What I did"}),`
`,e.jsxs(n.p,{children:["Being a small team, I worked on both the ",e.jsx(n.strong,{children:"technology"})," and the ",e.jsx(n.strong,{children:"business"}),"."]}),`
`,e.jsx(n.h3,{children:"The platform"}),`
`,e.jsxs(n.p,{children:["I built the MetaDemy platform with ",e.jsx(n.strong,{children:"PHP Laravel"})," and ",e.jsx(n.strong,{children:"MySQL"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Course pages"})," describing each course, its topics and its price."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Student sign-up"}),", so learners could create an account and enroll."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Online payments"}),", through an integrated ",e.jsx(n.strong,{children:"payment gateway"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Redis"})," caching to keep pages fast."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hosting on AWS"}),"."]}),`
`]}),`
`,e.jsx(r,{chart:`flowchart LR
    V["Visitor"] --> C["Browses courses"]
    C --> S["Signs up"]
    S --> P["Pays online"]
    P --> E["Enrolled in the course"]`}),`
`,e.jsx(n.h3,{children:"The business"}),`
`,e.jsxs(n.p,{children:["Outside of the code, I helped with ",e.jsx(n.strong,{children:"sales"}),": talking to students, explaining the courses and enrolling them. I also helped with ",e.jsx(n.strong,{children:"teaching"})," and supporting students during the course. Balancing building, selling and teaching taught me a lot about what a product really needs to succeed."]}),`
`,e.jsx(n.h2,{id:"result",children:"Result"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"23 students"})," joined the first batch."]}),`
`,e.jsxs(n.li,{children:["The first batch earned ",e.jsx(n.strong,{children:"₹2.7 lakh"})," in revenue."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"90%"})," of students completed their course."]}),`
`]}),`
`,e.jsx(n.p,{children:"It was a small start, but it showed that people wanted affordable, practical coding courses."}),`
`,e.jsx(n.h2,{id:"what-i-learned",children:"What I learned"}),`
`,e.jsx(n.p,{children:"Running MetaDemy taught me that building software is only one part of a product. Understanding users, pricing, sales and support matter just as much. These lessons shaped how I think about products to this day."}),`
`,e.jsx(n.h2,{id:"stack",children:"Stack"}),`
`,e.jsx(n.p,{children:"PHP Laravel, MySQL, Redis and AWS."})]})}function d(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default,a as outline};
