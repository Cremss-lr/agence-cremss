import type { ButtonHTMLAttributes } from "react";
import { Link } from "react-router";

const variants = {
  primary: "bg-mint hover:bg-mint-hover",
  secondary: "border-2 border-ink hover:bg-ground",
  ghost: "hover:bg-ground",
};

const sizes = {
  s: "px-5 py-2.5 text-btn-s",
  m: "px-7 py-4 text-btn-m",
  l: "px-9 py-5 text-btn-l",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Renders a router link instead of a <button>. */
  to?: string;
};

export function Button({ variant = "primary", size = "m", to, className = "", ...props }: ButtonProps) {
  const classes = `inline-flex items-center gap-2.5 rounded-pill font-body text-ink transition-colors duration-instant focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-mint disabled:pointer-events-none disabled:opacity-40 ${variants[variant]} ${sizes[size]} ${className}`;
  if (to) return <Link to={to} className={classes}>{props.children}</Link>;
  return <button className={classes} {...props} />;
}
