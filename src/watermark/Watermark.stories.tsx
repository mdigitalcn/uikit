import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Watermark from "./index";

const meta: Meta<typeof Watermark> = {
  title: "Other/Watermark",
  component: Watermark,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    opacity: { control: { type: "range", min: 0, max: 1, step: 0.05 } },
    rotate: { control: { type: "range", min: -90, max: 90 } },
    fontSize: { control: "number" },
    fontColor: { control: "color" },
    fontWeight: { control: "select", options: ["normal", "bold", "lighter", "100", "400", "700", "900"] },
    width: { control: "number" },
    height: { control: "number" },
    zIndex: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof Watermark>;

const ContentCard = ({ title, description }: { title: string; description?: string }) => (
  <div className="w-full h-48 bg-surface border border-border rounded-lg flex flex-col items-center justify-center gap-2 text-center px-6">
    <h4 className="font-semibold text-text-primary">{title}</h4>
    {description && <p className="text-sm text-text-secondary">{description}</p>}
  </div>
);

const LargeContent = ({ title }: { title?: string }) => (
  <div className="w-full bg-surface border border-border rounded-lg p-6 space-y-4">
    <h4 className="font-semibold text-text-primary">{title ?? "Protected Document"}</h4>
    <div className="space-y-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-3 bg-border/40 rounded" style={{ width: `${60 + ((i * 17) % 40)}%` }} />
      ))}
    </div>
    <div className="grid grid-cols-3 gap-3 pt-2">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="h-16 bg-border/20 rounded-lg" />
      ))}
    </div>
    <div className="space-y-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-3 bg-border/40 rounded" style={{ width: `${50 + ((i * 23) % 45)}%` }} />
      ))}
    </div>
  </div>
);

export const Playground: Story = {
  args: {
    text: "Confidential",
    rotate: -22,
    opacity: 0.15,
    fontSize: 14,
    fontColor: "rgba(0,0,0,0.15)",
    fontWeight: "normal",
    width: 120,
    height: 64,
    gap: [100, 100],
    children: <ContentCard title="Protected Content" description="Hover to see watermark overlay" />,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Text Watermark</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-text-secondary mb-2">Single text</p>
            <Watermark text="Confidential" opacity={0.15}>
              <ContentCard title="Single Line Watermark" />
            </Watermark>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Multi-line text</p>
            <Watermark text={["Acme Corp", "Internal Use Only"]} opacity={0.15}>
              <ContentCard title="Multi-line Watermark" />
            </Watermark>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Opacity Levels</h3>
        <div className="grid grid-cols-3 gap-4">
          {[0.05, 0.1, 0.2, 0.3, 0.4, 0.5].map((opacity) => (
            <div key={opacity}>
              <p className="text-xs text-text-secondary mb-2">opacity: {opacity}</p>
              <Watermark text="Draft" opacity={opacity} fontSize={12}>
                <div className="h-32 bg-surface border border-border rounded-lg flex items-center justify-center">
                  <span className="text-sm text-text-secondary">Content</span>
                </div>
              </Watermark>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Rotation</h3>
        <div className="grid grid-cols-3 gap-4">
          {[-45, -22, 0, 15, 30, 45].map((rotate) => (
            <div key={rotate}>
              <p className="text-xs text-text-secondary mb-2">rotate: {rotate}deg</p>
              <Watermark text="Sample" rotate={rotate} opacity={0.15} fontSize={12}>
                <div className="h-32 bg-surface border border-border rounded-lg flex items-center justify-center">
                  <span className="text-sm text-text-secondary">Content</span>
                </div>
              </Watermark>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-text-secondary mb-2">Default (rgba black)</p>
            <Watermark text="Watermark" fontColor="rgba(0,0,0,0.15)">
              <ContentCard title="Dark Watermark" />
            </Watermark>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Brand color</p>
            <Watermark text="ACME" fontColor="rgba(99,102,241,0.2)" fontWeight="bold">
              <ContentCard title="Brand Watermark" />
            </Watermark>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Red / restricted</p>
            <Watermark text="RESTRICTED" fontColor="rgba(239,68,68,0.15)" fontSize={12}>
              <ContentCard title="Restricted Content" />
            </Watermark>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-2">Green / approved</p>
            <Watermark text="APPROVED" fontColor="rgba(34,197,94,0.2)" fontSize={12} fontWeight="bold">
              <ContentCard title="Approved Document" />
            </Watermark>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Font Sizes</h3>
        <div className="grid grid-cols-3 gap-4">
          {[10, 14, 18, 24, 32, 40].map((fontSize) => (
            <div key={fontSize}>
              <p className="text-xs text-text-secondary mb-2">fontSize: {fontSize}</p>
              <Watermark text="Sample" fontSize={fontSize} opacity={0.15}>
                <div className="h-32 bg-surface border border-border rounded-lg flex items-center justify-center">
                  <span className="text-xs text-text-secondary">Content</span>
                </div>
              </Watermark>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Gap (Density)</h3>
        <div className="grid grid-cols-3 gap-4">
          {([[40, 40], [100, 100], [200, 200]] as [number, number][]).map(([gx, gy]) => (
            <div key={`${gx}-${gy}`}>
              <p className="text-xs text-text-secondary mb-2">gap: [{gx}, {gy}]</p>
              <Watermark text="Draft" gap={[gx, gy]} opacity={0.15} fontSize={12}>
                <div className="h-32 bg-surface border border-border rounded-lg" />
              </Watermark>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Realistic Document Example</h3>
        <Watermark
          text={["CONFIDENTIAL", "Internal Use Only"]}
          opacity={0.12}
          rotate={-30}
          fontSize={16}
          fontWeight="bold"
          gap={[80, 80]}
        >
          <LargeContent title="Q4 Financial Report" />
        </Watermark>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Draft Overlay</h3>
        <Watermark
          text="DRAFT"
          opacity={0.08}
          rotate={-45}
          fontSize={48}
          fontWeight="bold"
          fontColor="rgba(239,68,68,0.15)"
          gap={[60, 60]}
        >
          <LargeContent title="Contract v0.3 - Not for Distribution" />
        </Watermark>
      </section>
    </div>
  ),
};

export const TextWatermark: Story = {
  args: {
    text: "Confidential",
    opacity: 0.15,
    rotate: -22,
    fontSize: 14,
    children: <LargeContent />,
  },
};

export const MultiLineText: Story = {
  args: {
    text: ["Acme Corporation", "Internal Use Only"],
    opacity: 0.12,
    rotate: -22,
    fontSize: 13,
    children: <LargeContent />,
  },
};

export const DraftWatermark: Story = {
  args: {
    text: "DRAFT",
    opacity: 0.08,
    rotate: -45,
    fontSize: 42,
    fontWeight: "bold",
    fontColor: "rgba(239,68,68,0.15)",
    gap: [60, 60],
    children: <LargeContent title="Draft Document" />,
  },
};

export const BrandWatermark: Story = {
  args: {
    text: "ACME CORP",
    opacity: 0.15,
    rotate: -22,
    fontSize: 14,
    fontWeight: "bold",
    fontColor: "rgba(99,102,241,0.2)",
    children: <LargeContent title="Brand Watermarked Content" />,
  },
};
