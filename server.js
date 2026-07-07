const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        proyecto: "Mente",
        mensaje: "Backend funcionando correctamente",
        version: "1.0.0"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("=================================");
    console.log("Servidor iniciado correctamente");
    console.log(`Puerto: ${PORT}`);
    console.log("Proyecto: Mente");
    console.log("=================================");
});
