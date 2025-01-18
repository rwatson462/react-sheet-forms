import {PropsWithChildren} from "react";

export function ModalHeader({children}: PropsWithChildren) {
  return <div className={'bg-sky-600 p-2'}>{children}</div>
}
