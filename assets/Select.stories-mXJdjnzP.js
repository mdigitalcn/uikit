import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as o}from"./index-Bfy8hdvJ.js";import"./utils-_uLxnvdl.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useControllable-BTRR6hV3.js";import"./index-CF05pSQ2.js";import"./variants-CTjkuV9j.js";import"./index-BLrHYnCp.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";import"./useOverlayContainer-BKheCA97.js";import"./useSelectBase--JAkF883.js";import"./createLucideIcon-BXJdBs6C.js";import"./index-B-0NfVwE.js";import"./useMenuNavigation-Cake-z-f.js";import"./check-CKCh4cDT.js";import"./chevron-down-D1qmGosc.js";import"./x-ByohdK2B.js";import"./search-DfqimKq8.js";const _={title:"Form/Select",component:o,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled"]},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},error:{control:"text"},warning:{control:"text"},info:{control:"text"},success:{control:"text"},clearable:{control:"boolean"},fullWidth:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"},required:{control:"boolean"},messagePosition:{control:"select",options:["top","bottom"]}}},l=[{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"Angular",value:"angular"},{label:"Svelte",value:"svelte"},{label:"Solid",value:"solid"}],v=[{label:"United States",value:"us"},{label:"United Kingdom",value:"uk"},{label:"Germany",value:"de"},{label:"France",value:"fr"},{label:"Japan",value:"jp"},{label:"Australia",value:"au"},{label:"Canada",value:"ca"},{label:"Brazil",value:"br"}],g=[{label:"New York",value:"ny",group:"United States"},{label:"Los Angeles",value:"la",group:"United States"},{label:"Chicago",value:"chi",group:"United States"},{label:"London",value:"lon",group:"United Kingdom"},{label:"Manchester",value:"man",group:"United Kingdom"},{label:"Berlin",value:"ber",group:"Germany"},{label:"Munich",value:"mun",group:"Germany"}],a={args:{label:"Framework",placeholder:"Select a framework",options:l,variant:"outline",size:"md",color:"primary"}},s={render:()=>e.jsxs("div",{className:"space-y-10 max-w-md",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(o,{variant:"outline",label:"Outline",placeholder:"Select option",options:l}),e.jsx(o,{variant:"filled",label:"Filled",placeholder:"Select option",options:l})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(o,{size:"xs",placeholder:"Extra small",options:l}),e.jsx(o,{size:"sm",placeholder:"Small",options:l}),e.jsx(o,{size:"md",placeholder:"Medium",options:l}),e.jsx(o,{size:"lg",placeholder:"Large",options:l})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Validation States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(o,{label:"Error",placeholder:"Select option",options:l,error:"Please select a framework"}),e.jsx(o,{label:"Warning",placeholder:"Select option",options:l,warning:"This framework is deprecated"}),e.jsx(o,{label:"Success",placeholder:"Select option",options:l,success:"Great choice!",defaultValue:"react"}),e.jsx(o,{label:"Info",placeholder:"Select option",options:l,info:"We support all major frameworks"}),e.jsx(o,{label:"Helper text",placeholder:"Select option",options:l,helperText:"Choose the framework for your project"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(o,{label:"Disabled",placeholder:"Select option",options:l,disabled:!0}),e.jsx(o,{label:"Loading",placeholder:"Loading options...",options:[],loading:!0}),e.jsx(o,{label:"Clearable",placeholder:"Select option",options:l,clearable:!0,defaultValue:"react"}),e.jsx(o,{label:"Required",placeholder:"Select option",options:l,required:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Grouped Options"}),e.jsx(o,{label:"City",placeholder:"Select a city",options:g})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:["primary","secondary","accent","success"].map(t=>e.jsx(o,{color:t,label:t,placeholder:`${t} focus color`,options:l},t))})]})]})},r={render:()=>e.jsx("div",{className:"max-w-sm",children:e.jsx(o,{label:"City",placeholder:"Select a city",options:g,helperText:"Options are grouped by country"})})},n={render:()=>e.jsxs("div",{className:"space-y-4 max-w-sm",children:[e.jsx(o,{label:"Error state",placeholder:"Select option",options:l,error:"This field is required"}),e.jsx(o,{label:"Warning state",placeholder:"Select option",options:l,warning:"Consider using React instead",defaultValue:"angular"}),e.jsx(o,{label:"Success state",placeholder:"Select option",options:l,success:"Perfect choice!",defaultValue:"react"}),e.jsx(o,{label:"Info state",placeholder:"Select option",options:v,info:"Select your country of residence"})]})};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Framework",
    placeholder: "Select a framework",
    options: frameworks,
    variant: "outline",
    size: "md",
    color: "primary"
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <Select variant="outline" label="Outline" placeholder="Select option" options={frameworks} />
          <Select variant="filled" label="Filled" placeholder="Select option" options={frameworks} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <Select size="xs" placeholder="Extra small" options={frameworks} />
          <Select size="sm" placeholder="Small" options={frameworks} />
          <Select size="md" placeholder="Medium" options={frameworks} />
          <Select size="lg" placeholder="Large" options={frameworks} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <Select label="Error" placeholder="Select option" options={frameworks} error="Please select a framework" />
          <Select label="Warning" placeholder="Select option" options={frameworks} warning="This framework is deprecated" />
          <Select label="Success" placeholder="Select option" options={frameworks} success="Great choice!" defaultValue="react" />
          <Select label="Info" placeholder="Select option" options={frameworks} info="We support all major frameworks" />
          <Select label="Helper text" placeholder="Select option" options={frameworks} helperText="Choose the framework for your project" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <Select label="Disabled" placeholder="Select option" options={frameworks} disabled />
          <Select label="Loading" placeholder="Loading options..." options={[]} loading />
          <Select label="Clearable" placeholder="Select option" options={frameworks} clearable defaultValue="react" />
          <Select label="Required" placeholder="Select option" options={frameworks} required />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Grouped Options</h3>
        <Select label="City" placeholder="Select a city" options={groupedOptions} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success"] as const).map(color => <Select key={color} color={color} label={color} placeholder={\`\${color} focus color\`} options={frameworks} />)}
        </div>
      </section>
    </div>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,x,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm">
      <Select label="City" placeholder="Select a city" options={groupedOptions} helperText="Options are grouped by country" />
    </div>
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var S,f,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-sm">
      <Select label="Error state" placeholder="Select option" options={frameworks} error="This field is required" />
      <Select label="Warning state" placeholder="Select option" options={frameworks} warning="Consider using React instead" defaultValue="angular" />
      <Select label="Success state" placeholder="Select option" options={frameworks} success="Perfect choice!" defaultValue="react" />
      <Select label="Info state" placeholder="Select option" options={countries} info="Select your country of residence" />
    </div>
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const $=["Playground","Showcase","WithGroups","ValidationStates"];export{a as Playground,s as Showcase,n as ValidationStates,r as WithGroups,$ as __namedExportsOrder,_ as default};
