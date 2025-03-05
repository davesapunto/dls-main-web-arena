import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../GreyPage/MainPage.css';
import SelectGame from "./GameSelect";
import Tournaments from "../tournaments/tournaments";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
import signin from '../Signin/SignIn.js';

const images = [
    { image: require('../images/c1.png'), link: "/register" },
    { image: require('../images/c2.png'), link: "/register" },
    { image: require('../images/c3.png'), link: "/register" },
    { image: require('../images/c4.png'), link: "/register" }
];

const Page = () => {
    return (
        <>
        <SelectGame />
            <div className="MainPage">
                <div className="carousel-container">
                <Carousel showThumbs={false} width={1000} interval={1500} autoPlay infiniteLoop>
                    {images.map((item, index) => (
                        <div key={'image-key' + index} style={{ position: "relative" }}>
                            <img 
                                src={item.image} 
                                style={{ height: 500, borderRadius: 15 }} 
                                alt={`Slide ${index + 1}`}
                            />
                                {/* Register Now Button */}
                            <a href={item.link} className="register-button">
                                        REGISTER NOW!
                            </a>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <Tournaments />
            </>
    );
}

const MainPage = () => {

    const [signin , setSignin] = useState(true);

    return (
        <>
            <Header isTrue={signin}/>
            {signin ? null : <Page/>}

            <Footer />
        </>
    );
};

export default MainPage;