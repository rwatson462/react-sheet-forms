import {Button} from "@/components/ui/button.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {CreateThingSheet} from "@/components/forms/create-thing/CreateThingSheet.tsx";
import { useSheet } from "./components/sheet/useSheet";
import {CreateCourseSheet} from "@/components/forms/create-course/CreateCourseSheet.tsx";
import {CreateSeasonSheet} from "@/components/forms/create-season/CreateSeasonSheet.tsx";

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
            <DropdownMenuLabel>Classmanager things</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem onClick={() => openSheet('create-course-form')}>Create course</DropdownMenuItem>
            <DropdownMenuItem onClick={() => openSheet('create-season-form')}>Create season</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </main>

      {/* Forms */}
      <CreateThingSheet/>
      <CreateCourseSheet/>
      <CreateSeasonSheet/>

      {/* Other bits */}
      <Toaster/>
    </>
  )
}
