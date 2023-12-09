import { createClient } from "@sanity/client"

export const client = createClient({
    projectId: 'xkb4ar5f',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-12-08'
})