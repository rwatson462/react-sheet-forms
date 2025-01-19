import {useContext} from "react";
import {sheetContext} from "@/components/sheet/sheetContext.ts";

export function useSheet() {
  const context = useContext(sheetContext)

  if (context === undefined) {
    throw new Error('Sheet context used outside of provider')
  }

  return context
}
