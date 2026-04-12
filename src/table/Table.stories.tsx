import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Table from "./index";
import Badge from "../badge";
import Button from "../button";
import type { ExtendedColumnDef } from "./types";
import type { SortingState } from "@tanstack/react-table";

const meta: Meta<typeof Table> = {
  title: "Data Display/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["outline", "line", "ghost"] },
    color: { control: "select", options: ["default", "primary", "secondary", "accent", "success", "error", "warning", "info"] },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    striped: { control: "boolean" },
    hoverable: { control: "boolean" },
    bordered: { control: "boolean" },
    loading: { control: "boolean" },
    enableSorting: { control: "boolean" },
    enableRowSelection: { control: "boolean" },
    enablePagination: { control: "boolean" },
    enableExpandable: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Table>;

interface Person {
  id: string;
  name: string;
  role: string;
  department: string;
  status: "active" | "inactive" | "pending";
  email: string;
  salary: number;
}

const sampleData: Person[] = [
  { id: "1", name: "Alice Johnson", role: "Senior Engineer", department: "Engineering", status: "active", email: "alice@example.com", salary: 120000 },
  { id: "2", name: "Bob Smith", role: "Product Designer", department: "Design", status: "active", email: "bob@example.com", salary: 95000 },
  { id: "3", name: "Carol Williams", role: "Product Manager", department: "Product", status: "active", email: "carol@example.com", salary: 110000 },
  { id: "4", name: "David Brown", role: "Data Analyst", department: "Analytics", status: "inactive", email: "david@example.com", salary: 85000 },
  { id: "5", name: "Eva Martinez", role: "DevOps Engineer", department: "Engineering", status: "active", email: "eva@example.com", salary: 115000 },
  { id: "6", name: "Frank Lee", role: "QA Engineer", department: "Engineering", status: "pending", email: "frank@example.com", salary: 80000 },
  { id: "7", name: "Grace Kim", role: "UX Researcher", department: "Design", status: "active", email: "grace@example.com", salary: 90000 },
  { id: "8", name: "Henry Wilson", role: "Backend Engineer", department: "Engineering", status: "inactive", email: "henry@example.com", salary: 105000 },
];

const statusColorMap: Record<string, "success" | "default" | "warning"> = {
  active: "success",
  inactive: "default",
  pending: "warning",
};

const baseColumns: ExtendedColumnDef<Person, unknown>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "role", header: "Role" },
  { accessorKey: "department", header: "Department" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const val = getValue() as string;
      return (
        <Badge color={statusColorMap[val]} variant="soft" size="sm">
          {val.charAt(0).toUpperCase() + val.slice(1)}
        </Badge>
      );
    },
  },
  { accessorKey: "email", header: "Email" },
];

export const Playground: Story = {
  args: {
    data: sampleData,
    columns: baseColumns,
    variant: "outline",
    size: "md",
    hoverable: true,
    striped: false,
    bordered: false,
    loading: false,
    caption: "Team members",
  },
};

