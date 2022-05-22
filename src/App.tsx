import { useDB } from './useDB'

export function App() {
	const db = useDB('local')
	const locations = db?.locations

	const currentLocation = locations?.[0]?.location ?? 'Loading..'

	const prevLocations = locations ?? [{ location: 'Loading..' }]

	return (
		<div className="flex flex-col items-center p-10">
			<h2 className="text-2xl">Today, pavlos is in:</h2>
			<p className="text-4xl">{currentLocation}</p>
			<h3>previous locations</h3>
			{prevLocations.map((loc, i) => (
				<p key={i}>{loc.location}</p>
			))}
		</div>
	)
}
