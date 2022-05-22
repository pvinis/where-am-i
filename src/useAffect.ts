import { useEffect } from 'react'

export const useAffect = (
	afn: () => Promise<void>,
	deps: Parameters<typeof useEffect>[1],
) =>
	useEffect(() => {
		afn()
	}, deps)
