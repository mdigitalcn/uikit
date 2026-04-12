'use client'

import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  Loader2,
} from "lucide-react";
import React, { useCallback, useContext, createContext, useMemo } from "react";
import { Toaster, toast as sonnerToast } from "sonner";

import Notification from "../notification";
import type {
  ToastContextValue,
  ToastOptions,
  ToastProviderProps,
} from "./types";

/**
 * Default icons per semantic color
 */
const defaultIcons: Partial<Record<string, React.ReactElement>> = {
  success: <CheckCircle2 className="w-5 h-5" />,
  error: <AlertCircle className="w-5 h-5" />,
  warning: <AlertTriangle className="w-5 h-5" />,
  info: <Info className="w-5 h-5" />,
};

/**
 * Internal toast renderer — uses Notification component directly
 */
const ToastRenderer = ({
  id,
  options,
}: {
  id: string | number;
  options: Omit<ToastOptions, "duration"> & { loading?: boolean };
}) => {
  const variant = options.variant ?? "default";
  const color = options.color ?? "default";
  const size = options.size ?? "sm";
  const closable = options.closable ?? !options.loading;
  const borderLine = options.borderLine ?? false;
  const icon = options.loading ? (
    <Loader2 className="w-5 h-5 animate-spin" />
  ) : options.icon !== undefined ? (
    options.icon
  ) : (
    defaultIcons[color]
  );

  return (
    <div data-slot="toast">
      <Notification
        title={options.title}
        description={options.description}
        variant={variant}
        color={color}
        size={size}
        icon={icon}
        borderLine={borderLine}
        closable={closable}
        onClose={() => sonnerToast.dismiss(id)}
        action={options.action}
        classNames={options.classNames}
        className="min-w-(--toast-min-width) rounded-slot [--_shadow:var(--shadow-lg)] shadow-size-slot"
      />
    </div>
  );
};

/**
 * Fire a toast with custom renderer
 */
const fireToast = (options: ToastOptions): string | number =>
  sonnerToast.custom((id) => <ToastRenderer id={id} options={options} />, {
    duration: options.duration === 0 ? Infinity : options.duration,
    dismissible: options.closable ?? true,
    onDismiss: options.onClose,
  }) as string | number;

/**
 * Toast Context
 */
const ToastContext = createContext<ToastContextValue | null>(null);

/**
 * Toast Provider — Sonner handles positioning/stacking, we handle rendering
 */
export const ToastProvider = React.memo<ToastProviderProps>(
  ({
    children,
    position = "top-right",
    maxToasts = 5,
    offset = 16,
    theme = "system",
    closeButton = false,
    duration = 5000,
    className,
  }) => {
    const toast = useCallback(
      (options: ToastOptions): string | number => fireToast(options),
      [],
    );

    const success = useCallback(
      (title: string, description?: string): string | number =>
        fireToast({ title, description, color: "success" }),
      [],
    );

    const error = useCallback(
      (title: string, description?: string): string | number =>
        fireToast({ title, description, color: "error" }),
      [],
    );

    const warning = useCallback(
      (title: string, description?: string): string | number =>
        fireToast({ title, description, color: "warning" }),
      [],
    );

    const info = useCallback(
      (title: string, description?: string): string | number =>
        fireToast({ title, description, color: "info" }),
      [],
    );

    const promise = useCallback(
      <T,>(
        p: Promise<T>,
        opts: {
          loading: string;
          success: string | ((data: T) => string);
          error: string | ((err: unknown) => string);
        },
      ): string | number => {
        const id = sonnerToast.custom((tid) => (
          <ToastRenderer
            id={tid}
            options={{ title: opts.loading, loading: true }}
          />
        )) as string | number;

        p.then((data) => {
          sonnerToast.custom(
            (tid) => (
              <ToastRenderer
                id={tid}
                options={{
                  title:
                    typeof opts.success === "function"
                      ? opts.success(data)
                      : opts.success,
                  color: "success",
                }}
              />
            ),
            { id },
          );
        }).catch((err) => {
          sonnerToast.custom(
            (tid) => (
              <ToastRenderer
                id={tid}
                options={{
                  title:
                    typeof opts.error === "function"
                      ? opts.error(err)
                      : opts.error,
                  color: "error",
                }}
              />
            ),
            { id },
          );
        });

        return id;
      },
      [],
    );

    const dismiss = useCallback((id: string | number) => {
      sonnerToast.dismiss(id);
    }, []);

    const dismissAll = useCallback(() => {
      sonnerToast.dismiss();
    }, []);

    const contextValue = useMemo<ToastContextValue>(
      () => ({
        toast,
        success,
        error,
        warning,
        info,
        promise,
        dismiss,
        dismissAll,
      }),
      [toast, success, error, warning, info, promise, dismiss, dismissAll],
    );

    return (
      <ToastContext.Provider value={contextValue}>
        {children}
        <Toaster
          position={position}
          visibleToasts={maxToasts}
          offset={offset}
          theme={theme}
          closeButton={closeButton}
          duration={duration}
          className={className}
          toastOptions={{ unstyled: true }}
        />
      </ToastContext.Provider>
    );
  },
);

ToastProvider.displayName = "ToastProvider";

/**
 * useToast Hook
 */
export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export type * from "./types";
