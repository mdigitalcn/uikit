import type { Meta, StoryObj } from "@storybook/react";
import { BarChart2, Bell, Home, Lock, Settings, User, FileText, Shield, CreditCard, Globe } from "lucide-react";
import React, { useState } from "react";
import Tabs from "./index";
import type { TabItem } from "./types";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "solid", "soft", "pill"] },
    color: { control: "select", options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    radius: { control: "select", options: ["xs", "sm", "md", "lg", "full"] },
    destroyInactivePanel: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

const basicItems: TabItem[] = [
  { key: "overview", label: "Overview", content: <div className="py-4 text-text-secondary text-sm">Overview content goes here. This panel shows a summary of all activity.</div> },
  { key: "analytics", label: "Analytics", content: <div className="py-4 text-text-secondary text-sm">Analytics content goes here. View detailed charts and metrics.</div> },
  { key: "reports", label: "Reports", content: <div className="py-4 text-text-secondary text-sm">Reports content goes here. Download and export your data.</div> },
  { key: "settings", label: "Settings", content: <div className="py-4 text-text-secondary text-sm">Settings content goes here. Configure your preferences.</div> },
];

const iconItems: TabItem[] = [
  { key: "home", label: "Home", icon: <Home size={14} />, content: <div className="py-4 text-text-secondary text-sm">Home dashboard content.</div> },
  { key: "user", label: "Profile", icon: <User size={14} />, content: <div className="py-4 text-text-secondary text-sm">User profile content.</div> },
  { key: "settings", label: "Settings", icon: <Settings size={14} />, content: <div className="py-4 text-text-secondary text-sm">Settings content.</div> },
  { key: "security", label: "Security", icon: <Lock size={14} />, content: <div className="py-4 text-text-secondary text-sm">Security content.</div> },
  { key: "notifications", label: "Notifications", icon: <Bell size={14} />, content: <div className="py-4 text-text-secondary text-sm">Notifications content.</div> },
];

const withDisabled: TabItem[] = [
  { key: "general", label: "General", content: <div className="py-4 text-text-secondary text-sm">General settings content.</div> },
  { key: "billing", label: "Billing", content: <div className="py-4 text-text-secondary text-sm">Billing content.</div> },
  { key: "team", label: "Team", disabled: true, content: <div className="py-4 text-text-secondary text-sm">Team content (upgrade required).</div> },
  { key: "api", label: "API", disabled: true, content: <div className="py-4 text-text-secondary text-sm">API content (upgrade required).</div> },
];

export const Playground: Story = {
  args: {
    items: basicItems,
    defaultActiveKey: "overview",
    variant: "default",
    color: "primary",
    size: "md",
    radius: "md",
    destroyInactivePanel: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="space-y-8">
          {(["default", "solid", "soft", "pill"] as const).map((variant) => (
            <div key={variant}>
              <p className="text-xs text-text-secondary mb-3 capitalize">{variant}</p>
              <Tabs items={basicItems} defaultActiveKey="overview" variant={variant} color="primary" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-8">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <div key={color}>
              <p className="text-xs text-text-secondary mb-3 capitalize">{color}</p>
              <Tabs items={basicItems} defaultActiveKey="overview" color={color} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-8">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <div key={size}>
              <p className="text-xs text-text-secondary mb-3 uppercase">{size}</p>
              <Tabs items={basicItems} defaultActiveKey="overview" size={size} color="primary" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Pill Radius Variants</h3>
        <div className="space-y-6">
          {(["xs", "sm", "md", "lg", "full"] as const).map((radius) => (
            <div key={radius}>
              <p className="text-xs text-text-secondary mb-3 capitalize">radius: {radius}</p>
              <Tabs items={basicItems.slice(0, 3)} defaultActiveKey="overview" variant="pill" color="primary" radius={radius} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Icons</h3>
        <div className="space-y-6">
          <Tabs items={iconItems} defaultActiveKey="home" variant="default" color="primary" />
          <Tabs items={iconItems} defaultActiveKey="home" variant="pill" color="primary" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Disabled Tabs</h3>
        <Tabs items={withDisabled} defaultActiveKey="general" color="primary" />
      </section>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState("overview");
    return (
      <div className="p-4 max-w-xl space-y-4">
        <div className="flex gap-2">
          {basicItems.map((item) => (
            <button
              key={item.key}
              className="text-xs px-3 py-1 border rounded hover:bg-surface transition-colors"
              onClick={() => setActiveKey(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-text-secondary">Active: {activeKey}</p>
        <Tabs items={basicItems} activeKey={activeKey} onChange={setActiveKey} color="primary" />
      </div>
    );
  },
};

export const WithIcons: Story = {
  args: {
    items: iconItems,
    defaultActiveKey: "home",
    variant: "default",
    color: "primary",
  },
};

export const PillVariant: Story = {
  args: {
    items: basicItems,
    defaultActiveKey: "overview",
    variant: "pill",
    color: "primary",
    radius: "full",
  },
};

export const DisabledTabs: Story = {
  args: {
    items: withDisabled,
    defaultActiveKey: "general",
    color: "primary",
  },
};
