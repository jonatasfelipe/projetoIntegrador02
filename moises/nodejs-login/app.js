const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Configurar o banco de dados SQLite
const db = new sqlite3.Database(path.join(__dirname, 'nodejs-login', 'users.db'));
const dbBlue = new sqlite3.Database('blue.db');
const dbGreen = new sqlite3.Database('green.db');

// Middleware para análise de dados JSON
app.use(express.json());

// Rota para o login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    // Realize a verificação no banco de dados
    db.get('SELECT * FROM users WHERE email = ? AND senha = ?', [email, senha], (err, row) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro interno.' });
        }

        if (!row) {
            return res.json({ success: false, message: 'Usuário ou senha não encontrados.' });
        }

        // Login bem-sucedido
        res.json({ success: true, message: 'Login bem-sucedido.' });
    });
});

// Rota para salvar mensagem no banco de dados blue
app.post('/saveToBlueDatabase', (req, res) => {
    const { message, userName, userEmail } = req.body;

    dbBlue.run(
        'INSERT INTO messages (message, userName, userEmail) VALUES (?, ?, ?)',
        [message, userName, userEmail],
        (err) => {
            if (err) {
                return res.status(500).json({ success: false, error: err.message });
            }
            return res.json({ success: true });
        }
    );
});

// Rota para salvar mensagem no banco de dados green
app.post('/saveToGreenDatabase', (req, res) => {
    const { message, userName, userEmail } = req.body;

    dbGreen.run(
        'INSERT INTO messages (message, userName, userEmail) VALUES (?, ?, ?)',
        [message, userName, userEmail],
        (err) => {
            if (err) {
                return res.status(500).json({ success: false, error: err.message });
            }
            return res.json({ success: true });
        }
    );
});

// Rota para apagar mensagem em qualquer banco de dados 
app.post('/removeMessage/:color/:messageId', (req, res) => {
    const color = req.params.color;
    const messageId = req.params.messageId;

    // Determine qual banco de dados (blue ou green) precisa ser consultado
    const dbToUse = color === 'blue' ? dbBlue : (color === 'green' ? dbGreen : null);

    if (!dbToUse) {
        return res.status(400).json({ success: false, message: 'Cor inválida.' });
    }

    // Realize a operação de remoção no banco de dados apropriado
    dbToUse.run('DELETE FROM messages WHERE id = ?', messageId, (err) => {
        if (err) {
            return res.status(500).json({ success: false, error: err.message });
        }
        return res.json({ success: true });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});