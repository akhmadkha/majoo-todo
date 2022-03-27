import React, { useState } from "react";
import { ModalPrimary } from "../../../components/modal";

export default function DetailTodo({ isComplete, data }) {
  const [modalOpen, setmodalOpen] = useState(false);
  const [isUpdate, setisUpdate] = useState(false);
  const { title } = data;

  function closeModal() {
    setmodalOpen(false);
  }

  function openModal() {
    setmodalOpen(true);
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
          <form onSubmit={() => {}}>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Judul* :</p>
              <input
                required
                id="todo-title"
                type="text"
                name="todoTitle"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Deskripsi :</p>
              <textarea
                id="todo-desc"
                name="todoDesc"
                className="w-full border rounded-lg p-2"
              ></textarea>
            </div>

            <div className="mt-4"></div>
          </form>
          <div className="flex flex-row justify-between">
            {isUpdate ? (
              <>
                <button
                  type="button"
                  onClick={() => setisUpdate(true)}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                >
                  Batal
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setisUpdate(true)}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                >
                  Delete
                </button>
              </>
            )}
          </div>
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
