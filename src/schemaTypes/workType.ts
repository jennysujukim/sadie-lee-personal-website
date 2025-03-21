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
          { title: 'Animation', value: 'animation' },
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
    defineField({
      name: 'detailsImages',
      title: 'Details Images',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Image Set',
        fields: [
          {
            name: "images",
            type: 'array',
            title: 'Images',
            of: [
              {
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
              }
            ]  
          }
        ]
      }]
    })
  ],
})