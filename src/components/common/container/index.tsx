import { DetailedHTMLProps, HTMLAttributes } from 'react'

const Container = ({
  children,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div {...rest}>{children}</div>
}

export default Container
