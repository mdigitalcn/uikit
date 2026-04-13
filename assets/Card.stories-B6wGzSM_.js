import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as c}from"./index-Cw7T_5ox.js";import{C as a,a as t,b as r,c as i,d as n,e as l}from"./index-RUZM2f0v.js";import{U as j}from"./user-BM8Midap.js";import{E as u}from"./ellipsis-BCji1NXI.js";import{H as f}from"./heart-7Tw2OJmo.js";import{S as v}from"./star-CXKHNDnr.js";import{S as b}from"./settings-D1wlBKo1.js";import"./index-ZW2Bszwo.js";import"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bo-loign.js";import"./utils-_uLxnvdl.js";import"./index-CF05pSQ2.js";import"./variants-CTjkuV9j.js";import"./useRipple-BuuTbn0W.js";import"./createLucideIcon-BXJdBs6C.js";const V={title:"Layout/Card",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","outline","soft","ghost","elevated"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},shadow:{control:"select",options:["none","sm","md","lg"]},hoverable:{control:"boolean"},clickable:{control:"boolean"},bordered:{control:"boolean"},loading:{control:"boolean"}}},d={args:{variant:"default",color:"default",size:"md",shadow:"none",hoverable:!1,clickable:!1,bordered:!0,loading:!1},render:s=>e.jsxs(a,{...s,className:"max-w-sm",children:[e.jsxs(t,{children:[e.jsx(r,{children:"Card Title"}),e.jsx(i,{children:"A short description of the card content goes here."})]}),e.jsx(n,{children:e.jsx("p",{className:"text-text-secondary text-sm",children:"This is the main content area of the card. You can put any content here including text, images, or other components."})}),e.jsxs(l,{className:"flex gap-2",children:[e.jsx(c,{size:"sm",variant:"solid",color:"primary",children:"Action"}),e.jsx(c,{size:"sm",variant:"outline",children:"Cancel"})]})]})},o={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-5xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:["default","solid","outline","soft","ghost","elevated"].map(s=>e.jsxs(a,{variant:s,color:"primary",children:[e.jsxs(t,{children:[e.jsx(r,{children:s}),e.jsxs(i,{children:['variant="',s,'"']})]}),e.jsx(n,{children:e.jsx("p",{className:"text-sm",children:"Card content area with sample text."})})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:["primary","secondary","accent","success","error","warning","info"].map(s=>e.jsxs(a,{variant:"soft",color:s,children:[e.jsx(t,{children:e.jsx(r,{className:"capitalize",children:s})}),e.jsx(n,{children:e.jsxs("p",{className:"text-sm",children:['color="',s,'"']})})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Shadows"}),e.jsx("div",{className:"grid grid-cols-4 gap-6",children:["none","sm","md","lg"].map(s=>e.jsxs(a,{shadow:s,children:[e.jsx(t,{children:e.jsxs(r,{children:['shadow="',s,'"']})}),e.jsx(n,{children:e.jsx("p",{className:"text-sm",children:"Elevation level"})})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"grid grid-cols-4 gap-4 items-start",children:["xs","sm","md","lg"].map(s=>e.jsxs(a,{size:s,children:[e.jsx(t,{children:e.jsxs(r,{children:['size="',s,'"']})}),e.jsx(n,{children:e.jsx("p",{className:"text-sm",children:"Padding varies by size."})})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Interactive States"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs(a,{hoverable:!0,shadow:"sm",children:[e.jsxs(t,{children:[e.jsx(r,{children:"Hoverable"}),e.jsx(i,{children:"Hover to see the lift effect"})]}),e.jsx(n,{children:e.jsx("p",{className:"text-sm",children:'hoverable=true with shadow="sm"'})})]}),e.jsxs(a,{clickable:!0,color:"primary",variant:"outline",children:[e.jsxs(t,{children:[e.jsx(r,{children:"Clickable"}),e.jsx(i,{children:"Focusable and keyboard accessible"})]}),e.jsx(n,{children:e.jsx("p",{className:"text-sm",children:"clickable=true"})})]}),e.jsxs(a,{loading:!0,children:[e.jsxs(t,{children:[e.jsx(r,{children:"Loading"}),e.jsx(i,{children:"Shows animated skeleton"})]}),e.jsx(n,{children:e.jsx("p",{className:"text-sm",children:"loading=true"})})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Real-world Examples"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs(a,{variant:"default",shadow:"sm",hoverable:!0,children:[e.jsx(t,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center",children:e.jsx(j,{size:16,className:"text-primary"})}),e.jsxs("div",{children:[e.jsx(r,{as:"h4",className:"text-sm",children:"Alex Johnson"}),e.jsx(i,{className:"text-xs",children:"Product Designer"})]})]}),e.jsx("button",{className:"text-text-secondary hover:text-text-primary",children:e.jsx(u,{size:16})})]})}),e.jsx(n,{children:e.jsx("p",{className:"text-sm text-text-secondary",children:"Leading the redesign of our core product experience with a focus on accessibility."})}),e.jsxs(l,{className:"flex gap-3 text-xs text-text-secondary",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(f,{size:12})," 24"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(v,{size:12})," 4.9"]})]})]}),e.jsxs(a,{variant:"soft",color:"primary",children:[e.jsxs(t,{children:[e.jsx(r,{children:"Monthly Revenue"}),e.jsx(i,{children:"Compared to last month"})]}),e.jsxs(n,{children:[e.jsx("p",{className:"text-3xl font-bold",children:"$48,295"}),e.jsx("p",{className:"text-sm text-success mt-1",children:"+12.4% from last month"})]}),e.jsx(l,{children:e.jsx(c,{size:"sm",variant:"soft",color:"primary",fullWidth:!0,children:"View details"})})]}),e.jsxs(a,{variant:"default",bordered:!0,children:[e.jsx(t,{children:e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx(r,{children:"Settings"}),e.jsx(i,{children:"Manage your preferences"})]}),e.jsx(b,{size:18,className:"text-text-secondary"})]})}),e.jsx(n,{className:"space-y-2",children:["Notifications","Privacy","Billing","Security"].map(s=>e.jsxs("div",{className:"flex items-center justify-between py-1 border-b border-border last:border-0",children:[e.jsx("span",{className:"text-sm",children:s}),e.jsx("span",{className:"text-xs text-text-secondary",children:"Configure"})]},s))})]})]})]})]})};var m,x,p;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "default",
    color: "default",
    size: "md",
    shadow: "none",
    hoverable: false,
    clickable: false,
    bordered: true,
    loading: false
  },
  render: args => <Card {...args} className="max-w-sm">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A short description of the card content goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-text-secondary text-sm">
          This is the main content area of the card. You can put any content here including text, images, or other components.
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button size="sm" variant="solid" color="primary">Action</Button>
        <Button size="sm" variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
}`,...(p=(x=d.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var h,C,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-5xl">

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="grid grid-cols-3 gap-4">
          {(["default", "solid", "outline", "soft", "ghost", "elevated"] as const).map(variant => <Card key={variant} variant={variant} color="primary">
              <CardHeader>
                <CardTitle>{variant}</CardTitle>
                <CardDescription>variant="{variant}"</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Card content area with sample text.</p>
              </CardContent>
            </Card>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="grid grid-cols-4 gap-4">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <Card key={color} variant="soft" color={color}>
              <CardHeader>
                <CardTitle className="capitalize">{color}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">color="{color}"</p>
              </CardContent>
            </Card>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Shadows</h3>
        <div className="grid grid-cols-4 gap-6">
          {(["none", "sm", "md", "lg"] as const).map(shadow => <Card key={shadow} shadow={shadow}>
              <CardHeader>
                <CardTitle>shadow="{shadow}"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Elevation level</p>
              </CardContent>
            </Card>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="grid grid-cols-4 gap-4 items-start">
          {(["xs", "sm", "md", "lg"] as const).map(size => <Card key={size} size={size}>
              <CardHeader>
                <CardTitle>size="{size}"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Padding varies by size.</p>
              </CardContent>
            </Card>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Interactive States</h3>
        <div className="grid grid-cols-3 gap-4">
          <Card hoverable shadow="sm">
            <CardHeader>
              <CardTitle>Hoverable</CardTitle>
              <CardDescription>Hover to see the lift effect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">hoverable=true with shadow="sm"</p>
            </CardContent>
          </Card>
          <Card clickable color="primary" variant="outline">
            <CardHeader>
              <CardTitle>Clickable</CardTitle>
              <CardDescription>Focusable and keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">clickable=true</p>
            </CardContent>
          </Card>
          <Card loading>
            <CardHeader>
              <CardTitle>Loading</CardTitle>
              <CardDescription>Shows animated skeleton</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">loading=true</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Real-world Examples</h3>
        <div className="grid grid-cols-3 gap-4">

          <Card variant="default" shadow="sm" hoverable>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <User size={16} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle as="h4" className="text-sm">Alex Johnson</CardTitle>
                    <CardDescription className="text-xs">Product Designer</CardDescription>
                  </div>
                </div>
                <button className="text-text-secondary hover:text-text-primary">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary">Leading the redesign of our core product experience with a focus on accessibility.</p>
            </CardContent>
            <CardFooter className="flex gap-3 text-xs text-text-secondary">
              <span className="flex items-center gap-1"><Heart size={12} /> 24</span>
              <span className="flex items-center gap-1"><Star size={12} /> 4.9</span>
            </CardFooter>
          </Card>

          <Card variant="soft" color="primary">
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
              <CardDescription>Compared to last month</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$48,295</p>
              <p className="text-sm text-success mt-1">+12.4% from last month</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="soft" color="primary" fullWidth>View details</Button>
            </CardFooter>
          </Card>

          <Card variant="default" bordered>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Manage your preferences</CardDescription>
                </div>
                <Settings size={18} className="text-text-secondary" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {["Notifications", "Privacy", "Billing", "Security"].map(item => <div key={item} className="flex items-center justify-between py-1 border-b border-border last:border-0">
                  <span className="text-sm">{item}</span>
                  <span className="text-xs text-text-secondary">Configure</span>
                </div>)}
            </CardContent>
          </Card>

        </div>
      </section>

    </div>
}`,...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const U=["Playground","Showcase"];export{d as Playground,o as Showcase,U as __namedExportsOrder,V as default};
