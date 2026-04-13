import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as m,a as V}from"./utils-_uLxnvdl.js";import{R as f}from"./index-ZH-6pyQh.js";import{c as P}from"./variants-CTjkuV9j.js";import{X as E}from"./x-ByohdK2B.js";import{S as B}from"./star-CXKHNDnr.js";import{C as R}from"./check-CKCh4cDT.js";import{Z as _}from"./zap-Bp22WUqo.js";import{C as L}from"./circle-alert-C1u21Jbx.js";import{L as q}from"./lock-D-iRFELD.js";import{G as A}from"./globe-TCM94dGE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const I=V("inline-flex items-center gap-1.5 whitespace-nowrap [--_radius:var(--radius-tag)] rounded-slot font-medium transition-colors",{variants:{variant:{default:"bg-slot border border-slot text-slot-fg",solid:"bg-slot border border-slot text-slot-fg hover:bg-slot-90",outline:"border border-slot text-slot hover:bg-slot-10",soft:"bg-slot-10 text-slot"},color:P,size:{xs:"text-(--tag-font-size-xs) px-(--tag-padding-x-xs) py-(--tag-padding-y-xs)",sm:"text-(--tag-font-size-sm) px-(--tag-padding-x-sm) py-(--tag-padding-y-sm)",md:"text-(--tag-font-size-md) px-(--tag-padding-x-md) py-(--tag-padding-y-md)",lg:"text-(--tag-font-size-lg) px-(--tag-padding-x-lg) py-(--tag-padding-y-lg)"}},defaultVariants:{variant:"solid",color:"primary",size:"sm"}}),u={xs:"size-(--tag-icon-size-xs)",sm:"size-(--tag-icon-size-sm)",md:"size-(--tag-icon-size-md)",lg:"size-(--tag-icon-size-lg)"},t=f.memo(({children:a,color:i="primary",variant:k="solid",size:x="sm",closable:l=!1,onClose:s,icon:d,className:N,classNames:n,onClick:r,disableKeyboardRemoval:c=!1,...z})=>{const S=o=>{o.stopPropagation(),s==null||s(o)},D=o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),s==null||s(o))},C=o=>{if(!c&&l&&(o.key==="Delete"||o.key==="Backspace")){o.preventDefault(),o.stopPropagation(),s==null||s(o);return}r&&(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),r(o))};return e.jsxs("span",{className:m("tag_root",I({variant:k,color:i,size:x}),(r||l)&&"cursor-pointer",(r||!c&&l)&&"focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slot ring-offset-background",n==null?void 0:n.root,N),onClick:r,onKeyDown:r||!c&&l?C:void 0,role:r||!c&&l?"button":void 0,tabIndex:r||!c&&l?0:void 0,"aria-label":(r||!c&&l)&&typeof a=="string"?a:void 0,"data-slot":"root",...z,children:[d&&e.jsx("span",{className:m("inline-flex items-center justify-center flex-shrink-0",u[x]),children:f.isValidElement(d)?f.cloneElement(d,{className:m("w-full h-full",d.props.className)}):d}),e.jsx("span",{className:m("tag_content",n==null?void 0:n.content),"data-slot":"content",children:a}),l&&e.jsx("button",{type:"button",onClick:S,onKeyDown:D,className:m("tag_closeButton","inline-flex items-center justify-center flex-shrink-0 cursor-pointer rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-1",u[x],n==null?void 0:n.closeButton),"aria-label":typeof a=="string"?`Remove ${a}`:"Remove tag",tabIndex:c?0:-1,"data-slot":"closeButton",children:e.jsx(E,{className:"w-full h-full"})})]})});t.displayName="Tag";t.__docgenInfo={description:`Tag Component

An interactive badge variant that can be used for labels, categories, or removable items.
Supports multiple variants, colors, sizes, icons, and close functionality.

@component
@example
// Basic tag
<Tag>Label</Tag>

@example
// Tag with close button
<Tag closable onClose={(e) => console.log('Tag removed')}>
  Removable Tag
</Tag>

@example
// Tag with icon
<Tag icon={<Star />} color="warning">
  Featured
</Tag>

@example
// Different variants
<Tag variant="outline" color="success">Outline Tag</Tag>
<Tag variant="soft" color="info">Soft Tag</Tag>

@example
// Disable keyboard removal (Backspace/Delete on tag)
<Tag closable disableKeyboardRemoval onClose={(e) => console.log('Tag removed')}>
  No keyboard removal
</Tag>

@example
// Tag with keyboard removal enabled (focus on tag and press Delete/Backspace)
<Tag closable onClose={(e) => console.log('Tag removed')}>
  Press Delete or Backspace to remove
</Tag>

