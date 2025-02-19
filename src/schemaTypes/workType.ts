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
      name: 'filter',
      title: 'Filter',
      type: 'string',
      options: {
        list: [
          { title: 'Print', value: 'print' },
          { title: 'Illustration', value: 'illustration' },
          { title: 'Digital', value: 'digital' },
          { title: 'Painting', value: 'painting' },
        ],
        layout: 'dropdown'
      }
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
      type: 'string',
    }),
    defineField({
      name: 'materials',
      type: 'string',
    }),
    defineField({
      name: 'collaborators',
      type: 'string',
    }),
    defineField({
      name: 'descriptions',
      type: 'string',
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
    defineField({
      name: 'details',
      title: 'Details',
      type: 'object',
      fields: [
        defineField({
          name: 'research',
          title: 'Research',
          type: 'object',
          fields : [
            defineField({
              name: 'images',
              title: 'Images',
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
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'string' }]
            })
          ]
        }),
        defineField({
          name: 'productionProcess',
          title: 'Production Process',
          type: 'object',
          fields : [
            defineField({
              name: 'images',
              title: 'Images',
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
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'string' }]
            })
          ]
        }),
        defineField({
          name: 'outcomeDetail',
          title: 'Outcome Detail',
          type: 'object',
          fields : [
            defineField({
              name: 'images',
              title: 'Images',
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
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'string' }]
            })
          ]
        }),
      ]
    })
  ],
})