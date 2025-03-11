import React, { useRef, useEffect, useState } from "react";
import '../TOURNAMENTS/ud-tourna.css';
import { Element } from "react-scroll";

const testtournament = [
    {
        image: require('../../images/c1.png'),
        name: 'JOSE RIZAL UNIVERSITY CARAVAN',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'PHILLIPINES',
        game: 'VALORANT'
    },
    {
        image: require('../../images/c2.png'),
        name: 'JOSE RIZAL UNIVERSITY CARAVAN',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'PHILLIPINES',
        game: 'VALORANT'
    },
    {
        image: require('../../images/c3.png'),
        name: 'JOSE RIZAL UNIVERSITY CARAVAN',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'PHILLIPINES',
        game: 'VALORANT'
    },
    {
        image: require('../../images/c2.png'),
        name: 'JOSE RIZAL UNIVERSITY CARAVAN',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'PHILLIPINES',
        game: 'LEAGUE OF LEGENDS'
    },
    {
        image: require('../../images/c2.png'),
        name: 'JOSE RIZAL UNIVERSITY CARAVAN',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'PHILLIPINES',
        game: 'MOBILE LEGENDS'
    },
    {
        image: require('../../images/c2.png'),
        name: 'JOSE RIZAL UNIVERSITY CARAVAN',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'PHILLIPINES',
        game: 'MOBILE LEGENDS'
    },
]


const UDTournaments = () => {

    const [gameSET, setGame] = useState('N/A');
    const cardgame = testtournament.map((info, index) => {
        return <div className="card">
                <img src={info.image} className="image"/>
                <div className="card-info">
                    <h1 style={{margin: 0, marginTop: 5, color:'white'}}>{info.name}</h1>
                    <p style={{fontSize: 15, margin: 0}}>{info.time}, {info.data}</p>
                    <h2 style={{borderTop: '1px solid grey', paddingTop: 10}}>{info.location}</h2>
                    <h2 style={{borderTop: '1px solid grey', paddingTop: 10}}>{info.game}</h2>
                </div>
            </div>
    });

    const FORMAT = testtournament.filter((game) => game.game === gameSET);
    
    const SELECTGAME = FORMAT.map((info, index) => {
        return <div className="card">
                <img src={info.image} className="image"/>
                <div className="card-info">
                    <h1 style={{margin: 0, marginTop: 5, color:'white'}}>{info.name}</h1>
                    <p style={{fontSize: 15, margin: 0}}>{info.time}, {info.data}</p>
                    <h2 style={{borderTop: '1px solid grey', paddingTop: 10}}>{info.location}</h2>
                    <h2 style={{borderTop: '1px solid grey', paddingTop: 10}}>{info.game}</h2>
                </div>
            </div>
    });

    const HasNoGame = cardgame;
    const Hasgame = SELECTGAME;

    return (
        <Element name="tournaments">
            <div className="Tournaments">
            <h1 className="heading">TOURNAMENTS</h1>
            <div className="games-container">
                <div className={gameSET === 'VALORANT' ? 'VALORANT' : 'games-choices'} onClick={() => 
                    {
                        gameSET === 'VALORANT' ? setGame('N/A') : setGame('VALORANT');
                    }
                }>
                    <img src={require('../../images/GIFS/222056.gif')} style=
                    {
                        {
                            width: '50%',
                            height: '50%',
                            objectFit: 'cover',
                            border: '1px solid white',
                            borderRadius: 15,
                            margin: 0
                        }
                    }/>
                    <p style={{marginLeft: 15}}>VALORANT</p>
                </div>     
                <div className={gameSET === 'LEAGUE OF LEGENDS' ? 'LOL' : 'games-choices'} onClick={() => 
                    {
                        gameSET === 'LEAGUE OF LEGENDS' ? setGame('N/A') : setGame('LEAGUE OF LEGENDS');
                    }
                }>
                    <img src={require('../../images/GIFS/222056.gif')} style=
                    {
                        {
                            width: '50%',
                            height: '50%',
                            objectFit: 'cover',
                            border: '1px solid white',
                            borderRadius: 15,
                            margin: 15
                        }
                    }/>
                    <p style={{marginLeft: 10}}>LEAGUE OF LEGENDS</p>
                </div>    
                <div className={gameSET === 'MOBILE LEGENDS' ? 'ML' : 'games-choices'} onClick={() => 
                    {
                        gameSET === 'MOBILE LEGENDS' ? setGame('N/A') : setGame('MOBILE LEGENDS');
                        
                    }
                }>
                    <img src={require('../../images/GIFS/222056.gif')} style=
                    {
                        {
                            width: '50%',
                            height: '50%',
                            objectFit: 'cover',
                            border: '1px solid white',
                            borderRadius: 15,
                            margin: 15
                        }
                    }/>
                    <p style={{marginLeft: 5}}>MOBILE LEGENDS</p>
                </div>   
            </div>
            
            <div className="Tournament-Container">
                {gameSET === 'N/A' ? HasNoGame : Hasgame}
            </div>
        </div>
        </Element>
    );
}

export default UDTournaments