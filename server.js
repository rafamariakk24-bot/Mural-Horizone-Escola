const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());
app.use(express.static(__dirname));

// Rota da API para buscar todos os avisos do mural.db
app.get('/api/avisos', (req, res) => {
    db.all('SELECT * FROM avisos ORDER BY id DESC', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

