import {PropsWithChildren, useState} from "react";
import {AvailableSheet, sheetContext} from "./sheetContext";

export function SheetProvider({children}: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentOpenSheet, setCurrentOpenSheet] = useState<AvailableSheet|undefined>(undefined)

  function openSheet(sheet: AvailableSheet) {
    console.log(`opening sheet ${sheet}`)
    setCurrentOpenSheet(sheet)
  }

  function closeSheet() {
    setCurrentOpenSheet(undefined)
  }

  const value = {
    isOpen,
    setIsOpen,
    openSheet,
    currentOpenSheet,
    closeSheet,
  }

  return (
    <sheetContext.Provider value={value}>
      {children}
    </sheetContext.Provider>
  )
}
