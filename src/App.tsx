import {Paragraf} from './Paragraf.tsx'
import {Slider} from './Slider.tsx'
import {InputText} from './InputText.tsx'
import {Counter} from './Counter.tsx'

function App() {

	return (
		<>

			<h1>Get started</h1>
			<Counter />
			<Paragraf />
			<Slider visible={6} />
			<InputText max={20}
			           min={5} />
		</>
	)
}

export default App