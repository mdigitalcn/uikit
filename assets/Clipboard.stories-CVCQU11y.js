import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as i,i as j,a as P}from"./utils-_uLxnvdl.js";import{R as $,r as m}from"./index-ZH-6pyQh.js";import{u as A,R as K}from"./useRipple-BuuTbn0W.js";import{c as b}from"./variants-CTjkuV9j.js";import{C as U}from"./check-CKCh4cDT.js";import{C as G}from"./copy-IW0OH-Me.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";async function O(t){var o,u;if((o=navigator.clipboard)!=null&&o.writeText){await navigator.clipboard.writeText(t);return}if(typeof ClipboardItem<"u"&&((u=navigator.clipboard)!=null&&u.write)){const r=new Blob([t],{type:"text/plain"});await navigator.clipboard.write([new ClipboardItem({"text/plain":r})]);return}const a=document.createElement("textarea");a.value=t,a.style.cssText="position:fixed;opacity:0;left:-9999px",document.body.appendChild(a),a.focus(),a.select();try{const r=document.getSelection();if(r){const p=document.createRange();p.selectNodeContents(a),r.removeAllRanges(),r.addRange(p)}document.execCommand("copy")}finally{document.body.removeChild(a)}}const L=P("inline-flex items-center justify-between gap-2 [--_radius:var(--radius-button)] rounded-slot font-medium transition-colors cursor-pointer border focus:outline-none focus-visible:ring-2 focus-visible:ring-slot focus-visible:ring-offset-2 focus-visible:ring-offset-background relative overflow-hidden",{variants:{size:{xs:"px-1.5 py-1 text-xs",sm:"px-2 py-1.5 text-xs",md:"px-2.5 py-2 text-sm",lg:"px-3.5 py-2 text-lg"}},defaultVariants:{size:"md"}}),Q=(t,a)=>{const o=b[t]||b.default;return a==="solid"?i(o,"bg-slot border-slot text-slot-fg hover:bg-slot-90"):a==="soft"?i(o,"bg-slot-10 border-slot-30 text-slot hover:bg-slot-20"):i(o,"bg-background border-slot text-slot hover:bg-slot-10")},s=$.memo(({value:t,color:a="default",size:o="md",variant:u="default",showValue:r=!0,successDuration:p=2e3,disabled:c=!1,onCopy:v,className:D,classNames:n,ref:S})=>{const[y,w]=m.useState(!1),d=m.useRef(null),h=m.useRef(!0),{ripples:I,onPointerDown:_,onKeyDown:q,onAnimationEnd:E}=A(!c);m.useEffect(()=>()=>{h.current=!1,d.current&&clearTimeout(d.current)},[]);const g=async()=>{if(!c)try{await O(t),h.current&&w(!0),v==null||v(),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{h.current&&w(!1)},p)}catch{}},T=l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),g())};return e.jsxs("div",{ref:S,role:"button",tabIndex:c?-1:0,onClick:g,onPointerDown:_,onKeyDown:l=>{q(l),T(l)},"aria-label":y?"Copied to clipboard":`Copy ${r?t:"to clipboard"}`,"aria-disabled":c,"aria-live":"polite",className:i(L({size:o}),Q(a,u),b[a],"focus-visible:ring-slot",c&&"opacity-50 cursor-not-allowed",!r&&"aspect-square justify-center","clipboard_root",n==null?void 0:n.root,D),"data-slot":"root",children:[r&&e.jsx("span",{className:i("font-mono truncate clipboard_input",n==null?void 0:n.input),"data-slot":"input",children:t}),y?e.jsx(U,{className:i(j[o],"[--_duration:var(--duration-exit)] shrink-0 clipboard_button animate-in zoom-in-75 duration-slot",n==null?void 0:n.button),"data-slot":"icon"}):e.jsx(G,{className:i(j[o],"shrink-0 clipboard_button",n==null?void 0:n.button),"data-slot":"icon"}),e.jsx(K,{ripples:I,onAnimationEnd:E})]})});s.displayName="Clipboard";s.__docgenInfo={description:"",methods:[],displayName:"Clipboard",props:{color:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},showValue:{defaultValue:{value:"true",computed:!1},required:!1},successDuration:{defaultValue:{value:"2000",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const te={title:"General/Clipboard",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","soft"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},showValue:{control:"boolean"},disabled:{control:"boolean"},successDuration:{control:"number"}}},B=["default","primary","secondary","accent","success","error","warning","info"],x={args:{value:"npm install @mdigitalcn/uikit",size:"md",variant:"default",color:"primary",showValue:!0,disabled:!1,successDuration:2e3}},f={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-lg",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"space-y-3",children:["default","solid","soft"].map(t=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-14",children:t}),e.jsx(s,{value:`${t} variant — click to copy`,variant:t,color:"primary",showValue:!0})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"space-y-2",children:B.map(t=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-20",children:t}),e.jsx(s,{value:`color: ${t}`,color:t,variant:"soft",showValue:!0})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"space-y-3",children:["xs","sm","md","lg"].map(t=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-6",children:t}),e.jsx(s,{size:t,value:`size ${t} — npm install @mdigitalcn/uikit`,showValue:!0})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Show Value vs Icon Only"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-24",children:"showValue=true"}),e.jsx(s,{value:"npm run build",showValue:!0,color:"primary"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-24",children:"showValue=false"}),e.jsx(s,{value:"npm run build",showValue:!1,color:"primary"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Real-world Use Cases"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"Install command"}),e.jsx(s,{value:"npm install @mdigitalcn/uikit",color:"primary",showValue:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"API key"}),e.jsx(s,{value:"sk-1234567890abcdefghijklmnopqrstuvwxyz",color:"accent",variant:"soft",showValue:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"Referral link"}),e.jsx(s,{value:"https://app.example.com/invite/abc123xyz",color:"success",variant:"default",showValue:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"Git clone URL"}),e.jsx(s,{value:"git clone https://github.com/example/repo.git",color:"default",variant:"soft",size:"sm",showValue:!0})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-16",children:"Disabled"}),e.jsx(s,{value:"Cannot copy this",disabled:!0,showValue:!0,color:"primary"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-16",children:"Short feedback"}),e.jsx(s,{value:"Quick feedback (500ms)",successDuration:500,showValue:!0,color:"success"})]})]})]})]})};var N,k,V;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: "npm install @mdigitalcn/uikit",
    size: "md",
    variant: "default",
    color: "primary",
    showValue: true,
    disabled: false,
    successDuration: 2000
  }
}`,...(V=(k=x.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var C,R,z;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-lg">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="space-y-3">
          {(["default", "solid", "soft"] as const).map(v => <div key={v} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-14">{v}</span>
              <Clipboard value={\`\${v} variant — click to copy\`} variant={v} color="primary" showValue />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="space-y-2">
          {colors.map(c => <div key={c} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-20">{c}</span>
              <Clipboard value={\`color: \${c}\`} color={c} variant="soft" showValue />
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
              <Clipboard size={s} value={\`size \${s} — npm install @mdigitalcn/uikit\`} showValue />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Show Value vs Icon Only
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-24">showValue=true</span>
            <Clipboard value="npm run build" showValue color="primary" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-24">showValue=false</span>
            <Clipboard value="npm run build" showValue={false} color="primary" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Real-world Use Cases
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-1">Install command</p>
            <Clipboard value="npm install @mdigitalcn/uikit" color="primary" showValue />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">API key</p>
            <Clipboard value="sk-1234567890abcdefghijklmnopqrstuvwxyz" color="accent" variant="soft" showValue />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Referral link</p>
            <Clipboard value="https://app.example.com/invite/abc123xyz" color="success" variant="default" showValue />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Git clone URL</p>
            <Clipboard value="git clone https://github.com/example/repo.git" color="default" variant="soft" size="sm" showValue />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-16">Disabled</span>
            <Clipboard value="Cannot copy this" disabled showValue color="primary" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-16">Short feedback</span>
            <Clipboard value="Quick feedback (500ms)" successDuration={500} showValue color="success" />
          </div>
        </div>
      </section>
    </div>
}`,...(z=(R=f.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const se=["Playground","Showcase"];export{x as Playground,f as Showcase,se as __namedExportsOrder,te as default};
