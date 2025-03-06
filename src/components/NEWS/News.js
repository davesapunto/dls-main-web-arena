import React from "react";
import '../NEWS/news.css';
import { Element } from "react-scroll";

const NewsPage = () => {
    return (
        <Element name="News" style={
            {
                display: 'flex', // Enable Flexbox
                alignItems: 'center', // Center vertically
                justifyContent: 'center', // Center horizontally
                width: '100%', // Full width
                height: '100vh', // Full viewport height
                backgroundColor: '#242820', // Match the background color
            }
        }>
            <div className="news">
                <h1 style={{ fontSize: 80, marginBottom: '50px' }}>WHAT'S HAPPENING?</h1>
                <div className="news-container">
                    <div className="class-image-container">
                        <img src={require('../images/navi.jpg')} alt="NAVI" />
                    </div>
                    <div className="news-text">
                        <h1>Why has NAVI entered Mobile Legends: Bang Bang esports?</h1>
                        <p>March 4, 2025 | Tom Daniels</p>
                        <p>Over the last couple of years, Mobile Legends: Bang Bang (MLBB) esports has become one of the hottest properties within the entire industry.The MLBB scene has always been a mainstay in Southeast Asia, with its competitions regularly featuring in top esports viewership lists. However, global esports organisations have now started to take notice of Mobile Legends: Bang Bang’s passionate — and growing — audience. </p>
                    </div>
                </div>
                <div className="news-container">
                    <div className="class-image-container">
                        <img src={require('../images/qiyana.jpeg')} alt="LOL" />
                    </div>
                    <div className="news-text">
                        <h1>The newest low in prestige category: LoL players call for Prestige skin rework after latest batch of cosmetics</h1>
                        <p>March 4, 2025 | Tom Daniels</p>
                        <p>Over the last couple of years, Mobile Legends: Bang Bang (MLBB) esports has become one of the hottest properties within the entire industry.The MLBB scene has always been a mainstay in Southeast Asia, with its competitions regularly featuring in top esports viewership lists. However, global esports organisations have now started to take notice of Mobile Legends: Bang Bang’s passionate — and growing — audience. </p>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default NewsPage;