import Link from 'next/link'
import ProductNavBtn from './ProductNavBtn'

function Header() {
  const navItems = [
    {
      id: 0,
      innerHtml: <img src='/images/logo.svg' alt="logo" />,
      href: '/'
    },
    {
      id: 3,
      innerHtml: <ProductNavBtn />,
      href: null // چون لینک نیست، null می‌ذاریم
    },
     {
      id: 2,
      innerHtml: 'Contact',
      href: '/Contact'
    },

    {
      id: 1,
      innerHtml: 'About',
      href: '/About'
    },
   
    {
      id: 4,
      innerHtml: 'Blogs',
      href: '/Blogs'
    },
    {
      id: 5,
      innerHtml: 'Specifications',
      href: '/Specifications',
      isOutlined: true
    },
  ]

  return (
    <header className='bg-[#C8E4C01A] h-16 w-full flex justify-center items-center gap-4 px-6 sticky shadow-[0_0px_9px_0_#8D8D8D40] text-[#818181] font-medium z-50'>
      {navItems.map((item) => {
        if (item.href === null) {
          return <div key={item.id}>{item.innerHtml}</div>
        }

        const isLogo = item.href === '/'
        const isOutlined = item.isOutlined

        return (
          <Link
            key={item.id}
            href={item.href}
            className={`
              flex justify-center items-center h-10 rounded-xl transition 
              ${isLogo ? '' : 'text-[#F7F7F7] gap-2'}
              ${isOutlined
                ? 'w-36 border border-[#F7F7F7] hover:bg-white hover:text-black'
                : 'hover:bg-[#66666675] px-4'}
            `}
          >
            {item.innerHtml}
          </Link>
        )
      })}
    </header>
  )
}

export default Header
