import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Result from "./index";
import Button from "../button";

const meta: Meta<typeof Result> = {
  title: "Feedback/Result",
  component: Result,
  tags: ["autodocs"],
  argTypes: {
    status: { control: "select", options: ["success","error","warning","info","404","403","500"] },
    size: { control: "select", options: ["xs","sm","md","lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Result>;

export const Playground: Story = {
  args: {
    status: "success",
    title: "Payment Successful",
    subtitle: "Your order #2024-001 has been placed. You'll receive a confirmation email shortly.",
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Status Types</h3>
        <div className="grid grid-cols-2 gap-6">
          <Result
            status="success"
            title="Payment Complete"
            subtitle="Your transaction was processed successfully."
            extra={<Button size="sm">View Receipt</Button>}
          />
          <Result
            status="error"
            title="Payment Failed"
            subtitle="We could not process your payment. Please try again."
            extra={<><Button size="sm" color="error">Retry</Button><Button size="sm" variant="ghost">Cancel</Button></>}
          />
          <Result
            status="warning"
            title="Low Balance"
            subtitle="Your account balance is below the recommended minimum."
            extra={<Button size="sm" color="warning">Add Funds</Button>}
          />
          <Result
            status="info"
            title="Under Review"
            subtitle="Your account is being verified. This may take 1-2 business days."
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">HTTP Error Pages</h3>
        <div className="grid grid-cols-3 gap-6">
          <Result status="404" title="404" subtitle="Page not found." extra={<Button size="sm">Go Home</Button>} />
          <Result status="403" title="403" subtitle="Access denied." extra={<Button size="sm">Go Back</Button>} />
          <Result status="500" title="500" subtitle="Server error." extra={<Button size="sm">Try Again</Button>} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="grid grid-cols-2 gap-6">
          {(["xs","sm","md","lg"] as const).map(s => (
            <Result key={s} status="success" title={`Size ${s}`} subtitle="Sub-title description." size={s} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Title Only</h3>
        <Result status="success" title="All done!" extra={<Button size="sm">Continue</Button>} />
      </section>
    </div>
  ),
};
