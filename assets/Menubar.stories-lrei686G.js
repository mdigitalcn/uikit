import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as O,r as i}from"./index-ZH-6pyQh.js";import{u as H}from"./useMenuNavigation-Cake-z-f.js";import{P as R,a as z,b as T}from"./index-BLrHYnCp.js";import{c as u}from"./utils-_uLxnvdl.js";import{C as Z}from"./chevron-right-DY5KYsnV.js";import{C as $}from"./check-CKCh4cDT.js";import{c as C}from"./createLucideIcon-BXJdBs6C.js";import{T as V}from"./trash-2-vrMpzzku.js";import{S as U}from"./settings-D1wlBKo1.js";import{F as q}from"./file-text-DaZIRBjV.js";import{F as K}from"./folder-CemrozX2.js";import{D as B}from"./download-DHgBCDXU.js";import{C as X}from"./copy-IW0OH-Me.js";import{S as G}from"./search-DfqimKq8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";import"./useOverlayContainer-BKheCA97.js";import"./variants-CTjkuV9j.js";/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Q=C("circle",J);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],ee=C("pencil",Y);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],oe=C("rotate-ccw",te);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],re=C("rotate-cw",ne);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],ae=C("save",se);/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],ie=C("terminal",le),E="menubar_item relative flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer transition-colors last:rounded-b-sm first:rounded-t-sm",_=O.memo(({items:n,classNames:r,onItemClick:s,onClose:m})=>{const[c,d]=i.useState(null),h=i.useMemo(()=>n.some(e=>!e.separator&&e.type!=="label"&&(e.icon||e.type==="checkbox"||e.type==="radio")),[n]),f=i.useMemo(()=>n.map((e,o)=>!e.separator&&e.type!=="label"&&!e.disabled?o:-1).filter(e=>e!==-1),[n]),M=i.useCallback(e=>{const o=n[e];!o||o.children&&o.children.length>0||s(o)},[n,s]),{highlightedIndex:S,handleKeyDown:b,highlightFirst:w}=H({enabledIndices:f,isOpen:!0,onClose:m,onSelect:M});return i.useEffect(()=>{w()},[w]),i.useEffect(()=>{const e=new Set(["ArrowDown","ArrowUp","Home","End","Enter"," ","Escape","Tab"]),o=a=>{e.has(a.key)&&(b(a),a.stopImmediatePropagation())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[b]),t.jsx(t.Fragment,{children:n.map((e,o)=>{if(e.separator)return t.jsx("div",{"data-slot":"separator",className:u("menubar_separator h-px bg-border my-1 -mx-1",r==null?void 0:r.separator),role:"separator"},e.key||`separator-${o}`);if(e.type==="label")return t.jsx("div",{"data-slot":"label",className:u("menubar_label px-3 py-1.5 text-xs font-semibold text-text-secondary mx-1",r==null?void 0:r.label),role:"presentation",children:e.label},e.key);const a=e.type==="checkbox"||e.type==="radio",k=e.children&&e.children.length>0,g=S===o;return k?t.jsxs(R,{open:c===e.key,onOpenChange:l=>d(l?e.key:null),children:[t.jsx(z,{asChild:!0,children:t.jsxs("div",{"data-slot":"item",className:u(E,e.disabled?"opacity-50 cursor-not-allowed":"hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30 focus-visible:rounded-sm",g&&!e.disabled&&"bg-surface",r==null?void 0:r.item),role:"menuitem","aria-disabled":e.disabled,"aria-haspopup":"menu",tabIndex:e.disabled?-1:0,onMouseEnter:()=>!e.disabled&&d(e.key),children:[e.icon?t.jsx("span",{className:"w-4 h-4 shrink-0",children:e.icon}):h&&t.jsx("span",{className:"w-4 h-4 shrink-0"}),t.jsx("span",{className:"flex-1",children:e.label}),t.jsx(Z,{className:"w-4 h-4 ml-2 shrink-0"})]})}),t.jsx(T,{side:"right",align:"start","data-slot":"submenu",className:u("menubar_submenu min-w-(--dropdown-min-width) w-auto p-1 [--_radius:var(--radius-dropdown)] rounded-slot",r==null?void 0:r.submenu),onOpenAutoFocus:l=>l.preventDefault(),onCloseAutoFocus:l=>l.preventDefault(),children:t.jsx(_,{items:e.children,classNames:r,onItemClick:s,onClose:m})})]},e.key):t.jsxs("div",{"data-slot":"item",className:u(E,e.disabled?"opacity-50 cursor-not-allowed":"hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30 focus-visible:rounded-sm",g&&!e.disabled&&"bg-surface",a&&(r==null?void 0:r.checkboxItem),e.type==="radio"&&(r==null?void 0:r.radioItem),r==null?void 0:r.item),role:e.type==="checkbox"?"menuitemcheckbox":e.type==="radio"?"menuitemradio":"menuitem","aria-disabled":e.disabled,"aria-checked":a?e.checked:void 0,tabIndex:e.disabled?-1:0,onClick:()=>!e.disabled&&s(e),children:[a&&t.jsx("span",{className:"w-4 h-4 shrink-0",children:e.checked&&t.jsxs(t.Fragment,{children:[e.type==="checkbox"&&t.jsx($,{className:"w-4 h-4"}),e.type==="radio"&&t.jsx(Q,{className:"w-4 h-4 fill-current"})]})}),!a&&(e.icon?t.jsx("span",{className:"w-4 h-4 shrink-0",children:e.icon}):h&&t.jsx("span",{className:"w-4 h-4 shrink-0"})),t.jsx("span",{className:"flex-1",children:e.label}),e.shortcut&&t.jsx("span",{"data-slot":"shortcut",className:u("menubar_shortcut text-xs text-text-secondary ml-auto",r==null?void 0:r.shortcut),children:e.shortcut})]},e.key)})})});_.displayName="MenuItems";const p=O.memo(({menus:n,className:r,classNames:s,ref:m})=>{const[c,d]=i.useState(null),[h,f]=i.useState(!1),M=i.useCallback((e,o)=>{o||(d(a=>a===e?null:e),f(!0))},[]),S=i.useCallback((e,o)=>{o||h&&c!==null&&d(e)},[h,c]),b=i.useCallback(()=>{d(null),f(!1)},[]),w=i.useCallback(e=>{var o,a,k;e.type==="checkbox"?(o=e.onCheckedChange)==null||o.call(e,!e.checked):e.type==="radio"?(a=e.onCheckedChange)==null||a.call(e,!0):(k=e.onClick)==null||k.call(e),e.type!=="checkbox"&&e.type!=="radio"&&b()},[b]);return i.useEffect(()=>{if(!c)return;const e=o=>{var k,g;const a=n.findIndex(l=>l.key===c);if(o.key==="ArrowRight"){o.preventDefault(),o.stopImmediatePropagation();let l=(a+1)%n.length,x=0;for(;x<n.length&&((k=n[l])!=null&&k.disabled);)l=(l+1)%n.length,x++;const y=n[l];x<n.length&&y&&!y.disabled&&d(y.key)}else if(o.key==="ArrowLeft"){o.preventDefault(),o.stopImmediatePropagation();let l=a-1<0?n.length-1:a-1,x=0;for(;x<n.length&&((g=n[l])!=null&&g.disabled);)l=l-1<0?n.length-1:l-1,x++;const y=n[l];x<n.length&&y&&!y.disabled&&d(y.key)}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[c,n]),t.jsx("div",{ref:m,"data-slot":"root",className:u("menubar_root flex items-center gap-1 px-2 py-1 bg-background border-b border-border",r,s==null?void 0:s.root),role:"menubar",children:n.map(e=>t.jsxs(R,{open:c===e.key,onOpenChange:o=>{o?(d(e.key),f(!0)):b()},children:[t.jsx(z,{asChild:!0,children:t.jsx("button",{"data-slot":"trigger",className:u("menubar_trigger px-3 py-1.5 text-sm rounded-sm transition-colors",e.disabled?"opacity-50 cursor-not-allowed":"hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30 focus-visible:rounded-sm",c===e.key&&"bg-surface",s==null?void 0:s.trigger),role:"menuitem","aria-haspopup":"menu","aria-expanded":c===e.key,"aria-disabled":e.disabled,onClick:()=>M(e.key,e.disabled),onMouseEnter:()=>S(e.key,e.disabled),children:e.label})}),t.jsx(T,{side:"bottom",align:"start",sideOffset:4,"data-slot":"content",className:u("menubar_content min-w-(--dropdown-min-width) w-auto p-1 [--_radius:var(--radius-dropdown)] rounded-slot",s==null?void 0:s.content),onOpenAutoFocus:o=>o.preventDefault(),onCloseAutoFocus:o=>o.preventDefault(),onPointerDownOutside:o=>{o.target.closest('[data-slot="root"]')&&o.preventDefault()},children:t.jsx(_,{items:e.items,classNames:s,onItemClick:w,onClose:b})})]},e.key))})});p.displayName="Menubar";p.__docgenInfo={description:"",methods:[],displayName:"Menubar"};const Le={title:"Navigation/Menubar",component:p,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]}}},W=[{key:"file",label:"File",items:[{key:"new",label:"New File",shortcut:"Ctrl+N",icon:t.jsx(q,{className:"w-4 h-4"}),onClick:()=>{}},{key:"open",label:"Open...",shortcut:"Ctrl+O",icon:t.jsx(K,{className:"w-4 h-4"}),onClick:()=>{}},{key:"recent",label:"Open Recent",children:[{key:"r1",label:"project-alpha.tsx",onClick:()=>{}},{key:"r2",label:"dashboard.tsx",onClick:()=>{}},{key:"r3",label:"styles.css",onClick:()=>{}}]},{key:"sep1",label:"",separator:!0},{key:"save",label:"Save",shortcut:"Ctrl+S",icon:t.jsx(ae,{className:"w-4 h-4"}),onClick:()=>{}},{key:"save-as",label:"Save As...",shortcut:"Ctrl+Shift+S",onClick:()=>{}},{key:"sep2",label:"",separator:!0},{key:"download",label:"Download",icon:t.jsx(B,{className:"w-4 h-4"}),onClick:()=>{}},{key:"exit",label:"Exit",onClick:()=>{}}]},{key:"edit",label:"Edit",items:[{key:"undo",label:"Undo",shortcut:"Ctrl+Z",icon:t.jsx(oe,{className:"w-4 h-4"}),onClick:()=>{}},{key:"redo",label:"Redo",shortcut:"Ctrl+Shift+Z",icon:t.jsx(re,{className:"w-4 h-4"}),onClick:()=>{}},{key:"sep3",label:"",separator:!0},{key:"cut",label:"Cut",shortcut:"Ctrl+X",onClick:()=>{}},{key:"copy",label:"Copy",shortcut:"Ctrl+C",icon:t.jsx(X,{className:"w-4 h-4"}),onClick:()=>{}},{key:"paste",label:"Paste",shortcut:"Ctrl+V",onClick:()=>{}},{key:"sep4",label:"",separator:!0},{key:"find",label:"Find",shortcut:"Ctrl+F",icon:t.jsx(G,{className:"w-4 h-4"}),onClick:()=>{}},{key:"replace",label:"Replace",shortcut:"Ctrl+H",disabled:!0,onClick:()=>{}}]},{key:"view",label:"View",items:[{key:"view-label",label:"Appearance",type:"label"},{key:"zoom-in",label:"Zoom In",shortcut:"Ctrl++",onClick:()=>{}},{key:"zoom-out",label:"Zoom Out",shortcut:"Ctrl+-",onClick:()=>{}},{key:"reset-zoom",label:"Reset Zoom",shortcut:"Ctrl+0",onClick:()=>{}},{key:"sep5",label:"",separator:!0},{key:"terminal",label:"Terminal",icon:t.jsx(ie,{className:"w-4 h-4"}),onClick:()=>{}},{key:"fullscreen",label:"Full Screen",shortcut:"F11",onClick:()=>{}}]},{key:"help",label:"Help",items:[{key:"docs",label:"Documentation",onClick:()=>{}},{key:"shortcuts",label:"Keyboard Shortcuts",shortcut:"Ctrl+K",onClick:()=>{}},{key:"sep6",label:"",separator:!0},{key:"about",label:"About",onClick:()=>{}}]}],A=[{key:"products",label:"Products",items:[{key:"all",label:"All Products",onClick:()=>{}},{key:"featured",label:"Featured",onClick:()=>{}},{key:"new",label:"New Arrivals",onClick:()=>{}}]},{key:"services",label:"Services",items:[{key:"consulting",label:"Consulting",onClick:()=>{}},{key:"support",label:"Support",onClick:()=>{}}]},{key:"company",label:"Company",items:[{key:"about",label:"About Us",onClick:()=>{}},{key:"blog",label:"Blog",onClick:()=>{}},{key:"careers",label:"Careers",onClick:()=>{}}]},{key:"disabled-menu",label:"Disabled",disabled:!0,items:[]}],ce=()=>{const[n,r]=i.useState(!0),[s,m]=i.useState(!1),[c,d]=i.useState(!0),h=[{key:"view",label:"View",items:[{key:"label",label:"Editor Options",type:"label"},{key:"wordwrap",label:"Word Wrap",type:"checkbox",checked:n,onCheckedChange:r,shortcut:"Alt+Z"},{key:"linenumbers",label:"Line Numbers",type:"checkbox",checked:s,onCheckedChange:m},{key:"minimap",label:"Minimap",type:"checkbox",checked:c,onCheckedChange:d}]}];return t.jsxs("div",{children:[t.jsx(p,{menus:h}),t.jsxs("p",{className:"text-xs text-text-secondary mt-3 px-2",children:["Word Wrap: ",String(n)," | Line Numbers: ",String(s)," | Minimap: ",String(c)]})]})},v={render:()=>t.jsx(p,{menus:W})},j={render:()=>t.jsxs("div",{className:"space-y-10 max-w-3xl",children:[t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Editor Menubar"}),t.jsx(p,{menus:W})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Simple Navigation"}),t.jsx(p,{menus:A})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Checkbox Items (Controlled)"}),t.jsx(ce,{})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),t.jsx("div",{className:"space-y-4",children:["xs","sm","md","lg"].map(n=>t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-text-secondary mb-1",children:n}),t.jsx(p,{menus:A,size:n})]},n))})]}),t.jsxs("section",{children:[t.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Icons"}),t.jsx(p,{menus:[{key:"actions",label:"Actions",items:[{key:"edit",label:"Edit",icon:t.jsx(ee,{className:"w-4 h-4"}),shortcut:"Ctrl+E",onClick:()=>{}},{key:"delete",label:"Delete",icon:t.jsx(V,{className:"w-4 h-4"}),onClick:()=>{}},{key:"settings",label:"Settings",icon:t.jsx(U,{className:"w-4 h-4"}),onClick:()=>{}}]}]})]})]})};var D,I,F;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Menubar menus={editorMenus} />
}`,...(F=(I=v.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var N,P,L;j.parameters={...j.parameters,docs:{...(N=j.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Editor Menubar</h3>
        <Menubar menus={editorMenus} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Simple Navigation</h3>
        <Menubar menus={simpleMenus} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Checkbox Items (Controlled)</h3>
        <CheckboxMenuDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s}>
              <p className="text-xs text-text-secondary mb-1">{s}</p>
              <Menubar menus={simpleMenus} size={s} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Icons</h3>
        <Menubar menus={[{
        key: "actions",
        label: "Actions",
        items: [{
          key: "edit",
          label: "Edit",
          icon: <Pencil className="w-4 h-4" />,
          shortcut: "Ctrl+E",
          onClick: () => {}
        }, {
          key: "delete",
          label: "Delete",
          icon: <Trash2 className="w-4 h-4" />,
          onClick: () => {}
        }, {
          key: "settings",
          label: "Settings",
          icon: <Settings className="w-4 h-4" />,
          onClick: () => {}
        }]
      }]} />
      </section>
    </div>
}`,...(L=(P=j.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const Oe=["Playground","Showcase"];export{v as Playground,j as Showcase,Oe as __namedExportsOrder,Le as default};
