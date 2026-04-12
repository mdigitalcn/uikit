import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Spinner from "./index";

const meta: Meta<typeof Spinner> = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["ring", "dots", "pulse"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    label: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Playground: Story = {
  args: {
    size: "md",
    color: "primary",
    variant: "ring",
  },
};

const colors = [
  "default",
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
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="flex flex-wrap gap-10 items-end">
          {(["ring", "dots", "pulse"] as const).map((v) => (
            <div key={v} className="flex flex-col items-center gap-2">
              <Spinner variant={v} color="primary" size="md" />
              <span className="text-xs text-text-secondary">{v}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="flex flex-wrap gap-6 items-end">
          {colors.map((c) => (
            <div key={c} className="flex flex-col items-center gap-2">
              <Spinner color={c} />
              <span className="text-xs text-text-secondary">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap gap-8 items-end">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <Spinner size={s} color="primary" />
              <span className="text-xs text-text-secondary">{s}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants x Colors</h3>
        <div className="space-y-6">
          {(["ring", "dots", "pulse"] as const).map((v) => (
            <div key={v}>
              <p className="text-xs text-text-secondary mb-3 capitalize">{v}</p>
              <div className="flex flex-wrap gap-6 items-center">
                {colors.map((c) => (
                  <div key={c} className="flex flex-col items-center gap-1.5">
                    <Spinner variant={v} color={c} size="sm" />
                    <span className="text-xs text-text-secondary">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Label</h3>
        <div className="flex flex-wrap gap-8">
          <Spinner label="Loading..." color="primary" />
          <Spinner label="Saving..." color="success" variant="ring" />
          <Spinner label="Uploading..." color="info" size="lg" variant="ring" />
          <Spinner label="Processing" color="warning" variant="dots" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">In Context</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-center h-32 rounded-lg border border-border border-dashed">
            <div className="flex flex-col items-center gap-3">
              <Spinner size="lg" color="primary" />
              <p className="text-sm text-text-secondary">Loading content...</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-surface">
            <Spinner size="sm" color="info" />
            <span className="text-sm text-text-secondary">Syncing data with server...</span>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-success/30 bg-success/5">
            <Spinner size="sm" color="success" />
            <span className="text-sm text-success">Saving changes...</span>
          </div>
        </div>
      </section>
    </div>
  ),
};
