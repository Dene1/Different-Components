import {useState} from "react";

export const Paragraf = () => {
  const [state, setState] = useState(true)
  return (
    <section id="paragraf">
      <h2>Параграф</h2>
      {state ? <p>Paragraf</p> : null}
      <button
        type="button"
        className="counter"
        onClick={() => setState(!state)}
      >
        {state ? 'Скрыть' : 'Показать'}
      </button>
    </section>
  )
}