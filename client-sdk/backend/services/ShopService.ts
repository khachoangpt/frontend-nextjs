/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginDTO } from '../models/LoginDTO'
import type { LoginParams } from '../models/LoginParams'
import type { RefreshTokenDTO } from '../models/RefreshTokenDTO'
import type { RefreshTokenParams } from '../models/RefreshTokenParams'
import type { SignUpDTO } from '../models/SignUpDTO'
import type { SignUpParams } from '../models/SignUpParams'

import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'

export class ShopService {
  /**
   * Login
   * Customer login
   * @returns LoginDTO A shop
   * @throws ApiError
   */
  public static login({
    xApiKey,
    requestBody,
  }: {
    xApiKey: string
    requestBody?: LoginParams
  }): CancelablePromise<LoginDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/login',
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * Logout
   * Customer logout
   * @returns string A shop
   * @throws ApiError
   */
  public static postCustomerLogout({
    xApiKey,
    authorization,
  }: {
    xApiKey: string
    authorization: string
  }): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/logout',
      headers: {
        'x-api-key': xApiKey,
        authorization: authorization,
      },
    })
  }

  /**
   * Refresh token
   * Refresh token
   * @returns RefreshTokenDTO Token pair
   * @throws ApiError
   */
  public static refreshToken({
    xApiKey,
    requestBody,
  }: {
    xApiKey: string
    requestBody?: RefreshTokenParams
  }): CancelablePromise<RefreshTokenDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/refresh-token',
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }

  /**
   * Sign up
   * Customer sign up
   * @returns SignUpDTO A shop
   * @throws ApiError
   */
  public static signUp({
    xApiKey,
    requestBody,
  }: {
    xApiKey: string
    requestBody?: SignUpParams
  }): CancelablePromise<SignUpDTO> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/signup',
      headers: {
        'x-api-key': xApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
