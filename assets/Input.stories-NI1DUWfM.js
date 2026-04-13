import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as a}from"./index-CU488rde.js";import{S as j}from"./search-DfqimKq8.js";import{M as v}from"./mail-1HDD9Lg3.js";import{E as I}from"./eye-BJ7v6ROl.js";import{L as g}from"./lock-D-iRFELD.js";import{C as E}from"./circle-alert-C1u21Jbx.js";import{U as w}from"./user-BM8Midap.js";import"./utils-_uLxnvdl.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CF05pSQ2.js";import"./variants-CTjkuV9j.js";import"./x-ByohdK2B.js";import"./createLucideIcon-BXJdBs6C.js";const R={title:"Form/Input",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled"]},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},error:{control:"text"},warning:{control:"text"},info:{control:"text"},success:{control:"text"},loading:{control:"boolean"},clearable:{control:"boolean"},showCount:{control:"boolean"},fullWidth:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"},messagePosition:{control:"select",options:["top","bottom"]}}},s={args:{label:"Email address",placeholder:"you@example.com",variant:"outline",size:"md",color:"primary"}},t={render:()=>e.jsxs("div",{className:"space-y-10 max-w-md",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"outline",label:"Outline",placeholder:"Outline variant"}),e.jsx(a,{variant:"filled",label:"Filled",placeholder:"Filled variant"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{size:"xs",placeholder:"Extra small"}),e.jsx(a,{size:"sm",placeholder:"Small"}),e.jsx(a,{size:"md",placeholder:"Medium"}),e.jsx(a,{size:"lg",placeholder:"Large"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Icons"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{leftIcon:e.jsx(j,{size:16}),placeholder:"Search..."}),e.jsx(a,{leftIcon:e.jsx(v,{size:16}),placeholder:"Email address",label:"Email"}),e.jsx(a,{leftIcon:e.jsx(g,{size:16}),rightIcon:e.jsx(I,{size:16}),placeholder:"Password",type:"password"}),e.jsx(a,{rightIcon:e.jsx(E,{size:16}),placeholder:"With right icon"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Validation States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"Error",placeholder:"Enter value",error:"This field is required"}),e.jsx(a,{label:"Warning",placeholder:"Enter value",warning:"This value may cause issues"}),e.jsx(a,{label:"Success",placeholder:"Enter value",success:"Looks good!"}),e.jsx(a,{label:"Info",placeholder:"Enter value",info:"This will be visible to others"}),e.jsx(a,{label:"Helper text",placeholder:"Enter value",helperText:"Minimum 8 characters required"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{placeholder:"Disabled input",disabled:!0,label:"Disabled"}),e.jsx(a,{placeholder:"Read only value",readOnly:!0,label:"Read only",defaultValue:"Cannot edit this"}),e.jsx(a,{placeholder:"Loading...",loading:!0,label:"Loading"}),e.jsx(a,{placeholder:"Clearable input",clearable:!0,label:"Clearable",defaultValue:"Clear me"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Character Count"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"Bio",placeholder:"Tell us about yourself",showCount:!0,maxLength:100}),e.jsx(a,{label:"Title",placeholder:"Enter title",showCount:!0,maxLength:50,defaultValue:"Short title"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:["primary","secondary","accent","success","error","warning","info"].map(l=>e.jsx(a,{color:l,label:l,placeholder:`${l} focus color`},l))})]})]})},o={render:()=>e.jsxs("div",{className:"space-y-3 max-w-sm",children:[e.jsx(a,{leftIcon:e.jsx(j,{size:16}),placeholder:"Search anything..."}),e.jsx(a,{leftIcon:e.jsx(w,{size:16}),label:"Username",placeholder:"johndoe"}),e.jsx(a,{leftIcon:e.jsx(v,{size:16}),label:"Email",placeholder:"you@example.com",type:"email"}),e.jsx(a,{leftIcon:e.jsx(g,{size:16}),rightIcon:e.jsx(I,{size:16}),label:"Password",placeholder:"Enter password",type:"password"})]})},r={render:()=>e.jsxs("div",{className:"space-y-4 max-w-sm",children:[e.jsx(a,{label:"Error state",placeholder:"Enter value",error:"This field is required",defaultValue:"bad input"}),e.jsx(a,{label:"Warning state",placeholder:"Enter value",warning:"Password strength: weak",defaultValue:"password"}),e.jsx(a,{label:"Success state",placeholder:"Enter value",success:"Username is available",defaultValue:"johndoe"}),e.jsx(a,{label:"Info state",placeholder:"Enter value",info:"We will send a confirmation email",defaultValue:"me@example.com"})]})};var n,c,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    variant: "outline",
    size: "md",
    color: "primary"
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <Input variant="outline" label="Outline" placeholder="Outline variant" />
          <Input variant="filled" label="Filled" placeholder="Filled variant" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <Input size="xs" placeholder="Extra small" />
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <div className="space-y-3">
          <Input leftIcon={<Search size={16} />} placeholder="Search..." />
          <Input leftIcon={<Mail size={16} />} placeholder="Email address" label="Email" />
          <Input leftIcon={<Lock size={16} />} rightIcon={<Eye size={16} />} placeholder="Password" type="password" />
          <Input rightIcon={<AlertCircle size={16} />} placeholder="With right icon" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <Input label="Error" placeholder="Enter value" error="This field is required" />
          <Input label="Warning" placeholder="Enter value" warning="This value may cause issues" />
          <Input label="Success" placeholder="Enter value" success="Looks good!" />
          <Input label="Info" placeholder="Enter value" info="This will be visible to others" />
          <Input label="Helper text" placeholder="Enter value" helperText="Minimum 8 characters required" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <Input placeholder="Disabled input" disabled label="Disabled" />
          <Input placeholder="Read only value" readOnly label="Read only" defaultValue="Cannot edit this" />
          <Input placeholder="Loading..." loading label="Loading" />
          <Input placeholder="Clearable input" clearable label="Clearable" defaultValue="Clear me" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Character Count</h3>
        <div className="space-y-3">
          <Input label="Bio" placeholder="Tell us about yourself" showCount maxLength={100} />
          <Input label="Title" placeholder="Enter title" showCount maxLength={50} defaultValue="Short title" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <Input key={color} color={color} label={color} placeholder={\`\${color} focus color\`} />)}
        </div>
      </section>
    </div>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,u,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-sm">
      <Input leftIcon={<Search size={16} />} placeholder="Search anything..." />
      <Input leftIcon={<User size={16} />} label="Username" placeholder="johndoe" />
      <Input leftIcon={<Mail size={16} />} label="Email" placeholder="you@example.com" type="email" />
      <Input leftIcon={<Lock size={16} />} rightIcon={<Eye size={16} />} label="Password" placeholder="Enter password" type="password" />
    </div>
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,f,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-sm">
      <Input label="Error state" placeholder="Enter value" error="This field is required" defaultValue="bad input" />
      <Input label="Warning state" placeholder="Enter value" warning="Password strength: weak" defaultValue="password" />
      <Input label="Success state" placeholder="Enter value" success="Username is available" defaultValue="johndoe" />
      <Input label="Info state" placeholder="Enter value" info="We will send a confirmation email" defaultValue="me@example.com" />
    </div>
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const D=["Playground","Showcase","WithIcons","ValidationStates"];export{s as Playground,t as Showcase,r as ValidationStates,o as WithIcons,D as __namedExportsOrder,R as default};
