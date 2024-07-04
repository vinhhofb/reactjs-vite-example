import { categoryApi } from '../../services/categoryApi';
import { useQuery } from '@tanstack/react-query';
import { technologyApi } from '../../services/technologyApi';
import FormDefault from './components/FormDefault';
import Loading from '../../components/Loading/Loading';
import { postApi } from '../../services/postApi';

const useAllData = () => {
  const { data: post, isLoading: postLoading } = useQuery({
    queryKey: ['post'],
    queryFn: () => postApi.getPostById(1),
  });

  const isLoading = postLoading;

  return { post, isLoading };
};

const EmployeeEdit = () => {
  const { post, isLoading } = useAllData();

  const onSubmit = (data) => {
    console.log("vvv");
    console.log(data);
  };

  return (
    <div className="App">
      <h2 className="my-3">FORM</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <FormDefault
          onSubmit={onSubmit}
          post={post}
        />
      )}
    </div>
  );
};

export default EmployeeEdit;
