import { DB, getDB } from './DB'
import { useState } from 'react'
import { useAffect } from './useAffect'

export const useDB = (...args: Parameters<typeof getDB>) => {
	const [db, setDB] = useState<DB | undefined>(undefined)

	useAffect(async () => {
		setDB(await getDB(...args))
	}, [])

	return db
}
