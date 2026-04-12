import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ColorPicker from "./index";

const PALETTE_SWATCHES = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#ffffff",
  "#000000",
];

const meta: Meta<typeof ColorPicker> = {
  title: "Form/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  argTypes: {
    format: { control: "select", options: ["hex", "rgb", "hsl"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    showAlpha: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    required: { control: "boolean" },
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    warning: { control: "text" },
    success: { control: "text" },
    info: { control: "text" },
    messagePosition: { control: "select", options: ["top", "bottom"] },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Playground: Story = {
  args: {
    label: "Pick a color",
    defaultValue: "#3b82f6",
    format: "hex",
    size: "md",
    color: "primary",
    showAlpha: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Color Formats</h3>
        <div className="space-y-4">
          <ColorPicker
            label="HEX format"
            defaultValue="#3b82f6"
            format="hex"
          />
          <ColorPicker
            label="RGB format"
            defaultValue="#22c55e"
            format="rgb"
          />
          <ColorPicker
            label="HSL format"
            defaultValue="#ef4444"
            format="hsl"
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Alpha Channel</h3>
        <ColorPicker
          label="With alpha"
          defaultValue="#3b82f6"
          format="hex"
          showAlpha
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <ColorPicker
              key={size}
              label={`Size: ${size}`}
              defaultValue="#8b5cf6"
              size={size}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Swatches</h3>
        <ColorPicker
          label="Color with swatches"
          defaultValue="#3b82f6"
          swatches={PALETTE_SWATCHES}
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-4">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <ColorPicker
              key={color}
              label={color}
              defaultValue="#3b82f6"
              color={color}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-4">
          <ColorPicker
            label="Error state"
            error="Please select a valid color"
          />
          <ColorPicker
            label="Warning state"
            defaultValue="#eab308"
            warning="Low contrast ratio for text"
          />
          <ColorPicker
            label="Success state"
            defaultValue="#22c55e"
            success="Color meets accessibility standards"
          />
          <ColorPicker
            label="Info state"
            info="Use hex format for best compatibility"
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-4">
          <ColorPicker
            label="Disabled"
            defaultValue="#3b82f6"
            disabled
          />
          <ColorPicker
            label="Loading"
            loading
          />
        </div>
      </section>
    </div>
  ),
};
