import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const TextInput = ({ control, name, placeholder, className = '', label, error }) => {
  return (
    <div>
      {label && <label className="block text-left mb-2">{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            type="text"
            {...field}
            placeholder={placeholder}
            className={className}
          />
        )}
      />
      {error[name] && <div className="text-red-500 mt-1 text-sm">{error[name].message}</div>}
    </div>
  );
};

export default TextInput;