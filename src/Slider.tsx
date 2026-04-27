import {useState} from "react";

const imageNames = [
  'photo_2026-03-17_23-56-24.jpg',
  '2fb5cc1036f2b23828908c1818845325.jpg',
  '38f39cca47d8c8d28ba6d2550a8104df.jpg',
  '531354456058847647.jpg',
  'photo_2025-03-27_20-00-30.jpg',
  'photo_2026-03-17_23-56-30.jpg'
]

const images = imageNames.map(name => new URL(`../public/${name}`, import.meta.url).href)

export const Slider = ({visible}: { visible?: number | string }) => {
  const [count, setCount] = useState(Number(visible) ?? 0)
  const nextSlide = () => setCount((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCount((prev) => (prev === 0 ? images.length - 1 : prev - 1))

  return (
    <section id="slider">
      <h2>Слайдер</h2>
      <img src={images[count]}
           width='300px'
           height='300px'
           alt="img" />

      <div className="hero">
        <button
          type="button"
          className="counter"
          onClick={nextSlide}
        >
          Вперед
        </button>
        <button
          type="button"
          className="counter"
          onClick={prevSlide}
        >
          Назад
        </button>
      </div>
    </section>
  )
}