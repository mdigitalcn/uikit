'use client'

import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import React from "react";

import { cn } from "../utils";
import { colorVars } from "../variants";
import type {
  NavigationMenuProps,
  NavigationMenuItem,
  NavigationMenuChildItem,
} from "./types";

const navigationMenuVariants = cva("navigationMenu_root", {
  variants: {
    orientation: {
      horizontal: "flex flex-row",
      vertical: "flex flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

const navigationMenuListVariants = cva(
  "navigationMenu_list flex items-center gap-1 relative",
  {
    variants: {
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  },
);

const navigationMenuItemVariants = cva("navigationMenu_item relative", {
  variants: {},
});

const navigationMenuTriggerVariants = cva(
  "navigationMenu_trigger inline-flex items-center justify-center gap-2 [--_radius:var(--radius-button)] rounded-slot cursor-pointer px-4 py-2 text-sm font-medium transition-colors hover:bg-surface focus:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slot focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-surface",
  {
    variants: {},
  },
);

const navigationMenuLinkVariants = cva(
  "navigationMenu_link inline-flex items-center justify-center gap-2 [--_radius:var(--radius-button)] rounded-slot px-4 py-2 text-sm font-medium transition-colors hover:bg-surface focus:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slot focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {},
  },
);

const navigationMenuContentVariants = cva(
  "navigationMenu_content z-(--z-popover) absolute w-auto min-w-(--navigation-menu-content-min-width) [--_radius:var(--radius-dropdown)] rounded-slot border border-border bg-background p-4 [--_shadow:var(--shadow-lg)] shadow-size-slot [--_duration:var(--duration-enter)] data-[state=closed]:[--_duration:var(--duration-exit)] duration-slot data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
  {
    variants: {
      orientation: {
        horizontal: "top-full left-0 mt-1 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2",
        vertical: "left-full top-0 ml-1 data-[state=closed]:slide-out-to-left-2 data-[state=open]:slide-in-from-left-2",
      },
    },
    defaultVariants: { orientation: "horizontal" },
  },
);

const NavigationMenuContent = React.memo(
  ({
    children,
    isOpen,
    orientation = "horizontal",
    className,
  }: {
    children: NavigationMenuChildItem[];
    isOpen: boolean;
    orientation?: "horizontal" | "vertical";
    className?: string;
  }) => {
    return (
      <div
        data-slot="content"
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          navigationMenuContentVariants({ orientation }),
          !isOpen && "hidden",
          className,
        )}
        role="menu"
      >
        <div className="grid gap-3">
          {children.map((child) => (
            <NavigationMenuChildLink key={child.key} item={child} />
          ))}
        </div>
      </div>
    );
  },
);

NavigationMenuContent.displayName = "NavigationMenuContent";

const NavigationMenuChildLink = React.memo(
  ({ item }: { item: NavigationMenuChildItem }) => {
    const handleClick = (e: React.MouseEvent) => {
      if (item.disabled) {
        e.preventDefault();
        return;
      }
      if (item.onClick) {
        e.preventDefault();
        item.onClick();
      }
    };

    const content = (
      <div className="flex items-start gap-3 rounded-md p-3 hover:bg-surface transition-colors">
        {item.icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface">
            {item.icon}
          </div>
        )}
        <div className="space-y-1">
          <div className="text-sm font-medium leading-none">{item.label}</div>
          {item.description && (
            <p className="text-sm leading-snug text-text-secondary">
              {item.description}
            </p>
          )}
        </div>
      </div>
    );

    if (item.href && !item.disabled) {
      return (
        <a
          href={item.href}
          onClick={handleClick}
          className={cn(
            "block",
            item.disabled && "pointer-events-none opacity-50",
          )}
          role="menuitem"
          aria-disabled={item.disabled}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={item.disabled}
        className="block w-full text-left disabled:pointer-events-none disabled:opacity-50"
        role="menuitem"
        aria-disabled={item.disabled}
      >
        {content}
      </button>
    );
  },
);

NavigationMenuChildLink.displayName = "NavigationMenuChildLink";

const NavigationMenuItemComponent = React.memo(
  ({
    item,
    onOpenChange,
    isOpen,
    orientation = "horizontal",
    classNames,
    closeDelay = 150,
  }: {
    item: NavigationMenuItem;
    onOpenChange: (key: string, open: boolean) => void;
    isOpen: boolean;
    orientation?: "horizontal" | "vertical";
    classNames?: NavigationMenuProps["classNames"];
    closeDelay?: number;
  }) => {
    const hasChildren = item.children && item.children.length > 0;
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(
      undefined,
    );

    const handleMouseEnter = () => {
      if (hasChildren && !item.disabled) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        onOpenChange(item.key, true);
      }
    };

    const handleMouseLeave = () => {
      if (hasChildren && !item.disabled) {
        timeoutRef.current = setTimeout(() => {
          onOpenChange(item.key, false);
        }, closeDelay);
      }
    };

    const handleClick = (e: React.MouseEvent) => {
      if (item.disabled) {
        e.preventDefault();
        return;
      }

      if (hasChildren) {
        e.preventDefault();
        onOpenChange(item.key, !isOpen);
      } else if (item.onClick) {
        e.preventDefault();
        item.onClick();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (item.disabled) return;

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (hasChildren) {
          onOpenChange(item.key, !isOpen);
        } else if (item.onClick) {
          item.onClick();
        }
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        onOpenChange(item.key, false);
      }
    };

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    const content = (
      <>
        {item.icon && <span className="shrink-0">{item.icon}</span>}
        <span>{item.label}</span>
        {hasChildren && (
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 transition-transform",
              isOpen && "rotate-180",
            )}
            aria-hidden="true"
          />
        )}
      </>
    );

    return (
      <li
        data-slot="item"
        className={cn(navigationMenuItemVariants(), classNames?.item)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="none"
      >
        {hasChildren ? (
          <>
            <button
              type="button"
              data-slot="trigger"
              data-state={isOpen ? "open" : "closed"}
              className={cn(
                navigationMenuTriggerVariants(),
                classNames?.trigger,
              )}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              disabled={item.disabled}
              aria-haspopup="true"
              aria-expanded={isOpen}
              role="menuitem"
            >
              {content}
            </button>
            <NavigationMenuContent
              children={item.children!}
              isOpen={isOpen}
              orientation={orientation}
              className={classNames?.content}
            />
          </>
        ) : item.href && !item.disabled ? (
          <a
            href={item.href}
            data-slot="link"
            className={cn(
              navigationMenuLinkVariants(),
              classNames?.link,
              item.disabled && "pointer-events-none opacity-50",
            )}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            role="menuitem"
            aria-disabled={item.disabled}
          >
            {content}
          </a>
        ) : (
          <button
            type="button"
            data-slot="link"
            className={cn(navigationMenuLinkVariants(), classNames?.link)}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            disabled={item.disabled}
            role="menuitem"
          >
            {content}
          </button>
        )}
      </li>
    );
  },
);

