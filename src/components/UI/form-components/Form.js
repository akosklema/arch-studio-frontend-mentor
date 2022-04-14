function Form({ children, className, handleSubmit }) {
  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;