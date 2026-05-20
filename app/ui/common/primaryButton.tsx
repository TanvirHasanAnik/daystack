import React from "react";

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ElementType;
  iconPosition?: "left" | "right";
};

export default function PrimaryButton({
  className = "",
  icon: Icon,
  iconPosition = "left",
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`w-full cursor-pointer rounded-2xl bg-button-primary text-button-primary-text px-4 py-3 flex items-center justify-center gap-2 transition hover:opacity-90 ${className}`}
    >
      {Icon && iconPosition === "left" && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </button>
  );
}