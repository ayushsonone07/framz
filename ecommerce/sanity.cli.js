import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: NEXT_PUBLIC_SANITY_DATASET
  }
})
