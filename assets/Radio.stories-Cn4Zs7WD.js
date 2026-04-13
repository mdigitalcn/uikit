import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as v}from"./index-ZH-6pyQh.js";import{R as a}from"./index-CCKLpU91.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-_uLxnvdl.js";import"./variants-CTjkuV9j.js";const N={title:"Form/Radio",component:a,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},label:{control:"text"},helperText:{control:"text"},error:{control:"text"},disabled:{control:"boolean"},defaultChecked:{control:"boolean"}}},l={args:{label:"Select this option",color:"primary",size:"md",name:"playground"}},r={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:["primary","secondary","accent","success","error","warning","info"].map(s=>e.jsx(a,{color:s,label:s,name:`color-${s}`,defaultChecked:!0},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-6",children:[e.jsx(a,{size:"xs",label:"Extra small",name:"sizes",defaultChecked:!0}),e.jsx(a,{size:"sm",label:"Small",name:"sizes"}),e.jsx(a,{size:"md",label:"Medium",name:"sizes"}),e.jsx(a,{size:"lg",label:"Large",name:"sizes"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"States"}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsx(a,{label:"Unchecked",name:"states-a"}),e.jsx(a,{label:"Checked",name:"states-b",defaultChecked:!0}),e.jsx(a,{label:"Disabled unchecked",name:"states-c",disabled:!0}),e.jsx(a,{label:"Disabled checked",name:"states-d",disabled:!0,defaultChecked:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Validation"}),e.jsxs("div",{className:"space-y-3 max-w-sm",children:[e.jsx(a,{label:"With helper text",name:"helper",helperText:"Selecting this will notify you via email"}),e.jsx(a,{label:"Error state",name:"error",error:"Please select an option"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Radio Group (native)"}),e.jsxs("div",{className:"space-y-2 max-w-sm",children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Select your preferred plan:"}),e.jsx(a,{name:"plan",value:"free",label:"Free",helperText:"Up to 3 projects",defaultChecked:!0}),e.jsx(a,{name:"plan",value:"pro",label:"Pro",helperText:"Unlimited projects, $9/mo"}),e.jsx(a,{name:"plan",value:"enterprise",label:"Enterprise",helperText:"Custom pricing, contact us"})]})]})]})},n={render:()=>{const[s,b]=v.useState("react");return e.jsxs("div",{className:"space-y-2 max-w-sm",children:[e.jsx("p",{className:"text-sm font-medium text-text-primary mb-3",children:"Preferred framework"}),[{value:"react",label:"React",helperText:"A JavaScript library for building UIs"},{value:"vue",label:"Vue",helperText:"The progressive JavaScript framework"},{value:"svelte",label:"Svelte",helperText:"Cybernetically enhanced web apps"},{value:"solid",label:"Solid",helperText:"Simple and performant reactivity"}].map(t=>e.jsx(a,{name:"framework",value:t.value,label:t.label,helperText:t.helperText,checked:s===t.value,onChange:()=>b(t.value)},t.value))]})}};var o,i,c;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Select this option",
    color: "primary",
    size: "md",
    name: "playground"
  }
}`,...(c=(i=l.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="flex flex-wrap gap-6">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <Radio key={color} color={color} label={color} name={\`color-\${color}\`} defaultChecked />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex flex-wrap items-center gap-6">
          <Radio size="xs" label="Extra small" name="sizes" defaultChecked />
          <Radio size="sm" label="Small" name="sizes" />
          <Radio size="md" label="Medium" name="sizes" />
          <Radio size="lg" label="Large" name="sizes" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="flex flex-wrap gap-6">
          <Radio label="Unchecked" name="states-a" />
          <Radio label="Checked" name="states-b" defaultChecked />
          <Radio label="Disabled unchecked" name="states-c" disabled />
          <Radio label="Disabled checked" name="states-d" disabled defaultChecked />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation</h3>
        <div className="space-y-3 max-w-sm">
          <Radio label="With helper text" name="helper" helperText="Selecting this will notify you via email" />
          <Radio label="Error state" name="error" error="Please select an option" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Radio Group (native)</h3>
        <div className="space-y-2 max-w-sm">
          <p className="text-sm text-text-secondary mb-2">Select your preferred plan:</p>
          <Radio name="plan" value="free" label="Free" helperText="Up to 3 projects" defaultChecked />
          <Radio name="plan" value="pro" label="Pro" helperText="Unlimited projects, $9/mo" />
          <Radio name="plan" value="enterprise" label="Enterprise" helperText="Custom pricing, contact us" />
        </div>
      </section>
    </div>
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var x,u,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("react");
    return <div className="space-y-2 max-w-sm">
        <p className="text-sm font-medium text-text-primary mb-3">Preferred framework</p>
        {[{
        value: "react",
        label: "React",
        helperText: "A JavaScript library for building UIs"
      }, {
        value: "vue",
        label: "Vue",
        helperText: "The progressive JavaScript framework"
      }, {
        value: "svelte",
        label: "Svelte",
        helperText: "Cybernetically enhanced web apps"
      }, {
        value: "solid",
        label: "Solid",
        helperText: "Simple and performant reactivity"
      }].map(option => <Radio key={option.value} name="framework" value={option.value} label={option.label} helperText={option.helperText} checked={value === option.value} onChange={() => setValue(option.value)} />)}
      </div>;
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const R=["Playground","Showcase","RadioGroup"];export{l as Playground,n as RadioGroup,r as Showcase,R as __namedExportsOrder,N as default};
