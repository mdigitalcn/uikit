import type { Meta, StoryObj } from "@storybook/react";
import { Check, Clock, Home, Package, Truck, X } from "lucide-react";
import React from "react";

import Timeline from "./index";

const meta: Meta<typeof Timeline> = {
  title: "Data Display/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    mode: {
      control: "select",
      options: ["left", "right", "center"],
    },
    pending: { control: "boolean" },
    reverse: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

const orderItems = [
  {
    key: "placed",
    title: "Order Placed",
    description: "Your order has been confirmed.",
    timestamp: "Jan 1, 09:00",
    color: "success" as const,
  },
  {
    key: "processing",
    title: "Processing",
    description: "We are preparing your order.",
    timestamp: "Jan 2, 10:30",
    color: "success" as const,
  },
  {
    key: "shipped",
    title: "Shipped",
    description: "Package is on its way.",
    timestamp: "Jan 3, 14:00",
    color: "primary" as const,
  },
  {
    key: "delivered",
    title: "Delivered",
    description: "Package will arrive soon.",
    timestamp: "Est. Jan 5",
    color: "default" as const,
  },
];

const iconItems = [
  {
    key: "order",
    title: "Order Received",
    description: "We received your order.",
    icon: <Package className="w-3.5 h-3.5" />,
    color: "success" as const,
  },
  {
    key: "ship",
    title: "Dispatched",
    description: "Your package has been sent.",
    icon: <Truck className="w-3.5 h-3.5" />,
    color: "success" as const,
  },
  {
    key: "transit",
    title: "In Transit",
    description: "En route to your location.",
    icon: <Clock className="w-3.5 h-3.5" />,
    color: "primary" as const,
  },
  {
    key: "home",
    title: "Delivered",
    description: "Awaiting delivery.",
    icon: <Home className="w-3.5 h-3.5" />,
    color: "default" as const,
  },
];

const mixedColorItems = [
  {
    key: "success",
    title: "Deployment Succeeded",
    description: "All checks passed.",
    icon: <Check className="w-3.5 h-3.5" />,
    color: "success" as const,
  },
  {
    key: "warn",
    title: "High Latency Detected",
    description: "Response time above threshold.",
    icon: <Clock className="w-3.5 h-3.5" />,
    color: "warning" as const,
  },
  {
    key: "error",
    title: "Service Outage",
    description: "Database connection failed.",
    icon: <X className="w-3.5 h-3.5" />,
    color: "error" as const,
  },
  {
    key: "info",
    title: "Rollback Initiated",
    description: "Rolling back to previous version.",
    color: "info" as const,
  },
];

export const Playground: Story = {
  args: {
    items: orderItems,
    size: "md",
    color: "primary",
    orientation: "vertical",
    mode: "left",
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Basic with Timestamps</h3>
        <Timeline items={orderItems} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <Timeline items={iconItems} color="primary" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Mixed Item Colors</h3>
        <Timeline items={mixedColorItems} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Pending Indicator</h3>
        <Timeline items={orderItems.slice(0, 3)} pending pendingText="Awaiting delivery..." color="primary" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Reversed</h3>
        <Timeline items={orderItems} reverse color="primary" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Horizontal Orientation</h3>
        <Timeline items={orderItems} orientation="horizontal" color="primary" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        {(["xs", "sm", "md", "lg"] as const).map((s) => (
          <div key={s} className="mb-6">
            <p className="text-xs text-text-secondary mb-2">size: {s}</p>
            <Timeline items={orderItems.slice(0, 3)} size={s} color="primary" />
          </div>
        ))}
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="grid grid-cols-2 gap-6">
          {(["primary", "accent", "success", "error", "warning", "info"] as const).map((c) => (
            <div key={c}>
              <p className="text-xs text-text-secondary mb-2">{c}</p>
              <Timeline items={orderItems.slice(0, 2)} color={c} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Mode — Right</h3>
        <Timeline items={orderItems} mode="right" color="primary" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Mode — Center (Alternating)</h3>
        <Timeline items={orderItems} mode="center" color="primary" />
      </section>
    </div>
  ),
};
