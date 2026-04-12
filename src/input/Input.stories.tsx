import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertCircle,
  Eye,
  Lock,
  Mail,
  Search,
  User,
} from "lucide-react";
import React from "react";

import Input from "./index";

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "filled"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    warning: { control: "text" },
    info: { control: "text" },
    success: { control: "text" },
    loading: { control: "boolean" },
    clearable: { control: "boolean" },
    showCount: { control: "boolean" },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
    messagePosition: {
      control: "select",
      options: ["top", "bottom"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    variant: "outline",
    size: "md",
    color: "primary",
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <Input variant="outline" label="Outline" placeholder="Outline variant" />
          <Input variant="filled" label="Filled" placeholder="Filled variant" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <Input size="xs" placeholder="Extra small" />
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <div className="space-y-3">
          <Input leftIcon={<Search size={16} />} placeholder="Search..." />
          <Input leftIcon={<Mail size={16} />} placeholder="Email address" label="Email" />
          <Input leftIcon={<Lock size={16} />} rightIcon={<Eye size={16} />} placeholder="Password" type="password" />
          <Input rightIcon={<AlertCircle size={16} />} placeholder="With right icon" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <Input label="Error" placeholder="Enter value" error="This field is required" />
          <Input label="Warning" placeholder="Enter value" warning="This value may cause issues" />
          <Input label="Success" placeholder="Enter value" success="Looks good!" />
          <Input label="Info" placeholder="Enter value" info="This will be visible to others" />
          <Input label="Helper text" placeholder="Enter value" helperText="Minimum 8 characters required" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <Input placeholder="Disabled input" disabled label="Disabled" />
          <Input placeholder="Read only value" readOnly label="Read only" defaultValue="Cannot edit this" />
          <Input placeholder="Loading..." loading label="Loading" />
          <Input placeholder="Clearable input" clearable label="Clearable" defaultValue="Clear me" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Character Count</h3>
        <div className="space-y-3">
          <Input label="Bio" placeholder="Tell us about yourself" showCount maxLength={100} />
          <Input label="Title" placeholder="Enter title" showCount maxLength={50} defaultValue="Short title" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <Input key={color} color={color} label={color} placeholder={`${color} focus color`} />
          ))}
        </div>
      </section>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-3 max-w-sm">
      <Input leftIcon={<Search size={16} />} placeholder="Search anything..." />
      <Input leftIcon={<User size={16} />} label="Username" placeholder="johndoe" />
      <Input leftIcon={<Mail size={16} />} label="Email" placeholder="you@example.com" type="email" />
      <Input leftIcon={<Lock size={16} />} rightIcon={<Eye size={16} />} label="Password" placeholder="Enter password" type="password" />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Input label="Error state" placeholder="Enter value" error="This field is required" defaultValue="bad input" />
      <Input label="Warning state" placeholder="Enter value" warning="Password strength: weak" defaultValue="password" />
      <Input label="Success state" placeholder="Enter value" success="Username is available" defaultValue="johndoe" />
      <Input label="Info state" placeholder="Enter value" info="We will send a confirmation email" defaultValue="me@example.com" />
    </div>
  ),
};
