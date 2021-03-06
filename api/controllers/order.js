const Order = require('../../models/Order');
const Product = require('../../models/Product');

exports.createOrder = async (req, res, next) => {
  try {
    const { products: orderProducts } = req.body;
    const docs = await Promise.all(
      orderProducts.map(
        ({ product, color, quantity }) => Product.find({
          _id: product._id,
          'colors.color': color,
          'colors.quantity': { $gte: quantity },
        }),
      ),
    );

    if (docs.some(doc => !doc.length)) {
      next();
      return;
    }

    let totalPrice = 0;

    await Promise.all(
      orderProducts.map(
        ({ product, color, quantity }) => Product.findOneAndUpdate(
          { _id: product._id, 'colors.color': color },
          { $inc: { 'colors.$.quantity': -quantity } },
          { new: true },
        ).then(({ discount, price }) => {
          totalPrice += (price - price * (discount / 100)) * quantity;
        }),
      ),
    );

    const order = await new Order({
      items: orderProducts,
      totalPrice: totalPrice.toFixed(2),
    }).save();

    res.send(order);
  } catch (error) {
    next();
  }
};
