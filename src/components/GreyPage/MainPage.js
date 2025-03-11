import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './MainPage.css';
import SelectGame from "./GameSelect.js";
import Header from "../Header/header.js";
import Footer from "../Footer/Footer.js";
import OrganizeTournaments from "../OrganizeTournaments/OrganizeTournaments.js";
import NewsPage from "../NEWS/News.js";
import Signup from "../Signin/SignIn.js";

const images = [
    { image: require('../images/c1.png'), link: "/register" },
    { image: require('../images/c2.png'), link: "/register" },
    { image: require('../images/c3.png'), link: "/register" },
    { image: require('../images/c4.png'), link: "/register" }
];

localStorage.clear('game');

const Page = () => {
    return (
        <>
            <SelectGame />
            <div className="MainPage">
                <div className="carousel-container">
                </div>
            </div>
        </>
    );
}

const MainPage = () => {
    const navigate = useNavigate();
    const [signin, setSignin] = useState(false);
    const [scrolled, isScrolled] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/dashboard");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY === 0 ? isScrolled(false) : isScrolled(true);
        });
    });

    return (
        <>
            <div>
                <Header headerclass={scrolled ? 'header' : 'header-transparent'} />
                {signin ? <Signup /> : <Page />}
                <NewsPage />
                <OrganizeTournaments />
                <Footer />
            </div>
        </>
    );
};

export default MainPage;
