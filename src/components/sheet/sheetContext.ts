import {createContext} from "react";

export type AvailableSheet = 'create-thing-form'|'create-course-form'|'create-season-form'

interface SheetContext {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  openSheet: (sheet: AvailableSheet) => void
  currentOpenSheet?: AvailableSheet
  closeSheet: () => void
}

export const sheetContext = createContext(undefined as unknown as SheetContext)
