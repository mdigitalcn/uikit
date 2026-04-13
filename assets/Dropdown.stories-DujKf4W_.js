import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as n}from"./index-O2sAJMea.js";import{B as s}from"./index-Cw7T_5ox.js";import{S as b}from"./square-pen-BpIz_lVT.js";import{C as f}from"./copy-IW0OH-Me.js";import{S as w,F as v}from"./share-C03v9CGB.js";import{A as g}from"./archive-DLVCeeUg.js";import{D as j}from"./download-DHgBCDXU.js";import{T as h}from"./trash-2-vrMpzzku.js";import{S as N}from"./star-CXKHNDnr.js";import{S as y}from"./settings-D1wlBKo1.js";import"./utils-_uLxnvdl.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useRipple-BuuTbn0W.js";import"./useMenuNavigation-Cake-z-f.js";import"./index-BLrHYnCp.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";import"./useOverlayContainer-BKheCA97.js";import"./variants-CTjkuV9j.js";import"./index-ZW2Bszwo.js";import"./index-CF05pSQ2.js";import"./createLucideIcon-BXJdBs6C.js";const $={title:"Navigation/Dropdown",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},position:{control:"select",options:["left","right"]},disabled:{control:"boolean"},hover:{control:"boolean"},fullWidth:{control:"boolean"}}},o=[{label:"Edit",value:"edit",icon:e.jsx(b,{className:"w-4 h-4"})},{label:"Copy",value:"copy",icon:e.jsx(f,{className:"w-4 h-4"})},{label:"Share",value:"share",icon:e.jsx(w,{className:"w-4 h-4"})},{label:"Archive",value:"archive",icon:e.jsx(g,{className:"w-4 h-4"})},{label:"Download",value:"download",icon:e.jsx(j,{className:"w-4 h-4"})},{label:"Delete",value:"delete",icon:e.jsx(h,{className:"w-4 h-4"}),danger:!0}],r={args:{items:o,size:"md",color:"default",position:"left",disabled:!1,hover:!1},render:t=>e.jsx("div",{className:"p-8",children:e.jsx(n,{...t,children:e.jsx(s,{variant:"outline",children:"Actions"})})})},i={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(n,{items:o,children:e.jsx(s,{children:"With icons"})}),e.jsx(n,{items:o.map(({icon:t,...a})=>a),children:e.jsx(s,{variant:"outline",children:"Without icons"})}),e.jsx(n,{items:o,color:"primary",children:e.jsx(s,{variant:"soft",children:"Primary color"})})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap items-center gap-3",children:["xs","sm","md","lg"].map(t=>e.jsx(n,{items:o,size:t,children:e.jsxs(s,{size:t,variant:"outline",children:["Size ",t]})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:["default","primary","secondary","accent"].map(t=>e.jsx(n,{items:o,color:t,children:e.jsx(s,{variant:"outline",size:"sm",children:t})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(n,{items:[...o.slice(0,2),{label:"Restricted",value:"restricted",disabled:!0,icon:e.jsx(v,{className:"w-4 h-4"})},o[5]],children:e.jsx(s,{variant:"outline",children:"With disabled item"})}),e.jsx(n,{items:o,hover:!0,children:e.jsx(s,{variant:"outline",children:"Hover trigger"})}),e.jsx(n,{items:o,disabled:!0,children:e.jsx(s,{variant:"outline",disabled:!0,children:"Disabled"})})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Position"}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(n,{items:o,position:"left",children:e.jsx(s,{variant:"outline",children:"Left aligned"})}),e.jsx(n,{items:o,position:"right",children:e.jsx(s,{variant:"outline",children:"Right aligned"})})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Custom Render"}),e.jsx(n,{render:({close:t})=>e.jsxs("div",{className:"p-3 space-y-2 min-w-48",children:[e.jsx("p",{className:"text-xs font-semibold text-text-secondary uppercase tracking-wider px-1",children:"Quick actions"}),[{icon:e.jsx(N,{className:"w-4 h-4"}),label:"Add to favorites"},{icon:e.jsx(y,{className:"w-4 h-4"}),label:"Settings"}].map(({icon:a,label:l})=>e.jsxs("button",{type:"button",className:"flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-text-primary hover:bg-surface transition-colors",onClick:t,children:[a,l]},l)),e.jsx("div",{className:"border-t border-border pt-2",children:e.jsxs("button",{type:"button",className:"flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-error hover:bg-error/10 transition-colors",onClick:t,children:[e.jsx(h,{className:"w-4 h-4"}),"Delete"]})})]}),children:e.jsx(s,{variant:"outline",children:"Custom render"})})]})]})};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: baseItems,
    size: "md",
    color: "default",
    position: "left",
    disabled: false,
    hover: false
  },
  render: args => <div className="p-8">
      <Dropdown {...args}>
        <Button variant="outline">Actions</Button>
      </Dropdown>
    </div>
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,x,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="flex flex-wrap gap-3">
          <Dropdown items={baseItems}>
            <Button>With icons</Button>
          </Dropdown>
          <Dropdown items={baseItems.map(({
          icon: _icon,
          ...item
        }) => item)}>
            <Button variant="outline">Without icons</Button>
          </Dropdown>
          <Dropdown items={baseItems} color="primary">
            <Button variant="soft">Primary color</Button>
          </Dropdown>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          {(["xs", "sm", "md", "lg"] as const).map(s => <Dropdown key={s} items={baseItems} size={s}>
              <Button size={s} variant="outline">
                Size {s}
              </Button>
            </Dropdown>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-3">
          {(["default", "primary", "secondary", "accent"] as const).map(c => <Dropdown key={c} items={baseItems} color={c}>
              <Button variant="outline" size="sm">
                {c}
              </Button>
            </Dropdown>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="flex flex-wrap gap-3">
          <Dropdown items={[...baseItems.slice(0, 2), {
          label: "Restricted",
          value: "restricted",
          disabled: true,
          icon: <Flag className="w-4 h-4" />
        }, baseItems[5]!]}>
            <Button variant="outline">With disabled item</Button>
          </Dropdown>

          <Dropdown items={baseItems} hover>
            <Button variant="outline">Hover trigger</Button>
          </Dropdown>

          <Dropdown items={baseItems} disabled>
            <Button variant="outline" disabled>
              Disabled
            </Button>
          </Dropdown>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Position
        </h3>
        <div className="flex justify-between">
          <Dropdown items={baseItems} position="left">
            <Button variant="outline">Left aligned</Button>
          </Dropdown>
          <Dropdown items={baseItems} position="right">
            <Button variant="outline">Right aligned</Button>
          </Dropdown>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Custom Render
        </h3>
        <Dropdown render={({
        close
      }) => <div className="p-3 space-y-2 min-w-48">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider px-1">
                Quick actions
              </p>
              {[{
          icon: <Star className="w-4 h-4" />,
          label: "Add to favorites"
        }, {
          icon: <Settings className="w-4 h-4" />,
          label: "Settings"
        }].map(({
          icon,
          label
        }) => <button key={label} type="button" className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-text-primary hover:bg-surface transition-colors" onClick={close}>
                  {icon}
                  {label}
                </button>)}
              <div className="border-t border-border pt-2">
                <button type="button" className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-error hover:bg-error/10 transition-colors" onClick={close}>
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>}>
          <Button variant="outline">Custom render</Button>
        </Dropdown>
      </section>
    </div>
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const ee=["Playground","Showcase"];export{r as Playground,i as Showcase,ee as __namedExportsOrder,$ as default};
