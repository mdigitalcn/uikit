import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Select from "./index";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
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
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    warning: { control: "text" },
    info: { control: "text" },
    success: { control: "text" },
    clearable: { control: "boolean" },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    required: { control: "boolean" },
    messagePosition: {
      control: "select",
      options: ["top", "bottom"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const frameworks = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];

const countries = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Germany", value: "de" },
  { label: "France", value: "fr" },
  { label: "Japan", value: "jp" },
  { label: "Australia", value: "au" },
  { label: "Canada", value: "ca" },
  { label: "Brazil", value: "br" },
];

const groupedOptions = [
  { label: "New York", value: "ny", group: "United States" },
  { label: "Los Angeles", value: "la", group: "United States" },
  { label: "Chicago", value: "chi", group: "United States" },
  { label: "London", value: "lon", group: "United Kingdom" },
  { label: "Manchester", value: "man", group: "United Kingdom" },
  { label: "Berlin", value: "ber", group: "Germany" },
  { label: "Munich", value: "mun", group: "Germany" },
];

export const Playground: Story = {
  args: {
    label: "Framework",
    placeholder: "Select a framework",
    options: frameworks,
    variant: "outline",
    size: "md",
    color: "primary",
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <Select variant="outline" label="Outline" placeholder="Select option" options={frameworks} />
          <Select variant="filled" label="Filled" placeholder="Select option" options={frameworks} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <Select size="xs" placeholder="Extra small" options={frameworks} />
          <Select size="sm" placeholder="Small" options={frameworks} />
          <Select size="md" placeholder="Medium" options={frameworks} />
          <Select size="lg" placeholder="Large" options={frameworks} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <Select label="Error" placeholder="Select option" options={frameworks} error="Please select a framework" />
          <Select label="Warning" placeholder="Select option" options={frameworks} warning="This framework is deprecated" />
          <Select label="Success" placeholder="Select option" options={frameworks} success="Great choice!" defaultValue="react" />
          <Select label="Info" placeholder="Select option" options={frameworks} info="We support all major frameworks" />
          <Select label="Helper text" placeholder="Select option" options={frameworks} helperText="Choose the framework for your project" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <Select label="Disabled" placeholder="Select option" options={frameworks} disabled />
          <Select label="Loading" placeholder="Loading options..." options={[]} loading />
          <Select label="Clearable" placeholder="Select option" options={frameworks} clearable defaultValue="react" />
          <Select label="Required" placeholder="Select option" options={frameworks} required />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Grouped Options</h3>
        <Select label="City" placeholder="Select a city" options={groupedOptions} />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success"] as const).map((color) => (
            <Select key={color} color={color} label={color} placeholder={`${color} focus color`} options={frameworks} />
          ))}
        </div>
      </section>
    </div>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <div className="max-w-sm">
      <Select
        label="City"
        placeholder="Select a city"
        options={groupedOptions}
        helperText="Options are grouped by country"
      />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <Select label="Error state" placeholder="Select option" options={frameworks} error="This field is required" />
      <Select label="Warning state" placeholder="Select option" options={frameworks} warning="Consider using React instead" defaultValue="angular" />
      <Select label="Success state" placeholder="Select option" options={frameworks} success="Perfect choice!" defaultValue="react" />
      <Select label="Info state" placeholder="Select option" options={countries} info="Select your country of residence" />
    </div>
  ),
};
