import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import InputOTP from "./index";

const meta: Meta<typeof InputOTP> = {
  title: "Data Entry/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  argTypes: {
    length: { control: "number" },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: { control: "select", options: ["primary", "secondary", "accent", "success", "error", "warning", "info"] },
    mask: { control: "boolean" },
    disabled: { control: "boolean" },
    autoFocus: { control: "boolean" },
    messagePosition: { control: "select", options: ["top", "bottom"] },
  },
};
export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Playground: Story = {
  args: { length: 6, size: "md", label: "Verification code" },
};

const colors = ["primary", "secondary", "accent", "success", "error", "warning", "info"] as const;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s}>
              <p className="text-xs text-text-secondary mb-2">{s}</p>
              <InputOTP length={6} size={s} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-4">
          {colors.map((c) => (
            <div key={c}>
              <p className="text-xs text-text-secondary mb-2">{c}</p>
              <InputOTP length={6} color={c} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Length Variants</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-2">4 digits (PIN)</p>
            <InputOTP length={4} label="PIN code" />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">6 digits (standard OTP)</p>
            <InputOTP length={6} label="Verification code" />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">8 digits (extended)</p>
            <InputOTP length={8} label="Recovery code" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Masked (PIN style)</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-2">Masked input (dots shown)</p>
            <InputOTP length={4} mask label="PIN entry" />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Numeric only (pattern)</p>
            <InputOTP length={6} type="number" label="Numeric OTP" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Label</h3>
        <div className="space-y-4">
          <InputOTP length={6} label="Email verification" helperText="Enter the 6-digit code sent to your email" />
          <InputOTP length={4} label="Two-factor code" helperText="Open your authenticator app" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-4">
          <InputOTP length={6} error="Invalid code. Please try again." label="Error" />
          <InputOTP length={6} warning="Code expires in 1 minute" label="Warning" />
          <InputOTP length={6} success="Code verified successfully" value="123456" label="Success" />
          <InputOTP length={6} info="Code sent to +1 (***) ***-4567" label="Info" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Message Position</h3>
        <div className="space-y-4">
          <InputOTP length={6} error="Invalid code" label="Message top" messagePosition="top" />
          <InputOTP length={6} error="Invalid code" label="Message bottom" messagePosition="bottom" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">States</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-2">Disabled</p>
            <InputOTP length={6} disabled label="Disabled" />
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Pre-filled</p>
            <InputOTP length={6} value="12" label="Partially filled" />
          </div>
        </div>
      </section>
    </div>
  ),
};
