import React from 'react';
import './style.css'
const calculate = require('./engine')

function Math(props) {
    const MathStatement = props.children;
    const result = calculate(MathStatement);

return <span className="Math">{result}</span>

}

export default Math;