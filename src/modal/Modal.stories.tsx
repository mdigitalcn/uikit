import type { Meta, StoryObj } from "@storybook/react";
import { AlertTriangle, CheckCircle, Info, Trash2 } from "lucide-react";
import React, { useState } from "react";
import Button from "../button";
import Input from "../input";
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
