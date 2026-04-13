import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./index-Cw7T_5ox.js";import{I as c}from"./index-CU488rde.js";import{P as n,a as o,b as r}from"./index-BLrHYnCp.js";import{S as m}from"./settings-D1wlBKo1.js";import{U as p}from"./user-BM8Midap.js";import{B as f}from"./bell-BD3KA5A_.js";import{L as j}from"./log-out-FX55YeXE.js";import"./index-ZW2Bszwo.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bo-loign.js";import"./utils-_uLxnvdl.js";import"./index-CF05pSQ2.js";import"./variants-CTjkuV9j.js";import"./useRipple-BuuTbn0W.js";import"./x-ByohdK2B.js";import"./createLucideIcon-BXJdBs6C.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";import"./useOverlayContainer-BKheCA97.js";const G={title:"Data Display/Popover",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","soft"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]}}},N=["default","primary","secondary","accent","success","error","warning","info"],i={render:()=>e.jsx("div",{className:"p-16 flex justify-center",children:e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{children:"Open Popover"})}),e.jsx(r,{children:e.jsx("p",{className:"text-sm text-text-secondary",children:"Popover content renders in a portal, anchored to the trigger."})})]})})},l={render:()=>e.jsxs("div",{className:"space-y-10 p-16 max-w-3xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:["default","solid","soft"].map(s=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"outline",size:"sm",className:"capitalize",children:s})}),e.jsxs(r,{variant:s,color:"primary",size:"sm",children:[e.jsxs("p",{className:"font-medium mb-1 capitalize",children:[s," variant"]}),e.jsxs("p",{className:"text-xs opacity-80",children:["This is a ",s," popover using primary color."]})]})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"space-y-4",children:["default","solid","soft"].map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2 capitalize",children:s}),e.jsx("div",{className:"flex flex-wrap gap-2",children:N.map(a=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"outline",size:"sm",children:a})}),e.jsx(r,{variant:s,color:a,size:"sm",children:e.jsxs("p",{className:"text-sm",children:[s," · ",a]})})]},a))})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:["xs","sm","md","lg"].map(s=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsxs(t,{variant:"outline",size:"sm",children:["Size ",s]})}),e.jsx(r,{size:s,children:e.jsxs("p",{children:["Size ",s," content. Padding and font size scale with the size prop."]})})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Placement"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[["top","right","bottom","left"].map(s=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsx(t,{variant:"outline",size:"sm",children:s})}),e.jsx(r,{side:s,size:"sm",children:e.jsxs("p",{className:"text-sm",children:["Opens ",s]})})]},s)),["start","center","end"].map(s=>e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsxs(t,{variant:"ghost",size:"sm",children:["align: ",s]})}),e.jsx(r,{align:s,size:"sm",children:e.jsxs("p",{className:"text-sm",children:["Aligned ",s]})})]},s))]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Rich Content — Form"}),e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsxs(t,{children:[e.jsx(m,{className:"w-4 h-4 mr-2"}),"Profile Settings"]})}),e.jsxs(r,{className:"w-72",children:[e.jsx("h4",{className:"font-semibold text-text-primary mb-3",children:"Update Profile"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(c,{label:"Display Name",placeholder:"John Doe",size:"sm"}),e.jsx(c,{label:"Email",placeholder:"john@example.com",size:"sm",type:"email"}),e.jsx(t,{fullWidth:!0,size:"sm",children:"Save Changes"})]})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Rich Content — Menu"}),e.jsxs(n,{children:[e.jsx(o,{asChild:!0,children:e.jsxs(t,{variant:"ghost",size:"sm",children:[e.jsx(p,{className:"w-4 h-4 mr-2"}),"Account"]})}),e.jsxs(r,{className:"w-52 p-2",size:"sm",children:[e.jsxs("div",{className:"px-2 py-1.5 mb-1",children:[e.jsx("p",{className:"font-medium text-text-primary text-sm",children:"John Doe"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"john@example.com"})]}),e.jsx("div",{className:"h-px bg-border my-1"}),[{icon:e.jsx(p,{className:"w-3.5 h-3.5"}),label:"Profile"},{icon:e.jsx(f,{className:"w-3.5 h-3.5"}),label:"Notifications"},{icon:e.jsx(m,{className:"w-3.5 h-3.5"}),label:"Settings"}].map(({icon:s,label:a})=>e.jsxs("button",{className:"w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-surface text-text-primary transition-colors",children:[s,a]},a)),e.jsx("div",{className:"h-px bg-border my-1"}),e.jsxs("button",{className:"w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-surface text-error transition-colors",children:[e.jsx(j,{className:"w-3.5 h-3.5"}),"Sign Out"]})]})]})]})]})};var d,x,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="p-16 flex justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm text-text-secondary">
            Popover content renders in a portal, anchored to the trigger.
          </p>
        </PopoverContent>
      </Popover>
    </div>
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,g,u;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-16 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="flex flex-wrap gap-3">
          {(["default", "solid", "soft"] as const).map(v => <Popover key={v}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="capitalize">
                  {v}
                </Button>
              </PopoverTrigger>
              <PopoverContent variant={v} color="primary" size="sm">
                <p className="font-medium mb-1 capitalize">{v} variant</p>
                <p className="text-xs opacity-80">This is a {v} popover using primary color.</p>
              </PopoverContent>
            </Popover>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-4">
          {(["default", "solid", "soft"] as const).map(v => <div key={v}>
              <p className="text-xs text-text-secondary mb-2 capitalize">{v}</p>
              <div className="flex flex-wrap gap-2">
                {colors.map(c => <Popover key={c}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        {c}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent variant={v} color={c} size="sm">
                      <p className="text-sm">{v} · {c}</p>
                    </PopoverContent>
                  </Popover>)}
              </div>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap gap-3">
          {(["xs", "sm", "md", "lg"] as const).map(s => <Popover key={s}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  Size {s}
                </Button>
              </PopoverTrigger>
              <PopoverContent size={s}>
                <p>Size {s} content. Padding and font size scale with the size prop.</p>
              </PopoverContent>
            </Popover>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Placement</h3>
        <div className="flex flex-wrap gap-3">
          {(["top", "right", "bottom", "left"] as const).map(side => <Popover key={side}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  {side}
                </Button>
              </PopoverTrigger>
              <PopoverContent side={side} size="sm">
                <p className="text-sm">Opens {side}</p>
              </PopoverContent>
            </Popover>)}
          {(["start", "center", "end"] as const).map(align => <Popover key={align}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm">
                  align: {align}
                </Button>
              </PopoverTrigger>
              <PopoverContent align={align} size="sm">
                <p className="text-sm">Aligned {align}</p>
              </PopoverContent>
            </Popover>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Rich Content — Form</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button>
              <Settings className="w-4 h-4 mr-2" />
              Profile Settings
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <h4 className="font-semibold text-text-primary mb-3">Update Profile</h4>
            <div className="space-y-3">
              <Input label="Display Name" placeholder="John Doe" size="sm" />
              <Input label="Email" placeholder="john@example.com" size="sm" type="email" />
              <Button fullWidth size="sm">Save Changes</Button>
            </div>
          </PopoverContent>
        </Popover>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Rich Content — Menu</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Account
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-52 p-2" size="sm">
            <div className="px-2 py-1.5 mb-1">
              <p className="font-medium text-text-primary text-sm">John Doe</p>
              <p className="text-xs text-text-secondary">john@example.com</p>
            </div>
            <div className="h-px bg-border my-1" />
            {[{
            icon: <User className="w-3.5 h-3.5" />,
            label: "Profile"
          }, {
            icon: <Bell className="w-3.5 h-3.5" />,
            label: "Notifications"
          }, {
            icon: <Settings className="w-3.5 h-3.5" />,
            label: "Settings"
          }].map(({
            icon,
            label
          }) => <button key={label} className="w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-surface text-text-primary transition-colors">
                {icon}
                {label}
              </button>)}
            <div className="h-px bg-border my-1" />
            <button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-surface text-error transition-colors">
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </PopoverContent>
        </Popover>
      </section>
    </div>
}`,...(u=(g=l.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const H=["Playground","Showcase"];export{i as Playground,l as Showcase,H as __namedExportsOrder,G as default};
