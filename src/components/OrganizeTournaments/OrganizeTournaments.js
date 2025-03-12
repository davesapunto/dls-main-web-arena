import "./OrganizeTournaments.css"
import React, {useRef, useEffect} from "react";
import { Element } from "react-scroll";
import { motion, useInView, useAnimation } from "motion/react";
import { navigate, NavLink } from "react-router"

const OrganizeTournaments = () => {

    const containerref = useRef(null);
    const isinview = useInView(containerref, {once: true});
    const maincontrol = useAnimation();

    useEffect(() => {
        if (isinview) {
            maincontrol.start('visible');
        }
    }, [isinview]);

    return(
        <>
        <Element name="org_tourna">
            <div className="contain">
                <div className = "org-text">
                        JOIN, CREATE, AND ORGANIZE your tournaments<br /> with ease. Get started TODAY!
                        <NavLink 
                        to='../CreateTournament'
                        className = "org-contain"
                        >
                            CREATE MY TOURNAMENT
                        </NavLink>
                </div>
                
                <div className="contain-image">
                    <h1>CREATE AND MANAGE TOURNAMENTS, HASSLE FREE!</h1>
                    <div className="img-contain"> 
                        <motion.div 
                        ref={containerref}
                        animate={maincontrol}
                        initial='hidden'
                        variants=
                        {
                            {
                                hidden: {opacity: 0, x: -100},
                                visible: {opacity: 1, x: 0}
                            }
                        }
                        transition=
                        {
                            {
                                delay: .3, duration: .8
                            }
                        }
                        className="img-1">
                            <img src={require('../images/tourna/481687516_930928352222561_2069226538248636043_n (1).jpg')} alt="NEWS" className="image-1" />
                            <h1>
                                Join tournaments <br/> easily
                            </h1>
                            <p>
                                Find and compete in tournaments with players around the Philippines.
                            </p>
                        </motion.div>
                        <motion.div 
                        ref={containerref}
                        animate={maincontrol}
                        initial='hidden'
                        variants=
                        {
                            {
                                hidden: {opacity: 0, y: 100},
                                visible: {opacity: 1, y: 0}
                            }
                        }
                        transition=
                        {
                            {
                                delay: .3, duration: .8
                            }
                        }
                        className="img-2">
                         <img src={require('../images/tourna/481687516_930928352222561_2069226538248636043_n (1).jpg')} alt="NEWS" className="image-1" />
                            <h1>
                                Create your own tournament
                            </h1>
                            <p>
                                Set up tournaments for any game with powerful, easy-to-use tools.
                            </p>
                        </motion.div>
                        <motion.div 
                        ref={containerref}
                        animate={maincontrol}
                        initial='hidden'
                        variants=
                        {
                            {
                                hidden: {opacity: 0, x: 100},
                                visible: {opacity: 1, x: 0}
                            }
                        }
                        transition=
                        {
                            {
                                delay: .3, duration: .8
                            }
                        }
                        className="img-3">
                            <img src={require('../images/tourna/481687516_930928352222561_2069226538248636043_n (1).jpg')} alt="NEWS" className="image-1" />
                            <h1>
                                Organize like a pro
                            </h1>
                            <p>
                                Manage brackets, track scores, and streamline matches effortlessly.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="contain-faq">
                <h1>Frequently Asked Question</h1>
                <div className ="contain-text">
                    <div className ="contain-text-1">
                        Can I organize a tournament? <br /> <br /> 
                        Anyone can create a tournament on <br />
                        Battlefy for any game we <br />
                        support (over 40,000!). <br />
                        Thousands of independent <br />
                        tournament organizers use the <br />
                        Battlefy platform to power their <br />
                        tournaments every month. <br />
                        Whether you're hosting a multi-<br />
                        week league with sophisticated <br />
                        brackets and match play or a <br />
                         one-off single elimination event <br />
                        for your friends, 
                        we have the <br />
                        tools you need.
                    </div>
                    <div className = "contain-text-2">
                        Can I organize a tournament? <br /> <br /> 
                        Anyone can create a tournament on <br />
                        Battlefy for any game we <br />
                        support (over 40,000!). <br />
                        Thousands of independent <br />
                        tournament organizers use the <br />
                        Battlefy platform to power their <br />
                        tournaments every month. <br />
                        Whether you're hosting a multi-<br />
                        week league with sophisticated <br />
                        brackets and match play or a <br />
                         one-off single elimination event <br />
                        for your friends, 
                        we have the <br />
                        tools you need.
                    </div>
                </div>
            </div>
        </Element>
        </>
    )
}


export default OrganizeTournaments;