import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Progress from "./index";

const meta: Meta<typeof Progress> = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["line","circle","step"] },
    orientation: { control: "select", options: ["horizontal","vertical"] },
    color: { control: "select", options: ["default","primary","secondary","accent","success","error","warning","info"] },
    size: { control: "select", options: ["xs","sm","md","lg"] },
    value: { control: { type: "range", min: 0, max: 100 } },
    striped: { control: "boolean" },
    animated: { control: "boolean" },
    showProgress: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Playground: Story = {
  args: { value: 65, type: "line", color: "primary", size: "md", showProgress: true },
};

const colors = ["primary","secondary","accent","success","error","warning","info"] as const;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Line — Colors</h3>
        <div className="space-y-3">
          {colors.map(c => <Progress key={c} type="line" value={65} color={c} showProgress label={c} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Line — Sizes</h3>
        <div className="space-y-4">
          {(["xs","sm","md","lg"] as const).map(s => <Progress key={s} type="line" size={s} value={60} color="primary" showProgress label={s} />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Line — Striped & Animated</h3>
        <div className="space-y-3">
          <Progress type="line" value={75} striped color="primary" showProgress label="Striped" />
          <Progress type="line" value={50} striped animated color="info" showProgress label="Striped + animated" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Circle Progress</h3>
        <div className="flex flex-wrap gap-6">
          {([0,25,50,75,100] as const).map(v => <Progress key={v} type="circle" value={v} color="primary" showProgress />)}
          {colors.slice(0,4).map(c => <Progress key={c} type="circle" value={70} color={c} showProgress />)}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Step Progress</h3>
        <div className="space-y-4">
          {[1,2,3,4,5].map(step => (
            <div key={step}><p className="text-xs text-text-secondary mb-1">Step {step}/5</p><Progress type="step" totalSteps={5} value={step * 20} color="primary" showProgress /></div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Values</h3>
        <div className="space-y-2">
          <Progress value={0} color="error" label="0%" showProgress />
          <Progress value={33} color="warning" label="33%" showProgress />
          <Progress value={66} color="info" label="66%" showProgress />
          <Progress value={100} color="success" label="100%" showProgress />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Circle — Custom Size & Stroke</h3>
        <div className="flex flex-wrap gap-6 items-center">
          <Progress type="circle" value={75} color="primary" showProgress circleSize={60} strokeWidth={4} />
          <Progress type="circle" value={75} color="primary" showProgress circleSize={80} strokeWidth={6} />
          <Progress type="circle" value={75} color="primary" showProgress circleSize={120} strokeWidth={8} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Circle — With Footer</h3>
        <div className="flex flex-wrap gap-6">
          <Progress type="circle" value={78} color="success" showProgress footer="Upload" />
          <Progress type="circle" value={45} color="warning" showProgress footer="Processing" />
          <Progress type="circle" value={100} color="success" showProgress footer={true} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Vertical Line</h3>
        <div className="flex gap-6 h-32">
          {colors.slice(0, 4).map(c => (
            <Progress key={c} type="line" orientation="vertical" value={65} color={c} showProgress />
          ))}
        </div>
      </section>
    </div>
  ),
};
