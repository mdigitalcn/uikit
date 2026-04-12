import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Cascader from "./index";
import type { CascaderOption } from "./types";

const meta: Meta<typeof Cascader> = {
  title: "Data Entry/Cascader",
  component: Cascader,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["outline", "filled"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    placement: {
      control: "select",
      options: ["bottomLeft", "bottomRight", "topLeft", "topRight"],
    },
    expandTrigger: { control: "select", options: ["click", "hover"] },
    multiple: { control: "boolean" },
    clearable: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    fullWidth: { control: "boolean" },
    changeOnSelect: { control: "boolean" },
    showPath: { control: "boolean" },
    required: { control: "boolean" },
    messagePosition: { control: "select", options: ["top", "bottom"] },
  },
};
export default meta;
type Story = StoryObj<typeof Cascader>;

const options: CascaderOption[] = [
  {
    label: "Electronics", value: "electronics",
    children: [
      {
        label: "Phones", value: "phones",
        children: [
          { label: "iPhone", value: "iphone" },
          { label: "Samsung", value: "samsung" },
          { label: "Pixel", value: "pixel" },
        ],
      },
      {
        label: "Laptops", value: "laptops",
        children: [
          { label: "MacBook", value: "macbook" },
          { label: "ThinkPad", value: "thinkpad" },
          { label: "Dell XPS", value: "dell-xps" },
        ],
      },
      {
        label: "Tablets", value: "tablets",
        children: [
          { label: "iPad", value: "ipad" },
          { label: "Surface", value: "surface" },
        ],
      },
    ],
  },
  {
    label: "Clothing", value: "clothing",
    children: [
      {
        label: "Men", value: "men",
        children: [
          { label: "Shirts", value: "shirts" },
          { label: "Pants", value: "pants" },
          { label: "Shoes", value: "shoes" },
        ],
      },
      {
        label: "Women", value: "women",
        children: [
          { label: "Dresses", value: "dresses" },
          { label: "Tops", value: "tops" },
        ],
      },
    ],
  },
  {
    label: "Books", value: "books",
    children: [
      { label: "Fiction", value: "fiction" },
      { label: "Non-Fiction", value: "nonfiction" },
      { label: "Science", value: "science" },
    ],
  },
  {
    label: "Sports", value: "sports",
    children: [
      { label: "Outdoor", value: "outdoor" },
      { label: "Indoor", value: "indoor", disabled: true },
    ],
  },
];

const ControlledDemo = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className="space-y-2">
      <Cascader
        options={options}
        value={value}
        onChange={(v) => setValue(v as string[])}
        label="Controlled Category"
        placeholder="Select..."
        clearable
      />
      <p className="text-xs text-text-secondary">Value: {value.length ? value.join(" / ") : "none"}</p>
    </div>
  );
};

export const Playground: Story = {
  args: {
    options,
    label: "Category",
    placeholder: "Please select",
    variant: "outline",
    size: "md",
    color: "primary",
    clearable: true,
    showPath: true,
    fullWidth: true,
    multiple: false,
    disabled: false,
    loading: false,
    changeOnSelect: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-sm">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Variants
        </h3>
        <div className="space-y-3">
          <Cascader options={options} variant="outline" label="Outline" placeholder="Select..." />
          <Cascader options={options} variant="filled" label="Filled" placeholder="Select..." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <Cascader key={s} options={options} size={s} label={s.toUpperCase()} placeholder="Select..." />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Controlled
        </h3>
        <ControlledDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Multiple Selection
        </h3>
        <Cascader
          options={options}
          multiple
          label="Multiple categories"
          placeholder="Select multiple..."
          clearable
          maxTagCount={2}
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Change on Select (intermediate nodes)
        </h3>
        <Cascader
          options={options}
          changeOnSelect
          label="Change on select"
          placeholder="Select..."
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Expand on Hover
        </h3>
        <Cascader
          options={options}
          expandTrigger="hover"
          label="Hover to expand"
          placeholder="Hover to expand..."
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Custom Path Separator
        </h3>
        <Cascader
          options={options}
          pathSeparator=" > "
          label="Custom separator"
          placeholder="Select..."
          defaultValue={["electronics", "phones", "iphone"]}
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Validation States
        </h3>
        <div className="space-y-3">
          <Cascader options={options} error="Please select a category" label="Error" placeholder="Select..." />
          <Cascader options={options} warning="Are you sure about this?" label="Warning" placeholder="Select..." />
          <Cascader
            options={options}
            success="Valid selection"
            defaultValue={["electronics", "phones", "iphone"]}
            label="Success"
          />
          <Cascader options={options} helperText="Select a category to continue" label="With helper" placeholder="Select..." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="space-y-3">
          <Cascader options={options} loading label="Loading" placeholder="Loading data..." />
          <Cascader options={options} disabled label="Disabled" placeholder="Not available" />
          <Cascader
            options={options}
            disabled
            defaultValue={["clothing", "men", "shirts"]}
            label="Disabled with value"
          />
        </div>
      </section>
    </div>
  ),
};
