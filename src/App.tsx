import { drop } from 'remeda'
import { DateTime } from 'luxon'
import { useDB } from './useDB'

export function App() {
	const db = useDB('local')

	let currentLocation = 'Loading..'
	let prevLocations = [{ location: 'Loading..' }]
	if (db !== undefined) {
		const locations = db.locations

		prevLocations = locations
		if (
			locations[0].end === undefined ||
			DateTime.now() < DateTime.fromISO(locations[0].end)
		) {
			currentLocation = locations[0].location
			prevLocations = drop(prevLocations, 1)
		}
	}

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
