import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Checkbox from "../checkbox";
import CheckboxGroup from "./index";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Data Entry/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["vertical", "horizontal"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const colors = ["primary", "secondary", "accent", "success", "error", "warning", "info"] as const;

export const Playground: Story = {
  args: {
    label: "Interests",
    orientation: "vertical",
    size: "md",
    color: "primary",
  },
  render: (args) => (
    <CheckboxGroup {...args}>
      <Checkbox label="Music" />
      <Checkbox label="Sports" />
      <Checkbox label="Reading" />
      <Checkbox label="Gaming" />
    </CheckboxGroup>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Orientations
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <CheckboxGroup label="Vertical (default)" orientation="vertical">
            <Checkbox label="Option A" defaultChecked />
            <Checkbox label="Option B" />
            <Checkbox label="Option C" />
          </CheckboxGroup>
          <CheckboxGroup label="Horizontal" orientation="horizontal">
            <Checkbox label="XS" defaultChecked />
            <Checkbox label="S" />
            <Checkbox label="M" />
            <Checkbox label="L" />
            <Checkbox label="XL" />
          </CheckboxGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-6">
          {colors.map((c) => (
            <CheckboxGroup key={c} label={c} orientation="horizontal">
              <Checkbox color={c} label="A" defaultChecked />
              <Checkbox color={c} label="B" />
            </CheckboxGroup>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex flex-wrap gap-8">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <CheckboxGroup key={s} label={`Size ${s}`} orientation="vertical" size={s}>
              <Checkbox label="Option A" defaultChecked />
              <Checkbox label="Option B" />
            </CheckboxGroup>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Helper Text
        </h3>
        <CheckboxGroup
          label="Notification preferences"
          helperText="Select the notifications you want to receive."
          orientation="vertical"
        >
          <Checkbox label="Email notifications" defaultChecked />
          <Checkbox label="SMS notifications" />
          <Checkbox label="Push notifications" defaultChecked />
        </CheckboxGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Error State
        </h3>
        <CheckboxGroup
          label="Required selection"
          error="You must select at least one option."
          orientation="vertical"
        >
          <Checkbox label="Option A" />
          <Checkbox label="Option B" />
          <Checkbox label="Option C" />
        </CheckboxGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Real-world: Technical Skills
        </h3>
        <CheckboxGroup label="Technical Skills" orientation="horizontal">
          <Checkbox label="JavaScript" color="warning" defaultChecked />
          <Checkbox label="TypeScript" color="primary" defaultChecked />
          <Checkbox label="React" color="info" defaultChecked />
          <Checkbox label="Node.js" color="success" />
          <Checkbox label="Python" color="accent" />
          <Checkbox label="Rust" color="error" />
        </CheckboxGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States: Disabled
        </h3>
        <div className="space-y-4">
          <CheckboxGroup label="Disabled group (no children disabled)" disabled orientation="horizontal">
            <Checkbox label="Option A" defaultChecked />
            <Checkbox label="Option B" />
            <Checkbox label="Option C" />
          </CheckboxGroup>
          <CheckboxGroup label="Mixed disabled" orientation="vertical">
            <Checkbox label="Enabled" defaultChecked />
            <Checkbox label="Disabled individually" disabled />
            <Checkbox label="Also enabled" />
          </CheckboxGroup>
        </div>
      </section>
    </div>
  ),
};
