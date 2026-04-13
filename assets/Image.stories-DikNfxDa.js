import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as u,a as L}from"./utils-_uLxnvdl.js";import{R as M,r as i}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const q=L("",{variants:{fit:{cover:"object-cover",contain:"object-contain",fill:"object-fill",none:"object-none","scale-down":"object-scale-down"},radius:{none:"rounded-none",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl",full:"rounded-full"}},defaultVariants:{fit:"cover",radius:"md"}}),s=M.memo(({src:t,withBlur:m,className:x,classNames:a,fallbackSrc:P,fetchPriority:p="auto",loading:_,aspectRatio:g,fit:F="cover",radius:$="md",...n})=>{const[l,v]=i.useState(!1),[R,b]=i.useState(!1),[h,f]=i.useState(!1),j=i.useRef(null);i.useEffect(()=>{v(!1),b(!1),f(!1);const r=j.current;r!=null&&r.complete&&(r==null?void 0:r.naturalWidth)>0&&f(!0)},[t]);const V=()=>{f(!0)},W=()=>{l?b(!0):v(!0)},B=_??(p==="high"?"eager":"lazy");if(l&&R)return null;const y=e.jsx("img",{ref:j,onLoad:V,onError:W,src:l?P:t,className:u("image_image",q({fit:F,radius:$}),!h&&"opacity-0",h&&"opacity-100","transition-opacity duration-500 ease-in-out",l&&"image_error",l&&(a==null?void 0:a.error),a==null?void 0:a.image,x),style:{...g?{aspectRatio:g}:{},...n.style||{}},...n,alt:n.alt,loading:B,fetchPriority:p});return m?e.jsxs("div",{"data-slot":"root",className:u("image_root","relative overflow-hidden",a==null?void 0:a.root),style:{width:n.width?`${n.width}px`:void 0,height:n.height?`${n.height}px`:void 0},children:[!h&&e.jsx("div",{className:u("image_placeholder","absolute inset-0 animate-pulse bg-gradient-to-r from-surface via-background to-surface",a==null?void 0:a.placeholder)}),y]}):y});s.displayName="Image";s.__docgenInfo={description:"",methods:[],displayName:"Image",props:{fetchPriority:{defaultValue:{value:"'auto'",computed:!1},required:!1},fit:{defaultValue:{value:"'cover'",computed:!1},required:!1},radius:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const T={title:"General/Image",component:s,tags:["autodocs"],argTypes:{radius:{control:"select",options:["none","sm","md","lg","xl","full"]},fit:{control:"select",options:["cover","contain","fill","none","scale-down"]},fallbackSrc:{control:"text"},preview:{control:"boolean"}}},o=(t,m=400,x=300)=>`https://picsum.photos/seed/${t}/${m}/${x}`,c={args:{src:o("play"),alt:"Sample image",width:400,height:300,radius:"md"}},d={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Border Radius"}),e.jsx("div",{className:"flex flex-wrap gap-4 items-end",children:["none","sm","md","lg","xl","full"].map(t=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{src:o(t,80,80),alt:t,width:80,height:80,radius:t,fit:"cover"}),e.jsx("span",{className:"text-xs text-text-secondary",children:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Object Fit"}),e.jsx("div",{className:"flex flex-wrap gap-4",children:["cover","contain","fill","none"].map(t=>e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"w-24 h-16 border border-border rounded overflow-hidden",children:e.jsx(s,{src:o(t,200,100),alt:t,width:96,height:64,fit:t})}),e.jsx("span",{className:"text-xs text-text-secondary",children:t})]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Preview (click to zoom)"}),e.jsx("div",{className:"flex gap-4",children:["a","b","c"].map(t=>e.jsx(s,{src:o(t,200,150),alt:`Photo ${t}`,width:120,height:90,radius:"md",preview:!0},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Fallback on Error"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{src:"https://broken-url.jpg/404",alt:"Broken",width:120,height:90,radius:"md"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"No fallback"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(s,{src:"https://broken-url.jpg/404",alt:"Fallback",width:120,height:90,radius:"md",fallbackSrc:o("fallback",120,90)}),e.jsx("span",{className:"text-xs text-text-secondary",children:"With fallback"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Caption"}),e.jsx(s,{src:o("caption",400,200),alt:"Mountain landscape",width:400,height:200,radius:"lg",caption:"Mountain landscape — Picsum Photos"})]})]})};var w,k,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    src: src("play"),
    alt: "Sample image",
    width: 400,
    height: 300,
    radius: "md"
  }
}`,...(N=(k=c.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var E,I,S;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Border Radius</h3>
        <div className="flex flex-wrap gap-4 items-end">
          {(["none", "sm", "md", "lg", "xl", "full"] as const).map(r => <div key={r} className="flex flex-col items-center gap-2">
              <Image src={src(r, 80, 80)} alt={r} width={80} height={80} radius={r} fit="cover" />
              <span className="text-xs text-text-secondary">{r}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Object Fit</h3>
        <div className="flex flex-wrap gap-4">
          {(["cover", "contain", "fill", "none"] as const).map(fit => <div key={fit} className="flex flex-col items-center gap-2">
              <div className="w-24 h-16 border border-border rounded overflow-hidden">
                <Image src={src(fit, 200, 100)} alt={fit} width={96} height={64} fit={fit} />
              </div>
              <span className="text-xs text-text-secondary">{fit}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Preview (click to zoom)</h3>
        <div className="flex gap-4">
          {["a", "b", "c"].map(s => <Image key={s} src={src(s, 200, 150)} alt={\`Photo \${s}\`} width={120} height={90} radius="md" preview />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Fallback on Error</h3>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <Image src="https://broken-url.jpg/404" alt="Broken" width={120} height={90} radius="md" />
            <span className="text-xs text-text-secondary">No fallback</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image src="https://broken-url.jpg/404" alt="Fallback" width={120} height={90} radius="md" fallbackSrc={src("fallback", 120, 90)} />
            <span className="text-xs text-text-secondary">With fallback</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Caption</h3>
        <Image src={src("caption", 400, 200)} alt="Mountain landscape" width={400} height={200} radius="lg" caption="Mountain landscape — Picsum Photos" />
      </section>
    </div>
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const A=["Playground","Showcase"];export{c as Playground,d as Showcase,A as __namedExportsOrder,T as default};
