import type { Meta, StoryObj } from "@storybook/react";
import { Bell, LogOut, Settings, User } from "lucide-react";
import React from "react";
import Button from "../button";
import Input from "../input";
import { Popover, PopoverContent, PopoverTrigger } from "./index";

const meta: Meta = {
  title: "Data Display/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "solid", "soft"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj;

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
  render: () => (
    <div className="p-16 flex justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p className="text-sm text-text-secondary">
            Popover content renders in a portal, anchored to the trigger.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-16 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="flex flex-wrap gap-3">
          {(["default", "solid", "soft"] as const).map((v) => (
            <Popover key={v}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="capitalize">
                  {v}
                </Button>
              </PopoverTrigger>
              <PopoverContent variant={v} color="primary" size="sm">
                <p className="font-medium mb-1 capitalize">{v} variant</p>
                <p className="text-xs opacity-80">This is a {v} popover using primary color.</p>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-4">
          {(["default", "solid", "soft"] as const).map((v) => (
            <div key={v}>
              <p className="text-xs text-text-secondary mb-2 capitalize">{v}</p>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <Popover key={c}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        {c}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent variant={v} color={c} size="sm">
                      <p className="text-sm">{v} · {c}</p>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="flex flex-wrap gap-3">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <Popover key={s}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  Size {s}
                </Button>
              </PopoverTrigger>
              <PopoverContent size={s}>
                <p>Size {s} content. Padding and font size scale with the size prop.</p>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Placement</h3>
        <div className="flex flex-wrap gap-3">
          {(["top", "right", "bottom", "left"] as const).map((side) => (
            <Popover key={side}>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  {side}
                </Button>
              </PopoverTrigger>
              <PopoverContent side={side} size="sm">
                <p className="text-sm">Opens {side}</p>
              </PopoverContent>
            </Popover>
          ))}
          {(["start", "center", "end"] as const).map((align) => (
            <Popover key={align}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm">
                  align: {align}
                </Button>
              </PopoverTrigger>
              <PopoverContent align={align} size="sm">
                <p className="text-sm">Aligned {align}</p>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Rich Content — Form</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button>
              <Settings className="w-4 h-4 mr-2" />
              Profile Settings
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <h4 className="font-semibold text-text-primary mb-3">Update Profile</h4>
            <div className="space-y-3">
              <Input label="Display Name" placeholder="John Doe" size="sm" />
              <Input label="Email" placeholder="john@example.com" size="sm" type="email" />
              <Button fullWidth size="sm">Save Changes</Button>
            </div>
          </PopoverContent>
        </Popover>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Rich Content — Menu</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Account
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-52 p-2" size="sm">
            <div className="px-2 py-1.5 mb-1">
              <p className="font-medium text-text-primary text-sm">John Doe</p>
              <p className="text-xs text-text-secondary">john@example.com</p>
            </div>
            <div className="h-px bg-border my-1" />
            {[
              { icon: <User className="w-3.5 h-3.5" />, label: "Profile" },
              { icon: <Bell className="w-3.5 h-3.5" />, label: "Notifications" },
              { icon: <Settings className="w-3.5 h-3.5" />, label: "Settings" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                className="w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-surface text-text-primary transition-colors"
              >
                {icon}
                {label}
              </button>
            ))}
            <div className="h-px bg-border my-1" />
            <button className="w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm hover:bg-surface text-error transition-colors">
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </PopoverContent>
        </Popover>
      </section>
    </div>
  ),
};
