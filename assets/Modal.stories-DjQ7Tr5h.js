import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-ZH-6pyQh.js";import{B as t}from"./index-Cw7T_5ox.js";import{D as S}from"./index-bnuGfYx0.js";import{D as B}from"./index-O2sAJMea.js";import{I as h}from"./index-CU488rde.js";import{M as D}from"./index-CsyumRq-.js";import{S as T}from"./index-Bfy8hdvJ.js";import{T as F}from"./index-CxK8cMMz.js";import{C as l,M as z,a as A,b as I,c as P,d as H,e as R,f as U,g as W}from"./index-D3WXrqpm.js";import{S as E}from"./settings-D1wlBKo1.js";import{T as $}from"./trash-2-vrMpzzku.js";import{C as L}from"./circle-check-big-Ba-B0jqG.js";import{I as Y}from"./info-CKnY7ViN.js";import{T as G}from"./triangle-alert-Bq5oH3ZW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ZW2Bszwo.js";import"./index-Bo-loign.js";import"./utils-_uLxnvdl.js";import"./index-CF05pSQ2.js";import"./variants-CTjkuV9j.js";import"./useRipple-BuuTbn0W.js";import"./index-BH7Jj7fg.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./index-C6BiGwLV.js";import"./useControllable-BTRR6hV3.js";import"./index-BLrHYnCp.js";import"./index-lJNWladF.js";import"./Combination-C3reJy6-.js";import"./useOverlayContainer-BKheCA97.js";import"./chevrons-right-Bto5ffh9.js";import"./createLucideIcon-BXJdBs6C.js";import"./chevron-left-BPVU9fuB.js";import"./chevron-right-DY5KYsnV.js";import"./calendar-DcUEuZqF.js";import"./x-ByohdK2B.js";import"./clock-BcXKPbe9.js";import"./useMenuNavigation-Cake-z-f.js";import"./useSelectBase--JAkF883.js";import"./index-B-0NfVwE.js";import"./check-CKCh4cDT.js";import"./chevron-down-D1qmGosc.js";import"./search-DfqimKq8.js";import"./index-ClzwOXUT.js";const We={title:"Feedback/Modal",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},color:{control:"select",options:["default","primary","secondary","accent","success","error","warning","info"]},centered:{control:"boolean"},showCloseButton:{control:"boolean"},hideHeader:{control:"boolean"},hideFooter:{control:"boolean"}}},d=({label:n,children:o,...a})=>{const[i,r]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>r(!0),variant:"outline",size:"sm",children:n??"Open"}),e.jsx(l,{...a,open:i,onOpenChange:r,footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",onClick:()=>r(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>r(!1),children:"Confirm"})]}),children:o??e.jsx("p",{className:"text-sm text-text-secondary",children:"Modal body content goes here."})})]})},m={render:n=>{const[o,a]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{...n,open:o,onOpenChange:a,title:"Modal Title",description:"This is a description of the modal content.",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",onClick:()=>a(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>a(!1),children:"Confirm"})]}),children:e.jsx("p",{className:"text-sm text-text-secondary",children:"Modal body content. You can place any React node here."})})]})},args:{size:"md",color:"default",centered:!1,showCloseButton:!0}},V=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"},{value:"honeydew",label:"Honeydew"},{value:"kiwi",label:"Kiwi"},{value:"lemon",label:"Lemon"},{value:"mango",label:"Mango"},{value:"nectarine",label:"Nectarine"}],q=[{value:"admin",label:"Admin"},{value:"editor",label:"Editor"},{value:"viewer",label:"Viewer"},{value:"moderator",label:"Moderator"}],J=[{key:"profile",label:"Profile",href:"#"},{key:"settings",label:"Settings",href:"#"},{key:"billing",label:"Billing",href:"#"},{key:"logout",label:"Log out",onClick:()=>{}}],p={render:()=>{const[n,o]=s.useState(!1),[a,i]=s.useState(""),[r,c]=s.useState([]),[N,k]=s.useState(void 0);return e.jsxs("div",{className:"p-6",children:[e.jsx("p",{className:"text-sm text-text-secondary mb-4",children:"Open the modal and verify that all dropdowns open, scroll, and close correctly. The option lists should be fully scrollable without interference from the Modal scroll-lock."}),e.jsx(t,{onClick:()=>o(!0),children:"Open Modal with form controls"}),e.jsx(l,{open:n,onOpenChange:o,title:"Form controls inside Modal",description:"Every dropdown below portals into the Modal DOM — scroll the option lists to verify.",size:"md",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",onClick:()=>o(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>o(!1),children:"Save"})]}),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(h,{label:"Name",placeholder:"Type something…"}),e.jsx(T,{label:"Favourite fruit",placeholder:"Choose a fruit…",options:V,value:a,onChange:i}),e.jsx(D,{label:"Roles",placeholder:"Select roles…",options:q,value:r,onChange:c}),e.jsx(S,{label:"Start date",placeholder:"Pick a date…",value:N,onChange:k}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-secondary mb-1.5",children:"Dropdown menu"}),e.jsx(B,{items:J,trigger:e.jsx(t,{variant:"outline",size:"sm",rightIcon:e.jsx(E,{className:"w-4 h-4"}),children:"Actions"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-text-secondary mb-1.5",children:"Tooltip"}),e.jsx(F,{content:"Tooltips portal into the Modal too",side:"right",children:e.jsx(t,{variant:"soft",size:"sm",children:"Hover for tooltip"})})]})]})})]})}},u={render:()=>e.jsxs("div",{className:"space-y-10 p-6 max-w-2xl",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Sizes"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["xs","sm","md","lg"].map(n=>e.jsx(d,{label:`Size ${n}`,size:n,title:`${n.toUpperCase()} Modal`,description:"Adjust the size prop to control how wide the modal renders."},n))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Color Accents"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["default","primary","secondary","accent","success","error","warning","info"].map(n=>e.jsx(d,{label:n,color:n,title:`${n.charAt(0).toUpperCase()+n.slice(1)} Modal`,description:"The color prop adds a colored left border accent."},n))})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Centered Content"}),e.jsx(d,{label:"Centered",centered:!0,title:"Confirmation Required",description:"Are you sure you want to proceed with this action?"})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"With Form"}),(()=>{const[n,o]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),variant:"outline",children:"Open Form Modal"}),e.jsx(l,{open:n,onOpenChange:o,title:"Create Account",description:"Fill in the details below to create a new account.",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",onClick:()=>o(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>o(!1),children:"Create Account"})]}),children:e.jsxs("div",{className:"space-y-3",children:[e.jsx(h,{label:"Full Name",placeholder:"John Doe"}),e.jsx(h,{label:"Email Address",placeholder:"john@example.com",type:"email"}),e.jsx(h,{label:"Password",type:"password",placeholder:"Min. 8 characters"})]})})]})})()]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Confirmation Dialog"}),(()=>{const[n,o]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),color:"error",variant:"outline",children:"Delete Record"}),e.jsx(l,{open:n,onOpenChange:o,color:"error",size:"sm",centered:!0,title:"Delete Record",description:"This action cannot be undone. The record will be permanently removed from the system.",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",onClick:()=>o(!1),children:"Cancel"}),e.jsx(t,{color:"error",onClick:()=>o(!1),children:"Delete"})]}),children:e.jsx("div",{className:"flex justify-center py-2",children:e.jsx($,{className:"w-12 h-12 text-error opacity-80"})})})]})})()]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Status Modals"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:(()=>{const[n,o]=s.useState(!1),[a,i]=s.useState(!1),[r,c]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),color:"success",variant:"soft",size:"sm",children:"Success"}),e.jsx(l,{open:n,onOpenChange:o,color:"success",size:"sm",centered:!0,title:"Payment Successful",description:"Your payment of $49.00 has been processed.",footer:e.jsx(t,{color:"success",onClick:()=>o(!1),children:"Done"}),children:e.jsx("div",{className:"flex justify-center py-2",children:e.jsx(L,{className:"w-12 h-12 text-success"})})}),e.jsx(t,{onClick:()=>i(!0),color:"info",variant:"soft",size:"sm",children:"Info"}),e.jsx(l,{open:a,onOpenChange:i,color:"info",size:"sm",centered:!0,title:"System Maintenance",description:"Scheduled maintenance will occur on Sunday at 2:00 AM UTC.",footer:e.jsx(t,{color:"info",onClick:()=>i(!1),children:"Got it"}),children:e.jsx("div",{className:"flex justify-center py-2",children:e.jsx(Y,{className:"w-12 h-12 text-info"})})}),e.jsx(t,{onClick:()=>c(!0),color:"warning",variant:"soft",size:"sm",children:"Warning"}),e.jsx(l,{open:r,onOpenChange:c,color:"warning",size:"sm",centered:!0,title:"Unsaved Changes",description:"You have unsaved changes. Leaving will discard them.",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",onClick:()=>c(!1),children:"Stay"}),e.jsx(t,{color:"warning",onClick:()=>c(!1),children:"Leave"})]}),children:e.jsx("div",{className:"flex justify-center py-2",children:e.jsx(G,{className:"w-12 h-12 text-warning"})})})]})})()})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"States"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(d,{label:"No Close Button",showCloseButton:!1,title:"No Close Button",description:"The X button is hidden. Close via the footer only."}),e.jsx(d,{label:"No Header",hideHeader:!0,title:"Hidden",children:e.jsx("p",{className:"text-sm text-text-secondary",children:"The header is hidden. Only body and footer are shown."})}),e.jsx(d,{label:"No Footer",hideFooter:!0,title:"No Footer Modal",description:"Footer is hidden. Only close button dismisses."})]})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4",children:"Composable API"}),(()=>{const[n,o]=s.useState(!1);return e.jsxs(z,{open:n,onOpenChange:o,children:[e.jsx(A,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Composable Modal"})}),e.jsxs(I,{size:"md",children:[e.jsxs(P,{children:[e.jsx(H,{children:"Custom Composable"}),e.jsx(R,{children:"Built using primitive sub-components for full control."})]}),e.jsx("div",{className:"py-2",children:e.jsx("p",{className:"text-sm text-text-secondary",children:"Use Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter, and ModalClose for complete composition control."})}),e.jsxs(U,{children:[e.jsx(W,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Close"})}),e.jsx(t,{children:"Save"})]})]})]})})()]})]})};var x,f,C;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <ComposedModal {...args} open={open} onOpenChange={setOpen} title="Modal Title" description="This is a description of the modal content." footer={<>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>}>
          <p className="text-sm text-text-secondary">
            Modal body content. You can place any React node here.
          </p>
        </ComposedModal>
      </>;
  },
  args: {
    size: "md",
    color: "default",
    centered: false,
    showCloseButton: true
  }
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var g,v,y,b,j;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [fruit, setFruit] = useState("");
    const [roles, setRoles] = useState<string[]>([]);
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <div className="p-6">
        <p className="text-sm text-text-secondary mb-4">
          Open the modal and verify that all dropdowns open, scroll, and close correctly.
          The option lists should be fully scrollable without interference from the Modal scroll-lock.
        </p>
        <Button onClick={() => setOpen(true)}>Open Modal with form controls</Button>

        <ComposedModal open={open} onOpenChange={setOpen} title="Form controls inside Modal" description="Every dropdown below portals into the Modal DOM — scroll the option lists to verify." size="md" footer={<>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </>}>
          <div className="space-y-4">
            {/* Plain input to verify focus is unaffected */}
            <Input label="Name" placeholder="Type something…" />

            {/* Select with a long, scrollable list */}
            <Select label="Favourite fruit" placeholder="Choose a fruit…" options={fruitOptions} value={fruit} onChange={setFruit} />

            {/* MultiSelect — multiple concurrent selections */}
            <MultiSelect label="Roles" placeholder="Select roles…" options={roleOptions} value={roles} onChange={setRoles} />

            {/* DatePicker popover */}
            <DatePicker label="Start date" placeholder="Pick a date…" value={date} onChange={setDate} />

            {/* Dropdown (menu) */}
            <div>
              <p className="text-sm font-medium text-text-secondary mb-1.5">Dropdown menu</p>
              <Dropdown items={dropdownItems} trigger={<Button variant="outline" size="sm" rightIcon={<Settings className="w-4 h-4" />}>
                    Actions
                  </Button>} />
            </div>

            {/* Tooltip inside modal */}
            <div>
              <p className="text-sm font-medium text-text-secondary mb-1.5">Tooltip</p>
              <Tooltip content="Tooltips portal into the Modal too" side="right">
                <Button variant="soft" size="sm">Hover for tooltip</Button>
              </Tooltip>
            </div>
          </div>
        </ComposedModal>
      </div>;
  }
}`,...(y=(v=p.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:`Verifies that Select, MultiSelect, DatePicker, Dropdown and Tooltip all work
correctly when rendered inside a Modal. Specifically:
- Popover dropdowns portal into the Modal's DOM tree (not document.body)
  so react-remove-scroll does not block wheel-scroll inside the option list
