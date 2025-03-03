import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../GreyPage/MainPage.css';

const images = [
    {image: require('../images/c1.png')},
    {image: require('../images/c2.png')},
    {image: require('../images/c3.png')},
    {image: require('../images/c4.png')}
]

const MainPage = () => {
    return (
        <div className="MainPage">
            <div className="carousel-container">
                <Carousel showThumbs={false} width={600}>
                    {images.map((images, index) => 
                        {
                            return <img key={'image-key'+index} src={images.image} style=
                            {
                                {
                                    height: 400,
                                    borderRadius: 15
                                }
                            }/>
                        })}
                </Carousel>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default MainPage