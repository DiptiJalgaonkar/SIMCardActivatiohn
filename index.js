const mongoose = require('mongoose');
const express = require('express');
const app = express();


app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sim_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

//Mongoose schema
const simCardSchema = new mongoose.Schema({
    sim_number: { type: String, unique: true },
    phone_number: { type: String },
    status: { type: String, enum: ['active', 'inactive'],},
    activation_date: { type: Date }
});


const SimCard = mongoose.model('SimCard', simCardSchema);

// Activate SIM Card
app.post('/activate', async (req, res) => {
    const { sim_number } = req.body;
    
    try {
        const simCard = await SimCard.findOneAndUpdate(
            { sim_number },
            { status: 'active', activation_date: new Date() },
            { new: true }
        );

        if (!simCard) {
            return res.status(400).json({ message: 'SIM card not found' });
        }

        res.status(200).json(simCard);
    } catch (error) {
        res.status(500).json({ message: 'Error activating SIM card', error });
    }
});

// Deactivate SIM Card
app.post('/deactivate', async (req, res) => {
    const { sim_number } = req.body;
    
    try {
        const simCard = await SimCard.findOneAndUpdate(
            { sim_number },
            { status: 'inactive' },
            { new: true }
        );

        if (!simCard) {
            return res.status(404).json({ message: 'SIM card not found' });
        }

        res.status(200).json(simCard);
    } catch (error) {
        res.status(500).json({ message: 'Error deactivating SIM card', error });
    }
});

// Get SIM Details
app.get('/sim-details/:simNumber', async (req, res) => {
    const { simNumber } = req.params;

    try {
        const simCard = await SimCard.findOne({ sim_number: simNumber });

        if (!simCard) {
            return res.status(404).json({ message: 'SIM card not found' });
        }

        res.status(200).json(simCard);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving SIM card details', error });
    }
});

// Start the server
app.listen(9002, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
    } else {
        console.log('Server is running on http://localhost:9002');
    }
});
