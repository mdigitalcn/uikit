import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import QRCode from "./index";

const meta: Meta<typeof QRCode> = {
  title: "Data Display/QRCode",
  component: QRCode,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "number" },
    color: { control: "select", options: ["default","primary","secondary","accent","success","error","warning","info"] },
    bordered: { control: "boolean" },
    status: { control: "select", options: ["active","expired","loading"] },
    errorLevel: { control: "select", options: ["L","M","Q","H"] },
  },
};
export default meta;
type Story = StoryObj<typeof QRCode>;

const QR_VALUE = "https://example.com";

export const Playground: Story = {
  args: { value: QR_VALUE, size: 160, bordered: true },
};

const colors = ["default","primary","secondary","accent","success","error","warning","info"] as const;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="flex items-end gap-6 flex-wrap">
          {[80, 120, 160, 200, 240].map(s => (
            <div key={s} className="flex flex-col items-center gap-2">
              <QRCode value={QR_VALUE} size={s} bordered />
              <span className="text-xs text-text-secondary">{s}px</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="flex flex-wrap gap-4">
          {colors.map(c => (
            <div key={c} className="flex flex-col items-center gap-2">
              <QRCode value={QR_VALUE} color={c} size={100} bordered />
              <span className="text-xs text-text-secondary">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Error Correction Levels</h3>
        <div className="flex gap-6 flex-wrap">
          {(["L","M","Q","H"] as const).map(level => (
            <div key={level} className="flex flex-col items-center gap-2">
              <QRCode value={QR_VALUE} errorLevel={level} size={120} bordered />
              <span className="text-xs text-text-secondary">Level {level}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icon</h3>
        <div className="flex flex-col items-center gap-2">
          <QRCode value={QR_VALUE} size={160} icon="https://i.pravatar.cc/40" bordered />
          <span className="text-xs text-text-secondary">With avatar icon</span>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2">
            <QRCode value={QR_VALUE} size={140} status="loading" bordered />
            <span className="text-xs text-text-secondary">Loading</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <QRCode value={QR_VALUE} size={140} status="expired" bordered onRefresh={() => {}} />
            <span className="text-xs text-text-secondary">Expired (with refresh)</span>
          </div>
        </div>
      </section>
    </div>
  ),
};
