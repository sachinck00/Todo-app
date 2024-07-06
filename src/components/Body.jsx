import React, { useReducer, useState } from "react";
import "../App.css";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const Body = () => {
  const task = {
    ADD: "addTodo",
    DEL: "removeTodo",
    REMOVE: "removeAllTodos",
    EDIT : "editTodo"
  };

  const [todo, setTodo] = useState("");
  const initialTodo = [];

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const reducer = (todos, action) => {
    switch (action.type) {
      case task.ADD:
        setTodo(" ");
        if (action.payload.trim() !== "") {
          return [
            ...todos,
            {
              id: todos.length + 1,
              item: action.payload,
            },
          ];
        }
        else{
          return todos
        }
   
      case task.DEL:
        return todos.filter((todo) => todo.id !== action.payload);

      case task.REMOVE:
        return (action.payload = []);

      default:
        return state;
    }
  };
  const [todos, dispatch] = useReducer(reducer, initialTodo);

  return (
    <>
      <div className="body">
        <div className="input-feild">
          <input
            type="text"
            className="input"
            placeholder="Enter ToDo item here . . "
            value={todo}
            onChange={handleChange}
          />
         <button
            className="addbtn"
            onClick={(e) => dispatch({ type: task.ADD, payload: todo })}
          >
            Add
          </button>
          <button
            className="rmbtn"
            onClick={(e) => dispatch({ type: task.REMOVE, payload: todos })}
          >
            Clear
          </button>
        </div>
        <div className="list">
          <table cellSpacing="40px" cellPadding="20px">
            <tbody>
              {todos.map((todo, index) => {
                return (
                  <tr key={todo.id}>
                    <td>{index + 1}</td>
                    <td>{todo.item}</td>
                    <td>
                      <DeleteForeverRoundedIcon
                        style={{ cursor: "pointer" }}
                        onClick={(e) =>
                          dispatch({ type: task.DEL, payload: todo.id })
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Body;
