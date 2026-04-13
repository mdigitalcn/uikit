import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as i,a as F}from"./utils-_uLxnvdl.js";import{R as Q,r as g}from"./index-ZH-6pyQh.js";import{b as B}from"./variants-CTjkuV9j.js";import{L as Z}from"./loader-circle-C_rNOviD.js";import{M as w}from"./moon-Cc8i06Pz.js";import{B as ee}from"./bell-BD3KA5A_.js";import{c as te}from"./createLucideIcon-BXJdBs6C.js";import{V as se}from"./volume-2-CI0chxkV.js";import{C as ae}from"./check-CKCh4cDT.js";import{X as ie}from"./x-ByohdK2B.js";import{S as le}from"./sun-qVyhylZC.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],ne=te("wifi",oe),re=F(["relative rounded-full cursor-pointer transition-colors","peer-disabled:opacity-50 peer-disabled:cursor-not-allowed","peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background"],{variants:{color:B,size:{xs:"w-(--switch-width-xs) h-(--switch-height-xs)",sm:"w-(--switch-width-sm) h-(--switch-height-sm)",md:"w-(--switch-width-md) h-(--switch-height-md)",lg:"w-(--switch-width-lg) h-(--switch-height-lg)"},hasError:{true:"bg-error/30 peer-checked:bg-error peer-focus-visible:ring-error",false:"peer-focus-visible:ring-slot"}},defaultVariants:{color:"primary",size:"md",hasError:!1}}),ce=F("absolute top-0.5 left-0.5 bg-background rounded-full [--_shadow:var(--shadow-sm)] shadow-size-slot transition-transform duration-slot ease-in-out flex items-center justify-center",{variants:{size:{xs:"w-(--switch-thumb-xs) h-(--switch-thumb-xs) peer-checked:translate-x-(--switch-translate-xs)",sm:"w-(--switch-thumb-sm) h-(--switch-thumb-sm) peer-checked:translate-x-(--switch-translate-sm)",md:"w-(--switch-thumb-md) h-(--switch-thumb-md) peer-checked:translate-x-(--switch-translate-md)",lg:"w-(--switch-thumb-lg) h-(--switch-thumb-lg) peer-checked:translate-x-(--switch-translate-lg)"}},defaultVariants:{size:"md"}}),de={xs:"size-2",sm:"size-2.5",md:"size-3",lg:"size-3.5"},he={xs:"size-2",sm:"size-2.5",md:"size-3",lg:"size-3.5"},D={xs:"text-[7px] px-0.5",sm:"text-[8px] px-1",md:"text-[9px] px-1",lg:"text-[10px] px-1.5"},y={xs:10,sm:12,md:16,lg:20},me={xs:"h-(--switch-height-xs)",sm:"h-(--switch-height-sm)",md:"h-(--switch-height-md)",lg:"h-(--switch-height-lg)"},xe={xs:"w-(--switch-thumb-xs) h-(--switch-thumb-xs)",sm:"w-(--switch-thumb-sm) h-(--switch-thumb-sm)",md:"w-(--switch-thumb-md) h-(--switch-thumb-md)",lg:"w-(--switch-thumb-lg) h-(--switch-thumb-lg)"},E={xs:"text-[7px]",sm:"text-[8px]",md:"text-[9px]",lg:"text-[10px]"},m={xs:2,sm:4,md:4,lg:6},t=Q.memo(({color:o="primary",size:s="md",label:j,labelPosition:k="right",helperText:b,error:l,loading:v=!1,thumbIcon:C,startContent:r,endContent:c,required:S,labelClassName:A,className:G,classNames:a,disabled:H,checked:z,defaultChecked:O,ref:U,...n})=>{const N=g.useId(),T=n.id||N,P=`switch-helper-${N}`,X=!!(b||l),[Y,$]=g.useState(O??!1),f=z!==void 0,d=f?z:Y,J=g.useCallback(I=>{var V;f||$(I.target.checked),(V=n.onChange)==null||V.call(n,I)},[f,n.onChange]),p=H||v,h=!!(r||c),K=e.jsxs("span",{"data-slot":"root",className:i("relative inline-flex items-center","switch_root",a==null?void 0:a.root),children:[e.jsx("input",{ref:U,type:"checkbox",className:"peer sr-only",role:"switch","aria-checked":d,"aria-invalid":!!l||void 0,"aria-describedby":X?P:void 0,required:S,...n,id:T,disabled:p,checked:d,onChange:J}),e.jsxs("span",{className:i(h?i("relative inline-flex rounded-full cursor-pointer transition-colors","peer-disabled:opacity-50 peer-disabled:cursor-not-allowed","peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background",me[s],B[o],"bg-border peer-checked:bg-slot peer-focus-visible:ring-slot",l&&"bg-error/30 peer-checked:bg-error peer-focus-visible:ring-error"):i(re({color:o,size:s,hasError:!!l}),"bg-border peer-checked:bg-slot"),"switch_track",a==null?void 0:a.track,G),"data-slot":"track",children:[h&&e.jsxs("span",{className:"inline-grid","aria-hidden":"true",children:[r!=null&&e.jsx("span",{className:i("col-start-1 row-start-1 invisible whitespace-nowrap font-medium",E[s]),style:{paddingLeft:y[s]+4+m[s],paddingRight:m[s]+2},children:r}),c!=null&&e.jsx("span",{className:i("col-start-1 row-start-1 invisible whitespace-nowrap font-medium",E[s]),style:{paddingLeft:m[s]+2,paddingRight:y[s]+4+m[s]},children:c})]}),r&&e.jsx("span",{className:i("absolute right-0.5 top-1/2 -translate-y-1/2 text-background font-medium transition-opacity",D[s],d?"opacity-0":"opacity-100"),children:r}),c&&e.jsx("span",{className:i("absolute left-0.5 top-1/2 -translate-y-1/2 text-background font-medium transition-opacity",D[s],d?"opacity-100":"opacity-0"),children:c})]}),e.jsx("span",{"data-slot":"thumb",className:i(h?i("absolute top-0.5 bg-background rounded-full [--_shadow:var(--shadow-sm)] shadow-size-slot transition-[left] duration-slot ease-in-out flex items-center justify-center",xe[s]):ce({size:s}),"switch_thumb",a==null?void 0:a.thumb),style:h?{left:d?`calc(100% - ${y[s]+2}px)`:"2px"}:void 0,children:v?e.jsx(Z,{className:i("animate-spin text-text-secondary",de[s])}):C?e.jsx("span",{className:i("flex items-center justify-center text-text-secondary",he[s]),children:C}):null})]});return e.jsxs("div",{className:"w-full",children:[e.jsxs("label",{htmlFor:T,className:i("inline-flex items-center gap-2",!p&&"cursor-pointer",k==="left"&&"flex-row-reverse"),children:[K,j&&e.jsxs("span",{className:i("text-sm text-text-primary select-none",l&&"text-error",p&&"opacity-50","switch_label",a==null?void 0:a.label,A),children:[j,S&&e.jsx("span",{className:"text-error ml-0.5","aria-hidden":"true",children:"*"})]})]}),(b||l)&&e.jsx("p",{id:P,className:i("mt-1 text-xs",k==="left"?"text-right":"text-left",l?"text-error":"text-text-secondary","switch_description",a==null?void 0:a.description),children:l||b})]})});t.displayName="Switch";t.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{color:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},labelPosition:{defaultValue:{value:'"right"',computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1}}};const Ne={title:"Form/Switch",component:t,tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},labelPosition:{control:"select",options:["left","right"]},label:{control:"text"},helperText:{control:"text"},error:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"},defaultChecked:{control:"boolean"}}},x={args:{label:"Enable notifications",color:"primary",size:"md",labelPosition:"right"}},u={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-6",children:["primary","secondary","accent","success","error","warning","info"].map(o=>e.jsx(t,{color:o,label:o,defaultChecked:!0},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-6",children:[e.jsx(t,{size:"xs",label:"Extra small",defaultChecked:!0}),e.jsx(t,{size:"sm",label:"Small",defaultChecked:!0}),e.jsx(t,{size:"md",label:"Medium",defaultChecked:!0}),e.jsx(t,{size:"lg",label:"Large",defaultChecked:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Label Position"}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsx(t,{label:"Label on right",labelPosition:"right",defaultChecked:!0}),e.jsx(t,{label:"Label on left",labelPosition:"left",defaultChecked:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Thumb Icon"}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsx(t,{label:"Dark mode",thumbIcon:e.jsx(w,{size:10}),color:"secondary"}),e.jsx(t,{label:"Notifications",thumbIcon:e.jsx(ee,{size:10}),defaultChecked:!0}),e.jsx(t,{label:"Wi-Fi",thumbIcon:e.jsx(ne,{size:10}),color:"info",defaultChecked:!0}),e.jsx(t,{label:"Volume",thumbIcon:e.jsx(se,{size:10}),color:"accent"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Track Content"}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsx(t,{label:"Toggle with icons",startContent:e.jsx(ie,{size:8}),endContent:e.jsx(ae,{size:8}),color:"success",defaultChecked:!0}),e.jsx(t,{label:"Day / Night",startContent:e.jsx(w,{size:8}),endContent:e.jsx(le,{size:8}),color:"warning"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"States"}),e.jsxs("div",{className:"flex flex-wrap gap-6",children:[e.jsx(t,{label:"Default off"}),e.jsx(t,{label:"Default on",defaultChecked:!0}),e.jsx(t,{label:"Disabled off",disabled:!0}),e.jsx(t,{label:"Disabled on",disabled:!0,defaultChecked:!0}),e.jsx(t,{label:"Loading",loading:!0}),e.jsx(t,{label:"Required",required:!0,helperText:"This setting is required"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Validation"}),e.jsx("div",{className:"space-y-3 max-w-sm",children:e.jsx(t,{label:"Accept terms",helperText:"You must accept to continue",error:"Please toggle to accept"})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Settings Panel Example"}),e.jsxs("div",{className:"space-y-4 max-w-sm rounded-lg border border-border p-4",children:[e.jsx(t,{label:"Email notifications",helperText:"Receive updates via email",defaultChecked:!0}),e.jsx(t,{label:"Push notifications",helperText:"Get notified on your device",color:"info"}),e.jsx(t,{label:"Marketing emails",helperText:"Tips, products, and company news",color:"secondary"}),e.jsx(t,{label:"Dark mode",helperText:"Use dark theme across the app",color:"secondary",thumbIcon:e.jsx(w,{size:10})})]})]})]})};var L,M,_;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Enable notifications",
    color: "primary",
    size: "md",
    labelPosition: "right"
  }
}`,...(_=(M=x.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var q,W,R;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="flex flex-wrap gap-6">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <Switch key={color} color={color} label={color} defaultChecked />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex flex-wrap items-center gap-6">
          <Switch size="xs" label="Extra small" defaultChecked />
          <Switch size="sm" label="Small" defaultChecked />
          <Switch size="md" label="Medium" defaultChecked />
          <Switch size="lg" label="Large" defaultChecked />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Label Position</h3>
        <div className="flex flex-wrap gap-6">
          <Switch label="Label on right" labelPosition="right" defaultChecked />
          <Switch label="Label on left" labelPosition="left" defaultChecked />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Thumb Icon</h3>
        <div className="flex flex-wrap gap-6">
          <Switch label="Dark mode" thumbIcon={<Moon size={10} />} color="secondary" />
          <Switch label="Notifications" thumbIcon={<Bell size={10} />} defaultChecked />
          <Switch label="Wi-Fi" thumbIcon={<Wifi size={10} />} color="info" defaultChecked />
          <Switch label="Volume" thumbIcon={<Volume2 size={10} />} color="accent" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Track Content</h3>
        <div className="flex flex-wrap gap-6">
          <Switch label="Toggle with icons" startContent={<X size={8} />} endContent={<Check size={8} />} color="success" defaultChecked />
          <Switch label="Day / Night" startContent={<Moon size={8} />} endContent={<Sun size={8} />} color="warning" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="flex flex-wrap gap-6">
          <Switch label="Default off" />
          <Switch label="Default on" defaultChecked />
          <Switch label="Disabled off" disabled />
          <Switch label="Disabled on" disabled defaultChecked />
          <Switch label="Loading" loading />
          <Switch label="Required" required helperText="This setting is required" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Validation</h3>
        <div className="space-y-3 max-w-sm">
          <Switch label="Accept terms" helperText="You must accept to continue" error="Please toggle to accept" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Settings Panel Example</h3>
        <div className="space-y-4 max-w-sm rounded-lg border border-border p-4">
          <Switch label="Email notifications" helperText="Receive updates via email" defaultChecked />
          <Switch label="Push notifications" helperText="Get notified on your device" color="info" />
          <Switch label="Marketing emails" helperText="Tips, products, and company news" color="secondary" />
          <Switch label="Dark mode" helperText="Use dark theme across the app" color="secondary" thumbIcon={<Moon size={10} />} />
        </div>
      </section>
    </div>
}`,...(R=(W=u.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};const Te=["Playground","Showcase"];export{x as Playground,u as Showcase,Te as __namedExportsOrder,Ne as default};
