/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateProductParams = {
  properties: {
    title: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    thumbnail: {
      type: 'string',
    },
    ratings: {
      type: 'number',
    },
    variants: {
      type: 'any[]',
    },
    price: {
      type: 'number',
    },
    quantity: {
      type: 'number',
    },
    shop: {
      type: 'string',
    },
    attributes: {
      type: 'one-of',
      contains: [{
        type: 'ClothingProductType',
      }, {
        type: 'ElectronicProductType',
      }, {
        type: 'FurnitureProductType',
      }],
    },
    description: {
      type: 'string',
    },
  },
} as const;
