/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Shop = {
  /**
   * Name of shop
   */
  name?: string
  /**
   * Email of shop
   */
  email?: string
  /**
   * Status of shop
   */
  status?: Shop.status
  /**
   * Is shop verified
   */
  verify?: boolean
  /**
   * List of roles
   */
  roles?: Array<string>
}

export namespace Shop {
  /**
   * Status of shop
   */
  export enum status {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
  }
}
