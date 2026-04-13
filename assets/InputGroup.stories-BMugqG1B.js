import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as x,a as h}from"./utils-_uLxnvdl.js";import{r as I,R as m}from"./index-ZH-6pyQh.js";import{c as k}from"./variants-CTjkuV9j.js";import{S}from"./search-DfqimKq8.js";import{M as _}from"./mail-1HDD9Lg3.js";import{G as z}from"./globe-TCM94dGE.js";import{c as G}from"./createLucideIcon-BXJdBs6C.js";import{L as V}from"./lock-D-iRFELD.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]],E=G("at-sign",$);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],q=G("dollar-sign",U);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],M=G("hash",D),L=h("relative flex items-center w-full [--_radius:var(--radius-input)] rounded-slot transition-colors",{variants:{variant:{outline:"bg-background border border-border hover:border-slot-50 focus-within:border-slot focus-within:ring-2 focus-within:ring-slot-30",filled:"bg-surface border border-transparent hover:border-slot-30 focus-within:border-slot focus-within:ring-2 focus-within:ring-slot-30"},size:{xs:"h-(--input-height-xs)",sm:"h-(--input-height-sm)",md:"h-(--input-height-md)",lg:"h-(--input-height-lg)"}},defaultVariants:{variant:"outline",size:"md"}}),R=h("flex-1 w-full h-full bg-transparent outline-none text-text-primary placeholder:text-text-secondary/50 disabled:opacity-50 disabled:cursor-not-allowed read-only:cursor-default",{variants:{size:{xs:"px-(--input-padding-x-xs) text-xs",sm:"px-(--input-padding-x-sm) text-sm",md:"px-(--input-padding-x-md) text-base",lg:"px-(--input-padding-x-lg) text-lg"}},defaultVariants:{size:"md"}}),T=h("flex items-center gap-2 text-text-secondary shrink-0",{variants:{size:{xs:"last:pr-2 pl-2 text-xs",sm:"last:pr-2.5 pl-2.5 text-sm",md:"last:pr-3 pl-3 text-base",lg:"last:pr-4 pl-4 text-lg"}},defaultVariants:{size:"md"}}),t=I.memo(({children:r,variant:a="outline",size:o="md",color:p="primary",className:c,classNames:d,"aria-label":w})=>n.jsx("div",{"data-slot":"inputGroup_root",role:"group",className:x("inputGroup_root",L({variant:a,size:o}),k[p],d==null?void 0:d.root,c),"aria-label":w,children:m.Children.map(r,u=>{var y;if(m.isValidElement(u)){const j=(y=u.type)==null?void 0:y.displayName;if(j==="InputGroupInput"||j==="InputGroupAddon")return m.cloneElement(u,{size:o,classNames:d})}return u})}));t.displayName="InputGroup";const s=I.memo(({className:r,size:a="md",classNames:o,ref:p,...c})=>n.jsx("input",{ref:p,"data-slot":"inputGroup_input",className:x("inputGroup_input",R({size:a}),o==null?void 0:o.input,r),...c}));s.displayName="InputGroupInput";const e=I.memo(({children:r,size:a="md",className:o,classNames:p})=>n.jsx("div",{"data-slot":"inputGroup_addon",className:x("inputGroup_addon",T({size:a}),p==null?void 0:p.addon,o),children:r}));e.displayName="InputGroupAddon";s.__docgenInfo={description:"",methods:[],displayName:"InputGroupInput",props:{size:{defaultValue:{value:'"md"',computed:!1},required:!1}}};e.__docgenInfo={description:"",methods:[],displayName:"InputGroupAddon",props:{size:{defaultValue:{value:'"md"',computed:!1},required:!1}}};t.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},color:{defaultValue:{value:'"primary"',computed:!1},required:!1}}};const X={title:"Data Entry/InputGroup",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},variant:{control:"select",options:["outline","filled"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]}}},i={args:{size:"md",variant:"outline",color:"primary"},render:r=>n.jsx("div",{className:"max-w-xs",children:n.jsxs(t,{...r,children:[n.jsx(e,{children:"https://"}),n.jsx(s,{placeholder:"example.com"})]})})},l={render:()=>n.jsxs("div",{className:"space-y-10 p-6 max-w-sm",children:[n.jsxs("section",{children:[n.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"outline"}),n.jsxs(t,{variant:"outline",children:[n.jsx(e,{children:"https://"}),n.jsx(s,{placeholder:"example.com"})]})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"filled"}),n.jsxs(t,{variant:"filled",children:[n.jsx(e,{children:"https://"}),n.jsx(s,{placeholder:"example.com"})]})]})]})]}),n.jsxs("section",{children:[n.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),n.jsx("div",{className:"space-y-3",children:["primary","secondary","accent"].map(r=>n.jsxs(t,{color:r,children:[n.jsx(e,{children:"@"}),n.jsx(s,{placeholder:`${r} color`})]},r))})]}),n.jsxs("section",{children:[n.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),n.jsx("div",{className:"space-y-3",children:["xs","sm","md","lg"].map(r=>n.jsxs(t,{size:r,children:[n.jsx(e,{children:"$"}),n.jsx(s,{placeholder:`Size ${r}`}),n.jsx(e,{children:"USD"})]},r))})]}),n.jsxs("section",{children:[n.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Text Addons"}),n.jsxs("div",{className:"space-y-3",children:[n.jsxs(t,{children:[n.jsx(e,{children:"https://"}),n.jsx(s,{placeholder:"example.com"})]}),n.jsxs(t,{children:[n.jsx(s,{placeholder:"username"}),n.jsx(e,{children:"@gmail.com"})]}),n.jsxs(t,{children:[n.jsx(e,{children:"$"}),n.jsx(s,{placeholder:"0.00",type:"number"}),n.jsx(e,{children:"USD"})]}),n.jsxs(t,{children:[n.jsx(e,{children:"+1"}),n.jsx(s,{placeholder:"(555) 000-0000",type:"tel"})]})]})]}),n.jsxs("section",{children:[n.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Icon Addons"}),n.jsxs("div",{className:"space-y-3",children:[n.jsxs(t,{children:[n.jsx(e,{children:n.jsx(S,{className:"w-4 h-4"})}),n.jsx(s,{placeholder:"Search..."})]}),n.jsxs(t,{children:[n.jsx(e,{children:n.jsx(_,{className:"w-4 h-4"})}),n.jsx(s,{placeholder:"Email address",type:"email"})]}),n.jsxs(t,{children:[n.jsx(e,{children:n.jsx(z,{className:"w-4 h-4"})}),n.jsx(s,{placeholder:"Website URL"})]}),n.jsxs(t,{children:[n.jsx(e,{children:n.jsx(E,{className:"w-4 h-4"})}),n.jsx(s,{placeholder:"Username"}),n.jsx(e,{children:n.jsx(V,{className:"w-4 h-4"})})]})]})]}),n.jsxs("section",{children:[n.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Mixed Addons"}),n.jsxs("div",{className:"space-y-3",children:[n.jsxs(t,{children:[n.jsx(e,{children:n.jsx(q,{className:"w-4 h-4"})}),n.jsx(s,{placeholder:"Amount",type:"number"}),n.jsx(e,{children:"per month"})]}),n.jsxs(t,{children:[n.jsx(e,{children:n.jsx(M,{className:"w-4 h-4"})}),n.jsx(s,{placeholder:"Tag name"}),n.jsx(e,{children:".io"})]})]})]})]})};var f,g,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "md",
    variant: "outline",
    color: "primary"
  },
  render: args => <div className="max-w-xs">
      <InputGroup {...args}>
        <InputGroupAddon>https://</InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    </div>
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,A,N;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-sm">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-text-secondary mb-1">outline</p>
            <InputGroup variant="outline">
              <InputGroupAddon>https://</InputGroupAddon>
              <InputGroupInput placeholder="example.com" />
            </InputGroup>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">filled</p>
            <InputGroup variant="filled">
              <InputGroupAddon>https://</InputGroupAddon>
              <InputGroupInput placeholder="example.com" />
            </InputGroup>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent"] as const).map(c => <InputGroup key={c} color={c}>
              <InputGroupAddon>@</InputGroupAddon>
              <InputGroupInput placeholder={\`\${c} color\`} />
            </InputGroup>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map(s => <InputGroup key={s} size={s}>
              <InputGroupAddon>$</InputGroupAddon>
              <InputGroupInput placeholder={\`Size \${s}\`} />
              <InputGroupAddon>USD</InputGroupAddon>
            </InputGroup>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Text Addons
        </h3>
        <div className="space-y-3">
          <InputGroup>
            <InputGroupAddon>https://</InputGroupAddon>
            <InputGroupInput placeholder="example.com" />
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="username" />
            <InputGroupAddon>@gmail.com</InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupInput placeholder="0.00" type="number" />
            <InputGroupAddon>USD</InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>+1</InputGroupAddon>
            <InputGroupInput placeholder="(555) 000-0000" type="tel" />
          </InputGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Icon Addons
        </h3>
        <div className="space-y-3">
          <InputGroup>
            <InputGroupAddon>
              <Search className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <Mail className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Email address" type="email" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <Globe className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Website URL" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <AtSign className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Username" />
            <InputGroupAddon>
              <Lock className="w-4 h-4" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Mixed Addons
        </h3>
        <div className="space-y-3">
          <InputGroup>
            <InputGroupAddon>
              <DollarSign className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Amount" type="number" />
            <InputGroupAddon>per month</InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <Hash className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Tag name" />
            <InputGroupAddon>.io</InputGroupAddon>
          </InputGroup>
        </div>
      </section>
    </div>
}`,...(N=(A=l.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};const Y=["Playground","Showcase"];export{i as Playground,l as Showcase,Y as __namedExportsOrder,X as default};
