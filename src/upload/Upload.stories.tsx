import type { Meta, StoryObj } from "@storybook/react";
import { FileText, Image } from "lucide-react";
import React from "react";
import Upload from "./index";

const SAMPLE_FILES = [
  {
    uid: "1",
    name: "report-2025.pdf",
    size: 204800,
    type: "application/pdf",
    status: "done" as const,
    percent: 100,
  },
  {
    uid: "2",
    name: "photo.jpg",
    size: 512000,
    type: "image/jpeg",
    status: "done" as const,
    percent: 100,
  },
];

const UPLOADING_FILE = [
  {
    uid: "3",
    name: "uploading-file.zip",
    size: 1048576,
    type: "application/zip",
    status: "uploading" as const,
    percent: 60,
  },
];

const ERROR_FILE = [
  {
    uid: "4",
    name: "failed-upload.txt",
    size: 1024,
    type: "text/plain",
    status: "error" as const,
    percent: 0,
  },
];

const meta: Meta<typeof Upload> = {
  title: "Form/Upload",
  component: Upload,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["button", "dropzone", "dragger", "picture", "avatar"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    color: {
      control: "select",
      options: [
        "default", "primary", "secondary", "accent",
        "success", "error", "warning", "info", "ghost",
      ],
    },
    disabled: { control: "boolean" },
    multiple: { control: "boolean" },
    showUploadList: { control: "boolean" },
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    warning: { control: "text" },
    success: { control: "text" },
    info: { control: "text" },
    buttonText: { control: "text" },
    dragText: { control: "text" },
    dragHint: { control: "text" },
    maxSize: { control: "number" },
    maxCount: { control: "number" },
    accept: { control: "text" },
    listType: { control: "select", options: ["text", "picture", "picture-card"] },
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Playground: Story = {
  args: {
    variant: "button",
    size: "md",
    color: "primary",
    label: "Upload file",
    buttonText: "Upload File",
    showUploadList: true,
    multiple: false,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="space-y-10 max-w-lg">
      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Button Variant</h3>
        <div className="space-y-3">
          <Upload
            variant="button"
            label="Default button"
            buttonText="Upload File"
          />
          <Upload
            variant="button"
            label="Multiple files"
            buttonText="Upload Files"
            multiple
            helperText="You can select multiple files"
          />
          <Upload
            variant="button"
            label="Images only"
            buttonText="Upload Image"
            accept="image/*"
            helperText="Accepts .jpg, .png, .gif"
          />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Dropzone Variant</h3>
        <Upload
          variant="dropzone"
          label="Drop files here"
          dragText="Click or drag file to this area to upload"
          dragHint="Support for a single or bulk upload"
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Dragger Variant</h3>
        <Upload
          variant="dragger"
          label="Drag and drop"
          dragText="Click or drag file to this area to upload"
          dragHint="Supports: PDF, DOC, XLS up to 10MB"
          maxSize={10 * 1024 * 1024}
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Picture Variant</h3>
        <Upload
          variant="picture"
          label="Upload images"
          accept="image/*"
          multiple
          listType="picture"
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Avatar Variant</h3>
        <Upload
          variant="avatar"
          label="Profile picture"
          accept="image/*"
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h3>
        <div className="space-y-3">
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <Upload
              key={size}
              variant="button"
              label={`Size: ${size}`}
              size={size}
              buttonText={`Upload (${size})`}
            />
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">With File List</h3>
        <Upload
          variant="button"
          label="With uploaded files"
          buttonText="Add More Files"
          defaultFileList={SAMPLE_FILES}
          multiple
          showUploadList
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Upload Progress</h3>
        <Upload
          variant="button"
          label="File uploading"
          defaultFileList={UPLOADING_FILE}
          showUploadList
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Upload Error</h3>
        <Upload
          variant="button"
          label="Upload with error"
          defaultFileList={ERROR_FILE}
          showUploadList
          error="Upload failed. Please try again."
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Validation States</h3>
        <div className="space-y-3">
          <Upload variant="button" label="Warning" warning="File size exceeds recommendation" />
          <Upload variant="button" label="Success" success="All files uploaded successfully" />
          <Upload variant="button" label="Info" info="Max file size: 5MB per file" />
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-text-secondary mb-3">Disabled</h3>
        <Upload
          variant="button"
          label="Disabled upload"
          buttonText="Upload File"
          disabled
          defaultFileList={SAMPLE_FILES}
        />
      </section>
    </div>
  ),
};
