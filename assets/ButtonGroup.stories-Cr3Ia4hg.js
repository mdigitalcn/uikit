import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./index-Cw7T_5ox.js";import{c as d,a as O}from"./utils-_uLxnvdl.js";import{R as o}from"./index-ZH-6pyQh.js";import{T,a as A,b as S,B as V,I as z,U as L}from"./underline-DfKPPgSr.js";import{L as q}from"./list-DRoFLZT1.js";import{C as P}from"./chevron-left-BPVU9fuB.js";import{C as R}from"./chevron-right-DY5KYsnV.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./index-CF05pSQ2.js";import"./variants-CTjkuV9j.js";import"./useRipple-BuuTbn0W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const W=O("inline-flex",{variants:{vertical:{true:"flex-col",false:"flex-row"},fullWidth:{true:"w-full [&>*]:flex-1",false:""}},defaultVariants:{vertical:!1,fullWidth:!1}}),E="[&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:border-r-0 [&>*:not(:last-child)]:rounded-r-none",U="[&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:border-b-0 [&>*:not(:last-child)]:rounded-b-none",_={sm:"gap-1",md:"gap-2",lg:"gap-3"},s=o.memo(({vertical:n=!1,attached:f=!0,gap:j="md",fullWidth:v=!1,size:g,variant:y,color:b,shape:N,disabled:w=!1,className:G,classNames:r,children:k,ref:I,...c})=>{const C=o.Children.map(k,a=>o.isValidElement(a)?o.cloneElement(a,{size:a.props.size??g,variant:a.props.variant??y,color:a.props.color??b,shape:a.props.shape??N,disabled:a.props.disabled||w,className:d(r==null?void 0:r.button,a.props.className)}):a);return e.jsx("div",{ref:I,role:"group","aria-label":c["aria-label"],className:d("buttonGroup_root",W({vertical:n,fullWidth:v}),f?n?U:E:_[j],r==null?void 0:r.root,G),"data-slot":"root",...c,children:C})});s.displayName="ButtonGroup";s.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{vertical:{defaultValue:{value:"false",computed:!1},required:!1},attached:{defaultValue:{value:"true",computed:!1},required:!1},gap:{defaultValue:{value:"'md'",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const ae={title:"General/ButtonGroup",component:s,tags:["autodocs"],argTypes:{vertical:{control:"boolean"},attached:{control:"boolean"},gap:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["xs","sm","md","lg"]},variant:{control:"select",options:["solid","outline","dashed","link","ghost","soft"]},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]},shape:{control:"select",options:["rounded","pill","square"]}}},i={args:{attached:!0,vertical:!1,disabled:!1,size:"md",variant:"outline",color:"primary"},render:n=>e.jsxs(s,{...n,children:[e.jsx(t,{children:"Previous"}),e.jsx(t,{children:"Current"}),e.jsx(t,{children:"Next"})]})},l={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"space-y-3",children:["solid","outline","soft","ghost"].map(n=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-16",children:n}),e.jsxs(s,{variant:n,color:"primary",children:[e.jsx(t,{children:"Left"}),e.jsx(t,{children:"Center"}),e.jsx(t,{children:"Right"})]})]},n))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:["primary","secondary","accent","success","error","warning","info"].map(n=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-20",children:n}),e.jsxs(s,{color:n,variant:"soft",children:[e.jsx(t,{children:"A"}),e.jsx(t,{children:"B"}),e.jsx(t,{children:"C"})]})]},n))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"space-y-3",children:["xs","sm","md","lg"].map(n=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-6",children:n}),e.jsxs(s,{size:n,variant:"outline",children:[e.jsx(t,{children:"Alpha"}),e.jsx(t,{children:"Beta"}),e.jsx(t,{children:"Gamma"})]})]},n))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Icon Groups"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs(s,{variant:"outline",children:[e.jsx(t,{"aria-label":"Align left",isIconOnly:!0,children:e.jsx(T,{className:"w-4 h-4"})}),e.jsx(t,{"aria-label":"Align center",isIconOnly:!0,children:e.jsx(A,{className:"w-4 h-4"})}),e.jsx(t,{"aria-label":"Align right",isIconOnly:!0,children:e.jsx(S,{className:"w-4 h-4"})})]}),e.jsxs(s,{variant:"outline",children:[e.jsx(t,{"aria-label":"Bold",isIconOnly:!0,children:e.jsx(V,{className:"w-4 h-4"})}),e.jsx(t,{"aria-label":"Italic",isIconOnly:!0,children:e.jsx(z,{className:"w-4 h-4"})}),e.jsx(t,{"aria-label":"Underline",isIconOnly:!0,children:e.jsx(L,{className:"w-4 h-4"})}),e.jsx(t,{"aria-label":"List",isIconOnly:!0,children:e.jsx(q,{className:"w-4 h-4"})})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Shapes"}),e.jsx("div",{className:"space-y-3",children:["rounded","pill","square"].map(n=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-16",children:n}),e.jsxs(s,{shape:n,variant:"outline",color:"primary",children:[e.jsx(t,{children:"A"}),e.jsx(t,{children:"B"}),e.jsx(t,{children:"C"})]})]},n))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Pagination Example"}),e.jsxs(s,{variant:"outline",size:"sm",children:[e.jsx(t,{isIconOnly:!0,"aria-label":"Previous page",children:e.jsx(P,{className:"w-4 h-4"})}),[1,2,3,4,5].map(n=>e.jsx(t,{variant:n===3?"solid":"outline",color:n===3?"primary":"default",children:n},n)),e.jsx(t,{isIconOnly:!0,"aria-label":"Next page",children:e.jsx(R,{className:"w-4 h-4"})})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Vertical"}),e.jsxs(s,{vertical:!0,variant:"outline",children:[e.jsx(t,{children:"Top"}),e.jsx(t,{children:"Middle"}),e.jsx(t,{children:"Bottom"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Separated (attached=false)"}),e.jsx("div",{className:"space-y-3",children:["sm","md","lg"].map(n=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-xs text-text-secondary w-12",children:["gap ",n]}),e.jsxs(s,{attached:!1,gap:n,variant:"outline",children:[e.jsx(t,{children:"One"}),e.jsx(t,{children:"Two"}),e.jsx(t,{children:"Three"})]})]},n))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Full Width"}),e.jsxs(s,{fullWidth:!0,variant:"outline",children:[e.jsx(t,{children:"Tab One"}),e.jsx(t,{variant:"solid",color:"primary",children:"Tab Two"}),e.jsx(t,{children:"Tab Three"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsx("div",{className:"space-y-3",children:e.jsxs(s,{disabled:!0,variant:"outline",children:[e.jsx(t,{children:"Disabled"}),e.jsx(t,{children:"Group"}),e.jsx(t,{children:"Here"})]})})]})]})};var u,m,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    attached: true,
    vertical: false,
    disabled: false,
    size: "md",
    variant: "outline",
    color: "primary"
  },
  render: args => <ButtonGroup {...args}>
      <Button>Previous</Button>
      <Button>Current</Button>
      <Button>Next</Button>
    </ButtonGroup>
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,h,B;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="space-y-3">
          {(["solid", "outline", "soft", "ghost"] as const).map(v => <div key={v} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-16">{v}</span>
              <ButtonGroup variant={v} color="primary">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(c => <div key={c} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-20">{c}</span>
              <ButtonGroup color={c} variant="soft">
                <Button>A</Button>
                <Button>B</Button>
                <Button>C</Button>
              </ButtonGroup>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-6">{s}</span>
              <ButtonGroup size={s} variant="outline">
                <Button>Alpha</Button>
                <Button>Beta</Button>
                <Button>Gamma</Button>
              </ButtonGroup>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Icon Groups
        </h3>
        <div className="space-y-3">
          <ButtonGroup variant="outline">
            <Button aria-label="Align left" isIconOnly>
              <AlignLeft className="w-4 h-4" />
            </Button>
            <Button aria-label="Align center" isIconOnly>
              <AlignCenter className="w-4 h-4" />
            </Button>
            <Button aria-label="Align right" isIconOnly>
              <AlignRight className="w-4 h-4" />
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outline">
            <Button aria-label="Bold" isIconOnly>
              <Bold className="w-4 h-4" />
            </Button>
            <Button aria-label="Italic" isIconOnly>
              <Italic className="w-4 h-4" />
            </Button>
            <Button aria-label="Underline" isIconOnly>
              <Underline className="w-4 h-4" />
            </Button>
            <Button aria-label="List" isIconOnly>
              <List className="w-4 h-4" />
            </Button>
          </ButtonGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Shapes
        </h3>
        <div className="space-y-3">
          {(["rounded", "pill", "square"] as const).map(sh => <div key={sh} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-16">{sh}</span>
              <ButtonGroup shape={sh} variant="outline" color="primary">
                <Button>A</Button>
                <Button>B</Button>
                <Button>C</Button>
              </ButtonGroup>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Pagination Example
        </h3>
        <ButtonGroup variant="outline" size="sm">
          <Button isIconOnly aria-label="Previous page">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          {[1, 2, 3, 4, 5].map(p => <Button key={p} variant={p === 3 ? "solid" : "outline"} color={p === 3 ? "primary" : "default"}>
              {p}
            </Button>)}
          <Button isIconOnly aria-label="Next page">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </ButtonGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Vertical
        </h3>
        <ButtonGroup vertical variant="outline">
          <Button>Top</Button>
          <Button>Middle</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Separated (attached=false)
        </h3>
        <div className="space-y-3">
          {(["sm", "md", "lg"] as const).map(g => <div key={g} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-12">gap {g}</span>
              <ButtonGroup attached={false} gap={g} variant="outline">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Full Width
        </h3>
        <ButtonGroup fullWidth variant="outline">
          <Button>Tab One</Button>
          <Button variant="solid" color="primary">Tab Two</Button>
          <Button>Tab Three</Button>
        </ButtonGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="space-y-3">
          <ButtonGroup disabled variant="outline">
            <Button>Disabled</Button>
            <Button>Group</Button>
            <Button>Here</Button>
          </ButtonGroup>
        </div>
      </section>
    </div>
}`,...(B=(h=l.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};const re=["Playground","Showcase"];export{i as Playground,l as Showcase,re as __namedExportsOrder,ae as default};
