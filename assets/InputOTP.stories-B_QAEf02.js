import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as Y,c as b,s as k,a as Z}from"./utils-_uLxnvdl.js";import{R as l}from"./index-ZH-6pyQh.js";import{c as C}from"./variants-CTjkuV9j.js";import"./_commonjsHelpers-CqkleIqs.js";const ee=Z("inline-flex items-center justify-center border [--_radius:var(--radius-input)] rounded-slot bg-background text-text-primary font-medium text-center outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed",{variants:{size:{xs:"h-(--otp-size-xs) w-(--otp-size-xs) text-xs",sm:"h-(--otp-size-sm) w-(--otp-size-sm) text-sm",md:"h-(--otp-size-md) w-(--otp-size-md) text-base",lg:"h-(--otp-size-lg) w-(--otp-size-lg) text-lg"},status:{default:"border-border hover:border-slot-50 focus:border-slot focus:ring-2 focus:ring-slot-30",error:"border-error focus:border-error focus:ring-2 focus:ring-error/30",warning:"border-warning focus:border-warning focus:ring-2 focus:ring-warning/30",info:"border-info focus:border-info focus:ring-2 focus:ring-info/30",success:"border-success focus:border-success focus:ring-2 focus:ring-success/30"}},defaultVariants:{size:"md",status:"default"}}),n=l.memo(({length:t=6,size:D="md",color:q="primary",value:f,onChange:c,onComplete:d,error:L,warning:A,info:W,success:$,helperText:K,disabled:B=!1,autoFocus:I=!1,type:F="text",mask:G=!1,pattern:m,label:N,messagePosition:w="bottom",className:H,classNames:s,ref:J})=>{const x=l.useRef([]),V=l.useRef([]),[v,T]=l.useState(f!==void 0?f.split("").slice(0,t):[]);V.current=v,l.useEffect(()=>{f!==void 0&&T(f.split("").slice(0,t))},[f,t]),l.useEffect(()=>{I&&x.current[0]&&x.current[0].focus()},[I]);const h=l.useMemo(()=>{if(!m)return null;try{return new RegExp(m)}catch{return null}},[m]),Q=l.useCallback((r,a)=>{var o;const i=a.slice(-1);h&&i&&!h.test(i)||(T(u=>{const g=[...u];g[r]=i;const p=g.join("");return c==null||c(p),p.length===t&&(d==null||d(p)),g}),i&&r<t-1&&((o=x.current[r+1])==null||o.focus()))},[t,c,d,h]),U=l.useCallback((r,a)=>{var i,o,u;a.key==="Backspace"?!V.current[r]&&r>0&&((i=x.current[r-1])==null||i.focus()):a.key==="ArrowLeft"&&r>0?(o=x.current[r-1])==null||o.focus():a.key==="ArrowRight"&&r<t-1&&((u=x.current[r+1])==null||u.focus())},[t]),X=l.useCallback(r=>{r.preventDefault();const a=r.clipboardData.getData("text").slice(0,t);h&&m&&!new RegExp(`^${m}*$`).test(a)||T(i=>{var p;const o=a.split("").slice(0,t),u=o.join("");c==null||c(u);const g=Math.min(o.length,t-1);return(p=x.current[g])==null||p.focus(),i.length<t&&u.length===t&&(d==null||d(u)),o})},[t,c,d,h,m]),{status:y,message:j}=Y({error:L,warning:A,info:W,success:$,helperText:K});return e.jsxs("div",{ref:J,"data-slot":"inputOTP_root",className:b("inputOTP_root","w-full",C[y!=="default"?y:q],s==null?void 0:s.root,H),children:[N&&e.jsx("label",{"data-slot":"inputOTP_label",className:b("inputOTP_label","block text-sm font-medium text-text-primary mb-1.5",s==null?void 0:s.label),children:N}),w==="top"&&j&&e.jsx("p",{"data-slot":"inputOTP_helper",className:b("inputOTP_helper",k({status:y}),"mb-1.5",s==null?void 0:s.helper),children:j}),e.jsx("div",{"data-slot":"inputOTP_wrapper",className:b("inputOTP_wrapper","flex gap-2",s==null?void 0:s.wrapper),role:"group","aria-label":"One-time password",children:Array.from({length:t}).map((r,a)=>{const i=v[a]!==void 0&&v[a]!=="";return e.jsx("input",{ref:o=>{x.current[a]=o},type:G?"password":"text",inputMode:F==="number"?"numeric":"text",maxLength:1,value:v[a]||"",onChange:o=>Q(a,o.target.value),onKeyDown:o=>U(a,o),onPaste:X,disabled:B,"data-slot":"inputOTP_slot",className:b("inputOTP_slot",ee({size:D,status:y}),"font-semibold",s==null?void 0:s.slot,i&&(s==null?void 0:s.slotActive)),"aria-label":`OTP digit ${a+1}`},a)})}),w==="bottom"&&j&&e.jsx("p",{"data-slot":"inputOTP_helper",className:b("inputOTP_helper",k({status:y}),"mt-1.5",s==null?void 0:s.helper),children:j})]})});n.displayName="InputOTP";n.__docgenInfo={description:"",methods:[],displayName:"InputOTP",props:{length:{defaultValue:{value:"6",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},autoFocus:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'text'",computed:!1},required:!1},mask:{defaultValue:{value:"false",computed:!1},required:!1},messagePosition:{defaultValue:{value:"'bottom'",computed:!1},required:!1}}};const ie={title:"Data Entry/InputOTP",component:n,tags:["autodocs"],argTypes:{length:{control:"number"},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]},mask:{control:"boolean"},disabled:{control:"boolean"},autoFocus:{control:"boolean"},messagePosition:{control:"select",options:["top","bottom"]}}},P={args:{length:6,size:"md",label:"Verification code"}},te=["primary","secondary","accent","success","error","warning","info"],O={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsx("div",{className:"space-y-4",children:["xs","sm","md","lg"].map(t=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:t}),e.jsx(n,{length:6,size:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"space-y-4",children:te.map(t=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:t}),e.jsx(n,{length:6,color:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Length Variants"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"4 digits (PIN)"}),e.jsx(n,{length:4,label:"PIN code"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"6 digits (standard OTP)"}),e.jsx(n,{length:6,label:"Verification code"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"8 digits (extended)"}),e.jsx(n,{length:8,label:"Recovery code"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Masked (PIN style)"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Masked input (dots shown)"}),e.jsx(n,{length:4,mask:!0,label:"PIN entry"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Numeric only (pattern)"}),e.jsx(n,{length:6,type:"number",label:"Numeric OTP"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Label"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{length:6,label:"Email verification",helperText:"Enter the 6-digit code sent to your email"}),e.jsx(n,{length:4,label:"Two-factor code",helperText:"Open your authenticator app"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Validation States"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{length:6,error:"Invalid code. Please try again.",label:"Error"}),e.jsx(n,{length:6,warning:"Code expires in 1 minute",label:"Warning"}),e.jsx(n,{length:6,success:"Code verified successfully",value:"123456",label:"Success"}),e.jsx(n,{length:6,info:"Code sent to +1 (***) ***-4567",label:"Info"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Message Position"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{length:6,error:"Invalid code",label:"Message top",messagePosition:"top"}),e.jsx(n,{length:6,error:"Invalid code",label:"Message bottom",messagePosition:"bottom"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"States"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Disabled"}),e.jsx(n,{length:6,disabled:!0,label:"Disabled"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Pre-filled"}),e.jsx(n,{length:6,value:"12",label:"Partially filled"})]})]})]})]})};var z,_,S;P.parameters={...P.parameters,docs:{...(z=P.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    length: 6,
    size: "md",
    label: "Verification code"
  }
}`,...(S=(_=P.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var M,E,R;O.parameters={...O.parameters,docs:{...(M=O.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s}>
              <p className="text-xs text-text-secondary mb-2">{s}</p>
              <InputOTP length={6} size={s} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-4">
          {colors.map(c => <div key={c}>
              <p className="text-xs text-text-secondary mb-2">{c}</p>
              <InputOTP length={6} color={c} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Length Variants</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-2">4 digits (PIN)</p>
            <InputOTP length={4} label="PIN code" />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">6 digits (standard OTP)</p>
            <InputOTP length={6} label="Verification code" />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">8 digits (extended)</p>
            <InputOTP length={8} label="Recovery code" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Masked (PIN style)</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-2">Masked input (dots shown)</p>
            <InputOTP length={4} mask label="PIN entry" />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Numeric only (pattern)</p>
            <InputOTP length={6} type="number" label="Numeric OTP" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Label</h3>
        <div className="space-y-4">
          <InputOTP length={6} label="Email verification" helperText="Enter the 6-digit code sent to your email" />
          <InputOTP length={4} label="Two-factor code" helperText="Open your authenticator app" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-4">
          <InputOTP length={6} error="Invalid code. Please try again." label="Error" />
          <InputOTP length={6} warning="Code expires in 1 minute" label="Warning" />
          <InputOTP length={6} success="Code verified successfully" value="123456" label="Success" />
          <InputOTP length={6} info="Code sent to +1 (***) ***-4567" label="Info" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Message Position</h3>
        <div className="space-y-4">
          <InputOTP length={6} error="Invalid code" label="Message top" messagePosition="top" />
          <InputOTP length={6} error="Invalid code" label="Message bottom" messagePosition="bottom" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-2">Disabled</p>
            <InputOTP length={6} disabled label="Disabled" />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Pre-filled</p>
            <InputOTP length={6} value="12" label="Partially filled" />
          </div>
        </div>
      </section>
    </div>
}`,...(R=(E=O.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const le=["Playground","Showcase"];export{P as Playground,O as Showcase,le as __namedExportsOrder,ie as default};
