import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Pagination from "./index";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "solid", "soft"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"],
    },
    showFirstLastButtons: { control: "boolean" },
    showSizeChanger: { control: "boolean" },
    showQuickJumper: { control: "boolean" },
    simple: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Playground: Story = {
  args: {
    total: 100,
    defaultCurrent: 1,
    pageSize: 10,
    size: "md",
    variant: "default",
    color: "primary",
  },
};

const ControlledDemo = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <div className="space-y-2">
      <Pagination
        total={200}
        current={page}
        pageSize={pageSize}
        onChange={(p, ps) => { setPage(p); setPageSize(ps); }}
        showSizeChanger
        showQuickJumper
        showFirstLastButtons
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      />
      <p className="text-xs text-text-secondary">
        Page: {page} | Page Size: {pageSize}
      </p>
    </div>
  );
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 p-6 max-w-3xl">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
        <div className="space-y-4">
          {(["default", "solid", "soft"] as const).map((v) => (
            <div key={v}>
              <p className="text-xs text-text-secondary mb-2">{v}</p>
              <Pagination total={100} defaultCurrent={3} variant={v} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
        <div className="space-y-3">
          {(["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] as const).map(
            (c) => (
              <div key={c} className="flex items-center gap-4">
                <span className="text-xs text-text-secondary w-16 shrink-0">{c}</span>
                <Pagination total={100} defaultCurrent={3} color={c} />
              </div>
            ),
          )}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
        <div className="space-y-4">
          {(["xs", "sm", "md", "lg"] as const).map((s) => (
            <div key={s}>
              <p className="text-xs text-text-secondary mb-2">{s}</p>
              <Pagination total={100} defaultCurrent={3} size={s} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With First / Last Buttons</h3>
        <Pagination total={200} defaultCurrent={5} showFirstLastButtons />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Size Changer</h3>
        <Pagination total={200} defaultCurrent={1} showSizeChanger />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Quick Jumper</h3>
        <Pagination total={200} defaultCurrent={1} showQuickJumper />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Show Total</h3>
        <Pagination
          total={200}
          defaultCurrent={3}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Simple Mode</h3>
        <Pagination total={100} defaultCurrent={4} simple />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">All Features</h3>
        <Pagination
          total={500}
          defaultCurrent={3}
          showFirstLastButtons
          showSizeChanger
          showQuickJumper
          showTotal={(t, range) => `${range[0]}-${range[1]} of ${t} results`}
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Controlled</h3>
        <ControlledDemo />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">States</h3>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-text-secondary mb-2">disabled</p>
            <Pagination total={100} defaultCurrent={3} disabled />
          </div>
        </div>
      </section>
    </div>
  ),
};
