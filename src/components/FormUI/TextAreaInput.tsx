import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface TextAreaInputProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
  className?: string;
  label?: string;
  error?: { [key: string]: { message: string } };
  rows?: number;
  isRequired?: boolean;
}

const TextAreaInput: FC<TextAreaInputProps> = ({
  control,
  name,
  placeholder = '',
  className = '',
  label,
  error = {},
  rows = 3,
  isRequired = false,
}) => {
  return (
    <div>
      {label && (
        <label className="block text-left mb-2">
          {label}
          {isRequired && <span className="text-red-500"> *</span>}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            {...field}
            placeholder={placeholder}
            className={className}
            rows={rows}
          />
        )}
      />
      {error[name] && <div className="text-red-500 mt-1 text-sm">{error[name].message}</div>}
    </div>
  );
};

export default TextAreaInput;
