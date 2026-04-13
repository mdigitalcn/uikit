import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as Z,c as a,s as _,a as ee}from"./utils-_uLxnvdl.js";import{R as n,r as q}from"./index-ZH-6pyQh.js";import{c as te}from"./variants-CTjkuV9j.js";import"./_commonjsHelpers-CqkleIqs.js";const re=ee("w-full [--_radius:var(--radius-input)] rounded-slot transition-colors text-text-primary placeholder:text-text-secondary/50 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed read-only:bg-surface read-only:cursor-default outline-none",{variants:{variant:{outline:"bg-background border border-border hover:border-slot-50 focus:border-slot focus:ring-2 focus:ring-slot-30",filled:"bg-surface border border-transparent hover:border-slot-30 focus:border-slot focus:ring-2 focus:ring-slot-30"},status:{default:"",error:"border-error",warning:"border-warning",info:"border-info",success:"border-success"},size:{xs:"min-h-(--textarea-min-height-xs) p-(--textarea-padding-xs) text-xs",sm:"min-h-(--textarea-min-height-sm) p-(--textarea-padding-sm) text-sm",md:"min-h-(--textarea-min-height-md) p-(--textarea-padding-md) text-base",lg:"min-h-(--textarea-min-height-lg) p-(--textarea-padding-lg) text-lg"},resize:{none:"resize-none",vertical:"resize-y",horizontal:"resize-x",both:"resize"},fullWidth:{true:"w-full",false:"max-w-full"}},defaultVariants:{variant:"outline",status:"default",size:"md",resize:"vertical",fullWidth:!0}}),t=n.memo(({variant:o="outline",size:H="md",color:P="primary",label:v,helperText:j,messagePosition:z="bottom",error:T,warning:V,info:C,success:S,resize:$="vertical",showCount:A=!1,maxLength:g,autoResize:x=!1,fullWidth:E=!0,className:G,classNames:r,value:h,onChange:u,ref:i,...m})=>{const[J,K]=n.useState(m.defaultValue??""),y=h!==void 0?h:J,c=n.useRef(null),Q=String(y).length,U=n.useCallback(l=>{c.current=l,typeof i=="function"?i(l):i&&(i.current=l)},[i]),W=q.useId(),R=m.id||`textarea-${W}`,w=`textarea-helper-${W}`,{status:s,message:d}=q.useMemo(()=>Z({error:T,warning:V,info:C,success:S,helperText:j}),[T,V,C,S,j]),X=n.useCallback(l=>{h===void 0&&K(l.target.value),u==null||u(l)},[h,u]);n.useEffect(()=>{x&&c.current&&(c.current.style.height="auto",c.current.style.height=`${c.current.scrollHeight}px`)},[y,x]);const Y=e.jsx("textarea",{ref:U,id:R,className:a("textarea_textarea",re({variant:o,status:s,size:H,resize:x?"none":$,fullWidth:E}),x&&"overflow-hidden",G,r==null?void 0:r.textarea),maxLength:g,value:y,onChange:X,"aria-invalid":s==="error","aria-describedby":d?w:void 0,...m});return e.jsxs("div",{"data-slot":"root",className:a("textarea_root","w-full flex flex-col relative",te[s!=="default"?s:P],!E&&"inline-block",r==null?void 0:r.root),children:[e.jsxs("div",{className:a("textarea_wrapper","flex gap-2 items-center relative",r==null?void 0:r.wrapper),children:[v&&e.jsxs("label",{htmlFor:R,className:a("textarea_label mb-0.5","text-sm font-medium text-text-secondary",r==null?void 0:r.label),children:[v,m.required&&e.jsx("span",{className:a("textarea_error","text-error ml-1",r==null?void 0:r.error),children:"*"})]}),d&&z==="top"&&e.jsx("p",{id:w,className:a("textarea_helper mb-0.5",_({status:s}),r==null?void 0:r.helper),children:d}),A&&g&&e.jsxs("span",{className:a("textarea_counter mb-0.5","text-xs text-text-secondary absolute right-0",r==null?void 0:r.counter),children:[Q,"/",g]})]}),Y,d&&z==="bottom"&&e.jsx("p",{id:w,className:a("textarea_helper",_({status:s}),"mt-0.5",r==null?void 0:r.helper),children:d})]})});t.displayName="Textarea";t.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},color:{defaultValue:{value:'"primary"',computed:!1},required:!1},messagePosition:{defaultValue:{value:'"bottom"',computed:!1},required:!1},resize:{defaultValue:{value:'"vertical"',computed:!1},required:!1},showCount:{defaultValue:{value:"false",computed:!1},required:!1},autoResize:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"true",computed:!1},required:!1}}};const ie={title:"Form/Textarea",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled"]},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},resize:{control:"select",options:["none","vertical","horizontal","both"]},messagePosition:{control:"select",options:["top","bottom"]},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},error:{control:"text"},warning:{control:"text"},info:{control:"text"},success:{control:"text"},showCount:{control:"boolean"},autoResize:{control:"boolean"},fullWidth:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},rows:{control:"number"}}},p={args:{label:"Description",placeholder:"Write something...",variant:"outline",size:"md",color:"primary",resize:"vertical",rows:4}},b={render:()=>e.jsxs("div",{className:"space-y-10 max-w-md",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{variant:"outline",label:"Outline",placeholder:"Outline variant",rows:3}),e.jsx(t,{variant:"filled",label:"Filled",placeholder:"Filled variant",rows:3})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{size:"xs",placeholder:"Extra small",rows:2}),e.jsx(t,{size:"sm",placeholder:"Small",rows:2}),e.jsx(t,{size:"md",placeholder:"Medium",rows:2}),e.jsx(t,{size:"lg",placeholder:"Large",rows:2})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Resize Behavior"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{resize:"none",label:"No resize",placeholder:"Cannot be resized",rows:3}),e.jsx(t,{resize:"vertical",label:"Vertical resize (default)",placeholder:"Drag bottom edge",rows:3}),e.jsx(t,{resize:"horizontal",label:"Horizontal resize",placeholder:"Drag right edge",rows:3}),e.jsx(t,{resize:"both",label:"Both directions",placeholder:"Drag any corner",rows:3})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Validation States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{label:"Error",placeholder:"Enter content",error:"This field is required",rows:3}),e.jsx(t,{label:"Warning",placeholder:"Enter content",warning:"Content may be too long",rows:3}),e.jsx(t,{label:"Success",placeholder:"Enter content",success:"Looks great!",rows:3,defaultValue:"This is my bio"}),e.jsx(t,{label:"Info",placeholder:"Enter content",info:"Markdown is supported",rows:3}),e.jsx(t,{label:"Helper text",placeholder:"Enter content",helperText:"Maximum 500 characters",rows:3})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Character Count"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{label:"Bio",placeholder:"Tell us about yourself",showCount:!0,maxLength:200,rows:4}),e.jsx(t,{label:"Tweet",placeholder:"What's happening?",showCount:!0,maxLength:280,rows:3})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Auto Resize"}),e.jsx(t,{label:"Auto-expanding",placeholder:"Start typing and the textarea grows...",autoResize:!0,resize:"none"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{label:"Disabled",placeholder:"Cannot type here",disabled:!0,rows:3}),e.jsx(t,{label:"Read only",readOnly:!0,rows:3,defaultValue:"This content is read only and cannot be modified."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:["primary","secondary","accent","success"].map(o=>e.jsx(t,{color:o,label:o,placeholder:`${o} focus ring`,rows:2},o))})]})]})},f={render:()=>e.jsxs("div",{className:"space-y-4 max-w-sm",children:[e.jsx(t,{label:"Short bio",placeholder:"Write a short bio...",showCount:!0,maxLength:150,rows:4,helperText:"Shown on your public profile"}),e.jsx(t,{label:"Post content",placeholder:"What's on your mind?",showCount:!0,maxLength:500,rows:6})]})};var L,D,k;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Description",
    placeholder: "Write something...",
    variant: "outline",
    size: "md",
    color: "primary",
    resize: "vertical",
    rows: 4
  }
}`,...(k=(D=p.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var M,I,O;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <Textarea variant="outline" label="Outline" placeholder="Outline variant" rows={3} />
          <Textarea variant="filled" label="Filled" placeholder="Filled variant" rows={3} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <Textarea size="xs" placeholder="Extra small" rows={2} />
          <Textarea size="sm" placeholder="Small" rows={2} />
          <Textarea size="md" placeholder="Medium" rows={2} />
          <Textarea size="lg" placeholder="Large" rows={2} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Resize Behavior</h3>
        <div className="space-y-3">
          <Textarea resize="none" label="No resize" placeholder="Cannot be resized" rows={3} />
          <Textarea resize="vertical" label="Vertical resize (default)" placeholder="Drag bottom edge" rows={3} />
          <Textarea resize="horizontal" label="Horizontal resize" placeholder="Drag right edge" rows={3} />
          <Textarea resize="both" label="Both directions" placeholder="Drag any corner" rows={3} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <Textarea label="Error" placeholder="Enter content" error="This field is required" rows={3} />
          <Textarea label="Warning" placeholder="Enter content" warning="Content may be too long" rows={3} />
          <Textarea label="Success" placeholder="Enter content" success="Looks great!" rows={3} defaultValue="This is my bio" />
          <Textarea label="Info" placeholder="Enter content" info="Markdown is supported" rows={3} />
          <Textarea label="Helper text" placeholder="Enter content" helperText="Maximum 500 characters" rows={3} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Character Count</h3>
        <div className="space-y-3">
          <Textarea label="Bio" placeholder="Tell us about yourself" showCount maxLength={200} rows={4} />
          <Textarea label="Tweet" placeholder="What's happening?" showCount maxLength={280} rows={3} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Auto Resize</h3>
        <Textarea label="Auto-expanding" placeholder="Start typing and the textarea grows..." autoResize resize="none" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <Textarea label="Disabled" placeholder="Cannot type here" disabled rows={3} />
          <Textarea label="Read only" readOnly rows={3} defaultValue="This content is read only and cannot be modified." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success"] as const).map(color => <Textarea key={color} color={color} label={color} placeholder={\`\${color} focus ring\`} rows={2} />)}
        </div>
      </section>
    </div>
}`,...(O=(I=b.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var N,B,F;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-sm">
      <Textarea label="Short bio" placeholder="Write a short bio..." showCount maxLength={150} rows={4} helperText="Shown on your public profile" />
      <Textarea label="Post content" placeholder="What's on your mind?" showCount maxLength={500} rows={6} />
    </div>
}`,...(F=(B=f.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const ce=["Playground","Showcase","WithCharacterCount"];export{p as Playground,b as Showcase,f as WithCharacterCount,ce as __namedExportsOrder,ie as default};
