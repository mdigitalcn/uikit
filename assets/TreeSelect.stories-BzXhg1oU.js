import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as s,r as Ie}from"./index-ZH-6pyQh.js";import{g as ct,c as g,i as ae,s as it,a as dt}from"./utils-_uLxnvdl.js";import{P as pt,a as ut,b as mt}from"./index-BLrHYnCp.js";import{c as xt}from"./variants-CTjkuV9j.js";import{T as ht}from"./index-C8p4uX3z.js";import{X as re}from"./x-ByohdK2B.js";import{L as ft}from"./loader-circle-C_rNOviD.js";import{C as bt}from"./chevron-down-D1qmGosc.js";import{F as k}from"./file-C4Pb4pRw.js";import{F as M}from"./folder-CemrozX2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-lJNWladF.js";import"./index-C6BiGwLV.js";import"./index-Bo-loign.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./Combination-C3reJy6-.js";import"./index-BH7Jj7fg.js";import"./useOverlayContainer-BKheCA97.js";import"./index-B-0NfVwE.js";import"./chevron-right-DY5KYsnV.js";import"./createLucideIcon-BXJdBs6C.js";import"./check-CKCh4cDT.js";import"./minus-Bn6CyQhd.js";const yt=dt("w-full flex items-center justify-between [--_radius:var(--radius-input)] rounded-slot text-text-primary outline-none cursor-pointer transition-colors aria-disabled:opacity-50 aria-disabled:cursor-not-allowed",{variants:{variant:{outline:"bg-background border border-border hover:border-slot-50 focus:border-slot focus:ring-2 focus:ring-slot-30",filled:"bg-surface border border-transparent hover:border-slot-30 focus:border-slot focus:ring-2 focus:ring-slot-30"},status:{default:"",error:"border-error",warning:"border-warning",info:"border-info",success:"border-success"},size:{xs:"min-h-(--select-height-xs) px-(--select-padding-x-xs) py-1 text-xs gap-1.5",sm:"min-h-(--select-height-sm) px-(--select-padding-x-sm) py-1 text-sm gap-2",md:"min-h-(--select-height-md) px-(--select-padding-x-md) py-1 text-base gap-2",lg:"min-h-(--select-height-lg) px-(--select-padding-x-lg) py-1.5 text-lg gap-3"},fullWidth:{true:"w-full",false:"max-w-full"}},defaultVariants:{variant:"outline",status:"default",size:"md",fullWidth:!0}}),p=s.memo(({variant:r="outline",size:m="md",color:V="primary",label:I,helperText:qe,error:ze,warning:Le,info:We,success:Re,data:T=[],placeholder:le="Select an option",loading:j=!1,fullWidth:B=!0,value:y,defaultValue:Pe,onChange:d,disabled:x,required:Me,multiple:f=!1,checkable:N=!1,searchable:se=!0,clearable:Ke=!0,maxChipsVisible:H=3,maxDropdownHeight:Fe=300,defaultExpandAll:Q=!1,defaultExpandedKeys:_e=[],showLine:Oe=!1,showIcon:Ue=!0,className:$e,classNames:i,ref:Be,...He})=>{const X=`tree-select-label-${s.useId()}`,[v,w]=s.useState(!1),[Qe,q]=s.useState(Pe||(f?[]:"")),[S,C]=s.useState(""),[Xe,Ge]=s.useState(Q?[]:_e),[G,ne]=s.useState(H),D=s.useRef(null),J=s.useRef(null),o=y!==void 0?y:Qe,{status:z,message:oe}=ct({error:ze,warning:Le,info:We,success:Re,helperText:qe}),ce=s.useCallback(t=>{const a=[],l=n=>{n.forEach(c=>{a.push(c),c.children&&l(c.children)})};return l(t),a},[]),E=s.useMemo(()=>ce(T),[T,ce]),L=s.useCallback(t=>E.find(a=>a.key===t)||null,[E]),A=s.useCallback(t=>(Array.isArray(t)?t:[t]).map(l=>L(l)).filter(l=>l!==null),[L]),ie=s.useMemo(()=>{if(!S)return T;const t=new Set;E.forEach(l=>{if(l.label.toLowerCase().includes(S.toLowerCase())){let n=l;for(;n;)t.add(n.key),n=E.find(b=>{var R;return(R=b.children)==null?void 0:R.some(ee=>ee.key===n.key)})||null}});const a=l=>l.filter(n=>t.has(n.key)).map(n=>({...n,children:n.children?a(n.children):void 0}));return a(T)},[T,S,E]),h=s.useMemo(()=>A(o),[o,A]),W=s.useMemo(()=>{var t;return h.length?h.length===1?(t=h[0])==null?void 0:t.label:`${h.length} selected`:""},[h]),Je=s.useCallback((t,a)=>{if(x||a.node.children&&a.node.children.length>0)return;let l;if(f){const c=Array.isArray(o)?o:[];a.selected?l=[...c,a.node.key]:l=c.filter(b=>b!==a.node.key)}else a.selected?(l=a.node.key,w(!1),C("")):l="";y===void 0&&q(l);const n=A(l);d==null||d(l,n)},[x,f,o,y,d,A]),Ye=s.useCallback((t,a)=>{if(x)return;const l=t.filter(c=>{const b=L(c);return b&&(!b.children||b.children.length===0)}),n=a.checkedNodes.filter(c=>!c.children||c.children.length===0);y===void 0&&q(l),d==null||d(l,n)},[x,y,d,L]),Ze=s.useCallback(t=>{C(t.target.value),v||w(!0)},[v]),et=s.useCallback(()=>{w(!0)},[]),tt=s.useCallback(t=>{t.stopPropagation();const a=f?[]:"";y===void 0&&q(a),d==null||d(a,[]),C("")},[f,y,d]),Y=s.useCallback((t,a)=>{if(t.stopPropagation(),!f||x)return;const n=(Array.isArray(o)?o:[]).filter(b=>b!==a);y===void 0&&q(n);const c=A(n);d==null||d(n,c)},[f,x,o,y,d,A]),Z=s.useCallback(t=>{var a;if(!v&&t.key!=="Tab"){(t.key==="Enter"||t.key===" "||t.key==="ArrowDown")&&(t.preventDefault(),w(!0));return}t.key==="Escape"&&(t.preventDefault(),w(!1),C(""),(a=D.current)==null||a.focus())},[v]),at=s.useCallback(t=>{if(t.key==="Backspace"&&!S&&f&&Array.isArray(o)&&o.length>0){t.preventDefault();const a=o[o.length-1];Y(t,a||"")}else Z(t)},[S,o,f,Y,Z]);s.useEffect(()=>{if(h.length===0||!D.current){ne(H);return}const t=()=>{var ue;const n=D.current;if(!n)return;const c=n.querySelectorAll("[data-hidden-chip]");if(c.length===0)return;const b=n.offsetWidth,R=m==="sm"?12:m==="md"?16:m==="lg"?20:16,ee=60,de=4,lt=40,st=b-R*2-ee;let pe=0,te=0;for(let P=0;P<c.length;P++){const nt=((ue=c[P])==null?void 0:ue.getBoundingClientRect().width)||0,me=pe+nt+(te>0?de:0),ot=P<c.length-1;if(me+(ot?de+lt:0)<=st)pe=me,te++;else break}ne(Math.max(1,te))},a=setTimeout(t,0),l=new ResizeObserver(()=>{t()});return D.current&&l.observe(D.current),()=>{clearTimeout(a),l.disconnect()}},[h,m,H]);const rt=e.jsx("div",{"data-slot":"root",className:g("treeSelect_root","relative group",xt[z!=="default"?z:V],B?"w-full":"inline-block",i==null?void 0:i.root),ref:Be,...He,children:e.jsxs(pt,{open:v,onOpenChange:t=>{w(t),t||C("")},children:[e.jsx(ut,{asChild:!0,children:e.jsxs("div",{ref:D,role:"combobox",tabIndex:x||j?-1:0,className:g("treeSelect_trigger",yt({variant:r,status:z,size:m,fullWidth:B}),j&&"opacity-50",$e,i==null?void 0:i.trigger),"aria-haspopup":"tree","aria-expanded":v,"aria-disabled":x||j,"aria-labelledby":I?X:void 0,onClick:()=>{x||j||v||(w(!0),se&&requestAnimationFrame(()=>{var t;return(t=J.current)==null?void 0:t.focus()}))},onKeyDown:Z,children:[f&&h.length>0&&e.jsxs("div",{className:"flex gap-1 flex-shrink-0 flex-wrap",children:[h.slice(0,G).map(t=>e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 bg-slot-10 text-slot rounded-tag text-sm whitespace-nowrap",children:[t.label,e.jsx("button",{type:"button",onClick:a=>Y(a,t.key),className:"hover:bg-slot-20 rounded-button",disabled:x,children:e.jsx(re,{className:"h-3 w-3"})})]},t.key)),h.length>G&&e.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 bg-surface text-text-secondary rounded text-sm whitespace-nowrap",children:["+",h.length-G]})]}),f&&e.jsx("div",{className:"absolute opacity-0 pointer-events-none whitespace-nowrap","aria-hidden":"true",children:h.map(t=>e.jsxs("span",{"data-hidden-chip":!0,className:"inline-flex items-center gap-1 px-2 py-0.5 bg-slot-10 text-slot rounded-tag text-sm whitespace-nowrap",children:[t.label,e.jsx(re,{className:"h-3 w-3"})]},t.key))}),se&&v?e.jsx("input",{ref:J,type:"text",className:"bg-transparent outline-none placeholder:text-text-secondary/50 flex-1 min-w-[60px] w-0",placeholder:W||le,value:S,onChange:Ze,onFocus:et,onKeyDown:at,disabled:x||j,onClick:t=>t.stopPropagation(),tabIndex:-1}):e.jsx("span",{className:g("flex-1 truncate",!W&&"text-text-secondary/50"),children:W||le}),e.jsxs("div",{className:"flex items-center gap-1 text-text-secondary shrink-0",children:[Ke&&W&&!x&&!j&&e.jsx("button",{type:"button",onClick:t=>{t.stopPropagation(),tt(t)},className:"hover:text-text-primary transition-colors",tabIndex:-1,children:e.jsx(re,{className:ae[m]})}),j?e.jsx(ft,{className:g("animate-spin",ae[m])}):e.jsx(bt,{className:g(ae[m],"transition-transform duration-slot",v&&"rotate-180")})]})]})}),e.jsx(mt,{className:g("treeSelect_dropdown","p-2 w-[var(--radix-popover-trigger-width)]",i==null?void 0:i.dropdown),align:"start",onOpenAutoFocus:t=>{var a;t.preventDefault(),(a=J.current)==null||a.focus()},children:e.jsx("div",{className:"overflow-auto",style:{maxHeight:Fe},role:"tree","aria-labelledby":I?X:void 0,children:ie.length===0?e.jsx("div",{className:"px-3 py-4 text-center text-sm text-text-secondary",children:"No options found"}):e.jsx(ht,{data:ie,checkable:N,checkedKeys:N&&Array.isArray(o)?o:void 0,onCheck:N?Ye:void 0,selectable:!N,selectedKeys:N?void 0:Array.isArray(o)?o:o?[o]:[],onSelect:N?void 0:Je,disabled:x,size:m,showLine:Oe,showIcon:Ue,defaultExpandAll:Q||!!S,expandedKeys:Q||S?void 0:Xe,onExpand:Ge,className:g("treeSelect_tree",i==null?void 0:i.tree),classNames:{node:g("treeSelect_node",i==null?void 0:i.node),label:g("treeSelect_label",i==null?void 0:i.label)}})})})]})});return e.jsxs("div",{className:g("w-full flex flex-col",!B&&"inline-block"),children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[I&&e.jsx("label",{id:X,className:"block mb-0.5",children:e.jsxs("span",{className:"text-sm font-medium text-text-secondary",children:[I,Me&&e.jsx("span",{className:"text-error ml-1",children:"*"})]})}),oe&&e.jsx("p",{className:it({status:z}),children:oe})]}),rt]})});p.displayName="TreeSelect";p.__docgenInfo={description:"",methods:[],displayName:"TreeSelect",props:{variant:{defaultValue:{value:"'outline'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},data:{defaultValue:{value:"[]",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Select an option'",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},checkable:{defaultValue:{value:"false",computed:!1},required:!1},searchable:{defaultValue:{value:"true",computed:!1},required:!1},clearable:{defaultValue:{value:"true",computed:!1},required:!1},maxChipsVisible:{defaultValue:{value:"3",computed:!1},required:!1},maxDropdownHeight:{defaultValue:{value:"300",computed:!1},required:!1},defaultExpandAll:{defaultValue:{value:"false",computed:!1},required:!1},defaultExpandedKeys:{defaultValue:{value:"[]",computed:!1},required:!1},showLine:{defaultValue:{value:"false",computed:!1},required:!1},showIcon:{defaultValue:{value:"true",computed:!1},required:!1}}};const Qt={title:"Data Entry/TreeSelect",component:p,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},multiple:{control:"boolean"},checkable:{control:"boolean"},searchable:{control:"boolean"},clearable:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"},showLine:{control:"boolean"},defaultExpandAll:{control:"boolean"}}},u=[{key:"engineering",label:"Engineering",children:[{key:"frontend",label:"Frontend",children:[{key:"react",label:"React Team"},{key:"vue",label:"Vue Team"}]},{key:"backend",label:"Backend",children:[{key:"api",label:"API Team"},{key:"infra",label:"Infrastructure"}]},{key:"mobile",label:"Mobile"}]},{key:"design",label:"Design",children:[{key:"ux",label:"UX Research"},{key:"ui",label:"UI Design"},{key:"brand",label:"Brand Design"}]},{key:"product",label:"Product",children:[{key:"pm",label:"Product Management"},{key:"analytics",label:"Analytics"}]},{key:"operations",label:"Operations",children:[{key:"hr",label:"Human Resources"},{key:"finance",label:"Finance"},{key:"legal",label:"Legal",disabled:!0}]}],gt=[{key:"src",label:"src",icon:e.jsx(M,{size:14}),children:[{key:"components",label:"components",icon:e.jsx(M,{size:14}),children:[{key:"button",label:"button.tsx",icon:e.jsx(k,{size:14}),isLeaf:!0},{key:"input",label:"input.tsx",icon:e.jsx(k,{size:14}),isLeaf:!0},{key:"modal",label:"modal.tsx",icon:e.jsx(k,{size:14}),isLeaf:!0}]},{key:"pages",label:"pages",icon:e.jsx(M,{size:14}),children:[{key:"home",label:"home.tsx",icon:e.jsx(k,{size:14}),isLeaf:!0},{key:"about",label:"about.tsx",icon:e.jsx(k,{size:14}),isLeaf:!0}]},{key:"app",label:"app.tsx",icon:e.jsx(k,{size:14}),isLeaf:!0},{key:"index",label:"index.ts",icon:e.jsx(k,{size:14}),isLeaf:!0}]},{key:"public",label:"public",icon:e.jsx(M,{size:14}),children:[{key:"favicon",label:"favicon.ico",icon:e.jsx(k,{size:14}),isLeaf:!0}]}],K={args:{label:"Select Department",placeholder:"Choose a department...",data:u,variant:"outline",color:"primary",size:"md",multiple:!1,checkable:!1,searchable:!1,clearable:!0,disabled:!1,loading:!1,fullWidth:!1,defaultExpandAll:!1}},F={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"space-y-4",children:["outline","filled"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2 capitalize",children:r}),e.jsx(p,{label:`${r.charAt(0).toUpperCase()+r.slice(1)} variant`,placeholder:"Select a department...",data:u,variant:r,color:"primary",clearable:!0})]},r))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"space-y-4",children:["primary","secondary","accent","success"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2 capitalize",children:r}),e.jsx(p,{placeholder:`${r.charAt(0).toUpperCase()+r.slice(1)} color`,data:u,color:r,clearable:!0})]},r))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"space-y-4",children:["xs","sm","md","lg"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2 uppercase",children:r}),e.jsx(p,{placeholder:`Size ${r.toUpperCase()}`,data:u,size:r,color:"primary"})]},r))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Multiple Selection with Checkboxes"}),e.jsx(vt,{})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Searchable"}),e.jsx(p,{label:"Search departments",placeholder:"Type to search...",data:u,color:"primary",searchable:!0,clearable:!0,defaultExpandAll:!0})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Icons (File Tree)"}),e.jsx(p,{label:"Select file",placeholder:"Choose a file...",data:gt,color:"primary",showIcon:!0,clearable:!0,defaultExpandAll:!0})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Show Lines"}),e.jsx(p,{label:"With connecting lines",placeholder:"Select...",data:u,color:"primary",showLine:!0,clearable:!0,defaultExpandAll:!0})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Validation States"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{label:"Required field",placeholder:"Select department...",data:u,color:"primary",error:"Please select a department",required:!0}),e.jsx(p,{label:"Warning",placeholder:"Select department...",data:u,color:"primary",warning:"This selection affects billing"}),e.jsx(p,{label:"Success",placeholder:"Select department...",data:u,color:"primary",success:"Department verified",defaultValue:"frontend"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{label:"Disabled",placeholder:"Cannot select...",data:u,color:"primary",disabled:!0}),e.jsx(p,{label:"Loading",placeholder:"Loading options...",data:[],color:"primary",loading:!0})]})]})]})};function vt(){const[r,m]=Ie.useState([]);return e.jsxs("div",{className:"space-y-2",children:[e.jsx(p,{label:"Select multiple departments",placeholder:"Choose departments...",data:u,color:"primary",multiple:!0,checkable:!0,clearable:!0,value:r,onChange:V=>m(V),defaultExpandAll:!0,maxChipsVisible:3}),e.jsxs("p",{className:"text-xs text-text-secondary",children:["Selected: ",Array.isArray(r)?r.length>0?r.join(", "):"none":r||"none"]})]})}const _={args:{label:"Department",placeholder:"Select a department...",data:u,color:"primary",clearable:!0,defaultExpandAll:!1}},O={render:()=>{const[r,m]=Ie.useState([]);return e.jsxs("div",{className:"p-4 max-w-sm space-y-2",children:[e.jsx(p,{label:"Departments",placeholder:"Select departments...",data:u,color:"primary",multiple:!0,checkable:!0,clearable:!0,value:r,onChange:V=>m(V)}),e.jsxs("p",{className:"text-xs text-text-secondary",children:["Selected: ",Array.isArray(r)?r.join(", ")||"none":r||"none"]})]})}},U={args:{label:"Searchable Tree Select",placeholder:"Type to search...",data:u,color:"primary",searchable:!0,clearable:!0,defaultExpandAll:!0}},$={args:{label:"Disabled",placeholder:"Cannot select...",data:u,color:"primary",disabled:!0}};var xe,he,fe;K.parameters={...K.parameters,docs:{...(xe=K.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    label: "Select Department",
    placeholder: "Choose a department...",
    data: orgData,
    variant: "outline",
    color: "primary",
    size: "md",
    multiple: false,
    checkable: false,
    searchable: false,
    clearable: true,
    disabled: false,
    loading: false,
    fullWidth: false,
    defaultExpandAll: false
  }
}`,...(fe=(he=K.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var be,ye,ge;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="space-y-4">
          {(["outline", "filled"] as const).map(variant => <div key={variant}>
              <p className="text-xs text-text-secondary mb-2 capitalize">{variant}</p>
              <TreeSelect label={\`\${variant.charAt(0).toUpperCase() + variant.slice(1)} variant\`} placeholder="Select a department..." data={orgData} variant={variant} color="primary" clearable />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-4">
          {(["primary", "secondary", "accent", "success"] as const).map(color => <div key={color}>
              <p className="text-xs text-text-secondary mb-2 capitalize">{color}</p>
              <TreeSelect placeholder={\`\${color.charAt(0).toUpperCase() + color.slice(1)} color\`} data={orgData} color={color} clearable />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map(size => <div key={size}>
              <p className="text-xs text-text-secondary mb-2 uppercase">{size}</p>
              <TreeSelect placeholder={\`Size \${size.toUpperCase()}\`} data={orgData} size={size} color="primary" />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Multiple Selection with Checkboxes</h3>
        <MultipleDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Searchable</h3>
        <TreeSelect label="Search departments" placeholder="Type to search..." data={orgData} color="primary" searchable clearable defaultExpandAll />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Icons (File Tree)</h3>
        <TreeSelect label="Select file" placeholder="Choose a file..." data={fileTreeData} color="primary" showIcon clearable defaultExpandAll />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Show Lines</h3>
        <TreeSelect label="With connecting lines" placeholder="Select..." data={orgData} color="primary" showLine clearable defaultExpandAll />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Validation States</h3>
        <div className="space-y-4">
          <TreeSelect label="Required field" placeholder="Select department..." data={orgData} color="primary" error="Please select a department" required />
          <TreeSelect label="Warning" placeholder="Select department..." data={orgData} color="primary" warning="This selection affects billing" />
          <TreeSelect label="Success" placeholder="Select department..." data={orgData} color="primary" success="Department verified" defaultValue="frontend" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="space-y-4">
          <TreeSelect label="Disabled" placeholder="Cannot select..." data={orgData} color="primary" disabled />
          <TreeSelect label="Loading" placeholder="Loading options..." data={[]} color="primary" loading />
        </div>
      </section>
    </div>
}`,...(ge=(ye=F.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var ve,Se,ke;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: "Department",
    placeholder: "Select a department...",
    data: orgData,
    color: "primary",
    clearable: true,
    defaultExpandAll: false
  }
}`,...(ke=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var je,we,Ne;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | string[]>([]);
    return <div className="p-4 max-w-sm space-y-2">
        <TreeSelect label="Departments" placeholder="Select departments..." data={orgData} color="primary" multiple checkable clearable value={value} onChange={v => setValue(v)} />
        <p className="text-xs text-text-secondary">
          Selected: {Array.isArray(value) ? value.join(", ") || "none" : value || "none"}
        </p>
      </div>;
  }
}`,...(Ne=(we=O.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var De,Ae,Ve;U.parameters={...U.parameters,docs:{...(De=U.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    label: "Searchable Tree Select",
    placeholder: "Type to search...",
    data: orgData,
    color: "primary",
    searchable: true,
    clearable: true,
    defaultExpandAll: true
  }
}`,...(Ve=(Ae=U.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};var Te,Ce,Ee;$.parameters={...$.parameters,docs:{...(Te=$.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    label: "Disabled",
    placeholder: "Cannot select...",
    data: orgData,
    color: "primary",
    disabled: true
  }
}`,...(Ee=(Ce=$.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};const Xt=["Playground","Showcase","SingleSelect","MultipleSelect","WithSearch","Disabled"];export{$ as Disabled,O as MultipleSelect,K as Playground,F as Showcase,_ as SingleSelect,U as WithSearch,Xt as __namedExportsOrder,Qt as default};
