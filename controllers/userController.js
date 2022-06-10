// des register new user
// route POST /api/users
// access public
const registerUser = (req, res) => {
	res.send({ message: "Register user" });
};
// des post user
// route POST/api/login
// access public
const loginUser = (req, res) => {
	res.send({ message: "login user" });
};
// des get user data
// route GET /api/users/me
// access public
const getMe = (req, res) => {
	res.send({ message: "user data" });
};

module.exports = {
	registerUser,
	loginUser,
	getMe,
};
