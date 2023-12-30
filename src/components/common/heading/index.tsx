import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { HeadingProps, headingVariants } from './variants'

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, ...props }) => {
    const Comp = `h${level}`

    return <Comp className={cn(headingVariants({ level }))} {...props} />
  },
)
Heading.displayName = `Heading`

export default Heading
