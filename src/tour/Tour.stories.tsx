import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Tour from "./index";
import Button from "../button";
import type { TourStep } from "./types";

const meta: Meta<typeof Tour> = {
  title: "Feedback/Tour",
  component: Tour,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    showArrow: { control: "boolean" },
    showProgress: { control: "boolean" },
    showSkip: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Tour>;

function BasicTourDemo({ color = "primary", size = "md", showArrow = true, showProgress = true, showSkip = true }: {
  color?: "default" | "primary" | "secondary" | "accent" | "success" | "error" | "warning" | "info";
  size?: "xs" | "sm" | "md" | "lg";
  showArrow?: boolean;
  showProgress?: boolean;
  showSkip?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const steps: TourStep[] = [
    {
      target: "#tour-step-1",
      title: "Welcome to the Dashboard",
      description: "This is your main dashboard. Here you can get an overview of all your data and recent activity.",
      placement: "bottom",
    },
    {
      target: "#tour-step-2",
      title: "Navigation Menu",
      description: "Use the navigation menu to move between different sections of the application.",
      placement: "right",
    },
    {
      target: "#tour-step-3",
      title: "Action Buttons",
      description: "These buttons let you create new items, export data, and manage your workspace settings.",
      placement: "top",
    },
    {
      target: "#tour-step-4",
      title: "You are all set",
      description: "That covers the basics. Explore the interface on your own or revisit this tour anytime from the help menu.",
      placement: "left",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center gap-4">
        <Button
          color={color}
          onClick={() => {
            setCurrent(0);
            setOpen(true);
          }}
        >
          Start Tour
        </Button>
        <span className="text-sm text-text-secondary">
          Click to begin the guided tour
        </span>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-lg">
        <div
          id="tour-step-1"
          className="p-4 border border-border rounded-lg bg-surface"
        >
          <p className="font-semibold text-sm">Dashboard Overview</p>
          <p className="text-xs text-text-secondary mt-1">Total revenue, active users, and recent events.</p>
        </div>

        <div
          id="tour-step-2"
          className="p-4 border border-border rounded-lg bg-surface"
        >
          <p className="font-semibold text-sm">Navigation</p>
          <ul className="text-xs text-text-secondary mt-1 space-y-1 list-disc list-inside">
            <li>Home</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </div>

        <div
          id="tour-step-3"
          className="p-4 border border-border rounded-lg bg-surface"
        >
          <p className="font-semibold text-sm">Actions</p>
          <div className="flex gap-2 mt-2">
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">Create</span>
            <span className="text-xs px-2 py-1 bg-surface border border-border rounded">Export</span>
          </div>
        </div>

        <div
          id="tour-step-4"
          className="p-4 border border-border rounded-lg bg-surface"
        >
          <p className="font-semibold text-sm">Help Center</p>
          <p className="text-xs text-text-secondary mt-1">Docs, keyboard shortcuts, and support.</p>
        </div>
      </div>

      <Tour
        steps={steps}
        open={open}
        onOpenChange={setOpen}
        current={current}
        onCurrentChange={setCurrent}
        color={color}
        size={size}
        showArrow={showArrow}
        showProgress={showProgress}
        showSkip={showSkip}
        onFinish={() => {
          setOpen(false);
          setCurrent(0);
        }}
        onSkip={() => {
          setOpen(false);
          setCurrent(0);
        }}
      />
    </div>
  );
}

export const Playground: Story = {
  render: (args) => (
    <BasicTourDemo
      color={args.color as any}
      size={args.size as any}
      showArrow={args.showArrow}
      showProgress={args.showProgress}
      showSkip={args.showSkip}
    />
  ),
  args: {
    color: "primary",
    size: "md",
    showArrow: true,
    showProgress: true,
    showSkip: true,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="flex flex-wrap gap-3">
          {(["primary", "secondary", "accent", "success"] as const).map((color) => (
            <ColorTourButton key={color} color={color} />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Full Demo</h3>
        <BasicTourDemo color="primary" showArrow showProgress showSkip />
      </section>
    </div>
  ),
};

function ColorTourButton({ color }: { color: "primary" | "secondary" | "accent" | "success" }) {
  const [open, setOpen] = useState(false);

  const steps: TourStep[] = [
    {
      target: `#color-demo-${color}`,
      title: `${color.charAt(0).toUpperCase() + color.slice(1)} Tour`,
      description: `This is a tour step using the ${color} color theme. Steps are styled consistently.`,
      placement: "bottom",
    },
  ];

  return (
    <div>
      <Button
        id={`color-demo-${color}`}
        color={color}
        variant="soft"
        size="sm"
        onClick={() => setOpen(true)}
      >
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </Button>
      <Tour
        steps={steps}
        open={open}
        onOpenChange={setOpen}
        color={color}
        showProgress
        showSkip
        onFinish={() => setOpen(false)}
        onSkip={() => setOpen(false)}
      />
    </div>
  );
}

export const WithProgress: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const steps: TourStep[] = [
      { target: "#prog-step-1", title: "Step 1 of 3", description: "Progress indicator shows your position in the tour.", placement: "bottom" },
      { target: "#prog-step-2", title: "Step 2 of 3", description: "Navigate forward and backward between steps.", placement: "bottom" },
      { target: "#prog-step-3", title: "Step 3 of 3", description: "Finish the tour or skip at any time.", placement: "bottom" },
    ];

    return (
      <div className="p-6 space-y-4">
        <Button color="primary" onClick={() => { setCurrent(0); setOpen(true); }}>
          Start Tour with Progress
        </Button>
        <div className="flex gap-4">
          {steps.map((_, i) => (
            <div key={i} id={`prog-step-${i + 1}`} className="px-4 py-3 border border-border rounded-lg text-sm bg-surface">
              Step {i + 1}
            </div>
          ))}
        </div>
        <Tour
          steps={steps}
          open={open}
          onOpenChange={setOpen}
          current={current}
          onCurrentChange={setCurrent}
          color="primary"
          showProgress
          showSkip
          showArrow
          onFinish={() => setOpen(false)}
          onSkip={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const CustomStepText: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const steps: TourStep[] = [
      {
        target: "#custom-step-1",
        title: "Getting Started",
        description: "Welcome aboard. Let us walk you through the key features.",
        placement: "right",
        nextText: "Show me",
      },
      {
        target: "#custom-step-2",
        title: "Core Feature",
        description: "This is where most of your work happens.",
        placement: "left",
        prevText: "Go back",
        nextText: "Continue",
      },
    ];

    return (
      <div className="p-6 space-y-6">
        <Button color="accent" onClick={() => { setCurrent(0); setOpen(true); }}>
          Custom Button Labels
        </Button>
        <div className="flex gap-6">
          <div id="custom-step-1" className="p-4 border border-border rounded-lg bg-surface text-sm">Getting Started</div>
          <div id="custom-step-2" className="p-4 border border-border rounded-lg bg-surface text-sm">Core Feature</div>
        </div>
        <Tour
          steps={steps}
          open={open}
          onOpenChange={setOpen}
          current={current}
          onCurrentChange={setCurrent}
          color="accent"
          showProgress
          finishText="Done"
          onFinish={() => setOpen(false)}
        />
      </div>
    );
  },
};
