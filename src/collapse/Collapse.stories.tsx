import type { Meta, StoryObj } from "@storybook/react";
import { ChevronDown, Filter, Info } from "lucide-react";
import React, { useState } from "react";
import Collapse from "./index";

const meta: Meta<typeof Collapse> = {
  title: "Layout/Collapse",
  component: Collapse,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "solid", "soft"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    defaultOpen: { control: "boolean" },
    disabled: { control: "boolean" },
    destroyOnClose: { control: "boolean" },
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Playground: Story = {
  args: {
    title: "Collapse Panel",
    variant: "default",
    color: "default",
    size: "md",
    defaultOpen: false,
    disabled: false,
    destroyOnClose: false,
  },
  render: (args) => (
    <div className="max-w-xl">
      <Collapse {...args}>
        <p className="text-sm text-text-secondary">
          This is the collapsible content area. Toggle the panel header to show or hide this content.
          Use it to progressively disclose information without cluttering the UI.
        </p>
      </Collapse>
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="space-y-3">
          {(["default", "solid", "soft"] as const).map((variant) => (
            <Collapse key={variant} title={`variant="${variant}"`} variant={variant} color="primary" defaultOpen={variant === "default"}>
              <p className="text-sm text-text-secondary">
                Content for the {variant} variant. The header and border styling differ between variants.
              </p>
            </Collapse>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <Collapse key={color} title={`color="${color}"`} color={color} variant="soft" defaultOpen={false}>
              <p className="text-sm text-text-secondary">Content using the {color} color slot.</p>
            </Collapse>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <Collapse key={size} title={`size="${size}"`} size={size} defaultOpen={false}>
              <p className="text-sm text-text-secondary">This panel uses size="{size}".</p>
            </Collapse>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="space-y-3">
          <Collapse title="Default open" defaultOpen>
            <p className="text-sm text-text-secondary">This panel starts open via defaultOpen=true.</p>
          </Collapse>
          <Collapse title="Disabled panel" disabled>
            <p className="text-sm text-text-secondary">You cannot toggle this panel.</p>
          </Collapse>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Controlled</h3>
        <ControlledExample />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Real-world: Advanced Filters</h3>
        <div className="space-y-2">
          <Collapse
            title={
              <span className="flex items-center gap-2">
                <Filter size={15} />
                Date Range
              </span>
            }
            variant="default"
            color="primary"
            defaultOpen
          >
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-text-secondary block mb-1">From</label>
                <div className="h-8 border border-border rounded px-3 flex items-center text-sm bg-background">2026-01-01</div>
              </div>
              <div>
                <label className="text-xs text-text-secondary block mb-1">To</label>
                <div className="h-8 border border-border rounded px-3 flex items-center text-sm bg-background">2026-04-12</div>
              </div>
            </div>
          </Collapse>
          <Collapse
            title={
              <span className="flex items-center gap-2">
                <Info size={15} />
                Status Filter
              </span>
            }
            variant="default"
            color="primary"
          >
            <div className="flex flex-wrap gap-2">
              {["Active", "Pending", "Archived", "Draft"].map((s) => (
                <span key={s} className="px-3 py-1 text-xs bg-surface border border-border rounded-full cursor-pointer hover:border-primary">
                  {s}
                </span>
              ))}
            </div>
          </Collapse>
        </div>
      </section>

    </div>
  ),
};

function ControlledExample() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-sm text-text-secondary">Panel is: <strong>{open ? "open" : "closed"}</strong></span>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-xs px-3 py-1 bg-primary text-white rounded"
        >
          Toggle externally
        </button>
      </div>
      <Collapse
        title="Controlled collapse"
        open={open}
        onChange={setOpen}
        color="primary"
        variant="soft"
      >
        <p className="text-sm text-text-secondary">
          This collapse is controlled. The open state is managed externally via useState.
        </p>
      </Collapse>
    </div>
  );
}
