import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as s}from"./index-Ul4Esf1s.js";import{S as p}from"./star-CXKHNDnr.js";import{M as g}from"./mail-1HDD9Lg3.js";import{C as h}from"./circle-alert-C1u21Jbx.js";import{B as o}from"./bell-BD3KA5A_.js";import"./utils-_uLxnvdl.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-CTjkuV9j.js";import"./createLucideIcon-BXJdBs6C.js";const P={title:"Data Display/Badge",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","outline","soft"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},shape:{control:"select",options:["rounded","pill","circle"]},placement:{control:"select",options:["top-right","top-left","bottom-right","bottom-left"]},dot:{control:"boolean"},count:{control:"number"},maxCount:{control:"number"},showZero:{control:"boolean"},processing:{control:"boolean"},invisible:{control:"boolean"},standalone:{control:"boolean"}}},r={args:{children:"Badge",variant:"solid",color:"primary",size:"sm",shape:"rounded"}},f=["default","primary","secondary","accent","success","error","warning","info"],n={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants x Colors"}),["default","solid","outline","soft"].map(t=>e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2 capitalize",children:t}),e.jsx("div",{className:"flex flex-wrap gap-2",children:f.map(a=>e.jsx(s,{color:a,variant:t,children:a},a))})]},t))]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap gap-3 items-center",children:["xs","sm","md","lg"].map(t=>e.jsxs(s,{size:t,color:"primary",children:["Size ",t]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Shapes"}),e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(s,{shape:"rounded",color:"primary",children:"Rounded"}),e.jsx(s,{shape:"pill",color:"accent",children:"Pill"}),e.jsx(s,{shape:"circle",color:"success",children:"9"}),e.jsx(s,{shape:"circle",color:"error",children:"99+"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Icons"}),e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(s,{icon:e.jsx(p,{}),color:"warning",children:"Featured"}),e.jsx(s,{icon:e.jsx(g,{}),color:"info",children:"12 messages"}),e.jsx(s,{icon:e.jsx(h,{}),color:"error",children:"Critical"}),e.jsx(s,{icon:e.jsx(o,{}),color:"primary",variant:"soft",children:"Alert"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Dot Indicator"}),e.jsxs("div",{className:"flex items-center gap-4",children:[["primary","success","error","warning","info"].map(t=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{dot:!0,color:t}),e.jsx("span",{className:"text-xs text-text-secondary",children:t})]},t)),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{dot:!0,color:"error",processing:!0}),e.jsx("span",{className:"text-xs text-text-secondary",children:"processing"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Floating — Count & Overflow"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{count:5,color:"primary",children:e.jsx("div",{className:"w-10 h-10 rounded-lg bg-surface border border-border"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:"count: 5"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{count:99,color:"error",children:e.jsx("div",{className:"w-10 h-10 rounded-lg bg-surface border border-border"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:"count: 99"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{count:150,maxCount:99,color:"warning",children:e.jsx("div",{className:"w-10 h-10 rounded-lg bg-surface border border-border"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:"overflow 99+"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{count:0,showZero:!0,color:"info",children:e.jsx("div",{className:"w-10 h-10 rounded-lg bg-surface border border-border"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:"showZero"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Placement Options"}),e.jsx("div",{className:"flex items-center gap-10",children:["top-right","top-left","bottom-right","bottom-left"].map(t=>e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(s,{count:3,color:"primary",placement:t,children:e.jsx("div",{className:"w-10 h-10 rounded-lg bg-surface border border-border"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Processing Animation"}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{count:1,color:"error",processing:!0,children:e.jsx(o,{className:"size-6 text-text-secondary"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:"pulsing count"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{dot:!0,color:"success",processing:!0,children:e.jsx("div",{className:"w-10 h-10 rounded-full bg-surface border border-border"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:"pulsing dot"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Invisible State"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{count:5,color:"primary",invisible:!1,children:e.jsx("div",{className:"w-10 h-10 rounded-lg bg-surface border border-border"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:"visible"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{count:5,color:"primary",invisible:!0,children:e.jsx("div",{className:"w-10 h-10 rounded-lg bg-surface border border-border"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:"invisible"})]})]})]})]})};var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Badge",
    variant: "solid",
    color: "primary",
    size: "sm",
    shape: "rounded"
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,x,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants x Colors</h3>
        {(["default", "solid", "outline", "soft"] as const).map(v => <div key={v} className="mb-4">
            <p className="text-xs text-text-secondary mb-2 capitalize">{v}</p>
            <div className="flex flex-wrap gap-2">
              {colors.map(c => <Badge key={c} color={c} variant={v}>
                  {c}
                </Badge>)}
            </div>
          </div>)}
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex flex-wrap gap-3 items-center">
          {(["xs", "sm", "md", "lg"] as const).map(s => <Badge key={s} size={s} color="primary">
              Size {s}
            </Badge>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Shapes</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <Badge shape="rounded" color="primary">Rounded</Badge>
          <Badge shape="pill" color="accent">Pill</Badge>
          <Badge shape="circle" color="success">9</Badge>
          <Badge shape="circle" color="error">99+</Badge>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <Badge icon={<Star />} color="warning">Featured</Badge>
          <Badge icon={<Mail />} color="info">12 messages</Badge>
          <Badge icon={<AlertCircle />} color="error">Critical</Badge>
          <Badge icon={<Bell />} color="primary" variant="soft">Alert</Badge>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Dot Indicator</h3>
        <div className="flex items-center gap-4">
          {(["primary", "success", "error", "warning", "info"] as const).map(color => <div key={color} className="flex flex-col items-center gap-1">
              <Badge dot color={color} />
              <span className="text-xs text-text-secondary">{color}</span>
            </div>)}
          <div className="flex flex-col items-center gap-1">
            <Badge dot color="error" processing />
            <span className="text-xs text-text-secondary">processing</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Floating — Count &amp; Overflow</h3>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Badge count={5} color="primary">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">count: 5</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge count={99} color="error">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">count: 99</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge count={150} maxCount={99} color="warning">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">overflow 99+</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge count={0} showZero color="info">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">showZero</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Placement Options</h3>
        <div className="flex items-center gap-10">
          {(["top-right", "top-left", "bottom-right", "bottom-left"] as const).map(placement => <div key={placement} className="flex flex-col items-center gap-3">
              <Badge count={3} color="primary" placement={placement}>
                <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
              </Badge>
              <span className="text-xs text-text-secondary">{placement}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Processing Animation</h3>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Badge count={1} color="error" processing>
              <Bell className="size-6 text-text-secondary" />
            </Badge>
            <span className="text-xs text-text-secondary">pulsing count</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge dot color="success" processing>
              <div className="w-10 h-10 rounded-full bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">pulsing dot</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Invisible State</h3>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Badge count={5} color="primary" invisible={false}>
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">visible</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge count={5} color="primary" invisible>
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">invisible</span>
          </div>
        </div>
      </section>
    </div>
}`,...(m=(x=n.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const A=["Playground","Showcase"];export{r as Playground,n as Showcase,A as __namedExportsOrder,P as default};
