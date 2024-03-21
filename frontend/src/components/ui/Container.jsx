import { cn } from "@/utils/cn";

export default function Container({ children, className, page }) {
  return (
    <div
      className={cn(
        "max-w-screen-lg px-4 mx-auto w-full",
        page && "my-24 min-h-[90svh]",
        className
      )}
    >
      {children}
    </div>
  );
}
