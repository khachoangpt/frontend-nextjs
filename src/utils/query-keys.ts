export const queryKeys = {
  product: {
    all: ['products'],
    list: (keys: GetProductList) => ['products', keys.offset],
  },
}

type GetProductList = {
  offset: string
}
