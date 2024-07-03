import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const SelectBox = ({ control, options, name, label, className = '', error }) => {
  return (
    <div className={className}>
      {label && <label className="block text-left mb-2">{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => {
          const selectedValue = options.find(option => option.value === value);
          
          return (
            <Select
              options={options}
              value={selectedValue}
              onChange={(selectedItem) => onChange(selectedItem ? selectedItem.value : null)}
              isClearable
              className="text-left" // Căn lề trái cho Select
              ref={ref}
            />
          );
        }}
      />
      {error[name] && <div className="text-red-500 mt-1 text-sm">{error[name].message}</div>}
    </div>
  );
};

export default SelectBox;
