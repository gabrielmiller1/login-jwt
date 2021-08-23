const userController = {

    register: function (req, res) {
        res.send('Register');
    },

    login: function (req, res) {
        res.send('Login')
    }
}

module.exports = userController;