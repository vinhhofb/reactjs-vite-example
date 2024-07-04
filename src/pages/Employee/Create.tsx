import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import InputBox from '../../components/FormUI/InputBox';
import MultiSelectBox from '../../components/FormUI/MultiSelectBox';
import SelectBox from '../../components/FormUI/SelectBox';
import CheckBox from '../../components/FormUI/CheckBox';
import RadioBox from '../../components/FormUI/RadioBox';
import DatePickerBox from '../../components/FormUI/DatePickerBox';

const EmployeeCreate = () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];

  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    tags: yup.array().min(1, 'Please select at least one option'),
    category: yup.string().required('Category is required'),
    types: yup.array().min(1, 'Please select at least one type'),
    grant: yup.string().required('Grant type is required'),
    date: yup.date().required('Date is required')
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      tags: [],
      category: '',
      types: [],
      grant: '',
      date: null
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="App">
      <h2 className="my-3">FORM</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-4 mb-3 p-3">
          <InputBox
            control={control}
            name="name"
            placeholder="Enter text here"
            label="Name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
            error={errors}
          />
          <MultiSelectBox
            control={control}
            options={options}
            name="tags"
            label="Tags"
            className="rounded focus:outline-none focus:border-blue-500 w-full"
            error={errors}
          />
          <SelectBox
            control={control}
            options={options}
            name="category"
            label="Category"
            className="rounded focus:outline-none focus:border-blue-500 w-full"
            error={errors}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-3 p-3">
          <CheckBox
            control={control}
            options={options}
            name="types"
            label="Types"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
            error={errors}
          />
          <RadioBox
            control={control}
            options={options}
            name="grant"
            label="Grant"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
            error={errors}
          />
          <DatePickerBox
            control={control}
            name="date"
            label="Date"
            className="rounded focus:outline-none focus:border-blue-500 w-full"
            error={errors}
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeCreate;
