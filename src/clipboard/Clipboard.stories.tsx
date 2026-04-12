import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Clipboard from "./index";

const meta: Meta<typeof Clipboard> = {
  title: "General/Clipboard",
  component: Clipboard,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "solid", "soft"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    showValue: { control: "boolean" },
    disabled: { control: "boolean" },
    successDuration: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof Clipboard>;

const colors = ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const;

export const Playground: Story = {
  args: {
    value: "npm install @mdigitalcn/uikit",
    size: "md",
    variant: "default",
    color: "primary",
    showValue: true,
    disabled: false,
    successDuration: 2000,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-lg">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="space-y-3">
          {(["default", "solid", "soft"] as const).map((v) => (
            <div key={v} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-14">{v}</span>
              <Clipboard value={`${v} variant — click to copy`} variant={v} color="primary" showValue />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="space-y-2">
          {colors.map((c) => (
            <div key={c} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-20">{c}</span>
              <Clipboard value={`color: ${c}`} color={c} variant="soft" showValue />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-6">{s}</span>
              <Clipboard size={s} value={`size ${s} — npm install @mdigitalcn/uikit`} showValue />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Show Value vs Icon Only
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-24">showValue=true</span>
            <Clipboard value="npm run build" showValue color="primary" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-24">showValue=false</span>
            <Clipboard value="npm run build" showValue={false} color="primary" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Real-world Use Cases
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-1">Install command</p>
            <Clipboard value="npm install @mdigitalcn/uikit" color="primary" showValue />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">API key</p>
            <Clipboard
              value="sk-1234567890abcdefghijklmnopqrstuvwxyz"
              color="accent"
              variant="soft"
              showValue
            />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Referral link</p>
            <Clipboard
              value="https://app.example.com/invite/abc123xyz"
              color="success"
              variant="default"
              showValue
            />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Git clone URL</p>
            <Clipboard
              value="git clone https://github.com/example/repo.git"
              color="default"
              variant="soft"
              size="sm"
              showValue
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-16">Disabled</span>
            <Clipboard value="Cannot copy this" disabled showValue color="primary" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-16">Short feedback</span>
            <Clipboard value="Quick feedback (500ms)" successDuration={500} showValue color="success" />
          </div>
        </div>
      </section>
    </div>
  ),
};
