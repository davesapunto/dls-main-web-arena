import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../GreyPage/MainPage.css';
import SelectGame from "./GameSelect";
import Tournaments from "../tournaments/tournaments";
import Header from "../Header/header";
import Footer from "../Footer/Footer";

import OrganizeTournaments from "../OrganizeTournaments/OrganizeTournaments";


import signin from '../Signin/SignIn.js';
import NewsPage from "../NEWS/News.js";


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
            <OrganizeTournaments />
            </>
    );
}

const MainPage = () => {

    const [signin , setSignin] = useState(false);

    const [scrolled, isScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY <= 0 ? isScrolled(false) : isScrolled(true);
        });
    });

    return (
        <>
            <div>
                <Header headerclass={scrolled ? 'header' : 'header-transparent'}/>
                {signin ? null : <Page/>}
                <NewsPage/>
                <Footer />
            </div>
        </>
    );
};

export default MainPage;