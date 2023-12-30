import { cva, VariantProps } from 'class-variance-authority'

export const headingVariants = cva('', {
  variants: {
    level: {
      1: 'text-4xl font-extrabold tracking-tight',
      2: 'text-3xl font-semibold tracking-tight',
      3: 'text-2xl font-medium tracking-tight',
      4: 'text-xl font-normal tracking-tight',
      5: 'text-lg font-normal tracking-tight',
      6: 'text-base font-normal tracking-tight',
    },
  },
  defaultVariants: { level: 1 },
})

export type HeadingProps = React.ButtonHTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>
