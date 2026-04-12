import type { Meta, StoryObj } from "@storybook/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bookmark,
  Bold,
  Heart,
  Italic,
  Moon,
  Star,
  Underline,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useState } from "react";
import Toggle from "./index";

const meta: Meta<typeof Toggle> = {
  title: "Data Entry/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "solid", "soft"] },
    color: { control: "select", options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    disabled: { control: "boolean" },
    pressed: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Playground: Story = {
  args: {
    children: "Toggle",
    variant: "default",
    color: "primary",
    size: "md",
    disabled: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="flex flex-wrap gap-4">
          {(["default", "solid", "soft"] as const).map((variant) => (
            <div key={variant} className="flex flex-col items-center gap-2">
              <Toggle variant={variant} color="primary" defaultPressed={false}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Toggle>
              <Toggle variant={variant} color="primary" defaultPressed>
                Active
              </Toggle>
              <span className="text-xs text-text-secondary">{variant}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="flex flex-wrap gap-3">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <Toggle key={color} color={color} defaultPressed>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Toggle>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Toggle size={size} color="primary" defaultPressed>
                {size.toUpperCase()}
              </Toggle>
              <span className="text-xs text-text-secondary">{size}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Icon Only</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Toggle icon={<Bold size={14} />} aria-label="Bold" color="primary" />
          <Toggle icon={<Italic size={14} />} aria-label="Italic" color="primary" defaultPressed />
          <Toggle icon={<Underline size={14} />} aria-label="Underline" color="primary" />
          <Toggle icon={<AlignLeft size={14} />} aria-label="Align left" color="primary" />
          <Toggle icon={<AlignCenter size={14} />} aria-label="Align center" color="primary" defaultPressed />
          <Toggle icon={<AlignRight size={14} />} aria-label="Align right" color="primary" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Icon with Label</h3>
        <div className="flex flex-wrap gap-3">
          <Toggle icon={<Star size={14} />} color="accent" defaultPressed>
            Favorite
          </Toggle>
          <Toggle icon={<Heart size={14} />} color="error">
            Like
          </Toggle>
          <Toggle icon={<Bookmark size={14} />} color="primary">
            Save
          </Toggle>
          <Toggle icon={<Moon size={14} />} color="secondary">
            Dark mode
          </Toggle>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-2">
            <Toggle color="primary">Inactive</Toggle>
            <span className="text-xs text-text-secondary">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Toggle color="primary" defaultPressed>Active</Toggle>
            <span className="text-xs text-text-secondary">Pressed</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Toggle color="primary" disabled>Disabled</Toggle>
            <span className="text-xs text-text-secondary">Disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Toggle color="primary" disabled defaultPressed>Disabled Active</Toggle>
            <span className="text-xs text-text-secondary">Disabled + Pressed</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Controlled Example</h3>
        <ControlledExample />
      </section>
    </div>
  ),
};

function ControlledExample() {
  const [muted, setMuted] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <Toggle
        icon={muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        pressed={muted}
        onChange={setMuted}
        color={muted ? "error" : "primary"}
        variant="soft"
      >
        {muted ? "Muted" : "Sound On"}
      </Toggle>
      <span className="text-sm text-text-secondary">
        Status: {muted ? "muted" : "active"}
      </span>
    </div>
  );
}

export const IconOnly: Story = {
  args: {
    icon: <Bold size={14} />,
    "aria-label": "Bold",
    color: "primary",
    variant: "default",
    size: "md",
  },
};

export const WithLabel: Story = {
  args: {
    children: "Bookmark",
    icon: <Bookmark size={14} />,
    color: "primary",
    variant: "soft",
    defaultPressed: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Toggle",
    disabled: true,
    color: "primary",
  },
};

export const Controlled: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <div className="flex items-center gap-3 p-4">
        <Toggle pressed={pressed} onChange={setPressed} color="primary" variant="solid">
          {pressed ? "On" : "Off"}
        </Toggle>
        <span className="text-sm text-text-secondary">State: {pressed ? "pressed" : "unpressed"}</span>
      </div>
    );
  },
};
