import React, { useEffect, useRef, useState } from 'react'
import ri from '../assets/Images/ri.png'
import phone from '../assets/Images/phone.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

function Hero() {
  const textRef = useRef(null)
  const riRef = useRef(null)
  const phoneRef = useRef(null)

  const [inView, setInView] = useState({
    text: false,
    ri: false,
    phone: false
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              setInView(prev => ({ ...prev, text: true }))
            }
            if (entry.target === riRef.current) {
              setInView(prev => ({ ...prev, ri: true }))
            }
            if (entry.target === phoneRef.current) {
              setInView(prev => ({ ...prev, phone: true }))
            }
          } else {
            // Reset when out of view so animation triggers again
            if (entry.target === textRef.current) {
              setInView(prev => ({ ...prev, text: false }))
            }
            if (entry.target === riRef.current) {
              setInView(prev => ({ ...prev, ri: false }))
            }
            if (entry.target === phoneRef.current) {
              setInView(prev => ({ ...prev, phone: false }))
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    if (textRef.current) observer.observe(textRef.current)
    if (riRef.current) observer.observe(riRef.current)
    if (phoneRef.current) observer.observe(phoneRef.current)

    return () => {
      if (textRef.current) observer.unobserve(textRef.current)
      if (riRef.current) observer.unobserve(riRef.current)
      if (phoneRef.current) observer.unobserve(phoneRef.current)
    }
  }, [])

  return (
    <section id='android' className="overflow-x-hidden">
      <div className="relative m-auto mt-20 mb-24 xl:ml-33 w-[90%] max-w-7xl overflow-x-hidden">
        <div className="flex lg:flex-row flex-col-reverse gap-10">
          
          {/* Left side text */}
          <div
            ref={textRef}
            className={`z-20 relative transform transition-all duration-1000 ease-out overflow-x-hidden${
              inView.text ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h1 className="pt-20 font-bold text-[#02033B] text-3xl md:text-5xl">
              Your mobile privacy 
              <br className="hidden sm:block" /> is our mission
            </h1>

            <p className="mt-6 mb-7 text-[#02033B] lg:text-base text-lg md:text-lg xl:text-lg">
              Think your phone has been hacked? Our trusted apps make it 
              <br className="hidden sm:block" /> easy for you to scan, detect and remove threats from your
              <br className="hidden sm:block" /> iPhone and Android devices.
            </p>

            <div className="flex sm:flex-row md:flex-row xl:flex-row flex-col lg:flex-col gap-4">
              <div className="flex justify-center items-center gap-3 bg-[#FFC247] px-7 py-2 rounded-full">
                <button className="ml-5 sm:ml-0 font-bold text-[#02033B] text-center">
                  Get Certo For iPhone
                </button>
                <HiOutlineArrowNarrowRight className="w-5 h-5 text-[#02033B]" />
              </div>
              <button className="px-7 py-2 border-[#02033B] border-2 rounded-full font-bold text-[#02033B] text-center">
                Get Certo For Android
              </button>
            </div>
          </div>

          {/* Right side images */}
          <div className="relative flex justify-start items-center w-full lg:w-1/2">
            <img
              ref={riRef}
              className={`top-0 right-0 bottom-0 absolute border-[#4335DE] border-t-8 border-l-8 w-full lg:w-screen h-full object-cover transform transition-all overflow-x-hidden duration-1000 ease-out ${
                inView.ri ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              src={ri}
              alt="background"
            />
            <img
              ref={phoneRef}
              className={`z-10 relative ml-6 w-[220px] md:w-[260px] lg:w-[300px] transform transition-all duration-1000 ease-out ${
                inView.phone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              src={phone}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
