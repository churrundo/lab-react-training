function Carousel(props){
    const {images, carouselIndex, carouselRight, carouselLeft} = props
    return(
        <div>
            <img src={images[carouselIndex]} alt="images"/>
            <div>
                <button onClick={carouselLeft}>Left</button>
                <button onClick={carouselRight}>Right</button>
            </div>

        </div>
    )
}

export default Carousel