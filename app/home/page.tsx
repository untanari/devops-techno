import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <header className='shadow-md bg-white font-sans tracking-wide relative z-50'>
        <section
            className='flex items-center lg:justify-center flex-wrap gap-5 relative py-3 px-10 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='md:w-[170px] w-36' />
            </a>
            <div className="space-x-6 md:absolute md:right-10 flex items-center max-md:ml-auto">
            <Link href={'/'}> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000" />
                    <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000" />
                </svg>
                </Link>
            </div>
        </section>
        <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 px-6 sm:py-20 py-10 font-[sans-serif]">
            <div className="max-w-screen-xl mx-auto text-center text-white">
                <h1 className="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">Welcome User</h1>
            </div>
        </div>
    </header>
    
  )
}

export default Home
