import { DetailedHTMLProps, HTMLAttributes } from 'react'

const Paragraph = ({
  children,
  ...rest
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) => {
  return <p {...rest}>{children}</p>
}

export default Paragraph
