import React from 'react'
import Container from './Container'
import PhoneIcon from './icons/PhoneIcon'
import LocationIcon from './icons/LocationIcon'
import CopyRightIcon from './icons/CopyRightIcon'

function Footer() {
  const SocialMedia = [
    {
      id: 0,
      label: 'Instagram',
      href: '/Instagram'
    },
    {
      id: 1,
      label: 'Whatsapp',
      href: '/Whatsapp'
    },
    {
      id: 2,
      label: 'Telegram',
      href: '/Telegram'
    },
  ]
  const Pages = [
    {
      id: 0,
      label: 'Contact',
      href: '/Contact'
    },
    {
      id: 1,
      label: 'Products',
      href: '/Products'
    },
    {
      id: 2,
      label: 'About',
      href: '/About'
    },
  ]
  return (
    <footer>
      <Container >
        <div className='h-[496px] w-full border border-white/35 rounded-3xl mb-14 shadow-[0px_0px_53px_-20px_#fff,inset_0_0_39px_-20px_#fff]  px-32 py-24 '>
          <div className='flex gap-4 h-fit'>
            <div className='h-14 rounded-full w-0.5 bg-white ' />
            <img src='/images/logo.svg' alt="logo" className='w-24 ' />
          </div>
          <div className=' flex  gap-14 mt-10 '>
            <article className='flex-1 text-white flex flex-col gap-10'>
              <p>Rad Sensor, Mazid Tech subsidiary, pioneers indigenous EC sensors with expert knowledge.</p>
              <div className='flex gap-5 ' >
                <PhoneIcon></PhoneIcon>
                <span>+98 61 3336 4527</span>
              </div>
              <div className='flex gap-5' >
                <div className='w-5'>
                  <LocationIcon/>
                </div>
                <span className=''>Unit 1, 1st Floor, Bldg. 3, W. Socrates St., Amaniyeh, Khuzestan Tech & Science Park, Iran</span>
              </div>
            </article>
            <article className='flex-1 flex justify-end gap-40 text-white font-normal'>
              <div>
                <h6>PAGES</h6>
                <ul className='flex flex-col gap-7 mt-7'>
                  {Pages.map((item) => {
                    return (
                      <li key={item.id}>
                        <a href={item.href} className="relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">{item.label}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <h6>SOCIAL MEDIA</h6>
                <ul className='flex flex-col gap-7 mt-7'>
                  {SocialMedia.map((item) => {
                    return (
                      <li key={item.id}>
                        <a href={item.href} className="relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">{item.label}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </article>
          </div>
        </div>
        <p className='w-full flex justify-center items-center text-white gap-2 mb-10'>
          <CopyRightIcon/>
          2025 Rad Sensor. All rights reserved.
          </p>
      </Container>
    </footer>
  )
}

export default Footer