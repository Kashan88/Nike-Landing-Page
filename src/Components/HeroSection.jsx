import React from 'react'

const HeroSection = () => {
    return (
        <section className='px-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <div className='left-side'>
                            <h1>JUST <br />DO<br /> IT</h1>
                            <p className='text-capitalize'>Innovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most. </p>
                            <button className='btn-shop-now px-4 py-2 my-3'>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7">
                        <div className="right-side">
                            <div className='note  p-2'>
                                <p className='px-4 '>NikeCourt Zoom<br /> Vapor Cage 4 Rafa</p>
                            </div>
                            <img src='Images/Main.png' className='img-fluid main-img' />
                            <div className='d-flex justify-content-around rightside-bottom '>

                                <div className="common-card rounded-5  ">
                                    <img src='Images/cardfirstimg.png' className='img-fluid common-card-img' />
                                </div>
                                <div className="common-card rounded-5">
                                    <img src='Images/cardsecondimg.png' className='img-fluid common-card-img' />
                                </div>
                                <div className="common-card rounded-5">
                                    <img src='Images/cardfirstimg.png' className='img-fluid common-card-img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection