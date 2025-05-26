import React from 'react'
import Container from '../../ui/Container'

function Hero() {
    return (
        <div className='relative'>
            <Container>
                <section className='h-[calc(100vh-64px)] w-full flex '>
                    <article className='flex-1 h-full flex flex-col justify-center gap-5'>
                        <h3 className='flex flex-col text-6xl/relaxed font-bold text-[#F5F5F5] w-full'>
                            <span className=''>Local</span>
                            <span className=''>Tech<span className='text-9xl/[1px] text-[#16B2FF]'>.</span></span>
                            <span className=''>Global</span>
                            <span className=''>Performance<span className='text-9xl/[1px] text-[#16B2FF]'>.</span></span>
                        </h3>
                        <div className="flex items-center">
                            <div className="h-full
   w-1 bg-[#16B2FF] rounded-full"></div>
                            <h4 className="pl-3 text-2xl text-[#B0B0B0]">High‑Accuracy EC/TDS <br />& CTD Sensors, Made in Iran</h4>
                        </div>
                    </article>
                    <article className='flex-1 h-full flex justify-center items-center'>
                        <img src="/images/Ec.png" alt="" />
                    </article>
                </section>
            </Container>
            <div className='w-full h-[900px] overflow-hidden absolute top-0 -z-10' style={{
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)',
    maskImage: 'linear-gradient(to bottom, black 80%, transparent)'
  }}>
                <img className=' w-full opacity-50' src="/images/text1.png" alt=""  />
            </div>
            {/* <img className='absolute  top-0 -z-10 ' src="/images/text2.png" alt="" /> */}
            <img className='absolute  top-0 -z-10 opacity-30' src="/images/text3.png" alt="" />

        </div>
    )
}

export default Hero