import React, { useState } from 'react';
import axios from 'axios';

const ActivateSim = () => {
    const [simNumber, setSimNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/activate', { sim_number: simNumber });
            alert('SIM activated: ' + JSON.stringify(response.data));
        } catch (error) {
            alert('Error activating SIM: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Activate SIM Card</h2>
            <input
                type="text"
                placeholder="Enter SIM Number"
                value={simNumber}
                onChange={(e) => setSimNumber(e.target.value)}
                required
            />
            <button type="submit">Activate</button>
        </form>
    );
};

export default ActivateSim;
