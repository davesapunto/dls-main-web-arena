import React from "react";
import '../tournaments/Tournaments.css';
import { Element } from "react-scroll";

const testtournament = [
    {
        image: require('../images/tourna/481687516_930928352222561_2069226538248636043_n (1).jpg'),
        name: 'JOSE RIZAL UNIVERSITY CARAVAN',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'PHILLIPINES'
    },
    {
        image: require('../images/tourna/481687516_930928352222561_2069226538248636043_n.jpg'),
        name: 'THE NATIONAL GRAND FINALS',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON'
    },
    {
        image: require('../images/tourna/482387493_645490807882760_2571104943437577530_n.jpg'),
        name: 'KEME KEME TOURNAMENT',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON'
    },
    {
        image: require('../images/tourna/482387493_645490807882760_2571104943437577530_n.jpg'),
        name: 'KEME KEME TOURNAMENT',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON'
    },
    {
        image: require('../images/tourna/482387493_645490807882760_2571104943437577530_n.jpg'),
        name: 'KEME KEME TOURNAMENT',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON'
    },
    {
        image: require('../images/tourna/482387493_645490807882760_2571104943437577530_n.jpg'),
        name: 'KEME KEME TOURNAMENT',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON'
    },
    {
        image: require('../images/tourna/482387493_645490807882760_2571104943437577530_n.jpg'),
        name: 'KEME KEME TOURNAMENT',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON'
    },
    {
        image: require('../images/tourna/482387493_645490807882760_2571104943437577530_n.jpg'),
        name: 'KEME KEME TOURNAMENT',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON'
    },
    {
        image: require('../images/tourna/482387493_645490807882760_2571104943437577530_n.jpg'),
        name: 'KEME KEME TOURNAMENT',
        data: 'Sun March 2',
        time: '12:45pm - 1:15pm',
        location: 'LUZON'
    },
]

const card = testtournament.map((info, index) => {
    // if (index < 5) {
    //     return  <>
    //         <div className="card">
    //     <img src={info.image} className="image"/>
    //     <div className="card-info">
    //         <h1 style={{margin: 0, marginTop: 5, color:'white'}}>{info.name}</h1>
    //         <p style={{fontSize: 15, margin: 0}}>{info.time}, {info.data}</p>
    //         <h2 style={{borderTop: '1px solid grey', paddingTop: 10}}>{info.location}</h2>
    //     </div>
    // </div>
    //     </> 
    // }
    // if (index === 5) { PANG LOAD MORE LANG
    //     return <button style=
    //     {
    //         {
    //             width: 500,
    //             height: 100,
    //             margin: 200,
    //             backgroundColor: 'black',-
    //             color: 'white'
    //         }
    //     }>LOAD MORE</button>
    // }
    return <div className="card">
        <img src={info.image} className="image"/>
        <div className="card-info">
            <h1 style={{margin: 0, marginTop: 5, color:'white'}}>{info.name}</h1>
            <p style={{fontSize: 15, margin: 0}}>{info.time}, {info.data}</p>
            <h2 style={{borderTop: '1px solid grey', paddingTop: 10}}>{info.location}</h2>
        </div>
    </div>
});

const Tournaments = () => {
    return (
        <Element name="tournaments">
            <div className="Tournaments">
            <h1 className="heading">TOURNAMENTS AND EVENTS</h1>
            <div className="Tournament-Container">
                {card}
            </div>
        </div>
        </Element>
    );
}

export default Tournaments