import {Controller, useForm} from "react-hook-form";
import {Input} from "@/components/ui/input.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet.tsx";
import {useToast} from "@/hooks/use-toast.ts";
import {CreateCourseFormDefinition} from "@/components/forms/create-course/createCourseFormDefinition.ts";
import {useSheet} from "@/components/sheet/useSheet.ts";
import {FormFooter} from "@/components/sheet-forms/FormFooter.tsx";

export function CreateCourseForm() {
  const { closeSheet } = useSheet()
  const { register, handleSubmit, control } = useForm<CreateCourseFormDefinition>()
  const { toast } = useToast()

  function createCourse(formData: CreateCourseFormDefinition) {
    toast({
      title: "Course data",
      description: JSON.stringify(formData, undefined, 2),
    })

    closeSheet()
  }

  return (
    <>
      <SheetHeader>
        <SheetTitle>Create course</SheetTitle>
        <SheetDescription>
          Use this form to create a course
        </SheetDescription>
      </SheetHeader>
      <form onSubmit={handleSubmit(createCourse)} className={'flex flex-col justify-between gap-4 w-md flex-grow'}>
        <fieldset className={'flex-grow space-y-4'}>
          <Input type={'text'} placeholder={'Course name'} {...register('name', { required: true })}/>
          <Input type={'number'} placeholder={'Number of lessons'} {...register('numberOfLessons', { required: true})}/>

          <Controller
            name={register("dayOfWeek", { required: true }).name}
            control={control}
            render={({ field }) => {
              const {onChange, ref, ...rest} = field;

              return (
                <Select onValueChange={onChange} {...rest}>
                  <SelectTrigger className="w-full" ref={ref}>
                    <SelectValue placeholder="Select day of week" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monday">Monday</SelectItem>
                    <SelectItem value="tuesday">Tuesday</SelectItem>
                    <SelectItem value="wednesday">Wednesday</SelectItem>
                    <SelectItem value="thursday">Thursday</SelectItem>
                    <SelectItem value={"friday"}>Friday</SelectItem>
                    <SelectItem value={"saturday"}>Saturday</SelectItem>
                    <SelectItem value={"sunday"}>Sunday</SelectItem>
                  </SelectContent>
                </Select>
              )
            }}
            />
        </fieldset>
        <FormFooter showCancel submitText={'Create course'}/>
      </form>
    </>
  )
}
