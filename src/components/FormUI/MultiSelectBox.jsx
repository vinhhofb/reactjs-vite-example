import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

const MultiSelectBox = ({ control, options, name, label, className = '', error }) => {
  return (
    <div className={className}>
      {label && <label className="block text-left mb-2">{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => {
          const selectedItems = (value || []).map(val => options.find(option => option.value === val)).filter(Boolean);
          return (
            <Select
              options={options}
              value={selectedItems}
              onChange={(selectedItems) => onChange(selectedItems ? selectedItems.map(item => item.value) : [])}
              isMulti
              closeMenuOnSelect={false}
              className="text-left"
              ref={ref}
            />
          );
        }}
      />
     {error[name] && <div className="text-red-500 mt-1 text-sm">{error[name].message}</div>}
    </div>
  );
};

export default MultiSelectBox;
