import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Skeleton from "./index";

const meta: Meta<typeof Skeleton> = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    shape: { control: "select", options: ["rectangular","rounded","circle","text"] },
    color: { control: "select", options: ["default","primary","secondary","accent","success","error","warning","info"] },
    animation: { control: "select", options: ["pulse","wave","none"] },
  },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Playground: Story = {
  args: { width: "100%", height: 20, shape: "rectangular" },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Shapes</h3>
        <div className="flex items-center gap-4">
          <Skeleton shape="circle" width={48} height={48} />
          <Skeleton shape="rounded" width={48} height={48} />
          <Skeleton shape="rectangular" width={48} height={48} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Animations</h3>
        <div className="space-y-3">
          <div><p className="text-xs text-text-secondary mb-1">pulse (default)</p><Skeleton animation="pulse" height={16} /></div>
          <div><p className="text-xs text-text-secondary mb-1">wave</p><Skeleton animation="wave" height={16} /></div>
          <div><p className="text-xs text-text-secondary mb-1">none</p><Skeleton animation="none" height={16} /></div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-2">
          {(["default","primary","accent","success","error"] as const).map(c => <Skeleton key={c} color={c} height={14} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Card Loading Pattern</h3>
        <div className="p-4 border border-border [--_radius:var(--radius-card)] rounded-slot space-y-3">
          <Skeleton height={160} shape="rounded" />
          <div className="flex items-center gap-3">
            <Skeleton shape="circle" width={40} height={40} />
            <div className="flex-1 space-y-2"><Skeleton height={14} width="70%" /><Skeleton height={12} width="50%" /></div>
          </div>
          <Skeleton height={12} /><Skeleton height={12} width="90%" /><Skeleton height={12} width="60%" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">List Loading Pattern</h3>
        <div className="space-y-3">
          {[70,85,60].map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton shape="circle" width={32} height={32} />
              <div className="flex-1 space-y-1"><Skeleton height={14} width={`${w}%`} /><Skeleton height={12} width="40%" /></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
