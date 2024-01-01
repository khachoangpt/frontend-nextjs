import { getTranslations } from 'next-intl/server'

import Container from '@/components/common/container'

const HomePage = async () => {
  const t = await getTranslations('Common')
  return <Container>{t('content')}</Container>
}

export default HomePage
