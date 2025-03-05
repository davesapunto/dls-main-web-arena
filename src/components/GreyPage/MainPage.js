import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../GreyPage/MainPage.css';
import SelectGame from "./GameSelect";
import Tournaments from "../tournaments/tournaments";
import Header from "../Header/header";
import Footer from "../Footer/Footer";
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
        <Tournaments />
        </>
    );
}

const MainPage = () => {

    const [signin , setSignin] = useState(false);

    return (
        <>
            <Header isTrue={signin}/>
            {signin ? null : <Page/>}
            <NewsPage/>
            <Footer />
        </>
    );
};

export default MainPage;