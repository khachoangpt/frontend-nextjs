/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Product = {
  properties: {
    title: {
      type: 'string',
      description: `Product name`,
    },
    thumbnail: {
      type: 'string',
      description: `Product thumbnail url`,
    },
    description: {
      type: 'string',
      description: `Product description`,
    },
    slug: {
      type: 'string',
      description: `Product slug`,
    },
    ratings: {
      type: 'number',
      description: `Product rating`,
    },
    variants: {
      type: 'any[]',
      description: `Product variant`,
    },
    is_draft: {
      type: 'boolean',
    },
    is_published: {
      type: 'boolean',
    },
    price: {
      type: 'number',
      description: `Price of product`,
    },
    quantity: {
      type: 'number',
      description: `Product inventory quantity`,
    },
    type: {
      type: 'ProductTypeEnum',
    },
    shop: {
      type: 'string',
      description: `Shop name`,
    },
    attributes: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
  },
} as const
