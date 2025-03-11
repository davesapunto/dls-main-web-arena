import React from "react";
import '../NEWS/newsD.css';

const NewsDASH = () => {
    return (
        <div className="news-page">
            <div className="image-header">
                <img src={require('../../images/MLBB_M3WorldChampionship_Navi_TeamLineup-1024x576.jpg')} style=
                {
                    {
                        width: 'inherit',
                        height: 'inherit',
                        objectFit: 'fill'
                    }
                }/>
            </div>
            <div className="text-container">
                <div className="text">
                    <h1 style={{fontSize: 60}}>Why has NAVI entered Mobile Legends: Bang Bang esports?</h1>
                    <p>March 4, 2025 | Tom Daniels</p>
                    <p style={{textAlign: 'left'}}>Over the last couple of years, Mobile Legends: Bang Bang (MLBB) esports has become one of the hottest properties within the entire industry.<br></br><br></br>The MLBB scene has always been a mainstay in Southeast Asia, with its competitions regularly featuring in top esports viewership lists. However, global esports organisations have now started to take notice of Mobile Legends: Bang Bang’s passionate — and growing — audience. 
NAVI, one of the most recognisable teams within Counter-Strike 2, has become the latest name to stake its claim in MLBB, entering the ecosystem’s most popular league, MPL Indonesia.
“This is one of the best titles in the world,” stated NAVI’s COO Aleksey Kucherov when speaking with Esports Insider. “It has an awesome audience and huge viewership and fan base, especially in Southeast Asia and in Indonesia.<br></br><br></br>

“NAVI is one of the biggest clubs in the world and we have many different titles in our portfolio. Of course, we can’t miss one of the best titles in the world, which Mobile Legends is, so that’s why we wanted to get in. And finally, it happened.”

Interestingly this isn’t the first time that NAVI has been in Mobile Legends: Bang Bang, with the organisation previously operating a CIS roster. Despite its short tenure (less than a year), NAVI competed at Mobile Legends’ biggest international event in 2021, the M3 World Championship. 
Kucherov highlighted that this brief stint proved to be very significant, opening the Ukrainian organisation’s eyes to MLBB’s potential.  

“It was the start for us. It was the first meeting with MOONTON in general, with their approach and with the game itself,” he said. “Because we liked the approach from MOONTON and how Mobile Legends was structured, in general, we wanted to get in the best region possible this time.”</p>
                </div>
            </div>
        </div>
    );
}

export default NewsDASH