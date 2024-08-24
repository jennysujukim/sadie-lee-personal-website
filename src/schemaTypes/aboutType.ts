import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'main',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'experience',
      type: 'array',
      of: [
        { 
          type: 'object',
          name: 'experienceDetails',
          fields: [
            { type: 'string', name: 'duration'},
            { type: 'string', name: 'role' },
            { type: 'string', name: 'roleDescription' },
            { type: 'string', name: 'company' },
            { type: 'string', name: 'location' },
            { type: 'string', name: 'type' }
          ]
        }
      ]
    }),
    defineField({
      name: 'education',
      type: 'array',
      of: [
        { 
          type: 'object',
          name: 'educationDetails',
          fields: [
            { type: 'string', name: 'duration'},
            { type: 'string', name: 'degree' },
            { type: 'string', name: 'field' },
            { type: 'string', name: 'school' },
            { type: 'string', name: 'location' },
            { type: 'string', name: 'note' }
          ]
        }
      ]
    }),
    defineField({
      name: 'awardsAndEvents',
      type: 'array',
      of: [
        { 
          type: 'object',
          name: 'awardsAndEventsDetails',
          fields: [
            { type: 'string', name: 'date'},
            { type: 'string', name: 'description' },
          ]
        }
      ]
    }),
    defineField({
      name: 'exhibition',
      type: 'array',
      of: [
        { 
          type: 'object',
          name: 'exhibitionDetails',
          fields: [
            { type: 'string', name: 'date'},
            { type: 'string', name: 'title' },
            { type: 'string', name: 'type' },
            { type: 'string', name: 'location' }
          ]
        }
      ]
    })
  ],
})