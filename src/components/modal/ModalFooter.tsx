import {PropsWithChildren} from "react";

export function ModalFooter({children}: PropsWithChildren) {
  return (
    <div className={'bg-sky-900 p-2 border-t-2 border-sky-600'}>
      {children}
    </div>
  );
}