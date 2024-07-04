import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useQuery } from '@tanstack/react-query';
import { transformedSelectOptions } from '@util/helpers';
import { technologyApi } from '@service/technologyApi';
import { categoryApi } from '@service/categoryApi';
import InputBox from '@component/FormUI/InputBox';
import Loading from '@component/Loading/Loading';
import TextAreaInput from '@component/FormUI/TextAreaInput';
import SelectBox from '@component/FormUI/SelectBox';
import MultiSelectBox from '@component/FormUI/MultiSelectBox';

interface FormDefaultProps {
  onSubmit: (data: any) => void;
  post?: { [key: string]: any };
}

const useAllData = () => {
  const { data: technologies, isLoading: technologiesLoading } = useQuery({
    queryKey: ['technologies'],
    queryFn: () => technologyApi.getAllTechnology(),
  });

  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryApi.getAllCategory(),
  });

  const isLoading = technologiesLoading || categoriesLoading;

  return { technologies, categories, isLoading };
};

const FormDefault: React.FC<FormDefaultProps> = ({ onSubmit, post = {} }) => {
  const { technologies, categories, isLoading } = useAllData();

  const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    technologies: yup.array().min(1, 'Please select at least one option'),
    category: yup.string().required('Category is required'),
    describe: yup.string().required('Describe is required'),
    // types: yup.array().min(1, 'Please select at least one type'),
    // grant: yup.string().required('Grant type is required'),
    // date: yup.date().required('Date is required')
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: post?.title || '',
      technologies: post?.technologies || [],
      category: post?.category || [],
      describe: post?.describe || ''
    },
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="grid grid-cols-3 gap-4 mb-3 p-3">
            <InputBox
              control={control}
              name="title"
              placeholder="Enter text here"
              label="Title"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
              error={errors}
              isRequired={true}
            />
            <MultiSelectBox
              control={control}
              options={transformedSelectOptions(technologies)}
              name="technologies"
              label="Technologies"
              className="rounded focus:outline-none focus:border-blue-500 w-full"
              error={errors}
              isRequired={true}
            />
            <SelectBox
              control={control}
              options={transformedSelectOptions(categories)}
              name="category"
              label="Category"
              className="rounded focus:outline-none focus:border-blue-500 w-full"
              error={errors}
              isRequired={true}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-3 p-3">
            {/* <CheckBox
              control={control}
              options={options}
              name="types"
              label="Types"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
              error={errors}
            /> */}
            {/* <RadioBox
              control={control}
              options={options}
              name="grant"
              label="Grant"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
              error={errors}
            /> */}
            <TextAreaInput
              control={control}
              name="describe"
              placeholder="Enter text here"
              label="Describe"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
              error={errors}
              isRequired={true}
            />
            {/* <DatePickerBox
              control={control}
              name="date"
              label="Date"
              className="rounded focus:outline-none focus:border-blue-500 w-full"
              error={errors}
            /> */}
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default FormDefault;
