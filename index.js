require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 7000;
const app = express();
const cors = require('cors');
const ProductRouter = require('./routes/ProductRouter');
const UserRouter = require('./routes/UserRoutes');
const OrderRouter = require('./routes/OrderRoutes');
app.use(cors());
app.use(express.json());
const connectToDb = require('./database/db');
connectToDb();
app.use('/orders', OrderRouter);
app.use('/product', ProductRouter);
app.use('/user', UserRouter);

app.listen(port, () => {
  console.log('Server is live');
});

// require('dotenv').config();
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 7000;
// const conncetToDb = require('./database/db');
// conncetToDb();
// const UserRouter = require('./routes/UserRoutes');
// const ProductRouter = require('./routes/ProductRouter');
// const orderRoutes = require('./routes/OrderRoutes');
// app.use(express.json());
// const cors = require('cors');
// app.use(cors());

// app.use('/user', UserRouter);
// app.use('/product', ProductRouter);
// app.use('/orders', orderRoutes);

// app.listen(port, () => {
//   console.log(`port started at ${port}`);
// });
