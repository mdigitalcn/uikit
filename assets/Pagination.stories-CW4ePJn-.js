import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-ZH-6pyQh.js";import{P as s}from"./index-cT67XEEz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-_uLxnvdl.js";import"./useRipple-BuuTbn0W.js";import"./variants-CTjkuV9j.js";import"./chevron-left-BPVU9fuB.js";import"./createLucideIcon-BXJdBs6C.js";import"./chevron-right-DY5KYsnV.js";import"./chevrons-right-Bto5ffh9.js";import"./ellipsis-BCji1NXI.js";const F={title:"Navigation/Pagination",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","soft"]},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},showFirstLastButtons:{control:"boolean"},showSizeChanger:{control:"boolean"},showQuickJumper:{control:"boolean"},simple:{control:"boolean"},disabled:{control:"boolean"}}},r={args:{total:100,defaultCurrent:1,pageSize:10,size:"md",variant:"default",color:"primary"}},f=()=>{const[t,a]=l.useState(1),[c,g]=l.useState(10);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{total:200,current:t,pageSize:c,onChange:(i,n)=>{a(i),g(n)},showSizeChanger:!0,showQuickJumper:!0,showFirstLastButtons:!0,showTotal:(i,n)=>`${n[0]}-${n[1]} of ${i} items`}),e.jsxs("p",{className:"text-xs text-text-secondary",children:["Page: ",t," | Page Size: ",c]})]})},o={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-3xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"space-y-4",children:["default","solid","soft"].map(t=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:t}),e.jsx(s,{total:100,defaultCurrent:3,variant:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:["default","primary","secondary","accent","success","error","warning","info"].map(t=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-16 shrink-0",children:t}),e.jsx(s,{total:100,defaultCurrent:3,color:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"space-y-4",children:["xs","sm","md","lg"].map(t=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:t}),e.jsx(s,{total:100,defaultCurrent:3,size:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With First / Last Buttons"}),e.jsx(s,{total:200,defaultCurrent:5,showFirstLastButtons:!0})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Size Changer"}),e.jsx(s,{total:200,defaultCurrent:1,showSizeChanger:!0})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Quick Jumper"}),e.jsx(s,{total:200,defaultCurrent:1,showQuickJumper:!0})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Show Total"}),e.jsx(s,{total:200,defaultCurrent:3,showTotal:(t,a)=>`${a[0]}-${a[1]} of ${t} items`})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Simple Mode"}),e.jsx(s,{total:100,defaultCurrent:4,simple:!0})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"All Features"}),e.jsx(s,{total:500,defaultCurrent:3,showFirstLastButtons:!0,showSizeChanger:!0,showQuickJumper:!0,showTotal:(t,a)=>`${a[0]}-${a[1]} of ${t} results`})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Controlled"}),e.jsx(f,{})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"disabled"}),e.jsx(s,{total:100,defaultCurrent:3,disabled:!0})]})})]})]})};var d,m,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    total: 100,
    defaultCurrent: 1,
    pageSize: 10,
    size: "md",
    variant: "default",
    color: "primary"
  }
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,p,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="space-y-4">
          {(["default", "solid", "soft"] as const).map(v => <div key={v}>
              <p className="text-xs text-text-secondary mb-2">{v}</p>
              <Pagination total={100} defaultCurrent={3} variant={v} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-3">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(c => <div key={c} className="flex items-center gap-4">
                <span className="text-xs text-text-secondary w-16 shrink-0">{c}</span>
                <Pagination total={100} defaultCurrent={3} color={c} />
              </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s}>
              <p className="text-xs text-text-secondary mb-2">{s}</p>
              <Pagination total={100} defaultCurrent={3} size={s} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With First / Last Buttons</h3>
        <Pagination total={200} defaultCurrent={5} showFirstLastButtons />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Size Changer</h3>
        <Pagination total={200} defaultCurrent={1} showSizeChanger />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Quick Jumper</h3>
        <Pagination total={200} defaultCurrent={1} showQuickJumper />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Show Total</h3>
        <Pagination total={200} defaultCurrent={3} showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Simple Mode</h3>
        <Pagination total={100} defaultCurrent={4} simple />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">All Features</h3>
        <Pagination total={500} defaultCurrent={3} showFirstLastButtons showSizeChanger showQuickJumper showTotal={(t, range) => \`\${range[0]}-\${range[1]} of \${t} results\`} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Controlled</h3>
        <ControlledDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-2">disabled</p>
            <Pagination total={100} defaultCurrent={3} disabled />
          </div>
        </div>
      </section>
    </div>
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const B=["Playground","Showcase"];export{r as Playground,o as Showcase,B as __namedExportsOrder,F as default};