NavigationMenuItemComponent.displayName = "NavigationMenuItemComponent";

export const NavigationMenu = React.memo<NavigationMenuProps>(
  ({
    items,
    orientation = "horizontal",
    closeDelay,
    color = "primary",
    className,
    classNames,
    ref,
  }) => {
    const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());
    const navRef = React.useRef<HTMLElement>(null);

    React.useImperativeHandle(ref, () => navRef.current!);

    const handleOpenChange = React.useCallback((key: string, open: boolean) => {
      if (open) {
        setOpenItems(new Set([key])); // close all others, open only this one
      } else {
        setOpenItems((prev) => {
          const next = new Set(prev);
          next.delete(key);
          return next;
        });
      }
    }, []);

    // Close on outside click
    React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(e.target as Node)) {
          setOpenItems(new Set());
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    // Close on Escape
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setOpenItems(new Set());
        }
      };

      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }, []);

    return (
      <nav
        ref={navRef}
        data-slot="root"
        className={cn(
          navigationMenuVariants({ orientation }),
          colorVars[color],
          className,
          classNames?.root,
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <ul
          data-slot="list"
          className={cn(
            navigationMenuListVariants({ orientation }),
            classNames?.list,
          )}
          role="menubar"
        >
          {items.map((item) => (
            <NavigationMenuItemComponent
              key={item.key}
              item={item}
              onOpenChange={handleOpenChange}
              isOpen={openItems.has(item.key)}
              orientation={orientation}
              classNames={classNames}
              closeDelay={closeDelay}
            />
          ))}
        </ul>
      </nav>
    );
  },
);

NavigationMenu.displayName = "NavigationMenu";

export type * from "./types";
