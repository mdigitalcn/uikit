import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as H,r as b}from"./index-ZH-6pyQh.js";import{c as y}from"./utils-_uLxnvdl.js";import"./_commonjsHelpers-CqkleIqs.js";const _={xs:"4px",sm:"6px",md:"8px",lg:"10px"},I="scroll-area_root relative overflow-hidden",a=H.memo(({children:t,maxHeight:r,maxWidth:s,direction:n="vertical",size:S="md",scrollbarVisibility:x="auto",className:C,classNames:c,ref:A,style:$,...z})=>{const o=`scroll-area-${b.useId().replace(/:/g,"")}`,i=_[S],l=b.useRef(null),R=()=>n==="vertical"?"overflow-y-auto overflow-x-hidden":n==="horizontal"?"overflow-x-auto overflow-y-hidden":"overflow-auto",V={...$,...r&&{maxHeight:typeof r=="number"?`${r}px`:r},...s&&{maxWidth:typeof s=="number"?`${s}px`:s}};return b.useEffect(()=>{const h=`
        .${o} {
          scrollbar-width: thin;
          scrollbar-color: hsl(var(--color-border)) transparent;
        }

        .${o}::-webkit-scrollbar {
          width: ${n!=="horizontal"?i:"0"};
          height: ${n!=="vertical"?i:"0"};
        }

        .${o}::-webkit-scrollbar-track {
          background: transparent;
          border-radius: ${i};
        }

        .${o}::-webkit-scrollbar-thumb {
          background: hsl(var(--color-border));
          border-radius: ${i};
          opacity: ${x==="hover"?"0":"1"};
          transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
        }

        .${o}::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--color-border-strong));
        }

        ${x==="hover"?`.${o}:hover::-webkit-scrollbar-thumb {
          opacity: 1;
        }`:""}

        .${o}::-webkit-scrollbar-corner {
          background: transparent;
        }
      `;if(l.current)l.current.textContent=h;else{const p=document.createElement("style");p.textContent=h,document.head.appendChild(p),l.current=p}return()=>{l.current&&(document.head.removeChild(l.current),l.current=null)}},[o,n,i,x]),e.jsx("div",{ref:A,className:y(I,c==null?void 0:c.root,C),"data-slot":"root",...z,children:e.jsx("div",{className:y("scroll-area_viewport",o,R(),c==null?void 0:c.viewport),style:V,"data-slot":"viewport",children:t})})});a.displayName="ScrollArea";a.__docgenInfo={description:`ScrollArea Component
Provides a customizable scrollable container with styled scrollbars`,methods:[],displayName:"ScrollArea",props:{direction:{defaultValue:{value:"'vertical'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},scrollbarVisibility:{defaultValue:{value:"'auto'",computed:!1},required:!1}}};const D={title:"Layout/ScrollArea",component:a,tags:["autodocs"],argTypes:{direction:{control:"select",options:["vertical","horizontal","both"]},size:{control:"select",options:["xs","sm","md","lg"]},scrollbarVisibility:{control:"select",options:["auto","always","hover"]}}},u=Array.from({length:30},(t,r)=>`Row ${r+1} — Lorem ipsum dolor sit amet, consectetur adipiscing elit.`),v=Array.from({length:20},(t,r)=>({id:r+1,name:`User ${r+1}`,role:["Admin","Editor","Viewer"][r%3],status:r%4===3?"Inactive":"Active"})),d={render:()=>e.jsx(a,{className:"h-48 rounded-lg border border-border p-4",children:u.map((t,r)=>e.jsx("p",{className:"py-1 text-sm text-text-secondary border-b border-border/40 last:border-0",children:t},r))})},m={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Vertical Scroll"}),e.jsx(a,{maxHeight:200,className:"rounded-lg border border-border p-4",children:v.map(({id:t,name:r,role:s,status:n})=>e.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-border/40 last:border-0",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-semibold shrink-0",children:t}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-primary",children:r}),e.jsx("p",{className:"text-xs text-text-secondary",children:s})]})]}),e.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full font-medium ${n==="Active"?"bg-success/10 text-success":"bg-border text-text-secondary"}`,children:n})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Horizontal Scroll"}),e.jsx(a,{direction:"horizontal",className:"rounded-lg border border-border p-4",children:e.jsx("div",{className:"flex gap-3 min-w-max",children:Array.from({length:14},(t,r)=>e.jsxs("div",{className:"flex flex-col items-center justify-center w-28 h-24 bg-surface rounded-lg border border-border shrink-0",children:[e.jsx("div",{className:"text-base font-bold text-text-primary",children:r+1}),e.jsxs("div",{className:"text-xs text-text-secondary mt-1",children:["Card ",r+1]})]},r))})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Both Directions"}),e.jsx(a,{direction:"both",maxHeight:200,className:"rounded-lg border border-border p-4",children:e.jsxs("div",{className:"min-w-[700px]",children:[e.jsxs("div",{className:"grid grid-cols-5 gap-4 pb-2 border-b border-border mb-2 text-xs font-semibold text-text-secondary",children:[e.jsx("span",{children:"#"}),e.jsx("span",{children:"Name"}),e.jsx("span",{children:"Role"}),e.jsx("span",{children:"Status"}),e.jsx("span",{children:"Revenue"})]}),v.map(({id:t,name:r,role:s,status:n})=>e.jsxs("div",{className:"grid grid-cols-5 gap-4 py-2 border-b border-border/40 last:border-0 text-sm text-text-secondary",children:[e.jsx("span",{children:t}),e.jsx("span",{className:"text-text-primary font-medium",children:r}),e.jsx("span",{children:s}),e.jsx("span",{children:n}),e.jsxs("span",{className:"text-success",children:["$",(t*127.5).toFixed(2)]})]},t))]})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Scrollbar Sizes"}),e.jsx("div",{className:"space-y-4",children:["xs","sm","md","lg"].map(t=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-2",children:["size: ",t]}),e.jsx(a,{direction:"vertical",size:t,maxHeight:80,scrollbarVisibility:"always",className:"rounded-lg border border-border p-3",children:u.slice(0,8).map((r,s)=>e.jsx("p",{className:"text-xs text-text-secondary py-0.5",children:r},s))})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Scrollbar Visibility"}),e.jsx("div",{className:"space-y-4",children:["auto","always","hover"].map(t=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-2",children:["scrollbarVisibility: ",t]}),e.jsx(a,{direction:"vertical",scrollbarVisibility:t,maxHeight:80,className:"rounded-lg border border-border p-3",children:u.slice(0,8).map((r,s)=>e.jsx("p",{className:"text-xs text-text-secondary py-0.5",children:r},s))})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Code Block"}),e.jsx(a,{direction:"both",maxHeight:160,className:"rounded-lg border border-border bg-[#1e1e2e]",children:e.jsx("pre",{className:"p-4 text-sm font-mono text-[#cdd6f4] min-w-max leading-relaxed",children:`import { useState, useCallback } from "react";

interface CounterProps {
  initialCount?: number;
  step?: number;
  min?: number;
  max?: number;
}

export function Counter({
  initialCount = 0,
  step = 1,
  min = -Infinity,
  max = Infinity,
}: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(
    () => setCount((c) => Math.min(c + step, max)),
    [step, max],
  );

  const decrement = useCallback(
    () => setCount((c) => Math.max(c - step, min)),
    [step, min],
  );

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}`})})]})]})};var f,g,N;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-48 rounded-lg border border-border p-4">
      {loremRows.map((row, i) => <p key={i} className="py-1 text-sm text-text-secondary border-b border-border/40 last:border-0">
          {row}
        </p>)}
    </ScrollArea>
}`,...(N=(g=d.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var w,j,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Vertical Scroll</h3>
        <ScrollArea maxHeight={200} className="rounded-lg border border-border p-4">
          {users.map(({
          id,
          name,
          role,
          status
        }) => <div key={id} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-semibold shrink-0">
                  {id}
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">{name}</p>
                  <p className="text-xs text-text-secondary">{role}</p>
                </div>
              </div>
              <span className={\`text-xs px-2 py-0.5 rounded-full font-medium \${status === "Active" ? "bg-success/10 text-success" : "bg-border text-text-secondary"}\`}>
                {status}
              </span>
            </div>)}
        </ScrollArea>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Horizontal Scroll</h3>
        <ScrollArea direction="horizontal" className="rounded-lg border border-border p-4">
          <div className="flex gap-3 min-w-max">
            {Array.from({
            length: 14
          }, (_, i) => <div key={i} className="flex flex-col items-center justify-center w-28 h-24 bg-surface rounded-lg border border-border shrink-0">
                <div className="text-base font-bold text-text-primary">{i + 1}</div>
                <div className="text-xs text-text-secondary mt-1">Card {i + 1}</div>
              </div>)}
          </div>
        </ScrollArea>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Both Directions</h3>
        <ScrollArea direction="both" maxHeight={200} className="rounded-lg border border-border p-4">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-5 gap-4 pb-2 border-b border-border mb-2 text-xs font-semibold text-text-secondary">
              <span>#</span>
              <span>Name</span>
              <span>Role</span>
              <span>Status</span>
              <span>Revenue</span>
            </div>
            {users.map(({
            id,
            name,
            role,
            status
          }) => <div key={id} className="grid grid-cols-5 gap-4 py-2 border-b border-border/40 last:border-0 text-sm text-text-secondary">
                <span>{id}</span>
                <span className="text-text-primary font-medium">{name}</span>
                <span>{role}</span>
                <span>{status}</span>
                <span className="text-success">\${(id * 127.5).toFixed(2)}</span>
              </div>)}
          </div>
        </ScrollArea>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Scrollbar Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s}>
              <p className="text-xs text-text-secondary mb-2">size: {s}</p>
              <ScrollArea direction="vertical" size={s} maxHeight={80} scrollbarVisibility="always" className="rounded-lg border border-border p-3">
                {loremRows.slice(0, 8).map((row, i) => <p key={i} className="text-xs text-text-secondary py-0.5">
                    {row}
                  </p>)}
              </ScrollArea>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Scrollbar Visibility</h3>
        <div className="space-y-4">
          {(["auto", "always", "hover"] as const).map(vis => <div key={vis}>
              <p className="text-xs text-text-secondary mb-2">scrollbarVisibility: {vis}</p>
              <ScrollArea direction="vertical" scrollbarVisibility={vis} maxHeight={80} className="rounded-lg border border-border p-3">
                {loremRows.slice(0, 8).map((row, i) => <p key={i} className="text-xs text-text-secondary py-0.5">
                    {row}
                  </p>)}
              </ScrollArea>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Code Block</h3>
        <ScrollArea direction="both" maxHeight={160} className="rounded-lg border border-border bg-[#1e1e2e]">
          <pre className="p-4 text-sm font-mono text-[#cdd6f4] min-w-max leading-relaxed">
          {\`import { useState, useCallback } from "react";

interface CounterProps {
  initialCount?: number;
  step?: number;
  min?: number;
  max?: number;
}

export function Counter({
  initialCount = 0,
  step = 1,
  min = -Infinity,
  max = Infinity,
}: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(
    () => setCount((c) => Math.min(c + step, max)),
    [step, max],
  );

  const decrement = useCallback(
    () => setCount((c) => Math.max(c - step, min)),
    [step, min],
  );

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}\`}
          </pre>
        </ScrollArea>
      </section>
    </div>
}`,...(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const F=["Playground","Showcase"];export{d as Playground,m as Showcase,F as __namedExportsOrder,D as default};
