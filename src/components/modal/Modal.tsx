import {PropsWithChildren} from "react";
import {ModalProvider} from "./ModalProvider.tsx";
import {ModalOverlay} from "./ModalOverlay.tsx";

export function Modal({children}: PropsWithChildren) {
  return (
    <ModalProvider>
      <ModalOverlay/>
      {children}
    </ModalProvider>
  )
}
