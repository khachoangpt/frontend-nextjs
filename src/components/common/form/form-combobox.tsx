'use client'

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { SelectOptions } from '@/components/ui/select/type'

import Combobox from '../combobox'

type Props = {
  label?: string
  options: SelectOptions[]
  placeholder?: string
  className?: string
  description?: string
  onChange?(value: string): void
  value?: string
  disabled?: boolean
}

const FormCombobox = ({
  label = '',
  options,
  placeholder = 'Select',
  className,
  description,
  onChange,
  value,
  disabled = false,
}: Props) => {
  return (
    <FormItem>
      {!!label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Combobox
          options={options}
          placeholder={placeholder}
          className={className}
          disabled={disabled}
          onChange={onChange}
          value={value}
        />
      </FormControl>
      {!!description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}

export default FormCombobox
