import React from 'react'
import star from '../assets/Images/star.png'
import Marquee from 'react-fast-marquee'
import cnbc from '../assets/Images/cnbc.png'
import ne from '../assets/Images/ne.png'
import finan from '../assets/Images/finan.png'
import read from '../assets/Images/read.png'
import zd from '../assets/Images/zd.png'
import wired from '../assets/Images/wired.png'


function Loved() {
  return (
    <section className="bg-linear-to-t from-[#FCB338] to-[#F9C557] mb-20 py-16 overflow-x-hidden">
      <div className="m-auto w-[90%] max-w-7xl overflow-x-hidden">
        <h1 className="font-extrabold text-[#02033B] text-xl sm:text-3xl sm:text-left text-center">
          Loved by thousands of iPhone
          <br className="hidden sm:block" /> and Android users alike
        </h1>
      </div>

      {/* Desktop: Marquee, Mobile: Flex Column */}
      <div className="mt-8 sm:mt-10">
        {/* Desktop Marquee */}
        <div className="hidden sm:block">
          <Marquee pauseOnHover speed={50} gradient={false}>
            <div className="flex gap-6 px-4">
              <div className="flex flex-col gap-4 bg-white shadow-md mx-2 p-6 rounded-3xl min-w-[360px] max-w-[400px]">
                <div className="flex gap-1">
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                </div>
                <p className="text-[#02033B] text-base leading-relaxed">
                  Does exactly what it says. Clear to read
                  <br className="hidden sm:block" /> and understand. This is now the second
                  <br className="hidden sm:block" /> iPhone we’ve used it on and would
                  <br className="hidden sm:block" /> certainly recommend this app.
                </p>
                <p className="font-extrabold text-[#02033B] text-base">
                  colinandmandy94
                </p>
              </div>

              <div className="flex flex-col gap-4 bg-white shadow-md mx-2 p-6 rounded-3xl min-w-[360px] max-w-[400px]">
                <div className="flex gap-1">
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                </div>
                <p className="text-[#02033B] text-base leading-relaxed">
                  Love the ease and efficiency. Awesome
                  <br className="hidden sm:block" /> app. Very informative and insightful if
                  <br className="hidden sm:block" /> wanting to know more about your device.
                  <br className="hidden sm:block" /> The added breach check is a great bonus.
                  <br className="hidden sm:block" /> Check any email if they’ve ever been
                  <br className="hidden sm:block" /> named in a data breach from years ago.
                  <br className="hidden sm:block" /> Sweet tool. Love it, highly recommend.
                </p>
                <p className="font-extrabold text-[#02033B] text-base">
                  Jennifer Black
                </p>
              </div>

              <div className="flex flex-col gap-4 bg-white shadow-md mx-2 p-6 rounded-3xl min-w-[360px] max-w-[400px]">
                <div className="flex gap-1">
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                </div>
                <p className="text-[#02033B] text-base leading-relaxed">
                  This app is good if you need to identify
                  <br className="hidden sm:block" /> certain vulnerabilities on your iPhone. If
                  <br className="hidden sm:block" /> you have any issues, their customer
                  <br className="hidden sm:block" /> service was quite helpful and responsive.
                </p>
                <p className="font-extrabold text-[#02033B] text-base">
                  Phillip Colligan
                </p>
              </div>

              <div className="flex flex-col gap-4 bg-white shadow-md mx-2 p-6 rounded-3xl min-w-[360px] max-w-[400px]">
                <div className="flex gap-1">
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                  <img src={star} alt="Star" className="w-5 h-5" />
                </div>
                <p className="text-[#02033B] text-base leading-relaxed">
                  My son who works in IT suggested I try
                  <br className="hidden sm:block" /> this app after I was getting lots of strange
                  <br className="hidden sm:block" /> messages and things happening on my
                  <br className="hidden sm:block" /> phone. Since running it once a week I have
                  <br className="hidden sm:block" /> had no viruses or malware problems. I also
                  <br className="hidden sm:block" /> got a VPN app so I think with both I’m all
                  <br className="hidden sm:block" /> set!
                </p>
                <p className="font-extrabold text-[#02033B] text-base">
                  Cindy Roger
                </p>
              </div>
            </div>
          </Marquee>
        </div>

        {/* Mobile Flex Column */}
        <div className="sm:hidden flex flex-col gap-6 m-auto w-[90%]">
          <div className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-3xl">
            <div className="flex gap-1">
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
            </div>
            <p className="text-[#02033B] text-base leading-relaxed">
              Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.
            </p>
            <p className="font-extrabold text-[#02033B] text-base">
              colinandmandy94
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-3xl">
            <div className="flex gap-1">
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
            </div>
            <p className="text-[#02033B] text-base leading-relaxed">
              Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus. Check any email if they’ve ever been named in a data breach from years ago. Sweet tool. Love it, highly recommend.
            </p>
            <p className="font-extrabold text-[#02033B] text-base">
              Jennifer Black
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-3xl">
            <div className="flex gap-1">
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
            </div>
            <p className="text-[#02033B] text-base leading-relaxed">
              This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.
            </p>
            <p className="font-extrabold text-[#02033B] text-base">
              Phillip Colligan
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-3xl">
            <div className="flex gap-1">
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
              <img src={star} alt="Star" className="w-5 h-5" />
            </div>
            <p className="text-[#02033B] text-base leading-relaxed">
              My son who works in IT suggested I try this app after I was getting lots of strange messages and things happening on my phone. Since running it once a week I have had no viruses or malware problems. I also got a VPN app so I think with both I’m all set!
            </p>
            <p className="font-extrabold text-[#02033B] text-base">
              Cindy Roger
            </p>
          </div>
        </div>
      </div>

      <div className="m-auto mt-10 sm:mt-16 w-[90%] max-w-7xl">
         <div className='flex xl:flex-row flex-col justify-center items-center gap-6 lg:gap-10'>
            <h1 className='font-extrabold text-[#02033B] text-lg lg:text-xl'>Featured in:</h1>
            {/* <Marquee pauseOnHover speed={50} gradient={false} className='hidden lg:block'> */}

            <div className='flex flex-wrap justify-center gap-7 mt-6'>
               <img src={cnbc}/>
               <img src={ne}/>
               <img src={finan}/>
               <img src={read}/>
               <img src={zd}/>
               <img src={wired}/>
            </div>
            {/* </Marquee> */}
         </div>
      </div>

    </section>
  )
}

export default Loved
