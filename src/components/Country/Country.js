import React from "react";
import "./Country.css";

const Country = (props) => {
    const { flags, name, area, region, population } = props.country;
    // console.log(props.country);
    return (
        <div className="country bg-warning">
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt={flags.alt} />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>
                <small>Region: {region}</small>
            </p>
        </div>
    );
};

export default Country;
