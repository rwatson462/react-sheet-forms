import {modalContext} from "./modalContext.ts";
import {useContext} from "react";

export function useModalContext() {
  const context = useContext(modalContext)

  if (context === undefined) {
    throw new Error('modalContext used outside of provider')
  }

  return context
}