- Focus management stays consistent — typing in a search field does not
  trigger the Dialog's focus-scope to steal focus back
- Vaul drag-detection is bypassed (data-vaul-no-drag on PopoverContent)`,...(j=(b=p.parameters)==null?void 0:b.docs)==null?void 0:j.description}}};var w,M,O;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {(["xs", "sm", "md", "lg"] as const).map(s => <ModalDemo key={s} label={\`Size \${s}\`} size={s} title={\`\${s.toUpperCase()} Modal\`} description="Adjust the size prop to control how wide the modal renders." />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Color Accents</h3>
        <div className="flex flex-wrap gap-2">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(c => <ModalDemo key={c} label={c} color={c} title={\`\${c.charAt(0).toUpperCase() + c.slice(1)} Modal\`} description="The color prop adds a colored left border accent." />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Centered Content</h3>
        <ModalDemo label="Centered" centered title="Confirmation Required" description="Are you sure you want to proceed with this action?" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Form</h3>
        {(() => {
        const [open, setOpen] = useState(false);
        return <>
              <Button onClick={() => setOpen(true)} variant="outline">
                Open Form Modal
              </Button>
              <ComposedModal open={open} onOpenChange={setOpen} title="Create Account" description="Fill in the details below to create a new account." footer={<>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setOpen(false)}>Create Account</Button>
                  </>}>
                <div className="space-y-3">
                  <Input label="Full Name" placeholder="John Doe" />
                  <Input label="Email Address" placeholder="john@example.com" type="email" />
                  <Input label="Password" type="password" placeholder="Min. 8 characters" />
                </div>
              </ComposedModal>
            </>;
      })()}
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Confirmation Dialog</h3>
        {(() => {
        const [open, setOpen] = useState(false);
        return <>
              <Button onClick={() => setOpen(true)} color="error" variant="outline">
                Delete Record
              </Button>
              <ComposedModal open={open} onOpenChange={setOpen} color="error" size="sm" centered title="Delete Record" description="This action cannot be undone. The record will be permanently removed from the system." footer={<>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button color="error" onClick={() => setOpen(false)}>
                      Delete
                    </Button>
                  </>}>
                <div className="flex justify-center py-2">
                  <Trash2 className="w-12 h-12 text-error opacity-80" />
                </div>
              </ComposedModal>
            </>;
      })()}
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Status Modals</h3>
        <div className="flex flex-wrap gap-2">
          {(() => {
          const [successOpen, setSuccessOpen] = useState(false);
          const [infoOpen, setInfoOpen] = useState(false);
          const [warnOpen, setWarnOpen] = useState(false);
          return <>
                <Button onClick={() => setSuccessOpen(true)} color="success" variant="soft" size="sm">
                  Success
                </Button>
                <ComposedModal open={successOpen} onOpenChange={setSuccessOpen} color="success" size="sm" centered title="Payment Successful" description="Your payment of $49.00 has been processed." footer={<Button color="success" onClick={() => setSuccessOpen(false)}>Done</Button>}>
                  <div className="flex justify-center py-2">
                    <CheckCircle className="w-12 h-12 text-success" />
                  </div>
                </ComposedModal>

                <Button onClick={() => setInfoOpen(true)} color="info" variant="soft" size="sm">
                  Info
                </Button>
                <ComposedModal open={infoOpen} onOpenChange={setInfoOpen} color="info" size="sm" centered title="System Maintenance" description="Scheduled maintenance will occur on Sunday at 2:00 AM UTC." footer={<Button color="info" onClick={() => setInfoOpen(false)}>Got it</Button>}>
                  <div className="flex justify-center py-2">
                    <Info className="w-12 h-12 text-info" />
                  </div>
                </ComposedModal>

                <Button onClick={() => setWarnOpen(true)} color="warning" variant="soft" size="sm">
                  Warning
                </Button>
                <ComposedModal open={warnOpen} onOpenChange={setWarnOpen} color="warning" size="sm" centered title="Unsaved Changes" description="You have unsaved changes. Leaving will discard them." footer={<>
                      <Button variant="outline" onClick={() => setWarnOpen(false)}>
                        Stay
                      </Button>
                      <Button color="warning" onClick={() => setWarnOpen(false)}>
                        Leave
                      </Button>
                    </>}>
                  <div className="flex justify-center py-2">
                    <AlertTriangle className="w-12 h-12 text-warning" />
                  </div>
                </ComposedModal>
              </>;
        })()}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="flex flex-wrap gap-2">
          <ModalDemo label="No Close Button" showCloseButton={false} title="No Close Button" description="The X button is hidden. Close via the footer only." />
          <ModalDemo label="No Header" hideHeader title="Hidden">
            <p className="text-sm text-text-secondary">
              The header is hidden. Only body and footer are shown.
            </p>
          </ModalDemo>
          <ModalDemo label="No Footer" hideFooter title="No Footer Modal" description="Footer is hidden. Only close button dismisses." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Composable API</h3>
        {(() => {
        const [open, setOpen] = useState(false);
        return <Modal open={open} onOpenChange={setOpen}>
              <ModalTrigger asChild>
                <Button variant="outline">Composable Modal</Button>
              </ModalTrigger>
              <ModalContent size="md">
                <ModalHeader>
                  <ModalTitle>Custom Composable</ModalTitle>
                  <ModalDescription>
                    Built using primitive sub-components for full control.
                  </ModalDescription>
                </ModalHeader>
                <div className="py-2">
                  <p className="text-sm text-text-secondary">
                    Use Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter,
                    and ModalClose for complete composition control.
                  </p>
                </div>
                <ModalFooter>
                  <ModalClose asChild>
                    <Button variant="outline">Close</Button>
                  </ModalClose>
                  <Button>Save</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>;
      })()}
      </section>
    </div>
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const Ee=["Playground","OverlayNesting","Showcase"];export{p as OverlayNesting,m as Playground,u as Showcase,Ee as __namedExportsOrder,We as default};
