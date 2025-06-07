import Container from "../components/ui/Container"

function page() {
  return (
    <main className="w-full pb-32">
      <Container className='flex flex-col gap-32'>
        <section className="w-full flex ">
          <article className="flex-6/12 pt-32 flex flex-col justify-between h-[550px]" >
            <header>
              <h2 className="text-6xl/normal font-medium ">
                Beyond tech,<br></br>
                This is Rad Sensor
              </h2>
              <span className="text-[#A8A8A8] text-lg font-normal">We build smart solutions for labs, healthcare,<br></br>
                and a better future.</span>
            </header>
            <ul className="flex justify-between">
              <li>
                <div className="relative h-14 flex items-center">
                  <div className="w-[5px] rounded-full top-0 absolute bg-[#16B2FF] h-full" />
                  <span className="pl-3 text-5xl font-semibold">1st</span>
                </div>
                <p className="pl-3">EC Innovator<br></br>
                  in Iran</p>
              </li>
              <li>
                <div className="relative h-14 flex items-center">
                  <div className="w-[5px] rounded-full top-0 absolute bg-[#16B2FF] h-full" />
                  <span className="pl-3 text-5xl font-semibold">+5</span>
                </div>
                <p className="pl-3">Years of Experience</p>
              </li>
              <li>
                <div className="relative h-14 flex items-center">
                  <div className="w-[5px] rounded-full top-0 absolute bg-[#16B2FF] h-full" />
                  <span className="pl-3 text-5xl font-semibold">+20</span>
                </div>
                <p className="pl-3">B2B Partners</p>
              </li>
            </ul>
          </article>
          <article className="flex-6/12">
            <img src="/images/About/hero.png" className="mix-blend-lighten" alt="" /></article>
        </section>
        <section className="flex flex-col gap-14">
          <h3 className="text-4xl font-medium">
            Core Values
          </h3>
          <article >
            <Container className="flex justify-between items-center">
              <img src="/images/About/Core1.png" className="h-fit w-fit" alt="" />
              <img src="/images/About/Core2.png" className="h-fit w-fit" alt="" />
              <img src="/images/About/Core3.png" className="h-fit w-fit" alt="" />
              <img src="/images/About/Core4.png" className="h-fit w-fit" alt="" />
            </Container>
          </article>
        </section>
        <section className="flex flex-col gap-14">
          <h3 className="text-4xl font-medium">
            Meet the Team
          </h3>
          <article className="flex justify-between">
            <div className="w-72 pb-4  bg-[#29282F] p-2 shadow-[0px_4px_50.6px_0px_#8686864D_inset] rounded-2xl flex flex-col gap-2.5">
              <img src="/images/About/Meet.png" className="w-full rounded-t-xl" alt="" />
              <div className="px-2 flex flex-col">
                <span className="text-xl font-semibold">Babak Mokhtari</span>
                <span className="text-base font-medium">CEO & Co - Founder</span>
              </div>
            </div>

            <div className="w-72 pb-4  bg-[#29282F] p-2 shadow-[0px_4px_50.6px_0px_#8686864D_inset] rounded-2xl flex flex-col gap-2.5">
              <img src="/images/About/Meet.png" className="w-full rounded-t-xl" alt="" />
              <div className="px-2 flex flex-col">
                <span className="text-xl font-semibold">Babak Mokhtari</span>
                <span className="text-base font-medium">CEO & Co - Founder</span>
              </div>
            </div>
            <div className="w-72 pb-4  bg-[#29282F] p-2 shadow-[0px_4px_50.6px_0px_#8686864D_inset] rounded-2xl flex flex-col gap-2.5">
              <img src="/images/About/Meet.png" className="w-full rounded-t-xl" alt="" />
              <div className="px-2 flex flex-col">
                <span className="text-xl font-semibold">Babak Mokhtari</span>
                <span className="text-base font-medium">CEO & Co - Founder</span>
              </div>
            </div>
            <div className="w-72 pb-4  bg-[#29282F] p-2 shadow-[0px_4px_50.6px_0px_#8686864D_inset] rounded-2xl flex flex-col gap-2.5">
              <img src="/images/About/Meet.png" className="w-full rounded-t-xl" alt="" />
              <div className="px-2 flex flex-col">
                <span className="text-xl font-semibold">Babak Mokhtari</span>
                <span className="text-base font-medium">CEO & Co - Founder</span>
              </div>
            </div>
            
          </article>
        </section>
      </Container>
    </main>
  )
}

export default page