import React, { useEffect, useRef, useState } from "react"
import spyy from "../assets/Images/spyy.png"
import sam from "../assets/Images/sam.png"
import is from "../assets/Images/is.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

function AnimatedCard({ img, label, title, text }) {
  const imgRef = useRef(null)
  const [imgInView, setImgInView] = useState(false)
  const [textInView, setTextInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgInView(true)
          setTimeout(() => setTextInView(true), 400) // delay text after image
        } else {
          setImgInView(false)
          setTextInView(false)
        }
      },
      { threshold: 0.3 }
    )
    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="inline-block relative" ref={imgRef}>
      {/* Image */}
      <img
        className={`rounded-t-[48px] w-[310px] h-[160px] object-cover transition-all duration-700 ${
          imgInView ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
        src={img}
        alt={label}
      />
      <h1 className="top-4 left-5 absolute bg-white px-5 py-2 rounded-full font-bold text-[#02033B]">
        {label}
      </h1>

      {/* Text Box */}
      <div
        className={`flex flex-col gap-5 bg-white shadow-2xl px-8 py-10 rounded-b-[48px] w-[310px] h-80 transition-all duration-700 ${
          textInView ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <h1 className="font-extrabold text-[#02033B] text-lg">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

function Latest() {
  return (
    <section id='help' className="bg-[#F3F8FF] py-20">
      <div className="m-auto w-[90%]">
        <h1 className="mb-20 font-extrabold text-[#02033B] text-4xl text-center">
          Latest Insight
        </h1>
        <div className="flex flex-wrap justify-center items-start gap-10">
          <AnimatedCard
            img={spyy}
            label="Expertise"
            title={
              <>
                Signs Your Ex Is
                <br className="hidden sm:block" /> Spying On You
              </>
            }
            text={
              <>
                In an ideal world, after a
                <br className="hidden sm:block" /> relationship ends both you
                <br className="hidden sm:block" /> and your ex will move on. But
                <br className="hidden sm:block" /> what if they can’t let go, and
                <br className="hidden sm:block" /> start spying on your...
              </>
            }
          />
          <AnimatedCard
            img={sam}
            label="Guides"
            title={
              <>
                How to Remove a
                <br className="hidden sm:block" /> Hacker from Your
                <br className="hidden sm:block" /> Samsung Phone
              </>
            }
            text={
              <>
                Samsung is the second most
                <br className="hidden sm:block" /> popular manufacturer of
                <br className="hidden sm:block" /> smartphones in the world,
                <br className="hidden sm:block" /> with a market share of
                <br className="hidden sm:block" /> 28.19% compared to Apple’s
                <br className="hidden sm:block" /> 28.43% as...
              </>
            }
          />
          <AnimatedCard
            img={is}
            label="Expertise"
            title={
              <>
                Is Your Cell
                <br className="hidden sm:block" /> Phone Under
                <br className="hidden sm:block" /> Surveillance?
              </>
            }
            text={
              <>
                In today’s surveillance state, it
                <br className="hidden sm:block" /> can feel like your every move is
                <br className="hidden sm:block" /> being watched. Although your
                <br className="hidden sm:block" /> mind may be conjuring up
                <br className="hidden sm:block" /> images of CCTV...
              </>
            }
          />
        </div>

        {/* Button */}
        <div className="flex justify-center items-center gap-3 bg-[#FFC247] m-auto mt-20 px-7 py-2 rounded-full w-fit">
          <button className="ml-5 sm:ml-0 font-bold text-[#02033B] text-center">
            View all insights
          </button>
          <HiOutlineArrowNarrowRight className="w-5 h-5 text-[#02033B]" />
        </div>
      </div>
    </section>
  )
}

export default Latest
