require('dotenv').config();
const jwt = require('jsonwebtoken');
const { connection } = require('../database/db');

const protect = async (req, resp, next) => {
  token = req.headers.authorization;

  if (!token) {
    resp.json({ message: 'No token has been sent' });
    return;
  }

  try {
    token = token.split(' ')[1];
    const decoded = await jwt.verify(token, process.env.Seceret_key);
    next();
  } catch (error) {
    resp.json({ message: 'Token not authorized' });
  }
};

module.exports = { protect };

// require('dotenv').config();
// const jwt = require('jsonwebtoken');
// const connection = require('../database/db');

// const protect = async (req, res, next) => {
//   let tocken = req.headers.authorization;

//   if (!tocken) {
//     res.json({ message: 'No Tocken Has been Sent' });
//     return;
//   }
//   try {
//     tocken = tocken.split(' ')[1];
//     const decoded = await jwt.verify(tocken, process.env.Seceret_key);
//     let db = await connection();
//     let collection = await db.collection('users');
//     req.user = await collection.findOne({ email: decoded.email });
//     next();
//   } catch (error) {
//     res.json({ message: 'tocken Not Authorized' });
//   }
// };

// module.exports = { protect };
