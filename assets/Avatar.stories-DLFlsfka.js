import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c,a as P}from"./utils-_uLxnvdl.js";import{R as b,r as q}from"./index-ZH-6pyQh.js";import{c as O}from"./variants-CTjkuV9j.js";import{U as H}from"./user-BM8Midap.js";import{S as Q}from"./star-CXKHNDnr.js";import{S as X}from"./shield-syPj5L6h.js";import{B as Y}from"./bell-BD3KA5A_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const L=P("relative inline-flex items-center justify-center font-medium select-none shrink-0 bg-slot-10 text-slot",{variants:{size:{xs:"size-(--avatar-size-xs) text-xs",sm:"size-(--avatar-size-sm) text-sm",md:"size-(--avatar-size-md) text-base",lg:"size-(--avatar-size-lg) text-lg"},shape:{circle:"rounded-full",square:"rounded-lg"},color:O,bordered:{true:"ring-2 ring-background",false:""},disabled:{true:"opacity-50 cursor-not-allowed",false:""}},defaultVariants:{size:"md",shape:"circle",color:"default",bordered:!1,disabled:!1}}),Z={xs:"size-(--avatar-status-size-xs)",sm:"size-(--avatar-status-size-sm)",md:"size-(--avatar-status-size-md)",lg:"size-(--avatar-status-size-lg)"},ee={online:"bg-success",offline:"bg-border",away:"bg-warning",busy:"bg-error"},ae={xs:"min-w-3 h-3 text-[8px]",sm:"min-w-4 h-4 text-[10px]",md:"min-w-5 h-5 text-xs",lg:"min-w-6 h-6 text-xs"},se={xs:"-space-x-1",sm:"-space-x-1.5",md:"-space-x-2",lg:"-space-x-2.5"};function te(s){const r=s.trim().split(/\s+/).filter(Boolean);if(r.length===0)return"";const n=r[0];if(r.length===1&&n)return n.slice(0,2).toUpperCase();const o=r[r.length-1],i=(n==null?void 0:n[0])??"",f=(o==null?void 0:o[0])??"";return(i+f).toUpperCase()}function re(s,r){return r?r.slice(0,2).toUpperCase():s?te(s):""}const ne=()=>e.jsx(H,{className:"size-[60%] text-text-secondary","aria-hidden":"true"}),a=b.memo(({src:s,alt:r="",fallback:n,name:o,size:i="md",shape:f="circle",status:u,color:N="default",bordered:d=!1,icon:h,badge:m,disabled:v=!1,className:x,classNames:t,onError:p,ref:C,...l})=>{const[E,D]=q.useState(!1);q.useEffect(()=>{D(!1)},[s]);const T=M=>{D(!0),p==null||p(M)},g=s&&!E,j=re(o,n),B=!g&&(j||h),R=!g&&!B,K=r||o||(j?`Avatar: ${j}`:"User avatar"),k=!g;return e.jsxs("div",{ref:C,role:k?"img":void 0,"aria-label":k?K:void 0,className:c("avatar_root",L({size:i,shape:f,color:g?"default":N,bordered:d,disabled:v}),!m&&!u&&"overflow-hidden",t==null?void 0:t.root,x),"aria-disabled":v||void 0,"data-slot":"root",...l,children:[g&&e.jsx("img",{src:s,alt:r||o||"User avatar",onError:T,className:c("avatar_image","size-full object-cover",f==="circle"?"rounded-full":"rounded-lg",t==null?void 0:t.image),loading:"lazy","data-slot":"image"}),B&&(h?e.jsx("span",{className:c("avatar_fallback","flex items-center justify-center size-[60%]",t==null?void 0:t.fallback),"aria-hidden":"true","data-slot":"fallback",children:h}):e.jsx("span",{className:c("avatar_fallback",t==null?void 0:t.fallback),"aria-hidden":"true","data-slot":"fallback",children:j})),R&&e.jsx(ne,{}),u&&e.jsx("span",{className:c("avatar_status","absolute bottom-0 right-0 rounded-full ring-2 ring-background",Z[i],ee[u],t==null?void 0:t.status),"aria-label":`Status: ${u}`,"data-slot":"status"}),m&&e.jsx("span",{className:c("avatar_badge","absolute -top-1 -right-1 flex items-center justify-center rounded-full bg-error text-background font-medium px-1",ae[i],t==null?void 0:t.badge),"aria-label":typeof m=="number"?`${m} notifications`:void 0,role:typeof m=="number"?"status":void 0,"data-slot":"badge",children:m})]})});a.displayName="Avatar";const y=b.memo(({children:s,max:r,size:n="md",shape:o="circle",showTotal:i=!1,renderSurplus:f,bordered:u=!1,className:N,classNames:d,ref:h,...m})=>{const v=b.Children.toArray(s),x=v.length,t=r?v.slice(0,r):v,p=r&&x>r?x-r:0,C=i?x:p;return e.jsxs("div",{ref:h,className:c("avatarGroup_root","flex items-center",se[n],d==null?void 0:d.root,N),role:"group","aria-label":`Avatar group with ${x} members`,"data-slot":"root",...m,children:[t.map((l,E)=>b.isValidElement(l)?b.cloneElement(l,{key:l.key??E,size:l.props.size??n,shape:l.props.shape??o,bordered:l.props.bordered??u??!0,className:c(l.props.className)}):l),p>0&&(f?f(C):e.jsx("div",{className:c("avatarGroup_overflow",L({size:n,shape:o,color:"default",bordered:!0}),"bg-surface/80 backdrop-blur-sm overflow-hidden",d==null?void 0:d.overflow),"aria-label":i?`${x} total members`:`${p} more members`,"data-slot":"overflow",children:e.jsx("span",{className:"text-text-secondary font-medium",children:i?x:`+${p}`})}))]})});y.displayName="AvatarGroup";a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{alt:{defaultValue:{value:'""',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},shape:{defaultValue:{value:'"circle"',computed:!1},required:!1},color:{defaultValue:{value:'"default"',computed:!1},required:!1},bordered:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};y.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{size:{defaultValue:{value:'"md"',computed:!1},required:!1},shape:{defaultValue:{value:'"circle"',computed:!1},required:!1},showTotal:{defaultValue:{value:"false",computed:!1},required:!1},bordered:{defaultValue:{value:"false",computed:!1},required:!1}}};const he={title:"Data Display/Avatar",component:a,tags:["autodocs"],argTypes:{src:{control:"text"},alt:{control:"text"},name:{control:"text"},fallback:{control:"text"},size:{control:"select",options:["xs","sm","md","lg"]},shape:{control:"select",options:["circle","square"]},status:{control:"select",options:["online","offline","away","busy"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},bordered:{control:"boolean"},disabled:{control:"boolean"}}},A={args:{name:"John Doe",size:"md",shape:"circle",color:"primary",bordered:!1,disabled:!1}},oe=["default","primary","secondary","accent","success","error","warning","info"],S=["xs","sm","md","lg"],w={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Types (initials / icon / fallback)"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{name:"John Doe",color:"primary"}),e.jsx(a,{name:"AB",color:"secondary"}),e.jsx(a,{icon:e.jsx(Q,{}),color:"warning"}),e.jsx(a,{icon:e.jsx(X,{}),color:"info",shape:"square"}),e.jsx(a,{color:"default"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsx("div",{className:"flex items-end gap-4",children:S.map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{size:s,name:"AB",color:"primary"}),e.jsx("span",{className:"text-xs text-text-secondary",children:s})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:oe.map(s=>e.jsx(a,{name:s.slice(0,2).toUpperCase(),color:s},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Shapes"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{name:"Circle",shape:"circle",color:"primary",size:"lg"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"circle"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{name:"Square",shape:"square",color:"accent",size:"lg"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"square"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Status Indicators"}),e.jsx("div",{className:"flex gap-6 items-center",children:["online","offline","away","busy"].map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(a,{name:s.slice(0,2).toUpperCase(),color:"primary",status:s}),e.jsx("span",{className:"text-xs text-text-secondary",children:s})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Badge"}),e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsx(a,{name:"JD",badge:3,color:"primary"}),e.jsx(a,{name:"MK",badge:99,color:"secondary"}),e.jsx(a,{name:"AL",badge:e.jsx(Y,{className:"size-2.5"}),color:"accent",size:"lg"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Bordered"}),e.jsx("div",{className:"flex gap-3 items-center p-4 bg-surface rounded-lg",children:S.map(s=>e.jsx(a,{size:s,name:"AB",color:"primary",bordered:!0},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Disabled"}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(a,{name:"JD",color:"primary",disabled:!0}),e.jsx(a,{name:"AL",color:"success",disabled:!0,status:"online"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Avatar Group"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs(y,{max:4,bordered:!0,children:[e.jsx(a,{name:"Alice Smith",color:"primary"}),e.jsx(a,{name:"Bob Jones",color:"secondary"}),e.jsx(a,{name:"Carol White",color:"accent"}),e.jsx(a,{name:"Dan Brown",color:"success"}),e.jsx(a,{name:"Eve Davis",color:"warning"}),e.jsx(a,{name:"Frank Lee",color:"error"})]}),e.jsxs(y,{max:3,size:"sm",bordered:!0,showTotal:!0,children:[e.jsx(a,{name:"Alice Smith",color:"primary"}),e.jsx(a,{name:"Bob Jones",color:"secondary"}),e.jsx(a,{name:"Carol White",color:"accent"}),e.jsx(a,{name:"Dan Brown",color:"success"}),e.jsx(a,{name:"Eve Davis",color:"warning"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Group — All Sizes"}),e.jsx("div",{className:"space-y-4",children:S.map(s=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"text-xs text-text-secondary w-6",children:s}),e.jsxs(y,{size:s,max:4,bordered:!0,children:[e.jsx(a,{name:"Alice Smith",color:"primary"}),e.jsx(a,{name:"Bob Jones",color:"secondary"}),e.jsx(a,{name:"Carol White",color:"accent"}),e.jsx(a,{name:"Dan Brown",color:"success"}),e.jsx(a,{name:"Eve Davis",color:"warning"})]})]},s))})]})]})},z={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{src:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='64' height='64' rx='32' fill='%236366f1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3EAJ%3C/text%3E%3C/svg%3E",alt:"Alex Johnson",size:"lg"}),e.jsx(a,{src:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='64' height='64' rx='8' fill='%2310b981'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3EBJ%3C/text%3E%3C/svg%3E",alt:"Bob Jones",shape:"square",size:"lg"}),e.jsx(a,{src:"invalid-image.jpg",alt:"Fallback Demo",name:"Fallback Demo",color:"warning",size:"lg"})]})};var J,I,G;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    name: "John Doe",
    size: "md",
    shape: "circle",
    color: "primary",
    bordered: false,
    disabled: false
  }
}`,...(G=(I=A.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var V,_,U;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Types (initials / icon / fallback)</h3>
        <div className="flex items-center gap-4">
          <Avatar name="John Doe" color="primary" />
          <Avatar name="AB" color="secondary" />
          <Avatar icon={<Star />} color="warning" />
          <Avatar icon={<Shield />} color="info" shape="square" />
          <Avatar color="default" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex items-end gap-4">
          {sizes.map(s => <div key={s} className="flex flex-col items-center gap-2">
              <Avatar size={s} name="AB" color="primary" />
              <span className="text-xs text-text-secondary">{s}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map(c => <Avatar key={c} name={c.slice(0, 2).toUpperCase()} color={c} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Shapes</h3>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Circle" shape="circle" color="primary" size="lg" />
            <span className="text-xs text-text-secondary">circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Square" shape="square" color="accent" size="lg" />
            <span className="text-xs text-text-secondary">square</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Status Indicators</h3>
        <div className="flex gap-6 items-center">
          {(["online", "offline", "away", "busy"] as const).map(s => <div key={s} className="flex flex-col items-center gap-2">
              <Avatar name={s.slice(0, 2).toUpperCase()} color="primary" status={s} />
              <span className="text-xs text-text-secondary">{s}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Badge</h3>
        <div className="flex gap-6 items-center">
          <Avatar name="JD" badge={3} color="primary" />
          <Avatar name="MK" badge={99} color="secondary" />
          <Avatar name="AL" badge={<Bell className="size-2.5" />} color="accent" size="lg" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Bordered</h3>
        <div className="flex gap-3 items-center p-4 bg-surface rounded-lg">
          {sizes.map(s => <Avatar key={s} size={s} name="AB" color="primary" bordered />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Disabled</h3>
        <div className="flex gap-4 items-center">
          <Avatar name="JD" color="primary" disabled />
          <Avatar name="AL" color="success" disabled status="online" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Avatar Group</h3>
        <div className="space-y-4">
          <AvatarGroup max={4} bordered>
            <Avatar name="Alice Smith" color="primary" />
            <Avatar name="Bob Jones" color="secondary" />
            <Avatar name="Carol White" color="accent" />
            <Avatar name="Dan Brown" color="success" />
            <Avatar name="Eve Davis" color="warning" />
            <Avatar name="Frank Lee" color="error" />
          </AvatarGroup>

          <AvatarGroup max={3} size="sm" bordered showTotal>
            <Avatar name="Alice Smith" color="primary" />
            <Avatar name="Bob Jones" color="secondary" />
            <Avatar name="Carol White" color="accent" />
            <Avatar name="Dan Brown" color="success" />
            <Avatar name="Eve Davis" color="warning" />
          </AvatarGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Group — All Sizes</h3>
        <div className="space-y-4">
          {sizes.map(size => <div key={size} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-6">{size}</span>
              <AvatarGroup size={size} max={4} bordered>
                <Avatar name="Alice Smith" color="primary" />
                <Avatar name="Bob Jones" color="secondary" />
                <Avatar name="Carol White" color="accent" />
                <Avatar name="Dan Brown" color="success" />
                <Avatar name="Eve Davis" color="warning" />
              </AvatarGroup>
            </div>)}
        </div>
      </section>
    </div>
}`,...(U=(_=w.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var F,W,$;z.parameters={...z.parameters,docs:{...(F=z.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='64' height='64' rx='32' fill='%236366f1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3EAJ%3C/text%3E%3C/svg%3E" alt="Alex Johnson" size="lg" />
      <Avatar src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='64' height='64' rx='8' fill='%2310b981'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3EBJ%3C/text%3E%3C/svg%3E" alt="Bob Jones" shape="square" size="lg" />
      <Avatar src="invalid-image.jpg" alt="Fallback Demo" name="Fallback Demo" color="warning" size="lg" />
    </div>
}`,...($=(W=z.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};const ge=["Playground","Showcase","WithSvgImage"];export{A as Playground,w as Showcase,z as WithSvgImage,ge as __namedExportsOrder,he as default};
