import React, { useState } from "react";
import { ModalPrimary } from "../../../components/modal";
import { useDispatch } from "react-redux";
import { update } from "../todoSlice";

export default function DetailTodo({ isComplete, data }) {
  const dispatch = useDispatch();
  const [modalOpen, setmodalOpen] = useState(false);
  const [isUpdate, setisUpdate] = useState(false);
  const { title, description, id, status } = data;

  function closeModal() {
    setmodalOpen(false);
  }

  function openModal() {
    setmodalOpen(true);
  }

  function onUpdate(e) {
    e.preventDefault();
    let title = e.target.todoTitle.value;
    let desc = e.target.todoDesc.value;

    dispatch(update({ title, desc, id, status }));
    setisUpdate(false);
    setmodalOpen(false);
  }
  return (
    <>
      {/* Modal */}
      <ModalPrimary
        open={modalOpen}
        title="Detail todo"
        onClose={() => closeModal()}
      >
        <div>
          {isUpdate ? (
            <>
              <form onSubmit={onUpdate}>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Judul* :</p>
                  <input
                    required
                    id="todo-title"
                    type="text"
                    name="todoTitle"
                    defaultValue={title}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Deskripsi :</p>
                  <textarea
                    id="todo-desc"
                    name="todoDesc"
                    defaultValue={description}
                    className="w-full border rounded-lg p-2"
                  ></textarea>
                </div>

                <div className="mt-4"></div>

                <div className="flex flex-row gap-2">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Simpan
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setisUpdate(false);
                    }}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                  >
                    Batal
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2 my-6 p-2 bg-gray-100 rounded-lg">
                <div className="">
                  <p className="text-sm text-gray-500">Judul</p>
                  <p className="text-md">{title}</p>
                </div>
                <div className="">
                  <p className="text-sm text-gray-500">Judul</p>
                  <p className="text-md">{description}</p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <button
                  type="button"
                  onClick={() => setisUpdate(true)}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Update
                </button>
                {status === 1 ? null : (
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                  >
                    Delete
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </ModalPrimary>
      <div className="flex-1 p-4 cursor-pointer" onClick={() => openModal()}>
        <p
          style={{ textDecoration: isComplete ? "line-through" : "unset" }}
          className="text-lg text-gray-600"
        >
          {title ?? ""}
        </p>
      </div>
    </>
  );
}
