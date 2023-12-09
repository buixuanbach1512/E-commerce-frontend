import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useEffect } from 'react';
import { createOrder, emptyCart, resetState } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// This value is from the props in the UI
const style = { layout: 'vertical' };

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ currency, showSpinner, amount, payload }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [{ isPending, options }] = usePayPalScriptReducer();
    // useEffect(() => {
    //     dispatch({
    //         type: 'resetOptions',
    //         value: {
    //             ...options,
    //             currency: currency,
    //         },
    //     });
    // }, [currency, showSpinner]);

    const { shippingInfo, orderItems, totalPrice, totalPriceAfterDiscount } = payload;

    const handleCreateOrder = () => {
        dispatch(
            createOrder({
                shippingInfo,
                orderItems,
                totalPrice,
                totalPriceAfterDiscount,
                payment: 'Đã thanh toán qua PayPal',
            }),
        );
        setTimeout(() => {
            dispatch(emptyCart());
            dispatch(resetState());
            navigate('/order');
        }, 1000);
    };

    return (
        <>
            {showSpinner && isPending && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style, currency, amount]}
                fundingSource={undefined}
                createOrder={(data, actions) =>
                    actions.order
                        .create({
                            purchase_units: [{ amount: { currency_code: currency, value: amount } }],
                        })
                        .then((orderId) => orderId)
                }
                onApprove={(data, actions) =>
                    actions.order.capture().then(async (response) => {
                        if (response.status === 'COMPLETED') {
                            handleCreateOrder();
                        }
                    })
                }
            />
        </>
    );
};

export default function Paypal({ amount, payload }) {
    return (
        <div style={{ width: '100%', height: 'auto' }}>
            <PayPalScriptProvider options={{ clientId: 'test', components: 'buttons', currency: 'USD' }}>
                <ButtonWrapper payload={payload} currency={'USD'} amount={amount} showSpinner={false} />
            </PayPalScriptProvider>
        </div>
    );
}
