import {type ChangeEvent, useState} from 'react'

export const InputText = ({max, min}: {
	max: number,
	min: number,
	text: string,
}) => {
	const [text, setText] = useState('')
	const [error, setError] = useState('')

	const checkedLength = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setText(value)

		if (value.length > max) {
			setError(`Ошибка: текст не должен превышать ${max} символов (сейчас ${value.length})`)
		} else if (value.length < min && value.length > 0) {
			setError(`Ошибка: текст должен содержать минимум ${min} символа(ов) (сейчас ${value.length})`)
		} else if (value.length === 0) {
			setError('')
		} else {
			setError('')
		}
	}

	return (
		<section id="input-text">
			<h2>Проверка Текста</h2>
			<span>Введите от {min} до {max} символов </span>
			<input type="text"
			       value={text}
			       onChange={checkedLength}
			/>
			{error && (<div className="error"><strong>{error}</strong></div>)}
		</section>
	)
}