import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  CheckCircle2,
  Info,
  Rocket,
} from "lucide-react";
import React from "react";

import Notification from "./index";

const meta: Meta<typeof Notification> = {
  title: "Feedback/Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "solid", "outline", "soft"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    title: { control: "text" },
    description: { control: "text" },
    closable: { control: "boolean" },
    borderLine: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Playground: Story = {
  args: {
    title: "Notification title",
    description: "This is a notification message with some details.",
    variant: "soft",
    color: "info",
    size: "md",
    closable: true,
    borderLine: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-lg">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <Notification variant="default" color="primary" title="Default variant" description="Uses slot background with border." icon={<Bell className="w-5 h-5" />} />
          <Notification variant="solid" color="primary" title="Solid variant" description="Filled background with contrasting text." icon={<Bell className="w-5 h-5" />} />
          <Notification variant="outline" color="primary" title="Outline variant" description="Transparent background with colored border and text." icon={<Bell className="w-5 h-5" />} />
          <Notification variant="soft" color="primary" title="Soft variant" description="Subtle tinted background with colored text." icon={<Bell className="w-5 h-5" />} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          <Notification color="primary" title="Primary" description="Primary notification." icon={<Info className="w-5 h-5" />} />
          <Notification color="secondary" title="Secondary" description="Secondary notification." icon={<Info className="w-5 h-5" />} />
          <Notification color="accent" title="Accent" description="Accent notification." icon={<Info className="w-5 h-5" />} />
          <Notification color="success" title="Success" description="Operation completed successfully." icon={<CheckCircle2 className="w-5 h-5" />} />
          <Notification color="error" title="Error" description="Something went wrong." icon={<AlertCircle className="w-5 h-5" />} />
          <Notification color="warning" title="Warning" description="Proceed with caution." icon={<AlertTriangle className="w-5 h-5" />} />
          <Notification color="info" title="Info" description="Here is some useful information." icon={<Info className="w-5 h-5" />} />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <Notification size="xs" color="info" icon={<Info className="w-4 h-4" />} title="Extra small" description="Compact notification." />
          <Notification size="sm" color="info" icon={<Info className="w-4 h-4" />} title="Small" description="Small notification." />
          <Notification size="md" color="info" icon={<Info className="w-5 h-5" />} title="Medium" description="Default notification size." />
          <Notification size="lg" color="info" icon={<Info className="w-6 h-6" />} title="Large" description="Large notification for prominence." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Action</h3>
        <div className="space-y-3">
          <Notification
            color="info"
            icon={<Rocket className="w-5 h-5" />}
            title="Update available"
            description="Version 2.0 is ready to install."
            closable
            action={{ label: "Update now", onClick: () => {} }}
          />
          <Notification
            color="warning"
            icon={<AlertTriangle className="w-5 h-5" />}
            title="Storage almost full"
            description="90% of your storage is used."
            action={{ label: "Upgrade plan", onClick: () => {} }}
          />
          <Notification
            color="success"
            icon={<CheckCircle2 className="w-5 h-5" />}
            title="Deployment successful"
            description="Your app is now live at your domain."
            action={{ label: "View live site", onClick: () => {} }}
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Border Line</h3>
        <div className="space-y-3">
          <Notification color="primary" title="Primary border line" description="Left accent border for emphasis." icon={<Info className="w-5 h-5" />} borderLine />
          <Notification color="success" title="Success border line" description="Operation completed." icon={<CheckCircle2 className="w-5 h-5" />} borderLine />
          <Notification color="error" title="Error border line" description="Something went wrong." icon={<AlertCircle className="w-5 h-5" />} borderLine />
          <Notification color="warning" title="Warning border line" description="Please check your settings." icon={<AlertTriangle className="w-5 h-5" />} borderLine />
          <Notification color="info" title="Info border line" description="Here is some context." icon={<Info className="w-5 h-5" />} borderLine />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Closable</h3>
        <div className="space-y-3">
          <Notification color="info" title="Dismissible notification" description="Click the X to close." icon={<Bell className="w-5 h-5" />} closable />
          <Notification color="success" title="Auto-dismiss style" description="Mimics a toast-like card." icon={<CheckCircle2 className="w-5 h-5" />} closable variant="soft" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants x Colors</h3>
        <div className="space-y-4">
          {(["default", "solid", "outline", "soft"] as const).map((variant) => (
            <div key={variant} className="space-y-2">
              <p className="text-xs text-text-secondary font-medium capitalize">{variant}</p>
              <div className="space-y-2">
                {(["success", "error", "warning", "info"] as const).map((color) => (
                  <Notification key={color} variant={variant} color={color} title={`${variant} / ${color}`} size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
