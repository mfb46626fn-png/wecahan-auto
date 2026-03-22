import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'navbar' | 'footer';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'navbar', className = '' }) => {
  const isFooter = variant === 'footer';
  
  // Adjusted sizes for better visibility of the new logo
  // Navbar: Increased to 44px height
  // Footer: Increased to 56px height
  const containerClasses = isFooter ? 'h-14 w-48' : 'h-11 w-40';

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`relative ${containerClasses}`}>
        <Image
          src="/logos/new-logo.png"
          alt="WeCaHan Logo"
          fill
          className="object-contain"
          priority={variant === 'navbar'}
        />
      </div>
    </div>
  );
};
