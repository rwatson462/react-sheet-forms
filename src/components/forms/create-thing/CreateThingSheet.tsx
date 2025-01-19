import { SheetContent } from "@/components/ui/sheet.tsx";
import { CreateThingForm } from "@/components/forms/create-thing/CreateThingForm.tsx";
import { ControlledSheet } from "../../sheet/ControlledSheet.tsx";

export function CreateThingSheet() {
  return (
    <ControlledSheet sheetName={'create-thing-form'}>
      <SheetContent>
        <CreateThingForm/>
      </SheetContent>
    </ControlledSheet>
  )
}
