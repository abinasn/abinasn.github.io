import{j as e}from"./index-RjpExiOX.js";const l={toc:[{id:"definition",text:"Definition",depth:2},{id:"the-problem-it-solves",text:"The problem it solves",depth:2},{id:"how-it-works",text:"How it works",depth:2},{id:"key-terms",text:"Key terms",depth:2},{id:"trade-offs",text:"Trade-offs",depth:2},{id:"in-the-wild",text:"In the wild",depth:2},{id:"when-to-use-avoid",text:"When to use / avoid",depth:2},{id:"tldr",text:"TL;DR",depth:2}],placedProblems:!1};function t(n){const s={code:"code",em:"em",h2:"h2",h3:"h3",li:"li","mermaid-diagram":"mermaid-diagram",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components},i=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"definition",children:"Definition"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Consistency"})," is the guarantee that every read returns the most recent write, so all copies of the data agree on what the current value is."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"CAP theorem"})," states that a distributed system experiencing a network partition must choose between consistency and availability. It cannot guarantee both while the partition lasts."]}),`
`,e.jsx(s.h2,{id:"the-problem-it-solves",children:"The problem it solves"}),`
`,e.jsx(s.p,{children:"Consistency only becomes a question when data exists in more than one place. A single machine cannot disagree with itself."}),`
`,e.jsx(s.p,{children:"Copies exist for good reasons: a replica survives the loss of the original, and a copy near the user answers faster. Every copy added introduces the possibility that two copies hold different values at the same moment."}),`
`,e.jsx(s.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(s.h3,{children:"A partition is a communication failure, not a machine failure"}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"network partition"})," is when machines are individually healthy but cannot reach each other — a severed link, a dropped route, a region losing connectivity."]}),`
`,e.jsx(i,{chart:`flowchart LR
    subgraph A["Side A"]
        N1["Replica 1
value = 5"]
    end
    subgraph B["Side B"]
        N2["Replica 2
value = 3 (stale)"]
    end
    N1 -. "network link down" .- N2
    Client --> N2`}),`
`,e.jsx(s.p,{children:"Replica 2 is running and can accept the request. It simply cannot confirm with Replica 1 whether its value is current."}),`
`,e.jsx(s.h3,{children:"The choice a partition forces"}),`
`,e.jsx(s.p,{children:"With the link down, the replica receiving a read has exactly two options."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Option"}),e.jsx(s.th,{children:"Behavior"}),e.jsx(s.th,{children:"Preserves"}),e.jsx(s.th,{children:"Sacrifices"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Answer from the local copy"}),e.jsxs(s.td,{children:["Returns ",e.jsx(s.code,{children:"3"}),", possibly stale"]}),e.jsx(s.td,{children:"Availability"}),e.jsx(s.td,{children:"Consistency"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Refuse to answer"}),e.jsxs(s.td,{children:["Returns an error such as ",e.jsx(s.code,{children:"503"})," until the link heals"]}),e.jsx(s.td,{children:"Consistency"}),e.jsx(s.td,{children:"Availability"})]})]})]}),`
`,e.jsx(s.p,{children:"No third option exists. This is the entirety of the CAP theorem."}),`
`,e.jsx(s.h3,{children:'CAP is not "pick two of three"'}),`
`,e.jsx(s.p,{children:"The three properties are consistency (C), availability (A), and partition tolerance (P). CAP is commonly summarized as choosing two, which misstates it."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"P is not a design choice."})," Networks fail, so any system spanning multiple machines must tolerate partitions. The real decision is what the system does ",e.jsx(s.em,{children:"while"})," partitioned."]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Behavior during a partition"}),e.jsx(s.th,{children:"Called"}),e.jsx(s.th,{children:"Typical fit"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Rejects requests rather than serve stale data"}),e.jsx(s.td,{children:e.jsx(s.strong,{children:"CP"})}),e.jsx(s.td,{children:"Account balances, inventory counts, payments, unique-ID assignment"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Serves possibly-stale data rather than error"}),e.jsx(s.td,{children:e.jsx(s.strong,{children:"AP"})}),e.jsx(s.td,{children:"Social feeds, product reviews, view counts, DNS, content catalogs"})]})]})]}),`
`,e.jsx(s.p,{children:"When there is no partition, a system provides both consistency and availability. CAP constrains behavior only during the failure, which is a small fraction of a system's running time."}),`
`,e.jsx(s.h3,{children:"The consistency spectrum"}),`
`,e.jsx(s.p,{children:"Consistency is not binary. Two common points on the spectrum:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Strong consistency"})," — a read is not served until every replica reflects the write. Always correct, but every write pays a coordination delay, and reads stall during a partition."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Eventual consistency"})," — reads are served immediately from any replica and may return an older value. If writes stop, all replicas converge on the same value given enough time."]}),`
`]}),`
`,e.jsx(s.p,{children:'"Eventual" describes timing, not correctness. It does not mean the data is permanently wrong; it means the guarantee is convergence rather than immediacy.'}),`
`,e.jsx(s.h3,{children:"Eventual consistency is the cost of choosing AP"}),`
`,e.jsx(s.p,{children:"An AP system stays available during a partition by allowing replicas to diverge. Eventual consistency is the mechanism that repairs that divergence once the network heals."}),`
`,e.jsx(s.p,{children:"Repair requires a rule for which value wins when two replicas disagree."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Conflict resolution"}),e.jsx(s.th,{children:"How it decides"}),e.jsx(s.th,{children:"Risk"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Last-write-wins"}),e.jsx(s.td,{children:"Highest timestamp overwrites the rest"}),e.jsx(s.td,{children:"A concurrent write is silently discarded"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Version vectors"}),e.jsx(s.td,{children:"Tracks causality, flags true conflicts"}),e.jsx(s.td,{children:"Application must resolve flagged conflicts"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Merge / CRDT"}),e.jsx(s.td,{children:"Combines both values by a defined rule"}),e.jsx(s.td,{children:"Only works for data types with a valid merge"})]})]})]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// Last-write-wins: simple, and lossy."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// Two replicas accepted a write during a partition."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" replicaA"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" { value: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"5"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", updatedAt: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"1724900000"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" };"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" replicaB"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" { value: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"3"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", updatedAt: "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"1724900007"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" };"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// On heal, the newer timestamp wins outright."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" winner"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" replicaA.updatedAt "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:">"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" replicaB.updatedAt "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"?"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" replicaA "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:":"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" replicaB;"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// winner.value === 3 — the write of 5 is gone, with no error raised."})})]})})}),`
`,e.jsx(s.p,{children:"The real cost of AP is not staleness alone. It is that the application must define what a correct merge means."}),`
`,e.jsx(s.h2,{id:"key-terms",children:"Key terms"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Term"}),e.jsx(s.th,{children:"Plain-English meaning"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Consistency"}),e.jsx(s.td,{children:"Every read returns the most recent write"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Replica"}),e.jsx(s.td,{children:"One of several copies of the same data"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Network partition"}),e.jsx(s.td,{children:"Machines are healthy but cannot communicate"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Partition tolerance"}),e.jsx(s.td,{children:"Continuing to operate while machines cannot reach each other"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"CP system"}),e.jsx(s.td,{children:"Sacrifices availability during a partition to stay correct"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"AP system"}),e.jsx(s.td,{children:"Sacrifices consistency during a partition to stay responsive"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Strong consistency"}),e.jsx(s.td,{children:"No read is served until all replicas reflect the write"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Eventual consistency"}),e.jsx(s.td,{children:"Replicas converge on the same value once writes stop"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Stale read"}),e.jsx(s.td,{children:"A read returning a value that has since been overwritten"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Conflict resolution"}),e.jsx(s.td,{children:"The rule deciding which value wins when replicas disagree"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Last-write-wins (LWW)"}),e.jsx(s.td,{children:"Resolution by newest timestamp"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Quorum"}),e.jsx(s.td,{children:"A minimum number of replicas that must acknowledge an operation"})]})]})]}),`
`,e.jsx(s.h2,{id:"trade-offs",children:"Trade-offs"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Choice"}),e.jsx(s.th,{children:"Buys you"}),e.jsx(s.th,{children:"Costs you"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Strong consistency"}),e.jsx(s.td,{children:"Reads are always correct; no conflict logic needed"}),e.jsx(s.td,{children:"Coordination latency on every write; unavailable during partitions"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Eventual consistency"}),e.jsx(s.td,{children:"Stays available and fast; tolerates partitions"}),e.jsx(s.td,{children:"Stale reads; application must define conflict resolution"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"CP during a partition"}),e.jsx(s.td,{children:"Never serves a wrong value"}),e.jsx(s.td,{children:"Requests fail while the partition lasts"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"AP during a partition"}),e.jsx(s.td,{children:"Always returns something"}),e.jsx(s.td,{children:"Divergent replicas that must be reconciled afterward"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Last-write-wins"}),e.jsx(s.td,{children:"Trivial to implement, no application logic"}),e.jsx(s.td,{children:"Concurrent writes can be lost silently"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"More replicas"}),e.jsx(s.td,{children:"Better fault tolerance and read locality"}),e.jsx(s.td,{children:"More copies to keep in agreement; wider partition exposure"})]})]})]}),`
`,e.jsx(s.h2,{id:"in-the-wild",children:"In the wild"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"PostgreSQL"})," and ",e.jsx(s.strong,{children:"MySQL"})," with synchronous replication behave as CP systems: a write is not acknowledged until a replica confirms it, and the write path stalls if that replica is unreachable."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cassandra"})," and ",e.jsx(s.strong,{children:"DynamoDB"})," default toward AP, accepting writes on any reachable replica and reconciling afterward, with tunable consistency levels for stricter paths."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"DNS"})," is deliberately AP — resolvers serve cached records that may be outdated, because a stale address answers far more requests successfully than no address at all."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Payment and ledger systems"})," are built CP: a transaction that cannot be confirmed against authoritative state is rejected rather than accepted on a possibly-stale balance."]}),`
`]}),`
`,e.jsx(s.h2,{id:"when-to-use-avoid",children:"When to use / avoid"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Choose consistency (CP) when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"A stale value causes financial, legal, or safety harm."}),`
`,e.jsx(s.li,{children:"Two clients must never both succeed at claiming the same resource."}),`
`,e.jsx(s.li,{children:"Correctness is easier to defend than uptime for that specific data."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Choose availability (AP) when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Brief staleness is unnoticeable or harmless to the user."}),`
`,e.jsx(s.li,{children:"Reads vastly outnumber writes and are tolerant of small delays in propagation."}),`
`,e.jsx(s.li,{children:"An error is worse for the user experience than a slightly outdated answer."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Reconsider the framing when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"The system runs on a single machine — no partition is possible, so CAP does not apply."}),`
`,e.jsx(s.li,{children:"The choice is being made system-wide. The decision belongs to each data path, not the whole application."}),`
`]}),`
`,e.jsx(s.h2,{id:"tldr",children:"TL;DR"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Consistency"})," means every read sees the latest write; it only becomes a problem once data has more than one copy."]}),`
`,e.jsxs(s.li,{children:["A ",e.jsx(s.strong,{children:"partition"})," is machines being unable to communicate, not machines being down."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CAP"}),": during a partition, a system must choose consistency or availability — never both."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"P is not optional"}),", so the practical question is whether a system behaves as ",e.jsx(s.strong,{children:"CP"})," or ",e.jsx(s.strong,{children:"AP"})," while partitioned."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Strong consistency"})," waits for agreement; ",e.jsx(s.strong,{children:"eventual consistency"})," answers now and converges later."]}),`
`,e.jsxs(s.li,{children:["Eventual consistency requires ",e.jsx(s.strong,{children:"conflict resolution"}),", and simple rules like last-write-wins can discard data silently."]}),`
`,e.jsx(s.li,{children:"The choice follows the data, not the system: balances go CP, feeds and counts go AP, within the same application."}),`
`]})]})}function a(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{a as default,l as outline};
