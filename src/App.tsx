import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {Paragraf} from "./Paragraf.tsx";
import {Slider} from "./Slider.tsx";
import {InputText} from "./InputText.tsx";

function App() {
  const [count, setCount] = useState(0)

  const changeTitle = (e: any): void | number => {
    const value = e.target.value
    if (value === '') {
      setCount(0)
      return
    }

    const numValue = Number(value)
    if (!isNaN(numValue)) {
      setCount(numValue)
    }
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg}
               className="base"
               width="170"
               height="179"
               alt="" />
          <img src={reactLogo}
               className="framework"
               alt="React logo" />
          <img src={viteLogo}
               className="vite"
               alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
        </div>
        <input type='text'
               onChange={e => changeTitle(e)}
               value={count} />
        <p> Count is {count}</p>

        <div className="hero">
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 2)}
          >
            Прибавить 2
          </button>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count - 2)}
          >
            Убавить 2
          </button>
        </div>
      </section>
      <Paragraf />
      <Slider visible='4' />
      <InputText max='20'
                 min='5' />
    </>
  )
}

export default App