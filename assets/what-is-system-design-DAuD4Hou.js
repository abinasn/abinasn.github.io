import{j as e}from"./index-DAzFAmNs.js";const l={toc:[{id:"definition",text:"Definition",depth:2},{id:"how-it-works",text:"How it works",depth:2},{id:"key-terms",text:"Key terms",depth:2},{id:"trade-offs",text:"Trade-offs",depth:2},{id:"in-the-wild",text:"In the wild",depth:2},{id:"when-to-use-avoid",text:"When to use / avoid",depth:2},{id:"tldr",text:"TL;DR",depth:2}],placedProblems:!1};function r(n){const s={code:"code",em:"em",h2:"h2",h3:"h3",li:"li","mermaid-diagram":"mermaid-diagram",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components},t=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"definition",children:"Definition"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"System design"}),` is the practice of deciding how the parts of a software system — servers, databases, caches, queues, networks — are arranged and connected so the system meets its requirements at the scale it must actually run.
Writing code answers `,e.jsx(s.em,{children:"does this function return the right value?"})," System design answers ",e.jsx(s.em,{children:"does it still return the right value under a million users, on a bad network, when a machine dies?"})]}),`
`,e.jsxs(s.p,{children:[`One machine can run an entire application: web server, database and all. That arrangement holds until users, data or hardware failures outgrow it.
The moment a second machine is added, `,e.jsx(s.strong,{children:"distance"})," appears. Calls now cross a network that is slower than memory, can drop messages, and can fail halfway. System design is the accumulated set of techniques for working with that distance instead of pretending it isn't there."]}),`
`,e.jsx(s.h3,{children:"When it becomes necessary"}),`
`,e.jsx(s.p,{children:`The need arrives at a threshold rather than gradually. Below it, growth is absorbed quietly by one machine and the cheapest fix is a bigger machine. Above it, the cheapest fix becomes a change to the arrangement itself — and that change is what system design is.
Three signals mark the crossing: the largest machine available is no longer comfortably ahead of demand, an outage now costs more than the redundancy that would have prevented it, or one slow component is degrading parts of the product unrelated to it.
A fourth trigger is irreversibility. Decisions such as how data is split across machines, or which component owns which data, become expensive to undo once live traffic depends on them, so they are worth designing before they are built.`}),`
`,e.jsx(s.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(s.h3,{children:"The three pressures"}),`
`,e.jsx(s.p,{children:"Almost every design decision traces back to one of three growth pressures."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Pressure"}),e.jsx(s.th,{children:"What breaks first"}),e.jsx(s.th,{children:"Typical response"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"More users"}),e.jsx(s.td,{children:"CPU and memory on one machine"}),e.jsx(s.td,{children:"Add machines behind a load balancer"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"More data"}),e.jsx(s.td,{children:"One database can't store or scan it"}),e.jsx(s.td,{children:"Split the data across machines"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Failure"}),e.jsx(s.td,{children:"One machine down means total outage"}),e.jsx(s.td,{children:"Keep redundant copies"})]})]})]}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"load balancer"})," is a component that receives incoming requests and distributes them across several identical servers."]}),`
`,e.jsx(s.h3,{children:"What actually gets decided"}),`
`,e.jsx(s.p,{children:"A design is a set of choices in roughly five categories."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Decomposition"})," — one deployable application, or several independent services?"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Data"})," — which store holds what, and how is it split or replicated?"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Communication"})," — direct request-and-response, or messages placed on a queue and handled later?"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Placement"})," — where does each piece run geographically, and what sits close to users?"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Failure behaviour"})," — what happens to the rest of the system when any one piece stops responding?"]}),`
`]}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"queue"})," is an intermediate buffer: the sender writes a message and moves on, and a separate worker reads and processes it later."]}),`
`,e.jsx(s.h3,{children:"Two altitudes: HLD and LLD"}),`
`,e.jsx(s.p,{children:"The same system is described at two zoom levels, and the words for them are standard."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{}),e.jsx(s.th,{children:"High-Level Design (HLD)"}),e.jsx(s.th,{children:"Low-Level Design (LLD)"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Question answered"}),e.jsx(s.td,{children:"What are the boxes, and how do they connect?"}),e.jsx(s.td,{children:"What is inside one box?"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Artifacts"}),e.jsx(s.td,{children:"Architecture diagram, data flow, technology choices"}),e.jsx(s.td,{children:"Class design, database schema, API contracts, algorithms"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Unit of thought"}),e.jsx(s.td,{children:"Service, datastore, network hop"}),e.jsx(s.td,{children:"Function, table, index, object"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Failure mode"}),e.jsx(s.td,{children:"Wrong shape — cannot scale, one component takes everything down"}),e.jsx(s.td,{children:"Right shape, faulty internals — race conditions, bad schema, wrong index"})]})]})]}),`
`,e.jsx("div",{}),`
`,e.jsx(t,{chart:`flowchart TB
    subgraph HLD["High-Level Design — the boxes"]
        direction LR
        C[Client] --> G[API Gateway]
        G --> P[Playback Service]
        P --> R[(Cache)]
        P --> D[(Primary Database)]
    end

    subgraph LLD["Low-Level Design — inside one box"]
        direction TB
        A["getEntitlement(userId, assetId)"]
        B["Index: userId + assetId"]
        E["Cache key + TTL policy"]
        F["Response shape returned to client"]
        A --> B
        A --> E
        A --> F
    end

    P -.zoom in.-> LLD`}),`
`,e.jsx(s.p,{children:"HLD picks the shape. LLD makes that shape correct."}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// LLD: the contract for one box in the diagram above."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// Small, precise, and unconcerned with how many servers exist."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"async"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" function"}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:" getEntitlement"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#FFA657"},children:"userId"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#FFA657"},children:"assetId"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" key"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:" `ent:${"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"userId"}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"}:${"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"assetId"}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"}`"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:";"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" cached"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" cache."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"get"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(key);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  if"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" (cached "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"!=="}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" null"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:") "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"return"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" JSON"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"parse"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(cached);"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"  // Compound index on { userId, assetId } keeps this a single lookup."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" record"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" db"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"    ."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"collection"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:'"entitlements"'}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:")"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"    ."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"findOne"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"({ userId, assetId }, { projection: { _id: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"0"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", tier: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"1"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", expiresAt: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"1"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" } });"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" result"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" { allowed: "}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"Boolean"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(record) "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"&&"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" record.expiresAt "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:">"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" Date."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"now"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"() };"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"  // Short TTL: entitlement can be revoked, so staleness is bounded."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" cache."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"set"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(key, "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"JSON"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"stringify"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(result), { ttlSeconds: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"60"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" });"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  return"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" result;"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"}"})})]})})}),`
`,e.jsx(s.h3,{children:"How a design is judged"}),`
`,e.jsx(s.p,{children:"A design that produces correct output can still be a bad design. Two families of requirement apply."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Functional"})," — what the system does. ",e.jsx(s.em,{children:"Play a video. Charge a card. Send a receipt."})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Non-functional"})," — how well it does it. ",e.jsx(s.em,{children:"Start playback in under two seconds. Stay up 99.95% of the year. Survive the loss of one data centre."})]}),`
`]}),`
`,e.jsx(s.p,{children:"Non-functional requirements are what make system design hard, because they conflict with each other and with cost."}),`
`,e.jsx(s.h2,{id:"key-terms",children:"Key terms"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Term"}),e.jsx(s.th,{children:"Plain-English meaning"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"High-Level Design (HLD)"}),e.jsx(s.td,{children:"The arrangement of major components and the connections between them"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Low-Level Design (LLD)"}),e.jsx(s.td,{children:"The internal construction of a single component: schema, classes, algorithms"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Component"}),e.jsx(s.td,{children:"Any independently running piece: a service, a database, a cache"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Load balancer"}),e.jsx(s.td,{children:"Spreads incoming requests across several identical servers"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Cache"}),e.jsx(s.td,{children:"A fast temporary store holding copies of data that is expensive to fetch"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Queue"}),e.jsx(s.td,{children:"A buffer that lets a sender hand off work and let a worker handle it later"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Latency"}),e.jsx(s.td,{children:"How long one request takes"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Throughput"}),e.jsx(s.td,{children:"How many requests are handled per unit of time"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Availability"}),e.jsx(s.td,{children:"The share of time the system is usable, often written as a run of nines"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Single point of failure"}),e.jsx(s.td,{children:"A component whose failure takes the whole system down"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Non-functional requirement"}),e.jsx(s.td,{children:"A quality target — speed, uptime, cost — rather than a feature"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Distributed system"}),e.jsx(s.td,{children:"A system whose work is spread across machines that talk over a network"})]})]})]}),`
`,e.jsx(s.h2,{id:"trade-offs",children:"Trade-offs"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Choice"}),e.jsx(s.th,{children:"Buys you"}),e.jsx(s.th,{children:"Costs you"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"One machine (monolith)"}),e.jsx(s.td,{children:"Simplicity, no network calls, easy debugging, low cost"}),e.jsx(s.td,{children:"A hard ceiling on capacity and a single point of failure"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Many machines"}),e.jsx(s.td,{children:"Capacity beyond one box, redundancy"}),e.jsx(s.td,{children:"Network delay, partial failure, coordination, operational overhead"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Copies of data in several places"}),e.jsx(s.td,{children:"Reads stay fast and survive a node loss"}),e.jsx(s.td,{children:"Copies can disagree; keeping them in step costs latency"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Design for future scale now"}),e.jsx(s.td,{children:"Fewer painful rewrites later"}),e.jsx(s.td,{children:"Complexity paid for before it is needed, slower delivery today"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Design for today only"}),e.jsx(s.td,{children:"Ships fastest, stays understandable"}),e.jsx(s.td,{children:"Rework when a pressure arrives"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"HLD before LLD"}),e.jsx(s.td,{children:"The shape is right before effort is spent inside it"}),e.jsx(s.td,{children:"Some internal constraints only surface late"})]})]})]}),`
`,e.jsx(s.p,{children:"The last two rows are the reason system design is judgement rather than a recipe. There is no arrangement that wins on every axis."}),`
`,e.jsx(s.h2,{id:"in-the-wild",children:"In the wild"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Stack Overflow"})," ran a very high-traffic site on a deliberately small number of powerful servers, showing that a simple, well-tuned arrangement can carry far more load than the machine count suggests."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Amazon"})," moved from a single large application to independently deployed services in the early 2000s, trading simplicity for the ability to let teams ship without coordinating a shared release."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Netflix"})," places caching appliances inside internet service provider networks so video is served from near the viewer rather than from a distant origin — a placement decision, made purely at the high level."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Google Spanner"})," spends extra write latency, coordinated by synchronised clocks, to give strongly consistent transactions across regions — buying consistency with time."]}),`
`]}),`
`,e.jsx(s.h2,{id:"when-to-use-avoid",children:"When to use / avoid"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Deliberate system design pays off when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Traffic or data is growing faster than a single machine can absorb."}),`
`,e.jsx(s.li,{children:"Downtime has a real cost — revenue, safety, contractual uptime."}),`
`,e.jsx(s.li,{children:"Several teams need to release independently."}),`
`,e.jsx(s.li,{children:"Users are spread across regions and physical distance is adding delay."}),`
`,e.jsx(s.li,{children:"A change would be expensive to reverse later, such as how data is split."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"It is usually overkill when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"The user base is small and the load fits comfortably on one machine."}),`
`,e.jsx(s.li,{children:"The product is still searching for what it should do; the shape will change anyway."}),`
`,e.jsx(s.li,{children:"The added components would introduce more failure modes than they remove."}),`
`,e.jsx(s.li,{children:"Nobody is available to operate and monitor the extra moving parts."}),`
`]}),`
`,e.jsx(s.h2,{id:"tldr",children:"TL;DR"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"System design is deciding how a system's parts are arranged so it meets its requirements at real scale."}),`
`,e.jsx(s.li,{children:"It exists because users, data and hardware failure eventually exceed what one machine can absorb."}),`
`,e.jsx(s.li,{children:"Adding machines introduces network distance: delay, partial failure and disagreeing copies of data."}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"HLD"})," defines the boxes and the connections; ",e.jsx(s.strong,{children:"LLD"})," defines what happens inside one box."]}),`
`,e.jsx(s.li,{children:"Designs are judged on non-functional requirements — latency, availability, cost — not only on correct output."}),`
`,e.jsx(s.li,{children:"Every arrangement trades something away, so the goal is a defensible fit for the constraints, not a universally best answer."}),`
`]})]})}function a(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{a as default,l as outline};
