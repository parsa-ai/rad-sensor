import Link from "next/link"
import Container from "../components/ui/Container"
import ArrowIcon from "../components/ui/icons/ArrowIcon"

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
        <section className="flex flex-col gap-10">
          <div className="w-full h-1 rounded-full bg-[linear-gradient(90deg,#173E4F_0%,#33A2E7_47.12%,#173E4F_100%)]" />
          <article className="flex justify-between">
            <div className="flex flex-col gap-5 w-[272px] relative">
              <img src="/images/About/time1.png" className="w-[272px] h-[182px] object-cover rounded-lg" alt="" />
              <div className="w-5 h-5 absolute -top-13 rounded-full bg-[#42C2FA] shadow-[0px_0px_8px_-1px_#6BD2FF]" />
              <div className="w-14 h-7 absolute -top-24 -left-4 rounded-md bg-[#99999917] shadow-[0px_2px_4.8px_0px_#FFFFFF2B_inset] flex justify-center items-center">
                2021
              </div>
              <div className="flex flex-col gap-1 ">
                <span className="text-lg font-semibold">First in Iran</span>
                <p className="text-base font-medium text-[#BDBDBD]">Rad Sensor built Iran’s firstEC sensor, all local, affordable, and top quality for you.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[272px] relative">
              <img src="/images/About/time2.png" className="w-[272px] h-[182px] object-cover rounded-lg" alt="" />
              <div className="w-5 h-5 absolute -top-13 rounded-full bg-[#42C2FA] shadow-[0px_0px_8px_-1px_#6BD2FF]" />
              <div className="w-14 h-7 absolute -top-24 -left-4 rounded-md bg-[#99999917] shadow-[0px_2px_4.8px_0px_#FFFFFF2B_inset] flex justify-center items-center">
                2023
              </div>
              <div className="flex flex-col gap-1 ">
                <span className="text-lg font-semibold">Ready to Partner</span>
                <p className="text-base font-medium text-[#BDBDBD]">Team up with Rad Sensor
                  a South Asia leader, participated
                  at Dubai GITEX Exhibition.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[272px] relative">
              <img src="/images/About/time3.png" className="w-[272px] h-[182px] object-cover rounded-lg" alt="" />
              <div className="w-5 h-5 absolute -top-13 rounded-full bg-[#42C2FA] shadow-[0px_0px_8px_-1px_#6BD2FF]" />
              <div className="w-14 h-7 absolute -top-24 -left-4 rounded-md bg-[#99999917] shadow-[0px_2px_4.8px_0px_#FFFFFF2B_inset] flex justify-center items-center">
                2025
              </div>
              <div className="flex flex-col gap-1 ">
                <span className="text-lg font-semibold">Growing Strong</span>
                <p className="text-base font-medium text-[#BDBDBD]">Invest in Rad Sensor, a top 
high-tech name since 2019,
ready for big success ahead.</p>
              </div>
            </div>
          </article>
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
        <section className="flex flex-col gap-24">
          <h3 className="text-4xl font-medium">
            Our Mission & Vision
          </h3>
          <article className="flex gap-56">
            <div className="flex-1/2 flex flex-col gap-5">
              <h6 className="text-2xl font-medium">
                Mission
              </h6>
              <div className="relative flex ">
                <div className="w-4 h-4 absolute -left-14 top-1 rounded-full bg-[#42C2FA] shadow-[0px_0px_8px_-1px_#6BD2FF]" />
                <p>
                  At Rad Sensor, we design intelligent solutions for labs and healthcare, driven
                  by innovation, precision, and expertise — building a smarter, healthier future.
                </p>
              </div>
            </div>
            <div className="flex-1/2 flex flex-col gap-5">
              <h6 className="text-2xl font-medium">
                Vision
              </h6>
              <div className="relative flex ">
                <div className="w-4 h-4 absolute -left-14 top-1 rounded-full bg-[#42C2FA] shadow-[0px_0px_8px_-1px_#6BD2FF]" />
                <p>
                  To become the leading sensor technology brand in the Middle East, redefining global standards in precision, intelligence, and health-focused innovation.

                </p>
              </div>
            </div>
          </article>
        </section>
        <section className='flex flex-col justify-center items-center gap-10 '>
          <div className="flex flex-col justify-center items-center gap-3">
            <h6 className='text-4xl text-white font-medium text-center'>Looking for tailored solutions?</h6>
            <p>Powering ideas — from bold concepts to real impact</p>
          </div>
          <Link href={'/Contact'} className='w-[267px] h-[57px] flex justify-center items-center text-[#3B3B3B] bg-[#f7f7f7] rounded-lg gap-1.5 font-medium text-lg ' >
            Get in Touch
            <ArrowIcon className={'fill-black w-5 rotate-45'}></ArrowIcon>
          </Link>
        </section>
      </Container>
    </main>
  )
}

export default page