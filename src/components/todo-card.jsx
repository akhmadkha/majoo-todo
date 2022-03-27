import React from "react";

export default function TodoCard() {
  return (
    <div className="p-4 rounded-xl border w-full bg-white hover:scale-105">
      <div className="flex justify-between items-center gap-2">
        <div>
          <input type="checkbox" name="" id="" className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <p className="text-lg text-gray-600">Lorem ipsum dolor e sopo</p>
        </div>
        <div className="flex items-center">
          <button className="p-2">
            <box-icon type="solid" name="edit" color="blue"></box-icon>
          </button>
          <button className="p-2">
            <box-icon type="solid" name="trash" color="red"></box-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
