import { getProducts } from '@/api'
import DefaultLayout from '@/components/layouts'
import HomeContainer from '@/containers/home'
import { columns, Payment } from '@/containers/home/components/columns'
import { DataTable } from '@/containers/home/components/data-table'

type PageProps = {
  searchParams: { offset?: string }
}

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ]
}

const HomePage = async ({ searchParams }: PageProps) => {
  const offset = Number(searchParams?.offset)
  await Promise.all([getProducts({ offset: offset || 0 })])
  const data = await getData()

  return (
    <DefaultLayout>
      <HomeContainer />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </DefaultLayout>
  )
}

export default HomePage
