import type { Meta, StoryObj } from "@storybook/react";
import { Star, Zap } from "lucide-react";
import React from "react";
import Divider from "./index";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["horizontal","vertical"] },
    variant: { control: "select", options: ["solid","dashed","dotted"] },
    color: { control: "select", options: ["default","primary","secondary","accent","success","error","warning","info"] },
    thickness: { control: "select", options: ["thin","base","thick"] },
    textAlign: { control: "select", options: ["left","center","right"] },
  },
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Playground: Story = {
  args: { orientation: "horizontal", variant: "solid" },
};

const colors = ["default","primary","secondary","accent","success","error","warning","info"] as const;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-8">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-4">
          <Divider variant="solid" />
          <Divider variant="dashed" />
          <Divider variant="dotted" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Text Label</h3>
        <div className="space-y-4">
          <Divider>Center (default)</Divider>
          <Divider textAlign="left">Left aligned</Divider>
          <Divider textAlign="right">Right aligned</Divider>
          <Divider variant="dashed">Dashed + text</Divider>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icon</h3>
        <div className="space-y-4">
          <Divider><Star className="w-4 h-4 text-warning" /></Divider>
          <Divider color="primary"><Zap className="w-4 h-4" /></Divider>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {colors.map(c => <Divider key={c} color={c}>{c}</Divider>)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Thickness</h3>
        <div className="space-y-4">
          <Divider thickness="thin">Thin</Divider>
          <Divider thickness="base">Base</Divider>
          <Divider thickness="thick">Thick</Divider>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Vertical</h3>
        <div className="flex items-center gap-4 h-8 text-sm text-text-secondary">
          <span>Home</span>
          <Divider orientation="vertical" />
          <span>About</span>
          <Divider orientation="vertical" variant="dashed" />
          <span>Contact</span>
          <Divider orientation="vertical" color="primary" />
          <span>Blog</span>
        </div>
      </section>
    </div>
  ),
};
