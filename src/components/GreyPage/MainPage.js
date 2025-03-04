import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../GreyPage/MainPage.css';
import SelectGame from "./GameSelect";
import Tournaments from "../tournaments/tournaments";
import Header from "../Header/header";
import Footer from "../Footer/Footer";

const images = [
    {image: require('../images/c1.png')},
    {image: require('../images/c2.png')},
    {image: require('../images/c3.png')},
    {image: require('../images/c4.png')}
]

const MainPage = () => {
    return (
        <>
        <Header/>
        <SelectGame/>
        <div className="MainPage">
            <div className="carousel-container">
                <Carousel showThumbs={false} width={1000} interval={1500} autoPlay infiniteLoop>
                    {images.map((images, index) => 
                        {
                            return <img key={'image-key'+index} src={images.image} style=
                            {
                                {
                                    height: 500,
                                    borderRadius: 15
                                }
                            }/>
                        })}
                </Carousel>
            </div>
        </div>
        <Tournaments/>
        <Footer/>
        </>
    );
}

export default MainPage