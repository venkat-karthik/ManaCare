export default {
  name: 'servostay',
  title: 'Servostay Configuration',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string'
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description Text',
      type: 'text'
    },
    {
      name: 'perks',
      title: 'Exclusive Perks List',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'locations',
      title: 'Active Locations',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
