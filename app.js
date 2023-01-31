const express = require('express');
const app = express();
const shoppingRoutes = require('./routes/shopping');

const ExpressError = require('./expressError');
app.use(express.json());
app.use('/shopping', shoppingRoutes);

/** 404 handler */

app.use(function (req, res, next) {
    return new ExpressError("Not Found", 404);
  });
  
  /** general error handler */
  
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
  
    return res.json({
      error: err.message,
    });
  });
  
//listen the app on port 3000
app.listen(3000, () => {
  console.log('server running on port 3000')
});
  //export the app variable
  module.exports = app;