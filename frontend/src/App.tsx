import { useEffect, useState } from 'react'
import initSqlJs, { Database } from 'sql.js'

import sqlWasm from '!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm'

export function App() {
	const [count, setCount] = useState(0)
	const [db, setDb] = useState<Database | null>(null)

	useEffect(() => {
		// const db = new Database('locations.db')
		// const rows = db.prepare('SELECT * FROM locations').all()
		// console.log(rows)
		const doIt = async () => {
			const SQL = await initSqlJs({ locateFile: () => sqlWasm })
			setDb(new SQL.Database())
		}
		doIt()
	}, [])

	return (
		<div className="flex flex-col items-center p-10">
			<h2 className="text-2xl">Today pavlos is in:</h2>
			<p className="text-4xl">lol</p>
		</div>
	)
}
