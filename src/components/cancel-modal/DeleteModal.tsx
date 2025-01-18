import {ModalTrigger} from "../modal/ModalTrigger.tsx";
import {Button} from "../Button.tsx";
import {ModalContent} from "../modal/ModalContent.tsx";
import {ModalHeader} from "../modal/ModalHeader.tsx";
import {ModalBody} from "../modal/ModalBody.tsx";
import {DeleteModalFooter} from "./DeleteModalFooter.tsx";
import {Modal} from "../modal/Modal.tsx";

export function DeleteModal() {
  return (
    <Modal>
      <ModalTrigger trigger={openModal => <Button onClick={openModal}>Delete it</Button>}/>
      <ModalContent>
        <ModalHeader>
          <p className={'text-lg font-bold'}>Are you sure?</p>
        </ModalHeader>
        <ModalBody>
          This action cannot be undone
        </ModalBody>
        <DeleteModalFooter/>
      </ModalContent>
    </Modal>
  )
}
