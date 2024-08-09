import {defineField, defineType} from 'sanity'

export const workType = defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'number',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'type',
      type: 'string',
    }),
    defineField({
      name: 'year',
      type: 'string',
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'descriptions',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          layout: 'grid',
          hotspot: true
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          }
        ]
       }]
    }),
  ],
})