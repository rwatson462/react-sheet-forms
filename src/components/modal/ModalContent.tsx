import {PropsWithChildren} from "react";
import {useModalContext} from "./useModalContext.ts";

export function ModalContent({children}: PropsWithChildren) {
  const { isModalOpen } = useModalContext()

  return isModalOpen && (
    <div className={'rounded-lg border-2 border-sky-600 shadow fixed left-1/2 -translate-x-1/2 w-full max-w-xl overflow-clip'}>
      {children}
    </div>
  )
}
