import mongoose from 'moongose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }, 
  quantity: {
    type: Number,
    require: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    staus: {
      type: String,
      enum: ['Pending', 'Cancelled', 'Delivered'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
