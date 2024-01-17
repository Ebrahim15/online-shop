import Card from '@/components/Cards/Card'
import Header from '@/components/Header/Header'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col relative">
      <Header />
      <div className="mt-16 mb-14 mx-3 flex flex-col items-center lg:mx-0">
        <div>
          <h1 className="font-bold text-xl my-3">Shop Our Top Categories</h1>
          <div className="flex flex-row flex-wrap gap-6" id="categoires">
            <Card
              title="Furniture"
              image="/assets/images/furniture.jpg"
              bgColor={"bg-[#709F81]"}
            />
            <Card
              title="Hand Bag"
              image="/assets/images/handbag.jpg"
              bgColor={"bg-[#85111E]"}
            />
            <Card
              title="Books"
              image="/assets/images/books.jpg"
              bgColor={"bg-[#E9AE54]"}
            />
            <Card
              title="Tech"
              image="/assets/images/tech.jpg"
              bgColor={"bg-[#3FB96F]"}
            />
            <Card
              title="Sneakers"
              image="/assets/images/sneakers.jpg"
              bgColor={"bg-[#E298A3]"}
            />
            <Card
              title="Travel"
              image="/assets/images/travel.jpg"
              bgColor={"bg-[#ECB25E]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page