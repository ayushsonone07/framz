export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        of: [{ type: 'image' }],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Product Description',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Product Slug',
        options: {
          source: 'name',
        },
      },
      {
        name: 'price',
        type: 'number',
        title: 'Product Price',
      },
      {
        name: 'category', 
        title: 'Product Category',
        type: 'reference',
        to: [{ type: 'category' }], 
      },
    ],
  }
  