import type { Meta, StoryObj } from "@storybook/react";
import {
  Archive,
  Copy,
  Download,
  Edit,
  ExternalLink,
  Flag,
  FolderOpen,
  Link,
  MoreHorizontal,
  Share,
  Star,
  Trash2,
} from "lucide-react";
import React from "react";
import ContextMenu from "./index";
import type { ContextMenuItem } from "./types";

const meta: Meta<typeof ContextMenu> = {
  title: "Navigation/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    disabled: { control: "boolean" },
    submenuOpenDelay: { control: "number" },
    submenuCloseDelay: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof ContextMenu>;

const basicItems: ContextMenuItem[] = [
  { key: "edit", label: "Edit", icon: <Edit className="w-4 h-4" />, shortcut: "Cmd E" },
  { key: "copy", label: "Copy", icon: <Copy className="w-4 h-4" />, shortcut: "Cmd C" },
  { key: "share", label: "Share", icon: <Share className="w-4 h-4" /> },
  { key: "download", label: "Download", icon: <Download className="w-4 h-4" /> },
  { key: "sep1", separator: true },
  { key: "delete", label: "Delete", icon: <Trash2 className="w-4 h-4" /> },
];

const fileItems: ContextMenuItem[] = [
  { key: "open", label: "Open", icon: <FolderOpen className="w-4 h-4" /> },
  { key: "open-new", label: "Open in new tab", icon: <ExternalLink className="w-4 h-4" /> },
  {
    key: "share", label: "Share", icon: <Share className="w-4 h-4" />,
    children: [
      { key: "copy-link", label: "Copy link", icon: <Link className="w-4 h-4" />, shortcut: "Cmd Shift C" },
      { key: "email", label: "Send via email", icon: <Share className="w-4 h-4" /> },
      { key: "export", label: "Export", icon: <Download className="w-4 h-4" /> },
    ],
  },
  { key: "sep1", separator: true },
  { key: "rename", label: "Rename", icon: <Edit className="w-4 h-4" /> },
  { key: "star", label: "Add to favourites", icon: <Star className="w-4 h-4" /> },
  { key: "archive", label: "Archive", icon: <Archive className="w-4 h-4" /> },
  { key: "sep2", separator: true },
  { key: "delete", label: "Delete", icon: <Trash2 className="w-4 h-4" /> },
];

const withDisabledItems: ContextMenuItem[] = [
  { key: "edit", label: "Edit", icon: <Edit className="w-4 h-4" /> },
  { key: "copy", label: "Copy (disabled)", icon: <Copy className="w-4 h-4" />, disabled: true },
  { key: "paste", label: "Paste (disabled)", icon: <MoreHorizontal className="w-4 h-4" />, disabled: true },
  { key: "sep1", separator: true },
  { key: "flag", label: "Flag for review", icon: <Flag className="w-4 h-4" /> },
  { key: "sep2", separator: true },
  { key: "delete", label: "Delete", icon: <Trash2 className="w-4 h-4" /> },
];

const Zone = ({ label }: { label: string }) => (
  <div className="border-2 border-dashed border-border rounded-lg p-10 text-center text-text-secondary text-sm select-none cursor-context-menu hover:bg-surface transition-colors">
    Right-click here — {label}
  </div>
);

export const Playground: Story = {
  args: {
    size: "md",
    color: "default",
    disabled: false,
  },
  render: (args) => (
    <ContextMenu {...args} items={basicItems}>
      <Zone label="basic context menu" />
    </ContextMenu>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Basic — Icons and Shortcuts
        </h3>
        <ContextMenu items={basicItems}>
          <Zone label="edit / copy / share / download / delete" />
        </ContextMenu>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Nested Submenu
        </h3>
        <ContextMenu items={fileItems}>
          <Zone label="file actions with Share submenu" />
        </ContextMenu>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Disabled Items
        </h3>
        <ContextMenu items={withDisabledItems}>
          <Zone label="some items are disabled" />
        </ContextMenu>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {(["default", "primary", "accent", "success"] as const).map((c) => (
            <ContextMenu key={c} items={basicItems.slice(0, 4)} color={c}>
              <Zone label={`color: ${c}`} />
            </ContextMenu>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <ContextMenu key={s} items={basicItems.slice(0, 3)} size={s}>
              <Zone label={`size: ${s}`} />
            </ContextMenu>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States: Disabled
        </h3>
        <ContextMenu items={basicItems} disabled>
          <Zone label="context menu disabled — right-click does nothing" />
        </ContextMenu>
      </section>
    </div>
  ),
};
