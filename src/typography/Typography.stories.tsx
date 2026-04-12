import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Title, Text, Paragraph } from "./index";

const meta: Meta<typeof Title> = {
  title: "General/Typography",
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info", "inherit"],
    },
    copyable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Playground: Story = {
  args: {
    level: "h2",
    children: "Typography Playground",
    color: "default",
    copyable: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Title Levels</h3>
        <div className="space-y-2">
          {(["h1", "h2", "h3", "h4", "h5", "h6"] as const).map((level) => (
            <Title key={level} level={level}>
              Heading {level.toUpperCase()} — The quick brown fox
            </Title>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Title Colors</h3>
        <div className="space-y-1">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(
            (c) => (
              <Title key={c} level="h4" color={c}>
                {c} title
              </Title>
            )
          )}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Copyable Title</h3>
        <Title level="h4" copyable>
          Click the copy icon to copy this heading
        </Title>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Sizes</h3>
        <div className="space-y-1">
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
            <div key={size}>
              <Text size={size}>
                Size {size} — The quick brown fox jumps over the lazy dog
              </Text>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Weights</h3>
        <div className="space-y-1">
          {(["light", "normal", "medium", "semibold", "bold"] as const).map((weight) => (
            <div key={weight}>
              <Text weight={weight}>
                {weight} — The quick brown fox jumps over the lazy dog
              </Text>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Colors</h3>
        <div className="space-y-1">
          {(["default", "secondary", "tertiary", "primary", "accent", "success", "error", "warning", "info"] as const).map(
            (color) => (
              <div key={color}>
                <Text color={color}>{color} — The quick brown fox</Text>
              </div>
            )
          )}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Decorations</h3>
        <div className="space-y-2 flex flex-col">
          <Text strong>Bold / strong text</Text>
          <Text italic>Italic text</Text>
          <Text underline>Underlined text</Text>
          <Text del>Deleted / strikethrough text</Text>
          <Text code>inline code snippet</Text>
          <Text mark>Highlighted / marked text</Text>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Copyable Text</h3>
        <div className="space-y-2">
          <Text copyable>Click the icon to copy this text to clipboard</Text>
          <Text copyable color="primary" weight="medium">
            npm install @mdigitalcn/uikit
          </Text>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Truncation</h3>
        <div className="max-w-sm space-y-3">
          <div>
            <p className="text-xs text-text-secondary mb-1">Single line truncate</p>
            <Text truncate>
              This is a very long line of text that will be truncated with an ellipsis when it overflows the container width.
            </Text>
          </div>
          <div>
            <p className="text-xs text-text-secondary mb-1">Line clamp (2 lines)</p>
            <Text truncate={2}>
              This paragraph will be clamped to exactly two lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Text Rendered As</h3>
        <div className="space-y-2">
          <Text as="span">Rendered as span (default)</Text>
          <Text as="p">Rendered as paragraph element</Text>
          <Text as="div">Rendered as div element</Text>
          <Text as="label">Rendered as label element</Text>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Paragraph</h3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Paragraph Sizes &amp; Colors</h3>
        <div className="space-y-3">
          {(["sm", "md", "lg"] as const).map((size) => (
            <Paragraph key={size} size={size} color={size === "sm" ? "secondary" : "default"}>
              Size {size}: The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Paragraph>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Paragraph Truncation</h3>
        <div className="max-w-sm">
          <Paragraph truncate={3}>
            This paragraph will be truncated after three lines. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </Paragraph>
        </div>
      </section>
    </div>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <div className="space-y-2">
      {(["h1", "h2", "h3", "h4", "h5", "h6"] as const).map((level) => (
        <Title key={level} level={level}>
          {level.toUpperCase()} — The quick brown fox
        </Title>
      ))}
    </div>
  ),
};

export const TextOnly: Story = {
  render: () => (
    <div className="space-y-2 flex flex-col">
      <Text>Default text</Text>
      <Text strong>Strong text</Text>
      <Text italic>Italic text</Text>
      <Text underline>Underlined text</Text>
      <Text del>Deleted text</Text>
      <Text code>code text</Text>
      <Text mark>Marked text</Text>
      <Text copyable>Copyable text</Text>
    </div>
  ),
};
