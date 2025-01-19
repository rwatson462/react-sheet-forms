import {Controller, useForm} from "react-hook-form";
import {CreateThingFormDefinition} from "@/components/forms/create-thing/createThingFormDefinition.ts";
import {Input} from "@/components/ui/input.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {Button} from "@/components/ui/button.tsx";
import {SheetClose, SheetFooter} from "@/components/ui/sheet.tsx";
import {useToast} from "@/hooks/use-toast.ts";

export function CreateThingForm() {
  const { register, handleSubmit, control } = useForm<CreateThingFormDefinition>()
  const { toast } = useToast()
  console.log('Rendering CreateThingForm')

  function createThing(formData: CreateThingFormDefinition) {
    toast({
      title: "Form data",
      description: JSON.stringify(formData, undefined, 2),
    })
  }

  return (
    <form onSubmit={handleSubmit(createThing)} className={'flex flex-col justify-between gap-4 w-md flex-grow'}>
      <fieldset className={'flex-grow space-y-4'}>
        <Input type={'text'} placeholder={'Name of thing'} {...register('name', { required: true })}/>

        <Controller
          name={register("size").name}
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
      <SheetFooter>
        <SheetClose asChild>
          <Button type={'submit'}>Create the thing</Button>
        </SheetClose>
      </SheetFooter>
    </form>
  )
}
