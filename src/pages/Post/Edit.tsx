import { useQuery } from '@tanstack/react-query';
import FormDefault from './components/FormDefault';
import Loading from '@component/Loading/Loading';
import { postApi } from '@service/postApi';
import { useState } from 'react';

interface PostData {
  describe: string;
  category: string;
  technologies: number[];
  title: string;
  images: any[];
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
  const [images, setImages] = useState([{
    "data_url":'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep.jpg'
  }]);

  const onSubmit = (data: PostData) => {
    data.images = images;
    console.log(data);
  };

  return (
    <div className="App">
      <h2 className="my-3">FORM</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <FormDefault
          images={images}
          setImages={setImages}
          onSubmit={onSubmit}
          post={post}
        />
      )}
    </div>
  );
};

export default PostEdit;
