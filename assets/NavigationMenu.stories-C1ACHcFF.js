import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as m,a as x}from"./utils-_uLxnvdl.js";import{R as i}from"./index-ZH-6pyQh.js";import{c as F}from"./variants-CTjkuV9j.js";import{C as T}from"./chevron-down-D1qmGosc.js";import{H as I}from"./house-DCjPrFcn.js";import{S as P}from"./star-CXKHNDnr.js";import{U as B}from"./users-CmrXRWI9.js";import{c as _}from"./createLucideIcon-BXJdBs6C.js";import{Z as K}from"./zap-Bp22WUqo.js";import{S as E}from"./settings-D1wlBKo1.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],U=_("book-open",W);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],L=_("layout-dashboard",Z),q=x("navigationMenu_root",{variants:{orientation:{horizontal:"flex flex-row",vertical:"flex flex-col"}},defaultVariants:{orientation:"horizontal"}}),G=x("navigationMenu_list flex items-center gap-1 relative",{variants:{orientation:{horizontal:"flex-row",vertical:"flex-col"}},defaultVariants:{orientation:"horizontal"}}),O=x("navigationMenu_item relative",{variants:{}}),$=x("navigationMenu_trigger inline-flex items-center justify-center gap-2 [--_radius:var(--radius-button)] rounded-slot cursor-pointer px-4 py-2 text-sm font-medium transition-colors hover:bg-surface focus:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slot focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-surface",{variants:{}}),w=x("navigationMenu_link inline-flex items-center justify-center gap-2 [--_radius:var(--radius-button)] rounded-slot px-4 py-2 text-sm font-medium transition-colors hover:bg-surface focus:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slot focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",{variants:{}}),J=x("navigationMenu_content z-(--z-popover) absolute w-auto min-w-(--navigation-menu-content-min-width) [--_radius:var(--radius-dropdown)] rounded-slot border border-border bg-background p-4 [--_shadow:var(--shadow-lg)] shadow-size-slot [--_duration:var(--duration-enter)] data-[state=closed]:[--_duration:var(--duration-exit)] duration-slot data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",{variants:{orientation:{horizontal:"top-full left-0 mt-1 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2",vertical:"left-full top-0 ml-1 data-[state=closed]:slide-out-to-left-2 data-[state=open]:slide-in-from-left-2"}},defaultVariants:{orientation:"horizontal"}}),V=i.memo(({children:n,isOpen:s,orientation:o="horizontal",className:u})=>e.jsx("div",{"data-slot":"content","data-state":s?"open":"closed",className:m(J({orientation:o}),!s&&"hidden",u),role:"menu",children:e.jsx("div",{className:"grid gap-3",children:n.map(t=>e.jsx(R,{item:t},t.key))})}));V.displayName="NavigationMenuContent";const R=i.memo(({item:n})=>{const s=u=>{if(n.disabled){u.preventDefault();return}n.onClick&&(u.preventDefault(),n.onClick())},o=e.jsxs("div",{className:"flex items-start gap-3 rounded-card p-3 hover:bg-surface transition-colors",children:[n.icon&&e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-button bg-surface",children:n.icon}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-sm font-medium leading-none",children:n.label}),n.description&&e.jsx("p",{className:"text-sm leading-snug text-text-secondary",children:n.description})]})]});return n.href&&!n.disabled?e.jsx("a",{href:n.href,onClick:s,className:m("block",n.disabled&&"pointer-events-none opacity-50"),role:"menuitem","aria-disabled":n.disabled,children:o}):e.jsx("button",{type:"button",onClick:s,disabled:n.disabled,className:"block w-full text-left disabled:pointer-events-none disabled:opacity-50",role:"menuitem","aria-disabled":n.disabled,children:o})});R.displayName="NavigationMenuChildLink";const A=i.memo(({item:n,onOpenChange:s,isOpen:o,orientation:u="horizontal",classNames:t,closeDelay:c=150})=>{const h=n.children&&n.children.length>0,p=i.useRef(void 0),f=()=>{h&&!n.disabled&&(p.current&&clearTimeout(p.current),s(n.key,!0))},b=()=>{h&&!n.disabled&&(p.current=setTimeout(()=>{s(n.key,!1)},c))},y=r=>{if(n.disabled){r.preventDefault();return}h?(r.preventDefault(),s(n.key,!o)):n.onClick&&(r.preventDefault(),n.onClick())},a=r=>{n.disabled||(r.key==="Enter"||r.key===" "?(r.preventDefault(),h?s(n.key,!o):n.onClick&&n.onClick()):r.key==="Escape"&&o&&(r.preventDefault(),s(n.key,!1)))};i.useEffect(()=>()=>{p.current&&clearTimeout(p.current)},[]);const d=e.jsxs(e.Fragment,{children:[n.icon&&e.jsx("span",{className:"shrink-0",children:n.icon}),e.jsx("span",{children:n.label}),h&&e.jsx(T,{className:m("h-4 w-4 shrink-0 transition-transform",o&&"rotate-180"),"aria-hidden":"true"})]});return e.jsx("li",{"data-slot":"item",className:m(O(),t==null?void 0:t.item),onMouseEnter:f,onMouseLeave:b,role:"none",children:h?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button","data-slot":"trigger","data-state":o?"open":"closed",className:m($(),t==null?void 0:t.trigger),onClick:y,onKeyDown:a,disabled:n.disabled,"aria-haspopup":"true","aria-expanded":o,role:"menuitem",children:d}),e.jsx(V,{children:n.children,isOpen:o,orientation:u,className:t==null?void 0:t.content})]}):n.href&&!n.disabled?e.jsx("a",{href:n.href,"data-slot":"link",className:m(w(),t==null?void 0:t.link,n.disabled&&"pointer-events-none opacity-50"),onClick:y,onKeyDown:a,role:"menuitem","aria-disabled":n.disabled,children:d}):e.jsx("button",{type:"button","data-slot":"link",className:m(w(),t==null?void 0:t.link),onClick:y,onKeyDown:a,disabled:n.disabled,role:"menuitem",children:d})})});A.displayName="NavigationMenuItemComponent";const l=i.memo(({items:n,orientation:s="horizontal",closeDelay:o,color:u="primary",className:t,classNames:c,ref:h})=>{const[p,f]=i.useState(new Set),b=i.useRef(null);i.useImperativeHandle(h,()=>b.current);const y=i.useCallback((a,d)=>{f(d?new Set([a]):r=>{const j=new Set(r);return j.delete(a),j})},[]);return i.useEffect(()=>{const a=d=>{b.current&&!b.current.contains(d.target)&&f(new Set)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]),i.useEffect(()=>{const a=d=>{d.key==="Escape"&&f(new Set)};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[]),e.jsx("nav",{ref:b,"data-slot":"root",className:m(q({orientation:s}),F[u],t,c==null?void 0:c.root),role:"navigation","aria-label":"Main navigation",children:e.jsx("ul",{"data-slot":"list",className:m(G({orientation:s}),c==null?void 0:c.list),role:"menubar",children:n.map(a=>e.jsx(A,{item:a,onOpenChange:y,isOpen:p.has(a.key),orientation:s,classNames:c,closeDelay:o},a.key))})})});l.displayName="NavigationMenu";l.__docgenInfo={description:"",methods:[],displayName:"NavigationMenu",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},color:{defaultValue:{value:'"primary"',computed:!1},required:!1}}};const ce={title:"Navigation/NavigationMenu",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["primary","secondary","accent","success","error","warning","info"]},orientation:{control:"select",options:["horizontal","vertical"]},closeDelay:{control:"number"}}},k=[{key:"home",label:"Home",href:"#",icon:e.jsx(I,{className:"w-4 h-4"})},{key:"dashboard",label:"Dashboard",href:"#",icon:e.jsx(L,{className:"w-4 h-4"})},{key:"settings",label:"Settings",href:"#",icon:e.jsx(E,{className:"w-4 h-4"})}],H=[{key:"home",label:"Home",href:"#"},{key:"products",label:"Products",children:[{key:"ui-kit",label:"UI Kit",description:"76+ production-ready React components",href:"#"},{key:"widgets",label:"Widgets",description:"Composed widget patterns for common use cases",href:"#"},{key:"templates",label:"Templates",description:"Full project starter templates",href:"#"}]},{key:"docs",label:"Documentation",children:[{key:"getting-started",label:"Getting Started",description:"Install and configure the design system",href:"#"},{key:"components",label:"Components",description:"Browse all available components",href:"#"},{key:"theming",label:"Theming",description:"Customize colors, sizes, and shapes",href:"#"},{key:"changelog",label:"Changelog",description:"Recent updates and version history",href:"#"}]},{key:"pricing",label:"Pricing",href:"#"}],v={args:{items:H,size:"md",color:"primary",orientation:"horizontal"}},g={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Simple Links"}),e.jsx(l,{items:k})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Dropdowns (Hover)"}),e.jsx(l,{items:H})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsx("div",{className:"space-y-4",children:["xs","sm","md","lg"].map(n=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-6",children:n}),e.jsx(l,{items:k,size:n})]},n))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"space-y-4",children:["primary","secondary","accent","info"].map(n=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-20 capitalize",children:n}),e.jsx(l,{items:k,color:n})]},n))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Vertical Orientation"}),e.jsx("div",{className:"w-48",children:e.jsx(l,{items:[{key:"home",label:"Home",href:"#",icon:e.jsx(I,{className:"w-4 h-4"})},{key:"features",label:"Features",children:[{key:"analytics",label:"Analytics",href:"#"},{key:"automation",label:"Automation",href:"#"}]},{key:"pricing",label:"Pricing",href:"#",icon:e.jsx(P,{className:"w-4 h-4"})},{key:"team",label:"Team",href:"#",icon:e.jsx(B,{className:"w-4 h-4"})}],orientation:"vertical"})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"App Navigation (Realistic)"}),e.jsx("div",{className:"border border-border rounded-lg px-4 py-2",children:e.jsx(l,{items:[{key:"dashboard",label:"Dashboard",href:"#",icon:e.jsx(L,{className:"w-4 h-4"})},{key:"components",label:"Components",children:[{key:"buttons",label:"Buttons",description:"All button variants",href:"#",icon:e.jsx(K,{className:"w-4 h-4"})},{key:"forms",label:"Forms",description:"Input, select, checkbox and more",href:"#",icon:e.jsx(U,{className:"w-4 h-4"})},{key:"overlays",label:"Overlays",description:"Modal, drawer, popover",href:"#"}]},{key:"resources",label:"Resources",children:[{key:"docs",label:"Documentation",description:"Full API reference",href:"#"},{key:"examples",label:"Examples",description:"Live code examples",href:"#"}]},{key:"settings",label:"Settings",href:"#",icon:e.jsx(E,{className:"w-4 h-4"})}]})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Disabled Items"}),e.jsx(l,{items:[{key:"home",label:"Home",href:"#"},{key:"active",label:"Active",href:"#"},{key:"disabled",label:"Disabled",href:"#",disabled:!0},{key:"beta",label:"Beta (disabled)",href:"#",disabled:!0}]})]})]})};var N,M,C;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: navItems,
    size: "md",
    color: "primary",
    orientation: "horizontal"
  }
}`,...(C=(M=v.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var z,D,S;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Simple Links</h3>
        <NavigationMenu items={simpleItems} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Dropdowns (Hover)</h3>
        <NavigationMenu items={navItems} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map(size => <div key={size} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-6">{size}</span>
              <NavigationMenu items={simpleItems} size={size} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-4">
          {(["primary", "secondary", "accent", "info"] as const).map(color => <div key={color} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-20 capitalize">{color}</span>
              <NavigationMenu items={simpleItems} color={color} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Vertical Orientation</h3>
        <div className="w-48">
          <NavigationMenu items={[{
          key: "home",
          label: "Home",
          href: "#",
          icon: <Home className="w-4 h-4" />
        }, {
          key: "features",
          label: "Features",
          children: [{
            key: "analytics",
            label: "Analytics",
            href: "#"
          }, {
            key: "automation",
            label: "Automation",
            href: "#"
          }]
        }, {
          key: "pricing",
          label: "Pricing",
          href: "#",
          icon: <Star className="w-4 h-4" />
        }, {
          key: "team",
          label: "Team",
          href: "#",
          icon: <Users className="w-4 h-4" />
        }]} orientation="vertical" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">App Navigation (Realistic)</h3>
        <div className="border border-border rounded-lg px-4 py-2">
          <NavigationMenu items={[{
          key: "dashboard",
          label: "Dashboard",
          href: "#",
          icon: <LayoutDashboard className="w-4 h-4" />
        }, {
          key: "components",
          label: "Components",
          children: [{
            key: "buttons",
            label: "Buttons",
            description: "All button variants",
            href: "#",
            icon: <Zap className="w-4 h-4" />
          }, {
            key: "forms",
            label: "Forms",
            description: "Input, select, checkbox and more",
            href: "#",
            icon: <BookOpen className="w-4 h-4" />
          }, {
            key: "overlays",
            label: "Overlays",
            description: "Modal, drawer, popover",
            href: "#"
          }]
        }, {
          key: "resources",
          label: "Resources",
          children: [{
            key: "docs",
            label: "Documentation",
            description: "Full API reference",
            href: "#"
          }, {
            key: "examples",
            label: "Examples",
            description: "Live code examples",
            href: "#"
          }]
        }, {
          key: "settings",
          label: "Settings",
          href: "#",
          icon: <Settings className="w-4 h-4" />
        }]} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Disabled Items</h3>
        <NavigationMenu items={[{
        key: "home",
        label: "Home",
        href: "#"
      }, {
        key: "active",
        label: "Active",
        href: "#"
      }, {
        key: "disabled",
        label: "Disabled",
        href: "#",
        disabled: true
      }, {
        key: "beta",
        label: "Beta (disabled)",
        href: "#",
        disabled: true
      }]} />
      </section>
    </div>
}`,...(S=(D=g.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const de=["Playground","Showcase"];export{v as Playground,g as Showcase,de as __namedExportsOrder,ce as default};
