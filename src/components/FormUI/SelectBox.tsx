import { FC } from 'react';
import Select, { ValueType } from 'react-select';
import { Control, Controller } from 'react-hook-form';

interface OptionType {
  label: string;
  value: any;
}

interface SelectBoxProps {
  control: Control<any>;
  options: OptionType[];
  name: string;
  label?: string;
  className?: string;
  error?: { [key: string]: { message: string } };
  isRequired?: boolean;
}

const SelectBox: FC<SelectBoxProps> = ({
  control,
  options,
  name,
  label,
  className = '',
  error = {},
  isRequired = false,
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-left mb-2">
          {label}
          {isRequired && <span className="text-red-500"> *</span>}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => {
          const selectedValue = options.find((option) => option.value === value);

          return (
            <Select
              options={options}
              value={selectedValue as ValueType<OptionType>}
              onChange={(selectedItem) => onChange(selectedItem ? selectedItem.value : null)}
              isClearable
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

export default SelectBox;
