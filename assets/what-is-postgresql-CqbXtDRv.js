import{j as e}from"./index-DAzFAmNs.js";const i={toc:[{id:"definition",text:"Definition",depth:2},{id:"how-it-works",text:"How it works",depth:2},{id:"implementation",text:"Implementation",depth:2},{id:"the-invariant",text:"The invariant",depth:2},{id:"tldr",text:"TL;DR",depth:2}],placedProblems:!1};function r(s){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"definition",children:"Definition"}),`
`,e.jsxs(n.p,{children:["PostgreSQL is a ",e.jsx(n.strong,{children:"server program"}),`: software that starts once, keeps running, and answers
requests from other programs over a network port. It owns the data files on disk. No
application reads or writes those files directly — every request goes through the server.`]}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"database"}),` is one named container of tables inside that server. A single PostgreSQL
installation holds many databases, and they do not share tables. Three levels of nesting:`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Level"}),e.jsx(n.th,{children:"Example"}),e.jsx(n.th,{children:"Count"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Server (PostgreSQL)"}),e.jsx(n.td,{children:"listening on port 5432"}),e.jsx(n.td,{children:"one installation"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Database"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"learnpg"})}),e.jsx(n.td,{children:"many per server"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Table"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"students"})}),e.jsx(n.td,{children:"many per database"})]})]})]}),`
`,e.jsxs(n.p,{children:["The software is commonly called ",e.jsx(n.strong,{children:"Postgres"}),". Both names refer to the same product."]}),`
`,e.jsx(n.h3,{children:"Origin"}),`
`,e.jsxs(n.p,{children:["The project began in 1986 at the University of California, Berkeley, as ",e.jsx(n.strong,{children:"POSTGRES"}),` — a
successor to an earlier database called Ingres, hence "post-Ingres". Its founding goal was
narrow and specific: allow users to add new data types, new functions, and new indexing
methods without modifying the database's source code.`]}),`
`,e.jsxs(n.p,{children:["That goal is the reason the term ",e.jsx(n.strong,{children:"extensible"}),` attaches to this system. Support for
document storage, geographic data, and vector search all entered through that mechanism
rather than through redesigns of the core.`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Year"}),e.jsx(n.th,{children:"Event"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"1986"}),e.jsx(n.td,{children:"POSTGRES starts at Berkeley"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"1994"}),e.jsx(n.td,{children:"SQL support added; renamed Postgres95"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"1996"}),e.jsx(n.td,{children:"Renamed PostgreSQL; development moves to a public community"})]})]})]}),`
`,e.jsxs(n.p,{children:["SQL arrived eight years after the engine. ",e.jsx(n.strong,{children:"SQL"}),` is a standard query language spoken by
many systems; PostgreSQL is one program that speaks it. The two words are not
interchangeable, and this article marks where they diverge.`]}),`
`,e.jsx(n.h3,{children:"Licence and release cadence"}),`
`,e.jsx(n.p,{children:`PostgreSQL is distributed under the PostgreSQL Licence, a short permissive licence
permitting free use, modification, and redistribution, including commercially. No single
company owns the codebase; it is maintained by a global development group.`}),`
`,e.jsx(n.p,{children:"One major version is released each year, in September."}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(n.p,{children:`The central guarantee concerns what happens when the server loses power midway through a
change. The trace below follows a two-step money transfer through a crash.`}),`
`,e.jsx(n.h3,{children:"Starting state"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:` id | holder | balance
----+--------+---------
  1 | A      |    2000
  2 | B      |     500
(2 rows)
`})}),`
`,e.jsxs(n.p,{children:[`The application asks for two changes that must happen together: subtract 500 from A, add
500 to B. A group of changes treated as one unit is called a `,e.jsx(n.strong,{children:"transaction"}),"."]}),`
`,e.jsx(n.h3,{children:"The naive design, and why it fails"}),`
`,e.jsx(n.p,{children:`A strawman implementation writes each change straight to the table file on disk as it
arrives, and reports success after each one. Trace it against a power failure occurring
after step 1:`}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Step"}),e.jsx(n.th,{children:"Action"}),e.jsx(n.th,{children:"Disk after the step"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"1"}),e.jsx(n.td,{children:"Subtract 500 from A"}),e.jsx(n.td,{children:"A = 1500, B = 500"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:e.jsx(n.strong,{children:"Power fails"})}),e.jsx(n.td,{children:"A = 1500, B = 500"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"2"}),e.jsx(n.td,{children:"Never runs"}),e.jsx(n.td,{children:"—"})]})]})]}),`
`,e.jsx(n.p,{children:`On restart, 500 units have left A and arrived nowhere. The total across both rows dropped
from 2500 to 2000. The data is now permanently wrong, and nothing on disk records that a
second step was ever intended.`}),`
`,e.jsx(n.h3,{children:"The write-ahead log"}),`
`,e.jsxs(n.p,{children:[`PostgreSQL writes a description of each change to a separate sequential file first, called
the `,e.jsx(n.strong,{children:"write-ahead log"}),` (WAL). Table files are updated later. When the transaction
finishes, a final `,e.jsx(n.strong,{children:"commit record"}),` is appended to the WAL and forced to physical storage
before the client is told anything.`]}),`
`,e.jsx(n.p,{children:`The commit record is a distinct entry. It is not one of the changes; it is the statement
that the group of changes is complete.`}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Step"}),e.jsx(n.th,{children:"Appended to WAL"}),e.jsx(n.th,{children:"Commit record present"}),e.jsx(n.th,{children:"Client informed"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"1"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"A: 2000 → 1500"})}),e.jsx(n.td,{children:"no"}),e.jsx(n.td,{children:"no"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:e.jsx(n.strong,{children:"power fails"})}),e.jsx(n.td,{children:"no"}),e.jsx(n.td,{children:"no"})]})]})]}),`
`,e.jsx(n.h3,{children:"Recovery"}),`
`,e.jsx(n.p,{children:`On startup, the server reads the WAL and applies one rule: a group of changes with no
commit record after it is discarded.`}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Question at startup"}),e.jsx(n.th,{children:"Answer"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Is there a commit record for this group?"}),e.jsx(n.td,{children:"No"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"What happens to the group's changes?"}),e.jsx(n.td,{children:"Discarded"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Resulting balance of A"}),e.jsx(n.td,{children:"2000"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Resulting balance of B"}),e.jsx(n.td,{children:"500"})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:` id | holder | balance
----+--------+---------
  1 | A      |    2000
  2 | B      |     500
(2 rows)
`})}),`
`,e.jsx(n.p,{children:"The transfer did not half-happen. It did not happen."}),`
`,e.jsx(n.h3,{children:"The same trace with the commit record written"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Step"}),e.jsx(n.th,{children:"Appended to WAL"}),e.jsx(n.th,{children:"Commit record present"}),e.jsx(n.th,{children:"Client informed"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"1"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"A: 2000 → 1500"})}),e.jsx(n.td,{children:"no"}),e.jsx(n.td,{children:"no"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"2"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"B: 500 → 1000"})}),e.jsx(n.td,{children:"no"}),e.jsx(n.td,{children:"no"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"3"}),e.jsx(n.td,{children:"commit record"}),e.jsx(n.td,{children:"yes, forced to disk"}),e.jsx(n.td,{children:"yes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:e.jsx(n.strong,{children:"power fails"})}),e.jsx(n.td,{children:"yes"}),e.jsx(n.td,{children:"—"})]})]})]}),`
`,e.jsx(n.p,{children:`Here the table files may still be unwritten in memory when power is lost. The WAL survives,
and startup replays its records to rebuild the missing table updates. The result is A = 1500,
B = 1000.`}),`
`,e.jsx(n.h3,{children:"The four guarantees"}),`
`,e.jsxs(n.p,{children:["The behaviour above is two of four properties abbreviated ",e.jsx(n.strong,{children:"ACID"}),"."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Letter"}),e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Guarantee"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A"}),e.jsx(n.td,{children:"Atomicity"}),e.jsx(n.td,{children:"Every step of a transaction, or none of them"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"C"}),e.jsx(n.td,{children:"Consistency"}),e.jsx(n.td,{children:"Declared rules on the data are never left violated"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"I"}),e.jsx(n.td,{children:"Isolation"}),e.jsx(n.td,{children:"Concurrent transactions do not observe each other's unfinished work"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"D"}),e.jsx(n.td,{children:"Durability"}),e.jsx(n.td,{children:"Once reported committed, a change survives loss of power"})]})]})]}),`
`,e.jsx(n.p,{children:`Atomicity is what discards the uncommitted group. Durability is what protects the group
once its commit record exists. They cover different halves of the same crash.`}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.p,{children:`The following query asks a running server to identify itself. It is the smallest proof that
a connection reached a real PostgreSQL server.`}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#8B949E"},children:"-- SELECT returns computed values; version() is a built-in function"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#FF7B72"},children:"SELECT"}),e.jsx(n.span,{style:{color:"#FF7B72"},children:" version"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:"();"})]})]})})}),`
`,e.jsx(n.p,{children:"Output:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`                            version
-----------------------------------------------------------------
 PostgreSQL 18.6 on aarch64-apple-darwin, compiled by clang 16...
(1 row)
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"version()"})," is ",e.jsx(n.strong,{children:"PostgreSQL-specific"}),". The SQL standard defines no such function."]}),`
`,e.jsx(n.h3,{children:"Reading the version number"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Component"}),e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Meaning of a change"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"18"})}),e.jsx(n.td,{children:"Major version"}),e.jsx(n.td,{children:"New features; upgrading requires a migration procedure"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"6"})}),e.jsx(n.td,{children:"Minor version"}),e.jsx(n.td,{children:"Bug and security fixes; binaries are replaced, data files are untouched"})]})]})]}),`
`,e.jsxs(n.p,{children:["Versions before 2017 used a two-part major number, such as ",e.jsx(n.code,{children:"9.6"}),", where ",e.jsx(n.code,{children:"9.6"})," and ",e.jsx(n.code,{children:"9.5"}),`
were different major versions. The scheme was flattened to a single number from version 10
onward.`]}),`
`,e.jsx(n.h3,{children:"Extensions"}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"extension"}),` is a package that adds data types, functions, or index types to a running
server.`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#8B949E"},children:"-- loads a package into the current database; nothing is recompiled"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#FF7B72"},children:"CREATE"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:" EXTENSION pgvector;"})]})]})})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CREATE EXTENSION"}),` is PostgreSQL-specific. This is the mechanism the 1986 design goal
produced, still in use.`]}),`
`,e.jsx(n.h2,{id:"the-invariant",children:"The invariant"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:`A client is never told that a transaction succeeded until that transaction's commit
record is physically stored. Any transaction without a stored commit record is discarded
at startup.`}),`
`]}),`
`,e.jsx(n.p,{children:"Two consequences follow directly."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"There is no partial outcome."}),` A reported success means every step is durable. An absent
report means no step survives. No third state exists on disk.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Confirmation costs a physical write."}),` Each commit waits for storage hardware to
acknowledge the commit record, which sets a floor on how fast transactions can complete.
Batching more work into one transaction amortises that cost; committing each row
separately pays it every time.`]}),`
`,e.jsx(n.p,{children:`The invariant covers the server and its disk, not the network between server and client. A
failure after the commit record is stored but before the reply is delivered leaves the
client unsure while the server is certain. Handling that ambiguity is the caller's
responsibility.`}),`
`,e.jsx(n.h2,{id:"tldr",children:"TL;DR"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"PostgreSQL is a server program that owns databases; a database is a container of tables inside it, and one server holds many databases."}),`
`,e.jsx(n.li,{children:"It began as POSTGRES at Berkeley in 1986, built around user-added types and index methods; SQL support arrived in 1994 and the current name in 1996."}),`
`,e.jsx(n.li,{children:"It is released under a permissive licence, is owned by no single company, and ships one major version each year."}),`
`,e.jsx(n.li,{children:"Changes are written to a write-ahead log before the table files, and a commit record marks a transaction as complete."}),`
`,e.jsx(n.li,{children:"Atomicity discards any transaction lacking a commit record; durability protects any transaction that has one."}),`
`,e.jsxs(n.li,{children:["In a version number such as ",e.jsx(n.code,{children:"18.6"}),", the first part is the major version and the second carries only fixes."]}),`
`]})]})}function d(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{d as default,i as outline};
