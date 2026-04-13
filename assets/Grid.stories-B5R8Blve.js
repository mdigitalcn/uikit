import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as b,a as y}from"./utils-_uLxnvdl.js";import{R as h}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const N=y("w-full grid",{variants:{gap:{xs:"gap-2",sm:"gap-4",md:"gap-6",lg:"gap-8"},columns:{1:"grid-cols-1",2:"grid-cols-1 md:grid-cols-2",3:"grid-cols-1 md:grid-cols-2 lg:grid-cols-3",4:"grid-cols-1 md:grid-cols-2 lg:grid-cols-4",5:"grid-cols-1 md:grid-cols-3 lg:grid-cols-5",6:"grid-cols-1 md:grid-cols-3 lg:grid-cols-6"}},defaultVariants:{gap:"md",columns:3}}),t=h.memo(({children:s,columns:r=3,gap:n="md",className:g,ref:u})=>e.jsx("div",{ref:u,"data-slot":"root",className:b("grid_root",N({gap:n,columns:r}),g),children:s}));t.displayName="Grid";t.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{columns:{defaultValue:{value:"3",computed:!1},required:!1},gap:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const G={title:"Layout/Grid",component:t,tags:["autodocs"],argTypes:{columns:{control:"select",options:[1,2,3,4,5,6]},gap:{control:"select",options:["xs","sm","md","lg"]}}},a=({children:s})=>e.jsx("div",{className:"bg-surface border border-border rounded-lg p-4 text-center text-sm text-text-secondary",children:s}),d={args:{columns:3,gap:"md"},render:s=>e.jsx(t,{...s,children:[1,2,3,4,5,6].map(r=>e.jsxs(a,{children:["Item ",r]},r))})},c={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-4xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Columns"}),e.jsx("div",{className:"space-y-6",children:[1,2,3,4,6].map(s=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-2",children:[s," column",s!==1?"s":""]}),e.jsx(t,{columns:s,gap:"sm",children:Array.from({length:s},(r,n)=>e.jsxs(a,{children:["Col ",n+1]},n))})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Gap Sizes"}),e.jsx("div",{className:"space-y-6",children:["xs","sm","md","lg"].map(s=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-2",children:["gap: ",s]}),e.jsx(t,{columns:4,gap:s,children:[1,2,3,4].map(r=>e.jsx(a,{children:r},r))})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Responsive Layouts"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"3 columns (responsive — stacks on mobile)"}),e.jsx(t,{columns:3,gap:"md",children:[1,2,3,4,5,6].map(s=>e.jsxs(a,{children:[e.jsxs("p",{className:"font-medium text-text-primary",children:["Card ",s]}),e.jsx("p",{className:"text-xs mt-1",children:"Responsive grid cell"})]},s))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"4 columns grid"}),e.jsx(t,{columns:4,gap:"sm",children:[1,2,3,4,5,6,7,8].map(s=>e.jsx(a,{children:s},s))})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Mixed Content"}),e.jsxs(t,{columns:3,gap:"md",children:[e.jsxs("div",{className:"bg-primary/10 border border-primary/30 rounded-lg p-4 text-sm text-text-primary",children:[e.jsx("p",{className:"font-semibold",children:"Primary card"}),e.jsx("p",{className:"text-xs text-text-secondary mt-1",children:"Highlighted content area"})]}),e.jsxs("div",{className:"bg-surface border border-border rounded-lg p-4 text-sm text-text-primary",children:[e.jsx("p",{className:"font-semibold",children:"Standard card"}),e.jsx("p",{className:"text-xs text-text-secondary mt-1",children:"Default background"})]}),e.jsxs("div",{className:"bg-success/10 border border-success/30 rounded-lg p-4 text-sm text-text-primary",children:[e.jsx("p",{className:"font-semibold",children:"Success card"}),e.jsx("p",{className:"text-xs text-text-secondary mt-1",children:"Status-colored area"})]}),e.jsxs("div",{className:"bg-warning/10 border border-warning/30 rounded-lg p-4 text-sm text-text-primary",children:[e.jsx("p",{className:"font-semibold",children:"Warning card"}),e.jsx("p",{className:"text-xs text-text-secondary mt-1",children:"Attention required"})]}),e.jsxs("div",{className:"bg-accent/10 border border-accent/30 rounded-lg p-4 text-sm text-text-primary",children:[e.jsx("p",{className:"font-semibold",children:"Accent card"}),e.jsx("p",{className:"text-xs text-text-secondary mt-1",children:"Accent color"})]}),e.jsxs("div",{className:"bg-info/10 border border-info/30 rounded-lg p-4 text-sm text-text-primary",children:[e.jsx("p",{className:"font-semibold",children:"Info card"}),e.jsx("p",{className:"text-xs text-text-secondary mt-1",children:"Informational"})]})]})]})]})};var o,m,i;d.parameters={...d.parameters,docs:{...(o=d.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: "md"
  },
  render: args => <Grid {...args}>
      {[1, 2, 3, 4, 5, 6].map(n => <Box key={n}>Item {n}</Box>)}
    </Grid>
}`,...(i=(m=d.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var l,x,p;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-4xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Columns
        </h3>
        <div className="space-y-6">
          {([1, 2, 3, 4, 6] as const).map(cols => <div key={cols}>
              <p className="text-xs text-text-secondary mb-2">{cols} column{cols !== 1 ? "s" : ""}</p>
              <Grid columns={cols} gap="sm">
                {Array.from({
              length: cols
            }, (_, i) => <Box key={i}>Col {i + 1}</Box>)}
              </Grid>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Gap Sizes
        </h3>
        <div className="space-y-6">
          {(["xs", "sm", "md", "lg"] as const).map(gap => <div key={gap}>
              <p className="text-xs text-text-secondary mb-2">gap: {gap}</p>
              <Grid columns={4} gap={gap}>
                {[1, 2, 3, 4].map(n => <Box key={n}>{n}</Box>)}
              </Grid>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Responsive Layouts
        </h3>
        <div className="space-y-6">
          <div>
            <p className="text-xs text-text-secondary mb-2">3 columns (responsive — stacks on mobile)</p>
            <Grid columns={3} gap="md">
              {[1, 2, 3, 4, 5, 6].map(n => <Box key={n}>
                  <p className="font-medium text-text-primary">Card {n}</p>
                  <p className="text-xs mt-1">Responsive grid cell</p>
                </Box>)}
            </Grid>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">4 columns grid</p>
            <Grid columns={4} gap="sm">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <Box key={n}>{n}</Box>)}
            </Grid>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Mixed Content
        </h3>
        <Grid columns={3} gap="md">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Primary card</p>
            <p className="text-xs text-text-secondary mt-1">Highlighted content area</p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Standard card</p>
            <p className="text-xs text-text-secondary mt-1">Default background</p>
          </div>
          <div className="bg-success/10 border border-success/30 rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Success card</p>
            <p className="text-xs text-text-secondary mt-1">Status-colored area</p>
          </div>
          <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Warning card</p>
            <p className="text-xs text-text-secondary mt-1">Attention required</p>
          </div>
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Accent card</p>
            <p className="text-xs text-text-secondary mt-1">Accent color</p>
          </div>
          <div className="bg-info/10 border border-info/30 rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Info card</p>
            <p className="text-xs text-text-secondary mt-1">Informational</p>
          </div>
        </Grid>
      </section>
    </div>
}`,...(p=(x=c.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const w=["Playground","Showcase"];export{d as Playground,c as Showcase,w as __namedExportsOrder,G as default};
