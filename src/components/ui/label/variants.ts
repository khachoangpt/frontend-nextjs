import { cva } from 'class-variance-authority'

export const labelVariants = cva(
  'leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)
