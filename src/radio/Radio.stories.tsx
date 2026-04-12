import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Radio from "./index";

const meta: Meta<typeof Radio> = {
  title: "Form/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
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
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
  args: {
    label: "Select this option",
    color: "primary",
    size: "md",
    name: "playground",
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="flex flex-wrap gap-6">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <Radio key={color} color={color} label={color} name={`color-${color}`} defaultChecked />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex flex-wrap items-center gap-6">
          <Radio size="xs" label="Extra small" name="sizes" defaultChecked />
          <Radio size="sm" label="Small" name="sizes" />
          <Radio size="md" label="Medium" name="sizes" />
          <Radio size="lg" label="Large" name="sizes" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="flex flex-wrap gap-6">
          <Radio label="Unchecked" name="states-a" />
          <Radio label="Checked" name="states-b" defaultChecked />
          <Radio label="Disabled unchecked" name="states-c" disabled />
          <Radio label="Disabled checked" name="states-d" disabled defaultChecked />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation</h3>
        <div className="space-y-3 max-w-sm">
          <Radio label="With helper text" name="helper" helperText="Selecting this will notify you via email" />
          <Radio label="Error state" name="error" error="Please select an option" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Radio Group (native)</h3>
        <div className="space-y-2 max-w-sm">
          <p className="text-sm text-text-secondary mb-2">Select your preferred plan:</p>
          <Radio name="plan" value="free" label="Free" helperText="Up to 3 projects" defaultChecked />
          <Radio name="plan" value="pro" label="Pro" helperText="Unlimited projects, $9/mo" />
          <Radio name="plan" value="enterprise" label="Enterprise" helperText="Custom pricing, contact us" />
        </div>
      </section>
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const [value, setValue] = React.useState("react");
    return (
      <div className="space-y-2 max-w-sm">
        <p className="text-sm font-medium text-text-primary mb-3">Preferred framework</p>
        {[
          { value: "react", label: "React", helperText: "A JavaScript library for building UIs" },
          { value: "vue", label: "Vue", helperText: "The progressive JavaScript framework" },
          { value: "svelte", label: "Svelte", helperText: "Cybernetically enhanced web apps" },
          { value: "solid", label: "Solid", helperText: "Simple and performant reactivity" },
        ].map((option) => (
          <Radio
            key={option.value}
            name="framework"
            value={option.value}
            label={option.label}
            helperText={option.helperText}
            checked={value === option.value}
            onChange={() => setValue(option.value)}
          />
        ))}
      </div>
    );
  },
};
