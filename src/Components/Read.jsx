import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function AnimatedBlock({ children, direction = "left" }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : direction === "left"
          ? "opacity-0 -translate-x-10"
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  )
}

function Read() {
  return (
    <section>
      <div className="mt-10 overflow-x-hidden">

        <div className="flex md:flex-row flex-col justify-center items-center gap-10 lg:gap-30 m-auto w-[90%]">
          
          {/* Read our story card */}
          <AnimatedBlock direction="left">
            <div className="flex flex-col gap-5 bg-linear-to-t from-[#FCB338] to-[#F9C557] px-10 py-10 rounded-3xl overflow-y-hidden">
              <h1 className="font-extrabold text-[#02033B] text-lg">Read our story</h1>
              <h1 className="text-[#02033B]">
                Find out why thousands trust Certo to secure
                <br className="hidden sm:block" /> their mobile world.
              </h1>
              <div className="flex justify-center items-center gap-3 bg-[#4335DE] px-7 py-2 rounded-full w-fit cursor-pointer">
                <p className="ml-5 sm:ml-0 font-bold text-[#ffffff] text-center">About us</p>
                <HiOutlineArrowNarrowRight className="w-5 h-5 text-[#ffffff]" />
              </div>
            </div>
          </AnimatedBlock>

          {/* Help Center card */}
          <AnimatedBlock direction="left">
            <div className="flex flex-col gap-5">
              <p className="font-extrabold text-[#02033B] text-lg">Help Center</p>
              <p className="text-[#02033B]">
                Help topics, getting
                <br className="hidden sm:block" /> started guides and FAQs.
              </p>
              <button className="px-7 py-2 border-[#02033B] border-2 rounded-full font-bold text-[#02033B] text-center">
                Visit help center
              </button>
            </div>
          </AnimatedBlock>

        </div>

        {/* Spying section */}
        <AnimatedBlock direction="bottom overflow-x-hidden">
          <div className="flex flex-col gap-5 bg-gradient-to-b from-[#2A26CD] via-[#3A36D9] to-[#4946E3] mt-17 py-20 text-center">
            <h1 className="font-extrabold text-white text-lg">Is someone spying on your phone?</h1>
            <p className="text-white text-lg">Find out with Certo</p>
            <div className="flex sm:flex-row flex-col justify-center items-center gap-5 md:col-span-3">
              <div className="flex justify-center items-center gap-3 bg-[#FFC247] px-7 py-2 rounded-full">
                <button className="ml-5 sm:ml-0 font-bold text-[#02033B] text-center">
                  Get Certo For iphone
                </button>
                <HiOutlineArrowNarrowRight className="w-5 h-5 text-[#02033B]" />
              </div>
              <button className="ml-5 sm:ml-0 px-7 py-2 border-[#fff] border-2 rounded-full font-bold text-[#fff] text-center">
                Get Certo For Android
              </button>
            </div>
          </div>
        </AnimatedBlock>

      </div>
    </section>
  )
}

export default Read
