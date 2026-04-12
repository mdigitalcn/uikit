import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import MultiSelect from "./index";

const FRUIT_OPTIONS = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "dragonfruit", label: "Dragon Fruit" },
  { value: "elderberry", label: "Elderberry" },
  { value: "fig", label: "Fig" },
  { value: "grape", label: "Grape" },
  { value: "honeydew", label: "Honeydew" },
];

const GROUPED_OPTIONS = [
  { value: "apple", label: "Apple", group: "Fruits" },
  { value: "banana", label: "Banana", group: "Fruits" },
  { value: "cherry", label: "Cherry", group: "Fruits" },
  { value: "carrot", label: "Carrot", group: "Vegetables" },
  { value: "broccoli", label: "Broccoli", group: "Vegetables" },
  { value: "spinach", label: "Spinach", group: "Vegetables", disabled: true },
  { value: "milk", label: "Milk", group: "Dairy" },
  { value: "cheese", label: "Cheese", group: "Dairy" },
];

const meta: Meta<typeof MultiSelect> = {
  title: "Form/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["outline", "filled"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    clearable: { control: "boolean" },
    fullWidth: { control: "boolean" },
    required: { control: "boolean" },
    placeholder: { control: "text" },
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    warning: { control: "text" },
    success: { control: "text" },
    info: { control: "text" },
    maxChipsVisible: { control: "number" },
    maxSelectedValues: { control: "number" },
    maxDropdownHeight: { control: "number" },
    messagePosition: { control: "select", options: ["top", "bottom"] },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Playground: Story = {
  args: {
    label: "Select fruits",
    placeholder: "Choose options...",
    options: FRUIT_OPTIONS,
    defaultValue: ["apple", "banana"],
    variant: "outline",
    size: "md",
    color: "primary",
    clearable: true,
    fullWidth: true,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <MultiSelect
            label="Outline"
            options={FRUIT_OPTIONS}
            defaultValue={["apple"]}
            variant="outline"
            placeholder="Select options..."
          />
          <MultiSelect
            label="Filled"
            options={FRUIT_OPTIONS}
            defaultValue={["banana"]}
            variant="filled"
            placeholder="Select options..."
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <MultiSelect
              key={size}
              label={`Size: ${size}`}
              options={FRUIT_OPTIONS}
              defaultValue={["apple"]}
              size={size}
              placeholder={`${size} size...`}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <MultiSelect
              key={color}
              label={color}
              options={FRUIT_OPTIONS}
              defaultValue={["apple"]}
              color={color}
              placeholder={`${color}...`}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <MultiSelect
            label="Error state"
            options={FRUIT_OPTIONS}
            defaultValue={["apple"]}
            error="Please select at least 2 items"
          />
          <MultiSelect
            label="Warning state"
            options={FRUIT_OPTIONS}
            defaultValue={["banana"]}
            warning="You are approaching the limit"
          />
          <MultiSelect
            label="Success state"
            options={FRUIT_OPTIONS}
            defaultValue={["cherry", "apple"]}
            success="Selection looks good!"
          />
          <MultiSelect
            label="Info state"
            options={FRUIT_OPTIONS}
            defaultValue={[]}
            info="You can select up to 3 items"
            helperText="Helper text below"
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Grouped Options</h3>
        <MultiSelect
          label="Grouped items"
          options={GROUPED_OPTIONS}
          placeholder="Select items..."
          defaultValue={["apple", "carrot"]}
          clearable
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Max Selection</h3>
        <MultiSelect
          label="Max 2 selections"
          options={FRUIT_OPTIONS}
          defaultValue={["apple", "banana"]}
          maxSelectedValues={2}
          helperText="You can only select up to 2 items"
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <MultiSelect
            label="Loading"
            options={FRUIT_OPTIONS}
            loading
            placeholder="Loading options..."
          />
          <MultiSelect
            label="Disabled"
            options={FRUIT_OPTIONS}
            defaultValue={["apple"]}
            disabled
          />
          <MultiSelect
            label="Clearable with many chips"
            options={FRUIT_OPTIONS}
            defaultValue={["apple", "cherry", "grape", "fig"]}
            clearable
            maxChipsVisible={2}
          />
        </div>
      </section>
    </div>
  ),
};
