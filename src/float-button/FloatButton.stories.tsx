import type { Meta, StoryObj } from "@storybook/react";
import {
  Plus,
  ArrowUp,
  MessageCircle,
  Phone,
  Video,
  Settings,
  Edit,
  Share2,
  Mail,
  Download,
} from "lucide-react";
import React from "react";
import FloatButton from "./index";
import { FloatButtonGroup } from "./index";

const meta: Meta<typeof FloatButton> = {
  title: "General/FloatButton",
  component: FloatButton,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    shape: { control: "select", options: ["circle", "square"] },
    disabled: { control: "boolean" },
    badge: { control: "text" },
    tooltip: { control: "text" },
    label: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof FloatButton>;

// Render float buttons inline (non-fixed) for story display
const inlineStyle: React.CSSProperties = { position: "relative" };

const colors = [
  "primary",
  "secondary",
  "accent",
  "success",
  "error",
  "warning",
  "info",
] as const;

export const Playground: Story = {
  args: { color: "primary", size: "md", shape: "circle", icon: <Plus /> },
  render: (args) => (
    <div className="p-8">
      <FloatButton {...args} style={inlineStyle} />
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-4">
          {colors.map((c) => (
            <div key={c} className="flex flex-col items-center gap-2">
              <FloatButton color={c} icon={<MessageCircle />} style={inlineStyle} />
              <span className="text-xs text-text-secondary">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex items-end gap-4">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <FloatButton size={s} icon={<Plus />} color="primary" style={inlineStyle} />
              <span className="text-xs text-text-secondary">{s}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Shapes
        </h3>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-2">
            <FloatButton shape="circle" icon={<Plus />} color="primary" style={inlineStyle} />
            <span className="text-xs text-text-secondary">circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FloatButton shape="square" icon={<Plus />} color="primary" style={inlineStyle} />
            <span className="text-xs text-text-secondary">square</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col items-center gap-2">
            <FloatButton icon={<Plus />} color="primary" style={inlineStyle} />
            <span className="text-xs text-text-secondary">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FloatButton icon={<Plus />} color="primary" disabled style={inlineStyle} />
            <span className="text-xs text-text-secondary">disabled</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FloatButton
              icon={<Download />}
              color="primary"
              href="#"
              tooltip="Download file"
              style={inlineStyle}
            />
            <span className="text-xs text-text-secondary">as link</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Badge
        </h3>
        <div className="flex gap-4 items-center">
          <FloatButton icon={<MessageCircle />} badge={3} color="primary" style={inlineStyle} />
          <FloatButton icon={<Phone />} badge={12} color="success" style={inlineStyle} />
          <FloatButton icon={<Video />} badge="99+" color="accent" style={inlineStyle} />
          <FloatButton icon={<Mail />} badge={0} color="secondary" style={inlineStyle} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Tooltip
        </h3>
        <div className="flex gap-4 items-center">
          <FloatButton icon={<ArrowUp />} tooltip="Back to top" color="primary" style={inlineStyle} />
          <FloatButton icon={<MessageCircle />} tooltip="Open chat" color="accent" style={inlineStyle} />
          <FloatButton icon={<Settings />} tooltip="Settings" color="secondary" style={inlineStyle} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Speed Dial Group (click trigger)
        </h3>
        <div className="p-6 flex items-end justify-center min-h-48 bg-surface rounded-lg border border-border">
          <FloatButtonGroup color="primary" placement="top" trigger="click" icon={<Plus />}>
            <FloatButton icon={<Edit />} color="accent" tooltip="Edit" style={inlineStyle} />
            <FloatButton icon={<Share2 />} color="success" tooltip="Share" style={inlineStyle} />
            <FloatButton icon={<Download />} color="info" tooltip="Download" style={inlineStyle} />
          </FloatButtonGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Speed Dial Group (hover trigger)
        </h3>
        <div className="p-6 flex items-center justify-center min-h-36 bg-surface rounded-lg border border-border">
          <FloatButtonGroup color="secondary" placement="top" trigger="hover">
            <FloatButton icon={<Edit />} color="accent" tooltip="Edit" style={inlineStyle} />
            <FloatButton icon={<Mail />} color="primary" tooltip="Message" style={inlineStyle} />
          </FloatButtonGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Group Placements
        </h3>
        <div className="flex gap-6 flex-wrap">
          {(["top", "right", "bottom", "left"] as const).map((placement) => (
            <div key={placement} className="flex flex-col items-center gap-2">
              <div className="p-4 flex items-center justify-center w-24 h-24 bg-surface rounded-lg border border-border">
                <FloatButtonGroup color="primary" placement={placement} trigger="click" size="sm">
                  <FloatButton icon={<Edit />} color="accent" size="sm" style={inlineStyle} />
                  <FloatButton icon={<Share2 />} color="success" size="sm" style={inlineStyle} />
                </FloatButtonGroup>
              </div>
              <span className="text-xs text-text-secondary">{placement}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
