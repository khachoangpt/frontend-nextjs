import { getTranslations } from 'next-intl/server'

import Container from '@/components/common/container'

const HomePage = async () => {
  const t = await getTranslations('HomePage')

  return <Container>{t('home')}</Container>
}

export default HomePage
