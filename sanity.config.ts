import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: `${process.env.SANITY_TITLE}`,

  projectId: `${process.env.SANITY_PROJECTID}`,
  dataset: `${process.env.SANITY_DATASET}`,
  basePath: `${process.env.SANITY_BASEPATH}`,

  // plugins: [structureTool(), visionTool()],
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
