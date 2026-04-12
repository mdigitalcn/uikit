import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Anchor from "./index";
import type { AnchorItem } from "./types";

const meta: Meta<typeof Anchor> = {
  title: "Navigation/Anchor",
  component: Anchor,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    affix: { control: "boolean" },
    affixTop: { control: "number" },
    offset: { control: "number" },
    bounds: { control: "number" },
    targetOffset: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof Anchor>;

const items: AnchorItem[] = [
  { id: "overview", label: "Overview" },
  { id: "installation", label: "Installation" },
  {
    id: "usage", label: "Usage",
    children: [
      { id: "basic-usage", label: "Basic Usage" },
      { id: "advanced-usage", label: "Advanced Usage" },
    ],
  },
  { id: "api", label: "API Reference" },
  { id: "examples", label: "Examples" },
  { id: "faq", label: "FAQ" },
];

const flatItems: AnchorItem[] = [
  { id: "section-1", label: "Introduction" },
  { id: "section-2", label: "Getting Started" },
  { id: "section-3", label: "Configuration" },
  { id: "section-4", label: "Deployment" },
];

const DocSection = ({ id, title }: { id: string; title: string }) => (
  <section id={id} style={{ marginBottom: "4rem" }}>
    <h2 className="text-lg font-bold text-text-primary mb-2">{title}</h2>
    <p className="text-sm text-text-secondary leading-relaxed mb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p className="text-sm text-text-secondary leading-relaxed">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
    </p>
  </section>
);

export const Playground: Story = {
  args: {
    items,
    color: "primary",
    size: "md",
    offset: 0,
  },
  render: (args) => (
    <div className="flex gap-8 max-w-2xl">
      <div className="shrink-0 w-40">
        <Anchor {...args} />
      </div>
      <div className="flex-1 max-h-96 overflow-y-auto pr-2">
        <DocSection id="overview" title="Overview" />
        <DocSection id="installation" title="Installation" />
        <DocSection id="usage" title="Usage" />
        <DocSection id="basic-usage" title="Basic Usage" />
        <DocSection id="advanced-usage" title="Advanced Usage" />
        <DocSection id="api" title="API Reference" />
        <DocSection id="examples" title="Examples" />
        <DocSection id="faq" title="FAQ" />
      </div>
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Nested Items (scrollable demo)
        </h3>
        <div className="flex gap-8">
          <div className="shrink-0 w-44">
            <Anchor items={items} color="primary" size="md" />
          </div>
          <div className="flex-1 max-h-72 overflow-y-auto border border-border rounded-lg p-4">
            <DocSection id="overview" title="Overview" />
            <DocSection id="installation" title="Installation" />
            <DocSection id="usage" title="Usage" />
            <DocSection id="basic-usage" title="Basic Usage" />
            <DocSection id="advanced-usage" title="Advanced Usage" />
            <DocSection id="api" title="API Reference" />
            <DocSection id="examples" title="Examples" />
            <DocSection id="faq" title="FAQ" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-8">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((c) => (
            <div key={c} className="w-36">
              <p className="text-xs text-text-secondary mb-2">{c}</p>
              <Anchor items={flatItems.slice(0, 3)} color={c} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex flex-wrap gap-10">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s} className="w-40">
              <p className="text-xs text-text-secondary mb-2">{s}</p>
              <Anchor items={flatItems} size={s} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Flat List (no nesting)
        </h3>
        <div className="w-48">
          <Anchor items={flatItems} color="accent" />
        </div>
      </section>
    </div>
  ),
};
