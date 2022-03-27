import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAsync, create, update, dataTodo } from "../todoSlice";
import TodoCard from "../../../components/todo-card";
export default function ShowTodo() {
  const dispatch = useDispatch();
  const { onProgress, onComplete, status } = useSelector(dataTodo);
  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);
  return (
    <div className="flex flex-row gap-2">
      <div className="flex-1 bg-gray-100 rounded-lg p-6">
        <p className="text-gray-600 text-lg">Sedang dilakukan</p>

        <div className="todo-wrapper mt-6 gap-2 flex flex-col">
          {status === "loading" ? (
            <div>Loading</div>
          ) : (
            onProgress.map((val, idx) => {
              return <TodoCard 
              key={idx} 
              // data={val} 
              // onComplete={() => {}} 
              />;
            })
          )}
        </div>
      </div>
      <div className="flex-1 bg-gray-100 rounded-lg p-6">
        <p className="text-gray-600 text-lg">Selesai</p>
        <div className="todo-wrapper mt-6 gap-2 flex flex-col">
          {status === "loading" ? (
            <div>Loading</div>
          ) : (
            onComplete.map((val, idx) => {
              return <TodoCard key={idx} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}
