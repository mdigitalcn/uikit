import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as Te,c as p,s as ze,i as _e,a as ce}from"./utils-_uLxnvdl.js";import{R as pe,r as l}from"./index-ZH-6pyQh.js";import{u as Be}from"./useControllable-BTRR6hV3.js";import{u as Ee,R as Pe}from"./useRipple-BuuTbn0W.js";import{S as Fe}from"./index-CF05pSQ2.js";import{c as Ne}from"./variants-CTjkuV9j.js";import{P as Oe}from"./plus-BOfjiqhk.js";import{M as He}from"./minus-Bn6CyQhd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const $e=ce("w-full placeholder:text-text-secondary/50 [--_radius:var(--radius-input)] rounded-slot disabled:opacity-50 disabled:cursor-not-allowed read-only:bg-surface read-only:cursor-default outline-none text-text-primary transition-colors",{variants:{variant:{outline:"bg-background border border-border hover:border-slot-50 focus:border-slot focus:ring-2 focus:ring-slot-30",filled:"bg-surface border border-transparent hover:border-slot-30 focus:border-slot focus:ring-2 focus:ring-slot-30"},status:{default:"",error:"border-error",warning:"border-warning",info:"border-info",success:"border-success"},size:{xs:"h-(--input-height-xs) px-(--input-padding-x-xs) text-xs",sm:"h-(--input-height-sm) px-(--input-padding-x-sm) text-sm",md:"h-(--input-height-md) px-(--input-padding-x-md) text-base",lg:"h-(--input-height-lg) px-(--input-padding-x-lg) text-lg"},fullWidth:{true:"w-full",false:"max-w-full"},controlsPosition:{right:"",sides:""}},defaultVariants:{variant:"outline",status:"default",size:"md",fullWidth:!0,controlsPosition:"right"}}),ee=ce("flex items-center justify-center cursor-pointer transition-colors disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",{variants:{size:{xs:"w-(--input-height-xs) h-(--input-height-xs)",sm:"w-(--input-height-sm) h-(--input-height-sm)",md:"w-(--input-height-md) h-(--input-height-md)",lg:"w-(--input-height-lg) h-(--input-height-lg)"},position:{right:"hover:bg-surface",sides:"hover:bg-surface"}},defaultVariants:{size:"md",position:"right"}}),te=pe.memo(({children:x,disabled:I,className:D,...u})=>{const{ripples:d,onPointerDown:m,onKeyDown:b,onAnimationEnd:k}=Ee(!I);return e.jsxs("button",{className:p(D,"relative overflow-hidden"),onPointerDown:m,onKeyDown:b,disabled:I,...u,children:[x,e.jsx(Pe,{ripples:d,onAnimationEnd:k})]})}),n=pe.memo(({value:x,defaultValue:I,onChange:D,min:u,max:d,step:m=1,precision:b,variant:k="outline",size:j="md",color:B="primary",label:E,placeholder:me,disabled:h=!1,readOnly:f=!1,required:be=!1,controls:v=!0,controlsPosition:a="right",clampOnBlur:P=!0,className:F,classNames:t,error:N,warning:O,info:H,success:$,helperText:A,loading:g=!1,fullWidth:w=!0,ref:xe,id:he,name:fe})=>{const[s,K]=Be({value:x,defaultValue:I,onChange:D}),U=l.useId(),W=he||`number-input-${U}`,T=`number-input-helper-${U}`,{status:i,message:C}=l.useMemo(()=>Te({error:N,warning:O,info:H,success:$,helperText:A}),[N,O,H,$,A]),ge=l.useCallback(r=>r===void 0||isNaN(r)?"":b!==void 0?r.toFixed(b):String(r),[b]),L=l.useCallback(r=>{if(r===""||r==="-")return;const o=parseFloat(r);return isNaN(o)?void 0:o},[]),y=l.useCallback(r=>{if(r===void 0)return;let o=r;return u!==void 0&&o<u&&(o=u),d!==void 0&&o>d&&(o=d),o},[u,d]),c=l.useCallback(r=>{K(r)},[K]),ve=l.useCallback(r=>{const o=r.target.value;if(o===""||o==="-"){c(void 0);return}const V=L(o);V!==void 0&&c(V)},[L,c]),ye=l.useCallback(()=>{if(P&&s!==void 0){const r=y(s);r!==s&&c(r)}},[P,s,y,c]),S=l.useCallback(r=>{const o=String(m),V=o.includes(".")?o.split(".")[1].length:0,Y=b!==void 0?Math.max(b,V):V;if(Y===0)return r;const Z=Math.pow(10,Y);return Math.round(r*Z)/Z},[m,b]),z=l.useCallback(()=>{const r=S((s??0)+m),o=y(r);c(o)},[s,m,y,c,S]),_=l.useCallback(()=>{const r=S((s??0)-m),o=y(r);c(o)},[s,m,y,c,S]),je=l.useCallback(r=>{f||h||(r.key==="ArrowUp"?(r.preventDefault(),z()):r.key==="ArrowDown"&&(r.preventDefault(),_()))},[f,h,z,_]),Ve=l.useMemo(()=>!!(h||f||g||d!==void 0&&s!==void 0&&s>=d),[h,f,g,d,s]),Ie=l.useMemo(()=>!!(h||f||g||u!==void 0&&s!==void 0&&s<=u),[h,f,g,u,s]),we=l.useMemo(()=>C?T:void 0,[C,T]),Ce=l.useMemo(()=>p("number-input_root","w-full flex flex-col relative",Ne[i!=="default"?i:B],!w&&"inline-block",t==null?void 0:t.root),[w,B,t==null?void 0:t.root]),Se=l.useMemo(()=>p("number-input_label","text-sm font-medium text-text-secondary mb-0.5",t==null?void 0:t.label),[t==null?void 0:t.label]),qe=l.useMemo(()=>p("number-input_wrapper","relative flex items-center",g&&"opacity-50 pointer-events-none cursor-not-allowed",a==="sides"&&"gap-1",t==null?void 0:t.wrapper),[g,a,t==null?void 0:t.wrapper]),Me=l.useMemo(()=>p("number-input_input",$e({variant:k,status:i,size:j,fullWidth:w,controlsPosition:a}),v&&a==="right"&&"pr-16",v&&a==="sides"&&"text-center",F,t==null?void 0:t.input),[i,j,w,a,v,F,t==null?void 0:t.input]),Q={default:"border-border",error:"border-error",warning:"border-warning",info:"border-info",success:"border-success"},Re=l.useMemo(()=>p("number-input_controls","flex",a==="right"&&`absolute right-0 top-0 h-full border-l ${Q[i]||"border-border"}`,a==="sides"&&"gap-1",t==null?void 0:t.controls),[a,t==null?void 0:t.controls,i]),De=l.useMemo(()=>p("number-input_helper",ze({status:i}),"mt-0.5",i==="error"?t==null?void 0:t.error:t==null?void 0:t.helper),[i,t==null?void 0:t.error,t==null?void 0:t.helper]),G=_e[j],J=e.jsx(te,{type:"button",onClick:z,disabled:Ve,"data-slot":"increment",className:p("number-input_increment h-full!",ee({size:j,position:a}),a==="right"&&"",t==null?void 0:t.increment),"aria-label":"Increment value",tabIndex:-1,children:e.jsx(Oe,{className:G,"aria-hidden":"true"})}),X=e.jsx(te,{type:"button",onClick:_,disabled:Ie,"data-slot":"decrement",className:p("number-input_decrement h-full!",ee({size:j,position:a}),a==="right"&&`border-r ${Q[i]||"border-border"}`,t==null?void 0:t.decrement),"aria-label":"Decrement value",tabIndex:-1,children:e.jsx(He,{className:G,"aria-hidden":"true"})}),ke=e.jsxs("div",{"data-slot":"wrapper",className:qe,children:[v&&a==="sides"&&X,e.jsx("input",{ref:xe,id:W,name:fe,type:"text",inputMode:"decimal","data-slot":"input",className:Me,value:ge(s),onChange:ve,onBlur:ye,onKeyDown:je,disabled:h,readOnly:f,placeholder:me,"aria-invalid":i==="error","aria-describedby":we,"aria-valuemin":u,"aria-valuemax":d,"aria-valuenow":s}),v&&a==="right"&&e.jsx("div",{"data-slot":"controls",className:Re,children:e.jsxs("div",{className:"flex flex-row h-full",children:[X,J]})}),v&&a==="sides"&&J,g&&e.jsx("div",{className:"absolute right-3 flex items-center",children:e.jsx(Fe,{"aria-hidden":"true"})})]});return e.jsxs("div",{"data-slot":"root",className:Ce,children:[E&&e.jsxs("label",{htmlFor:W,"data-slot":"label",className:Se,children:[E,be&&e.jsx("span",{className:"text-error ml-1",children:"*"})]}),ke,C&&e.jsx("p",{id:T,"data-slot":"helper",className:De,children:C})]})});n.displayName="NumberInput";n.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{step:{defaultValue:{value:"1",computed:!1},required:!1},variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},color:{defaultValue:{value:'"primary"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},controls:{defaultValue:{value:"true",computed:!1},required:!1},controlsPosition:{defaultValue:{value:'"right"',computed:!1},required:!1},clampOnBlur:{defaultValue:{value:"true",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"true",computed:!1},required:!1}}};const et={title:"Form/NumberInput",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled"]},size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},controlsPosition:{control:"select",options:["right","sides"]},messagePosition:{control:"select",options:["top","bottom"]},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},error:{control:"text"},warning:{control:"text"},info:{control:"text"},success:{control:"text"},min:{control:"number"},max:{control:"number"},step:{control:"number"},precision:{control:"number"},controls:{control:"boolean"},clampOnBlur:{control:"boolean"},fullWidth:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"},loading:{control:"boolean"}}},q={args:{label:"Quantity",placeholder:"0",variant:"outline",size:"md",color:"primary",controls:!0,defaultValue:1,min:0,max:100,step:1}},M={render:()=>e.jsxs("div",{className:"space-y-10 max-w-md",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Variants"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{variant:"outline",label:"Outline",placeholder:"0",controls:!0}),e.jsx(n,{variant:"filled",label:"Filled",placeholder:"0",controls:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Sizes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{size:"xs",placeholder:"xs",controls:!0}),e.jsx(n,{size:"sm",placeholder:"sm",controls:!0}),e.jsx(n,{size:"md",placeholder:"md",controls:!0}),e.jsx(n,{size:"lg",placeholder:"lg",controls:!0})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Controls Position"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{label:"Controls on right (default)",controls:!0,controlsPosition:"right",defaultValue:5}),e.jsx(n,{label:"Controls on sides",controls:!0,controlsPosition:"sides",defaultValue:5}),e.jsx(n,{label:"No controls",defaultValue:10,placeholder:"No stepper buttons"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Min / Max / Step"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{label:"Range 0-10, step 1",min:0,max:10,step:1,defaultValue:5,controls:!0,helperText:"Range: 0–10"}),e.jsx(n,{label:"Range 0-100, step 5",min:0,max:100,step:5,defaultValue:50,controls:!0,helperText:"Increments of 5"}),e.jsx(n,{label:"Decimal step (0.1)",min:0,max:1,step:.1,precision:1,defaultValue:.5,controls:!0,helperText:"Range: 0.0–1.0"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Validation States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{label:"Error",placeholder:"0",error:"Value must be greater than 0"}),e.jsx(n,{label:"Warning",placeholder:"0",warning:"High values may cause performance issues",defaultValue:9999}),e.jsx(n,{label:"Success",placeholder:"0",success:"Valid quantity",defaultValue:5}),e.jsx(n,{label:"Info",placeholder:"0",info:"Enter quantity in units"}),e.jsx(n,{label:"Helper text",placeholder:"0",helperText:"Must be between 1 and 99",min:1,max:99})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{label:"Disabled",disabled:!0,defaultValue:5,controls:!0}),e.jsx(n,{label:"Read only",readOnly:!0,defaultValue:42}),e.jsx(n,{label:"Loading",loading:!0,controls:!0}),e.jsx(n,{label:"Required",required:!0,placeholder:"Required",controls:!0}),e.jsx(n,{label:"Clamp on blur",min:0,max:10,clampOnBlur:!0,defaultValue:5,controls:!0,helperText:"Value clamps to range on blur"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Colors"}),e.jsx("div",{className:"space-y-3",children:["primary","secondary","accent","success"].map(x=>e.jsx(n,{color:x,label:x,defaultValue:5,controls:!0},x))})]})]})},R={render:()=>e.jsxs("div",{className:"space-y-3 max-w-sm",children:[e.jsx(n,{label:"Price",placeholder:"0.00",step:.01,precision:2,min:0,controls:!0,helperText:"USD"}),e.jsx(n,{label:"Percentage",placeholder:"0.0",step:.1,precision:1,min:0,max:100,controls:!0,helperText:"%"}),e.jsx(n,{label:"Rating",placeholder:"0.0",step:.5,precision:1,min:0,max:5,controls:!0,helperText:"Out of 5.0"})]})};var re,ne,le;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: "Quantity",
    placeholder: "0",
    variant: "outline",
    size: "md",
    color: "primary",
    controls: true,
    defaultValue: 1,
    min: 0,
    max: 100,
    step: 1
  }
}`,...(le=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var oe,ae,se;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <NumberInput variant="outline" label="Outline" placeholder="0" controls />
          <NumberInput variant="filled" label="Filled" placeholder="0" controls />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <NumberInput size="xs" placeholder="xs" controls />
          <NumberInput size="sm" placeholder="sm" controls />
          <NumberInput size="md" placeholder="md" controls />
          <NumberInput size="lg" placeholder="lg" controls />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Controls Position</h3>
        <div className="space-y-3">
          <NumberInput label="Controls on right (default)" controls controlsPosition="right" defaultValue={5} />
          <NumberInput label="Controls on sides" controls controlsPosition="sides" defaultValue={5} />
          <NumberInput label="No controls" defaultValue={10} placeholder="No stepper buttons" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Min / Max / Step</h3>
        <div className="space-y-3">
          <NumberInput label="Range 0-10, step 1" min={0} max={10} step={1} defaultValue={5} controls helperText="Range: 0–10" />
          <NumberInput label="Range 0-100, step 5" min={0} max={100} step={5} defaultValue={50} controls helperText="Increments of 5" />
          <NumberInput label="Decimal step (0.1)" min={0} max={1} step={0.1} precision={1} defaultValue={0.5} controls helperText="Range: 0.0–1.0" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <NumberInput label="Error" placeholder="0" error="Value must be greater than 0" />
          <NumberInput label="Warning" placeholder="0" warning="High values may cause performance issues" defaultValue={9999} />
          <NumberInput label="Success" placeholder="0" success="Valid quantity" defaultValue={5} />
          <NumberInput label="Info" placeholder="0" info="Enter quantity in units" />
          <NumberInput label="Helper text" placeholder="0" helperText="Must be between 1 and 99" min={1} max={99} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <NumberInput label="Disabled" disabled defaultValue={5} controls />
          <NumberInput label="Read only" readOnly defaultValue={42} />
          <NumberInput label="Loading" loading controls />
          <NumberInput label="Required" required placeholder="Required" controls />
          <NumberInput label="Clamp on blur" min={0} max={10} clampOnBlur defaultValue={5} controls helperText="Value clamps to range on blur" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success"] as const).map(color => <NumberInput key={color} color={color} label={color} defaultValue={5} controls />)}
        </div>
      </section>
    </div>
}`,...(se=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,ue,de;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 max-w-sm">
      <NumberInput label="Price" placeholder="0.00" step={0.01} precision={2} min={0} controls helperText="USD" />
      <NumberInput label="Percentage" placeholder="0.0" step={0.1} precision={1} min={0} max={100} controls helperText="%" />
      <NumberInput label="Rating" placeholder="0.0" step={0.5} precision={1} min={0} max={5} controls helperText="Out of 5.0" />
    </div>
}`,...(de=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const tt=["Playground","Showcase","PrecisionDecimals"];export{q as Playground,R as PrecisionDecimals,M as Showcase,tt as __namedExportsOrder,et as default};
