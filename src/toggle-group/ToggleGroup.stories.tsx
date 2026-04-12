import type { Meta, StoryObj } from "@storybook/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Columns,
  Grid3X3,
  Italic,
  LayoutGrid,
  List,
  Rows,
  Underline,
} from "lucide-react";
import React, { useState } from "react";
import ToggleGroup from "./index";
import type { ToggleGroupOption } from "./types";

const meta: Meta<typeof ToggleGroup> = {
  title: "Data Entry/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "solid", "soft"] },
    color: { control: "select", options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    multiple: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    centered: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof ToggleGroup>;

const alignOptions: ToggleGroupOption[] = [
  { label: "Left", value: "left", icon: <AlignLeft size={14} /> },
  { label: "Center", value: "center", icon: <AlignCenter size={14} /> },
  { label: "Right", value: "right", icon: <AlignRight size={14} /> },
  { label: "Justify", value: "justify", icon: <AlignJustify size={14} /> },
];

const formatOptions: ToggleGroupOption[] = [
  { label: "Bold", value: "bold", icon: <Bold size={14} /> },
  { label: "Italic", value: "italic", icon: <Italic size={14} /> },
  { label: "Underline", value: "underline", icon: <Underline size={14} /> },
];

const viewOptions: ToggleGroupOption[] = [
  { label: "List", value: "list", icon: <List size={14} /> },
  { label: "Grid", value: "grid", icon: <Grid3X3 size={14} /> },
  { label: "Columns", value: "columns", icon: <Columns size={14} /> },
];

const layoutOptions: ToggleGroupOption[] = [
  { label: "List", value: "list", icon: <Rows size={14} /> },
  { label: "Grid", value: "grid", icon: <LayoutGrid size={14} /> },
];

const textOnlyOptions: ToggleGroupOption[] = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Yearly", value: "yearly" },
];

const withDisabled: ToggleGroupOption[] = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c", disabled: true },
  { label: "Option D", value: "d", disabled: true },
];

export const Playground: Story = {
  args: {
    options: alignOptions,
    defaultValue: "left",
    variant: "default",
    color: "primary",
    size: "md",
    orientation: "horizontal",
    multiple: false,
    disabled: false,
  },
};

export const Showcase: Story = {
  render: () => {
    const [multiValue, setMultiValue] = useState<string | string[]>(["bold"]);
    const [singleValue, setSingleValue] = useState<string | string[]>("weekly");

    return (
      <div className="space-y-10 p-6 max-w-3xl">
        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
          <div className="space-y-4">
            {(["default", "solid", "soft"] as const).map((variant) => (
              <div key={variant} className="flex items-center gap-4">
                <span className="text-xs text-text-secondary w-16 capitalize">{variant}</span>
                <ToggleGroup options={alignOptions} defaultValue="left" variant={variant} color="primary" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
          <div className="space-y-4">
            {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
              <div key={color} className="flex items-center gap-4">
                <span className="text-xs text-text-secondary w-20 capitalize">{color}</span>
                <ToggleGroup options={layoutOptions} defaultValue="list" color={color} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
          <div className="space-y-4">
            {(["xs", "sm", "md", "lg"] as const).map((size) => (
              <div key={size} className="flex items-center gap-4">
                <span className="text-xs text-text-secondary w-8 uppercase">{size}</span>
                <ToggleGroup options={alignOptions} defaultValue="left" size={size} color="primary" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Multiple Selection</h3>
          <div className="space-y-3">
            <ToggleGroup
              options={formatOptions}
              multiple
              value={multiValue}
              onChange={setMultiValue}
              color="primary"
            />
            <p className="text-xs text-text-secondary">
              Selected: {Array.isArray(multiValue) ? multiValue.join(", ") || "none" : multiValue}
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Text Only</h3>
          <ToggleGroup
            options={textOnlyOptions}
            value={singleValue}
            onChange={setSingleValue}
            color="primary"
          />
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Vertical Orientation</h3>
          <ToggleGroup
            options={viewOptions}
            defaultValue="list"
            orientation="vertical"
            color="primary"
          />
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Full Width</h3>
          <ToggleGroup
            options={textOnlyOptions}
            defaultValue="daily"
            fullWidth
            color="primary"
          />
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-text-secondary mb-2">Disabled (entire group)</p>
              <ToggleGroup options={alignOptions} defaultValue="left" disabled color="primary" />
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-2">Partially disabled options</p>
              <ToggleGroup options={withDisabled} defaultValue="a" color="primary" />
            </div>
          </div>
        </section>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>(["bold", "italic"]);
    return (
      <div className="p-4 space-y-3">
        <ToggleGroup
          options={formatOptions}
          multiple
          value={value}
          onChange={setValue}
          color="primary"
          aria-label="Text formatting"
        />
        <p className="text-xs text-text-secondary">
          Active: {Array.isArray(value) ? value.join(", ") || "none" : value}
        </p>
      </div>
    );
  },
};

export const VerticalOrientation: Story = {
  args: {
    options: viewOptions,
    defaultValue: "list",
    orientation: "vertical",
    color: "primary",
    variant: "default",
  },
};

export const Disabled: Story = {
  args: {
    options: alignOptions,
    defaultValue: "left",
    disabled: true,
    color: "primary",
  },
};
