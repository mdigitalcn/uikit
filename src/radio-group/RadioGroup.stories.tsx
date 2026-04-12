import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Radio from "../radio";
import { RadioGroup } from "./index";

const meta: Meta<typeof RadioGroup> = {
  title: "Data Entry/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["vertical", "horizontal"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Playground: Story = {
  args: { label: "Select a plan", orientation: "vertical" },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio label="Free" value="free" name="plan-pg" />
      <Radio label="Pro — $9/mo" value="pro" name="plan-pg" defaultChecked />
      <Radio label="Enterprise — Custom pricing" value="enterprise" name="plan-pg" />
    </RadioGroup>
  ),
};

const colors = [
  "primary",
  "secondary",
  "accent",
  "success",
  "error",
  "warning",
  "info",
] as const;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Orientations</h3>
        <div className="grid grid-cols-2 gap-6">
          <RadioGroup label="Vertical (default)">
            <Radio label="Option A" name="orient-v" defaultChecked />
            <Radio label="Option B" name="orient-v" />
            <Radio label="Option C" name="orient-v" />
          </RadioGroup>
          <RadioGroup label="Horizontal" orientation="horizontal">
            <Radio label="S" name="orient-h" defaultChecked />
            <Radio label="M" name="orient-h" />
            <Radio label="L" name="orient-h" />
            <Radio label="XL" name="orient-h" />
          </RadioGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="flex flex-wrap gap-6">
          {colors.map((c) => (
            <RadioGroup key={c} label={c} orientation="horizontal" color={c}>
              <Radio color={c} label="Yes" name={`col-${c}`} defaultChecked />
              <Radio color={c} label="No" name={`col-${c}`} />
            </RadioGroup>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap gap-8">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <RadioGroup key={s} label={`Size ${s}`} orientation="horizontal" size={s}>
              <Radio label="A" name={`sz-${s}`} defaultChecked />
              <Radio label="B" name={`sz-${s}`} />
            </RadioGroup>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Helper Text</h3>
        <div className="space-y-4">
          <RadioGroup
            label="Notification Preference"
            helperText="Choose how you want to receive alerts."
          >
            <Radio label="Email" name="notif" defaultChecked />
            <Radio label="SMS" name="notif" />
            <Radio label="Push Notification" name="notif" />
          </RadioGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Error State</h3>
        <RadioGroup
          label="Required Selection"
          error="Please select one of the options to continue."
        >
          <Radio label="Option A" name="err-group" />
          <Radio label="Option B" name="err-group" />
          <Radio label="Option C" name="err-group" />
        </RadioGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Pricing Plans</h3>
        <RadioGroup label="Select a Plan">
          <Radio
            label="Free — $0/month"
            helperText="Up to 5 projects, community support"
            name="pricing"
          />
          <Radio
            label="Pro — $9/month"
            helperText="Unlimited projects, priority support"
            name="pricing"
            defaultChecked
            color="primary"
          />
          <Radio
            label="Enterprise — Custom"
            helperText="SLA, dedicated support, custom integrations"
            name="pricing"
            color="accent"
          />
        </RadioGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="space-y-4">
          <RadioGroup label="Normal">
            <Radio label="Option A" name="state-normal" defaultChecked />
            <Radio label="Option B" name="state-normal" />
          </RadioGroup>
          <RadioGroup label="With Disabled Individual Radio">
            <Radio label="Available" name="state-dis-radio" defaultChecked />
            <Radio label="Unavailable" name="state-dis-radio" disabled />
            <Radio label="Available" name="state-dis-radio" />
          </RadioGroup>
        </div>
      </section>
    </div>
  ),
};
