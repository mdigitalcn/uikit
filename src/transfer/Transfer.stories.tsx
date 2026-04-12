import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Transfer from "./index";
import type { TransferItem } from "./types";

const meta: Meta<typeof Transfer> = {
  title: "Data Entry/Transfer",
  component: Transfer,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    showSearch: { control: "boolean" },
    disabled: { control: "boolean" },
    oneWay: { control: "boolean" },
    showSelectAll: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Transfer>;

const teamMembers: TransferItem[] = [
  { key: "alice", label: "Alice Johnson", description: "Senior Engineer" },
  { key: "bob", label: "Bob Smith", description: "Product Designer" },
  { key: "carol", label: "Carol Williams", description: "Product Manager" },
  { key: "david", label: "David Brown", description: "Data Analyst" },
  { key: "eva", label: "Eva Martinez", description: "DevOps Engineer" },
  { key: "frank", label: "Frank Lee", description: "QA Engineer" },
  { key: "grace", label: "Grace Kim", description: "UX Researcher" },
  { key: "henry", label: "Henry Wilson", description: "Backend Engineer" },
  { key: "iris", label: "Iris Chen", description: "Frontend Engineer" },
  { key: "jake", label: "Jake Davis", description: "Mobile Engineer" },
];

const permissionItems: TransferItem[] = [
  { key: "read", label: "Read", description: "View resources" },
  { key: "write", label: "Write", description: "Create and update resources" },
  { key: "delete", label: "Delete", description: "Remove resources" },
  { key: "admin", label: "Admin", description: "Full administrative access", disabled: true },
  { key: "billing", label: "Billing", description: "Manage billing and invoices" },
  { key: "reports", label: "Reports", description: "View and export reports" },
  { key: "audit", label: "Audit log", description: "Access audit trail" },
];

export const Playground: Story = {
  render: (args) => {
    const [targetKeys, setTargetKeys] = useState<string[]>(["bob", "carol"]);
    return (
      <div className="p-4">
        <Transfer
          {...args}
          dataSource={teamMembers}
          targetKeys={targetKeys}
          onChange={(keys) => setTargetKeys(keys)}
          titles={["Available", "Selected"]}
        />
      </div>
    );
  },
  args: {
    color: "primary",
    size: "md",
    showSearch: true,
    showSelectAll: true,
    disabled: false,
    oneWay: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-5xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Basic Transfer</h3>
        <BasicTransferDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-8">
          {(["primary", "secondary", "accent", "success"] as const).map((color) => (
            <div key={color}>
              <p className="text-xs text-text-secondary mb-3 capitalize">{color}</p>
              <ColorTransferDemo color={color} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-8">
          {(["sm", "md", "lg"] as const).map((size) => (
            <div key={size}>
              <p className="text-xs text-text-secondary mb-3 uppercase">{size}</p>
              <SizeTransferDemo size={size} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Search</h3>
        <SearchTransferDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">One-Way Transfer</h3>
        <OneWayDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Custom Render</h3>
        <CustomRenderDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Disabled Items and Validation</h3>
        <ValidatedDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Fully Disabled</h3>
        <Transfer
          dataSource={teamMembers.slice(0, 5)}
          defaultTargetKeys={["bob"]}
          titles={["Available", "Selected"]}
          color="primary"
          disabled
        />
      </section>
    </div>
  ),
};

function BasicTransferDemo() {
  const [targetKeys, setTargetKeys] = useState<string[]>(["alice", "carol"]);
  return (
    <Transfer
      dataSource={teamMembers}
      targetKeys={targetKeys}
      onChange={(keys) => setTargetKeys(keys)}
      titles={["Team Members", "Project Team"]}
      color="primary"
      showSelectAll
    />
  );
}

function ColorTransferDemo({ color }: { color: "primary" | "secondary" | "accent" | "success" }) {
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  return (
    <Transfer
      dataSource={teamMembers.slice(0, 5)}
      targetKeys={targetKeys}
      onChange={(keys) => setTargetKeys(keys)}
      titles={["Source", "Target"]}
      color={color}
    />
  );
}

function SizeTransferDemo({ size }: { size: "sm" | "md" | "lg" }) {
  const [targetKeys, setTargetKeys] = useState<string[]>(["bob"]);
  return (
    <Transfer
      dataSource={teamMembers.slice(0, 4)}
      targetKeys={targetKeys}
      onChange={(keys) => setTargetKeys(keys)}
      titles={["Source", "Target"]}
      color="primary"
      size={size}
    />
  );
}

function SearchTransferDemo() {
  const [targetKeys, setTargetKeys] = useState<string[]>(["read", "write"]);
  return (
    <Transfer
      dataSource={permissionItems}
      targetKeys={targetKeys}
      onChange={(keys) => setTargetKeys(keys)}
      titles={["Available Permissions", "Granted Permissions"]}
      color="primary"
      showSearch
      searchPlaceholder="Search permissions..."
      showSelectAll
    />
  );
}

function OneWayDemo() {
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  return (
    <Transfer
      dataSource={teamMembers.slice(0, 6)}
      targetKeys={targetKeys}
      onChange={(keys) => setTargetKeys(keys)}
      titles={["Available", "Added"]}
      color="primary"
      oneWay
      showSelectAll
    />
  );
}

function CustomRenderDemo() {
  const [targetKeys, setTargetKeys] = useState<string[]>(["alice", "eva"]);
  return (
    <Transfer
      dataSource={teamMembers.slice(0, 6)}
      targetKeys={targetKeys}
      onChange={(keys) => setTargetKeys(keys)}
      titles={["All Members", "Selected"]}
      color="accent"
      render={(item) => (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-xs font-semibold text-accent shrink-0">
            {item.label.charAt(0)}
          </div>
          <div>
            <p className="text-sm leading-tight">{item.label}</p>
            {item.description && (
              <p className="text-xs text-text-secondary leading-tight">{item.description}</p>
            )}
          </div>
        </div>
      )}
      showSelectAll
    />
  );
}

function ValidatedDemo() {
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  return (
    <Transfer
      dataSource={permissionItems}
      targetKeys={targetKeys}
      onChange={(keys) => setTargetKeys(keys)}
      titles={["Permissions", "Granted"]}
      color="primary"
      label="Role Permissions"
      error={targetKeys.length === 0 ? "At least one permission must be granted" : undefined}
      showSelectAll
    />
  );
}

export const Basic: Story = {
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>(["alice", "bob"]);
    return (
      <div className="p-4">
        <Transfer
          dataSource={teamMembers}
          targetKeys={targetKeys}
          onChange={(keys) => setTargetKeys(keys)}
          titles={["Available", "Selected"]}
          color="primary"
          showSelectAll
        />
      </div>
    );
  },
};

export const WithSearch: Story = {
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>(["read"]);
    return (
      <div className="p-4">
        <Transfer
          dataSource={permissionItems}
          targetKeys={targetKeys}
          onChange={(keys) => setTargetKeys(keys)}
          titles={["Permissions", "Granted"]}
          color="primary"
          showSearch
          searchPlaceholder="Search..."
          showSelectAll
        />
      </div>
    );
  },
};

export const OneWay: Story = {
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    return (
      <div className="p-4">
        <Transfer
          dataSource={teamMembers.slice(0, 6)}
          targetKeys={targetKeys}
          onChange={(keys) => setTargetKeys(keys)}
          titles={["Available", "Added"]}
          color="primary"
          oneWay
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    dataSource: teamMembers.slice(0, 5),
    defaultTargetKeys: ["alice"],
    titles: ["Source", "Target"] as [string, string],
    color: "primary",
    disabled: true,
  },
};
