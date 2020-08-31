import React from "react";
import "./seasonDisplay.css";

const seasonConfig = {
    summer: {
        text: 'Lets hit the bitch',
        iconName: 'sun'
    },
    winter: {
        text: 'it is chilly',
        iconName: 'snowflake'
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? "winter" : "summer";
    }
}
const SeasonDisplay = ({lat}) => {
    const season = getSeason(lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} massive icon`}></i>
            <h1 className="message">{text}</h1>
            <i className={` icon-right ${iconName} massive icon`}></i>

        </div>
    )
}
export default SeasonDisplay