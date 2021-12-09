const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const UserService = require('../services/UserService');

class UserController {
	static async createUser(req, res) {
		try {
			const { username, password } = req.body;
			const isUserExist = await User.findOne({ username });

			if (isUserExist) {
				res.status(400).json({ message: 'User already exists' });
			}

			await UserService.createUser(username, password);

			return res.json({ message: 'User was created' });
		} catch (err) {
			console.error(err.message);

			res.send({ message: 'Server Error' });
		}
	}

	static async loginUser(req, res) {
		try {
			const { username, password } = req.body;
			const user = await User.findOne({ username });

			if (!user) {
				res.status(404).json({ message: `User not found` });
			}

			const isPasswordValid = bcrypt.compareSync(password, user.password);

			if (!isPasswordValid) {
				res.status(400).json({ message: `Invalid password` });
			}

			const token = jwt.sign({ id: user.id }, config.get('secretKey'), {
				expiresIn: '30d',
			});

			return res.json({
				token,
				id: user.id,
				username: user.username,
			});
		} catch (err) {
			console.error(err.message);

			res.send({ message: 'Server Error' });
		}
	}

	static async authorizeUser(req, res) {
		try {
			const userData = await UserService.authorizeUser(req.user.id);

			return res.json(userData);
		} catch (err) {
			console.error(err.message);

			res.send({ message: 'Server Error' });
		}
	}
}

module.exports = UserController;
