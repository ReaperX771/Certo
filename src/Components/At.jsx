import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import rii from '../assets/Images/rii.png'

function At() {
  const textRef = useRef(null)
  const imgRef = useRef(null)

  const [textVisible, setTextVisible] = useState(false)
  const [imgVisible, setImgVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              setTextVisible(true)
            }
            if (entry.target === imgRef.current) {
              setImgVisible(true)
            }
          } else {
            if (entry.target === textRef.current) {
              setTextVisible(false)
            }
            if (entry.target === imgRef.current) {
              setImgVisible(false)
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    if (textRef.current) observer.observe(textRef.current)
    if (imgRef.current) observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id='iphone'>
      <div className='m-auto mt-20 mb-30 w-[90%] max-w-7xl overflow-x-hidden'>
        <div className='flex lg:flex-row flex-col lg:justify-between gap-10 lg:gap-0'>
          
          {/* Left side text */}
          <div
            ref={textRef}
            className={`transform transition-all duration-700 ease-out
              ${textVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <h1 className='font-bold text-[#02033B] text-xl md:text-3xl'>
              At Certo, mobile security
              <br className='hidden sm:block'/> is not an afterthought, it’s
              <br className='hidden sm:block'/> what we do.
            </h1>

            <p className='mt-6 mb-7 text-[#02033B] text-lg'>
              With years of experience in mobile security and
              <br className='hidden sm:block'/> spyware detection, our products have helped
              <br className='hidden sm:block'/> countless people safeguard their devices and
              <br className='hidden sm:block'/> find peace of mind.
            </p>

            <div className='flex flex-col gap-4 sm:w-fit'>
              <div className='flex justify-center items-center gap-3 bg-[#FFC247] px-7 py-2 rounded-full'>
                <button className='ml-5 sm:ml-0 font-bold text-[#02033B] text-center'>
                  Get Certo For iPhone
                </button>
                <HiOutlineArrowNarrowRight className='w-5 h-5 text-[#02033B]'/>
              </div>
              <button className='px-7 py-2 border-[#02033B] border-2 rounded-full font-bold text-[#02033B] text-center'>
                Get Certo For Android
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div
            ref={imgRef}
            className={`transform transition-all duration-700 ease-out
              ${imgVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            <img
              className='border-[#FFC247] border-t-7 border-r-17 border-b-7 w-140 h-120 object-cover'
              src={rii}
              alt="Certo illustration"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default At
