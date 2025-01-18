import {createContext} from "react";

interface ModalContext {
  openModal: () => void
  closeModal: () => void
  isModalOpen: boolean
}

export const modalContext = createContext(undefined as unknown as ModalContext)
