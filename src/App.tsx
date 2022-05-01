import { useState } from 'react'

export function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<p className="text-xl">Hello Vite + React!</p>
			<p>Today pavlos is in:</p>
		</div>
	)
}
