import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  showArrow = false,
  disabled = false,
  className = '',
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F766E] disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-md group';

  const sizes = {
    sm: 'py-2 px-3.5 text-xs gap-1.5',
    md: 'py-2.5 px-5 text-sm gap-2',
    lg: 'py-3.5 px-7 text-base gap-2.5',
  };

  const variants = {
    // Primary Medical Teal button
    primary: 'bg-[#0F766E] text-white hover:bg-[#0D9488] active:bg-[#115E59] shadow-xs',
    // Secondary subtle border button
    secondary: 'bg-white text-[#1A1A1A] border border-[#E8E4DF] hover:bg-[#F5F3F0] hover:border-[#CBD5E1]',
    // Accent muted light teal
    accent: 'bg-[#F0FDFA] text-[#0F766E] border border-[#CCFBF1] hover:bg-[#CCFBF1]',
    // Text Action link
    text: 'bg-transparent text-[#0F766E] hover:text-[#0D9488] p-0 font-medium underline-offset-4 hover:underline',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0 stroke-[1.75]" />}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 stroke-[1.75] transition-transform duration-150 group-hover:translate-x-1" />
      )}
    </button>
  );
}