export const Showcase: Story = {
  render: () => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});

    return (
      <div className="space-y-10 p-6 max-w-5xl">
        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Variants</h3>
          <div className="space-y-6">
            {(["outline", "line", "ghost"] as const).map((variant) => (
              <div key={variant}>
                <p className="text-xs text-text-secondary mb-2 capitalize">{variant}</p>
                <Table
                  data={sampleData.slice(0, 3)}
                  columns={baseColumns.slice(0, 4)}
                  variant={variant}
                  size="sm"
                  hoverable
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sizes</h3>
          <div className="space-y-6">
            {(["xs", "sm", "md", "lg"] as const).map((size) => (
              <div key={size}>
                <p className="text-xs text-text-secondary mb-2 uppercase">{size}</p>
                <Table
                  data={sampleData.slice(0, 2)}
                  columns={baseColumns.slice(0, 3)}
                  size={size}
                  variant="outline"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Striped and Bordered</h3>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-text-secondary mb-2">Striped</p>
              <Table
                data={sampleData.slice(0, 4)}
                columns={baseColumns}
                variant="outline"
                striped
                hoverable
              />
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-2">Bordered</p>
              <Table
                data={sampleData.slice(0, 4)}
                columns={baseColumns}
                variant="outline"
                bordered
                hoverable
              />
            </div>
            <div>
              <p className="text-xs text-text-secondary mb-2">Striped and Bordered</p>
              <Table
                data={sampleData.slice(0, 4)}
                columns={baseColumns}
                variant="outline"
                striped
                bordered
                hoverable
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Sortable Columns</h3>
          <Table
            data={sampleData}
            columns={[
              { accessorKey: "name", header: "Name" },
              { accessorKey: "role", header: "Role" },
              { accessorKey: "department", header: "Department" },
              { accessorKey: "salary", header: "Salary", cell: ({ getValue }) => `$${(getValue() as number).toLocaleString()}` },
            ]}
            variant="outline"
            enableSorting
            sorting={sorting}
            onSortingChange={setSorting}
            hoverable
          />
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Row Selection</h3>
          <Table
            data={sampleData}
            columns={baseColumns}
            variant="outline"
            enableRowSelection
            enableMultiRowSelection
            rowSelection={rowSelection}
            onRowSelectionChange={setRowSelection}
            hoverable
          />
          <p className="text-xs text-text-secondary mt-2">
            Selected rows: {Object.keys(rowSelection).filter((k) => rowSelection[k]).join(", ") || "none"}
          </p>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Expandable Rows</h3>
          <Table
            data={sampleData.slice(0, 5)}
            columns={baseColumns.slice(0, 4)}
            variant="outline"
            enableExpandable
            expandedContent={(row) => (
              <div className="px-4 py-3 bg-surface rounded text-sm text-text-secondary space-y-1">
                <p><span className="font-medium text-text-primary">Email:</span> {row.original.email}</p>
                <p><span className="font-medium text-text-primary">Salary:</span> ${row.original.salary.toLocaleString()}</p>
                <p><span className="font-medium text-text-primary">Department:</span> {row.original.department}</p>
              </div>
            )}
            hoverable
          />
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Loading State</h3>
          <Table
            data={[]}
            columns={baseColumns}
            variant="outline"
            loading
            loadingRows={5}
          />
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Empty State</h3>
          <Table
            data={[]}
            columns={baseColumns}
            variant="outline"
            emptyState={
              <div className="py-10 text-center text-text-secondary">
                <p className="font-medium">No results found</p>
                <p className="text-sm mt-1">Try adjusting your search or filters.</p>
              </div>
            }
          />
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">With Pagination</h3>
          <Table
            data={sampleData}
            columns={baseColumns}
            variant="outline"
            enablePagination
            pageSize={3}
            pageSizeOptions={[3, 5, 8]}
            paginationPosition="bottomright"
            hoverable
          />
        </section>

        <section>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Colors</h3>
          <div className="space-y-6">
            {(["default", "primary", "secondary", "accent"] as const).map((color) => (
              <div key={color}>
                <p className="text-xs text-text-secondary mb-2 capitalize">{color}</p>
                <Table
                  data={sampleData.slice(0, 3)}
                  columns={baseColumns.slice(0, 4)}
                  variant="outline"
                  color={color}
                  size="sm"
                  enableRowSelection
                  hoverable
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  },
};

export const BasicTable: Story = {
  args: {
    data: sampleData,
    columns: baseColumns,
    variant: "outline",
    hoverable: true,
    caption: "Team members",
  },
};

export const SortableTable: Story = {
  render: () => {
    const [sorting, setSorting] = useState<SortingState>([]);
    return (
      <div className="p-4 max-w-3xl">
        <Table
          data={sampleData}
          columns={[
            { accessorKey: "name", header: "Name" },
            { accessorKey: "role", header: "Role" },
            { accessorKey: "department", header: "Department" },
            { accessorKey: "salary", header: "Salary", cell: ({ getValue }) => `$${(getValue() as number).toLocaleString()}` },
          ]}
          variant="outline"
          enableSorting
          sorting={sorting}
          onSortingChange={setSorting}
          hoverable
        />
      </div>
    );
  },
};

export const SelectableTable: Story = {
  render: () => {
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
    const selectedCount = Object.values(rowSelection).filter(Boolean).length;
    return (
      <div className="p-4 max-w-3xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-secondary">{selectedCount} row(s) selected</span>
          <Button size="sm" variant="outline" disabled={selectedCount === 0} onClick={() => setRowSelection({})}>
            Clear selection
          </Button>
        </div>
        <Table
          data={sampleData}
          columns={baseColumns}
          variant="outline"
          enableRowSelection
          enableMultiRowSelection
          rowSelection={rowSelection}
          onRowSelectionChange={setRowSelection}
          hoverable
        />
      </div>
    );
  },
};

export const LoadingState: Story = {
  args: {
    data: [],
    columns: baseColumns,
    variant: "outline",
    loading: true,
    loadingRows: 6,
  },
};
