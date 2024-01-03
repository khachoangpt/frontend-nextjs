import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type Props = {
  label?: string
  placeholder?: string
  className?: string
  description?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string
  disabled?: boolean
  type?: HTMLInputTypeAttribute
}

const FormInput = ({
  label = '',
  placeholder = '',
  className,
  description,
  onChange,
  value,
  disabled = false,
  type = 'text',
}: Props) => {
  const { error } = useFormField()

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder}
          className={cn(className, { 'border-destructive': !!error })}
          onChange={onChange}
          value={value}
          disabled={disabled}
          type={type}
          autoComplete="off"
        />
      </FormControl>
      {!!description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}

export default FormInput
