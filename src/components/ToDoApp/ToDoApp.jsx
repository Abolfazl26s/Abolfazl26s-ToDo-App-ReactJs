import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import ListTodo from "./ListTodo";
import { v4 as uuidv4 } from "uuid";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  //   show tasks onLoad
  useEffect(() => {
    setTasks([
      // { id: uuidv4(), title: "Defaul 01", status: true, style: "addTodo" },
      // { id: uuidv4(), title: "Defaul 02", status: true, style: "addTodo" },
      // { id: uuidv4(), title: "Defaul 03", status: false, style: "addTodo" },
    ]);
  }, []);

  //   show when change filter Tasks
  useEffect(() => {
    switch (filter) {
      case "all":
        setFilteredTasks(tasks);
        break;
      case "active":
        const newActiveTasks = tasks.filter((task) => !task.status);
        setFilteredTasks(newActiveTasks);
        break;
      case "completed":
        const newCompletedTasks = tasks.filter((task) => task.status);
        setFilteredTasks(newCompletedTasks);
        break;
      default:
        console.log(setFilteredTasks(tasks));
        break;
    }
  }, [filter, tasks]);

  //   add New Task
  const addTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        status: false,
        style: "addTodo",
      },
    ]);
  };

  //   Delete Task
  const deleteTasks = (taskId) => {
    let newTasks = tasks;
    const taskIndex = newTasks.findIndex((t) => t.id === taskId);

    setTimeout(() => {
      delete newTasks[taskIndex];
      newTasks = newTasks.filter((item) => item);
      setTasks(newTasks);
    }, 300);
  };

  //   Edit Status Task
  const handelChangeStatus = (taskId) => {
    let newTasks = tasks;
    const taskIndex = newTasks.findIndex((t) => t.id === taskId);
    newTasks[taskIndex].status = !newTasks[taskIndex].status;
    newTasks = newTasks.filter((item) => item);
    setTasks(newTasks);
  };

  return (
    <div className="toDoApp">
      <Header />
      <Form addTask={addTask} />

      <ListTodo
        ToDos={filteredTasks}
        deleteTask={deleteTasks}
        handelChangeStatus={handelChangeStatus}
      />

      <Footer itemCount={filteredTasks.length} handelFilterTasks={setFilter} />
    </div>
  );
};

export default ToDoApp;
