import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as o}from"./index-BQn0sZxL.js";import{c,a as R}from"./utils-_uLxnvdl.js";import{R as s,r as A}from"./index-ZH-6pyQh.js";import"./variants-CTjkuV9j.js";import"./minus-Bn6CyQhd.js";import"./createLucideIcon-BXJdBs6C.js";import"./check-CKCh4cDT.js";import"./_commonjsHelpers-CqkleIqs.js";const E=R("flex",{variants:{orientation:{vertical:"flex-col gap-2",horizontal:"flex-row flex-wrap gap-4"}},defaultVariants:{orientation:"vertical"}}),n=s.memo(({label:l,helperText:b,error:a,orientation:p="vertical",size:h,color:u,className:G,classNames:t,children:S,ref:O,...z})=>{const m=A.useId(),k=l?`checkboxgroup-label-${m}`:void 0,C=b||a?`checkboxgroup-message-${m}`:void 0;return e.jsxs("div",{ref:O,role:"group","aria-labelledby":k,"aria-describedby":C,"aria-orientation":p,className:c("checkboxGroup_root","w-full",G,t==null?void 0:t.root),"data-slot":"root",...z,children:[l&&e.jsx("div",{className:"mb-2","data-slot":"label",children:e.jsx("span",{id:k,className:c("checkboxGroup_label","text-sm font-medium text-text-secondary",t==null?void 0:t.label),children:l})}),e.jsx("div",{className:c("checkboxGroup_group",E({orientation:p}),t==null?void 0:t.group),"data-slot":"group",children:s.Children.map(S,r=>{if(s.isValidElement(r)){const i={};if(h&&!r.props.size&&(i.size=h),u&&!r.props.color&&(i.color=u),Object.keys(i).length>0)return s.cloneElement(r,i)}return r})}),(b||a)&&e.jsx("p",{id:C,className:c(a?"checkboxGroup_error":"checkboxGroup_helper","mt-2 text-xs",a?"text-error":"text-text-secondary",a?t==null?void 0:t.error:t==null?void 0:t.helper),"data-slot":a?"error":"helper",children:a||b})]})});n.displayName="CheckboxGroup";n.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{orientation:{defaultValue:{value:"'vertical'",computed:!1},required:!1}}};const H={title:"Data Entry/CheckboxGroup",component:n,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["vertical","horizontal"]},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]}}},N=["primary","secondary","accent","success","error","warning","info"],d={args:{label:"Interests",orientation:"vertical",size:"md",color:"primary"},render:l=>e.jsxs(n,{...l,children:[e.jsx(o,{label:"Music"}),e.jsx(o,{label:"Sports"}),e.jsx(o,{label:"Reading"}),e.jsx(o,{label:"Gaming"})]})},x={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Orientations"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs(n,{label:"Vertical (default)",orientation:"vertical",children:[e.jsx(o,{label:"Option A",defaultChecked:!0}),e.jsx(o,{label:"Option B"}),e.jsx(o,{label:"Option C"})]}),e.jsxs(n,{label:"Horizontal",orientation:"horizontal",children:[e.jsx(o,{label:"XS",defaultChecked:!0}),e.jsx(o,{label:"S"}),e.jsx(o,{label:"M"}),e.jsx(o,{label:"L"}),e.jsx(o,{label:"XL"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:N.map(l=>e.jsxs(n,{label:l,orientation:"horizontal",children:[e.jsx(o,{color:l,label:"A",defaultChecked:!0}),e.jsx(o,{color:l,label:"B"})]},l))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap gap-8",children:["xs","sm","md","lg"].map(l=>e.jsxs(n,{label:`Size ${l}`,orientation:"vertical",size:l,children:[e.jsx(o,{label:"Option A",defaultChecked:!0}),e.jsx(o,{label:"Option B"})]},l))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Helper Text"}),e.jsxs(n,{label:"Notification preferences",helperText:"Select the notifications you want to receive.",orientation:"vertical",children:[e.jsx(o,{label:"Email notifications",defaultChecked:!0}),e.jsx(o,{label:"SMS notifications"}),e.jsx(o,{label:"Push notifications",defaultChecked:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Error State"}),e.jsxs(n,{label:"Required selection",error:"You must select at least one option.",orientation:"vertical",children:[e.jsx(o,{label:"Option A"}),e.jsx(o,{label:"Option B"}),e.jsx(o,{label:"Option C"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Real-world: Technical Skills"}),e.jsxs(n,{label:"Technical Skills",orientation:"horizontal",children:[e.jsx(o,{label:"JavaScript",color:"warning",defaultChecked:!0}),e.jsx(o,{label:"TypeScript",color:"primary",defaultChecked:!0}),e.jsx(o,{label:"React",color:"info",defaultChecked:!0}),e.jsx(o,{label:"Node.js",color:"success"}),e.jsx(o,{label:"Python",color:"accent"}),e.jsx(o,{label:"Rust",color:"error"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States: Disabled"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs(n,{label:"Disabled group (no children disabled)",disabled:!0,orientation:"horizontal",children:[e.jsx(o,{label:"Option A",defaultChecked:!0}),e.jsx(o,{label:"Option B"}),e.jsx(o,{label:"Option C"})]}),e.jsxs(n,{label:"Mixed disabled",orientation:"vertical",children:[e.jsx(o,{label:"Enabled",defaultChecked:!0}),e.jsx(o,{label:"Disabled individually",disabled:!0}),e.jsx(o,{label:"Also enabled"})]})]})]})]})};var f,j,g;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Interests",
    orientation: "vertical",
    size: "md",
    color: "primary"
  },
  render: args => <CheckboxGroup {...args}>
      <Checkbox label="Music" />
      <Checkbox label="Sports" />
      <Checkbox label="Reading" />
      <Checkbox label="Gaming" />
    </CheckboxGroup>
}`,...(g=(j=d.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var v,y,w;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Orientations
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <CheckboxGroup label="Vertical (default)" orientation="vertical">
            <Checkbox label="Option A" defaultChecked />
            <Checkbox label="Option B" />
            <Checkbox label="Option C" />
          </CheckboxGroup>
          <CheckboxGroup label="Horizontal" orientation="horizontal">
            <Checkbox label="XS" defaultChecked />
            <Checkbox label="S" />
            <Checkbox label="M" />
            <Checkbox label="L" />
            <Checkbox label="XL" />
          </CheckboxGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-6">
          {colors.map(c => <CheckboxGroup key={c} label={c} orientation="horizontal">
              <Checkbox color={c} label="A" defaultChecked />
              <Checkbox color={c} label="B" />
            </CheckboxGroup>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex flex-wrap gap-8">
          {(["xs", "sm", "md", "lg"] as const).map(s => <CheckboxGroup key={s} label={\`Size \${s}\`} orientation="vertical" size={s}>
              <Checkbox label="Option A" defaultChecked />
              <Checkbox label="Option B" />
            </CheckboxGroup>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Helper Text
        </h3>
        <CheckboxGroup label="Notification preferences" helperText="Select the notifications you want to receive." orientation="vertical">
          <Checkbox label="Email notifications" defaultChecked />
          <Checkbox label="SMS notifications" />
          <Checkbox label="Push notifications" defaultChecked />
        </CheckboxGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Error State
        </h3>
        <CheckboxGroup label="Required selection" error="You must select at least one option." orientation="vertical">
          <Checkbox label="Option A" />
          <Checkbox label="Option B" />
          <Checkbox label="Option C" />
        </CheckboxGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Real-world: Technical Skills
        </h3>
        <CheckboxGroup label="Technical Skills" orientation="horizontal">
          <Checkbox label="JavaScript" color="warning" defaultChecked />
          <Checkbox label="TypeScript" color="primary" defaultChecked />
          <Checkbox label="React" color="info" defaultChecked />
          <Checkbox label="Node.js" color="success" />
          <Checkbox label="Python" color="accent" />
          <Checkbox label="Rust" color="error" />
        </CheckboxGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States: Disabled
        </h3>
        <div className="space-y-4">
          <CheckboxGroup label="Disabled group (no children disabled)" disabled orientation="horizontal">
            <Checkbox label="Option A" defaultChecked />
            <Checkbox label="Option B" />
            <Checkbox label="Option C" />
          </CheckboxGroup>
          <CheckboxGroup label="Mixed disabled" orientation="vertical">
            <Checkbox label="Enabled" defaultChecked />
            <Checkbox label="Disabled individually" disabled />
            <Checkbox label="Also enabled" />
          </CheckboxGroup>
        </div>
      </section>
    </div>
}`,...(w=(y=x.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const L=["Playground","Showcase"];export{d as Playground,x as Showcase,L as __namedExportsOrder,H as default};
