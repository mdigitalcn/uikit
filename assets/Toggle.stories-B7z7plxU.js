import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-ZH-6pyQh.js";import{T as a}from"./index-Cy-sz79l.js";import{B as A,I,U as B,T as U,a as O,b as E}from"./underline-DfKPPgSr.js";import{S as L}from"./star-CXKHNDnr.js";import{H as M}from"./heart-7Tw2OJmo.js";import{c as C}from"./createLucideIcon-BXJdBs6C.js";import{M as V}from"./moon-Cc8i06Pz.js";import{V as _}from"./volume-2-CI0chxkV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-_uLxnvdl.js";import"./useControllable-BTRR6hV3.js";import"./useRipple-BuuTbn0W.js";import"./variants-CTjkuV9j.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],D=C("bookmark",H);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],R=C("volume-x",F),ne={title:"Data Entry/Toggle",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","soft"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},disabled:{control:"boolean"},pressed:{control:"boolean"}}},r={args:{children:"Toggle",variant:"default",color:"primary",size:"md",disabled:!1}},t={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-3xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:["default","solid","soft"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{variant:s,color:"primary",defaultPressed:!1,children:s.charAt(0).toUpperCase()+s.slice(1)}),e.jsx(a,{variant:s,color:"primary",defaultPressed:!0,children:"Active"}),e.jsx("span",{className:"text-xs text-text-secondary",children:s})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:["default","primary","secondary","accent","success","error","warning","info"].map(s=>e.jsx(a,{color:s,defaultPressed:!0,children:s.charAt(0).toUpperCase()+s.slice(1)},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap items-center gap-4",children:["xs","sm","md","lg"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{size:s,color:"primary",defaultPressed:!0,children:s.toUpperCase()}),e.jsx("span",{className:"text-xs text-text-secondary",children:s})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Icon Only"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(a,{icon:e.jsx(A,{size:14}),"aria-label":"Bold",color:"primary"}),e.jsx(a,{icon:e.jsx(I,{size:14}),"aria-label":"Italic",color:"primary",defaultPressed:!0}),e.jsx(a,{icon:e.jsx(B,{size:14}),"aria-label":"Underline",color:"primary"}),e.jsx(a,{icon:e.jsx(U,{size:14}),"aria-label":"Align left",color:"primary"}),e.jsx(a,{icon:e.jsx(O,{size:14}),"aria-label":"Align center",color:"primary",defaultPressed:!0}),e.jsx(a,{icon:e.jsx(E,{size:14}),"aria-label":"Align right",color:"primary"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Icon with Label"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{icon:e.jsx(L,{size:14}),color:"accent",defaultPressed:!0,children:"Favorite"}),e.jsx(a,{icon:e.jsx(M,{size:14}),color:"error",children:"Like"}),e.jsx(a,{icon:e.jsx(D,{size:14}),color:"primary",children:"Save"}),e.jsx(a,{icon:e.jsx(V,{size:14}),color:"secondary",children:"Dark mode"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{color:"primary",children:"Inactive"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"Default"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{color:"primary",defaultPressed:!0,children:"Active"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"Pressed"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{color:"primary",disabled:!0,children:"Disabled"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"Disabled"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{color:"primary",disabled:!0,defaultPressed:!0,children:"Disabled Active"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"Disabled + Pressed"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Controlled Example"}),e.jsx(W,{})]})]})};function W(){const[s,c]=S.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{icon:s?e.jsx(R,{size:14}):e.jsx(_,{size:14}),pressed:s,onChange:c,color:s?"error":"primary",variant:"soft",children:s?"Muted":"Sound On"}),e.jsxs("span",{className:"text-sm text-text-secondary",children:["Status: ",s?"muted":"active"]})]})}const n={args:{icon:e.jsx(A,{size:14}),"aria-label":"Bold",color:"primary",variant:"default",size:"md"}},l={args:{children:"Bookmark",icon:e.jsx(D,{size:14}),color:"primary",variant:"soft",defaultPressed:!0}},o={args:{children:"Disabled Toggle",disabled:!0,color:"primary"}},i={render:()=>{const[s,c]=S.useState(!1);return e.jsxs("div",{className:"flex items-center gap-3 p-4",children:[e.jsx(a,{pressed:s,onChange:c,color:"primary",variant:"solid",children:s?"On":"Off"}),e.jsxs("span",{className:"text-sm text-text-secondary",children:["State: ",s?"pressed":"unpressed"]})]})}};var d,m,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Toggle",
    variant: "default",
    color: "primary",
    size: "md",
    disabled: false
  }
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var p,g,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="flex flex-wrap gap-4">
          {(["default", "solid", "soft"] as const).map(variant => <div key={variant} className="flex flex-col items-center gap-2">
              <Toggle variant={variant} color="primary" defaultPressed={false}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Toggle>
              <Toggle variant={variant} color="primary" defaultPressed>
                Active
              </Toggle>
              <span className="text-xs text-text-secondary">{variant}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="flex flex-wrap gap-3">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <Toggle key={color} color={color} defaultPressed>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Toggle>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          {(["xs", "sm", "md", "lg"] as const).map(size => <div key={size} className="flex flex-col items-center gap-2">
              <Toggle size={size} color="primary" defaultPressed>
                {size.toUpperCase()}
              </Toggle>
              <span className="text-xs text-text-secondary">{size}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Icon Only</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Toggle icon={<Bold size={14} />} aria-label="Bold" color="primary" />
          <Toggle icon={<Italic size={14} />} aria-label="Italic" color="primary" defaultPressed />
          <Toggle icon={<Underline size={14} />} aria-label="Underline" color="primary" />
          <Toggle icon={<AlignLeft size={14} />} aria-label="Align left" color="primary" />
          <Toggle icon={<AlignCenter size={14} />} aria-label="Align center" color="primary" defaultPressed />
          <Toggle icon={<AlignRight size={14} />} aria-label="Align right" color="primary" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Icon with Label</h3>
        <div className="flex flex-wrap gap-3">
          <Toggle icon={<Star size={14} />} color="accent" defaultPressed>
            Favorite
          </Toggle>
          <Toggle icon={<Heart size={14} />} color="error">
            Like
          </Toggle>
          <Toggle icon={<Bookmark size={14} />} color="primary">
            Save
          </Toggle>
          <Toggle icon={<Moon size={14} />} color="secondary">
            Dark mode
          </Toggle>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-2">
            <Toggle color="primary">Inactive</Toggle>
            <span className="text-xs text-text-secondary">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Toggle color="primary" defaultPressed>Active</Toggle>
            <span className="text-xs text-text-secondary">Pressed</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Toggle color="primary" disabled>Disabled</Toggle>
            <span className="text-xs text-text-secondary">Disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Toggle color="primary" disabled defaultPressed>Disabled Active</Toggle>
            <span className="text-xs text-text-secondary">Disabled + Pressed</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Controlled Example</h3>
        <ControlledExample />
      </section>
    </div>
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var u,h,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: <Bold size={14} />,
    "aria-label": "Bold",
    color: "primary",
    variant: "default",
    size: "md"
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,v,b;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Bookmark",
    icon: <Bookmark size={14} />,
    color: "primary",
    variant: "soft",
    defaultPressed: true
  }
}`,...(b=(v=l.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var N,T,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Disabled Toggle",
    disabled: true,
    color: "primary"
  }
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var z,w,P;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <div className="flex items-center gap-3 p-4">
        <Toggle pressed={pressed} onChange={setPressed} color="primary" variant="solid">
          {pressed ? "On" : "Off"}
        </Toggle>
        <span className="text-sm text-text-secondary">State: {pressed ? "pressed" : "unpressed"}</span>
      </div>;
  }
}`,...(P=(w=i.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const le=["Playground","Showcase","IconOnly","WithLabel","Disabled","Controlled"];export{i as Controlled,o as Disabled,n as IconOnly,r as Playground,t as Showcase,l as WithLabel,le as __namedExportsOrder,ne as default};
