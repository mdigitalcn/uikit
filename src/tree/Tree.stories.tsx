import type { Meta, StoryObj } from "@storybook/react";
import { File, Folder, FolderOpen, Globe, Package, Settings, Shield, Users } from "lucide-react";
import React, { useState } from "react";
import Tree from "./index";
import type { TreeNode } from "./types";

const meta: Meta<typeof Tree> = {
  title: "Data Display/Tree",
  component: Tree,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    checkable: { control: "boolean" },
    selectable: { control: "boolean" },
    showLine: { control: "boolean" },
    showIcon: { control: "boolean" },
    defaultExpandAll: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Tree>;

const orgData: TreeNode[] = [
  {
    key: "company",
    label: "Acme Corporation",
    children: [
      {
        key: "engineering",
        label: "Engineering",
        children: [
          {
            key: "frontend",
            label: "Frontend",
            children: [
              { key: "react-team", label: "React Team" },
              { key: "design-sys", label: "Design System" },
            ],
          },
          {
            key: "backend",
            label: "Backend",
            children: [
              { key: "api-team", label: "API Team" },
              { key: "infra", label: "Infrastructure" },
              { key: "data", label: "Data Platform" },
            ],
          },
          { key: "mobile", label: "Mobile" },
          { key: "devops", label: "DevOps" },
        ],
      },
      {
        key: "design",
        label: "Design",
        children: [
          { key: "ux", label: "UX Research" },
          { key: "ui", label: "UI Design" },
          { key: "brand", label: "Brand" },
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
    ],
  },
];

const fileSystemData: TreeNode[] = [
  {
    key: "root",
    label: "project",
    icon: <Folder size={14} />,
    children: [
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
              { key: "button", label: "Button.tsx", icon: <File size={14} />, isLeaf: true },
              { key: "input", label: "Input.tsx", icon: <File size={14} />, isLeaf: true },
              { key: "modal", label: "Modal.tsx", icon: <File size={14} />, isLeaf: true },
            ],
          },
          {
            key: "pages",
            label: "pages",
            icon: <Folder size={14} />,
            children: [
              { key: "home-page", label: "HomePage.tsx", icon: <File size={14} />, isLeaf: true },
              { key: "about-page", label: "AboutPage.tsx", icon: <File size={14} />, isLeaf: true },
            ],
          },
          { key: "app", label: "App.tsx", icon: <File size={14} />, isLeaf: true },
          { key: "main", label: "main.tsx", icon: <File size={14} />, isLeaf: true },
        ],
      },
      {
        key: "public",
        label: "public",
        icon: <Folder size={14} />,
        children: [
          { key: "favicon", label: "favicon.ico", icon: <File size={14} />, isLeaf: true },
          { key: "robots", label: "robots.txt", icon: <File size={14} />, isLeaf: true },
        ],
      },
      { key: "pkg", label: "package.json", icon: <File size={14} />, isLeaf: true },
      { key: "tsconfig", label: "tsconfig.json", icon: <File size={14} />, isLeaf: true },
    ],
  },
];

const permissionsData: TreeNode[] = [
  {
    key: "admin",
    label: "Administration",
    icon: <Shield size={14} />,
    children: [
      { key: "user-mgmt", label: "User Management", icon: <Users size={14} /> },
      { key: "role-mgmt", label: "Role Management" },
      { key: "audit", label: "Audit Logs" },
    ],
  },
  {
    key: "content",
    label: "Content",
    icon: <Globe size={14} />,
    children: [
      { key: "publish", label: "Publish" },
      { key: "edit", label: "Edit", disabled: true },
      { key: "review", label: "Review" },
    ],
  },
  {
    key: "system",
    label: "System",
    icon: <Settings size={14} />,
    children: [
      { key: "config", label: "Configuration", disabled: true },
      { key: "integrations", label: "Integrations" },
    ],
  },
];

