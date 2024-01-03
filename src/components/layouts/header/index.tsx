import { NextIntlClientProvider, useMessages } from 'next-intl'

import Container from '@/components/common/container'
import { getMessages } from '@/utils/get-messages'

import BannerHeader from './Banner'
import MenuHeader from './Menu'

const Header = () => {
  const messages = useMessages() as IntlMessages
  const messagesCommon = getMessages(messages, ['Common'])

  return (
    <Container>
      <BannerHeader />
      <NextIntlClientProvider messages={messagesCommon}>
        <MenuHeader />
      </NextIntlClientProvider>
    </Container>
  )
}
export default Header
