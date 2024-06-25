const express = require('express');
const cron = require('node-cron');
const axios = require('axios');
const app = express();
// Define your route
app.get('/hit-link', async (req, res) => {
    // Hit your link here
    try {
        const response = await axios.get('https://zaverchand-meghani-api-zzvq.onrender.com/');
        console.log('Link hit successful:', response.data);
        res.send('Link hit successful');
    } catch (error) {
        console.error('Error hitting link:', error);
        res.status(500).send('Error hitting link meghani');
    }
});
// Schedule the cron job
// Schedule the cron job
cron.schedule('* * * * *', async () => {
    try {
        console.log('Cron job running...');     
        await axios.get('https://corsapi-0xbh.onrender.com/hit-link'); // Change the URL if your server runs on a different port
    } catch (error) {
        console.error('Error in cron job:', error);
    }
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});