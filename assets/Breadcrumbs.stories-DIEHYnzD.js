import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as b,i as V,a as E}from"./utils-_uLxnvdl.js";import{R as i}from"./index-ZH-6pyQh.js";import{D as W}from"./index-O2sAJMea.js";import{c as q}from"./variants-CTjkuV9j.js";import{E as M}from"./ellipsis-BCji1NXI.js";import{E as R}from"./ellipsis-vertical-Bsydo1qj.js";import{C as D}from"./chevron-right-DY5KYsnV.js";import{H as C}from"./house-DCjPrFcn.js";import{c as F}from"./createLucideIcon-BXJdBs6C.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useRipple-BuuTbn0W.js";import"./useMenuNavigation-Cake-z-f.js";import"./index-BLrHYnCp.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";import"./useOverlayContainer-BKheCA97.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M22 2 2 22",key:"y4kqgn"}]],U=F("slash",O),x=i.createContext({}),A=E("",{variants:{size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{size:"md"}});function T(s,t){if(s.length<=t)return s;const r=1,a=t-r-1,c=s.slice(0,r),d=s.slice(s.length-Math.max(a,1)),l={label:"...",ellipsis:!0,ellipsisItems:s.slice(r,s.length-Math.max(a,1)).map(o=>({label:o.label,href:o.href,onClick:o.onClick}))};return[...c,l,...d]}const m=i.memo(({children:s,items:t,color:r="default",size:a="md",separator:c,maxItems:d,className:u,classNames:l})=>{const o=t!=null&&t.length?d?T(t,d):t:void 0,h=o!=null&&o.length?e.jsx(j,{children:o.map((n,_)=>{const I=_===o.length-1;return e.jsxs(i.Fragment,{children:[e.jsx(y,{children:n.ellipsis?e.jsx(S,{orientation:n.ellipsisOrientation||"horizontal",items:n.ellipsisItems||[],size:a}):I?e.jsx(v,{startSection:n.startSection,endSection:n.endSection,children:n.label}):e.jsx(N,{href:n.href||"",onClick:n.onClick,startSection:n.startSection,endSection:n.endSection,children:n.label})}),!I&&e.jsx(B,{size:a,children:c})]},_)})}):s;return e.jsx(x.Provider,{value:{color:r,size:a,classNames:l},children:e.jsx("nav",{"data-slot":"root","aria-label":"breadcrumb",className:b("breadcrumbs_root",A({size:a}),q[r],"text-slot",l==null?void 0:l.root,u),children:h})})});m.displayName="Breadcrumb";const j=i.memo(({children:s,className:t})=>{const{classNames:r}=i.useContext(x);return e.jsx("ol",{"data-slot":"list",className:b("breadcrumbs_list","flex items-center gap-1.5",r==null?void 0:r.list,t),children:s})});j.displayName="BreadcrumbList";const y=i.memo(({children:s,className:t})=>{const{classNames:r}=i.useContext(x);return e.jsx("li",{"data-slot":"item",className:b("breadcrumbs_item","inline-flex items-center gap-1.5",r==null?void 0:r.item,t),children:s})});y.displayName="BreadcrumbItem";const N=i.memo(({children:s,href:t,onClick:r,startSection:a,endSection:c,className:d})=>{const{classNames:u}=i.useContext(x),l=n=>{r&&(n.preventDefault(),r())},o=e.jsxs(e.Fragment,{children:[a&&e.jsx("span",{className:"inline-flex items-center",children:a}),s,c&&e.jsx("span",{className:"inline-flex items-center",children:c})]}),h=b("breadcrumbs_link","inline-flex items-center gap-1.5 transition-colors hover:underline cursor-pointer rounded-button","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slot focus-visible:ring-offset-2 focus-visible:ring-offset-background",u==null?void 0:u.link,d);return t?e.jsx("a",{href:t,onClick:l,"data-slot":"link",className:h,children:o}):r?e.jsx("button",{type:"button",onClick:l,"data-slot":"link",className:h,children:o}):e.jsx("span",{"data-slot":"link",className:b("breadcrumbs_link","inline-flex items-center gap-1.5",u==null?void 0:u.link,d),children:o})});N.displayName="BreadcrumbLink";const v=i.memo(({children:s,startSection:t,endSection:r,className:a})=>{const{classNames:c}=i.useContext(x);return e.jsxs("span",{"aria-current":"page","data-slot":"current",className:b("breadcrumbs_current","inline-flex items-center gap-1.5 font-medium",c==null?void 0:c.current,a),children:[t&&e.jsx("span",{className:"inline-flex items-center",children:t}),s,r&&e.jsx("span",{className:"inline-flex items-center",children:r})]})});v.displayName="BreadcrumbPage";const B=i.memo(({children:s,className:t,size:r="md"})=>{const{classNames:a}=i.useContext(x);return e.jsx("span",{"aria-hidden":"true","data-slot":"separator",className:b("breadcrumbs_separator","text-text-secondary",a==null?void 0:a.separator,t),children:s??e.jsx(D,{className:V[r]})})});B.displayName="BreadcrumbSeparator";const G=s=>{if(s.startsWith("/")||s.startsWith("#")||s.startsWith("?"))return!0;const t=["javascript:","data:","vbscript:"],r=s.toLowerCase();if(t.some(a=>r.startsWith(a)))return!1;if(typeof window<"u")try{return new URL(s,window.location.origin).origin===window.location.origin}catch{return!0}return!0},S=i.memo(({orientation:s="horizontal",items:t,children:r,className:a,size:c="md"})=>{const{classNames:d}=i.useContext(x),u=s==="horizontal"?M:R,l=!!(t!=null&&t.length||r),o=e.jsxs("span",{...l&&{role:"button","aria-label":"Show more breadcrumbs",tabIndex:0},...!l&&{"aria-hidden":!0},"data-slot":"ellipsis",className:b("breadcrumbs_ellipsis","flex items-center justify-center",l&&"cursor-pointer",d==null?void 0:d.ellipsis,a),children:[e.jsx(u,{className:V[c]}),e.jsx("span",{className:"sr-only",children:"More"})]});if(t||r){const h=(t||[]).map(n=>({label:n.label||"",value:n.label||"",onClick:n.onClick||(()=>{n.href&&G(n.href)&&(window.location.href=n.href)})}));return e.jsx(W,{items:h,children:o})}return o});S.displayName="BreadcrumbEllipsis";j.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};y.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};N.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink"};v.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};B.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};S.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis",props:{orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const xe={title:"Navigation/Breadcrumbs",component:m,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent"]},maxItems:{control:"number"}}},p=[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Category",href:"#"},{label:"Item Name"}],f={args:{items:p,size:"md"}},g={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsx("div",{className:"space-y-3",children:["xs","sm","md","lg"].map(s=>e.jsx(m,{items:p,size:s},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Home Icon"}),e.jsx(m,{items:[{label:"Home",href:"#",startSection:e.jsx(C,{className:"w-3.5 h-3.5"})},...p.slice(1)]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Custom Separators"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(m,{items:p,separator:"/"}),e.jsx(m,{items:p,separator:">"}),e.jsx(m,{items:p,separator:e.jsx(U,{className:"w-3 h-3"})}),e.jsx(m,{items:p,separator:e.jsx(D,{className:"w-3.5 h-3.5"})})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Max Items (with ellipsis)"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(m,{items:[...p,{label:"Sub",href:"#"},{label:"Deep Page"}],maxItems:3}),e.jsx(m,{items:[...p,{label:"Sub",href:"#"},{label:"Deep Page"}],maxItems:4})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Icons per Item"}),e.jsx(m,{items:[{label:"Home",href:"#",startSection:e.jsx(C,{className:"w-3.5 h-3.5"})},{label:"Dashboard",href:"#"},{label:"Settings"}]})]})]})};var k,w,z;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items,
    size: "md"
  }
}`,...(z=(w=f.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var H,P,L;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map(s => <Breadcrumbs key={s} items={items} size={s} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Home Icon</h3>
        <Breadcrumbs items={[{
        label: "Home",
        href: "#",
        startSection: <Home className="w-3.5 h-3.5" />
      }, ...items.slice(1)]} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Custom Separators</h3>
        <div className="space-y-3">
          <Breadcrumbs items={items} separator="/" />
          <Breadcrumbs items={items} separator=">" />
          <Breadcrumbs items={items} separator={<Slash className="w-3 h-3" />} />
          <Breadcrumbs items={items} separator={<ChevronRight className="w-3.5 h-3.5" />} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Max Items (with ellipsis)</h3>
        <div className="space-y-3">
          <Breadcrumbs items={[...items, {
          label: "Sub",
          href: "#"
        }, {
          label: "Deep Page"
        }]} maxItems={3} />
          <Breadcrumbs items={[...items, {
          label: "Sub",
          href: "#"
        }, {
          label: "Deep Page"
        }]} maxItems={4} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons per Item</h3>
        <Breadcrumbs items={[{
        label: "Home",
        href: "#",
        startSection: <Home className="w-3.5 h-3.5" />
      }, {
        label: "Dashboard",
        href: "#"
      }, {
        label: "Settings"
      }]} />
      </section>
    </div>
}`,...(L=(P=g.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const he=["Playground","Showcase"];export{f as Playground,g as Showcase,he as __namedExportsOrder,xe as default};
