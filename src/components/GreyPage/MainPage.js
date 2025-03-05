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
                <NewsPage/>
                <Footer />
            </div>
        </>
    );
};

export default MainPage;