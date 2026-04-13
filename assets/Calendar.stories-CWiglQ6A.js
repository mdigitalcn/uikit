import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as i,r as ie}from"./index-ZH-6pyQh.js";import{c as C,a as X}from"./utils-_uLxnvdl.js";import{u as ce}from"./useControllable-BTRR6hV3.js";import{c as le}from"./variants-CTjkuV9j.js";import{C as de}from"./chevron-left-BPVU9fuB.js";import{C as ue}from"./chevron-right-DY5KYsnV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const xe=X("inline-flex flex-col select-none",{variants:{size:{xs:"text-xs gap-1",sm:"text-sm gap-1.5",md:"text-sm gap-2",lg:"text-base gap-2.5"}},defaultVariants:{size:"md"}}),H=X("flex items-center justify-center rounded-button transition-colors cursor-pointer font-normal",{variants:{size:{xs:"w-7 h-7 text-xs",sm:"w-8 h-8 text-sm",md:"w-9 h-9 text-sm",lg:"w-10 h-10 text-base"}},defaultVariants:{size:"md"}}),K="inline-flex items-center justify-center rounded-button w-7 h-7 hover:bg-surface transition-colors cursor-pointer text-text-secondary hover:text-text-primary";function N(r,o){return r.getFullYear()===o.getFullYear()&&r.getMonth()===o.getMonth()&&r.getDate()===o.getDate()}function L(r,o){return new Date(r,o+1,0).getDate()}function me(r,o,w,y){const z=new Date(r,o,1).getDay(),m=L(r,o),h=L(r,o-1),g=(z-w+7)%7,f=[];let c=[];for(let l=0;l<g;l++){const d=h-g+1+l;c.push({date:new Date(r,o-1,d),outside:!0})}for(let l=1;l<=m;l++)c.push({date:new Date(r,o,l),outside:!1}),c.length===7&&(f.push(c),c=[]);if(c.length>0){let l=1;for(;c.length<7;)c.push({date:new Date(r,o+1,l++),outside:!0});f.push(c)}return y?f:f.map(l=>l.map(d=>d.outside?{...d,date:d.date}:d))}const pe=["Su","Mo","Tu","We","Th","Fr","Sa"],fe=["January","February","March","April","May","June","July","August","September","October","November","December"],x=i.memo(({value:r,defaultValue:o,onChange:w,month:y,defaultMonth:z,onMonthChange:m,minDate:h,maxDate:g,disabledDates:f,size:c="md",color:l="primary",weekStartsOn:d=0,showOutsideDays:_=!0,className:Z,classNames:n})=>{const D=i.useMemo(()=>new Date,[]),ee=i.useMemo(()=>w?a=>{a&&w(a)}:void 0,[w]),[v,R]=ce({value:r,defaultValue:o??null,onChange:ee}),[te,T]=i.useState(z??o??D),q=y??te,b=q.getFullYear(),p=q.getMonth(),ae=i.useMemo(()=>me(b,p,d,_),[b,p,d,_]),re=i.useMemo(()=>{const a=[];for(let t=0;t<7;t++)a.push(pe[(d+t)%7]);return a},[d]),M=i.useCallback(a=>{const t=new Date(b,p+a,1);y===void 0&&T(t),m==null||m(t)},[b,p,y,m]),j=i.useCallback(a=>h&&a<new Date(h.getFullYear(),h.getMonth(),h.getDate())||g&&a>new Date(g.getFullYear(),g.getMonth(),g.getDate())?!0:(f==null?void 0:f(a))??!1,[h,g,f]),F=i.useCallback(a=>{j(a)||(R(a),a.getMonth()!==p&&M(a.getMonth()-p))},[j,R,p,M]),ne=i.useCallback(a=>{const t=a.currentTarget.dataset.date;t&&F(new Date(t))},[F]),se=i.useCallback(a=>{const t=a.currentTarget.dataset.date;t&&P(new Date(t))},[]),[A,P]=i.useState(null),I=i.useRef(null),W=i.useCallback(a=>{if(P(a),a.getMonth()!==p||a.getFullYear()!==b){const t=new Date(a.getFullYear(),a.getMonth(),1);y===void 0&&T(t),m==null||m(t)}requestAnimationFrame(()=>{if(!I.current)return;const t=I.current.querySelectorAll('button[role="gridcell"]');for(const s of t)if(s.textContent===String(a.getDate())&&!s.classList.contains("invisible")){s.focus();break}})},[p,b,y,m]),oe=i.useCallback(a=>{const t=A??v??D;let s=null;switch(a.key){case"ArrowRight":s=new Date(t.getFullYear(),t.getMonth(),t.getDate()+1);break;case"ArrowLeft":s=new Date(t.getFullYear(),t.getMonth(),t.getDate()-1);break;case"ArrowDown":s=new Date(t.getFullYear(),t.getMonth(),t.getDate()+7);break;case"ArrowUp":s=new Date(t.getFullYear(),t.getMonth(),t.getDate()-7);break;case"PageDown":s=new Date(t.getFullYear(),t.getMonth()+(a.shiftKey?12:1),t.getDate());break;case"PageUp":s=new Date(t.getFullYear(),t.getMonth()-(a.shiftKey?12:1),t.getDate());break;case"Home":s=new Date(t.getFullYear(),t.getMonth(),1);break;case"End":s=new Date(t.getFullYear(),t.getMonth()+1,0);break;case"Enter":case" ":a.preventDefault(),F(t);return;default:return}a.preventDefault(),s&&!j(s)&&W(s)},[A,v,D,W,F,j]);return e.jsxs("div",{"data-slot":"root",className:C("calendar_root",xe({size:c}),le[l],n==null?void 0:n.root,Z),children:[e.jsxs("div",{"data-slot":"header",className:C("calendar_header","flex items-center justify-between px-1",n==null?void 0:n.header),children:[e.jsx("button",{type:"button",onClick:()=>M(-1),className:K,"aria-label":"Previous month",children:e.jsx(de,{className:"w-4 h-4"})}),e.jsxs("span",{className:"font-semibold text-text-primary",children:[fe[p]," ",b]}),e.jsx("button",{type:"button",onClick:()=>M(1),className:K,"aria-label":"Next month",children:e.jsx(ue,{className:"w-4 h-4"})})]}),e.jsxs("div",{ref:I,"data-slot":"grid",className:C("calendar_grid","grid grid-cols-7",n==null?void 0:n.grid),role:"grid",onKeyDown:oe,children:[re.map(a=>e.jsx("div",{role:"columnheader",className:C("calendar_dayName",H({size:c}),"font-medium text-text-secondary cursor-default",n==null?void 0:n.dayName),children:a},a)),ae.map((a,t)=>a.map(({date:s,outside:V})=>{const k=j(s),E=N(s,D),S=v?N(s,v):!1;return e.jsx("button",{type:"button",role:"gridcell",disabled:k,"aria-disabled":k||void 0,"data-date":s.toISOString(),onClick:ne,onFocus:se,tabIndex:N(s,A??v??D)&&!V?0:-1,"aria-selected":S,"aria-current":E?"date":void 0,className:C("calendar_day",H({size:c}),V&&"text-text-secondary/40",V&&!_&&"invisible",k&&"opacity-30 cursor-not-allowed",!k&&!S&&"hover:bg-surface",E&&!S&&"border border-slot text-slot",S&&"bg-slot text-slot-fg",n==null?void 0:n.day,E&&(n==null?void 0:n.today),S&&(n==null?void 0:n.selected),V&&(n==null?void 0:n.outside),k&&(n==null?void 0:n.disabled)),children:s.getDate()},`${t}-${s.toISOString()}`)}))]})]})});x.displayName="Calendar";x.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},weekStartsOn:{defaultValue:{value:"0",computed:!1},required:!1},showOutsideDays:{defaultValue:{value:"true",computed:!1},required:!1}}};const Ce={title:"Data Entry/Calendar",component:x,tags:["autodocs"],argTypes:{color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},size:{control:"select",options:["xs","sm","md","lg"]},weekStartsOn:{control:"select",options:[0,1,2,3,4,5,6]},showOutsideDays:{control:"boolean"}}},u=new Date,Y={args:{color:"primary",size:"md",showOutsideDays:!0,weekStartsOn:0,defaultValue:u}},ge=()=>{const[r,o]=ie.useState(u);return e.jsxs("div",{className:"space-y-3",children:[e.jsx(x,{value:r,onChange:o,color:"primary"}),e.jsxs("p",{className:"text-xs text-text-secondary",children:["Selected: ",r?r.toLocaleDateString():"none"]})]})},O={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-3xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap gap-6 items-start",children:["xs","sm","md","lg"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:r}),e.jsx(x,{size:r,defaultValue:u})]},r))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Colors"}),e.jsx("div",{className:"flex flex-wrap gap-6 items-start",children:["primary","secondary","accent","success","error","warning","info"].map(r=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:r}),e.jsx(x,{color:r,defaultValue:u,size:"sm"})]},r))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Controlled Selection"}),e.jsx(ge,{})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Min / Max Constraints"}),e.jsxs("div",{className:"flex flex-wrap gap-6 items-start",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"min = today"}),e.jsx(x,{minDate:u,maxDate:new Date(u.getFullYear(),u.getMonth()+2,u.getDate()),color:"primary"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-2",children:"max = today"}),e.jsx(x,{maxDate:u,color:"accent"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Custom Disabled Dates (weekends)"}),e.jsx(x,{disabledDates:r=>r.getDay()===0||r.getDay()===6,color:"primary"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Hide Outside Days"}),e.jsx(x,{showOutsideDays:!1,defaultValue:u,color:"secondary"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Week Starts on Monday"}),e.jsx(x,{weekStartsOn:1,defaultValue:u,color:"primary"})]})]})};var J,G,U;Y.parameters={...Y.parameters,docs:{...(J=Y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    color: "primary",
    size: "md",
    showOutsideDays: true,
    weekStartsOn: 0,
    defaultValue: today
  }
}`,...(U=(G=Y.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var $,B,Q;O.parameters={...O.parameters,docs:{...($=O.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex flex-wrap gap-6 items-start">
          {(["xs", "sm", "md", "lg"] as const).map(s => <div key={s}>
              <p className="text-xs text-text-secondary mb-2">{s}</p>
              <Calendar size={s} defaultValue={today} />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-6 items-start">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(c => <div key={c}>
              <p className="text-xs text-text-secondary mb-2">{c}</p>
              <Calendar color={c} defaultValue={today} size="sm" />
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Controlled Selection
        </h3>
        <ControlledDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Min / Max Constraints
        </h3>
        <div className="flex flex-wrap gap-6 items-start">
          <div>
            <p className="text-xs text-text-secondary mb-2">min = today</p>
            <Calendar minDate={today} maxDate={new Date(today.getFullYear(), today.getMonth() + 2, today.getDate())} color="primary" />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">max = today</p>
            <Calendar maxDate={today} color="accent" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Custom Disabled Dates (weekends)
        </h3>
        <Calendar disabledDates={date => date.getDay() === 0 || date.getDay() === 6} color="primary" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Hide Outside Days
        </h3>
        <Calendar showOutsideDays={false} defaultValue={today} color="secondary" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Week Starts on Monday
        </h3>
        <Calendar weekStartsOn={1} defaultValue={today} color="primary" />
      </section>
    </div>
}`,...(Q=(B=O.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};const Me=["Playground","Showcase"];export{Y as Playground,O as Showcase,Me as __namedExportsOrder,Ce as default};
