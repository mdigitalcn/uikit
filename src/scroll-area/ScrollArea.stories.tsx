import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ScrollArea from "./index";

const meta: Meta<typeof ScrollArea> = {
  title: "Layout/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "select", options: ["vertical", "horizontal", "both"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    scrollbarVisibility: { control: "select", options: ["auto", "always", "hover"] },
  },
};
export default meta;
type Story = StoryObj<typeof ScrollArea>;

const loremRows = Array.from({ length: 30 }, (_, i) => `Row ${i + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing elit.`);
const users = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  role: ["Admin", "Editor", "Viewer"][i % 3],
  status: i % 4 === 3 ? "Inactive" : "Active",
}));

export const Playground: Story = {
  render: () => (
    <ScrollArea className="h-48 rounded-lg border border-border p-4">
      {loremRows.map((row, i) => (
        <p key={i} className="py-1 text-sm text-text-secondary border-b border-border/40 last:border-0">
          {row}
        </p>
      ))}
    </ScrollArea>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Vertical Scroll</h3>
        <ScrollArea maxHeight={200} className="rounded-lg border border-border p-4">
          {users.map(({ id, name, role, status }) => (
            <div key={id} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-semibold shrink-0">
                  {id}
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">{name}</p>
                  <p className="text-xs text-text-secondary">{role}</p>
                </div>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  status === "Active"
                    ? "bg-success/10 text-success"
                    : "bg-border text-text-secondary"
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </ScrollArea>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Horizontal Scroll</h3>
        <ScrollArea direction="horizontal" className="rounded-lg border border-border p-4">
          <div className="flex gap-3 min-w-max">
            {Array.from({ length: 14 }, (_, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center w-28 h-24 bg-surface rounded-lg border border-border shrink-0"
              >
                <div className="text-base font-bold text-text-primary">{i + 1}</div>
                <div className="text-xs text-text-secondary mt-1">Card {i + 1}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Both Directions</h3>
        <ScrollArea direction="both" maxHeight={200} className="rounded-lg border border-border p-4">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-5 gap-4 pb-2 border-b border-border mb-2 text-xs font-semibold text-text-secondary">
              <span>#</span>
              <span>Name</span>
              <span>Role</span>
              <span>Status</span>
              <span>Revenue</span>
            </div>
            {users.map(({ id, name, role, status }) => (
              <div
                key={id}
                className="grid grid-cols-5 gap-4 py-2 border-b border-border/40 last:border-0 text-sm text-text-secondary"
              >
                <span>{id}</span>
                <span className="text-text-primary font-medium">{name}</span>
                <span>{role}</span>
                <span>{status}</span>
                <span className="text-success">${(id * 127.5).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Scrollbar Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s}>
              <p className="text-xs text-text-secondary mb-2">size: {s}</p>
              <ScrollArea
                direction="vertical"
                size={s}
                maxHeight={80}
                scrollbarVisibility="always"
                className="rounded-lg border border-border p-3"
              >
                {loremRows.slice(0, 8).map((row, i) => (
                  <p key={i} className="text-xs text-text-secondary py-0.5">
                    {row}
                  </p>
                ))}
              </ScrollArea>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Scrollbar Visibility</h3>
        <div className="space-y-4">
          {(["auto", "always", "hover"] as const).map((vis) => (
            <div key={vis}>
              <p className="text-xs text-text-secondary mb-2">scrollbarVisibility: {vis}</p>
              <ScrollArea
                direction="vertical"
                scrollbarVisibility={vis}
                maxHeight={80}
                className="rounded-lg border border-border p-3"
              >
                {loremRows.slice(0, 8).map((row, i) => (
                  <p key={i} className="text-xs text-text-secondary py-0.5">
                    {row}
                  </p>
                ))}
              </ScrollArea>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Code Block</h3>
        <ScrollArea direction="both" maxHeight={160} className="rounded-lg border border-border bg-[#1e1e2e]">
          <pre className="p-4 text-sm font-mono text-[#cdd6f4] min-w-max leading-relaxed">
{`import { useState, useCallback } from "react";

interface CounterProps {
  initialCount?: number;
  step?: number;
  min?: number;
  max?: number;
}

export function Counter({
  initialCount = 0,
  step = 1,
  min = -Infinity,
  max = Infinity,
}: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(
    () => setCount((c) => Math.min(c + step, max)),
    [step, max],
  );

  const decrement = useCallback(
    () => setCount((c) => Math.max(c - step, min)),
    [step, min],
  );

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}`}
          </pre>
        </ScrollArea>
      </section>
    </div>
  ),
};
