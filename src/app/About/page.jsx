import Container from "../components/ui/Container"

function page() {
  return (
    <main className="w-full">
      <Container>
        <section className="w-full flex">
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
                  <div className="w-[5px] rounded-full top-0 absolute bg-[#16B2FF] h-full"/>
                  <span className="pl-3 text-5xl font-semibold">1st</span>
                </div>
                <p className="pl-3">EC Innovator<br></br>
                  in Iran</p>
              </li>
              <li>
                <div className="relative h-14 flex items-center">
                  <div className="w-[5px] rounded-full top-0 absolute bg-[#16B2FF] h-full"/>
                  <span className="pl-3 text-5xl font-semibold">+5</span>
                </div>
                <p className="pl-3">Years of Experience</p>
              </li>
              <li>
                <div className="relative h-14 flex items-center">
                  <div className="w-[5px] rounded-full top-0 absolute bg-[#16B2FF] h-full"/>
                  <span className="pl-3 text-5xl font-semibold">+20</span>
                </div>
                <p className="pl-3">B2B Partners</p>
              </li>
            </ul>
          </article>
          <article className="flex-6/12">
          <img src="/images/About/hero.png" className="mix-blend-lighten" alt="" /></article>
        </section>
        
      </Container>
    </main>
  )
}

export default page