import { cva, VariantProps } from 'class-variance-authority'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export const headingVariants = cva('', {
  variants: {
    level: {
      1: 'text-4xl font-extrabold tracking-tight leading-none',
      2: 'text-3xl font-semibold tracking-tight leading-none',
      3: 'text-2xl font-semibold tracking-tight leading-none',
      4: 'text-xl font-medium tracking-tight leading-none',
      5: 'text-lg font-normal tracking-tight leading-none',
      6: 'text-base font-normal tracking-tight leading-none',
    },
  },
  defaultVariants: { level: 1 },
})

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  VariantProps<typeof headingVariants>
