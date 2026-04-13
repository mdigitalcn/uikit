import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as q,a as A}from"./utils-_uLxnvdl.js";import{R as h,r as m}from"./index-ZH-6pyQh.js";import{C as Y}from"./check-CKCh4cDT.js";import{C as Z}from"./copy-IW0OH-Me.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-BXJdBs6C.js";const $={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6"},F={1:"line-clamp-1",2:"line-clamp-2",3:"line-clamp-3",4:"line-clamp-4",5:"line-clamp-5",6:"line-clamp-6",7:"line-clamp-7",8:"line-clamp-8",9:"line-clamp-9",10:"line-clamp-10"},ee=A("",{variants:{level:{h1:"text-4xl font-bold tracking-tight",h2:"text-3xl font-semibold tracking-tight",h3:"text-2xl font-semibold",h4:"text-xl font-semibold",h5:"text-lg font-medium",h6:"text-base font-medium"}},defaultVariants:{level:"h1"}}),M=A("",{variants:{size:{xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl"},weight:{light:"font-light",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"}},defaultVariants:{size:"md",weight:"normal"}}),te={light:"font-light",normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},k={default:"text-text-primary",primary:"text-primary",secondary:"text-text-secondary",tertiary:"text-text-secondary/60",accent:"text-accent",success:"text-success",error:"text-error",warning:"text-warning",info:"text-info",inherit:""};function C({text:t}){const[l,a]=m.useState(!1),i=m.useCallback(async()=>{try{await navigator.clipboard.writeText(t),a(!0),setTimeout(()=>a(!1),2e3)}catch{}},[t]);return e.jsx("button",{type:"button",onClick:i,className:"inline-flex items-center ml-1 text-text-secondary hover:text-text-primary transition-colors cursor-pointer","aria-label":"Copy to clipboard",children:l?e.jsx(Y,{className:"w-3.5 h-3.5"}):e.jsx(Z,{className:"w-3.5 h-3.5"})})}function G(t,l){const[a,i]=m.useState(!1),[r,c]=m.useState(!1);return m.useEffect(()=>{if(!t||a||!l.current)return;const o=l.current;c(o.scrollHeight>o.clientHeight||o.scrollWidth>o.clientWidth)},[t,a,l]),{expanded:a,setExpanded:i,isTruncated:r}}const x=h.memo(({level:t="h1",color:l="default",copyable:a=!1,className:i,children:r,...c})=>{const o=$[t],d=typeof r=="string"?r:"";return h.createElement(o,{"data-slot":"title",className:q("typography_title",ee({level:t}),k[l]||"",i),...c},e.jsxs(e.Fragment,{children:[r,a&&d&&e.jsx(C,{text:d})]}))});x.displayName="Title";const s=h.memo(({size:t="md",weight:l,color:a="default",truncate:i,copyable:r=!1,code:c=!1,mark:o=!1,del:d=!1,underline:p=!1,strong:v=!1,italic:j=!1,as:f="span",className:N,children:w,...J})=>{const S=m.useRef(null),{expanded:z,setExpanded:K,isTruncated:Q}=G(i,S),V=typeof w=="string"?w:"",X=!z&&i?typeof i=="number"?F[i]??"line-clamp-6":"truncate":"";let n=w;return c&&(n=e.jsx("code",{className:"px-1 py-0.5 rounded-tag bg-surface text-sm font-mono",children:n})),o&&(n=e.jsx("mark",{className:"bg-warning/20 px-0.5 rounded-tag",children:n})),d&&(n=e.jsx("del",{children:n})),p&&(n=e.jsx("u",{children:n})),v&&(n=e.jsx("strong",{children:n})),j&&(n=e.jsx("em",{children:n})),h.createElement(f,{ref:S,"data-slot":"text",className:q("typography_text",M({size:t}),l&&te[l],k[a]||"",X,N),...J},e.jsxs(e.Fragment,{children:[n,r&&V&&e.jsx(C,{text:V}),Q&&!z&&e.jsx("button",{type:"button",onClick:()=>K(!0),className:"ml-1 cursor-pointer underline opacity-70 hover:opacity-100 transition-opacity",children:"more"})]}))});s.displayName="Text";const u=h.memo(({size:t="md",color:l="default",truncate:a,copyable:i=!1,className:r,children:c,...o})=>{const d=m.useRef(null),{expanded:p,setExpanded:v,isTruncated:j}=G(a,d),f=typeof c=="string"?c:"",N=!p&&a?typeof a=="number"?F[a]??"line-clamp-6":"truncate":"";return e.jsxs("p",{ref:d,"data-slot":"paragraph",className:q("typography_paragraph",M({size:t}),k[l]||"",N,"leading-relaxed",r),...o,children:[c,i&&f&&e.jsx(C,{text:f}),j&&!p&&e.jsx("button",{type:"button",onClick:()=>v(!0),className:"ml-1 cursor-pointer underline opacity-70 hover:opacity-100 transition-opacity",children:"more"})]})});u.displayName="Paragraph";x.__docgenInfo={description:"",methods:[],displayName:"Title",props:{level:{defaultValue:{value:"'h1'",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},copyable:{defaultValue:{value:"false",computed:!1},required:!1}}};s.__docgenInfo={description:"",methods:[],displayName:"Text",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},copyable:{defaultValue:{value:"false",computed:!1},required:!1},code:{defaultValue:{value:"false",computed:!1},required:!1},mark:{defaultValue:{value:"false",computed:!1},required:!1},del:{defaultValue:{value:"false",computed:!1},required:!1},underline:{defaultValue:{value:"false",computed:!1},required:!1},strong:{defaultValue:{value:"false",computed:!1},required:!1},italic:{defaultValue:{value:"false",computed:!1},required:!1},as:{defaultValue:{value:"'span'",computed:!1},required:!1}}};u.__docgenInfo={description:"",methods:[],displayName:"Paragraph",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},copyable:{defaultValue:{value:"false",computed:!1},required:!1}}};const ce={title:"General/Typography",component:x,tags:["autodocs"],argTypes:{level:{control:"select",options:["h1","h2","h3","h4","h5","h6"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info","inherit"]},copyable:{control:"boolean"}}},y={args:{level:"h2",children:"Typography Playground",color:"default",copyable:!1}},b={render:()=>e.jsxs("div",{className:"space-y-10",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Title Levels"}),e.jsx("div",{className:"space-y-2",children:["h1","h2","h3","h4","h5","h6"].map(t=>e.jsxs(x,{level:t,children:["Heading ",t.toUpperCase()," — The quick brown fox"]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Title Colors"}),e.jsx("div",{className:"space-y-1",children:["default","primary","secondary","accent","success","error","warning","info"].map(t=>e.jsxs(x,{level:"h4",color:t,children:[t," title"]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Copyable Title"}),e.jsx(x,{level:"h4",copyable:!0,children:"Click the copy icon to copy this heading"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Text Sizes"}),e.jsx("div",{className:"space-y-1",children:["xs","sm","md","lg","xl","2xl"].map(t=>e.jsx("div",{children:e.jsxs(s,{size:t,children:["Size ",t," — The quick brown fox jumps over the lazy dog"]})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Text Weights"}),e.jsx("div",{className:"space-y-1",children:["light","normal","medium","semibold","bold"].map(t=>e.jsx("div",{children:e.jsxs(s,{weight:t,children:[t," — The quick brown fox jumps over the lazy dog"]})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Text Colors"}),e.jsx("div",{className:"space-y-1",children:["default","secondary","tertiary","primary","accent","success","error","warning","info"].map(t=>e.jsx("div",{children:e.jsxs(s,{color:t,children:[t," — The quick brown fox"]})},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Text Decorations"}),e.jsxs("div",{className:"space-y-2 flex flex-col",children:[e.jsx(s,{strong:!0,children:"Bold / strong text"}),e.jsx(s,{italic:!0,children:"Italic text"}),e.jsx(s,{underline:!0,children:"Underlined text"}),e.jsx(s,{del:!0,children:"Deleted / strikethrough text"}),e.jsx(s,{code:!0,children:"inline code snippet"}),e.jsx(s,{mark:!0,children:"Highlighted / marked text"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Copyable Text"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{copyable:!0,children:"Click the icon to copy this text to clipboard"}),e.jsx(s,{copyable:!0,color:"primary",weight:"medium",children:"npm install @mdigitalcn/uikit"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Text Truncation"}),e.jsxs("div",{className:"max-w-sm space-y-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"Single line truncate"}),e.jsx(s,{truncate:!0,children:"This is a very long line of text that will be truncated with an ellipsis when it overflows the container width."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-text-secondary mb-1",children:"Line clamp (2 lines)"}),e.jsx(s,{truncate:2,children:"This paragraph will be clamped to exactly two lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Text Rendered As"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{as:"span",children:"Rendered as span (default)"}),e.jsx(s,{as:"p",children:"Rendered as paragraph element"}),e.jsx(s,{as:"div",children:"Rendered as div element"}),e.jsx(s,{as:"label",children:"Rendered as label element"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Paragraph"}),e.jsx(u,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Paragraph Sizes & Colors"}),e.jsx("div",{className:"space-y-3",children:["sm","md","lg"].map(t=>e.jsxs(u,{size:t,color:t==="sm"?"secondary":"default",children:["Size ",t,": The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]},t))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3",children:"Paragraph Truncation"}),e.jsx("div",{className:"max-w-sm",children:e.jsx(u,{truncate:3,children:"This paragraph will be truncated after three lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."})})]})]})},g={render:()=>e.jsx("div",{className:"space-y-2",children:["h1","h2","h3","h4","h5","h6"].map(t=>e.jsxs(x,{level:t,children:[t.toUpperCase()," — The quick brown fox"]},t))})},T={render:()=>e.jsxs("div",{className:"space-y-2 flex flex-col",children:[e.jsx(s,{children:"Default text"}),e.jsx(s,{strong:!0,children:"Strong text"}),e.jsx(s,{italic:!0,children:"Italic text"}),e.jsx(s,{underline:!0,children:"Underlined text"}),e.jsx(s,{del:!0,children:"Deleted text"}),e.jsx(s,{code:!0,children:"code text"}),e.jsx(s,{mark:!0,children:"Marked text"}),e.jsx(s,{copyable:!0,children:"Copyable text"})]})};var P,R,L;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    level: "h2",
    children: "Typography Playground",
    color: "default",
    copyable: false
  }
}`,...(L=(R=y.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var U,_,D;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Title Levels</h3>
        <div className="space-y-2">
          {(["h1", "h2", "h3", "h4", "h5", "h6"] as const).map(level => <Title key={level} level={level}>
              Heading {level.toUpperCase()} — The quick brown fox
            </Title>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Title Colors</h3>
        <div className="space-y-1">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(c => <Title key={c} level="h4" color={c}>
                {c} title
              </Title>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Copyable Title</h3>
        <Title level="h4" copyable>
          Click the copy icon to copy this heading
        </Title>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Sizes</h3>
        <div className="space-y-1">
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map(size => <div key={size}>
              <Text size={size}>
                Size {size} — The quick brown fox jumps over the lazy dog
              </Text>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Weights</h3>
        <div className="space-y-1">
          {(["light", "normal", "medium", "semibold", "bold"] as const).map(weight => <div key={weight}>
              <Text weight={weight}>
                {weight} — The quick brown fox jumps over the lazy dog
              </Text>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Colors</h3>
        <div className="space-y-1">
          {(["default", "secondary", "tertiary", "primary", "accent", "success", "error", "warning", "info"] as const).map(color => <div key={color}>
                <Text color={color}>{color} — The quick brown fox</Text>
              </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Decorations</h3>
        <div className="space-y-2 flex flex-col">
          <Text strong>Bold / strong text</Text>
          <Text italic>Italic text</Text>
          <Text underline>Underlined text</Text>
          <Text del>Deleted / strikethrough text</Text>
          <Text code>inline code snippet</Text>
          <Text mark>Highlighted / marked text</Text>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Copyable Text</h3>
        <div className="space-y-2">
          <Text copyable>Click the icon to copy this text to clipboard</Text>
          <Text copyable color="primary" weight="medium">
            npm install @mdigitalcn/uikit
          </Text>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Truncation</h3>
        <div className="max-w-sm space-y-3">
          <div>
            <p className="text-xs text-text-secondary mb-1">Single line truncate</p>
            <Text truncate>
              This is a very long line of text that will be truncated with an ellipsis when it overflows the container width.
            </Text>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Line clamp (2 lines)</p>
            <Text truncate={2}>
              This paragraph will be clamped to exactly two lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Rendered As</h3>
        <div className="space-y-2">
          <Text as="span">Rendered as span (default)</Text>
          <Text as="p">Rendered as paragraph element</Text>
          <Text as="div">Rendered as div element</Text>
          <Text as="label">Rendered as label element</Text>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Paragraph</h3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Paragraph Sizes &amp; Colors</h3>
        <div className="space-y-3">
          {(["sm", "md", "lg"] as const).map(size => <Paragraph key={size} size={size} color={size === "sm" ? "secondary" : "default"}>
              Size {size}: The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Paragraph>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Paragraph Truncation</h3>
        <div className="max-w-sm">
          <Paragraph truncate={3}>
            This paragraph will be truncated after three lines. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </Paragraph>
        </div>
      </section>
    </div>
}`,...(D=(_=b.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var E,I,H;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      {(["h1", "h2", "h3", "h4", "h5", "h6"] as const).map(level => <Title key={level} level={level}>
          {level.toUpperCase()} — The quick brown fox
        </Title>)}
    </div>
}`,...(H=(I=g.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var O,W,B;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 flex flex-col">
      <Text>Default text</Text>
      <Text strong>Strong text</Text>
      <Text italic>Italic text</Text>
      <Text underline>Underlined text</Text>
      <Text del>Deleted text</Text>
      <Text code>code text</Text>
      <Text mark>Marked text</Text>
      <Text copyable>Copyable text</Text>
    </div>
}`,...(B=(W=T.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const de=["Playground","Showcase","TitleOnly","TextOnly"];export{y as Playground,b as Showcase,T as TextOnly,g as TitleOnly,de as __namedExportsOrder,ce as default};
