import {useState} from "react";

export const InputText = ({max, min}: {
  max?: string,
  min?: string
}) => {
  const [titleLength, setTitleLength] = useState('')

  const checkedLength = titleLength.length > Number(max) || titleLength.length < Number(min)

  return (
    <section id="slider">
      <h2>Проверка Текста</h2>
      <span>Введите от {min} до {max} символов </span>
      <input type='text'
             value={titleLength}
             onChange={(e) => setTitleLength(e.target.value)}
      />
      <div className="hero">
        {checkedLength && (<span className='error'><strong>Ошибка</strong></span>)}
      </div>
    </section>
  )
}