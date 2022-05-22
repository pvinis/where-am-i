export function App() {
	const [result, reexecuteQuery] = useQuery({
		query: `query {
			locations {
				startDate location
			}
		}`,
	})

	const { data, fetching, error } = result

	if (fetching) return <>Loading</>
	if (error) return <>Oh no, {error.message}</>

	return (
		<div className="flex flex-col items-center p-10">
			<h2 className="text-2xl">Today pavlos is in:</h2>
			<p className="text-4xl">lol</p>
		</div>
	)
}
