import type { Meta, StoryObj } from "@storybook/react";
import { Settings } from "lucide-react";
import React, { useState } from "react";
import Button from "../button";
import DatePicker from "../date-picker";
import Dropdown from "../dropdown";
import Input from "../input";
import MultiSelect from "../multi-select";
import Select from "../select";
import Tooltip from "../tooltip";
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

const fruitOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
  { value: "fig", label: "Fig" },
  { value: "grape", label: "Grape" },
  { value: "honeydew", label: "Honeydew" },
  { value: "kiwi", label: "Kiwi" },
  { value: "lemon", label: "Lemon" },
  { value: "mango", label: "Mango" },
  { value: "nectarine", label: "Nectarine" },
];

const roleOptions = [
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
  { value: "moderator", label: "Moderator" },
];

const dropdownItems = [
  { key: "profile", label: "Profile", href: "#" },
  { key: "settings", label: "Settings", href: "#" },
  { key: "billing", label: "Billing", href: "#" },
  { key: "logout", label: "Log out", onClick: () => {} },
];

/**
 * Verifies that Select, MultiSelect, DatePicker, Dropdown and Tooltip all work
 * correctly when rendered inside a Drawer. Specifically:
 * - Popover dropdowns portal into the Drawer's DOM tree so vaul's scroll-lock
 *   and drag-gesture detection do not interfere with option-list scrolling
 * - data-vaul-no-drag on PopoverContent prevents vaul from treating pointer
 *   events inside a dropdown as swipe-to-close gestures
 */
export const OverlayNesting: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [fruit, setFruit] = useState("");
    const [roles, setRoles] = useState<string[]>([]);
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
      <div className="p-6 space-y-4">
        <p className="text-sm text-text-secondary">
          Open each drawer direction and verify all dropdowns open, scroll, and dismiss
          without the drawer closing unexpectedly or scroll being blocked.
        </p>

        <div className="flex flex-wrap gap-3">
          {(["right", "bottom", "left"] as const).map((dir) => (
            <React.Fragment key={dir}>
              <Button variant="outline" onClick={() => setOpen(true)}>
                {dir.charAt(0).toUpperCase() + dir.slice(1)} drawer
              </Button>
              <Drawer open={open} onOpenChange={setOpen} direction={dir}>
                <DrawerContent direction={dir} size="md" showCloseButton color="primary">
                  <DrawerHeader>
                    <DrawerTitle>Form controls — {dir} drawer</DrawerTitle>
                    <DrawerDescription>
                      Scroll the option lists to verify react-remove-scroll and vaul don't interfere.
                    </DrawerDescription>
                  </DrawerHeader>

                  <DrawerBody>
                    <div className="space-y-4">
                      <Input label="Name" placeholder="Type something…" />

                      <Select
                        label="Favourite fruit"
                        placeholder="Choose a fruit…"
                        options={fruitOptions}
                        value={fruit}
                        onChange={setFruit}
                      />

                      <MultiSelect
                        label="Roles"
                        placeholder="Select roles…"
                        options={roleOptions}
                        value={roles}
                        onChange={setRoles}
                      />

                      <DatePicker
                        label="Start date"
                        placeholder="Pick a date…"
                        value={date}
                        onChange={setDate}
                      />

                      <div>
                        <p className="text-sm font-medium text-text-secondary mb-1.5">Dropdown menu</p>
                        <Dropdown
                          items={dropdownItems}
                          trigger={
                            <Button variant="outline" size="sm" rightIcon={<Settings className="w-4 h-4" />}>
                              Actions
                            </Button>
                          }
                        />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-text-secondary mb-1.5">Tooltip</p>
                        <Tooltip content="Portaled into the Drawer DOM" side="right">
                          <Button variant="soft" size="sm">Hover for tooltip</Button>
                        </Tooltip>
                      </div>
                    </div>
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
            </React.Fragment>
          ))}
        </div>
      </div>
    );
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
