import React from 'react'
import './card.css'
import Image from 'next/image'

const Card = ({title, image, bgColor}) => {
  return (
    <div className={`card h-[400px] w-[170px] cursor-pointer rounded-xl overflow-hidden relative ${bgColor}`}>
        <Image
          src={image}
          alt="cart"
          layout='fill'
          objectFit='cover'
        />
      <p className='relative text-center mt-4 font-bold text-white text-xl'>{title}</p>
    </div>
  );
}

export default Card