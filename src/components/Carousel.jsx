import React from 'react'

export const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner carousel-dimension">
            <div className="carousel-item active">
            <img src="https://img.freepik.com/free-vector/yellow-sale-banner-with-discount-sticker-3d-style_1017-39175.jpg?t=st=1676295952~exp=1676296552~hmac=66c528fc5f4080951a5d7fb152808ef0ea10489968e310e1b755eb67bc372e97" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/flash-sale-yellow-banner-template_1017-32178.jpg?t=st=1676295963~exp=1676296563~hmac=aa76abb86ef59b4c38e4324cfea958696be7e982f8b2adbe592c40e490d1c803" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/asbtract-colorful-sales-background_23-2148400114.jpg?t=st=1676296060~exp=1676296660~hmac=499247498d52260b68ff49fcd60ff78c645087745537611a4151ff6139ef6cd7" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}
