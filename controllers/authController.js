
const register = async (req, res) => {

    res.status(200).json({
        success: true,
        message: "Ruta de registro funcionando correctamente."
    });

};

const login = async (req, res) => {

    res.status(200).json({
        success: true,
        message: "Ruta de login funcionando correctamente."
    });

};

module.exports = {
    register,
    login
};
