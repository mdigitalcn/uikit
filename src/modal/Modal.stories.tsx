import type { Meta, StoryObj } from "@storybook/react";
import { AlertTriangle, CheckCircle, Info, Settings, Trash2 } from "lucide-react";
import React, { useState } from "react";
import Button from "../button";
import DatePicker from "../date-picker";
import Dropdown from "../dropdown";
import Input from "../input";
import MultiSelect from "../multi-select";
import Select from "../select";
import Tooltip from "../tooltip";
import ComposedModal, {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "./index";

const meta: Meta<typeof ComposedModal> = {
  title: "Feedback/Modal",
  component: ComposedModal,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    centered: { control: "boolean" },
    showCloseButton: { control: "boolean" },
    hideHeader: { control: "boolean" },
    hideFooter: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof ComposedModal>;

const ModalDemo = ({
  label,
  children,
  ...props
}: React.ComponentProps<typeof ComposedModal> & { label?: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline" size="sm">
        {label ?? "Open"}
      </Button>
      <ComposedModal
        {...props}
        open={open}
        onOpenChange={setOpen}
        footer={
          <>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
      >
        {children ?? <p className="text-sm text-text-secondary">Modal body content goes here.</p>}
      </ComposedModal>
    </>
  );
};

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <ComposedModal
          {...args}
          open={open}
          onOpenChange={setOpen}
          title="Modal Title"
          description="This is a description of the modal content."
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p className="text-sm text-text-secondary">
            Modal body content. You can place any React node here.
          </p>
        </ComposedModal>
      </>
    );
  },
  args: {
    size: "md",
    color: "default",
    centered: false,
    showCloseButton: true,
  },
};

const fruitOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
  { value: "fig", label: "Fig" },
  { value: "grape", label: "Grape" },
  { value: "honeydew", label: "Honeydew" },
  { value: "kiwi", label: "Kiwi" },
  { value: "lemon", label: "Lemon" },
  { value: "mango", label: "Mango" },
  { value: "nectarine", label: "Nectarine" },
];

const roleOptions = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
  { value: "moderator", label: "Moderator" },
];

const dropdownItems = [
  { key: "profile", label: "Profile", href: "#" },
  { key: "settings", label: "Settings", href: "#" },
  { key: "billing", label: "Billing", href: "#" },
  { key: "logout", label: "Log out", onClick: () => {} },
];

/**
 * Verifies that Select, MultiSelect, DatePicker, Dropdown and Tooltip all work
 * correctly when rendered inside a Modal. Specifically:
 * - Popover dropdowns portal into the Modal's DOM tree (not document.body)
 *   so react-remove-scroll does not block wheel-scroll inside the option list
 * - Focus management stays consistent — typing in a search field does not
 *   trigger the Dialog's focus-scope to steal focus back
 * - Vaul drag-detection is bypassed (data-vaul-no-drag on PopoverContent)
 */
