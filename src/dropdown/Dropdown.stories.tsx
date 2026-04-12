import type { Meta, StoryObj } from "@storybook/react";
import {
  Edit,
  Trash2,
  Copy,
  Share,
  Archive,
  Download,
  Settings,
  Star,
  Flag,
} from "lucide-react";
import React from "react";
import Dropdown from "./index";
import Button from "../button";

const meta: Meta<typeof Dropdown> = {
  title: "Navigation/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    position: { control: "select", options: ["left", "right"] },
    disabled: { control: "boolean" },
    hover: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Dropdown>;

const baseItems = [
  { label: "Edit", value: "edit", icon: <Edit className="w-4 h-4" /> },
  { label: "Copy", value: "copy", icon: <Copy className="w-4 h-4" /> },
  { label: "Share", value: "share", icon: <Share className="w-4 h-4" /> },
  { label: "Archive", value: "archive", icon: <Archive className="w-4 h-4" /> },
  { label: "Download", value: "download", icon: <Download className="w-4 h-4" /> },
  { label: "Delete", value: "delete", icon: <Trash2 className="w-4 h-4" />, danger: true },
];

export const Playground: Story = {
  args: {
    items: baseItems,
    size: "md",
    color: "default",
    position: "left",
    disabled: false,
    hover: false,
  },
  render: (args) => (
    <div className="p-8">
      <Dropdown {...args}>
        <Button variant="outline">Actions</Button>
      </Dropdown>
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="flex flex-wrap gap-3">
          <Dropdown items={baseItems}>
            <Button>With icons</Button>
          </Dropdown>
          <Dropdown items={baseItems.map(({ icon: _icon, ...item }) => item)}>
            <Button variant="outline">Without icons</Button>
          </Dropdown>
          <Dropdown items={baseItems} color="primary">
            <Button variant="soft">Primary color</Button>
          </Dropdown>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <Dropdown key={s} items={baseItems} size={s}>
              <Button size={s} variant="outline">
                Size {s}
              </Button>
            </Dropdown>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-3">
          {(["default", "primary", "secondary", "accent"] as const).map((c) => (
            <Dropdown key={c} items={baseItems} color={c}>
              <Button variant="outline" size="sm">
                {c}
              </Button>
            </Dropdown>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="flex flex-wrap gap-3">
          <Dropdown
            items={[
              ...baseItems.slice(0, 2),
              { label: "Restricted", value: "restricted", disabled: true, icon: <Flag className="w-4 h-4" /> },
              baseItems[5]!,
            ]}
          >
            <Button variant="outline">With disabled item</Button>
          </Dropdown>

          <Dropdown items={baseItems} hover>
            <Button variant="outline">Hover trigger</Button>
          </Dropdown>

          <Dropdown items={baseItems} disabled>
            <Button variant="outline" disabled>
              Disabled
            </Button>
          </Dropdown>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Position
        </h3>
        <div className="flex justify-between">
          <Dropdown items={baseItems} position="left">
            <Button variant="outline">Left aligned</Button>
          </Dropdown>
          <Dropdown items={baseItems} position="right">
            <Button variant="outline">Right aligned</Button>
          </Dropdown>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Custom Render
        </h3>
        <Dropdown
          render={({ close }) => (
            <div className="p-3 space-y-2 min-w-48">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider px-1">
                Quick actions
              </p>
              {[
                { icon: <Star className="w-4 h-4" />, label: "Add to favorites" },
                { icon: <Settings className="w-4 h-4" />, label: "Settings" },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  type="button"
                  className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-text-primary hover:bg-surface transition-colors"
                  onClick={close}
                >
                  {icon}
                  {label}
                </button>
              ))}
              <div className="border-t border-border pt-2">
                <button
                  type="button"
                  className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm text-error hover:bg-error/10 transition-colors"
                  onClick={close}
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          )}
        >
          <Button variant="outline">Custom render</Button>
        </Dropdown>
      </section>
    </div>
  ),
};
