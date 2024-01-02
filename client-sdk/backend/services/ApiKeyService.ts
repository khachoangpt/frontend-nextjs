/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiKey } from '../models/ApiKey'
import type { CreateApikeyParams } from '../models/CreateApikeyParams'

import type { CancelablePromise } from '../core/CancelablePromise'
import { OpenAPI } from '../core/OpenAPI'
import { request as __request } from '../core/request'

export class ApiKeyService {
  /**
   * Create apikey
   * Create apikey
   * @returns ApiKey A apikey
   * @throws ApiError
   */
  public static createApiKey({
    requestBody,
  }: {
    requestBody?: CreateApikeyParams
  }): CancelablePromise<ApiKey> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/customer/apikey',
      body: requestBody,
      mediaType: 'application/json',
    })
  }
}
