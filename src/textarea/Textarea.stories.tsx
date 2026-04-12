import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Textarea from "./index";

const meta: Meta<typeof Textarea> = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "filled"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    resize: {
      control: "select",
      options: ["none", "vertical", "horizontal", "both"],
    },
    messagePosition: {
      control: "select",
      options: ["top", "bottom"],
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    warning: { control: "text" },
    info: { control: "text" },
    success: { control: "text" },
    showCount: { control: "boolean" },
    autoResize: { control: "boolean" },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    rows: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {
  args: {
    label: "Description",
    placeholder: "Write something...",
    variant: "outline",
    size: "md",
    color: "primary",
    resize: "vertical",
    rows: 4,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <Textarea variant="outline" label="Outline" placeholder="Outline variant" rows={3} />
          <Textarea variant="filled" label="Filled" placeholder="Filled variant" rows={3} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <Textarea size="xs" placeholder="Extra small" rows={2} />
          <Textarea size="sm" placeholder="Small" rows={2} />
          <Textarea size="md" placeholder="Medium" rows={2} />
          <Textarea size="lg" placeholder="Large" rows={2} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Resize Behavior</h3>
        <div className="space-y-3">
          <Textarea resize="none" label="No resize" placeholder="Cannot be resized" rows={3} />
          <Textarea resize="vertical" label="Vertical resize (default)" placeholder="Drag bottom edge" rows={3} />
          <Textarea resize="horizontal" label="Horizontal resize" placeholder="Drag right edge" rows={3} />
          <Textarea resize="both" label="Both directions" placeholder="Drag any corner" rows={3} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <Textarea label="Error" placeholder="Enter content" error="This field is required" rows={3} />
          <Textarea label="Warning" placeholder="Enter content" warning="Content may be too long" rows={3} />
          <Textarea label="Success" placeholder="Enter content" success="Looks great!" rows={3} defaultValue="This is my bio" />
          <Textarea label="Info" placeholder="Enter content" info="Markdown is supported" rows={3} />
          <Textarea label="Helper text" placeholder="Enter content" helperText="Maximum 500 characters" rows={3} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Character Count</h3>
        <div className="space-y-3">
          <Textarea label="Bio" placeholder="Tell us about yourself" showCount maxLength={200} rows={4} />
          <Textarea label="Tweet" placeholder="What's happening?" showCount maxLength={280} rows={3} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Auto Resize</h3>
        <Textarea label="Auto-expanding" placeholder="Start typing and the textarea grows..." autoResize resize="none" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <Textarea label="Disabled" placeholder="Cannot type here" disabled rows={3} />
          <Textarea label="Read only" readOnly rows={3} defaultValue="This content is read only and cannot be modified." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success"] as const).map((color) => (
            <Textarea key={color} color={color} label={color} placeholder={`${color} focus ring`} rows={2} />
          ))}
        </div>
      </section>
    </div>
  ),
};

export const WithCharacterCount: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Textarea
        label="Short bio"
        placeholder="Write a short bio..."
        showCount
        maxLength={150}
        rows={4}
        helperText="Shown on your public profile"
      />
      <Textarea
        label="Post content"
        placeholder="What's on your mind?"
        showCount
        maxLength={500}
        rows={6}
      />
    </div>
  ),
};
