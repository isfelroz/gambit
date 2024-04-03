import { revalidateSecret } from './../env'
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
	apiVersion,
	dataset,
	projectId,
	// useCdn,
	useCdn: revalidateSecret ? false : true,
	perspective: 'published',
})
