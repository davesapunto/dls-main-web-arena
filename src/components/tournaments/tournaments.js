import React, { useRef, useEffect } from "react";
import './Tournaments.css';
import { Element } from "react-scroll";
import { selectedGame } from "../GreyPage/GameSelect";
import { motion, useInView, useAnimation } from "motion/react";

const testtournament = [
    {
        image: require('../images/tourna/481687516_930928352222561_2069226538248636043_n (1).jpg'),
        name: 'JOSE RIZAL UNIVERSITY CARAVAN',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'PHILLIPINES',
        game: 'VALORANT'
    },
    {
        image: require('../images/tourna/481687516_930928352222561_2069226538248636043_n.jpg'),
        name: 'THE NATIONAL GRAND FINALS',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON',
        game: 'MOBILE LEGENDS'
    },
    {
        image: require('../images/tourna/481687516_930928352222561_2069226538248636043_n.jpg'),
        name: 'THE NATIONAL GRAND FINALS',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON',
        game: 'MOBILE LEGENDS'
    },
    {
        image: require('../images/tourna/481687516_930928352222561_2069226538248636043_n (1).jpg'),
        name: 'JOSE RIZAL UNIVERSITY CARAVAN',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'PHILLIPINES',
        game: 'VALORANT'
    },
    {
        image: require('../images/tourna/481687516_930928352222561_2069226538248636043_n (1).jpg'),
        name: 'JOSE RIZAL UNIVERSITY CARAVAN',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'PHILLIPINES',
        game: 'VALORANT'
    },
    {
        image: require('../images/tourna/481687516_930928352222561_2069226538248636043_n.jpg'),
        name: 'THE NATIONAL GRAND FINALS',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON',
        game: 'MOBILE LEGENDS'
    },
    {
        image: require('../images/tourna/481687516_930928352222561_2069226538248636043_n.jpg'),
        name: 'THE NATIONAL GRAND FINALS',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON',
        game: 'MOBILE LEGENDS'
    },
    {
        image: require('../images/tourna/481687516_930928352222561_2069226538248636043_n (1).jpg'),
        name: 'JOSE RIZAL UNIVERSITY CARAVAN',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'PHILLIPINES',
        game: 'VALORANT'
    },
    {
        image: require('../images/tourna/481687516_930928352222561_2069226538248636043_n (1).jpg'),
        name: 'MARK TOURNAMENT',
        data: 'Sun March 2',
        time: '12:45pm - 1:23pm',
        location: 'MINDANAO',
        game: 'LEAGUE OF LEGENDS'
    },
]




const Tournaments = (gameName) => {

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, {once: true});
    const mainControl = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControl.start('visible');
        }
    }, [isInView]);

    const gameSelected = gameName.game;
    const map = testtournament.map(game => game);
    const filter = map.filter(game => game.game === `${gameSelected}`);
  
    const card = filter.map((info) => 
        <div className="card">
            <img src={info.image} className="image"/>
            <div className="card-info">
                <h1 style={{margin: 0, marginTop: 5, color:'white'}}>{info.name}</h1>
                <p style={{fontSize: 15, margin: 0}}>{info.time}, {info.data}</p>
                <h2 style={{borderTop: '1px solid grey', paddingTop: 10}}>{info.location}</h2>
                <h2 style={{borderTop: '1px solid grey', paddingTop: 10}}>{info.game}</h2>
            </div>
        </div>
    );

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

    const hasGame = card;
    const hasNoGame = cardgame;

    return (
        <Element name="tournaments">
            <div className="Tournaments">
            <h1 className="heading">TOURNAMENTS</h1>
            <div className="Tournament-Container">
                {selectedGame ? hasGame : hasNoGame}
            </div>
        </div>
        </Element>
    );
}

export default Tournaments