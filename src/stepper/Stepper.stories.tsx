import type { Meta, StoryObj } from "@storybook/react";
import { User, Mail, Check, CreditCard, Package, Truck } from "lucide-react";
import React from "react";
import Stepper from "./index";

const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "solid", "soft"] },
    color: { control: "select", options: ["primary", "secondary", "accent", "success", "error", "warning", "info"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    type: { control: "select", options: ["numbered", "dots"] },
    status: { control: "select", options: ["process", "finish", "error", "wait"] },
  },
};
export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  { label: "Account", description: "Create your account" },
  { label: "Profile", description: "Setup your profile" },
  { label: "Billing", description: "Payment details" },
  { label: "Complete", description: "All done!" },
];

const iconSteps = [
  { label: "Account", icon: <User className="w-4 h-4" /> },
  { label: "Email", icon: <Mail className="w-4 h-4" /> },
  { label: "Payment", icon: <CreditCard className="w-4 h-4" /> },
  { label: "Done", icon: <Check className="w-4 h-4" /> },
];

const orderSteps = [
  { label: "Ordered", description: "Jan 1" },
  { label: "Processing", description: "Jan 2" },
  { label: "Shipped", description: "Jan 3", icon: <Truck className="w-4 h-4" /> },
  { label: "Delivered", description: "Jan 5", icon: <Package className="w-4 h-4" /> },
];

export const Playground: Story = {
  args: { steps, currentStep: 1, size: "md", color: "primary", variant: "default" },
};

const colors = ["primary", "secondary", "accent", "success", "error", "warning", "info"] as const;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Step States</h3>
        <div className="space-y-4">
          {[0, 1, 2, 3].map(c => (
            <div key={c}>
              <p className="text-xs text-text-secondary mb-1">Step {c + 1} active</p>
              <Stepper steps={steps} currentStep={c} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-4">
          {(["default", "solid", "soft"] as const).map(v => (
            <div key={v}>
              <p className="text-xs text-text-secondary mb-1">{v}</p>
              <Stepper steps={steps.slice(0, 3)} currentStep={1} variant={v} color="primary" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors (solid variant)</h3>
        <div className="space-y-4">
          {colors.map(c => (
            <div key={c}>
              <p className="text-xs text-text-secondary mb-1">{c}</p>
              <Stepper steps={steps.slice(0, 3)} currentStep={1} color={c} variant="solid" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Error Status</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-1">Current step has error</p>
            <Stepper steps={steps} currentStep={1} status="error" />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Individual step error via status</p>
            <Stepper
              steps={[
                { label: "Account", description: "Completed" },
                { label: "Verification", description: "Email bounced", status: "error" },
                { label: "Billing", description: "Pending" },
                { label: "Complete", description: "Waiting" },
              ]}
              currentStep={1}
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Disabled Steps</h3>
        <Stepper
          steps={[
            { label: "Account", description: "Done" },
            { label: "Profile", description: "Setup", disabled: true },
            { label: "Billing", description: "Required" },
            { label: "Complete", description: "Final" },
          ]}
          currentStep={0}
          onStepClick={() => {}}
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <Stepper steps={iconSteps} currentStep={2} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Dots Type</h3>
        <div className="space-y-4">
          <Stepper steps={steps} currentStep={1} type="dots" />
          <Stepper steps={steps} currentStep={2} type="dots" variant="solid" color="accent" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Vertical Orientation</h3>
        <div className="max-w-xs">
          <Stepper steps={orderSteps} currentStep={2} orientation="vertical" color="primary" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Clickable Steps</h3>
        <Stepper steps={steps} currentStep={1} onStepClick={() => {}} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map(s => (
            <div key={s}>
              <p className="text-xs text-text-secondary mb-1">{s}</p>
              <Stepper steps={steps.slice(0, 3)} currentStep={1} size={s} />
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
