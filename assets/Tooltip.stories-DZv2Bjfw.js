import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as s}from"./index-CxK8cMMz.js";import{B as T}from"./index-Ul4Esf1s.js";import{B as o}from"./index-Cw7T_5ox.js";import{I as z}from"./info-CKnY7ViN.js";import{S as B}from"./settings-D1wlBKo1.js";import{C as A}from"./circle-question-mark-Dhggi-b3.js";import{U as k}from"./user-BM8Midap.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-BH7Jj7fg.js";import"./utils-_uLxnvdl.js";import"./useOverlayContainer-BKheCA97.js";import"./variants-CTjkuV9j.js";import"./index-ZW2Bszwo.js";import"./index-CF05pSQ2.js";import"./useRipple-BuuTbn0W.js";import"./createLucideIcon-BXJdBs6C.js";const X={title:"Data Display/Tooltip",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","soft"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},side:{control:"select",options:["top","right","bottom","left"]},align:{control:"select",options:["start","center","end"]},showArrow:{control:"boolean"},disabled:{control:"boolean"},delayDuration:{control:"number"}}},n={args:{content:"This is a tooltip",side:"top",align:"center",variant:"solid",color:"default",size:"sm",showArrow:!1,disabled:!1,delayDuration:300,children:e.jsx(o,{variant:"outline",children:"Hover me"})}},r={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-3xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:["solid","soft"].map(t=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{content:`${t} tooltip`,variant:t,color:"default",children:e.jsx(o,{variant:"outline",size:"sm",children:t.charAt(0).toUpperCase()+t.slice(1)})}),e.jsx("span",{className:"text-xs text-text-secondary",children:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:["default","primary","secondary","accent","success","error","warning","info"].map(t=>e.jsx(s,{content:`${t} tooltip`,color:t,variant:"solid",children:e.jsx(T,{color:t,variant:"soft",className:"cursor-default",children:t.charAt(0).toUpperCase()+t.slice(1)})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap items-center gap-6",children:["xs","sm","md","lg"].map(t=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{content:`Size ${t.toUpperCase()} tooltip`,size:t,color:"primary",children:e.jsx(o,{variant:"outline",size:"sm",children:t.toUpperCase()})}),e.jsx("span",{className:"text-xs text-text-secondary",children:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Placement"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:["top","right","bottom","left"].map(t=>e.jsx(s,{content:`Appears on the ${t}`,side:t,color:"primary",showArrow:!0,children:e.jsx(o,{variant:"outline",size:"sm",children:t.charAt(0).toUpperCase()+t.slice(1)})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Arrow"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:["top","right","bottom","left"].map(t=>e.jsx(s,{content:"Arrow tooltip",side:t,color:"primary",showArrow:!0,children:e.jsx(o,{variant:"outline",size:"sm",children:t})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Rich Content"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{content:e.jsxs("div",{className:"space-y-1 max-w-[200px]",children:[e.jsx("p",{className:"font-semibold",children:"Feature details"}),e.jsx("p",{className:"text-xs opacity-80",children:"This feature requires an active subscription. Upgrade your plan to unlock full access."})]}),color:"primary",variant:"solid",side:"right",children:e.jsxs(o,{variant:"ghost",size:"sm",children:[e.jsx(z,{size:16}),"Learn more"]})}),e.jsx(s,{content:e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"font-semibold text-sm",children:"Keyboard shortcut"}),e.jsx("kbd",{className:"text-xs bg-white/20 px-1.5 py-0.5 rounded font-mono",children:"Ctrl + K"})]}),color:"default",variant:"solid",children:e.jsxs(o,{variant:"outline",size:"sm",children:[e.jsx(B,{size:14}),"Settings"]})})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{content:"Enabled tooltip",color:"primary",children:e.jsx(o,{variant:"outline",size:"sm",children:"Enabled"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:"Enabled"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{content:"This tooltip is disabled",color:"primary",disabled:!0,children:e.jsx(o,{variant:"outline",size:"sm",children:"Disabled"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:"Disabled"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{content:"Appears instantly",color:"primary",delayDuration:0,children:e.jsx(o,{variant:"outline",size:"sm",children:"No delay"})}),e.jsx("span",{className:"text-xs text-text-secondary",children:"No delay"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Common Use Cases"}),e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(s,{content:"More information about this field",color:"default",side:"right",children:e.jsx(A,{size:16,className:"text-text-secondary cursor-help"})}),e.jsx(s,{content:"Profile settings",color:"primary",children:e.jsx("button",{className:"w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-surface/80 transition-colors",children:e.jsx(k,{size:14})})}),e.jsx(s,{content:"This action cannot be undone",color:"error",variant:"soft",showArrow:!0,children:e.jsx(o,{color:"error",variant:"soft",size:"sm",children:"Delete"})})]})]})]})},a={args:{content:"Tooltip with arrow",showArrow:!0,color:"primary",side:"top",children:e.jsx(o,{variant:"outline",children:"Hover me"})}},i={args:{content:"Soft variant tooltip",variant:"soft",color:"primary",showArrow:!0,children:e.jsx(o,{variant:"outline",children:"Hover me"})}},l={render:()=>e.jsx("div",{className:"p-10 flex items-center justify-center",children:e.jsx(s,{content:e.jsxs("div",{className:"space-y-1 max-w-[220px]",children:[e.jsx("p",{className:"font-semibold",children:"Pro feature"}),e.jsx("p",{className:"text-xs opacity-80",children:"Upgrade to Pro to unlock this feature and get access to advanced analytics."})]}),color:"primary",side:"right",showArrow:!0,delayDuration:100,children:e.jsxs(o,{variant:"outline",size:"sm",children:[e.jsx(z,{size:14}),"Hover for details"]})})})};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    content: "This is a tooltip",
    side: "top",
    align: "center",
    variant: "solid",
    color: "default",
    size: "sm",
    showArrow: false,
    disabled: false,
    delayDuration: 300,
    children: <Button variant="outline">Hover me</Button>
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,x,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="flex flex-wrap gap-6">
          {(["solid", "soft"] as const).map(variant => <div key={variant} className="flex flex-col items-center gap-2">
              <Tooltip content={\`\${variant} tooltip\`} variant={variant} color="default">
                <Button variant="outline" size="sm">{variant.charAt(0).toUpperCase() + variant.slice(1)}</Button>
              </Tooltip>
              <span className="text-xs text-text-secondary">{variant}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="flex flex-wrap gap-4">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <Tooltip key={color} content={\`\${color} tooltip\`} color={color} variant="solid">
              <Badge color={color} variant="soft" className="cursor-default">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Badge>
            </Tooltip>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-6">
          {(["xs", "sm", "md", "lg"] as const).map(size => <div key={size} className="flex flex-col items-center gap-2">
              <Tooltip content={\`Size \${size.toUpperCase()} tooltip\`} size={size} color="primary">
                <Button variant="outline" size="sm">{size.toUpperCase()}</Button>
              </Tooltip>
              <span className="text-xs text-text-secondary">{size}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Placement</h3>
        <div className="flex flex-wrap gap-4">
          {(["top", "right", "bottom", "left"] as const).map(side => <Tooltip key={side} content={\`Appears on the \${side}\`} side={side} color="primary" showArrow>
              <Button variant="outline" size="sm">{side.charAt(0).toUpperCase() + side.slice(1)}</Button>
            </Tooltip>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Arrow</h3>
        <div className="flex flex-wrap gap-4">
          {(["top", "right", "bottom", "left"] as const).map(side => <Tooltip key={side} content="Arrow tooltip" side={side} color="primary" showArrow>
              <Button variant="outline" size="sm">{side}</Button>
            </Tooltip>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Rich Content</h3>
        <div className="flex flex-wrap gap-4">
          <Tooltip content={<div className="space-y-1 max-w-[200px]">
                <p className="font-semibold">Feature details</p>
                <p className="text-xs opacity-80">This feature requires an active subscription. Upgrade your plan to unlock full access.</p>
              </div>} color="primary" variant="solid" side="right">
            <Button variant="ghost" size="sm">
              <Info size={16} />
              Learn more
            </Button>
          </Tooltip>

          <Tooltip content={<div className="space-y-1">
                <p className="font-semibold text-sm">Keyboard shortcut</p>
                <kbd className="text-xs bg-white/20 px-1.5 py-0.5 rounded font-mono">Ctrl + K</kbd>
              </div>} color="default" variant="solid">
            <Button variant="outline" size="sm">
              <Settings size={14} />
              Settings
            </Button>
          </Tooltip>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-2">
            <Tooltip content="Enabled tooltip" color="primary">
              <Button variant="outline" size="sm">Enabled</Button>
            </Tooltip>
            <span className="text-xs text-text-secondary">Enabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tooltip content="This tooltip is disabled" color="primary" disabled>
              <Button variant="outline" size="sm">Disabled</Button>
            </Tooltip>
            <span className="text-xs text-text-secondary">Disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tooltip content="Appears instantly" color="primary" delayDuration={0}>
              <Button variant="outline" size="sm">No delay</Button>
            </Tooltip>
            <span className="text-xs text-text-secondary">No delay</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Common Use Cases</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Tooltip content="More information about this field" color="default" side="right">
            <HelpCircle size={16} className="text-text-secondary cursor-help" />
          </Tooltip>

          <Tooltip content="Profile settings" color="primary">
            <button className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-surface/80 transition-colors">
              <User size={14} />
            </button>
          </Tooltip>

          <Tooltip content="This action cannot be undone" color="error" variant="soft" showArrow>
            <Button color="error" variant="soft" size="sm">Delete</Button>
          </Tooltip>
        </div>
      </section>
    </div>
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var u,f,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    content: "Tooltip with arrow",
    showArrow: true,
    color: "primary",
    side: "top",
    children: <Button variant="outline">Hover me</Button>
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,g,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    content: "Soft variant tooltip",
    variant: "soft",
    color: "primary",
    showArrow: true,
    children: <Button variant="outline">Hover me</Button>
  }
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,j,N;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="p-10 flex items-center justify-center">
      <Tooltip content={<div className="space-y-1 max-w-[220px]">
            <p className="font-semibold">Pro feature</p>
            <p className="text-xs opacity-80">Upgrade to Pro to unlock this feature and get access to advanced analytics.</p>
          </div>} color="primary" side="right" showArrow delayDuration={100}>
        <Button variant="outline" size="sm">
          <Info size={14} />
          Hover for details
        </Button>
      </Tooltip>
    </div>
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const Y=["Playground","Showcase","WithArrow","SoftVariant","RichContent"];export{n as Playground,l as RichContent,r as Showcase,i as SoftVariant,a as WithArrow,Y as __namedExportsOrder,X as default};
