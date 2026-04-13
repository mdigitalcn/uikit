import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as b,a as y}from"./utils-_uLxnvdl.js";import{R as N}from"./index-ZH-6pyQh.js";import{c as v}from"./variants-CTjkuV9j.js";import"./_commonjsHelpers-CqkleIqs.js";const j=y("pointer-events-none min-w-4 min-h-3.5 border inline-flex align-middle w-fit items-center justify-center gap-1 rounded-sm font-sans font-medium select-none",{variants:{variant:{solid:"bg-slot border border-slot text-slot-fg",outline:"bg-background border border-slot text-slot",soft:"bg-slot-10 border border-slot-20 text-slot"},color:v,size:{xs:"h-3.5 p-0.5 text-[9px]",sm:"h-4 p-0.5 text-xs",md:"h-4.5 px-1.5 text-sm",lg:"h-5 px-2 text-sm"}},defaultVariants:{variant:"outline",color:"default",size:"sm"}}),s=N.memo(({variant:t="outline",color:n="default",size:r="sm",className:d,children:h,...f})=>e.jsx("kbd",{"data-slot":"root",className:b("kbd_root",j({variant:t,color:n,size:r}),"[&_svg:not([class*='size-'])]:size-3",d),...f,children:h}));s.displayName="Kbd";s.__docgenInfo={description:"",methods:[],displayName:"Kbd",props:{variant:{defaultValue:{value:"'outline'",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};const C={title:"General/Kbd",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outline","soft"]},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]}}},a={args:{children:"K",variant:"outline",size:"sm",color:"default"}},c={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:["solid","outline","soft"].map(t=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{variant:t,children:"K"}),e.jsx("span",{className:"text-xs text-text-secondary",children:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:["default","primary","secondary","accent","success","warning","info"].map(t=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{color:t,children:"K"}),e.jsx("span",{className:"text-xs text-text-secondary",children:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex items-center gap-4",children:["xs","sm","md","lg"].map(t=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:t,children:"K"}),e.jsx("span",{className:"text-xs text-text-secondary",children:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Common Keys"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["Ctrl","Alt","Shift","Enter","Esc","Tab","Space","Backspace","Delete","Home","End","PgUp","PgDn"].map(t=>e.jsx(s,{children:t},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Keyboard Combinations"}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s,{children:"Ctrl"}),e.jsx("span",{className:"text-text-secondary text-xs",children:"+"}),e.jsx(s,{children:"K"}),e.jsx("span",{className:"text-xs text-text-secondary ml-2",children:"Search"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s,{children:"Ctrl"}),e.jsx("span",{className:"text-text-secondary text-xs",children:"+"}),e.jsx(s,{children:"Shift"}),e.jsx("span",{className:"text-text-secondary text-xs",children:"+"}),e.jsx(s,{children:"P"}),e.jsx("span",{className:"text-xs text-text-secondary ml-2",children:"Command palette"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s,{children:"Ctrl"}),e.jsx("span",{className:"text-text-secondary text-xs",children:"+"}),e.jsx(s,{children:"Z"}),e.jsx("span",{className:"text-xs text-text-secondary ml-2",children:"Undo"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(s,{children:"Ctrl"}),e.jsx("span",{className:"text-text-secondary text-xs",children:"+"}),e.jsx(s,{children:"Shift"}),e.jsx("span",{className:"text-text-secondary text-xs",children:"+"}),e.jsx(s,{children:"Z"}),e.jsx("span",{className:"text-xs text-text-secondary ml-2",children:"Redo"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Inline in Text"}),e.jsxs("div",{className:"space-y-2 text-sm text-text-secondary max-w-md",children:[e.jsxs("p",{children:["Press ",e.jsx(s,{children:"Ctrl"})," + ",e.jsx(s,{children:"K"})," to open the search dialog."]}),e.jsxs("p",{children:["Use ",e.jsx(s,{children:"Up"})," and ",e.jsx(s,{children:"Down"})," to navigate, ",e.jsx(s,{children:"Enter"})," to confirm."]}),e.jsxs("p",{children:["Press ",e.jsx(s,{children:"Esc"})," to dismiss or ",e.jsx(s,{children:"Tab"})," to move to the next field."]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Shortcut Reference"}),e.jsx("div",{className:"border border-border rounded-lg divide-y divide-border max-w-sm",children:[{keys:["Ctrl","N"],desc:"New document"},{keys:["Ctrl","O"],desc:"Open file"},{keys:["Ctrl","S"],desc:"Save"},{keys:["Ctrl","Shift","S"],desc:"Save as"},{keys:["Ctrl","Z"],desc:"Undo"},{keys:["Ctrl","Shift","Z"],desc:"Redo"},{keys:["Ctrl","F"],desc:"Find"}].map(({keys:t,desc:n})=>e.jsxs("div",{className:"flex items-center justify-between px-4 py-2",children:[e.jsx("span",{className:"text-sm text-text-secondary",children:n}),e.jsx("div",{className:"flex items-center gap-1",children:t.map((r,d)=>e.jsx(s,{size:"xs",children:r},d))})]},n))})]})]})};var l,i,x;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "K",
    variant: "outline",
    size: "sm",
    color: "default"
  }
}`,...(x=(i=a.parameters)==null?void 0:i.docs)==null?void 0:x.source}}};var o,m,p;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="flex flex-wrap gap-4">
          {(["solid", "outline", "soft"] as const).map(v => <div key={v} className="flex flex-col items-center gap-2">
              <Kbd variant={v}>K</Kbd>
              <span className="text-xs text-text-secondary">{v}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-4">
          {(["default", "primary", "secondary", "accent", "success", "warning", "info"] as const).map(c => <div key={c} className="flex flex-col items-center gap-2">
                <Kbd color={c}>K</Kbd>
                <span className="text-xs text-text-secondary">{c}</span>
              </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex items-center gap-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s} className="flex flex-col items-center gap-2">
              <Kbd size={s}>K</Kbd>
              <span className="text-xs text-text-secondary">{s}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Common Keys
        </h3>
        <div className="flex flex-wrap gap-2">
          {["Ctrl", "Alt", "Shift", "Enter", "Esc", "Tab", "Space", "Backspace", "Delete", "Home", "End", "PgUp", "PgDn"].map(k => <Kbd key={k}>{k}</Kbd>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Keyboard Combinations
        </h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>K</Kbd>
            <span className="text-xs text-text-secondary ml-2">Search</span>
          </div>
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>Shift</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>P</Kbd>
            <span className="text-xs text-text-secondary ml-2">Command palette</span>
          </div>
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>Z</Kbd>
            <span className="text-xs text-text-secondary ml-2">Undo</span>
          </div>
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>Shift</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>Z</Kbd>
            <span className="text-xs text-text-secondary ml-2">Redo</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Inline in Text
        </h3>
        <div className="space-y-2 text-sm text-text-secondary max-w-md">
          <p>
            Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to open the search dialog.
          </p>
          <p>
            Use <Kbd>Up</Kbd> and <Kbd>Down</Kbd> to navigate, <Kbd>Enter</Kbd> to confirm.
          </p>
          <p>
            Press <Kbd>Esc</Kbd> to dismiss or <Kbd>Tab</Kbd> to move to the next field.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Shortcut Reference
        </h3>
        <div className="border border-border rounded-lg divide-y divide-border max-w-sm">
          {[{
          keys: ["Ctrl", "N"],
          desc: "New document"
        }, {
          keys: ["Ctrl", "O"],
          desc: "Open file"
        }, {
          keys: ["Ctrl", "S"],
          desc: "Save"
        }, {
          keys: ["Ctrl", "Shift", "S"],
          desc: "Save as"
        }, {
          keys: ["Ctrl", "Z"],
          desc: "Undo"
        }, {
          keys: ["Ctrl", "Shift", "Z"],
          desc: "Redo"
        }, {
          keys: ["Ctrl", "F"],
          desc: "Find"
        }].map(({
          keys,
          desc
        }) => <div key={desc} className="flex items-center justify-between px-4 py-2">
              <span className="text-sm text-text-secondary">{desc}</span>
              <div className="flex items-center gap-1">
                {keys.map((k, i) => <Kbd key={i} size="xs">
                    {k}
                  </Kbd>)}
              </div>
            </div>)}
        </div>
      </section>
    </div>
}`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const S=["Playground","Showcase"];export{a as Playground,c as Showcase,S as __namedExportsOrder,C as default};
