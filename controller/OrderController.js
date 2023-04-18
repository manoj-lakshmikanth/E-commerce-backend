const dbConnect = require('../database/db');

const makeOrder = async (req, resp) => {
  try {
    let db = await dbConnect();
    let table = await db.collection('orders');
    let insertData = await table.insertOne(req.body);
    resp.status(200).json({ message: 'order details taken', data: insertData });
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
};

module.exports = { makeOrder };

// const dbConnect = require("../database/db");

// const makeOrder = async (req, res) => {
//   try {
//     let db = await dbConnect();
//     let table = await db.collection("orders");
//     let insertData = await table.insertOne(req.body);
//     res.status(200).json({ msg: "inserted", insertData });
//   } catch (err) {
//     res.status(200).json({ msg: "err" });
//   }
// };

// module.exports = {
//   makeOrder,
// };
