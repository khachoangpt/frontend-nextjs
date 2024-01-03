import DefaultLayout from '@/components/layouts'
import HomeContainer from '@/containers/home'
import getProducts from '@/hooks/product/get-all-products'

type PageProps = {
  searchParams: { offset?: string }
}

const HomePage = async ({ searchParams }: PageProps) => {
  const offset = Number(searchParams?.offset)
  await getProducts({ offset: offset ? offset : 0 })

  return (
    <DefaultLayout>
      <HomeContainer />
    </DefaultLayout>
  )
}

export default HomePage
