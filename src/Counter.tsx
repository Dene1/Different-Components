import {useState} from 'react'

export const Counter = () => {
	const [count, setCount] = useState<number>(0)

	return (
		<section id="counter">
			<h2>Счетчик</h2>

			<div className="container">
				<button
					type="button"
					className="counter"
					onClick={() => setCount((count) => count + 2)}
				>
					+
				</button>
				<p>{count}</p>
				<button
					type="button"
					className="counter"
					onClick={() => setCount((count) => count - 2)}
				>
					-
				</button>
			</div>
		</section>
	)
}