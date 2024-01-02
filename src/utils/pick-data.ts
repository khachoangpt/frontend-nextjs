import pick from 'lodash/pick'

type PickData<T> = {
  fields: Array<keyof T>
  object: T
}

export const pickData = <T>({ fields, object }: PickData<T>) => {
  return pick(object, fields)
}
