import type { Meta, StoryObj } from "@storybook/react";
import { Mail, Lock, User, Search, Phone, Globe } from "lucide-react";
import React from "react";
import FloatInput from "./index";

const meta: Meta<typeof FloatInput> = {
  title: "Data Entry/FloatInput",
  component: FloatInput,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    clearable: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    messagePosition: { control: "select", options: ["top", "bottom"] },
    label: { control: "text" },
    error: { control: "text" },
    warning: { control: "text" },
    info: { control: "text" },
    success: { control: "text" },
    helperText: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof FloatInput>;

export const Playground: Story = {
  args: {
    label: "Email address",
    size: "md",
    color: "primary",
    clearable: false,
    loading: false,
    disabled: false,
    fullWidth: true,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <FloatInput key={s} size={s} label={`Size ${s}`} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent"] as const).map((c) => (
            <FloatInput key={c} color={c} label={`${c.charAt(0).toUpperCase() + c.slice(1)} color`} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Icons
        </h3>
        <div className="space-y-3">
          <FloatInput label="Email" leftIcon={<Mail className="w-4 h-4" />} />
          <FloatInput label="Password" leftIcon={<Lock className="w-4 h-4" />} type="password" />
          <FloatInput label="Phone" leftIcon={<Phone className="w-4 h-4" />} type="tel" />
          <FloatInput
            label="Website"
            leftIcon={<Globe className="w-4 h-4" />}
            rightIcon={<User className="w-4 h-4" />}
          />
          <FloatInput label="Search" leftIcon={<Search className="w-4 h-4" />} clearable defaultValue="Clearable with icon" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Validation States
        </h3>
        <div className="space-y-3">
          <FloatInput label="Error field" error="This field is required." />
          <FloatInput label="Warning field" warning="Double-check this value." />
          <FloatInput label="Success field" success="Looks good!" defaultValue="valid@example.com" />
          <FloatInput label="Info field" info="Must be at least 8 characters." />
          <FloatInput label="Helper text" helperText="We will never share your email." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Message Position
        </h3>
        <div className="space-y-3">
          <FloatInput label="Message on top" error="Error above the input." messagePosition="top" />
          <FloatInput label="Message on bottom" error="Error below the input." messagePosition="bottom" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="space-y-3">
          <FloatInput label="Clearable" clearable defaultValue="Click X to clear me" />
          <FloatInput label="Loading" loading />
          <FloatInput label="Disabled" disabled defaultValue="Cannot edit this" />
          <FloatInput label="Read only" readOnly defaultValue="Read only value" />
          <FloatInput label="Required field" required />
        </div>
      </section>
    </div>
  ),
};
