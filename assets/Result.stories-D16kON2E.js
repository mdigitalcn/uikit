import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as r,a as u}from"./utils-_uLxnvdl.js";import{R as S}from"./index-ZH-6pyQh.js";import{c as T}from"./createLucideIcon-BXJdBs6C.js";import{T as g}from"./triangle-alert-Bq5oH3ZW.js";import{I as P}from"./info-CKnY7ViN.js";import{C as k}from"./circle-check-DxhG47J7.js";import{B as i}from"./index-Cw7T_5ox.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./index-CF05pSQ2.js";import"./variants-CTjkuV9j.js";import"./useRipple-BuuTbn0W.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],h=T("circle-x",_);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],A=T("search-x",C),B={success:{color:"text-success",defaultTitle:"Successfully Done"},error:{color:"text-error",defaultTitle:"Something Went Wrong"},info:{color:"text-info",defaultTitle:"Information"},warning:{color:"text-warning",defaultTitle:"Warning"},403:{color:"text-warning",defaultTitle:"403 — Access Denied"},404:{color:"text-info",defaultTitle:"404 — Page Not Found"},500:{color:"text-error",defaultTitle:"500 — Server Error"}},V=u("flex flex-col items-center text-center",{variants:{size:{xs:"py-6 px-4",sm:"py-8 px-4",md:"py-12 px-6",lg:"py-16 px-8"}},defaultVariants:{size:"md"}}),Y={xs:"w-10 h-10",sm:"w-12 h-12",md:"w-16 h-16",lg:"w-20 h-20"},I=u("text-text-primary mb-2",{variants:{size:{xs:"text-base font-semibold",sm:"text-lg font-semibold",md:"text-xl font-semibold",lg:"text-2xl font-bold"}},defaultVariants:{size:"md"}}),F=u("text-text-secondary mb-6",{variants:{size:{xs:"text-xs max-w-xs",sm:"text-sm max-w-sm",md:"text-sm max-w-md",lg:"text-base max-w-lg"}},defaultVariants:{size:"md"}}),W={xs:"max-w-xs",sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg"},q={success:k,error:h,info:P,warning:g,403:g,404:A,500:h};function E({status:o,sizeClass:d}){const n=q[o];return t.jsx(n,{className:r(d,B[o].color),strokeWidth:1.5})}const s=S.memo(({status:o="info",icon:d,title:n,subtitle:m,extra:x,children:p,size:a="md",className:R,classNames:e})=>{const f=B[o];return t.jsxs("div",{"data-slot":"root",role:"status","aria-label":typeof n=="string"?n:f.defaultTitle,className:r("result_root",V({size:a}),e==null?void 0:e.root,R),children:[t.jsx("div",{"data-slot":"icon",className:r("result_icon","mb-6",e==null?void 0:e.icon),children:d??t.jsx(E,{status:o,sizeClass:Y[a]})}),t.jsx("h3",{"data-slot":"title",className:r("result_title",I({size:a}),e==null?void 0:e.title),children:n??f.defaultTitle}),m&&t.jsx("p",{"data-slot":"subtitle",className:r("result_subtitle",F({size:a}),e==null?void 0:e.subtitle),children:m}),x&&t.jsx("div",{"data-slot":"extra",className:r("result_extra","flex items-center gap-3 mb-6",e==null?void 0:e.extra),children:x}),p&&t.jsx("div",{"data-slot":"content",className:r("result_content","w-full",W[a],e==null?void 0:e.content),children:p})]})});s.displayName="Result";s.__docgenInfo={description:"",methods:[],displayName:"Result",props:{status:{defaultValue:{value:"'info'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const tt={title:"Feedback/Result",component:s,tags:["autodocs"],argTypes:{status:{control:"select",options:["success","error","warning","info","404","403","500"]},size:{control:"select",options:["xs","sm","md","lg"]}}},l={args:{status:"success",title:"Payment Successful",subtitle:"Your order #2024-001 has been placed. You'll receive a confirmation email shortly."}},c={render:()=>t.jsxs("div",{className:"space-y-10",children:[t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Status Types"}),t.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[t.jsx(s,{status:"success",title:"Payment Complete",subtitle:"Your transaction was processed successfully.",extra:t.jsx(i,{size:"sm",children:"View Receipt"})}),t.jsx(s,{status:"error",title:"Payment Failed",subtitle:"We could not process your payment. Please try again.",extra:t.jsxs(t.Fragment,{children:[t.jsx(i,{size:"sm",color:"error",children:"Retry"}),t.jsx(i,{size:"sm",variant:"ghost",children:"Cancel"})]})}),t.jsx(s,{status:"warning",title:"Low Balance",subtitle:"Your account balance is below the recommended minimum.",extra:t.jsx(i,{size:"sm",color:"warning",children:"Add Funds"})}),t.jsx(s,{status:"info",title:"Under Review",subtitle:"Your account is being verified. This may take 1-2 business days."})]})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"HTTP Error Pages"}),t.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[t.jsx(s,{status:"404",title:"404",subtitle:"Page not found.",extra:t.jsx(i,{size:"sm",children:"Go Home"})}),t.jsx(s,{status:"403",title:"403",subtitle:"Access denied.",extra:t.jsx(i,{size:"sm",children:"Go Back"})}),t.jsx(s,{status:"500",title:"500",subtitle:"Server error.",extra:t.jsx(i,{size:"sm",children:"Try Again"})})]})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),t.jsx("div",{className:"grid grid-cols-2 gap-6",children:["xs","sm","md","lg"].map(o=>t.jsx(s,{status:"success",title:`Size ${o}`,subtitle:"Sub-title description.",size:o},o))})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Title Only"}),t.jsx(s,{status:"success",title:"All done!",extra:t.jsx(i,{size:"sm",children:"Continue"})})]})]})};var b,y,j;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    status: "success",
    title: "Payment Successful",
    subtitle: "Your order #2024-001 has been placed. You'll receive a confirmation email shortly."
  }
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,w,z;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Status Types</h3>
        <div className="grid grid-cols-2 gap-6">
          <Result status="success" title="Payment Complete" subtitle="Your transaction was processed successfully." extra={<Button size="sm">View Receipt</Button>} />
          <Result status="error" title="Payment Failed" subtitle="We could not process your payment. Please try again." extra={<><Button size="sm" color="error">Retry</Button><Button size="sm" variant="ghost">Cancel</Button></>} />
          <Result status="warning" title="Low Balance" subtitle="Your account balance is below the recommended minimum." extra={<Button size="sm" color="warning">Add Funds</Button>} />
          <Result status="info" title="Under Review" subtitle="Your account is being verified. This may take 1-2 business days." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">HTTP Error Pages</h3>
        <div className="grid grid-cols-3 gap-6">
          <Result status="404" title="404" subtitle="Page not found." extra={<Button size="sm">Go Home</Button>} />
          <Result status="403" title="403" subtitle="Access denied." extra={<Button size="sm">Go Back</Button>} />
          <Result status="500" title="500" subtitle="Server error." extra={<Button size="sm">Try Again</Button>} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="grid grid-cols-2 gap-6">
          {(["xs", "sm", "md", "lg"] as const).map(s => <Result key={s} status="success" title={\`Size \${s}\`} subtitle="Sub-title description." size={s} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Title Only</h3>
        <Result status="success" title="All done!" extra={<Button size="sm">Continue</Button>} />
      </section>
    </div>
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const et=["Playground","Showcase"];export{l as Playground,c as Showcase,et as __namedExportsOrder,tt as default};
