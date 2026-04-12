import type { Meta, StoryObj } from "@storybook/react";
import {
  Copy,
  Download,
  FileText,
  Folder,
  Pencil,
  RotateCcw,
  RotateCw,
  Save,
  Search,
  Settings,
  Terminal,
  Trash2,
} from "lucide-react";
import React, { useState } from "react";
import Menubar from "./index";
import type { MenubarMenu } from "./types";

const meta: Meta<typeof Menubar> = {
  title: "Navigation/Menubar",
  component: Menubar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Menubar>;

const editorMenus: MenubarMenu[] = [
  {
    key: "file",
    label: "File",
    items: [
      { key: "new", label: "New File", shortcut: "Ctrl+N", icon: <FileText className="w-4 h-4" />, onClick: () => {} },
      { key: "open", label: "Open...", shortcut: "Ctrl+O", icon: <Folder className="w-4 h-4" />, onClick: () => {} },
      {
        key: "recent",
        label: "Open Recent",
        children: [
          { key: "r1", label: "project-alpha.tsx", onClick: () => {} },
          { key: "r2", label: "dashboard.tsx", onClick: () => {} },
          { key: "r3", label: "styles.css", onClick: () => {} },
        ],
      },
      { key: "sep1", label: "", separator: true },
      { key: "save", label: "Save", shortcut: "Ctrl+S", icon: <Save className="w-4 h-4" />, onClick: () => {} },
      { key: "save-as", label: "Save As...", shortcut: "Ctrl+Shift+S", onClick: () => {} },
      { key: "sep2", label: "", separator: true },
      { key: "download", label: "Download", icon: <Download className="w-4 h-4" />, onClick: () => {} },
      { key: "exit", label: "Exit", onClick: () => {} },
    ],
  },
  {
    key: "edit",
    label: "Edit",
    items: [
      { key: "undo", label: "Undo", shortcut: "Ctrl+Z", icon: <RotateCcw className="w-4 h-4" />, onClick: () => {} },
      { key: "redo", label: "Redo", shortcut: "Ctrl+Shift+Z", icon: <RotateCw className="w-4 h-4" />, onClick: () => {} },
      { key: "sep3", label: "", separator: true },
      { key: "cut", label: "Cut", shortcut: "Ctrl+X", onClick: () => {} },
      { key: "copy", label: "Copy", shortcut: "Ctrl+C", icon: <Copy className="w-4 h-4" />, onClick: () => {} },
      { key: "paste", label: "Paste", shortcut: "Ctrl+V", onClick: () => {} },
      { key: "sep4", label: "", separator: true },
      { key: "find", label: "Find", shortcut: "Ctrl+F", icon: <Search className="w-4 h-4" />, onClick: () => {} },
      { key: "replace", label: "Replace", shortcut: "Ctrl+H", disabled: true, onClick: () => {} },
    ],
  },
  {
    key: "view",
    label: "View",
    items: [
      { key: "view-label", label: "Appearance", type: "label" },
      { key: "zoom-in", label: "Zoom In", shortcut: "Ctrl++", onClick: () => {} },
      { key: "zoom-out", label: "Zoom Out", shortcut: "Ctrl+-", onClick: () => {} },
      { key: "reset-zoom", label: "Reset Zoom", shortcut: "Ctrl+0", onClick: () => {} },
      { key: "sep5", label: "", separator: true },
      { key: "terminal", label: "Terminal", icon: <Terminal className="w-4 h-4" />, onClick: () => {} },
      { key: "fullscreen", label: "Full Screen", shortcut: "F11", onClick: () => {} },
    ],
  },
  {
    key: "help",
    label: "Help",
    items: [
      { key: "docs", label: "Documentation", onClick: () => {} },
      { key: "shortcuts", label: "Keyboard Shortcuts", shortcut: "Ctrl+K", onClick: () => {} },
      { key: "sep6", label: "", separator: true },
      { key: "about", label: "About", onClick: () => {} },
    ],
  },
];

const simpleMenus: MenubarMenu[] = [
  {
    key: "products",
    label: "Products",
    items: [
      { key: "all", label: "All Products", onClick: () => {} },
      { key: "featured", label: "Featured", onClick: () => {} },
      { key: "new", label: "New Arrivals", onClick: () => {} },
    ],
  },
  {
    key: "services",
    label: "Services",
    items: [
      { key: "consulting", label: "Consulting", onClick: () => {} },
      { key: "support", label: "Support", onClick: () => {} },
    ],
  },
  {
    key: "company",
    label: "Company",
    items: [
      { key: "about", label: "About Us", onClick: () => {} },
      { key: "blog", label: "Blog", onClick: () => {} },
      { key: "careers", label: "Careers", onClick: () => {} },
    ],
  },
  {
    key: "disabled-menu",
    label: "Disabled",
    disabled: true,
    items: [],
  },
];

const CheckboxMenuDemo = () => {
  const [wordWrap, setWordWrap] = useState(true);
  const [lineNumbers, setLineNumbers] = useState(false);
  const [minimap, setMinimap] = useState(true);

  const menus: MenubarMenu[] = [
    {
      key: "view",
      label: "View",
      items: [
        { key: "label", label: "Editor Options", type: "label" },
        {
          key: "wordwrap",
          label: "Word Wrap",
          type: "checkbox",
          checked: wordWrap,
          onCheckedChange: setWordWrap,
          shortcut: "Alt+Z",
        },
        {
          key: "linenumbers",
          label: "Line Numbers",
          type: "checkbox",
          checked: lineNumbers,
          onCheckedChange: setLineNumbers,
        },
        {
          key: "minimap",
          label: "Minimap",
          type: "checkbox",
          checked: minimap,
          onCheckedChange: setMinimap,
        },
      ],
    },
  ];

  return (
    <div>
      <Menubar menus={menus} />
      <p className="text-xs text-text-secondary mt-3 px-2">
        Word Wrap: {String(wordWrap)} | Line Numbers: {String(lineNumbers)} | Minimap: {String(minimap)}
      </p>
    </div>
  );
};

export const Playground: Story = {
  render: () => <Menubar menus={editorMenus} />,
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Editor Menubar</h3>
        <Menubar menus={editorMenus} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Simple Navigation</h3>
        <Menubar menus={simpleMenus} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Checkbox Items (Controlled)</h3>
        <CheckboxMenuDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s}>
              <p className="text-xs text-text-secondary mb-1">{s}</p>
              <Menubar menus={simpleMenus} size={s} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Icons</h3>
        <Menubar
          menus={[
            {
              key: "actions",
              label: "Actions",
              items: [
                { key: "edit", label: "Edit", icon: <Pencil className="w-4 h-4" />, shortcut: "Ctrl+E", onClick: () => {} },
                { key: "delete", label: "Delete", icon: <Trash2 className="w-4 h-4" />, onClick: () => {} },
                { key: "settings", label: "Settings", icon: <Settings className="w-4 h-4" />, onClick: () => {} },
              ],
            },
          ]}
        />
      </section>
    </div>
  ),
};
