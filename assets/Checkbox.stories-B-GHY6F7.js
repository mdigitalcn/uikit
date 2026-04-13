import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as v}from"./index-ZH-6pyQh.js";import{C as a}from"./index-BQn0sZxL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./utils-_uLxnvdl.js";import"./variants-CTjkuV9j.js";import"./minus-Bn6CyQhd.js";import"./createLucideIcon-BXJdBs6C.js";import"./check-CKCh4cDT.js";const A={title:"Form/Checkbox",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outline","soft"]},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},label:{control:"text"},helperText:{control:"text"},error:{control:"text"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},defaultChecked:{control:"boolean"}}},l={args:{label:"Accept terms and conditions",variant:"solid",color:"primary",size:"md"}},c={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsx(a,{variant:"solid",label:"Solid",defaultChecked:!0}),e.jsx(a,{variant:"outline",label:"Outline",defaultChecked:!0}),e.jsx(a,{variant:"soft",label:"Soft",defaultChecked:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:["primary","secondary","accent","success","error","warning","info"].map(t=>e.jsx(a,{color:t,label:t,defaultChecked:!0},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-6",children:[e.jsx(a,{size:"xs",label:"Extra small",defaultChecked:!0}),e.jsx(a,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(a,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(a,{size:"lg",label:"Large",defaultChecked:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"States"}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsx(a,{label:"Unchecked"}),e.jsx(a,{label:"Checked",defaultChecked:!0}),e.jsx(a,{label:"Indeterminate",indeterminate:!0}),e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"Disabled indeterminate",disabled:!0,indeterminate:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Validation"}),e.jsxs("div",{className:"space-y-3 max-w-sm",children:[e.jsx(a,{label:"With helper text",helperText:"You can uncheck this at any time"}),e.jsx(a,{label:"Error state",error:"You must accept the terms"}),e.jsx(a,{label:"With description and error",helperText:"Required to proceed",error:"This field is required"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Real Usage"}),e.jsxs("div",{className:"space-y-2 max-w-sm",children:[e.jsx(a,{label:"Receive marketing emails",helperText:"We'll send you updates about new features"}),e.jsx(a,{label:"Enable two-factor authentication",helperText:"Adds an extra layer of security",defaultChecked:!0}),e.jsx(a,{label:e.jsxs("span",{children:["I agree to the ",e.jsx("a",{href:"#",className:"text-primary underline",children:"Terms of Service"})," and ",e.jsx("a",{href:"#",className:"text-primary underline",children:"Privacy Policy"})]})})]})]})]})},r={render:()=>{const[t,o]=v.useState([!0,!1,!0]),n=t.every(Boolean),y=t.some(Boolean)&&!n;return e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{label:"Select all",checked:n,indeterminate:y,onChange:s=>o(t.map(()=>s.target.checked))}),e.jsx("div",{className:"pl-6 space-y-2",children:["Option A","Option B","Option C"].map((s,d)=>e.jsx(a,{label:s,checked:t[d],onChange:j=>{const i=[...t];i[d]=j.target.checked,o(i)}},s))})]})}};var m,h,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Accept terms and conditions",
    variant: "solid",
    color: "primary",
    size: "md"
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,p,u;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="flex flex-wrap gap-6">
          <Checkbox variant="solid" label="Solid" defaultChecked />
          <Checkbox variant="outline" label="Outline" defaultChecked />
          <Checkbox variant="soft" label="Soft" defaultChecked />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="flex flex-wrap gap-6">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <Checkbox key={color} color={color} label={color} defaultChecked />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex flex-wrap items-center gap-6">
          <Checkbox size="xs" label="Extra small" defaultChecked />
          <Checkbox size="sm" label="Small" defaultChecked />
          <Checkbox size="md" label="Medium" defaultChecked />
          <Checkbox size="lg" label="Large" defaultChecked />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="flex flex-wrap gap-6">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Disabled checked" disabled defaultChecked />
          <Checkbox label="Disabled indeterminate" disabled indeterminate />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation</h3>
        <div className="space-y-3 max-w-sm">
          <Checkbox label="With helper text" helperText="You can uncheck this at any time" />
          <Checkbox label="Error state" error="You must accept the terms" />
          <Checkbox label="With description and error" helperText="Required to proceed" error="This field is required" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Real Usage</h3>
        <div className="space-y-2 max-w-sm">
          <Checkbox label="Receive marketing emails" helperText="We'll send you updates about new features" />
          <Checkbox label="Enable two-factor authentication" helperText="Adds an extra layer of security" defaultChecked />
          <Checkbox label={<span>I agree to the <a href="#" className="text-primary underline">Terms of Service</a> and <a href="#" className="text-primary underline">Privacy Policy</a></span>} />
        </div>
      </section>
    </div>
}`,...(u=(p=c.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var k,f,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState<boolean[]>([true, false, true]);
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean) && !allChecked;
    return <div className="space-y-2">
        <Checkbox label="Select all" checked={allChecked} indeterminate={someChecked} onChange={e => setChecked(checked.map(() => e.target.checked))} />
        <div className="pl-6 space-y-2">
          {["Option A", "Option B", "Option C"].map((opt, i) => <Checkbox key={opt} label={opt} checked={checked[i]} onChange={e => {
          const next = [...checked];
          next[i] = e.target.checked;
          setChecked(next);
        }} />)}
        </div>
      </div>;
  }
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const B=["Playground","Showcase","Indeterminate"];export{r as Indeterminate,l as Playground,c as Showcase,B as __namedExportsOrder,A as default};
