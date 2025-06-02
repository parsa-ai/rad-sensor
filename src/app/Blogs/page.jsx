import Link from 'next/link'
import Container from '../components/ui/Container'
import TheBlog from '../components/pages/Blogs/TheBlog'
import ArrowIcon from '../components/ui/icons/ArrowIcon'


function page() {
  const Latests = {
    id: 0,
    image: '/images/Blogs/Latests.png',
    category: 'Health',
    title: 'Advancing Lab & Healthcare Standards',
    text: "In the healthcare industry, accuracy and reliability are critical. whether you're conducting laboratory tests, monitoring water used in  medical processes, or ensuring environmental...",
  }
  const BlogItems = [
    {
      id: 0,
      image: '/images/Blogs/b1.png',
      category: 'Chemical Industry',
      title: 'Accurate Data for Chemical Process Control',
      text: "The chemical industry hinges on precision and safety to ensure product quality...",
    },
    {
      id: 1,
      image: '/images/Blogs/b2.png',
      category: 'Oil & Gas',
      title: 'Can Sensors Boost Oil Operations?',
      text: "The oil and gas industry operates in some of the most challenging  environments, where..."
    },
    {
      id: 2,
      image: '/images/Blogs/b3.png',
      category: 'Health',
      title: 'Innovative Sensors for Healthcare Excellence',
      text: "Advanced sensors (EC, CTD, pH, Colorine) accurately monitor water quality, solution parameters..."
    },
    {
      id: 3,
      image: '/images/Blogs/b4.png',
      category: 'Oil & Gas',
      title: 'Optimizing Drilling Fluids with EC Sensors',
      text: "Understanding the electrical conductivity of formation and produced waters helps..."
    },
    {
      id: 4,
      image: '/images/Blogs/b5.png',
      category: 'Chemical Industry',
      title: 'Real-Time PH Control in Reactions',
      text: "In chemical manufacturing, minor pH shifts can ruin entire batches. Smart sensors enable precise...",
    },
    {
      id: 5,
      image: '/images/Blogs/b6.png',
      category: 'Hydrology',
      title: 'What’s Really Flowing Beneath the Surface?',
      text: "From groundwater salinity to temperature shifts, knowing what’s happening below helps..."
    },
  ]
  return (
    <main>
      <h1 className='w-full h-36 flex justify-center items-center text-6xl text-[#3B3B3B] bg-[linear-gradient(91.72deg,#B2B2B2_-16.43%,_#D9D9D9_107.16%)] shadow-[0px_30px_63.2px_-16px_#FFFFFF2B] mb-40 font-semibold'>Blog</h1>
      <Container>
        <section className='flex flex-col gap-7'>
          <h3 className='text-4xl font-normal text-white'>
            Latests
          </h3>
          <article className='flex gap-20 items-center'>
            <div className='w-[398px] h-[240px]'>
              <img src={Latests.image} className='w-full h-full rounded-4xl object-cover' />
            </div>
            <div className='flex flex-col w-[550px]  text-white gap-3'>
              <span className='text-lg text-[#AEAEAE]'>{Latests.category}</span>
              <h5 className='text-5xl line-clamp-2'>{Latests.title}</h5>
              <p className='text-lg text-[#AEAEAE] line-clamp-3'>{Latests.text}</p>
              <Link className='text-white ' href={'/Blogs/' + Latests.id}>Read more...</Link>
            </div>
          </article>
        </section>
        <section className='grid grid-cols-3 my-20 gap-14'>
          {BlogItems.map((blog) => {
            return (
              <TheBlog data={blog} key={blog.id}></TheBlog>
            )
          })}
        </section>
        <section className='flex flex-col justify-center items-center gap-10 my-32'>
          <h6 className='text-4xl text-white font-medium text-center'>Looking for tailored solutions?</h6>

          <Link href={'/Contact'} className='w-[267px] h-[57px] flex justify-center items-center bg-[#f7f7f7] rounded-lg gap-1.5 font-medium text-lg ' >
          Contact Us Today
          <ArrowIcon className={'fill-black w-5 rotate-45'}></ArrowIcon>
          </Link>
        </section>
      </Container>
    </main>
  )
}

export default page