import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as n,a as T}from"./utils-_uLxnvdl.js";import{R as k}from"./index-ZH-6pyQh.js";import{c as R}from"./variants-CTjkuV9j.js";import"./_commonjsHelpers-CqkleIqs.js";const z=T("w-full border-separate border-spacing-0",{variants:{bordered:{true:"border",false:""},rounded:{true:"[--_radius:var(--radius-card)] rounded-slot",false:""}},compoundVariants:[{bordered:!0,rounded:!0,class:"overflow-hidden"}],defaultVariants:{bordered:!0,rounded:!0}}),E=T("font-semibold border-b border-r",{variants:{size:{xs:"py-1 px-2 text-[10px]",sm:"py-2 px-3 text-xs",md:"py-3 px-4 text-sm",lg:"py-4 px-5 text-base"}},defaultVariants:{size:"md"}}),A=T("text-text-primary border-b border-r",{variants:{size:{xs:"py-1 px-2 text-[10px]",sm:"py-2 px-3 text-xs",md:"py-3 px-4 text-sm",lg:"py-4 px-5 text-base"}},defaultVariants:{size:"md"}}),Y={default:"bg-slot-10 text-text-primary",solid:"bg-slot text-slot-fg",soft:"bg-slot-10 text-slot"},Z={default:"bg-background",solid:"bg-background",soft:"bg-slot-10"},N={default:"border-slot-30",solid:"border-slot-50",soft:"border-slot-20"},s=k.memo(({items:o,column:f=3,color:S="default",size:b="md",variant:W="default",layout:K="horizontal",bordered:h=!0,rounded:D=!0,className:_,classNames:t,title:j,extra:v,colon:w=!1,ref:V,...C})=>{const I=Y[W],P=Z[W],a=N[W],x=[];let g=[],F=0;if(o.forEach(c=>{const d=c.span||1;F+d>f?(x.push(g),g=[c],F=d):(g.push(c),F+=d)}),g.length>0&&x.push(g),K==="vertical"){const c=e.jsx("table",{className:n(z({bordered:h,rounded:D}),h&&a),role:"presentation",children:e.jsx("tbody",{"data-slot":"body",className:t==null?void 0:t.body,children:x.map((d,p)=>{const u=p===x.length-1;let m=0;const i=d.map(r=>{const l=r.span||1;return m+=l,m>=f});return e.jsxs(k.Fragment,{children:[e.jsx("tr",{className:n("descriptions_item",t==null?void 0:t.item),"data-slot":"item",children:d.map((r,l)=>e.jsxs("th",{colSpan:r.span||1,className:n("descriptions_label",E({size:b}),I,a,i[l]&&"border-r-0",t==null?void 0:t.label),"data-slot":"label",children:[r.label,w&&":"]},`${r.key}-label`))}),e.jsx("tr",{className:n("descriptions_item",t==null?void 0:t.item),"data-slot":"item",children:d.map((r,l)=>e.jsx("td",{colSpan:r.span||1,className:n("descriptions_content",A({size:b}),P,a,i[l]&&"border-r-0",u&&"border-b-0",t==null?void 0:t.content),"data-slot":"content",children:r.children},`${r.key}-value`))})]},p)})})});return j||v?e.jsxs("div",{ref:V,className:n("descriptions_root",R[S],t==null?void 0:t.root,_),"data-slot":"root",...C,children:[e.jsxs("div",{className:n("descriptions_title","flex items-center justify-between mb-3",t==null?void 0:t.title),"data-slot":"title",children:[j&&e.jsx("div",{className:"text-base font-semibold text-text-primary",children:j}),v&&e.jsx("div",{className:n("descriptions_extra",t==null?void 0:t.extra),"data-slot":"extra",children:v})]}),c]}):e.jsx("table",{ref:V,className:n("descriptions_root",R[S],z({bordered:h,rounded:D}),h&&a,t==null?void 0:t.root,_),"data-slot":"root",role:"presentation",...C,children:e.jsx("tbody",{"data-slot":"body",className:t==null?void 0:t.body,children:x.map((d,p)=>{const u=p===x.length-1;let m=0;const i=d.map(r=>{const l=r.span||1;return m+=l,m>=f});return e.jsxs(k.Fragment,{children:[e.jsx("tr",{className:n("descriptions_item",t==null?void 0:t.item),"data-slot":"item",children:d.map((r,l)=>e.jsxs("th",{colSpan:r.span||1,className:n("descriptions_label",E({size:b}),I,a,i[l]&&"border-r-0",t==null?void 0:t.label),"data-slot":"label",children:[r.label,w&&":"]},`${r.key}-label`))}),e.jsx("tr",{className:n("descriptions_item",t==null?void 0:t.item),"data-slot":"item",children:d.map((r,l)=>e.jsx("td",{colSpan:r.span||1,className:n("descriptions_content",A({size:b}),P,a,i[l]&&"border-r-0",u&&"border-b-0",t==null?void 0:t.content),"data-slot":"content",children:r.children},`${r.key}-value`))})]},p)})})})}const Q=e.jsx("table",{className:n(z({bordered:h,rounded:D}),h&&a),role:"presentation",children:e.jsx("tbody",{"data-slot":"body",className:t==null?void 0:t.body,children:x.map((c,d)=>{const p=d===x.length-1;let u=0;const m=c.map(i=>{const r=i.span||1;return u+=r*2,u>=f*2});return e.jsx("tr",{className:n("descriptions_item",t==null?void 0:t.item),"data-slot":"item",children:c.map((i,r)=>{const O=(i.span||1)*2-1;return e.jsxs(k.Fragment,{children:[e.jsxs("th",{className:n("descriptions_label",E({size:b}),I,a,p&&"border-b-0",t==null?void 0:t.label),"data-slot":"label",children:[i.label,w&&":"]}),e.jsx("td",{colSpan:O,className:n("descriptions_content",A({size:b}),P,a,m[r]&&"border-r-0",p&&"border-b-0",t==null?void 0:t.content),"data-slot":"content",children:i.children})]},i.key)})},d)})})});return j||v?e.jsxs("div",{ref:V,className:n("descriptions_root",R[S],t==null?void 0:t.root,_),"data-slot":"root",...C,children:[e.jsxs("div",{className:n("descriptions_title","flex items-center justify-between mb-3",t==null?void 0:t.title),"data-slot":"title",children:[j&&e.jsx("div",{className:"text-base font-semibold text-text-primary",children:j}),v&&e.jsx("div",{className:n("descriptions_extra",t==null?void 0:t.extra),"data-slot":"extra",children:v})]}),Q]}):e.jsx("table",{ref:V,className:n("descriptions_root",R[S],z({bordered:h,rounded:D}),h&&a,t==null?void 0:t.root,_),"data-slot":"root",role:"presentation",...C,children:e.jsx("tbody",{"data-slot":"body",className:t==null?void 0:t.body,children:x.map((c,d)=>{const p=d===x.length-1;let u=0;const m=c.map(i=>{const r=i.span||1;return u+=r*2,u>=f*2});return e.jsx("tr",{className:n("descriptions_item",t==null?void 0:t.item),"data-slot":"item",children:c.map((i,r)=>{const O=(i.span||1)*2-1;return e.jsxs(k.Fragment,{children:[e.jsxs("th",{className:n("descriptions_label",E({size:b}),I,a,p&&"border-b-0",t==null?void 0:t.label),"data-slot":"label",children:[i.label,w&&":"]}),e.jsx("td",{colSpan:O,className:n("descriptions_content",A({size:b}),P,a,m[r]&&"border-r-0",p&&"border-b-0",t==null?void 0:t.content),"data-slot":"content",children:i.children})]},i.key)})},d)})})})});s.displayName="Descriptions";s.__docgenInfo={description:"",methods:[],displayName:"Descriptions",props:{column:{defaultValue:{value:"3",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},layout:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},bordered:{defaultValue:{value:"true",computed:!1},required:!1},rounded:{defaultValue:{value:"true",computed:!1},required:!1},colon:{defaultValue:{value:"false",computed:!1},required:!1}}};const de={title:"Data Display/Descriptions",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","soft"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},layout:{control:"select",options:["horizontal","vertical"]},column:{control:"number"},bordered:{control:"boolean"},rounded:{control:"boolean"},colon:{control:"boolean"}}},X=({color:o,label:f})=>e.jsx("span",{className:"inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",style:{background:"var(--color-surface)",border:"1px solid var(--color-border)"},children:f}),y=[{key:"name",label:"Full Name",children:"Alice Johnson"},{key:"email",label:"Email",children:"alice@example.com"},{key:"phone",label:"Phone",children:"+1 (555) 234-5678"},{key:"dept",label:"Department",children:"Engineering"},{key:"status",label:"Status",children:e.jsx(X,{color:"success",label:"Active"})},{key:"location",label:"Location",children:"San Francisco, CA"}],U=[{key:"id",label:"Order ID",children:"#ORD-2024-8821"},{key:"product",label:"Product",children:"Premium Subscription"},{key:"amount",label:"Amount",children:"$99.00 / year"},{key:"status",label:"Status",children:e.jsx(X,{color:"info",label:"Processing"})},{key:"date",label:"Created",children:"Jan 15, 2024"},{key:"payment",label:"Payment",children:"Visa ending in 4242"}],ee=[{key:"hostname",label:"Hostname",children:"prod-server-01.example.com",span:2},{key:"os",label:"Operating System",children:"Ubuntu 22.04 LTS"},{key:"cpu",label:"CPU",children:"8-core Intel Xeon @ 3.6 GHz"},{key:"ram",label:"Memory",children:"64 GB DDR4"},{key:"disk",label:"Disk",children:"2 TB NVMe SSD"},{key:"ip",label:"IP Address",children:"192.168.1.100",span:2},{key:"region",label:"Region",children:"us-east-1"}],L={args:{title:"User Information",items:y,column:3,variant:"default",color:"primary",size:"md",layout:"horizontal",bordered:!0,rounded:!0,colon:!1}},q={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-3xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Horizontal Layout (default)"}),e.jsx(s,{title:"User Information",items:y,column:3,bordered:!0})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Vertical Layout"}),e.jsx(s,{title:"Order Details",items:U,layout:"vertical",column:3,bordered:!0})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Variants"}),e.jsx("div",{className:"space-y-6",children:["default","solid","soft"].map(o=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:o}),e.jsx(s,{items:y.slice(0,3),variant:o,color:"primary",column:3,bordered:!0})]},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"space-y-4",children:["primary","secondary","accent","success","error"].map(o=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:o}),e.jsx(s,{items:y.slice(0,3),color:o,column:3,bordered:!0,variant:"soft"})]},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"space-y-4",children:["xs","sm","md","lg"].map(o=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:o}),e.jsx(s,{items:U.slice(0,3),size:o,column:3,bordered:!0})]},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Column Counts"}),e.jsx("div",{className:"space-y-6",children:[1,2,3].map(o=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-2",children:[o," column",o>1?"s":""]}),e.jsx(s,{items:y.slice(0,4),column:o,bordered:!0})]},o))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Span"}),e.jsx(s,{title:"Server Configuration",items:ee,column:3,bordered:!0,color:"primary"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Colon"}),e.jsx(s,{items:y.slice(0,4),column:2,bordered:!0,colon:!0})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Without Border"}),e.jsx(s,{items:y,column:3,bordered:!1,rounded:!1})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Title and Extra Action"}),e.jsx(s,{title:"Profile Details",extra:e.jsx("button",{className:"text-xs text-text-secondary underline underline-offset-2 hover:text-text-primary transition-colors",children:"Edit"}),items:y,column:3,bordered:!0,color:"primary"})]})]})};var B,$,H;L.parameters={...L.parameters,docs:{...(B=L.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: "User Information",
    items: userItems,
    column: 3,
    variant: "default",
    color: "primary",
    size: "md",
    layout: "horizontal",
    bordered: true,
    rounded: true,
    colon: false
  }
}`,...(H=($=L.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var G,J,M;q.parameters={...q.parameters,docs:{...(G=q.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Horizontal Layout (default)
        </h3>
        <Descriptions title="User Information" items={userItems} column={3} bordered />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Vertical Layout
        </h3>
        <Descriptions title="Order Details" items={orderItems} layout="vertical" column={3} bordered />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="space-y-6">
          {(["default", "solid", "soft"] as const).map(v => <div key={v}>
              <p className="text-xs text-text-secondary mb-2">{v}</p>
              <Descriptions items={userItems.slice(0, 3)} variant={v} color="primary" column={3} bordered />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="space-y-4">
          {(["primary", "secondary", "accent", "success", "error"] as const).map(c => <div key={c}>
              <p className="text-xs text-text-secondary mb-2">{c}</p>
              <Descriptions items={userItems.slice(0, 3)} color={c} column={3} bordered variant="soft" />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s}>
              <p className="text-xs text-text-secondary mb-2">{s}</p>
              <Descriptions items={orderItems.slice(0, 3)} size={s} column={3} bordered />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Column Counts
        </h3>
        <div className="space-y-6">
          {([1, 2, 3] as const).map(col => <div key={col}>
              <p className="text-xs text-text-secondary mb-2">{col} column{col > 1 ? "s" : ""}</p>
              <Descriptions items={userItems.slice(0, 4)} column={col} bordered />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Span
        </h3>
        <Descriptions title="Server Configuration" items={serverItems} column={3} bordered color="primary" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Colon
        </h3>
        <Descriptions items={userItems.slice(0, 4)} column={2} bordered colon />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Without Border
        </h3>
        <Descriptions items={userItems} column={3} bordered={false} rounded={false} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Title and Extra Action
        </h3>
        <Descriptions title="Profile Details" extra={<button className="text-xs text-text-secondary underline underline-offset-2 hover:text-text-primary transition-colors">
              Edit
            </button>} items={userItems} column={3} bordered color="primary" />
      </section>
    </div>
}`,...(M=(J=q.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const le=["Playground","Showcase"];export{L as Playground,q as Showcase,le as __namedExportsOrder,de as default};
