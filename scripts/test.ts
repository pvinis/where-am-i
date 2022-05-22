import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

export const db = new JsonDB(new Config('locations.json', true, true, '/'))

db.push('/locations', [
	{
		date: '2020-10-20',
		location: 'Athens',
	},
])
