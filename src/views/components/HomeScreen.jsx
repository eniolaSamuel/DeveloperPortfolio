import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "../../styles/components/HomeScreen.css"
import Eniola from "../../assets/svg/Eniola.svg"
import {useEffect, useState} from "react";


const HomeScreen = () => {

    const [text, setText] = useState('Health');
    useEffect(() => {
        const textLoad = () => {
            setTimeout(() => {
                setText('A WEB DEVELOPER');
            }, 0);
            setTimeout(() => {
                setText('A REACT.JS DEVELOPER');
            }, 5000);
            setTimeout(() => {
                setText('A JAVA DEVELOPER');
            }, 10000);
        };
        textLoad();
        const intervalId = setInterval(textLoad, 12000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <>
            <div className="Home-main-frame">
                <div className="text-centre-home">
                    <h1>
                        HI, I'M{' '}
                        <br/>
                        <span className="name-box"> ENIOLA SAMUEL</span> <br/>
                        <span className="flunctuating-text">{text}</span>
                    </h1>
                    <p>

                        {/*Welcome to my portfolio!*/}
                        {/*I specialize in both React.js frontend and Java backend development.*/}
                        {/*With expertise in crafting seamless user experiences and building robust server-side solutions,*/}
                        {/*I aim to deliver high-quality software solutions that meet user needs and business objectives.*/}
                        {/*Explore my work to see examples of my skills in action.*/}

                        {/*Let's build something amazing together!*/}

                    </p>
                </div>

                <div className="Eniola-frame">
                    <img
                        src={Eniola}
                        alt="eniola"
                    />
                </div>
            </div>
        </>
    );
};

export default HomeScreen;