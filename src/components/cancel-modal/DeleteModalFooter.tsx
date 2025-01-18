import {ModalFooter} from "../modal/ModalFooter.tsx";
import {Button} from "../Button.tsx";
import {useModalContext} from "../modal/useModalContext.ts";

export function DeleteModalFooter() {
  const { closeModal } = useModalContext()

  function deleteTheThing() {
    closeModal()
  }

  return (
    <ModalFooter>
      <div className={'flex justify-between items-center'}>
        <button className={'hover:underline'} onClick={closeModal}>No, cancel</button>
        <Button onClick={deleteTheThing}>Yes, delete it</Button>
      </div>
    </ModalFooter>
  )
}
