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
      title: 'Experience',
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
      title: 'Education',
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
      name: 'skills',
      title: 'Skills',
      type: 'string',
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'string',
    })
  ],
})