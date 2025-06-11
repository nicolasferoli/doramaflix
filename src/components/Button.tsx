import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'custom';
}

export const Button: React.FC<ButtonProps> = ({ 
  href, 
  children, 
  className = '',
  variant = 'default'
}) => {
  const baseStyles = "inline-block font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg text-center";
  const defaultStyles = "bg-[#E50914]/90 hover:bg-[#E50914] text-white hover:shadow-[#E50914]/20";

  return (
    <a 
      href={href}
      className={`
        ${baseStyles}
        ${variant === 'default' ? defaultStyles : ''}
        ${className}
      `}
    >
      {children}
    </a>
  );
};