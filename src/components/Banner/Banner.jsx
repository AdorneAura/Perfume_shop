import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CarouselLoader from '../Loaders/CarouselLoader'

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const banners = useSelector(store => store.products.carousel)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length)
    }, 4000) // Change slide every 5 seconds
    return () => clearInterval(interval) // Cleanup on unmount
  }, [banners.length])

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + banners.length) % banners.length
    )
  }

  if (banners.length <= 0) {
    return (
      <div className='mx-auto py-[55px]'>
        <CarouselLoader size={150} />
      </div>
    )
  }

  return (
    <div className='relative w-full overflow-hidden'>
      {/* Carousel Images */}
      <div
        className='flex transition-transform duration-500'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.length > 0 ? (
          banners.map((image, index) => (
            <img
              key={index}
              src={image.ImgUrl}
              alt={`Slide ${index + 1}`}
              className='w-full flex-shrink-0'
            />
          ))
        ) : (
          <div className='mx-auto py-[55px]'>
            <CarouselLoader size={150} />
          </div>
        )}
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className='absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black transition'
      >
        &#8249;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className='absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black transition'
      >
        &#8250;
      </button>

      {/* Indicators */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Banner
