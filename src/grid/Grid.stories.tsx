import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Grid from "./index";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "select", options: [1, 2, 3, 4, 5, 6] },
    gap: { control: "select", options: ["xs", "sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Grid>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-surface border border-border rounded-lg p-4 text-center text-sm text-text-secondary">
    {children}
  </div>
);

export const Playground: Story = {
  args: { columns: 3, gap: "md" },
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <Box key={n}>Item {n}</Box>
      ))}
    </Grid>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-4xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Columns
        </h3>
        <div className="space-y-6">
          {([1, 2, 3, 4, 6] as const).map((cols) => (
            <div key={cols}>
              <p className="text-xs text-text-secondary mb-2">{cols} column{cols !== 1 ? "s" : ""}</p>
              <Grid columns={cols} gap="sm">
                {Array.from({ length: cols }, (_, i) => (
                  <Box key={i}>Col {i + 1}</Box>
                ))}
              </Grid>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Gap Sizes
        </h3>
        <div className="space-y-6">
          {(["xs", "sm", "md", "lg"] as const).map((gap) => (
            <div key={gap}>
              <p className="text-xs text-text-secondary mb-2">gap: {gap}</p>
              <Grid columns={4} gap={gap}>
                {[1, 2, 3, 4].map((n) => (
                  <Box key={n}>{n}</Box>
                ))}
              </Grid>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Responsive Layouts
        </h3>
        <div className="space-y-6">
          <div>
            <p className="text-xs text-text-secondary mb-2">3 columns (responsive — stacks on mobile)</p>
            <Grid columns={3} gap="md">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <Box key={n}>
                  <p className="font-medium text-text-primary">Card {n}</p>
                  <p className="text-xs mt-1">Responsive grid cell</p>
                </Box>
              ))}
            </Grid>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">4 columns grid</p>
            <Grid columns={4} gap="sm">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <Box key={n}>{n}</Box>
              ))}
            </Grid>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Mixed Content
        </h3>
        <Grid columns={3} gap="md">
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Primary card</p>
            <p className="text-xs text-text-secondary mt-1">Highlighted content area</p>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Standard card</p>
            <p className="text-xs text-text-secondary mt-1">Default background</p>
          </div>
          <div className="bg-success/10 border border-success/30 rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Success card</p>
            <p className="text-xs text-text-secondary mt-1">Status-colored area</p>
          </div>
          <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Warning card</p>
            <p className="text-xs text-text-secondary mt-1">Attention required</p>
          </div>
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Accent card</p>
            <p className="text-xs text-text-secondary mt-1">Accent color</p>
          </div>
          <div className="bg-info/10 border border-info/30 rounded-lg p-4 text-sm text-text-primary">
            <p className="font-semibold">Info card</p>
            <p className="text-xs text-text-secondary mt-1">Informational</p>
          </div>
        </Grid>
      </section>
    </div>
  ),
};
