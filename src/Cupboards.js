import React from 'react'
import "./styles.css";

const Cupboards = ({cupboards}) => {
    return (
        <div>
            {cupboards.map((cupboard, i) => (
                <h3>{cupboard.title}</h3>
            ))}
        </div>
    )
};

export default Cupboards;