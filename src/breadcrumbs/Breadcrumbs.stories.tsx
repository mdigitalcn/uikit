import type { Meta, StoryObj } from "@storybook/react";
import { Home, ChevronRight, Slash } from "lucide-react";
import React from "react";
import Breadcrumbs from "./index";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs","sm","md","lg"] },
    color: { control: "select", options: ["default","primary","secondary","accent"] },
    maxItems: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const items = [{ label: "Home", href: "#" }, { label: "Products", href: "#" }, { label: "Category", href: "#" }, { label: "Item Name" }];

export const Playground: Story = {
  args: { items, size: "md" },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-8">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          {(["xs","sm","md","lg"] as const).map(s => <Breadcrumbs key={s} items={items} size={s} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Home Icon</h3>
        <Breadcrumbs items={[{ label: "Home", href: "#", startSection: <Home className="w-3.5 h-3.5" /> }, ...items.slice(1)]} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Custom Separators</h3>
        <div className="space-y-3">
          <Breadcrumbs items={items} separator="/" />
          <Breadcrumbs items={items} separator=">" />
          <Breadcrumbs items={items} separator={<Slash className="w-3 h-3" />} />
          <Breadcrumbs items={items} separator={<ChevronRight className="w-3.5 h-3.5" />} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Max Items (with ellipsis)</h3>
        <div className="space-y-3">
          <Breadcrumbs items={[...items, { label: "Sub", href: "#" }, { label: "Deep Page" }]} maxItems={3} />
          <Breadcrumbs items={[...items, { label: "Sub", href: "#" }, { label: "Deep Page" }]} maxItems={4} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons per Item</h3>
        <Breadcrumbs items={[
          { label: "Home", href: "#", startSection: <Home className="w-3.5 h-3.5" /> },
          { label: "Dashboard", href: "#" },
          { label: "Settings" },
        ]} />
      </section>
    </div>
  ),
};
