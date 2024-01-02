/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClothingProductType } from './ClothingProductType'
import type { ElectronicProductType } from './ElectronicProductType'
import type { FurnitureProductType } from './FurnitureProductType'

export type CreateProductParams = {
  title?: string
  type?: string
  thumbnail?: string
  ratings?: number
  variants?: any[]
  price?: number
  quantity?: number
  shop?: string
  attributes?:
    | ClothingProductType
    | ElectronicProductType
    | FurnitureProductType
  description?: string
}
