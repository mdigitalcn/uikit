import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import TagsInput from "./index";

const TECH_SUGGESTIONS = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "Rust",
  "Go",
  "Tailwind",
  "GraphQL",
  "Docker",
];

const meta: Meta<typeof TagsInput> = {
  title: "Form/TagsInput",
  component: TagsInput,
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
    allowDuplicates: { control: "boolean" },
    addOnBlur: { control: "boolean" },
    addOnPaste: { control: "boolean" },
    placeholder: { control: "text" },
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    warning: { control: "text" },
    success: { control: "text" },
    info: { control: "text" },
    maxTags: { control: "number" },
    separator: { control: "text" },
    messagePosition: { control: "select", options: ["top", "bottom"] },
  },
};

export default meta;
type Story = StoryObj<typeof TagsInput>;

export const Playground: Story = {
  args: {
    label: "Tags",
    placeholder: "Add tag...",
    defaultValue: ["React", "TypeScript"],
    variant: "outline",
    size: "md",
    color: "primary",
    clearable: true,
    fullWidth: true,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <TagsInput
            label="Outline"
            defaultValue={["React", "TypeScript"]}
            variant="outline"
            placeholder="Add tag..."
          />
          <TagsInput
            label="Filled"
            defaultValue={["Node.js", "Python"]}
            variant="filled"
            placeholder="Add tag..."
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <TagsInput
              key={size}
              label={`Size: ${size}`}
              defaultValue={["Tag"]}
              size={size}
              placeholder={`${size} size...`}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <TagsInput
              key={color}
              label={color}
              defaultValue={[color]}
              color={color}
              placeholder="Add tag..."
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <TagsInput
            label="Error state"
            defaultValue={["invalid-tag"]}
            error="Tag format is invalid"
          />
          <TagsInput
            label="Warning state"
            defaultValue={["React", "Vue", "Angular"]}
            warning="Too many technologies selected"
          />
          <TagsInput
            label="Success state"
            defaultValue={["React", "TypeScript"]}
            success="Tags saved successfully"
          />
          <TagsInput
            label="Info state"
            info="Press Enter or comma to add a tag"
            helperText="Helper text below"
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Suggestions</h3>
        <TagsInput
          label="Tech stack"
          placeholder="Type to see suggestions..."
          suggestions={TECH_SUGGESTIONS}
          helperText="Suggestions appear as you type"
          clearable
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Max Tags</h3>
        <TagsInput
          label="Max 3 tags"
          defaultValue={["React", "Vue"]}
          maxTags={3}
          helperText="You can add up to 3 tags"
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <TagsInput
            label="Read Only"
            defaultValue={["React", "TypeScript", "Tailwind"]}
            readOnly
          />
          <TagsInput
            label="Disabled"
            defaultValue={["React", "TypeScript"]}
            disabled
          />
          <TagsInput
            label="Loading"
            defaultValue={["React"]}
            loading
          />
          <TagsInput
            label="Clearable"
            defaultValue={["React", "TypeScript", "Tailwind"]}
            clearable
          />
        </div>
      </section>
    </div>
  ),
};
