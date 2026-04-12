import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Descriptions from "./index";
import type { DescriptionsItem } from "./types";

const meta: Meta<typeof Descriptions> = {
  title: "Data Display/Descriptions",
  component: Descriptions,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "solid", "soft"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    layout: { control: "select", options: ["horizontal", "vertical"] },
    column: { control: "number" },
    bordered: { control: "boolean" },
    rounded: { control: "boolean" },
    colon: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Descriptions>;

const StatusBadge = ({ color, label }: { color: string; label: string }) => (
  <span
    className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
    style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
  >
    {label}
  </span>
);

const userItems: DescriptionsItem[] = [
  { key: "name", label: "Full Name", children: "Alice Johnson" },
  { key: "email", label: "Email", children: "alice@example.com" },
  { key: "phone", label: "Phone", children: "+1 (555) 234-5678" },
  { key: "dept", label: "Department", children: "Engineering" },
  { key: "status", label: "Status", children: <StatusBadge color="success" label="Active" /> },
  { key: "location", label: "Location", children: "San Francisco, CA" },
];

const orderItems: DescriptionsItem[] = [
  { key: "id", label: "Order ID", children: "#ORD-2024-8821" },
  { key: "product", label: "Product", children: "Premium Subscription" },
  { key: "amount", label: "Amount", children: "$99.00 / year" },
  { key: "status", label: "Status", children: <StatusBadge color="info" label="Processing" /> },
  { key: "date", label: "Created", children: "Jan 15, 2024" },
  { key: "payment", label: "Payment", children: "Visa ending in 4242" },
];

const serverItems: DescriptionsItem[] = [
  { key: "hostname", label: "Hostname", children: "prod-server-01.example.com", span: 2 },
  { key: "os", label: "Operating System", children: "Ubuntu 22.04 LTS" },
  { key: "cpu", label: "CPU", children: "8-core Intel Xeon @ 3.6 GHz" },
  { key: "ram", label: "Memory", children: "64 GB DDR4" },
  { key: "disk", label: "Disk", children: "2 TB NVMe SSD" },
  { key: "ip", label: "IP Address", children: "192.168.1.100", span: 2 },
  { key: "region", label: "Region", children: "us-east-1" },
];

export const Playground: Story = {
  args: {
    title: "User Information",
    items: userItems,
    column: 3,
    variant: "default",
    color: "primary",
    size: "md",
    layout: "horizontal",
    bordered: true,
    rounded: true,
    colon: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Horizontal Layout (default)
        </h3>
        <Descriptions
          title="User Information"
          items={userItems}
          column={3}
          bordered
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Vertical Layout
        </h3>
        <Descriptions
          title="Order Details"
          items={orderItems}
          layout="vertical"
          column={3}
          bordered
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="space-y-6">
          {(["default", "solid", "soft"] as const).map((v) => (
            <div key={v}>
              <p className="text-xs text-text-secondary mb-2">{v}</p>
              <Descriptions
                items={userItems.slice(0, 3)}
                variant={v}
                color="primary"
                column={3}
                bordered
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="space-y-4">
          {(["primary", "secondary", "accent", "success", "error"] as const).map((c) => (
            <div key={c}>
              <p className="text-xs text-text-secondary mb-2">{c}</p>
              <Descriptions
                items={userItems.slice(0, 3)}
                color={c}
                column={3}
                bordered
                variant="soft"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s}>
              <p className="text-xs text-text-secondary mb-2">{s}</p>
              <Descriptions items={orderItems.slice(0, 3)} size={s} column={3} bordered />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Column Counts
        </h3>
        <div className="space-y-6">
          {([1, 2, 3] as const).map((col) => (
            <div key={col}>
              <p className="text-xs text-text-secondary mb-2">{col} column{col > 1 ? "s" : ""}</p>
              <Descriptions items={userItems.slice(0, 4)} column={col} bordered />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Span
        </h3>
        <Descriptions
          title="Server Configuration"
          items={serverItems}
          column={3}
          bordered
          color="primary"
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Colon
        </h3>
        <Descriptions
          items={userItems.slice(0, 4)}
          column={2}
          bordered
          colon
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Without Border
        </h3>
        <Descriptions items={userItems} column={3} bordered={false} rounded={false} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Title and Extra Action
        </h3>
        <Descriptions
          title="Profile Details"
          extra={
            <button className="text-xs text-text-secondary underline underline-offset-2 hover:text-text-primary transition-colors">
              Edit
            </button>
          }
          items={userItems}
          column={3}
          bordered
          color="primary"
        />
      </section>
    </div>
  ),
};
