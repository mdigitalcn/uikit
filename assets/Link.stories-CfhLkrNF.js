import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as l,i as f,a as C}from"./utils-_uLxnvdl.js";import{R as G}from"./index-ZH-6pyQh.js";import{c as _}from"./variants-CTjkuV9j.js";import{E as A}from"./external-link-ITmxNWuX.js";import{F as D}from"./file-text-DaZIRBjV.js";import{A as R}from"./arrow-right-DA4W7e7_.js";import{D as q}from"./download-DHgBCDXU.js";import{c as H}from"./createLucideIcon-BXJdBs6C.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],T=H("github",P),F=C("inline-flex items-center gap-1 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slot focus-visible:ring-offset-2 focus-visible:ring-offset-background text-slot hover:text-slot-80",{variants:{color:_,size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"},underline:{always:"underline",hover:"no-underline hover:underline",none:"no-underline"},disabled:{true:"opacity-50 pointer-events-none cursor-not-allowed",false:"cursor-pointer"}},defaultVariants:{color:"default",size:"md",underline:"hover",disabled:!1}}),n=G.memo(({children:o,color:s="default",size:t="md",underline:d="hover",external:p=!1,showExternalIcon:j=!0,disabled:a=!1,leftIcon:h,rightIcon:m,className:L,classNames:r,href:N,ref:I,onClick:x,...E})=>{const S=u=>{if(a){u.preventDefault();return}x==null||x(u)},V=p?{target:"_blank",rel:"noopener noreferrer"}:{},z=p&&j;return e.jsxs("a",{ref:I,href:a?void 0:N,className:l("link_root",(h||m)&&"align-top",F({color:s,size:t,underline:d,disabled:a}),r==null?void 0:r.root,L),onClick:S,"aria-disabled":a||void 0,"data-slot":"root",...V,...E,children:[h&&e.jsx("span",{className:l("link_icon","inline-flex items-center justify-center shrink-0",f[t],r==null?void 0:r.icon),"data-slot":"icon",children:h}),o,m&&e.jsx("span",{className:l("link_icon","inline-flex items-center justify-center shrink-0",f[t],r==null?void 0:r.icon),"data-slot":"icon",children:m}),z&&e.jsx(A,{className:l("link_externalIcon",f[t],r==null?void 0:r.externalIcon),"aria-label":"Opens in new tab","data-slot":"externalIcon"})]})});n.displayName="Link";n.__docgenInfo={description:"Link Component",methods:[],displayName:"Link",props:{color:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},underline:{defaultValue:{value:'"hover"',computed:!1},required:!1},external:{defaultValue:{value:"false",computed:!1},required:!1},showExternalIcon:{defaultValue:{value:"true",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const $={title:"General/Link",component:n,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},underline:{control:"select",options:["always","hover","none"]},size:{control:"select",options:["xs","sm","md","lg"]},external:{control:"boolean"},showExternalIcon:{control:"boolean"},disabled:{control:"boolean"}}},M=["default","primary","secondary","accent","success","error","warning","info"],i={args:{children:"Click here",href:"#",color:"primary",underline:"hover",size:"md",external:!1,disabled:!1}},c={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:M.map(o=>e.jsx(n,{href:"#",color:o,children:o},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants (underline)"}),e.jsxs("div",{className:"flex gap-6 flex-wrap",children:[e.jsx(n,{href:"#",underline:"none",children:"No underline"}),e.jsx(n,{href:"#",underline:"hover",children:"Underline on hover"}),e.jsx(n,{href:"#",underline:"always",children:"Always underlined"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap items-baseline gap-4",children:["xs","sm","md","lg"].map(o=>e.jsxs(n,{href:"#",color:"primary",size:o,children:["Size ",o]},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{href:"#",color:"primary",children:"Active link"}),e.jsx(n,{href:"#",color:"primary",disabled:!0,children:"Disabled link"}),e.jsx(n,{href:"https://example.com",color:"info",external:!0,children:"External link"}),e.jsx(n,{href:"https://example.com",color:"info",external:!0,showExternalIcon:!1,children:"External (no icon)"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Icons"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{href:"#",color:"primary",leftIcon:e.jsx(D,{className:"w-4 h-4"}),children:"View documentation"}),e.jsx(n,{href:"#",color:"success",rightIcon:e.jsx(R,{className:"w-4 h-4"}),children:"Continue"}),e.jsx(n,{href:"#",color:"accent",leftIcon:e.jsx(q,{className:"w-4 h-4"}),children:"Download"}),e.jsx(n,{href:"https://github.com",color:"default",external:!0,leftIcon:e.jsx(T,{className:"w-4 h-4"}),children:"GitHub"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"In Paragraph"}),e.jsxs("p",{className:"text-text-secondary text-sm max-w-md leading-relaxed",children:["Read the"," ",e.jsx(n,{href:"#",color:"primary",children:"documentation"})," ","to get started, or check the"," ",e.jsx(n,{href:"#",color:"info",children:"changelog"})," ","for recent updates. Need help?"," ",e.jsx(n,{href:"#",color:"accent",children:"Contact support"}),". To report bugs, visit our"," ",e.jsx(n,{href:"https://github.com",color:"default",external:!0,children:"GitHub repository"}),"."]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Navigation List"}),e.jsx("ul",{className:"space-y-2 border border-border rounded-lg p-4 max-w-xs",children:[{href:"#",label:"Getting started",color:"primary"},{href:"#",label:"Components",color:"primary"},{href:"#",label:"Changelog",color:"info"},{href:"https://github.com",label:"Source on GitHub",color:"default",external:!0}].map(({href:o,label:s,color:t,external:d})=>e.jsx("li",{children:e.jsx(n,{href:o,color:t,external:d,size:"sm",children:s})},s))})]})]})};var b,g,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Click here",
    href: "#",
    color: "primary",
    underline: "hover",
    size: "md",
    external: false,
    disabled: false
  }
}`,...(k=(g=i.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var w,y,v;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-4">
          {colors.map(c => <Link key={c} href="#" color={c}>
              {c}
            </Link>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants (underline)
        </h3>
        <div className="flex gap-6 flex-wrap">
          <Link href="#" underline="none">No underline</Link>
          <Link href="#" underline="hover">Underline on hover</Link>
          <Link href="#" underline="always">Always underlined</Link>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex flex-wrap items-baseline gap-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => <Link key={s} href="#" color="primary" size={s}>
              Size {s}
            </Link>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="flex flex-wrap gap-4">
          <Link href="#" color="primary">Active link</Link>
          <Link href="#" color="primary" disabled>Disabled link</Link>
          <Link href="https://example.com" color="info" external>
            External link
          </Link>
          <Link href="https://example.com" color="info" external showExternalIcon={false}>
            External (no icon)
          </Link>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Icons
        </h3>
        <div className="flex flex-wrap gap-4">
          <Link href="#" color="primary" leftIcon={<FileText className="w-4 h-4" />}>
            View documentation
          </Link>
          <Link href="#" color="success" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Continue
          </Link>
          <Link href="#" color="accent" leftIcon={<Download className="w-4 h-4" />}>
            Download
          </Link>
          <Link href="https://github.com" color="default" external leftIcon={<Github className="w-4 h-4" />}>
            GitHub
          </Link>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          In Paragraph
        </h3>
        <p className="text-text-secondary text-sm max-w-md leading-relaxed">
          Read the{" "}
          <Link href="#" color="primary">
            documentation
          </Link>{" "}
          to get started, or check the{" "}
          <Link href="#" color="info">
            changelog
          </Link>{" "}
          for recent updates. Need help?{" "}
          <Link href="#" color="accent">
            Contact support
          </Link>
          . To report bugs, visit our{" "}
          <Link href="https://github.com" color="default" external>
            GitHub repository
          </Link>
          .
        </p>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Navigation List
        </h3>
        <ul className="space-y-2 border border-border rounded-lg p-4 max-w-xs">
          {[{
          href: "#",
          label: "Getting started",
          color: "primary" as const
        }, {
          href: "#",
          label: "Components",
          color: "primary" as const
        }, {
          href: "#",
          label: "Changelog",
          color: "info" as const
        }, {
          href: "https://github.com",
          label: "Source on GitHub",
          color: "default" as const,
          external: true
        }].map(({
          href,
          label,
          color,
          external
        }) => <li key={label}>
              <Link href={href} color={color} external={external} size="sm">
                {label}
              </Link>
            </li>)}
        </ul>
      </section>
    </div>
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const ee=["Playground","Showcase"];export{i as Playground,c as Showcase,ee as __namedExportsOrder,$ as default};
