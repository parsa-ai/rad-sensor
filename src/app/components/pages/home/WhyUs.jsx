import WhyUsSvg from "../../ui/icons/WhyUsSvg"
import Titles from "../../ui/Titles"

function WhyUs() {
    const WhyItems = [
        {
            id: 0,
            title: 'Proven Expertise',
            dis: 'We deliver top-tier EC sensors tailored for local industries.'
        },
        {
            id: 1,
            title: 'Local Expertise Global Quality',
            dis: 'We locally produce high-quality EC sensors for domestic industries.'
        },
        {
            id: 2,
            title: 'Reliable Quality',
            dis: 'Our locally-made EC sensors ensure precision for domestic needs.'
        },
    ]
    return (
        <section >
            <Titles>Why us?</Titles>
            <article className="w-full flex items-center justify-center gap-11 mt-10">
                {WhyItems.map((items) => {
                    return (
                        <div className="w-80 h-96 rounded-3xl p-8 grid grid-rows-3 justify-center bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.55)100%)]" key={items.id}>
                            <WhyUsSvg className='justify-self-center self-center'></WhyUsSvg>
                            <h5 className="text-[#2D2D2D] text-xl font-bold text-center self-center">{items.title}</h5>
                            <p className="text-center self-center ">{items.dis}</p>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}

export default WhyUs