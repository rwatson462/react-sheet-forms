import {SheetClose, SheetFooter} from "@/components/ui/sheet.tsx";
import {Button} from "@/components/ui/button.tsx";

export function FormFooter({ showCancel, submitText }: { showCancel: boolean, submitText: string }) {

  return (
    <SheetFooter>
      { showCancel && (
        <SheetClose asChild>
          <Button variant={'link'}>Cancel</Button>
        </SheetClose>
      )}
      <Button type={'submit'}>{submitText}</Button>
    </SheetFooter>
  )
}