import React, { useState } from 'react';
import axios from 'axios';

const DeactivateSim = () => {
    const [simNumber, setSimNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/deactivate', { sim_number: simNumber });
            alert('SIM deactivated: ' + JSON.stringify(response.data));
        } catch (error) {
            alert('Error deactivating SIM: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Deactivate SIM Card</h2>
            <input
                type="text"
                placeholder="Enter SIM Number"
                value={simNumber}
                onChange={(e) => setSimNumber(e.target.value)}
                required
            />
            <button type="submit">Deactivate</button>
        </form>
    );
};

export default DeactivateSim;
