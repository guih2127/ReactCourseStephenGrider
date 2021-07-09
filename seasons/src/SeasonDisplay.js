import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Bruh, it is chilly...',
        iconName: 'snowflake'
    }
};

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.latitude, new Date().getMonth());
    // criamos um objeto de config no início do componente e, aqui, através
    // da string retornada com getSeason(), conseguimos obter os dados do
    // objeto que queremos.

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${seasonConfig[season].iconName} icon`}></i>
            <h1>{seasonConfig[season].text}</h1>
            <i className={`icon-right massive ${seasonConfig[season].iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;