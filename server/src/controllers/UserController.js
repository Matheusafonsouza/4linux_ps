const uuid = require('uuidv4');
const connection = require('../database/index');
const bcrypt = require('bcryptjs');

module.exports = {
  async store(request, response) {
    const { name, password } = request.body;

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