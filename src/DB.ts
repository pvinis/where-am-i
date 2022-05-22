import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

export const getDB = (source: 'local' | 'github') => {
	if ('local') {
		return new JsonDB(new Config('locations.json', true, true, '/'))
	}
}
