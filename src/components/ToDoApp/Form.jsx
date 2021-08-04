import React, { useState } from "react";
import { MdNoteAdd } from "react-icons/md";
const Form = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handelInputChange = (e) => {
    if (e) e.preventDefault();
    setInputValue(e.target.value);
  };

  const handelSubmitToDo = (e) => {
    if (e) e.preventDefault();
    if (inputValue === "") {
      alert("کار امروزت رو بنویس");
    } else {
      addTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <form className="addToDo" onSubmit={handelSubmitToDo}>
      <input
        type="text"
        placeholder="کار امروزت چیه؟؟؟"
        value={inputValue}
        onChange={handelInputChange}
      />
      <button type="submit" className="btn-grad">
        <MdNoteAdd size="35" />
      </button>
    </form>
  );
};

export default Form;
