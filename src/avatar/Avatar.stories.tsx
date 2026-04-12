import type { Meta, StoryObj } from "@storybook/react";
import { Bell, Shield, Star } from "lucide-react";
import React from "react";

import { Avatar, AvatarGroup } from "./index";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    name: { control: "text" },
    fallback: { control: "text" },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    shape: {
      control: "select",
      options: ["circle", "square"],
    },
    status: {
      control: "select",
      options: ["online", "offline", "away", "busy"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    bordered: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {
  args: {
    name: "John Doe",
    size: "md",
    shape: "circle",
    color: "primary",
    bordered: false,
    disabled: false,
  },
};

const colors = ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const;
const sizes = ["xs", "sm", "md", "lg"] as const;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Types (initials / icon / fallback)</h3>
        <div className="flex items-center gap-4">
          <Avatar name="John Doe" color="primary" />
          <Avatar name="AB" color="secondary" />
          <Avatar icon={<Star />} color="warning" />
          <Avatar icon={<Shield />} color="info" shape="square" />
          <Avatar color="default" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex items-end gap-4">
          {sizes.map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <Avatar size={s} name="AB" color="primary" />
              <span className="text-xs text-text-secondary">{s}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((c) => (
            <Avatar key={c} name={c.slice(0, 2).toUpperCase()} color={c} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Shapes</h3>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Circle" shape="circle" color="primary" size="lg" />
            <span className="text-xs text-text-secondary">circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar name="Square" shape="square" color="accent" size="lg" />
            <span className="text-xs text-text-secondary">square</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Status Indicators</h3>
        <div className="flex gap-6 items-center">
          {(["online", "offline", "away", "busy"] as const).map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <Avatar name={s.slice(0, 2).toUpperCase()} color="primary" status={s} />
              <span className="text-xs text-text-secondary">{s}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Badge</h3>
        <div className="flex gap-6 items-center">
          <Avatar name="JD" badge={3} color="primary" />
          <Avatar name="MK" badge={99} color="secondary" />
          <Avatar name="AL" badge={<Bell className="size-2.5" />} color="accent" size="lg" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Bordered</h3>
        <div className="flex gap-3 items-center p-4 bg-surface rounded-lg">
          {sizes.map((s) => (
            <Avatar key={s} size={s} name="AB" color="primary" bordered />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Disabled</h3>
        <div className="flex gap-4 items-center">
          <Avatar name="JD" color="primary" disabled />
          <Avatar name="AL" color="success" disabled status="online" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Avatar Group</h3>
        <div className="space-y-4">
          <AvatarGroup max={4} bordered>
            <Avatar name="Alice Smith" color="primary" />
            <Avatar name="Bob Jones" color="secondary" />
            <Avatar name="Carol White" color="accent" />
            <Avatar name="Dan Brown" color="success" />
            <Avatar name="Eve Davis" color="warning" />
            <Avatar name="Frank Lee" color="error" />
          </AvatarGroup>

          <AvatarGroup max={3} size="sm" bordered showTotal>
            <Avatar name="Alice Smith" color="primary" />
            <Avatar name="Bob Jones" color="secondary" />
            <Avatar name="Carol White" color="accent" />
            <Avatar name="Dan Brown" color="success" />
            <Avatar name="Eve Davis" color="warning" />
          </AvatarGroup>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Group — All Sizes</h3>
        <div className="space-y-4">
          {sizes.map((size) => (
            <div key={size} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-6">{size}</span>
              <AvatarGroup size={size} max={4} bordered>
                <Avatar name="Alice Smith" color="primary" />
                <Avatar name="Bob Jones" color="secondary" />
                <Avatar name="Carol White" color="accent" />
                <Avatar name="Dan Brown" color="success" />
                <Avatar name="Eve Davis" color="warning" />
              </AvatarGroup>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

export const WithSvgImage: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='64' height='64' rx='32' fill='%236366f1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3EAJ%3C/text%3E%3C/svg%3E"
        alt="Alex Johnson"
        size="lg"
      />
      <Avatar
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='64' height='64' rx='8' fill='%2310b981'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' fill='white' font-size='24' font-family='sans-serif'%3EBJ%3C/text%3E%3C/svg%3E"
        alt="Bob Jones"
        shape="square"
        size="lg"
      />
      <Avatar
        src="invalid-image.jpg"
        alt="Fallback Demo"
        name="Fallback Demo"
        color="warning"
        size="lg"
      />
    </div>
  ),
};
