import React, { useEffect, useState } from "react";
import '../TOURNAMENTS/ud-tourna.css';
import { Element } from "react-scroll";
import { DB } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const UDTournaments = () => {
    const [gameSET, setGame] = useState('N/A');
    const [tournaments, setTournaments] = useState([]);
    const [selectedTournamentId, setSelectedTournamentId] = useState(null);
    const [selectedTab, setSelectedTab] = useState('overview'); // Tabs: overview, participants, brackets, media, stats, announcements, contact
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);
        const tournas = collection(DB, 'tournaments');
        try {
            const data = await getDocs(tournas);
            const dataItems = data.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log("Fetched tournaments:", dataItems);
            setTournaments(dataItems);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching tournaments:", error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderTournamentCard = (tournament) => {
        console.log("Rendering tournament card:", tournament.id, tournament.name);
        return (
            <div 
                key={tournament.id} 
                className="tournament-card"
                onClick={() => {
                    console.log("Selected tournament:", tournament.id, tournament.name);
                    setSelectedTournamentId(tournament.id);
                    setSelectedTab('overview'); // Reset to overview tab when selecting a new tournament
                }}
            >
                {/* Tournament Banner/Poster */}
                <div className="tournament-banner">
                    <img 
                        src={tournament.poster || require('../../images/GIFS/222056.gif')} 
                        alt={tournament.name} 
                    />
                </div>
                
                {/* Tournament Title */}
                <div className="tournament-title">
                    {tournament.name || 'Unnamed Tournament'}
                </div>
                
                {/* Tournament Details */}
                <div className="tournament-info">
                    <div className="tournament-date">
                        <span className="icon">📅</span>
                        <span>{tournament.dateCreated || 'N/A'}</span>
                        <span className="time">{tournament.time || '7:00 AM PST'}</span>
                    </div>
                    
                    <div className="tournament-location">
                        <span>{tournament.location || 'Online'}</span>
                    </div>
                    
                    <div className="tournament-organizer">
                        <img 
                            src={tournament.ownerLogo || require('../../images/GIFS/222056.gif')} 
                            alt={tournament.owner || 'Organizer'} 
                            className="organizer-logo"
                        />
                        <span>{tournament.owner || 'Unknown Organizer'}</span>
                    </div>
                </div>
            </div>
        );
    };

    const renderTournamentDetails = (tournamentId) => {
        // Log the ID we're searching for
        console.log("Looking for tournament with ID:", tournamentId);
        
        // Log all tournament IDs for comparison
        console.log("Available tournament IDs:", tournaments.map(t => t.id));
        
        // Find the tournament with matching ID
        const tournament = tournaments.find(t => t.id === tournamentId);
        
        // Log the found tournament
        console.log("Found tournament:", tournament);
        
        if (!tournament) {
            console.error("Tournament not found with ID:", tournamentId);
            return (
                <div className="tournament-details-panel">
                    <div className="details-header">
                        <h1>Tournament Not Found</h1>
                        <button className="close-btn" onClick={() => setSelectedTournamentId(null)}>✕</button>
                    </div>
                    <p>Could not find tournament with ID: {tournamentId}</p>
                </div>
            );
        }

        return (
            <div className="tournament-details-panel">
                <div className="details-header">
                    <h1>{tournament.name || 'Unnamed Tournament'}</h1>
                    <button className="close-btn" onClick={() => setSelectedTournamentId(null)}>✕</button>
                </div>
                
                {/* Tournament Overview Info */}
                <div className="tournament-overview">
                    <div className="overview-content">
                        <img 
                            src={tournament.poster || require('../../images/GIFS/222056.gif')} 
                            alt={tournament.name || 'Tournament Poster'} 
                            className="details-poster" 
                        />
                        
                        <div className="overview-info">
                            <p>
                                <strong>Host:</strong> {tournament.owner || 'Unknown'} | 
                                <strong>Game:</strong> {tournament.game || 'N/A'} | 
                                <strong>Type:</strong> {tournament.type || 'N/A'} | 
                                <strong>Mode:</strong> {tournament.mode || 'N/A'} | 
                                <strong>Date Created:</strong> {tournament.dateCreated || 'N/A'} | 
                                <strong>Status:</strong> {tournament.status || 'N/A'}
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Tabs Navigation */}
                <div className="tabs">
                    <button
                        className={selectedTab === 'overview' ? 'active' : ''}
                        onClick={() => setSelectedTab('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={selectedTab === 'participants' ? 'active' : ''}
                        onClick={() => setSelectedTab('participants')}
                    >
                        Participants
                    </button>
                    <button
                        className={selectedTab === 'brackets' ? 'active' : ''}
                        onClick={() => setSelectedTab('brackets')}
                    >
                        Brackets
                    </button>
                    <button
                        className={selectedTab === 'media' ? 'active' : ''}
                        onClick={() => setSelectedTab('media')}
                    >
                        Media
                    </button>
                    <button
                        className={selectedTab === 'stats' ? 'active' : ''}
                        onClick={() => setSelectedTab('stats')}
                    >
                        Stats
                    </button>
                    <button
                        className={selectedTab === 'announcements' ? 'active' : ''}
                        onClick={() => setSelectedTab('announcements')}
                    >
                        Announcements
                    </button>
                    <button
                        className={selectedTab === 'contact' ? 'active' : ''}
                        onClick={() => setSelectedTab('contact')}
                    >
                        Contact
                    </button>
                </div>
                
                {/* Tab Content */}
                <div className="tab-content">
                    {selectedTab === 'overview' && (
                        <div>
                            <h2>Overview</h2>
                            <p>{tournament.details || 'No details available for this tournament.'}</p>
                        </div>
                    )}
                    {selectedTab === 'participants' && (
                        <div>
                            <h2>Participants</h2>
                            {tournament.participants && tournament.participants.length > 0 ? (
                                <ul className="participants-list">
                                    {tournament.participants.map((participant, index) => (
                                        <li key={index}>{participant.name || 'Unnamed Participant'}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No participants have joined this tournament yet.</p>
                            )}
                        </div>
                    )}
                    {selectedTab === 'brackets' && (
                        <div>
                            <h2>Brackets</h2>
                            {tournament.brackets ? (
                                <div className="brackets-container">
                                    {/* Render brackets here */}
                                    <p>Brackets are available for this tournament.</p>
                                </div>
                            ) : (
                                <p>Tournament brackets are not yet available.</p>
                            )}
                        </div>
                    )}
                    {selectedTab === 'media' && (
                        <div>
                            <h2>Media</h2>
                            {tournament.media && tournament.media.length > 0 ? (
                                <div className="media-gallery">
                                    {tournament.media.map((item, index) => (
                                        <div key={index} className="media-item">
                                            {/* Render media items here */}
                                            <img src={item.url || require('../../images/GIFS/222056.gif')} alt={item.description || 'Tournament media'} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No media content has been uploaded for this tournament.</p>
                            )}
                        </div>
                    )}
                    {selectedTab === 'stats' && (
                        <div>
                            <h2>Stats</h2>
                            {tournament.stats ? (
                                <div className="stats-container">
                                    {/* Render stats here */}
                                    <p>Tournament statistics are available.</p>
                                </div>
                            ) : (
                                <p>Tournament statistics are not yet available.</p>
                            )}
                        </div>
                    )}
                    {selectedTab === 'announcements' && (
                        <div>
                            <h2>Announcements</h2>
                            {tournament.announcements && tournament.announcements.length > 0 ? (
                                <div className="announcements-list">
                                    {tournament.announcements.map((announcement, index) => (
                                        <div key={index} className="announcement-item">
                                            <h3>{announcement.title || 'Announcement'}</h3>
                                            <p className="announcement-date">{announcement.date || 'N/A'}</p>
                                            <p>{announcement.content || 'No content'}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No announcements have been made for this tournament.</p>
                            )}
                        </div>
                    )}
                    {selectedTab === 'contact' && (
                        <div>
                            <h2>Contact</h2>
                            <p>{tournament.contact || 'No contact information available for this tournament.'}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    // Filter tournaments based on selected game
    const filteredTournaments = gameSET === 'N/A' 
        ? tournaments 
        : tournaments.filter((tournament) => tournament.game === gameSET);

            console.log("Current filter:", gameSET);
            console.log("Filtered tournaments:", filteredTournaments);

            return (
                <Element name="tournaments">
                    <div className="tournaments-page">
                        <h1 className="heading">TOURNAMENTS</h1>
                        
                        {/* Game Filter Options */}
        <div className="games-container">
            <div 
                className={`games-choice ${gameSET === 'VALORANT' ? 'active' : ''}`} 
                onClick={() => setGame(gameSET === 'VALORANT' ? 'N/A' : 'VALORANT')}
            >
                <img src={require('../../images/GIFS/valorant-logo.jpg')} alt="VALORANT" />
            </div>
            
            <div 
                className={`games-choice ${gameSET === 'LEAGUE OF LEGENDS' ? 'active' : ''}`} 
                onClick={() => setGame(gameSET === 'LEAGUE OF LEGENDS' ? 'N/A' : 'LEAGUE OF LEGENDS')}
            >
                <img src={require('../../images/GIFS/lol-logo.jpg')} alt="LEAGUE OF LEGENDS" />
            </div>
            
            <div 
                className={`games-choice ${gameSET === 'MOBILE LEGENDS' ? 'active' : ''}`} 
                onClick={() => setGame(gameSET === 'MOBILE LEGENDS' ? 'N/A' : 'MOBILE LEGENDS')}
            >
                <img src={require('../../images/GIFS/mlbb-logo.jpg')} alt="MOBILE LEGENDS" />
            </div>
        </div>


                {/* Tournament Grid */}
                <div className="tournament-grid">
                    {isLoading ? (
                        <h1 className="loading-text">LOADING. . .</h1>
                    ) : filteredTournaments.length === 0 ? (
                        <h1 className="no-tournaments">No tournaments found for this game.</h1>
                    ) : (
                        filteredTournaments.map(renderTournamentCard)
                    )}
                </div>

                {/* Load More Button - Only shown if there are more than 6 tournaments */}
                {filteredTournaments.length > 6 && (
                    <div className="load-more-container">
                        <button className="load-more-btn">Load more</button>
                    </div>
                )}

                {/* Selected Tournament Details */}
                {selectedTournamentId && renderTournamentDetails(selectedTournamentId)}
            </div>
        </Element>
    );
};

export default UDTournaments;