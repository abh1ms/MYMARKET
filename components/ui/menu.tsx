import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

export const menuVariants = cva(
  "relative inline-block text-left",
  {
    variants: {
      orientation: {
        vertical: "",
        horizontal: "inline-block",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);
export type MenuVariants = VariantProps<typeof menuVariants>;

interface MenuProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> {
  children: React.ReactNode;
  orientation?: "vertical" | "horizontal";
  className?: string;
}
export const Menu = React.forwardRef<
  HTMLElement,
  MenuProps
>(( { className, children, orientation = "vertical", ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(menuVariants({ orientation }), className)}
    {...props}
  >
    {children}
  </div>
));
Menu.displayName = "Menu";

interface MenuTriggerProps extends React.ButtonHTMLAttributes<
  HTMLButtonElement
> {
  children: React.ReactNode;
  className?: string;
}
export const MenuTrigger = React.forwardRef<
  HTMLButtonElement,
  MenuTriggerProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      className={clsx(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="ml-2 h-4 w-4" />
    </button>
  );
});
MenuTrigger.displayName = "MenuTrigger";

interface MenuContentProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> {
  children: React.ReactNode;
  className?: string;
  sideOffset?: number | string;
}
export const MenuContent = React.forwardRef<
  HTMLElement,
  MenuContentProps
>(({ className, children, sideOffset = 4, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        "absolute z-50 mt-2 w-56 origin-top-right rounded-md bg-popover p-1 shadow-md border border-border/50",
        className
      )}
      {...props}
    >
      <div className="py-1">{children}</div>
      {/* TODO: sideOffset */}
    </div>
  );
});
MenuContent.displayName = "MenuContent";

interface MenuItemProps extends React.ButtonHTMLAttributes<
  HTMLButtonElement
> {
  children: React.ReactNode;
  className?: string;
}
export const MenuItem = React.forwardRef<
  HTMLButtonElement,
  MenuItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      className={clsx(
        "flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm transition-colors focus:bg-primary focus:text-primary-foreground focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
MenuItem.displayName = "MenuItem";