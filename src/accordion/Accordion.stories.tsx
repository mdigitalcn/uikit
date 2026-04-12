import type { Meta, StoryObj } from "@storybook/react";
import { Bell, CreditCard, HelpCircle, Lock, Settings, Shield, User } from "lucide-react";
import React from "react";
import Accordion from "./index";
import type { AccordionItem } from "./types";

const meta: Meta<typeof Accordion> = {
  title: "Layout/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "solid", "soft", "bordered", "splitted"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    multiple: { control: "boolean" },
    collapsible: { control: "boolean" },
    destroyOnClose: { control: "boolean" },
    showDivider: { control: "boolean" },
    expandIconPosition: {
      control: "select",
      options: ["left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const faqItems: AccordionItem[] = [
  {
    key: "1",
    title: "What is included in the free plan?",
    content: "The free plan includes up to 3 projects, 5 GB of storage, and access to core features. You can invite up to 2 collaborators per project. All projects are limited to 1,000 API calls per month.",
  },
  {
    key: "2",
    title: "How do I upgrade my account?",
    content: "You can upgrade your account at any time from the Billing section in your account settings. We accept all major credit cards and PayPal. Upgrades take effect immediately.",
  },
  {
    key: "3",
    title: "Can I export my data?",
    content: "Yes, you can export all your data in JSON or CSV format from the Settings page. Data exports include all projects, configurations, and usage history.",
  },
  {
    key: "4",
    title: "Is there a limit on API calls?",
    content: "Free accounts are limited to 1,000 API calls per month. Pro accounts get 100,000 calls/month, and Enterprise accounts have unlimited calls. Contact us for custom limits.",
    disabled: true,
  },
];

const settingsItems: AccordionItem[] = [
  {
    key: "profile",
    icon: <User size={16} />,
    title: "Profile Settings",
    subtitle: "Manage your personal information",
    content: (
      <div className="space-y-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-text-secondary">Display Name</label>
          <div className="h-8 bg-surface rounded border border-border px-3 flex items-center text-sm">Alex Johnson</div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-text-secondary">Email</label>
          <div className="h-8 bg-surface rounded border border-border px-3 flex items-center text-sm">alex@example.com</div>
        </div>
      </div>
    ),
  },
  {
    key: "notifications",
    icon: <Bell size={16} />,
    title: "Notifications",
    subtitle: "Configure how you receive alerts",
    extra: <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">3 new</span>,
    content: (
      <div className="space-y-2">
        {["Email notifications", "Push notifications", "SMS alerts", "Weekly digest"].map((item) => (
          <div key={item} className="flex items-center justify-between py-1">
            <span className="text-sm">{item}</span>
            <div className="w-8 h-4 bg-primary rounded-full" />
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "security",
    icon: <Shield size={16} />,
    title: "Security",
    subtitle: "Two-factor auth and password",
    content: (
      <div className="space-y-2 text-sm text-text-secondary">
        <p>Two-factor authentication is currently <strong className="text-success">enabled</strong>.</p>
        <p>Last password change: 30 days ago.</p>
      </div>
    ),
  },
  {
    key: "billing",
    icon: <CreditCard size={16} />,
    title: "Billing",
    subtitle: "Subscription and payment methods",
    content: (
      <div className="text-sm text-text-secondary">
        <p>Current plan: <strong className="text-text-primary">Pro — $29/month</strong></p>
        <p className="mt-1">Next billing date: May 1, 2026</p>
      </div>
    ),
  },
];

export const Playground: Story = {
  args: {
    variant: "default",
    color: "default",
    size: "md",
    multiple: false,
    collapsible: true,
    showDivider: true,
    expandIconPosition: "right",
  },
  render: (args) => (
    <div className="max-w-xl">
      <Accordion {...args} items={faqItems} defaultActiveKey="1" />
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="space-y-6">
          {(["default", "solid", "soft", "bordered", "splitted"] as const).map((variant) => (
            <div key={variant}>
              <p className="text-xs text-text-secondary mb-2">variant="{variant}"</p>
              <Accordion
                variant={variant}
                color="primary"
                items={faqItems.slice(0, 2)}
                defaultActiveKey="1"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors — soft variant</h3>
        <div className="space-y-4">
          {(["primary", "secondary", "accent", "success"] as const).map((color) => (
            <Accordion
              key={color}
              variant="soft"
              color={color}
              items={[{ key: "1", title: `color="${color}"`, content: `This accordion uses the ${color} color slot.` }]}
              defaultActiveKey="1"
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Icon + Subtitle + Extra</h3>
        <Accordion items={settingsItems} variant="bordered" defaultActiveKey="profile" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Multiple Open + Icon Left</h3>
        <Accordion
          items={faqItems}
          multiple
          expandIconPosition="left"
          variant="splitted"
          color="primary"
          defaultActiveKey={["1", "2"]}
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <div key={size}>
              <p className="text-xs text-text-secondary mb-1">size="{size}"</p>
              <Accordion
                size={size}
                items={[{ key: "1", title: "Accordion item", content: "Content inside this accordion panel." }]}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">FAQ Example</h3>
        <Accordion
          items={[
            { key: "1", icon: <HelpCircle size={16} />, title: "What is included in the free plan?", content: faqItems[0].content },
            { key: "2", icon: <Lock size={16} />, title: "How secure is my data?", content: "All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We are SOC 2 Type II certified." },
            { key: "3", icon: <Settings size={16} />, title: "Can I customize the product?", content: "Yes, we offer extensive customization options via our API and SDK. Enterprise plans also include white-labeling." },
          ]}
          variant="default"
          color="primary"
          defaultActiveKey="1"
          multiple
        />
      </section>

    </div>
  ),
};
