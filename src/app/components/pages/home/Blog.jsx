'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import SliderArrow from '../../ui/icons/SliderArrow'

function Blog() {
    const [start, setStart] = useState(0)
    const scrollRef = useRef(null)
    const Blogs = [
        {
            id: 0,
            categorys: ['Blog', 'Oil & Gas'],
            title: 'Can Sensors Boost Oil Operations?',
            text: 'The oil and gas industry operates in some of the most challenging...',
            image: '/images/HomeBlog/p1.png'
        },
        {
            id: 1,
            categorys: ['Blog', 'Oil & Gas'],
            title: 'Can Sensors Boost Oil Operations?',
            text: 'The oil and gas industry operates in some of the most challenging...',
            image: '/images/HomeBlog/p1.png'
        },
        {
            id: 2,
            categorys: ['Blog', 'Oil & Gas'],
            title: 'Can Sensors Boost Oil Operations?',
            text: 'The oil and gas industry operates in some of the most challenging...',
            image: '/images/HomeBlog/p1.png'
        },
        {
            id: 3,
            categorys: ['Blog', 'Oil & Gas'],
            title: 'Can Sensors Boost Oil Operations?',
            text: 'The oil and gas industry operates in some of the most challenging...',
            image: '/images/HomeBlog/p1.png'
        }
    ]

    function ScrollEd(x) {
        scrollRef.current.scrollBy({
            left: x,
            top: 0,
            behavior: 'smooth'
        });
    }

    function ScrollToZero(x) {
        scrollRef.current.scrollTo({
            left: x,
            top: 0,
            behavior: 'smooth'
        });
    }

    function BtnRight() {
        if (start >= scrollRef.current.offsetWidth - 562) {
            setStart(0)
            ScrollToZero(0)
        }
        else {
            setStart(start + 562)
            ScrollEd(562)
        }
    }
    function BtnLeft() {
        if (start <= 0) {
            setStart(1124)
            ScrollToZero(1124)
        }
        else {
            setStart(start - 562)
            ScrollEd(-562)
        }
    }
    return (
        <section className='flex flex-col  justify-center items-center w-full gap-7'>
            <article className='text-[#3EADE5] text-base font-bold flex justify-center h-fit items-center gap-1'><div className='w-2 h-2 bg-[#D9D9D9] rounded-2xl' />Insights</article>
            <article className='flex flex-col items-center'>
                <h4 className='text-[#ADADAD] font-bold text-5xl'>See the Science</h4>
                <h4 className='text-[#3EADE5] font-bold text-5xl'>In Action</h4>
            </article>
            <article className='flex w-full  relative'>
                <div className='overflow-hidden w-full' ref={scrollRef} id='ull'>
                    <ul className='flex w-fit gap-10' >
                        {Blogs.map((blog) => {
                            return (
                                <li className='w-[522px] h-[222px] bg-[#C6C5C7] rounded-2xl p-2 ' key={blog.id}>
                                    <Link className='w-full h-full flex items-center gap-4' href={'/blog/' + blog.id}>
                                        <article className='flex-1 pl-7 overflow-hidden flex flex-col gap-2'>
                                            <div className='flex gap-2'>
                                                {blog.categorys.map((category, index) => {
                                                    return (
                                                        <span className='bg-[#BCBCBC] py-2 px-4 rounded-full text-xs font-semibold' key={index}>{category}</span>
                                                    )
                                                })}
                                            </div>
                                            <h5 className='text-2xl font-semibold'>
                                                {blog.title}
                                            </h5>
                                            <p className='font-medium text-base text-[#3B3B3B] w-[250px] line-clamp-3'>
                                                {blog.text}
                                            </p>
                                        </article>
                                        <img src={blog.image} className='w-[200px] h-[200px]' alt="" />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={`w-full h-full absolute flex  justify-between items-center px-7 flex-row-reverse pointer-events-none`}>
                    <button className={`w-12 h-12 flex justify-center items-center bg-[#3EADE5] rounded-full shadow-[0px_0px_0.5px_0px_#1E79A5,0px_0px_25px_0px_#1E79A5] pointer-events-auto`} onClick={BtnRight}>
                        <SliderArrow className='rotate-180'></SliderArrow>
                    </button>
                    <button className={`w-12 h-12 flex justify-center items-center bg-[#3EADE5] rounded-full shadow-[0px_0px_0.5px_0px_#1E79A5,0px_0px_25px_0px_#1E79A5]  pointer-events-auto`} onClick={BtnLeft}>
                        <SliderArrow></SliderArrow>
                    </button>

                </div>
            </article>
            <Link className=' h-10 w-32 flex justify-center items-center bg-[#3EADE5] rounded-2xl font-semibold shadow-[0px_0px_0.5px_0px_#1E79A5,0px_0px_25px_0px_#1E79A5]  text-white' href={'/blog'}>
                View all
                <SliderArrow className='rotate-180 w-3 h-3'></SliderArrow>
            </Link>
        </section>
    )
}

export default Blog