import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Rating from "./index";

const meta: Meta<typeof Rating> = {
  title: "Data Entry/Rating",
  component: Rating,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "solid", "soft"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    count: { control: "number" },
    allowHalf: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Rating>;

export const Playground: Story = {
  args: {
    defaultValue: 3,
    count: 5,
    size: "md",
    color: "warning",
    variant: "default",
  },
};

const ControlledDemo = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="space-y-2">
      <Rating value={value} onChange={setValue} color="warning" />
      <p className="text-xs text-text-secondary">
        {value === 0 ? "No rating selected" : `Rating: ${value} / 5`}
      </p>
    </div>
  );
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
        <div className="space-y-3">
          {(["default", "solid", "soft"] as const).map((v) => (
            <div key={v} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-16 shrink-0">{v}</span>
              <Rating variant={v} defaultValue={3} color="warning" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-3">
          {colors.map((c) => (
            <div key={c} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-16 shrink-0">{c}</span>
              <Rating color={c} defaultValue={3} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-6 shrink-0">{s}</span>
              <Rating size={s} defaultValue={3} color="warning" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Half Stars</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-20 shrink-0">allowHalf</span>
            <Rating allowHalf defaultValue={2.5} color="warning" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-20 shrink-0">3.5 stars</span>
            <Rating allowHalf defaultValue={3.5} color="warning" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-20 shrink-0">4.5 stars</span>
            <Rating allowHalf defaultValue={4.5} color="warning" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Star Count</h3>
        <div className="space-y-3">
          {[3, 5, 7, 10].map((count) => (
            <div key={count} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-16 shrink-0">{count} stars</span>
              <Rating count={count} defaultValue={Math.ceil(count / 2)} color="warning" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Controlled</h3>
        <ControlledDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-16 shrink-0">interactive</span>
            <Rating defaultValue={3} color="warning" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-16 shrink-0">readOnly</span>
            <Rating defaultValue={3.5} allowHalf readOnly color="warning" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary w-16 shrink-0">disabled</span>
            <Rating defaultValue={4} disabled color="warning" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Product Reviews</h3>
        <div className="space-y-4 rounded-lg border border-border p-4">
          {[
            { label: "Overall Experience", value: 4.5 },
            { label: "Value for Money", value: 4 },
            { label: "Ease of Use", value: 5 },
            { label: "Customer Support", value: 3.5 },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">{label}</span>
              <Rating defaultValue={value} allowHalf readOnly size="sm" color="warning" />
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
