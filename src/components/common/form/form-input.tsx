import { ChangeEventHandler } from 'react'

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
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
}

const FormInput = ({
  label = '',
  placeholder = '',
  className,
  description,
  onChange,
  value,
  disabled = false,
}: Props) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input
          placeholder={placeholder}
          className={cn(className)}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
      </FormControl>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  )
}

export default FormInput
