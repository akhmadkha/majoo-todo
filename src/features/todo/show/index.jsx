import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAsync, dataTodo } from "../todoSlice";
import TodoCard from "../../../components/todo-card";
import { sortAsc, sortDesc } from "../../../utils/sortData";

export default function ShowTodo() {
  const dispatch = useDispatch();
  const { onProgress, onComplete, status, fullData } = useSelector(dataTodo);
  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  const filterData = (data, by) => {
    return data.filter(item => item.status === by) ?? []
  }
  return (
    <div className="flex flex-row gap-2">
      <div className="flex-1 bg-gray-100 rounded-lg p-6">
        <p className="text-gray-600 text-lg">Sedang Dilakukan</p>

        <div className="todo-wrapper mt-6 gap-2 flex flex-col">
          {status === "loading" ? (
            <div>Loading</div>
          ) : (
            sortAsc(filterData(fullData, 0)).map((val, idx) => {
              return (
                <TodoCard
                  key={idx}
                  isComplete={false}
                  data={val}
                />
              );
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
            sortDesc(filterData(fullData, 1)).map((val, idx) => {
              return <TodoCard key={idx} isComplete={true} data={val} />;
            })
          )}
        </div>
      </div>
    </div>
  );
}
