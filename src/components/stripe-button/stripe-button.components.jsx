import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey ='pk_test_51IGHkrLCVvvTxIhXX0Iyuqmm7vFVod5Td4DERcQHgOIVeKY3iMSoDAdVTUzIXXZDguSIvW4RoBKy65HCRp2F4TRv009pw0i6Sy';
    
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful ✅');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Storex'
            billingAddress
            shippingAddress
            image='https://i.ibb.co/nPTg8W8/payment-icon-2.png'
            description={`Your total is ${price}`}
            panelLabel='Pay Now'
            token = {onToken}
            stripeKey={publishKey}
        />
    )
}

export default StripeCheckoutButton;