import{j as e}from"./index-CFiJC1o_.js";const l={toc:[{id:"definition",text:"Definition",depth:2},{id:"the-problem-it-solves",text:"The problem it solves",depth:2},{id:"how-it-works",text:"How it works",depth:2},{id:"key-terms",text:"Key terms",depth:2},{id:"trade-offs",text:"Trade-offs",depth:2},{id:"in-the-wild",text:"In the wild",depth:2},{id:"when-to-use-avoid",text:"When to use / avoid",depth:2},{id:"tldr",text:"TL;DR",depth:2}],placedProblems:!1};function r(n){const s={code:"code",em:"em",h2:"h2",h3:"h3",li:"li","mermaid-diagram":"mermaid-diagram",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components},t=s["mermaid-diagram"];return e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{id:"definition",children:"Definition"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"TLS (Transport Layer Security)"})," is a protocol that creates an encrypted, verified channel between two machines over an untrusted network."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"SSL (Secure Sockets Layer)"}),' is its older, now-insecure predecessor. The name survives in phrases like "SSL certificate", but every modern connection uses TLS.']}),`
`,e.jsx(s.h2,{id:"the-problem-it-solves",children:"The problem it solves"}),`
`,e.jsx(s.p,{children:"Data on the internet passes through many machines owned by other people: Wi-Fi routers, ISPs, backbone providers. Without protection, any of them can read it, change it, or pretend to be the destination."}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Threat"}),e.jsx(s.th,{children:"Example"}),e.jsx(s.th,{children:"TLS guarantee"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Reading traffic"}),e.jsx(s.td,{children:"A café Wi-Fi captures a password"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Confidentiality"})," — data is encrypted"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Changing traffic"}),e.jsx(s.td,{children:"A network injects ads into a page"}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Integrity"})," — any tampering is detected"]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Impersonation"}),e.jsxs(s.td,{children:["A fake server poses as ",e.jsx(s.code,{children:"bank.com"})]}),e.jsxs(s.td,{children:[e.jsx(s.strong,{children:"Authentication"})," — the server proves its identity"]})]})]})]}),`
`,e.jsx(s.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(s.h3,{children:"Where TLS sits"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`HTTP     ← application data
TLS      ← encryption + identity check
TCP      ← reliable delivery
IP       ← addressing and routing
`})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"HTTPS"})," is HTTP sent through a TLS channel. HTTP itself is unchanged; TLS wraps it."]}),`
`,e.jsx(s.h3,{children:"Two kinds of encryption"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Type"}),e.jsx(s.th,{children:"Keys"}),e.jsx(s.th,{children:"Speed"}),e.jsx(s.th,{children:"Used in TLS for"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Symmetric"})}),e.jsx(s.td,{children:"One shared key encrypts and decrypts"}),e.jsx(s.td,{children:"Very fast"}),e.jsx(s.td,{children:"All application data"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.strong,{children:"Asymmetric"})}),e.jsx(s.td,{children:"A public key + a private key"}),e.jsx(s.td,{children:"Slow"}),e.jsx(s.td,{children:"Agreeing on a key and proving identity"})]})]})]}),`
`,e.jsx(s.p,{children:"TLS combines them. Slow asymmetric math runs once at the start; fast symmetric encryption carries everything after."}),`
`,e.jsx(s.h3,{children:"Agreeing on a key without sending it: Diffie-Hellman"}),`
`,e.jsxs(s.p,{children:["Both sides compute the same ",e.jsx(s.strong,{children:"session key"})," independently. The key itself never crosses the network."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Client                                    Server
secret: a                                 secret: b
public share: A = f(a)  ───── A ─────►
                        ◄──── B ─────     public share: B = f(b)
key = combine(a, B)                       key = combine(b, A)
          └──────────── same key ────────────┘
`})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["An observer sees ",e.jsx(s.code,{children:"A"})," and ",e.jsx(s.code,{children:"B"})," but cannot reverse them into ",e.jsx(s.code,{children:"a"})," or ",e.jsx(s.code,{children:"b"}),"."]}),`
`,e.jsxs(s.li,{children:["TLS 1.3 uses ",e.jsx(s.strong,{children:"ECDHE"}),": elliptic-curve Diffie-Hellman, ",e.jsx(s.strong,{children:"ephemeral"}),". Fresh secrets are generated for every connection."]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#8B949E"},children:"// Node built-in crypto: both sides derive the same key"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" crypto"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:" require"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"'crypto'"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:");"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" client"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" crypto."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"createECDH"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"'prime256v1'"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:");"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" clientShare"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" client."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"generateKeys"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"();   "}),e.jsx(s.span,{style:{color:"#8B949E"},children:"// sent over the network"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" server"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" crypto."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"createECDH"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"("}),e.jsx(s.span,{style:{color:"#A5D6FF"},children:"'prime256v1'"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:");"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" serverShare"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" server."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"generateKeys"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"();   "}),e.jsx(s.span,{style:{color:"#8B949E"},children:"// sent over the network"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" clientKey"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" client."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"computeSecret"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(serverShare);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#FF7B72"},children:"const"}),e.jsx(s.span,{style:{color:"#79C0FF"},children:" serverKey"}),e.jsx(s.span,{style:{color:"#FF7B72"},children:" ="}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:" server."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"computeSecret"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(clientShare);"})]}),`
`,e.jsx(s.span,{className:"line"}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E6EDF3"},children:"console."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"log"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(clientKey."}),e.jsx(s.span,{style:{color:"#D2A8FF"},children:"equals"}),e.jsx(s.span,{style:{color:"#E6EDF3"},children:"(serverKey));    "}),e.jsx(s.span,{style:{color:"#8B949E"},children:"// true — never transmitted"})]})]})})}),`
`,e.jsx(s.h3,{children:"Proving who is on the other end: certificates"}),`
`,e.jsxs(s.p,{children:["Diffie-Hellman alone cannot tell ",e.jsx(s.em,{children:"who"})," the other side is. An attacker in the middle could run the exchange separately with each side and read everything — a ",e.jsx(s.strong,{children:"man-in-the-middle (MITM)"})," attack."]}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"certificate"})," is the server's signed identity card:"]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Field"}),e.jsx(s.th,{children:"Contains"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Subject"}),e.jsxs(s.td,{children:["The domain, e.g. ",e.jsx(s.code,{children:"example.com"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Public key"}),e.jsx(s.td,{children:"The server's public key"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Validity"}),e.jsx(s.td,{children:"Start and expiry dates"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Issuer"}),e.jsx(s.td,{children:"The authority that vouched for it"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Signature"}),e.jsx(s.td,{children:"The issuer's digital signature over all of the above"})]})]})]}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"digital signature"})," is made with a private key and checked with the matching public key. Only the private-key holder can sign; anyone can verify."]}),`
`,e.jsx(s.h3,{children:"Chain of trust"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Root CA           ← pre-installed in the OS/browser trust store
   │ signs
Intermediate CA   ← does day-to-day signing; root stays offline
   │ signs
example.com       ← "leaf" certificate sent by the server
`})}),`
`,e.jsx(s.p,{children:"The client walks up the chain until it reaches a root it already trusts."}),`
`,e.jsx(s.h3,{children:"Why a stolen certificate is useless"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"The server sends its certificate (public — anyone can copy it)."}),`
`,e.jsxs(s.li,{children:["The server ",e.jsx(s.strong,{children:"signs its Diffie-Hellman share"})," with its private key."]}),`
`,e.jsx(s.li,{children:"The client verifies that signature with the public key inside the certificate."}),`
`]}),`
`,e.jsx(s.p,{children:"An attacker can copy the certificate but not the private key, so step 3 fails."}),`
`,e.jsx(s.h3,{children:"The TLS 1.3 handshake"}),`
`,e.jsx(t,{chart:`sequenceDiagram
    participant C as Client
    participant S as Server
    C->>S: ClientHello (supported ciphers, key share A)
    S->>C: ServerHello (chosen cipher, key share B)
    Note over C,S: Both now derive the session key
    S->>C: Certificate + signature + Finished (encrypted)
    Note over C: Verify chain, domain, expiry, signature
    C->>S: Finished (encrypted)
    C->>S: HTTP request (encrypted with session key)`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"TLS 1.3:"})," one round trip before data flows."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"TLS 1.2:"})," two round trips."]}),`
`,e.jsxs(s.li,{children:["Resumed sessions can send data immediately (",e.jsx(s.strong,{children:"0-RTT"}),"), at the cost of replay risk."]}),`
`]}),`
`,e.jsx(s.h3,{children:"What the client checks"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Check"}),e.jsx(s.th,{children:"Fails when"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Chain ends at a trusted root"}),e.jsx(s.td,{children:"Self-signed or unknown issuer"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Domain matches the URL"}),e.jsx(s.td,{children:"Certificate is for a different host"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Within validity dates"}),e.jsx(s.td,{children:"Certificate has expired"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Not revoked"}),e.jsx(s.td,{children:"The issuer has withdrawn it"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Signature on key share is valid"}),e.jsx(s.td,{children:"Someone is impersonating the server"})]})]})]}),`
`,e.jsx(s.p,{children:"Any failure stops the connection and the browser shows a security warning."}),`
`,e.jsx(s.h2,{id:"key-terms",children:"Key terms"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Term"}),e.jsx(s.th,{children:"Plain-English meaning"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Session key"}),e.jsx(s.td,{children:"Temporary symmetric key used to encrypt one connection"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Public / private key"}),e.jsx(s.td,{children:"A matched pair; public is shared freely, private never leaves its owner"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Diffie-Hellman (ECDHE)"}),e.jsx(s.td,{children:"Method for two parties to compute a shared key without sending it"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Certificate"}),e.jsx(s.td,{children:"Signed document binding a domain name to a public key"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Certificate Authority (CA)"}),e.jsx(s.td,{children:"Organisation that verifies domain ownership and signs certificates"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Trust store"}),e.jsx(s.td,{children:"List of root CAs an OS or browser trusts by default"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Forward secrecy"}),e.jsx(s.td,{children:"Stealing a server's private key later cannot decrypt past recorded traffic"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"TLS termination"}),e.jsx(s.td,{children:"The point where TLS is decrypted, often a load balancer or CDN"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"SNI"}),e.jsx(s.td,{children:"Field in ClientHello naming the requested domain, so one IP can host many certificates"})]})]})]}),`
`,e.jsx(s.h2,{id:"trade-offs",children:"Trade-offs"}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Choice"}),e.jsx(s.th,{children:"Buys you"}),e.jsx(s.th,{children:"Costs you"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"TLS on every connection"}),e.jsx(s.td,{children:"Privacy, integrity, identity"}),e.jsx(s.td,{children:"Extra round trip and CPU on connect"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"TLS 1.3 over 1.2"}),e.jsx(s.td,{children:"Faster handshake, forward secrecy always on"}),e.jsx(s.td,{children:"Very old clients cannot connect"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"0-RTT resumption"}),e.jsx(s.td,{children:"Zero added latency on reconnect"}),e.jsx(s.td,{children:"Early data can be replayed by an attacker"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Terminate TLS at the load balancer"}),e.jsx(s.td,{children:"Offloads crypto, lets the balancer read HTTP for routing"}),e.jsx(s.td,{children:"Traffic behind it is plain unless re-encrypted"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"End-to-end TLS (re-encrypt to backends)"}),e.jsx(s.td,{children:"Encrypted on internal networks too"}),e.jsx(s.td,{children:"More certificates to manage, more CPU"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Short-lived certificates"}),e.jsx(s.td,{children:"Smaller damage window if a key leaks"}),e.jsx(s.td,{children:"Renewal must be fully automated"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Mutual TLS (mTLS)"}),e.jsx(s.td,{children:"Client also proves identity — common between services"}),e.jsx(s.td,{children:"Every client needs and rotates a certificate"})]})]})]}),`
`,e.jsx(s.h2,{id:"in-the-wild",children:"In the wild"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Let's Encrypt"})," issues free, automated, short-lived certificates, which made HTTPS the default across the web."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cloudflare"})," and other CDNs terminate TLS at edge servers close to users, cutting handshake latency."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"AWS Certificate Manager"})," issues certificates for load balancers and CloudFront and never exposes the private key to the customer."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Chrome"}),' labels plain-HTTP pages "Not secure", pushing nearly all sites to HTTPS.']}),`
`]}),`
`,e.jsx(s.h2,{id:"when-to-use-avoid",children:"When to use / avoid"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Use"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Any traffic crossing the public internet — always"}),`
`,e.jsx(s.li,{children:"Service-to-service traffic on shared or cloud networks (often as mTLS)"}),`
`,e.jsx(s.li,{children:"Anything carrying credentials, tokens or personal data"}),`
`]}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Avoid or reconsider"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"0-RTT for requests that change state (payments, writes) — replay risk"}),`
`,e.jsx(s.li,{children:"Hand-managed certificates with no auto-renewal — expiry outages are common"}),`
`,e.jsx(s.li,{children:"Inventing custom encryption instead of TLS"}),`
`]}),`
`,e.jsx(s.h2,{id:"tldr",children:"TL;DR"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"TLS gives three guarantees: confidentiality, integrity, authentication. HTTPS = HTTP inside TLS."}),`
`,e.jsxs(s.li,{children:["Both sides compute a shared ",e.jsx(s.strong,{children:"session key"})," with Diffie-Hellman; the key is never sent."]}),`
`,e.jsx(s.li,{children:"Asymmetric crypto sets up the connection; fast symmetric crypto carries the data."}),`
`,e.jsxs(s.li,{children:["A ",e.jsx(s.strong,{children:"certificate"}),", signed by a trusted CA, binds a domain to a public key."]}),`
`,e.jsx(s.li,{children:"The server signs its key share with its private key, which defeats man-in-the-middle attacks."}),`
`,e.jsx(s.li,{children:"TLS 1.3 needs one round trip and makes forward secrecy mandatory."}),`
`]})]})}function c(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{c as default,l as outline};
