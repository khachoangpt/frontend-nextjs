import { useProductStore } from '@/store/product'
import { ProductService } from '$/backend'

export const getProducts = async ({ offset = 0 }: { offset: number }) => {
  try {
    const products = await ProductService.getAllProducts({
      limit: 50,
      offset,
    })
    useProductStore.setState(products, true)

    return { products }
  } catch (error) {
    return { products: [] }
  }
}
