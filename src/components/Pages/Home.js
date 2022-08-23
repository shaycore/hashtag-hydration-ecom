import React, { useEffect, useState } from 'react';

const Home = () => {
    const image1 =  <img
    src="https://www.hydroflask.com/media/wysiwyg/hf-3-our-story-sparks-lake-d.jpg"
    alt="water bottle"
    height={600}
    width='100%'
  />
    const image2 = <img
    src="https://www.hydroflask.com/media/wysiwyg/hf-4-our-story-ferns-rocks-d.jpg"
    alt="water bottle"
    height={600}
    width='100%'
  />
    const image3 = <img
    src="https://www.hydroflask.com/media/wysiwyg/hf-5-our-story-pfa-d.jpg"
    alt="water bottle"
    height={600}
    width='100%'
  />
    const image4 = <img
    src="https://www.hydroflask.com/media/wysiwyg/hf-6-our-story-refill-d.jpg"
    alt="water bottle"
    height={600}
    width='100%'
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
            <div className='jumbotron'>
              <h1>HashTag Hydration</h1>
            </div>
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