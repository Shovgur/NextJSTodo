"use client";

import { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const router = useRouter()

  const [newTaskValue, setNewTaskValue] = useState<string>('');

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo ({
      id: "10",
      text: newTaskValue
    })
    setNewTaskValue("");
    setModalOpen(false)
    router.refresh()
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn w-[100px] h-[30px] bg-green-400 rounded-md mt-4 hover:bg-green-500"
      >
        Add
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full
            "
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
