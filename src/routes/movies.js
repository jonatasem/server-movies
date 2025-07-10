const express = require('express');
const router = express.Router();
const movies = require('../data/movies');

// Rota para obter a lista de filmes
router.get('/', (req, res) => {
    // Retorna a lista de filmes em formato JSON
    res.json(movies); 
});

// Rota para obter detalhes de um filme pelo ID
router.get('/:id', (req, res) => {
    const movieId = parseInt(req.params.id, 10);

    // Adição: Validação se o ID é um número válido
    if (isNaN(movieId)) {
        return res.status(400).json({ message: 'ID de filme inválido. Por favor, forneça um número.' });
    }

    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ message: 'Filme não encontrado' });
    }
});

module.exports = router;