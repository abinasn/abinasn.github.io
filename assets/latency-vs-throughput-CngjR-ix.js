import{j as e}from"./index-Bq4mLz7r.js";const l={toc:[{id:"definition",text:"Definition",depth:2},{id:"the-problem-it-solves",text:"The problem it solves",depth:2},{id:"how-it-works",text:"How it works",depth:2},{id:"key-terms",text:"Key terms",depth:2},{id:"trade-offs",text:"Trade-offs",depth:2},{id:"in-the-wild",text:"In the wild",depth:2},{id:"when-to-use-avoid",text:"When to use / avoid",depth:2},{id:"tldr",text:"TL;DR",depth:2}],placedProblems:!1};function r(n){const s={code:"code",em:"em",h2:"h2",h3:"h3",li:"li","mermaid-diagram":"mermaid-diagram",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components},t=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"definition",children:"Definition"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Latency"})," is the time a single request takes to complete, measured in milliseconds."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Throughput"})," is the number of requests a system completes per unit of time, measured in requests per second, queries per second (QPS), or bytes per second."]}),`
`,e.jsx(s.p,{children:"Latency describes one request. Throughput describes many. A system can be strong at one and weak at the other."}),`
`,e.jsx(s.h2,{id:"the-problem-it-solves",children:"The problem it solves"}),`
`,e.jsx(s.p,{children:'"The system is slow" is two different complaints. One user waiting a long time for a page and a system unable to keep up with traffic are separate failures with separate fixes.'}),`
`,e.jsx(s.p,{children:"Separating latency from throughput makes the diagnosis precise: whether the work inside a request is too slow, or whether requests are arriving faster than capacity allows."}),`
`,e.jsx(s.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(s.h3,{children:"They are independent measurements"}),`
`,e.jsx(s.p,{children:"A pipe illustrates the separation. Throughput is how much water exits per second. Latency is how long one drop takes to travel end to end."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Pipe"}),e.jsx(s.th,{children:"Throughput"}),e.jsx(s.th,{children:"Latency"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Wide and long"}),e.jsx(s.td,{children:"High — large volume per second"}),e.jsx(s.td,{children:"High — each drop travels far"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Narrow and short"}),e.jsx(s.td,{children:"Low — small volume per second"}),e.jsx(s.td,{children:"Low — each drop arrives quickly"})]})]})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{}),e.jsx(s.th,{children:"Latency"}),e.jsx(s.th,{children:"Throughput"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Answers"}),e.jsx(s.td,{children:"How long did this request take?"}),e.jsx(s.td,{children:"How many requests per second?"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Unit"}),e.jsx(s.td,{children:"Milliseconds"}),e.jsx(s.td,{children:"Requests/sec, QPS, MB/s"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Better means"}),e.jsx(s.td,{children:"Lower"}),e.jsx(s.td,{children:"Higher"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Scope"}),e.jsx(s.td,{children:"One request"}),e.jsx(s.td,{children:"The system under load"})]})]})]}),`
`,e.jsx(s.h3,{children:"Scaling out raises throughput, not latency"}),`
`,e.jsxs(s.p,{children:["A single request is handled by a single server. Adding servers does not divide that request into parts; it allows a ",e.jsx(s.em,{children:"different"})," request to be served in parallel."]}),`
`,e.jsx(s.p,{children:"The work inside the request is unchanged — the same query, the same serialization, the same network hop."}),`
`,e.jsx(t,{chart:`flowchart LR
    C1["Request A"] --> S1["Server 1
still 40ms of work"]
    C2["Request B"] --> S2["Server 2
still 40ms of work"]
    C3["Request C"] --> S3["Server 3
still 40ms of work"]`}),`
`,e.jsx(s.p,{children:"More lanes on a road increase cars per hour. They do not raise the speed limit."}),`
`,e.jsx(s.h3,{children:"Queuing is what connects them"}),`
`,e.jsx(s.p,{children:"When requests arrive faster than the system completes them, the excess waits in a queue. That wait is added to every request's total time."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Below capacity"})," — latency is dominated by actual work. Adding throughput headroom changes little."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Near capacity"})," — queue depth grows, and latency rises sharply rather than gradually."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Above capacity"})," — latency grows without bound until requests time out."]}),`
`]}),`
`,e.jsx(s.p,{children:"This is the practical link: a throughput ceiling reaches users disguised as a latency problem."}),`
`,e.jsx(s.h3,{children:"Improving one can cost the other"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Batching"})," groups many small operations into one larger one. Fewer round trips means higher throughput, but each request waits for its batch to fill before being sent."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// Unbatched: 1 write per request. Low latency, low throughput."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" db."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"insert"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(record); "}),e.jsx(s.span,{style:{color:"#8B949E"},children:"// ~5ms per call, one round trip each"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// Batched: buffer, then flush together."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// Throughput rises; each record waits up to 50ms for the flush."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"buffer."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"push"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(record);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"if"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" (buffer."}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"length"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" >="}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" 100"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" db."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"insertMany"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(buffer); "}),e.jsx(s.span,{style:{color:"#8B949E"},children:"// one round trip for 100 records"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"  buffer."}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"length"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" 0"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:";"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"}"})})]})})}),`
`,e.jsx(s.p,{children:"The reverse also holds: reducing latency by doing work eagerly, or holding more in memory, consumes resources that could have served additional concurrent requests."}),`
`,e.jsx(s.h3,{children:"Averages hide the worst experiences"}),`
`,e.jsx(s.p,{children:"Consider 100 requests: 99 complete in 10ms, one takes 5,000ms. The mean is roughly 60ms — a value no request actually took."}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Percentiles"})," avoid this by sorting all requests from fastest to slowest and reading the value at a given position."]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Metric"}),e.jsx(s.th,{children:"Meaning"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"p50 (median)"}),e.jsx(s.td,{children:"Half of requests were faster than this. The typical experience."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"p95"}),e.jsx(s.td,{children:"95% were faster. 1 in 20 requests was worse."})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"p99"}),e.jsx(s.td,{children:"99% were faster. The slow tail, at 1 in 100."})]})]})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Tail latency"})," is the slow end of that distribution. It is measured, not averaged away, because the mean is distorted by exactly the outliers that matter most."]}),`
`,e.jsx(s.h3,{children:"Why the tail compounds"}),`
`,e.jsx(s.p,{children:"A single page often requires many backend calls, and it cannot render until all of them return. A slow response anywhere in the fan-out delays the whole page."}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// Each call independently has a 1% chance of hitting the slow tail."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" perCallFast"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" 0.99"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:";"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"Math."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"pow"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(perCallFast, "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"10"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:");  "}),e.jsx(s.span,{style:{color:"#8B949E"},children:"// ≈ 0.904 → ~10% of pages hit a slow call"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"Math."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"pow"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(perCallFast, "}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"100"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"); "}),e.jsx(s.span,{style:{color:"#8B949E"},children:"// ≈ 0.366 → ~63% of requests hit a slow call"})]})]})})}),`
`,e.jsx(s.p,{children:"A 1% tail at the service level becomes a 10% failure rate at the page level across ten calls. The rare case stops being rare once it is multiplied by fan-out."}),`
`,e.jsx(s.h3,{children:"What causes the tail"}),`
`,e.jsx(s.p,{children:"The same code, on the same server, with the same input, can take 10ms once and 500ms the next time. The variation usually comes from the environment rather than the request."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Cause"}),e.jsx(s.th,{children:"What is happening"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Queuing"}),e.jsx(s.td,{children:"The request waits behind others before work begins"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Cache miss"}),e.jsx(s.td,{children:"This request does work the others avoided"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Garbage collection pause"}),e.jsx(s.td,{children:"The runtime briefly stops the process mid-request"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Noisy neighbour"}),e.jsx(s.td,{children:"A co-tenant VM saturates shared CPU, disk, or network"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Network retransmit"}),e.jsx(s.td,{children:"A dropped packet forces a retry with a backoff delay"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Uneven data size"}),e.jsx(s.td,{children:"The same endpoint does more work for a larger account"})]})]})]}),`
`,e.jsx(s.p,{children:"Only the last is a property of the request itself. The rest are timing and contention, which is why tail latency can be reduced but never eliminated."}),`
`,e.jsx(s.h2,{id:"key-terms",children:"Key terms"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Term"}),e.jsx(s.th,{children:"Plain-English meaning"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Latency"}),e.jsx(s.td,{children:"Time for one request to complete"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Throughput"}),e.jsx(s.td,{children:"Requests completed per unit of time"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"QPS"}),e.jsx(s.td,{children:"Queries per second, a common throughput unit"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Percentile (pN)"}),e.jsx(s.td,{children:"The value at position N when all requests are sorted by duration"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"p50 / median"}),e.jsx(s.td,{children:"The typical request duration"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"p99"}),e.jsx(s.td,{children:"The duration only 1% of requests exceed"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Tail latency"}),e.jsx(s.td,{children:"The slow end of the latency distribution"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Queuing delay"}),e.jsx(s.td,{children:"Time spent waiting before work starts"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Fan-out"}),e.jsx(s.td,{children:"One incoming request triggering many downstream calls"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Batching"}),e.jsx(s.td,{children:"Grouping operations to reduce per-operation overhead"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Saturation"}),e.jsx(s.td,{children:"Load at or beyond the system's capacity"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Head-of-line blocking"}),e.jsx(s.td,{children:"One slow item delaying everything queued behind it"})]})]})]}),`
`,e.jsx(s.h2,{id:"trade-offs",children:"Trade-offs"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Choice"}),e.jsx(s.th,{children:"Buys you"}),e.jsx(s.th,{children:"Costs you"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Scale out"}),e.jsx(s.td,{children:"Higher throughput, more concurrency"}),e.jsx(s.td,{children:"Single-request latency unchanged; more coordination"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Batching"}),e.jsx(s.td,{children:"Higher throughput, fewer round trips"}),e.jsx(s.td,{children:"Added latency while a batch fills"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Caching"}),e.jsx(s.td,{children:"Lower latency and higher throughput on hits"}),e.jsx(s.td,{children:"Stale data risk; misses pay full cost, widening the tail"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Optimizing p99 over the mean"}),e.jsx(s.td,{children:"Protects the worst-served users and fan-out paths"}),e.jsx(s.td,{children:"Often more expensive than improving the typical case"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Running near full capacity"}),e.jsx(s.td,{children:"Efficient use of hardware"}),e.jsx(s.td,{children:"Small traffic spikes cause disproportionate latency growth"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Headroom (spare capacity)"}),e.jsx(s.td,{children:"Stable latency under bursts"}),e.jsx(s.td,{children:"Paid-for capacity sits idle much of the time"})]})]})]}),`
`,e.jsx(s.h2,{id:"in-the-wild",children:"In the wild"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Amazon"})," publicly tied added page latency to measurable drops in sales, which set the industry norm of treating latency as a product metric rather than an infrastructure one."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Google"})," described the tail-at-scale problem, noting that services fanning out to many machines are governed by their slowest responder, not their average one."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CDNs"})," reduce latency by serving content from a nearby edge location, shortening physical distance rather than making origin servers faster."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Message queues"})," such as Kafka trade per-message latency for very high throughput by batching records and writing them sequentially to disk."]}),`
`]}),`
`,e.jsx(s.h2,{id:"when-to-use-avoid",children:"When to use / avoid"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Optimize latency when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"A human is waiting on the response."}),`
`,e.jsx(s.li,{children:"The call sits on a fan-out path where its delay blocks other work."}),`
`,e.jsx(s.li,{children:"The system is below capacity, so queuing is not the cause."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Optimize throughput when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Work is asynchronous — batch jobs, ingestion pipelines, background processing."}),`
`,e.jsx(s.li,{children:"Requests are queuing, since capacity is what latency is actually waiting on."}),`
`,e.jsx(s.li,{children:"Cost per request matters more than the duration of any single one."}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Measure before either when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Only the mean is available. It conceals the tail that users encounter."}),`
`,e.jsx(s.li,{children:"The bottleneck is unidentified. Optimizing a component that is not the constraint changes nothing."}),`
`]}),`
`,e.jsx(s.h2,{id:"tldr",children:"TL;DR"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Latency"})," is the duration of one request; ",e.jsx(s.strong,{children:"throughput"})," is requests per second. They are separate measurements."]}),`
`,e.jsx(s.li,{children:"Adding servers raises throughput without shortening the work inside a single request."}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Queuing"})," links them: once arrival rate exceeds capacity, latency rises sharply."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Batching"})," trades latency for throughput; the reverse trade also holds."]}),`
`,e.jsxs(s.li,{children:["Averages hide outliers, so latency is reported in ",e.jsx(s.strong,{children:"percentiles"})," — p50, p95, p99."]}),`
`,e.jsxs(s.li,{children:["Tail latency compounds under ",e.jsx(s.strong,{children:"fan-out"}),": a 1% slow rate becomes ~10% across ten calls."]}),`
`,e.jsx(s.li,{children:"The tail comes mostly from queuing, cache misses, GC pauses, and contention, not from bad code."}),`
`]})]})}function d(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{d as default,l as outline};
