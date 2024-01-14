import Container from '@/components/common/container'
import Paragraph from '@/components/common/paragraph'
import { useProductStore } from '@/store/product'

const HomeContainer = () => {
  const products = useProductStore.getState()

  return (
    <Container>
      {products.map((product) => (
        <Container key={product.title}>
          <Paragraph>{product.title}</Paragraph>
        </Container>
      ))}
    </Container>
  )
}

export default HomeContainer
