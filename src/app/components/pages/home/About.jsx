import Container from "../../ui/Container"
import HomeAbout from "../../ui/icons/HomeAbout"

function About() {
    return (
        <section className="relative flex items-center justify-center">
            <Container className="flex justify-between gap-28 h-[470px]">
                <article className="flex-1  relative" >
                    <div className="w-[400px] h-[270px] absolute top-0 right-0 z-0 rounded-2xl">
                        <div className="w-24 h-24 bg-white absolute -right-10 opacity-5 rounded-full -top-10 -z-10"></div>
                        <img src="/images/HomeAbout/p2.png" className="w-full h-full rounded-2xl object-cover" alt="" />

                    </div>
                    <div className="w-[280px] h-[260px] absolute bottom-0 left-0 z-10 rounded-2xl"> 
                        <div className="w-24 h-24 bg-white absolute -top-10 opacity-5 rounded-full -left-10 -z-10"></div>

                        <img src="/images/HomeAbout/p1.jpg" className="w-full h-full rounded-2xl object-cover" alt="" />

                    </div>
                </article>
                <article className="flex-1 flex flex-col gap-10">
                    <h3 className="text-4xl text-white font-bold">Discover More About<br/>
                        <span className="text-[#16B2FF]">Rad Sensor</span></h3>
                    <p className="text-white text-xl/[30px] text-justify tracking-[7%] font-light">Rad Sensor  is a tech-driven manufacturing company based in the Khuzestan Science & Technology Park. As part of Mazid holding, we specialize in localizing electrochemical sensors — proudly producing electrical conductivity sensors with in-house technology. Backed by experts and academic collaboration, we’re among the few in Iran with this capability. Our integrated network delivers smart engineering solutions across industries.</p>
                </article>
            </Container>
            <img src="/images/HomeAbout/p3.png"  className='absolute  left-0'/>
            <HomeAbout className='absolute w-full h-full bottom-[-230px]'/>
        </section>
    )
}

export default About