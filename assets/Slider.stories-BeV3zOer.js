import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as F,r as x}from"./index-ZH-6pyQh.js";import{c as d,a as ae}from"./utils-_uLxnvdl.js";import{u as fe}from"./useControllable-BTRR6hV3.js";import{c as pe}from"./variants-CTjkuV9j.js";import"./_commonjsHelpers-CqkleIqs.js";const he=ae("relative rounded-full",{variants:{size:{xs:"",sm:"",md:"",lg:""},orientation:{horizontal:"",vertical:""}},compoundVariants:[{orientation:"horizontal",size:"xs",class:"h-1"},{orientation:"horizontal",size:"sm",class:"h-2"},{orientation:"horizontal",size:"md",class:"h-3"},{orientation:"horizontal",size:"lg",class:"h-4"},{orientation:"vertical",size:"xs",class:"w-1"},{orientation:"vertical",size:"sm",class:"w-2"},{orientation:"vertical",size:"md",class:"w-3"},{orientation:"vertical",size:"lg",class:"w-4"}],defaultVariants:{size:"md",orientation:"horizontal"}}),ve=ae("[--_duration:var(--duration-fast)] absolute rounded-full border-2 bg-background cursor-pointer hover:scale-110 active:scale-100 transition-transform duration-slot",{variants:{size:{xs:"w-3 h-3",sm:"w-3.5 h-3.5",md:"w-4 h-4",lg:"w-6 h-6"}},defaultVariants:{size:"md"}}),be=i=>i==="soft"?"bg-slot-10":i==="solid"?"bg-slot-20":"bg-slot-10",U=i=>i==="default"?"bg-slot-20 border-slot":i==="solid"?"bg-slot":"bg-slot-50",ye=i=>i==="soft"?"border-slot-50":"border-slot",l=F.memo(({value:i,defaultValue:$=50,min:n=0,max:m=100,step:g=1,color:se="primary",size:L="md",variant:z="default",orientation:R="horizontal",onChange:le,disabled:u=!1,className:ne,classNames:a,footer:w=!1,range:p=!1,marks:_,showTooltip:re=!1})=>{const c=R==="vertical",[V,h]=fe({value:i,defaultValue:$,onChange:le}),[oe,W]=x.useState(null),q=x.useRef(null),N=x.useRef(!1),E=x.useRef(0),S=Array.isArray(V)?V:[V??n],T=t=>(t-n)/(m-n)*100,C=x.useCallback((t,s)=>{if(!q.current)return n;const o=q.current.getBoundingClientRect(),r=c?1-(s-o.top)/o.height:(t-o.left)/o.width,f=n+r*(m-n),v=Math.round(f/g)*g;return Math.max(n,Math.min(m,v))},[c,n,m,g]),G=x.useCallback(t=>{h(p?s=>{const r=[...Array.isArray(s)?s:[s??n]];return r[E.current]=t,r.sort((f,v)=>f-v),r}:t)},[p,h,n]),M=x.useCallback(t=>{!N.current||u||G(C(t.clientX,t.clientY))},[u,G,C]),[P,K]=x.useState(!1),ie=x.useCallback(t=>{if(u)return;const s=parseInt(t.currentTarget.dataset.index,10);N.current=!0,K(!0),E.current=s,W(s),t.target.setPointerCapture&&t.target.setPointerCapture(t.pointerId),t.preventDefault()},[u]),I=x.useCallback(()=>{N.current=!1,K(!1),W(null)},[]);F.useEffect(()=>{if(P)return document.addEventListener("pointermove",M),document.addEventListener("pointerup",I),()=>{document.removeEventListener("pointermove",M),document.removeEventListener("pointerup",I)}},[P,M,I]);const ce=x.useCallback(t=>{if(u||N.current)return;const s=C(t.clientX,t.clientY);h(p?o=>{const r=Array.isArray(o)?o:[o??n];let f=0,v=Math.abs(s-(r[0]||0));for(let j=1;j<r.length;j++){const b=Math.abs(s-(r[j]||0));b<v&&(v=b,f=j)}const y=[...r];return y[f]=s,y.sort((j,b)=>j-b),y}:s)},[u,C,p,h,n]),de=x.useCallback(t=>{if(u)return;const s=parseInt(t.currentTarget.dataset.index,10),o=Number(t.currentTarget.getAttribute("aria-valuenow"));let r=o;const f=c?["ArrowUp","ArrowRight"]:["ArrowRight","ArrowUp"],v=c?["ArrowDown","ArrowLeft"]:["ArrowLeft","ArrowDown"];if(f.includes(t.key))r=Math.min(m,o+g);else if(v.includes(t.key))r=Math.max(n,o-g);else if(t.key==="Home")r=n;else if(t.key==="End")r=m;else return;t.preventDefault(),h(p?y=>{const b=[...Array.isArray(y)?y:[y??n]];return b[s]=r,b.sort((xe,me)=>xe-me),b}:r)},[u,c,n,m,g,p,h]),O=(t,s)=>c?{bottom:`${t}%`,height:`${s-t}%`}:{left:`${t}%`,width:`${s-t}%`},ue=t=>c?{bottom:`${t}%`}:{left:`${t}%`};return e.jsxs("div",{"data-slot":"root",className:d(c?"h-full inline-flex flex-col items-center":"w-full",pe[se],"slider_root",a==null?void 0:a.root,ne),children:[c&&w===!0&&e.jsx("span",{className:d("text-sm text-text-secondary mb-1","slider_label",a==null?void 0:a.label),children:m}),e.jsxs("div",{ref:q,onClick:ce,className:d(he({size:L,orientation:R}),be(z),"relative cursor-pointer touch-none",c&&"h-full","slider_track",a==null?void 0:a.track,u&&"opacity-50 cursor-not-allowed"),children:[p&&S.length>1?S.slice(0,-1).map((t,s)=>{const o=T(t),r=T(S[s+1]);return e.jsx("div",{className:d("absolute rounded-full",c?"w-full":"h-full",U(z),"slider_range",a==null?void 0:a.range),style:O(o,r)},s)}):e.jsx("div",{className:d("absolute rounded-full",c?"w-full":"h-full",U(z),"slider_range",a==null?void 0:a.range),style:O(0,T(S[0]||0))}),S.map((t,s)=>{const o=T(t),r=o<=0,f=o>=100;return e.jsx("div",{role:"slider",tabIndex:u?-1:0,"aria-valuemin":n,"aria-valuemax":m,"aria-valuenow":t,"aria-disabled":u,"aria-orientation":R,"aria-label":p?`Slider thumb ${s+1}`:"Slider",className:d(ve({size:L}),ye(z),"-translate-x-1/2",u&&"cursor-not-allowed","focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slot",c?d("left-1/2 translate-y-1/2",r&&"translate-y-0",f&&"translate-y-full"):d("top-1/2 -translate-y-1/2",r&&"translate-x-0",f&&"-translate-x-full"),"slider_thumb",a==null?void 0:a.thumb),"data-index":s,style:ue(o),onPointerDown:ie,onKeyDown:de,children:e.jsx("div",{className:d("absolute bg-slot text-slot-fg text-xs px-2 py-1 rounded-tooltip whitespace-nowrap transition-opacity",re&&(oe===s||P&&E.current===s)?"opacity-100":"opacity-0 pointer-events-none",c?"left-full ml-2 top-1/2 -translate-y-1/2":"-top-8 left-1/2 -translate-x-1/2"),children:t})},s)})]}),_&&_.length>0&&!c&&e.jsx("div",{className:"relative w-full mt-2",children:_.map(t=>{const s=(t.value-n)/(m-n)*100;return e.jsxs("div",{className:"absolute -translate-x-1/2",style:{left:`${s}%`},children:[e.jsx("div",{className:"w-0.5 h-1.5 bg-border mx-auto mb-0.5"}),t.label&&e.jsx("span",{className:"text-xs text-text-secondary whitespace-nowrap",children:t.label})]},t.value)})}),c&&w===!0&&e.jsx("span",{className:d("text-sm text-text-secondary mt-1","slider_label",a==null?void 0:a.label),children:n}),!c&&w===!0&&e.jsxs("div",{className:"flex justify-between mt-1 text-sm text-text-secondary",children:[e.jsx("span",{className:d("slider_label",a==null?void 0:a.label),children:n}),e.jsx("span",{className:d("font-medium text-text-primary","slider_value",a==null?void 0:a.value),children:p&&Array.isArray(V)?V.join(" - "):V}),e.jsx("span",{className:d("slider_label",a==null?void 0:a.label),children:m})]}),w&&typeof w!="boolean"&&w]})});l.displayName="Slider";l.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{defaultValue:{defaultValue:{value:"50",computed:!1},required:!1},min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1},step:{defaultValue:{value:"1",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1},orientation:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},footer:{defaultValue:{value:"false",computed:!1},required:!1},range:{defaultValue:{value:"false",computed:!1},required:!1},showTooltip:{defaultValue:{value:"false",computed:!1},required:!1}}};const Ne={title:"Form/Slider",component:l,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","solid","soft"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},orientation:{control:"select",options:["horizontal","vertical"]},min:{control:"number"},max:{control:"number"},step:{control:"number"},disabled:{control:"boolean"},range:{control:"boolean"},showTooltip:{control:"boolean"},footer:{control:"boolean"}}},k={args:{defaultValue:40,min:0,max:100,step:1,variant:"default",color:"primary",size:"md",orientation:"horizontal",showTooltip:!1}},A={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),e.jsxs("div",{className:"space-y-6 max-w-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Default"}),e.jsx(l,{variant:"default",defaultValue:60})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Solid"}),e.jsx(l,{variant:"solid",defaultValue:60})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"Soft"}),e.jsx(l,{variant:"soft",defaultValue:60})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"space-y-4 max-w-sm",children:["primary","secondary","accent","success","error","warning","info"].map(i=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:i}),e.jsx(l,{color:i,defaultValue:55})]},i))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsxs("div",{className:"space-y-4 max-w-sm",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"xs"}),e.jsx(l,{size:"xs",defaultValue:50})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"sm"}),e.jsx(l,{size:"sm",defaultValue:50})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"md"}),e.jsx(l,{size:"md",defaultValue:50})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"lg"}),e.jsx(l,{size:"lg",defaultValue:50})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Range Slider"}),e.jsxs("div",{className:"space-y-4 max-w-sm",children:[e.jsx(l,{range:!0,defaultValue:[20,70]}),e.jsx(l,{range:!0,defaultValue:[10,90],color:"accent",showTooltip:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Tooltip"}),e.jsxs("div",{className:"space-y-4 max-w-sm",children:[e.jsx(l,{showTooltip:!0,defaultValue:65}),e.jsx(l,{showTooltip:!0,range:!0,defaultValue:[30,70],color:"secondary"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Marks"}),e.jsxs("div",{className:"space-y-6 max-w-sm",children:[e.jsx(l,{defaultValue:50,marks:[{value:0,label:"0"},{value:25,label:"25"},{value:50,label:"50"},{value:75,label:"75"},{value:100,label:"100"}]}),e.jsx(l,{defaultValue:2,min:1,max:5,step:1,color:"success",marks:[{value:1,label:"Poor"},{value:2,label:"Fair"},{value:3,label:"Good"},{value:4,label:"Great"},{value:5,label:"Excellent"}]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"With Footer"}),e.jsx("div",{className:"max-w-sm",children:e.jsx(l,{defaultValue:70,footer:!0})})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Vertical Orientation"}),e.jsxs("div",{className:"flex gap-8",style:{height:200},children:[e.jsx(l,{orientation:"vertical",defaultValue:60,color:"primary"}),e.jsx(l,{orientation:"vertical",defaultValue:40,color:"secondary"}),e.jsx(l,{orientation:"vertical",defaultValue:80,color:"accent",variant:"solid"}),e.jsx(l,{orientation:"vertical",range:!0,defaultValue:[20,70],color:"success"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Disabled"}),e.jsxs("div",{className:"space-y-4 max-w-sm",children:[e.jsx(l,{disabled:!0,defaultValue:40}),e.jsx(l,{disabled:!0,range:!0,defaultValue:[20,60]})]})]})]})},D={render:()=>{const[i,$]=F.useState([20,80]);return e.jsxs("div",{className:"space-y-4 max-w-sm",children:[e.jsxs("p",{className:"text-sm text-text-secondary",children:["Price range: ",e.jsxs("span",{className:"font-medium text-text-primary",children:["$",i[0]," - $",i[1]]})]}),e.jsx(l,{range:!0,value:i,onChange:n=>$(n),min:0,max:500,step:10,showTooltip:!0,color:"primary"}),e.jsxs("div",{className:"flex justify-between text-xs text-text-secondary",children:[e.jsx("span",{children:"$0"}),e.jsx("span",{children:"$500"})]})]})}};var H,X,Y;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    defaultValue: 40,
    min: 0,
    max: 100,
    step: 1,
    variant: "default",
    color: "primary",
    size: "md",
    orientation: "horizontal",
    showTooltip: false
  }
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var B,J,Q;A.parameters={...A.parameters,docs:{...(B=A.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-6 max-w-sm">
          <div>
            <p className="text-xs text-text-secondary mb-2">Default</p>
            <Slider variant="default" defaultValue={60} />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Solid</p>
            <Slider variant="solid" defaultValue={60} />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Soft</p>
            <Slider variant="soft" defaultValue={60} />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-4 max-w-sm">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(color => <div key={color}>
              <p className="text-xs text-text-secondary mb-2">{color}</p>
              <Slider color={color} defaultValue={55} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-4 max-w-sm">
          <div>
            <p className="text-xs text-text-secondary mb-2">xs</p>
            <Slider size="xs" defaultValue={50} />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">sm</p>
            <Slider size="sm" defaultValue={50} />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">md</p>
            <Slider size="md" defaultValue={50} />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">lg</p>
            <Slider size="lg" defaultValue={50} />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Range Slider</h3>
        <div className="space-y-4 max-w-sm">
          <Slider range defaultValue={[20, 70]} />
          <Slider range defaultValue={[10, 90]} color="accent" showTooltip />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Tooltip</h3>
        <div className="space-y-4 max-w-sm">
          <Slider showTooltip defaultValue={65} />
          <Slider showTooltip range defaultValue={[30, 70]} color="secondary" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Marks</h3>
        <div className="space-y-6 max-w-sm">
          <Slider defaultValue={50} marks={[{
          value: 0,
          label: "0"
        }, {
          value: 25,
          label: "25"
        }, {
          value: 50,
          label: "50"
        }, {
          value: 75,
          label: "75"
        }, {
          value: 100,
          label: "100"
        }]} />
          <Slider defaultValue={2} min={1} max={5} step={1} color="success" marks={[{
          value: 1,
          label: "Poor"
        }, {
          value: 2,
          label: "Fair"
        }, {
          value: 3,
          label: "Good"
        }, {
          value: 4,
          label: "Great"
        }, {
          value: 5,
          label: "Excellent"
        }]} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Footer</h3>
        <div className="max-w-sm">
          <Slider defaultValue={70} footer={true} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Vertical Orientation</h3>
        <div className="flex gap-8" style={{
        height: 200
      }}>
          <Slider orientation="vertical" defaultValue={60} color="primary" />
          <Slider orientation="vertical" defaultValue={40} color="secondary" />
          <Slider orientation="vertical" defaultValue={80} color="accent" variant="solid" />
          <Slider orientation="vertical" range defaultValue={[20, 70]} color="success" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Disabled</h3>
        <div className="space-y-4 max-w-sm">
          <Slider disabled defaultValue={40} />
          <Slider disabled range defaultValue={[20, 60]} />
        </div>
      </section>
    </div>
}`,...(Q=(J=A.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState([20, 80]);
    return <div className="space-y-4 max-w-sm">
        <p className="text-sm text-text-secondary">
          Price range: <span className="font-medium text-text-primary">\${value[0]} - \${value[1]}</span>
        </p>
        <Slider range value={value} onChange={v => setValue(v as number[])} min={0} max={500} step={10} showTooltip color="primary" />
        <div className="flex justify-between text-xs text-text-secondary">
          <span>$0</span>
          <span>$500</span>
        </div>
      </div>;
  }
}`,...(te=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Te=["Playground","Showcase","RangeSlider"];export{k as Playground,D as RangeSlider,A as Showcase,Te as __namedExportsOrder,Ne as default};
