function errorHandler(err, req, res, next) {
    console.error(err.stack); // Loga o erro para depuração
    res.status(err.status || 500).json({
        message: err.message || 'Ocorreu um erro interno no servidor.'
    });
}

module.exports = errorHandler;