export const OverlayNesting: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [fruit, setFruit] = useState("");
    const [roles, setRoles] = useState<string[]>([]);
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
      <div className="p-6">
        <p className="text-sm text-text-secondary mb-4">
          Open the modal and verify that all dropdowns open, scroll, and close correctly.
          The option lists should be fully scrollable without interference from the Modal scroll-lock.
        </p>
        <Button onClick={() => setOpen(true)}>Open Modal with form controls</Button>

        <ComposedModal
          open={open}
          onOpenChange={setOpen}
          title="Form controls inside Modal"
          description="Every dropdown below portals into the Modal DOM — scroll the option lists to verify."
          size="md"
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </>
          }
        >
          <div className="space-y-4">
            {/* Plain input to verify focus is unaffected */}
            <Input label="Name" placeholder="Type something…" />

            {/* Select with a long, scrollable list */}
            <Select
              label="Favourite fruit"
              placeholder="Choose a fruit…"
              options={fruitOptions}
              value={fruit}
              onChange={setFruit}
            />

            {/* MultiSelect — multiple concurrent selections */}
            <MultiSelect
              label="Roles"
              placeholder="Select roles…"
              options={roleOptions}
              value={roles}
              onChange={setRoles}
            />

            {/* DatePicker popover */}
            <DatePicker
              label="Start date"
              placeholder="Pick a date…"
              value={date}
              onChange={setDate}
            />

            {/* Dropdown (menu) */}
            <div>
              <p className="text-sm font-medium text-text-secondary mb-1.5">Dropdown menu</p>
              <Dropdown
                items={dropdownItems}
                trigger={
                  <Button variant="outline" size="sm" rightIcon={<Settings className="w-4 h-4" />}>
                    Actions
                  </Button>
                }
              />
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
      </div>
    );
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <ModalDemo
              key={s}
              label={`Size ${s}`}
              size={s}
              title={`${s.toUpperCase()} Modal`}
              description="Adjust the size prop to control how wide the modal renders."
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Color Accents</h3>
        <div className="flex flex-wrap gap-2">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(
            (c) => (
              <ModalDemo
                key={c}
                label={c}
                color={c}
                title={`${c.charAt(0).toUpperCase() + c.slice(1)} Modal`}
                description="The color prop adds a colored left border accent."
              />
            ),
          )}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Centered Content</h3>
        <ModalDemo
          label="Centered"
          centered
          title="Confirmation Required"
          description="Are you sure you want to proceed with this action?"
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Form</h3>
        {(() => {
          const [open, setOpen] = useState(false);
          return (
            <>
              <Button onClick={() => setOpen(true)} variant="outline">
                Open Form Modal
              </Button>
              <ComposedModal
                open={open}
                onOpenChange={setOpen}
                title="Create Account"
                description="Fill in the details below to create a new account."
                footer={
                  <>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setOpen(false)}>Create Account</Button>
                  </>
                }
              >
                <div className="space-y-3">
                  <Input label="Full Name" placeholder="John Doe" />
                  <Input label="Email Address" placeholder="john@example.com" type="email" />
                  <Input label="Password" type="password" placeholder="Min. 8 characters" />
                </div>
              </ComposedModal>
            </>
          );
        })()}
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Confirmation Dialog</h3>
        {(() => {
          const [open, setOpen] = useState(false);
          return (
            <>
              <Button onClick={() => setOpen(true)} color="error" variant="outline">
                Delete Record
              </Button>
              <ComposedModal
                open={open}
                onOpenChange={setOpen}
                color="error"
                size="sm"
                centered
                title="Delete Record"
                description="This action cannot be undone. The record will be permanently removed from the system."
                footer={
                  <>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button color="error" onClick={() => setOpen(false)}>
                      Delete
                    </Button>
                  </>
                }
              >
                <div className="flex justify-center py-2">
                  <Trash2 className="w-12 h-12 text-error opacity-80" />
                </div>
              </ComposedModal>
            </>
          );
        })()}
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Status Modals</h3>
        <div className="flex flex-wrap gap-2">
          {(() => {
            const [successOpen, setSuccessOpen] = useState(false);
            const [infoOpen, setInfoOpen] = useState(false);
            const [warnOpen, setWarnOpen] = useState(false);
            return (
              <>
                <Button onClick={() => setSuccessOpen(true)} color="success" variant="soft" size="sm">
                  Success
                </Button>
                <ComposedModal
                  open={successOpen}
                  onOpenChange={setSuccessOpen}
                  color="success"
                  size="sm"
                  centered
                  title="Payment Successful"
                  description="Your payment of $49.00 has been processed."
                  footer={<Button color="success" onClick={() => setSuccessOpen(false)}>Done</Button>}
                >
                  <div className="flex justify-center py-2">
                    <CheckCircle className="w-12 h-12 text-success" />
                  </div>
                </ComposedModal>

                <Button onClick={() => setInfoOpen(true)} color="info" variant="soft" size="sm">
                  Info
                </Button>
                <ComposedModal
                  open={infoOpen}
                  onOpenChange={setInfoOpen}
                  color="info"
                  size="sm"
                  centered
                  title="System Maintenance"
                  description="Scheduled maintenance will occur on Sunday at 2:00 AM UTC."
                  footer={<Button color="info" onClick={() => setInfoOpen(false)}>Got it</Button>}
                >
                  <div className="flex justify-center py-2">
                    <Info className="w-12 h-12 text-info" />
                  </div>
                </ComposedModal>

                <Button onClick={() => setWarnOpen(true)} color="warning" variant="soft" size="sm">
                  Warning
                </Button>
                <ComposedModal
                  open={warnOpen}
                  onOpenChange={setWarnOpen}
                  color="warning"
                  size="sm"
                  centered
                  title="Unsaved Changes"
                  description="You have unsaved changes. Leaving will discard them."
                  footer={
                    <>
                      <Button variant="outline" onClick={() => setWarnOpen(false)}>
                        Stay
                      </Button>
                      <Button color="warning" onClick={() => setWarnOpen(false)}>
                        Leave
                      </Button>
                    </>
                  }
                >
                  <div className="flex justify-center py-2">
                    <AlertTriangle className="w-12 h-12 text-warning" />
                  </div>
                </ComposedModal>
              </>
            );
          })()}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="flex flex-wrap gap-2">
          <ModalDemo
            label="No Close Button"
            showCloseButton={false}
            title="No Close Button"
            description="The X button is hidden. Close via the footer only."
          />
          <ModalDemo
            label="No Header"
            hideHeader
            title="Hidden"
          >
            <p className="text-sm text-text-secondary">
              The header is hidden. Only body and footer are shown.
            </p>
          </ModalDemo>
          <ModalDemo
            label="No Footer"
            hideFooter
            title="No Footer Modal"
            description="Footer is hidden. Only close button dismisses."
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Composable API</h3>
        {(() => {
          const [open, setOpen] = useState(false);
          return (
            <Modal open={open} onOpenChange={setOpen}>
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
            </Modal>
          );
        })()}
      </section>
    </div>
  ),
};
