import type { Meta, StoryObj } from "@storybook/react";
import { BookOpen, Home, LayoutDashboard, Settings, Star, Users, Zap } from "lucide-react";
import React from "react";
import NavigationMenu from "./index";

const meta: Meta<typeof NavigationMenu> = {
  title: "Navigation/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: { control: "select", options: ["primary", "secondary", "accent", "success", "error", "warning", "info"] },
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    closeDelay: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof NavigationMenu>;

const simpleItems = [
  { key: "home", label: "Home", href: "#", icon: <Home className="w-4 h-4" /> },
  { key: "dashboard", label: "Dashboard", href: "#", icon: <LayoutDashboard className="w-4 h-4" /> },
  { key: "settings", label: "Settings", href: "#", icon: <Settings className="w-4 h-4" /> },
];

const navItems = [
  { key: "home", label: "Home", href: "#" },
  {
    key: "products",
    label: "Products",
    children: [
      { key: "ui-kit", label: "UI Kit", description: "76+ production-ready React components", href: "#" },
      { key: "widgets", label: "Widgets", description: "Composed widget patterns for common use cases", href: "#" },
      { key: "templates", label: "Templates", description: "Full project starter templates", href: "#" },
    ],
  },
  {
    key: "docs",
    label: "Documentation",
    children: [
      { key: "getting-started", label: "Getting Started", description: "Install and configure the design system", href: "#" },
      { key: "components", label: "Components", description: "Browse all available components", href: "#" },
      { key: "theming", label: "Theming", description: "Customize colors, sizes, and shapes", href: "#" },
      { key: "changelog", label: "Changelog", description: "Recent updates and version history", href: "#" },
    ],
  },
  { key: "pricing", label: "Pricing", href: "#" },
];

export const Playground: Story = {
  args: {
    items: navItems,
    size: "md",
    color: "primary",
    orientation: "horizontal",
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Simple Links</h3>
        <NavigationMenu items={simpleItems} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Dropdowns (Hover)</h3>
        <NavigationMenu items={navItems} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <div key={size} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-6">{size}</span>
              <NavigationMenu items={simpleItems} size={size} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-4">
          {(["primary", "secondary", "accent", "info"] as const).map((color) => (
            <div key={color} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-20 capitalize">{color}</span>
              <NavigationMenu items={simpleItems} color={color} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Vertical Orientation</h3>
        <div className="w-48">
          <NavigationMenu
            items={[
              { key: "home", label: "Home", href: "#", icon: <Home className="w-4 h-4" /> },
              {
                key: "features",
                label: "Features",
                children: [
                  { key: "analytics", label: "Analytics", href: "#" },
                  { key: "automation", label: "Automation", href: "#" },
                ],
              },
              { key: "pricing", label: "Pricing", href: "#", icon: <Star className="w-4 h-4" /> },
              { key: "team", label: "Team", href: "#", icon: <Users className="w-4 h-4" /> },
            ]}
            orientation="vertical"
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">App Navigation (Realistic)</h3>
        <div className="border border-border rounded-lg px-4 py-2">
          <NavigationMenu
            items={[
              { key: "dashboard", label: "Dashboard", href: "#", icon: <LayoutDashboard className="w-4 h-4" /> },
              {
                key: "components",
                label: "Components",
                children: [
                  { key: "buttons", label: "Buttons", description: "All button variants", href: "#", icon: <Zap className="w-4 h-4" /> },
                  { key: "forms", label: "Forms", description: "Input, select, checkbox and more", href: "#", icon: <BookOpen className="w-4 h-4" /> },
                  { key: "overlays", label: "Overlays", description: "Modal, drawer, popover", href: "#" },
                ],
              },
              {
                key: "resources",
                label: "Resources",
                children: [
                  { key: "docs", label: "Documentation", description: "Full API reference", href: "#" },
                  { key: "examples", label: "Examples", description: "Live code examples", href: "#" },
                ],
              },
              { key: "settings", label: "Settings", href: "#", icon: <Settings className="w-4 h-4" /> },
            ]}
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Disabled Items</h3>
        <NavigationMenu
          items={[
            { key: "home", label: "Home", href: "#" },
            { key: "active", label: "Active", href: "#" },
            { key: "disabled", label: "Disabled", href: "#", disabled: true },
            { key: "beta", label: "Beta (disabled)", href: "#", disabled: true },
          ]}
        />
      </section>
    </div>
  ),
};
