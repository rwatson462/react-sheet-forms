import {PropsWithChildren, ReactNode} from "react";
import {useModalContext} from "./useModalContext.ts";

interface Props extends PropsWithChildren {
  trigger: (openModal: () => void) => ReactNode
}

export function ModalTrigger({trigger}: Props) {
  const { openModal } = useModalContext()

  const Trigger = () => trigger(openModal)

  return <Trigger/>
}
