import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as a}from"./index-CCKLpU91.js";import{c as s,a as P}from"./utils-_uLxnvdl.js";import{R as d,r as $}from"./index-ZH-6pyQh.js";import"./variants-CTjkuV9j.js";import"./_commonjsHelpers-CqkleIqs.js";const N=P("flex",{variants:{orientation:{vertical:"flex-col gap-2",horizontal:"flex-row flex-wrap gap-4"}},defaultVariants:{orientation:"vertical"}}),n=d.memo(({label:o,helperText:m,error:r,orientation:x="vertical",size:u,color:b,className:C,classNames:t,children:G,ref:S,...z})=>{const h=$.useId(),f=`radiogroup-label-${h}`,g=`radiogroup-helper-${h}`,O=!!(m||r);return e.jsxs("div",{"data-slot":"root",ref:S,className:s("radioGroup_root","w-full",C,t==null?void 0:t.root),role:"radiogroup","aria-labelledby":o?f:void 0,"aria-describedby":O?g:void 0,"aria-orientation":x,...z,children:[o&&e.jsx("div",{className:"mb-2",children:e.jsx("span",{id:f,className:s("radioGroup_label","text-sm font-medium text-text-secondary",t==null?void 0:t.label),children:o})}),e.jsx("div",{className:s("radioGroup_group",N({orientation:x}),t==null?void 0:t.group),children:d.Children.map(G,i=>{if(d.isValidElement(i)){const l={};if(u&&!i.props.size&&(l.size=u),b&&!i.props.color&&(l.color=b),Object.keys(l).length>0)return d.cloneElement(i,l)}return i})}),(m||r)&&e.jsx("p",{id:g,className:s(r?"radioGroup_error":"radioGroup_helper","mt-2 text-xs",r?"text-error":"text-text-secondary",r?t==null?void 0:t.error:t==null?void 0:t.helper),children:r||m})]})});n.displayName="RadioGroup";n.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};const U={title:"Data Entry/RadioGroup",component:n,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]}}},c={args:{label:"Select a plan",orientation:"vertical"},render:o=>e.jsxs(n,{...o,children:[e.jsx(a,{label:"Free",value:"free",name:"plan-pg"}),e.jsx(a,{label:"Pro — $9/mo",value:"pro",name:"plan-pg",defaultChecked:!0}),e.jsx(a,{label:"Enterprise — Custom pricing",value:"enterprise",name:"plan-pg"})]})},A=["primary","secondary","accent","success","error","warning","info"],p={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Orientations"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs(n,{label:"Vertical (default)",children:[e.jsx(a,{label:"Option A",name:"orient-v",defaultChecked:!0}),e.jsx(a,{label:"Option B",name:"orient-v"}),e.jsx(a,{label:"Option C",name:"orient-v"})]}),e.jsxs(n,{label:"Horizontal",orientation:"horizontal",children:[e.jsx(a,{label:"S",name:"orient-h",defaultChecked:!0}),e.jsx(a,{label:"M",name:"orient-h"}),e.jsx(a,{label:"L",name:"orient-h"}),e.jsx(a,{label:"XL",name:"orient-h"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:A.map(o=>e.jsxs(n,{label:o,orientation:"horizontal",color:o,children:[e.jsx(a,{color:o,label:"Yes",name:`col-${o}`,defaultChecked:!0}),e.jsx(a,{color:o,label:"No",name:`col-${o}`})]},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap gap-8",children:["xs","sm","md","lg"].map(o=>e.jsxs(n,{label:`Size ${o}`,orientation:"horizontal",size:o,children:[e.jsx(a,{label:"A",name:`sz-${o}`,defaultChecked:!0}),e.jsx(a,{label:"B",name:`sz-${o}`})]},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Helper Text"}),e.jsx("div",{className:"space-y-4",children:e.jsxs(n,{label:"Notification Preference",helperText:"Choose how you want to receive alerts.",children:[e.jsx(a,{label:"Email",name:"notif",defaultChecked:!0}),e.jsx(a,{label:"SMS",name:"notif"}),e.jsx(a,{label:"Push Notification",name:"notif"})]})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Error State"}),e.jsxs(n,{label:"Required Selection",error:"Please select one of the options to continue.",children:[e.jsx(a,{label:"Option A",name:"err-group"}),e.jsx(a,{label:"Option B",name:"err-group"}),e.jsx(a,{label:"Option C",name:"err-group"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Pricing Plans"}),e.jsxs(n,{label:"Select a Plan",children:[e.jsx(a,{label:"Free — $0/month",helperText:"Up to 5 projects, community support",name:"pricing"}),e.jsx(a,{label:"Pro — $9/month",helperText:"Unlimited projects, priority support",name:"pricing",defaultChecked:!0,color:"primary"}),e.jsx(a,{label:"Enterprise — Custom",helperText:"SLA, dedicated support, custom integrations",name:"pricing",color:"accent"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs(n,{label:"Normal",children:[e.jsx(a,{label:"Option A",name:"state-normal",defaultChecked:!0}),e.jsx(a,{label:"Option B",name:"state-normal"})]}),e.jsxs(n,{label:"With Disabled Individual Radio",children:[e.jsx(a,{label:"Available",name:"state-dis-radio",defaultChecked:!0}),e.jsx(a,{label:"Unavailable",name:"state-dis-radio",disabled:!0}),e.jsx(a,{label:"Available",name:"state-dis-radio"})]})]})]})]})};var j,R,v;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Select a plan",
    orientation: "vertical"
  },
  render: args => <RadioGroup {...args}>
      <Radio label="Free" value="free" name="plan-pg" />
      <Radio label="Pro — $9/mo" value="pro" name="plan-pg" defaultChecked />
      <Radio label="Enterprise — Custom pricing" value="enterprise" name="plan-pg" />
    </RadioGroup>
}`,...(v=(R=c.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var y,k,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Orientations</h3>
        <div className="grid grid-cols-2 gap-6">
          <RadioGroup label="Vertical (default)">
            <Radio label="Option A" name="orient-v" defaultChecked />
            <Radio label="Option B" name="orient-v" />
            <Radio label="Option C" name="orient-v" />
          </RadioGroup>
          <RadioGroup label="Horizontal" orientation="horizontal">
            <Radio label="S" name="orient-h" defaultChecked />
            <Radio label="M" name="orient-h" />
            <Radio label="L" name="orient-h" />
            <Radio label="XL" name="orient-h" />
          </RadioGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="flex flex-wrap gap-6">
          {colors.map(c => <RadioGroup key={c} label={c} orientation="horizontal" color={c}>
              <Radio color={c} label="Yes" name={\`col-\${c}\`} defaultChecked />
              <Radio color={c} label="No" name={\`col-\${c}\`} />
            </RadioGroup>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap gap-8">
          {(["xs", "sm", "md", "lg"] as const).map(s => <RadioGroup key={s} label={\`Size \${s}\`} orientation="horizontal" size={s}>
              <Radio label="A" name={\`sz-\${s}\`} defaultChecked />
              <Radio label="B" name={\`sz-\${s}\`} />
            </RadioGroup>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Helper Text</h3>
        <div className="space-y-4">
          <RadioGroup label="Notification Preference" helperText="Choose how you want to receive alerts.">
            <Radio label="Email" name="notif" defaultChecked />
            <Radio label="SMS" name="notif" />
            <Radio label="Push Notification" name="notif" />
          </RadioGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Error State</h3>
        <RadioGroup label="Required Selection" error="Please select one of the options to continue.">
          <Radio label="Option A" name="err-group" />
          <Radio label="Option B" name="err-group" />
          <Radio label="Option C" name="err-group" />
        </RadioGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Pricing Plans</h3>
        <RadioGroup label="Select a Plan">
          <Radio label="Free — $0/month" helperText="Up to 5 projects, community support" name="pricing" />
          <Radio label="Pro — $9/month" helperText="Unlimited projects, priority support" name="pricing" defaultChecked color="primary" />
          <Radio label="Enterprise — Custom" helperText="SLA, dedicated support, custom integrations" name="pricing" color="accent" />
        </RadioGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="space-y-4">
          <RadioGroup label="Normal">
            <Radio label="Option A" name="state-normal" defaultChecked />
            <Radio label="Option B" name="state-normal" />
          </RadioGroup>
          <RadioGroup label="With Disabled Individual Radio">
            <Radio label="Available" name="state-dis-radio" defaultChecked />
            <Radio label="Unavailable" name="state-dis-radio" disabled />
            <Radio label="Available" name="state-dis-radio" />
          </RadioGroup>
        </div>
      </section>
    </div>
}`,...(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const V=["Playground","Showcase"];export{c as Playground,p as Showcase,V as __namedExportsOrder,U as default};
