import{j as e}from"./index-CET28yB6.js";const t={toc:[{id:"definition",text:"Definition",depth:2},{id:"how-it-works",text:"How it works",depth:2},{id:"key-terms",text:"Key terms",depth:2},{id:"trade-offs",text:"Trade-offs",depth:2},{id:"in-the-wild",text:"In the wild",depth:2},{id:"when-to-use-avoid",text:"When to use / avoid",depth:2},{id:"tldr",text:"TL;DR",depth:2}],placedProblems:!1};function i(n){const s={code:"code",em:"em",h2:"h2",h3:"h3",li:"li","mermaid-diagram":"mermaid-diagram",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components},r=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"definition",children:"Definition"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Scalability"}),` is a system's ability to handle a growing amount of work by adding resources to it.
The emphasis is on `,e.jsx(s.em,{children:"by adding resources"}),". A system that gets faster only when someone rewrites its code is being optimised, not scaled. A scalable system absorbs more load through a change in resources, not a change in logic."]}),`
`,e.jsx(s.p,{children:`Load is not constant. A product that serves a thousand requests a minute today may serve a hundred thousand next year, and ten times its average during one hour on a Friday night.
Rewriting the system each time demand moves is too slow and too risky. Scalability is the property that lets capacity be adjusted as an operational action — provision more, or provision less — rather than an engineering project.`}),`
`,e.jsx(s.h3,{children:"Scaling is two-directional"}),`
`,e.jsx(s.p,{children:"Growth gets the attention, but shrinking matters just as much. Cloud capacity is billed by the hour, so a system sized for its yearly peak wastes money during every hour that is not the peak."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Elasticity"})," is the ability to scale in both directions automatically as demand moves. Scalability makes the capacity change possible; elasticity makes it happen without a human."]}),`
`,e.jsx(s.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(s.p,{children:"There are exactly two ways to add capacity."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{}),e.jsx(s.th,{children:'Vertical scaling ("scaling up")'}),e.jsx(s.th,{children:'Horizontal scaling ("scaling out")'})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"The move"}),e.jsx(s.td,{children:"Replace the machine with a bigger one"}),e.jsx(s.td,{children:"Add more machines beside it"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Resource added"}),e.jsx(s.td,{children:"More CPU cores, RAM, faster disk"}),e.jsx(s.td,{children:"More whole servers"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Reverse direction"}),e.jsx(s.td,{children:"Scaling down — smaller machine"}),e.jsx(s.td,{children:"Scaling in — remove machines"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Application changes"}),e.jsx(s.td,{children:"Usually none"}),e.jsx(s.td,{children:"Often significant"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Ceiling"}),e.jsx(s.td,{children:"The largest machine that can be bought"}),e.jsx(s.td,{children:"No hard ceiling"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Effect on failure"}),e.jsx(s.td,{children:"One machine remains a single point of failure"}),e.jsx(s.td,{children:"Surviving machines absorb the load"})]})]})]}),`
`,e.jsx(r,{chart:`flowchart LR
    subgraph V["Vertical — one machine grows"]
        direction TB
        V1["2 CPU
4 GB"] --> V2["8 CPU
32 GB"] --> V3["64 CPU
512 GB"]
    end

    subgraph H["Horizontal — machines multiply"]
        direction TB
        LB["Load Balancer"]
        LB --> H1["Server 1"]
        LB --> H2["Server 2"]
        LB --> H3["Server 3"]
        LB --> H4["Server N"]
    end`}),`
`,e.jsx(s.h3,{children:"Vertical scaling"}),`
`,e.jsx(s.p,{children:"The application does not know anything changed. The same process runs on the same operating system with the same code, simply with more resources beneath it."}),`
`,e.jsx(s.p,{children:"This makes it the cheapest option in engineering time, and it is often the correct first answer. Its limits are physical and economic rather than technical."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A hard ceiling."})," Cloud providers sell a largest instance. Once it is reached, there is nothing bigger to buy."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Non-linear cost."})," Beyond commodity hardware, price rises faster than capacity. Twice the cores usually costs well over twice as much."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Downtime on resize."})," Changing instance size typically requires a restart, so the change is not free operationally."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Failure is unchanged."})," A bigger machine is still one machine. If it dies, everything dies with it."]}),`
`]}),`
`,e.jsx(s.h3,{children:"Horizontal scaling"}),`
`,e.jsxs(s.p,{children:["Capacity is added by running more copies of the application and placing a ",e.jsx(s.strong,{children:"load balancer"})," in front of them to distribute incoming requests."]}),`
`,e.jsx(s.p,{children:"This removes the ceiling and adds redundancy at the same time, which is why almost every large system ends up here. The cost is that the application must be built to allow it."}),`
`,e.jsx(s.h3,{children:"The precondition: statelessness"}),`
`,e.jsxs(s.p,{children:["A server is ",e.jsx(s.strong,{children:"stateless"})," when it stores nothing between requests that a later request depends on. This is what makes horizontal scaling possible: if any server can answer any request, the load balancer is free to send a request anywhere."]}),`
`,e.jsx(s.p,{children:"Storing state in a server's own memory breaks that. The user's second request lands on a different machine, which has never heard of them."}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// STATEFUL — breaks the moment a second server exists."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// This map lives in one process's memory. Server 2 has its own, empty copy."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" sessions"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" new"}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:" Map"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"();"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"app."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"post"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:'"/login"'}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", ("}),e.jsx(s.span,{style:{color:"#FFA657"},children:"req"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#FFA657"},children:"res"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:") "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"=>"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" sessionId"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" crypto."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"randomUUID"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"  sessions."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"set"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(sessionId, { userId: req.body.userId });"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"  res."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"cookie"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:'"sid"'}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", sessionId)."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"send"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"({ ok: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"true"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" });"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"});"})})]})})}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// STATELESS — state moved to a store every server can reach."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// Any instance can now serve any request, so instances become interchangeable."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"app."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"post"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:'"/login"'}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"async"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" ("}),e.jsx(s.span,{style:{color:"#FFA657"},children:"req"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#FFA657"},children:"res"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:") "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"=>"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" sessionId"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" crypto."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"randomUUID"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" redis."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"set"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"`sess:${"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"sessionId"}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"}`"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"JSON"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"stringify"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"({ userId: req.body.userId }), {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"    EX: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"86400"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(s.span,{style:{color:"#8B949E"},children:"// expire after a day, so abandoned sessions clean themselves up"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"  });"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"  res."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"cookie"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:'"sid"'}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", sessionId)."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"send"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"({ ok: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"true"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" });"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"});"})})]})})}),`
`,e.jsx(s.p,{children:"The general rule: move state out of the process and into something shared — a cache, a database, or a signed token carried by the client."}),`
`,e.jsx(s.h3,{children:"Why capacity does not double when servers do"}),`
`,e.jsx(s.p,{children:"Adding a second server rarely gives twice the throughput. Two effects get in the way."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The shared bottleneck."})," Application servers usually share one database. Doubling them doubles the pressure on a resource that did not get any bigger, so the database becomes the new limit."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Coordination overhead."})," Machines that must agree — on a lock, a leader, a cache invalidation — spend time talking instead of working, and that cost grows with the number of participants."]}),`
`]}),`
`,e.jsx(s.p,{children:"The practical consequence is that horizontal scaling is not a single decision. Scaling the stateless tier is straightforward; scaling the data tier underneath it is the harder problem, and it is where most of the real work lives."}),`
`,e.jsx(s.h3,{children:"The usual progression"}),`
`,e.jsx(s.p,{children:"Most systems travel the same route, and each step is only taken when the previous one runs out."}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"One machine."})," Application and database together."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Scale up."})," Buy a bigger machine. Cheap, fast, no code changes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Separate the database."})," Application and data now scale independently."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Scale the application out."})," Several stateless app servers behind a load balancer."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Scale reads out."})," Copies of the database serve read traffic."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Scale writes out."})," Split the data across machines so no single one holds all of it."]}),`
`]}),`
`,e.jsx(s.h2,{id:"key-terms",children:"Key terms"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Term"}),e.jsx(s.th,{children:"Plain-English meaning"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Scalability"}),e.jsx(s.td,{children:"The ability to handle more work by adding resources"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Vertical scaling (scale up)"}),e.jsx(s.td,{children:"Replacing a machine with a more powerful one"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Horizontal scaling (scale out)"}),e.jsx(s.td,{children:"Adding more machines that share the work"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Scaling down / scaling in"}),e.jsx(s.td,{children:"The reverse of each, releasing capacity when demand falls"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Elasticity"}),e.jsx(s.td,{children:"Adjusting capacity automatically as demand changes"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Node / instance"}),e.jsx(s.td,{children:"One running machine in a group of them"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Load balancer"}),e.jsx(s.td,{children:"Distributes incoming requests across several identical servers"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Stateless"}),e.jsx(s.td,{children:"Keeps nothing in local memory that a later request depends on"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Sticky session"}),e.jsx(s.td,{children:"Load balancer setting that pins one user to one server"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Linear scalability"}),e.jsx(s.td,{children:"Doubling the machines roughly doubles the capacity"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Bottleneck"}),e.jsx(s.td,{children:"The one component that limits the whole system's throughput"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Auto-scaling"}),e.jsx(s.td,{children:"Adding or removing instances automatically from a load signal"})]})]})]}),`
`,e.jsx(s.h2,{id:"trade-offs",children:"Trade-offs"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Choice"}),e.jsx(s.th,{children:"Buys you"}),e.jsx(s.th,{children:"Costs you"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Scale up"}),e.jsx(s.td,{children:"No code changes, no distributed complexity, immediate"}),e.jsx(s.td,{children:"A hard ceiling, non-linear cost, downtime to resize, unchanged failure risk"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Scale out"}),e.jsx(s.td,{children:"No ceiling, redundancy, commodity hardware pricing"}),e.jsx(s.td,{children:"Statelessness required, load balancing, network hops, harder debugging"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Stateless servers"}),e.jsx(s.td,{children:"Any instance serves any request; instances become disposable"}),e.jsx(s.td,{children:"Every session read becomes a network call to a shared store"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Sticky sessions"}),e.jsx(s.td,{children:"Keeps existing in-memory state working"}),e.jsx(s.td,{children:"Uneven load, and a user's session dies with their server"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Auto-scaling"}),e.jsx(s.td,{children:"Pays only for capacity in use, absorbs spikes"}),e.jsx(s.td,{children:"New instances take time to start, so sudden spikes still hurt"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Fixed capacity at peak size"}),e.jsx(s.td,{children:"Predictable, always ready"}),e.jsx(s.td,{children:"Paid for continuously, mostly idle"})]})]})]}),`
`,e.jsx(s.p,{children:"Scaling up and scaling out are not rivals. Real systems do both: scale each individual node up to a sensible size, then run many of them."}),`
`,e.jsx(s.h2,{id:"in-the-wild",children:"In the wild"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Stack Overflow"})," ran one of the web's busiest sites on a small number of deliberately powerful servers, showing how far careful vertical scaling and caching can go before scaling out is required."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Netflix"})," runs stateless services on cloud instances that auto-scale with viewing demand, which rises and falls sharply by region and time of day."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cassandra"})," and ",e.jsx(s.strong,{children:"DynamoDB"})," were designed to scale out from the start, spreading data across nodes so that write capacity grows with the cluster."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Relational databases"})," such as PostgreSQL and MySQL are typically scaled up first, then given read replicas, because splitting writes across machines is the hardest step of all."]}),`
`]}),`
`,e.jsx(s.h2,{id:"when-to-use-avoid",children:"When to use / avoid"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Scale up when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"The load still fits, or nearly fits, on one machine."}),`
`,e.jsx(s.li,{children:"The application holds state in memory and cannot yet be made stateless."}),`
`,e.jsx(s.li,{children:"The bottleneck is a single-threaded or hard-to-distribute workload."}),`
`,e.jsx(s.li,{children:"Speed of response matters more than long-term headroom."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Scale out when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"The largest available machine is no longer comfortably ahead of demand."}),`
`,e.jsx(s.li,{children:"Downtime is unacceptable and redundancy is required."}),`
`,e.jsx(s.li,{children:"Traffic is spiky, and capacity needs to follow demand."}),`
`,e.jsx(s.li,{children:"Users are spread across regions and capacity must sit near them."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Do neither yet when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"The system is not under pressure. Unused capacity is pure cost."}),`
`,e.jsx(s.li,{children:"The bottleneck has not been measured. Adding machines to a slow query makes the query no faster."}),`
`]}),`
`,e.jsx(s.h2,{id:"tldr",children:"TL;DR"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Scalability"})," is absorbing more work by adding resources rather than rewriting code."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Vertical"})," scaling makes one machine bigger: simple, immediate, but capped and still a single point of failure."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Horizontal"})," scaling adds machines behind a load balancer: uncapped and redundant, but it demands a stateless application."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Statelessness"})," is the precondition — local in-memory session state is what usually blocks scaling out."]}),`
`,e.jsx(s.li,{children:"Capacity rarely scales linearly, because servers share a database and coordination costs grow."}),`
`,e.jsxs(s.li,{children:["Scaling down is half the point; ",e.jsx(s.strong,{children:"elasticity"})," is what makes capacity follow demand in both directions."]}),`
`,e.jsx(s.li,{children:"Measure the bottleneck first. Neither direction helps a system limited by something else."}),`
`]})]})}function a(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default,t as outline};
