import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as B,r as c}from"./index-ZH-6pyQh.js";import{c as y,a as J}from"./utils-_uLxnvdl.js";import{c as K}from"./variants-CTjkuV9j.js";import"./_commonjsHelpers-CqkleIqs.js";const X=J("block transition-colors duration-slot text-text-secondary hover:text-text-primary",{variants:{size:{xs:"text-xs py-0.5 pl-3",sm:"text-sm py-0.5 pl-3",md:"text-sm py-1 pl-4",lg:"text-base py-1 pl-5"}},defaultVariants:{size:"md"}}),Z={xs:"w-0.5",sm:"w-0.5",md:"w-0.5",lg:"w-1"};function _(t){return t.flatMap(r=>[r.id,...r.children?_(r.children):[]])}function j(t){return t?t():typeof window<"u"?window:null}function ee(t){return!t||t===window||t instanceof Window?{top:0}:t.getBoundingClientRect()}function T(t,r){t.scrollTo({top:r,behavior:"smooth"})}const u=B.memo(({items:t,offset:r=0,targetOffset:h=0,size:N="md",color:W="primary",affix:R=!1,affixTop:O=0,getContainer:p,className:Q,classNames:l,onChange:d})=>{const[m,I]=c.useState(""),[H,M]=c.useState(0),[C,G]=c.useState(0),b=c.useRef(null),A=c.useRef(new Map),w=c.useRef(!1),S=_(t),f=c.useCallback(()=>{if(w.current||typeof window>"u")return;const s=j(p),a=ee(s).top;let i="";for(const o of S){const x=document.getElementById(o);x&&x.getBoundingClientRect().top-a<=r+10&&(i=o)}i&&i!==m&&(I(i),d==null||d(i))},[S,r,m,d,p]);c.useEffect(()=>{if(typeof window>"u")return;const s=j(p),a=s instanceof Window?window:s;return a.addEventListener("scroll",f,{passive:!0}),f(),()=>a.removeEventListener("scroll",f)},[f,p]),c.useEffect(()=>{if(!m||!b.current)return;const s=A.current.get(m);if(s){const a=b.current.getBoundingClientRect(),i=s.getBoundingClientRect();M(i.top-a.top),G(i.height)}},[m]);const Y=c.useCallback((s,a)=>{s.preventDefault();const i=document.getElementById(a);if(!i)return;const o=j(p);if(w.current=!0,I(a),d==null||d(a),o instanceof Window){const x=i.getBoundingClientRect().top+window.scrollY-h;T(o,x)}else{const x=o,q=i.getBoundingClientRect().top-x.getBoundingClientRect().top+x.scrollTop-h;T(o,q)}setTimeout(()=>{w.current=!1},800)},[h,d,p]),$={0:"",1:"pl-6",2:"pl-10",3:"pl-14"},E=(s,a=0)=>{var i;return e.jsxs(B.Fragment,{children:[e.jsx("a",{ref:o=>{o&&A.current.set(s.id,o)},href:`#${s.id}`,onClick:o=>Y(o,s.id),"data-slot":"link",className:y("anchor_link",X({size:N}),"truncate",a>0&&($[a]||"pl-14"),m===s.id&&"text-slot font-medium",m===s.id&&(l==null?void 0:l.activeLink),l==null?void 0:l.link),children:s.label}),(i=s.children)==null?void 0:i.map(o=>E(o,a+1))]},s.id)};return e.jsxs("nav",{ref:b,"data-slot":"root",className:y("anchor_root","relative",K[W],R&&"sticky",l==null?void 0:l.root,Q),style:R?{top:O}:void 0,"aria-label":"Table of contents",children:[e.jsx("div",{"data-slot":"indicator",className:y("anchor_indicator","absolute left-0 rounded-full bg-slot transition-[top,height,opacity] duration-slot",Z[N],l==null?void 0:l.indicator),style:{top:H,height:C,opacity:m?1:0}}),e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-px bg-border"}),t.map(s=>E(s))]})});u.displayName="Anchor";u.__docgenInfo={description:"",methods:[],displayName:"Anchor",props:{offset:{defaultValue:{value:"0",computed:!1},required:!1},targetOffset:{defaultValue:{value:"0",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},affix:{defaultValue:{value:"false",computed:!1},required:!1},affixTop:{defaultValue:{value:"0",computed:!1},required:!1}}};const ce={title:"Navigation/Anchor",component:u,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},affix:{control:"boolean"},affixTop:{control:"number"},offset:{control:"number"},targetOffset:{control:"number"}}},F=[{id:"overview",label:"Overview"},{id:"installation",label:"Installation"},{id:"usage",label:"Usage",children:[{id:"basic-usage",label:"Basic Usage"},{id:"advanced-usage",label:"Advanced Usage"}]},{id:"api",label:"API Reference"},{id:"examples",label:"Examples"},{id:"faq",label:"FAQ"}],k=[{id:"section-1",label:"Introduction"},{id:"section-2",label:"Getting Started"},{id:"section-3",label:"Configuration"},{id:"section-4",label:"Deployment"}],n=({id:t,title:r})=>e.jsxs("section",{id:t,style:{marginBottom:"4rem"},children:[e.jsx("h2",{className:"text-lg font-bold text-text-primary mb-2",children:r}),e.jsx("p",{className:"text-sm text-text-secondary leading-relaxed mb-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{className:"text-sm text-text-secondary leading-relaxed",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."})]});function te(t){const r=c.useRef(null);return e.jsxs("div",{className:"flex gap-8 max-w-2xl",children:[e.jsx("div",{className:"shrink-0 w-40",children:e.jsx(u,{...t,getContainer:()=>r.current})}),e.jsxs("div",{ref:r,className:"flex-1 max-h-96 overflow-y-auto pr-2",children:[e.jsx(n,{id:"overview",title:"Overview"}),e.jsx(n,{id:"installation",title:"Installation"}),e.jsx(n,{id:"usage",title:"Usage"}),e.jsx(n,{id:"basic-usage",title:"Basic Usage"}),e.jsx(n,{id:"advanced-usage",title:"Advanced Usage"}),e.jsx(n,{id:"api",title:"API Reference"}),e.jsx(n,{id:"examples",title:"Examples"}),e.jsx(n,{id:"faq",title:"FAQ"})]})]})}const g={args:{items:F,color:"primary",size:"md",offset:0},render:t=>e.jsx(te,{...t})};function se(){const t=c.useRef(null);return e.jsxs("div",{className:"flex gap-8",children:[e.jsx("div",{className:"shrink-0 w-44",children:e.jsx(u,{items:F,color:"primary",size:"md",getContainer:()=>t.current})}),e.jsxs("div",{ref:t,className:"flex-1 max-h-72 overflow-y-auto border border-border rounded-lg p-4",children:[e.jsx(n,{id:"overview",title:"Overview"}),e.jsx(n,{id:"installation",title:"Installation"}),e.jsx(n,{id:"usage",title:"Usage"}),e.jsx(n,{id:"basic-usage",title:"Basic Usage"}),e.jsx(n,{id:"advanced-usage",title:"Advanced Usage"}),e.jsx(n,{id:"api",title:"API Reference"}),e.jsx(n,{id:"examples",title:"Examples"}),e.jsx(n,{id:"faq",title:"FAQ"})]})]})}const v={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-3xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Nested Items (scrollable demo)"}),e.jsx(se,{})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-8",children:["primary","secondary","accent","success","error","warning","info"].map(t=>e.jsxs("div",{className:"w-36",children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:t}),e.jsx(u,{items:k.slice(0,3),color:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap gap-10",children:["xs","sm","md","lg"].map(t=>e.jsxs("div",{className:"w-40",children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:t}),e.jsx(u,{items:k,size:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Flat List (no nesting)"}),e.jsx("div",{className:"w-48",children:e.jsx(u,{items:k,color:"accent"})})]})]})};var z,U,V;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items,
    color: "primary",
    size: "md",
    offset: 0
  },
  render: args => <PlaygroundDemo {...args} />
}`,...(V=(U=g.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var D,L,P;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Nested Items (scrollable demo)
        </h3>
        <ShowcaseNestedDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-8">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(c => <div key={c} className="w-36">
              <p className="text-xs text-text-secondary mb-2">{c}</p>
              <Anchor items={flatItems.slice(0, 3)} color={c} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex flex-wrap gap-10">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s} className="w-40">
              <p className="text-xs text-text-secondary mb-2">{s}</p>
              <Anchor items={flatItems} size={s} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Flat List (no nesting)
        </h3>
        <div className="w-48">
          <Anchor items={flatItems} color="accent" />
        </div>
      </section>
    </div>
}`,...(P=(L=v.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const de=["Playground","Showcase"];export{g as Playground,v as Showcase,de as __namedExportsOrder,ce as default};
