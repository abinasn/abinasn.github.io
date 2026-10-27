import{j as e}from"./index-CFiJC1o_.js";const t={toc:[{id:"definition",text:"Definition",depth:2},{id:"the-problem-it-solves",text:"The problem it solves",depth:2},{id:"how-it-works",text:"How it works",depth:2},{id:"key-terms",text:"Key terms",depth:2},{id:"trade-offs",text:"Trade-offs",depth:2},{id:"in-the-wild",text:"In the wild",depth:2},{id:"when-to-reach-for-each-option",text:"When to reach for each option",depth:2},{id:"tldr",text:"TL;DR",depth:2}],placedProblems:!1};function n(r){const s={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li","mermaid-diagram":"mermaid-diagram",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r.components},i=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"definition",children:"Definition"}),`
`,e.jsxs(s.p,{children:["An ",e.jsx(s.strong,{children:"IP address"})," is a numeric label that identifies a device on a network, such as ",e.jsx(s.code,{children:"142.250.183.14"}),". Machines use it to know where to send data."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"DNS (Domain Name System)"})," is the internet's directory service. It translates a human-readable name like ",e.jsx(s.code,{children:"example.com"})," into the IP address behind it."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"the-problem-it-solves",children:"The problem it solves"}),`
`,e.jsxs(s.p,{children:["IP addresses work for machines and fail for humans. Nobody memorises ",e.jsx(s.code,{children:"142.250.183.14"}),`, and the number changes whenever a service moves to different hardware.
A second problem is scale. A large service runs thousands of machines with thousands of addresses, and users need one stable name that points at whichever of them is closest and healthy.
DNS adds a layer of indirection: names stay fixed while the addresses underneath change freely.`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(s.h3,{children:"IP addresses come in two versions"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Version"}),e.jsx(s.th,{children:"Example"}),e.jsx(s.th,{children:"Address space"}),e.jsx(s.th,{children:"Status"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"IPv4"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"142.250.183.14"})}),e.jsx(s.td,{children:"~4.3 billion"}),e.jsx(s.td,{children:"Dominant, exhausted"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"IPv6"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"2001:db8:85a3::8a2e:370:7334"})}),e.jsx(s.td,{children:"~340 undecillion"}),e.jsx(s.td,{children:"Growing, mandatory on mobile networks"})]})]})]}),`
`,e.jsx(s.p,{children:"IPv4 uses four numbers from 0 to 255. IPv6 uses hexadecimal groups and exists because the IPv4 space ran out."}),`
`,e.jsx(s.h3,{children:"Public and private addresses"}),`
`,e.jsx(s.p,{children:"Not every address is visible to the internet."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Unique across"}),e.jsx(s.th,{children:"Example"}),e.jsx(s.th,{children:"Reachable from internet"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Public"})}),e.jsx(s.td,{children:"The whole internet"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"203.0.113.7"})}),e.jsx(s.td,{children:"Yes"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Private"})}),e.jsx(s.td,{children:"One local network"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"192.168.1.5"})}),e.jsx(s.td,{children:"No"})]})]})]}),`
`,e.jsxs(s.p,{children:["Reserved private ranges: ",e.jsx(s.code,{children:"10.0.0.0/8"}),", ",e.jsx(s.code,{children:"172.16.0.0/12"}),", ",e.jsx(s.code,{children:"192.168.0.0/16"}),". These repeat in millions of networks simultaneously, which is why routers on the public internet discard packets that carry them."]}),`
`,e.jsxs(s.p,{children:["A device on a private address reaches the internet through ",e.jsx(s.strong,{children:"NAT (Network Address Translation)"})," — a gateway swaps the private source address for its own public one, then reverses the swap on the reply."]}),`
`,e.jsx(s.h3,{children:"A domain name is read right to left"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`        www  .  example  .  com  .
         │        │          │    │
         │        │          │    └─ Root (trailing dot, usually hidden)
         │        │          └────── TLD — Top-Level Domain
         │        └───────────────── Second-level domain (the registered name)
         └────────────────────────── Subdomain
`})}),`
`,e.jsx(s.p,{children:"Each level delegates authority to the level below it. The root knows the TLDs, a TLD knows its registered domains, and a domain knows its own hosts."}),`
`,e.jsx(s.h3,{children:"Four server roles"}),`
`,e.jsx(s.p,{children:"DNS is not one server. It is four kinds, each holding one narrow piece of knowledge."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Server"}),e.jsx(s.th,{children:"Knows"}),e.jsx(s.th,{children:"Answers with"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Recursive resolver"})}),e.jsx(s.td,{children:"Nothing permanently — it does the asking"}),e.jsx(s.td,{children:"The final answer, after querying the others"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Root server"})}),e.jsx(s.td,{children:"Where TLD servers live"}),e.jsxs(s.td,{children:['"Ask the ',e.jsx(s.code,{children:".com"}),' servers"']})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"TLD server"})}),e.jsx(s.td,{children:"Which nameserver owns each domain"}),e.jsxs(s.td,{children:['"Ask ',e.jsx(s.code,{children:"ns1.example.com"}),'"']})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Authoritative nameserver"})}),e.jsx(s.td,{children:"The real records for its domain"}),e.jsx(s.td,{children:e.jsx(s.code,{children:"142.250.183.14"})})]})]})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"recursive resolver"})," does the legwork. It is usually operated by an internet provider, or by a public service such as ",e.jsx(s.code,{children:"1.1.1.1"})," or ",e.jsx(s.code,{children:"8.8.8.8"}),"."]}),`
`,e.jsx(s.p,{children:"No single machine stores every domain on earth. Each layer stores only a pointer to the next one, which is what lets the system scale and stay decentralised."}),`
`,e.jsx(s.h3,{children:"The resolution chain"}),`
`,e.jsx(i,{chart:`sequenceDiagram
    participant B as Browser
    participant R as Recursive resolver
    participant Root as Root server
    participant TLD as .com TLD server
    participant A as Authoritative NS

    B->>R: What is the IP of example.com?
    R->>Root: example.com?
    Root-->>R: Ask the .com servers
    R->>TLD: example.com?
    TLD-->>R: Ask ns1.example.com
    R->>A: example.com?
    A-->>R: 142.250.183.14
    R-->>B: 142.250.183.14`}),`
`,e.jsx(s.p,{children:"The browser asks one question and receives one answer. The chain behind it is invisible."}),`
`,e.jsx(s.p,{children:"Once the address is known, DNS is finished. The browser opens a direct connection to that IP, and DNS carries none of the actual traffic."}),`
`,e.jsx(s.h3,{children:"Caching stops most of this from happening"}),`
`,e.jsx(s.p,{children:"The full chain runs rarely. Four caches are checked in order first, and a hit at any level ends the lookup."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Cache"}),e.jsx(s.th,{children:"Location"}),e.jsx(s.th,{children:"Typical latency"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Browser cache"}),e.jsx(s.td,{children:"The application itself"}),e.jsx(s.td,{children:"~0 ms"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"OS cache"}),e.jsx(s.td,{children:"The operating system's resolver"}),e.jsx(s.td,{children:"~0 ms"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Router cache"}),e.jsx(s.td,{children:"The local gateway"}),e.jsx(s.td,{children:"~1 ms"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Resolver cache"}),e.jsx(s.td,{children:"The provider's resolver"}),e.jsx(s.td,{children:"~5–20 ms"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Full recursive walk"})}),e.jsx(s.td,{children:e.jsx(s.strong,{children:"All four server roles"})}),e.jsx(s.td,{children:e.jsx(s.strong,{children:"~50–200 ms"})})]})]})]}),`
`,e.jsx(s.h3,{children:"TTL controls how long an answer is cached"}),`
`,e.jsxs(s.p,{children:["Every DNS record carries a ",e.jsx(s.strong,{children:"TTL (Time To Live)"})," in seconds. When it expires, caches discard the answer and ask again."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`example.com.   300   IN   A   142.250.183.14
               ^^^
               TTL in seconds — this answer is valid for 5 minutes
`})}),`
`,e.jsx(s.p,{children:"Lowering the TTL a day before a planned server migration means the change propagates in minutes rather than hours."}),`
`,e.jsx(s.h3,{children:"Record types"}),`
`,e.jsx(s.p,{children:"A domain does not store a single value. It stores a set of typed records."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Record"}),e.jsx(s.th,{children:"Maps a name to"}),e.jsx(s.th,{children:"Used for"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"A"})}),e.jsx(s.td,{children:"An IPv4 address"}),e.jsx(s.td,{children:"Standard hostname lookup"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"AAAA"})}),e.jsx(s.td,{children:"An IPv6 address"}),e.jsx(s.td,{children:"IPv6 hostname lookup"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"CNAME"})}),e.jsx(s.td,{children:"Another domain name"}),e.jsx(s.td,{children:"Aliases, pointing at a CDN hostname"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"MX"})}),e.jsx(s.td,{children:"A mail server"}),e.jsx(s.td,{children:"Email delivery"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"NS"})}),e.jsx(s.td,{children:"Authoritative nameservers"}),e.jsx(s.td,{children:"Delegating a zone"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"TXT"})}),e.jsx(s.td,{children:"Arbitrary text"}),e.jsx(s.td,{children:"Domain ownership proof, email anti-spoofing"})]})]})]}),`
`,e.jsxs(s.p,{children:["An ",e.jsx(s.strong,{children:"A"})," record ends the lookup. A ",e.jsx(s.strong,{children:"CNAME"})," points at another name, which needs its own resolution — so chained aliases add round trips."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// Node.js resolves names through the OS resolver by default"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" dns"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:" require"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"'node:dns'"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:").promises;"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" addresses"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" dns."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"resolve4"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"'example.com'"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:");"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// [ '142.250.183.14' ]"})}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" records"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" await"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" dns."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"resolveMx"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"'example.com'"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:");"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// [ { priority: 10, exchange: 'mail.example.com' } ]"})})]})})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"key-terms",children:"Key terms"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Term"}),e.jsx(s.th,{children:"Plain-English meaning"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"IP address"})}),e.jsx(s.td,{children:"A number identifying a device on a network"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"IPv4 / IPv6"})}),e.jsx(s.td,{children:"The two address formats; IPv6 exists because IPv4 ran out"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Public IP"})}),e.jsx(s.td,{children:"An address reachable from anywhere on the internet"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Private IP"})}),e.jsx(s.td,{children:"An address meaningful only inside one local network"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"NAT"})}),e.jsx(s.td,{children:"Rewriting a private source address to a public one so replies can return"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"TLD"})}),e.jsxs(s.td,{children:["The last part of a domain, such as ",e.jsx(s.code,{children:".com"})," or ",e.jsx(s.code,{children:".in"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Recursive resolver"})}),e.jsx(s.td,{children:"The server that performs the lookup on a client's behalf"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Authoritative nameserver"})}),e.jsx(s.td,{children:"The server holding the real records for a domain"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"TTL"})}),e.jsx(s.td,{children:"How many seconds a cached DNS answer stays valid"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"A record"})}),e.jsx(s.td,{children:"A name-to-IPv4-address mapping"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"CNAME"})}),e.jsx(s.td,{children:"A name-to-another-name mapping"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Propagation"})}),e.jsx(s.td,{children:"The delay before a DNS change is visible everywhere, bounded by TTL"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"trade-offs",children:"Trade-offs"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Choice"}),e.jsx(s.th,{children:"Buys you"}),e.jsx(s.th,{children:"Costs you"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Low TTL"})," (30–300s)"]}),e.jsx(s.td,{children:"Fast failover, quick migrations"}),e.jsx(s.td,{children:"More lookups, higher resolver load, slower average lookup"})]}),e.jsxs(s.tr,{children:[e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"High TTL"})," (24h)"]}),e.jsx(s.td,{children:"Fewer lookups, faster average response"}),e.jsx(s.td,{children:"Changes take up to a day to reach every cache"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"A record"})}),e.jsx(s.td,{children:"One lookup, direct answer"}),e.jsx(s.td,{children:"Must update the record whenever the IP changes"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"CNAME"})}),e.jsx(s.td,{children:"Target can change its IP freely"}),e.jsx(s.td,{children:"An extra lookup per level of aliasing"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Single authoritative provider"})}),e.jsx(s.td,{children:"Simpler operations"}),e.jsx(s.td,{children:"That provider becomes a single point of failure"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Multiple providers"})}),e.jsx(s.td,{children:"Survives one provider's outage"}),e.jsx(s.td,{children:"Records must stay synchronised across both"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Aggressive caching everywhere"})}),e.jsx(s.td,{children:"Lowest latency"}),e.jsx(s.td,{children:"Stale answers linger after a change"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"in-the-wild",children:"In the wild"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Dyn outage, 2016"})," — an attack on one DNS provider made Twitter, Reddit and Spotify unreachable, even though those services were running normally. Many large operators now use two independent DNS providers."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CDNs"})," answer the same name with different addresses depending on where the query came from, steering each user to a nearby edge server."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Mobile carriers"})," run IPv6 widely because assigning public IPv4 addresses to every handset is impossible, and large-scale NAT is expensive to operate."]}),`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["Cloudflare's ",e.jsx(s.code,{children:"1.1.1.1"})," and Google's ",e.jsx(s.code,{children:"8.8.8.8"})]})," are public recursive resolvers that many users configure instead of their provider's, usually for speed or filtering behaviour."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"when-to-reach-for-each-option",children:"When to reach for each option"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Use a low TTL when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"A migration or cutover is planned within the next day"}),`
`,e.jsx(s.li,{children:"The record participates in failover between healthy and unhealthy hosts"}),`
`,e.jsx(s.li,{children:"The address is expected to change often"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Use a high TTL when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"The record is stable and rarely edited, such as an MX record"}),`
`,e.jsx(s.li,{children:"Query volume is high and resolver load matters"}),`
`,e.jsx(s.li,{children:"Nothing downstream depends on rapid change"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Avoid a CNAME when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"It sits at the root of a domain — most DNS standards disallow this"}),`
`,e.jsx(s.li,{children:"Latency is critical and the extra lookup is measurable"}),`
`,e.jsx(s.li,{children:"The chain would run more than one level deep"}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tldr",children:"TL;DR"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["An ",e.jsx(s.strong,{children:"IP address"})," identifies a machine; ",e.jsx(s.strong,{children:"DNS"})," translates a name into that address."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Private addresses"})," repeat across networks and reach the internet through ",e.jsx(s.strong,{children:"NAT"}),"; ",e.jsx(s.strong,{children:"public addresses"})," are globally unique."]}),`
`,e.jsxs(s.li,{children:["A domain resolves ",e.jsx(s.strong,{children:"right to left"}),": root → TLD → authoritative nameserver."]}),`
`,e.jsxs(s.li,{children:["The ",e.jsx(s.strong,{children:"recursive resolver"})," performs the chain; the browser sees only the final answer."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Caching"})," at browser, OS, router and resolver means the full chain rarely runs."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"TTL"})," trades propagation speed against lookup volume — lower it before a migration."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A"})," records point at addresses; ",e.jsx(s.strong,{children:"CNAME"})," records point at names and cost an extra lookup."]}),`
`,e.jsx(s.li,{children:"DNS returns an address and then steps aside — it never carries application traffic."}),`
`]})]})}function l(r={}){const{wrapper:s}=r.components||{};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{l as default,t as outline};
