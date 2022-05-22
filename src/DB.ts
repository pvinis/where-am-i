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

type ISO8601DateString = string

type Location = {
	start: ISO8601DateString
	end?: ISO8601DateString
	location: string
}

export type DB = {
	locations: Array<Location>
}
