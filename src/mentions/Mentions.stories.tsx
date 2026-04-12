import type { Meta, StoryObj } from "@storybook/react";
import { Hash, User } from "lucide-react";
import React from "react";
import Mentions from "./index";

const USER_OPTIONS = [
  { value: "alice", label: "Alice Johnson", description: "Product Designer" },
  { value: "bob", label: "Bob Williams", description: "Engineer" },
  { value: "charlie", label: "Charlie Brown", description: "Marketing" },
  { value: "diana", label: "Diana Prince", description: "Sales" },
  { value: "evan", label: "Evan Turner", description: "Support" },
];

const CHANNEL_OPTIONS = [
  { value: "general", label: "general" },
  { value: "engineering", label: "engineering" },
  { value: "design", label: "design" },
  { value: "marketing", label: "marketing" },
  { value: "announcements", label: "announcements" },
];

const meta: Meta<typeof Mentions> = {
  title: "Form/Mentions",
  component: Mentions,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["outline", "filled"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    loading: { control: "boolean" },
    clearable: { control: "boolean" },
    fullWidth: { control: "boolean" },
    required: { control: "boolean" },
    autoSize: { control: "boolean" },
    placeholder: { control: "text" },
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    warning: { control: "text" },
    success: { control: "text" },
    info: { control: "text" },
    rows: { control: "number" },
    messagePosition: { control: "select", options: ["top", "bottom"] },
  },
};

export default meta;
type Story = StoryObj<typeof Mentions>;

export const Playground: Story = {
  args: {
    label: "Comment",
    placeholder: "Type @ to mention someone...",
    options: USER_OPTIONS,
    triggers: ["@"],
    variant: "outline",
    size: "md",
    color: "primary",
    rows: 3,
    fullWidth: true,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <Mentions
            label="Outline"
            variant="outline"
            options={USER_OPTIONS}
            placeholder="Type @ to mention..."
            rows={3}
          />
          <Mentions
            label="Filled"
            variant="filled"
            options={USER_OPTIONS}
            placeholder="Type @ to mention..."
            rows={3}
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <Mentions
              key={size}
              label={`Size: ${size}`}
              size={size}
              options={USER_OPTIONS}
              placeholder="Type @ to mention..."
              rows={2}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <Mentions
              key={color}
              label={color}
              color={color}
              options={USER_OPTIONS}
              placeholder="Type @ to mention..."
              rows={2}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Multiple Triggers</h3>
        <Mentions
          label="Message with @ and #"
          options={USER_OPTIONS}
          triggers={["@", "#"]}
          placeholder="Type @ to mention a user or # for a channel..."
          rows={3}
          helperText="Use @ for users, # for channels"
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Pre-filled Value</h3>
        <Mentions
          label="Reply"
          defaultValue="Hey @alice, can you review the PR for #engineering?"
          options={USER_OPTIONS}
          triggers={["@", "#"]}
          rows={3}
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <Mentions
            label="Error state"
            options={USER_OPTIONS}
            error="Message cannot be empty"
            rows={2}
          />
          <Mentions
            label="Warning state"
            options={USER_OPTIONS}
            warning="Message is too long"
            rows={2}
          />
          <Mentions
            label="Success state"
            options={USER_OPTIONS}
            defaultValue="Message sent to @alice"
            success="Message delivered"
            rows={2}
          />
          <Mentions
            label="Info state"
            options={USER_OPTIONS}
            info="Use @ to mention team members"
            rows={2}
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <Mentions
            label="Read Only"
            defaultValue="This is a read-only message with @alice mention"
            options={USER_OPTIONS}
            readOnly
            rows={2}
          />
          <Mentions
            label="Disabled"
            defaultValue="Disabled message"
            options={USER_OPTIONS}
            disabled
            rows={2}
          />
          <Mentions
            label="Loading"
            options={USER_OPTIONS}
            loading
            placeholder="Loading suggestions..."
            rows={2}
          />
          <Mentions
            label="Auto-resize"
            options={USER_OPTIONS}
            placeholder="This textarea auto-resizes..."
            autoSize
          />
        </div>
      </section>
    </div>
  ),
};
