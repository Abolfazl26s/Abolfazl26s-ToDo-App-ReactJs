import React from "react";
import { MdDelete } from "react-icons/md";
const ListTodo = ({ ToDos, deleteTask, handelChangeStatus }) => {
  return (
    <div className="toDos">
      <ul className="toDos--List">
        {ToDos.map((item) => {
          return (
            <li
              className={`toDos-Item ${item.style}`}
              key={`task-${item.id}`}
            >
              <input
                type="checkbox"
                checked={item.status}
                onChange={() => handelChangeStatus(item.id)}
              />
              <h3 className="title">{item.title}</h3>
              <button
                onClick={() => {
                  deleteTask(item.id);
                }}
              >
                <MdDelete size="30" />
              </button>
            </li>
          );
        }).reverse()}
      </ul>
    </div>
  );
};

export default ListTodo;
