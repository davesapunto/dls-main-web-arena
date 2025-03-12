import React, { useEffect, useState } from "react";
import '../TOURNAMENTS/ud-tourna.css';
import { Element } from "react-scroll";
import { DB } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";


const UDTournaments = () => {
    const [gameSET, setGame] = useState('N/A');
    const [tournaments, setTournaments] = useState([]); 

    const fetchData = async () => { //eto yung pang fetch ng data sa firebase
        const tournas = collection(DB, 'tournaments');
        try {
            const data = await getDocs(tournas);
            const dataItems = data.docs.map(doc => ({
                name: doc.id,
                ...doc.data() 
            }));
            setTournaments(dataItems);
            console.log(dataItems);
        } catch (error) {
            console.error('Error fetching tournaments:', error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderCard = (info, index) => ( //eto yung pag rerender ng mga cards. hindi mag rerender to hanggat walang props na naipapasa rito
        <div key={index} className="card">
            <img src={require('../../images/GIFS/222056.gif')} alt={info.name} className="image" />
            <div className="card-info">
                <h1 style={{ margin: 0, marginTop: 5, color: 'white' }}>{info.name}</h1>
                <p style={{ fontSize: 15, margin: 0 }}>{info.time}, {info.data}</p>
                <p style={{ fontSize: 15, margin: 0 }}>HOST: {info.owner}</p>
                <h2 style={{ borderTop: '1px solid grey', paddingTop: 10 }}>{info.game}</h2>
            </div>
        </div>
    );


    const FORMAT = gameSET === 'N/A' ? tournaments : tournaments.filter((game) => game.game === gameSET); //eto yung function sa pang filter out


    return (
        <Element name="tournaments">
            <div className="Tournaments">
                <h1 className="heading">TOURNAMENTS</h1>
                <div className="games-container">
                    <div className={gameSET === 'VALORANT' ? 'VALORANT' : 'games-choices'} onClick={() => setGame(gameSET === 'VALORANT' ? 'N/A' : 'VALORANT')}>
                        <img src={require('../../images/GIFS/222056.gif')} style={{ width: '40%', height: '50%', objectFit: 'cover', border: '1px solid white', borderRadius: 15, margin: 0 }} alt="VALORANT" />
                        <p style={{ marginLeft: 15 }}>VALORANT</p>
                    </div>
                    <div className={gameSET === 'LEAGUE OF LEGENDS' ? 'LOL' : 'games-choices'} onClick={() => setGame(gameSET === 'LEAGUE OF LEGENDS' ? 'N/A' : 'LEAGUE OF LEGENDS')}>
                        <img src={require('../../images/GIFS/222056.gif')} style={{ width: '50%', height: '50%', objectFit: 'cover', border: '1px solid white', borderRadius: 15, margin: 15 }} alt="LEAGUE OF LEGENDS" />
                        <p style={{ marginLeft: 10 }}>LEAGUE OF LEGENDS</p>
                    </div>
                    <div className={gameSET === 'MOBILE LEGENDS' ? 'ML' : 'games-choices'} onClick={() => setGame(gameSET === 'MOBILE LEGENDS' ? 'N/A' : 'MOBILE LEGENDS')}>
                        <img src={require('../../images/GIFS/222056.gif')} style={{ width: '50%', height: '50%', objectFit: 'cover', border: '1px solid white', borderRadius: 15, margin: 15 }} alt="MOBILE LEGENDS" />
                        <p style={{ marginLeft: 5 }}>MOBILE LEGENDS</p>
                    </div>
                </div>

                <div className="Tournament-Container">
                    {tournaments.length === 0 ? <h1 style={{color: 'white', textAlign: 'center'}}>LOADING. . .</h1> : FORMAT.map(renderCard)}
                </div>
            </div>
        </Element>
    );
};

export default UDTournaments;