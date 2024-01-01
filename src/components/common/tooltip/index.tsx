'use client'

import { PropsWithChildren } from 'react'

import {
  TooltipBase,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import Paragraph from '../paragraph'

type Props = {
  content?: string
}

const Tooltip = ({ children, content }: PropsWithChildren<Props>) => {
  return (
    <TooltipProvider>
      <TooltipBase>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <Paragraph>{content}</Paragraph>
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  )
}

export default Tooltip
