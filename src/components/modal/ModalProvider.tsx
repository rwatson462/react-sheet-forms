import {PropsWithChildren, useState} from "react";
import { modalContext } from "./modalContext";

export function ModalProvider({children}: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const value = {
    openModal,
    closeModal,
    isModalOpen: isOpen,
  }

  return (
    <modalContext.Provider value={value}>
      {children}
    </modalContext.Provider>
  )
}
