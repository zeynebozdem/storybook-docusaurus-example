import React, { useState } from 'react';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  /** Dropdown etiketi */
  label: string;
  /** Seçenekler listesi */
  options: DropdownOption[];
  /** Varsayılan seçili değer */
  defaultValue?: string;
  /** Devre dışı durumu */
  disabled?: boolean;
  /** Değişiklik işleyicisi */
  onChange?: (value: string) => void;
}

export const Dropdown = ({
  label,
  options,
  defaultValue = '',
  disabled = false,
  onChange,
}: DropdownProps) => {
  const [value, setValue] = useState(defaultValue);
  const id = `dropdown-${label.toLowerCase().replace(/\s+/g, '-')}`;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor={id} className="dropdown-label">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className="dropdown-select"
        aria-label={label}
      >
        <option value="" disabled hidden>
          Seçiniz...
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}; 