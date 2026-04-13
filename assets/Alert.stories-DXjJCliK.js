import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./index-Cw7T_5ox.js";import{c as r,i as C,a as G}from"./utils-_uLxnvdl.js";import{R as c}from"./index-ZH-6pyQh.js";import{c as J}from"./variants-CTjkuV9j.js";import{X as K}from"./x-ByohdK2B.js";import{C as v}from"./circle-check-DxhG47J7.js";import{T as l}from"./triangle-alert-Bq5oH3ZW.js";import{C as x}from"./circle-alert-C1u21Jbx.js";import{I as a}from"./info-CKnY7ViN.js";import{R as Q}from"./rocket-BJgQNQ5c.js";import{B as Z}from"./bell-BD3KA5A_.js";import{S as ee}from"./shield-syPj5L6h.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./index-CF05pSQ2.js";import"./useRipple-BuuTbn0W.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const te=G("relative flex gap-3 [--_radius:var(--radius-alert)] rounded-slot",{variants:{variant:{default:"bg-slot border border-slot text-slot-fg",solid:"bg-slot text-slot-fg",outline:"bg-background border border-slot text-slot",soft:"bg-slot-10 text-slot"},color:J,size:{xs:"p-2 gap-2 text-xs",sm:"p-3 gap-2.5 text-sm",md:"p-4 gap-3 text-sm",lg:"p-5 gap-3.5 text-base"}},defaultVariants:{variant:"soft",color:"default",size:"md"}}),t=c.memo(({title:i,description:s,icon:g,variant:L="soft",color:R="default",size:f="md",closable:W=!1,visible:b,onClose:h,closeButtonLabel:q="Close alert",action:j,className:O,classNames:o,children:E,...H})=>{const[$,F]=c.useState(!0),X=b!==void 0?b:$,A=c.useId(),w=c.useId();if(!X)return null;const M=()=>{F(!1),h==null||h()},y=i!=null,S=s!=null;return e.jsxs("div",{role:"alert","data-slot":"root","aria-labelledby":y?A:void 0,"aria-describedby":S?w:void 0,className:r("alert_root",te({variant:L,color:R,size:f}),"[--_duration:var(--duration-enter)] animate-in fade-in-0 slide-in-from-top-2 duration-slot",o==null?void 0:o.root,O),...H,children:[g&&e.jsx("div",{"data-slot":"icon",className:r("alert_icon","shrink-0 mt-0.5",C[f],o==null?void 0:o.icon),children:g}),e.jsxs("div",{"data-slot":"content",className:r("alert_content","flex-1 min-w-0",o==null?void 0:o.content),children:[y&&e.jsx("div",{id:A,"data-slot":"title",className:r("alert_title","font-semibold",o==null?void 0:o.title),children:i}),S&&e.jsx("div",{id:w,"data-slot":"description",className:r("alert_description","opacity-90",y&&"mt-1",o==null?void 0:o.description),children:s}),E]}),j&&e.jsx("div",{"data-slot":"action",className:r("alert_action","shrink-0 flex items-center",o==null?void 0:o.action),children:j}),W&&e.jsx("button",{type:"button",onClick:M,"data-slot":"closeButton",className:r("alert_closeButton","shrink-0 rounded-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer",o==null?void 0:o.closeButton),"aria-label":q,children:e.jsx(K,{className:C[f]})})]})});t.displayName="Alert";t.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{defaultValue:{value:"'soft'",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},closable:{defaultValue:{value:"false",computed:!1},required:!1},closeButtonLabel:{defaultValue:{value:"'Close alert'",computed:!1},required:!1}}};const je={title:"Feedback/Alert",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","outline","soft"]},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},title:{control:"text"},description:{control:"text"},closable:{control:"boolean"},visible:{control:"boolean"}}},d={args:{title:"Heads up!",description:"You can add components to your app using the CLI.",variant:"soft",color:"primary",size:"md",closable:!1}},p={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{variant:"default",color:"primary",title:"Default variant",description:"Uses slot background with border."}),e.jsx(t,{variant:"solid",color:"primary",title:"Solid variant",description:"Filled background with contrasting text."}),e.jsx(t,{variant:"outline",color:"primary",title:"Outline variant",description:"Transparent background with colored border and text."}),e.jsx(t,{variant:"soft",color:"primary",title:"Soft variant",description:"Subtle tinted background with colored text."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{color:"primary",title:"Primary",description:"Primary semantic color."}),e.jsx(t,{color:"secondary",title:"Secondary",description:"Secondary semantic color."}),e.jsx(t,{color:"accent",title:"Accent",description:"Accent semantic color."}),e.jsx(t,{color:"success",title:"Success",description:"Operation completed successfully."}),e.jsx(t,{color:"error",title:"Error",description:"Something went wrong. Please try again."}),e.jsx(t,{color:"warning",title:"Warning",description:"Please review before proceeding."}),e.jsx(t,{color:"info",title:"Info",description:"Here is some useful information."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Icons"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{color:"success",icon:e.jsx(v,{}),title:"Changes saved",description:"Your profile has been updated."}),e.jsx(t,{color:"error",icon:e.jsx(x,{}),title:"Upload failed",description:"The file exceeds the maximum allowed size."}),e.jsx(t,{color:"warning",icon:e.jsx(l,{}),title:"Low storage",description:"You are running low on storage space."}),e.jsx(t,{color:"info",icon:e.jsx(a,{}),title:"New feature available",description:"Check out the latest release notes."}),e.jsx(t,{color:"primary",icon:e.jsx(Q,{}),title:"Deployment started",description:"Your app is being deployed to production."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{size:"xs",color:"primary",icon:e.jsx(a,{}),title:"Extra small",description:"Compact alert for tight spaces."}),e.jsx(t,{size:"sm",color:"primary",icon:e.jsx(a,{}),title:"Small",description:"Small alert with reduced padding."}),e.jsx(t,{size:"md",color:"primary",icon:e.jsx(a,{}),title:"Medium",description:"Default medium-sized alert."}),e.jsx(t,{size:"lg",color:"primary",icon:e.jsx(a,{}),title:"Large",description:"Large alert for prominent messages."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Closable"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{color:"info",icon:e.jsx(Z,{}),title:"Dismiss me",description:"Click the X button to close this alert.",closable:!0}),e.jsx(t,{color:"success",icon:e.jsx(v,{}),title:"Operation complete",description:"You can dismiss this notification.",closable:!0,variant:"soft"}),e.jsx(t,{color:"warning",icon:e.jsx(l,{}),title:"Action required",description:"Please review your settings.",closable:!0,variant:"outline"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Action"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{color:"warning",icon:e.jsx(l,{}),title:"Unsaved changes",description:"You have unsaved changes that will be lost.",action:e.jsx(n,{size:"xs",variant:"outline",children:"Save now"})}),e.jsx(t,{color:"error",icon:e.jsx(x,{}),title:"Sync failed",description:"Could not connect to the server.",action:e.jsx(n,{size:"xs",color:"error",variant:"soft",children:"Retry"})}),e.jsx(t,{color:"info",icon:e.jsx(ee,{}),title:"Session expiring",description:"Your session will expire in 5 minutes.",action:e.jsx(n,{size:"xs",color:"info",children:"Stay signed in"})})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants x Colors"}),e.jsx("div",{className:"space-y-4",children:["default","solid","outline","soft"].map(i=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-xs text-text-secondary font-medium capitalize",children:i}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:["primary","secondary","success","error","warning","info"].map(s=>e.jsx(t,{variant:i,color:s,title:`${i} / ${s}`,size:"sm"},s))})]},i))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Title only / Description only"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{color:"primary",title:"Title only alert with no description text."}),e.jsx(t,{color:"secondary",description:"Description only, no title. Useful for short inline messages."})]})]})]})},m={render:()=>e.jsxs("div",{className:"space-y-3 max-w-lg",children:[e.jsx(t,{color:"success",icon:e.jsx(v,{}),title:"Payment processed",description:"Your subscription has been activated.",closable:!0}),e.jsx(t,{color:"warning",icon:e.jsx(l,{}),title:"Billing address missing",description:"Please update your billing information.",closable:!0,variant:"outline"}),e.jsx(t,{color:"error",icon:e.jsx(x,{}),title:"Account suspended",description:"Contact support to restore access.",closable:!0,variant:"soft"})]})},u={render:()=>e.jsxs("div",{className:"space-y-3 max-w-lg",children:[e.jsx(t,{color:"warning",variant:"soft",icon:e.jsx(l,{}),title:"Update available",description:"Version 2.0 is ready to install.",action:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{size:"xs",color:"warning",children:"Update"}),e.jsx(n,{size:"xs",variant:"ghost",children:"Later"})]})}),e.jsx(t,{color:"error",variant:"outline",icon:e.jsx(x,{}),title:"Build failed",description:"3 errors found in your last deployment.",action:e.jsx(n,{size:"xs",variant:"outline",color:"error",children:"View logs"})})]})};var z,k,B;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: "Heads up!",
    description: "You can add components to your app using the CLI.",
    variant: "soft",
    color: "primary",
    size: "md",
    closable: false
  }
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var N,I,V;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <Alert variant="default" color="primary" title="Default variant" description="Uses slot background with border." />
          <Alert variant="solid" color="primary" title="Solid variant" description="Filled background with contrasting text." />
          <Alert variant="outline" color="primary" title="Outline variant" description="Transparent background with colored border and text." />
          <Alert variant="soft" color="primary" title="Soft variant" description="Subtle tinted background with colored text." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          <Alert color="primary" title="Primary" description="Primary semantic color." />
          <Alert color="secondary" title="Secondary" description="Secondary semantic color." />
          <Alert color="accent" title="Accent" description="Accent semantic color." />
          <Alert color="success" title="Success" description="Operation completed successfully." />
          <Alert color="error" title="Error" description="Something went wrong. Please try again." />
          <Alert color="warning" title="Warning" description="Please review before proceeding." />
          <Alert color="info" title="Info" description="Here is some useful information." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <div className="space-y-3">
          <Alert color="success" icon={<CheckCircle2 />} title="Changes saved" description="Your profile has been updated." />
          <Alert color="error" icon={<AlertCircle />} title="Upload failed" description="The file exceeds the maximum allowed size." />
          <Alert color="warning" icon={<AlertTriangle />} title="Low storage" description="You are running low on storage space." />
          <Alert color="info" icon={<Info />} title="New feature available" description="Check out the latest release notes." />
          <Alert color="primary" icon={<Rocket />} title="Deployment started" description="Your app is being deployed to production." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <Alert size="xs" color="primary" icon={<Info />} title="Extra small" description="Compact alert for tight spaces." />
          <Alert size="sm" color="primary" icon={<Info />} title="Small" description="Small alert with reduced padding." />
          <Alert size="md" color="primary" icon={<Info />} title="Medium" description="Default medium-sized alert." />
          <Alert size="lg" color="primary" icon={<Info />} title="Large" description="Large alert for prominent messages." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Closable</h3>
        <div className="space-y-3">
          <Alert color="info" icon={<Bell />} title="Dismiss me" description="Click the X button to close this alert." closable />
          <Alert color="success" icon={<CheckCircle2 />} title="Operation complete" description="You can dismiss this notification." closable variant="soft" />
          <Alert color="warning" icon={<AlertTriangle />} title="Action required" description="Please review your settings." closable variant="outline" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Action</h3>
        <div className="space-y-3">
          <Alert color="warning" icon={<AlertTriangle />} title="Unsaved changes" description="You have unsaved changes that will be lost." action={<Button size="xs" variant="outline">Save now</Button>} />
          <Alert color="error" icon={<AlertCircle />} title="Sync failed" description="Could not connect to the server." action={<Button size="xs" color="error" variant="soft">Retry</Button>} />
          <Alert color="info" icon={<Shield />} title="Session expiring" description="Your session will expire in 5 minutes." action={<Button size="xs" color="info">Stay signed in</Button>} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants x Colors</h3>
        <div className="space-y-4">
          {(["default", "solid", "outline", "soft"] as const).map(variant => <div key={variant} className="space-y-2">
              <p className="text-xs text-text-secondary font-medium capitalize">{variant}</p>
              <div className="grid grid-cols-1 gap-2">
                {(["primary", "secondary", "success", "error", "warning", "info"] as const).map(color => <Alert key={color} variant={variant} color={color} title={\`\${variant} / \${color}\`} size="sm" />)}
              </div>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Title only / Description only</h3>
        <div className="space-y-3">
          <Alert color="primary" title="Title only alert with no description text." />
          <Alert color="secondary" description="Description only, no title. Useful for short inline messages." />
        </div>
      </section>
    </div>
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var T,P,Y;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-lg">
      <Alert color="success" icon={<CheckCircle2 />} title="Payment processed" description="Your subscription has been activated." closable />
      <Alert color="warning" icon={<AlertTriangle />} title="Billing address missing" description="Please update your billing information." closable variant="outline" />
      <Alert color="error" icon={<AlertCircle />} title="Account suspended" description="Contact support to restore access." closable variant="soft" />
    </div>
}`,...(Y=(P=m.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var D,_,U;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-lg">
      <Alert color="warning" variant="soft" icon={<AlertTriangle />} title="Update available" description="Version 2.0 is ready to install." action={<div className="flex gap-2">
            <Button size="xs" color="warning">Update</Button>
            <Button size="xs" variant="ghost">Later</Button>
          </div>} />
      <Alert color="error" variant="outline" icon={<AlertCircle />} title="Build failed" description="3 errors found in your last deployment." action={<Button size="xs" variant="outline" color="error">View logs</Button>} />
    </div>
}`,...(U=(_=u.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};const Ae=["Playground","Showcase","Closable","WithActions"];export{m as Closable,d as Playground,p as Showcase,u as WithActions,Ae as __namedExportsOrder,je as default};
