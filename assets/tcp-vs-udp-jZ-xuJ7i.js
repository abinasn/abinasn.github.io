import{j as e}from"./index-HGUiUA8v.js";const l={toc:[{id:"definition",text:"Definition",depth:2},{id:"the-problem-it-solves",text:"The problem it solves",depth:2},{id:"how-it-works",text:"How it works",depth:2},{id:"key-terms",text:"Key terms",depth:2},{id:"trade-offs",text:"Trade-offs",depth:2},{id:"in-the-wild",text:"In the wild",depth:2},{id:"when-to-use-avoid",text:"When to use / avoid",depth:2},{id:"tldr",text:"TL;DR",depth:2}],placedProblems:!1};function t(n){const s={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li","mermaid-diagram":"mermaid-diagram",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components},r=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"definition",children:"Definition"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Packet switching"})," is the practice of splitting data into small, independently routed chunks called packets, then reassembling them at the destination."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"TCP"})," and ",e.jsx(s.strong,{children:"UDP"})," are the two transport protocols that sit on top of packet switching. TCP guarantees that every packet arrives, in order. UDP sends packets once and never checks."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"the-problem-it-solves",children:"The problem it solves"}),`
`,e.jsx(s.p,{children:"A network link is shared by millions of users, so no single conversation can own a wire end to end. Packet switching lets everyone interleave on the same infrastructure, and lets traffic route around a failed link."}),`
`,e.jsxs(s.p,{children:["The cost is unreliability. ",e.jsx(s.strong,{children:"IP"}),", the protocol that addresses and routes packets, is ",e.jsx(s.em,{children:"best-effort"}),": it attempts delivery and guarantees nothing."]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"What can go wrong"}),e.jsx(s.th,{children:"Why"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Packet lost"}),e.jsx(s.td,{children:"A router's queue was full and it dropped the packet"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Packets reordered"}),e.jsx(s.td,{children:"Packet 3 took a faster path than packet 2"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Packet duplicated"}),e.jsx(s.td,{children:"A retransmission raced the original"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Packet delayed"}),e.jsx(s.td,{children:"A congested route added hundreds of milliseconds"})]})]})]}),`
`,e.jsx(s.p,{children:"TCP and UDP are two different answers to that list."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(s.h3,{children:"Packet switching vs circuit switching"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`CIRCUIT SWITCHING (old telephone networks)
  A ═══════════ dedicated path, reserved ═══════════ B
  Wasted when idle. One failure kills the call.

PACKET SWITCHING (the internet)
  A ──[1]──┐        ┌──[1]──> B
           ├ router ┤
  A ──[2]──┘        └──[2]──> B   (may take a different path)
  Shared by everyone. Routes around failures.
`})}),`
`,e.jsx(s.p,{children:"Each packet carries its own destination address, so routers forward it independently. Packets from one file may arrive out of order, or not at all."}),`
`,e.jsx(s.h3,{children:"Where transport protocols sit"}),`
`,e.jsx(r,{chart:`flowchart TD
  A["Application — a browser, an API client"] --> B{"Transport layer"}
  B -->|"TCP — reliable, ordered"| C["IP — addressing and routing"]
  B -->|"UDP — fast, no guarantees"| C
  C --> D["Physical network — cables, radio"]`}),`
`,e.jsx(s.h3,{children:"Ports and sockets"}),`
`,e.jsxs(s.p,{children:["An IP address identifies a ",e.jsx(s.em,{children:"machine"}),". A ",e.jsx(s.strong,{children:"port number"})," identifies a ",e.jsx(s.em,{children:"process"})," on that machine."]}),`
`,e.jsx(s.p,{children:"A connection is uniquely identified by four values, called the 4-tuple:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`source IP : source port  →  destination IP : destination port
203.0.113.9 : 51884      →  198.51.100.4 : 443
`})}),`
`,e.jsx(s.p,{children:"Because the source port differs for every connection, one server can hold hundreds of thousands of simultaneous connections on a single port such as 443."}),`
`,e.jsx(s.h3,{children:"TCP: the reliable protocol"}),`
`,e.jsxs(s.p,{children:["TCP opens a connection before any data moves, using a ",e.jsx(s.strong,{children:"3-way handshake"}),"."]}),`
`,e.jsx(r,{chart:`sequenceDiagram
  participant C as Client
  participant S as Server
  C->>S: SYN — request to open
  S->>C: SYN-ACK — accepted
  C->>S: ACK — confirmed
  Note over C,S: Data can now flow`}),`
`,e.jsx(s.p,{children:"Once open, five mechanisms keep the guarantees:"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Mechanism"}),e.jsx(s.th,{children:"What it does"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Sequence numbers"}),e.jsx(s.td,{children:"Numbers every byte so the receiver can reorder"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Acknowledgements (ACKs)"}),e.jsx(s.td,{children:"Receiver confirms what it received"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Retransmission"}),e.jsx(s.td,{children:"No ACK within a timeout means the sender resends"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Flow control"}),e.jsx(s.td,{children:"Stops the sender outpacing the receiver's buffer"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Congestion control"}),e.jsx(s.td,{children:"Slows the sender when the network shows signs of overload"})]})]})]}),`
`,e.jsxs(s.p,{children:["Closing is a separate 4-step exchange (FIN, ACK, FIN, ACK). The socket then sits in a ",e.jsx(s.code,{children:"TIME_WAIT"})," state for up to a couple of minutes, which is why servers cycling many short connections can exhaust their available ports."]}),`
`,e.jsx(s.h3,{children:"Head-of-line blocking"}),`
`,e.jsx(s.p,{children:"TCP's ordering guarantee has a specific cost. If packet 2 is lost, packets 3, 4 and 5 sit in a buffer until 2 is resent, even though they arrived safely."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Received:  [1] [ X ] [3] [4] [5]
                 ↑
           lost — 3, 4, 5 wait here, unusable
`})}),`
`,e.jsx(s.p,{children:"One missing packet stalls everything behind it."}),`
`,e.jsx(s.h3,{children:"UDP: the minimal protocol"}),`
`,e.jsx(s.p,{children:"UDP adds almost nothing to IP. No handshake, no acknowledgements, no retransmission, no ordering."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{}),e.jsx(s.th,{children:"TCP header"}),e.jsx(s.th,{children:"UDP header"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Minimum size"}),e.jsx(s.td,{children:"20 bytes"}),e.jsx(s.td,{children:"8 bytes"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Contains"}),e.jsx(s.td,{children:"Sequence numbers, ACK numbers, window size, flags"}),e.jsx(s.td,{children:"Source port, destination port, length, checksum"})]})]})]}),`
`,e.jsx(s.p,{children:"A lost UDP packet is simply gone. Any application that cares must handle it itself, usually by numbering messages and skipping over gaps."}),`
`,e.jsxs(s.p,{children:["UDP also supports ",e.jsx(s.strong,{children:"multicast"}),": one packet delivered to many receivers at once. TCP is strictly one-to-one and cannot do this."]}),`
`,e.jsx(s.h3,{children:"Packet size and fragmentation"}),`
`,e.jsxs(s.p,{children:["Most network links carry about 1500 bytes per packet, a limit called the ",e.jsx(s.strong,{children:"MTU"})," (Maximum Transmission Unit)."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"TCP"})," splits a data stream to fit the MTU automatically. The application never sees this."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"UDP"})," sends whatever it is given. An oversized datagram is fragmented across several packets, and losing any one fragment discards the entire datagram."]}),`
`]}),`
`,e.jsx(s.p,{children:"This is why UDP payloads are usually kept small, often under roughly 1200 bytes."}),`
`,e.jsx(s.h3,{children:"Framing: a practical difference"}),`
`,e.jsxs(s.p,{children:["TCP delivers a continuous ",e.jsx(s.strong,{children:"stream of bytes"})," with no message boundaries. Two sends of 100 bytes may arrive as one 200-byte read, or as reads of 30 and 170."]}),`
`,e.jsx(s.p,{children:"UDP preserves boundaries: one send produces exactly one receive."}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// TCP — boundaries must be added by the application."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// Here each message ends with a newline."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"let"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" buffer "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"="}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:" ''"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:";"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"socket."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"on"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"'data'"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", ("}),e.jsx(s.span,{style:{color:"#FFA657"},children:"chunk"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:") "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"=>"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"  buffer "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"+="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" chunk."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"toString"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  let"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" i;"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"  while"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" ((i "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" buffer."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"indexOf"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"'"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"\\n"}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"'"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:")) "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"!=="}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" -"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"1"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"    const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" message"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" JSON"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"parse"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(buffer."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"slice"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"0"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", i));"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"    buffer "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" buffer."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"slice"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(i "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"+"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" 1"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:");"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D2A8FF"},children:"    handle"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(message);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"});"})})]})})}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// UDP — one datagram in, one datagram out. No framing needed."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"socket."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"on"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"'message'"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:", ("}),e.jsx(s.span,{style:{color:"#FFA657"},children:"datagram"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:") "}),e.jsx(s.span,{style:{color:"#FF7B72"},children:"=>"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D2A8FF"},children:"  handle"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#79C0FF"},children:"JSON"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"parse"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(datagram));"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E6EDF3"},children:"});"})})]})})}),`
`,e.jsx(s.p,{children:"Forgetting TCP framing is a common source of bugs that only appear under load, when packets begin to coalesce."}),`
`,e.jsx(s.h3,{children:"QUIC: reliability rebuilt on UDP"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"QUIC"})," is a newer transport protocol that runs on UDP and implements ordering, retransmission and encryption itself. It is the foundation of ",e.jsx(s.strong,{children:"HTTP/3"}),"."]}),`
`,e.jsx(s.p,{children:"Its main gain is per-stream reliability. A lost packet stalls only the stream it belongs to, rather than every stream sharing the connection, which removes TCP's head-of-line blocking. It also merges the transport and encryption handshakes, so a connection can be established in fewer round trips."}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"key-terms",children:"Key terms"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Term"}),e.jsx(s.th,{children:"Plain-English meaning"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Packet"}),e.jsx(s.td,{children:"A small chunk of data with an address attached"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Packet switching"}),e.jsx(s.td,{children:"Splitting data into independently routed packets"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"IP"}),e.jsx(s.td,{children:"The protocol that addresses and routes packets, with no delivery guarantee"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Transport layer"}),e.jsx(s.td,{children:"The layer above IP that decides what to do about loss and ordering"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Port"}),e.jsx(s.td,{children:"A number identifying which process on a machine should receive the data"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Socket"}),e.jsx(s.td,{children:"One endpoint of a connection, identified by an IP and port pair"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Handshake"}),e.jsx(s.td,{children:"The opening exchange that establishes a TCP connection"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"ACK"}),e.jsx(s.td,{children:"A message confirming that data was received"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Sequence number"}),e.jsx(s.td,{children:"A counter letting the receiver reorder and detect gaps"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Head-of-line blocking"}),e.jsx(s.td,{children:"Later packets waiting on an earlier lost one"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"MTU"}),e.jsx(s.td,{children:"The largest packet size a network link accepts, typically about 1500 bytes"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Datagram"}),e.jsx(s.td,{children:"A single self-contained UDP message"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Multicast"}),e.jsx(s.td,{children:"One packet delivered to many receivers at once"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"RTT"}),e.jsx(s.td,{children:"Round-trip time: how long a message takes to reach a peer and come back"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"QUIC"}),e.jsx(s.td,{children:"A transport protocol on UDP that supplies reliability per stream"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"trade-offs",children:"Trade-offs"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Choice"}),e.jsx(s.th,{children:"Buys you"}),e.jsx(s.th,{children:"Costs you"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"TCP"})}),e.jsx(s.td,{children:"Guaranteed, ordered delivery; loss handled by the operating system"}),e.jsx(s.td,{children:"One round trip before data flows; head-of-line blocking; larger headers"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"UDP"})}),e.jsx(s.td,{children:"No setup delay; small headers; multicast; loss cannot stall the stream"}),e.jsx(s.td,{children:"No delivery or ordering guarantees; the application must handle gaps"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"QUIC"})}),e.jsx(s.td,{children:"Per-stream reliability; faster connection setup; encryption included"}),e.jsx(s.td,{children:"Younger ecosystem; more CPU per packet; some networks throttle UDP"})]})]})]}),`
`,e.jsxs(s.p,{children:['The deciding question is rarely "reliable or fast". It is: ',e.jsx(s.strong,{children:"is late data still useful?"})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Yes, the data must be complete whenever it arrives → TCP."}),`
`,e.jsx(s.li,{children:"No, a stale update has already been replaced → UDP."}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"in-the-wild",children:"In the wild"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"HLS and DASH video streaming"})," deliver segments over HTTP, so over TCP. A segment is a file, and a missing byte corrupts it, so reliability wins and a few seconds of buffering hides the delay."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Video conferencing"})," (Zoom, Google Meet, WebRTC) uses UDP. A frame from two seconds ago has no value, so retransmitting it would only add delay."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"DNS"})," uses UDP for ordinary lookups: one small question, one small answer, where a handshake would double the cost. It falls back to TCP for responses too large for a single datagram."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Google, Meta and Cloudflare"})," serve large shares of their traffic over HTTP/3, that is QUIC over UDP, mainly to avoid head-of-line blocking on lossy mobile networks."]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"when-to-use-avoid",children:"When to use / avoid"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Use TCP when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Every byte must arrive: files, API responses, database queries, page loads"}),`
`,e.jsx(s.li,{children:"Order matters: chat messages, collaborative document edits, event logs"}),`
`,e.jsx(s.li,{children:"Connections are long-lived, so handshake cost is amortised"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Use UDP when"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Only the newest value matters: player positions, live cursors, sensor readings"}),`
`,e.jsx(s.li,{children:"Latency matters more than completeness: voice, live video, gaming"}),`
`,e.jsx(s.li,{children:"Exchanges are tiny and one-shot, where a handshake would dominate the cost"}),`
`,e.jsx(s.li,{children:"One message must reach many receivers at once"}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Avoid UDP when"})," the application cannot tolerate gaps and has no plan for detecting them. Rebuilding reliability by hand tends to reproduce TCP, more slowly and with more bugs."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h2,{id:"tldr",children:"TL;DR"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Packet switching splits data into independently routed packets, which makes networks shareable and resilient but unreliable."}),`
`,e.jsx(s.li,{children:"IP is best-effort, so packets may be lost, reordered, duplicated or delayed."}),`
`,e.jsx(s.li,{children:"TCP restores order and completeness with a handshake, sequence numbers, ACKs, retransmission, and flow and congestion control."}),`
`,e.jsx(s.li,{children:"The price of TCP is one round trip of setup and head-of-line blocking, where one lost packet stalls everything behind it."}),`
`,e.jsx(s.li,{children:"UDP sends and forgets: an 8-byte header, no setup, no guarantees, and support for multicast."}),`
`,e.jsx(s.li,{children:"TCP is a byte stream and needs application-level framing; UDP preserves message boundaries."}),`
`,e.jsx(s.li,{children:"QUIC, the basis of HTTP/3, runs on UDP and supplies reliability per stream, removing head-of-line blocking."}),`
`,e.jsx(s.li,{children:"The decision rule: if late data is still useful, choose TCP; if it is already stale, choose UDP."}),`
`]})]})}function a(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{a as default,l as outline};
