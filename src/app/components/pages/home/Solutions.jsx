'use client'
import React from 'react'
import Container from '../../ui/Container'
import Titles from '../../ui/Titles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import SolutionsBox from 'app/components/ui/SolutionsBox'
import SliderArrow from 'app/components/ui/icons/SliderArrow'
import SolutionsBG from 'app/components/ui/icons/SolutionsBg'
import Link from 'next/link'

function Solutions() {
  const SolutionsItems = [
    {
      id: 0,
      isRight: false,
      src: '/images/Solutions/Cl.png',
      title: 'Chlorine Sensor',
      dis: 'Track chlorine levels accurately!',
      url: '/Products/cl'
    }, {
      id: 1,
      isRight: true,
      src: '/images/Solutions/ED.png',
      title: 'EC Sensor',
      dis: 'Accurately measure solids in liquids!',
      url: '/Products/ec'
    }, {
      id: 2,
      isRight: false,
      src: '/images/Solutions/CTD.png',
      title: 'CTD Sensor',
      dis: 'Monitor liquids with EC, temp and more',
      url: '/Products/ctd'
    }, {
      id: 3,
      isRight: true,
      src: '/images/Solutions/CTD2.png',
      title: 'PH Sensor',
      dis: 'Best solution for misuring',
      url: '/Products/ph'
    }
  ]

  return (

    <section className='w-full h-full'>
      <Container>
        <Titles>What are our solutions?</Titles>
        <article className=' hidden md:flex  flex-col gap-10 mt-16 '>
          {SolutionsItems.map((item) => {
            return (
              <SolutionsBox key={item.id} data={item} />
            )
          })}
        </article>
        <article className='flex md:hidden relative '>
          <Swiper
            modules={[Navigation , Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-btn',
              prevEl: '.swiper-button-prev-btn'
            }}
             autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            className='mt-10 mySwiper'
          >
            {SolutionsItems.map((item) => (
              <SwiperSlide key={item.id} className='flex-shrink-0'>
                <div className='!w-full min-h-[400px] flex flex-col justify-end items-center px-10 relative'>
                  <SolutionsBG className='absolute -z-40 w-full -bottom-20' />
                  <div className='flex flex-col items-center min-h-[300px] pt-20 bg-[#FFFFFF47] backdrop-blur-2xl border border-[0.5px_solid_#F7F7F7] rounded-2xl p-5 shadow-[0px_0px_13.4px_0px_#FFFFFF26_inset,0px_0px_8.2px_0px_#0000001A] relative justify-end'>
                    <img
                      src={item.src}
                      alt={item.title}
                      className='w-56 h-56 object-cover mb-4 absolute -top-20 '
                    />
                    <h3 className='text-white text-lg font-bold text-center'>{item.title}</h3>
                    <p className='text-[#ADADAD] text-sm mb-4 text-center'>{item.dis}</p>
                    <Link
                      className="
        w-28 h-8 
        text-[13.33px] text-[#3B3B3B] bg-white 
        rounded-lg font-semibold flex justify-center items-center
        shadow-[0px_0px_0px_0px_#C7D6DD33,0px_0px_7.5px_0px_#D0DDE3C4]
        transition-all duration-300 ease-in-out
        hover:bg-[#f3f4f6] hover:text-[#1F2937] hover:shadow-[0px_0px_0px_0px_#C7D6DD33,0px_0px_12px_0px_#D0DDE3C4]
      "
                      href={item?.url}
                    >
                      View Details
                    </Link>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          <div className='flex justify-between items-center mt-5 absolute z-40  w-full h-full scale-[115%] pointer-events-none'>
            <button className='w-10 h-10 flex justify-center items-center  rounded-full  swiper-button-prev-btn pointer-events-auto'>
              <SliderArrow />
            </button>
            <button className='w-10 h-10 flex justify-center items-center  rounded-full swiper-button-next-btn pointer-events-auto'>
              <SliderArrow className='rotate-180' />
            </button>
          </div>
        </article>
      </Container>
    </section>
  )
}

export default Solutions