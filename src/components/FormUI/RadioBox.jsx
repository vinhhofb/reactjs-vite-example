import React from 'react';
import { Controller } from 'react-hook-form';

const RadioBox = ({ control, options, name, label, className = '', error }) => {
  return (
    <div className={className}>
      {label && <label className="block text-left mb-2">{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <>
            {options.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={option.value}
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={() => onChange(option.value)}
                  className="mr-2"
                />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            ))}
          </>
        )}
      />
      {error[name] && <div className="text-red-500 mt-1 text-sm">{error[name].message}</div>}
    </div>
  );
};

export default RadioBox;
