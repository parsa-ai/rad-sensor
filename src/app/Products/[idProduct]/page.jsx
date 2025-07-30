// import Container from "@/app/components/ui/Container"
// import ArrowIcon from "@/app/components/ui/icons/ArrowIcon";

import ArrowIcon from "../../components/ui/icons/ArrowIcon";
import Container from "../../components/ui/Container";

function page() {
  const data = {
    title: 'EC Sensor masters liquid quality & solids monitoring fast!',
    dis: ' The EC/TDS Sensor offers fast, precise liquid quality monitoring, measuring dissolved solids for water testing, aquaculture, or industrial use with reliable results.',
    count: '20+',
    images: ['/images/Products/ctd/ctd1.png', '/images/Products/ctd/ctd2.png'],
    ThreeD: <img src="/images/Products/ctd/fullCtd.png" className="h-[500px]  object-cover" alt="" />,
    videoTitle: 'How EC Sensor really works?',
    video: <img src="/images/Products/ctd/video.png" className="h-auto w-full  object-cover" alt="" />,
    signUpBanner: '/images/Products/ctd/signUpBanner.png'
  }
  const sensorSpecs = [
    { label: "EC Range", value: "0–2000 µS/cm" },
    { label: "TDS Range", value: "0–1000 ppm" },
    { label: "Accuracy", value: "EC: ±0.5 % FS, TDS: ±1 % FS" },
    { label: "Operating Temp.", value: "–10 °C to +80 °C" },
    { label: "Supply Voltage", value: "5 V DC ±0.5 V" },
    { label: "Outputs", value: "0–5 V analog, I²C, RS-485" },
    { label: "Protection", value: "IP67" }
  ];
  return (
    <main className="py-32 flex flex-col gap-32">
      <Container className='flex flex-col gap-24'>
        <section className="grid grid-cols-5 grid-rows-6 gap-4">
          <h2 className="col-span-3 row-span-3 text-6xl/relaxed font-medium">
            {data.title}
          </h2>
          <p className="col-span-2 row-span-2 col-start-4 row-start-4 text-xl text-justify">
            {data.dis}
          </p>
          <div className="row-start-6">
            <span className="text-7xl text-[#16B2FF] font-medium">{data.count}</span>
            <p className="text-xl font-medium">Worldwide clients.</p>
          </div>
        </section>
        <section className="flex flex-col items-center gap-6">
          <h4 className="text-4xl  font-medium">From <span className="text-[#16B2FF]">Vision</span> To <span className="text-[#16B2FF]">Reality</span></h4>
          <span>Fully Designed, Engineered & Manufactured In-House</span>
          <article className="flex gap-5 w-full">
            <div className="flex-1 h-[450px] rounded-tl-[170px] bg-[linear-gradient(119.78deg,rgba(255,255,255,0.58)44.98%,rgba(207,207,207,0.58)93.03%)] flex justify-center items-end">
              <img src={data.images[0]} alt="" className="w-72" />
            </div>
            <div className="flex-1 h-[450px] rounded-tr-[170px] bg-[linear-gradient(119.78deg,rgba(255,255,255,0.58)44.98%,rgba(207,207,207,0.58)93.03%)] flex justify-center items-end">
              <img src={data.images[1]} alt="" className="w-72" />
            </div>
          </article>
        </section>
        <section >
          <h4 className="text-4xl font-semibold mb-10">Technical Specifications</h4>
          <article className="flex justify-between">
            <div className="flex-1">
              <ul>
                {sensorSpecs.map((sensorSpec, index) => {
                  return (
                    <li key={index} className={`py-4 flex justify-between ${index + 1 != sensorSpecs.length ? 'border-b border-white/35' : ''}`}>
                      <span className="flex-1 text-xl font-semibold">{sensorSpec.label} </span> <span className="flex-1 text-xl font-bold">{sensorSpec.value}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="flex-1 flex justify-center items-start">
              {data.ThreeD}
            </div>
          </article>
        </section>
      </Container>
      <section >

        <Container className='mb-10'>
          <h3 className="text-4xl font-medium ">
            {data.videoTitle}
          </h3>
        </Container>
        {data.video}

        <div className="w-full flex justify-center items-center mt-10">
          <button className='w-[267px] h-[57px] flex justify-center items-center text-[#3B3B3B] bg-[#f7f7f7] rounded-lg gap-1.5 font-medium text-lg ' >
            Download DataSheet
            <ArrowIcon className={'fill-black w-5 rotate-45'}/>
          </button>
        </div>
      </section>
      <section className="w-full flex justify-between gap-40">
        <article className="flex-1">
          <img src={data.signUpBanner} alt="" />
        </article>
        <article className="flex-1 flex items-center">
          <form>
            <div>
              <h4 className="text-[40px] font-medium">Sign up for Rad Sensor news</h4>
              <p className="text-[19px] font-medium mt-1">For High-tech news, industry updates and exclusive offers.</p>
            </div>
            <div className="flex gap-2 mt-5 w-full">
              <input name={'FullName'} id={'FullnName'} className={`border border-[#999999] rounded-lg h-10 px-3.5 flex-1 focus:placeholder:text-white`} placeholder="Full name" />
              <input name={'Email'} id={'Email'} className={`border border-[#999999] rounded-lg h-10 px-3.5 flex-1  focus:placeholder:text-white `} placeholder="Email" />
              <button className=" flex-1 px-6 rounded-xl text-[#2A2A2A] bg-[#3EADE5] shadow-[0px_0px_0px_0px_#5EC9FF,0px_0px_7.5px_0px_#5BC8FF]">Subscribe</button>
              </div>
          </form>
        </article>
      </section>

    </main>
  )
}

export default page

function Input({ label, id, type = 'text', divClassName, labelClassName, inputClassName }) {
  return (
    <div className={`flex items-center flex-1 gap-4 relative text-[#999999]  ${divClassName ? divClassName : ''}`}>
      <input type={type} name={id} id={id} className={`border border-[#999999] rounded-lg h-10 px-3.5 w-full ${inputClassName ? inputClassName : ''}`} />
    </div>
  )
}
