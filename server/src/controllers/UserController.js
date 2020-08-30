const bcrypt = require('bcryptjs');
const uuid = require('uuidv4');
const jwt = require('jsonwebtoken');

const connection = require('../database/index');
const authConfig = require('../config/auth');

module.exports = {
  async login(request, response) {
    const { name, password } = request.body;

    const user = await connection('users').where('name', name).first();

    if (!user) {
      return response.status(400).json({ error: 'User does not exists.' });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return response.status(401).json({ error: 'User not allowed.' })
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = jwt.sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    delete user.password;

    return response.status(200).json({ user, token });

  },

  async store(request, response) {
    const { name, password } = request.body;

    const checkUserExists = await connection('users').where('name', name).first();

    if (checkUserExists) {
      return response.status(400).json({ error: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const user = {
      id: uuid.uuid(),
      name,
      password: hashedPassword
    }

    await connection('users').insert(user);

    delete user.password;

    return response.status(200).json(user);
  }
}