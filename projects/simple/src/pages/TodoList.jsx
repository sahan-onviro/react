import React, { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const TodoList = () => {
  const [list, setList] = useState([]);
  const todoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((oldArray) => [...oldArray, todoRef.current.value]);
  };
  // const handleCompleted = () => {};
  const handleDelete = (index) => {
    const newarr = list.filter((item,i)=> i !== index);
    setList(newarr)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" ref={todoRef} />
        <button type="submit">Add</button>
      </form>
      <div className="">
        <ul>
          {list.length > 0
            ? list?.map((i, index) => (
                <li key={index}>
                  {/* <button onClick={() => handleCompleted}>
                    <FaCheck />
                  </button> */}
                  {i}
                  <div className="delete" onClick={()=>handleDelete(index)}>
                    <IoClose />
                  </div>
                </li>
              ))
            : "No Data"}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
