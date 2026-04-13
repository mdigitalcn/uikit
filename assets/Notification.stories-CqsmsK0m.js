import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{N as e}from"./index-xCJLaxLl.js";import{B as t}from"./bell-BD3KA5A_.js";import{I as o}from"./info-CKnY7ViN.js";import{C as n}from"./circle-check-DxhG47J7.js";import{C as d}from"./circle-alert-C1u21Jbx.js";import{T as l}from"./triangle-alert-Bq5oH3ZW.js";import{R as u}from"./rocket-BJgQNQ5c.js";import"./utils-_uLxnvdl.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./variants-CTjkuV9j.js";import"./x-ByohdK2B.js";import"./createLucideIcon-BXJdBs6C.js";const T={title:"Feedback/Notification",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","outline","soft"]},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},title:{control:"text"},description:{control:"text"},closable:{control:"boolean"},borderLine:{control:"boolean"}}},c={args:{title:"Notification title",description:"This is a notification message with some details.",variant:"soft",color:"info",size:"md",closable:!0,borderLine:!1}},a={render:()=>i.jsxs("div",{className:"space-y-10 max-w-lg",children:[i.jsxs("section",{children:[i.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),i.jsxs("div",{className:"space-y-3",children:[i.jsx(e,{variant:"default",color:"primary",title:"Default variant",description:"Uses slot background with border.",icon:i.jsx(t,{className:"w-5 h-5"})}),i.jsx(e,{variant:"solid",color:"primary",title:"Solid variant",description:"Filled background with contrasting text.",icon:i.jsx(t,{className:"w-5 h-5"})}),i.jsx(e,{variant:"outline",color:"primary",title:"Outline variant",description:"Transparent background with colored border and text.",icon:i.jsx(t,{className:"w-5 h-5"})}),i.jsx(e,{variant:"soft",color:"primary",title:"Soft variant",description:"Subtle tinted background with colored text.",icon:i.jsx(t,{className:"w-5 h-5"})})]})]}),i.jsxs("section",{children:[i.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),i.jsxs("div",{className:"space-y-3",children:[i.jsx(e,{color:"primary",title:"Primary",description:"Primary notification.",icon:i.jsx(o,{className:"w-5 h-5"})}),i.jsx(e,{color:"secondary",title:"Secondary",description:"Secondary notification.",icon:i.jsx(o,{className:"w-5 h-5"})}),i.jsx(e,{color:"accent",title:"Accent",description:"Accent notification.",icon:i.jsx(o,{className:"w-5 h-5"})}),i.jsx(e,{color:"success",title:"Success",description:"Operation completed successfully.",icon:i.jsx(n,{className:"w-5 h-5"})}),i.jsx(e,{color:"error",title:"Error",description:"Something went wrong.",icon:i.jsx(d,{className:"w-5 h-5"})}),i.jsx(e,{color:"warning",title:"Warning",description:"Proceed with caution.",icon:i.jsx(l,{className:"w-5 h-5"})}),i.jsx(e,{color:"info",title:"Info",description:"Here is some useful information.",icon:i.jsx(o,{className:"w-5 h-5"})})]})]}),i.jsxs("section",{children:[i.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),i.jsxs("div",{className:"space-y-3",children:[i.jsx(e,{size:"xs",color:"info",icon:i.jsx(o,{className:"w-4 h-4"}),title:"Extra small",description:"Compact notification."}),i.jsx(e,{size:"sm",color:"info",icon:i.jsx(o,{className:"w-4 h-4"}),title:"Small",description:"Small notification."}),i.jsx(e,{size:"md",color:"info",icon:i.jsx(o,{className:"w-5 h-5"}),title:"Medium",description:"Default notification size."}),i.jsx(e,{size:"lg",color:"info",icon:i.jsx(o,{className:"w-6 h-6"}),title:"Large",description:"Large notification for prominence."})]})]}),i.jsxs("section",{children:[i.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Action"}),i.jsxs("div",{className:"space-y-3",children:[i.jsx(e,{color:"info",icon:i.jsx(u,{className:"w-5 h-5"}),title:"Update available",description:"Version 2.0 is ready to install.",closable:!0,action:{label:"Update now",onClick:()=>{}}}),i.jsx(e,{color:"warning",icon:i.jsx(l,{className:"w-5 h-5"}),title:"Storage almost full",description:"90% of your storage is used.",action:{label:"Upgrade plan",onClick:()=>{}}}),i.jsx(e,{color:"success",icon:i.jsx(n,{className:"w-5 h-5"}),title:"Deployment successful",description:"Your app is now live at your domain.",action:{label:"View live site",onClick:()=>{}}})]})]}),i.jsxs("section",{children:[i.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Border Line"}),i.jsxs("div",{className:"space-y-3",children:[i.jsx(e,{color:"primary",title:"Primary border line",description:"Left accent border for emphasis.",icon:i.jsx(o,{className:"w-5 h-5"}),borderLine:!0}),i.jsx(e,{color:"success",title:"Success border line",description:"Operation completed.",icon:i.jsx(n,{className:"w-5 h-5"}),borderLine:!0}),i.jsx(e,{color:"error",title:"Error border line",description:"Something went wrong.",icon:i.jsx(d,{className:"w-5 h-5"}),borderLine:!0}),i.jsx(e,{color:"warning",title:"Warning border line",description:"Please check your settings.",icon:i.jsx(l,{className:"w-5 h-5"}),borderLine:!0}),i.jsx(e,{color:"info",title:"Info border line",description:"Here is some context.",icon:i.jsx(o,{className:"w-5 h-5"}),borderLine:!0})]})]}),i.jsxs("section",{children:[i.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Closable"}),i.jsxs("div",{className:"space-y-3",children:[i.jsx(e,{color:"info",title:"Dismissible notification",description:"Click the X to close.",icon:i.jsx(t,{className:"w-5 h-5"}),closable:!0}),i.jsx(e,{color:"success",title:"Auto-dismiss style",description:"Mimics a toast-like card.",icon:i.jsx(n,{className:"w-5 h-5"}),closable:!0,variant:"soft"})]})]}),i.jsxs("section",{children:[i.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants x Colors"}),i.jsx("div",{className:"space-y-4",children:["default","solid","outline","soft"].map(s=>i.jsxs("div",{className:"space-y-2",children:[i.jsx("p",{className:"text-xs text-text-secondary font-medium capitalize",children:s}),i.jsx("div",{className:"space-y-2",children:["success","error","warning","info"].map(r=>i.jsx(e,{variant:s,color:r,title:`${s} / ${r}`,size:"sm"},r))})]},s))})]})]})};var m,p,f;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: "Notification title",
    description: "This is a notification message with some details.",
    variant: "soft",
    color: "info",
    size: "md",
    closable: true,
    borderLine: false
  }
}`,...(f=(p=c.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var x,h,N;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 max-w-lg">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <Notification variant="default" color="primary" title="Default variant" description="Uses slot background with border." icon={<Bell className="w-5 h-5" />} />
          <Notification variant="solid" color="primary" title="Solid variant" description="Filled background with contrasting text." icon={<Bell className="w-5 h-5" />} />
          <Notification variant="outline" color="primary" title="Outline variant" description="Transparent background with colored border and text." icon={<Bell className="w-5 h-5" />} />
          <Notification variant="soft" color="primary" title="Soft variant" description="Subtle tinted background with colored text." icon={<Bell className="w-5 h-5" />} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          <Notification color="primary" title="Primary" description="Primary notification." icon={<Info className="w-5 h-5" />} />
          <Notification color="secondary" title="Secondary" description="Secondary notification." icon={<Info className="w-5 h-5" />} />
          <Notification color="accent" title="Accent" description="Accent notification." icon={<Info className="w-5 h-5" />} />
          <Notification color="success" title="Success" description="Operation completed successfully." icon={<CheckCircle2 className="w-5 h-5" />} />
          <Notification color="error" title="Error" description="Something went wrong." icon={<AlertCircle className="w-5 h-5" />} />
          <Notification color="warning" title="Warning" description="Proceed with caution." icon={<AlertTriangle className="w-5 h-5" />} />
          <Notification color="info" title="Info" description="Here is some useful information." icon={<Info className="w-5 h-5" />} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <Notification size="xs" color="info" icon={<Info className="w-4 h-4" />} title="Extra small" description="Compact notification." />
          <Notification size="sm" color="info" icon={<Info className="w-4 h-4" />} title="Small" description="Small notification." />
          <Notification size="md" color="info" icon={<Info className="w-5 h-5" />} title="Medium" description="Default notification size." />
          <Notification size="lg" color="info" icon={<Info className="w-6 h-6" />} title="Large" description="Large notification for prominence." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Action</h3>
        <div className="space-y-3">
          <Notification color="info" icon={<Rocket className="w-5 h-5" />} title="Update available" description="Version 2.0 is ready to install." closable action={{
          label: "Update now",
          onClick: () => {}
        }} />
          <Notification color="warning" icon={<AlertTriangle className="w-5 h-5" />} title="Storage almost full" description="90% of your storage is used." action={{
          label: "Upgrade plan",
          onClick: () => {}
        }} />
          <Notification color="success" icon={<CheckCircle2 className="w-5 h-5" />} title="Deployment successful" description="Your app is now live at your domain." action={{
          label: "View live site",
          onClick: () => {}
        }} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Border Line</h3>
        <div className="space-y-3">
          <Notification color="primary" title="Primary border line" description="Left accent border for emphasis." icon={<Info className="w-5 h-5" />} borderLine />
          <Notification color="success" title="Success border line" description="Operation completed." icon={<CheckCircle2 className="w-5 h-5" />} borderLine />
          <Notification color="error" title="Error border line" description="Something went wrong." icon={<AlertCircle className="w-5 h-5" />} borderLine />
          <Notification color="warning" title="Warning border line" description="Please check your settings." icon={<AlertTriangle className="w-5 h-5" />} borderLine />
          <Notification color="info" title="Info border line" description="Here is some context." icon={<Info className="w-5 h-5" />} borderLine />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Closable</h3>
        <div className="space-y-3">
          <Notification color="info" title="Dismissible notification" description="Click the X to close." icon={<Bell className="w-5 h-5" />} closable />
          <Notification color="success" title="Auto-dismiss style" description="Mimics a toast-like card." icon={<CheckCircle2 className="w-5 h-5" />} closable variant="soft" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants x Colors</h3>
        <div className="space-y-4">
          {(["default", "solid", "outline", "soft"] as const).map(variant => <div key={variant} className="space-y-2">
              <p className="text-xs text-text-secondary font-medium capitalize">{variant}</p>
              <div className="space-y-2">
                {(["success", "error", "warning", "info"] as const).map(color => <Notification key={color} variant={variant} color={color} title={\`\${variant} / \${color}\`} size="sm" />)}
              </div>
            </div>)}
        </div>
      </section>
    </div>
}`,...(N=(h=a.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};const B=["Playground","Showcase"];export{c as Playground,a as Showcase,B as __namedExportsOrder,T as default};
