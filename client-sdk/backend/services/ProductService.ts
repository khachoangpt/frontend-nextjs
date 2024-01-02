/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductParams } from '../models/CreateProductParams'
import type { Product } from '../models/Product'
import type { PublishProductBody } from '../models/PublishProductBody'

import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'

export class ProductService {
  /**
   * Create product
   * Customer create product
   * @returns Product A product
   * @throws ApiError
   */
  public static createProduct({
    xApiKey,
    authorization,
    xClientId,
    requestBody,
  }: {
    xApiKey: string
    authorization: string
    xClientId: string
    requestBody?: CreateProductParams
  }): CancelablePromise<Product> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/product',
      headers: {
        'x-api-key': xApiKey,
        authorization: authorization,
        'x-client-id': xClientId,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * Get all products
   * Get All products
   * @returns Product An array of products
   * @throws ApiError
   */
  public static getAllProducts({
    xApiKey,
    limit,
    offset,
  }: {
    xApiKey: string
    limit?: number
    offset?: number
  }): CancelablePromise<Array<Product>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/customer/product',
      headers: {
        'x-api-key': xApiKey,
      },
      query: {
        limit: limit,
        offset: offset,
      },
    })
  }

  /**
   * Get draft products
   * Get draft products
   * @returns Product An array of draft products
   * @throws ApiError
   */
  public static getDraftProducts({
    xApiKey,
    authorization,
    xClientId,
    limit,
    offset,
  }: {
    xApiKey: string
    authorization: string
    xClientId: string
    limit?: number
    offset?: number
  }): CancelablePromise<Array<Product>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/customer/product/draft',
      headers: {
        'x-api-key': xApiKey,
        authorization: authorization,
        'x-client-id': xClientId,
      },
      query: {
        limit: limit,
        offset: offset,
      },
    })
  }

  /**
   * Get a product
   * Get a product
   * @returns Product A product
   * @throws ApiError
   */
  public static getProduct({
    xApiKey,
    id,
  }: {
    xApiKey: string
    /**
     * product id
     */
    id: string
  }): CancelablePromise<Product> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/customer/product/{id}',
      path: {
        id: id,
      },
      headers: {
        'x-api-key': xApiKey,
      },
    })
  }

  /**
   * Get published products
   * Get Published products
   * @returns Product An array of draft products
   * @throws ApiError
   */
  public static getPublishedProducts({
    xApiKey,
    authorization,
    xClientId,
    limit,
    offset,
  }: {
    xApiKey: string
    authorization: string
    xClientId: string
    limit?: number
    offset?: number
  }): CancelablePromise<Array<Product>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/customer/product/published',
      headers: {
        'x-api-key': xApiKey,
        authorization: authorization,
        'x-client-id': xClientId,
      },
      query: {
        limit: limit,
        offset: offset,
      },
    })
  }

  /**
   * Publish product
   * Publish product
   * @returns Product A product
   * @throws ApiError
   */
  public static publishProduct({
    xApiKey,
    authorization,
    xClientId,
    requestBody,
  }: {
    xApiKey: string
    authorization: string
    xClientId: string
    requestBody?: PublishProductBody
  }): CancelablePromise<Product> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/product/publish',
      headers: {
        'x-api-key': xApiKey,
        authorization: authorization,
        'x-client-id': xClientId,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * Search product
   * Search product
   * @returns Product Product list
   * @throws ApiError
   */
  public static search({
    xApiKey,
    q,
  }: {
    xApiKey: string
    q?: string
  }): CancelablePromise<Array<Product>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/customer/product/search',
      headers: {
        'x-api-key': xApiKey,
      },
      query: {
        q: q,
      },
    })
  }
}
