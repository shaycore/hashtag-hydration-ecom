import React, { useEffect, useState } from 'react';

const Home = () => {
    const image1 =  <img
    src="https://cdn.shopify.com/s/files/1/1892/2457/files/Takeya_Su_s_Choice-7_800x800.png?v=1570128260"
    alt="water bottle"
    height={600}
    width={1500}
  />
    const image2 = <img
    src="https://cdn.shopify.com/s/files/1/1892/2457/files/Takeya_Su_s_Choice-94_800x800.png?v=1570128277"
    alt="water bottle"
    height={600}
    width={1500}
  />
    const image3 = <img
    src="https://cdn.shopify.com/s/files/1/1892/2457/files/47_210813_CS_TAKEYA_14807_480x480.jpg?v=1642455733"
    alt="water bottle"
    height={600}
    width={1500}
  />
    const image4 = <img
    src="https://cdn.shopify.com/s/files/1/1892/2457/files/170216_Takeya_12_Group_Excercise_Men_5849_ccdb4dce-4f09-4b95-9415-452b543d8561_1024x1024.jpg?v=1556604905"
    alt="water bottle"
    height={600}
    width={1500}
  />

    const data = [image1, image2, image3, image4]
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length -1) {
            return setCurrentIndex(0)
        }
      return setCurrentIndex(currentIndex+1);
    }


useEffect(() => {
    const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
    return () => clearInterval(interval)})


return (
        <div>
            <div className='carousel-container'>
                { data.map((item, index) => {
                return <h1 className='carousel-item'
                    style={{transform: `translate(-${currentIndex * 100}%)`}}
                    key={index}>{item}</h1>})
                }

                
            </div>
            <h1 className='lead'>Hydration Shop</h1>
        </div>
    )
}
export default Home;