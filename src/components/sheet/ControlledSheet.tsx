import {PropsWithChildren} from "react";
import { Sheet } from '@/components/ui/sheet'
import {useSheet} from "@/components/sheet/useSheet.ts";
import {AvailableSheet} from "@/components/sheet/sheetContext.ts";

export function ControlledSheet({sheetName, children}: PropsWithChildren<{sheetName: AvailableSheet}>) {
  const { currentOpenSheet, closeSheet } =  useSheet()

  const isOpen = currentOpenSheet !== undefined && currentOpenSheet === sheetName

  function setIsOpen(open: boolean) {
    if (!open) {
      closeSheet()
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </Sheet>
  )
}