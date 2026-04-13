import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as ie,c as d,s as de,i as ce,a as G}from"./utils-_uLxnvdl.js";import{R as g,r as n}from"./index-ZH-6pyQh.js";import{S as ue}from"./index-CF05pSQ2.js";import{c as pe}from"./variants-CTjkuV9j.js";import{X as fe}from"./x-ByohdK2B.js";import{M as xe}from"./mail-1HDD9Lg3.js";import{L as he}from"./lock-D-iRFELD.js";import{P as be}from"./phone-Drv7Klxt.js";import{U as me}from"./user-BM8Midap.js";import{G as ge}from"./globe-TCM94dGE.js";import{S as ye}from"./search-DfqimKq8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const we=G("peer w-full placeholder:text-transparent [--_radius:var(--radius-input)] rounded-slot disabled:opacity-50 disabled:cursor-not-allowed read-only:bg-surface read-only:cursor-default outline-none text-text-primary transition-[border-color,box-shadow] duration-slot border border-border hover:border-slot-50 focus-visible:border-slot focus-visible:ring-2 focus-visible:ring-slot-30 bg-background",{variants:{status:{default:"",error:"border-error",warning:"border-warning",info:"border-info",success:"border-success"},size:{xs:"h-(--float-input-height-xs) pt-3.5 px-(--input-padding-x-xs) text-xs",sm:"h-(--float-input-height-sm) pt-4 px-(--input-padding-x-sm) text-sm",md:"h-(--float-input-height-md) pt-5 px-(--input-padding-x-md) text-base",lg:"h-(--float-input-height-lg) pt-5 px-(--input-padding-x-lg) text-lg"},fullWidth:{true:"w-full",false:"max-w-full"}},defaultVariants:{status:"default",size:"md",fullWidth:!0}}),je=G("absolute pointer-events-none transition-[top,font-size,color] duration-slot text-text-secondary origin-left",{variants:{size:{xs:"left-2 text-xs top-2.5 peer-focus:top-1 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-[10px]",sm:"left-3 text-sm top-2.5 peer-focus:top-1.5 peer-focus:text-[10px] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]",md:"left-3 text-base top-3 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs",lg:"left-4 text-lg top-3.5 peer-focus:top-2.5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-xs"},status:{default:"",error:"peer-focus:text-error",warning:"peer-focus:text-warning",info:"peer-focus:text-info",success:"peer-focus:text-success"},hasLeftIcon:{true:"",false:""}},compoundVariants:[{size:"xs",hasLeftIcon:!0,className:"left-8"},{size:"sm",hasLeftIcon:!0,className:"left-10"},{size:"md",hasLeftIcon:!0,className:"left-10"},{size:"lg",hasLeftIcon:!0,className:"left-10"}],defaultVariants:{size:"md",status:"default",hasLeftIcon:!1}}),o=g.memo(({size:r="md",color:V="primary",label:X,error:k,warning:F,info:S,success:M,helperText:P,messagePosition:C="bottom",leftIcon:c,rightIcon:f,clearable:A=!1,onClear:x,loading:s=!1,fullWidth:h=!0,className:L,classNames:t,value:u,onChange:i,ref:H,...p})=>{const[J,E]=g.useState(p.defaultValue??""),q=u!==void 0?u:J,b=n.useId(),z=p.id||`float-input-${b}`,j=`float-input-helper-${b}`,v=`float-input-loading-${b}`,_=`float-input-label-${b}`,{status:l,message:m}=n.useMemo(()=>ie({error:k,warning:F,info:S,success:M,helperText:P}),[k,F,S,M,P]),K=g.useCallback(a=>{u===void 0&&E(a.target.value),i==null||i(a)},[u,i]),Q=g.useCallback(()=>{u===void 0&&E(""),i==null||i({target:{value:""}}),x==null||x()},[u,i,x]),W=A&&q&&!p.disabled&&!p.readOnly,I=f||W||s,Y=n.useMemo(()=>{const a=[];return m&&a.push(j),s&&a.push(v),a.length>0?a.join(" "):void 0},[m,j,s,v]),Z=n.useMemo(()=>d("float-input_root","w-full flex flex-col relative",!h&&"inline-block",t==null?void 0:t.root),[h,t==null?void 0:t.root]),N=n.useMemo(()=>d("float-input_wrapper","relative w-full",pe[l!=="default"?l:V],s&&"opacity-50 pointer-events-none cursor-not-allowed",t==null?void 0:t.wrapper),[s,t==null?void 0:t.wrapper,l,V]),ee=n.useMemo(()=>d("float-input_leftIcon","absolute flex items-center h-full top-0 text-text-secondary",{xs:"left-2",sm:"left-3",md:"left-3",lg:"left-4"}[r],t==null?void 0:t.leftIcon),[r,t==null?void 0:t.leftIcon]),te=n.useMemo(()=>{const a=c?{xs:"pl-8",sm:"pl-10",md:"pl-10",lg:"pl-11"}[r]:"",se=I?{xs:"pr-8",sm:"pr-8",md:"pr-8",lg:"pr-10"}[r]:"";return d("float-input_input",we({status:l,size:r,fullWidth:h}),a,se,L,t==null?void 0:t.input)},[l,r,h,c,I,L,t==null?void 0:t.input]),oe=n.useMemo(()=>d("float-input_label",je({size:r,status:l,hasLeftIcon:!!c}),t==null?void 0:t.label),[r,l,c,t==null?void 0:t.label]),re=n.useMemo(()=>d("float-input_rightIcon","absolute flex gap-2 items-center h-full top-0 text-text-secondary",{xs:"right-2",sm:"right-3",md:"right-3",lg:"right-4"}[r],t==null?void 0:t.rightIcon),[r,t==null?void 0:t.rightIcon]),le=n.useMemo(()=>d("float-input_clearButton","flex items-center justify-center rounded-sm p-0.5 cursor-pointer text-text-secondary hover:text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-slot focus-visible:ring-offset-2 focus-visible:ring-offset-background",t==null?void 0:t.clearButton),[t==null?void 0:t.clearButton]),ae=n.useMemo(()=>d("float-input_helper",de({status:l}),"mt-0.5",l==="error"?t==null?void 0:t.error:t==null?void 0:t.helper),[l,t==null?void 0:t.error,t==null?void 0:t.helper]),ne=ce[r],R=m&&e.jsx("p",{id:j,"data-slot":"helper",className:ae,children:m});return e.jsxs("div",{"data-slot":"root",className:Z,children:[C==="top"&&R,e.jsxs("div",{"data-slot":"wrapper",className:N,children:[c&&e.jsx("div",{"data-slot":"leftIcon",className:ee,"aria-hidden":"true",children:c}),e.jsx("input",{ref:H,id:z,"data-slot":"input",className:te,value:q,onChange:K,placeholder:" ","aria-invalid":l==="error","aria-busy":s,"aria-describedby":Y,"aria-labelledby":_,...p}),e.jsxs("label",{id:_,htmlFor:z,"data-slot":"label",className:oe,children:[X,p.required&&e.jsx("span",{className:"text-error ml-0.5",children:"*"})]}),(I||f)&&e.jsxs("div",{"data-slot":"rightIcon",className:re,children:[W&&!s&&e.jsx("button",{type:"button",onClick:Q,"data-slot":"clearButton",className:le,"aria-label":"Clear input",children:e.jsx(fe,{className:ne,"aria-hidden":"true"})}),s?e.jsxs(e.Fragment,{children:[e.jsx(ue,{"aria-hidden":"true",size:r}),e.jsx("span",{id:v,className:"sr-only",children:"Loading"})]}):f&&e.jsx("span",{"aria-hidden":"true",children:f})]})]}),C==="bottom"&&R]})});o.displayName="FloatInput";o.__docgenInfo={description:"",methods:[],displayName:"FloatInput",props:{size:{defaultValue:{value:'"md"',computed:!1},required:!1},color:{defaultValue:{value:'"primary"',computed:!1},required:!1},messagePosition:{defaultValue:{value:"'bottom'",computed:!1},required:!1},clearable:{defaultValue:{value:"false",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"true",computed:!1},required:!1}}};const We={title:"Data Entry/FloatInput",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},clearable:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},messagePosition:{control:"select",options:["top","bottom"]},label:{control:"text"},error:{control:"text"},warning:{control:"text"},info:{control:"text"},success:{control:"text"},helperText:{control:"text"}}},y={args:{label:"Email address",size:"md",color:"primary",clearable:!1,loading:!1,disabled:!1,fullWidth:!0}},w={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-md",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"space-y-3",children:["xs","sm","md","lg"].map(r=>e.jsx(o,{size:r,label:`Size ${r}`},r))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:["primary","secondary","accent"].map(r=>e.jsx(o,{color:r,label:`${r.charAt(0).toUpperCase()+r.slice(1)} color`},r))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Icons"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(o,{label:"Email",leftIcon:e.jsx(xe,{className:"w-4 h-4"})}),e.jsx(o,{label:"Password",leftIcon:e.jsx(he,{className:"w-4 h-4"}),type:"password"}),e.jsx(o,{label:"Phone",leftIcon:e.jsx(be,{className:"w-4 h-4"}),type:"tel"}),e.jsx(o,{label:"Website",leftIcon:e.jsx(ge,{className:"w-4 h-4"}),rightIcon:e.jsx(me,{className:"w-4 h-4"})}),e.jsx(o,{label:"Search",leftIcon:e.jsx(ye,{className:"w-4 h-4"}),clearable:!0,defaultValue:"Clearable with icon"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Validation States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(o,{label:"Error field",error:"This field is required."}),e.jsx(o,{label:"Warning field",warning:"Double-check this value."}),e.jsx(o,{label:"Success field",success:"Looks good!",defaultValue:"valid@example.com"}),e.jsx(o,{label:"Info field",info:"Must be at least 8 characters."}),e.jsx(o,{label:"Helper text",helperText:"We will never share your email."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Message Position"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(o,{label:"Message on top",error:"Error above the input.",messagePosition:"top"}),e.jsx(o,{label:"Message on bottom",error:"Error below the input.",messagePosition:"bottom"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(o,{label:"Clearable",clearable:!0,defaultValue:"Click X to clear me"}),e.jsx(o,{label:"Loading",loading:!0}),e.jsx(o,{label:"Disabled",disabled:!0,defaultValue:"Cannot edit this"}),e.jsx(o,{label:"Read only",readOnly:!0,defaultValue:"Read only value"}),e.jsx(o,{label:"Required field",required:!0})]})]})]})};var $,B,D;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    size: "md",
    color: "primary",
    clearable: false,
    loading: false,
    disabled: false,
    fullWidth: true
  }
}`,...(D=(B=y.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var T,U,O;w.parameters={...w.parameters,docs:{...(T=w.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map(s => <FloatInput key={s} size={s} label={\`Size \${s}\`} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent"] as const).map(c => <FloatInput key={c} color={c} label={\`\${c.charAt(0).toUpperCase() + c.slice(1)} color\`} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Icons
        </h3>
        <div className="space-y-3">
          <FloatInput label="Email" leftIcon={<Mail className="w-4 h-4" />} />
          <FloatInput label="Password" leftIcon={<Lock className="w-4 h-4" />} type="password" />
          <FloatInput label="Phone" leftIcon={<Phone className="w-4 h-4" />} type="tel" />
          <FloatInput label="Website" leftIcon={<Globe className="w-4 h-4" />} rightIcon={<User className="w-4 h-4" />} />
          <FloatInput label="Search" leftIcon={<Search className="w-4 h-4" />} clearable defaultValue="Clearable with icon" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Validation States
        </h3>
        <div className="space-y-3">
          <FloatInput label="Error field" error="This field is required." />
          <FloatInput label="Warning field" warning="Double-check this value." />
          <FloatInput label="Success field" success="Looks good!" defaultValue="valid@example.com" />
          <FloatInput label="Info field" info="Must be at least 8 characters." />
          <FloatInput label="Helper text" helperText="We will never share your email." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Message Position
        </h3>
        <div className="space-y-3">
          <FloatInput label="Message on top" error="Error above the input." messagePosition="top" />
          <FloatInput label="Message on bottom" error="Error below the input." messagePosition="bottom" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="space-y-3">
          <FloatInput label="Clearable" clearable defaultValue="Click X to clear me" />
          <FloatInput label="Loading" loading />
          <FloatInput label="Disabled" disabled defaultValue="Cannot edit this" />
          <FloatInput label="Read only" readOnly defaultValue="Read only value" />
          <FloatInput label="Required field" required />
        </div>
      </section>
    </div>
}`,...(O=(U=w.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};const Re=["Playground","Showcase"];export{y as Playground,w as Showcase,Re as __namedExportsOrder,We as default};
