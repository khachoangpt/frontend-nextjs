/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Shop = {
  properties: {
    name: {
      type: 'string',
      description: `Name of shop`,
    },
    email: {
      type: 'string',
      description: `Email of shop`,
    },
    status: {
      type: 'Enum',
    },
    verify: {
      type: 'boolean',
      description: `Is shop verified`,
    },
    roles: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
  },
} as const
