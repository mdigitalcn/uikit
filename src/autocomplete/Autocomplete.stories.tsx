import type { Meta, StoryObj } from "@storybook/react";
import { Search, User } from "lucide-react";
import React from "react";
import Autocomplete from "./index";

const COUNTRY_OPTIONS = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "br", label: "Brazil" },
  { value: "in", label: "India" },
  { value: "mx", label: "Mexico" },
];

const USER_OPTIONS = [
  { value: "alice", label: "Alice Johnson", description: "Product Designer" },
  { value: "bob", label: "Bob Williams", description: "Engineer" },
  { value: "charlie", label: "Charlie Brown", description: "Marketing" },
  { value: "diana", label: "Diana Prince", description: "Sales" },
  { value: "evan", label: "Evan Turner", description: "Support", disabled: true },
];

const meta: Meta<typeof Autocomplete> = {
  title: "Form/Autocomplete",
  component: Autocomplete,
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
    emptyMessage: { control: "text" },
    limit: { control: "number" },
    messagePosition: { control: "select", options: ["top", "bottom"] },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Playground: Story = {
  args: {
    label: "Select country",
    placeholder: "Search countries...",
    options: COUNTRY_OPTIONS,
    defaultValue: "",
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
          <Autocomplete
            label="Outline"
            options={COUNTRY_OPTIONS}
            variant="outline"
            placeholder="Search countries..."
          />
          <Autocomplete
            label="Filled"
            options={COUNTRY_OPTIONS}
            variant="filled"
            placeholder="Search countries..."
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <Autocomplete
              key={size}
              label={`Size: ${size}`}
              options={COUNTRY_OPTIONS}
              size={size}
              placeholder={`${size} autocomplete...`}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <Autocomplete
              key={color}
              label={color}
              options={COUNTRY_OPTIONS}
              color={color}
              placeholder={`${color}...`}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <Autocomplete
            label="Error state"
            options={COUNTRY_OPTIONS}
            error="Please select a valid country"
          />
          <Autocomplete
            label="Warning state"
            options={COUNTRY_OPTIONS}
            warning="This country has limited support"
          />
          <Autocomplete
            label="Success state"
            options={COUNTRY_OPTIONS}
            defaultValue="United States"
            success="Country verified"
          />
          <Autocomplete
            label="Info state"
            options={COUNTRY_OPTIONS}
            info="Start typing to search"
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Custom Render</h3>
        <Autocomplete
          label="Assign to user"
          options={USER_OPTIONS}
          placeholder="Search users..."
          renderOption={(option, { highlighted }) => (
            <div className={`flex items-center gap-2 ${highlighted ? "text-slot" : ""}`}>
              <User className="w-4 h-4 shrink-0" />
              <div>
                <div className="font-medium">{option.label}</div>
              </div>
            </div>
          )}
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">String Options</h3>
        <Autocomplete
          label="Framework"
          options={["React", "Vue", "Angular", "Svelte", "Solid", "Qwik"]}
          placeholder="Search frameworks..."
          clearable
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <Autocomplete
            label="Loading"
            options={COUNTRY_OPTIONS}
            loading
            placeholder="Loading..."
          />
          <Autocomplete
            label="Disabled"
            options={COUNTRY_OPTIONS}
            defaultValue="Canada"
            disabled
          />
          <Autocomplete
            label="With clear button"
            options={COUNTRY_OPTIONS}
            defaultValue="United States"
            clearable
          />
        </div>
      </section>
    </div>
  ),
};
