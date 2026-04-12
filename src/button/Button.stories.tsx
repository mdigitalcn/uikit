import type { Meta, StoryObj } from "@storybook/react";
import {
  ArrowRight,
  Bell,
  Check,
  Download,
  Heart,
  Mail,
  Plus,
  Search,
  Settings,
  Trash2,
} from "lucide-react";
import React from "react";

import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "General/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "soft", "dashed", "link", "ghost"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    shape: {
      control: "select",
      options: ["rounded", "pill", "square"],
    },
    loading: { control: "boolean" },
    loadingText: { control: "text" },
    fullWidth: { control: "boolean" },
    isIconOnly: { control: "boolean" },
    pressed: { control: "boolean" },
    ripple: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: "Click me",
    variant: "solid",
    color: "primary",
    size: "md",
    shape: "rounded",
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="dashed">Dashed</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="accent">Accent</Button>
          <Button color="success">Success</Button>
          <Button color="error">Error</Button>
          <Button color="warning">Warning</Button>
          <Button color="info">Info</Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Shapes</h3>
        <div className="flex flex-wrap gap-3">
          <Button shape="rounded">Rounded</Button>
          <Button shape="pill">Pill</Button>
          <Button shape="square">Square</Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Button startSection={<Mail size={16} />}>Send Email</Button>
          <Button endSection={<ArrowRight size={16} />}>Next Step</Button>
          <Button startSection={<Download size={16} />} endSection={<Check size={16} />}>Download</Button>
          <Button variant="outline" startSection={<Plus size={16} />}>Add Item</Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Icon Only</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button isIconOnly size="xs" aria-label="Search"><Search size={12} /></Button>
          <Button isIconOnly size="sm" aria-label="Notifications"><Bell size={14} /></Button>
          <Button isIconOnly size="md" aria-label="Settings"><Settings size={16} /></Button>
          <Button isIconOnly size="lg" aria-label="Delete" color="error"><Trash2 size={20} /></Button>
          <Button isIconOnly shape="pill" aria-label="Like" color="accent"><Heart size={16} /></Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button loading>Loading</Button>
          <Button loading loadingText="Saving...">Save</Button>
          <Button disabled>Disabled</Button>
          <Button pressed>Pressed</Button>
          <Button ripple>Ripple Effect</Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Full Width</h3>
        <div className="max-w-sm space-y-2">
          <Button fullWidth>Full Width Button</Button>
          <Button fullWidth variant="outline" color="secondary">Full Width Outline</Button>
        </div>
      </section>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      {(["solid", "outline", "soft", "dashed", "ghost", "link"] as const).map((variant) => (
        <div key={variant} className="flex flex-wrap gap-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <Button key={color} variant={variant} color={color}>
              {color}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button loading>Default Loading</Button>
      <Button loading loadingText="Submitting...">Submit</Button>
      <Button loading variant="outline">Outline Loading</Button>
      <Button loading variant="soft" color="success">Soft Loading</Button>
      <Button loading size="sm">Small Loading</Button>
      <Button loading size="lg">Large Loading</Button>
    </div>
  ),
};
