import { HTMLAttributes, PropsWithChildren } from 'react'

const Container = ({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return <div {...rest}>{children}</div>
}

export default Container
