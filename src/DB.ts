export const getDB = async (source: 'local' | 'github'): Promise<DB> => {
	if (source === 'local') {
		const data = (await import('../locations.json')) as DB
		return data
	}

	const res = await fetch(
		'https://raw.githubusercontent.com/pvinis/where-am-i/main/locations.json',
	)
	const data = (await res.json()) as DB
	return data
}

type ISODateString = string
// { "start": "2022-05-20T20:40:00+0200", "location": "Athens" },

type Location = {
	start: ISODateString
	end?: ISODateString
	location: string
}

export type DB = {
	locations: Array<Location>
}
