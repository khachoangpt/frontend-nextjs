/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Token = {
  properties: {
    user: {
      type: 'string',
      description: `User id`,
    },
    publicKey: {
      type: 'string',
      description: `public key`,
    },
    refreshToken: {
      type: 'string',
      description: `refresh token`,
    },
    refreshTokenUsed: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
  },
} as const;
