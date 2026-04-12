import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  CheckCircle2,
  Info,
  Rocket,
  Shield,
} from "lucide-react";
import React from "react";

import Button from "../button";
import Alert from "./index";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
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
    visible: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Playground: Story = {
  args: {
    title: "Heads up!",
    description: "You can add components to your app using the CLI.",
    variant: "soft",
    color: "primary",
    size: "md",
    closable: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="space-y-3">
          <Alert variant="default" color="primary" title="Default variant" description="Uses slot background with border." />
          <Alert variant="solid" color="primary" title="Solid variant" description="Filled background with contrasting text." />
          <Alert variant="outline" color="primary" title="Outline variant" description="Transparent background with colored border and text." />
          <Alert variant="soft" color="primary" title="Soft variant" description="Subtle tinted background with colored text." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors</h3>
        <div className="space-y-3">
          <Alert color="primary" title="Primary" description="Primary semantic color." />
          <Alert color="secondary" title="Secondary" description="Secondary semantic color." />
          <Alert color="accent" title="Accent" description="Accent semantic color." />
          <Alert color="success" title="Success" description="Operation completed successfully." />
          <Alert color="error" title="Error" description="Something went wrong. Please try again." />
          <Alert color="warning" title="Warning" description="Please review before proceeding." />
          <Alert color="info" title="Info" description="Here is some useful information." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Icons</h3>
        <div className="space-y-3">
          <Alert color="success" icon={<CheckCircle2 />} title="Changes saved" description="Your profile has been updated." />
          <Alert color="error" icon={<AlertCircle />} title="Upload failed" description="The file exceeds the maximum allowed size." />
          <Alert color="warning" icon={<AlertTriangle />} title="Low storage" description="You are running low on storage space." />
          <Alert color="info" icon={<Info />} title="New feature available" description="Check out the latest release notes." />
          <Alert color="primary" icon={<Rocket />} title="Deployment started" description="Your app is being deployed to production." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          <Alert size="xs" color="primary" icon={<Info />} title="Extra small" description="Compact alert for tight spaces." />
          <Alert size="sm" color="primary" icon={<Info />} title="Small" description="Small alert with reduced padding." />
          <Alert size="md" color="primary" icon={<Info />} title="Medium" description="Default medium-sized alert." />
          <Alert size="lg" color="primary" icon={<Info />} title="Large" description="Large alert for prominent messages." />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Closable</h3>
        <div className="space-y-3">
          <Alert color="info" icon={<Bell />} title="Dismiss me" description="Click the X button to close this alert." closable />
          <Alert color="success" icon={<CheckCircle2 />} title="Operation complete" description="You can dismiss this notification." closable variant="soft" />
          <Alert color="warning" icon={<AlertTriangle />} title="Action required" description="Please review your settings." closable variant="outline" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Action</h3>
        <div className="space-y-3">
          <Alert
            color="warning"
            icon={<AlertTriangle />}
            title="Unsaved changes"
            description="You have unsaved changes that will be lost."
            action={<Button size="xs" variant="outline">Save now</Button>}
          />
          <Alert
            color="error"
            icon={<AlertCircle />}
            title="Sync failed"
            description="Could not connect to the server."
            action={<Button size="xs" color="error" variant="soft">Retry</Button>}
          />
          <Alert
            color="info"
            icon={<Shield />}
            title="Session expiring"
            description="Your session will expire in 5 minutes."
            action={<Button size="xs" color="info">Stay signed in</Button>}
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants x Colors</h3>
        <div className="space-y-4">
          {(["default", "solid", "outline", "soft"] as const).map((variant) => (
            <div key={variant} className="space-y-2">
              <p className="text-xs text-text-secondary font-medium capitalize">{variant}</p>
              <div className="grid grid-cols-1 gap-2">
                {(["primary", "secondary", "success", "error", "warning", "info"] as const).map((color) => (
                  <Alert key={color} variant={variant} color={color} title={`${variant} / ${color}`} size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Title only / Description only</h3>
        <div className="space-y-3">
          <Alert color="primary" title="Title only alert with no description text." />
          <Alert color="secondary" description="Description only, no title. Useful for short inline messages." />
        </div>
      </section>
    </div>
  ),
};

export const Closable: Story = {
  render: () => (
    <div className="space-y-3 max-w-lg">
      <Alert color="success" icon={<CheckCircle2 />} title="Payment processed" description="Your subscription has been activated." closable />
      <Alert color="warning" icon={<AlertTriangle />} title="Billing address missing" description="Please update your billing information." closable variant="outline" />
      <Alert color="error" icon={<AlertCircle />} title="Account suspended" description="Contact support to restore access." closable variant="soft" />
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="space-y-3 max-w-lg">
      <Alert
        color="warning"
        variant="soft"
        icon={<AlertTriangle />}
        title="Update available"
        description="Version 2.0 is ready to install."
        action={
          <div className="flex gap-2">
            <Button size="xs" color="warning">Update</Button>
            <Button size="xs" variant="ghost">Later</Button>
          </div>
        }
      />
      <Alert
        color="error"
        variant="outline"
        icon={<AlertCircle />}
        title="Build failed"
        description="3 errors found in your last deployment."
        action={<Button size="xs" variant="outline" color="error">View logs</Button>}
      />
    </div>
  ),
};
