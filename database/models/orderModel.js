import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },
        orderDetails: [
            {
                food: [{
                    details: {
                        type: mongoose.Types.ObjectId,
                        ref: "Food"
                    },
                    quatity: {
                        type: Number,
                        required: true
                    }
                }],
                paymode: {
                    type: String,
                    required: true
                },
                status: {
                    type: String,
                    default: "Not_Placed"
                },
                paymentDetails: {
                    itemTotal: { type: Number, required: true },
                    promo: { type: Number, required: true },
                    tax: { type: Number, required: true },
                    razorpay_payment_id: { type: String, required: true }
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

export const OrderModel = mongoose.model("Order", OrderSchema)