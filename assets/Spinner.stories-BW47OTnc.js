import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as a}from"./index-CF05pSQ2.js";import"./utils-_uLxnvdl.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-CTjkuV9j.js";const b={title:"Feedback/Spinner",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["ring","dots","pulse"]},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},label:{control:"text"}}},n={args:{size:"md",color:"primary",variant:"ring"}},c=["default","primary","secondary","accent","success","error","warning","info"],t={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"flex flex-wrap gap-10 items-end",children:["ring","dots","pulse"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{variant:s,color:"primary",size:"md"}),e.jsx("span",{className:"text-xs text-text-secondary",children:s})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-6 items-end",children:c.map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{color:s}),e.jsx("span",{className:"text-xs text-text-secondary",children:s})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap gap-8 items-end",children:["xs","sm","md","lg"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{size:s,color:"primary"}),e.jsx("span",{className:"text-xs text-text-secondary",children:s})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants x Colors"}),e.jsx("div",{className:"space-y-6",children:["ring","dots","pulse"].map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-3 capitalize",children:s}),e.jsx("div",{className:"flex flex-wrap gap-6 items-center",children:c.map(r=>e.jsxs("div",{className:"flex flex-col items-center gap-1.5",children:[e.jsx(a,{variant:s,color:r,size:"sm"}),e.jsx("span",{className:"text-xs text-text-secondary",children:r})]},r))})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Label"}),e.jsxs("div",{className:"flex flex-wrap gap-8",children:[e.jsx(a,{label:"Loading...",color:"primary"}),e.jsx(a,{label:"Saving...",color:"success",variant:"ring"}),e.jsx(a,{label:"Uploading...",color:"info",size:"lg",variant:"ring"}),e.jsx(a,{label:"Processing",color:"warning",variant:"dots"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"In Context"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center justify-center h-32 rounded-lg border border-border border-dashed",children:e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(a,{size:"lg",color:"primary"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Loading content..."})]})}),e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-surface",children:[e.jsx(a,{size:"sm",color:"info"}),e.jsx("span",{className:"text-sm text-text-secondary",children:"Syncing data with server..."})]}),e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 rounded-lg border border-success/30 bg-success/5",children:[e.jsx(a,{size:"sm",color:"success"}),e.jsx("span",{className:"text-sm text-success",children:"Saving changes..."})]})]})]})]})};var i,l,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: "md",
    color: "primary",
    variant: "ring"
  }
}`,...(o=(l=n.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var d,x,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="flex flex-wrap gap-10 items-end">
          {(["ring", "dots", "pulse"] as const).map(v => <div key={v} className="flex flex-col items-center gap-2">
              <Spinner variant={v} color="primary" size="md" />
              <span className="text-xs text-text-secondary">{v}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="flex flex-wrap gap-6 items-end">
          {colors.map(c => <div key={c} className="flex flex-col items-center gap-2">
              <Spinner color={c} />
              <span className="text-xs text-text-secondary">{c}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap gap-8 items-end">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s} className="flex flex-col items-center gap-2">
              <Spinner size={s} color="primary" />
              <span className="text-xs text-text-secondary">{s}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants x Colors</h3>
        <div className="space-y-6">
          {(["ring", "dots", "pulse"] as const).map(v => <div key={v}>
              <p className="text-xs text-text-secondary mb-3 capitalize">{v}</p>
              <div className="flex flex-wrap gap-6 items-center">
                {colors.map(c => <div key={c} className="flex flex-col items-center gap-1.5">
                    <Spinner variant={v} color={c} size="sm" />
                    <span className="text-xs text-text-secondary">{c}</span>
                  </div>)}
              </div>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Label</h3>
        <div className="flex flex-wrap gap-8">
          <Spinner label="Loading..." color="primary" />
          <Spinner label="Saving..." color="success" variant="ring" />
          <Spinner label="Uploading..." color="info" size="lg" variant="ring" />
          <Spinner label="Processing" color="warning" variant="dots" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">In Context</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-center h-32 rounded-lg border border-border border-dashed">
            <div className="flex flex-col items-center gap-3">
              <Spinner size="lg" color="primary" />
              <p className="text-sm text-text-secondary">Loading content...</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-surface">
            <Spinner size="sm" color="info" />
            <span className="text-sm text-text-secondary">Syncing data with server...</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-success/30 bg-success/5">
            <Spinner size="sm" color="success" />
            <span className="text-sm text-success">Saving changes...</span>
          </div>
        </div>
      </section>
    </div>
}`,...(m=(x=t.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const N=["Playground","Showcase"];export{n as Playground,t as Showcase,N as __namedExportsOrder,b as default};
