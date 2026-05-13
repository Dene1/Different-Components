import {useRef, useState} from 'react'

const imageNames = [
	'photo_2026-03-17_23-56-24.jpg',
	'2fb5cc1036f2b23828908c1818845325.jpg',
	'38f39cca47d8c8d28ba6d2550a8104df.jpg',
	'531354456058847647.jpg',
	'photo_2025-03-27_20-00-30.jpg',
	'photo_2026-03-17_23-56-30.jpg'
]

export const Slider = ({visible}: { visible: number }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const nextSlide = () => setCurrentIndex((prev) => (prev === imageNames.length - 1 ? 0 : prev + 1))
	const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? imageNames.length - 1 : prev - 1))

	const sliderRef = useRef<HTMLElement>(null)
	const GAP = 20

	const getImageWidth = () => {
		if (sliderRef.current) {
			const containerWidth = sliderRef.current.clientWidth
			return (containerWidth - (GAP * (visible - 1))) / visible
		}
		return 300
	}

	const showSlides = () => {
		const res = []
		const width = getImageWidth()
		for (let index = 0; index < visible; index++) {
			const curr = (currentIndex + index) % imageNames.length
			res.push(
				<img key={index}
				     src={imageNames[curr]}
				     width={width}
				     height="300px"
				     alt="img" />
			)
		}
		return res
	}

	return (
		<section id="slider"
		         ref={sliderRef}>
			<h2>Слайдер</h2>
			<div className="slider-container">
				{showSlides()}
			</div>
			<div className="container">
				<button
					type="button"
					className="counter"
					onClick={prevSlide}
				>
					Назад
				</button>
				<button
					type="button"
					className="counter"
					onClick={nextSlide}
				>
					Вперед
				</button>
			</div>
		</section>
	)
}