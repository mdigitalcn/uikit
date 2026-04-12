import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Calendar from "./index";

const meta: Meta<typeof Calendar> = {
  title: "Data Entry/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    weekStartsOn: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5, 6],
    },
    showOutsideDays: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Calendar>;

const today = new Date();

export const Playground: Story = {
  args: {
    color: "primary",
    size: "md",
    showOutsideDays: true,
    weekStartsOn: 0,
    defaultValue: today,
  },
};

const ControlledDemo = () => {
  const [value, setValue] = useState<Date | null>(today);
  return (
    <div className="space-y-3">
      <Calendar value={value} onChange={setValue} color="primary" />
      <p className="text-xs text-text-secondary">
        Selected: {value ? value.toLocaleDateString() : "none"}
      </p>
    </div>
  );
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes
        </h3>
        <div className="flex flex-wrap gap-6 items-start">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s}>
              <p className="text-xs text-text-secondary mb-2">{s}</p>
              <Calendar size={s} defaultValue={today} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-6 items-start">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((c) => (
            <div key={c}>
              <p className="text-xs text-text-secondary mb-2">{c}</p>
              <Calendar color={c} defaultValue={today} size="sm" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Controlled Selection
        </h3>
        <ControlledDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          With Min / Max Constraints
        </h3>
        <div className="flex flex-wrap gap-6 items-start">
          <div>
            <p className="text-xs text-text-secondary mb-2">min = today</p>
            <Calendar
              minDate={today}
              maxDate={new Date(today.getFullYear(), today.getMonth() + 2, today.getDate())}
              color="primary"
            />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">max = today</p>
            <Calendar
              maxDate={today}
              color="accent"
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Custom Disabled Dates (weekends)
        </h3>
        <Calendar
          disabledDates={(date) => date.getDay() === 0 || date.getDay() === 6}
          color="primary"
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Hide Outside Days
        </h3>
        <Calendar showOutsideDays={false} defaultValue={today} color="secondary" />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Week Starts on Monday
        </h3>
        <Calendar weekStartsOn={1} defaultValue={today} color="primary" />
      </section>
    </div>
  ),
};
