import React, { useState } from 'react';

export interface CheckboxProps {
  /** Checkbox etiketi */
  label: string;
  /** Başlangıç değeri */
  defaultChecked?: boolean;
  /** Devre dışı durumu */
  disabled?: boolean;
  /** Değişiklik işleyicisi */
  onChange?: (checked: boolean) => void;
}

export const Checkbox = ({
  label,
  defaultChecked = false,
  disabled = false,
  onChange,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        aria-checked={checked}
      />
      <span className="checkbox-label">{label}</span>
    </label>
  );
}; 