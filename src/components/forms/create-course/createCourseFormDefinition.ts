
export interface CreateCourseFormDefinition {
  name: string
  numberOfLessons: number
  dayOfWeek: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
}
