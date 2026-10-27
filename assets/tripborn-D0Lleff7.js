import{j as e}from"./index-GyExuTDf.js";const i={toc:[{id:"what-it-was",text:"What it was",depth:2},{id:"what-i-built",text:"What I built",depth:2},{id:"how-it-worked",text:"How it worked",depth:2},{id:"how-the-code-was-organised",text:"How the code was organised",depth:2},{id:"result",text:"Result",depth:2},{id:"stack",text:"Stack",depth:2}],placedProblems:!1};function n(t){const s={h2:"h2",li:"li","mermaid-diagram":"mermaid-diagram",p:"p",strong:"strong",ul:"ul",...t.components},r=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"what-it-was",children:"What it was"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tripborn"})," ran a booking portal for ",e.jsx(s.strong,{children:"travel agents"}),". Agents used it to book bus tickets for their customers across India."]}),`
`,e.jsxs(s.p,{children:["Bus tickets came from several big providers: ",e.jsx(s.strong,{children:"Redbus"}),", ",e.jsx(s.strong,{children:"Ticketgoose"}),", ",e.jsx(s.strong,{children:"Travelyaari"})," and ",e.jsx(s.strong,{children:"Abhibus"}),". Each one had its own website and its own API, with different prices for the same route. To find the best fare, an agent had to check every provider one by one, compare prices by hand, and then book. It was slow, and agents often missed a cheaper option."]}),`
`,e.jsx(s.h2,{id:"what-i-built",children:"What I built"}),`
`,e.jsxs(s.p,{children:["I built a ",e.jsx(s.strong,{children:"ticket aggregator API"})," in ",e.jsx(s.strong,{children:"Node.js"})," and ",e.jsx(s.strong,{children:"MongoDB"}),". An agent searched once, and the aggregator asked all four providers at the same time, combined the answers, and showed one list with the ",e.jsx(s.strong,{children:"lowest price first"}),"."]}),`
`,e.jsx(r,{chart:`flowchart LR
    A["Agent searches<br/>route and date"] --> API["Aggregator API<br/>Node.js"]
    API --> C{"In cache?"}
    C -->|yes| R["Results"]
    C -->|no| P1["Redbus"]
    C -->|no| P2["Ticketgoose"]
    C -->|no| P3["Travelyaari"]
    C -->|no| P4["Abhibus"]
    P1 --> M["Combine and sort<br/>lowest price first"]
    P2 --> M
    P3 --> M
    P4 --> M
    M --> R`}),`
`,e.jsx(s.h2,{id:"how-it-worked",children:"How it worked"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"One search, four providers."})," The aggregator called all providers ",e.jsx(s.strong,{children:"in parallel"}),", so the total wait was close to the slowest single provider, not all four added together. If one provider was slow or down, the others still returned results."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"One common format."})," Every provider described buses, seats, times and prices differently. Each response was converted into ",e.jsx(s.strong,{children:"one shared format"}),", so the rest of the app could sort and show results without caring where they came from."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Lowest price first."})," After combining the results, the list was sorted by price, so the best deal was always at the top."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Caching popular routes."})," Many agents searched the same busy routes again and again. Results for these routes were kept in ",e.jsx(s.strong,{children:"Redis"})," for a short time, so repeat searches came back instantly and didn't call every provider again."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Keeping the API safe."})," The API used ",e.jsx(s.strong,{children:"JWT authentication"})," so only logged-in agents could use it, and ",e.jsx(s.strong,{children:"rate limiting"})," so no single user could overload it."]}),`
`,e.jsx(s.h2,{id:"how-the-code-was-organised",children:"How the code was organised"}),`
`,e.jsxs(s.p,{children:["I wrote the service using ",e.jsx(s.strong,{children:"object-oriented design"})," and ",e.jsx(s.strong,{children:"SOLID principles"}),". Each provider lived in its own small module with the same interface: search, convert to the common format, and book. Adding a new provider meant adding one new module, without changing the rest of the code."]}),`
`,e.jsx(s.h2,{id:"result",children:"Result"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Agents searched ",e.jsx(s.strong,{children:"once instead of four times"}),"."]}),`
`,e.jsxs(s.li,{children:["Search time dropped by about ",e.jsx(s.strong,{children:"75%"}),"."]}),`
`,e.jsxs(s.li,{children:["Bookings went up by about ",e.jsx(s.strong,{children:"30%"}),", because agents could see the best fares straight away."]}),`
`]}),`
`,e.jsx(s.h2,{id:"stack",children:"Stack"}),`
`,e.jsx(s.p,{children:"Node.js, MongoDB, Redis and AWS."})]})}function a(t={}){const{wrapper:s}=t.components||{};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{a as default,i as outline};
