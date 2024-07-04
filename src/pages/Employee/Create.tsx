import FormDefault from './components/FormDefault';

const EmployeeCreate = () => {
  const onSubmit = (data) => {
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

export default EmployeeCreate;
