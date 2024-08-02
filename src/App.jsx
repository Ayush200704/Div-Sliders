import React, { useRef, useState } from 'react';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import imagepng from "./assets/wix-photo.png"
import wix1 from "./assets/wix-1.png"
import wix2 from "./assets/wix-2.png"

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1.2, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1.2, image.length - 1));
  };

  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: (carouselRef.current.clientWidth / image.length) * currentIndex,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <>
      <div >
        <h1 className='text-white text-center mt-5 text-2xl'>Apple Carousel Cards </h1>
        <div className='my-[8%] w-full flex justify-around items-center scrollbar-hidden'>
          <div className='relative'>
            <div
              ref={carouselRef}
              className='group p-5 flex w-full overflow-x-auto scrollbar-hidden scroll-smooth'
            >
              {currentIndex > 0 && (
                <div
                  className='group-hover:visible absolute left-4 top-[50%] text-white cursor-pointer z-50 opacity-90 flex items-center justify-center text-2xl w-10 h-10 rounded-full bg-bg-color invisible'
                  onClick={handlePrev}
                >
                  <SlArrowLeft />
                </div>
              )}
              {image.map((d, index) => (
                <div key={index} className='bg-white p-4 h-full w-[20%] flex-shrink-0 rounded-2xl border-2 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out transform mx-4'>
                  <img src={d} className='w-full h-full object-cover' />
                </div>
              ))}
              <div
                className='group-hover:visible absolute right-4 top-[50%] text-white cursor-pointer z-50 opacity-90 flex items-center justify-center text-2xl w-10 h-10 rounded-full bg-bg-color invisible'
                onClick={handleNext}
              >
                <SlArrowRight />
              </div>
            </div>
          </div>
        </div>
        <h1 className='text-white text-center mb-4 text-2xl'>WIX Studio Cards </h1>
        <div className='bg-wix-color w-full h-full py-[10%]'>
          <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-red-100 mx-auto '>
            <img src={imagepng} className='absolute w-[50%] h-full object-cover rounded-tl-3xl' />
            <h1 className='text-black absolute text-4xl top-[50%] right-[20%]'>Wix Photo</h1>
          </div>
          <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-yellow-50 mx-auto '>
            <img src={wix2} className='absolute right-0 w-[50%] h-full object-cover rounded-tr-3xl' />
            <h1 className='text-black absolute text-4xl top-[50%] left-[20%]'>Mountains</h1>
          </div>
          <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-green-100 mx-auto '>
            <img src={wix1} className='absolute w-[50%] h-full object-cover rounded-tl-3xl' />
            <h1 className='text-black absolute text-4xl top-[50%] right-[20%]'>Paintings</h1>
          </div>
          <div className='w-full h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-blue-100 mx-auto '></div>
        </div>
      </div>

    </>
  )
}

const image = [
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344314728i/13539043.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546097703i/76865.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348535097i/9663794.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630663027i/18050143.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386609333i/18176747.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1311705955i/7842362.jpg",
]

export default App;