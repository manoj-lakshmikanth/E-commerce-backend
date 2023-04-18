const dbConnect = require('../database/db');
const generateToken = require('../tocken/generateToken');

const userSignUp = async (req, resp) => {
  try {
    let db = await dbConnect();
    let table = await db.collection('users');
    let findData = await table.find({ email: req.body.email }).toArray();
    if (findData.length) {
      resp.status(200).json({ message: 'User already Exist' });
      // console.log(req.body);
    } else {
      let insertData = await table.insertOne(req.body);
      resp.status(200).json({ message: 'inserted', data: insertData });
    }
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
};

const loginUser = async (req, resp) => {
  try {
    let db = await dbConnect();
    let table = await db.collection('users');
    findData = await table.find({ email: req.body.email }).toArray();
    if (findData.length) {
      if (findData[0].password === req.body.password) {
        let token = await generateToken(findData[0]._id, findData[0].email);
        console.log(token);
        resp.status(200).json({ message: 'Login Successful', token, findData });
      } else {
        resp.status(200).json({ message: 'Incorrect password' });
      }
    } else {
      resp.status(200).json({ message: 'Incorrect email' });
    }
  } catch (error) {
    resp.status(400).json({ message: 'error' }, error);
  }
};

module.exports = { userSignUp, loginUser };

// const { generateToken } = require('../tocken/generateToken');
// const dbConnect = require('../database/db');

// const userSignUp = async (req, res) => {
//   try {
//     let db = await dbConnect();
//     let table = await db.collection('users');
//     let findData = await table.find({ email: req.body.email }).toArray();
//     if (findData.length) {
//       res.status(200).json({ msg: 'user already exist' });
//     } else {
//       let insertData = await table.insertOne(req.body);
//       res.status(200).json({ msg: 'inserted', insertData });
//     }
//   } catch (err) {
//     res.status(200).json({ msg: 'err' });
//   }
// };

// const loginUser = async (req, res) => {
//   try {
//     let db = await dbConnect();
//     let table = await db.collection('users');
//     let findData = await table.find({ email: req.body.email }).toArray();
//     if (findData.length) {
//       if (findData[0].password == req.body.password) {
//         let token = await generateToken(findData[0].name, findData[0].email);
//         res.status(200).json({ msg: 'login successfull', token, findData });
//       } else {
//         res.status(200).json({ msg: 'Incorrect password' });
//       }
//     } else {
//       res.status(200).json({ msg: 'user Not Found please sign up' });
//     }
//   } catch (err) {
//     res.status(400).json({ msg: 'error' });
//   }
// };

// module.exports = {
//   userSignUp,
//   loginUser,
// };
