import CreateTodo from "./CreateTodo";
import { useState } from "react";

export interface TodoArrayProps {
  id: number;
  title: string;
  isComplete: boolean;
}

const TodoList = () => {
  const [todoArrayList, setTodoArrayList] = useState<TodoArrayProps[]>([]);

  const handleRadioChange = (value: string, id: number) => {
    setTodoArrayList(
      todoArrayList.map((eachTodo: TodoArrayProps) => {
        if (eachTodo.id === id) {
          return {
            ...eachTodo,
            isComplete: value === "complete" ? true : false,
          };
        }
        return eachTodo;
      })
    );
  };

  return (
    <div className="px-10 py-4">
      <CreateTodo setTodoArray={setTodoArrayList} todoArray={todoArrayList} />
      <table className="w-full">
        <thead>
          <tr className="text-xl text-left text-todoVeryDarkGrayishBlue2">
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todoArrayList.map((todo: TodoArrayProps) => (
            <tr key={todo.id} className="leading-10 hover:bg-gray-400 mb-2">
              <td className="pl-4 pr-2 break-all">{todo.title}</td>
              <td className="pl-2 pr-4">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="incomplete"
                    value="incomplete"
                    checked={!todo.isComplete}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleRadioChange(e.target.value, todo.id)
                    }
                  />
                  <label htmlFor="incomplete">Incomplete</label>
                </div>

                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="complete"
                    value="complete"
                    checked={todo.isComplete}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleRadioChange(e.target.value, todo.id)
                    }
                  />
                  <label htmlFor="complete">Complete</label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
