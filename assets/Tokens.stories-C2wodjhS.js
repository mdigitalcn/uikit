import{j as e}from"./jsx-runtime-D_zvdyIk.js";const E={title:"Design System/Tokens",parameters:{docs:{description:{component:"Visual reference for all design tokens. Override any token via CSS custom properties in your app."}},layout:"padded"}},t=({name:s,bg:r,token:i,text:R})=>e.jsxs("div",{className:"flex items-center gap-3 py-1.5",children:[e.jsx("div",{className:`w-10 h-10 rounded-lg border border-border shrink-0 ${r}`}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-text-primary",children:s}),e.jsx("code",{className:"text-xs text-text-secondary",children:i})]})]}),a={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3",children:"Brand"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1",children:[e.jsx(t,{name:"Primary",bg:"bg-primary",token:"--color-primary"}),e.jsx(t,{name:"Primary Hover",bg:"bg-primary-hover",token:"--color-primary-hover"}),e.jsx(t,{name:"Primary Active",bg:"bg-primary-active",token:"--color-primary-active"}),e.jsx(t,{name:"Secondary",bg:"bg-secondary",token:"--color-secondary"}),e.jsx(t,{name:"Secondary Hover",bg:"bg-secondary-hover",token:"--color-secondary-hover"}),e.jsx(t,{name:"Secondary Active",bg:"bg-secondary-active",token:"--color-secondary-active"}),e.jsx(t,{name:"Accent",bg:"bg-accent",token:"--color-accent"}),e.jsx(t,{name:"Accent Hover",bg:"bg-accent-hover",token:"--color-accent-hover"}),e.jsx(t,{name:"Accent Active",bg:"bg-accent-active",token:"--color-accent-active"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3",children:"Status"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-1",children:[e.jsx(t,{name:"Success",bg:"bg-success",token:"--color-success"}),e.jsx(t,{name:"Error",bg:"bg-error",token:"--color-error"}),e.jsx(t,{name:"Warning",bg:"bg-warning",token:"--color-warning"}),e.jsx(t,{name:"Info",bg:"bg-info",token:"--color-info"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3",children:"Surfaces & Borders"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1",children:[e.jsx(t,{name:"Background",bg:"bg-background",token:"--color-background"}),e.jsx(t,{name:"Background Secondary",bg:"bg-background-secondary",token:"--color-background-secondary"}),e.jsx(t,{name:"Surface",bg:"bg-surface",token:"--color-surface"}),e.jsx(t,{name:"Border",bg:"bg-border",token:"--color-border"}),e.jsx(t,{name:"Border Primary",bg:"bg-border-primary",token:"--color-border-primary"}),e.jsx(t,{name:"Overlay",bg:"bg-overlay",token:"--color-overlay"})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3",children:"Text"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-base font-semibold text-text-primary",children:"Primary Text"}),e.jsx("code",{className:"text-xs text-text-secondary",children:"--color-text-primary"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-base font-semibold text-text-secondary",children:"Secondary Text"}),e.jsx("code",{className:"text-xs text-text-secondary",children:"--color-text-secondary"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-base font-semibold text-text-muted",children:"Muted Text"}),e.jsx("code",{className:"text-xs text-text-secondary",children:"--color-text-muted"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-base font-semibold text-text-disabled",children:"Disabled Text"}),e.jsx("code",{className:"text-xs text-text-secondary",children:"--color-text-disabled"})]})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3",children:"Gray Scale"}),e.jsx("div",{className:"flex gap-1",children:[50,100,200,300,400,500,600,700,800,900,950].map(s=>e.jsxs("div",{className:"text-center flex-1",children:[e.jsx("div",{className:"h-10 rounded border border-border/50",style:{backgroundColor:`var(--color-gray-${s})`}}),e.jsx("code",{className:"text-[10px] text-text-secondary",children:s})]},s))})]})]})},n={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4",children:"Type Scale"}),e.jsx("div",{className:"space-y-3",children:[["text-xs","12px"],["text-sm","14px"],["text-base","16px"],["text-lg","18px"],["text-xl","20px"],["text-2xl","24px"],["text-3xl","30px"],["text-4xl","36px"]].map(([s,r])=>e.jsxs("div",{className:"flex items-baseline gap-4",children:[e.jsx("code",{className:"w-20 text-xs text-text-secondary shrink-0",children:s}),e.jsx("span",{className:`${s} text-text-primary`,children:"The quick brown fox"}),e.jsx("span",{className:"text-xs text-text-muted shrink-0",children:r})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4",children:"Font Weights"}),e.jsx("div",{className:"space-y-2",children:[["font-normal","400"],["font-medium","500"],["font-semibold","600"],["font-bold","700"],["font-extrabold","800"]].map(([s,r])=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("code",{className:"w-28 text-xs text-text-secondary shrink-0",children:s}),e.jsx("span",{className:`text-base text-text-primary ${s}`,children:"Sample Text"}),e.jsx("span",{className:"text-xs text-text-muted",children:r})]},s))})]})]})},o={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4",children:"Component Heights (shared)"}),e.jsx("p",{className:"text-xs text-text-secondary mb-3",children:"Button, Input, Select, Toggle all share these height tokens."}),e.jsx("div",{className:"space-y-3",children:[["xs","--size-xs","28px"],["sm","--size-sm","32px"],["md","--size-md","36px"],["lg","--size-lg","44px"]].map(([s,r,i])=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("code",{className:"w-16 text-xs text-text-secondary shrink-0",children:s}),e.jsx("div",{className:"bg-primary rounded-md flex items-center justify-center text-xs text-primary-foreground font-medium",style:{height:`var(${r})`,width:`calc(var(${r}) * 3)`},children:i}),e.jsx("code",{className:"text-xs text-text-muted",children:r})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4",children:"Spacing Scale (4px base)"}),e.jsx("div",{className:"space-y-2",children:[[1,4],[2,8],[3,12],[4,16],[5,20],[6,24],[8,32],[10,40],[12,48]].map(([s,r])=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("code",{className:"w-8 text-xs text-text-secondary text-right shrink-0",children:s}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"w-6 h-6 bg-primary/20 border border-primary rounded-sm shrink-0"}),e.jsx("div",{className:"h-1 bg-primary",style:{width:`${r}px`}}),e.jsx("div",{className:"w-6 h-6 bg-primary/20 border border-primary rounded-sm shrink-0"})]}),e.jsxs("span",{className:"text-xs text-text-muted",children:[r,"px"]}),e.jsxs("code",{className:"text-xs text-text-muted",children:["--spacing-",s]})]},s))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4",children:"Border Radius"}),e.jsx("div",{className:"flex gap-8 flex-wrap",children:["none","sm","md","lg","xl","2xl","3xl","full"].map(s=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"w-24 h-24 bg-primary/15 border-2 border-primary",style:{borderRadius:`var(--radius-${s})`}}),e.jsx("code",{className:"text-xs text-text-secondary mt-1.5 block",children:s})]},s))})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide",children:"Elevation"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"48px",padding:"40px",borderRadius:"12px",backgroundColor:"var(--color-surface)"},children:["sm","md","lg","xl","2xl"].map(s=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{height:"120px",backgroundColor:"var(--color-background)",borderRadius:"8px",border:"1px solid color-mix(in oklch, var(--color-border) 30%, transparent)",boxShadow:`var(--shadow-${s})`}}),e.jsxs("code",{className:"text-xs text-text-secondary",style:{marginTop:"12px",display:"block"},children:["shadow-",s]})]},s))})]})},d={render:()=>e.jsxs("div",{className:"space-y-6 max-w-2xl",children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary",children:"Overriding Tokens"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"All tokens are CSS custom properties that cascade naturally. Override at any scope."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold text-text-primary mb-2",children:"1. Global CSS Override"}),e.jsx("pre",{className:"bg-surface p-4 rounded-lg text-xs overflow-x-auto border border-border",children:`:root {
  --color-primary: oklch(55% 0.20 280);  /* Purple */
  --size-md: 2.5rem;                     /* Taller buttons/inputs */
  --card-padding: 2rem;                  /* Larger card padding */
}`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold text-text-primary mb-2",children:"2. Tailwind v4 Arbitrary Properties"}),e.jsx("pre",{className:"bg-surface p-4 rounded-lg text-xs overflow-x-auto border border-border",children:`<div className="p-(--card-padding) gap-(--card-header-gap)">
  Card content
