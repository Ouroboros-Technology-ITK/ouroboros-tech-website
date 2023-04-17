import cn from "classnames";

export const Button = ({
  children,
  variant = "primary",
  type = "button",
  size = "md",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "flex items-center justify-center gap-2 rounded-[4px] text-brand-primary-00 transition-all duration-200",
        {
          "bg-brand-secondary-05 outline-none ring-brand-secondary-02 hover:[&:not(:disabled)]:bg-brand-secondary-06 focus:[&:not(:disabled)]:ring-2 active:[&:not(:disabled)]:bg-brand-secondary-07":
            variant === "primary",
          "bg-transparent text-brand-secondary-06 outline outline-1 outline-brand-secondary-06 focus:outline-brand-secondary-00 hover:[&:not(:disabled)]:text-brand-secondary-04 hover:[&:not(:disabled)]:outline-brand-secondary-04":
            variant === "outline",

          "label-12-medium px-2 py-1.5": size === "sm",
          "label-16-medium px-4 py-2.5": size === "md",
          "label-18-medium px-4 py-3": size === "md",

          "cursor-not-allowed opacity-50": disabled,
        },
      )}
    >
      {children}
    </button>
  );
};
