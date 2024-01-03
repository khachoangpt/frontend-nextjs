import { PropsWithChildren } from 'react'

import Container from '@/components/common/container'

const LoginLayout = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>
}

export default LoginLayout
