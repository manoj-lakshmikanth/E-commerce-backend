const dbConnect = require('../database/db');

const getAllProduct = async (req, resp) => {
  try {
    let db = await dbConnect();
    let collect = await db.collection('products');
    let allData = await collect.find().toArray();
    resp.status(200).json({ msg: 'fetched successfully', allData });
  } catch (error) {
    resp.status(400).json({ msg: 'error' });
  }
};

const getSingleProduct = async (req, resp) => {
  try {
    let db = await dbConnect();
    let collect = await db.collection('products');
    let allData = await collect.find({ name: req.params.name }).toArray();
    resp
      .status(200)
      .json({ message: 'single product data fetched successfully', allData });
  } catch (error) {
    resp.status(400).json({ message: 'error' });
  }
};

module.exports = {
  getAllProduct,
  getSingleProduct,
};

// const dbConnect = require('../database/db');

// const addProduct = async (req, res) => {
//   try {
//     let db = await dbConnect();
//     let table = await db.collection('products');
//     let insertData = await table.insertOne(req.body);
//     res.status(200).json({ msg: 'inserted', insertData });
//   } catch (err) {
//     res.status(200).json({ msg: 'err' });
//   }
// };

// const getAllProduct = async (req, res) => {
//   try {
//     let db = await dbConnect();
//     let table = await db.collection('products');
//     let allData = await table.find({}).toArray();
//     res.status(200).json({ msg: 'fetched Successfully', allData });
//   } catch (err) {
//     res.status(200).json({ msg: 'err' });
//   }
// };

// const getSingleProduct = async (req, res) => {
//   try {
//     let name = req.params.name;
//     let db = await dbConnect();
//     let table = await db.collection('products');
//     let allData = await table.find({ name: name }).toArray();
//     res
//       .status(200)
//       .json({ msg: 'fetched single Product Successfully', allData });
//   } catch (err) {
//     res.status(200).json({ msg: 'err' });
//   }
// };

// module.exports = {
//   addProduct,
//   getAllProduct,
//   getSingleProduct,
// };
