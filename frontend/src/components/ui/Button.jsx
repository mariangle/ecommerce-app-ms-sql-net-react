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
        "uppercase button",
        variant === "secondary" ? "secondary-button" : "primary-button",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
