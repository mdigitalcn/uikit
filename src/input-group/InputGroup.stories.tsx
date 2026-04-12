import type { Meta, StoryObj } from "@storybook/react";
import { Search, Mail, Globe, DollarSign, AtSign, Lock, Hash } from "lucide-react";
import React from "react";
import InputGroup from "./index";
import { InputGroupAddon, InputGroupInput } from "./index";

const meta: Meta<typeof InputGroup> = {
  title: "Data Entry/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    variant: { control: "select", options: ["outline", "filled"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Playground: Story = {
  args: { size: "md", variant: "outline", color: "primary" },
  render: (args) => (
    <div className="max-w-xs">
      <InputGroup {...args}>
        <InputGroupAddon>https://</InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-sm">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-text-secondary mb-1">outline</p>
            <InputGroup variant="outline">
              <InputGroupAddon>https://</InputGroupAddon>
              <InputGroupInput placeholder="example.com" />
            </InputGroup>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">filled</p>
            <InputGroup variant="filled">
              <InputGroupAddon>https://</InputGroupAddon>
              <InputGroupInput placeholder="example.com" />
            </InputGroup>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent"] as const).map((c) => (
            <InputGroup key={c} color={c}>
              <InputGroupAddon>@</InputGroupAddon>
              <InputGroupInput placeholder={`${c} color`} />
            </InputGroup>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <InputGroup key={s} size={s}>
              <InputGroupAddon>$</InputGroupAddon>
              <InputGroupInput placeholder={`Size ${s}`} />
              <InputGroupAddon>USD</InputGroupAddon>
            </InputGroup>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Text Addons
        </h3>
        <div className="space-y-3">
          <InputGroup>
            <InputGroupAddon>https://</InputGroupAddon>
            <InputGroupInput placeholder="example.com" />
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="username" />
            <InputGroupAddon>@gmail.com</InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupInput placeholder="0.00" type="number" />
            <InputGroupAddon>USD</InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>+1</InputGroupAddon>
            <InputGroupInput placeholder="(555) 000-0000" type="tel" />
          </InputGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Icon Addons
        </h3>
        <div className="space-y-3">
          <InputGroup>
            <InputGroupAddon>
              <Search className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <Mail className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Email address" type="email" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <Globe className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Website URL" />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <AtSign className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Username" />
            <InputGroupAddon>
              <Lock className="w-4 h-4" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Mixed Addons
        </h3>
        <div className="space-y-3">
          <InputGroup>
            <InputGroupAddon>
              <DollarSign className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Amount" type="number" />
            <InputGroupAddon>per month</InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <Hash className="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Tag name" />
            <InputGroupAddon>.io</InputGroupAddon>
          </InputGroup>
        </div>
      </section>
    </div>
  ),
};
