import Link from "next/link"
import ArrowIcon from "../../ui/icons/ArrowIcon"

function TheBlog({ data }) {
    return (
        <div className="flex flex-col gap-4 text-white">
            <Link href={'/Blogs/' + data.id} className="w-full relative flex rounded-2xl">
                <img src={data.image} alt="" className="w-full rounded-2xl" />
                <div className="w-full h-full absolute bg-black/50 opacity-0 hover:opacity-100 transition rounded-2xl flex justify-center items-center">
                    <div className="w-20 h-20 bg-[#3EADE5] rounded-full flex justify-center items-center">
                        <ArrowIcon></ArrowIcon>
                    </div>
                </div>
            </Link>
            <Link href={'/Categorys/' + data.category} className="text-[#AEAEAE] text-lg ">
                {data.category}
            </Link>
            <h6 className="text-2xl ">
                {data.title}
            </h6>
            <div className="text-[#AEAEAE] text-lg">
                {data.text}
                <Link href={'/Blogs/' + data.id} className="underline text-white">Read more</Link>
            </div>
        </div>
    )
}

export default TheBlog