import { getTranslations } from 'next-intl/server'

import Checkbox from '@/components/common/checkbox'
import Container from '@/components/common/container'

const HomePage = async () => {
  const t = await getTranslations('HomePage')
  return (
    <Container>
      {t('home')}
      <Checkbox label="Accept terms and conditions" id="java" />
    </Container>
  )
}

export default HomePage
