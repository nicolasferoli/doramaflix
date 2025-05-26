import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ href, children, className = '' }) => {
  return (
    <a 
      href={href}
      className={`
        inline-block bg-[#E50914]/90 hover:bg-[#E50914] text-white font-bold py-3 px-6 
        rounded-md transition-all duration-300 transform hover:scale-105 
        shadow-lg hover:shadow-[#E50914]/20 text-center
        ${className}
      `}
    >
      {children}
    </a>
  );
};