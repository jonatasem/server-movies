const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const moviesRouter = require('./routes/movies');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Usar a rota de filmes
app.use('/api/movies', moviesRouter);

//tratamento de erro
app.use(errorHandler);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
