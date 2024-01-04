import { unstable_cache } from 'next/cache'

import { REVALIDATE_TIME_DEFAULT } from '@/constants'
import { useProductStore } from '@/store/product'
import { queryKeys } from '@/utils'
import { ProductService } from '$/backend'

type ProductListParams = {
  offset: number
  limit?: number
}

export const getProducts = async ({
  offset = 0,
  limit = 50,
}: ProductListParams) => {
  const tags = queryKeys.product.list({ offset: offset?.toString() })

  try {
    const products = await unstable_cache(
      () => ProductService.getAllProducts({ limit, offset }),
      tags,
      { revalidate: REVALIDATE_TIME_DEFAULT, tags },
    )()

    useProductStore.setState(products, true)

    return { products }
  } catch (error) {
    return { products: [] }
  }
}
