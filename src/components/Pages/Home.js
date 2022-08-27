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
            <div>
             <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">
                    <a className="text-dark" href="">FAQs</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark" href="">Help</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark" href="">Support</a>
                </div>
            </div>
        </div>
        </div>
        <div className="container-fluid">
        <div className="container-fluid bg-secondary mb-5">

          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}  >
              <h1 className="font-weight-semi-bold text-uppercase mb-3">
                  HashTag Hydration
              </h1>
          </div>
          </div>
          </div>
            <div className='carousel-container'>
                { data.map((item, index) => {
                return <h1 className='carousel-item'
                    style={{transform: `translate(-${currentIndex * 100}%)`}}
                    key={index}>{item}</h1>})
                }

            </div>
            <div className="container-fluid pt-5">
                        <div className="row px-xl-5 pb-3">
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                                    <h1 className="bi-asterisk text-primary m-0 mr-3"></h1>
                                    <h5 className="font-weight-semi-bold m-0">
                                        Quality Products
                                    </h5>
                                </div>
                            </div>

              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                                    <h1 className="bi-stars text-primary m-0 mr-3"></h1>
                                    <h5 className="font-weight-semi-bold m-0">
                                        Free Shipping
                                    </h5>
                                </div>
                            </div>

              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                                    <h1 className="bi-stars text-primary m-0 mr-3"></h1>
                                    <h5 className="font-weight-semi-bold m-0">
                                        3 Day Shipping
                                    </h5>
                                </div>
                            </div>

              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center border mb-4" style={{padding: '30px'}}>
                                    <h1 className="bi-stars text-primary m-0 mr-3"></h1>
                                    <h5 className="font-weight-semi-bold m-0">
                                        24/7 Customer Support
                                    </h5>
                                </div>
                            </div>
                          </div>
            
            <h1 className='lead'>Hydration Shop</h1>

            <div className="container-fluid offer pt-5">
                <div className="row px-xl-5">
                    <div className="col-md-6 pb-4">
                        <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                            <img src="https://cdn.shopify.com/s/files/1/1892/2457/files/22_210813_CS_TAKEYA_2022_700x.jpg?v=1652125368" alt=""/>
                            <div className="position-relative">
                                <h5 className="text-uppercase text-primary mb-3">What's in a Pro's Bag?</h5>
                                <h1 className="mb-4 font-weight-semi-bold">Game Day</h1>
                                <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                            <img src="https://cdn.shopify.com/s/files/1/1892/2457/files/Photo_May_08_4_31_09_PM_800x.jpg?v=1661182175" alt=""/>
                            <div className="position-relative" >
                                <h5 className="text-uppercase text-primary mb-3">Fitness Tips</h5>
                                <h1 className="mb-4 font-weight-semi-bold">Bottle Care 101</h1>
                                <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                            <img src="https://cdn.shopify.com/s/files/1/1892/2457/files/41_210813_CS_TAKEYA_11970_1_1_700x.jpg?v=1660746572" alt=""/>
                            <div className="position-relative" >
                                <h5 className="text-uppercase text-primary mb-3">Campus</h5>
                                <h1 className="mb-4 font-weight-semi-bold">Must Haves</h1>
                                <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                            <img src="https://cdn.shopify.com/s/files/1/1892/2457/files/19_210812_CS_TAKEYA_14218_700x.jpg?v=1652125334" alt=""/>
                            <div className="position-relative" >
                                <h5 className="text-uppercase text-primary mb-3">Lids and Capacities</h5>
                                <h1 className="mb-4 font-weight-semi-bold">The Perfect Bottle</h1>
                                <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    

            <div className="container-fluid bg-secondary my-5">
                <div className="row justify-content-md-center py-5 px-xl-5">
                    <div className="col-md-6 col-12 py-5">
                        <div className="text-center mb-2 pb-2">
                            <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">Stay Updated</span></h2>
                            <p>We are not the hero in this story. You are. We’re inspired by your movement, by the flow of your active lifestyle. We’re in it with you for those long early morning runs, intense workouts, and precious moments with your family on the playground.</p>
                        </div>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-4" placeholder="Email Goes Here"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary px-4">Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <h1>Colder. Hotter. Longer. Happier.</h1>
    <img src="https://cdn.shopify.com/s/files/1/1892/2457/t/210/assets/bg__surfers_1600x.jpg?v=18983954206508048981660084240"></img>

    </div>
    </div>
  )
}
export default Home;