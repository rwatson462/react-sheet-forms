import {PropsWithChildren} from "react";

export function ModalBody({children}: PropsWithChildren) {
  return (
    <div className={'bg-sky-900 p-2'}>
      {children}
    </div>
  )
}