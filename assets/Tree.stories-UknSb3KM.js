import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as F}from"./index-ZH-6pyQh.js";import{T as r}from"./index-C8p4uX3z.js";import{F as a}from"./file-C4Pb4pRw.js";import{F as t}from"./folder-CemrozX2.js";import{U as W}from"./users-CmrXRWI9.js";import{S as M}from"./shield-syPj5L6h.js";import{G as R}from"./globe-TCM94dGE.js";import{S as U}from"./settings-D1wlBKo1.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B-0NfVwE.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./utils-_uLxnvdl.js";import"./variants-CTjkuV9j.js";import"./chevron-right-DY5KYsnV.js";import"./createLucideIcon-BXJdBs6C.js";import"./check-CKCh4cDT.js";import"./minus-Bn6CyQhd.js";const ie={title:"Data Display/Tree",component:r,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},checkable:{control:"boolean"},selectable:{control:"boolean"},showLine:{control:"boolean"},showIcon:{control:"boolean"},defaultExpandAll:{control:"boolean"},disabled:{control:"boolean"}}},n=[{key:"company",label:"Acme Corporation",children:[{key:"engineering",label:"Engineering",children:[{key:"frontend",label:"Frontend",children:[{key:"react-team",label:"React Team"},{key:"design-sys",label:"Design System"}]},{key:"backend",label:"Backend",children:[{key:"api-team",label:"API Team"},{key:"infra",label:"Infrastructure"},{key:"data",label:"Data Platform"}]},{key:"mobile",label:"Mobile"},{key:"devops",label:"DevOps"}]},{key:"design",label:"Design",children:[{key:"ux",label:"UX Research"},{key:"ui",label:"UI Design"},{key:"brand",label:"Brand"}]},{key:"product",label:"Product",children:[{key:"pm",label:"Product Management"},{key:"analytics",label:"Analytics"}]}]}],u=[{key:"root",label:"project",icon:e.jsx(t,{size:14}),children:[{key:"src",label:"src",icon:e.jsx(t,{size:14}),children:[{key:"components",label:"components",icon:e.jsx(t,{size:14}),children:[{key:"button",label:"Button.tsx",icon:e.jsx(a,{size:14}),isLeaf:!0},{key:"input",label:"Input.tsx",icon:e.jsx(a,{size:14}),isLeaf:!0},{key:"modal",label:"Modal.tsx",icon:e.jsx(a,{size:14}),isLeaf:!0}]},{key:"pages",label:"pages",icon:e.jsx(t,{size:14}),children:[{key:"home-page",label:"HomePage.tsx",icon:e.jsx(a,{size:14}),isLeaf:!0},{key:"about-page",label:"AboutPage.tsx",icon:e.jsx(a,{size:14}),isLeaf:!0}]},{key:"app",label:"App.tsx",icon:e.jsx(a,{size:14}),isLeaf:!0},{key:"main",label:"main.tsx",icon:e.jsx(a,{size:14}),isLeaf:!0}]},{key:"public",label:"public",icon:e.jsx(t,{size:14}),children:[{key:"favicon",label:"favicon.ico",icon:e.jsx(a,{size:14}),isLeaf:!0},{key:"robots",label:"robots.txt",icon:e.jsx(a,{size:14}),isLeaf:!0}]},{key:"pkg",label:"package.json",icon:e.jsx(a,{size:14}),isLeaf:!0},{key:"tsconfig",label:"tsconfig.json",icon:e.jsx(a,{size:14}),isLeaf:!0}]}],G=[{key:"admin",label:"Administration",icon:e.jsx(M,{size:14}),children:[{key:"user-mgmt",label:"User Management",icon:e.jsx(W,{size:14})},{key:"role-mgmt",label:"Role Management"},{key:"audit",label:"Audit Logs"}]},{key:"content",label:"Content",icon:e.jsx(R,{size:14}),children:[{key:"publish",label:"Publish"},{key:"edit",label:"Edit",disabled:!0},{key:"review",label:"Review"}]},{key:"system",label:"System",icon:e.jsx(U,{size:14}),children:[{key:"config",label:"Configuration",disabled:!0},{key:"integrations",label:"Integrations"}]}],o={args:{data:n,defaultExpandedKeys:["company","engineering"],color:"primary",size:"md",checkable:!1,selectable:!0,showLine:!1,showIcon:!1,defaultExpandAll:!1,disabled:!1}},c={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-3xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Basic Tree"}),e.jsx("div",{className:"max-w-sm border border-border rounded-lg p-3 bg-surface",children:e.jsx(r,{data:n,defaultExpandedKeys:["company","engineering"],color:"primary",selectable:!0})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"grid grid-cols-2 gap-6",children:["primary","secondary","accent","success"].map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2 capitalize",children:s}),e.jsx("div",{className:"border border-border rounded-lg p-3 bg-surface",children:e.jsx(r,{data:n[0].children.slice(0,2),defaultExpandedKeys:["engineering","design"],color:s,selectable:!0,defaultSelectedKeys:[s==="primary"?"frontend":s==="secondary"?"ux":s==="accent"?"ui":"pm"]})})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"grid grid-cols-2 gap-6",children:["xs","sm","md","lg"].map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2 uppercase",children:s}),e.jsx("div",{className:"border border-border rounded-lg p-3 bg-surface",children:e.jsx(r,{data:n[0].children.slice(0,1),defaultExpandedKeys:["engineering"],size:s,color:"primary"})})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Checkable"}),e.jsx(O,{})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Icons"}),e.jsx("div",{className:"max-w-sm border border-border rounded-lg p-3 bg-surface",children:e.jsx(r,{data:u,defaultExpandedKeys:["root","src"],color:"primary",showIcon:!0,selectable:!0})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Lines"}),e.jsx("div",{className:"max-w-sm border border-border rounded-lg p-3 bg-surface",children:e.jsx(r,{data:n,defaultExpandedKeys:["company","engineering"],color:"primary",showLine:!0,selectable:!0})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Permissions Tree (with disabled nodes)"}),e.jsx("div",{className:"max-w-sm border border-border rounded-lg p-3 bg-surface",children:e.jsx(r,{data:G,color:"primary",checkable:!0,showIcon:!0,defaultExpandAll:!0})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Expand All"}),e.jsx("div",{className:"max-w-sm border border-border rounded-lg p-3 bg-surface",children:e.jsx(r,{data:u,color:"primary",showIcon:!0,defaultExpandAll:!0,selectable:!0})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Disabled"}),e.jsx("div",{className:"max-w-sm border border-border rounded-lg p-3 bg-surface",children:e.jsx(r,{data:n,defaultExpandedKeys:["company","engineering"],color:"primary",disabled:!0})})]})]})};function O(){const[s,b]=F.useState(["react-team"]);return e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"max-w-sm border border-border rounded-lg p-3 bg-surface",children:e.jsx(r,{data:n,defaultExpandedKeys:["company","engineering"],color:"primary",checkable:!0,checkedKeys:s,onCheck:x=>b(x)})}),e.jsxs("p",{className:"text-xs text-text-secondary",children:["Checked: ",s.join(", ")||"none"]})]})}const d={args:{data:n,defaultExpandedKeys:["company","engineering"],color:"primary",selectable:!0}},i={render:()=>{const[s,b]=F.useState([]);return e.jsxs("div",{className:"p-4 max-w-sm space-y-2",children:[e.jsx("div",{className:"border border-border rounded-lg p-3 bg-surface",children:e.jsx(r,{data:n,defaultExpandedKeys:["company","engineering","design"],color:"primary",checkable:!0,checkedKeys:s,onCheck:x=>b(x)})}),e.jsxs("p",{className:"text-xs text-text-secondary",children:["Checked: ",s.join(", ")||"none"]})]})}},l={args:{data:u,defaultExpandedKeys:["root","src","components"],color:"primary",showIcon:!0,selectable:!0}},m={args:{data:n,defaultExpandedKeys:["company","engineering"],color:"primary",showLine:!0,selectable:!0}},p={args:{data:n,defaultExpandedKeys:["company"],color:"primary",disabled:!0}};var y,g,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: orgData,
    defaultExpandedKeys: ["company", "engineering"],
    color: "primary",
    size: "md",
    checkable: false,
    selectable: true,
    showLine: false,
    showIcon: false,
    defaultExpandAll: false,
    disabled: false
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,k,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Basic Tree</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree data={orgData} defaultExpandedKeys={["company", "engineering"]} color="primary" selectable />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="grid grid-cols-2 gap-6">
          {(["primary", "secondary", "accent", "success"] as const).map(color => <div key={color}>
              <p className="text-xs text-text-secondary mb-2 capitalize">{color}</p>
              <div className="border border-border rounded-lg p-3 bg-surface">
                <Tree data={orgData[0].children!.slice(0, 2)} defaultExpandedKeys={["engineering", "design"]} color={color} selectable defaultSelectedKeys={[color === "primary" ? "frontend" : color === "secondary" ? "ux" : color === "accent" ? "ui" : "pm"]} />
              </div>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="grid grid-cols-2 gap-6">
          {(["xs", "sm", "md", "lg"] as const).map(size => <div key={size}>
              <p className="text-xs text-text-secondary mb-2 uppercase">{size}</p>
              <div className="border border-border rounded-lg p-3 bg-surface">
                <Tree data={orgData[0].children!.slice(0, 1)} defaultExpandedKeys={["engineering"]} size={size} color="primary" />
              </div>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Checkable</h3>
        <CheckableDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Icons</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree data={fileSystemData} defaultExpandedKeys={["root", "src"]} color="primary" showIcon selectable />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Lines</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree data={orgData} defaultExpandedKeys={["company", "engineering"]} color="primary" showLine selectable />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Permissions Tree (with disabled nodes)</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree data={permissionsData} color="primary" checkable showIcon defaultExpandAll />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Expand All</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree data={fileSystemData} color="primary" showIcon defaultExpandAll selectable />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Disabled</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree data={orgData} defaultExpandedKeys={["company", "engineering"]} color="primary" disabled />
        </div>
      </section>
    </div>
}`,...(j=(k=c.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var w,v,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: orgData,
    defaultExpandedKeys: ["company", "engineering"],
    color: "primary",
    selectable: true
  }
}`,...(N=(v=d.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var E,K,z;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
    return <div className="p-4 max-w-sm space-y-2">
        <div className="border border-border rounded-lg p-3 bg-surface">
          <Tree data={orgData} defaultExpandedKeys={["company", "engineering", "design"]} color="primary" checkable checkedKeys={checkedKeys} onCheck={keys => setCheckedKeys(keys)} />
        </div>
        <p className="text-xs text-text-secondary">Checked: {checkedKeys.join(", ") || "none"}</p>
      </div>;
  }
}`,...(z=(K=i.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var D,S,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: fileSystemData,
    defaultExpandedKeys: ["root", "src", "components"],
    color: "primary",
    showIcon: true,
    selectable: true
  }
}`,...(L=(S=l.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var C,T,I;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    data: orgData,
    defaultExpandedKeys: ["company", "engineering"],
    color: "primary",
    showLine: true,
    selectable: true
  }
}`,...(I=(T=m.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var A,P,B;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: orgData,
    defaultExpandedKeys: ["company"],
    color: "primary",
    disabled: true
  }
}`,...(B=(P=p.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const le=["Playground","Showcase","Basic","Checkable","FileTree","WithLines","Disabled"];export{d as Basic,i as Checkable,p as Disabled,l as FileTree,o as Playground,c as Showcase,m as WithLines,le as __namedExportsOrder,ie as default};
