import { NextIntlClientProvider, useMessages } from 'next-intl'

import Container from '@/components/common/container'
import { pickData } from '@/utils/pick-data'

import LoginForm from './components/LoginForm'

const LoginContainer = () => {
  const messagesLogin = pickData<IntlMessages>({
    object: useMessages() as IntlMessages,
    fields: ['Login'],
  })

  return (
    <Container>
      <NextIntlClientProvider messages={messagesLogin}>
        <LoginForm />
      </NextIntlClientProvider>
    </Container>
  )
}

export default LoginContainer
