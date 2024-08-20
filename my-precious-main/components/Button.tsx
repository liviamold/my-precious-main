// components/Button.tsx
import React from 'react'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link'
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'neutral',
  onClick,
  className = '',
  children,
}) => {
  // Define base classes for the button
  let baseClasses = 'btn btn-wide rounded-full';

  // Define variant classes based on the variant prop
  let variantClasses: string;
  switch (variant) {
    case 'primary':
      variantClasses = 'btn-primary'
      break;
    case 'secondary':
      variantClasses = 'btn-secondary'
      break;
    case 'accent':
      variantClasses = 'btn-accent'
      break;
    case 'ghost':
      variantClasses = 'btn-ghost'
      break;
    case 'link':
      variantClasses = 'btn-link'
      break;
    case 'neutral':
    default:
      variantClasses = 'btn-neutral'
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ borderRadius: '9999px' }}
      className={`${baseClasses} ${variantClasses} ${className}`  }
    >
      {children}
    </button>
  );
};

export default Button
