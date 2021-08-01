import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51IGHkrLCVvvTxIhXu5WS755TUeccdmVJqKCHoxlBo3cI1v3jlspcbisTmBOqVhmpzHPvHkg8cxkvBYesE9kBrFOC00rBhNIdbe';

	const onToken = (token) => {
		axios({
			url: 'http://localhost:5000/payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token: token,
			},
		})
			.then((response) => {
				alert('successful payment'); 
			})
			.catch((error) => {
				console.log('Payment Error: ', error.response);
				alert(
					'There was an issue with your payment! Please make sure you use the provided credit card.'
				);
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Storex"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/Zhf.svg"
			description={`Your total is ${price}`}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};


export default StripeCheckoutButton;


