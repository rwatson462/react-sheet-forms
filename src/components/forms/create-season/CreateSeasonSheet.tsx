import { SheetContent } from "@/components/ui/sheet.tsx";
import { ControlledSheet } from "../../sheet/ControlledSheet.tsx";
import {CreateSeasonForm} from "@/components/forms/create-season/CreateSeasonForm.tsx";

export function CreateSeasonSheet() {
  return (
      <ControlledSheet sheetName={'create-season-form'}>
        <SheetContent>
          <CreateSeasonForm/>
        </SheetContent>
      </ControlledSheet>
  )
}
