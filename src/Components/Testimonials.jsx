import React from 'react'
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    id: 1,
    name: "Maria Rodriguez",
    photo: "https://picsum.photos/200/200?random=1",
    sentiment: "positive",
    review: "This translation app is a lifesaver! It helped me communicate effectively during my travels in France."
  },
  {
    id: 2,
    name: "Kenji Tanaka",
    photo: "https://picsum.photos/200/200?random=2",
    sentiment: "positive",
    review: "I love how accurate and fast the translations are. Perfect for business meetings."
  },
  {
    id: 3,
    name: "Sarah Ahmed",
    photo: "https://picsum.photos/200/200?grayscale&random=3",
    sentiment: "neutral",
    review: "The app works well for basic translations, but I wish it had more advanced features."
  },
  {
    id: 4,
    name: "David Johnson",
    photo: "https://picsum.photos/200/200?random=4",
    sentiment: "positive",
    review: "The user interface is very user-friendly and intuitive. I can easily translate any text within seconds."
  }
];

function Testimonials() {
  return (
    <section className="p-6 md:p-10 text-center">
      <h1 className='mb-4 text-3xl md:text-4xl lg:text-6xl font-bold'>Testimonials</h1>
      <p className='mt-4 text-lime-800'>Unsure? See what others are experiencing.</p>

      <div className="mt-6">
        <div className="grid gap-2 sm:gap-3 m-auto md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:px-14">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} name={testimonial.name} photo={testimonial.photo} sentiment={testimonial.sentiment} review={testimonial.review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials