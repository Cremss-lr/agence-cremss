import type { ButtonHTMLAttributes } from "react";
import { Link } from "react-router";

const variants = {
  primary: "bg-mint text-ink hover:bg-mint-hover",
  secondary: "border-2 border-ink text-ink hover:bg-ground",
  ghost: "text-ink hover:bg-ground",
  dark: "bg-ink text-ground",
};

const sizes = {
  s: "px-5 py-2.5 text-btn-s",
  m: "px-7 py-4 text-btn-m",
  l: "px-9 py-5 text-btn-l",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  to?: string;
  href?: string;
};

export function Button({ variant = "primary", size = "m", to, href, className = "", ...props }: ButtonProps) {
  const classes = `inline-flex items-center gap-2.5 rounded-pill font-body transition-[color,background-color,scale] duration-standard active:scale-95 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-mint disabled:pointer-events-none disabled:opacity-40 ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) return <a href={href} className={classes}>{props.children}</a>;
  if (to) return <Link to={to} className={classes}>{props.children}</Link>;
  return <button className={classes} {...props} />;
}
