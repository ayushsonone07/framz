import { createClient } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: "3e74dgd1",
    dataset: "production",
    apiVersion: "2024-08-18",
    useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source){
    return builder.image(source)
}