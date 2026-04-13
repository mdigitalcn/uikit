import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as s,a as j}from"./utils-_uLxnvdl.js";import{R as V}from"./index-ZH-6pyQh.js";import{c as k}from"./variants-CTjkuV9j.js";import{U as J}from"./user-BM8Midap.js";import{M as O}from"./mail-1HDD9Lg3.js";import{C as K}from"./credit-card-pFzRDpgt.js";import{C as M}from"./check-CKCh4cDT.js";import{T as U,P as L}from"./truck-CnWC_3YN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const z=j("rounded-full flex items-center justify-center font-medium transition-[colors,transform]",{variants:{size:{xs:"w-6 h-6 text-xs",sm:"w-8 h-8 text-sm",md:"w-10 h-10 text-base",lg:"w-12 h-12 text-lg"}},defaultVariants:{size:"md"}}),G=j("rounded-full transition-[colors,transform]",{variants:{size:{xs:"w-2 h-2",sm:"w-3 h-3",md:"w-4 h-4",lg:"w-5 h-5"}},defaultVariants:{size:"md"}}),D=j("font-medium",{variants:{size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{size:"md"}}),P=j("text-text-secondary",{variants:{size:{xs:"text-xs",sm:"text-xs",md:"text-sm",lg:"text-sm"}},defaultVariants:{size:"md"}}),g=j("bg-border",{variants:{size:{xs:"h-0.5",sm:"h-0.5",md:"h-1",lg:"h-1"}},defaultVariants:{size:"md"}}),E=(n,d)=>{const h=d==="error",l=d==="wait";return h?n==="solid"?"bg-error text-error-foreground border-2 border-error":n==="soft"?"bg-error/10 border-2 border-error/50 text-error":"bg-error/20 border-2 border-error text-error":l?n==="solid"?"bg-slot-20 text-slot-fg opacity-50 border-2 border-slot-20":"bg-slot-10 border-2 border-slot-20 text-text-secondary":n==="solid"?"bg-slot text-slot-fg border-2 border-slot":n==="soft"?"bg-slot-10 border-2 border-slot-50 text-slot":"bg-slot-20 border-2 border-slot text-slot"},y=(n,d)=>d?n==="soft"?"bg-slot-50":"bg-slot":"bg-border/50",c=V.memo(({steps:n,currentStep:d,color:h="primary",size:l="md",variant:x="default",orientation:W="horizontal",type:F="numbered",status:A,onStepClick:m,className:C,classNames:e})=>{const v=(o,r)=>r.status?r.status:o===d&&A==="error"?"error":o<d?"finish":o===d?A||"process":"wait",f=(o,r)=>{r||m==null||m(o)};return W==="vertical"?t.jsx("div",{"data-slot":"root",role:"list",className:s("stepper_root","flex flex-col",k[h],e==null?void 0:e.root,C),children:n.map((o,r)=>{const i=v(r,o),u=!o.disabled&&m;return t.jsxs("div",{role:"listitem","aria-label":`Step ${r+1} of ${n.length}`,className:s("stepper_step","flex",i==="process"&&(e==null?void 0:e.stepActive),i==="finish"&&(e==null?void 0:e.stepCompleted),e==null?void 0:e.step),...r===d&&{"aria-current":"step"},...i==="wait"&&{"aria-disabled":!0},children:[t.jsxs("div",{className:"flex flex-col items-center mr-4",children:[t.jsx("div",{...u&&{role:"button",tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),f(r,o.disabled))}},className:s("stepper_icon",z({size:l}),E(x,i),u&&"[--_duration:var(--duration-fast)] cursor-pointer hover:scale-105 transition-transform duration-slot",o.disabled&&"opacity-50 cursor-not-allowed",e==null?void 0:e.icon),onClick:()=>f(r,o.disabled),children:o.icon||r+1}),r<n.length-1&&t.jsx("div",{className:s("stepper_connector","w-0.5 flex-1 my-2",y(x,i==="finish"),e==null?void 0:e.connector)})]}),t.jsxs("div",{className:s("pb-8",r===n.length-1&&"pb-0"),children:[t.jsx("div",{className:s("stepper_label",D({size:l}),i==="wait"?"text-text-secondary":"text-text-primary",i==="error"&&"text-error",e==null?void 0:e.label),children:o.label}),o.description&&t.jsx("div",{className:s("stepper_description",P({size:l}),"mt-1",e==null?void 0:e.description),children:o.description})]})]},r)})}):F==="dots"?t.jsx("div",{role:"list",className:s("stepper_root","flex items-start",k[h],e==null?void 0:e.root,C),children:n.map((o,r)=>{const i=v(r,o),u=!o.disabled&&m,a=n[r-1],_=r>0&&a?v(r-1,a):"wait";return t.jsx(V.Fragment,{children:t.jsxs("div",{role:"listitem","aria-label":`Step ${r+1} of ${n.length}`,className:s("stepper_step","flex flex-col items-center flex-1",r===0&&"items-start",r===n.length-1&&"items-end",i==="process"&&(e==null?void 0:e.stepActive),i==="finish"&&(e==null?void 0:e.stepCompleted),e==null?void 0:e.step),...r===d&&{"aria-current":"step"},...i==="wait"&&{"aria-disabled":!0},children:[t.jsxs("div",{className:"flex items-center w-full",children:[r>0&&t.jsx("div",{className:s("stepper_connector","flex-1",g({size:l}),y(x,_==="finish"),e==null?void 0:e.connector)}),t.jsx("div",{...u&&{role:"button",tabIndex:0,onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),f(r,o.disabled))}},className:s("stepper_icon",G({size:l}),E(x,i),u&&"[--_duration:var(--duration-fast)] cursor-pointer hover:scale-105 transition-transform duration-slot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slot focus-visible:ring-offset-2",o.disabled&&"opacity-50 cursor-not-allowed","flex-shrink-0",e==null?void 0:e.icon),onClick:()=>f(r,o.disabled)}),r<n.length-1&&t.jsx("div",{className:s("stepper_connector","flex-1",g({size:l}),y(x,i==="finish"),e==null?void 0:e.connector)})]}),t.jsxs("div",{className:s("mt-2 px-2",r===0&&"text-left",r===n.length-1&&"text-right",r>0&&r<n.length-1&&"text-center"),children:[t.jsx("div",{className:s("stepper_label",D({size:l}),i==="wait"?"text-text-secondary":"text-text-primary",i==="error"&&"text-error",e==null?void 0:e.label),children:o.label}),o.description&&t.jsx("div",{className:s("stepper_description",P({size:l}),"mt-1",e==null?void 0:e.description),children:o.description})]})]})},r)})}):t.jsx("div",{role:"list",className:s("stepper_root","flex items-start",k[h],e==null?void 0:e.root,C),children:n.map((o,r)=>{const i=v(r,o),u=!o.disabled&&m,a=n[r-1],_=r>0&&a?v(r-1,a):"wait";return t.jsx(V.Fragment,{children:t.jsxs("div",{role:"listitem","aria-label":`Step ${r+1} of ${n.length}`,className:s("stepper_step","flex flex-col items-center flex-1",r===0&&"items-start",r===n.length-1&&"items-end",i==="process"&&(e==null?void 0:e.stepActive),i==="finish"&&(e==null?void 0:e.stepCompleted),e==null?void 0:e.step),...r===d&&{"aria-current":"step"},...i==="wait"&&{"aria-disabled":!0},children:[t.jsxs("div",{className:"flex items-center w-full",children:[r>0&&t.jsx("div",{className:s("stepper_connector","flex-1",g({size:l}),y(x,_==="finish"),e==null?void 0:e.connector)}),t.jsx("div",{...u&&{role:"button",tabIndex:0,onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),f(r,o.disabled))}},className:s("stepper_icon",z({size:l}),E(x,i),u&&"[--_duration:var(--duration-fast)] cursor-pointer hover:scale-105 transition-transform duration-slot",o.disabled&&"opacity-50 cursor-not-allowed","flex-shrink-0",e==null?void 0:e.icon),onClick:()=>f(r,o.disabled),children:o.icon||r+1}),r<n.length-1&&t.jsx("div",{className:s("stepper_connector","flex-1",g({size:l}),y(x,i==="finish"),e==null?void 0:e.connector)})]}),t.jsxs("div",{className:s("mt-2 px-2",r===0&&"text-left",r===n.length-1&&"text-right",r>0&&r<n.length-1&&"text-center"),children:[t.jsx("div",{className:s("stepper_label",D({size:l}),i==="wait"?"text-text-secondary":"text-text-primary",i==="error"&&"text-error",e==null?void 0:e.label),children:o.label}),o.description&&t.jsx("div",{className:s("stepper_description",P({size:l}),"mt-1",e==null?void 0:e.description),children:o.description})]})]})},r)})})});c.displayName="Stepper";c.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{color:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},type:{defaultValue:{value:'"numbered"',computed:!1},required:!1}}};const ct={title:"Navigation/Stepper",component:c,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","soft"]},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},orientation:{control:"select",options:["horizontal","vertical"]},type:{control:"select",options:["numbered","dots"]},status:{control:"select",options:["process","finish","error","wait"]}}},p=[{label:"Account",description:"Create your account"},{label:"Profile",description:"Setup your profile"},{label:"Billing",description:"Payment details"},{label:"Complete",description:"All done!"}],H=[{label:"Account",icon:t.jsx(J,{className:"w-4 h-4"})},{label:"Email",icon:t.jsx(O,{className:"w-4 h-4"})},{label:"Payment",icon:t.jsx(K,{className:"w-4 h-4"})},{label:"Done",icon:t.jsx(M,{className:"w-4 h-4"})}],Q=[{label:"Ordered",description:"Jan 1"},{label:"Processing",description:"Jan 2"},{label:"Shipped",description:"Jan 3",icon:t.jsx(U,{className:"w-4 h-4"})},{label:"Delivered",description:"Jan 5",icon:t.jsx(L,{className:"w-4 h-4"})}],S={args:{steps:p,currentStep:1,size:"md",color:"primary",variant:"default"}},X=["primary","secondary","accent","success","error","warning","info"],w={render:()=>t.jsxs("div",{className:"space-y-10",children:[t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Step States"}),t.jsx("div",{className:"space-y-4",children:[0,1,2,3].map(n=>t.jsxs("div",{children:[t.jsxs("p",{className:"text-xs text-text-secondary mb-1",children:["Step ",n+1," active"]}),t.jsx(c,{steps:p,currentStep:n})]},n))})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),t.jsx("div",{className:"space-y-4",children:["default","solid","soft"].map(n=>t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-text-secondary mb-1",children:n}),t.jsx(c,{steps:p.slice(0,3),currentStep:1,variant:n,color:"primary"})]},n))})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors (solid variant)"}),t.jsx("div",{className:"space-y-4",children:X.map(n=>t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-text-secondary mb-1",children:n}),t.jsx(c,{steps:p.slice(0,3),currentStep:1,color:n,variant:"solid"})]},n))})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Error Status"}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"Current step has error"}),t.jsx(c,{steps:p,currentStep:1,status:"error"})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"Individual step error via status"}),t.jsx(c,{steps:[{label:"Account",description:"Completed"},{label:"Verification",description:"Email bounced",status:"error"},{label:"Billing",description:"Pending"},{label:"Complete",description:"Waiting"}],currentStep:1})]})]})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Disabled Steps"}),t.jsx(c,{steps:[{label:"Account",description:"Done"},{label:"Profile",description:"Setup",disabled:!0},{label:"Billing",description:"Required"},{label:"Complete",description:"Final"}],currentStep:0,onStepClick:()=>{}})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Icons"}),t.jsx(c,{steps:H,currentStep:2})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Dots Type"}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(c,{steps:p,currentStep:1,type:"dots"}),t.jsx(c,{steps:p,currentStep:2,type:"dots",variant:"solid",color:"accent"})]})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Vertical Orientation"}),t.jsx("div",{className:"max-w-xs",children:t.jsx(c,{steps:Q,currentStep:2,orientation:"vertical",color:"primary"})})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Clickable Steps"}),t.jsx(c,{steps:p,currentStep:1,onStepClick:()=>{}})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),t.jsx("div",{className:"space-y-4",children:["xs","sm","md","lg"].map(n=>t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-text-secondary mb-1",children:n}),t.jsx(c,{steps:p.slice(0,3),currentStep:1,size:n})]},n))})]})]})};var I,q,$;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    steps,
    currentStep: 1,
    size: "md",
    color: "primary",
    variant: "default"
  }
}`,...($=(q=S.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var B,R,T;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Step States</h3>
        <div className="space-y-4">
          {[0, 1, 2, 3].map(c => <div key={c}>
              <p className="text-xs text-text-secondary mb-1">Step {c + 1} active</p>
              <Stepper steps={steps} currentStep={c} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-4">
          {(["default", "solid", "soft"] as const).map(v => <div key={v}>
              <p className="text-xs text-text-secondary mb-1">{v}</p>
              <Stepper steps={steps.slice(0, 3)} currentStep={1} variant={v} color="primary" />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors (solid variant)</h3>
        <div className="space-y-4">
          {colors.map(c => <div key={c}>
              <p className="text-xs text-text-secondary mb-1">{c}</p>
              <Stepper steps={steps.slice(0, 3)} currentStep={1} color={c} variant="solid" />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Error Status</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-1">Current step has error</p>
            <Stepper steps={steps} currentStep={1} status="error" />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Individual step error via status</p>
            <Stepper steps={[{
            label: "Account",
            description: "Completed"
          }, {
            label: "Verification",
            description: "Email bounced",
            status: "error"
          }, {
            label: "Billing",
            description: "Pending"
          }, {
            label: "Complete",
            description: "Waiting"
          }]} currentStep={1} />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Disabled Steps</h3>
        <Stepper steps={[{
        label: "Account",
        description: "Done"
      }, {
        label: "Profile",
        description: "Setup",
        disabled: true
      }, {
        label: "Billing",
        description: "Required"
      }, {
        label: "Complete",
        description: "Final"
      }]} currentStep={0} onStepClick={() => {}} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <Stepper steps={iconSteps} currentStep={2} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Dots Type</h3>
        <div className="space-y-4">
          <Stepper steps={steps} currentStep={1} type="dots" />
          <Stepper steps={steps} currentStep={2} type="dots" variant="solid" color="accent" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Vertical Orientation</h3>
        <div className="max-w-xs">
          <Stepper steps={orderSteps} currentStep={2} orientation="vertical" color="primary" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Clickable Steps</h3>
        <Stepper steps={steps} currentStep={1} onStepClick={() => {}} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s}>
              <p className="text-xs text-text-secondary mb-1">{s}</p>
              <Stepper steps={steps.slice(0, 3)} currentStep={1} size={s} />
            </div>)}
        </div>
      </section>
    </div>
}`,...(T=(R=w.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const dt=["Playground","Showcase"];export{S as Playground,w as Showcase,dt as __namedExportsOrder,ct as default};
