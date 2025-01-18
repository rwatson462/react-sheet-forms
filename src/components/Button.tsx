import {ComponentProps} from "react";

export function Button({children, ...props}: ComponentProps<"button">) {
  return (
    <button type={'button'} {...props} className={'bg-green-500 text-gray-800 shadow px-2 py-1 rounded'}>{children}</button>
  )
}
