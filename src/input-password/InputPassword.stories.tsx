import type { Meta, StoryObj } from "@storybook/react";
import { Lock, User } from "lucide-react";
import React from "react";
import { PasswordInput } from "./index";

const meta: Meta<typeof PasswordInput> = {
  title: "Data Entry/InputPassword",
  component: PasswordInput,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["outline", "filled"] },
    color: { control: "select", options: ["primary", "secondary", "accent", "success", "error", "warning", "info"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    visibilityToggle: { control: "boolean" },
    clearable: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    messagePosition: { control: "select", options: ["top", "bottom"] },
  },
};
export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Playground: Story = {
  args: { label: "Password", placeholder: "Enter password...", size: "md", variant: "outline" },
};

const colors = ["primary", "secondary", "accent", "success", "error", "warning", "info"] as const;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <PasswordInput variant="outline" label="Outline" placeholder="Enter password..." />
          <PasswordInput variant="filled" label="Filled" placeholder="Enter password..." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <PasswordInput key={s} size={s} label={`Size ${s}`} placeholder="Password" />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {colors.map((c) => (
            <PasswordInput key={c} color={c} label={c} placeholder="Password" />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Left Icon</h3>
        <div className="space-y-3">
          <PasswordInput leftIcon={<Lock className="w-4 h-4" />} label="Secure password" placeholder="Minimum 8 characters" />
          <PasswordInput leftIcon={<User className="w-4 h-4" />} label="Account password" placeholder="Your password" variant="filled" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Toggle Options</h3>
        <div className="space-y-3">
          <PasswordInput label="With toggle (default)" defaultValue="secret123" />
          <PasswordInput label="No toggle" visibilityToggle={false} defaultValue="secret123" />
          <PasswordInput label="Clearable" clearable defaultValue="secret123" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <PasswordInput error="Password must be at least 8 characters" label="Error" placeholder="Too short" />
          <PasswordInput warning="Password strength: medium" label="Warning" placeholder="Password" />
          <PasswordInput success="Strong password" label="Success" defaultValue="Str0ng!Pass" />
          <PasswordInput info="Use uppercase, numbers, and symbols" label="Info hint" placeholder="Password" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Message Position</h3>
        <div className="space-y-3">
          <PasswordInput error="Error shown at top" label="Message top" messagePosition="top" placeholder="Password" />
          <PasswordInput error="Error shown at bottom" label="Message bottom" messagePosition="bottom" placeholder="Password" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <PasswordInput loading label="Loading" placeholder="Checking..." />
          <PasswordInput disabled label="Disabled" placeholder="Not editable" />
          <PasswordInput readOnly defaultValue="readonly-value-123" label="Read only" />
        </div>
      </section>
    </div>
  ),
};
