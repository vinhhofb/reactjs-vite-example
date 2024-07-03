import React from 'react';
import { Controller } from 'react-hook-form';

const CheckBox = ({ control, options = [], name, label, className = '', error }) => {
  return (
    <div className={className}>
      {label && <label className="block text-left mb-2">{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => {
          const handleCheckboxChange = (optionValue) => {
            const selectedIndex = (value || []).indexOf(optionValue);
            if (selectedIndex === -1) {
              // Option was not selected, add it
              onChange([...(value || []), optionValue]);
            } else {
              // Option was already selected, remove it
              const updatedSelection = [
                ...(value || []).slice(0, selectedIndex),
                ...(value || []).slice(selectedIndex + 1)
              ];
              onChange(updatedSelection);
            }
          };

          return options.length > 0 ? (
            options.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option.value}
                  name={option.value}
                  checked={(value || []).includes(option.value)}
                  onChange={() => handleCheckboxChange(option.value)}
                  className="mr-2"
                />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            ))
          ) : (
            <p>No options available</p>
          );
        }}
      />
      {error[name] && <div className="text-red-500 mt-1 text-sm">{error[name].message}</div>}
    </div>
  );
};

export default CheckBox;
