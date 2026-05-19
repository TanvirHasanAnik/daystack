import React from "react";

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({ className = "", ...props }: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`w-full cursor-pointer rounded-2xl bg-button-primary text-button-primary-text px-4 py-3 flex items-center justify-center transition hover:opacity-90 ${className}`}
    />
  );
}