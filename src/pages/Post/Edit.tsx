import { useQuery } from '@tanstack/react-query';
import FormDefault from './components/FormDefault';
import Loading from '@component/Loading/Loading';
import { postApi } from '@service/postApi';

interface PostData {
  describe: string;
  category: string;
  technologies: number[];
  title: string;
}

const useAllData = () => {
  const { data: post, isLoading: postLoading } = useQuery({
    queryKey: ['post'],
    queryFn: () => postApi.getPostById(1),
  });

  const isLoading = postLoading;

  return { post, isLoading };
};

const PostEdit: React.FC = () => {
  const { post, isLoading } = useAllData();

  const onSubmit = (data: PostData) => {
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

export default PostEdit;
