const authMiddleware = (req, res, next) => {

    console.log("Middleware ejecutado");

    next();

};

module.exports = authMiddleware;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        proyecto: "Mente",
        estado: "Backend funcionando correctamente 🚀"
    });
});

// Ruta para probar la base de datos
app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({
            mensaje: "Conexión exitosa con Supabase",
            fechaServidor: result.rows[0].now
        });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al conectar con la base de datos",
            error: error.message
        });
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("===================================");
    console.log("🚀 Servidor Mente iniciado");
    console.log(`📡 Puerto: ${PORT}`);
    console.log("===================================");
});
