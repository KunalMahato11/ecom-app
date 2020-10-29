import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './loginAndSignup.styles.scss';

const LoginAndSignup = () => (
	<div className="loginAndSignup">
		<SignIn />
		<SignUp />
	</div>
);

export default LoginAndSignup;
