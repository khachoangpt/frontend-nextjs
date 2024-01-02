/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApiKey = {
  /**
   * Api key
   */
  key?: string;
  /**
   * Apikey status
   */
  status?: boolean;
  permissions?: ApiKey.permissions;
};

export namespace ApiKey {

  export enum permissions {
    '_0' = 0,
    '_1111' = 1111,
    '_2222' = 2222,
  }


}

