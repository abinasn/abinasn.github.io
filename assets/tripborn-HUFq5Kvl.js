import{j as e}from"./index-DOxUQF25.js";const r={toc:[{id:"what-it-was",text:"What it was",depth:2},{id:"what-i-did",text:"What I did",depth:2},{id:"result",text:"Result",depth:2},{id:"stack",text:"Stack",depth:2}],placedProblems:!1};function s(t){const n={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"what-it-was",children:"What it was"}),`
`,e.jsxs(n.p,{children:["Tripborn sold bus tickets to travel agents. Ticket prices came from several providers (",e.jsx(n.strong,{children:"Redbus"}),", ",e.jsx(n.strong,{children:"Ticketgoose"}),", ",e.jsx(n.strong,{children:"Travelyaari"})," and ",e.jsx(n.strong,{children:"Abhibus"}),"), and agents had to check each one separately to find the best fare."]}),`
`,e.jsx(n.h2,{id:"what-i-did",children:"What I did"}),`
`,e.jsxs(n.p,{children:["I built an ",e.jsx(n.strong,{children:"API aggregator"})," in ",e.jsx(n.strong,{children:"Node.js"})," and ",e.jsx(n.strong,{children:"MongoDB"})," that searched all four providers at once and combined the results into one list, with the ",e.jsx(n.strong,{children:"lowest price shown first"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Each provider returned data in its own format, so every response was converted into one common shape."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Redis caching"})," kept popular routes fast, so repeat searches didn't hit every provider again."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Rate limiting"})," and ",e.jsx(n.strong,{children:"JWT authentication"})," protected the API."]}),`
`,e.jsxs(n.li,{children:["The code followed ",e.jsx(n.strong,{children:"object-oriented design"})," and ",e.jsx(n.strong,{children:"SOLID principles"}),", so adding a new provider meant adding one small module."]}),`
`]}),`
`,e.jsx(n.h2,{id:"result",children:"Result"}),`
`,e.jsxs(n.p,{children:["Agents searched once instead of four times. Search time dropped by about ",e.jsx(n.strong,{children:"75%"}),", and bookings went up by about ",e.jsx(n.strong,{children:"30%"}),"."]}),`
`,e.jsx(n.h2,{id:"stack",children:"Stack"}),`
`,e.jsx(n.p,{children:"Node.js, MongoDB, Redis and AWS."})]})}function d(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{d as default,r as outline};
