/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductTypeEnum } from './ProductTypeEnum'

export type Product = {
  /**
   * Product name
   */
  title?: string
  /**
   * Product thumbnail url
   */
  thumbnail?: string
  /**
   * Product description
   */
  description?: string
  /**
   * Product slug
   */
  slug?: string
  /**
   * Product rating
   */
  ratings?: number
  /**
   * Product variant
   */
  variants?: any[]
  is_draft?: boolean
  is_published?: boolean
  /**
   * Price of product
   */
  price?: number
  /**
   * Product inventory quantity
   */
  quantity?: number
  type?: ProductTypeEnum
  /**
   * Shop name
   */
  shop?: string
  /**
   * Product attributes
   */
  attributes?: Record<string, any>
}