export const Playground: Story = {
  args: {
    data: orgData,
    defaultExpandedKeys: ["company", "engineering"],
    color: "primary",
    size: "md",
    checkable: false,
    selectable: true,
    showLine: false,
    showIcon: false,
    defaultExpandAll: false,
    disabled: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Basic Tree</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree
            data={orgData}
            defaultExpandedKeys={["company", "engineering"]}
            color="primary"
            selectable
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="grid grid-cols-2 gap-6">
          {(["primary", "secondary", "accent", "success"] as const).map((color) => (
            <div key={color}>
              <p className="text-xs text-text-secondary mb-2 capitalize">{color}</p>
              <div className="border border-border rounded-lg p-3 bg-surface">
                <Tree
                  data={orgData[0].children!.slice(0, 2)}
                  defaultExpandedKeys={["engineering", "design"]}
                  color={color}
                  selectable
                  defaultSelectedKeys={[color === "primary" ? "frontend" : color === "secondary" ? "ux" : color === "accent" ? "ui" : "pm"]}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="grid grid-cols-2 gap-6">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <div key={size}>
              <p className="text-xs text-text-secondary mb-2 uppercase">{size}</p>
              <div className="border border-border rounded-lg p-3 bg-surface">
                <Tree
                  data={orgData[0].children!.slice(0, 1)}
                  defaultExpandedKeys={["engineering"]}
                  size={size}
                  color="primary"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Checkable</h3>
        <CheckableDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Icons</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree
            data={fileSystemData}
            defaultExpandedKeys={["root", "src"]}
            color="primary"
            showIcon
            selectable
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Lines</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree
            data={orgData}
            defaultExpandedKeys={["company", "engineering"]}
            color="primary"
            showLine
            selectable
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Permissions Tree (with disabled nodes)</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree
            data={permissionsData}
            color="primary"
            checkable
            showIcon
            defaultExpandAll
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Expand All</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree
            data={fileSystemData}
            color="primary"
            showIcon
            defaultExpandAll
            selectable
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Disabled</h3>
        <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
          <Tree
            data={orgData}
            defaultExpandedKeys={["company", "engineering"]}
            color="primary"
            disabled
          />
        </div>
      </section>
    </div>
  ),
};

function CheckableDemo() {
  const [checkedKeys, setCheckedKeys] = useState<string[]>(["react-team"]);
  return (
    <div className="space-y-2">
      <div className="max-w-sm border border-border rounded-lg p-3 bg-surface">
        <Tree
          data={orgData}
          defaultExpandedKeys={["company", "engineering"]}
          color="primary"
          checkable
          checkedKeys={checkedKeys}
          onCheck={(keys) => setCheckedKeys(keys)}
        />
      </div>
      <p className="text-xs text-text-secondary">
        Checked: {checkedKeys.join(", ") || "none"}
      </p>
    </div>
  );
}

export const Basic: Story = {
  args: {
    data: orgData,
    defaultExpandedKeys: ["company", "engineering"],
    color: "primary",
    selectable: true,
  },
};

export const Checkable: Story = {
  render: () => {
    const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
    return (
      <div className="p-4 max-w-sm space-y-2">
        <div className="border border-border rounded-lg p-3 bg-surface">
          <Tree
            data={orgData}
            defaultExpandedKeys={["company", "engineering", "design"]}
            color="primary"
            checkable
            checkedKeys={checkedKeys}
            onCheck={(keys) => setCheckedKeys(keys)}
          />
        </div>
        <p className="text-xs text-text-secondary">Checked: {checkedKeys.join(", ") || "none"}</p>
      </div>
    );
  },
};

export const FileTree: Story = {
  args: {
    data: fileSystemData,
    defaultExpandedKeys: ["root", "src", "components"],
    color: "primary",
    showIcon: true,
    selectable: true,
  },
};

export const WithLines: Story = {
  args: {
    data: orgData,
    defaultExpandedKeys: ["company", "engineering"],
    color: "primary",
    showLine: true,
    selectable: true,
  },
};

export const Disabled: Story = {
  args: {
    data: orgData,
    defaultExpandedKeys: ["company"],
    color: "primary",
    disabled: true,
  },
};
