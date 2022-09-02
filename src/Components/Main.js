import React from 'react';
import { useState } from 'react';
import Namer from './Namer';

import {femaleDog} from "../data/femaleDog";
import {maleDog} from "../data/maleDog";

export default function FullWidthGrid() {

    function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    };

    const [params, setParams] = useState({
        gender: "female",
        temperament: "neutral"
    });

    const handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
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

        if (gender === "female") {
            temperament === "neutral"
                ? name = getRandom(femaleDog).femaleDog
                : name = getRandom(maleDog).maleDog; 
        } else {
            name = getRandom(maleDog).maleDog; 
        };

        setParams(prev => {
            return {
                ...prev,
                name: name
            };
        });
    console.log({name});
    console.info({params});
    };

    return (
        <React.Fragment>
            <Namer 
                generateName={generateName}
                handleChange={handleChange}
                params={params} />
        </React.Fragment>
    );
}