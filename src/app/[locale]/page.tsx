import { getTranslations } from 'next-intl/server'

import Container from '@/components/common/container'
import DefaultLayout from '@/components/layouts'

const HomePage = async () => {
  const t = await getTranslations('HomePage')

  return (
    <DefaultLayout>
      <Container>{t('home')}</Container>
    </DefaultLayout>
  )
}

export default HomePage
