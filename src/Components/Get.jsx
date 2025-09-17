import React, { useEffect, useRef, useState } from 'react'
import spy from '../assets/Images/spy.png'
import key from '../assets/Images/key.png'
import find from '../assets/Images/find.png'
import os from '../assets/Images/os.png'
import threat from '../assets/Images/threat.png'
import easy from '../assets/Images/easy.png'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

function AnimatedCard({ children, direction = "left" }) {
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
      className={`flex flex-col items-center gap-3 text-center transition-all duration-1000 ${
        inView
          ? "opacity-100 translate-x-0"
          : direction === "left"
          ? "opacity-0 -translate-x-10"
          : "opacity-0 translate-x-10"
      }`}
    >
      {children}
    </div>
  )
}

function Get() {
  const titleRef = useRef(null)
  const btnRef = useRef(null)
  const [titleInView, setTitleInView] = useState(false)
  const [btnInView, setBtnInView] = useState(false)

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => setTitleInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    const observer2 = new IntersectionObserver(
      ([entry]) => setBtnInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (titleRef.current) observer1.observe(titleRef.current)
    if (btnRef.current) observer2.observe(btnRef.current)
    return () => {
      observer1.disconnect()
      observer2.disconnect()
    }
  }, [])

  return (
    <section id='company' className="bg-[#EDF3FC] py-16 overflow-hidden">
      <div className="m-auto w-[90%]">
        <h1
          ref={titleRef}
          className={`font-extrabold text-[#02033B] text-2xl md:text-4xl text-center leading-snug transition-all duration-1000 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Get your freedom back, stop mobile
          <br className="hidden sm:block" /> spyware today
        </h1>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white shadow-xl hover:shadow-2xl mt-12 p-8 rounded-2xl transition-all duration-700">

          <AnimatedCard direction="left">
            <img src={spy} alt="Spyware detection" className="w-16 h-16" />
            <h2 className="font-semibold text-[#02033B] text-lg">Spyware detection</h2>
            <p className="text-gray-600 leading-relaxed">
              Our advanced spyware detection engine can
              identify if a device contains spyware or bugging software.
            </p>
          </AnimatedCard>

          <AnimatedCard direction="right">
            <img src={key} alt="Keylogger detection" className="w-16 h-16" />
            <h2 className="font-semibold text-[#02033B] text-lg">Keylogger detection</h2>
            <p className="text-gray-600 leading-relaxed">
              Find malicious keyboards installed on your device
              that could record what you type (e.g. passwords).
            </p>
          </AnimatedCard>

          <AnimatedCard direction="left">
            <img src={find} alt="Find tracking apps" className="w-16 h-16" />
            <h2 className="font-semibold text-[#02033B] text-lg">Find tracking apps</h2>
            <p className="text-gray-600 leading-relaxed">
              Check which apps can access your location,
              microphone or camera. Get alerted if a tracking app is installed.
            </p>
          </AnimatedCard>

          <AnimatedCard direction="right">
            <img src={os} alt="OS integrity check" className="w-16 h-16" />
            <h2 className="font-semibold text-[#02033B] text-lg">OS integrity check</h2>
            <p className="text-gray-600 leading-relaxed">
              Analyze your operating system for signs of tampering
              that could compromise security, such as Jailbreaking.
            </p>
          </AnimatedCard>

          <AnimatedCard direction="left">
            <img src={threat} alt="Threat removal" className="w-16 h-16" />
            <h2 className="font-semibold text-[#02033B] text-lg">Threat removal</h2>
            <p className="text-gray-600 leading-relaxed">
              Our intelligent scan will either safely remove threats
              or provide easy-to-follow instructions.
            </p>
          </AnimatedCard>

          <AnimatedCard direction="right">
            <img src={easy} alt="Easy to use" className="w-16 h-16" />
            <h2 className="font-semibold text-[#02033B] text-lg">Easy to use</h2>
            <p className="text-gray-600 leading-relaxed">
              We create easy to use apps that can check your
              device for vulnerabilities in minutes.
            </p>
          </AnimatedCard>

          <div
            ref={btnRef}
            className={`flex sm:flex-row flex-col justify-center items-center gap-5 md:col-span-3 transition-all duration-1000 ${
              btnInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex justify-center items-center gap-3 bg-[#FFC247] px-7 py-2 rounded-full">
              <button className="ml-5 sm:ml-0 font-bold text-[#02033B] text-center">Get Certo For iphone</button>
              <HiOutlineArrowNarrowRight className="w-5 h-5 text-[#02033B]" />
            </div>
            <button className="ml-5 sm:ml-0 px-7 py-2 border-[#02033B] border-2 rounded-full font-bold text-[#02033B] text-center">
              Get Certo For Android
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Get
