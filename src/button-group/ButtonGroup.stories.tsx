import type { Meta, StoryObj } from "@storybook/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronLeft,
  ChevronRight,
  Italic,
  List,
  Underline,
} from "lucide-react";
import React from "react";
import Button from "../button";
import ButtonGroup from "./index";

const meta: Meta<typeof ButtonGroup> = {
  title: "General/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    vertical: { control: "boolean" },
    attached: { control: "boolean" },
    gap: { control: "select", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    variant: {
      control: "select",
      options: ["solid", "outline", "dashed", "link", "ghost", "soft"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    shape: { control: "select", options: ["rounded", "pill", "square"] },
  },
};
export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Playground: Story = {
  args: {
    attached: true,
    vertical: false,
    disabled: false,
    size: "md",
    variant: "outline",
    color: "primary",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Previous</Button>
      <Button>Current</Button>
      <Button>Next</Button>
    </ButtonGroup>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="space-y-3">
          {(["solid", "outline", "soft", "ghost"] as const).map((v) => (
            <div key={v} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-16">{v}</span>
              <ButtonGroup variant={v} color="primary">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((c) => (
            <div key={c} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-20">{c}</span>
              <ButtonGroup color={c} variant="soft">
                <Button>A</Button>
                <Button>B</Button>
                <Button>C</Button>
              </ButtonGroup>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-6">{s}</span>
              <ButtonGroup size={s} variant="outline">
                <Button>Alpha</Button>
                <Button>Beta</Button>
                <Button>Gamma</Button>
              </ButtonGroup>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Icon Groups
        </h3>
        <div className="space-y-3">
          <ButtonGroup variant="outline">
            <Button aria-label="Align left" isIconOnly>
              <AlignLeft className="w-4 h-4" />
            </Button>
            <Button aria-label="Align center" isIconOnly>
              <AlignCenter className="w-4 h-4" />
            </Button>
            <Button aria-label="Align right" isIconOnly>
              <AlignRight className="w-4 h-4" />
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outline">
            <Button aria-label="Bold" isIconOnly>
              <Bold className="w-4 h-4" />
            </Button>
            <Button aria-label="Italic" isIconOnly>
              <Italic className="w-4 h-4" />
            </Button>
            <Button aria-label="Underline" isIconOnly>
              <Underline className="w-4 h-4" />
            </Button>
            <Button aria-label="List" isIconOnly>
              <List className="w-4 h-4" />
            </Button>
          </ButtonGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Shapes
        </h3>
        <div className="space-y-3">
          {(["rounded", "pill", "square"] as const).map((sh) => (
            <div key={sh} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-16">{sh}</span>
              <ButtonGroup shape={sh} variant="outline" color="primary">
                <Button>A</Button>
                <Button>B</Button>
                <Button>C</Button>
              </ButtonGroup>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Pagination Example
        </h3>
        <ButtonGroup variant="outline" size="sm">
          <Button isIconOnly aria-label="Previous page">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          {[1, 2, 3, 4, 5].map((p) => (
            <Button
              key={p}
              variant={p === 3 ? "solid" : "outline"}
              color={p === 3 ? "primary" : "default"}
            >
              {p}
            </Button>
          ))}
          <Button isIconOnly aria-label="Next page">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </ButtonGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Vertical
        </h3>
        <ButtonGroup vertical variant="outline">
          <Button>Top</Button>
          <Button>Middle</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Separated (attached=false)
        </h3>
        <div className="space-y-3">
          {(["sm", "md", "lg"] as const).map((g) => (
            <div key={g} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-12">gap {g}</span>
              <ButtonGroup attached={false} gap={g} variant="outline">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Full Width
        </h3>
        <ButtonGroup fullWidth variant="outline">
          <Button>Tab One</Button>
          <Button variant="solid" color="primary">Tab Two</Button>
          <Button>Tab Three</Button>
        </ButtonGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="space-y-3">
          <ButtonGroup disabled variant="outline">
            <Button>Disabled</Button>
            <Button>Group</Button>
            <Button>Here</Button>
          </ButtonGroup>
        </div>
      </section>
    </div>
  ),
};
