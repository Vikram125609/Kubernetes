const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running'
    })
});

app.post('/api/add', (req, res) => {
    const { x, y } = req.params;
    const result = x + y;
    res.status(200).json({
        success: true,
        result: result
    })
});

app.post('/api/sub', (req, res) => {
    const { x, y } = req.params;
    const result = x - y;
    res.status(200).json({
        success: true,
        result: result
    })
});

app.post('/api/mul', (req, res) => {
    const { x, y } = req.params;
    const result = x * y;
    res.status(200).json({
        success: true,
        result: result
    })
});

app.post('/api/div', (req, res) => {
    const { x, y } = req.params;
    if (y === 0) {
        return res.status(400).json({
            success: false,
            message: 'Cannot divide by zero'
        })
    }
    const result = x / y;
    res.status(200).json({
        success: true,
        result: result
    })
});

app.get('/api/sum-till-n-for-loop', (req, res) => {
    const { n } = req.params;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    res.status(200).json({
        success: true,
        result: sum
    })
});

app.get('/api/sum-till-n-square-for-loop', (req, res) => {
    const { n } = req.params;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    res.status(200).json({
        success: true,
        result: sum
    })
});

module.exports = app;