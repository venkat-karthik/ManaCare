export default {
  name: 'location',
  title: 'Service Locations',
  type: 'document',
  fields: [
    {
      name: 'city',
      title: 'City Name',
      type: 'string'
    },
    {
      name: 'status',
      title: 'Coverage Status',
      type: 'string',
      options: {
        list: [
          { title: 'Fully Active', value: 'active' },
          { title: 'Expanding Soon', value: 'expanding' }
        ]
      }
    },
    {
      name: 'neighborhoods',
      title: 'Active Neighborhoods',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
