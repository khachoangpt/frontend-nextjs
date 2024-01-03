import { NextIntlClientProvider, useMessages } from 'next-intl'

import Container from '@/components/common/container'
import { getMessages } from '@/utils/get-messages'

import LoginForm from './components/LoginForm'

const LoginContainer = () => {
  const messages = useMessages() as IntlMessages
  const messagesLogin = getMessages(messages, ['Login'])

  return (
    <Container>
      <NextIntlClientProvider messages={messagesLogin}>
        <LoginForm />
      </NextIntlClientProvider>
    </Container>
  )
}

export default LoginContainer
