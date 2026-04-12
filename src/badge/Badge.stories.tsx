import type { Meta, StoryObj } from "@storybook/react";
import { Bell, Mail, Star, AlertCircle } from "lucide-react";
import React from "react";

import Badge from "./index";

const meta: Meta<typeof Badge> = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "solid", "outline", "soft"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    shape: {
      control: "select",
      options: ["rounded", "pill", "circle"],
    },
    placement: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
    },
    dot: { control: "boolean" },
    count: { control: "number" },
    maxCount: { control: "number" },
    showZero: { control: "boolean" },
    processing: { control: "boolean" },
    invisible: { control: "boolean" },
    standalone: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
  args: {
    children: "Badge",
    variant: "solid",
    color: "primary",
    size: "sm",
    shape: "rounded",
  },
};

const colors = ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants x Colors</h3>
        {(["default", "solid", "outline", "soft"] as const).map((v) => (
          <div key={v} className="mb-4">
            <p className="text-xs text-text-secondary mb-2 capitalize">{v}</p>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <Badge key={c} color={c} variant={v}>
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex flex-wrap gap-3 items-center">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <Badge key={s} size={s} color="primary">
              Size {s}
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Shapes</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <Badge shape="rounded" color="primary">Rounded</Badge>
          <Badge shape="pill" color="accent">Pill</Badge>
          <Badge shape="circle" color="success">9</Badge>
          <Badge shape="circle" color="error">99+</Badge>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <div className="flex flex-wrap gap-3 items-center">
          <Badge icon={<Star />} color="warning">Featured</Badge>
          <Badge icon={<Mail />} color="info">12 messages</Badge>
          <Badge icon={<AlertCircle />} color="error">Critical</Badge>
          <Badge icon={<Bell />} color="primary" variant="soft">Alert</Badge>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Dot Indicator</h3>
        <div className="flex items-center gap-4">
          {(["primary", "success", "error", "warning", "info"] as const).map((color) => (
            <div key={color} className="flex flex-col items-center gap-1">
              <Badge dot color={color} />
              <span className="text-xs text-text-secondary">{color}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-1">
            <Badge dot color="error" processing />
            <span className="text-xs text-text-secondary">processing</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Floating — Count &amp; Overflow</h3>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Badge count={5} color="primary">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">count: 5</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge count={99} color="error">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">count: 99</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge count={150} maxCount={99} color="warning">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">overflow 99+</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge count={0} showZero color="info">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">showZero</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Placement Options</h3>
        <div className="flex items-center gap-10">
          {(["top-right", "top-left", "bottom-right", "bottom-left"] as const).map((placement) => (
            <div key={placement} className="flex flex-col items-center gap-3">
              <Badge count={3} color="primary" placement={placement}>
                <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
              </Badge>
              <span className="text-xs text-text-secondary">{placement}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Processing Animation</h3>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Badge count={1} color="error" processing>
              <Bell className="size-6 text-text-secondary" />
            </Badge>
            <span className="text-xs text-text-secondary">pulsing count</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge dot color="success" processing>
              <div className="w-10 h-10 rounded-full bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">pulsing dot</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Invisible State</h3>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Badge count={5} color="primary" invisible={false}>
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">visible</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge count={5} color="primary" invisible>
              <div className="w-10 h-10 rounded-lg bg-surface border border-border" />
            </Badge>
            <span className="text-xs text-text-secondary">invisible</span>
          </div>
        </div>
      </section>
    </div>
  ),
};
