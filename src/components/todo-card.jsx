import React from "react";
import DetailTodo from "../features/todo/detail";
import SwitchTodo from "../features/todo/switch-todo";

export default function TodoCard({isComplete, data}) {
  const {title, description, id, createdAt, status} = data

  
  return (
    <div className="rounded-xl border w-full bg-white hover:scale-105">
      <div className="flex justify-between items-center gap-2">
        <div className="p-4">
          <SwitchTodo isComplete={status === 1 ? true : false} id={id}/>
        </div>
        <DetailTodo isComplete={status === 1 ? true : false} data={data}/>
        <div className="flex items-center">
          {/* <button className="p-2">
            <box-icon type="solid" name="edit" color="blue"></box-icon>
          </button>
          <button className="p-2">
            <box-icon type="solid" name="trash" color="red"></box-icon>
          </button> */}
        </div>
      </div>
    </div>
  );
}
