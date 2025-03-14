import React, { useEffect, useRef } from "react";
import './news.css';
import { Element } from "react-scroll";
import { motion, useAnimation, useInView } from "motion/react";
const NewsPage = () => {

    const containerRef = useRef(null);
    const isinview = useInView(containerRef, {once: true});
    const maincontrol = useAnimation();

    useEffect(() => {
        if (isinview) {
            maincontrol.start('visible');
        }
    }, [isinview]);

    return (
        <Element name="News" style={
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
                backgroundColor: '#242820',
            }
        }>
            <div className="news">
                <h1 style={{ fontSize: 80, marginBottom: '50px', marginTop: 0 }}>WHAT'S HAPPENING?</h1>
                <motion.div                     //purong animation to from motion library 
                ref={containerRef}
                animate={maincontrol}
                initial='hidden'
                variants=
                {
                    {
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0} 
                    }
                }
                transition=
                {
                    {
                        delay: .2, duration: .3
                    }
                }
                className="news-container">
                    <div className="class-image-container">
                        <img src={require('../images/navi.jpg')} alt="NAVI" />
                    </div>
                    <div className="news-text">
                        <h1>Why has NAVI entered Mobile Legends: Bang Bang esports?</h1>
                        <p>March 4, 2025 | Tom Daniels</p>
                        <p>Over the last couple of years, Mobile Legends: Bang Bang (MLBB) esports has become one of the hottest properties within the entire industry.The MLBB scene has always been a mainstay in Southeast Asia, with its competitions regularly featuring in top esports viewership lists. However, global esports organisations have now started to take notice of Mobile Legends: Bang Bang’s passionate — and growing — audience. </p>
                    </div>
                </motion.div>
                <motion.div 
                ref={containerRef}
                animate={maincontrol}
                initial='hidden'
                variants=
                {
                    {
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0}
                    }
                }
                transition=
                {
                    {
                        delay: .3, duration: .3
                    }
                }
                className="news-container">
                    <div className="class-image-container">
                        <img src={require('../images/qiyana.jpeg')} alt="LOL" />
                    </div>
                    <div className="news-text">
                        <h1>The newest low in prestige category: LoL players call for Prestige skin rework after latest batch of cosmetics</h1>
                        <p>March 4, 2025 | Tom Daniels</p>
                        <p>Over the last couple of years, Mobile Legends: Bang Bang (MLBB) esports has become one of the hottest properties within the entire industry.The MLBB scene has always been a mainstay in Southeast Asia, with its competitions regularly featuring in top esports viewership lists. However, global esports organisations have now started to take notice of Mobile Legends: Bang Bang’s passionate — and growing — audience. </p>
                    </div>
                </motion.div>
            </div>
        </Element>
    );
}

export default NewsPage;