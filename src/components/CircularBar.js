import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularBar = (props) => {
    return (
        <div className="container py-5">
            <CircularProgressbar value={props.value} text={`${props.value}%`} />
        </div>
    )
}

export default CircularBar