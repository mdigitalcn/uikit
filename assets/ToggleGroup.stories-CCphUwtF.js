import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-ZH-6pyQh.js";import{T as s}from"./index-Dk2_wDGg.js";import{T as C,a as _,b as D,B as L,I as W,U as E}from"./underline-DfKPPgSr.js";import{c as i}from"./createLucideIcon-BXJdBs6C.js";import{L as B}from"./list-DRoFLZT1.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-_uLxnvdl.js";import"./useRipple-BuuTbn0W.js";import"./variants-CTjkuV9j.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],P=i("columns-2",I);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],R=i("grid-3x3",$);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],F=i("layout-grid",U);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],q=i("rows-2",J);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M3 5h18",key:"1u36vt"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 19h18",key:"awlh7x"}]],H=i("text-align-justify",Y),re={title:"Data Entry/ToggleGroup",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","soft"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},orientation:{control:"select",options:["horizontal","vertical"]},multiple:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},centered:{control:"boolean"}}},n=[{label:"Left",value:"left",icon:e.jsx(C,{size:14})},{label:"Center",value:"center",icon:e.jsx(_,{size:14})},{label:"Right",value:"right",icon:e.jsx(D,{size:14})},{label:"Justify",value:"justify",icon:e.jsx(H,{size:14})}],T=[{label:"Bold",value:"bold",icon:e.jsx(L,{size:14})},{label:"Italic",value:"italic",icon:e.jsx(W,{size:14})},{label:"Underline",value:"underline",icon:e.jsx(E,{size:14})}],M=[{label:"List",value:"list",icon:e.jsx(B,{size:14})},{label:"Grid",value:"grid",icon:e.jsx(R,{size:14})},{label:"Columns",value:"columns",icon:e.jsx(P,{size:14})}],K=[{label:"List",value:"list",icon:e.jsx(q,{size:14})},{label:"Grid",value:"grid",icon:e.jsx(F,{size:14})}],u=[{label:"Daily",value:"daily"},{label:"Weekly",value:"weekly"},{label:"Monthly",value:"monthly"},{label:"Yearly",value:"yearly"}],Q=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c",disabled:!0},{label:"Option D",value:"d",disabled:!0}],l={args:{options:n,defaultValue:"left",variant:"default",color:"primary",size:"md",orientation:"horizontal",multiple:!1,disabled:!1}},o={render:()=>{const[a,p]=m.useState(["bold"]),[G,A]=m.useState("weekly");return e.jsxs("div",{className:"space-y-10 p-6 max-w-3xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"space-y-4",children:["default","solid","soft"].map(t=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-16 capitalize",children:t}),e.jsx(s,{options:n,defaultValue:"left",variant:t,color:"primary"})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"space-y-4",children:["default","primary","secondary","accent","success","error","warning","info"].map(t=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-20 capitalize",children:t}),e.jsx(s,{options:K,defaultValue:"list",color:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"space-y-4",children:["xs","sm","md","lg"].map(t=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-8 uppercase",children:t}),e.jsx(s,{options:n,defaultValue:"left",size:t,color:"primary"})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Multiple Selection"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{options:T,multiple:!0,value:a,onChange:p,color:"primary"}),e.jsxs("p",{className:"text-xs text-text-secondary",children:["Selected: ",Array.isArray(a)?a.join(", ")||"none":a]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Text Only"}),e.jsx(s,{options:u,value:G,onChange:A,color:"primary"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Vertical Orientation"}),e.jsx(s,{options:M,defaultValue:"list",orientation:"vertical",color:"primary"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Full Width"}),e.jsx(s,{options:u,defaultValue:"daily",fullWidth:!0,color:"primary"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Disabled (entire group)"}),e.jsx(s,{options:n,defaultValue:"left",disabled:!0,color:"primary"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Partially disabled options"}),e.jsx(s,{options:Q,defaultValue:"a",color:"primary"})]})]})]})]})}},r={render:()=>{const[a,p]=m.useState(["bold","italic"]);return e.jsxs("div",{className:"p-4 space-y-3",children:[e.jsx(s,{options:T,multiple:!0,value:a,onChange:p,color:"primary","aria-label":"Text formatting"}),e.jsxs("p",{className:"text-xs text-text-secondary",children:["Active: ",Array.isArray(a)?a.join(", ")||"none":a]})]})}},c={args:{options:M,defaultValue:"list",orientation:"vertical",color:"primary",variant:"default"}},d={args:{options:n,defaultValue:"left",disabled:!0,color:"primary"}};var x,y,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    options: alignOptions,
    defaultValue: "left",
    variant: "default",
    color: "primary",
    size: "md",
    orientation: "horizontal",
    multiple: false,
    disabled: false
  }
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,f,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [multiValue, setMultiValue] = useState<string | string[]>(["bold"]);
    const [singleValue, setSingleValue] = useState<string | string[]>("weekly");
    return <div className="space-y-10 p-6 max-w-3xl">
        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
          <div className="space-y-4">
            {(["default", "solid", "soft"] as const).map(variant => <div key={variant} className="flex items-center gap-4">
                <span className="text-xs text-text-secondary w-16 capitalize">{variant}</span>
                <ToggleGroup options={alignOptions} defaultValue="left" variant={variant} color="primary" />
              </div>)}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
          <div className="space-y-4">
            {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <div key={color} className="flex items-center gap-4">
                <span className="text-xs text-text-secondary w-20 capitalize">{color}</span>
                <ToggleGroup options={layoutOptions} defaultValue="list" color={color} />
              </div>)}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
          <div className="space-y-4">
            {(["xs", "sm", "md", "lg"] as const).map(size => <div key={size} className="flex items-center gap-4">
                <span className="text-xs text-text-secondary w-8 uppercase">{size}</span>
                <ToggleGroup options={alignOptions} defaultValue="left" size={size} color="primary" />
              </div>)}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Multiple Selection</h3>
          <div className="space-y-3">
            <ToggleGroup options={formatOptions} multiple value={multiValue} onChange={setMultiValue} color="primary" />
            <p className="text-xs text-text-secondary">
              Selected: {Array.isArray(multiValue) ? multiValue.join(", ") || "none" : multiValue}
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Text Only</h3>
          <ToggleGroup options={textOnlyOptions} value={singleValue} onChange={setSingleValue} color="primary" />
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Vertical Orientation</h3>
          <ToggleGroup options={viewOptions} defaultValue="list" orientation="vertical" color="primary" />
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Full Width</h3>
          <ToggleGroup options={textOnlyOptions} defaultValue="daily" fullWidth color="primary" />
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-text-secondary mb-2">Disabled (entire group)</p>
              <ToggleGroup options={alignOptions} defaultValue="left" disabled color="primary" />
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-2">Partially disabled options</p>
              <ToggleGroup options={withDisabled} defaultValue="a" color="primary" />
            </div>
          </div>
        </section>
      </div>;
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,j,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>(["bold", "italic"]);
    return <div className="p-4 space-y-3">
        <ToggleGroup options={formatOptions} multiple value={value} onChange={setValue} color="primary" aria-label="Text formatting" />
        <p className="text-xs text-text-secondary">
          Active: {Array.isArray(value) ? value.join(", ") || "none" : value}
        </p>
      </div>;
  }
}`,...(N=(j=r.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var w,V,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    options: viewOptions,
    defaultValue: "list",
    orientation: "vertical",
    color: "primary",
    variant: "default"
  }
}`,...(k=(V=c.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var O,z,S;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options: alignOptions,
    defaultValue: "left",
    disabled: true,
    color: "primary"
  }
}`,...(S=(z=d.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const ce=["Playground","Showcase","MultipleSelection","VerticalOrientation","Disabled"];export{d as Disabled,r as MultipleSelection,l as Playground,o as Showcase,c as VerticalOrientation,ce as __namedExportsOrder,re as default};
