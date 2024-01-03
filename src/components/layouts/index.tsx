import { PropsWithChildren } from 'react'

import Container from '../common/container'
import Header from './header'

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default DefaultLayout
