'use client'
import { Input } from 'react-daisyui'
import React from 'react'

interface InputProps {
  type: 'text' | 'password';
  placeholder: string;
  iconSrc?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const IconInput: React.FC<InputProps> = ({
  type,
  placeholder,
  iconSrc,
  value,
  onChange,
  size = 'medium',
  className,
}) => {
  const sizeClasses = {
    small: 'w-32 h-10 text-sm',
    medium: 'w-72 h-12 text-base',
    large: 'w-86 h-14 text-lg',
  };

  return (
    <label className={`relative flex items-center border px-2 space-x-1 rounded-2xl bg-white ${sizeClasses[size]} ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{boxSizing: 'border-box'}}
        className="flex-grow px-6 py-2 border-none rounded-2xl bg-white focus:outline-none"
      />
      {iconSrc && (
        <span className="absolute">
          <img src={iconSrc} alt="Ícone" className="w-4 h-4" />
        </span>
      )}
    </label>
  );
};

export default IconInput;