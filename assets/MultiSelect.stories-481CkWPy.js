import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as l}from"./index-CsyumRq-.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useControllable-BTRR6hV3.js";import"./index-BLrHYnCp.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";import"./utils-_uLxnvdl.js";import"./useOverlayContainer-BKheCA97.js";import"./variants-CTjkuV9j.js";import"./index-CF05pSQ2.js";import"./useSelectBase--JAkF883.js";import"./createLucideIcon-BXJdBs6C.js";import"./index-B-0NfVwE.js";import"./useMenuNavigation-Cake-z-f.js";import"./check-CKCh4cDT.js";import"./chevron-down-D1qmGosc.js";import"./x-ByohdK2B.js";import"./search-DfqimKq8.js";const a=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"dragonfruit",label:"Dragon Fruit"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"}],u=[{value:"apple",label:"Apple",group:"Fruits"},{value:"banana",label:"Banana",group:"Fruits"},{value:"cherry",label:"Cherry",group:"Fruits"},{value:"carrot",label:"Carrot",group:"Vegetables"},{value:"broccoli",label:"Broccoli",group:"Vegetables"},{value:"spinach",label:"Spinach",group:"Vegetables",disabled:!0},{value:"milk",label:"Milk",group:"Dairy"},{value:"cheese",label:"Cheese",group:"Dairy"}],E={title:"Form/MultiSelect",component:l,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled"]},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]},disabled:{control:"boolean"},loading:{control:"boolean"},clearable:{control:"boolean"},fullWidth:{control:"boolean"},required:{control:"boolean"},placeholder:{control:"text"},label:{control:"text"},helperText:{control:"text"},error:{control:"text"},warning:{control:"text"},success:{control:"text"},info:{control:"text"},maxChipsVisible:{control:"number"},maxSelectedValues:{control:"number"},maxDropdownHeight:{control:"number"},messagePosition:{control:"select",options:["top","bottom"]}}},o={args:{label:"Select fruits",placeholder:"Choose options...",options:a,defaultValue:["apple","banana"],variant:"outline",size:"md",color:"primary",clearable:!0,fullWidth:!0}},s={render:()=>e.jsxs("div",{className:"space-y-10 max-w-md",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(l,{label:"Outline",options:a,defaultValue:["apple"],variant:"outline",placeholder:"Select options..."}),e.jsx(l,{label:"Filled",options:a,defaultValue:["banana"],variant:"filled",placeholder:"Select options..."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsx("div",{className:"space-y-3",children:["xs","sm","md","lg"].map(t=>e.jsx(l,{label:`Size: ${t}`,options:a,defaultValue:["apple"],size:t,placeholder:`${t} size...`},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:["primary","secondary","accent","success","error","warning","info"].map(t=>e.jsx(l,{label:t,options:a,defaultValue:["apple"],color:t,placeholder:`${t}...`},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Validation States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(l,{label:"Error state",options:a,defaultValue:["apple"],error:"Please select at least 2 items"}),e.jsx(l,{label:"Warning state",options:a,defaultValue:["banana"],warning:"You are approaching the limit"}),e.jsx(l,{label:"Success state",options:a,defaultValue:["cherry","apple"],success:"Selection looks good!"}),e.jsx(l,{label:"Info state",options:a,defaultValue:[],info:"You can select up to 3 items",helperText:"Helper text below"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Grouped Options"}),e.jsx(l,{label:"Grouped items",options:u,placeholder:"Select items...",defaultValue:["apple","carrot"],clearable:!0})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Max Selection"}),e.jsx(l,{label:"Max 2 selections",options:a,defaultValue:["apple","banana"],maxSelectedValues:2,helperText:"You can only select up to 2 items"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(l,{label:"Loading",options:a,loading:!0,placeholder:"Loading options..."}),e.jsx(l,{label:"Disabled",options:a,defaultValue:["apple"],disabled:!0}),e.jsx(l,{label:"Clearable with many chips",options:a,defaultValue:["apple","cherry","grape","fig"],clearable:!0,maxChipsVisible:2})]})]})]})};var n,i,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Select fruits",
    placeholder: "Choose options...",
    options: FRUIT_OPTIONS,
    defaultValue: ["apple", "banana"],
    variant: "outline",
    size: "md",
    color: "primary",
    clearable: true,
    fullWidth: true
  }
}`,...(r=(i=o.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <MultiSelect label="Outline" options={FRUIT_OPTIONS} defaultValue={["apple"]} variant="outline" placeholder="Select options..." />
          <MultiSelect label="Filled" options={FRUIT_OPTIONS} defaultValue={["banana"]} variant="filled" placeholder="Select options..." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map(size => <MultiSelect key={size} label={\`Size: \${size}\`} options={FRUIT_OPTIONS} defaultValue={["apple"]} size={size} placeholder={\`\${size} size...\`} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <MultiSelect key={color} label={color} options={FRUIT_OPTIONS} defaultValue={["apple"]} color={color} placeholder={\`\${color}...\`} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <MultiSelect label="Error state" options={FRUIT_OPTIONS} defaultValue={["apple"]} error="Please select at least 2 items" />
          <MultiSelect label="Warning state" options={FRUIT_OPTIONS} defaultValue={["banana"]} warning="You are approaching the limit" />
          <MultiSelect label="Success state" options={FRUIT_OPTIONS} defaultValue={["cherry", "apple"]} success="Selection looks good!" />
          <MultiSelect label="Info state" options={FRUIT_OPTIONS} defaultValue={[]} info="You can select up to 3 items" helperText="Helper text below" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Grouped Options</h3>
        <MultiSelect label="Grouped items" options={GROUPED_OPTIONS} placeholder="Select items..." defaultValue={["apple", "carrot"]} clearable />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Max Selection</h3>
        <MultiSelect label="Max 2 selections" options={FRUIT_OPTIONS} defaultValue={["apple", "banana"]} maxSelectedValues={2} helperText="You can only select up to 2 items" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <MultiSelect label="Loading" options={FRUIT_OPTIONS} loading placeholder="Loading options..." />
          <MultiSelect label="Disabled" options={FRUIT_OPTIONS} defaultValue={["apple"]} disabled />
          <MultiSelect label="Clearable with many chips" options={FRUIT_OPTIONS} defaultValue={["apple", "cherry", "grape", "fig"]} clearable maxChipsVisible={2} />
        </div>
      </section>
    </div>
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const G=["Playground","Showcase"];export{o as Playground,s as Showcase,G as __namedExportsOrder,E as default};
