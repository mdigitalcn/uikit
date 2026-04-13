import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R}from"./index-ZH-6pyQh.js";import{a as B,c as n}from"./utils-_uLxnvdl.js";import{c as j}from"./variants-CTjkuV9j.js";import"./_commonjsHelpers-CqkleIqs.js";const $={xs:{size:60,strokeWidth:4},sm:{size:80,strokeWidth:6},md:{size:120,strokeWidth:8},lg:{size:160,strokeWidth:10}},F=B("w-full rounded-full overflow-hidden",{variants:{size:{xs:"h-1",sm:"h-2",md:"h-3",lg:"h-4"}},defaultVariants:{size:"md"}}),D=B("h-full transition-[width,height] duration-300 ease-in-out rounded-full",{variants:{size:{xs:"",sm:"",md:"",lg:""}},defaultVariants:{size:"md"}}),k=o=>o==="soft"?"bg-slot-10":o==="solid"?"bg-slot-20":"bg-slot-10",S=o=>o==="default"?"bg-slot-20 border border-slot":o==="solid"?"bg-slot":"bg-slot-50",E=o=>o==="soft"?"stroke-slot-50":"stroke-slot",T=o=>o==="soft"?"stroke-slot-10":o==="solid"?"stroke-slot-20":"stroke-slot-10";function I(o){switch(o){case"xs":return"w-1";case"sm":return"w-2";case"md":return"w-3";case"lg":return"w-4";default:return"w-3"}}function z(o,a=!0){return!o||!a?{}:{backgroundImage:"linear-gradient(45deg, var(--overlay-stripe) 25%, transparent 25%, transparent 50%, var(--overlay-stripe) 50%, var(--overlay-stripe) 75%, transparent 75%, transparent)",backgroundSize:"1rem 1rem"}}const _=({label:o,showProgress:a,clampedValue:u,classNames:l})=>o?e.jsxs("div",{className:"flex items-center justify-between mb-2 text-sm text-text-primary",children:[e.jsx("span",{className:n("progress_label",l==null?void 0:l.label),children:o}),a&&e.jsxs("span",{className:n("font-medium","progress_value",l==null?void 0:l.value),children:[u,"%"]})]}):null,U=({size:o="md",circleSize:a,strokeWidth:u,color:l="primary",variant:h="default",label:p,className:d,classNames:t,clampedValue:x,progressLabel:r})=>{const c=$[o],s=a??c.size,f=u??c.strokeWidth,g=(s-f)/2,y=2*Math.PI*g,m=y-x/100*y;return e.jsx("div",{className:n("inline-flex flex-col items-center",j[l],"progress_root",d,t==null?void 0:t.root),children:e.jsxs("div",{className:"relative",style:{width:s,height:s},role:"progressbar","aria-valuenow":x,"aria-valuemin":0,"aria-valuemax":100,"aria-label":r,"aria-live":"polite",children:[e.jsxs("svg",{width:s,height:s,className:"transform -rotate-90","aria-hidden":"true",children:[e.jsx("circle",{cx:s/2,cy:s/2,r:g,fill:"none",strokeWidth:f,className:n(T(h),"progress_track",t==null?void 0:t.track)}),e.jsx("circle",{cx:s/2,cy:s/2,r:g,fill:"none",strokeWidth:f,strokeDasharray:y,strokeDashoffset:m,strokeLinecap:"round",className:n(E(h),"[--_duration:var(--duration-slow)] transition-[stroke-dashoffset] duration-slot ease-in-out","progress_fill",t==null?void 0:t.fill)})]}),e.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:p?e.jsx("div",{className:n("p-2 text-text-secondary","progress_label",t==null?void 0:t.label),style:{fontSize:`${Math.floor(s/Math.floor(p.length*1.5))}px`},children:p}):e.jsxs("span",{className:n("text-text-primary font-semibold","progress_value",t==null?void 0:t.value),style:{fontSize:s/5},children:[x,"%"]})})]})})},O=({orientation:o="horizontal",size:a="md",color:u="primary",variant:l="default",label:h,showProgress:p=!1,striped:d=!1,animated:t=!1,className:x,classNames:r,totalSteps:c=5,clampedValue:s,progressLabel:f})=>{const g=Math.ceil(s/100*c);return o==="vertical"?e.jsxs("div",{className:n("h-full flex flex-col",j[u],"progress_root",x,r==null?void 0:r.root),role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":f,"aria-live":"polite",children:[e.jsx(_,{label:h,showProgress:p,clampedValue:s,classNames:r}),e.jsx("div",{className:n("flex-1 rounded-full overflow-hidden flex flex-col-reverse gap-1",I(a),"progress_track",r==null?void 0:r.track),children:Array.from({length:c},(y,m)=>{const v=m+1<=g;return e.jsx("div",{className:n("w-full rounded-full transition-[width,height] flex-1",v?S(l):k(l),t&&d&&"progress-shimmer","progress_fill",r==null?void 0:r.fill),style:z(d,v)},m)})})]}):e.jsxs("div",{"data-slot":"root",className:n("w-full",j[u],"progress_root",x,r==null?void 0:r.root),role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":f,"aria-live":"polite",children:[e.jsx(_,{label:h,showProgress:p,clampedValue:s,classNames:r}),e.jsx("div",{className:n("w-full rounded-full overflow-hidden flex gap-1",F({size:a}),"progress_track",r==null?void 0:r.track),children:Array.from({length:c},(y,m)=>{const v=m+1<=g;return e.jsx("div",{className:n("h-full rounded-full transition-[width,height] flex-1",v?S(l):k(l),t&&d&&"progress-shimmer","progress_fill",r==null?void 0:r.fill),style:z(d,v)},m)})})]})},G=({orientation:o="horizontal",size:a="md",color:u="primary",variant:l="default",label:h,showProgress:p=!1,striped:d=!1,animated:t=!1,className:x,classNames:r,clampedValue:c,progressLabel:s})=>o==="vertical"?e.jsxs("div",{className:n("h-full flex flex-col",j[u],"progress_root",x,r==null?void 0:r.root),role:"progressbar","aria-valuenow":c,"aria-valuemin":0,"aria-valuemax":100,"aria-label":s,"aria-live":"polite",children:[e.jsx(_,{label:h,showProgress:p,clampedValue:c,classNames:r}),e.jsx("div",{className:n("flex-1 rounded-full overflow-hidden flex flex-col justify-end",I(a),k(l),"progress_track",r==null?void 0:r.track),children:e.jsx("div",{className:n("[--_duration:var(--duration-slow)] w-full transition-[width,height] duration-slot ease-in-out rounded-full",S(l),t&&d&&"progress-shimmer","progress_fill",r==null?void 0:r.fill),style:{height:`${c}%`,...z(d)}})})]}):e.jsxs("div",{className:n("w-full",j[u],"progress_root",x,r==null?void 0:r.root),role:"progressbar","aria-valuenow":c,"aria-valuemin":0,"aria-valuemax":100,"aria-label":s,"aria-live":"polite",children:[e.jsx(_,{label:h,showProgress:p,clampedValue:c,classNames:r}),e.jsx("div",{className:n(F({size:a}),k(l),"progress_track",r==null?void 0:r.track),children:e.jsx("div",{className:n(D({size:a}),S(l),t&&d&&"progress-shimmer","progress_fill",r==null?void 0:r.fill),style:{width:`${c}%`,...z(d)}})})]}),i=R.memo(({value:o,color:a="primary",size:u="md",circleSize:l,strokeWidth:h,variant:p="default",type:d="line",orientation:t="horizontal",showProgress:x=!1,label:r,striped:c=!1,animated:s=!1,className:f,classNames:g,totalSteps:y=5,"aria-label":m})=>{const b=Math.min(Math.max(o,0),100),v=m||r||"Progress";return d==="circle"?e.jsx(U,{size:u,circleSize:l,strokeWidth:h,color:a,variant:p,label:r,className:f,classNames:g,clampedValue:b,progressLabel:v}):d==="step"?e.jsx(O,{orientation:t,size:u,color:a,variant:p,label:r,showProgress:x,striped:c,animated:s,className:f,classNames:g,totalSteps:y,clampedValue:b,progressLabel:v}):e.jsx(G,{orientation:t,size:u,color:a,variant:p,label:r,showProgress:x,striped:c,animated:s,className:f,classNames:g,clampedValue:b,progressLabel:v})});i.displayName="Progress";i.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{color:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},type:{defaultValue:{value:'"line"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},showProgress:{defaultValue:{value:"false",computed:!1},required:!1},striped:{defaultValue:{value:"false",computed:!1},required:!1},animated:{defaultValue:{value:"false",computed:!1},required:!1},totalSteps:{defaultValue:{value:"5",computed:!1},required:!1}}};const Y={title:"Feedback/Progress",component:i,tags:["autodocs"],argTypes:{type:{control:"select",options:["line","circle","step"]},orientation:{control:"select",options:["horizontal","vertical"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},value:{control:{type:"range",min:0,max:100}},striped:{control:"boolean"},animated:{control:"boolean"},showProgress:{control:"boolean"}}},w={args:{value:65,type:"line",color:"primary",size:"md",showProgress:!0}},C=["primary","secondary","accent","success","error","warning","info"],P={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Line — Colors"}),e.jsx("div",{className:"space-y-3",children:C.map(o=>e.jsx(i,{type:"line",value:65,color:o,showProgress:!0,label:o},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Line — Sizes"}),e.jsx("div",{className:"space-y-4",children:["xs","sm","md","lg"].map(o=>e.jsx(i,{type:"line",size:o,value:60,color:"primary",showProgress:!0,label:o},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Line — Striped & Animated"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(i,{type:"line",value:75,striped:!0,color:"primary",showProgress:!0,label:"Striped"}),e.jsx(i,{type:"line",value:50,striped:!0,animated:!0,color:"info",showProgress:!0,label:"Striped + animated"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Circle Progress"}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[[0,25,50,75,100].map(o=>e.jsx(i,{type:"circle",value:o,color:"primary",showProgress:!0},o)),C.slice(0,4).map(o=>e.jsx(i,{type:"circle",value:70,color:o,showProgress:!0},o))]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Step Progress"}),e.jsx("div",{className:"space-y-4",children:[1,2,3,4,5].map(o=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-1",children:["Step ",o,"/5"]}),e.jsx(i,{type:"step",totalSteps:5,value:o*20,color:"primary",showProgress:!0})]},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Values"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{value:0,color:"error",label:"0%",showProgress:!0}),e.jsx(i,{value:33,color:"warning",label:"33%",showProgress:!0}),e.jsx(i,{value:66,color:"info",label:"66%",showProgress:!0}),e.jsx(i,{value:100,color:"success",label:"100%",showProgress:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Circle — Custom Size & Stroke"}),e.jsxs("div",{className:"flex flex-wrap gap-6 items-center",children:[e.jsx(i,{type:"circle",value:75,color:"primary",showProgress:!0,circleSize:60,strokeWidth:4}),e.jsx(i,{type:"circle",value:75,color:"primary",showProgress:!0,circleSize:80,strokeWidth:6}),e.jsx(i,{type:"circle",value:75,color:"primary",showProgress:!0,circleSize:120,strokeWidth:8})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Circle — With Footer"}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsx(i,{type:"circle",value:78,color:"success",showProgress:!0,footer:"Upload"}),e.jsx(i,{type:"circle",value:45,color:"warning",showProgress:!0,footer:"Processing"}),e.jsx(i,{type:"circle",value:100,color:"success",showProgress:!0,footer:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Vertical Line"}),e.jsx("div",{className:"flex gap-6 h-32",children:C.slice(0,4).map(o=>e.jsx(i,{type:"line",orientation:"vertical",value:65,color:o,showProgress:!0},o))})]})]})};var W,L,q;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 65,
    type: "line",
    color: "primary",
    size: "md",
    showProgress: true
  }
}`,...(q=(L=w.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var V,M,A;P.parameters={...P.parameters,docs:{...(V=P.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Line — Colors</h3>
        <div className="space-y-3">
          {colors.map(c => <Progress key={c} type="line" value={65} color={c} showProgress label={c} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Line — Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => <Progress key={s} type="line" size={s} value={60} color="primary" showProgress label={s} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Line — Striped & Animated</h3>
        <div className="space-y-3">
          <Progress type="line" value={75} striped color="primary" showProgress label="Striped" />
          <Progress type="line" value={50} striped animated color="info" showProgress label="Striped + animated" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Circle Progress</h3>
        <div className="flex flex-wrap gap-6">
          {([0, 25, 50, 75, 100] as const).map(v => <Progress key={v} type="circle" value={v} color="primary" showProgress />)}
          {colors.slice(0, 4).map(c => <Progress key={c} type="circle" value={70} color={c} showProgress />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Step Progress</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map(step => <div key={step}><p className="text-xs text-text-secondary mb-1">Step {step}/5</p><Progress type="step" totalSteps={5} value={step * 20} color="primary" showProgress /></div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Values</h3>
        <div className="space-y-2">
          <Progress value={0} color="error" label="0%" showProgress />
          <Progress value={33} color="warning" label="33%" showProgress />
          <Progress value={66} color="info" label="66%" showProgress />
          <Progress value={100} color="success" label="100%" showProgress />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Circle — Custom Size & Stroke</h3>
        <div className="flex flex-wrap gap-6 items-center">
          <Progress type="circle" value={75} color="primary" showProgress circleSize={60} strokeWidth={4} />
          <Progress type="circle" value={75} color="primary" showProgress circleSize={80} strokeWidth={6} />
          <Progress type="circle" value={75} color="primary" showProgress circleSize={120} strokeWidth={8} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Circle — With Footer</h3>
        <div className="flex flex-wrap gap-6">
          <Progress type="circle" value={78} color="success" showProgress footer="Upload" />
          <Progress type="circle" value={45} color="warning" showProgress footer="Processing" />
          <Progress type="circle" value={100} color="success" showProgress footer={true} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Vertical Line</h3>
        <div className="flex gap-6 h-32">
          {colors.slice(0, 4).map(c => <Progress key={c} type="line" orientation="vertical" value={65} color={c} showProgress />)}
        </div>
      </section>
    </div>
}`,...(A=(M=P.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const Z=["Playground","Showcase"];export{w as Playground,P as Showcase,Z as __namedExportsOrder,Y as default};
