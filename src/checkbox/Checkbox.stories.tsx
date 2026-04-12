import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Checkbox from "./index";

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "soft"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
  args: {
    label: "Accept terms and conditions",
    variant: "solid",
    color: "primary",
    size: "md",
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="flex flex-wrap gap-6">
          <Checkbox variant="solid" label="Solid" defaultChecked />
          <Checkbox variant="outline" label="Outline" defaultChecked />
          <Checkbox variant="soft" label="Soft" defaultChecked />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="flex flex-wrap gap-6">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <Checkbox key={color} color={color} label={color} defaultChecked />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex flex-wrap items-center gap-6">
          <Checkbox size="xs" label="Extra small" defaultChecked />
          <Checkbox size="sm" label="Small" defaultChecked />
          <Checkbox size="md" label="Medium" defaultChecked />
          <Checkbox size="lg" label="Large" defaultChecked />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="flex flex-wrap gap-6">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Disabled checked" disabled defaultChecked />
          <Checkbox label="Disabled indeterminate" disabled indeterminate />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation</h3>
        <div className="space-y-3 max-w-sm">
          <Checkbox label="With helper text" helperText="You can uncheck this at any time" />
          <Checkbox label="Error state" error="You must accept the terms" />
          <Checkbox label="With description and error" helperText="Required to proceed" error="This field is required" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Real Usage</h3>
        <div className="space-y-2 max-w-sm">
          <Checkbox label="Receive marketing emails" helperText="We'll send you updates about new features" />
          <Checkbox label="Enable two-factor authentication" helperText="Adds an extra layer of security" defaultChecked />
          <Checkbox label={<span>I agree to the <a href="#" className="text-primary underline">Terms of Service</a> and <a href="#" className="text-primary underline">Privacy Policy</a></span>} />
        </div>
      </section>
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = React.useState<boolean[]>([true, false, true]);
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean) && !allChecked;

    return (
      <div className="space-y-2">
        <Checkbox
          label="Select all"
          checked={allChecked}
          indeterminate={someChecked}
          onChange={(e) => setChecked(checked.map(() => e.target.checked))}
        />
        <div className="pl-6 space-y-2">
          {["Option A", "Option B", "Option C"].map((opt, i) => (
            <Checkbox
              key={opt}
              label={opt}
              checked={checked[i]}
              onChange={(e) => {
                const next = [...checked];
                next[i] = e.target.checked;
                setChecked(next);
              }}
            />
          ))}
        </div>
      </div>
    );
  },
};
