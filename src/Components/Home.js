import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Signup from './Signup';
import { Fragment } from 'react';
import { useState } from 'react';
import Namer from './Namer';

import {femaleDog} from "../data/femaleDog";
import {maleDog} from "../data/maleDog";


const Home = () => {
    // const [data, setData] = React.useState(null);

    // React.useEffect(() => {
    //     fetch("/api")
    //         .then((res) => res.json())
    //         .then((data) => setData(data.message));
    // }, []);

    function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    };

    const [params, setParams] = useState({
        gender: "Female",
        temperament: "Neutral"
    });

    const handleChange = e => {
        let {name, value} = e.target;
        setParams({...params, [name]: value});
        // setParams (prev => {
        //     return {
        //         ...prev,
        //         [name]: value
        //     };
        // });

    };

    const generateName = () => {
        const {gender, temperament} = params;

        let name = "";

        if (gender === "Female") {
            temperament === "Neutral"
                ? name = getRandom(femaleDog).femaleDog
                : name = getRandom(maleDog).maleDog; 
            console.log(name)
        } 

        setParams({...params, name : {name}})
    console.log({name});
    console.info({params});
    }

    return (

    <div className='App'>
        <Navbar /> {/*This is the navbar component*/}
        <>
        {/* Welcome */}
        <div className='header' id="home">
            <h1>Who am I?</h1>
            <p className="app-name">Dog Namer App:</p>
            <p>Generating great ideas for foster pups.</p>
            <a href="#signup" className="call-to-action" >Subscribe</a>
            <a href="#start" className="call-to-action2" >Try It Now</a>
               
        </div>

        <Fragment>
            <Namer 
                generateName={generateName}
                handleChange={handleChange}
                params={params}/>
        </Fragment>
        

        {/* <div className='api' id='start'>
            
            <p>
                {!data ? "Loading..." : data}
            </p>
        </div> */}
        </>
        <About /> {/*This is the about component*/}
        <Signup /> {/*This is the signup component*/}
        <Footer /> {/*This is the footer component*/}
    </div>
    
)};

export default Home;