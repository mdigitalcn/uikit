import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import FetchingOverlay from "./index";
import Button from "../button";

const meta: Meta<typeof FetchingOverlay> = {
  title: "Feedback/FetchingOverlay",
  component: FetchingOverlay,
  tags: ["autodocs"],
  argTypes: {
    isFetching: { control: "boolean" },
    fullscreen: { control: "boolean" },
    backdropOpacity: { control: "number" },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    variant: { control: "select", options: ["ring", "dots", "pulse"] },
    label: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof FetchingOverlay>;

const SampleContent = () => (
  <div className="p-5 space-y-3">
    <div className="h-4 w-3/4 bg-surface rounded" />
    <div className="h-3 w-full bg-surface rounded" />
    <div className="h-3 w-5/6 bg-surface rounded" />
    <div className="h-3 w-2/3 bg-surface rounded" />
    <div className="mt-4 h-8 w-28 bg-surface rounded" />
  </div>
);

const ToggleDemo = (props: Partial<React.ComponentProps<typeof FetchingOverlay>>) => {
  const [isFetching, setIsFetching] = useState(true);
  return (
    <div className="space-y-2">
      <div className="relative border border-border rounded-lg overflow-hidden min-h-32">
        <FetchingOverlay isFetching={isFetching} fullscreen={false} {...props} />
        <SampleContent />
      </div>
      <Button size="sm" variant="outline" onClick={() => setIsFetching((v) => !v)}>
        Toggle ({isFetching ? "loading" : "idle"})
      </Button>
    </div>
  );
};

export const Playground: Story = {
  args: { isFetching: true, fullscreen: false, backdropOpacity: 30, size: "lg", variant: "ring" },
  render: (args) => (
    <div className="relative border border-border rounded-lg overflow-hidden min-h-40">
      <FetchingOverlay {...args} />
      <SampleContent />
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Container Loading (toggle)
        </h3>
        <ToggleDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Spinner Variants
        </h3>
        <div className="flex gap-6 flex-wrap">
          {(["ring", "dots", "pulse"] as const).map((v) => (
            <div key={v} className="space-y-2">
              <p className="text-xs text-text-secondary">{v}</p>
              <div className="relative border border-border rounded-lg overflow-hidden w-36 h-28">
                <FetchingOverlay isFetching fullscreen={false} variant={v} />
                <SampleContent />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex gap-4 flex-wrap">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s} className="space-y-2">
              <p className="text-xs text-text-secondary">{s}</p>
              <div className="relative border border-border rounded-lg overflow-hidden w-28 h-24">
                <FetchingOverlay isFetching fullscreen={false} size={s} />
                <SampleContent />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex gap-4 flex-wrap">
          {(["primary", "secondary", "accent", "success", "warning", "info"] as const).map((c) => (
            <div key={c} className="space-y-2">
              <p className="text-xs text-text-secondary">{c}</p>
              <div className="relative border border-border rounded-lg overflow-hidden w-28 h-24">
                <FetchingOverlay isFetching fullscreen={false} color={c} />
                <SampleContent />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Backdrop Opacity
        </h3>
        <div className="flex gap-6 flex-wrap">
          {[10, 30, 60, 90].map((opacity) => (
            <div key={opacity} className="space-y-2">
              <p className="text-xs text-text-secondary">opacity {opacity}%</p>
              <div className="relative border border-border rounded-lg overflow-hidden w-36 h-28">
                <FetchingOverlay isFetching fullscreen={false} backdropOpacity={opacity} />
                <SampleContent />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="flex gap-6 flex-wrap">
          <div className="space-y-2">
            <p className="text-xs text-text-secondary">Inactive (isFetching=false)</p>
            <div className="relative border border-border rounded-lg overflow-hidden w-48">
              <FetchingOverlay isFetching={false} fullscreen={false} />
              <SampleContent />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-text-secondary">With label</p>
            <div className="relative border border-border rounded-lg overflow-hidden w-48 h-32">
              <FetchingOverlay isFetching fullscreen={false} label="Loading data..." />
              <SampleContent />
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};
