'use client'

import {
  SelectBase,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SelectOptions } from '@/components/ui/select/type'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  options: SelectOptions[]
  placeholder?: string
  disabled?: boolean
  onChange?(value: string): void
  value?: string
}

const Select = ({
  className,
  options = [],
  placeholder = '',
  disabled = false,
  onChange,
  value,
}: Props) => {
  return (
    <SelectBase disabled={disabled} onValueChange={onChange} value={value}>
      <SelectTrigger className={cn(className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={`option_${option.value}`} value={option.value}>
            {option?.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectBase>
  )
}

export default Select
