import { useState } from 'react';
import FormDefault from './components/FormDefault';

interface PostData {
  describe: string;
  category: string;
  technologies: number[];
  title: string;
}

const PostCreate: React.FC = () => {
  const [images, setImages] = useState([]);

  const onSubmit = (data: PostData) => {
    data.images = images;
    console.log(data);
  };

  return (
    <div className="App">
      <h2 className="my-3">FORM</h2>
        <FormDefault
          images={images}
          setImages={setImages}
          onSubmit={onSubmit}
        />
    </div>
  );
};

export default PostCreate;
