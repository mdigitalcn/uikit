import type { Meta, StoryObj } from "@storybook/react";
import { HelpCircle, Info, Settings, User } from "lucide-react";
import React from "react";
import Tooltip from "./index";
import Badge from "../badge";
import Button from "../button";

const meta: Meta<typeof Tooltip> = {
  title: "Data Display/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["solid", "soft"] },
    color: { control: "select", options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    align: { control: "select", options: ["start", "center", "end"] },
    showArrow: { control: "boolean" },
    disabled: { control: "boolean" },
    delayDuration: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {
  args: {
    content: "This is a tooltip",
    side: "top",
    align: "center",
    variant: "solid",
    color: "default",
    size: "sm",
    showArrow: false,
    disabled: false,
    delayDuration: 300,
    children: <Button variant="outline">Hover me</Button>,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="flex flex-wrap gap-6">
          {(["solid", "soft"] as const).map((variant) => (
            <div key={variant} className="flex flex-col items-center gap-2">
              <Tooltip content={`${variant} tooltip`} variant={variant} color="default">
                <Button variant="outline" size="sm">{variant.charAt(0).toUpperCase() + variant.slice(1)}</Button>
              </Tooltip>
              <span className="text-xs text-text-secondary">{variant}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="flex flex-wrap gap-4">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <Tooltip key={color} content={`${color} tooltip`} color={color} variant="solid">
              <Badge color={color} variant="soft" className="cursor-default">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Badge>
            </Tooltip>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-6">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Tooltip content={`Size ${size.toUpperCase()} tooltip`} size={size} color="primary">
                <Button variant="outline" size="sm">{size.toUpperCase()}</Button>
              </Tooltip>
              <span className="text-xs text-text-secondary">{size}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Placement</h3>
        <div className="flex flex-wrap gap-4">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Tooltip key={side} content={`Appears on the ${side}`} side={side} color="primary" showArrow>
              <Button variant="outline" size="sm">{side.charAt(0).toUpperCase() + side.slice(1)}</Button>
            </Tooltip>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Arrow</h3>
        <div className="flex flex-wrap gap-4">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Tooltip key={side} content="Arrow tooltip" side={side} color="primary" showArrow>
              <Button variant="outline" size="sm">{side}</Button>
            </Tooltip>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Rich Content</h3>
        <div className="flex flex-wrap gap-4">
          <Tooltip
            content={
              <div className="space-y-1 max-w-[200px]">
                <p className="font-semibold">Feature details</p>
                <p className="text-xs opacity-80">This feature requires an active subscription. Upgrade your plan to unlock full access.</p>
              </div>
            }
            color="primary"
            variant="solid"
            side="right"
          >
            <Button variant="ghost" size="sm">
              <Info size={16} />
              Learn more
            </Button>
          </Tooltip>

          <Tooltip
            content={
              <div className="space-y-1">
                <p className="font-semibold text-sm">Keyboard shortcut</p>
                <kbd className="text-xs bg-white/20 px-1.5 py-0.5 rounded font-mono">Ctrl + K</kbd>
              </div>
            }
            color="default"
            variant="solid"
          >
            <Button variant="outline" size="sm">
              <Settings size={14} />
              Settings
            </Button>
          </Tooltip>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-2">
            <Tooltip content="Enabled tooltip" color="primary">
              <Button variant="outline" size="sm">Enabled</Button>
            </Tooltip>
            <span className="text-xs text-text-secondary">Enabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tooltip content="This tooltip is disabled" color="primary" disabled>
              <Button variant="outline" size="sm">Disabled</Button>
            </Tooltip>
            <span className="text-xs text-text-secondary">Disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tooltip content="Appears instantly" color="primary" delayDuration={0}>
              <Button variant="outline" size="sm">No delay</Button>
            </Tooltip>
            <span className="text-xs text-text-secondary">No delay</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Common Use Cases</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Tooltip content="More information about this field" color="default" side="right">
            <HelpCircle size={16} className="text-text-secondary cursor-help" />
          </Tooltip>

          <Tooltip content="Profile settings" color="primary">
            <button className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-surface/80 transition-colors">
              <User size={14} />
            </button>
          </Tooltip>

          <Tooltip content="This action cannot be undone" color="error" variant="soft" showArrow>
            <Button color="error" variant="soft" size="sm">Delete</Button>
          </Tooltip>
        </div>
      </section>
    </div>
  ),
};

export const WithArrow: Story = {
  args: {
    content: "Tooltip with arrow",
    showArrow: true,
    color: "primary",
    side: "top",
    children: <Button variant="outline">Hover me</Button>,
  },
};

export const SoftVariant: Story = {
  args: {
    content: "Soft variant tooltip",
    variant: "soft",
    color: "primary",
    showArrow: true,
    children: <Button variant="outline">Hover me</Button>,
  },
};

export const RichContent: Story = {
  render: () => (
    <div className="p-10 flex items-center justify-center">
      <Tooltip
        content={
          <div className="space-y-1 max-w-[220px]">
            <p className="font-semibold">Pro feature</p>
            <p className="text-xs opacity-80">Upgrade to Pro to unlock this feature and get access to advanced analytics.</p>
          </div>
        }
        color="primary"
        side="right"
        showArrow
        delayDuration={100}
      >
        <Button variant="outline" size="sm">
          <Info size={14} />
          Hover for details
        </Button>
      </Tooltip>
    </div>
  ),
};
