import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as ee,r as p}from"./index-ZH-6pyQh.js";import{c as L}from"./utils-_uLxnvdl.js";import"./_commonjsHelpers-CqkleIqs.js";function te({text:t,image:r,width:n=120,height:u=64,rotate:k=-22,gap:h=[100,100],offset:b=[0,0],fontSize:y=14,fontFamily:C="sans-serif",fontWeight:N="normal",fontColor:W="rgba(0,0,0,0.15)",opacity:S=1}){return new Promise(d=>{const l=document.createElement("canvas"),o=l.getContext("2d"),s=window.devicePixelRatio||1,v=n+h[0],w=u+h[1];if(l.width=v*s,l.height=w*s,o.scale(s,s),o.globalAlpha=S,o.translate(v/2+b[0],w/2+b[1]),o.rotate(k*Math.PI/180),r){const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{o.drawImage(i,-n/2,-u/2,n,u),d(l.toDataURL())},i.onerror=()=>d(""),i.src=r}else if(t){o.font=`${N} ${y}px ${C}`,o.fillStyle=W,o.textAlign="center",o.textBaseline="middle";const i=Array.isArray(t)?t:[t],x=y*1.5,j=-((i.length-1)*x)/2;i.forEach((m,c)=>{o.fillText(m,0,j+c*x)}),d(l.toDataURL())}else d("")})}const a=ee.memo(({children:t,text:r,image:n,width:u=120,height:k=64,rotate:h=-22,gap:b=[100,100],offset:y=[0,0],fontSize:C=14,fontFamily:N="sans-serif",fontWeight:W="normal",fontColor:S="rgba(0,0,0,0.15)",opacity:d=1,zIndex:l=10,className:o,classNames:s})=>{const[v,w]=p.useState(""),i=p.useRef(null),x=p.useRef(null),j=p.useRef(null),m=p.useCallback(async()=>{if(typeof window>"u")return;const c=await te({text:r,image:n,width:u,height:k,rotate:h,gap:b,offset:y,fontSize:C,fontFamily:N,fontWeight:W,fontColor:S,opacity:d});w(c)},[r,n,u,k,h,b,y,C,N,W,S,d]);return p.useEffect(()=>{m()},[m]),p.useEffect(()=>{if(!(!x.current||!i.current))return j.current=new MutationObserver(c=>{for(const D of c){if(D.type==="childList"&&Array.from(D.removedNodes).includes(x.current)){m();return}if(D.type==="attributes"&&D.target===x.current){m();return}}}),j.current.observe(i.current,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["style","class"]}),()=>{var c;return(c=j.current)==null?void 0:c.disconnect()}},[m]),e.jsxs("div",{ref:i,"data-slot":"root",className:L("watermark_root","relative",s==null?void 0:s.root,o),children:[e.jsx("div",{"data-slot":"content",className:L("watermark_content","relative",s==null?void 0:s.content),children:t}),v&&e.jsx("div",{ref:x,"data-slot":"watermark","aria-hidden":"true",className:L("watermark_layer","absolute inset-0 pointer-events-none",s==null?void 0:s.watermark),style:{backgroundImage:`url(${v})`,backgroundRepeat:"repeat",zIndex:l}})]})});a.displayName="Watermark";a.__docgenInfo={description:"",methods:[],displayName:"Watermark",props:{width:{defaultValue:{value:"120",computed:!1},required:!1},height:{defaultValue:{value:"64",computed:!1},required:!1},rotate:{defaultValue:{value:"-22",computed:!1},required:!1},gap:{defaultValue:{value:"[100, 100]",computed:!1},required:!1},offset:{defaultValue:{value:"[0, 0]",computed:!1},required:!1},fontSize:{defaultValue:{value:"14",computed:!1},required:!1},fontFamily:{defaultValue:{value:"'sans-serif'",computed:!1},required:!1},fontWeight:{defaultValue:{value:"'normal'",computed:!1},required:!1},fontColor:{defaultValue:{value:"'rgba(0,0,0,0.15)'",computed:!1},required:!1},opacity:{defaultValue:{value:"1",computed:!1},required:!1},zIndex:{defaultValue:{value:"10",computed:!1},required:!1}}};const ie={title:"Other/Watermark",component:a,tags:["autodocs"],argTypes:{text:{control:"text"},opacity:{control:{type:"range",min:0,max:1,step:.05}},rotate:{control:{type:"range",min:-90,max:90}},fontSize:{control:"number"},fontColor:{control:"color"},fontWeight:{control:"select",options:["normal","bold","lighter","100","400","700","900"]},width:{control:"number"},height:{control:"number"},zIndex:{control:"number"}}},f=({title:t,description:r})=>e.jsxs("div",{className:"w-full h-48 bg-surface border border-border rounded-lg flex flex-col items-center justify-center gap-2 text-center px-6",children:[e.jsx("h4",{className:"font-semibold text-text-primary",children:t}),r&&e.jsx("p",{className:"text-sm text-text-secondary",children:r})]}),g=({title:t})=>e.jsxs("div",{className:"w-full bg-surface border border-border rounded-lg p-6 space-y-4",children:[e.jsx("h4",{className:"font-semibold text-text-primary",children:t??"Protected Document"}),e.jsx("div",{className:"space-y-2",children:Array.from({length:6}).map((r,n)=>e.jsx("div",{className:"h-3 bg-border/40 rounded",style:{width:`${60+n*17%40}%`}},n))}),e.jsx("div",{className:"grid grid-cols-3 gap-3 pt-2",children:Array.from({length:3}).map((r,n)=>e.jsx("div",{className:"h-16 bg-border/20 rounded-lg"},n))}),e.jsx("div",{className:"space-y-2",children:Array.from({length:4}).map((r,n)=>e.jsx("div",{className:"h-3 bg-border/40 rounded",style:{width:`${50+n*23%45}%`}},n))})]}),R={args:{text:"Confidential",rotate:-22,opacity:.15,fontSize:14,fontColor:"rgba(0,0,0,0.15)",fontWeight:"normal",width:120,height:64,gap:[100,100],children:e.jsx(f,{title:"Protected Content",description:"Hover to see watermark overlay"})}},z={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-3xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Text Watermark"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Single text"}),e.jsx(a,{text:"Confidential",opacity:.15,children:e.jsx(f,{title:"Single Line Watermark"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Multi-line text"}),e.jsx(a,{text:["Acme Corp","Internal Use Only"],opacity:.15,children:e.jsx(f,{title:"Multi-line Watermark"})})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Opacity Levels"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[.05,.1,.2,.3,.4,.5].map(t=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-2",children:["opacity: ",t]}),e.jsx(a,{text:"Draft",opacity:t,fontSize:12,children:e.jsx("div",{className:"h-32 bg-surface border border-border rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-sm text-text-secondary",children:"Content"})})})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Rotation"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[-45,-22,0,15,30,45].map(t=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-2",children:["rotate: ",t,"deg"]}),e.jsx(a,{text:"Sample",rotate:t,opacity:.15,fontSize:12,children:e.jsx("div",{className:"h-32 bg-surface border border-border rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-sm text-text-secondary",children:"Content"})})})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Default (rgba black)"}),e.jsx(a,{text:"Watermark",fontColor:"rgba(0,0,0,0.15)",children:e.jsx(f,{title:"Dark Watermark"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Brand color"}),e.jsx(a,{text:"ACME",fontColor:"rgba(99,102,241,0.2)",fontWeight:"bold",children:e.jsx(f,{title:"Brand Watermark"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Red / restricted"}),e.jsx(a,{text:"RESTRICTED",fontColor:"rgba(239,68,68,0.15)",fontSize:12,children:e.jsx(f,{title:"Restricted Content"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Green / approved"}),e.jsx(a,{text:"APPROVED",fontColor:"rgba(34,197,94,0.2)",fontSize:12,fontWeight:"bold",children:e.jsx(f,{title:"Approved Document"})})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Font Sizes"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[10,14,18,24,32,40].map(t=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-2",children:["fontSize: ",t]}),e.jsx(a,{text:"Sample",fontSize:t,opacity:.15,children:e.jsx("div",{className:"h-32 bg-surface border border-border rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-xs text-text-secondary",children:"Content"})})})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Gap (Density)"}),e.jsx("div",{className:"grid grid-cols-3 gap-4",children:[[40,40],[100,100],[200,200]].map(([t,r])=>e.jsxs("div",{children:[e.jsxs("p",{className:"text-xs text-text-secondary mb-2",children:["gap: [",t,", ",r,"]"]}),e.jsx(a,{text:"Draft",gap:[t,r],opacity:.15,fontSize:12,children:e.jsx("div",{className:"h-32 bg-surface border border-border rounded-lg"})})]},`${t}-${r}`))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Realistic Document Example"}),e.jsx(a,{text:["CONFIDENTIAL","Internal Use Only"],opacity:.12,rotate:-30,fontSize:16,fontWeight:"bold",gap:[80,80],children:e.jsx(g,{title:"Q4 Financial Report"})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Draft Overlay"}),e.jsx(a,{text:"DRAFT",opacity:.08,rotate:-45,fontSize:48,fontWeight:"bold",fontColor:"rgba(239,68,68,0.15)",gap:[60,60],children:e.jsx(g,{title:"Contract v0.3 - Not for Distribution"})})]})]})},A={args:{text:"Confidential",opacity:.15,rotate:-22,fontSize:14,children:e.jsx(g,{})}},E={args:{text:["Acme Corporation","Internal Use Only"],opacity:.12,rotate:-22,fontSize:13,children:e.jsx(g,{})}},I={args:{text:"DRAFT",opacity:.08,rotate:-45,fontSize:42,fontWeight:"bold",fontColor:"rgba(239,68,68,0.15)",gap:[60,60],children:e.jsx(g,{title:"Draft Document"})}},O={args:{text:"ACME CORP",opacity:.15,rotate:-22,fontSize:14,fontWeight:"bold",fontColor:"rgba(99,102,241,0.2)",children:e.jsx(g,{title:"Brand Watermarked Content"})}};var T,P,V;R.parameters={...R.parameters,docs:{...(T=R.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    text: "Confidential",
    rotate: -22,
    opacity: 0.15,
    fontSize: 14,
    fontColor: "rgba(0,0,0,0.15)",
    fontWeight: "normal",
    width: 120,
    height: 64,
    gap: [100, 100],
    children: <ContentCard title="Protected Content" description="Hover to see watermark overlay" />
  }
}`,...(V=(P=R.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var M,q,F;z.parameters={...z.parameters,docs:{...(M=z.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Text Watermark</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-text-secondary mb-2">Single text</p>
            <Watermark text="Confidential" opacity={0.15}>
              <ContentCard title="Single Line Watermark" />
            </Watermark>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Multi-line text</p>
            <Watermark text={["Acme Corp", "Internal Use Only"]} opacity={0.15}>
              <ContentCard title="Multi-line Watermark" />
            </Watermark>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Opacity Levels</h3>
        <div className="grid grid-cols-3 gap-4">
          {[0.05, 0.1, 0.2, 0.3, 0.4, 0.5].map(opacity => <div key={opacity}>
              <p className="text-xs text-text-secondary mb-2">opacity: {opacity}</p>
              <Watermark text="Draft" opacity={opacity} fontSize={12}>
                <div className="h-32 bg-surface border border-border rounded-lg flex items-center justify-center">
                  <span className="text-sm text-text-secondary">Content</span>
                </div>
              </Watermark>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Rotation</h3>
        <div className="grid grid-cols-3 gap-4">
          {[-45, -22, 0, 15, 30, 45].map(rotate => <div key={rotate}>
              <p className="text-xs text-text-secondary mb-2">rotate: {rotate}deg</p>
              <Watermark text="Sample" rotate={rotate} opacity={0.15} fontSize={12}>
                <div className="h-32 bg-surface border border-border rounded-lg flex items-center justify-center">
                  <span className="text-sm text-text-secondary">Content</span>
                </div>
              </Watermark>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-text-secondary mb-2">Default (rgba black)</p>
            <Watermark text="Watermark" fontColor="rgba(0,0,0,0.15)">
              <ContentCard title="Dark Watermark" />
            </Watermark>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Brand color</p>
            <Watermark text="ACME" fontColor="rgba(99,102,241,0.2)" fontWeight="bold">
              <ContentCard title="Brand Watermark" />
            </Watermark>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Red / restricted</p>
            <Watermark text="RESTRICTED" fontColor="rgba(239,68,68,0.15)" fontSize={12}>
              <ContentCard title="Restricted Content" />
            </Watermark>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Green / approved</p>
            <Watermark text="APPROVED" fontColor="rgba(34,197,94,0.2)" fontSize={12} fontWeight="bold">
              <ContentCard title="Approved Document" />
            </Watermark>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Font Sizes</h3>
        <div className="grid grid-cols-3 gap-4">
          {[10, 14, 18, 24, 32, 40].map(fontSize => <div key={fontSize}>
              <p className="text-xs text-text-secondary mb-2">fontSize: {fontSize}</p>
              <Watermark text="Sample" fontSize={fontSize} opacity={0.15}>
                <div className="h-32 bg-surface border border-border rounded-lg flex items-center justify-center">
                  <span className="text-xs text-text-secondary">Content</span>
                </div>
              </Watermark>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Gap (Density)</h3>
        <div className="grid grid-cols-3 gap-4">
          {([[40, 40], [100, 100], [200, 200]] as [number, number][]).map(([gx, gy]) => <div key={\`\${gx}-\${gy}\`}>
              <p className="text-xs text-text-secondary mb-2">gap: [{gx}, {gy}]</p>
              <Watermark text="Draft" gap={[gx, gy]} opacity={0.15} fontSize={12}>
                <div className="h-32 bg-surface border border-border rounded-lg" />
              </Watermark>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Realistic Document Example</h3>
        <Watermark text={["CONFIDENTIAL", "Internal Use Only"]} opacity={0.12} rotate={-30} fontSize={16} fontWeight="bold" gap={[80, 80]}>
          <LargeContent title="Q4 Financial Report" />
        </Watermark>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Draft Overlay</h3>
        <Watermark text="DRAFT" opacity={0.08} rotate={-45} fontSize={48} fontWeight="bold" fontColor="rgba(239,68,68,0.15)" gap={[60, 60]}>
          <LargeContent title="Contract v0.3 - Not for Distribution" />
        </Watermark>
      </section>
    </div>
}`,...(F=(q=z.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var B,_,$;A.parameters={...A.parameters,docs:{...(B=A.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: "Confidential",
    opacity: 0.15,
    rotate: -22,
    fontSize: 14,
    children: <LargeContent />
  }
}`,...($=(_=A.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var U,G,H;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    text: ["Acme Corporation", "Internal Use Only"],
    opacity: 0.12,
    rotate: -22,
    fontSize: 13,
    children: <LargeContent />
  }
}`,...(H=(G=E.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Q,Y,J;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    text: "DRAFT",
    opacity: 0.08,
    rotate: -45,
    fontSize: 42,
    fontWeight: "bold",
    fontColor: "rgba(239,68,68,0.15)",
    gap: [60, 60],
    children: <LargeContent title="Draft Document" />
  }
}`,...(J=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,X,Z;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    text: "ACME CORP",
    opacity: 0.15,
    rotate: -22,
    fontSize: 14,
    fontWeight: "bold",
    fontColor: "rgba(99,102,241,0.2)",
    children: <LargeContent title="Brand Watermarked Content" />
  }
}`,...(Z=(X=O.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ce=["Playground","Showcase","TextWatermark","MultiLineText","DraftWatermark","BrandWatermark"];export{O as BrandWatermark,I as DraftWatermark,E as MultiLineText,R as Playground,z as Showcase,A as TextWatermark,ce as __namedExportsOrder,ie as default};
