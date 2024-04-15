import { client } from '../lib/client'
import { wtoken } from '../lib/token'

const serverClient = client.withConfig({
	token: wtoken,
	stega: false,
})

// export const mutateQuery = (query, params = {}, options = {}) => {
// 	// Don't cache by default
// 	let revalidate: NextFetchRequestConfig['revalidate'] = 0

// 	serverClient.fetch
// 	return null
// }
