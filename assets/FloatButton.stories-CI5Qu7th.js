import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as v,a as X}from"./utils-_uLxnvdl.js";import{R as h,r as b}from"./index-ZH-6pyQh.js";import{c as Y}from"./variants-CTjkuV9j.js";import{X as H}from"./x-ByohdK2B.js";import{P as i}from"./plus-BOfjiqhk.js";import{c as B}from"./createLucideIcon-BXJdBs6C.js";import{D as P}from"./download-DHgBCDXU.js";import{P as J}from"./phone-Drv7Klxt.js";import{M as E}from"./mail-1HDD9Lg3.js";import{S as K}from"./settings-D1wlBKo1.js";import{S as V}from"./square-pen-BpIz_lVT.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],W=B("arrow-up",Q);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],z=B("message-circle",Z);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],G=B("share-2",O);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],te=B("video",ee),se=X("inline-flex items-center justify-center [--_shadow:var(--shadow-lg)] shadow-size-slot transition-[transform,box-shadow,background-color,color] hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",{variants:{size:{xs:"w-8 h-8 text-sm",sm:"w-10 h-10 text-base",md:"w-12 h-12 text-lg",lg:"w-14 h-14 text-xl"},shape:{circle:"rounded-full",square:"rounded-button"},variant:{default:"bg-background border border-border text-text-primary hover:bg-surface",colored:"bg-slot text-slot-fg hover:bg-slot-90"}},defaultVariants:{size:"md",shape:"circle",variant:"default"}}),t=h.memo(({icon:o,label:n,tooltip:p,badge:d,onClick:l,href:a,target:u,color:x="default",size:f="md",shape:g="circle",disabled:m=!1,className:j,classNames:r,style:F})=>{const q=x==="default"?"default":"colored",y=a?"a":"button";return e.jsxs(y,{...a?{href:a,target:u}:{type:"button",onClick:l,disabled:m},"data-slot":"button","aria-label":p??(typeof n=="string"?n:void 0)??"Action button",title:p,className:v("floatButton_button",se({size:f,shape:g,variant:q}),x!=="default"&&Y[x],"relative",r==null?void 0:r.button,j),style:F,children:[o,n&&!o&&e.jsx("span",{className:"text-xs font-medium",children:n}),d!==void 0&&e.jsx("span",{"data-slot":"badge",className:v("floatButton_badge","absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-error text-error-foreground text-[10px] font-medium flex items-center justify-center",r==null?void 0:r.badge),children:d})]})});t.displayName="FloatButton";const N=h.memo(({children:o,trigger:n="click",icon:p,closeIcon:d,open:l,onOpenChange:a,shape:u="circle",color:x="primary",size:f="md",placement:g="top",className:m,classNames:j,style:r})=>{const[F,q]=b.useState(!1),y=l!==void 0?l:F,w=b.useCallback(c=>{l===void 0&&q(c),a==null||a(c)},[l,a]),A={top:"flex-col-reverse gap-3 bottom-full",bottom:"flex-col gap-3 top-full",left:"flex-row-reverse gap-3 right-full",right:"flex-row gap-3 left-full"},R=p??e.jsx(i,{className:"w-5 h-5"}),U=d??e.jsx(H,{className:"w-5 h-5"});return e.jsxs("div",{"data-slot":"group",className:v("floatButton_group","relative inline-flex",j==null?void 0:j.group,m),style:r,onMouseEnter:n==="hover"?()=>w(!0):void 0,onMouseLeave:n==="hover"?()=>w(!1):void 0,children:[e.jsx(t,{icon:e.jsx("span",{className:v("transition-transform duration-slot",y&&"rotate-45"),children:y&&d?U:R}),color:x,size:f,shape:u,onClick:n==="click"?()=>w(!y):void 0}),y&&e.jsx("div",{className:v("absolute flex items-center",A[g]),children:h.Children.map(o,(c,_)=>h.isValidElement(c)?e.jsx("div",{className:"animate-in fade-in zoom-in-75",style:{animationDelay:`${_*50}ms`,animationFillMode:"both",animationDuration:"150ms"},children:h.cloneElement(c,{size:c.props.size||f,shape:c.props.shape||u})},_):c)})]})});N.displayName="FloatButtonGroup";const $=h.memo(({visibilityHeight:o=400,onClick:n,icon:p,size:d="md",shape:l="circle",color:a="default",...u})=>{const[x,f]=b.useState(!1);b.useEffect(()=>{if(typeof window>"u")return;const m=()=>f(window.scrollY>=o);return m(),window.addEventListener("scroll",m,{passive:!0}),()=>window.removeEventListener("scroll",m)},[o]);const g=b.useCallback(()=>{window.scrollTo({top:0,behavior:"smooth"}),n==null||n()},[n]);return x?e.jsx(t,{icon:p??e.jsx(W,{className:"w-5 h-5"}),tooltip:"Back to top",onClick:g,size:d,shape:l,color:a,...u}):null});$.displayName="BackTop";t.__docgenInfo={description:"",methods:[],displayName:"FloatButton",props:{color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},shape:{defaultValue:{value:"'circle'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};N.__docgenInfo={description:"",methods:[],displayName:"FloatButtonGroup",props:{trigger:{defaultValue:{value:"'click'",computed:!1},required:!1},shape:{defaultValue:{value:"'circle'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},placement:{defaultValue:{value:"'top'",computed:!1},required:!1}}};$.__docgenInfo={description:"",methods:[],displayName:"BackTop",props:{visibilityHeight:{defaultValue:{value:"400",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},shape:{defaultValue:{value:"'circle'",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1}}};const he={title:"General/FloatButton",component:t,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},shape:{control:"select",options:["circle","square"]},disabled:{control:"boolean"},badge:{control:"text"},tooltip:{control:"text"},label:{control:"text"}}},s={position:"relative"},oe=["primary","secondary","accent","success","error","warning","info"],S={args:{color:"primary",size:"md",shape:"circle",icon:e.jsx(i,{})},render:o=>e.jsx("div",{className:"p-8",children:e.jsx(t,{...o,style:s})})},k={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:oe.map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{color:o,icon:e.jsx(z,{}),style:s}),e.jsx("span",{className:"text-xs text-text-secondary",children:o})]},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex items-end gap-4",children:["xs","sm","md","lg"].map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{size:o,icon:e.jsx(i,{}),color:"primary",style:s}),e.jsx("span",{className:"text-xs text-text-secondary",children:o})]},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Shapes"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{shape:"circle",icon:e.jsx(i,{}),color:"primary",style:s}),e.jsx("span",{className:"text-xs text-text-secondary",children:"circle"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{shape:"square",icon:e.jsx(i,{}),color:"primary",style:s}),e.jsx("span",{className:"text-xs text-text-secondary",children:"square"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{icon:e.jsx(i,{}),color:"primary",style:s}),e.jsx("span",{className:"text-xs text-text-secondary",children:"default"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{icon:e.jsx(i,{}),color:"primary",disabled:!0,style:s}),e.jsx("span",{className:"text-xs text-text-secondary",children:"disabled"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(t,{icon:e.jsx(P,{}),color:"primary",href:"#",tooltip:"Download file",style:s}),e.jsx("span",{className:"text-xs text-text-secondary",children:"as link"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Badge"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(t,{icon:e.jsx(z,{}),badge:3,color:"primary",style:s}),e.jsx(t,{icon:e.jsx(J,{}),badge:12,color:"success",style:s}),e.jsx(t,{icon:e.jsx(te,{}),badge:"99+",color:"accent",style:s}),e.jsx(t,{icon:e.jsx(E,{}),badge:0,color:"secondary",style:s})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Tooltip"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(t,{icon:e.jsx(W,{}),tooltip:"Back to top",color:"primary",style:s}),e.jsx(t,{icon:e.jsx(z,{}),tooltip:"Open chat",color:"accent",style:s}),e.jsx(t,{icon:e.jsx(K,{}),tooltip:"Settings",color:"secondary",style:s})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Speed Dial Group (click trigger)"}),e.jsx("div",{className:"p-6 flex items-end justify-center min-h-48 bg-surface rounded-lg border border-border",children:e.jsxs(N,{color:"primary",placement:"top",trigger:"click",icon:e.jsx(i,{}),children:[e.jsx(t,{icon:e.jsx(V,{}),color:"accent",tooltip:"Edit",style:s}),e.jsx(t,{icon:e.jsx(G,{}),color:"success",tooltip:"Share",style:s}),e.jsx(t,{icon:e.jsx(P,{}),color:"info",tooltip:"Download",style:s})]})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Speed Dial Group (hover trigger)"}),e.jsx("div",{className:"p-6 flex items-center justify-center min-h-36 bg-surface rounded-lg border border-border",children:e.jsxs(N,{color:"secondary",placement:"top",trigger:"hover",children:[e.jsx(t,{icon:e.jsx(V,{}),color:"accent",tooltip:"Edit",style:s}),e.jsx(t,{icon:e.jsx(E,{}),color:"primary",tooltip:"Message",style:s})]})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Group Placements"}),e.jsx("div",{className:"flex gap-6 flex-wrap",children:["top","right","bottom","left"].map(o=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"p-4 flex items-center justify-center w-24 h-24 bg-surface rounded-lg border border-border",children:e.jsxs(N,{color:"primary",placement:o,trigger:"click",size:"sm",children:[e.jsx(t,{icon:e.jsx(V,{}),color:"accent",size:"sm",style:s}),e.jsx(t,{icon:e.jsx(G,{}),color:"success",size:"sm",style:s})]})}),e.jsx("span",{className:"text-xs text-text-secondary",children:o})]},o))})]})]})};var M,D,T;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    color: "primary",
    size: "md",
    shape: "circle",
    icon: <Plus />
  },
  render: args => <div className="p-8">
      <FloatButton {...args} style={inlineStyle} />
    </div>
}`,...(T=(D=S.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var I,L,C;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-4">
          {colors.map(c => <div key={c} className="flex flex-col items-center gap-2">
              <FloatButton color={c} icon={<MessageCircle />} style={inlineStyle} />
              <span className="text-xs text-text-secondary">{c}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex items-end gap-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s} className="flex flex-col items-center gap-2">
              <FloatButton size={s} icon={<Plus />} color="primary" style={inlineStyle} />
              <span className="text-xs text-text-secondary">{s}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Shapes
        </h3>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2">
            <FloatButton shape="circle" icon={<Plus />} color="primary" style={inlineStyle} />
            <span className="text-xs text-text-secondary">circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FloatButton shape="square" icon={<Plus />} color="primary" style={inlineStyle} />
            <span className="text-xs text-text-secondary">square</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col items-center gap-2">
            <FloatButton icon={<Plus />} color="primary" style={inlineStyle} />
            <span className="text-xs text-text-secondary">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FloatButton icon={<Plus />} color="primary" disabled style={inlineStyle} />
            <span className="text-xs text-text-secondary">disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FloatButton icon={<Download />} color="primary" href="#" tooltip="Download file" style={inlineStyle} />
            <span className="text-xs text-text-secondary">as link</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Badge
        </h3>
        <div className="flex gap-4 items-center">
          <FloatButton icon={<MessageCircle />} badge={3} color="primary" style={inlineStyle} />
          <FloatButton icon={<Phone />} badge={12} color="success" style={inlineStyle} />
          <FloatButton icon={<Video />} badge="99+" color="accent" style={inlineStyle} />
          <FloatButton icon={<Mail />} badge={0} color="secondary" style={inlineStyle} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Tooltip
        </h3>
        <div className="flex gap-4 items-center">
          <FloatButton icon={<ArrowUp />} tooltip="Back to top" color="primary" style={inlineStyle} />
          <FloatButton icon={<MessageCircle />} tooltip="Open chat" color="accent" style={inlineStyle} />
          <FloatButton icon={<Settings />} tooltip="Settings" color="secondary" style={inlineStyle} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Speed Dial Group (click trigger)
        </h3>
        <div className="p-6 flex items-end justify-center min-h-48 bg-surface rounded-lg border border-border">
          <FloatButtonGroup color="primary" placement="top" trigger="click" icon={<Plus />}>
            <FloatButton icon={<Edit />} color="accent" tooltip="Edit" style={inlineStyle} />
            <FloatButton icon={<Share2 />} color="success" tooltip="Share" style={inlineStyle} />
            <FloatButton icon={<Download />} color="info" tooltip="Download" style={inlineStyle} />
          </FloatButtonGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Speed Dial Group (hover trigger)
        </h3>
        <div className="p-6 flex items-center justify-center min-h-36 bg-surface rounded-lg border border-border">
          <FloatButtonGroup color="secondary" placement="top" trigger="hover">
            <FloatButton icon={<Edit />} color="accent" tooltip="Edit" style={inlineStyle} />
            <FloatButton icon={<Mail />} color="primary" tooltip="Message" style={inlineStyle} />
          </FloatButtonGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Group Placements
        </h3>
        <div className="flex gap-6 flex-wrap">
          {(["top", "right", "bottom", "left"] as const).map(placement => <div key={placement} className="flex flex-col items-center gap-2">
              <div className="p-4 flex items-center justify-center w-24 h-24 bg-surface rounded-lg border border-border">
                <FloatButtonGroup color="primary" placement={placement} trigger="click" size="sm">
                  <FloatButton icon={<Edit />} color="accent" size="sm" style={inlineStyle} />
                  <FloatButton icon={<Share2 />} color="success" size="sm" style={inlineStyle} />
                </FloatButtonGroup>
              </div>
              <span className="text-xs text-text-secondary">{placement}</span>
            </div>)}
        </div>
      </section>
    </div>
}`,...(C=(L=k.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};const ge=["Playground","Showcase"];export{S as Playground,k as Showcase,ge as __namedExportsOrder,he as default};
