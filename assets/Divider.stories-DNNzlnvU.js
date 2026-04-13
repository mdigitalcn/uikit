import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as o,a as A}from"./utils-_uLxnvdl.js";import{R as C}from"./index-ZH-6pyQh.js";import{c as f}from"./variants-CTjkuV9j.js";import{S}from"./star-CXKHNDnr.js";import{Z as _}from"./zap-Bp22WUqo.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const d=A("",{variants:{orientation:{horizontal:"w-full",vertical:"h-full"},variant:{solid:"border-solid",dashed:"border-dashed",dotted:"border-dotted"}},defaultVariants:{orientation:"horizontal",variant:"solid"}}),j={left:{before:"w-(--divider-left-before-width)",after:"w-(--divider-left-after-width)"},center:{before:"w-(--divider-center-before-width)",after:"w-(--divider-center-after-width)"},right:{before:"w-(--divider-right-before-width)",after:"w-(--divider-right-after-width)"}},t=C.memo(({orientation:r="horizontal",variant:a="solid",color:h="default",thickness:s="default",children:u,textAlign:b="center",spacing:n,className:v,classNames:i,ref:x,...m})=>{const p={thin:"border-t",default:"border-t",thick:"border-t-2"},V={thin:"border-l",default:"border-l",thick:"border-l-2"},z=!!u;return r==="horizontal"?z?e.jsxs("div",{ref:x,role:"separator","aria-orientation":"horizontal","data-slot":"root",className:o("divider_root","flex items-center gap-(--divider-gap) text-sm",f[h],"text-slot",v,i==null?void 0:i.root),style:n?{margin:n}:void 0,...m,children:[e.jsx("div",{"data-slot":"line",className:o("divider_line",p[s]+" border-slot",d({variant:a}),j[b].before,i==null?void 0:i.line)}),e.jsx("span",{"data-slot":"label",className:o("divider_label","whitespace-nowrap flex-shrink-0",i==null?void 0:i.label),children:u}),e.jsx("div",{"data-slot":"line",className:o("divider_line",p[s]+" border-slot",d({variant:a}),j[b].after,i==null?void 0:i.line)})]}):e.jsx("hr",{ref:x,role:"separator","aria-orientation":"horizontal","data-slot":"root",className:o("divider_root",p[s]+" border-slot",f[h],d({orientation:r,variant:a}),v,i==null?void 0:i.root),style:n?{margin:n}:void 0,...m}):e.jsx("div",{ref:x,role:"separator","aria-orientation":"vertical","data-slot":"root",className:o("divider_root",`inline-block w-px ${V[s]} self-stretch border-slot`,f[h],d({variant:a}),v,i==null?void 0:i.root),style:n?{margin:n}:void 0,...m})});t.displayName="Divider";t.__docgenInfo={description:`Divider Component

A visual separator that can be used to divide content sections.
Supports horizontal and vertical orientations, different line styles,
color variants, and optional label text.

@component
@example
// Basic horizontal divider
<Divider />

@example
// Divider with text label
<Divider>Section Title</Divider>

@example
// Colored divider
<Divider color="primary" />

@example
// Vertical divider
<Divider orientation="vertical" />

@example
// Dashed divider with left-aligned text
<Divider variant="dashed" textAlign="left" color="accent">
  Options
</Divider>

@param {DividerProps} props - Component props
@returns {JSX.Element} Rendered divider component`,methods:[],displayName:"Divider",props:{orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},variant:{defaultValue:{value:"'solid'",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},thickness:{defaultValue:{value:"'default'",computed:!1},required:!1},textAlign:{defaultValue:{value:"'center'",computed:!1},required:!1}}};const Z={title:"Layout/Divider",component:t,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["solid","dashed","dotted"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},thickness:{control:"select",options:["thin","base","thick"]},textAlign:{control:"select",options:["left","center","right"]}}},l={args:{orientation:"horizontal",variant:"solid"}},N=["default","primary","secondary","accent","success","error","warning","info"],c={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"solid"}),e.jsx(t,{variant:"dashed"}),e.jsx(t,{variant:"dotted"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Text Label"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{children:"Center (default)"}),e.jsx(t,{textAlign:"left",children:"Left aligned"}),e.jsx(t,{textAlign:"right",children:"Right aligned"}),e.jsx(t,{variant:"dashed",children:"Dashed + text"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Icon"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{children:e.jsx(S,{className:"w-4 h-4 text-warning"})}),e.jsx(t,{color:"primary",children:e.jsx(_,{className:"w-4 h-4"})})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:N.map(r=>e.jsx(t,{color:r,children:r},r))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Thickness"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{thickness:"thin",children:"Thin"}),e.jsx(t,{thickness:"base",children:"Base"}),e.jsx(t,{thickness:"thick",children:"Thick"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Vertical"}),e.jsxs("div",{className:"flex items-center gap-4 h-8 text-sm text-text-secondary",children:[e.jsx("span",{children:"Home"}),e.jsx(t,{orientation:"vertical"}),e.jsx("span",{children:"About"}),e.jsx(t,{orientation:"vertical",variant:"dashed"}),e.jsx("span",{children:"Contact"}),e.jsx(t,{orientation:"vertical",color:"primary"}),e.jsx("span",{children:"Blog"})]})]})]})};var y,D,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    variant: "solid"
  }
}`,...(g=(D=l.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var w,k,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-4">
          <Divider variant="solid" />
          <Divider variant="dashed" />
          <Divider variant="dotted" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Text Label</h3>
        <div className="space-y-4">
          <Divider>Center (default)</Divider>
          <Divider textAlign="left">Left aligned</Divider>
          <Divider textAlign="right">Right aligned</Divider>
          <Divider variant="dashed">Dashed + text</Divider>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icon</h3>
        <div className="space-y-4">
          <Divider><Star className="w-4 h-4 text-warning" /></Divider>
          <Divider color="primary"><Zap className="w-4 h-4" /></Divider>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {colors.map(c => <Divider key={c} color={c}>{c}</Divider>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Thickness</h3>
        <div className="space-y-4">
          <Divider thickness="thin">Thin</Divider>
          <Divider thickness="base">Base</Divider>
          <Divider thickness="thick">Thick</Divider>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Vertical</h3>
        <div className="flex items-center gap-4 h-8 text-sm text-text-secondary">
          <span>Home</span>
          <Divider orientation="vertical" />
          <span>About</span>
          <Divider orientation="vertical" variant="dashed" />
          <span>Contact</span>
          <Divider orientation="vertical" color="primary" />
          <span>Blog</span>
        </div>
      </section>
    </div>
}`,...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const H=["Playground","Showcase"];export{l as Playground,c as Showcase,H as __namedExportsOrder,Z as default};
