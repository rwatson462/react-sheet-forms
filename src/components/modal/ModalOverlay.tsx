import {useModalContext} from "./useModalContext.ts";

export function ModalOverlay() {
  const { isModalOpen, closeModal } = useModalContext()
  return isModalOpen && (
    <div className={'fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75'} onClick={closeModal}></div>
  )
}