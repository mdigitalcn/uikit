import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, Download, FileText, Github } from "lucide-react";
import React from "react";
import Link from "./index";

const meta: Meta<typeof Link> = {
  title: "General/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    underline: { control: "select", options: ["always", "hover", "none"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    external: { control: "boolean" },
    showExternalIcon: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Link>;

const colors = [
  "default",
  "primary",
  "secondary",
  "accent",
  "success",
  "error",
  "warning",
  "info",
] as const;

export const Playground: Story = {
  args: {
    children: "Click here",
    href: "#",
    color: "primary",
    underline: "hover",
    size: "md",
    external: false,
    disabled: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-4">
          {colors.map((c) => (
            <Link key={c} href="#" color={c}>
              {c}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants (underline)
        </h3>
        <div className="flex gap-6 flex-wrap">
          <Link href="#" underline="none">No underline</Link>
          <Link href="#" underline="hover">Underline on hover</Link>
          <Link href="#" underline="always">Always underlined</Link>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex flex-wrap items-baseline gap-4">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <Link key={s} href="#" color="primary" size={s}>
              Size {s}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="flex flex-wrap gap-4">
          <Link href="#" color="primary">Active link</Link>
          <Link href="#" color="primary" disabled>Disabled link</Link>
          <Link href="https://example.com" color="info" external>
            External link
          </Link>
          <Link href="https://example.com" color="info" external showExternalIcon={false}>
            External (no icon)
          </Link>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Icons
        </h3>
        <div className="flex flex-wrap gap-4">
          <Link href="#" color="primary" leftIcon={<FileText className="w-4 h-4" />}>
            View documentation
          </Link>
          <Link href="#" color="success" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Continue
          </Link>
          <Link href="#" color="accent" leftIcon={<Download className="w-4 h-4" />}>
            Download
          </Link>
          <Link href="https://github.com" color="default" external leftIcon={<Github className="w-4 h-4" />}>
            GitHub
          </Link>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          In Paragraph
        </h3>
        <p className="text-text-secondary text-sm max-w-md leading-relaxed">
          Read the{" "}
          <Link href="#" color="primary">
            documentation
          </Link>{" "}
          to get started, or check the{" "}
          <Link href="#" color="info">
            changelog
          </Link>{" "}
          for recent updates. Need help?{" "}
          <Link href="#" color="accent">
            Contact support
          </Link>
          . To report bugs, visit our{" "}
          <Link href="https://github.com" color="default" external>
            GitHub repository
          </Link>
          .
        </p>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Navigation List
        </h3>
        <ul className="space-y-2 border border-border rounded-lg p-4 max-w-xs">
          {[
            { href: "#", label: "Getting started", color: "primary" as const },
            { href: "#", label: "Components", color: "primary" as const },
            { href: "#", label: "Changelog", color: "info" as const },
            { href: "https://github.com", label: "Source on GitHub", color: "default" as const, external: true },
          ].map(({ href, label, color, external }) => (
            <li key={label}>
              <Link href={href} color={color} external={external} size="sm">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  ),
};