@param {TagProps} props - Component props
@returns {JSX.Element} Rendered tag component`,methods:[],displayName:"Tag",props:{color:{defaultValue:{value:"'primary'",computed:!1},required:!1},variant:{defaultValue:{value:"'solid'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},disableKeyboardRemoval:{defaultValue:{value:"false",computed:!1},required:!1}}};const Y={title:"Data Display/Tag",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","outline","soft"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},closable:{control:"boolean"},disableKeyboardRemoval:{control:"boolean"}}},p={args:{children:"Tag Label",variant:"soft",color:"primary",size:"sm",closable:!1}},b=["default","primary","secondary","accent","success","error","warning","info"],g={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants x Colors"}),["default","solid","outline","soft"].map(a=>e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2 capitalize",children:a}),e.jsx("div",{className:"flex flex-wrap gap-2",children:b.map(i=>e.jsx(t,{color:i,variant:a,children:i},i))})]},a))]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap gap-2 items-center",children:["xs","sm","md","lg"].map(a=>e.jsx(t,{size:a,color:"primary",variant:"solid",children:a},a))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Icons"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{icon:e.jsx(B,{}),color:"warning",variant:"soft",children:"Featured"}),e.jsx(t,{icon:e.jsx(R,{}),color:"success",variant:"soft",children:"Verified"}),e.jsx(t,{icon:e.jsx(_,{}),color:"accent",variant:"solid",children:"Pro"}),e.jsx(t,{icon:e.jsx(L,{}),color:"error",variant:"outline",children:"Warning"}),e.jsx(t,{icon:e.jsx(q,{}),color:"info",variant:"soft",children:"Private"}),e.jsx(t,{icon:e.jsx(A,{}),color:"secondary",variant:"soft",children:"Public"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Closable"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:b.slice(1).map(a=>e.jsx(t,{color:a,variant:"soft",closable:!0,onClose:()=>{},children:a},a))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Clickable"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{color:"primary",variant:"outline",onClick:()=>{},children:"React"}),e.jsx(t,{color:"secondary",variant:"outline",onClick:()=>{},children:"TypeScript"}),e.jsx(t,{color:"accent",variant:"outline",onClick:()=>{},children:"Tailwind CSS"}),e.jsx(t,{color:"info",variant:"outline",onClick:()=>{},children:"Vite"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Tag Cloud Example"}),e.jsx("div",{className:"flex flex-wrap gap-2 p-4 bg-surface rounded-lg border border-border",children:[{label:"Design System",color:"primary"},{label:"Components",color:"secondary"},{label:"Accessibility",color:"success"},{label:"Dark Mode",color:"accent"},{label:"TypeScript",color:"info"},{label:"React 19",color:"warning"},{label:"Deprecated",color:"error"}].map(({label:a,color:i})=>e.jsx(t,{color:i,variant:"soft",closable:!0,onClose:()=>{},children:a},a))})]})]})};var v,y,h;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Tag Label",
    variant: "soft",
    color: "primary",
    size: "sm",
    closable: false
  }
}`,...(h=(y=p.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var T,j,w;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants x Colors</h3>
        {(["default", "solid", "outline", "soft"] as const).map(v => <div key={v} className="mb-4">
            <p className="text-xs text-text-secondary mb-2 capitalize">{v}</p>
            <div className="flex flex-wrap gap-2">
              {colors.map(c => <Tag key={c} color={c} variant={v}>
                  {c}
                </Tag>)}
            </div>
          </div>)}
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex flex-wrap gap-2 items-center">
          {(["xs", "sm", "md", "lg"] as const).map(s => <Tag key={s} size={s} color="primary" variant="solid">
              {s}
            </Tag>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Tag icon={<Star />} color="warning" variant="soft">Featured</Tag>
          <Tag icon={<Check />} color="success" variant="soft">Verified</Tag>
          <Tag icon={<Zap />} color="accent" variant="solid">Pro</Tag>
          <Tag icon={<AlertCircle />} color="error" variant="outline">Warning</Tag>
          <Tag icon={<Lock />} color="info" variant="soft">Private</Tag>
          <Tag icon={<Globe />} color="secondary" variant="soft">Public</Tag>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Closable</h3>
        <div className="flex flex-wrap gap-2">
          {colors.slice(1).map(c => <Tag key={c} color={c} variant="soft" closable onClose={() => {}}>
              {c}
            </Tag>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Clickable</h3>
        <div className="flex flex-wrap gap-2">
          <Tag color="primary" variant="outline" onClick={() => {}}>React</Tag>
          <Tag color="secondary" variant="outline" onClick={() => {}}>TypeScript</Tag>
          <Tag color="accent" variant="outline" onClick={() => {}}>Tailwind CSS</Tag>
          <Tag color="info" variant="outline" onClick={() => {}}>Vite</Tag>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Tag Cloud Example</h3>
        <div className="flex flex-wrap gap-2 p-4 bg-surface rounded-lg border border-border">
          {[{
          label: "Design System",
          color: "primary" as const
        }, {
          label: "Components",
          color: "secondary" as const
        }, {
          label: "Accessibility",
          color: "success" as const
        }, {
          label: "Dark Mode",
          color: "accent" as const
        }, {
          label: "TypeScript",
          color: "info" as const
        }, {
          label: "React 19",
          color: "warning" as const
        }, {
          label: "Deprecated",
          color: "error" as const
        }].map(({
          label,
          color
        }) => <Tag key={label} color={color} variant="soft" closable onClose={() => {}}>
              {label}
            </Tag>)}
        </div>
      </section>
    </div>
}`,...(w=(j=g.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const ee=["Playground","Showcase"];export{p as Playground,g as Showcase,ee as __namedExportsOrder,Y as default};
