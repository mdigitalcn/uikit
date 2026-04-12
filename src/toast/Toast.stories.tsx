import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Button from "../button";
import { ToastProvider, useToast } from "./index";

const meta: Meta = {
  title: "Feedback/Toast",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider position="top-right">
        <Story />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

const BasicToasts = () => {
  const { toast, success, error, warning, info } = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast({ title: "Default toast", description: "A simple notification message." })}>
        Default
      </Button>
      <Button color="success" onClick={() => success("Saved successfully!", "Your changes have been persisted.")}>
        Success
      </Button>
      <Button color="error" onClick={() => error("Upload failed", "The file exceeds the 10 MB limit.")}>
        Error
      </Button>
      <Button color="warning" onClick={() => warning("Session expiring", "You will be logged out in 5 minutes.")}>
        Warning
      </Button>
      <Button color="info" onClick={() => info("New version available", "v2.1.0 is ready to install.")}>
        Info
      </Button>
    </div>
  );
};

export const Playground: Story = {
  render: () => <BasicToasts />,
};

const ShowcaseToasts = () => {
  const { toast, success, error, warning, info, promise, dismissAll } = useToast();

  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Semantic Shortcuts</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="soft" onClick={() => toast({ title: "Default notification" })}>
            Default
          </Button>
          <Button size="sm" variant="soft" color="success" onClick={() => success("Changes saved!")}>
            Success
          </Button>
          <Button size="sm" variant="soft" color="error" onClick={() => error("Failed to save changes.")}>
            Error
          </Button>
          <Button size="sm" variant="soft" color="warning" onClick={() => warning("Session expiring soon.")}>
            Warning
          </Button>
          <Button size="sm" variant="soft" color="info" onClick={() => info("New version available.")}>
            Info
          </Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Variants</h3>
        <div className="flex flex-wrap gap-2">
          {(["default", "solid", "outline", "soft"] as const).map((variant) => (
            <Button
              key={variant}
              size="sm"
              variant="outline"
              onClick={() =>
                toast({
                  title: `${variant} variant`,
                  description: "This toast uses the variant style.",
                  color: "primary",
                  variant,
                })
              }
            >
              {variant}
            </Button>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Description</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toast({ title: "Profile updated", description: "Your changes have been saved to the server." })
            }
          >
            With description
          </Button>
          <Button
            size="sm"
            variant="outline"
            color="error"
            onClick={() => error("Upload failed", "File size exceeds the 10 MB limit.")}
          >
            Error with description
          </Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Action</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toast({
                title: "File deleted",
                action: { label: "Undo", onClick: () => success("Restored!") },
              })
            }
          >
            With undo action
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toast({
                title: "Deployment ready",
                description: "Build #42 completed successfully.",
                action: { label: "View", onClick: () => {} },
              })
            }
          >
            Deployment toast
          </Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Border Line</h3>
        <div className="flex flex-wrap gap-2">
          {(["success", "error", "warning", "info"] as const).map((color) => (
            <Button
              key={color}
              size="sm"
              variant="outline"
              onClick={() =>
                toast({
                  title: `${color} with border line`,
                  description: "Left accent border for emphasis.",
                  color,
                  borderLine: true,
                })
              }
            >
              {color}
            </Button>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Promise Toast</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              promise(new Promise((r) => setTimeout(r, 2000)), {
                loading: "Uploading file...",
                success: "Upload complete!",
                error: "Upload failed.",
              })
            }
          >
            Promise (resolves in 2s)
          </Button>
          <Button
            size="sm"
            variant="outline"
            color="error"
            onClick={() =>
              promise(new Promise((_, r) => setTimeout(r, 2000)), {
                loading: "Processing...",
                success: "Done!",
                error: "Processing failed.",
              })
            }
          >
            Promise (rejects)
          </Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Duration</h3>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" onClick={() => toast({ title: "Short (1s)", duration: 1000 })}>
            1s
          </Button>
          <Button size="sm" variant="outline" onClick={() => toast({ title: "Normal (4s)", duration: 4000 })}>
            4s
          </Button>
          <Button size="sm" variant="outline" onClick={() => toast({ title: "Long (8s)", duration: 8000 })}>
            8s
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => toast({ title: "Persistent", description: "Close manually.", duration: 0, closable: true })}
          >
            Persistent
          </Button>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Dismiss All</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            onClick={() => {
              info("First notification");
              success("Second notification");
              warning("Third notification");
            }}
          >
            Fire 3 toasts
          </Button>
          <Button size="sm" variant="outline" color="error" onClick={() => dismissAll()}>
            Dismiss all
          </Button>
        </div>
      </section>
    </div>
  );
};

export const Showcase: Story = {
  render: () => <ShowcaseToasts />,
};

const ColorToasts = () => {
  const { toast } = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      {(["primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map((color) => (
        <Button
          key={color}
          size="sm"
          color={color}
          variant="soft"
          onClick={() => toast({ title: `${color} toast`, description: "Color-coded notification.", color })}
        >
          {color}
        </Button>
      ))}
    </div>
  );
};

export const Colors: Story = {
  render: () => <ColorToasts />,
};
