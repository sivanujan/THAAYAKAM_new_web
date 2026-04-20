"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonGroupProps {
  /**
   * Direction of the button group.
   * @default "horizontal"
   */
  direction?: "horizontal" | "vertical";
  /**
   * Spacing between buttons.
   * @default "md"
   */
  gap?: "sm" | "md" | "lg";
  /**
   * Buttons to display in the group.
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes for the container.
   */
  className?: string;
}

const gapMap = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

/**
 * A container component for grouping multiple buttons together with consistent spacing.
 * Supports horizontal and vertical layouts.
 */
export function ButtonGroup({
  direction = "horizontal",
  gap = "md",
  className,
  children,
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "horizontal" ? "flex-row flex-wrap items-center" : "flex-col",
        gapMap[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
