'use client'

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React from "react";

import { Spinner } from "../spinner";
import { cn } from "../utils";
import { buttonColorVars } from "../variants";
import type { ButtonProps, ButtonColor } from "./types";
import { useRipple, RippleContainer } from "../hooks/useRipple";

const buttonVariants = cva(
  [
    "inline-flex cursor-pointer text-center font-medium items-center justify-center",
    "[--_ease:var(--ease-spring)] transition-[opacity] duration-slot ease-slot",
    "disabled:opacity-50 disabled:pointer-events-none",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-slot",
    // Accessibility: respect prefers-reduced-motion
    "motion-reduce:transition-none",
  ],
  {
    variants: {
      variant: {
        solid: "bg-slot border border-slot text-slot-fg hover:bg-slot-90",
        outline: "border border-slot bg-transparent text-slot hover:bg-slot-10",
        soft: "border-none bg-slot-10 text-slot",
        dashed: "border border-dashed border-slot bg-transparent text-slot hover:bg-slot-10",
        link: "border-none bg-transparent text-slot hover:text-slot-80 hover:underline",
        ghost: "border-none bg-transparent text-slot hover:bg-slot-10",
      },
      color: buttonColorVars,
      size: {
        xs: "h-(--button-height-xs) px-(--button-padding-x-xs) text-xs gap-1.5",
        sm: "h-(--button-height-sm) px-(--button-padding-x-sm) text-sm gap-2",
        md: "h-(--button-height-md) px-(--button-padding-x-md) text-base gap-2",
        lg: "h-(--button-height-lg) px-(--button-padding-x-lg) text-lg gap-2.5",
      },
      shape: {
        rounded: "[--_radius:var(--radius-button)] rounded-slot",
        pill: "rounded-full",
        square: "rounded-none",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      isIconOnly: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { isIconOnly: true, size: "xs", class: "w-(--button-height-xs) px-0" },
      { isIconOnly: true, size: "sm", class: "w-(--button-height-sm) px-0" },
      { isIconOnly: true, size: "md", class: "w-(--button-height-md) px-0" },
      { isIconOnly: true, size: "lg", class: "w-(--button-height-lg) px-0" },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "md",
      shape: "rounded",
      fullWidth: false,
      isIconOnly: false,
    },
  },
);

const spinnerSizeMap: Record<
  NonNullable<ButtonProps["size"]>,
  "xs" | "sm" | "md" | "lg"
> = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "md",
};

function getSpinnerColor(
  variant: ButtonProps["variant"],
  color: ButtonColor,
): ButtonColor | "default" {
  if (variant === "solid") {
    return "default";
  }
  return color;
}

const Button = React.memo<ButtonProps>(
  ({
    variant = "solid",
    color = "primary",
    size = "md",
    shape = "rounded",
    loading = false,
    loadingText,
    startSection,
    endSection,
    fullWidth = false,
    isIconOnly = false,
    asChild = false,
    pressed,
    ripple = false,
    className,
    classNames,
    children,
    disabled,
    onClick,
    ref,
    ...props
  }) => {
    const isDisabled = disabled || loading;
    const spinnerSize = spinnerSizeMap[size];
    const spinnerColor = getSpinnerColor(variant, color);

    const {
      ripples,
      onPointerDown: ripplePointerDown,
      onKeyDown: rippleKeyDown,
      onAnimationEnd: rippleAnimationEnd,
    } = useRipple(ripple && !isDisabled);

    // Dev warning for icon-only buttons without aria-label
    if (import.meta.env?.DEV && isIconOnly && !props['aria-label'] && !props['aria-labelledby']) {
      console.warn('Button: icon-only buttons should have an aria-label or aria-labelledby prop for accessibility.')
    }

    const spinnerElement = (
      <span
        className={cn("button_spinner inline-flex items-center", classNames?.spinner)}
        data-slot="spinner"
      >
        <Spinner size={spinnerSize} color={spinnerColor} />
      </span>
    );

    // Loading replaces startSection with spinner
    const showStartSpinner = loading;
    const showStartSection = !loading && startSection;
    const showEndSection = !loading && endSection;

    const content = loading && loadingText ? loadingText : children;

    const iconOnlyLoading = isIconOnly && loading;

    const buttonClassName = cn(
      "button_root",
      buttonVariants({ color, size, variant, shape, fullWidth, isIconOnly }),
      pressed && "data-[pressed=true]:ring-2 data-[pressed=true]:ring-current/30",
      ripple && "relative overflow-hidden",
      classNames?.root,
      className,
    );

    const sharedProps = {
      className: buttonClassName,
      disabled: asChild ? undefined : isDisabled,
      "aria-busy": loading || undefined,
      "aria-disabled": isDisabled || undefined,
      "aria-pressed": pressed,
      "data-pressed": pressed != null ? String(pressed) : undefined,
      "data-slot": "root",
      onClick: isDisabled ? undefined : onClick,
      onPointerDown: ripplePointerDown,
      onKeyDown: rippleKeyDown,
      ...props,
    };

    const innerContent = iconOnlyLoading ? (
      <>
        {spinnerElement}
        <span className="sr-only">Loading</span>
      </>
    ) : (
      <>
        {showStartSpinner && spinnerElement}
        {showStartSection && (
          <span
            className={cn("button_section shrink-0", classNames?.startSection)}
            data-slot="start-section"
          >
            {startSection}
          </span>
        )}
        {content}
        {showEndSection && (
          <span
            className={cn("button_section shrink-0", classNames?.endSection)}
            data-slot="end-section"
          >
            {endSection}
          </span>
        )}
        {loading && <span className="sr-only">Loading</span>}
      </>
    );

    const rippleElements = (
      <RippleContainer
        ripples={ripples}
        className={classNames?.ripple}
        onAnimationEnd={rippleAnimationEnd}
      />
    );

    if (asChild) {
      return (
        <Slot ref={ref} {...sharedProps}>
          {React.isValidElement(children)
            ? React.cloneElement(
                children as React.ReactElement<{ children?: React.ReactNode }>,
                {},
                <>
                  {(children as React.ReactElement<{ children?: React.ReactNode }>).props.children}
                  {rippleElements}
                </>,
              )
            : children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        {...sharedProps}
        type={props.type ?? "button"}
      >
        {innerContent}
        {rippleElements}
      </button>
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };
export type * from "./types";
export default Button;
