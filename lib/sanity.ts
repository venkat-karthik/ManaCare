import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Initialize Sanity client only if project variables are configured
export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2023-05-03',
      useCdn: true,
    })
  : null

/**
 * Safely fetches content from Sanity. 
 * Falls back to local static data in case of connection failure or missing environment configuration.
 */
export async function getSanityContent<T>(query: string, fallbackData: T): Promise<T> {
  if (!sanityClient) {
    return fallbackData
  }
  try {
    const data = await sanityClient.fetch(query)
    return data && (Array.isArray(data) ? data.length > 0 : true) ? data : fallbackData
  } catch (error) {
    console.warn('[Aasara CMS] Sanity fetch error, using local fallback data:', error)
    return fallbackData
  }
}
