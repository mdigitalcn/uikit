import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as n}from"./index-ZH-6pyQh.js";import{I as S}from"./index-CU488rde.js";import{c as a,i as p}from"./utils-_uLxnvdl.js";import{E}from"./eye-BJ7v6ROl.js";import{c as V}from"./createLucideIcon-BXJdBs6C.js";import{L as _}from"./lock-D-iRFELD.js";import{U as M}from"./user-BM8Midap.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CF05pSQ2.js";import"./variants-CTjkuV9j.js";import"./x-ByohdK2B.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],z=V("eye-off",k),s=n.memo(({visibilityToggle:t=!0,size:l="md",color:g="primary",ref:f,classNames:o,...y})=>{const[r,P]=n.useState(!1),c=n.useCallback(()=>{P(I=>!I)},[]),j=n.useMemo(()=>({root:a("inputPassword_root",o==null?void 0:o.root),wrapper:a("inputPassword_wrapper",o==null?void 0:o.wrapper),label:a("inputPassword_label",o==null?void 0:o.label),input:a("inputPassword_input",o==null?void 0:o.input),helper:a("inputPassword_helper",o==null?void 0:o.helper),error:a("inputPassword_error",o==null?void 0:o.error)}),[o]),v=n.useMemo(()=>t?e.jsx("button",{type:"button",onClick:c,"data-slot":"toggleButton",className:a("inputPassword_toggleButton","cursor-pointer hover:text-text-primary transition-colors",o==null?void 0:o.toggleButton),"aria-label":r?"Hide password":"Show password","aria-pressed":r,children:r?e.jsx(E,{"data-slot":"toggleIcon",className:a("inputPassword_toggleIcon",p[l],o==null?void 0:o.toggleIcon)}):e.jsx(z,{"data-slot":"toggleIcon",className:a("inputPassword_toggleIcon",p[l],o==null?void 0:o.toggleIcon)})}):void 0,[t,c,r,l,o]);return e.jsx(S,{...y,size:l,color:g,ref:f,type:r?"text":"password",classNames:j,rightIcon:v})});s.displayName="PasswordInput";s.__docgenInfo={description:"",methods:[],displayName:"PasswordInput",props:{visibilityToggle:{defaultValue:{value:"true",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}};const Y={title:"Data Entry/InputPassword",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled"]},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},visibilityToggle:{control:"boolean"},clearable:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},messagePosition:{control:"select",options:["top","bottom"]}}},d={args:{label:"Password",placeholder:"Enter password...",size:"md",variant:"outline"}},C=["primary","secondary","accent","success","error","warning","info"],i={render:()=>e.jsxs("div",{className:"space-y-10 max-w-md",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{variant:"outline",label:"Outline",placeholder:"Enter password..."}),e.jsx(s,{variant:"filled",label:"Filled",placeholder:"Enter password..."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsx("div",{className:"space-y-3",children:["xs","sm","md","lg"].map(t=>e.jsx(s,{size:t,label:`Size ${t}`,placeholder:"Password"},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:C.map(t=>e.jsx(s,{color:t,label:t,placeholder:"Password"},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Left Icon"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{leftIcon:e.jsx(_,{className:"w-4 h-4"}),label:"Secure password",placeholder:"Minimum 8 characters"}),e.jsx(s,{leftIcon:e.jsx(M,{className:"w-4 h-4"}),label:"Account password",placeholder:"Your password",variant:"filled"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Toggle Options"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{label:"With toggle (default)",defaultValue:"secret123"}),e.jsx(s,{label:"No toggle",visibilityToggle:!1,defaultValue:"secret123"}),e.jsx(s,{label:"Clearable",clearable:!0,defaultValue:"secret123"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Validation States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{error:"Password must be at least 8 characters",label:"Error",placeholder:"Too short"}),e.jsx(s,{warning:"Password strength: medium",label:"Warning",placeholder:"Password"}),e.jsx(s,{success:"Strong password",label:"Success",defaultValue:"Str0ng!Pass"}),e.jsx(s,{info:"Use uppercase, numbers, and symbols",label:"Info hint",placeholder:"Password"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Message Position"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{error:"Error shown at top",label:"Message top",messagePosition:"top",placeholder:"Password"}),e.jsx(s,{error:"Error shown at bottom",label:"Message bottom",messagePosition:"bottom",placeholder:"Password"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{loading:!0,label:"Loading",placeholder:"Checking..."}),e.jsx(s,{disabled:!0,label:"Disabled",placeholder:"Not editable"}),e.jsx(s,{readOnly:!0,defaultValue:"readonly-value-123",label:"Read only"})]})]})]})};var m,u,h;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "Enter password...",
    size: "md",
    variant: "outline"
  }
}`,...(h=(u=d.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,x,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <PasswordInput variant="outline" label="Outline" placeholder="Enter password..." />
          <PasswordInput variant="filled" label="Filled" placeholder="Enter password..." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map(s => <PasswordInput key={s} size={s} label={\`Size \${s}\`} placeholder="Password" />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {colors.map(c => <PasswordInput key={c} color={c} label={c} placeholder="Password" />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Left Icon</h3>
        <div className="space-y-3">
          <PasswordInput leftIcon={<Lock className="w-4 h-4" />} label="Secure password" placeholder="Minimum 8 characters" />
          <PasswordInput leftIcon={<User className="w-4 h-4" />} label="Account password" placeholder="Your password" variant="filled" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Toggle Options</h3>
        <div className="space-y-3">
          <PasswordInput label="With toggle (default)" defaultValue="secret123" />
          <PasswordInput label="No toggle" visibilityToggle={false} defaultValue="secret123" />
          <PasswordInput label="Clearable" clearable defaultValue="secret123" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <PasswordInput error="Password must be at least 8 characters" label="Error" placeholder="Too short" />
          <PasswordInput warning="Password strength: medium" label="Warning" placeholder="Password" />
          <PasswordInput success="Strong password" label="Success" defaultValue="Str0ng!Pass" />
          <PasswordInput info="Use uppercase, numbers, and symbols" label="Info hint" placeholder="Password" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Message Position</h3>
        <div className="space-y-3">
          <PasswordInput error="Error shown at top" label="Message top" messagePosition="top" placeholder="Password" />
          <PasswordInput error="Error shown at bottom" label="Message bottom" messagePosition="bottom" placeholder="Password" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <PasswordInput loading label="Loading" placeholder="Checking..." />
          <PasswordInput disabled label="Disabled" placeholder="Not editable" />
          <PasswordInput readOnly defaultValue="readonly-value-123" label="Read only" />
        </div>
      </section>
    </div>
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const $=["Playground","Showcase"];export{d as Playground,i as Showcase,$ as __namedExportsOrder,Y as default};
