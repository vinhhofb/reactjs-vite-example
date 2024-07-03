import React from 'react';
import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerBox = ({ control, selectedDate, name, label, className = '', error }) => {
  return (
    <div>
      {label && <label className="block text-left mb-2">{label}</label>}
      <div className={`${className} border border-gray-300 p-2 rounded-md`}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              selected={value} // Use value from react-hook-form's value prop
              onChange={date => onChange(date)} // Update react-hook-form's value on change
              dateFormat="yyyy/MM/dd" // Set the desired date format
              className="form-control w-full text-left border-none outline-none"
            />
          )}
        />
      </div>
      {error[name] && <div className="text-red-500 mt-1 text-sm">{error[name].message}</div>}
    </div>
  );
};

export default DatePickerBox;
