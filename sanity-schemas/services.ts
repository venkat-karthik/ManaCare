export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Service ID',
      type: 'string',
      description: 'e.g. parent-care, property-management'
    },
    {
      name: 'title',
      title: 'Service Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'details',
      title: 'Features/Details List',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
