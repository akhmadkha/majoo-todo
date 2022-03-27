import React, { useState, useEffect } from "react";
import { ButtonPrimary } from "../../../components/button";
import { ModalPrimary } from "../../../components/modal";
import { useDispatch } from "react-redux";
import { create } from "../todoSlice";

export default function CreateTodo() {
  const dispatch = useDispatch();
  const [modalOpen, setmodalOpen] = useState(false);

  useEffect(() => {
    
  }, [dispatch]);

  function closeModal() {
    setmodalOpen(false);
  }

  function openModal() {
    setmodalOpen(true);
  }

  function onSubmit(e) {
    e.preventDefault()
    let title = e.target.todoTitle.value
    let desc = e.target.todoDesc.value

    dispatch(create({title, desc}))
    setmodalOpen(false)
  }

  return (
    <>
      {/* Modal */}
      <ModalPrimary
        open={modalOpen}
        title="Task baru"
        onClose={() => closeModal()}
      >
        <form onSubmit={onSubmit}>
        <div className="mt-2">
            <p className="text-sm text-gray-500">Judul* :</p>
            <input required id="todo-title" type="text" name="todoTitle" className="w-full border rounded-lg p-2"/>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-500">Deskripsi :</p>
            <textarea id="todo-desc" name="todoDesc" className="w-full border rounded-lg p-2"></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              // onClick={onClose}
            >
              Simpan
            </button>
          </div>
        </form>
      </ModalPrimary>
      {/* Button */}
      <ButtonPrimary
        onClick={() => openModal()}
        text="Tambah task baru"
        icon={() => (
          <box-icon type="solid" name="plus-circle" color="white"></box-icon>
        )}
      />
    </>
  );
}
