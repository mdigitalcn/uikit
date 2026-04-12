import type { Meta, StoryObj } from "@storybook/react";
import { Search, Settings, User, FileText, Mail, Inbox, Archive, Trash2, Calendar, Bell, LogOut } from "lucide-react";
import React from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut } from "./index";

const meta: Meta<typeof Command> = {
  title: "Navigation/Command",
  component: Command,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs","sm","md","lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Command>;

export const Playground: Story = {
  render: () => (
    <Command className="border rounded-lg max-w-md shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Inbox className="mr-2 h-4 w-4" />
            <span>Inbox</span>
            <CommandShortcut>⌘I</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </CommandItem>
          <CommandItem>
            <Bell className="mr-2 h-4 w-4" />
            <span>Notifications</span>
          </CommandItem>
          <CommandItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <CommandShortcut>⇧⌘Q</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Basic Command Palette</h3>
        <Command className="border rounded-lg max-w-md shadow-sm">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Files">
              <CommandItem><FileText className="mr-2 h-4 w-4" />report.pdf</CommandItem>
              <CommandItem><FileText className="mr-2 h-4 w-4" />notes.md</CommandItem>
              <CommandItem><FileText className="mr-2 h-4 w-4" />design.fig</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="People">
              <CommandItem><User className="mr-2 h-4 w-4" />Alice Johnson</CommandItem>
              <CommandItem><User className="mr-2 h-4 w-4" />Bob Smith</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With Keyboard Shortcuts</h3>
        <Command className="border rounded-lg max-w-md shadow-sm">
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No commands found.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Compose</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Archive className="mr-2 h-4 w-4" />
                <span>Archive</span>
                <CommandShortcut>⌘E</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete</span>
                <CommandShortcut>⌘⌫</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Navigation">
              <CommandItem>
                <Inbox className="mr-2 h-4 w-4" />
                <span>Inbox</span>
                <CommandShortcut>G I</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>G S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-4">
          {(["xs","sm","md","lg"] as const).map(s => (
            <div key={s}>
              <p className="text-xs text-text-secondary mb-2">size={s}</p>
              <Command size={s} className="border rounded-lg max-w-xs shadow-sm">
                <CommandInput placeholder="Search..." size={s} />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem><Calendar className="mr-2 h-4 w-4" /><span>Calendar</span></CommandItem>
                    <CommandItem><Settings className="mr-2 h-4 w-4" /><span>Settings</span><CommandShortcut>⌘,</CommandShortcut></CommandItem>
                    <CommandItem><User className="mr-2 h-4 w-4" /><span>Profile</span></CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">App Launcher Style</h3>
        <Command className="border rounded-lg max-w-sm shadow-sm">
          <CommandInput placeholder="Search apps..." />
          <CommandList>
            <CommandEmpty>No apps found.</CommandEmpty>
            <CommandGroup>
              {[
                { icon: <Mail className="h-4 w-4" />, label: "Mail" },
                { icon: <Calendar className="h-4 w-4" />, label: "Calendar" },
                { icon: <Bell className="h-4 w-4" />, label: "Notifications" },
                { icon: <FileText className="h-4 w-4" />, label: "Documents" },
                { icon: <Settings className="h-4 w-4" />, label: "Settings" },
              ].map(({ icon, label }) => (
                <CommandItem key={label} className="gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface border border-border">
                    {icon}
                  </span>
                  {label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </section>
    </div>
  ),
};
