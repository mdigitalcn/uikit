import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as v,a as j}from"./utils-_uLxnvdl.js";import{R as y}from"./index-ZH-6pyQh.js";import{c as N}from"./variants-CTjkuV9j.js";import"./_commonjsHelpers-CqkleIqs.js";const w=j("animate-pulse",{variants:{size:{xs:"h-3",sm:"h-4",md:"h-5",lg:"h-6"},shape:{text:"rounded w-full",circle:"rounded-full aspect-square",rectangular:"rounded-md",rounded:"rounded-lg"},color:N},defaultVariants:{size:"md",shape:"text",color:"default"}}),s=y.memo(({color:t="default",size:i="md",shape:x,circle:p=!1,isLoaded:u=!1,children:d,className:g})=>{const f=x??(p?"circle":"text");return u&&d?e.jsx("div",{className:"[--_duration:var(--duration-slow)] animate-in fade-in duration-slot",children:d}):e.jsx("div",{"data-slot":"root",role:"status","aria-busy":"true","aria-label":"Loading",className:v("skeleton_root",w({size:i,shape:f,color:t}),"bg-slot-20",g)})});s.displayName="Skeleton";s.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{color:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},circle:{defaultValue:{value:"false",computed:!1},required:!1},isLoaded:{defaultValue:{value:"false",computed:!1},required:!1}}};const V={title:"Feedback/Skeleton",component:s,tags:["autodocs"],argTypes:{shape:{control:"select",options:["rectangular","rounded","circle","text"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},animation:{control:"select",options:["pulse","wave","none"]}}},a={args:{width:"100%",height:20,shape:"rectangular"}},n={render:()=>e.jsxs("div",{className:"space-y-10 max-w-md",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Shapes"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{shape:"circle",width:48,height:48}),e.jsx(s,{shape:"rounded",width:48,height:48}),e.jsx(s,{shape:"rectangular",width:48,height:48})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Animations"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"pulse (default)"}),e.jsx(s,{animation:"pulse",height:16})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"wave"}),e.jsx(s,{animation:"wave",height:16})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"none"}),e.jsx(s,{animation:"none",height:16})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"space-y-2",children:["default","primary","accent","success","error"].map(t=>e.jsx(s,{color:t,height:14},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Card Loading Pattern"}),e.jsxs("div",{className:"p-4 border border-border [--_radius:var(--radius-card)] rounded-slot space-y-3",children:[e.jsx(s,{height:160,shape:"rounded"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{shape:"circle",width:40,height:40}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{height:14,width:"70%"}),e.jsx(s,{height:12,width:"50%"})]})]}),e.jsx(s,{height:12}),e.jsx(s,{height:12,width:"90%"}),e.jsx(s,{height:12,width:"60%"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"List Loading Pattern"}),e.jsx("div",{className:"space-y-3",children:[70,85,60].map((t,i)=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{shape:"circle",width:32,height:32}),e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsx(s,{height:14,width:`${t}%`}),e.jsx(s,{height:12,width:"40%"})]})]},i))})]})]})};var o,r,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    width: "100%",
    height: 20,
    shape: "rectangular"
  }
}`,...(c=(r=a.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var l,h,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Shapes</h3>
        <div className="flex items-center gap-4">
          <Skeleton shape="circle" width={48} height={48} />
          <Skeleton shape="rounded" width={48} height={48} />
          <Skeleton shape="rectangular" width={48} height={48} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Animations</h3>
        <div className="space-y-3">
          <div><p className="text-xs text-text-secondary mb-1">pulse (default)</p><Skeleton animation="pulse" height={16} /></div>
          <div><p className="text-xs text-text-secondary mb-1">wave</p><Skeleton animation="wave" height={16} /></div>
          <div><p className="text-xs text-text-secondary mb-1">none</p><Skeleton animation="none" height={16} /></div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-2">
          {(["default", "primary", "accent", "success", "error"] as const).map(c => <Skeleton key={c} color={c} height={14} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Card Loading Pattern</h3>
        <div className="p-4 border border-border [--_radius:var(--radius-card)] rounded-slot space-y-3">
          <Skeleton height={160} shape="rounded" />
          <div className="flex items-center gap-3">
            <Skeleton shape="circle" width={40} height={40} />
            <div className="flex-1 space-y-2"><Skeleton height={14} width="70%" /><Skeleton height={12} width="50%" /></div>
          </div>
          <Skeleton height={12} /><Skeleton height={12} width="90%" /><Skeleton height={12} width="60%" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">List Loading Pattern</h3>
        <div className="space-y-3">
          {[70, 85, 60].map((w, i) => <div key={i} className="flex items-center gap-3">
              <Skeleton shape="circle" width={32} height={32} />
              <div className="flex-1 space-y-1"><Skeleton height={14} width={\`\${w}%\`} /><Skeleton height={12} width="40%" /></div>
            </div>)}
        </div>
      </section>
    </div>
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const P=["Playground","Showcase"];export{a as Playground,n as Showcase,P as __namedExportsOrder,V as default};
