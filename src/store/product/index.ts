import { create } from 'zustand'

import { Product } from '$/backend'

export const useProductStore = create<Product[]>(() => [])
