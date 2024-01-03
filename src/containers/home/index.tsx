import Container from '@/components/common/container'
import Paragraph from '@/components/common/paragraph'
import { useProductStore } from '@/store/product'

const HomeContainer = () => {
  const products = useProductStore.getState()

  return (
    <Container>
      {products.map((product, index) => (
        <Container key={`${product.title}_${index}`}>
          <Paragraph>{product.title}</Paragraph>
        </Container>
      ))}
    </Container>
  )
}

export default HomeContainer
