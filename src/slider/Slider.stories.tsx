import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Slider from "./index";

const meta: Meta<typeof Slider> = {
  title: "Form/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "solid", "soft"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
    range: { control: "boolean" },
    showTooltip: { control: "boolean" },
    footer: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Playground: Story = {
  args: {
    defaultValue: 40,
    min: 0,
    max: 100,
    step: 1,
    variant: "default",
    color: "primary",
    size: "md",
    orientation: "horizontal",
    showTooltip: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-6 max-w-sm">
          <div>
            <p className="text-xs text-text-secondary mb-2">Default</p>
            <Slider variant="default" defaultValue={60} />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Solid</p>
            <Slider variant="solid" defaultValue={60} />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Soft</p>
            <Slider variant="soft" defaultValue={60} />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-4 max-w-sm">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <div key={color}>
              <p className="text-xs text-text-secondary mb-2">{color}</p>
              <Slider color={color} defaultValue={55} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-4 max-w-sm">
          <div>
            <p className="text-xs text-text-secondary mb-2">xs</p>
            <Slider size="xs" defaultValue={50} />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">sm</p>
            <Slider size="sm" defaultValue={50} />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">md</p>
            <Slider size="md" defaultValue={50} />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">lg</p>
            <Slider size="lg" defaultValue={50} />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Range Slider</h3>
        <div className="space-y-4 max-w-sm">
          <Slider range defaultValue={[20, 70]} />
          <Slider range defaultValue={[10, 90]} color="accent" showTooltip />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Tooltip</h3>
        <div className="space-y-4 max-w-sm">
          <Slider showTooltip defaultValue={65} />
          <Slider showTooltip range defaultValue={[30, 70]} color="secondary" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Marks</h3>
        <div className="space-y-6 max-w-sm">
          <Slider
            defaultValue={50}
            marks={[
              { value: 0, label: "0" },
              { value: 25, label: "25" },
              { value: 50, label: "50" },
              { value: 75, label: "75" },
              { value: 100, label: "100" },
            ]}
          />
          <Slider
            defaultValue={2}
            min={1}
            max={5}
            step={1}
            color="success"
            marks={[
              { value: 1, label: "Poor" },
              { value: 2, label: "Fair" },
              { value: 3, label: "Good" },
              { value: 4, label: "Great" },
              { value: 5, label: "Excellent" },
            ]}
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Footer</h3>
        <div className="max-w-sm">
          <Slider defaultValue={70} footer={true} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Vertical Orientation</h3>
        <div className="flex gap-8" style={{ height: 200 }}>
          <Slider orientation="vertical" defaultValue={60} color="primary" />
          <Slider orientation="vertical" defaultValue={40} color="secondary" />
          <Slider orientation="vertical" defaultValue={80} color="accent" variant="solid" />
          <Slider orientation="vertical" range defaultValue={[20, 70]} color="success" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Disabled</h3>
        <div className="space-y-4 max-w-sm">
          <Slider disabled defaultValue={40} />
          <Slider disabled range defaultValue={[20, 60]} />
        </div>
      </section>
    </div>
  ),
};

export const RangeSlider: Story = {
  render: () => {
    const [value, setValue] = React.useState([20, 80]);
    return (
      <div className="space-y-4 max-w-sm">
        <p className="text-sm text-text-secondary">
          Price range: <span className="font-medium text-text-primary">${value[0]} - ${value[1]}</span>
        </p>
        <Slider
          range
          value={value}
          onChange={(v) => setValue(v as number[])}
          min={0}
          max={500}
          step={10}
          showTooltip
          color="primary"
        />
        <div className="flex justify-between text-xs text-text-secondary">
          <span>$0</span>
          <span>$500</span>
        </div>
      </div>
    );
  },
};
