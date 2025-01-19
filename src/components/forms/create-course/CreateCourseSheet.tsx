import { SheetContent } from "@/components/ui/sheet.tsx";
import { ControlledSheet } from "../../sheet/ControlledSheet.tsx";
import { CreateCourseForm } from "@/components/forms/create-course/CreateCourseForm.tsx";

export function CreateCourseSheet() {
  return (
      <ControlledSheet sheetName={'create-course-form'}>
        <SheetContent>
          <CreateCourseForm/>
        </SheetContent>
      </ControlledSheet>
  )
}
