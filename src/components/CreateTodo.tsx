import React, { useState } from "react";

import { TodoArrayProps } from "./TodoList";

interface CreateTodoProps {
  todoArray: TodoArrayProps[];
  setTodoArray: (arg: TodoArrayProps[]) => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ todoArray, setTodoArray }) => {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [titleErr, setTitleErr] = useState<boolean>(false);

  const createTodo = () => {
    const newId = Math.max(...todoArray.map((item) => item.id), 0) + 1;
    // Create the new item
    const newItem = { id: newId, title: todoTitle, isComplete: false };
    // Update the state to include the new item
    setTodoArray([...todoArray, newItem]);
    setTodoTitle("");
  };
  return (
    <div className="px-10 py-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col md:flex-row gap-4 w-full items-start">
          <div className="w-full">
            <input
              className="border-todoVeryDarkBlue rounded-md px-5 py-2 font-medium text-base border-[1px] w-full"
              placeholder="Enter a todo title..."
              type="text"
              name="title"
              value={todoTitle}
              onChange={(e) => {
                setTitleErr(false);
                setTodoTitle(e.target.value);
              }}
            />
            {titleErr && (
              <p className="text-red-600 text-xs mt-1 font-semibold">
                Title is a required field
              </p>
            )}
          </div>
          <button
            onClick={createTodo}
            className="bg-todoVeryDesaturatedBlue text-white px-4 py-2 rounded-md w-full md:w-auto"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
