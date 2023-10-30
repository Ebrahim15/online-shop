import React from 'react'
import './header.css'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <header className="header_container relative">
      <div className='images_container'>
        <div className="slider">
          <div>
            <Image
              className='z-0'
              src={'/assets/images/perfume2.jpg'}
              alt='perfume'
              layout='fill'
              objectFit='cover'
              objectPosition='center 40%'
            />
          </div>
          <div>
            <Image
              className='z-0'
              src={'/assets/images/clothes2.jpg'}
              alt='perfume'
              layout='fill'
              objectFit='cover'
              objectPosition='center 40%'
            />
          </div>
          <div>
            <Image
              className='z-0'
              src={'/assets/images/laptop.jpg'}
              alt='perfume'
              layout='fill'
              objectFit='cover'
              objectPosition='center 40%'
            />
          </div>
          <div>
            <Image
              className='z-0'
              src={'/assets/images/perfume2.jpg'}
              alt='perfume'
              layout='fill'
              objectFit='cover'
              objectPosition='center 40%'
            />
          </div>
        </div>
      </div>
      <div className='z-10 relative text_container'>
        <h1 className='text-main text-5xl font-bold'>
          Shopping And <br /> Department Store.
        </h1>
        <p className='my-10'>
          Shopping is a bit of a relaxing hoppy for me, which <br />
          is sometimes troubling for the bank balance.
        </p>
        <Link href={"#categoires"} className='text-white p-2 pr-6 pl-6 bg-main rounded-3xl duration-300 hover:opacity-90'>
          Learn More
        </Link>
        {/* <button className='text-white p-2 pr-6 pl-6 bg-main rounded-3xl duration-300 hover:opacity-90'>
          Learn More
        </button> */}
      </div>
    </header>
  )
}

export default Header
