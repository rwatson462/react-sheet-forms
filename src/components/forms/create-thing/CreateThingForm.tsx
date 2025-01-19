import {Controller, useForm} from "react-hook-form";
import {Input} from "@/components/ui/input.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet.tsx";
import {useToast} from "@/hooks/use-toast.ts";
import {useSheet} from "@/components/sheet/useSheet.ts";
import {FormFooter} from "@/components/sheet-forms/FormFooter.tsx";

interface CreateThingFormDefinition {
  name: string
  size: 'sm'|'md'|'lg'|'xl'
  count: number
}


export function CreateThingForm() {
  const { closeSheet } = useSheet()
  const { register, handleSubmit, control } = useForm<CreateThingFormDefinition>()
  const { toast } = useToast()

  function createThing(formData: CreateThingFormDefinition) {
    toast({
      title: "Form data",
      description: JSON.stringify(formData, undefined, 2),
    })
    closeSheet()
  }

  return (
    <>
      <SheetHeader>
        <SheetTitle>Create a thing</SheetTitle>
        <SheetDescription>
          Use this form to create a thing
        </SheetDescription>
      </SheetHeader>
      <form onSubmit={handleSubmit(createThing)} className={'flex flex-col justify-between gap-4 w-md flex-grow'}>
        <fieldset className={'flex-grow space-y-4'}>
          <Input type={'text'} placeholder={'Name of thing'} {...register('name', { required: true })}/>

          <Controller
            name={register("size", { required: true }).name}
            control={control}
            render={({ field }) => {
              const {onChange, ref, ...rest} = field;

              return (
                <Select onValueChange={onChange} {...rest}>
                  <SelectTrigger className="w-full" ref={ref}>
                    <SelectValue placeholder="How big is it?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sm">Small</SelectItem>
                    <SelectItem value="md">Medium</SelectItem>
                    <SelectItem value="lg">Large</SelectItem>
                    <SelectItem value="xl">Extra large</SelectItem>
                  </SelectContent>
                </Select>
              )
            }}
            />
        </fieldset>
        <FormFooter showCancel submitText={'Create the thing'}/>
      </form>
    </>
  )
}
