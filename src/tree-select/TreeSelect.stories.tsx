import type { Meta, StoryObj } from "@storybook/react";
import { Folder, FolderOpen, File } from "lucide-react";
import React, { useState } from "react";
import TreeSelect from "./index";
import type { TreeNode } from "../tree/types";

const meta: Meta<typeof TreeSelect> = {
  title: "Data Entry/TreeSelect",
  component: TreeSelect,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["outline", "filled"] },
    color: { control: "select", options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    multiple: { control: "boolean" },
    checkable: { control: "boolean" },
    searchable: { control: "boolean" },
    clearable: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    fullWidth: { control: "boolean" },
    showLine: { control: "boolean" },
    defaultExpandAll: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof TreeSelect>;

const orgData: TreeNode[] = [
  {
    key: "engineering",
    label: "Engineering",
    children: [
      {
        key: "frontend",
        label: "Frontend",
        children: [
          { key: "react", label: "React Team" },
          { key: "vue", label: "Vue Team" },
        ],
      },
      {
        key: "backend",
        label: "Backend",
        children: [
          { key: "api", label: "API Team" },
          { key: "infra", label: "Infrastructure" },
        ],
      },
      { key: "mobile", label: "Mobile" },
    ],
  },
  {
    key: "design",
    label: "Design",
    children: [
      { key: "ux", label: "UX Research" },
      { key: "ui", label: "UI Design" },
      { key: "brand", label: "Brand Design" },
    ],
  },
  {
    key: "product",
    label: "Product",
    children: [
      { key: "pm", label: "Product Management" },
      { key: "analytics", label: "Analytics" },
    ],
  },
  {
    key: "operations",
    label: "Operations",
    children: [
      { key: "hr", label: "Human Resources" },
      { key: "finance", label: "Finance" },
      { key: "legal", label: "Legal", disabled: true },
    ],
  },
];

const fileTreeData: TreeNode[] = [
  {
    key: "src",
    label: "src",
    icon: <Folder size={14} />,
    children: [
      {
        key: "components",
        label: "components",
        icon: <Folder size={14} />,
        children: [
          { key: "button", label: "button.tsx", icon: <File size={14} />, isLeaf: true },
          { key: "input", label: "input.tsx", icon: <File size={14} />, isLeaf: true },
          { key: "modal", label: "modal.tsx", icon: <File size={14} />, isLeaf: true },
        ],
      },
      {
        key: "pages",
        label: "pages",
        icon: <Folder size={14} />,
        children: [
          { key: "home", label: "home.tsx", icon: <File size={14} />, isLeaf: true },
          { key: "about", label: "about.tsx", icon: <File size={14} />, isLeaf: true },
        ],
      },
      { key: "app", label: "app.tsx", icon: <File size={14} />, isLeaf: true },
      { key: "index", label: "index.ts", icon: <File size={14} />, isLeaf: true },
    ],
  },
  {
    key: "public",
    label: "public",
    icon: <Folder size={14} />,
    children: [
      { key: "favicon", label: "favicon.ico", icon: <File size={14} />, isLeaf: true },
    ],
  },
];

export const Playground: Story = {
  args: {
    label: "Select Department",
    placeholder: "Choose a department...",
    data: orgData,
    variant: "outline",
    color: "primary",
    size: "md",
    multiple: false,
    checkable: false,
    searchable: false,
    clearable: true,
    disabled: false,
    loading: false,
    fullWidth: false,
    defaultExpandAll: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="space-y-4">
          {(["outline", "filled"] as const).map((variant) => (
            <div key={variant}>
              <p className="text-xs text-text-secondary mb-2 capitalize">{variant}</p>
              <TreeSelect
                label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} variant`}
                placeholder="Select a department..."
                data={orgData}
                variant={variant}
                color="primary"
                clearable
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-4">
          {(["primary", "secondary", "accent", "success"] as const).map((color) => (
            <div key={color}>
              <p className="text-xs text-text-secondary mb-2 capitalize">{color}</p>
              <TreeSelect
                placeholder={`${color.charAt(0).toUpperCase() + color.slice(1)} color`}
                data={orgData}
                color={color}
                clearable
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <div key={size}>
              <p className="text-xs text-text-secondary mb-2 uppercase">{size}</p>
              <TreeSelect
                placeholder={`Size ${size.toUpperCase()}`}
                data={orgData}
                size={size}
                color="primary"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Multiple Selection with Checkboxes</h3>
        <MultipleDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Searchable</h3>
        <TreeSelect
          label="Search departments"
          placeholder="Type to search..."
          data={orgData}
          color="primary"
          searchable
          clearable
          defaultExpandAll
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Icons (File Tree)</h3>
        <TreeSelect
          label="Select file"
          placeholder="Choose a file..."
          data={fileTreeData}
          color="primary"
          showIcon
          clearable
          defaultExpandAll
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Show Lines</h3>
        <TreeSelect
          label="With connecting lines"
          placeholder="Select..."
          data={orgData}
          color="primary"
          showLine
          clearable
          defaultExpandAll
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Validation States</h3>
        <div className="space-y-4">
          <TreeSelect
            label="Required field"
            placeholder="Select department..."
            data={orgData}
            color="primary"
            error="Please select a department"
            required
          />
          <TreeSelect
            label="Warning"
            placeholder="Select department..."
            data={orgData}
            color="primary"
            warning="This selection affects billing"
          />
          <TreeSelect
            label="Success"
            placeholder="Select department..."
            data={orgData}
            color="primary"
            success="Department verified"
            defaultValue="frontend"
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="space-y-4">
          <TreeSelect
            label="Disabled"
            placeholder="Cannot select..."
            data={orgData}
            color="primary"
            disabled
          />
          <TreeSelect
            label="Loading"
            placeholder="Loading options..."
            data={[]}
            color="primary"
            loading
          />
        </div>
      </section>
    </div>
  ),
};

function MultipleDemo() {
  const [value, setValue] = useState<string | string[]>([]);
  return (
    <div className="space-y-2">
      <TreeSelect
        label="Select multiple departments"
        placeholder="Choose departments..."
        data={orgData}
        color="primary"
        multiple
        checkable
        clearable
        value={value}
        onChange={(v) => setValue(v)}
        defaultExpandAll
        maxChipsVisible={3}
      />
      <p className="text-xs text-text-secondary">
        Selected: {Array.isArray(value) ? (value.length > 0 ? value.join(", ") : "none") : value || "none"}
      </p>
    </div>
  );
}

export const SingleSelect: Story = {
  args: {
    label: "Department",
    placeholder: "Select a department...",
    data: orgData,
    color: "primary",
    clearable: true,
    defaultExpandAll: false,
  },
};

export const MultipleSelect: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>([]);
    return (
      <div className="p-4 max-w-sm space-y-2">
        <TreeSelect
          label="Departments"
          placeholder="Select departments..."
          data={orgData}
          color="primary"
          multiple
          checkable
          clearable
          value={value}
          onChange={(v) => setValue(v)}
        />
        <p className="text-xs text-text-secondary">
          Selected: {Array.isArray(value) ? value.join(", ") || "none" : value || "none"}
        </p>
      </div>
    );
  },
};

export const WithSearch: Story = {
  args: {
    label: "Searchable Tree Select",
    placeholder: "Type to search...",
    data: orgData,
    color: "primary",
    searchable: true,
    clearable: true,
    defaultExpandAll: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    placeholder: "Cannot select...",
    data: orgData,
    color: "primary",
    disabled: true,
  },
};
