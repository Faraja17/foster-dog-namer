import React from 'react';
import { useState } from 'react';
import Namer from './Namer';

import {femaleDog} from "../data/femaleDog";
import {neutralDog} from "../data/neutralDog";
import {maleDog} from "../data/maleDog";

export default function FullWidthGrid() {

    function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    };

    const [params, setParams] = useState({ 
        gender: "female" //add more params here as program develops
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
        const {gender} = params; //add more params here as program develops

        let name = "";

        if (gender === "female") {
            name = getRandom(femaleDog).femaleDog;        
        } else if (gender === "neutral") {
            name = getRandom(neutralDog).neutralDog; 
        } else {
            name = getRandom(maleDog).maleDog; 
        }

        setParams(prev => {
            return {
                ...prev,
                name: name
            };
        });
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