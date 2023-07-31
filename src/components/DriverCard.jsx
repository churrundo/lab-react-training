import React from "react";
import Rating from "./Rating";

function DriverCard(props){
    const { name, rating, img, car } = props

    const driverCardStyle = {
        display:'flex',
        padding: '10px',
        borderRadius: '15px',
        backgroundColor: 'blue',
        color: 'white',
        margin: '10px',
        width: '600px',
        justifyContent:'center',
    }

    const imageContainerStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
    };

    const imageStyle = {
        height: '100%',
        objectFit: 'cover',
    };

    return (
        <div style={driverCardStyle}>
            <div style={imageContainerStyle}>  {/* The new container div */}
                <img src={img} alt={name} style={imageStyle}/> 
            </div>
            <div>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard