import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import ComposedDrawer from "./index";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
  DrawerClose,
} from "./index";
import Button from "../button";

const meta: Meta<typeof ComposedDrawer> = {
  title: "Feedback/Drawer",
  component: ComposedDrawer,
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "select", options: ["top", "right", "bottom", "left"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "full"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    showCloseButton: { control: "boolean" },
    showHandle: { control: "boolean" },
    dismissible: { control: "boolean" },
    modal: { control: "boolean" },
    hideHeader: { control: "boolean" },
    hideFooter: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof ComposedDrawer>;

const DrawerDemo = ({
  label,
  ...props
}: React.ComponentProps<typeof ComposedDrawer> & { label?: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline" size="sm">
        {label ?? "Open"}
      </Button>
      <ComposedDrawer
        {...props}
        open={open}
        onOpenChange={setOpen}
        footer={
          <Button size="sm" onClick={() => setOpen(false)}>
            Close
          </Button>
        }
      />
    </>
  );
};

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <ComposedDrawer
          {...args}
          open={open}
          onOpenChange={setOpen}
          title="Drawer Title"
          description="Drawer description text for context."
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p className="text-sm text-text-secondary">
            This is the drawer body content. It scrolls independently of the header and footer.
          </p>
        </ComposedDrawer>
      </>
    );
  },
  args: {
    direction: "right",
    size: "md",
    color: "primary",
    showCloseButton: true,
    showHandle: false,
    dismissible: true,
    modal: true,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-2xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Directions
        </h3>
        <div className="flex flex-wrap gap-2">
          {(["top", "right", "bottom", "left"] as const).map((d) => (
            <DrawerDemo
              key={d}
              label={`From ${d}`}
              direction={d}
              title={`${d.charAt(0).toUpperCase() + d.slice(1)} Drawer`}
              description={`Slides in from the ${d}.`}
              showCloseButton
            >
              <p className="text-sm text-text-secondary">Drawer content.</p>
            </DrawerDemo>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Sizes (right direction)
        </h3>
        <div className="flex flex-wrap gap-2">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <DrawerDemo
              key={s}
              label={`Size ${s}`}
              direction="right"
              size={s}
              title={`Size ${s.toUpperCase()}`}
              description="Width changes with size."
              showCloseButton
            >
              <p className="text-sm text-text-secondary">Body content.</p>
            </DrawerDemo>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Colors
        </h3>
        <div className="flex flex-wrap gap-2">
          {(["primary", "secondary", "accent", "success", "warning", "info"] as const).map((c) => (
            <DrawerDemo
              key={c}
              label={c}
              direction="right"
              color={c}
              title={`${c.charAt(0).toUpperCase() + c.slice(1)} drawer`}
              showCloseButton
            >
              <p className="text-sm text-text-secondary">Color accent: {c}</p>
            </DrawerDemo>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Bottom Sheet with Handle
        </h3>
        <DrawerDemo
          label="Bottom sheet"
          direction="bottom"
          size="sm"
          showHandle
          title="Bottom Sheet"
          description="Drag the handle to dismiss."
        >
          <p className="text-sm text-text-secondary">Drag-dismissible bottom sheet.</p>
        </DrawerDemo>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          Composable (primitive sub-components)
        </h3>
        {(() => {
          const [open, setOpen] = useState(false);
          return (
            <>
              <Button variant="outline" onClick={() => setOpen(true)}>
                Primitive API
              </Button>
              <Drawer open={open} onOpenChange={setOpen} direction="right">
                <DrawerContent direction="right" size="md" showCloseButton color="accent">
                  <DrawerHeader>
                    <DrawerTitle>Primitive drawer</DrawerTitle>
                    <DrawerDescription>Built with sub-components directly.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerBody>
                    <p className="text-sm text-text-secondary">
                      Full control over layout using the primitive API.
                    </p>
                  </DrawerBody>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Button>Save</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </>
          );
        })()}
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
          States
        </h3>
        <div className="flex flex-wrap gap-2">
          <DrawerDemo
            label="No header"
            direction="right"
            hideHeader
            showCloseButton
          >
            <p className="text-sm text-text-secondary">No header rendered.</p>
          </DrawerDemo>
          <DrawerDemo
            label="No footer"
            direction="right"
            title="No footer"
            description="Footer is hidden."
            hideFooter
            showCloseButton
          >
            <p className="text-sm text-text-secondary">No footer rendered.</p>
          </DrawerDemo>
          <DrawerDemo
            label="Non-dismissible"
            direction="right"
            title="Non-dismissible"
            description="Cannot be closed by clicking overlay."
            dismissible={false}
            showCloseButton
          >
            <p className="text-sm text-text-secondary">Use the close button.</p>
          </DrawerDemo>
        </div>
      </section>
    </div>
  ),
};
