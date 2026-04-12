import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { DatePicker, RangePicker, TimePicker } from "./index";

const meta: Meta<typeof DatePicker> = {
  title: "Form/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["outline", "filled"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    disabled: { control: "boolean" },
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
    dateFormat: { control: "text" },
    messagePosition: { control: "select", options: ["top", "bottom"] },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Playground: Story = {
  args: {
    label: "Select date",
    placeholder: "MM/dd/yyyy",
    variant: "outline",
    size: "md",
    color: "primary",
    clearable: true,
    fullWidth: true,
    dateFormat: "MM/dd/yyyy",
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-md">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <DatePicker label="Outline" variant="outline" placeholder="MM/dd/yyyy" clearable />
          <DatePicker label="Filled" variant="filled" placeholder="MM/dd/yyyy" clearable />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <DatePicker key={size} label={`Size: ${size}`} size={size} placeholder="MM/dd/yyyy" />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <DatePicker key={color} label={color} color={color} placeholder="MM/dd/yyyy" />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <DatePicker
            label="Error state"
            error="Please select a valid date"
          />
          <DatePicker
            label="Warning state"
            warning="Selected date is in the past"
          />
          <DatePicker
            label="Success state"
            defaultValue={new Date("2025-06-15")}
            success="Date confirmed"
          />
          <DatePicker
            label="Info state"
            info="Select a date within the next 30 days"
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Date Constraints</h3>
        <div className="space-y-3">
          <DatePicker
            label="Min date (today)"
            minDate={new Date()}
            helperText="Cannot select past dates"
            clearable
          />
          <DatePicker
            label="Max date (today)"
            maxDate={new Date()}
            helperText="Cannot select future dates"
            clearable
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Date Formats</h3>
        <div className="space-y-3">
          <DatePicker
            label="MM/dd/yyyy"
            dateFormat="MM/dd/yyyy"
            defaultValue={new Date("2025-06-15")}
          />
          <DatePicker
            label="dd/MM/yyyy"
            dateFormat="dd/MM/yyyy"
            defaultValue={new Date("2025-06-15")}
          />
          <DatePicker
            label="yyyy-MM-dd"
            dateFormat="yyyy-MM-dd"
            defaultValue={new Date("2025-06-15")}
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Range Picker</h3>
        <div className="space-y-3">
          <RangePicker
            label="Date range"
            placeholder="Select range..."
            clearable
          />
          <RangePicker
            label="Filled range picker"
            variant="filled"
            placeholder="Select range..."
            clearable
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Time Picker</h3>
        <div className="space-y-3">
          <TimePicker
            label="Select time"
            placeholder="HH:mm"
            clearable
          />
          <TimePicker
            label="30-minute intervals"
            placeholder="HH:mm"
            timeIntervals={30}
            clearable
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-3">
          <DatePicker
            label="Disabled"
            defaultValue={new Date("2025-06-15")}
            disabled
          />
          <DatePicker
            label="Required"
            required
            placeholder="Required field"
          />
        </div>
      </section>
    </div>
  ),
};

export const RangePickerStory: Story = {
  name: "Range Picker",
  render: () => (
    <div className="space-y-4 max-w-md">
      <RangePicker label="Default range" clearable placeholder="Select range..." />
      <RangePicker
        label="With pre-selected range"
        defaultStartDate={new Date("2025-06-01")}
        defaultEndDate={new Date("2025-06-30")}
        clearable
      />
      <RangePicker label="Filled variant" variant="filled" clearable placeholder="Select range..." />
      <RangePicker label="Error state" error="End date must be after start date" />
      <RangePicker label="Disabled" disabled defaultStartDate={new Date("2025-06-01")} defaultEndDate={new Date("2025-06-30")} />
    </div>
  ),
};

export const TimePickerStory: Story = {
  name: "Time Picker",
  render: () => (
    <div className="space-y-4 max-w-md">
      <TimePicker label="Default time" clearable placeholder="HH:mm" />
      <TimePicker label="15-minute intervals" timeIntervals={15} clearable placeholder="HH:mm" />
      <TimePicker label="30-minute intervals" timeIntervals={30} clearable placeholder="HH:mm" />
      <TimePicker label="Filled variant" variant="filled" clearable placeholder="HH:mm" />
      <TimePicker label="Error state" error="Please select a valid time" />
      <TimePicker label="Disabled" disabled defaultValue={new Date()} />
    </div>
  ),
};
