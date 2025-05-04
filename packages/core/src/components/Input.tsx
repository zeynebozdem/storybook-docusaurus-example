import React from 'react';

export interface InputProps {
  /** Input etiketi */
  label: string;
  /** Placeholder metni */
  placeholder?: string;
  /** Input tipi */
  type?: 'text' | 'password' | 'email' | 'number';
  /** Hata mesajı */
  error?: string;
  /** Gerekli alan durumu */
  required?: boolean;
  /** Değişiklik işleyicisi */
  onChange?: (value: string) => void;
}

export const Input = ({
  label,
  placeholder = '',
  type = 'text',
  error,
  required = false,
  onChange,
}: InputProps) => {
  const id = `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">
        {label} {required && <span className="required-mark">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className={`input-field ${error ? 'input-error' : ''}`}
        aria-invalid={!!error}
        required={required}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}; 