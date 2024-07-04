import FormDefault from './components/FormDefault';

interface PostData {
  describe: string;
  category: string;
  technologies: number[];
  title: string;
}

const PostCreate: React.FC = () => {
  const onSubmit = (data: PostData) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h2 className="my-3">FORM</h2>
        <FormDefault
          onSubmit={onSubmit}
        />
    </div>
  );
};

export default PostCreate;
