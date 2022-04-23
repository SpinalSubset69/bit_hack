import React, { useEffect, useState } from 'react';
import useLevelSelector from './../hooks/useLevelSelector';
import LevelRowComponent from './levelRow';

export default function LevelComponent() {
    const { level } = useLevelSelector();
    const [rows, setRows] = useState([]);
    const [expectedResult, setExpectedResult] = useState('');
    const [operation, setOperation] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        init();
    }, []);

    //Initialize components
    const init = () => {
        //BUILD BYTES CARDS
        if (typeof level != 'undefined') {
            setRows([[...level.fixedBytes].map(x => x), [...level.playerOptions].map(x => x)]);
            setOperation(level.operation);
            setExpectedResult(level.expectedResult);
            console.log(rows);
            console.log(operation);
            console.log(expectedResult);
        }
    }

    return (
        <div>
            <h1>HOLAS</h1>
        </div>
    )
}