import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as L,A as X,P,C as F,T as Y}from"./index-lJNWladF.js";import{R as K,r}from"./index-ZH-6pyQh.js";import{u as W,R as J}from"./useRipple-BuuTbn0W.js";import{u as U}from"./useMenuNavigation-Cake-z-f.js";import{c as u}from"./utils-_uLxnvdl.js";import{c as G}from"./variants-CTjkuV9j.js";import{C as Q}from"./chevron-right-DY5KYsnV.js";import{S as N}from"./square-pen-BpIz_lVT.js";import{C as Z}from"./copy-IW0OH-Me.js";import{S as T,F as ee}from"./share-C03v9CGB.js";import{D as V}from"./download-DHgBCDXU.js";import{T as E}from"./trash-2-vrMpzzku.js";import{c as $}from"./createLucideIcon-BXJdBs6C.js";import{E as te}from"./external-link-ITmxNWuX.js";import{S as ne}from"./star-CXKHNDnr.js";import{A as se}from"./archive-DLVCeeUg.js";import{E as ae}from"./ellipsis-BCji1NXI.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],re=$("folder-open",oe);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],le=$("link",ie),H=({children:t,disabled:l,className:m,...a})=>{const{ripples:s,onPointerDown:d,onAnimationEnd:p}=W(!l);return e.jsxs("div",{className:u(m,"relative overflow-hidden"),onPointerDown:d,...a,children:[t,e.jsx(J,{ripples:s,onAnimationEnd:p})]})},B=({item:t,onClose:l,level:m,classNames:a,color:s="default",openDelay:d=200,closeDelay:p=300})=>{const[j,y]=r.useState(!1),b=r.useRef(void 0),h=r.useRef(void 0),k=r.useCallback(()=>{t.disabled||(h.current&&clearTimeout(h.current),b.current=setTimeout(()=>{y(!0)},d))},[t.disabled,d]),g=r.useCallback(()=>{b.current&&clearTimeout(b.current),h.current=setTimeout(()=>{y(!1)},p)},[p]),C=r.useCallback(f=>{var v;!t.disabled&&!t.children&&(f.stopPropagation(),(v=t.onClick)==null||v.call(t),l())},[t,l]);return r.useEffect(()=>()=>{b.current&&clearTimeout(b.current),h.current&&clearTimeout(h.current)},[]),e.jsxs(L,{open:j,onOpenChange:y,children:[e.jsx(Y,{asChild:!0,children:e.jsx("div",{className:"relative",onMouseEnter:k,onMouseLeave:g,role:"menuitem","aria-haspopup":"true","aria-expanded":j,"aria-disabled":t.disabled,tabIndex:-1,"data-slot":"submenu-trigger",children:e.jsxs(H,{disabled:!!t.disabled,className:u("contextMenu_item flex items-center justify-between gap-3 px-3 py-2 text-sm cursor-pointer rounded-button transition-colors mx-1",t.disabled?"opacity-50 cursor-not-allowed":"hover:bg-slot-10 hover:text-slot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slot/30 focus-visible:rounded-button",a==null?void 0:a.item),onClick:C,children:[e.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[t.icon&&e.jsx("span",{className:u("contextMenu_itemIcon shrink-0 w-4 h-4",a==null?void 0:a.itemIcon),children:t.icon}),e.jsx("span",{className:u("contextMenu_itemLabel",a==null?void 0:a.itemLabel),children:t.label})]}),t.children&&e.jsx(Q,{className:"w-4 h-4 text-text-secondary shrink-0"}),t.shortcut&&e.jsx("span",{className:"text-xs text-text-secondary shrink-0",children:t.shortcut})]})})}),t.children&&e.jsx(P,{children:e.jsx(F,{side:"right",align:"start",sideOffset:4,alignOffset:-4,onMouseEnter:k,onMouseLeave:g,className:u("data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","data-[side=bottom]:slide-in-from-top-2","data-[side=left]:slide-in-from-right-2","data-[side=right]:slide-in-from-left-2","data-[side=top]:slide-in-from-bottom-2","z-(--z-popover)",a==null?void 0:a.submenu),children:e.jsx(S,{items:t.children,onClose:l,level:m+1,classNames:a,color:s})})})]})};B.displayName="ContextMenuSubMenu";const S=({items:t,onClose:l,level:m=0,className:a,classNames:s,style:d,color:p="default",submenuOpenDelay:j,submenuCloseDelay:y,...b})=>{const h=r.useRef(null),k=r.useMemo(()=>t.map((n,c)=>!n.separator&&!n.disabled?c:-1).filter(n=>n!==-1),[t]),g=r.useCallback(n=>{var i;const c=t[n];c&&!c.children&&((i=c.onClick)==null||i.call(c),l())},[t,l]),{highlightedIndex:C,handleKeyDown:f,highlightFirst:v}=U({enabledIndices:k,isOpen:!0,onClose:l,onSelect:g});return r.useEffect(()=>{v()},[v]),r.useEffect(()=>{const n=new Set(["ArrowDown","ArrowUp","ArrowLeft","Home","End","Enter"," ","Escape","Tab"]),c=i=>{if(i.key==="ArrowLeft"&&m>0){i.preventDefault(),i.stopImmediatePropagation(),l();return}n.has(i.key)&&(f(i),i.stopImmediatePropagation())};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[f,m,l]),e.jsx("div",{ref:h,className:u("contextMenu_content min-w-(--dropdown-min-width) [--_radius:var(--radius-dropdown)] rounded-slot border border-border bg-background [--_shadow:var(--shadow-lg)] shadow-size-slot py-1",G[p],m===0&&"animate-in fade-in-0 zoom-in-95",a,s==null?void 0:s.content),style:d,role:"menu","aria-orientation":"vertical",tabIndex:-1,...b,children:t.map((n,c)=>{if(n.separator)return e.jsx("div",{className:u("contextMenu_divider h-px bg-border my-1",s==null?void 0:s.divider),role:"separator","aria-orientation":"horizontal","data-slot":"separator"},`separator-${c}`);if(n.children)return e.jsx(B,{item:n,onClose:l,level:m,classNames:s,color:p,openDelay:j,closeDelay:y},n.key);const i=C===c;return e.jsxs(H,{disabled:!!n.disabled,className:u("contextMenu_item flex items-center justify-between gap-3 px-3 py-2 text-sm cursor-pointer rounded-button transition-colors mx-1",n.disabled?"opacity-50 cursor-not-allowed":"hover:bg-slot-10 hover:text-slot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slot/30 focus-visible:rounded-button",i&&!n.disabled&&"bg-slot-10 text-slot",s==null?void 0:s.item),onClick:()=>{var o;n.disabled||((o=n.onClick)==null||o.call(n),l())},role:"menuitem",tabIndex:-1,"aria-disabled":n.disabled,"data-slot":"item",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[n.icon&&e.jsx("span",{className:u("contextMenu_itemIcon shrink-0 w-4 h-4",s==null?void 0:s.itemIcon),"data-slot":"item-icon",children:n.icon}),e.jsx("span",{className:u("contextMenu_itemLabel",s==null?void 0:s.itemLabel),"data-slot":"item-label",children:n.label})]}),n.shortcut&&e.jsx("span",{className:"text-xs text-text-secondary shrink-0","data-slot":"shortcut",children:n.shortcut})]},n.key)})})};S.displayName="ContextMenuContent";const x=K.memo(({children:t,items:l,className:m,classNames:a,disabled:s=!1,onOpenChange:d,open:p,color:j="default",submenuOpenDelay:y,submenuCloseDelay:b})=>{const[h,k]=r.useState(!1),[g,C]=r.useState(null),f=p!==void 0,v=f?p:h,n=r.useCallback(o=>{f||k(o),d==null||d(o)},[f,d]),c=r.useCallback(o=>{s||(o.preventDefault(),o.stopPropagation(),C({width:0,height:0,x:o.clientX,y:o.clientY,top:o.clientY,left:o.clientX,right:o.clientX,bottom:o.clientY,toJSON:()=>{}}),n(!0))},[s,n]),i=r.useCallback(()=>{n(!1),C(null)},[n]);return e.jsxs(L,{open:v,onOpenChange:n,children:[g&&e.jsx(X,{virtualRef:{current:{getBoundingClientRect:()=>g}}}),e.jsx("div",{onContextMenu:c,className:u("contextMenu_root inline-block",m,a==null?void 0:a.root),role:"presentation","data-slot":"root",children:t}),e.jsx(P,{children:e.jsx(F,{side:"bottom",align:"start",sideOffset:0,alignOffset:0,onOpenAutoFocus:o=>o.preventDefault(),onCloseAutoFocus:o=>o.preventDefault(),onEscapeKeyDown:i,onPointerDownOutside:i,onInteractOutside:i,className:"z-[var(--z-popover)]",children:e.jsx(S,{items:l,onClose:i,classNames:a,color:j,submenuOpenDelay:y,submenuCloseDelay:b})})})]})});x.displayName="ContextMenu";x.__docgenInfo={description:"ContextMenu component based on Popover",methods:[],displayName:"ContextMenu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"ContextMenuItem"}],raw:"ContextMenuItem[]"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:'@default "md"'},className:{required:!1,tsType:{name:"string"},description:""},classNames:{required:!1,tsType:{name:"ContextMenuClassNames"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'primary'
| 'secondary'
| 'accent'
| 'success'
| 'error'
| 'warning'
| 'info'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:'"default"',computed:!1}},submenuOpenDelay:{required:!1,tsType:{name:"number"},description:"Delay (ms) before submenu opens on hover @default 200"},submenuCloseDelay:{required:!1,tsType:{name:"number"},description:"Delay (ms) before submenu closes on mouse leave @default 300"}}};S.__docgenInfo={description:"Context menu content component",methods:[],displayName:"ContextMenuContent",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ContextMenuItem"}],raw:"ContextMenuItem[]"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},level:{required:!1,tsType:{name:"number"},description:"Nesting level (for styling)",defaultValue:{value:"0",computed:!1}},classNames:{required:!1,tsType:{name:"ContextMenuClassNames"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'primary'
| 'secondary'
| 'accent'
| 'success'
| 'error'
| 'warning'
| 'info'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:'"default"',computed:!1}},submenuOpenDelay:{required:!1,tsType:{name:"number"},description:"Delay (ms) before submenu opens on hover @default 200"},submenuCloseDelay:{required:!1,tsType:{name:"number"},description:"Delay (ms) before submenu closes on mouse leave @default 300"}}};const Oe={title:"Navigation/ContextMenu",component:x,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},disabled:{control:"boolean"},submenuOpenDelay:{control:"number"},submenuCloseDelay:{control:"number"}}},M=[{key:"edit",label:"Edit",icon:e.jsx(N,{className:"w-4 h-4"}),shortcut:"Cmd E"},{key:"copy",label:"Copy",icon:e.jsx(Z,{className:"w-4 h-4"}),shortcut:"Cmd C"},{key:"share",label:"Share",icon:e.jsx(T,{className:"w-4 h-4"})},{key:"download",label:"Download",icon:e.jsx(V,{className:"w-4 h-4"})},{key:"sep1",separator:!0},{key:"delete",label:"Delete",icon:e.jsx(E,{className:"w-4 h-4"})}],ce=[{key:"open",label:"Open",icon:e.jsx(re,{className:"w-4 h-4"})},{key:"open-new",label:"Open in new tab",icon:e.jsx(te,{className:"w-4 h-4"})},{key:"share",label:"Share",icon:e.jsx(T,{className:"w-4 h-4"}),children:[{key:"copy-link",label:"Copy link",icon:e.jsx(le,{className:"w-4 h-4"}),shortcut:"Cmd Shift C"},{key:"email",label:"Send via email",icon:e.jsx(T,{className:"w-4 h-4"})},{key:"export",label:"Export",icon:e.jsx(V,{className:"w-4 h-4"})}]},{key:"sep1",separator:!0},{key:"rename",label:"Rename",icon:e.jsx(N,{className:"w-4 h-4"})},{key:"star",label:"Add to favourites",icon:e.jsx(ne,{className:"w-4 h-4"})},{key:"archive",label:"Archive",icon:e.jsx(se,{className:"w-4 h-4"})},{key:"sep2",separator:!0},{key:"delete",label:"Delete",icon:e.jsx(E,{className:"w-4 h-4"})}],de=[{key:"edit",label:"Edit",icon:e.jsx(N,{className:"w-4 h-4"})},{key:"copy",label:"Copy (disabled)",icon:e.jsx(Z,{className:"w-4 h-4"}),disabled:!0},{key:"paste",label:"Paste (disabled)",icon:e.jsx(ae,{className:"w-4 h-4"}),disabled:!0},{key:"sep1",separator:!0},{key:"flag",label:"Flag for review",icon:e.jsx(ee,{className:"w-4 h-4"})},{key:"sep2",separator:!0},{key:"delete",label:"Delete",icon:e.jsx(E,{className:"w-4 h-4"})}],w=({label:t})=>e.jsxs("div",{className:"border-2 border-dashed border-border rounded-lg p-10 text-center text-text-secondary text-sm select-none cursor-context-menu hover:bg-surface transition-colors",children:["Right-click here — ",t]}),I={args:{size:"md",color:"default",disabled:!1},render:t=>e.jsx(x,{...t,items:M,children:e.jsx(w,{label:"basic context menu"})})},D={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Basic — Icons and Shortcuts"}),e.jsx(x,{items:M,children:e.jsx(w,{label:"edit / copy / share / download / delete"})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Nested Submenu"}),e.jsx(x,{items:ce,children:e.jsx(w,{label:"file actions with Share submenu"})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Disabled Items"}),e.jsx(x,{items:de,children:e.jsx(w,{label:"some items are disabled"})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:["default","primary","accent","success"].map(t=>e.jsx(x,{items:M.slice(0,4),color:t,children:e.jsx(w,{label:`color: ${t}`})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:["xs","sm","md","lg"].map(t=>e.jsx(x,{items:M.slice(0,3),size:t,children:e.jsx(w,{label:`size: ${t}`})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States: Disabled"}),e.jsx(x,{items:M,disabled:!0,children:e.jsx(w,{label:"context menu disabled — right-click does nothing"})})]})]})};var R,q,_;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: "md",
    color: "default",
    disabled: false
  },
  render: args => <ContextMenu {...args} items={basicItems}>
      <Zone label="basic context menu" />
    </ContextMenu>
}`,...(_=(q=I.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var z,O,A;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Basic — Icons and Shortcuts
        </h3>
        <ContextMenu items={basicItems}>
          <Zone label="edit / copy / share / download / delete" />
        </ContextMenu>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Nested Submenu
        </h3>
        <ContextMenu items={fileItems}>
          <Zone label="file actions with Share submenu" />
        </ContextMenu>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Disabled Items
        </h3>
        <ContextMenu items={withDisabledItems}>
          <Zone label="some items are disabled" />
        </ContextMenu>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {(["default", "primary", "accent", "success"] as const).map(c => <ContextMenu key={c} items={basicItems.slice(0, 4)} color={c}>
              <Zone label={\`color: \${c}\`} />
            </ContextMenu>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => <ContextMenu key={s} items={basicItems.slice(0, 3)} size={s}>
              <Zone label={\`size: \${s}\`} />
            </ContextMenu>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States: Disabled
        </h3>
        <ContextMenu items={basicItems} disabled>
          <Zone label="context menu disabled — right-click does nothing" />
        </ContextMenu>
      </section>
    </div>
}`,...(A=(O=D.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const Ae=["Playground","Showcase"];export{I as Playground,D as Showcase,Ae as __namedExportsOrder,Oe as default};
