export default {
  name: 'plan',
  title: 'Care Plans',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Plan Name',
      type: 'string'
    },
    {
      name: 'price',
      title: 'Monthly Price (INR)',
      type: 'number'
    },
    {
      name: 'formattedPrice',
      title: 'Formatted Price (e.g. ₹4,999)',
      type: 'string'
    },
    {
      name: 'period',
      title: 'Billing Period (e.g. /month)',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text'
    },
    {
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'popular',
      title: 'Is Popular Plan',
      type: 'boolean'
    },
    {
      name: 'ctaText',
      title: 'Button Call to Action',
      type: 'string'
    }
  ]
}
