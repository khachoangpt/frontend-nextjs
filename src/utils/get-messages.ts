import { pickData } from './pick-data'

export const getMessages = (
  object: IntlMessages,
  fields: Array<keyof IntlMessages>,
) => {
  return pickData<IntlMessages>({ object, fields })
}
