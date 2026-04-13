import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as C,r as c}from"./index-ZH-6pyQh.js";import{c as u,a as re}from"./utils-_uLxnvdl.js";import{u as xe}from"./useControllable-BTRR6hV3.js";import{c as ye}from"./variants-CTjkuV9j.js";import{H as fe}from"./house-DCjPrFcn.js";import{U as ve}from"./user-BM8Midap.js";import{S as be}from"./settings-D1wlBKo1.js";import{L as he}from"./lock-D-iRFELD.js";import{B as ge}from"./bell-BD3KA5A_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const we=typeof window<"u"?c.useLayoutEffect:c.useEffect,w=["default","primary","secondary","accent","success","error","warning","info"],ke=re("flex relative",{variants:{size:{xs:"gap-(--tabs-gap-xs)",sm:"gap-(--tabs-gap-sm)",md:"gap-(--tabs-gap-md)",lg:"gap-(--tabs-gap-lg)"},variant:{default:"border-b",solid:"border-b",soft:"border-b",pill:"bg-surface p-0.5 border border-border gap-0 w-fit"},radius:{xs:"",sm:"",md:"",lg:"",full:""}},compoundVariants:[{variant:"pill",radius:"xs",className:"rounded-button"},{variant:"pill",radius:"sm",className:"rounded-dropdown"},{variant:"pill",radius:"md",className:"rounded-card"},{variant:"pill",radius:"lg",className:"rounded-modal"},{variant:"pill",radius:"full",className:"rounded-full"}],defaultVariants:{size:"md",variant:"default",radius:"md"}}),je={xs:"rounded-button",sm:"rounded-dropdown",md:"rounded-card",lg:"rounded-modal",full:"rounded-full"},Ne=re("relative z-[var(--z-tab)] font-medium transition-colors duration-slot ease-out cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-slot focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:rounded-sm",{variants:{size:{xs:"text-xs px-(--tabs-padding-x-xs) py-(--tabs-padding-y-xs)",sm:"text-sm px-(--tabs-padding-x-sm) py-(--tabs-padding-y-sm)",md:"text-base px-(--tabs-padding-x-md) py-(--tabs-padding-y-md)",lg:"text-lg px-(--tabs-padding-x-lg) py-(--tabs-padding-y-lg)"},variant:{default:"pb-2 -mb-px",solid:"pb-2 -mb-px",soft:"pb-2 -mb-px",pill:""},radius:{xs:"",sm:"",md:"",lg:"",full:""},color:{default:"",primary:"",secondary:"",accent:"",success:"",error:"",warning:"",info:""},active:{true:"",false:""}},compoundVariants:[...w.map(a=>({color:a,active:!1,className:"text-text-secondary hover:text-text-primary"})),...w.map(a=>({variant:"pill",color:a,active:!0,className:"text-slot-fg"})),...w.map(a=>({variant:"default",color:a,active:!0,className:"text-slot"})),...w.map(a=>({variant:"solid",color:a,active:!0,className:"text-slot"})),...w.map(a=>({variant:"soft",color:a,active:!0,className:"text-slot"})),...w.map(a=>({variant:"pill",color:a,active:!1,className:"bg-transparent hover:bg-background/50"})),{variant:"pill",radius:"xs",className:"rounded-button"},{variant:"pill",radius:"sm",className:"rounded-dropdown"},{variant:"pill",radius:"md",className:"rounded-card"},{variant:"pill",radius:"lg",className:"rounded-modal"},{variant:"pill",radius:"full",className:"rounded-full"}],defaultVariants:{size:"md",variant:"default",color:"primary",radius:"md",active:!1}}),d=C.memo(({items:a,defaultActiveKey:j,activeKey:k,color:R="primary",size:L="md",variant:f="default",radius:V="md",onChange:ne,destroyInactivePanel:oe=!0,className:le,classNames:r})=>{var E;const[m,$]=xe({value:k,defaultValue:j||((E=a[0])==null?void 0:E.key)||"",onChange:ne}),N=c.useRef(null),v=c.useRef(new Map),[ce,D]=C.useState({}),[b,de]=C.useState(!1),h=c.useId(),g=c.useCallback(()=>{const t=v.current.get(m),i=N.current;if(!t||!i)return;const s=t.offsetLeft,l=t.offsetWidth,o=t.offsetHeight;if(f==="pill"){let p=0;if(typeof window<"u"){const ue=window.getComputedStyle(i);p=parseFloat(ue.paddingLeft)||0}D({transform:`translateX(${s-p}px)`,width:`${l}px`,height:`${o}px`,opacity:1})}else D({transform:`translateX(${s}px)`,width:`${l}px`,opacity:1});b||requestAnimationFrame(()=>de(!0))},[m,f,b]);we(()=>{g()},[g,a,L]),c.useEffect(()=>{const t=v.current.get(m),i=N.current;if(!t||!i)return;const s=t.offsetLeft,l=s+t.offsetWidth,o=i.scrollLeft,n=i.clientWidth;i.scrollTo&&(s<o?i.scrollTo({left:s,behavior:b?"smooth":"auto"}):l>o+n&&i.scrollTo({left:l-n,behavior:b?"smooth":"auto"}))},[m,b]),c.useEffect(()=>{if(typeof window>"u")return;const t=()=>{requestAnimationFrame(()=>{g()})};return window.addEventListener("resize",t),window.addEventListener("orientationchange",t),()=>{window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)}},[g]),c.useEffect(()=>{const t=N.current;if(!t||typeof ResizeObserver>"u")return;const i=new ResizeObserver(()=>{requestAnimationFrame(()=>{g()})});return i.observe(t),()=>{i.disconnect()}},[g]);const _=c.useCallback((t,i)=>{i||($(t),requestAnimationFrame(()=>{const s=v.current.get(t);s==null||s.focus()}))},[$]),me=c.useCallback((t,i)=>{const s=a.map((n,p)=>n.disabled?-1:p).filter(n=>n!==-1),l=s.indexOf(i);let o;switch(t.key){case"ArrowLeft":case"ArrowUp":t.preventDefault(),o=s[l>0?l-1:s.length-1];break;case"ArrowRight":case"ArrowDown":t.preventDefault(),o=s[l<s.length-1?l+1:0];break;case"Home":t.preventDefault(),o=s[0];break;case"End":t.preventDefault(),o=s[s.length-1];break}if(o!==void 0){const n=a[o];if(n){_(n.key);const p=v.current.get(n.key);p==null||p.focus()}}},[a,_]),y=a.find(t=>t.key===m),pe=f==="pill";return e.jsxs("div",{"data-slot":"tabs_root",className:u("tabs_root w-full",ye[R],r==null?void 0:r.root,le),children:[e.jsxs("div",{ref:N,role:"tablist","aria-orientation":"horizontal","data-slot":"tabs_list",className:u("tabs_list overflow-x-auto overflow-y-hidden",ke({size:L,variant:f,radius:V}),f!=="pill"&&"border-border",r==null?void 0:r.list),children:[e.jsx("span",{"data-slot":"tabs_indicator",className:u("tabs_indicator absolute pointer-events-none",pe?u(je[V],"[--_shadow:var(--shadow-sm)] shadow-size-slot top-0.5","bg-slot"):u("bottom-0 h-0.5 rounded-full","bg-slot"),b?"[--_duration:var(--duration-slow)] transition-[transform,width] duration-slot ease-out":"",r==null?void 0:r.indicator),style:ce,"aria-hidden":"true"}),a.map((t,i)=>{const s=t.key===m,l=`tab-${h}-${t.key}`,o=`panel-${h}-${t.key}`;return e.jsxs("button",{ref:n=>{n?v.current.set(t.key,n):v.current.delete(t.key)},id:l,role:"tab",type:"button","aria-selected":s,"aria-controls":o,tabIndex:s?0:-1,"data-slot":"tabs_tab",className:u("tabs_tab",Ne({size:L,variant:f,radius:V,color:R,active:s}),t.disabled&&"opacity-50 cursor-not-allowed",r==null?void 0:r.tab,s&&(r==null?void 0:r.tabActive)),onClick:()=>_(t.key,t.disabled),onKeyDown:n=>me(n,i),disabled:t.disabled,children:[t.icon&&e.jsx("span",{"aria-hidden":"true",children:t.icon}),t.label]},t.key)})]}),oe?(y==null?void 0:y.content)&&e.jsx("div",{id:`panel-${h}-${y.key}`,role:"tabpanel","aria-labelledby":`tab-${h}-${y.key}`,"data-slot":"tabs_panel",className:u("tabs_panel","[--_duration:var(--duration-slow)] py-4 animate-in fade-in slide-in-from-bottom-2 duration-slot",r==null?void 0:r.panel),children:y.content},y.key):a.map(t=>e.jsx("div",{id:`panel-${h}-${t.key}`,role:"tabpanel","aria-labelledby":`tab-${h}-${t.key}`,"data-slot":"tabs_panel",hidden:t.key!==m,className:u("tabs_panel",t.key===m&&"py-4",r==null?void 0:r.panel),children:t.content},t.key))]})});d.displayName="Tabs";d.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{color:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},radius:{defaultValue:{value:'"md"',computed:!1},required:!1},destroyInactivePanel:{defaultValue:{value:"true",computed:!1},required:!1}}};const $e={title:"Navigation/Tabs",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","soft","pill"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},radius:{control:"select",options:["xs","sm","md","lg","full"]},destroyInactivePanel:{control:"boolean"}}},x=[{key:"overview",label:"Overview",content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"Overview content goes here. This panel shows a summary of all activity."})},{key:"analytics",label:"Analytics",content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"Analytics content goes here. View detailed charts and metrics."})},{key:"reports",label:"Reports",content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"Reports content goes here. Download and export your data."})},{key:"settings",label:"Settings",content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"Settings content goes here. Configure your preferences."})}],P=[{key:"home",label:"Home",icon:e.jsx(fe,{size:14}),content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"Home dashboard content."})},{key:"user",label:"Profile",icon:e.jsx(ve,{size:14}),content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"User profile content."})},{key:"settings",label:"Settings",icon:e.jsx(be,{size:14}),content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"Settings content."})},{key:"security",label:"Security",icon:e.jsx(he,{size:14}),content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"Security content."})},{key:"notifications",label:"Notifications",icon:e.jsx(ge,{size:14}),content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"Notifications content."})}],ie=[{key:"general",label:"General",content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"General settings content."})},{key:"billing",label:"Billing",content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"Billing content."})},{key:"team",label:"Team",disabled:!0,content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"Team content (upgrade required)."})},{key:"api",label:"API",disabled:!0,content:e.jsx("div",{className:"py-4 text-text-secondary text-sm",children:"API content (upgrade required)."})}],A={args:{items:x,defaultActiveKey:"overview",variant:"default",color:"primary",size:"md",radius:"md",destroyInactivePanel:!1}},I={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-3xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"space-y-8",children:["default","solid","soft","pill"].map(a=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-3 capitalize",children:a}),e.jsx(d,{items:x,defaultActiveKey:"overview",variant:a,color:"primary"})]},a))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"space-y-8",children:["default","primary","secondary","accent","success","error","warning","info"].map(a=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-3 capitalize",children:a}),e.jsx(d,{items:x,defaultActiveKey:"overview",color:a})]},a))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"space-y-8",children:["xs","sm","md","lg"].map(a=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-3 uppercase",children:a}),e.jsx(d,{items:x,defaultActiveKey:"overview",size:a,color:"primary"})]},a))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Pill Radius Variants"}),e.jsx("div",{className:"space-y-6",children:["xs","sm","md","lg","full"].map(a=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-3 capitalize",children:["radius: ",a]}),e.jsx(d,{items:x.slice(0,3),defaultActiveKey:"overview",variant:"pill",color:"primary",radius:a})]},a))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Icons"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(d,{items:P,defaultActiveKey:"home",variant:"default",color:"primary"}),e.jsx(d,{items:P,defaultActiveKey:"home",variant:"pill",color:"primary"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Disabled Tabs"}),e.jsx(d,{items:ie,defaultActiveKey:"general",color:"primary"})]})]})},K={render:()=>{const[a,j]=c.useState("overview");return e.jsxs("div",{className:"p-4 max-w-xl space-y-4",children:[e.jsx("div",{className:"flex gap-2",children:x.map(k=>e.jsx("button",{className:"text-xs px-3 py-1 border rounded hover:bg-surface transition-colors",onClick:()=>j(k.key),children:k.label},k.key))}),e.jsxs("p",{className:"text-xs text-text-secondary",children:["Active: ",a]}),e.jsx(d,{items:x,activeKey:a,onChange:j,color:"primary"})]})}},z={args:{items:P,defaultActiveKey:"home",variant:"default",color:"primary"}},S={args:{items:x,defaultActiveKey:"overview",variant:"pill",color:"primary",radius:"full"}},T={args:{items:ie,defaultActiveKey:"general",color:"primary"}};var q,W,H;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    defaultActiveKey: "overview",
    variant: "default",
    color: "primary",
    size: "md",
    radius: "md",
    destroyInactivePanel: false
  }
}`,...(H=(W=A.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var O,F,B;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="space-y-8">
          {(["default", "solid", "soft", "pill"] as const).map(variant => <div key={variant}>
              <p className="text-xs text-text-secondary mb-3 capitalize">{variant}</p>
              <Tabs items={basicItems} defaultActiveKey="overview" variant={variant} color="primary" />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-8">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <div key={color}>
              <p className="text-xs text-text-secondary mb-3 capitalize">{color}</p>
              <Tabs items={basicItems} defaultActiveKey="overview" color={color} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-8">
          {(["xs", "sm", "md", "lg"] as const).map(size => <div key={size}>
              <p className="text-xs text-text-secondary mb-3 uppercase">{size}</p>
              <Tabs items={basicItems} defaultActiveKey="overview" size={size} color="primary" />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Pill Radius Variants</h3>
        <div className="space-y-6">
          {(["xs", "sm", "md", "lg", "full"] as const).map(radius => <div key={radius}>
              <p className="text-xs text-text-secondary mb-3 capitalize">radius: {radius}</p>
              <Tabs items={basicItems.slice(0, 3)} defaultActiveKey="overview" variant="pill" color="primary" radius={radius} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Icons</h3>
        <div className="space-y-6">
          <Tabs items={iconItems} defaultActiveKey="home" variant="default" color="primary" />
          <Tabs items={iconItems} defaultActiveKey="home" variant="pill" color="primary" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Disabled Tabs</h3>
        <Tabs items={withDisabled} defaultActiveKey="general" color="primary" />
      </section>
    </div>
}`,...(B=(F=I.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var U,G,M;K.parameters={...K.parameters,docs:{...(U=K.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState("overview");
    return <div className="p-4 max-w-xl space-y-4">
        <div className="flex gap-2">
          {basicItems.map(item => <button key={item.key} className="text-xs px-3 py-1 border rounded hover:bg-surface transition-colors" onClick={() => setActiveKey(item.key)}>
              {item.label}
            </button>)}
        </div>
        <p className="text-xs text-text-secondary">Active: {activeKey}</p>
        <Tabs items={basicItems} activeKey={activeKey} onChange={setActiveKey} color="primary" />
      </div>;
  }
}`,...(M=(G=K.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var X,J,Q;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: iconItems,
    defaultActiveKey: "home",
    variant: "default",
    color: "primary"
  }
}`,...(Q=(J=z.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    defaultActiveKey: "overview",
    variant: "pill",
    color: "primary",
    radius: "full"
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    items: withDisabled,
    defaultActiveKey: "general",
    color: "primary"
  }
}`,...(se=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const De=["Playground","Showcase","Controlled","WithIcons","PillVariant","DisabledTabs"];export{K as Controlled,T as DisabledTabs,S as PillVariant,A as Playground,I as Showcase,z as WithIcons,De as __namedExportsOrder,$e as default};
