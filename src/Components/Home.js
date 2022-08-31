import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Signup from './Signup';

const Home = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

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
        <div className='api' id='start'>
            <p>
                {!data ? "Loading..." : data}
            </p>
        </div>
        </>
        <About /> {/*This is the about component*/}
        <Signup /> {/*This is the signup component*/}
        <Footer /> {/*This is the footer component*/}
    </div>

)};

export default Home;