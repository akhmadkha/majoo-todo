import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAsync, dataTodo } from "../todoSlice";
import TodoCard from "../../../components/todo-card";
import { sortAsc, sortDesc } from "../../../utils/sortData";
import { Tab } from "@headlessui/react";

export default function ShowTodo() {
  const dispatch = useDispatch();
  const { status, fullData } = useSelector(dataTodo);
  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  const filterData = (data, by) => {
    return data.filter((item) => item.status === by) ?? [];
  };

  const renderOnProgress = () => {
    return (
      <div className="todo-wrapper mt-6 gap-2 flex flex-col">
        {status === "loading" ? (
          <div>Loading</div>
        ) : (
          sortAsc(filterData(fullData, 0)).map((val, idx) => {
            return <TodoCard key={idx} isComplete={false} data={val} />;
          })
        )}
      </div>
    );
  };

  const renderCompleted = () => {
    return (
      <div className="todo-wrapper mt-6 gap-2 flex flex-col">
        {status === "loading" ? (
          <div>Loading</div>
        ) : (
          sortDesc(filterData(fullData, 1)).map((val, idx) => {
            return <TodoCard key={idx} isComplete={true} data={val} />;
          })
        )}
      </div>
    );
  };

  return (
    <>
      <div className="hidden md:flex flex-row gap-2">
        <div className="flex-1 bg-gray-100 rounded-lg p-6">
          <p className="text-gray-700 text-lg">Sedang Dilakukan</p>
          <p className="text-gray-500 text-sm">
            Klik judul untuk melihat detail
          </p>

          {renderOnProgress()}
        </div>
        <div className="flex-1 bg-gray-100 rounded-lg p-6">
          <p className="text-gray-700 text-lg">Selesai</p>
          {renderCompleted()}
        </div>
      </div>
      <div className="block md:hidden">
        <Tab.Group>
          <Tab.List>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? "bg-blue-500 px-2 mx-3 rounded-full text-white" : "bg-white text-black"
                  }
                >
                  Sedang dilakukan
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? "bg-blue-500 px-2 mx-3 rounded-full text-white" : "bg-white text-black"
                  }
                >
                  Selesai
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="px-4">{renderOnProgress()}</div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="px-4">{renderCompleted()}</div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
