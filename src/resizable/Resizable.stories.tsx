import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./index";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Layout/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "select", options: ["horizontal", "vertical"] },
  },
};
export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

const PanelContent = ({
  label,
  muted = false,
}: {
  label: string;
  muted?: boolean;
}) => (
  <div
    className={`flex h-full w-full items-center justify-center text-sm ${
      muted ? "bg-surface/60 text-text-secondary" : "text-text-secondary"
    }`}
  >
    {label}
  </div>
);

export const Playground: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border border-border">
      <ResizablePanel defaultSize={50}>
        <PanelContent label="Left Panel" />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <PanelContent label="Right Panel" />
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Horizontal — Two Panels</h3>
        <ResizablePanelGroup direction="horizontal" className="min-h-[160px] rounded-lg border border-border">
          <ResizablePanel defaultSize={30} minSize={15}>
            <PanelContent label="Sidebar (30%)" muted />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <PanelContent label="Main Content" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Horizontal — Three Panels</h3>
        <ResizablePanelGroup direction="horizontal" className="min-h-[160px] rounded-lg border border-border">
          <ResizablePanel defaultSize={20} minSize={12}>
            <PanelContent label="Navigation" muted />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={55}>
            <PanelContent label="Editor" />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={25} minSize={12}>
            <PanelContent label="Preview" muted />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Vertical</h3>
        <ResizablePanelGroup direction="vertical" className="min-h-[280px] rounded-lg border border-border">
          <ResizablePanel defaultSize={65}>
            <PanelContent label="Main Area" />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={35} minSize={20}>
            <PanelContent label="Terminal / Output" muted />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Without Handle Grip</h3>
        <ResizablePanelGroup direction="horizontal" className="min-h-[120px] rounded-lg border border-border">
          <ResizablePanel defaultSize={50}>
            <PanelContent label="Left" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <PanelContent label="Right" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Nested — IDE Layout</h3>
        <ResizablePanelGroup direction="horizontal" className="min-h-[320px] rounded-lg border border-border">
          <ResizablePanel defaultSize={18} minSize={10}>
            <PanelContent label="File Tree" muted />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={70}>
                <PanelContent label="Code Editor" />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={30} minSize={15}>
                <PanelContent label="Output / Terminal" muted />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={22} minSize={12}>
            <PanelContent label="Inspector" muted />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Dashboard Layout</h3>
        <ResizablePanelGroup direction="horizontal" className="min-h-[260px] rounded-lg border border-border">
          <ResizablePanel defaultSize={25} minSize={15}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={50}>
                <PanelContent label="Stats A" muted />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <PanelContent label="Stats B" muted />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <PanelContent label="Chart / Main Content" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </section>
    </div>
  ),
};
