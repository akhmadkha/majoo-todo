import React from "react";
import DetailTodo from "../features/todo/detail";
import SwitchTodo from "../features/todo/switch-todo";

export default function TodoCard({isComplete, data}) {
  const {title, description, id, createdAt, status} = data

  
  return (
    <div className="rounded-xl border w-full bg-white hover:scale-105">
      <div className="flex justify-between items-center gap-2">
        <div className="p-4">
          <SwitchTodo isComplete={status} id={id}/>
        </div>
        <DetailTodo isComplete={status} data={data}/>
      </div>
    </div>
  );
}
