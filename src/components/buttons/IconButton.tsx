'use client';
import { cn } from '@/lib/utils';
import React, { MouseEventHandler } from 'react';

// type ButtonType = "button"

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: MouseEventHandler;
  className?: string;
  buttonText?: string;
  type? : "button" | 'submit' | 'reset' ;
  theme? : 'light' | 'dark';
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  buttonText,
  onClick = ()=>{},
  type = 'button',
  theme = 'dark'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'flex items-center gap-[2px] px-4 py-2 rounded-md cursor-pointer', 
        theme === 'dark' ? 'bg-neutral-600 text-neutral-100 hover:bg-neutral-500' : 'bg-transparent hover:bg-neutral-200 rounded-xl', 
        className)}
    >
      {buttonText ? <span>{buttonText}</span> : null}
      {icon}
    </button>
  );
};

export default IconButton;
