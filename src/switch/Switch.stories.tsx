import type { Meta, StoryObj } from "@storybook/react";
import { Bell, Check, Moon, Sun, Volume2, Wifi, X } from "lucide-react";
import React from "react";

import Switch from "./index";

const meta: Meta<typeof Switch> = {
  title: "Form/Switch",
  component: Switch,
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
    labelPosition: {
      control: "select",
      options: ["left", "right"],
    },
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
  args: {
    label: "Enable notifications",
    color: "primary",
    size: "md",
    labelPosition: "right",
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="flex flex-wrap gap-6">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <Switch key={color} color={color} label={color} defaultChecked />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex flex-wrap items-center gap-6">
          <Switch size="xs" label="Extra small" defaultChecked />
          <Switch size="sm" label="Small" defaultChecked />
          <Switch size="md" label="Medium" defaultChecked />
          <Switch size="lg" label="Large" defaultChecked />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Label Position</h3>
        <div className="flex flex-wrap gap-6">
          <Switch label="Label on right" labelPosition="right" defaultChecked />
          <Switch label="Label on left" labelPosition="left" defaultChecked />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Thumb Icon</h3>
        <div className="flex flex-wrap gap-6">
          <Switch label="Dark mode" thumbIcon={<Moon size={10} />} color="secondary" />
          <Switch label="Notifications" thumbIcon={<Bell size={10} />} defaultChecked />
          <Switch label="Wi-Fi" thumbIcon={<Wifi size={10} />} color="info" defaultChecked />
          <Switch label="Volume" thumbIcon={<Volume2 size={10} />} color="accent" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Track Content</h3>
        <div className="flex flex-wrap gap-6">
          <Switch
            label="Toggle with icons"
            startContent={<X size={8} />}
            endContent={<Check size={8} />}
            color="success"
            defaultChecked
          />
          <Switch
            label="Day / Night"
            startContent={<Moon size={8} />}
            endContent={<Sun size={8} />}
            color="warning"
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="flex flex-wrap gap-6">
          <Switch label="Default off" />
          <Switch label="Default on" defaultChecked />
          <Switch label="Disabled off" disabled />
          <Switch label="Disabled on" disabled defaultChecked />
          <Switch label="Loading" loading />
          <Switch label="Required" required helperText="This setting is required" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Validation</h3>
        <div className="space-y-3 max-w-sm">
          <Switch label="Accept terms" helperText="You must accept to continue" error="Please toggle to accept" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Settings Panel Example</h3>
        <div className="space-y-4 max-w-sm rounded-lg border border-border p-4">
          <Switch label="Email notifications" helperText="Receive updates via email" defaultChecked />
          <Switch label="Push notifications" helperText="Get notified on your device" color="info" />
          <Switch label="Marketing emails" helperText="Tips, products, and company news" color="secondary" />
          <Switch label="Dark mode" helperText="Use dark theme across the app" color="secondary" thumbIcon={<Moon size={10} />} />
        </div>
      </section>
    </div>
  ),
};
