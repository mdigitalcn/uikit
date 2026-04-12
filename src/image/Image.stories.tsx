import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Image from "./index";

const meta: Meta<typeof Image> = {
  title: "General/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    radius: { control: "select", options: ["none","sm","md","lg","xl","full"] },
    fit: { control: "select", options: ["cover","contain","fill","none","scale-down"] },
    fallbackSrc: { control: "text" },
    preview: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Image>;

const src = (seed: string, w = 400, h = 300) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const Playground: Story = {
  args: { src: src("play"), alt: "Sample image", width: 400, height: 300, radius: "md" },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Border Radius</h3>
        <div className="flex flex-wrap gap-4 items-end">
          {(["none","sm","md","lg","xl","full"] as const).map(r => (
            <div key={r} className="flex flex-col items-center gap-2">
              <Image src={src(r, 80, 80)} alt={r} width={80} height={80} radius={r} fit="cover" />
              <span className="text-xs text-text-secondary">{r}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Object Fit</h3>
        <div className="flex flex-wrap gap-4">
          {(["cover","contain","fill","none"] as const).map(fit => (
            <div key={fit} className="flex flex-col items-center gap-2">
              <div className="w-24 h-16 border border-border rounded overflow-hidden">
                <Image src={src(fit, 200, 100)} alt={fit} width={96} height={64} fit={fit} />
              </div>
              <span className="text-xs text-text-secondary">{fit}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Preview (click to zoom)</h3>
        <div className="flex gap-4">
          {["a","b","c"].map(s => (
            <Image key={s} src={src(s, 200, 150)} alt={`Photo ${s}`} width={120} height={90} radius="md" preview />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Fallback on Error</h3>
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <Image src="https://broken-url.jpg/404" alt="Broken" width={120} height={90} radius="md" />
            <span className="text-xs text-text-secondary">No fallback</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Image src="https://broken-url.jpg/404" alt="Fallback" width={120} height={90} radius="md" fallbackSrc={src("fallback",120,90)} />
            <span className="text-xs text-text-secondary">With fallback</span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Caption</h3>
        <Image src={src("caption",400,200)} alt="Mountain landscape" width={400} height={200} radius="lg" caption="Mountain landscape — Picsum Photos" />
      </section>
    </div>
  ),
};
