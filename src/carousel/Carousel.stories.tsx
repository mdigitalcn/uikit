import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Carousel from "./index";

const meta: Meta<typeof Carousel> = {
  title: "Data Display/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["primary", "secondary", "accent", "success", "error", "warning", "info"] },
    withArrows: { control: "boolean" },
    withPagination: { control: "boolean" },
    loop: { control: "boolean" },
    slidesPerView: { control: "number" },
  },
};
export default meta;
type Story = StoryObj<typeof Carousel>;

const colorSlides = ["bg-primary/20", "bg-accent/20", "bg-success/20", "bg-error/20", "bg-warning/20"];
const slides = colorSlides.map((bg, i) => (
  <div key={i} className={`flex items-center justify-center h-48 ${bg} rounded-lg text-2xl font-bold text-text-secondary select-none`}>
    Slide {i + 1}
  </div>
));

export const Playground: Story = {
  render: () => <Carousel className="max-w-xl" withPagination>{slides}</Carousel>,
};

const colors = ["primary", "secondary", "accent", "success", "error", "warning", "info"] as const;

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Default (no controls)</h3>
        <Carousel>{slides}</Carousel>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Arrows</h3>
        <Carousel withArrows loop>{slides}</Carousel>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Pagination Dots</h3>
        <Carousel withPagination loop>{slides}</Carousel>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Arrows + Pagination</h3>
        <Carousel withArrows withPagination loop autoplay>{slides}</Carousel>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Colors (pagination dot color)</h3>
        <div className="space-y-4">
          {colors.map(c => (
            <div key={c}>
              <p className="text-xs text-text-secondary mb-2">{c}</p>
              <Carousel withPagination loop color={c}>
                {colorSlides.map((bg, i) => (
                  <div key={i} className={`flex items-center justify-center h-28 ${bg} rounded-lg text-xl font-bold text-text-secondary`}>
                    {i + 1}
                  </div>
                ))}
              </Carousel>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Multiple Slides Per View</h3>
        <Carousel slidesPerView={2} loop withArrows spaceBetween={12}>
          {colorSlides.map((bg, i) => (
            <div key={i} className={`flex items-center justify-center h-32 ${bg} rounded-lg text-lg font-bold text-text-secondary`}>
              {i + 1}
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  ),
};
