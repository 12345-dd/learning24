import React, { useState } from 'react';

export const FormTask = () => {
    const data = [
        {
            cName: "India",
            states: ["Gujarat", "Maharashtra", "Karnataka"]
        },
        {
            cName: "USA",
            states: ["Alabama", "Colorado", "Alaska"]
        }
    ];

    const [selectCountry, setSelectCountry] = useState("India");
    const [selectStates, setSelectStates] = useState(data.find(country => country.cName === selectCountry)?.states);

    const handleChange = (e) => {
        const countryName = e.target.value;
        setSelectCountry(countryName);
        const country = data.find(country => country.cName === countryName);
        setSelectStates(country ? country.states[0] : []);
    };

    const handleState = (e) => {
        setSelectStates(e.target.value);
    }

    return (
        <div>
            <h1 style={{ color: "green" }}>Form Task-1</h1>
            <div>
                <div>
                    <label>Select Country</label>
                    <br />
                    <select onChange={handleChange} value={selectCountry}>
                        {data.map((country) => (
                            <option value={country.cName}>
                                {country.cName}
                            </option>
                        ))}
                    </select>
                </div><br />
                <div>
                    <label>Select States</label>
                    <br />
                    <select onChange={handleState} value={selectStates}>
                        {data.find(country => country.cName === selectCountry)?.states.map((state) => (
                            <option value={state}>{state}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};


