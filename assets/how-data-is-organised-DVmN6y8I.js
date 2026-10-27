import{j as e}from"./index-CET28yB6.js";const t={toc:[{id:"definition",text:"Definition",depth:2},{id:"how-it-works",text:"How it works",depth:2},{id:"implementation",text:"Implementation",depth:2},{id:"the-invariant",text:"The invariant",depth:2},{id:"tldr",text:"TL;DR",depth:2}],placedProblems:!1};function l(s){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"definition",children:"Definition"}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.strong,{children:"table"})," is a named collection of data about one kind of thing — students, invoices, sensor readings. A ",e.jsx(n.strong,{children:"column"})," is a labelled slot within that table, such as ",e.jsx(n.code,{children:"age"}),". A ",e.jsx(n.strong,{children:"row"})," is one complete entry: one value for every column the table declares."]}),`
`,e.jsxs(n.p,{children:["The set of column names and the kind of value each column accepts is the table's ",e.jsx(n.strong,{children:"schema"}),". A ",e.jsx(n.strong,{children:"type"})," is that kind of value: a whole number, a string of characters, a calendar date, a true/false flag. PostgreSQL requires the schema to be declared before a single row may be inserted, and enforces it on every write. This arrangement is called ",e.jsx(n.strong,{children:"schema-on-write"}),"."]}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How it works"}),`
`,e.jsx(n.h3,{children:"The problem being solved"}),`
`,e.jsx(n.p,{children:"Consider the strawman alternative — records kept as free-form lines in a text file, with no declared shape:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Abinas, 34
Riya | age 12 | class 6A
Sam, twelve
`})}),`
`,e.jsx(n.p,{children:"Retrieving one person's age from this requires code that copes with all of the following at once."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Line"}),e.jsx(n.th,{children:"Obstacle"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"1"}),e.jsx(n.td,{children:"Fields separated by a comma"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"2"}),e.jsx(n.td,{children:"Fields separated by a pipe, plus a field the other lines lack"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"3"}),e.jsxs(n.td,{children:["The age written as the word ",e.jsx(n.code,{children:"twelve"})," rather than a numeral"]})]})]})]}),`
`,e.jsx(n.p,{children:"Nothing prevented any line from being written. The inconsistency surfaces only later, in whichever code attempts to read it. A declared schema moves that failure earlier: to the moment the bad data is written, where it can be rejected outright."}),`
`,e.jsx(n.h3,{children:"The declaration"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#FF7B72"},children:"CREATE"}),e.jsx(n.span,{style:{color:"#FF7B72"},children:" TABLE"}),e.jsx(n.span,{style:{color:"#D2A8FF"},children:" students"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:" ("})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#E6EDF3"},children:"  id    "}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"integer"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#FF7B72"},children:"  name"}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"  text"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#E6EDF3"},children:"  age   "}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"integer"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#E6EDF3"},children:");"})})]})})}),`
`,e.jsx(n.p,{children:"Running this produces an empty table with three declared columns and zero rows."}),`
`,e.jsx(n.h3,{children:"Trace: three write attempts"}),`
`,e.jsx(n.p,{children:"Against the table above, each statement below is evaluated and the outcome recorded."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Attempt 1"})," — a row matching the schema."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#FF7B72"},children:"INSERT INTO"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:" students "}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"VALUES"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:" ("}),e.jsx(n.span,{style:{color:"#79C0FF"},children:"1"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(n.span,{style:{color:"#A5D6FF"},children:"'Abinas'"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(n.span,{style:{color:"#79C0FF"},children:"34"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:");"})]})})})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Check"}),e.jsx(n.th,{children:"Result"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Value count matches column count (3 = 3)"}),e.jsx(n.td,{children:"pass"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"1"})," is a valid ",e.jsx(n.code,{children:"integer"})]}),e.jsx(n.td,{children:"pass"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"'Abinas'"})," is valid ",e.jsx(n.code,{children:"text"})]}),e.jsx(n.td,{children:"pass"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"34"})," is a valid ",e.jsx(n.code,{children:"integer"})]}),e.jsx(n.td,{children:"pass"})]})]})]}),`
`,e.jsx(n.p,{children:"Outcome: the row is written."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Attempt 2"})," — a value of the wrong type."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#FF7B72"},children:"INSERT INTO"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:" students "}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"VALUES"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:" ("}),e.jsx(n.span,{style:{color:"#79C0FF"},children:"3"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(n.span,{style:{color:"#A5D6FF"},children:"'Sam'"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(n.span,{style:{color:"#A5D6FF"},children:"'twelve'"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:");"})]})})})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Check"}),e.jsx(n.th,{children:"Result"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Value count matches column count (3 = 3)"}),e.jsx(n.td,{children:"pass"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"3"})," is a valid ",e.jsx(n.code,{children:"integer"})]}),e.jsx(n.td,{children:"pass"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"'Sam'"})," is valid ",e.jsx(n.code,{children:"text"})]}),e.jsx(n.td,{children:"pass"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"'twelve'"})," converted to ",e.jsx(n.code,{children:"integer"})]}),e.jsx(n.td,{children:"fail"})]})]})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`ERROR:  invalid input syntax for type integer: "twelve"
`})}),`
`,e.jsx(n.p,{children:"Outcome: nothing is written. The statement is rejected as a whole; the two valid values are discarded along with the invalid one."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Attempt 3"})," — too many values."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#FF7B72"},children:"INSERT INTO"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:" students "}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"VALUES"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:" ("}),e.jsx(n.span,{style:{color:"#79C0FF"},children:"4"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(n.span,{style:{color:"#A5D6FF"},children:"'Priya'"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(n.span,{style:{color:"#79C0FF"},children:"15"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:", "}),e.jsx(n.span,{style:{color:"#A5D6FF"},children:"'Bhubaneswar'"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:");"})]})})})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Check"}),e.jsx(n.th,{children:"Result"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Value count matches column count (4 ≠ 3)"}),e.jsx(n.td,{children:"fail"})]})})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`ERROR:  INSERT has more expressions than target columns
`})}),`
`,e.jsx(n.p,{children:"Outcome: nothing is written, and no value is examined at all. The shape of the row is checked before the contents of it, so the fourth value's own validity never becomes relevant."}),`
`,e.jsx(n.h3,{children:"The resulting table"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:` id |  name  | age
----+--------+-----
  1 | Abinas |  34
`})}),`
`,e.jsx(n.p,{children:"Only Attempt 1 survived."}),`
`,e.jsx(n.h3,{children:"What is stored where"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CREATE TABLE"})," writes to two places."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Destination"}),e.jsx(n.th,{children:"Contents"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"The system catalog"}),e.jsx(n.td,{children:"One entry naming the table, plus one entry per column recording its name, its type, and its ordinal position"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A file on disk"}),e.jsx(n.td,{children:"The rows themselves, initially empty"})]})]})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"system catalog"})," is the set of tables PostgreSQL uses to record the definitions of every other table. Table entries live in a catalog table named ",e.jsx(n.code,{children:"pg_class"}),"; column entries live in ",e.jsx(n.code,{children:"pg_attribute"}),"."]}),`
`,e.jsx(n.p,{children:"Because every row of a table carries the same columns in the same order, values are stored consecutively without repeating the column names per row:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`row 1:  [ 1 ][ Abinas ][ 34 ]
row 2:  [ 2 ][ Riya   ][ 12 ]
`})}),`
`,e.jsxs(n.p,{children:["Reading the ",e.jsx(n.code,{children:"age"})," of every row therefore requires one catalog lookup — establishing that ",e.jsx(n.code,{children:"age"})," is the third column — followed by a jump to the third position within each row. The column name is never searched for inside the stored data."]}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#8B949E"},children:"-- Declare the table. Column name first, then its type."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#FF7B72"},children:"CREATE"}),e.jsx(n.span,{style:{color:"#FF7B72"},children:" TABLE"}),e.jsx(n.span,{style:{color:"#D2A8FF"},children:" students"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:" ("})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#E6EDF3"},children:"  id         "}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"integer"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:",  "}),e.jsx(n.span,{style:{color:"#8B949E"},children:"-- whole number, no fractional part"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#FF7B72"},children:"  name"}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"       text"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:",     "}),e.jsx(n.span,{style:{color:"#8B949E"},children:"-- characters, no length limit"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#E6EDF3"},children:"  age        "}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"integer"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:",  "}),e.jsx(n.span,{style:{color:"#8B949E"},children:"-- whole number; arithmetic on it is meaningful"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#E6EDF3"},children:"  city       "}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"text"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#E6EDF3"},children:"  pincode    "}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"text"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:",     "}),e.jsx(n.span,{style:{color:"#8B949E"},children:"-- digits, but a label rather than a quantity"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#E6EDF3"},children:"  joined_on  "}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"date"}),e.jsx(n.span,{style:{color:"#8B949E"},children:"      -- a calendar day, without a time of day"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#E6EDF3"},children:");"})})]})})}),`
`,e.jsxs(n.p,{children:["Inspecting the declaration in ",e.jsx(n.code,{children:"psql"}),", the PostgreSQL command-line client:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`learnpg=# \\d students
                 Table "public.students"
  Column   |  Type   | Collation | Nullable | Default
-----------+---------+-----------+----------+---------
 id        | integer |           |          |
 name      | text    |           |          |
 age       | integer |           |          |
 city      | text    |           |          |
 pincode   | text    |           |          |
 joined_on | date    |           |          |
`})}),`
`,e.jsx(n.p,{children:"Graphical clients such as pgAdmin, DBeaver and TablePlus present the same information when the table is selected in their object browser."}),`
`,e.jsx(n.h3,{children:"Choosing between a numeric type and a text type"}),`
`,e.jsx(n.p,{children:"Digits alone do not make a value numeric. The distinguishing test is whether arithmetic on the value is meaningful."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Column"}),e.jsx(n.th,{children:"Meaningful operation"}),e.jsx(n.th,{children:"Appropriate type"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"age"})}),e.jsx(n.td,{children:"Averaging, comparing, adding years"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"integer"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"pincode"})}),e.jsx(n.td,{children:"None — codes are not summed or averaged"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"text"})})]})]})]}),`
`,e.jsxs(n.p,{children:["Storing a code such as ",e.jsx(n.code,{children:"01234"})," as ",e.jsx(n.code,{children:"integer"})," yields the number ",e.jsx(n.code,{children:"1234"}),"; the leading zero is not part of a numeric value and is lost on write. The same reasoning applies to telephone numbers, account numbers and order references."]}),`
`,e.jsx(n.h3,{children:"Identifier case"}),`
`,e.jsx(n.p,{children:"An identifier written without double quotes is folded to lower case before it is stored:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki github-dark-default",style:{backgroundColor:"#0d1117",color:"#e6edf3"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#FF7B72"},children:"CREATE"}),e.jsx(n.span,{style:{color:"#FF7B72"},children:" TABLE"}),e.jsx(n.span,{style:{color:"#D2A8FF"},children:" students"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:" (joinedOn "}),e.jsx(n.span,{style:{color:"#FF7B72"},children:"date"}),e.jsx(n.span,{style:{color:"#E6EDF3"},children:");"})]})})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:` Column   | Type
----------+------
 joinedon | date
`})}),`
`,e.jsxs(n.p,{children:["The column's recorded name is ",e.jsx(n.code,{children:"joinedon"}),". An unquoted reference such as ",e.jsx(n.code,{children:"SELECT joinedOn"})," is folded identically and therefore resolves, whereas the quoted form ",e.jsx(n.code,{children:'SELECT "joinedOn"'})," requests that exact spelling and fails to find it. Lower-case names separated by underscores — ",e.jsx(n.code,{children:"joined_on"})," — avoid the discrepancy entirely and are the prevailing convention."]}),`
`,e.jsxs(n.p,{children:["Case folding of unquoted identifiers is standard SQL behaviour, though the standard folds to upper case and PostgreSQL folds to lower case. ",e.jsx(n.code,{children:"CREATE TABLE"}),", ",e.jsx(n.code,{children:"INSERT"}),", ",e.jsx(n.code,{children:"integer"})," and ",e.jsx(n.code,{children:"date"})," are standard SQL. The ",e.jsx(n.code,{children:"text"})," type is a PostgreSQL extension; the standard equivalent is ",e.jsx(n.code,{children:"varchar(n)"}),", which requires a maximum length."]}),`
`,e.jsx(n.h2,{id:"the-invariant",children:"The invariant"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Every row in a table has exactly the columns the table declares, in the declared order, holding values of the declared types. A write that would violate this is rejected in full, and no part of it is stored."})}),`
`,e.jsx(n.p,{children:"Two consequences follow."}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Consequence"}),e.jsx(n.th,{children:"Detail"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A column belongs to the table, not to a row"}),e.jsx(n.td,{children:"Adding a column adds it to every existing row. A single row cannot carry an extra field of its own."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Invalid data cannot enter"}),e.jsx(n.td,{children:"Reading code may assume the declared shape holds, because no other shape was ever admitted."})]})]})]}),`
`,e.jsx(n.p,{children:"The cost is paid at design time and at change time. The schema must be decided before any data exists, and altering it later affects every row already stored. In exchange, the cost of validating shape and type on every read — and of discovering violations only once they have already been stored — is eliminated."}),`
`,e.jsx(n.h2,{id:"tldr",children:"TL;DR"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A table holds one kind of thing; a column is a labelled slot; a row is one entry with a value for every column."}),`
`,e.jsx(n.li,{children:"The schema is the declared list of column names and their types, and it is enforced when data is written, not when it is read."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"INSERT"})," is checked for value count first and value types second; either failure rejects the entire statement."]}),`
`,e.jsx(n.li,{children:"The catalog records column names, types and positions once, so stored rows contain values only, positionally."}),`
`,e.jsxs(n.li,{children:["A value composed of digits belongs in a numeric type only when arithmetic on it is meaningful; codes belong in ",e.jsx(n.code,{children:"text"}),"."]}),`
`,e.jsx(n.li,{children:"Unquoted identifiers are folded to lower case, which makes lower-case, underscore-separated names the safe convention."}),`
`]})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{i as default,t as outline};
