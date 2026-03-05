require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/salut', (req, res) => {
    res.json({
        message: "Hello World",
        status: "Succès"
    });
});

app.post('/api/data', (req, res) => {
    const dataRecue = req.body;
    
    res.status(201).json({
        message: "Données reçues avec succès !",
        votreDonnee: dataRecue
    });
});

app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});