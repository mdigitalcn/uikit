import type { Meta, StoryObj } from "@storybook/react";
import { AlertCircle, Check, Globe, Lock, Star, Zap } from "lucide-react";
import React from "react";

import Tag from "./index";

const meta: Meta<typeof Tag> = {
  title: "Data Display/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "solid", "outline", "soft"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    closable: { control: "boolean" },
    disableKeyboardRemoval: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
  args: {
    children: "Tag Label",
    variant: "soft",
    color: "primary",
    size: "sm",
    closable: false,
  },
};

const colors = ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants x Colors</h3>
        {(["default", "solid", "outline", "soft"] as const).map((v) => (
          <div key={v} className="mb-4">
            <p className="text-xs text-text-secondary mb-2 capitalize">{v}</p>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <Tag key={c} color={c} variant={v}>
                  {c}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex flex-wrap gap-2 items-center">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <Tag key={s} size={s} color="primary" variant="solid">
              {s}
            </Tag>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <div className="flex flex-wrap gap-2">
          <Tag icon={<Star />} color="warning" variant="soft">Featured</Tag>
          <Tag icon={<Check />} color="success" variant="soft">Verified</Tag>
          <Tag icon={<Zap />} color="accent" variant="solid">Pro</Tag>
          <Tag icon={<AlertCircle />} color="error" variant="outline">Warning</Tag>
          <Tag icon={<Lock />} color="info" variant="soft">Private</Tag>
          <Tag icon={<Globe />} color="secondary" variant="soft">Public</Tag>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Closable</h3>
        <div className="flex flex-wrap gap-2">
          {colors.slice(1).map((c) => (
            <Tag key={c} color={c} variant="soft" closable onClose={() => {}}>
              {c}
            </Tag>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Clickable</h3>
        <div className="flex flex-wrap gap-2">
          <Tag color="primary" variant="outline" onClick={() => {}}>React</Tag>
          <Tag color="secondary" variant="outline" onClick={() => {}}>TypeScript</Tag>
          <Tag color="accent" variant="outline" onClick={() => {}}>Tailwind CSS</Tag>
          <Tag color="info" variant="outline" onClick={() => {}}>Vite</Tag>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Tag Cloud Example</h3>
        <div className="flex flex-wrap gap-2 p-4 bg-surface rounded-lg border border-border">
          {[
            { label: "Design System", color: "primary" as const },
            { label: "Components", color: "secondary" as const },
            { label: "Accessibility", color: "success" as const },
            { label: "Dark Mode", color: "accent" as const },
            { label: "TypeScript", color: "info" as const },
            { label: "React 19", color: "warning" as const },
            { label: "Deprecated", color: "error" as const },
          ].map(({ label, color }) => (
            <Tag key={label} color={color} variant="soft" closable onClose={() => {}}>
              {label}
            </Tag>
          ))}
        </div>
      </section>
    </div>
  ),
};
