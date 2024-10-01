const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Основной маршрут
app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
