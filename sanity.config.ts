import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: `${process.env.NEXT_PUBLIC_SANITY_TITLE}`,

  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECTID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  basePath: `${process.env.NEXT_PUBLIC_SANITY_BASEPATH}`,

  // plugins: [structureTool(), visionTool()],
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
