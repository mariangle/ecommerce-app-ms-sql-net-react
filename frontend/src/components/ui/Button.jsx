import { cn } from "@/utils/cn";

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}) {
  return (
    <button
      className={cn(
        "button uppercase",
        variant === "secondary" ? "secondary-button" : "primary-button",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
