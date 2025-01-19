import {SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet.tsx";
import {CreateThingForm} from "@/components/forms/create-thing/CreateThingForm.tsx";
import { ControlledSheet } from "../sheet/ControlledSheet.tsx";

export function CreateThingSheetForm() {
  return (
    <>
      <ControlledSheet sheetName={'create-thing-form'}>
        {/*<SheetTrigger>Open sheet</SheetTrigger>*/}
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create a thing</SheetTitle>
            <SheetDescription>
              Use this form to create a thing
            </SheetDescription>
          </SheetHeader>
          <CreateThingForm/>
        </SheetContent>
      </ControlledSheet>
    </>
  )
}
