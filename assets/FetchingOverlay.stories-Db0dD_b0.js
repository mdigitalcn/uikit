import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as j,r as o}from"./index-ZH-6pyQh.js";import{S as w}from"./index-CF05pSQ2.js";import{c as k}from"./utils-_uLxnvdl.js";import{B as F}from"./index-Cw7T_5ox.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-CTjkuV9j.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./useRipple-BuuTbn0W.js";const a=j.memo(({isFetching:s,size:n="lg",fullscreen:c=!0,backdropOpacity:d=30,className:y,...N})=>{const i=o.useRef(null);return o.useEffect(()=>{if(!s)return;const x=m=>{var p;m.key==="Tab"&&(m.preventDefault(),(p=i.current)==null||p.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[s]),e.jsx("div",{ref:i,tabIndex:s?-1:void 0,"data-slot":"root",className:k("fetchingOverlay_root","[--_duration:var(--duration-slow)] absolute inset-0 flex items-center justify-center transition-opacity duration-slot",c&&"fixed w-full h-screen z-[var(--z-overlay)]",s?"opacity-100":"opacity-0 pointer-events-none",y),style:s?{backgroundColor:`oklch(0% 0 0 / ${d}%)`}:void 0,role:"status","aria-busy":s,"aria-label":s?"Loading content":void 0,children:s&&e.jsx(w,{size:n,...N})})});a.displayName="FetchingOverlay";a.__docgenInfo={description:"",methods:[],displayName:"FetchingOverlay",props:{size:{defaultValue:{value:"'lg'",computed:!1},required:!1},fullscreen:{defaultValue:{value:"true",computed:!1},required:!1},backdropOpacity:{defaultValue:{value:"30",computed:!1},required:!1}}};const B={title:"Feedback/FetchingOverlay",component:a,tags:["autodocs"],argTypes:{isFetching:{control:"boolean"},fullscreen:{control:"boolean"},backdropOpacity:{control:"number"},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},variant:{control:"select",options:["ring","dots","pulse"]},label:{control:"text"}}},r=()=>e.jsxs("div",{className:"p-5 space-y-3",children:[e.jsx("div",{className:"h-4 w-3/4 bg-surface rounded"}),e.jsx("div",{className:"h-3 w-full bg-surface rounded"}),e.jsx("div",{className:"h-3 w-5/6 bg-surface rounded"}),e.jsx("div",{className:"h-3 w-2/3 bg-surface rounded"}),e.jsx("div",{className:"mt-4 h-8 w-28 bg-surface rounded"})]}),O=s=>{const[n,c]=o.useState(!0);return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"relative border border-border rounded-lg overflow-hidden min-h-32",children:[e.jsx(a,{isFetching:n,fullscreen:!1,...s}),e.jsx(r,{})]}),e.jsxs(F,{size:"sm",variant:"outline",onClick:()=>c(d=>!d),children:["Toggle (",n?"loading":"idle",")"]})]})},t={args:{isFetching:!0,fullscreen:!1,backdropOpacity:30,size:"lg",variant:"ring"},render:s=>e.jsxs("div",{className:"relative border border-border rounded-lg overflow-hidden min-h-40",children:[e.jsx(a,{...s}),e.jsx(r,{})]})},l={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Container Loading (toggle)"}),e.jsx(O,{})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Spinner Variants"}),e.jsx("div",{className:"flex gap-6 flex-wrap",children:["ring","dots","pulse"].map(s=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs text-text-secondary",children:s}),e.jsxs("div",{className:"relative border border-border rounded-lg overflow-hidden w-36 h-28",children:[e.jsx(a,{isFetching:!0,fullscreen:!1,variant:s}),e.jsx(r,{})]})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex gap-4 flex-wrap",children:["xs","sm","md","lg"].map(s=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs text-text-secondary",children:s}),e.jsxs("div",{className:"relative border border-border rounded-lg overflow-hidden w-28 h-24",children:[e.jsx(a,{isFetching:!0,fullscreen:!1,size:s}),e.jsx(r,{})]})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex gap-4 flex-wrap",children:["primary","secondary","accent","success","warning","info"].map(s=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs text-text-secondary",children:s}),e.jsxs("div",{className:"relative border border-border rounded-lg overflow-hidden w-28 h-24",children:[e.jsx(a,{isFetching:!0,fullscreen:!1,color:s}),e.jsx(r,{})]})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Backdrop Opacity"}),e.jsx("div",{className:"flex gap-6 flex-wrap",children:[10,30,60,90].map(s=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-xs text-text-secondary",children:["opacity ",s,"%"]}),e.jsxs("div",{className:"relative border border-border rounded-lg overflow-hidden w-36 h-28",children:[e.jsx(a,{isFetching:!0,fullscreen:!1,backdropOpacity:s}),e.jsx(r,{})]})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"flex gap-6 flex-wrap",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs text-text-secondary",children:"Inactive (isFetching=false)"}),e.jsxs("div",{className:"relative border border-border rounded-lg overflow-hidden w-48",children:[e.jsx(a,{isFetching:!1,fullscreen:!1}),e.jsx(r,{})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs text-text-secondary",children:"With label"}),e.jsxs("div",{className:"relative border border-border rounded-lg overflow-hidden w-48 h-32",children:[e.jsx(a,{isFetching:!0,fullscreen:!1,label:"Loading data..."}),e.jsx(r,{})]})]})]})]})]})};var v,h,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isFetching: true,
    fullscreen: false,
    backdropOpacity: 30,
    size: "lg",
    variant: "ring"
  },
  render: args => <div className="relative border border-border rounded-lg overflow-hidden min-h-40">
      <FetchingOverlay {...args} />
      <SampleContent />
    </div>
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var u,g,b;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Container Loading (toggle)
        </h3>
        <ToggleDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Spinner Variants
        </h3>
        <div className="flex gap-6 flex-wrap">
          {(["ring", "dots", "pulse"] as const).map(v => <div key={v} className="space-y-2">
              <p className="text-xs text-text-secondary">{v}</p>
              <div className="relative border border-border rounded-lg overflow-hidden w-36 h-28">
                <FetchingOverlay isFetching fullscreen={false} variant={v} />
                <SampleContent />
              </div>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex gap-4 flex-wrap">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s} className="space-y-2">
              <p className="text-xs text-text-secondary">{s}</p>
              <div className="relative border border-border rounded-lg overflow-hidden w-28 h-24">
                <FetchingOverlay isFetching fullscreen={false} size={s} />
                <SampleContent />
              </div>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex gap-4 flex-wrap">
          {(["primary", "secondary", "accent", "success", "warning", "info"] as const).map(c => <div key={c} className="space-y-2">
              <p className="text-xs text-text-secondary">{c}</p>
              <div className="relative border border-border rounded-lg overflow-hidden w-28 h-24">
                <FetchingOverlay isFetching fullscreen={false} color={c} />
                <SampleContent />
              </div>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Backdrop Opacity
        </h3>
        <div className="flex gap-6 flex-wrap">
          {[10, 30, 60, 90].map(opacity => <div key={opacity} className="space-y-2">
              <p className="text-xs text-text-secondary">opacity {opacity}%</p>
              <div className="relative border border-border rounded-lg overflow-hidden w-36 h-28">
                <FetchingOverlay isFetching fullscreen={false} backdropOpacity={opacity} />
                <SampleContent />
              </div>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="flex gap-6 flex-wrap">
          <div className="space-y-2">
            <p className="text-xs text-text-secondary">Inactive (isFetching=false)</p>
            <div className="relative border border-border rounded-lg overflow-hidden w-48">
              <FetchingOverlay isFetching={false} fullscreen={false} />
              <SampleContent />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-text-secondary">With label</p>
            <div className="relative border border-border rounded-lg overflow-hidden w-48 h-32">
              <FetchingOverlay isFetching fullscreen={false} label="Loading data..." />
              <SampleContent />
            </div>
          </div>
        </div>
      </section>
    </div>
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const D=["Playground","Showcase"];export{t as Playground,l as Showcase,D as __namedExportsOrder,B as default};
