// const { User } = require('../models')
// const middleware = require('../middleware')

// const Login = async (req, res) => {
//   try {
//     const user = await User.findOne({
//       where: { username: req.body.username },
//       raw: true
//     })
//     if (
//       user &&
//       (await middleware.comparePassword(user.passwordDigest, req.body.password))
//     ) {
//       let payload = {
//         id: user.id,
//         username: user.username
//       }
//       let token = middleware.createToken(payload)
//       return res.send({ user: payload, token })
//     }
//     res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
//   } catch (error) {
//     throw error
//   }
// }

// const Register = async (req, res) => {
//     try {
//       const { username, password } = req.body
//       let passwordDigest = await middleware.hashPassword(password)
//       const user = await User.create({ username, passwordDigest })
//       res.send(user)
//     } catch (error) {
//       throw error
//     }
//   }

// const CheckSession = async (req, res) => {
//   const { payload } = res.locals
//   res.send(payload)
// }

// module.exports = {
//   Login,
//   Register,
//   CheckSession
// }

const { User } = require('../models');
const middleware = require('../middleware');

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username },
      raw: true,
    });
    if (user && (await middleware.comparePassword(user.passwordDigest, password))) {
      const payload = {
        id: user.id,
        username: user.username,
      };
      const token = middleware.createToken(payload);
      return res.send({ user: payload, token });
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' });
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: 'Failed to login' });
  }
};

const Register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const passwordDigest = await middleware.hashPassword(password);
    const user = await User.create({ username, passwordDigest });
    res.send(user);
  } catch (error) {
    res.status(500).send({ status: 'Error', msg: 'Failed to register user' });
  }
};

const CheckSession = async (req, res) => {
  const { payload } = res.locals;
  res.send(payload);
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};


module.exports = {
  Login,
  Register,
  CheckSession,
  getAllUsers
};