</div>`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold text-text-primary mb-2",children:"3. Scoped Inline Override"}),e.jsx("pre",{className:"bg-surface p-4 rounded-lg text-xs overflow-x-auto border border-border",children:`<Card style={{ '--card-padding': '2rem', '--card-title-size': '2rem' }}>
  Custom card with larger padding and title
</Card>`})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold text-text-primary mb-2",children:"4. TypeScript Token Import"}),e.jsx("pre",{className:"bg-surface p-4 rounded-lg text-xs overflow-x-auto border border-border",children:`import { tokens } from '@mdigitalcn/uikit/styles/tokens'

// tokens.colors.primary → 'var(--color-primary)'
// tokens.components.card.padding → 'var(--card-padding)'

<div style={{ padding: tokens.components.card.padding }}>
  Card with TypeScript autocomplete
</div>`})]})]}),e.jsx("div",{className:"bg-info/10 border border-info/30 rounded-lg p-4",children:e.jsxs("p",{className:"text-sm text-text-primary",children:[e.jsx("strong",{children:"Three-layer architecture:"})," Primitive tokens (raw values) → Semantic tokens (surface, border, text) → Component tokens (card-padding, button-height). Override at any layer — changes cascade down."]})})]})};var l,x,m,p,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
          Brand
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
          <ColorSwatch name="Primary" bg="bg-primary" token="--color-primary" />
          <ColorSwatch name="Primary Hover" bg="bg-primary-hover" token="--color-primary-hover" />
          <ColorSwatch name="Primary Active" bg="bg-primary-active" token="--color-primary-active" />
          <ColorSwatch name="Secondary" bg="bg-secondary" token="--color-secondary" />
          <ColorSwatch name="Secondary Hover" bg="bg-secondary-hover" token="--color-secondary-hover" />
          <ColorSwatch name="Secondary Active" bg="bg-secondary-active" token="--color-secondary-active" />
          <ColorSwatch name="Accent" bg="bg-accent" token="--color-accent" />
          <ColorSwatch name="Accent Hover" bg="bg-accent-hover" token="--color-accent-hover" />
          <ColorSwatch name="Accent Active" bg="bg-accent-active" token="--color-accent-active" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
          Status
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-1">
          <ColorSwatch name="Success" bg="bg-success" token="--color-success" />
          <ColorSwatch name="Error" bg="bg-error" token="--color-error" />
          <ColorSwatch name="Warning" bg="bg-warning" token="--color-warning" />
          <ColorSwatch name="Info" bg="bg-info" token="--color-info" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
          Surfaces & Borders
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
          <ColorSwatch name="Background" bg="bg-background" token="--color-background" />
          <ColorSwatch name="Background Secondary" bg="bg-background-secondary" token="--color-background-secondary" />
          <ColorSwatch name="Surface" bg="bg-surface" token="--color-surface" />
          <ColorSwatch name="Border" bg="bg-border" token="--color-border" />
          <ColorSwatch name="Border Primary" bg="bg-border-primary" token="--color-border-primary" />
          <ColorSwatch name="Overlay" bg="bg-overlay" token="--color-overlay" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
          Text
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-text-primary">
              Primary Text
            </span>
            <code className="text-xs text-text-secondary">
              --color-text-primary
            </code>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-text-secondary">
              Secondary Text
            </span>
            <code className="text-xs text-text-secondary">
              --color-text-secondary
            </code>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-text-muted">
              Muted Text
            </span>
            <code className="text-xs text-text-secondary">
              --color-text-muted
            </code>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-text-disabled">
              Disabled Text
            </span>
            <code className="text-xs text-text-secondary">
              --color-text-disabled
            </code>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
          Gray Scale
        </h3>
        <div className="flex gap-1">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(shade => <div key={shade} className="text-center flex-1">
                <div className="h-10 rounded border border-border/50" style={{
            backgroundColor: \`var(--color-gray-\${shade})\`
          }} />
                <code className="text-[10px] text-text-secondary">{shade}</code>
              </div>)}
        </div>
      </section>
    </div>
}`,...(m=(x=a.parameters)==null?void 0:x.docs)==null?void 0:m.source},description:{story:"All semantic colors used across the library — brand, status, surfaces, text, and borders.",...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.description}}};var b,h,y,v,u;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
          Type Scale
        </h3>
        <div className="space-y-3">
          {([["text-xs", "12px"], ["text-sm", "14px"], ["text-base", "16px"], ["text-lg", "18px"], ["text-xl", "20px"], ["text-2xl", "24px"], ["text-3xl", "30px"], ["text-4xl", "36px"]] as const).map(([cls, px]) => <div key={cls} className="flex items-baseline gap-4">
              <code className="w-20 text-xs text-text-secondary shrink-0">
                {cls}
              </code>
              <span className={\`\${cls} text-text-primary\`}>
                The quick brown fox
              </span>
              <span className="text-xs text-text-muted shrink-0">{px}</span>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
          Font Weights
        </h3>
        <div className="space-y-2">
          {([["font-normal", "400"], ["font-medium", "500"], ["font-semibold", "600"], ["font-bold", "700"], ["font-extrabold", "800"]] as const).map(([cls, val]) => <div key={cls} className="flex items-center gap-4">
              <code className="w-28 text-xs text-text-secondary shrink-0">
                {cls}
              </code>
              <span className={\`text-base text-text-primary \${cls}\`}>
                Sample Text
              </span>
              <span className="text-xs text-text-muted">{val}</span>
            </div>)}
        </div>
      </section>
    </div>
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Font sizes, weights, and line heights available via Tailwind utility classes.",...(u=(v=n.parameters)==null?void 0:v.docs)==null?void 0:u.description}}};var N,k,f,j,w;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
          Component Heights (shared)
        </h3>
        <p className="text-xs text-text-secondary mb-3">
          Button, Input, Select, Toggle all share these height tokens.
        </p>
        <div className="space-y-3">
          {([["xs", "--size-xs", "28px"], ["sm", "--size-sm", "32px"], ["md", "--size-md", "36px"], ["lg", "--size-lg", "44px"]] as const).map(([size, token, px]) => <div key={size} className="flex items-center gap-4">
              <code className="w-16 text-xs text-text-secondary shrink-0">
                {size}
              </code>
              <div className="bg-primary rounded-md flex items-center justify-center text-xs text-primary-foreground font-medium" style={{
            height: \`var(\${token})\`,
            width: \`calc(var(\${token}) * 3)\`
          }}>
                {px}
              </div>
              <code className="text-xs text-text-muted">{token}</code>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
          Spacing Scale (4px base)
        </h3>
        <div className="space-y-2">
          {([[1, 4], [2, 8], [3, 12], [4, 16], [5, 20], [6, 24], [8, 32], [10, 40], [12, 48]] as const).map(([n, px]) => <div key={n} className="flex items-center gap-4">
              <code className="w-8 text-xs text-text-secondary text-right shrink-0">
                {n}
              </code>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-primary/20 border border-primary rounded-sm shrink-0" />
                <div className="h-1 bg-primary" style={{
              width: \`\${px}px\`
            }} />
                <div className="w-6 h-6 bg-primary/20 border border-primary rounded-sm shrink-0" />
              </div>
              <span className="text-xs text-text-muted">{px}px</span>
              <code className="text-xs text-text-muted">--spacing-{n}</code>
            </div>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
          Border Radius
        </h3>
        <div className="flex gap-8 flex-wrap">
          {(["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"] as const).map(r => <div key={r} className="text-center">
              <div className="w-24 h-24 bg-primary/15 border-2 border-primary" style={{
            borderRadius: \`var(--radius-\${r})\`
          }} />
              <code className="text-xs text-text-secondary mt-1.5 block">
                {r}
              </code>
            </div>)}
        </div>
      </section>
    </div>
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source},description:{story:"Spacing scale and component height tokens. Override `--size-*` to change all component heights at once.",...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var S,C,T,A,z;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">
        Elevation
      </h3>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '48px',
      padding: '40px',
      borderRadius: '12px',
      backgroundColor: 'var(--color-surface)'
    }}>
        {(["sm", "md", "lg", "xl", "2xl"] as const).map(s => <div key={s} style={{
        textAlign: 'center'
      }}>
            <div style={{
          height: '120px',
          backgroundColor: 'var(--color-background)',
          borderRadius: '8px',
          border: '1px solid color-mix(in oklch, var(--color-border) 30%, transparent)',
          boxShadow: \`var(--shadow-\${s})\`
        }} />
            <code className="text-xs text-text-secondary" style={{
          marginTop: '12px',
          display: 'block'
        }}>
              shadow-{s}
            </code>
          </div>)}
      </div>
    </div>
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"Shadow elevation scale for depth and hierarchy.",...(z=(A=c.parameters)==null?void 0:A.docs)==null?void 0:z.description}}};var O,$,B,P,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 max-w-2xl">
      <h3 className="text-lg font-semibold text-text-primary">
        Overriding Tokens
      </h3>
      <p className="text-sm text-text-secondary">
        All tokens are CSS custom properties that cascade naturally. Override at
        any scope.
      </p>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-2">
            1. Global CSS Override
          </h4>
          <pre className="bg-surface p-4 rounded-lg text-xs overflow-x-auto border border-border">
            {\`:root {
  --color-primary: oklch(55% 0.20 280);  /* Purple */
  --size-md: 2.5rem;                     /* Taller buttons/inputs */
  --card-padding: 2rem;                  /* Larger card padding */
}\`}
          </pre>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-2">
            2. Tailwind v4 Arbitrary Properties
          </h4>
          <pre className="bg-surface p-4 rounded-lg text-xs overflow-x-auto border border-border">
            {\`<div className="p-(--card-padding) gap-(--card-header-gap)">
  Card content
</div>\`}
          </pre>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-2">
            3. Scoped Inline Override
          </h4>
          <pre className="bg-surface p-4 rounded-lg text-xs overflow-x-auto border border-border">
            {\`<Card style={{ '--card-padding': '2rem', '--card-title-size': '2rem' }}>
  Custom card with larger padding and title
</Card>\`}
          </pre>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-text-primary mb-2">
            4. TypeScript Token Import
          </h4>
          <pre className="bg-surface p-4 rounded-lg text-xs overflow-x-auto border border-border">
            {\`import { tokens } from '@mdigitalcn/uikit/styles/tokens'

// tokens.colors.primary → 'var(--color-primary)'
// tokens.components.card.padding → 'var(--card-padding)'

<div style={{ padding: tokens.components.card.padding }}>
  Card with TypeScript autocomplete
</div>\`}
          </pre>
        </div>
      </div>

      <div className="bg-info/10 border border-info/30 rounded-lg p-4">
        <p className="text-sm text-text-primary">
          <strong>Three-layer architecture:</strong> Primitive tokens (raw
          values) → Semantic tokens (surface, border, text) → Component tokens
          (card-padding, button-height). Override at any layer — changes cascade
          down.
        </p>
      </div>
    </div>
}`,...(B=($=d.parameters)==null?void 0:$.docs)==null?void 0:B.source},description:{story:"How to override tokens in your app — CSS custom properties, Tailwind, or TypeScript import.",...(H=(P=d.parameters)==null?void 0:P.docs)==null?void 0:H.description}}};const D=["Colors","Typography","SpacingAndSizing","Shadows","HowToOverride"];export{a as Colors,d as HowToOverride,c as Shadows,o as SpacingAndSizing,n as Typography,D as __namedExportsOrder,E as default};
