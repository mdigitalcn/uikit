import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R,r}from"./index-ZH-6pyQh.js";import{c as d,i as G,a as A}from"./utils-_uLxnvdl.js";import{u as J}from"./useControllable-BTRR6hV3.js";import{c as K}from"./variants-CTjkuV9j.js";import{C as Q}from"./chevron-down-D1qmGosc.js";import{c as W}from"./createLucideIcon-BXJdBs6C.js";import{I as X}from"./info-CKnY7ViN.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],ee=W("funnel",Z),T=typeof window<"u"?r.useLayoutEffect:r.useEffect,te="w-full border [--_radius:var(--radius-input)] rounded-slot overflow-clip",se=A("w-full flex items-center justify-between cursor-pointer touch-manipulation font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-slot focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",{variants:{size:{xs:"px-2 py-1.5 text-xs",sm:"px-3 py-2 text-sm",md:"px-4 py-3 text-base",lg:"px-5 py-4 text-lg"},disabled:{true:"opacity-50 cursor-not-allowed",false:"hover:bg-surface/50"}},defaultVariants:{size:"md",disabled:!1}}),ae=A("",{variants:{size:{xs:"px-2 pb-2 text-xs",sm:"px-3 pb-3 text-sm",md:"px-4 pb-4 text-base",lg:"px-5 pb-5 text-lg"}},defaultVariants:{size:"md"}}),ne={default:"border-slot bg-background text-text-primary",solid:"border-slot bg-slot text-slot-fg",soft:"border-slot-30 bg-slot-10 text-text-primary"},re={default:"text-slot hover:bg-slot-10",solid:"hover:bg-slot-90",soft:"text-slot hover:bg-slot-20"},n=R.memo(({title:t,children:l,color:m="default",size:u="md",variant:v="default",defaultOpen:D=!1,open:P,onChange:q,destroyOnClose:F=!1,disabled:o=!1,className:H,classNames:a,ref:L})=>{const[s,y]=J({value:P,defaultValue:D,onChange:q}),j=R.useId(),N=`collapse-header-${j}`,w=`collapse-content-${j}`,i=r.useRef(null),c=r.useRef(null),C=r.useRef(s),f=r.useRef(0),h=r.useRef(null),M=r.useCallback(()=>{c.current&&(f.current=c.current.scrollHeight)},[]);T(()=>{i.current&&(i.current.style.height=s?"auto":"0")},[]),T(()=>{var z;const b=i.current,k=c.current;if(!b||!k)return;const Y=C.current;if(C.current=s,s===Y)return;h.current&&h.current.cancel();const O=f.current||k.scrollHeight;f.current=0;const B=typeof window<"u"&&((z=window.matchMedia)==null?void 0:z.call(window,"(prefers-reduced-motion: reduce)").matches)?0:200,g=b.animate(s?[{height:"0px"},{height:`${O}px`}]:[{height:`${O}px`},{height:"0px"}],{duration:B,easing:"ease-out",fill:"forwards"});g.onfinish=()=>{b.style.height=s?"auto":"0",g.cancel()},h.current=g},[s]);const U=r.useCallback(()=>{o||y(!s)},[o,s,y]);return e.jsxs("div",{ref:L,className:d("collapse_root",te,K[m],ne[v],a==null?void 0:a.root,H),"data-slot":"root",children:[e.jsxs("button",{id:N,type:"button",onClick:U,onPointerEnter:M,disabled:o,"aria-disabled":o||void 0,"aria-expanded":s,"aria-controls":w,className:d("collapse_header",se({size:u,disabled:o}),re[v],"focus-visible:ring-slot",a==null?void 0:a.header),"data-slot":"header",children:[e.jsx("span",{children:t}),e.jsx(Q,{className:d("collapse_icon",G[u],"[--_duration:var(--duration-slow)] transition-transform duration-slot ease-out flex-shrink-0",s&&"rotate-180",a==null?void 0:a.icon),"data-slot":"icon"})]}),e.jsx("div",{ref:i,id:w,role:"region","aria-labelledby":N,"aria-hidden":!s,className:"overflow-hidden",style:{contain:"content"},children:e.jsx("div",{ref:c,children:(!F||s)&&e.jsx("div",{className:d("collapse_content",ae({size:u}),a==null?void 0:a.content),"data-slot":"content",children:l})})})]})});n.displayName="Collapse";n.__docgenInfo={description:"",methods:[],displayName:"Collapse",props:{color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},defaultOpen:{defaultValue:{value:"false",computed:!1},required:!1},destroyOnClose:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const be={title:"Layout/Collapse",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","soft"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},defaultOpen:{control:"boolean"},disabled:{control:"boolean"},destroyOnClose:{control:"boolean"},title:{control:"text"}}},p={args:{title:"Collapse Panel",variant:"default",color:"default",size:"md",defaultOpen:!1,disabled:!1,destroyOnClose:!1},render:t=>e.jsx("div",{className:"max-w-xl",children:e.jsx(n,{...t,children:e.jsx("p",{className:"text-sm text-text-secondary",children:"This is the collapsible content area. Toggle the panel header to show or hide this content. Use it to progressively disclose information without cluttering the UI."})})})},x={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"space-y-3",children:["default","solid","soft"].map(t=>e.jsx(n,{title:`variant="${t}"`,variant:t,color:"primary",defaultOpen:t==="default",children:e.jsxs("p",{className:"text-sm text-text-secondary",children:["Content for the ",t," variant. The header and border styling differ between variants."]})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:["primary","secondary","accent","success","error","warning","info"].map(t=>e.jsx(n,{title:`color="${t}"`,color:t,variant:"soft",defaultOpen:!1,children:e.jsxs("p",{className:"text-sm text-text-secondary",children:["Content using the ",t," color slot."]})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"space-y-3",children:["xs","sm","md","lg"].map(t=>e.jsx(n,{title:`size="${t}"`,size:t,defaultOpen:!1,children:e.jsxs("p",{className:"text-sm text-text-secondary",children:['This panel uses size="',t,'".']})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{title:"Default open",defaultOpen:!0,children:e.jsx("p",{className:"text-sm text-text-secondary",children:"This panel starts open via defaultOpen=true."})}),e.jsx(n,{title:"Disabled panel",disabled:!0,children:e.jsx("p",{className:"text-sm text-text-secondary",children:"You cannot toggle this panel."})})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Controlled"}),e.jsx(oe,{})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Real-world: Advanced Filters"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{title:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(ee,{size:15}),"Date Range"]}),variant:"default",color:"primary",defaultOpen:!0,children:e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-xs text-text-secondary block mb-1",children:"From"}),e.jsx("div",{className:"h-8 border border-border rounded px-3 flex items-center text-sm bg-background",children:"2026-01-01"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-xs text-text-secondary block mb-1",children:"To"}),e.jsx("div",{className:"h-8 border border-border rounded px-3 flex items-center text-sm bg-background",children:"2026-04-12"})]})]})}),e.jsx(n,{title:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(X,{size:15}),"Status Filter"]}),variant:"default",color:"primary",children:e.jsx("div",{className:"flex flex-wrap gap-2",children:["Active","Pending","Archived","Draft"].map(t=>e.jsx("span",{className:"px-3 py-1 text-xs bg-surface border border-border rounded-full cursor-pointer hover:border-primary",children:t},t))})})]})]})]})};function oe(){const[t,l]=r.useState(!1);return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsxs("span",{className:"text-sm text-text-secondary",children:["Panel is: ",e.jsx("strong",{children:t?"open":"closed"})]}),e.jsx("button",{onClick:()=>l(m=>!m),className:"text-xs px-3 py-1 bg-primary text-white rounded",children:"Toggle externally"})]}),e.jsx(n,{title:"Controlled collapse",open:t,onChange:l,color:"primary",variant:"soft",children:e.jsx("p",{className:"text-sm text-text-secondary",children:"This collapse is controlled. The open state is managed externally via useState."})})]})}var V,S,I;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: "Collapse Panel",
    variant: "default",
    color: "default",
    size: "md",
    defaultOpen: false,
    disabled: false,
    destroyOnClose: false
  },
  render: args => <div className="max-w-xl">
      <Collapse {...args}>
        <p className="text-sm text-text-secondary">
          This is the collapsible content area. Toggle the panel header to show or hide this content.
          Use it to progressively disclose information without cluttering the UI.
        </p>
      </Collapse>
    </div>
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var _,E,$;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="space-y-3">
          {(["default", "solid", "soft"] as const).map(variant => <Collapse key={variant} title={\`variant="\${variant}"\`} variant={variant} color="primary" defaultOpen={variant === "default"}>
              <p className="text-sm text-text-secondary">
                Content for the {variant} variant. The header and border styling differ between variants.
              </p>
            </Collapse>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <Collapse key={color} title={\`color="\${color}"\`} color={color} variant="soft" defaultOpen={false}>
              <p className="text-sm text-text-secondary">Content using the {color} color slot.</p>
            </Collapse>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map(size => <Collapse key={size} title={\`size="\${size}"\`} size={size} defaultOpen={false}>
              <p className="text-sm text-text-secondary">This panel uses size="{size}".</p>
            </Collapse>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="space-y-3">
          <Collapse title="Default open" defaultOpen>
            <p className="text-sm text-text-secondary">This panel starts open via defaultOpen=true.</p>
          </Collapse>
          <Collapse title="Disabled panel" disabled>
            <p className="text-sm text-text-secondary">You cannot toggle this panel.</p>
          </Collapse>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Controlled</h3>
        <ControlledExample />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Real-world: Advanced Filters</h3>
        <div className="space-y-2">
          <Collapse title={<span className="flex items-center gap-2">
                <Filter size={15} />
                Date Range
              </span>} variant="default" color="primary" defaultOpen>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-text-secondary block mb-1">From</label>
                <div className="h-8 border border-border rounded px-3 flex items-center text-sm bg-background">2026-01-01</div>
              </div>
              <div>
                <label className="text-xs text-text-secondary block mb-1">To</label>
                <div className="h-8 border border-border rounded px-3 flex items-center text-sm bg-background">2026-04-12</div>
              </div>
            </div>
          </Collapse>
          <Collapse title={<span className="flex items-center gap-2">
                <Info size={15} />
                Status Filter
              </span>} variant="default" color="primary">
            <div className="flex flex-wrap gap-2">
              {["Active", "Pending", "Archived", "Draft"].map(s => <span key={s} className="px-3 py-1 text-xs bg-surface border border-border rounded-full cursor-pointer hover:border-primary">
                  {s}
                </span>)}
            </div>
          </Collapse>
        </div>
      </section>

    </div>
}`,...($=(E=x.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const ge=["Playground","Showcase"];export{p as Playground,x as Showcase,ge as __namedExportsOrder,be as default};
