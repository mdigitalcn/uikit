import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as G,r as o}from"./index-ZH-6pyQh.js";import{c as m,a as J}from"./utils-_uLxnvdl.js";import{u as Q}from"./useControllable-BTRR6hV3.js";import{c as W}from"./variants-CTjkuV9j.js";import{S as H}from"./star-CXKHNDnr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const X=J("inline-flex items-center gap-1",{variants:{size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{size:"md"}}),v={xs:12,sm:16,md:20,lg:24},z=(a,c,d,u)=>d||u?c==="soft"?a==="default"?"fill-border opacity-50 stroke-border":"fill-slot opacity-20 stroke-slot":a==="default"?"fill-border stroke-border":"fill-slot stroke-slot":a==="default"?c==="soft"?"fill-transparent stroke-border opacity-50":"fill-transparent stroke-border":"fill-transparent stroke-slot opacity-20",n=G.memo(({value:a,defaultValue:c=0,count:d=5,allowHalf:u=!1,color:f="warning",size:p="md",variant:b="solid",onChange:$,disabled:j=!1,readOnly:A=!1,className:I,classNames:r,"aria-label":P})=>{const[x,N]=Q({value:a,defaultValue:c,onChange:$}),[h,k]=o.useState(null),F=o.useId(),V=h!==null?h:x??0,i=!j&&!A,g=o.useCallback(t=>{i&&N(t)},[i,N]),C=o.useCallback((t,s)=>{if(!i)return;const l=s?t+.5:t+1;g(l)},[i,g]),R=o.useCallback((t,s)=>{if(!i)return;const l=s?t+.5:t+1;k(l)},[i]),L=o.useCallback(()=>{k(null)},[]),U=o.useCallback(t=>{if(!i)return;const s=u?.5:1;let l=x??0;switch(t.key){case"ArrowRight":case"ArrowUp":t.preventDefault(),l=Math.min((x??0)+s,d);break;case"ArrowLeft":case"ArrowDown":t.preventDefault(),l=Math.max((x??0)-s,0);break;case"Home":t.preventDefault(),l=0;break;case"End":t.preventDefault(),l=d;break;default:return}g(l)},[i,x,d,u,g]),K=o.useCallback(t=>{const s=V-t;return s>=1?"full":s>0&&s<1?"half":"empty"},[V]);return e.jsx("div",{"data-slot":"root",className:m(X({size:p}),"rating_root",W[f],r==null?void 0:r.root,I),children:e.jsx("div",{id:`rating-${F}`,role:"radiogroup","aria-label":P||"Rating","aria-valuetext":`${x} out of ${d} stars`,tabIndex:i?0:-1,onKeyDown:U,onMouseLeave:L,className:m("inline-flex items-center gap-0.5 outline-none","rating_label",r==null?void 0:r.label,i&&"focus-visible:ring-2 focus-visible:ring-slot focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"),children:Array.from({length:d},(t,s)=>{const l=K(s),T=h!==null&&s<Math.ceil(h),S=s+1,B=l!=="empty";return e.jsxs("div",{role:"radio","aria-checked":B,"aria-label":`${S} ${S===1?"star":"stars"}`,className:m("relative inline-flex",i&&"cursor-pointer",j&&"opacity-50 cursor-not-allowed"),children:[u&&e.jsx("div",{className:"absolute inset-0 w-1/2 z-10",onClick:()=>C(s,!0),onMouseEnter:()=>R(s,!0)}),e.jsx("div",{className:m("absolute inset-0 z-10",u?"left-1/2":"left-0"),onClick:()=>C(s,!1),onMouseEnter:()=>R(s,!1)}),e.jsx(H,{width:v[p],height:v[p],className:m(z(f,b,!1,!1),"transition-colors","rating_star",r==null?void 0:r.star),"aria-hidden":"true"}),l!=="empty"&&e.jsx(H,{width:v[p],height:v[p],className:m("absolute top-0 left-0 transition-colors",z(f,b,!0,T),"rating_starFilled",r==null?void 0:r.starFilled),style:{clipPath:l==="half"?"polygon(0 0, 50% 0, 50% 100%, 0 100%)":"none"},"aria-hidden":"true"})]},s)})})})});n.displayName="Rating";n.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{defaultValue:{defaultValue:{value:"0",computed:!1},required:!1},count:{defaultValue:{value:"5",computed:!1},required:!1},allowHalf:{defaultValue:{value:"false",computed:!1},required:!1},color:{defaultValue:{value:"'warning'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'solid'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1}}};const oe={title:"Data Entry/Rating",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","soft"]},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},count:{control:"number"},allowHalf:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"}}},y={args:{defaultValue:3,count:5,size:"md",color:"warning",variant:"default"}},Y=()=>{const[a,c]=o.useState(0);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(n,{value:a,onChange:c,color:"warning"}),e.jsx("p",{className:"text-xs text-text-secondary",children:a===0?"No rating selected":`Rating: ${a} / 5`})]})},Z=["default","primary","secondary","accent","success","error","warning","info"],w={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"space-y-3",children:["default","solid","soft"].map(a=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-16 shrink-0",children:a}),e.jsx(n,{variant:a,defaultValue:3,color:"warning"})]},a))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:Z.map(a=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-16 shrink-0",children:a}),e.jsx(n,{color:a,defaultValue:3})]},a))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"space-y-3",children:["xs","sm","md","lg"].map(a=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-6 shrink-0",children:a}),e.jsx(n,{size:a,defaultValue:3,color:"warning"})]},a))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Half Stars"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-20 shrink-0",children:"allowHalf"}),e.jsx(n,{allowHalf:!0,defaultValue:2.5,color:"warning"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-20 shrink-0",children:"3.5 stars"}),e.jsx(n,{allowHalf:!0,defaultValue:3.5,color:"warning"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-20 shrink-0",children:"4.5 stars"}),e.jsx(n,{allowHalf:!0,defaultValue:4.5,color:"warning"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Star Count"}),e.jsx("div",{className:"space-y-3",children:[3,5,7,10].map(a=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{className:"text-xs text-text-secondary w-16 shrink-0",children:[a," stars"]}),e.jsx(n,{count:a,defaultValue:Math.ceil(a/2),color:"warning"})]},a))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Controlled"}),e.jsx(Y,{})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-16 shrink-0",children:"interactive"}),e.jsx(n,{defaultValue:3,color:"warning"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-16 shrink-0",children:"readOnly"}),e.jsx(n,{defaultValue:3.5,allowHalf:!0,readOnly:!0,color:"warning"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-16 shrink-0",children:"disabled"}),e.jsx(n,{defaultValue:4,disabled:!0,color:"warning"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Product Reviews"}),e.jsx("div",{className:"space-y-4 rounded-lg border border-border p-4",children:[{label:"Overall Experience",value:4.5},{label:"Value for Money",value:4},{label:"Ease of Use",value:5},{label:"Customer Support",value:3.5}].map(({label:a,value:c})=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-text-secondary",children:a}),e.jsx(n,{defaultValue:c,allowHalf:!0,readOnly:!0,size:"sm",color:"warning"})]},a))})]})]})};var E,M,O;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    count: 5,
    size: "md",
    color: "warning",
    variant: "default"
  }
}`,...(O=(M=y.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var D,q,_;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="space-y-3">
          {(["default", "solid", "soft"] as const).map(v => <div key={v} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-16 shrink-0">{v}</span>
              <Rating variant={v} defaultValue={3} color="warning" />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-3">
          {colors.map(c => <div key={c} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-16 shrink-0">{c}</span>
              <Rating color={c} defaultValue={3} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-6 shrink-0">{s}</span>
              <Rating size={s} defaultValue={3} color="warning" />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Half Stars</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-20 shrink-0">allowHalf</span>
            <Rating allowHalf defaultValue={2.5} color="warning" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-20 shrink-0">3.5 stars</span>
            <Rating allowHalf defaultValue={3.5} color="warning" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-20 shrink-0">4.5 stars</span>
            <Rating allowHalf defaultValue={4.5} color="warning" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Star Count</h3>
        <div className="space-y-3">
          {[3, 5, 7, 10].map(count => <div key={count} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-16 shrink-0">{count} stars</span>
              <Rating count={count} defaultValue={Math.ceil(count / 2)} color="warning" />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Controlled</h3>
        <ControlledDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-16 shrink-0">interactive</span>
            <Rating defaultValue={3} color="warning" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-16 shrink-0">readOnly</span>
            <Rating defaultValue={3.5} allowHalf readOnly color="warning" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-16 shrink-0">disabled</span>
            <Rating defaultValue={4} disabled color="warning" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Product Reviews</h3>
        <div className="space-y-4 rounded-lg border border-border p-4">
          {[{
          label: "Overall Experience",
          value: 4.5
        }, {
          label: "Value for Money",
          value: 4
        }, {
          label: "Ease of Use",
          value: 5
        }, {
          label: "Customer Support",
          value: 3.5
        }].map(({
          label,
          value
        }) => <div key={label} className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">{label}</span>
              <Rating defaultValue={value} allowHalf readOnly size="sm" color="warning" />
            </div>)}
        </div>
      </section>
    </div>
}`,...(_=(q=w.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};const ce=["Playground","Showcase"];export{y as Playground,w as Showcase,ce as __namedExportsOrder,oe as default};
