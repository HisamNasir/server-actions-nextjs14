const Todo = ({ todo }) => {
  return (
    <div className="w-full flex items-center border p-2 px-4 justify-between">
      <span className=" text-center">{todo.title}</span>
    </div>
  );
};

export default Todo;
