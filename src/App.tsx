import {Button} from "@/components/ui/button.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {CreateThingSheetForm} from "@/components/sheet-forms/CreateThingSheetForm.tsx";
import { useSheet } from "./components/sheet/useSheet";

export function App() {
  const { openSheet } = useSheet()

  return (
    <>
      <header className={'p-4 bg-slate-100 dark:bg-slate-950'}>
        <h1 className={'font-bold text-4xl'}>Sheet form</h1>
      </header>
      <main className={'p-4'}>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild><Button variant={'link'}>Actions &darr;</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Things</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => openSheet('create-thing-form')}>Create thing</DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuLabel>Other Things</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </main>

      {/* Forms */}
      <CreateThingSheetForm/>

      {/* Other bits */}
      <Toaster/>
    </>
  )
}
