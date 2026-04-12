import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Kbd from "./index";

const meta: Meta<typeof Kbd> = {
  title: "General/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["solid", "outline", "soft"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Kbd>;

export const Playground: Story = {
  args: { children: "K", variant: "outline", size: "sm", color: "default" },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="flex flex-wrap gap-4">
          {(["solid", "outline", "soft"] as const).map((v) => (
            <div key={v} className="flex flex-col items-center gap-2">
              <Kbd variant={v}>K</Kbd>
              <span className="text-xs text-text-secondary">{v}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-4">
          {(["default", "primary", "secondary", "accent", "success", "warning", "info"] as const).map(
            (c) => (
              <div key={c} className="flex flex-col items-center gap-2">
                <Kbd color={c}>K</Kbd>
                <span className="text-xs text-text-secondary">{c}</span>
              </div>
            ),
          )}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex items-center gap-4">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <Kbd size={s}>K</Kbd>
              <span className="text-xs text-text-secondary">{s}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Common Keys
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Ctrl",
            "Alt",
            "Shift",
            "Enter",
            "Esc",
            "Tab",
            "Space",
            "Backspace",
            "Delete",
            "Home",
            "End",
            "PgUp",
            "PgDn",
          ].map((k) => (
            <Kbd key={k}>{k}</Kbd>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Keyboard Combinations
        </h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>K</Kbd>
            <span className="text-xs text-text-secondary ml-2">Search</span>
          </div>
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>Shift</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>P</Kbd>
            <span className="text-xs text-text-secondary ml-2">Command palette</span>
          </div>
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>Z</Kbd>
            <span className="text-xs text-text-secondary ml-2">Undo</span>
          </div>
          <div className="flex items-center gap-1">
            <Kbd>Ctrl</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>Shift</Kbd>
            <span className="text-text-secondary text-xs">+</span>
            <Kbd>Z</Kbd>
            <span className="text-xs text-text-secondary ml-2">Redo</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Inline in Text
        </h3>
        <div className="space-y-2 text-sm text-text-secondary max-w-md">
          <p>
            Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to open the search dialog.
          </p>
          <p>
            Use <Kbd>Up</Kbd> and <Kbd>Down</Kbd> to navigate, <Kbd>Enter</Kbd> to confirm.
          </p>
          <p>
            Press <Kbd>Esc</Kbd> to dismiss or <Kbd>Tab</Kbd> to move to the next field.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Shortcut Reference
        </h3>
        <div className="border border-border rounded-lg divide-y divide-border max-w-sm">
          {[
            { keys: ["Ctrl", "N"], desc: "New document" },
            { keys: ["Ctrl", "O"], desc: "Open file" },
            { keys: ["Ctrl", "S"], desc: "Save" },
            { keys: ["Ctrl", "Shift", "S"], desc: "Save as" },
            { keys: ["Ctrl", "Z"], desc: "Undo" },
            { keys: ["Ctrl", "Shift", "Z"], desc: "Redo" },
            { keys: ["Ctrl", "F"], desc: "Find" },
          ].map(({ keys, desc }) => (
            <div key={desc} className="flex items-center justify-between px-4 py-2">
              <span className="text-sm text-text-secondary">{desc}</span>
              <div className="flex items-center gap-1">
                {keys.map((k, i) => (
                  <Kbd key={i} size="xs">
                    {k}
                  </Kbd>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
