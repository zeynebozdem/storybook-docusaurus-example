import React from 'react';

export interface ButtonProps {
  /** Button içeriği */
  children: React.ReactNode;
  /** Tıklama olayı */
  onClick?: () => void;
  /** Button türü */
  variant?: 'primary' | 'secondary';
  /** Devre dışı durumu */
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant}`}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}; 