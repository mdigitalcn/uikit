import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import NumberInput from "./index";

const meta: Meta<typeof NumberInput> = {
  title: "Form/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "filled"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    controlsPosition: {
      control: "select",
      options: ["right", "sides"],
    },
    messagePosition: {
      control: "select",
      options: ["top", "bottom"],
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    warning: { control: "text" },
    info: { control: "text" },
    success: { control: "text" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    precision: { control: "number" },
    controls: { control: "boolean" },
    clampOnBlur: { control: "boolean" },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
    loading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Playground: Story = {
  args: {
    label: "Quantity",
    placeholder: "0",
    variant: "outline",
    size: "md",
    color: "primary",
    controls: true,
    defaultValue: 1,
    min: 0,
    max: 100,
    step: 1,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <NumberInput variant="outline" label="Outline" placeholder="0" controls />
          <NumberInput variant="filled" label="Filled" placeholder="0" controls />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <NumberInput size="xs" placeholder="xs" controls />
          <NumberInput size="sm" placeholder="sm" controls />
          <NumberInput size="md" placeholder="md" controls />
          <NumberInput size="lg" placeholder="lg" controls />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Controls Position</h3>
        <div className="space-y-3">
          <NumberInput label="Controls on right (default)" controls controlsPosition="right" defaultValue={5} />
          <NumberInput label="Controls on sides" controls controlsPosition="sides" defaultValue={5} />
          <NumberInput label="No controls" defaultValue={10} placeholder="No stepper buttons" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Min / Max / Step</h3>
        <div className="space-y-3">
          <NumberInput label="Range 0-10, step 1" min={0} max={10} step={1} defaultValue={5} controls helperText="Range: 0–10" />
          <NumberInput label="Range 0-100, step 5" min={0} max={100} step={5} defaultValue={50} controls helperText="Increments of 5" />
          <NumberInput label="Decimal step (0.1)" min={0} max={1} step={0.1} precision={1} defaultValue={0.5} controls helperText="Range: 0.0–1.0" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <NumberInput label="Error" placeholder="0" error="Value must be greater than 0" />
          <NumberInput label="Warning" placeholder="0" warning="High values may cause performance issues" defaultValue={9999} />
          <NumberInput label="Success" placeholder="0" success="Valid quantity" defaultValue={5} />
          <NumberInput label="Info" placeholder="0" info="Enter quantity in units" />
          <NumberInput label="Helper text" placeholder="0" helperText="Must be between 1 and 99" min={1} max={99} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <NumberInput label="Disabled" disabled defaultValue={5} controls />
          <NumberInput label="Read only" readOnly defaultValue={42} />
          <NumberInput label="Loading" loading controls />
          <NumberInput label="Required" required placeholder="Required" controls />
          <NumberInput label="Clamp on blur" min={0} max={10} clampOnBlur defaultValue={5} controls helperText="Value clamps to range on blur" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success"] as const).map((color) => (
            <NumberInput key={color} color={color} label={color} defaultValue={5} controls />
          ))}
        </div>
      </section>
    </div>
  ),
};

export const PrecisionDecimals: Story = {
  render: () => (
    <div className="space-y-3 max-w-sm">
      <NumberInput label="Price" placeholder="0.00" step={0.01} precision={2} min={0} controls helperText="USD" />
      <NumberInput label="Percentage" placeholder="0.0" step={0.1} precision={1} min={0} max={100} controls helperText="%" />
      <NumberInput label="Rating" placeholder="0.0" step={0.5} precision={1} min={0} max={5} controls helperText="Out of 5.0" />
    </div>
  ),
};
