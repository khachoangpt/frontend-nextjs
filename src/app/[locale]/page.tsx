import { getProducts } from '@/actions'
import DefaultLayout from '@/components/layouts'
import HomeContainer from '@/containers/home'

type PageProps = {
  searchParams: { offset?: string }
}

const HomePage = async ({ searchParams }: PageProps) => {
  const offset = Number(searchParams?.offset)
  await Promise.all([getProducts({ offset: offset ? offset : 0 })])

  return (
    <DefaultLayout>
      <HomeContainer />
    </DefaultLayout>
  )
}

export default HomePage
