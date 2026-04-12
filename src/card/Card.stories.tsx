import type { Meta, StoryObj } from "@storybook/react";
import { Heart, MoreHorizontal, Settings, Star, User } from "lucide-react";
import React from "react";
import Button from "../button";
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./index";

const meta: Meta<typeof Card> = {
  title: "Layout/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "solid", "outline", "soft", "ghost", "elevated"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    hoverable: { control: "boolean" },
    clickable: { control: "boolean" },
    bordered: { control: "boolean" },
    loading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  args: {
    variant: "default",
    color: "default",
    size: "md",
    shadow: "none",
    hoverable: false,
    clickable: false,
    bordered: true,
    loading: false,
  },
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A short description of the card content goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-text-secondary text-sm">
          This is the main content area of the card. You can put any content here including text, images, or other components.
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button size="sm" variant="solid" color="primary">Action</Button>
        <Button size="sm" variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-5xl">

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="grid grid-cols-3 gap-4">
          {(["default", "solid", "outline", "soft", "ghost", "elevated"] as const).map((variant) => (
            <Card key={variant} variant={variant} color="primary">
              <CardHeader>
                <CardTitle>{variant}</CardTitle>
                <CardDescription>variant="{variant}"</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Card content area with sample text.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="grid grid-cols-4 gap-4">
          {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
            <Card key={color} variant="soft" color={color}>
              <CardHeader>
                <CardTitle className="capitalize">{color}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">color="{color}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Shadows</h3>
        <div className="grid grid-cols-4 gap-6">
          {(["none", "sm", "md", "lg"] as const).map((shadow) => (
            <Card key={shadow} shadow={shadow}>
              <CardHeader>
                <CardTitle>shadow="{shadow}"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Elevation level</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="grid grid-cols-4 gap-4 items-start">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <Card key={size} size={size}>
              <CardHeader>
                <CardTitle>size="{size}"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Padding varies by size.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Interactive States</h3>
        <div className="grid grid-cols-3 gap-4">
          <Card hoverable shadow="sm">
            <CardHeader>
              <CardTitle>Hoverable</CardTitle>
              <CardDescription>Hover to see the lift effect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">hoverable=true with shadow="sm"</p>
            </CardContent>
          </Card>
          <Card clickable color="primary" variant="outline">
            <CardHeader>
              <CardTitle>Clickable</CardTitle>
              <CardDescription>Focusable and keyboard accessible</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">clickable=true</p>
            </CardContent>
          </Card>
          <Card loading>
            <CardHeader>
              <CardTitle>Loading</CardTitle>
              <CardDescription>Shows animated skeleton</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">loading=true</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Real-world Examples</h3>
        <div className="grid grid-cols-3 gap-4">

          <Card variant="default" shadow="sm" hoverable>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <User size={16} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle as="h4" className="text-sm">Alex Johnson</CardTitle>
                    <CardDescription className="text-xs">Product Designer</CardDescription>
                  </div>
                </div>
                <button className="text-text-secondary hover:text-text-primary">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary">Leading the redesign of our core product experience with a focus on accessibility.</p>
            </CardContent>
            <CardFooter className="flex gap-3 text-xs text-text-secondary">
              <span className="flex items-center gap-1"><Heart size={12} /> 24</span>
              <span className="flex items-center gap-1"><Star size={12} /> 4.9</span>
            </CardFooter>
          </Card>

          <Card variant="soft" color="primary">
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
              <CardDescription>Compared to last month</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$48,295</p>
              <p className="text-sm text-success mt-1">+12.4% from last month</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="soft" color="primary" fullWidth>View details</Button>
            </CardFooter>
          </Card>

          <Card variant="default" bordered>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Settings</CardTitle>
                  <CardDescription>Manage your preferences</CardDescription>
                </div>
                <Settings size={18} className="text-text-secondary" />
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {["Notifications", "Privacy", "Billing", "Security"].map((item) => (
                <div key={item} className="flex items-center justify-between py-1 border-b border-border last:border-0">
                  <span className="text-sm">{item}</span>
                  <span className="text-xs text-text-secondary">Configure</span>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>
      </section>

    </div>
  ),
};
