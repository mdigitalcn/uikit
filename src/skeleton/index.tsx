'use client'

import { cva } from "class-variance-authority";
import React from "react";

import { cn } from "../utils";
import { colorVars } from "../variants";
import type { SkeletonProps } from "./types";

const skeletonVariants = cva("animate-pulse", {
  variants: {
    size: {
      xs: "h-3",
      sm: "h-4",
      md: "h-5",
      lg: "h-6",
    },
    shape: {
      text: "rounded w-full",
      circle: "rounded-full aspect-square",
      rectangular: "rounded-md",
      rounded: "rounded-lg",
    },
    color: colorVars,
  },
  defaultVariants: {
    size: "md",
    shape: "text",
    color: "default",
  },
});

const Skeleton = React.memo<SkeletonProps>(
  ({ color = "default", size = "md", shape, circle = false, isLoaded = false, children, className }) => {
    const resolvedShape = shape ?? (circle ? 'circle' : 'text');

    if (isLoaded && children) {
      return (
        <div className="animate-in fade-in duration-300">
          {children}
        </div>
      );
    }

    return (
      <div
        data-slot="root"
        role="status"
        aria-busy="true"
        aria-label="Loading"
        className={cn(
          "skeleton_root",
          skeletonVariants({ size, shape: resolvedShape, color }),
          "bg-slot-20",
          className,
        )}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";

export type * from "./types";
export default Skeleton;
