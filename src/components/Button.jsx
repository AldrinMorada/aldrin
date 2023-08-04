import React from "react";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";

import { cn } from "../lib/utils.js";

const buttonVariants = cva(
  "transition-default cursor-pointer active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        danger:
          "bg-danger text-white hover:bg-danger-dark dark:hover:bg-danger-dark focus:ring-danger-light dark:focus:ring-danger-light data-[state=open]:bg-danger-light dark:data-[state=open]:bg-danger-light",
        success:
          "bg-success text-white hover:bg-success-dark  dark:hover:bg-success-dark focus:ring-success-light dark:focus:ring-success-light data-[state=open]:bg-success-light dark:data-[state=open]:bg-success-light",
        info: "bg-info text-white hover:bg-info-dark  dark:hover:bg-info-dark focus:ring-info-light dark:focus:ring-info-light data-[state=open]:bg-info-light dark:data-[state=open]:bg-info-light",
        warning:
          "bg-warning text-white hover:bg-warning-dark  dark:hover:bg-warning-dark  focus:ring-warning-light dark:focus:ring-warning-light data-[state=open]:bg-warning-light dark:data-[state=open]:bg-warning-light",
        muted:
          "bg-muted text-gray-200 cursor-not-allowed dark:hover:bg-muted dark:bg-muted",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:text-blue-500 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          to={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
