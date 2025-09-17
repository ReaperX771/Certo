import React, { useEffect, useRef, useState } from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

function Footer() {
  const leftRef = useRef(null)
  const left2Ref = useRef(null)
  const rightRef = useRef(null)

  const [leftVisible, setLeftVisible] = useState(false)
  const [left2Visible, setLeft2Visible] = useState(false)
  const [rightVisible, setRightVisible] = useState(false)

  useEffect(() => {
    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold: 0.2 }
      )
      if (ref.current) observer.observe(ref.current)
      return observer
    }

    const obs1 = createObserver(leftRef, setLeftVisible)
    const obs2 = createObserver(left2Ref, setLeft2Visible)
    const obs3 = createObserver(rightRef, setRightVisible)

    return () => {
      if (leftRef.current) obs1.unobserve(leftRef.current)
      if (left2Ref.current) obs2.unobserve(left2Ref.current)
      if (rightRef.current) obs3.unobserve(rightRef.current)
    }
  }, [])

  return (
    <section id='sign' className='bg-[#02033B] py-20 overflow-hidden'>
      <div className='m-auto w-[90%]'>
        <div className='flex flex-wrap sm:justify-center xl:justify-between items-start gap-20 md:gap-40 xl:gap-0'>

          {/* Left - Scan Detect */}
          <div
            ref={leftRef}
            className={`flex flex-col gap-10 transform transition-all duration-1000 ease-out
              ${leftVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
          >
            <h1 className='font-bold text-white text-lg'>Scan. Detect. Remove.</h1>      

            <div className='flex gap-7'>
              <div className='bg-white p-2 rounded-sm w-fit'>
                <BsTwitterX className='w-5 h-5 font-bold text-[#02033B]'/>
              </div>
              <div className='bg-white p-2 rounded-sm w-fit'>
                <FaFacebookF className='w-5 h-5 font-bold text-[#02033B]'/>
              </div>
              <div className='bg-white p-2 rounded-sm w-fit'>
                <BsYoutube className='w-5 h-5 font-bold text-[#02033B]'/>
              </div>
            </div>

            <div className='flex gap-3 text-white/80'>
              <a className='border-b' href="">Privacy Policy</a>
              <a className='border-b' href="">Terms Of Service</a>
            </div>

            <div className='flex flex-col gap-7'>
              <h1 className='text-white/80'>Copyright © 2022 Certo Software
                <br className='hidden sm:block'/> Limited | Registered in England &
                <br className='hidden sm:block'/> Wales No. 10072356
              </h1>
              <h1 className='text-white/80'>Designed & developed by Bigger Picture</h1>
            </div>
          </div>

          {/* Left 2 - Certo + links */}
          <div
            ref={left2Ref}
            className={`transform transition-all duration-1000 ease-out
              ${left2Visible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
          >
            <div>
              <h1 className='font-bold text-white text-5xl'>Certo</h1>
              <hr className='mt-10 mb-10 w-40 text-white/70'/>
            </div>

            <div className='flex flex-col gap-5 ml-7'>
              {['iphone','Android','Help','About','Insights'].map((item, i) => (
                <div key={i} className='flex items-center gap-6'>
                  <span className='border-2 h-7 text-[#FFC247] rotate-90'></span>
                  <p className='font-bold text-[#FFC247] text-2xl'>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Newsletter */}
          <div
            ref={rightRef}
            className={`flex flex-col gap-7 transform transition-all duration-1000 ease-out
              ${rightVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
          >
            <div className='flex flex-col gap-7 bg-[#FFC247] px-7 py-10 rounded-[42px] w-fit'>
              <h1 className='font-bold text-[#02033B] text-3xl'>Sign up to our newsletter</h1>
              <h1 className='text-[#02033B] text-lg'>
                Receive the latest mobile security news, exclusive
                <br className='hidden sm:block'/> discounts & offers straight to your inbox!
              </h1>

              <form>
                <input type="email" placeholder='Email address' required className='bg-white px-7 rounded-l-full w-45 md:w-80 h-9'/>
                <input type="submit" className='bg-[#02033B] px-3 md:px-7 rounded-r-full h-9 font-bold text-white' />
              </form>
            </div>

            <div className='flex justify-end items-end bg-white xl:mt-40 px-10 py-14 rounded-xl w-80 sm:translate-x-35'></div>
          </div>
        </div>

        <h1 className='mt-30 text-white/80'>
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other
          <br className='hidden sm:block'/> countries. App Store is a service mark of Apple Inc. Android, Google Play
          <br className='hidden sm:block'/> and the Google Play logo are trademarks of Google LLC.
        </h1>
      </div>
    </section>
  )
}

export default Footer
