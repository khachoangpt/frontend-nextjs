import { CheckboxBase } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

import Container from '../container'

type Props = {
  label?: string
  name?: string
  checked?: boolean
  id: string
  disabled?: boolean
}

const Checkbox = ({
  label = '',
  name = '',
  checked,
  id = '',
  disabled = false,
}: Props) => {
  return (
    <Container className="flex items-center gap-x-2">
      <CheckboxBase
        disabled={disabled}
        name={name}
        checked={checked}
        id={`checkbox_${id}`}
      />
      <Label htmlFor={`checkbox_${id}`}>{label}</Label>
    </Container>
  )
}

export default Checkbox
