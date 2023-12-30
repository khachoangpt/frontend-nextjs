import { HTMLAttributes, PropsWithChildren } from 'react'

const Paragraph = ({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) => {
  return <p {...rest}>{children}</p>
}

export default Paragraph
