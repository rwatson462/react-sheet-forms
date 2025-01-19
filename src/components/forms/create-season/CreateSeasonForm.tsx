import {Controller, useForm} from "react-hook-form";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {SheetClose, SheetDescription, SheetFooter, SheetHeader, SheetTitle} from "@/components/ui/sheet.tsx";
import {useToast} from "@/hooks/use-toast.ts";
import {Calendar} from "@/components/ui/calendar.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import { CalendarIcon } from "lucide-react";
import {cn} from "@/lib/utils.ts";
import {format} from "date-fns";
import {useSheet} from "@/components/sheet/useSheet.ts";

interface CreateSeasonFormDefinition {
  name: string
  startDate: string
  endDate: string
}

function pad(str: string, padding: string, size: number = 2) {
  if (str.length < size) {
    return padding.repeat(size - str.length) + str
  }

  return str
}

function dateString(date?: Date) {
  if (date === undefined) {
    return undefined
  }

  return date.getFullYear() + "-" + pad(String(date.getMonth() + 1), '0') + "-" + pad(String(date.getDate()), '0');
}

export function CreateSeasonForm() {
  const { closeSheet } = useSheet()
  const { control, register, handleSubmit } = useForm<CreateSeasonFormDefinition>()
  const { toast } = useToast()

  function createSeason(formData: CreateSeasonFormDefinition) {
    toast({
      title: "Season data",
      description: JSON.stringify(formData, undefined, 2),
    })

    closeSheet()
  }

  return (
    <>
      <SheetHeader>
        <SheetTitle>Create season</SheetTitle>
        <SheetDescription>
          A season is a container of courses
        </SheetDescription>
      </SheetHeader>
      <form onSubmit={handleSubmit(createSeason)} className={'flex flex-col justify-between gap-4 w-md flex-grow'}>
        <fieldset className={'flex-grow space-y-4'}>
          <Input type={'text'} placeholder={'Season name'} {...register('name', { required: true })}/>

          <Controller
            name={register('startDate', { required: true }).name}
            control={control}
            render={({ field }) => {
              const {onChange, value} = field
              return (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start font-normal",
                        !value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {value ? format(value, 'PPP') : <span>Start date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                    mode="single"
                    selected={new Date(value)}
                    onSelect={(newValue) => onChange(dateString(newValue))}
                    className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              )
            }}
          />

          <Controller
            name={register('endDate', { required: true }).name}
            control={control}
            render={({ field }) => {
              const {onChange, value} = field
              return (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start font-normal",
                        !value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {value ? format(value, 'PPP') : <span>End date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={new Date(value)}
                      onSelect={(newValue) => onChange(dateString(newValue))}
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              )
            }}
          />
        </fieldset>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant={'link'}>Cancel</Button>
          </SheetClose>
          <Button type={'submit'}>Create</Button>
        </SheetFooter>
      </form>
    </>
  )
}
